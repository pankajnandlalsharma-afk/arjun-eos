/**
 * ====================================================
 * ARJUN EOS
 * Quiz Controller
 * ====================================================
 */

import { QuizService } from "../services";

class QuizController {

    createQuiz(quiz) {

        return QuizService.createQuiz(quiz);

    }

    getAllQuizzes() {

        return QuizService.getAllQuizzes();

    }

    getQuiz(id) {

        return QuizService.getQuiz(id);

    }

    updateQuiz(quiz) {

        return QuizService.updateQuiz(quiz);

    }

    deleteQuiz(id) {

        return QuizService.deleteQuiz(id);

    }

    totalQuizzes() {

        return QuizService.totalQuizzes();

    }

}

const quizController = new QuizController();

export default quizController;