/**
 * ============================================================
 * ARJUN EOS
 * Founder Memory Repository
 * Version 4.0
 * ============================================================
 */

import { FounderMemoryKeys } from "../constants/FounderMemoryKeys";
import storageManager from "../../core/storage/StorageManager";

export default class FounderMemoryRepository {

    constructor() {

        this.ideas = this.loadIdeas();

        this.decisions = this.loadDecisions();

    }

    /**
     * ============================================================
     * IDEA OPERATIONS
     * ============================================================
     */

    addIdea(idea) {

        this.ideas.push(idea);

        this.saveIdeas();

        return idea;

    }

    getIdeas() {

        return [...this.ideas];

    }

    updateIdea(updatedIdea) {

        const index = this.ideas.findIndex(

            idea => idea.id === updatedIdea.id

        );

        if (index === -1) {

            return null;

        }

        this.ideas[index] = {

            ...this.ideas[index],

            ...updatedIdea

        };

        this.saveIdeas();

        return this.ideas[index];

    }

    deleteIdea(id) {

        const index = this.ideas.findIndex(

            idea => idea.id === id

        );

        if (index === -1) {

            return false;

        }

        this.ideas.splice(index, 1);

        this.saveIdeas();

        return true;

    }

    /**
     * ============================================================
     * DECISION OPERATIONS
     * ============================================================
     */

    addDecision(decision) {

        this.decisions.push(decision);

        this.saveDecisions();

        return decision;

    }

    getDecisions() {

        return [...this.decisions];

    }

    /**
     * ============================================================
     * MEMORY OPERATIONS
     * ============================================================
     */

    clear() {

        this.ideas = [];

        this.decisions = [];

        this.saveIdeas();

        this.saveDecisions();

    }

    /**
     * ============================================================
     * STORAGE
     * ============================================================
     */

    loadIdeas() {

        return storageManager.get(
            FounderMemoryKeys.IDEAS,
            []
        );

    }

    saveIdeas() {

        storageManager.set(
            FounderMemoryKeys.IDEAS,
            this.ideas
        );

    }

    loadDecisions() {

        return storageManager.get(
            FounderMemoryKeys.DECISIONS,
            []
        );

    }

    saveDecisions() {

        storageManager.set(
            FounderMemoryKeys.DECISIONS,
            this.decisions
        );

    }

}