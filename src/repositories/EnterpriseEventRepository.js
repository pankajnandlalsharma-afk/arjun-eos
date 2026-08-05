/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Event Repository
 *
 * Contract : EVENT-002
 * Layer    : Repository
 * Purpose  : Stores Enterprise Events.
 * ============================================================
 */

const STORAGE_KEY =
    "arjun.eos.enterprise.events";

export default class EnterpriseEventRepository {

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

    saveAll(events) {

        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(events)

        );

    }

    //--------------------------------------------------
    // Publish
    //--------------------------------------------------

    publish(event) {

        const events =

            this.getAll();

        events.push(event);

        this.saveAll(events);

        return event;

    }

    //--------------------------------------------------
    // Latest Event
    //--------------------------------------------------

    getLatestEvent() {

        const events =

            this.getAll();

        return events.length

            ? events[events.length - 1]

            : null;

    }

    //--------------------------------------------------
    // Find By Type
    //--------------------------------------------------

    findByType(eventType) {

        return this

            .getAll()

            .filter(

                event =>

                    event.eventType ===

                    eventType

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

        const events =

            this.getAll();

        return {

            totalEvents:

                events.length,

            latestEvent:

                this.getLatestEvent()

        };

    }

}