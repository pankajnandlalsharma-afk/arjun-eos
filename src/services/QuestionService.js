/**
 * ====================================================
 * ARJUN EOS
 * Question Service
 * ====================================================
 */

import QuestionRepository from "../repositories/QuestionRepository";
import { LoggerManager } from "../core";

class QuestionService {

    createQuestion(question) {

        if (!question.quizId || question.quizId.trim() === "") {
            throw new Error("Quiz ID is required.");
        }

        if (!question.question || question.question.trim() === "") {
            throw new Error("Question is required.");
        }

        if (!question.options || question.options.length < 2) {
            throw new Error("At least two options are required.");
        }

        if (question.correctAnswer === null || question.correctAnswer === undefined) {
            throw new Error("Correct answer is required.");
        }

        QuestionRepository.save(question);

        LoggerManager.success(
            `Question created: ${question.question}`
        );

        return question;

    }

    getAllQuestions() {

        return QuestionRepository.getAll();

    }

    getQuestion(id) {

        return QuestionRepository.getById(id);

    }

    getQuestionsByQuiz(quizId) {

        return QuestionRepository.getByQuiz(quizId);

    }

    updateQuestion(question) {

        const updatedQuestion = QuestionRepository.update(question);

        if (!updatedQuestion) {
            throw new Error("Question not found.");
        }

        LoggerManager.success(
            `Question updated: ${question.question}`
        );

        return updatedQuestion;

    }

    deleteQuestion(id) {

        QuestionRepository.delete(id);

        LoggerManager.success(
            `Question deleted: ${id}`
        );

    }

    moveUp(id) {

        const movedQuestion = QuestionRepository.moveUp(id);

        if (!movedQuestion) {
            throw new Error("Question not found.");
        }

        LoggerManager.success(
            `Question moved up: ${id}`
        );

        return movedQuestion;

    }

    moveDown(id) {

        const movedQuestion = QuestionRepository.moveDown(id);

        if (!movedQuestion) {
            throw new Error("Question not found.");
        }

        LoggerManager.success(
            `Question moved down: ${id}`
        );

        return movedQuestion;

    }

    totalQuestions() {

        return QuestionRepository.count();

    }

}

const questionService = new QuestionService();

export default questionService;