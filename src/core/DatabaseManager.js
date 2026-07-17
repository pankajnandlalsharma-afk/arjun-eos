/**
 * ====================================================
 * ARJUN EOS
 * Database Manager
 * ====================================================
 */

import LoggerManager from "./LoggerManager";

class DatabaseManager {

    constructor() {

        this.store = new Map();

    }

    initialize() {

        LoggerManager.info("Database Manager initialized.");

    }

    set(collection, value) {

        this.store.set(collection, value);

        LoggerManager.info(`Saved collection: ${collection}`);

    }

    get(collection) {

        return this.store.get(collection);

    }

    has(collection) {

        return this.store.has(collection);

    }

    remove(collection) {

        const removed = this.store.delete(collection);

        if (removed) {
            LoggerManager.info(`Removed collection: ${collection}`);
        }

        return removed;

    }

    clear() {

        this.store.clear();

        LoggerManager.info("Database cleared.");

    }

}

const databaseManager = new DatabaseManager();

export default databaseManager;