/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Event Bus Engine
 *
 * Contract : EVENT-003
 * Layer    : Engine
 * Purpose  : Executes Enterprise Event Bus logic.
 * ============================================================
 */

export default class EnterpriseEventBusEngine {

    constructor() {

        this.subscribers = {};

    }

    //--------------------------------------------------
    // Subscribe
    //--------------------------------------------------

    subscribe(eventType, handler) {

        if (!this.subscribers[eventType]) {

            this.subscribers[eventType] = [];

        }

        this.subscribers[eventType].push(handler);

    }

    //--------------------------------------------------
    // Publish
    //--------------------------------------------------

    publish(event) {

        const handlers =

            this.subscribers[event.eventType] || [];

        handlers.forEach(handler => {

            try {

                handler(event);

            }

            catch (error) {

                console.error(

                    "Event Handler Error:",

                    error

                );

            }

        });

    }

    //--------------------------------------------------
    // Unsubscribe
    //--------------------------------------------------

    unsubscribe(eventType, handler) {

        if (!this.subscribers[eventType]) {

            return;

        }

        this.subscribers[eventType] =

            this.subscribers[eventType]

                .filter(

                    h => h !== handler

                );

    }

    //--------------------------------------------------
    // Clear
    //--------------------------------------------------

    clear() {

        this.subscribers = {};

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return {

            registeredEvents:

                Object.keys(

                    this.subscribers

                ).length,

            subscribers:

                Object.values(

                    this.subscribers

                ).reduce(

                    (count, handlers) =>

                        count + handlers.length,

                    0

                )

        };

    }

}