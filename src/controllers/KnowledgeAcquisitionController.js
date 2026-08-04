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

    registerResource(resource) {

        return this.service.registerResource(resource);

    }

    inspectResource(resourceId) {

        return this.service.inspectResource(resourceId);

    }

    prepareForValidation(resourceId) {

        return this.service.prepareForValidation(resourceId);

    }

    getResource(resourceId) {

        return this.service.getResource(resourceId);

    }

    getAllResources() {

        return this.service.getAllResources();

    }

    deleteResource(resourceId) {

        return this.service.deleteResource(resourceId);

    }

    clearResources() {

        return this.service.clearResources();

    }

}