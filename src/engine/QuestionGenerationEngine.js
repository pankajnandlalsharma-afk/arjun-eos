/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Question Generation Engine
 *
 * Contract : QUESTION-003
 * Layer    : Engine
 * Purpose  : Generates Enterprise Questions.
 * ============================================================
 */

import Question from "../models/Question";

export default class QuestionGenerationEngine {

    //--------------------------------------------------
    // Generate Question
    //--------------------------------------------------

    generate({

        quizId = "",

        topic = "",

        learningObjective = "",

        difficulty = "MEDIUM",

        bloomLevel = "UNDERSTAND",

        source = "",

        tags = []

    } = {}) {

        const question = new Question({

            quizId,

            question: this.generateQuestionText(topic),

            difficulty,

            learningObjective,

            bloomLevel,

            source,

            tags,

            options: this.generateOptions(topic),

            correctAnswer: "Option A",

            explanation: this.generateExplanation(topic),

            confidenceScore: 100,

            status: "DRAFT"

        });

        return question;

    }

    //--------------------------------------------------
    // Question Text
    //--------------------------------------------------

    generateQuestionText(topic) {

        return `What is the most important concept of ${topic}?`;

    }

    //--------------------------------------------------
    // Options
    //--------------------------------------------------

    generateOptions(topic) {

        return [

            {
                id: crypto.randomUUID(),
                text: `Correct answer about ${topic}`
            },

            {
                id: crypto.randomUUID(),
                text: "Incorrect Option B"
            },

            {
                id: crypto.randomUUID(),
                text: "Incorrect Option C"
            },

            {
                id: crypto.randomUUID(),
                text: "Incorrect Option D"
            }

        ];

    }

    //--------------------------------------------------
    // Explanation
    //--------------------------------------------------

    generateExplanation(topic) {

        return `${topic} is an important concept that forms part of the learning objective.`;

    }

    //--------------------------------------------------
    // Bulk Generation
    //--------------------------------------------------

    generateMultiple({

        topic,

        count = 10,

        difficulty = "MEDIUM",

        learningObjective = "",

        bloomLevel = "UNDERSTAND",

        source = "",

        tags = []

    } = {}) {

        const questions = [];

        for (let i = 1; i <= count; i++) {

            questions.push(

                this.generate({

                    topic,

                    difficulty,

                    learningObjective,

                    bloomLevel,

                    source,

                    tags

                })

            );

        }

        return questions;

    }

}