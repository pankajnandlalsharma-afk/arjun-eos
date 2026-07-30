/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Event Types
 * ============================================================
 *
 * Single Source of Truth for all application events.
 * Every module must use EventTypes instead of hard-coded strings.
 *
 * Never publish or subscribe using raw string literals.
 *
 * ============================================================
 */

export const EventTypes = {

    /**
     * ============================================================
     * FOUNDER MEMORY
     * ============================================================
     */

    IDEA_CREATED: "idea.created",

    IDEA_UPDATED: "idea.updated",

    IDEA_DELETED: "idea.deleted",

    DECISION_CREATED: "decision.created",

    DECISION_UPDATED: "decision.updated",

    DECISION_DELETED: "decision.deleted",

    MEMORY_CLEARED: "memory.cleared",

    /**
     * ============================================================
     * KNOWLEDGE
     * ============================================================
     */

    KNOWLEDGE_IMPORTED: "knowledge.imported",

    KNOWLEDGE_UPDATED: "knowledge.updated",

    KNOWLEDGE_DELETED: "knowledge.deleted",

    /**
     * ============================================================
     * PROJECTS
     * ============================================================
     */

    PROJECT_CREATED: "project.created",

    PROJECT_UPDATED: "project.updated",

    PROJECT_DELETED: "project.deleted",

    /**
     * ============================================================
     * TASKS
     * ============================================================
     */

    TASK_CREATED: "task.created",

    TASK_UPDATED: "task.updated",

    TASK_COMPLETED: "task.completed",

    TASK_DELETED: "task.deleted",

    /**
     * ============================================================
     * QUIZ STUDIO
     * ============================================================
     */

    QUIZ_CREATED: "quiz.created",

    QUIZ_UPDATED: "quiz.updated",

    QUIZ_DELETED: "quiz.deleted",

    QUESTION_CREATED: "question.created",

    QUESTION_UPDATED: "question.updated",

    QUESTION_DELETED: "question.deleted",

    /**
     * ============================================================
     * AI
     * ============================================================
     */

    AI_JOB_STARTED: "ai.job.started",

    AI_JOB_COMPLETED: "ai.job.completed",

    AI_JOB_FAILED: "ai.job.failed",

    /**
     * ============================================================
     * SYSTEM
     * ============================================================
     */

    USER_LOGIN: "user.login",

    USER_LOGOUT: "user.logout",

    SETTINGS_CHANGED: "settings.changed",

    APPLICATION_STARTED: "application.started",

    APPLICATION_SHUTDOWN: "application.shutdown"

};

Object.freeze(EventTypes);