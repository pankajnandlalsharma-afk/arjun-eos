/**
 * ============================================================
 * ARJUN EOS
 * Quiz Studio
 * Quiz Engine
 * Version 2.0
 * ============================================================
 */

import quizController from "../controllers/QuizController";

import eventBus from "../../enterprise/events/EventBus";
import { EventTypes } from "../../enterprise/events/EventTypes";

class QuizEngine {

    /**
     * ========================================================
     * Create
     * ========================================================
     */

    createQuiz(quiz) {

        const result = quizController.createQuiz(quiz);

        eventBus.publish(
            EventTypes.QUIZ_CREATED,
            result
        );

        return result;

    }

    /**
     * ========================================================
     * Bulk Import
     * ========================================================
     */

    importQuizzes(quizzes) {

        const imported =
            quizController.importQuizzes(quizzes);

        if (imported.length > 0) {

            eventBus.publish(
                EventTypes.QUIZZES_IMPORTED,
                imported
            );

        }

        return imported;

    }

    /**
     * ========================================================
     * Read
     * ========================================================
     */

    getAllQuizzes() {

        return quizController.getAllQuizzes();

    }

    getQuizById(id) {

        return quizController.getQuizById(id);

    }

    /**
     * ========================================================
     * Update
     * ========================================================
     */

    updateQuiz(updatedQuiz) {

        const result =
            quizController.updateQuiz(updatedQuiz);

        if (result) {

            eventBus.publish(
                EventTypes.QUIZ_UPDATED,
                result
            );

        }

        return result;

    }

    /**
     * ========================================================
     * Delete
     * ========================================================
     */

    deleteQuiz(id) {

        const deleted =
            quizController.deleteQuiz(id);

        if (deleted) {

            eventBus.publish(
                EventTypes.QUIZ_DELETED,
                id
            );

        }

        return deleted;

    }

    /**
     * ========================================================
     * Utility
     * ========================================================
     */

    clearQuizzes() {

        quizController.clearQuizzes();

        eventBus.publish(
            EventTypes.QUIZZES_CLEARED
        );

    }

}

const quizEngine = new QuizEngine();

export default quizEngine;