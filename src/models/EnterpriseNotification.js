/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Notification
 *
 * Contract : NOTIFICATION-001
 * Layer    : Model
 * Purpose  : Standard Enterprise Notification Model.
 * ============================================================
 */

export default class EnterpriseNotification {

    constructor(data = {}) {

        //--------------------------------------------------
        // Identity
        //--------------------------------------------------

        this.notificationId =
            data.notificationId ??
            crypto.randomUUID();

        this.title =
            data.title ?? "";

        this.message =
            data.message ?? "";

        //--------------------------------------------------
        // Classification
        //--------------------------------------------------

        this.type =
            data.type ?? "INFO";

        this.category =
            data.category ?? "GENERAL";

        //--------------------------------------------------
        // Source
        //--------------------------------------------------

        this.department =
            data.department ?? "";

        this.source =
            data.source ?? "";

        //--------------------------------------------------
        // Status
        //--------------------------------------------------

        this.status =
            data.status ?? "UNREAD";

        this.priority =
            data.priority ?? "NORMAL";

        //--------------------------------------------------
        // Payload
        //--------------------------------------------------

        this.payload =
            data.payload ?? {};

        //--------------------------------------------------
        // Audit
        //--------------------------------------------------

        this.createdAt =
            data.createdAt ??
            new Date().toISOString();

        this.readAt =
            data.readAt ?? null;

    }

    //--------------------------------------------------
    // Mark Read
    //--------------------------------------------------

    markAsRead() {

        this.status = "READ";

        this.readAt =
            new Date().toISOString();

    }

    //--------------------------------------------------
    // Mark Unread
    //--------------------------------------------------

    markAsUnread() {

        this.status = "UNREAD";

        this.readAt = null;

    }

    //--------------------------------------------------
    // Update Priority
    //--------------------------------------------------

    updatePriority(priority) {

        this.priority = priority;

    }

}