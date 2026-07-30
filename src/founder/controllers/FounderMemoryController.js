/**
 * ============================================================
 * ARJUN EOS
 * Founder Memory Controller
 * Version 2.0
 * ============================================================
 */

import FounderMemoryService from "../services/FounderMemoryService";

export default class FounderMemoryController {

    constructor() {

        this.service = new FounderMemoryService();

    }

    /**
     * ============================================================
     * IDEA OPERATIONS
     * ============================================================
     */

    createIdea(idea) {

        return this.service.createIdea(idea);

    }

    getIdeas() {

        return this.service.getIdeas();

    }

    updateIdea(updatedIdea) {

        return this.service.updateIdea(updatedIdea);

    }

    deleteIdea(id) {

        return this.service.deleteIdea(id);

    }

    /**
     * ============================================================
     * DECISION OPERATIONS
     * ============================================================
     */

    createDecision(decision) {

        return this.service.createDecision(decision);

    }

    getDecisions() {

        return this.service.getDecisions();

    }

    /**
     * ============================================================
     * MEMORY OPERATIONS
     * ============================================================
     */

    clearMemory() {

        this.service.clearMemory();

    }

}