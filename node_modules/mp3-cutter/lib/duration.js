const fs = require('fs');

const versions = ['2.5', 'x', '2', '1'],
      layers = ['x', '3', '2', '1'],
      bitRates = {
        V1L1: [0,32,64,96,128,160,192,224,256,288,320,352,384,416,448],
        V1L2: [0,32,48,56, 64, 80, 96,112,128,160,192,224,256,320,384],
        V1L3: [0,32,40,48, 56, 64, 80, 96,112,128,160,192,224,256,320],
        V2L1: [0,32,48,56, 64, 80, 96,112,128,144,160,176,192,224,256],
        V2L2: [0, 8,16,24, 32, 40, 48, 56, 64, 80, 96,112,128,144,160],
        V2L3: [0, 8,16,24, 32, 40, 48, 56, 64, 80, 96,112,128,144,160],
        V1Lx: [0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        V2Lx: [0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        VxLx: [0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        VxL1: [0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        VxL2: [0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        VxL3: [0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
      },
      sampleRates = {
        'x':   [    0,    0,    0],
        '1'  : [44100,48000,32000],
        '2'  : [22050,24000,16000],
        '2.5': [11025,12000, 8000]
      },
      samples = {
        '1': {
            'x':   0,
            '1': 384,
            '2':1152,
            '3':1152
        },
        '2': {
            'x':   0,
            '1': 384,
            '2':1152,
            '3': 576
        },
        'x': {
            'x':0,
            '1':0,
            '2':0,
            '3':0
        }
      };

class Duration {
    /**
     * Returns the duration of an mp3 file.
     * 
     * @param {String} filename 
     * @returns {{duration:Number, offset:Number}}
     */
    static getDuration(filename) {
        var fd = fs.openSync(filename, 'r'),
            buffer = Buffer.alloc(100),
            block = fs.readSync(fd, buffer, 0, 100, 0),
            stat = fs.statSync(filename),
            duration = 0,
            _offset = 0;

        try {
            calculateDuration: {
                if(block < 100) {
                    break calculateDuration;
                }

                var offset = _offset = this.skipID3v2Tag(buffer);
                while(offset < stat.size) {
                    block = fs.readSync(fd, buffer, 0, 10, offset);
          
                    if(block < 10) {
                        break calculateDuration;
                    } else if(buffer[0] == 255 && (buffer[1] & 224) == 224) {
                        var info = this.parseFrameHeader(buffer);
            
                        if(!info.frameSize || isNaN(info.frameSize) || !info.samples || isNaN(info.samples)) {
                            offset += 1;
                        } else {
                            offset += info.frameSize;
                            duration += (info.samples / info.sampleRate);
                        }
                    } else if (buffer[0] === 84 && buffer[1] === 65 && buffer[2] === 71) { // 'TAG'
                        offset += 128;
                    } else {
                        offset += 1;
                    }
                  }
            }
        } catch(e) {
            console.error(e);
        } finally {
            fs.closeSync(fd);
        }

        return {duration:parseFloat(duration.toFixed(2)), offset:_offset};            
    }

    /**
     * http://id3.org/ID3v2Easy
     * 
     * @param {Buffer} buffer 
     * @returns {Number}
     */
    static skipID3v2Tag(buffer) {
      if(buffer[0] == 73 && buffer[1] == 68 && buffer[2] == 51) { // ID3
        var z0 = buffer[6],
            z1 = buffer[7],
            z2 = buffer[8],
            z3 = buffer[9];

        if((z0 & 128) == 0 && (z1 & 128) == 0 && (z2 & 128) == 0 && (z3 & 128) == 0) {
            var headerSize = 10,
                tagSize = ((z0 & 127) * 2097152) + ((z1 & 127) * 16384) + ((z2 & 128) * 128) + (z3 & 128),
                footerSize = (buffer[5] & 16) ? 10 : 0;
            return headerSize + tagSize + footerSize;
        }
      }

      return 0;      
    }

    /**
     * Parses the frame header of a buffer.
     * 
     * @param {Buffer} buffer 
     * @returns {sampleRate:Number, samples:Object, frameSize:Number}
     */
    static parseFrameHeader(buffer) {
      var b1 = buffer[1],
          b2 = buffer[2],
          versionBits = (b1 & 24) >> 3,
          version = versions[versionBits],
          simpleVersion = (version == '2.5') ? 2 : version,
          layerBits = (b1 & 6) >> 1,
          layer = layers[layerBits],
          bitRateKey = `V${simpleVersion}L${layer}`,
          bitRateIdx = (b2 & 240) >> 4,
          bitRate = bitRates[bitRateKey][bitRateIdx] || 0,
          sampleRateIdx = (b2 & 12) >> 2,
          sampleRate = sampleRates[version][sampleRateIdx] || 0,
          $samples = samples[simpleVersion][layer],
          paddingBit = (b2 & 2) >> 1,
          frameSize = this.getFrameSize(layer, bitRate, sampleRate, paddingBit);
          
      return {
          sampleRate,
          samples: $samples,
          frameSize
      };
    }

    /**
     * Returns the frame size.
     * 
     * @param {String} layer 
     * @param {Number} bitRate 
     * @param {Number} sampleRate 
     * @param {Number} paddingBit 
     * @returns {Number}
     */
    static getFrameSize(layer, bitRate, sampleRate, paddingBit) {
      if(layer == 1) {
        return parseInt(((12 * bitRate * 1000 / sampleRate) + paddingBit) * 4);
      } else {
        return parseInt(((144 * bitRate * 1000) / sampleRate) + paddingBit);
      }
    }
}

module.exports = Duration;