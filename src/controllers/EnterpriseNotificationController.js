/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Notification Controller
 *
 * Contract : NOTIFICATION-005
 * Layer    : Controller
 * Purpose  : Public API for Enterprise Notifications.
 * ============================================================
 */

import EnterpriseNotificationService
    from "../services/EnterpriseNotificationService";

export default class EnterpriseNotificationController {

    constructor() {

        this.service =
            new EnterpriseNotificationService();

    }

    //--------------------------------------------------
    // Create
    //--------------------------------------------------

    createNotification(notification) {

        return this.service.createNotification(

            notification

        );

    }

    //--------------------------------------------------
    // Read
    //--------------------------------------------------

    markAsRead(notificationId) {

        return this.service.markAsRead(

            notificationId

        );

    }

    //--------------------------------------------------
    // Unread
    //--------------------------------------------------

    markAsUnread(notificationId) {

        return this.service.markAsUnread(

            notificationId

        );

    }

    //--------------------------------------------------
    // Priority
    //--------------------------------------------------

    updatePriority(

        notificationId,

        priority

    ) {

        return this.service.updatePriority(

            notificationId,

            priority

        );

    }

    //--------------------------------------------------
    // Queries
    //--------------------------------------------------

    getAllNotifications() {

        return this.service.getAllNotifications();

    }

    getUnreadNotifications() {

        return this.service.getUnreadNotifications();

    }

    //--------------------------------------------------
    // Maintenance
    //--------------------------------------------------

    clearNotifications() {

        this.service.clearNotifications();

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return this.service.getStatistics();

    }

}