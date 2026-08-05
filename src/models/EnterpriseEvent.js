/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Event
 *
 * Contract : EVENT-001
 * Layer    : Model
 * Purpose  : Standard Enterprise Event Model.
 * ============================================================
 */

export default class EnterpriseEvent {

    constructor(data = {}) {

        //--------------------------------------------------
        // Identity
        //--------------------------------------------------

        this.eventId =
            data.eventId ??
            crypto.randomUUID();

        this.eventName =
            data.eventName ?? "";

        this.eventType =
            data.eventType ?? "GENERAL";

        //--------------------------------------------------
        // Source
        //--------------------------------------------------

        this.sourceDepartment =
            data.sourceDepartment ?? "";

        this.sourceWorkflow =
            data.sourceWorkflow ?? "";

        //--------------------------------------------------
        // Payload
        //--------------------------------------------------

        this.payload =
            data.payload ?? {};

        //--------------------------------------------------
        // Status
        //--------------------------------------------------

        this.status =
            data.status ?? "PUBLISHED";

        //--------------------------------------------------
        // Audit
        //--------------------------------------------------

        this.createdAt =
            data.createdAt ??
            new Date().toISOString();

    }

}