import { CLIENTS } from '../utils/Constants.js';
import { base64ToU8, u8ToBase64 } from '../utils/Utils.js';
import * as VisitorData from './generated/messages/youtube/VisitorData.js';
import * as ChannelAnalytics from './generated/messages/youtube/ChannelAnalytics.js';
import * as SearchFilter from './generated/messages/youtube/SearchFilter.js';
import * as MusicSearchFilter from './generated/messages/youtube/MusicSearchFilter.js';
import * as LiveMessageParams from './generated/messages/youtube/LiveMessageParams.js';
import * as GetCommentsSectionParams from './generated/messages/youtube/GetCommentsSectionParams.js';
import * as CreateCommentParams from './generated/messages/youtube/CreateCommentParams.js';
import * as PeformCommentActionParams from './generated/messages/youtube/PeformCommentActionParams.js';
import * as NotificationPreferences from './generated/messages/youtube/NotificationPreferences.js';
import * as InnertubePayload from './generated/messages/youtube/InnertubePayload.js';
import * as Hashtag from './generated/messages/youtube/Hashtag.js';
class Proto {
    static encodeVisitorData(id, timestamp) {
        const buf = VisitorData.encodeBinary({ id, timestamp });
        return encodeURIComponent(u8ToBase64(buf).replace(/\+/g, '-').replace(/\//g, '_'));
    }
    static decodeVisitorData(visitor_data) {
        const data = VisitorData.decodeBinary(base64ToU8(decodeURIComponent(visitor_data)));
        return data;
    }
    static encodeChannelAnalyticsParams(channel_id) {
        const buf = ChannelAnalytics.encodeBinary({
            params: {
                channelId: channel_id
            }
        });
        return encodeURIComponent(u8ToBase64(buf));
    }
    static encodeSearchFilters(filters) {
        const upload_date = {
            all: undefined,
            hour: 1,
            today: 2,
            week: 3,
            month: 4,
            year: 5
        };
        const type = {
            all: undefined,
            video: 1,
            channel: 2,
            playlist: 3,
            movie: 4
        };
        const duration = {
            all: undefined,
            short: 1,
            long: 2,
            medium: 3
        };
        const order = {
            relevance: undefined,
            rating: 1,
            upload_date: 2,
            view_count: 3
        };
        const features = {
            hd: 'featuresHd',
            subtitles: 'featuresSubtitles',
            creative_commons: 'featuresCreativeCommons',
            '3d': 'features3D',
            live: 'featuresLive',
            purchased: 'featuresPurchased',
            '4k': 'features4K',
            '360': 'features360',
            location: 'featuresLocation',
            hdr: 'featuresHdr',
            vr180: 'featuresVr180'
        };
        const data = {};
        if (filters)
            data.filters = {};
        else
            data.noFilter = 0;
        if (data.filters) {
            if (filters.upload_date) {
                data.filters.uploadDate = upload_date[filters.upload_date];
            }
            if (filters.type) {
                data.filters.type = type[filters.type];
            }
            if (filters.duration) {
                data.filters.duration = duration[filters.duration];
            }
            if (filters.sort_by && filters.sort_by !== 'relevance') {
                data.sortBy = order[filters.sort_by];
            }
            if (filters.features) {
                for (const feature of filters.features) {
                    data.filters[features[feature]] = 1;
                }
            }
        }
        const buf = SearchFilter.encodeBinary(data);
        return encodeURIComponent(u8ToBase64(buf));
    }
    static encodeMusicSearchFilters(filters) {
        var _a;
        const data = {
            filters: {
                type: {}
            }
        };
        // TODO: See protobuf definition (protoc doesn't allow zero index: optional int32 all = 0;)
        if (filters.type && filters.type !== 'all' && ((_a = data.filters) === null || _a === void 0 ? void 0 : _a.type))
            data.filters.type[filters.type] = 1;
        const buf = MusicSearchFilter.encodeBinary(data);
        return encodeURIComponent(u8ToBase64(buf));
    }
    static encodeMessageParams(channel_id, video_id) {
        const buf = LiveMessageParams.encodeBinary({
            params: {
                ids: {
                    channelId: channel_id, videoId: video_id
                }
            },
            number0: 1, number1: 4
        });
        return btoa(encodeURIComponent(u8ToBase64(buf)));
    }
    static encodeCommentsSectionParams(video_id, options = {}) {
        const sort_options = {
            TOP_COMMENTS: 0,
            NEWEST_FIRST: 1
        };
        const buf = GetCommentsSectionParams.encodeBinary({
            ctx: {
                videoId: video_id
            },
            unkParam: 6,
            params: {
                opts: {
                    videoId: video_id,
                    sortBy: sort_options[options.sort_by || 'TOP_COMMENTS'],
                    type: options.type || 2
                },
                target: 'comments-section'
            }
        });
        return encodeURIComponent(u8ToBase64(buf));
    }
    static encodeCommentParams(video_id) {
        const buf = CreateCommentParams.encodeBinary({
            videoId: video_id,
            params: {
                index: 0
            },
            number: 7
        });
        return encodeURIComponent(u8ToBase64(buf));
    }
    static encodeCommentActionParams(type, args = {}) {
        const data = {
            type,
            commentId: args.comment_id || ' ',
            videoId: args.video_id || ' ',
            channelId: ' ',
            unkNum: 2
        };
        if (args.hasOwnProperty('text')) {
            if (typeof args.target_language !== 'string')
                throw new Error('target_language must be a string');
            args.comment_id && (delete data.unkNum);
            data.translateCommentParams = {
                params: {
                    comment: {
                        text: args.text
                    }
                },
                commentId: args.comment_id || ' ',
                targetLanguage: args.target_language
            };
        }
        const buf = PeformCommentActionParams.encodeBinary(data);
        return encodeURIComponent(u8ToBase64(buf));
    }
    static encodeNotificationPref(channel_id, index) {
        const buf = NotificationPreferences.encodeBinary({
            channelId: channel_id,
            prefId: {
                index
            },
            number0: 0, number1: 4
        });
        return encodeURIComponent(u8ToBase64(buf));
    }
    static encodeVideoMetadataPayload(video_id, metadata) {
        const data = {
            context: {
                client: {
                    unkparam: 14,
                    clientName: CLIENTS.ANDROID.NAME,
                    clientVersion: CLIENTS.YTSTUDIO_ANDROID.VERSION
                }
            },
            target: video_id
        };
        if (Reflect.has(metadata, 'title'))
            data.title = { text: metadata.title || '' };
        if (Reflect.has(metadata, 'description'))
            data.description = { text: metadata.description || '' };
        if (Reflect.has(metadata, 'license'))
            data.license = { type: metadata.license || '' };
        if (Reflect.has(metadata, 'tags'))
            data.tags = { list: metadata.tags || [] };
        if (Reflect.has(metadata, 'category'))
            data.category = { id: metadata.category || 0 };
        if (Reflect.has(metadata, 'privacy')) {
            switch (metadata.privacy) {
                case 'PUBLIC':
                    data.privacy = { type: 1 };
                    break;
                case 'UNLISTED':
                    data.privacy = { type: 2 };
                    break;
                case 'PRIVATE':
                    data.privacy = { type: 3 };
                    break;
                default:
                    throw new Error('Invalid visibility option');
            }
        }
        if (Reflect.has(metadata, 'made_for_kids')) {
            data.madeForKids = {
                unkparam: 1,
                choice: metadata.made_for_kids ? 1 : 2
            };
        }
        if (Reflect.has(metadata, 'age_restricted')) {
            data.ageRestricted = {
                unkparam: 1,
                choice: metadata.age_restricted ? 1 : 2
            };
        }
        const buf = InnertubePayload.encodeBinary(data);
        return buf;
    }
    static encodeCustomThumbnailPayload(video_id, bytes) {
        const data = {
            context: {
                client: {
                    unkparam: 14,
                    clientName: CLIENTS.ANDROID.NAME,
                    clientVersion: CLIENTS.YTSTUDIO_ANDROID.VERSION
                }
            },
            target: video_id,
            videoThumbnail: {
                type: 3,
                thumbnail: {
                    imageData: bytes
                }
            }
        };
        const buf = InnertubePayload.encodeBinary(data);
        return buf;
    }
    static encodeHashtag(hashtag) {
        const buf = Hashtag.encodeBinary({
            params: {
                hashtag,
                type: 1
            }
        });
        return encodeURIComponent(u8ToBase64(buf));
    }
}
export default Proto;
//# sourceMappingURL=index.js.map