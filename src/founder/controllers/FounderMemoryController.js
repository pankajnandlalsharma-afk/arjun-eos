/**
 * ============================================================
 * ARJUN EOS
 * Founder Memory Controller
 * ============================================================
 */

import FounderMemoryService from "../services/FounderMemoryService";

export default class FounderMemoryController {

    constructor() {

        this.service = new FounderMemoryService();

    }

    createIdea(idea) {

        return this.service.createIdea(idea);

    }

    getIdeas() {

        return this.service.getIdeas();

    }

    createDecision(decision) {

        return this.service.createDecision(decision);

    }

    getDecisions() {

        return this.service.getDecisions();

    }

    clearMemory() {

        this.service.clearMemory();

    }

}