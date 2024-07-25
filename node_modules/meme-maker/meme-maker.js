let fs = require('fs')
let gm = require('gm')

module.exports = function(options, callback) {

  // Check if image option is set
  if(!('image' in options)) {
    return callback(new Error('options.image is required'), null)
  }

  fs.exists(options.image, (exists) => {

    // If file does not exist return error
    if(!exists) {
      return callback(new Error('File does not exist: ' + options.image), null)
    }

    // Check to see if output file is set
    if(!('outfile' in options)) {
      return callback(new Error('options.outfile is required'), null);
    }

    // Check if topText or bottomText is set
    if(!('topText' in options) && !('bottomText' in options)) {
      return callback(new Error('options.topText or options.bottomText is required'), null)
    }

    // Create new graphicsmagick instance
    let img = gm(options.image)

    // Set some defaults
    const TOP_TEXT = 'topText' in options ? options.topText : ''
    const BOTTOM_TEXT = 'bottomText' in options ? options.bottomText : ''
    const FONT = 'font' in options ? options.font : __dirname + '/impact.ttf'
    const FONT_SIZE = 'fontSize' in options ? options.fontSize : 50
    const FONT_FILL = 'fontFill' in options ? options.fontFill : '#FFF'
    const TEXT_POS = 'textPos' in options ? options.textPos : 'center'
    const STROKE_COLOR = 'strokeColor' in options ? options.strokeColor : '#000'
    const STROKE_WEIGHT = 'strokeWeight' in options ? options.strokeWeight : 2
    const PADDING = 'padding' in options ? options.padding : 40

    // Get the image size to calculate top and bottom text positions
    img.size(function(err, dimensions) {

      // Set text position for top and bottom
      const TOP_POS = Math.abs((dimensions.height / 2) - PADDING) * -1
      const BOTTOM_POS = (dimensions.height / 2) - PADDING

      // Write text on image using graphicsmagick
      img.font(FONT, FONT_SIZE)
         .fill(FONT_FILL)
         .stroke(STROKE_COLOR, STROKE_WEIGHT)
         .drawText(0, TOP_POS, TOP_TEXT, TEXT_POS)
         .drawText(0, BOTTOM_POS, BOTTOM_TEXT, TEXT_POS)
         .write(options.outfile, function(err) {
           if (err) return callback(new Error('Failed to save meme: ' + err), null)
           return callback(null)
         })
    })
  })
}
