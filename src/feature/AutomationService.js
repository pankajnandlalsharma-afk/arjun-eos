/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Automation Service
 *
 * Contract : AUTOMATION-004
 * Layer    : Service
 * Purpose  : Coordinates Enterprise Automation.
 * ============================================================
 */

import AutomationEngine
    from "../engine/AutomationEngine";

import AutomationRuleRepository
    from "../repositories/AutomationRuleRepository";

export default class AutomationService {

    constructor() {

        this.engine =
            new AutomationEngine();

        this.repository =
            new AutomationRuleRepository();

    }

    //--------------------------------------------------
    // Execute Automation
    //--------------------------------------------------

    execute(segment) {

        return this.engine.execute(

            segment

        );

    }

    //--------------------------------------------------
    // Production
    //--------------------------------------------------

    executeProduction(plan) {

        return this.engine.executeProduction(

            plan

        );

    }

    //--------------------------------------------------
    // Rules
    //--------------------------------------------------

    saveRule(rule) {

        return this.repository.save(

            rule

        );

    }

    getRules() {

        return this.repository.getAll();

    }

    getEnabledRules() {

        return this.repository.getEnabledRules();

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return {

            engine:

                this.engine.getStatistics(),

            repository:

                this.repository.getStatistics()

        };

    }

    //--------------------------------------------------
    // Reset
    //--------------------------------------------------

    reset() {

        this.engine.reset();

    }

}