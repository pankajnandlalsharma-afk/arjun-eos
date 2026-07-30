/**
 * ============================================================
 * ARJUN EOS
 * Founder Memory Service
 * Version 2.0
 * ============================================================
 */

import FounderMemoryRepository from "../repositories/FounderMemoryRepository";

export default class FounderMemoryService {

    constructor() {

        this.repository = new FounderMemoryRepository();

    }

    /**
     * ============================================================
     * IDEA OPERATIONS
     * ============================================================
     */

    createIdea(idea) {

        return this.repository.addIdea(idea);

    }

    getIdeas() {

        return this.repository.getIdeas();

    }

    updateIdea(updatedIdea) {

        return this.repository.updateIdea(updatedIdea);

    }

    deleteIdea(id) {

        return this.repository.deleteIdea(id);

    }

    /**
     * ============================================================
     * DECISION OPERATIONS
     * ============================================================
     */

    createDecision(decision) {

        return this.repository.addDecision(decision);

    }

    getDecisions() {

        return this.repository.getDecisions();

    }

    /**
     * ============================================================
     * MEMORY OPERATIONS
     * ============================================================
     */

    clearMemory() {

        this.repository.clear();

    }

}