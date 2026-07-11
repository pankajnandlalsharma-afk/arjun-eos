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

    }

    execute(segment) {

        console.log("==============================");

        console.log("ARJUN AUTOMATION STARTED");

        console.log("==============================");

        this.mission.start(segment);

        this.workflow.start();

        this.knowledge.importKnowledge(segment);

        const research = this.research.start(segment);

        const plan = this.contentPlanner.createPlan(research);

        console.log(plan);

        return plan;

    }

}