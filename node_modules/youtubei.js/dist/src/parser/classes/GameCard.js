import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class GameCard extends YTNode {
    constructor(data) {
        super();
        this.game = Parser.parseItem(data.game);
    }
}
GameCard.type = 'GameCard';
export default GameCard;
//# sourceMappingURL=GameCard.js.map