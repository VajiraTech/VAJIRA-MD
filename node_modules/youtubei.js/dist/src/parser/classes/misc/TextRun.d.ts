import NavigationEndpoint from '../NavigationEndpoint.js';
import { Run } from './Text.js';
import type { RawNode } from '../../index.js';
declare class TextRun implements Run {
    text: string;
    endpoint: NavigationEndpoint | undefined;
    bold: boolean;
    italics: boolean;
    strikethrough: boolean;
    attachment: any;
    constructor(data: RawNode);
    toString(): string;
    toHTML(): string;
}
export default TextRun;
