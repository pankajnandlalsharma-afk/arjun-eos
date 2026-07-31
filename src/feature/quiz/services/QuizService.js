/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Operating System
 * Quiz Service
 * Version 2.1
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

        try {

            return quizRepository.create(quiz);

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

            return quizRepository.importQuizzes(quizzes);

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

        try {

            return quizRepository.update(updatedQuiz);

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

            return quizRepository.delete(id);

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

            quizRepository.clear();

        } catch (error) {

            console.error(error);

            throw error;

        }

    }

}

const quizService = Object.freeze(
    new QuizService()
);

export default quizService;