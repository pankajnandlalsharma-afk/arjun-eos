/**
 * ============================================================
 * ARJUN EOS
 * Quiz Studio
 * Quiz Service
 * Version 2.0
 * ============================================================
 */

import quizRepository from "../repositories/QuizRepository";

class QuizService {

    /**
     * ========================================================
     * Create
     * ========================================================
     */

    createQuiz(quiz) {

        return quizRepository.create(quiz);

    }

    /**
     * ========================================================
     * Bulk Import
     * ========================================================
     */

    importQuizzes(quizzes) {

        return quizRepository.importQuizzes(quizzes);

    }

    /**
     * ========================================================
     * Read
     * ========================================================
     */

    getAllQuizzes() {

        return quizRepository.getAll();

    }

    getQuizById(id) {

        return quizRepository.getById(id);

    }

    /**
     * ========================================================
     * Update
     * ========================================================
     */

    updateQuiz(updatedQuiz) {

        return quizRepository.update(updatedQuiz);

    }

    /**
     * ========================================================
     * Delete
     * ========================================================
     */

    deleteQuiz(id) {

        return quizRepository.delete(id);

    }

    /**
     * ========================================================
     * Utility
     * ========================================================
     */

    clearQuizzes() {

        quizRepository.clear();

    }

}

const quizService = new QuizService();

export default quizService;