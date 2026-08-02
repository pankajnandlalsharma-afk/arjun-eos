/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Gate Pass
 * GP-001
 * ============================================================
 */

export default class GatePass {

    constructor({

        gatePassId,

        resourceName,

        resourceType,

        source,

        destinationDepartment

    }) {

        this.gatePassId = gatePassId;

        this.resourceName = resourceName;

        this.resourceType = resourceType;

        this.source = source;

        this.destinationDepartment = destinationDepartment;

        this.status = "APPROVED_FOR_ENTRY";

        this.entryTimestamp = new Date().toISOString();

    }

}