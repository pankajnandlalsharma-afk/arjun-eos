/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Resource Contract
 * Contract ID : EC-001
 * Component   : EnterpriseResource
 * Layer        : Enterprise Contract
 * Purpose      : Canonical Enterprise Resource used throughout
 *                the ARJUN EOS platform.
 * Version      : 2.0
 * Status       : Production
 * ============================================================
 */

import EnterpriseResourceLifecycle from "./EnterpriseResourceLifecycle";

export default class EnterpriseResource {

    constructor({

        resourceId,

        resourceName,

        originalFileName,

        resourceType,

        sourceType,

        storageLocation = "",

        knowledgeProjectId = null

    }) {

        //--------------------------------------------------
        // Identity
        //--------------------------------------------------

        this.resourceId = resourceId;

        this.resourceName = resourceName;

        this.originalFileName = originalFileName;

        this.resourceType = resourceType;

        this.sourceType = sourceType;

        this.storageLocation = storageLocation;

        this.knowledgeProjectId = knowledgeProjectId;

        //--------------------------------------------------
        // Lifecycle
        //--------------------------------------------------

        this.lifecycle = EnterpriseResourceLifecycle.REGISTERED;

        this.version = 1;

        //--------------------------------------------------
        // Audit
        //--------------------------------------------------

        this.createdAt = new Date().toISOString();

        this.updatedAt = new Date().toISOString();

        this.auditTrail = [];

        //--------------------------------------------------
        // Metadata
        //--------------------------------------------------

        this.metadata = {};

        this.statistics = {};

        //--------------------------------------------------
        // Classification
        //--------------------------------------------------

        this.tags = [];

        this.labels = [];

        this.classifications = [];

        //--------------------------------------------------
        // Validation
        //--------------------------------------------------

        this.validation = {

            validated: false,

            validatedAt: null,

            validatedBy: null,

            errors: []

        };

        //--------------------------------------------------
        // Processing
        //--------------------------------------------------

        this.processing = {

            status: "PENDING",

            currentStage: "REGISTERED",

            startedAt: null,

            completedAt: null

        };

        //--------------------------------------------------
        // Quality
        //--------------------------------------------------

        this.quality = {

            score: null,

            issues: []

        };

        //--------------------------------------------------
        // Security
        //--------------------------------------------------

        this.security = {

            classification: "INTERNAL",

            permissions: []

        };

        //--------------------------------------------------
        // Relationships
        //--------------------------------------------------

        this.relationships = [];

        //--------------------------------------------------
        // Lineage
        //--------------------------------------------------

        this.lineage = {

            parentResourceId: null,

            sourceResourceId: null,

            derivedResources: []

        };

    }

    //--------------------------------------------------
    // Lifecycle
    //--------------------------------------------------

    updateLifecycle(lifecycle) {

        this.lifecycle = lifecycle;

        this.touch();

    }

    //--------------------------------------------------
    // Metadata
    //--------------------------------------------------

    updateMetadata(metadata = {}) {

        this.metadata = {

            ...this.metadata,

            ...metadata

        };

        this.touch();

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    updateStatistics(statistics = {}) {

        this.statistics = {

            ...this.statistics,

            ...statistics

        };

        this.touch();

    }

    //--------------------------------------------------
    // Audit
    //--------------------------------------------------

    addAuditEntry(action, performedBy = "SYSTEM", details = {}) {

        this.auditTrail.push({

            timestamp: new Date().toISOString(),

            action,

            performedBy,

            details

        });

        this.touch();

    }

    //--------------------------------------------------
    // Tags
    //--------------------------------------------------

    addTag(tag) {

        if (!this.tags.includes(tag)) {

            this.tags.push(tag);

            this.touch();

        }

    }

    //--------------------------------------------------
    // Relationships
    //--------------------------------------------------

    addRelationship(relationship) {

        this.relationships.push(relationship);

        this.touch();

    }

    //--------------------------------------------------
    // Processing
    //--------------------------------------------------

    updateProcessing(stage, status = "IN_PROGRESS") {

        this.processing.currentStage = stage;

        this.processing.status = status;

        this.touch();

    }

    //--------------------------------------------------
    // Validation
    //--------------------------------------------------

    markValidated(validatedBy = "SYSTEM") {

        this.validation.validated = true;

        this.validation.validatedAt = new Date().toISOString();

        this.validation.validatedBy = validatedBy;

        this.touch();

    }

    //--------------------------------------------------
    // Internal
    //--------------------------------------------------

    touch() {

        this.updatedAt = new Date().toISOString();

    }

}