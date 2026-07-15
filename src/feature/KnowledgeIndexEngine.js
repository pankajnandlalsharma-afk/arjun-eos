export default class KnowledgeIndexEngine {

    index(classifiedKnowledge) {

        const keywords = this.extractKeywords(classifiedKnowledge);

        const concepts = this.extractConcepts(classifiedKnowledge);

        const definitions = this.extractDefinitions(classifiedKnowledge);

        const topics = this.extractTopics(classifiedKnowledge);

        return {

            id: classifiedKnowledge.id,

            documentName: classifiedKnowledge.documentName,

            indexes: {

                keywords,

                concepts,

                definitions,

                topics,

                subTopics: [],

                references: [],

                relationships: [],

                tags: [...keywords, ...topics],

                authority:
                    classifiedKnowledge.classification.authorityLevel,

                language:
                    classifiedKnowledge.classification.language

            },

            indexedAt: new Date(),

            status: "Knowledge Indexed",

            nextStep: "Knowledge Intelligence Engine"

        };

    }

    extractKeywords(data) {

        const text = JSON.stringify(data).toLowerCase();

        const words = text.match(/\b[a-z]{4,}\b/g) || [];

        const frequency = {};

        words.forEach(word => {

            frequency[word] = (frequency[word] || 0) + 1;

        });

        return Object.keys(frequency)

            .sort((a, b) => frequency[b] - frequency[a])

            .slice(0, 50);

    }

    extractConcepts(data) {

        return data.concepts || [];

    }

    extractDefinitions(data) {

        return data.definitions || [];

    }

    extractTopics(data) {

        return [

            data.classification.domain,

            data.classification.subject,

            data.classification.topic,

            data.classification.subTopic

        ].filter(Boolean);

    }

}