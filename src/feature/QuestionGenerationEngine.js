export default class QuestionGenerationEngine {

    generate(quizIntelligence) {

        return {

            id: quizIntelligence.id,

            documentName: quizIntelligence.documentName,

            questions: this.generateQuestions(
                quizIntelligence
            ),

            questionTypes: this.getQuestionTypes(),

            estimatedQuestions:
                this.calculateEstimatedQuestions(
                    quizIntelligence
                ),

            generatedAt: new Date(),

            status: "Questions Generated",

            nextStep: "Option Generation Engine"

        };

    }

    generateQuestions(quizIntelligence) {

        const questions = [];

        const topics =
            quizIntelligence.quizIntelligence.quizTopics || [];

        topics.forEach((topic, index) => {

            questions.push({

                id: index + 1,

                topic,

                type: "MCQ",

                question:

                    "Explain " + topic,

                answer: "",

                difficulty:
                    quizIntelligence
                        .quizIntelligence
                        .quizDifficulty

            });

        });

        return questions;

    }

    getQuestionTypes() {

        return [

            "MCQ",

            "True/False",

            "Fill in the Blanks",

            "Scenario Based",

            "Short Answer",

            "Long Answer"

        ];

    }

    calculateEstimatedQuestions(quizIntelligence) {

        if (

            quizIntelligence.quizIntelligence
                .estimatedQuestions

        ) {

            return quizIntelligence
                .quizIntelligence
                .estimatedQuestions;

        }

        return this.generateQuestions(
            quizIntelligence
        ).length;

    }

}