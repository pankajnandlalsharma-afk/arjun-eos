/**
 * ====================================================
 * ARJUN EOS
 * Question Controller
 * ====================================================
 */

import QuestionService from "../services/QuestionService";

class QuestionController {

    createQuestion(question) {

        return QuestionService.createQuestion(question);

    }

    getAllQuestions() {

        return QuestionService.getAllQuestions();

    }

    getQuestion(id) {

        return QuestionService.getQuestion(id);

    }

    getQuestionsByQuiz(quizId) {

        return QuestionService.getQuestionsByQuiz(quizId);

    }

    updateQuestion(question) {

        return QuestionService.updateQuestion(question);

    }

    deleteQuestion(id) {

        const confirmed = window.confirm(
            "Are you sure you want to delete this question?"
        );

        if (!confirmed) {
            return false;
        }

        return QuestionService.deleteQuestion(id);

    }

    moveQuestionUp(id) {

        return QuestionService.moveUp(id);

    }

    moveQuestionDown(id) {

        return QuestionService.moveDown(id);

    }

    totalQuestions() {

        return QuestionService.totalQuestions();

    }

}

const questionController = new QuestionController();

export default questionController;