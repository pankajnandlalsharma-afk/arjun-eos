export default class WorkflowOrchestrator {

    constructor() {

        this.workflow = {

            id: Date.now(),

            status: "Initialized",

            currentStage: "Business Intelligence",

            completedStages: [],

            pendingStages: [

                "Business Intelligence",

                "Revenue Intelligence",

                "Audience Intelligence",

                "Competitor Intelligence",

                "Research Intelligence",

                "Pattern Intelligence",

                "Trajectory Intelligence",

                "Strategy Intelligence",

                "Production Blueprint",

                "Decision Intelligence",

                "Knowledge Pipeline",

                "Quiz Factory",

                "Shorts Factory",

                "Publishing",

                "Analytics"

            ],

            executionLog: []

        };

    }

    start(project) {

        this.workflow.project = project;

        this.workflow.status = "Running";

        this.workflow.startedAt = new Date();

        return this.workflow;

    }

    completeStage(stage) {

        this.workflow.completedStages.push(stage);

        this.workflow.pendingStages =

            this.workflow.pendingStages.filter(

                item => item !== stage

            );

        this.workflow.currentStage =

            this.workflow.pendingStages[0] || "Completed";

        this.workflow.executionLog.push({

            stage,

            completedAt: new Date()

        });

    }

    finish() {

        this.workflow.status = "Completed";

        this.workflow.completedAt = new Date();

        return this.workflow;

    }

    getWorkflow() {

        return this.workflow;

    }

}