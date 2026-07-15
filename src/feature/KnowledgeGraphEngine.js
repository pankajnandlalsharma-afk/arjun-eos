export default class KnowledgeGraphEngine {

    build(knowledge) {

        const nodes = [];

        const edges = [];

        this.buildNodes(knowledge, nodes);

        this.buildEdges(
            knowledge.relationships,
            edges
        );

        return {

            ...knowledge,

            graph: {

                nodes,

                edges

            },

            graphStatus: "Completed",

            graphNodes: nodes.length,

            graphEdges: edges.length,

            nextStep: "Knowledge Repository"

        };

    }

    buildNodes(knowledge, nodes) {

        this.addNodes(
            knowledge.concepts,
            "Concept",
            nodes
        );

        this.addNodes(
            knowledge.definitions,
            "Definition",
            nodes
        );

        this.addNodes(
            knowledge.references,
            "Reference",
            nodes
        );

        this.addNodes(
            knowledge.procedures,
            "Procedure",
            nodes
        );

        this.addNodes(
            knowledge.examples,
            "Example",
            nodes
        );

        this.addNodes(
            knowledge.exceptions,
            "Exception",
            nodes
        );

        this.addNodes(
            knowledge.facts,
            "Fact",
            nodes
        );

    }

    addNodes(items, type, nodes) {

        if (!items) return;

        items.forEach(item => {

            nodes.push({

                id: nodes.length + 1,

                label: item,

                type

            });

        });

    }

    buildEdges(relationships, edges) {

        if (!relationships) return;

        relationships.forEach((relationship, index) => {

            edges.push({

                id: index + 1,

                source: relationship.source,

                relation: relationship.relation,

                target: relationship.target

            });

        });

    }

}