export default class OptionGenerationEngine {

    generate(questionObject) {

        return {

            id: questionObject.id,

            documentName: questionObject.documentName,

            options: this.generateOptions(

                questionObject.questions || []

            ),

            generatedAt: new Date(),

            status: "Options Generated",

            nextStep: "Answer Generation Engine"

        };

    }

    generateOptions(questions) {

        return questions.map((question, index) => ({

            questionId: question.id || index + 1,

            question: question.question,

            type: question.type,

            optionStructure: {

                optionA: question.answer || "Correct Answer",

                optionB: "Distractor Option 1",

                optionC: "Distractor Option 2",

                optionD: "Distractor Option 3"

            },

            correctOption: "A"

        }));

    }

}