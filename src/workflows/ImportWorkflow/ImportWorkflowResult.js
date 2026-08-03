/**
 * ============================================================
 * ARJUN EOS
 * Import Workflow Result
 * WKF-IMP-002
 * ============================================================
 *
 * Standard Enterprise response returned by every
 * import workflow.
 * ============================================================
 */

export default class ImportWorkflowResult {

    constructor({

        success,

        admissionTicket,

        enterpriseResource,

        statistics,

        message = null,

        error = null

    }) {

        this.success = success;

        this.admissionTicket = admissionTicket;

        this.enterpriseResource = enterpriseResource;

        this.statistics = statistics;

        this.message = message;

        this.error = error;

        this.completedAt = new Date().toISOString();

    }

}