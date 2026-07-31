/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Operating System
 * Quiz Controller
 * Version 2.1
 * ============================================================
 */

import quizService from "../services/QuizService";

class QuizController {

    /**
     * ========================================================
     * Create
     * ========================================================
     */

    createQuiz(quiz) {

        try {

            return quizService.createQuiz(quiz);

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

            return quizService.importQuizzes(quizzes);

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

        return quizService.getAllQuizzes();

    }

    getQuizById(id) {

        return quizService.getQuizById(id);

    }

    /**
     * ========================================================
     * Update
     * ========================================================
     */

    updateQuiz(updatedQuiz) {

        try {

            return quizService.updateQuiz(updatedQuiz);

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

            return quizService.deleteQuiz(id);

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

            quizService.clearQuizzes();

        } catch (error) {

            console.error(error);

            throw error;

        }

    }

}

const quizController = Object.freeze(
    new QuizController()
);

export default quizController;