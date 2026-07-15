[09:04, 7/15/2026] ADV. PNNKAJ NANDLAL SHRMA: }
[09:05, 7/15/2026] ADV. PNNKAJ NANDLAL SHRMA: export default class KnowledgeExtractionEngine {

    extract(inspectionResult) {

        const text = inspectionResult.text || "";

        return {

            id: inspectionResult.id,

            fileName: inspectionResult.fileName,

            sourceType: inspectionResult.sourceType,

            concepts: this.extractConcepts(text),

            definitions: this.extractDefinitions(text),

            facts: this.extractFacts(text),

            principles: this.extractPrinciples(text),

            procedures: this.extractProcedures(text),

            timelines: this.extractTimelines(text),

            checklists: this.extractChecklists(text),

            keywords: this.extractKeywords(text),

            examples: this.extractExamples(text),

            exceptions: this.extractExceptions(text),

            references: this.extractReferences(text),

            relationships: [],

            extractedAt: new Date(),

            extractionStatus: "Completed",

            nextStep: "Knowledge Object Builder"

        };

    }

    extractKeywords(text) {

        const stopWords = [

            "the","is","are","was","were","of","to","and",

            "or","for","in","on","with","that","this",

            "shall","may","be","by","as","at","from"

        ];

        const words =

            text

            .toLowerCase()

            .match(/\b[a-z]{4,}\b/g) || [];

        const frequency = {};

        words.forEach(word => {

            if(stopWords.includes(word)) return;

            frequency[word] = (frequency[word] || 0) + 1;

        });

        return Object.keys(frequency)

            .sort((a,b)=>frequency[b]-frequency[a])

            .slice(0,50);

    }

    extractDefinitions(text){

        return text

            .split("\n")

            .filter(line=>

                /means|shall mean|defined as|refers to/i.test(line)

            );

    }

    extractConcepts(text){

        return text

            .split("\n")

            .filter(line=>

                /principle|concept|rule|doctrine/i.test(line)

            );

    }

    extractFacts(text){

        return text

            .split("\n")

            .filter(line=>

                /\d/.test(line)

            );

    }

    extractPrinciples(text){

        return text

            .split("\n")

            .filter(line=>

                /principle|rule/i.test(line)

            );

    }

    extractProcedures(text){

        return text

            .split("\n")

            .filter(line=>

                /step|procedure|first|second|third|finally/i.test(line)

            );

    }

    extractTimelines(text){

        return text

            .split("\n")

            .filter(line=>

                /day|days|month|months|year|years|within/i.test(line)

            );

    }

    extractChecklists(text){

        return text

            .split("\n")

            .filter(line=>

                /^[-*•]/.test(line.trim())

            );

    }

    extractExamples(text){

        return text

            .split("\n")

            .filter(line=>

                /example|illustration/i.test(line)

            );

    }

    extractExceptions(text){

        return text

            .split("\n")

            .filter(line=>

                /exception|provided that|however/i.test(line)

            );

    }

    extractReferences(text){

        return text

            .split("\n")

            .filter(line=>

                /section|article|rule|act|schedule/i.test(line)

            );

    }

}