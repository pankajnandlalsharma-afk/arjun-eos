/**
 * ============================================================
 * ARJUN EOS
 * Knowledge Acquisition Service
 *
 * Contract : KE.KAD
 * Layer    : Service
 * Purpose  : Orchestrates Knowledge Acquisition operations.
 * ============================================================
 */

import KnowledgeAcquisitionEngine
    from "../engine/KnowledgeAcquisitionEngine";

import KnowledgeAcquisitionRepository
    from "../repositories/KnowledgeAcquisitionRepository";

export default class KnowledgeAcquisitionService {

    constructor() {

        this.engine = new KnowledgeAcquisitionEngine();

        this.repository = new KnowledgeAcquisitionRepository();

    }

    registerResource(resource) {

        resource = this.engine.registerResource(resource);

        this.repository.save(resource);

        return resource;

    }

    inspectResource(resourceId) {

        let resource = this.repository.findById(resourceId);

        if (!resource) {

            throw new Error("Enterprise Resource not found.");

        }

        resource = this.engine.inspectResource(resource);

        this.repository.save(resource);

        return resource;

    }

    prepareForValidation(resourceId) {

        let resource = this.repository.findById(resourceId);

        if (!resource) {

            throw new Error("Enterprise Resource not found.");

        }

        resource = this.engine.prepareForValidation(resource);

        this.repository.save(resource);

        return resource;

    }

    //--------------------------------------------------
    // Validation Operations
    //--------------------------------------------------

    approveResource(resourceId) {

        let resource = this.repository.findById(resourceId);

        if (!resource) {

            throw new Error("Enterprise Resource not found.");

        }

        resource.lifecycle = "APPROVED";

        resource.updatedAt = new Date().toISOString();

        this.repository.save(resource);

        return resource;

    }

    rejectResource(resourceId) {

        let resource = this.repository.findById(resourceId);

        if (!resource) {

            throw new Error("Enterprise Resource not found.");

        }

        resource.lifecycle = "REJECTED";

        resource.updatedAt = new Date().toISOString();

        this.repository.save(resource);

        return resource;

    }

    markPending(resourceId) {

        let resource = this.repository.findById(resourceId);

        if (!resource) {

            throw new Error("Enterprise Resource not found.");

        }

        resource.lifecycle = "PENDING";

        resource.updatedAt = new Date().toISOString();

        this.repository.save(resource);

        return resource;

    }

    getValidationQueue() {

        return this.repository
            .getAll()
            .filter(

                resource =>

                    resource.lifecycle === "PENDING"

                    ||

                    resource.lifecycle === "VALIDATION_PENDING"

            );

    }

    //--------------------------------------------------
    // Queries
    //--------------------------------------------------

    getResource(resourceId) {

        return this.repository.findById(resourceId);

    }

    getAllResources() {

        return this.repository.getAll();

    }

    deleteResource(resourceId) {

        this.repository.delete(resourceId);

    }

    clearResources() {

        this.repository.clear();

    }

}