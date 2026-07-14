export default class KnowledgeIndexEngine {

    index(classifiedKnowledge) {

        return {

            id: classifiedKnowledge.id,

            documentName: classifiedKnowledge.documentName,

            indexes: {

                keywords: [],

                concepts: [],

                definitions: [],

                topics: [],

                subTopics: [],

                references: [],

                relationships: [],

                tags: [],

                authority: classifiedKnowledge.classification.authorityLevel,

                language: classifiedKnowledge.classification.language

            },

            indexedAt: new Date(),

            status: "Knowledge Indexed",

            nextStep: "Knowledge Intelligence Engine"

        };

    }

}
