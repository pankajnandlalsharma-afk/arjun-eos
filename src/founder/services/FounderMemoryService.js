/**
 * ============================================================
 * ARJUN EOS
 * Founder Memory Service
 * ============================================================
 */

import FounderMemoryRepository from "../repositories/FounderMemoryRepository";

export default class FounderMemoryService {

    constructor() {

        this.repository = new FounderMemoryRepository();

    }

    createIdea(idea) {

        return this.repository.addIdea(idea);

    }

    getIdeas() {

        return this.repository.getIdeas();

    }

    createDecision(decision) {

        return this.repository.addDecision(decision);

    }

    getDecisions() {

        return this.repository.getDecisions();

    }

    clearMemory() {

        this.repository.clear();

    }

}