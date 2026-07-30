/**
 * ============================================================
 * ARJUN EOS
 * Founder Memory Engine
 * ============================================================
 */

import FounderMemoryController from "../controllers/FounderMemoryController";

import eventBus from "../../enterprise/events/EventBus";
import { EventTypes } from "../../enterprise/events/EventTypes";

class FounderMemoryEngine {

    constructor() {

        this.controller = new FounderMemoryController();

    }

    /**
     * ============================================================
     * IDEA OPERATIONS
     * ============================================================
     */

    captureIdea(idea) {

        const result = this.controller.createIdea(idea);

        eventBus.publish(
            EventTypes.IDEA_CREATED,
            idea
        );

        return result;

    }

    getIdeas() {

        return this.controller.getIdeas();

    }

    /**
     * ============================================================
     * DECISION OPERATIONS
     * ============================================================
     */

    captureDecision(decision) {

        const result = this.controller.createDecision(decision);

        eventBus.publish(
            EventTypes.DECISION_CREATED,
            decision
        );

        return result;

    }

    getDecisions() {

        return this.controller.getDecisions();

    }

    /**
     * ============================================================
     * MEMORY OPERATIONS
     * ============================================================
     */

    clear() {

        this.controller.clearMemory();

        eventBus.publish(
            EventTypes.MEMORY_CLEARED
        );

    }

}

const founderMemoryEngine = new FounderMemoryEngine();

export default founderMemoryEngine;