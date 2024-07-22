#!/usr/bin/env node
"use strict";
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const browsers_1 = require("@puppeteer/browsers");
const revisions_js_1 = require("puppeteer-core/internal/revisions.js");
const puppeteer_js_1 = __importDefault(require("../puppeteer.js"));
const cacheDir = puppeteer_js_1.default.configuration.cacheDirectory;
void new browsers_1.CLI({
    cachePath: cacheDir,
    scriptName: 'puppeteer',
    prefixCommand: {
        cmd: 'browsers',
        description: 'Manage browsers of this Puppeteer installation',
    },
    allowCachePathOverride: false,
    pinnedBrowsers: {
        [browsers_1.Browser.CHROME]: puppeteer_js_1.default.configuration.browserRevision ||
            revisions_js_1.PUPPETEER_REVISIONS['chrome'] ||
            'latest',
        [browsers_1.Browser.FIREFOX]: puppeteer_js_1.default.configuration.browserRevision ||
            revisions_js_1.PUPPETEER_REVISIONS['firefox'] ||
            'latest',
        [browsers_1.Browser.CHROMEHEADLESSSHELL]: puppeteer_js_1.default.configuration.browserRevision ||
            revisions_js_1.PUPPETEER_REVISIONS['chrome-headless-shell'] ||
            'latest',
    },
}).run(process.argv);
//# sourceMappingURL=cli.js.map