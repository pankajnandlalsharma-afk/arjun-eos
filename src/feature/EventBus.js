export default class EventBus {

    constructor() {

        this.events = {};

    }

    subscribe(eventName, callback) {

        if (!this.events[eventName]) {

            this.events[eventName] = [];

        }

        this.events[eventName].push(callback);

    }

    publish(eventName, payload) {

        if (!this.events[eventName]) {

            return;

        }

        this.events[eventName].forEach(callback => {

            callback(payload);

        });

    }

    unsubscribe(eventName, callback) {

        if (!this.events[eventName]) {

            return;

        }

        this.events[eventName] =

            this.events[eventName].filter(

                subscriber => subscriber !== callback

            );

    }

    clear() {

        this.events = {};

    }

}