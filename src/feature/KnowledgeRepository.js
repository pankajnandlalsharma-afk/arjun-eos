export default class KnowledgeRepository {

    constructor() {

        this.repository = [];

    }

    save(knowledge) {

        const repositoryObject = {

            id: knowledge.id,

            documentName: knowledge.fileName,

            sourceType: knowledge.sourceType,

            keywords: knowledge.keywords,

            concepts: knowledge.concepts,

            definitions: knowledge.definitions,

            facts: knowledge.facts,

            principles: knowledge.principles,

            procedures: knowledge.procedures,

            timelines: knowledge.timelines,

            checklists: knowledge.checklists,

            examples: knowledge.examples,

            exceptions: knowledge.exceptions,

            references: knowledge.references,

            relationships: knowledge.relationships,

            graph: knowledge.graph,

            createdAt: new Date(),

            status: "Stored"

        };

        this.repository.push(repositoryObject);

        return repositoryObject;

    }

    getAll() {

        return this.repository;

    }

    findById(id) {

        return this.repository.find(

            item => item.id === id

        );

    }

    delete(id) {

        this.repository = this.repository.filter(

            item => item.id !== id

        );

    }

    count() {

        return this.repository.length;

    }

    statistics() {

        return {

            totalKnowledgeObjects: this.repository.length,

            totalConcepts:

                this.repository.reduce(

                    (sum, item) =>

                        sum + item.concepts.length,

                    0

                ),

            totalDefinitions:

                this.repository.reduce(

                    (sum, item) =>

                        sum + item.definitions.length,

                    0

                ),

            totalRelationships:

                this.repository.reduce(

                    (sum, item) =>

                        sum + item.relationships.length,

                    0

                ),

            totalGraphNodes:

                this.repository.reduce(

                    (sum, item) =>

                        sum + item.graph.nodes.length,

                    0

                ),

            totalGraphEdges:

                this.repository.reduce(

                    (sum, item) =>

                        sum + item.graph.edges.length,

                    0

                )

        };

    }

}