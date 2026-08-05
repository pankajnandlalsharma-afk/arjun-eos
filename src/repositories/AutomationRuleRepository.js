/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Automation Repository
 *
 * Contract : AUTOMATION-002
 * Layer    : Repository
 * Purpose  : Stores Enterprise Automation Rules.
 * ============================================================
 */

const STORAGE_KEY =
    "arjun.eos.automation.rules";

export default class AutomationRuleRepository {

    //--------------------------------------------------
    // Read All
    //--------------------------------------------------

    getAll() {

        const data =

            localStorage.getItem(

                STORAGE_KEY

            );

        return data

            ? JSON.parse(data)

            : [];

    }

    //--------------------------------------------------
    // Save All
    //--------------------------------------------------

    saveAll(rules) {

        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(rules)

        );

    }

    //--------------------------------------------------
    // Save
    //--------------------------------------------------

    save(rule) {

        const rules =

            this.getAll();

        const index =

            rules.findIndex(

                item =>

                    item.ruleId ===

                    rule.ruleId

            );

        if (index >= 0) {

            rules[index] =

                rule;

        }

        else {

            rules.push(

                rule

            );

        }

        this.saveAll(

            rules

        );

        return rule;

    }

    //--------------------------------------------------
    // Find By ID
    //--------------------------------------------------

    findById(ruleId) {

        return this

            .getAll()

            .find(

                rule =>

                    rule.ruleId ===

                    ruleId

            );

    }

    //--------------------------------------------------
    // Enabled Rules
    //--------------------------------------------------

    getEnabledRules() {

        return this

            .getAll()

            .filter(

                rule =>

                    rule.enabled

            );

    }

    //--------------------------------------------------
    // Delete
    //--------------------------------------------------

    delete(ruleId) {

        const rules =

            this.getAll().filter(

                rule =>

                    rule.ruleId !==

                    ruleId

            );

        this.saveAll(

            rules

        );

    }

    //--------------------------------------------------
    // Clear
    //--------------------------------------------------

    clear() {

        localStorage.removeItem(

            STORAGE_KEY

        );

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        const rules =

            this.getAll();

        return {

            totalRules:

                rules.length,

            enabled:

                rules.filter(

                    rule =>

                        rule.enabled

                ).length,

            disabled:

                rules.filter(

                    rule =>

                        !rule.enabled

                ).length

        };

    }

}