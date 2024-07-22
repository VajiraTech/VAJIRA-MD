import Text from './misc/Text.js';
import PlaylistPanelVideo from './PlaylistPanelVideo.js';
import { YTNode } from '../helpers.js';
import AutomixPreviewVideo from './AutomixPreviewVideo.js';
import PlaylistPanelVideoWrapper from './PlaylistPanelVideoWrapper.js';
declare class PlaylistPanel extends YTNode {
    static type: string;
    title: string;
    title_text: Text;
    contents: import("../helpers.js").ObservedArray<AutomixPreviewVideo | PlaylistPanelVideo | PlaylistPanelVideoWrapper>;
    playlist_id: string;
    is_infinite: boolean;
    continuation: string;
    is_editable: boolean;
    preview_description: string;
    num_items_to_show: string;
    constructor(data: any);
}
export default PlaylistPanel;
