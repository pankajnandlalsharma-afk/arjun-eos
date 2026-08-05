/**
 * ============================================================
 * ARJUN EOS
 * Quiz Agent
 *
 * Contract : QUIZ-AGENT-001
 * Layer    : Model
 * Purpose  : Enterprise Quiz Intelligence Agent.
 * ============================================================
 */

import EnterpriseAgent
    from "./EnterpriseAgent";

export default class QuizAgent
    extends EnterpriseAgent {

    constructor(data = {}) {

        super({

            ...data,

            agentType: "QUIZ",

            department: "Quiz Intelligence"

        });

        //--------------------------------------------------
        // Quiz Capabilities
        //--------------------------------------------------

        this.addCapability(

            "QUESTION_GENERATION"

        );

        this.addCapability(

            "OPTION_GENERATION"

        );

        this.addCapability(

            "ANSWER_VALIDATION"

        );

        this.addCapability(

            "DIFFICULTY_ANALYSIS"

        );

        this.addCapability(

            "QUIZ_PACKAGING"

        );

        this.addCapability(

            "QUIZ_VALIDATION"

        );

    }

    //--------------------------------------------------
    // Generate Questions
    //--------------------------------------------------

    generateQuestions(topic) {

        this.updateTask(

            "GENERATING_QUESTIONS"

        );

        this.remember(

            "currentTopic",

            topic

        );

    }

    //--------------------------------------------------
    // Generate Options
    //--------------------------------------------------

    generateOptions(options = []) {

        this.updateTask(

            "GENERATING_OPTIONS"

        );

        this.remember(

            "options",

            options

        );

        return options;

    }

    //--------------------------------------------------
    // Validate Answers
    //--------------------------------------------------

    validateAnswers(answers = []) {

        this.updateTask(

            "VALIDATING_ANSWERS"

        );

        this.remember(

            "answers",

            answers

        );

        return answers;

    }

    //--------------------------------------------------
    // Analyze Difficulty
    //--------------------------------------------------

    analyzeDifficulty(level = "MEDIUM") {

        this.updateTask(

            "ANALYZING_DIFFICULTY"

        );

        this.remember(

            "difficulty",

            level

        );

        return level;

    }

    //--------------------------------------------------
    // Package Quiz
    //--------------------------------------------------

    packageQuiz(quiz) {

        this.updateTask(

            "PACKAGING_QUIZ"

        );

        this.remember(

            "lastQuiz",

            quiz

        );

        return quiz;

    }

}