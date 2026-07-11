import AutomationEngine from "./AutomationEngine";
import DecisionEngine from "./DecisionEngine";
import WorkflowEngine from "./WorkflowEngine";
import ProductionEngine from "./ProductionEngine";
import KnowledgeEngine from "./KnowledgeEngine";
import ChannelFactoryEngine from "./ChannelFactoryEngine";

export default class EnterpriseEngine {

    constructor() {

        this.automation = new AutomationEngine();

        this.decision = new DecisionEngine();

        this.workflow = new WorkflowEngine();

        this.production = new ProductionEngine();

        this.knowledge = new KnowledgeEngine();

        this.channelFactory = new ChannelFactoryEngine();

    }

    launch(segment) {

        console.log("================================");

        console.log("ARJUN ENTERPRISE STARTED");

        console.log("================================");

        this.automation.startMission(segment);

    }

    createChannel(segment, name, niche) {

        this.channelFactory.createChannel(

            segment,

            name,

            niche

        );

    }

    execute(stage) {

        return this.automation.next(stage);

    }

    finish() {

        this.automation.finish();

        console.log("Enterprise Mission Completed");

    }

}