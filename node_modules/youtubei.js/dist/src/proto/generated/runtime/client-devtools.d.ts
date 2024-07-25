import type { RpcClientImpl } from "./rpc.js";
import { EventEmitter, Off } from "./async/event-emitter.js";
export declare const devtoolsKey = "@pbkit/devtools";
export declare function registerRemoteDevtools(host: string): Off;
export declare function getDevtoolsConfig(): DevtoolsConfig;
export interface DevtoolsConfig extends EventEmitter<Events> {
    configId: string;
    requestIdCounter: number;
}
export interface WrapRpcClientImplConfig<TMetadata, THeader, TTrailer> {
    rpcClientImpl: RpcClientImpl<TMetadata, THeader, TTrailer>;
    devtoolsConfig: DevtoolsConfig;
    tags: string[];
}
export declare function wrapRpcClientImpl<TMetadata, THeader, TTrailer>(config: WrapRpcClientImplConfig<TMetadata, THeader, TTrailer>): RpcClientImpl<TMetadata, THeader, TTrailer>;
export interface Events {
    "request": {
        configId: string;
        requestId: number;
        servicePath: string;
        rpcName: string;
        metadataJson: string;
        tags: string[];
    };
    "request-payload": {
        configId: string;
        requestId: number;
        payloadJson: string;
        payloadProto: Uint8Array;
    };
    "request-error": {
        configId: string;
        requestId: number;
        errorMessage: string;
    };
    "response": {
        configId: string;
        requestId: number;
        headerJson: string;
    };
    "response-payload": {
        configId: string;
        requestId: number;
        payloadJson: string;
        payloadProto: Uint8Array;
    };
    "response-error": {
        configId: string;
        requestId: number;
        errorMessage: string;
    };
    "response-trailer": {
        configId: string;
        requestId: number;
        trailerJson: string;
    };
}
