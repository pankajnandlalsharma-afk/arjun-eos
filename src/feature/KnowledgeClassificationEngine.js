export default class KnowledgeClassificationEngine {

    classify(knowledgeObject) {

        return {

            id: knowledgeObject.id,

            documentName: knowledgeObject.documentName,

            classification: {

                domain: "Unknown",

                subject: "Unknown",

                topic: "Unknown",

                subTopic: "Unknown",

                difficulty: "Unknown",

                language: "Unknown",

                sourceType: "Unknown",

                authorityLevel: "Unknown",

                tags: []

            },

            classifiedAt: new Date(),

            status: "Knowledge Classified",

            nextStep: "Knowledge Index Engine"

        };

    }

}
