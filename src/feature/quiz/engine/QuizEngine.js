/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Operating System
 * Quiz Engine
 * Version 2.1
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

        try {

            const result = quizController.createQuiz(quiz);

            eventBus.publish(
                EventTypes.QUIZ_CREATED,
                result
            );

            return result;

        } catch (error) {

            console.error(error);

            throw error;

        }

    }

    /**
     * ========================================================
     * Bulk Import
     * ========================================================
     */

    importQuizzes(quizzes = []) {

        try {

            const imported =
                quizController.importQuizzes(quizzes);

            if (imported.length > 0) {

                eventBus.publish(
                    EventTypes.QUIZZES_IMPORTED,
                    imported
                );

            }

            return imported;

        } catch (error) {

            console.error(error);

            throw error;

        }

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

        try {

            const result =
                quizController.updateQuiz(updatedQuiz);

            if (result) {

                eventBus.publish(
                    EventTypes.QUIZ_UPDATED,
                    result
                );

            }

            return result;

        } catch (error) {

            console.error(error);

            throw error;

        }

    }

    /**
     * ========================================================
     * Delete
     * ========================================================
     */

    deleteQuiz(id) {

        try {

            const deleted =
                quizController.deleteQuiz(id);

            if (deleted) {

                eventBus.publish(
                    EventTypes.QUIZ_DELETED,
                    id
                );

            }

            return deleted;

        } catch (error) {

            console.error(error);

            throw error;

        }

    }

    /**
     * ========================================================
     * Utility
     * ========================================================
     */

    clearQuizzes() {

        try {

            quizController.clearQuizzes();

            eventBus.publish(
                EventTypes.QUIZZES_CLEARED
            );

        } catch (error) {

            console.error(error);

            throw error;

        }

    }

}

const quizEngine = Object.freeze(
    new QuizEngine()
);

export default quizEngine;