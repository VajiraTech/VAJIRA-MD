var _Settings_page, _Settings_actions;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import Parser from '../index.js';
import { InnertubeError } from '../../utils/Utils.js';
import CompactLink from '../classes/CompactLink.js';
import ItemSection from '../classes/ItemSection.js';
import PageIntroduction from '../classes/PageIntroduction.js';
import SectionList from '../classes/SectionList.js';
import SettingsOptions from '../classes/SettingsOptions.js';
import SettingsSidebar from '../classes/SettingsSidebar.js';
import SettingsSwitch from '../classes/SettingsSwitch.js';
import Tab from '../classes/Tab.js';
import TwoColumnBrowseResults from '../classes/TwoColumnBrowseResults.js';
class Settings {
    constructor(actions, response) {
        var _a, _b, _c, _d;
        _Settings_page.set(this, void 0);
        _Settings_actions.set(this, void 0);
        __classPrivateFieldSet(this, _Settings_actions, actions, "f");
        __classPrivateFieldSet(this, _Settings_page, Parser.parseResponse(response.data), "f");
        this.sidebar = (_a = __classPrivateFieldGet(this, _Settings_page, "f").sidebar) === null || _a === void 0 ? void 0 : _a.as(SettingsSidebar);
        if (!__classPrivateFieldGet(this, _Settings_page, "f").contents)
            throw new InnertubeError('Page contents not found');
        const tab = __classPrivateFieldGet(this, _Settings_page, "f").contents.item().as(TwoColumnBrowseResults).tabs.array().as(Tab).get({ selected: true });
        if (!tab)
            throw new InnertubeError('Target tab not found');
        const contents = (_b = tab.content) === null || _b === void 0 ? void 0 : _b.as(SectionList).contents.as(ItemSection);
        this.introduction = (_d = (_c = contents === null || contents === void 0 ? void 0 : contents.shift()) === null || _c === void 0 ? void 0 : _c.contents) === null || _d === void 0 ? void 0 : _d.firstOfType(PageIntroduction);
        this.sections = contents === null || contents === void 0 ? void 0 : contents.map((el) => {
            var _a;
            return ({
                title: ((_a = el.header) === null || _a === void 0 ? void 0 : _a.title.toString()) || null,
                contents: el.contents
            });
        });
    }
    /**
     * Selects an item from the sidebar menu. Use {@link sidebar_items} to see available items.
     */
    selectSidebarItem(target_item) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.sidebar)
                throw new InnertubeError('Sidebar not available');
            let item;
            if (typeof target_item === 'string') {
                item = this.sidebar.items.get({ title: target_item });
                if (!item)
                    throw new InnertubeError(`Item "${target_item}" not found`, { available_items: this.sidebar_items });
            }
            else if (target_item === null || target_item === void 0 ? void 0 : target_item.is(CompactLink)) {
                item = target_item;
            }
            else {
                throw new InnertubeError('Invalid item', { target_item });
            }
            const response = yield item.endpoint.call(__classPrivateFieldGet(this, _Settings_actions, "f"), { parse: false });
            return new Settings(__classPrivateFieldGet(this, _Settings_actions, "f"), response);
        });
    }
    /**
     * Finds a setting by name and returns it. Use {@link setting_options} to see available options.
     */
    getSettingOption(name) {
        var _a;
        if (!this.sections)
            throw new InnertubeError('Sections not available');
        for (const section of this.sections) {
            if (!section.contents)
                continue;
            for (const el of section.contents) {
                const options = el.as(SettingsOptions).options;
                if (options) {
                    for (const option of options) {
                        if (option.is(SettingsSwitch) &&
                            ((_a = option.title) === null || _a === void 0 ? void 0 : _a.toString()) === name)
                            return option;
                    }
                }
            }
        }
        throw new InnertubeError(`Option "${name}" not found`, { available_options: this.setting_options });
    }
    /**
     * Returns settings available in the page.
     */
    get setting_options() {
        if (!this.sections)
            throw new InnertubeError('Sections not available');
        let options = [];
        for (const section of this.sections) {
            if (!section.contents)
                continue;
            for (const el of section.contents) {
                if (el.as(SettingsOptions).options)
                    options = options.concat(el.as(SettingsOptions).options);
            }
        }
        return options.map((opt) => { var _a; return (_a = opt.title) === null || _a === void 0 ? void 0 : _a.toString(); }).filter((el) => el);
    }
    /**
     * Returns options available in the sidebar.
     */
    get sidebar_items() {
        if (!this.sidebar)
            throw new InnertubeError('Sidebar not available');
        return this.sidebar.items.map((item) => item.title.toString());
    }
    get page() {
        return __classPrivateFieldGet(this, _Settings_page, "f");
    }
}
_Settings_page = new WeakMap(), _Settings_actions = new WeakMap();
export default Settings;
//# sourceMappingURL=Settings.js.map