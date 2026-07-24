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

        return this
            .getAll()
            .filter(question => question.quizId === quizId)
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

    }

    save(question) {

        const questions = this.getAll();

        const quizQuestions = questions.filter(
            q => q.quizId === question.quizId
        );

        question.order = quizQuestions.length;

        questions.push(question);

        DatabaseManager.set(COLLECTION, questions);

        LoggerManager.info(
            `Question saved: ${question.question}`
        );

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

        if (updatedQuestion.order === undefined) {
            updatedQuestion.order = questions[index].order ?? 0;
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

        const question = questions.find(q => q.id === id);

        if (!question) {
            return false;
        }

        const filtered = questions.filter(
            q => q.id !== id
        );

        const reordered = filtered.map(q => ({ ...q }));

        this.normalizeOrder(
            reordered,
            question.quizId
        );

        DatabaseManager.set(
            COLLECTION,
            reordered
        );

        LoggerManager.info(
            `Question deleted: ${id}`
        );

        return true;

    }

    moveUp(id) {

        const current = this.getById(id);

        if (!current) {
            return false;
        }

        return this.move(id, (current.order ?? 0) - 1);

    }

    moveDown(id) {

        const current = this.getById(id);

        if (!current) {
            return false;
        }

        return this.move(id, (current.order ?? 0) + 1);

    }

    move(id, targetIndex) {

        const questions = this.getAll().map(
            q => ({ ...q })
        );

        const current = questions.find(
            q => q.id === id
        );

        if (!current) {
            return false;
        }

        const quizQuestions = questions
            .filter(q => q.quizId === current.quizId)
            .sort(
                (a, b) => (a.order ?? 0) - (b.order ?? 0)
            );

        const currentIndex = quizQuestions.findIndex(
            q => q.id === id
        );

        if (
            currentIndex === -1 ||
            targetIndex < 0 ||
            targetIndex >= quizQuestions.length
        ) {
            return false;
        }

        const [item] = quizQuestions.splice(currentIndex, 1);

        quizQuestions.splice(targetIndex, 0, item);

        quizQuestions.forEach((question, index) => {
            question.order = index;
        });

        DatabaseManager.set(
            COLLECTION,
            questions
        );

        LoggerManager.info(
            `Question reordered: ${id}`
        );

        return true;

    }

    normalizeOrder(allQuestions, quizId) {

        const quizQuestions = allQuestions
            .filter(q => q.quizId === quizId)
            .sort(
                (a, b) => (a.order ?? 0) - (b.order ?? 0)
            );

        quizQuestions.forEach((question, index) => {
            question.order = index;
        });

    }

    count() {

        return this.getAll().length;

    }

}

const questionRepository = new QuestionRepository();

export default questionRepository;