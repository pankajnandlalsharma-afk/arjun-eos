/**
 * ====================================================
 * ARJUN EOS
 * Enterprise Question Service
 *
 * Contract : QUESTION-004
 * Layer    : Service
 * Purpose  : Business Layer for Enterprise Questions.
 * ====================================================
 */

import QuestionRepository from "../repositories/QuestionRepository";
import QuestionGenerationEngine from "../engine/QuestionGenerationEngine";
import { LoggerManager } from "../core";

class QuestionService {

    constructor() {

        this.questionGenerationEngine =
            new QuestionGenerationEngine();

    }

    //--------------------------------------------------
    // Create
    //--------------------------------------------------

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

    //--------------------------------------------------
    // Enterprise Question Generation
    //--------------------------------------------------

    generateQuestion(request) {

        return this.questionGenerationEngine.generate(

            request

        );

    }

    generateQuestions(request) {

        return this.questionGenerationEngine.generateMultiple(

            request

        );

    }

    //--------------------------------------------------
    // Read
    //--------------------------------------------------

    getAllQuestions() {

        return QuestionRepository.getAll();

    }

    getQuestion(id) {

        return QuestionRepository.getById(id);

    }

    getQuestionsByQuiz(quizId) {

        return QuestionRepository.getByQuiz(

            quizId

        );

    }

    //--------------------------------------------------
    // Enterprise Search
    //--------------------------------------------------

    searchQuestions(keyword) {

        return QuestionRepository.search(

            keyword

        );

    }

    getQuestionsByDifficulty(level) {

        return QuestionRepository.getByDifficulty(

            level

        );

    }

    getQuestionsByBloomLevel(level) {

        return QuestionRepository.getByBloomLevel(

            level

        );

    }

    getQuestionsByLearningObjective(objective) {

        return QuestionRepository.getByLearningObjective(

            objective

        );

    }

    getQuestionsByStatus(status) {

        return QuestionRepository.getByStatus(

            status

        );

    }

    //--------------------------------------------------
    // Update
    //--------------------------------------------------

    updateQuestion(question) {

        const updatedQuestion =

            QuestionRepository.update(

                question

            );

        if (!updatedQuestion) {

            throw new Error(

                "Question not found."

            );

        }

        LoggerManager.success(

            `Question updated: ${question.question}`

        );

        return updatedQuestion;

    }

    //--------------------------------------------------
    // Delete
    //--------------------------------------------------

    deleteQuestion(id) {

        QuestionRepository.delete(id);

        LoggerManager.success(

            `Question deleted: ${id}`

        );

    }

    //--------------------------------------------------
    // Ordering
    //--------------------------------------------------

    moveUp(id) {

        const moved =

            QuestionRepository.moveUp(id);

        if (!moved) {

            throw new Error(

                "Question not found."

            );

        }

        LoggerManager.success(

            `Question moved up: ${id}`

        );

        return moved;

    }

    moveDown(id) {

        const moved =

            QuestionRepository.moveDown(id);

        if (!moved) {

            throw new Error(

                "Question not found."

            );

        }

        LoggerManager.success(

            `Question moved down: ${id}`

        );

        return moved;

    }

    move(id, targetIndex) {

        const moved =

            QuestionRepository.move(

                id,

                targetIndex

            );

        if (!moved) {

            throw new Error(

                "Question reorder failed."

            );

        }

        LoggerManager.success(

            `Question moved to position ${targetIndex}`

        );

        return moved;

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return QuestionRepository.getStatistics();

    }

    totalQuestions() {

        return QuestionRepository.count();

    }

}

const questionService = new QuestionService();

export default questionService;