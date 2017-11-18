const loaded = {};

class Strings {
    constructor(language = 'english') {
        this.strings = loaded[language];
    }
    get(key) {
        return this.strings[key];
    }

    getCreature(key) {
        return this.strings['creature.' + key];
    }

    getItem(key) {
        return this.strings['key.item.' + key];
    }
}

module.exports.load = function (language = 'english') {
    if (!loaded[language]) {
        loaded[language] = require(`./languages/generated.${language}`);
    }
    return new Strings(language);
};