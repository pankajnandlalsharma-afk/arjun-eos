/**
 * ============================================================
 * ARJUN EOS
 * Founder Memory Repository
 * Version 1.0
 * ============================================================
 */

export default class FounderMemoryRepository {

    constructor() {

        this.ideas = [];

        this.decisions = [];

    }

    addIdea(idea) {

        this.ideas.push(idea);

        return idea;

    }

    getIdeas() {

        return [...this.ideas];

    }

    addDecision(decision) {

        this.decisions.push(decision);

        return decision;

    }

    getDecisions() {

        return [...this.decisions];

    }

    clear() {

        this.ideas = [];

        this.decisions = [];

    }

}