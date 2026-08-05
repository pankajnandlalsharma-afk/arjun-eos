/**
 * ============================================================
 * ARJUN EOS
 * Quiz Agent Engine
 *
 * Contract : QUIZ-AGENT-003
 * Layer    : Engine
 * Purpose  : Executes Enterprise Quiz operations.
 * ============================================================
 */

import EnterpriseAgentEngine
    from "./EnterpriseAgentEngine";

export default class QuizAgentEngine
    extends EnterpriseAgentEngine {

    //--------------------------------------------------
    // Start Quiz Generation
    //--------------------------------------------------

    executeQuizGeneration(agent, topic) {

        this.start(agent);

        agent.generateQuestions(topic);

        agent.updateProgress(20);

        return agent;

    }

    //--------------------------------------------------
    // Generate Options
    //--------------------------------------------------

    executeOptionGeneration(

        agent,

        options = []

    ) {

        agent.generateOptions(

            options

        );

        agent.updateProgress(40);

        return options;

    }

    //--------------------------------------------------
    // Validate Answers
    //--------------------------------------------------

    executeAnswerValidation(

        agent,

        answers = []

    ) {

        agent.validateAnswers(

            answers

        );

        agent.updateProgress(60);

        return answers;

    }

    //--------------------------------------------------
    // Analyze Difficulty
    //--------------------------------------------------

    executeDifficultyAnalysis(

        agent,

        difficulty = "MEDIUM"

    ) {

        agent.analyzeDifficulty(

            difficulty

        );

        agent.updateProgress(80);

        return difficulty;

    }

    //--------------------------------------------------
    // Package Quiz
    //--------------------------------------------------

    executePackaging(

        agent,

        quiz

    ) {

        agent.packageQuiz(

            quiz

        );

        agent.updateProgress(90);

        return quiz;

    }

    //--------------------------------------------------
    // Finish
    //--------------------------------------------------

    finish(agent) {

        this.complete(agent);

        return agent;

    }

}