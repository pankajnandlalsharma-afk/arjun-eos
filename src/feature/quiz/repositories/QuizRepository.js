/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Operating System
 * Quiz Repository
 * Version 2.1
 * ============================================================
 */

import storageManager from "../../core/storage/StorageManager";

const STORAGE_KEY = "ARJUN_EOS_QUIZZES";

class QuizRepository {

    constructor() {

        this.quizzes = this.load();

    }

    /**
     * ========================================================
     * Load
     * ========================================================
     */

    load() {

        const quizzes = storageManager.get(STORAGE_KEY);

        return Array.isArray(quizzes)
            ? quizzes
            : [];

    }

    /**
     * ========================================================
     * Save
     * ========================================================
     */

    save() {

        storageManager.set(
            STORAGE_KEY,
            this.quizzes
        );

    }

    /**
     * ========================================================
     * Create
     * ========================================================
     */

    create(quiz) {

        const newQuiz = {

            ...quiz,

            id: quiz.id || crypto.randomUUID()

        };

        const duplicate = this.quizzes.some(

            existingQuiz =>

                existingQuiz.title
                    ?.trim()
                    .toLowerCase() ===

                newQuiz.title
                    ?.trim()
                    .toLowerCase()

        );

        if (duplicate) {

            throw new Error(
                "Quiz title already exists."
            );

        }

        this.quizzes.push(newQuiz);

        this.save();

        return newQuiz;

    }

    /**
     * ========================================================
     * Bulk Import
     * ========================================================
     */

    importQuizzes(quizzes = []) {

        if (!Array.isArray(quizzes) || quizzes.length === 0) {

            return [];

        }

        const imported = [];

        for (const quiz of quizzes) {

            const newQuiz = {

                ...quiz,

                id: quiz.id || crypto.randomUUID()

            };

            const exists = this.quizzes.some(

                existingQuiz =>

                    existingQuiz.id === newQuiz.id

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

    /**
     * ========================================================
     * Read
     * ========================================================
     */

    getAll() {

        return [...this.quizzes];

    }

    getById(id) {

        return this.quizzes.find(

            quiz => quiz.id === id

        ) || null;

    }

    /**
     * ========================================================
     * Update
     * ========================================================
     */

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

    /**
     * ========================================================
     * Delete
     * ========================================================
     */

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

    /**
     * ========================================================
     * Utility
     * ========================================================
     */

    clear() {

        this.quizzes = [];

        this.save();

    }

}

const quizRepository = Object.freeze(
    new QuizRepository()
);

export default quizRepository;