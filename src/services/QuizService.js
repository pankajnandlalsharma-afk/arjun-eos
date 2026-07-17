/**
 * ====================================================
 * ARJUN EOS
 * Quiz Service
 * ====================================================
 */

import QuizRepository from "../repositories/QuizRepository";
import { LoggerManager } from "../core";

class QuizService {

    createQuiz(quiz) {

        if (!quiz.title || quiz.title.trim() === "") {
            throw new Error("Quiz title is required.");
        }

        QuizRepository.save(quiz);

        LoggerManager.success(`Quiz created: ${quiz.title}`);

        return quiz;

    }

    getAllQuizzes() {

        return QuizRepository.getAll();

    }

    getQuiz(id) {

        return QuizRepository.getById(id);

    }

    updateQuiz(quiz) {

        const updatedQuiz = QuizRepository.update(quiz);

        if (!updatedQuiz) {
            throw new Error("Quiz not found.");
        }

        LoggerManager.success(`Quiz updated: ${quiz.title}`);

        return updatedQuiz;

    }

    deleteQuiz(id) {

        QuizRepository.delete(id);

        LoggerManager.success(`Quiz deleted: ${id}`);

    }

    totalQuizzes() {

        return QuizRepository.count();

    }

}

const quizService = new QuizService();

export default quizService;