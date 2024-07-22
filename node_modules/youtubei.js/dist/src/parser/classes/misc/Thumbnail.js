class Thumbnail {
    constructor(data) {
        this.url = data.url;
        this.width = data.width;
        this.height = data.height;
    }
    /**
     * Get thumbnails from response object.
     */
    static fromResponse(data) {
        if (!data || !data.thumbnails)
            return [];
        return data.thumbnails.map((x) => new Thumbnail(x)).sort((a, b) => b.width - a.width);
    }
}
export default Thumbnail;
//# sourceMappingURL=Thumbnail.js.map