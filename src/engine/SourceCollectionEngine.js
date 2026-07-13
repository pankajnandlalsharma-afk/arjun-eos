export default class SourceCollectionEngine {

    constructor() {
        this.sources = [];
    }

    addSource(type, title, location) {

        const source = {
            id: Date.now(),
            type,
            title,
            location,
            addedAt: new Date()
        };

        this.sources.push(source);

        return source;
    }

    getSources() {
        return this.sources;
    }

    getSourcesByType(type) {
        return this.sources.filter(
            source => source.type === type
        );
    }

    removeSource(id) {
        this.sources = this.sources.filter(
            source => source.id !== id
        );
    }

    totalSources() {
        return this.sources.length;
    }

}