export default class ReferenceGenerationEngine {

    generate(explanationObject) {

        return {

            id: explanationObject.id,

            documentName: explanationObject.documentName,

            references: [],

            referenceStructure: {

                sourceDocument: "",

                chapter: "",

                section: "",

                pageNumber: "",

                paragraph: "",

                authorityLevel: "",

                citation: ""

            },

            generatedAt: new Date(),

            status: "References Generated",

            nextStep: "Memory Tip Engine"

        };

    }

}