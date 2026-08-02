/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Resource Contract
 * EC-001
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

        this.resourceId = resourceId;

        this.resourceName = resourceName;

        this.originalFileName = originalFileName;

        this.resourceType = resourceType;

        this.sourceType = sourceType;

        this.storageLocation = storageLocation;

        this.knowledgeProjectId = knowledgeProjectId;

        this.lifecycle = EnterpriseResourceLifecycle.REGISTERED;

        this.version = 1;

        this.createdAt = new Date().toISOString();

        this.updatedAt = new Date().toISOString();

        this.metadata = {};

        this.auditTrail = [];

    }

}