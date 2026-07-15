export default class RelationshipEngine {

    constructor() {

        this.graph = {

            nodes: [],

            edges: []

        };

    }

    build(knowledgeObject) {

        const relationship = {

            id: knowledgeObject.id,

            documentName: knowledgeObject.documentName,

            graph: this.graph,

            relationships: {

                concepts: [],

                definitions: [],

                facts: [],

                principles: [],

                procedures: [],

                timelines: [],

                checklists: [],

                keywords: [],

                examples: [],

                exceptions: [],

                references: [],

                crossReferences: [],

                relatedDocuments: [],

                relatedTopics: []

            },

            builtAt: new Date(),

            status: "Relationships Built",

            nextStep: "Knowledge Repository"

        };

        return relationship;

    }

}