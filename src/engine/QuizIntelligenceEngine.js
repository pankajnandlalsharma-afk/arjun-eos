/**
 * ============================================================
 * ARJUN EOS
 * Quiz Intelligence Engine
 *
 * Contract : QUIZ-INTELLIGENCE-003
 * Layer    : Engine
 * Purpose  : Executes Enterprise Quiz Intelligence.
 * ============================================================
 */

export default class QuizIntelligenceEngine {

    //--------------------------------------------------
    // Start Session
    //--------------------------------------------------

    start(session) {

        session.start();

        session.updateProgress(10);

        return session;

    }

    //--------------------------------------------------
    // Prepare Metadata
    //--------------------------------------------------

    prepareMetadata(

        session,

        title,

        topic,

        description = ""

    ) {

        session.setTitle(

            title

        );

        session.setTopic(

            topic

        );

        session.setDescription(

            description

        );

        session.updateProgress(

            20

        );

        return session;

    }

    //--------------------------------------------------
    // Add Question
    //--------------------------------------------------

    generateQuestion(

        session,

        question

    ) {

        session.addQuestion(

            question

        );

        session.updateProgress(

            40

        );

        return question;

    }

    //--------------------------------------------------
    // Add Options
    //--------------------------------------------------

    generateOptions(

        session,

        options = []

    ) {

        options.forEach(

            option =>

                session.addOption(

                    option

                )

        );

        session.updateProgress(

            60

        );

        return options;

    }

    //--------------------------------------------------
    // Add Answers
    //--------------------------------------------------

    generateAnswers(

        session,

        answers = []

    ) {

        answers.forEach(

            answer =>

                session.addAnswer(

                    answer

                )

        );

        session.updateProgress(

            80

        );

        return answers;

    }

    //--------------------------------------------------
    // Difficulty
    //--------------------------------------------------

    analyzeDifficulty(

        session,

        level = "MEDIUM"

    ) {

        session.setDifficulty(

            level

        );

        session.updateProgress(

            90

        );

        return level;

    }

    //--------------------------------------------------
    // Complete
    //--------------------------------------------------

    complete(session) {

        session.complete();

        return session;

    }

}