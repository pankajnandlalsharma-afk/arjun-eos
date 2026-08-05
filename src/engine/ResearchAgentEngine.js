/**
 * ============================================================
 * ARJUN EOS
 * Research Agent Engine
 *
 * Contract : RESEARCH-AGENT-003
 * Layer    : Engine
 * Purpose  : Executes Enterprise Research operations.
 * ============================================================
 */

import EnterpriseAgentEngine
    from "./EnterpriseAgentEngine";

export default class ResearchAgentEngine
    extends EnterpriseAgentEngine {

    //--------------------------------------------------
    // Start Research
    //--------------------------------------------------

    executeResearch(agent, topic) {

        this.start(agent);

        agent.startResearch(topic);

        agent.updateProgress(15);

        return agent;

    }

    //--------------------------------------------------
    // Source Discovery
    //--------------------------------------------------

    executeSourceDiscovery(

        agent,

        sources = []

    ) {

        agent.discoverSources(

            sources

        );

        agent.updateProgress(35);

        return sources;

    }

    //--------------------------------------------------
    // Evidence Collection
    //--------------------------------------------------

    executeEvidenceCollection(

        agent,

        evidence = []

    ) {

        agent.collectEvidence(

            evidence

        );

        agent.updateProgress(55);

        return evidence;

    }

    //--------------------------------------------------
    // Keyword Discovery
    //--------------------------------------------------

    executeKeywordDiscovery(

        agent,

        keywords = []

    ) {

        agent.discoverKeywords(

            keywords

        );

        agent.updateProgress(75);

        return keywords;

    }

    //--------------------------------------------------
    // Research Summary
    //--------------------------------------------------

    executeSummary(

        agent,

        summary

    ) {

        agent.createSummary(

            summary

        );

        agent.updateProgress(90);

        return summary;

    }

    //--------------------------------------------------
    // Finish
    //--------------------------------------------------

    finish(agent) {

        this.complete(agent);

        return agent;

    }

}