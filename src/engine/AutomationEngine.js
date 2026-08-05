/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Automation Engine
 *
 * Contract : AUTOMATION-003
 * Layer    : Engine
 * Purpose  : Enterprise Automation Orchestrator
 * ============================================================
 */

import MissionEngine from "./MissionEngine";
import WorkflowEngine from "./WorkflowEngine";
import KnowledgeEngine from "./KnowledgeEngine";
import ResearchEngine from "./ResearchEngine";
import ContentPlannerEngine from "./ContentPlannerEngine";
import ProductionEngine from "./ProductionEngine";

export default class AutomationEngine {

    constructor() {

        this.mission = new MissionEngine();

        this.workflow = new WorkflowEngine();

        this.knowledge = new KnowledgeEngine();

        this.research = new ResearchEngine();

        this.contentPlanner = new ContentPlannerEngine();

        this.production = new ProductionEngine();

        //--------------------------------------------------
        // Runtime Statistics
        //--------------------------------------------------

        this.executions = 0;

        this.lastExecution = null;

    }

    //--------------------------------------------------
    // Execute Complete Automation
    //--------------------------------------------------

    execute(segment) {

        console.log("==============================");

        console.log("ARJUN AUTOMATION STARTED");

        console.log("==============================");

        this.executions++;

        this.lastExecution =
            new Date().toISOString();

        this.mission.start(segment);

        this.workflow.start();

        this.knowledge.importKnowledge(segment);

        const research =

            this.research.start(segment);

        const plan =

            this.contentPlanner.createPlan(

                research

            );

        console.log(plan);

        return plan;

    }

    //--------------------------------------------------
    // Execute Production Only
    //--------------------------------------------------

    executeProduction(plan) {

        return this.production.execute(

            plan

        );

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return {

            executions:

                this.executions,

            lastExecution:

                this.lastExecution,

            workflow:

                this.workflow.getStatistics
                    ? this.workflow.getStatistics()
                    : null

        };

    }

    //--------------------------------------------------
    // Reset
    //--------------------------------------------------

    reset() {

        this.executions = 0;

        this.lastExecution = null;

        console.log(

            "Automation Engine Reset"

        );

    }

}