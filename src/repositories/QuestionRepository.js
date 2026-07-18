/**
 * ====================================================
 * ARJUN EOS
 * Question Repository
 * ====================================================
 */

import { DatabaseManager, LoggerManager } from "../core";

const COLLECTION = "questions";

class QuestionRepository {

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
            question => question.id === id
        ) || null;

    }

    getByQuiz(quizId) {

        return this.getAll().filter(
            question => question.quizId === quizId
        );

    }

    save(question) {

        const questions = this.getAll();

        questions.push(question);

        DatabaseManager.set(COLLECTION, questions);

        LoggerManager.info(`Question saved: ${question.question}`);

        return question;

    }

    update(updatedQuestion) {

        const questions = this.getAll();

        const index = questions.findIndex(
            question => question.id === updatedQuestion.id
        );

        if (index === -1) {
            return null;
        }

        questions[index] = updatedQuestion;

        DatabaseManager.set(COLLECTION, questions);

        LoggerManager.info(
            `Question updated: ${updatedQuestion.question}`
        );

        return updatedQuestion;

    }

    delete(id) {

        const questions = this.getAll();

        const filtered = questions.filter(
            question => question.id !== id
        );

        DatabaseManager.set(COLLECTION, filtered);

        LoggerManager.info(`Question deleted: ${id}`);

    }

    count() {

        return this.getAll().length;

    }

}

const questionRepository = new QuestionRepository();

export default questionRepository;