export declare const URLS: Readonly<{
    YT_BASE: "https://www.youtube.com";
    YT_MUSIC_BASE: "https://music.youtube.com";
    YT_SUGGESTIONS: "https://suggestqueries.google.com/complete/";
    YT_UPLOAD: "https://upload.youtube.com/";
    API: Readonly<{
        BASE: "https://youtubei.googleapis.com";
        PRODUCTION_1: "https://www.youtube.com/youtubei/";
        PRODUCTION_2: "https://youtubei.googleapis.com/youtubei/";
        STAGING: "https://green-youtubei.sandbox.googleapis.com/youtubei/";
        RELEASE: "https://release-youtubei.sandbox.googleapis.com/youtubei/";
        TEST: "https://test-youtubei.sandbox.googleapis.com/youtubei/";
        CAMI: "http://cami-youtubei.sandbox.googleapis.com/youtubei/";
        UYTFE: "https://uytfe.sandbox.google.com/youtubei/";
    }>;
}>;
export declare const OAUTH: Readonly<{
    SCOPE: "http://gdata.youtube.com https://www.googleapis.com/auth/youtube-paid-content";
    GRANT_TYPE: "http://oauth.net/grant_type/device/1.0";
    MODEL_NAME: "ytlr::";
    HEADERS: Readonly<{
        accept: "*/*";
        origin: "https://www.youtube.com";
        'user-agent': "Mozilla/5.0 (ChromiumStylePlatform) Cobalt/Version";
        'content-type': "application/json";
        referer: "https://www.youtube.com/tv";
        'accept-language': "en-US";
    }>;
    REGEX: Readonly<{
        AUTH_SCRIPT: RegExp;
        CLIENT_IDENTITY: RegExp;
    }>;
}>;
export declare const CLIENTS: Readonly<{
    WEB: {
        NAME: string;
        VERSION: string;
        API_KEY: string;
        API_VERSION: string;
        STATIC_VISITOR_ID: string;
    };
    WEB_KIDS: {
        NAME: string;
        VERSION: string;
    };
    YTMUSIC: {
        NAME: string;
        VERSION: string;
    };
    ANDROID: {
        NAME: string;
        VERSION: string;
        SDK_VERSION: string;
        USER_AGENT: string;
    };
    YTSTUDIO_ANDROID: {
        NAME: string;
        VERSION: string;
    };
    YTMUSIC_ANDROID: {
        NAME: string;
        VERSION: string;
    };
    TV_EMBEDDED: {
        NAME: string;
        VERSION: string;
    };
}>;
export declare const STREAM_HEADERS: Readonly<{
    accept: "*/*";
    origin: "https://www.youtube.com";
    referer: "https://www.youtube.com";
    DNT: "?1";
}>;
export declare const INNERTUBE_HEADERS_BASE: Readonly<{
    accept: "*/*";
    'accept-encoding': "gzip, deflate";
    'content-type': "application/json";
}>;
declare const _default: {
    URLS: Readonly<{
        YT_BASE: "https://www.youtube.com";
        YT_MUSIC_BASE: "https://music.youtube.com";
        YT_SUGGESTIONS: "https://suggestqueries.google.com/complete/";
        YT_UPLOAD: "https://upload.youtube.com/";
        API: Readonly<{
            BASE: "https://youtubei.googleapis.com";
            PRODUCTION_1: "https://www.youtube.com/youtubei/";
            PRODUCTION_2: "https://youtubei.googleapis.com/youtubei/";
            STAGING: "https://green-youtubei.sandbox.googleapis.com/youtubei/";
            RELEASE: "https://release-youtubei.sandbox.googleapis.com/youtubei/";
            TEST: "https://test-youtubei.sandbox.googleapis.com/youtubei/";
            CAMI: "http://cami-youtubei.sandbox.googleapis.com/youtubei/";
            UYTFE: "https://uytfe.sandbox.google.com/youtubei/";
        }>;
    }>;
    OAUTH: Readonly<{
        SCOPE: "http://gdata.youtube.com https://www.googleapis.com/auth/youtube-paid-content";
        GRANT_TYPE: "http://oauth.net/grant_type/device/1.0";
        MODEL_NAME: "ytlr::";
        HEADERS: Readonly<{
            accept: "*/*";
            origin: "https://www.youtube.com";
            'user-agent': "Mozilla/5.0 (ChromiumStylePlatform) Cobalt/Version";
            'content-type': "application/json";
            referer: "https://www.youtube.com/tv";
            'accept-language': "en-US";
        }>;
        REGEX: Readonly<{
            AUTH_SCRIPT: RegExp;
            CLIENT_IDENTITY: RegExp;
        }>;
    }>;
    CLIENTS: Readonly<{
        WEB: {
            NAME: string;
            VERSION: string;
            API_KEY: string;
            API_VERSION: string;
            STATIC_VISITOR_ID: string;
        };
        WEB_KIDS: {
            NAME: string;
            VERSION: string;
        };
        YTMUSIC: {
            NAME: string;
            VERSION: string;
        };
        ANDROID: {
            NAME: string;
            VERSION: string;
            SDK_VERSION: string;
            USER_AGENT: string;
        };
        YTSTUDIO_ANDROID: {
            NAME: string;
            VERSION: string;
        };
        YTMUSIC_ANDROID: {
            NAME: string;
            VERSION: string;
        };
        TV_EMBEDDED: {
            NAME: string;
            VERSION: string;
        };
    }>;
    STREAM_HEADERS: Readonly<{
        accept: "*/*";
        origin: "https://www.youtube.com";
        referer: "https://www.youtube.com";
        DNT: "?1";
    }>;
    INNERTUBE_HEADERS_BASE: Readonly<{
        accept: "*/*";
        'accept-encoding': "gzip, deflate";
        'content-type': "application/json";
    }>;
};
export default _default;
