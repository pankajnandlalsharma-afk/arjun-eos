export default class KnowledgeExtractionEngine {

    extract(inspectionResult) {

        const text = inspectionResult.text || "";

        const lines = this.getLines(text);

        const resource = inspectionResult.resource;

        return {

            id: resource?.resourceId ?? inspectionResult.id,

            fileName: resource?.originalFileName ?? inspectionResult.fileName,

            sourceType: resource?.sourceType ?? inspectionResult.sourceType,

            concepts: this.extractConcepts(lines),

            definitions: this.extractDefinitions(lines),

            facts: this.extractFacts(lines),

            principles: this.extractPrinciples(lines),

            procedures: this.extractProcedures(lines),

            timelines: this.extractTimelines(lines),

            checklists: this.extractChecklists(lines),

            keywords: this.extractKeywords(text),

            examples: this.extractExamples(lines),

            exceptions: this.extractExceptions(lines),

            references: this.extractReferences(lines),

            relationships: [],

            extractedAt: new Date(),

            extractionStatus: "Completed",

            nextStep: "Knowledge Object Builder"

        };

    }

    getLines(text) {

        return text
            .split("\n")
            .map(line => line.trim())
            .filter(line => line.length > 0);

    }

    extractKeywords(text) {

        const stopWords = [

            "the","is","are","was","were","of","to","and",

            "or","for","in","on","with","that","this",

            "shall","may","be","by","as","at","from",

            "section","chapter","article","rule","act",

            "thereof","therein","provided"

        ];

        const words =

            text

            .toLowerCase()

            .match(/\b[a-z]{4,}\b/g) || [];

        const frequency = {};

        words.forEach(word => {

            if (stopWords.includes(word)) return;

            frequency[word] = (frequency[word] || 0) + 1;

        });

        return [...new Set(

            Object.keys(frequency)

                .sort((a, b) => frequency[b] - frequency[a])

                .slice(0, 50)

        )];

    }

    extractDefinitions(lines) {

        return [...new Set(

            lines.filter(line =>

                /means|shall mean|defined as|refers to|includes/i.test(line)

            )

        )];

    }

    extractConcepts(lines) {

        return [...new Set(

            lines.filter(line =>

                /principle|concept|doctrine|liability|offence|crime|justice/i.test(line)

            )

        )];

    }

    extractFacts(lines) {

        return [...new Set(

            lines.filter(line => /\d/.test(line))

        )];

    }

    extractPrinciples(lines) {

        return [...new Set(

            lines.filter(line =>

                /principle|rule|maxim/i.test(line)

            )

        )];

    }

    extractProcedures(lines) {

        return [...new Set(

            lines.filter(line =>

                /step|procedure|first|second|third|finally|process/i.test(line)

            )

        )];

    }

    extractTimelines(lines) {

        return [...new Set(

            lines.filter(line =>

                /day|days|week|weeks|month|months|year|years|within/i.test(line)

            )

        )];

    }

    extractChecklists(lines) {

        return [...new Set(

            lines.filter(line =>

                /^[-*•]/.test(line)

            )

        )];

    }

    extractExamples(lines) {

        return [...new Set(

            lines.filter(line =>

                /example|illustration/i.test(line)

            )

        )];

    }

    extractExceptions(lines) {

        return [...new Set(

            lines.filter(line =>

                /exception|however|provided that|unless/i.test(line)

            )

        )];

    }

    extractReferences(lines) {

        return [...new Set(

            lines.filter(line =>

                /section\s+\d+|article\s+\d+|rule\s+\d+|schedule/i.test(line)

            )

        )];

    }

}