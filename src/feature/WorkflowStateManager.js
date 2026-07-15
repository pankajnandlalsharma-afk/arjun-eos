export default class WorkflowStateManager {

    constructor() {

        this.state = {

            workflowId: null,

            currentState: "Idle",

            previousState: null,

            progress: 0,

            startedAt: null,

            updatedAt: null,

            completedAt: null,

            errors: [],

            logs: []

        };

    }

    start(workflowId) {

        this.state.workflowId = workflowId;

        this.state.currentState = "Running";

        this.state.startedAt = new Date();

    }

    updateProgress(progress) {

        this.state.progress = progress;

        this.state.updatedAt = new Date();

    }

    pause() {

        this.state.previousState = this.state.currentState;

        this.state.currentState = "Paused";

    }

    resume() {

        this.state.currentState = "Running";

    }

    fail(error) {

        this.state.currentState = "Failed";

        this.state.errors.push(error);

    }

    complete() {

        this.state.progress = 100;

        this.state.currentState = "Completed";

        this.state.completedAt = new Date();

    }

    getState() {

        return this.state;

    }

}