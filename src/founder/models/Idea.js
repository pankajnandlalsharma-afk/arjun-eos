/**
 * ============================================================
 * ARJUN EOS
 * Founder Memory System
 * Idea Domain Model
 * Version 2.0
 * ============================================================
 */

export default class Idea {

    constructor({

        id = crypto.randomUUID(),

        title = "",

        description = "",

        category = "General",

        priority = "Medium",

        status = "Captured",

        businessValue = "",

        estimatedEffort = "",

        suggestedVersion = "1.0",

        tags = [],

        pinned = false,

        archived = false,

        source = "Founder Memory",

        relatedProjects = [],

        relatedTasks = [],

        relatedIdeas = [],

        aiSummary = "",

        notes = "",

        createdBy = "Founder",

        createdAt = new Date().toISOString(),

        updatedAt = new Date().toISOString()

    } = {}) {

        this.id = id;

        this.title = title;

        this.description = description;

        this.category = category;

        this.priority = priority;

        this.status = status;

        this.businessValue = businessValue;

        this.estimatedEffort = estimatedEffort;

        this.suggestedVersion = suggestedVersion;

        this.tags = tags;

        this.pinned = pinned;

        this.archived = archived;

        this.source = source;

        this.relatedProjects = relatedProjects;

        this.relatedTasks = relatedTasks;

        this.relatedIdeas = relatedIdeas;

        this.aiSummary = aiSummary;

        this.notes = notes;

        this.createdBy = createdBy;

        this.createdAt = createdAt;

        this.updatedAt = updatedAt;

    }

}