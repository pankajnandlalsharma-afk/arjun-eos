/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Notification Service
 *
 * Contract : NOTIFICATION-004
 * Layer    : Service
 * Purpose  : Coordinates Enterprise Notification operations.
 * ============================================================
 */

import EnterpriseNotificationEngine
    from "../engine/EnterpriseNotificationEngine";

import EnterpriseNotificationRepository
    from "../repositories/EnterpriseNotificationRepository";

export default class EnterpriseNotificationService {

    constructor() {

        this.engine =
            new EnterpriseNotificationEngine();

        this.repository =
            new EnterpriseNotificationRepository();

    }

    //--------------------------------------------------
    // Create
    //--------------------------------------------------

    createNotification(notification) {

        notification =

            this.engine.create(notification);

        this.repository.save(notification);

        return notification;

    }

    //--------------------------------------------------
    // Read
    //--------------------------------------------------

    markAsRead(notificationId) {

        let notification =

            this.repository.findById(notificationId);

        if (!notification) {

            throw new Error(

                "Notification not found."

            );

        }

        notification =

            this.engine.markAsRead(notification);

        this.repository.save(notification);

        return notification;

    }

    //--------------------------------------------------
    // Unread
    //--------------------------------------------------

    markAsUnread(notificationId) {

        let notification =

            this.repository.findById(notificationId);

        if (!notification) {

            throw new Error(

                "Notification not found."

            );

        }

        notification =

            this.engine.markAsUnread(notification);

        this.repository.save(notification);

        return notification;

    }

    //--------------------------------------------------
    // Priority
    //--------------------------------------------------

    updatePriority(

        notificationId,

        priority

    ) {

        let notification =

            this.repository.findById(notificationId);

        if (!notification) {

            throw new Error(

                "Notification not found."

            );

        }

        notification =

            this.engine.updatePriority(

                notification,

                priority

            );

        this.repository.save(notification);

        return notification;

    }

    //--------------------------------------------------
    // Queries
    //--------------------------------------------------

    getAllNotifications() {

        return this.repository.getAll();

    }

    getUnreadNotifications() {

        return this.repository.getUnread();

    }

    //--------------------------------------------------
    // Maintenance
    //--------------------------------------------------

    clearNotifications() {

        this.repository.clear();

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return this.engine.getStatistics(

            this.repository.getAll()

        );

    }

}