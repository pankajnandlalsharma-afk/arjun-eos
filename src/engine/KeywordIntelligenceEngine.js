export default class KeywordIntelligenceEngine {

    extract(text = "") {

        const words = text
            .toLowerCase()
            .replace(/[^\w\s]/g, "")
            .split(/\s+/)
            .filter(word => word.length > 3);

        const frequency = {};

        words.forEach(word => {
            frequency[word] = (frequency[word] || 0) + 1;
        });

        return Object.entries(frequency)
            .sort((a, b) => b[1] - a[1])
            .map(([keyword, count]) => ({
                keyword,
                count
            }));
    }

    topKeywords(text = "", limit = 20) {

        return this.extract(text).slice(0, limit);

    }

}