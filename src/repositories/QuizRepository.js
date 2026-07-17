/**
 * ====================================================
 * ARJUN EOS
 * Quiz Repository
 * ====================================================
 */

import { DatabaseManager, LoggerManager } from "../core";

const COLLECTION = "quizzes";

class QuizRepository {

    constructor() {

        if (!DatabaseManager.has(COLLECTION)) {
            DatabaseManager.set(COLLECTION, []);
        }

    }

    getAll() {

        return DatabaseManager.get(COLLECTION);

    }

    getById(id) {

        return this.getAll().find(
            quiz => quiz.id === id
        ) || null;

    }

    save(quiz) {

        const quizzes = this.getAll();

        quizzes.push(quiz);

        DatabaseManager.set(COLLECTION, quizzes);

        LoggerManager.info(`Quiz saved: ${quiz.title}`);

        return quiz;

    }

    update(updatedQuiz) {

        const quizzes = this.getAll();

        const index = quizzes.findIndex(
            quiz => quiz.id === updatedQuiz.id
        );

        if (index === -1) {
            return null;
        }

        quizzes[index] = updatedQuiz;

        DatabaseManager.set(COLLECTION, quizzes);

        LoggerManager.info(`Quiz updated: ${updatedQuiz.title}`);

        return updatedQuiz;

    }

    delete(id) {

        const quizzes = this.getAll();

        const filtered = quizzes.filter(
            quiz => quiz.id !== id
        );

        DatabaseManager.set(COLLECTION, filtered);

        LoggerManager.info(`Quiz deleted: ${id}`);

    }

    count() {

        return this.getAll().length;

    }

}

const quizRepository = new QuizRepository();

export default quizRepository;