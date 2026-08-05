/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Notification Repository
 *
 * Contract : NOTIFICATION-002
 * Layer    : Repository
 * Purpose  : Stores Enterprise Notifications.
 * ============================================================
 */

const STORAGE_KEY =
    "arjun.eos.enterprise.notifications";

export default class EnterpriseNotificationRepository {

    //--------------------------------------------------
    // Read All
    //--------------------------------------------------

    getAll() {

        const data =

            localStorage.getItem(

                STORAGE_KEY

            );

        return data

            ? JSON.parse(data)

            : [];

    }

    //--------------------------------------------------
    // Save All
    //--------------------------------------------------

    saveAll(notifications) {

        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(notifications)

        );

    }

    //--------------------------------------------------
    // Save
    //--------------------------------------------------

    save(notification) {

        const notifications =

            this.getAll();

        const index =

            notifications.findIndex(

                item =>

                    item.notificationId ===

                    notification.notificationId

            );

        if (index >= 0) {

            notifications[index] =

                notification;

        }

        else {

            notifications.push(

                notification

            );

        }

        this.saveAll(

            notifications

        );

        return notification;

    }

    //--------------------------------------------------
    // Find By ID
    //--------------------------------------------------

    findById(notificationId) {

        return this

            .getAll()

            .find(

                notification =>

                    notification.notificationId ===

                    notificationId

            );

    }

    //--------------------------------------------------
    // Unread
    //--------------------------------------------------

    getUnread() {

        return this

            .getAll()

            .filter(

                notification =>

                    notification.status ===

                    "UNREAD"

            );

    }

    //--------------------------------------------------
    // Delete
    //--------------------------------------------------

    delete(notificationId) {

        const notifications =

            this.getAll().filter(

                notification =>

                    notification.notificationId !==

                    notificationId

            );

        this.saveAll(

            notifications

        );

    }

    //--------------------------------------------------
    // Clear
    //--------------------------------------------------

    clear() {

        localStorage.removeItem(

            STORAGE_KEY

        );

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        const notifications =

            this.getAll();

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

                ).length

        };

    }

}