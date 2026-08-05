/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Automation Rule
 *
 * Contract : AUTOMATION-001
 * Layer    : Model
 * Purpose  : Standard Enterprise Automation Rule Model.
 * ============================================================
 */

export default class AutomationRule {

    constructor(data = {}) {

        //--------------------------------------------------
        // Identity
        //--------------------------------------------------

        this.ruleId =
            data.ruleId ??
            crypto.randomUUID();

        this.ruleName =
            data.ruleName ?? "";

        this.description =
            data.description ?? "";

        //--------------------------------------------------
        // Trigger
        //--------------------------------------------------

        this.trigger =
            data.trigger ?? "";

        //--------------------------------------------------
        // Action
        //--------------------------------------------------

        this.action =
            data.action ?? "";

        //--------------------------------------------------
        // Configuration
        //--------------------------------------------------

        this.enabled =
            data.enabled ?? true;

        this.priority =
            data.priority ?? "NORMAL";

        this.conditions =
            data.conditions ?? [];

        //--------------------------------------------------
        // Execution
        //--------------------------------------------------

        this.executionCount =
            data.executionCount ?? 0;

        this.lastExecuted =
            data.lastExecuted ?? null;

        //--------------------------------------------------
        // Audit
        //--------------------------------------------------

        this.createdAt =
            data.createdAt ??
            new Date().toISOString();

        this.updatedAt =
            data.updatedAt ??
            new Date().toISOString();

    }

    //--------------------------------------------------
    // Enable
    //--------------------------------------------------

    enable() {

        this.enabled = true;

        this.touch();

    }

    //--------------------------------------------------
    // Disable
    //--------------------------------------------------

    disable() {

        this.enabled = false;

        this.touch();

    }

    //--------------------------------------------------
    // Execute
    //--------------------------------------------------

    executed() {

        this.executionCount++;

        this.lastExecuted =
            new Date().toISOString();

        this.touch();

    }

    //--------------------------------------------------
    // Touch
    //--------------------------------------------------

    touch() {

        this.updatedAt =
            new Date().toISOString();

    }

}