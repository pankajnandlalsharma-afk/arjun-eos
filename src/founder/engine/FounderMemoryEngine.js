/**
 * ============================================================
 * ARJUN EOS
 * Founder Memory Engine
 * Version 2.0
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
            result
        );

        return result;

    }

    getIdeas() {

        return this.controller.getIdeas();

    }

    updateIdea(updatedIdea) {

        const result = this.controller.updateIdea(updatedIdea);

        if (result) {

            eventBus.publish(
                EventTypes.IDEA_UPDATED,
                result
            );

        }

        return result;

    }

    deleteIdea(id) {

        const deleted = this.controller.deleteIdea(id);

        if (deleted) {

            eventBus.publish(
                EventTypes.IDEA_DELETED,
                id
            );

        }

        return deleted;

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
            result
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