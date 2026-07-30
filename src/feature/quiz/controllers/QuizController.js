/**
 * ============================================================
 * ARJUN EOS
 * Quiz Studio
 * Quiz Controller
 * Version 2.0
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

        return quizService.createQuiz(quiz);

    }

    /**
     * ========================================================
     * Bulk Import
     * ========================================================
     */

    importQuizzes(quizzes) {

        return quizService.importQuizzes(quizzes);

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

        return quizService.updateQuiz(updatedQuiz);

    }

    /**
     * ========================================================
     * Delete
     * ========================================================
     */

    deleteQuiz(id) {

        return quizService.deleteQuiz(id);

    }

    /**
     * ========================================================
     * Utility
     * ========================================================
     */

    clearQuizzes() {

        quizService.clearQuizzes();

    }

}

const quizController = new QuizController();

export default quizController;