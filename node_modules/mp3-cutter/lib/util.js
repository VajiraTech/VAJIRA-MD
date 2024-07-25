const fs = require('fs');
const path = require('path');

class Util {
    static getPackage() {
        try {
            return JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8'));
        } catch(err) {
            console.error(err);
        }
    }

    static getVersion() {
        return this.getPackage().version;
    }
}

module.exports = Util;