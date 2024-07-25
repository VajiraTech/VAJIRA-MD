import Text from './misc/Text.js';
import Dropdown from './Dropdown.js';
import SettingsSwitch from './SettingsSwitch.js';
import SettingsCheckbox from './SettingsCheckbox.js';
import ChannelOptions from './ChannelOptions.js';
import CopyLink from './CopyLink.js';
import { YTNode } from '../helpers.js';
declare class SettingsOptions extends YTNode {
    static type: string;
    title: Text;
    text?: string;
    options?: import("../helpers.js").ObservedArray<Dropdown | ChannelOptions | CopyLink | SettingsCheckbox | SettingsSwitch> | undefined;
    constructor(data: any);
}
export default SettingsOptions;
