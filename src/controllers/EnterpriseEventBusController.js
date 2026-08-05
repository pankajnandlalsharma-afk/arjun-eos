/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Event Bus Controller
 *
 * Contract : EVENT-005
 * Layer    : Controller
 * Purpose  : Public API for Enterprise Event Bus.
 * ============================================================
 */

import EnterpriseEventBusService
    from "../services/EnterpriseEventBusService";

export default class EnterpriseEventBusController {

    constructor() {

        this.service =
            new EnterpriseEventBusService();

    }

    //--------------------------------------------------
    // Publish
    //--------------------------------------------------

    publish(event) {

        return this.service.publish(event);

    }

    //--------------------------------------------------
    // Subscribe
    //--------------------------------------------------

    subscribe(eventType, handler) {

        this.service.subscribe(

            eventType,

            handler

        );

    }

    //--------------------------------------------------
    // Unsubscribe
    //--------------------------------------------------

    unsubscribe(eventType, handler) {

        this.service.unsubscribe(

            eventType,

            handler

        );

    }

    //--------------------------------------------------
    // Queries
    //--------------------------------------------------

    getAllEvents() {

        return this.service.getAllEvents();

    }

    getLatestEvent() {

        return this.service.getLatestEvent();

    }

    findByType(eventType) {

        return this.service.findByType(

            eventType

        );

    }

    //--------------------------------------------------
    // Maintenance
    //--------------------------------------------------

    clearEvents() {

        this.service.clearEvents();

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return this.service.getStatistics();

    }

}