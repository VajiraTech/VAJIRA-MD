import CompactLink from '../classes/CompactLink.js';
import PageIntroduction from '../classes/PageIntroduction.js';
import SettingsSidebar from '../classes/SettingsSidebar.js';
import SettingsSwitch from '../classes/SettingsSwitch.js';
import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import type { IBrowseResponse } from '../types/ParsedResponse.js';
declare class Settings {
    #private;
    sidebar?: SettingsSidebar;
    introduction?: PageIntroduction;
    sections: {
        title: string | null;
        contents: import("../helpers.js").ObservedArray<import("../helpers.js").YTNode> | null;
    }[] | undefined;
    constructor(actions: Actions, response: ApiResponse);
    /**
     * Selects an item from the sidebar menu. Use {@link sidebar_items} to see available items.
     */
    selectSidebarItem(target_item: string | CompactLink): Promise<Settings>;
    /**
     * Finds a setting by name and returns it. Use {@link setting_options} to see available options.
     */
    getSettingOption(name: string): SettingsSwitch;
    /**
     * Returns settings available in the page.
     */
    get setting_options(): string[];
    /**
     * Returns options available in the sidebar.
     */
    get sidebar_items(): string[];
    get page(): IBrowseResponse;
}
export default Settings;
