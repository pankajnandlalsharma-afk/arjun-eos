/**
 * ====================================================
 * ARJUN EOS
 * Enterprise Question Repository
 *
 * Contract : QUESTION-002
 * Layer    : Repository
 * Purpose  : Stores and manages Enterprise Questions.
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

    //--------------------------------------------------
    // Read
    //--------------------------------------------------

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
            .filter(

                question =>

                    question.quizId === quizId

            )
            .sort(

                (a, b) =>

                    (a.order ?? 0) -

                    (b.order ?? 0)

            );

    }

    //--------------------------------------------------
    // Enterprise Search
    //--------------------------------------------------

    getByDifficulty(level) {

        return this
            .getAll()
            .filter(

                question =>

                    question.difficulty === level

            );

    }

    getByBloomLevel(level) {

        return this
            .getAll()
            .filter(

                question =>

                    question.bloomLevel === level

            );

    }

    getByStatus(status) {

        return this
            .getAll()
            .filter(

                question =>

                    question.status === status

            );

    }

    getByLearningObjective(objective) {

        return this
            .getAll()
            .filter(

                question =>

                    question.learningObjective === objective

            );

    }

    getByTag(tag) {

        return this
            .getAll()
            .filter(

                question =>

                    question.tags?.includes(tag)

            );

    }

    search(keyword = "") {

        keyword = keyword.toLowerCase();

        return this
            .getAll()
            .filter(question =>

                question.question
                    ?.toLowerCase()
                    .includes(keyword)

                ||

                question.topic
                    ?.toLowerCase()
                    .includes(keyword)

                ||

                question.learningObjective
                    ?.toLowerCase()
                    .includes(keyword)

                ||

                question.tags?.some(

                    tag =>

                        tag
                            .toLowerCase()
                            .includes(keyword)

                )

            );

    }

    //--------------------------------------------------
    // Save
    //--------------------------------------------------

    save(question) {

        const questions = this.getAll();

        const existingIndex = questions.findIndex(

            item => item.id === question.id

        );

        if (existingIndex >= 0) {

            return this.update(question);

        }

        const quizQuestions = questions.filter(

            q => q.quizId === question.quizId

        );

        question.order = quizQuestions.length;

        questions.push(question);

        DatabaseManager.set(

            COLLECTION,

            questions

        );

        LoggerManager.info(

            `Question saved: ${question.question}`

        );

        return question;

    }

    //--------------------------------------------------
    // Update
    //--------------------------------------------------

    update(updatedQuestion) {

        const questions = this.getAll();

        const index = questions.findIndex(

            question =>

                question.id === updatedQuestion.id

        );

        if (index === -1) {

            return null;

        }

        if (updatedQuestion.order === undefined) {

            updatedQuestion.order =

                questions[index].order ?? 0;

        }

        updatedQuestion.updatedAt =

            new Date().toISOString();

        questions[index] = updatedQuestion;

        DatabaseManager.set(

            COLLECTION,

            questions

        );

        LoggerManager.info(

            `Question updated: ${updatedQuestion.question}`

        );

        return updatedQuestion;

    }

    //--------------------------------------------------
    // Delete
    //--------------------------------------------------

    delete(id) {

        const questions = this.getAll();

        const question = questions.find(

            q => q.id === id

        );

        if (!question) {

            return false;

        }

        const filtered = questions.filter(

            q => q.id !== id

        );

        this.normalizeOrder(

            filtered,

            question.quizId

        );

        DatabaseManager.set(

            COLLECTION,

            filtered

        );

        LoggerManager.info(

            `Question deleted: ${id}`

        );

        return true;

    }

    //--------------------------------------------------
    // Ordering
    //--------------------------------------------------

    moveUp(id) {

        const current = this.getById(id);

        if (!current) {

            return false;

        }

        return this.move(

            id,

            (current.order ?? 0) - 1

        );

    }

    moveDown(id) {

        const current = this.getById(id);

        if (!current) {

            return false;

        }

        return this.move(

            id,

            (current.order ?? 0) + 1

        );

    }

    move(id, targetIndex) {

        const questions = this
            .getAll()
            .map(

                question => ({ ...question })

            );

        const current = questions.find(

            question => question.id === id

        );

        if (!current) {

            return false;

        }

        const quizQuestions = questions
            .filter(

                question =>

                    question.quizId === current.quizId

            )
            .sort(

                (a, b) =>

                    (a.order ?? 0) -

                    (b.order ?? 0)

            );

        const currentIndex = quizQuestions.findIndex(

            question =>

                question.id === id

        );

        if (currentIndex === -1) {

            return false;

        }

        targetIndex = Math.max(

            0,

            Math.min(

                targetIndex,

                quizQuestions.length - 1

            )

        );

        const [movingQuestion] = quizQuestions.splice(

            currentIndex,

            1

        );

        quizQuestions.splice(

            targetIndex,

            0,

            movingQuestion

        );

        quizQuestions.forEach(

            (question, index) => {

                question.order = index;

            }

        );

        const finalQuestions = questions.map(

            question =>

                quizQuestions.find(

                    q => q.id === question.id

                ) ?? question

        );

        DatabaseManager.set(

            COLLECTION,

            finalQuestions

        );

        LoggerManager.info(

            `Question reordered: ${id}`

        );

        return true;

    }

    normalizeOrder(allQuestions, quizId) {

        const quizQuestions = allQuestions
            .filter(

                question =>

                    question.quizId === quizId

            )
            .sort(

                (a, b) =>

                    (a.order ?? 0) -

                    (b.order ?? 0)

            );

        quizQuestions.forEach(

            (question, index) => {

                question.order = index;

            }

        );

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        const questions = this.getAll();

        return {

            totalQuestions:

                questions.length,

            draftQuestions:

                questions.filter(

                    q =>

                        q.status === "DRAFT"

                ).length,

            approvedQuestions:

                questions.filter(

                    q =>

                        q.status === "APPROVED"

                ).length,

            readyQuestions:

                questions.filter(

                    q =>

                        q.status === "READY"

                ).length,

            easyQuestions:

                questions.filter(

                    q =>

                        q.difficulty === "EASY"

                ).length,

            mediumQuestions:

                questions.filter(

                    q =>

                        q.difficulty === "MEDIUM"

                ).length,

            hardQuestions:

                questions.filter(

                    q =>

                        q.difficulty === "HARD"

                ).length

        };

    }

    //--------------------------------------------------
    // Count
    //--------------------------------------------------

    count() {

        return this.getAll().length;

    }

}

const questionRepository = new QuestionRepository();

export default questionRepository;