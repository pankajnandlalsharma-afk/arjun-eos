/**
 * ============================================================
 * ARJUN EOS
 * Knowledge Acquisition Controller
 *
 * Contract : KE.KAD
 * Layer    : Controller
 * Purpose  : Public API for the Knowledge Acquisition Department.
 * ============================================================
 */

import KnowledgeAcquisitionService
    from "../services/KnowledgeAcquisitionService";

export default class KnowledgeAcquisitionController {

    constructor() {

        this.service = new KnowledgeAcquisitionService();

    }

    //--------------------------------------------------
    // Registration
    //--------------------------------------------------

    registerResource(resource) {

        return this.service.registerResource(resource);

    }

    //--------------------------------------------------
    // Inspection
    //--------------------------------------------------

    inspectResource(resourceId) {

        return this.service.inspectResource(resourceId);

    }

    prepareForValidation(resourceId) {

        return this.service.prepareForValidation(resourceId);

    }

    //--------------------------------------------------
    // Validation
    //--------------------------------------------------

    approveResource(resourceId) {

        return this.service.approveResource(resourceId);

    }

    rejectResource(resourceId) {

        return this.service.rejectResource(resourceId);

    }

    markPending(resourceId) {

        return this.service.markPending(resourceId);

    }

    getValidationQueue() {

        return this.service.getValidationQueue();

    }

    //--------------------------------------------------
    // Classification
    //--------------------------------------------------

    classifyResource(resourceId) {

        return this.service.classifyResource(resourceId);

    }

    //--------------------------------------------------
    // Queries
    //--------------------------------------------------

    getResource(resourceId) {

        return this.service.getResource(resourceId);

    }

    getAllResources() {

        return this.service.getAllResources();

    }

    //--------------------------------------------------
    // Maintenance
    //--------------------------------------------------

    deleteResource(resourceId) {

        return this.service.deleteResource(resourceId);

    }

    clearResources() {

        return this.service.clearResources();

    }

}