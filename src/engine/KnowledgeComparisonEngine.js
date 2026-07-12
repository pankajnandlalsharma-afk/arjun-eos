export default class KnowledgeComparisonEngine {

    compare(documentA = {}, documentB = {}) {

        return {
            sameTitle: documentA.title === documentB.title,
            sameType: documentA.type === documentB.type,
            sameAuthor: documentA.author === documentB.author,
            sameVersion: documentA.version === documentB.version
        };

    }

    similarityScore(documentA = {}, documentB = {}) {

        let score = 0;

        if (documentA.title === documentB.title) score += 25;
        if (documentA.type === documentB.type) score += 25;
        if (documentA.author === documentB.author) score += 25;
        if (documentA.version === documentB.version) score += 25;

        return score;

    }

}