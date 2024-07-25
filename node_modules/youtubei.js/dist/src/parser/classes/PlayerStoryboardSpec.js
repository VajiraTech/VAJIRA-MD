import { YTNode } from '../helpers.js';
class PlayerStoryboardSpec extends YTNode {
    constructor(data) {
        super();
        const parts = data.spec.split('|');
        const url = new URL(parts.shift());
        this.boards = parts.map((part, i) => {
            const [thumbnail_width, thumbnail_height, thumbnail_count, columns, rows, interval, name, sigh] = part.split('#');
            url.searchParams.set('sigh', sigh);
            const storyboard_count = Math.ceil(parseInt(thumbnail_count, 10) / (parseInt(columns, 10) * parseInt(rows, 10)));
            return {
                template_url: url.toString().replace('$L', i).replace('$N', name),
                thumbnail_width: parseInt(thumbnail_width, 10),
                thumbnail_height: parseInt(thumbnail_height, 10),
                thumbnail_count: parseInt(thumbnail_count, 10),
                interval: parseInt(interval, 10),
                columns: parseInt(columns, 10),
                rows: parseInt(rows, 10),
                storyboard_count
            };
        });
    }
}
PlayerStoryboardSpec.type = 'PlayerStoryboardSpec';
export default PlayerStoryboardSpec;
//# sourceMappingURL=PlayerStoryboardSpec.js.map