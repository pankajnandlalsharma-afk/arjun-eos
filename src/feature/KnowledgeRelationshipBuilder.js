export default class KnowledgeRelationshipBuilder {

    build(knowledge) {

        const relationships = [];

        this.linkConcepts(
            knowledge.concepts,
            knowledge.definitions,
            "DEFINED_BY",
            relationships
        );

        this.linkConcepts(
            knowledge.concepts,
            knowledge.references,
            "REFERENCED_IN",
            relationships
        );

        this.linkConcepts(
            knowledge.concepts,
            knowledge.procedures,
            "PROCEDURE",
            relationships
        );

        this.linkConcepts(
            knowledge.concepts,
            knowledge.examples,
            "EXAMPLE",
            relationships
        );

        this.linkConcepts(
            knowledge.concepts,
            knowledge.exceptions,
            "EXCEPTION",
            relationships
        );

        this.linkConcepts(
            knowledge.concepts,
            knowledge.facts,
            "FACT",
            relationships
        );

        this.linkKeywords(
            knowledge.keywords,
            knowledge.concepts,
            relationships
        );

        return {

            ...knowledge,

            relationships,

            relationshipCount: relationships.length,

            relationshipStatus: "Completed",

            nextStep: "Knowledge Graph Engine"

        };

    }

    linkConcepts(concepts, targets, relation, relationships) {

        if (!concepts || !targets) return;

        concepts.forEach(concept => {

            targets.forEach(target => {

                if (

                    target
                        .toLowerCase()
                        .includes(concept.toLowerCase())

                ) {

                    relationships.push({

                        source: concept,

                        relation,

                        target

                    });

                }

            });

        });

    }

    linkKeywords(keywords, concepts, relationships) {

        if (!keywords || !concepts) return;

        keywords.forEach(keyword => {

            concepts.forEach(concept => {

                if (

                    keyword.toLowerCase() ===
                    concept.toLowerCase()

                ) {

                    relationships.push({

                        source: keyword,

                        relation: "MATCHES",

                        target: concept

                    });

                }

            });

        });

    }

}