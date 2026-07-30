/**
 * ============================================================
 * ARJUN EOS
 * Founder Memory Engine
 * ============================================================
 */

import FounderMemoryController from "../controllers/FounderMemoryController";

export default class FounderMemoryEngine {

    constructor() {

        this.controller = new FounderMemoryController();

    }

    captureIdea(idea) {

        return this.controller.createIdea(idea);

    }

    captureDecision(decision) {

        return this.controller.createDecision(decision);

    }

    getIdeas() {

        return this.controller.getIdeas();

    }

    getDecisions() {

        return this.controller.getDecisions();

    }

    clear() {

        this.controller.clearMemory();

    }

}