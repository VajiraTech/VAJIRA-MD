"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const fs_1 = require("fs");
const bluebird_1 = require("bluebird");
const async_1 = require("async");
const core_1 = require("./core");
const constant_1 = __importDefault(require("./constant"));
const INIT_OPTIONS = {
    id: '',
    count: 50,
    download: false,
    asyncDownload: 5,
    mediaType: 'all',
    proxy: [],
    session: [],
    filepath: process.cwd(),
    filetype: 'na',
    progress: false,
    userAgent: constant_1.default.userAgent,
    queryHash: '',
    url: '',
    cli: false,
    timeout: 0,
    endCursor: '',
    zip: false,
    bulk: true,
    headers: {},
};
const proxyFromFile = async (file) => {
    try {
        const data = (await bluebird_1.fromCallback((cb) => fs_1.readFile(file, { encoding: 'utf-8' }, cb)));
        const proxyList = data.split('\n');
        if (!proxyList.length) {
            throw new Error('Proxy file is empty');
        }
        return proxyList;
    }
    catch (error) {
        throw error.message;
    }
};
const validateFullProfileUrl = (constructor, input) => {
    if (!/^https:\/\/www.instagram.com\/[\w.+]+\/?$/.test(input)) {
        if (/instagram.com\/(p|reel)\//.test(input)) {
            constructor.url = `https://www.instagram.com/${input.split(/instagram.com\/(p|reel)\//)[1].split('/')[1]}/?__a=1&__d=dis`;
        }
        else {
            constructor.url = `https://www.instagram.com/${input}/?__a=1&__d=dis`;
        }
    }
    else {
        constructor.url = `${input}?__a=1&__d=dis`;
        constructor.input = input.split('instagram.com/')[1].split('/')[0];
    }
};
const validatePostUrl = (constructor, input) => {
    if (!/(https?:\/\/(www\.)?)?instagram\.com(\/(p|reel)\/[\w-]+\/?)/.test(input)) {
        if (/instagram.com\/(p|reel)\//.test(input)) {
            constructor.url = `https://www.instagram.com/p/${input.split(/instagram.com\/(p|reel)\//)[1].split('/')[1]}/?__a=1&__d=dis`;
        }
        else {
            constructor.url = `https://www.instagram.com/p/${input}/?__a=1&__d=dis`;
        }
    }
    else {
        constructor.url = `${input}?__a=1&__d=dis`;
        constructor.input = input.split(/instagram.com\/(p|reel)\//)[2].split('/')[0];
    }
};
const promiseScraper = async (input, type, options) => {
    if (options && typeof options !== 'object') {
        throw new TypeError('Object is expected');
    }
    const constructor = Object.assign(Object.assign(Object.assign({}, INIT_OPTIONS), options), { scrapeType: type, input });
    switch (type) {
        case 'user':
        case 'stories':
            validateFullProfileUrl(constructor, input);
            break;
        case 'hashtag':
            constructor.url = `https://www.instagram.com/explore/tags/${input}/?__a=1&__d=dis`;
            break;
        case 'location':
            constructor.url = `https://www.instagram.com/explore/locations/${input}/?__a=1&__d=dis`;
            break;
        case 'comments':
        case 'likers':
            validatePostUrl(constructor, input);
            break;
        case 'followers':
        case 'following':
            options.session = options.session && [options.session];
            validateFullProfileUrl(constructor, input);
            break;
        default:
            break;
    }
    const scraper = new core_1.InstaTouch(constructor);
    const result = await scraper.startScraper();
    return result;
};
exports.user = async (input, options) => promiseScraper(input, 'user', options);
exports.hashtag = async (input, options) => promiseScraper(input, 'hashtag', options);
exports.location = async (input, options) => promiseScraper(input, 'location', options);
exports.comments = async (input, options) => promiseScraper(input, 'comments', options);
exports.likers = async (input, options) => promiseScraper(input, 'likers', options);
exports.followers = async (input, options) => promiseScraper(input, 'followers', options);
exports.following = async (input, options) => promiseScraper(input, 'following', options);
exports.getUserMeta = async (input, options) => {
    if (options && typeof options !== 'object') {
        throw new TypeError('Object is expected');
    }
    const constructor = Object.assign(Object.assign(Object.assign({}, INIT_OPTIONS), options), { scrapeType: 'user_meta', input });
    const scraper = new core_1.InstaTouch(constructor);
    validateFullProfileUrl(constructor, input);
    const result = await scraper.getUserMeta(constructor.url);
    return result;
};
exports.getPostMeta = async (input, options) => {
    if (options && typeof options !== 'object') {
        throw new TypeError('Object is expected');
    }
    const constructor = Object.assign(Object.assign(Object.assign({}, INIT_OPTIONS), options), { scrapeType: 'post_meta', input });
    validatePostUrl(constructor, input);
    const scraper = new core_1.InstaTouch(constructor);
    const result = await scraper.getPostMeta(constructor.url);
    return result;
};
exports.getStories = async (input, options) => {
    if (options && typeof options !== 'object') {
        throw new TypeError('Object is expected');
    }
    const constructor = Object.assign(Object.assign(Object.assign({}, INIT_OPTIONS), options), { scrapeType: 'post_meta', input });
    validateFullProfileUrl(constructor, input);
    const scraper = new core_1.InstaTouch(constructor);
    const userMeta = await scraper.getUserMeta(constructor.url);
    const result = await scraper.getStories(userMeta.graphql.user.id);
    return Object.assign(Object.assign({}, result), { id: userMeta.graphql.user.id });
};
exports.getUserReels = async (input, options) => {
    if (options && typeof options !== 'object') {
        throw new TypeError('Object is expected');
    }
    const constructor = Object.assign(Object.assign(Object.assign({}, INIT_OPTIONS), options), { scrapeType: 'post_meta', input });
    validateFullProfileUrl(constructor, input);
    const scraper = new core_1.InstaTouch(constructor);
    const userMeta = await scraper.getUserMeta(constructor.url);
    const result = await scraper.getUserReels(userMeta.graphql.user.id, constructor.count, constructor.endCursor);
    return result;
};
exports.history = async (input, options) => {
    let store;
    const historyPath = process.env.SCRAPING_FROM_DOCKER ? '/usr/app/files' : (options === null || options === void 0 ? void 0 : options.historyPath) || os_1.tmpdir();
    try {
        store = (await bluebird_1.fromCallback((cb) => fs_1.readFile(`${historyPath}/ig_history.json`, { encoding: 'utf-8' }, cb)));
    }
    catch (error) {
        throw `History file doesn't exist`;
    }
    const historyStore = JSON.parse(store);
    if (options === null || options === void 0 ? void 0 : options.remove) {
        const split = options.remove.split(':');
        const type = split[0];
        if (type === 'all') {
            const remove = [];
            for (const key of Object.keys(historyStore)) {
                remove.push(bluebird_1.fromCallback((cb) => fs_1.unlink(historyStore[key].file_location, cb)));
            }
            remove.push(bluebird_1.fromCallback((cb) => fs_1.unlink(`${historyPath}/ig_history.json`, cb)));
            await Promise.all(remove);
            return { message: `History was completely removed` };
        }
        const key = type !== 'trend' ? options.remove.replace(':', '_') : 'trend';
        if (historyStore[key]) {
            const historyFile = historyStore[key].file_location;
            await bluebird_1.fromCallback((cb) => fs_1.unlink(historyFile, cb));
            delete historyStore[key];
            await bluebird_1.fromCallback((cb) => fs_1.writeFile(`${historyPath}/ig_history.json`, JSON.stringify(historyStore), cb));
            return { message: `Record ${key} was removed` };
        }
        throw `Can't find record: ${key.split('_').join(' ')}`;
    }
    const table = [];
    for (const key of Object.keys(historyStore)) {
        table.push(historyStore[key]);
    }
    return { table };
};
const batchProcessor = (batch, options) => {
    return new Promise((resolve) => {
        console.log('Instagram Bulk Scraping Started');
        const result = [];
        async_1.forEachLimit(batch, options.asyncBulk || 5, async (item) => {
            switch (item.scrapeType) {
                case 'user':
                    try {
                        const output = await exports.user(item.input, Object.assign({ bulk: true }, options));
                        result.push({ type: item.scrapeType, input: item.input, completed: true, scraped: output.collector.length });
                        console.log(`Scraping completed: ${item.scrapeType} ${item.input}`);
                    }
                    catch (error) {
                        result.push({ type: item.scrapeType, input: item.input, completed: false });
                        console.log(`Error while scraping: ${item.input}`);
                    }
                    break;
                case 'hashtag':
                    try {
                        const output = await exports.hashtag(item.input, Object.assign({ bulk: true }, options));
                        result.push({ type: item.scrapeType, input: item.input, completed: true, scraped: output.collector.length });
                        console.log(`Scraping completed: ${item.scrapeType} ${item.input}`);
                    }
                    catch (error) {
                        result.push({ type: item.scrapeType, input: item.input, completed: false });
                        console.log(`Error while scraping: ${item.input}`);
                    }
                    break;
                case 'location':
                    try {
                        const output = await exports.location(item.input, Object.assign({ bulk: true }, options));
                        result.push({ type: item.scrapeType, input: item.input, completed: true, scraped: output.collector.length });
                        console.log(`Scraping completed: ${item.scrapeType} ${item.input}`);
                    }
                    catch (error) {
                        result.push({ type: item.scrapeType, input: item.input, completed: false });
                        console.log(`Error while scraping: ${item.input}`);
                    }
                    break;
                case 'comments':
                    try {
                        const output = await exports.comments(item.input, Object.assign({ bulk: true }, options));
                        result.push({ type: item.scrapeType, input: item.input, completed: true, scraped: output.collector.length });
                        console.log(`Scraping completed: ${item.scrapeType} ${item.input}`);
                    }
                    catch (error) {
                        result.push({ type: item.scrapeType, input: item.input, completed: false });
                        console.log(`Error while scraping: ${item.input}`);
                    }
                    break;
                case 'likers':
                    try {
                        const output = await exports.likers(item.input, Object.assign({ bulk: true }, options));
                        result.push({ type: item.scrapeType, input: item.input, completed: true, scraped: output.collector.length });
                        console.log(`Scraping completed: ${item.scrapeType} ${item.input}`);
                    }
                    catch (error) {
                        result.push({ type: item.scrapeType, input: item.input, completed: false });
                        console.log(`Error while scraping: ${item.input}`);
                    }
                    break;
                default:
                    break;
            }
        }, () => {
            resolve(result);
        });
    });
};
exports.fromfile = async (input, options) => {
    let inputFile;
    try {
        inputFile = (await bluebird_1.fromCallback((cb) => fs_1.readFile(input, { encoding: 'utf-8' }, cb)));
    }
    catch (error) {
        throw `Can't find fle: ${input}`;
    }
    const batch = inputFile
        .split('\n')
        .filter((item) => item.indexOf('##') === -1 && item.length)
        .map((item) => {
        item = item.replace(/\s/g, '');
        if (item.indexOf('#') > -1) {
            return {
                scrapeType: 'hashtag',
                input: item.split('#')[1],
            };
        }
        if (item.indexOf('location|') > -1) {
            return {
                scrapeType: 'location',
                input: item.split('|')[1],
            };
        }
        if (item.indexOf('comments|') > -1) {
            return {
                scrapeType: 'comments',
                input: item.split('|')[1],
                by_user_id: true,
            };
        }
        if (item.indexOf('likers|') > -1) {
            return {
                scrapeType: 'likers',
                input: item.split('|')[1],
                by_user_id: true,
            };
        }
        return {
            scrapeType: 'user',
            input: item,
        };
    });
    if (!batch.length) {
        throw `File is empty: ${input}`;
    }
    if (options === null || options === void 0 ? void 0 : options.proxyFile) {
        options.proxy = await proxyFromFile(options === null || options === void 0 ? void 0 : options.proxyFile);
    }
    const result = await batchProcessor(batch, options);
    return { table: result };
};
