/**
 * ============================================================
 * ARJUN EOS
 * Founder Memory System
 * Decision Domain Model
 * ============================================================
 */

export default class Decision {

    constructor({

        id = crypto.randomUUID(),

        title = "",

        description = "",

        reason = "",

        impact = "",

        status = "Approved",

        version = "1.0",

        approvedBy = "Founder",

        createdAt = new Date().toISOString(),

        updatedAt = new Date().toISOString()

    } = {}) {

        this.id = id;

        this.title = title;

        this.description = description;

        this.reason = reason;

        this.impact = impact;

        this.status = status;

        this.version = version;

        this.approvedBy = approvedBy;

        this.createdAt = createdAt;

        this.updatedAt = updatedAt;

    }

}