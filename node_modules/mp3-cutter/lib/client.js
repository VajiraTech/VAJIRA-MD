const Util = require('./util');
const MP3Cutter = require('./cutter');

let arg = process.argv[2];
if(arg == '-v') {
    return console.log(`v${Util.getVersion()}`);
}

const params = {
    src: null,
    target: null,
    start: 0,
    end: 0
};

for(let i=2; i<process.argv.length; i++) {
    let arg = (process.argv[i] || '').replace(/-/g, '');
    if(typeof params[arg] !== 'undefined') {
        params[arg] = process.argv[i+1];
    }
}

try {
    if(!params.src) {
        throw 'Invalid source.';
    }

    if(!params.target) {
        throw 'Invalid target.';
    }

    if(isNaN((params.start = parseFloat(params.start)))) {
        throw 'Invalid start.';
    }

    if(isNaN((params.end = parseFloat(params.end)))) {
        throw 'Invalid end.';
    }

    MP3Cutter.cut(params);
} catch(err) {
    console.error(`\x1b[31m${err}\x1b[0m`);
    process.exit(-1);
}