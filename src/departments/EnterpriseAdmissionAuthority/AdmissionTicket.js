/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Admission Authority
 *
 * Admission Ticket
 * ADM-001-MDL-001
 * ============================================================
 *
 * Purpose
 * -------
 * Represents a formal request for a Knowledge Asset
 * to enter the ARJUN EOS Enterprise.
 *
 * Every incoming Knowledge Asset must possess an
 * Admission Ticket before entering the
 * Enterprise Receiving Department.
 * ============================================================
 */

export default class AdmissionTicket {

    constructor({

        ticketId,

        knowledgeAssetName,

        knowledgeAssetType,

        source,

        requestedBy,

        priority = "NORMAL",

        status = "AWAITING_ADMISSION"

    }) {

        this.ticketId = ticketId;

        this.knowledgeAssetName = knowledgeAssetName;

        this.knowledgeAssetType = knowledgeAssetType;

        this.source = source;

        this.requestedBy = requestedBy;

        this.priority = priority;

        this.status = status;

        this.requestedAt = new Date().toISOString();

        this.approvedAt = null;

        this.rejectedAt = null;

        this.rejectionReason = null;

    }

    approve() {

        this.status = "ADMISSION_APPROVED";

        this.approvedAt = new Date().toISOString();

    }

    reject(reason) {

        this.status = "ADMISSION_REJECTED";

        this.rejectedAt = new Date().toISOString();

        this.rejectionReason = reason;

    }

}