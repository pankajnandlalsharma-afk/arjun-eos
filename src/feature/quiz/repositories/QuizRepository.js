/**
 * ============================================================
 * ARJUN EOS
 * Quiz Studio
 * Quiz Repository
 * Version 2.0
 * ============================================================
 */

import storageManager from "../../core/storage/StorageManager";

const STORAGE_KEY = "ARJUN_EOS_QUIZZES";

class QuizRepository {

    constructor() {

        this.quizzes = this.load();

    }

    load() {

        const quizzes = storageManager.get(STORAGE_KEY);

        return Array.isArray(quizzes)
            ? quizzes
            : [];

    }

    save() {

        storageManager.set(
            STORAGE_KEY,
            this.quizzes
        );

    }

    create(quiz) {

        this.quizzes.push(quiz);

        this.save();

        return quiz;

    }

    /**
     * ========================================================
     * Bulk Import
     * ========================================================
     */

    importQuizzes(quizzes) {

        if (!Array.isArray(quizzes) || quizzes.length === 0) {

            return [];

        }

        const imported = [];

        for (const quiz of quizzes) {

            const newQuiz = {

                ...quiz

            };

            if (!newQuiz.id) {

                newQuiz.id = crypto.randomUUID();

            }

            const exists = this.quizzes.some(
                existingQuiz => existingQuiz.id === newQuiz.id
            );

            if (exists) {

                continue;

            }

            this.quizzes.push(newQuiz);

            imported.push(newQuiz);

        }

        this.save();

        return imported;

    }

    getAll() {

        return [...this.quizzes];

    }

    getById(id) {

        return this.quizzes.find(

            quiz => quiz.id === id

        ) || null;

    }

    update(updatedQuiz) {

        const index = this.quizzes.findIndex(

            quiz => quiz.id === updatedQuiz.id

        );

        if (index === -1) {

            return null;

        }

        this.quizzes[index] = {

            ...this.quizzes[index],

            ...updatedQuiz

        };

        this.save();

        return this.quizzes[index];

    }

    delete(id) {

        const index = this.quizzes.findIndex(

            quiz => quiz.id === id

        );

        if (index === -1) {

            return false;

        }

        this.quizzes.splice(index, 1);

        this.save();

        return true;

    }

    clear() {

        this.quizzes = [];

        this.save();

    }

}

const quizRepository = new QuizRepository();

export default quizRepository;