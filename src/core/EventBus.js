/**
 * ====================================================
 * ARJUN EOS
 * Event Bus
 * ====================================================
 */

import LoggerManager from "./LoggerManager";

class EventBus {

    constructor() {
        this.events = new Map();
    }

    subscribe(eventName, listener) {

        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }

        this.events.get(eventName).push(listener);

        LoggerManager.info(`Subscribed to event: ${eventName}`);
    }

    unsubscribe(eventName, listener) {

        if (!this.events.has(eventName)) {
            return;
        }

        const listeners = this.events
            .get(eventName)
            .filter(item => item !== listener);

        this.events.set(eventName, listeners);

        LoggerManager.info(`Unsubscribed from event: ${eventName}`);
    }

    publish(eventName, payload = null) {

        if (!this.events.has(eventName)) {
            return;
        }

        LoggerManager.info(`Published event: ${eventName}`);

        this.events.get(eventName).forEach(listener => {
            listener(payload);
        });
    }

    clear() {

        this.events.clear();

        LoggerManager.info("Event Bus cleared.");
    }

}

const eventBus = new EventBus();

export default eventBus;