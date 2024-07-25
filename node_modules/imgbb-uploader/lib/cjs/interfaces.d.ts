export interface IResponseObject {
    id: string;
    title: string;
    url_viewer: string;
    url: string;
    display_url: string;
    size: number;
    time: string;
    expiration: string;
    image: {
        filename: string;
        name: string;
        mime: string;
        extension: string;
        url: string;
    };
    thumb: {
        filename: string;
        name: string;
        mime: string;
        extension: string;
        url: string;
    };
    medium?: {
        filename: string;
        name: string;
        mime: string;
        extension: string;
        url: string;
    };
    delete_url: string;
}
export interface IOptionObject {
    apiKey: string;
    imagePath?: string;
    name?: string;
    expiration?: number;
    base64string?: string;
    imageUrl?: string;
}
