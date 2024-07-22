import Text from './misc/Text.js';
import Author from './misc/Author.js';
import Menu from './menus/Menu.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import MetadataBadge from './MetadataBadge.js';
import ExpandableMetadata from './ExpandableMetadata.js';
import { YTNode } from '../helpers.js';
declare class Video extends YTNode {
    static type: string;
    id: string;
    title: Text;
    description_snippet: Text | null;
    snippets: {
        text: Text;
        hover_text: Text;
    }[];
    expandable_metadata: ExpandableMetadata | null;
    thumbnails: Thumbnail[];
    thumbnail_overlays: import("../helpers.js").ObservedArray<YTNode>;
    rich_thumbnail: YTNode | null;
    author: Author;
    badges: MetadataBadge[];
    endpoint: NavigationEndpoint;
    published: Text;
    view_count: Text;
    short_view_count: Text;
    upcoming: Date | undefined;
    duration: {
        text: string;
        seconds: number;
    };
    show_action_menu: boolean;
    is_watched: boolean;
    menu: Menu | null;
    search_video_result_entity_key: string;
    constructor(data: any);
    get description(): string;
    get is_live(): boolean;
    get is_upcoming(): boolean | undefined;
    get is_premiere(): boolean;
    get is_4k(): boolean;
    get has_captions(): boolean;
    get best_thumbnail(): Thumbnail | undefined;
}
export default Video;
