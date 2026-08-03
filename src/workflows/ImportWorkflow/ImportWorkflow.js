/**
 * ============================================================
 * ARJUN EOS
 * Import Workflow Result
 * WKF-IMP-002
 * ============================================================
 *
 * Standard response returned by the Enterprise
 * Import Workflow.
 * ============================================================
 */

export default class ImportWorkflowResult {

    constructor({

        success = false,

        admissionTicket = null,

        enterpriseResource = null,

        statistics = null,

        knowledge = null,

        pdf = null,

        message = "",

        error = null

    } = {}) {

        this.success = success;

        this.admissionTicket = admissionTicket;

        this.enterpriseResource = enterpriseResource;

        this.statistics = statistics;

        this.knowledge = knowledge;

        this.pdf = pdf;

        this.message = message;

        this.error = error;

        this.completedAt = new Date().toISOString();

    }

}