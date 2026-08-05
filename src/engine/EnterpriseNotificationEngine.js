/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Notification Engine
 *
 * Contract : NOTIFICATION-003
 * Layer    : Engine
 * Purpose  : Executes Enterprise Notification logic.
 * ============================================================
 */

export default class EnterpriseNotificationEngine {

    //--------------------------------------------------
    // Create
    //--------------------------------------------------

    create(notification) {

        notification.status = "UNREAD";

        if (!notification.priority) {

            notification.priority = "NORMAL";

        }

        return notification;

    }

    //--------------------------------------------------
    // Read
    //--------------------------------------------------

    markAsRead(notification) {

        notification.markAsRead();

        return notification;

    }

    //--------------------------------------------------
    // Unread
    //--------------------------------------------------

    markAsUnread(notification) {

        notification.markAsUnread();

        return notification;

    }

    //--------------------------------------------------
    // Priority
    //--------------------------------------------------

    updatePriority(

        notification,

        priority

    ) {

        notification.updatePriority(

            priority

        );

        return notification;

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics(notifications) {

        return {

            totalNotifications:

                notifications.length,

            unread:

                notifications.filter(

                    notification =>

                        notification.status ===

                        "UNREAD"

                ).length,

            read:

                notifications.filter(

                    notification =>

                        notification.status ===

                        "READ"

                ).length,

            highPriority:

                notifications.filter(

                    notification =>

                        notification.priority ===

                        "HIGH"

                ).length,

            critical:

                notifications.filter(

                    notification =>

                        notification.priority ===

                        "CRITICAL"

                ).length

        };

    }

}