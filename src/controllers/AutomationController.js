/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Automation Controller
 *
 * Contract : AUTOMATION-005
 * Layer    : Controller
 * Purpose  : Public API for Enterprise Automation.
 * ============================================================
 */

import AutomationService
    from "../services/AutomationService";

export default class AutomationController {

    constructor() {

        this.service =
            new AutomationService();

    }

    //--------------------------------------------------
    // Execute
    //--------------------------------------------------

    execute(segment) {

        return this.service.execute(

            segment

        );

    }

    //--------------------------------------------------
    // Production
    //--------------------------------------------------

    executeProduction(plan) {

        return this.service.executeProduction(

            plan

        );

    }

    //--------------------------------------------------
    // Rules
    //--------------------------------------------------

    saveRule(rule) {

        return this.service.saveRule(

            rule

        );

    }

    getRules() {

        return this.service.getRules();

    }

    getEnabledRules() {

        return this.service.getEnabledRules();

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return this.service.getStatistics();

    }

    //--------------------------------------------------
    // Maintenance
    //--------------------------------------------------

    reset() {

        this.service.reset();

    }

}