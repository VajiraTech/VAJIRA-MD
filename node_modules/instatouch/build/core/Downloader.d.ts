/// <reference types="node" />
import { MultipleBar } from '../helpers';
import { DownloaderConstructor, PostCollector, ZipValues } from '../types';
export declare class Downloader {
    progress: boolean;
    mbars: MultipleBar;
    progressBar: any[];
    private proxy;
    userAgent: string;
    filepath: string;
    bulk: boolean;
    constructor({ progress, proxy, userAgent, filepath, bulk }: DownloaderConstructor);
    private get getProxy();
    addBar(len: number): any[];
    toBuffer(item: PostCollector): Promise<Buffer>;
    downloadPosts({ zip, folder, collector, fileName, asyncDownload }: ZipValues): Promise<unknown>;
}
