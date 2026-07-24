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

        if (
            question.correctAnswer === null ||
            question.correctAnswer === undefined
        ) {
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

        const updatedQuestion =
            QuestionRepository.update(question);

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

        const moved = QuestionRepository.moveUp(id);

        if (!moved) {
            throw new Error("Question not found.");
        }

        LoggerManager.success(
            `Question moved up: ${id}`
        );

        return moved;

    }

    moveDown(id) {

        const moved = QuestionRepository.moveDown(id);

        if (!moved) {
            throw new Error("Question not found.");
        }

        LoggerManager.success(
            `Question moved down: ${id}`
        );

        return moved;

    }

    move(id, targetIndex) {

        const moved = QuestionRepository.move(
            id,
            targetIndex
        );

        if (!moved) {
            throw new Error("Question reorder failed.");
        }

        LoggerManager.success(
            `Question moved to position ${targetIndex}`
        );

        return moved;

    }

    totalQuestions() {

        return QuestionRepository.count();

    }

}

const questionService = new QuestionService();

export default questionService;