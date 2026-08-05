/**
 * ============================================================
 * ARJUN EOS
 * Research Agent
 *
 * Contract : RESEARCH-AGENT-001
 * Layer    : Model
 * Purpose  : Enterprise Research Intelligence Agent.
 * ============================================================
 */

import EnterpriseAgent
    from "./EnterpriseAgent";

export default class ResearchAgent
    extends EnterpriseAgent {

    constructor(data = {}) {

        super({

            ...data,

            agentType: "RESEARCH",

            department: "Research"

        });

        //--------------------------------------------------
        // Research Capabilities
        //--------------------------------------------------

        this.addCapability(

            "SOURCE_DISCOVERY"

        );

        this.addCapability(

            "SOURCE_EVALUATION"

        );

        this.addCapability(

            "EVIDENCE_COLLECTION"

        );

        this.addCapability(

            "KEYWORD_DISCOVERY"

        );

        this.addCapability(

            "TOPIC_EXPANSION"

        );

        this.addCapability(

            "RESEARCH_SUMMARY"

        );

    }

    //--------------------------------------------------
    // Start Research
    //--------------------------------------------------

    startResearch(topic) {

        this.updateTask(

            "RESEARCHING"

        );

        this.remember(

            "currentTopic",

            topic

        );

    }

    //--------------------------------------------------
    // Discover Sources
    //--------------------------------------------------

    discoverSources(sources = []) {

        this.updateTask(

            "DISCOVERING_SOURCES"

        );

        this.remember(

            "sources",

            sources

        );

        return sources;

    }

    //--------------------------------------------------
    // Collect Evidence
    //--------------------------------------------------

    collectEvidence(evidence = []) {

        this.updateTask(

            "COLLECTING_EVIDENCE"

        );

        this.remember(

            "evidence",

            evidence

        );

        return evidence;

    }

    //--------------------------------------------------
    // Discover Keywords
    //--------------------------------------------------

    discoverKeywords(keywords = []) {

        this.updateTask(

            "DISCOVERING_KEYWORDS"

        );

        this.remember(

            "keywords",

            keywords

        );

        return keywords;

    }

    //--------------------------------------------------
    // Build Summary
    //--------------------------------------------------

    createSummary(summary) {

        this.updateTask(

            "CREATING_SUMMARY"

        );

        this.remember(

            "summary",

            summary

        );

        return summary;

    }

}