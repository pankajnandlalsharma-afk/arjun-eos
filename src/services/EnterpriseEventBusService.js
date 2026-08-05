/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Event Bus Service
 *
 * Contract : EVENT-004
 * Layer    : Service
 * Purpose  : Coordinates Enterprise Event Bus operations.
 * ============================================================
 */

import EnterpriseEventBusEngine
    from "../engine/EnterpriseEventBusEngine";

import EnterpriseEventRepository
    from "../repositories/EnterpriseEventRepository";

export default class EnterpriseEventBusService {

    constructor() {

        this.engine =
            new EnterpriseEventBusEngine();

        this.repository =
            new EnterpriseEventRepository();

    }

    //--------------------------------------------------
    // Publish
    //--------------------------------------------------

    publish(event) {

        this.repository.publish(event);

        this.engine.publish(event);

        return event;

    }

    //--------------------------------------------------
    // Subscribe
    //--------------------------------------------------

    subscribe(eventType, handler) {

        this.engine.subscribe(

            eventType,

            handler

        );

    }

    //--------------------------------------------------
    // Unsubscribe
    //--------------------------------------------------

    unsubscribe(eventType, handler) {

        this.engine.unsubscribe(

            eventType,

            handler

        );

    }

    //--------------------------------------------------
    // Events
    //--------------------------------------------------

    getAllEvents() {

        return this.repository.getAll();

    }

    getLatestEvent() {

        return this.repository.getLatestEvent();

    }

    findByType(eventType) {

        return this.repository.findByType(

            eventType

        );

    }

    //--------------------------------------------------
    // Maintenance
    //--------------------------------------------------

    clearEvents() {

        this.repository.clear();

        this.engine.clear();

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return {

            repository:

                this.repository.getStatistics(),

            engine:

                this.engine.getStatistics()

        };

    }

}