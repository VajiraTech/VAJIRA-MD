import { escape } from './Text.js';
import Thumbnail from './Thumbnail.js';
class EmojiRun {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f;
        this.text =
            ((_a = data.emoji) === null || _a === void 0 ? void 0 : _a.emojiId) ||
                ((_c = (_b = data.emoji) === null || _b === void 0 ? void 0 : _b.shortcuts) === null || _c === void 0 ? void 0 : _c[0]) ||
                '';
        this.emoji = {
            emoji_id: data.emoji.emojiId,
            shortcuts: ((_d = data.emoji) === null || _d === void 0 ? void 0 : _d.shortcuts) || [],
            search_terms: ((_e = data.emoji) === null || _e === void 0 ? void 0 : _e.searchTerms) || [],
            image: Thumbnail.fromResponse(data.emoji.image),
            is_custom: !!((_f = data.emoji) === null || _f === void 0 ? void 0 : _f.isCustomEmoji)
        };
    }
    toString() {
        return this.text;
    }
    toHTML() {
        const escaped_text = escape(this.text);
        return `<img src="${this.emoji.image[0].url}" alt="${escaped_text}" title="${escaped_text}" style="display: inline-block; vertical-align: text-top; height: var(--yt-emoji-size, 1rem); width: var(--yt-emoji-size, 1rem);" loading="lazy" crossorigin="anonymous" />`;
    }
}
export default EmojiRun;
//# sourceMappingURL=EmojiRun.js.map