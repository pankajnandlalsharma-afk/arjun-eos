/**
 * ====================================================
 * ARJUN EOS
 * App Initializer
 * ====================================================
 */

import ConfigurationManager from "./ConfigurationManager";
import LoggerManager from "./LoggerManager";

class AppInitializer {
    constructor() {
        this.initialized = false;
    }

    async initialize() {

        if (this.initialized) {
            LoggerManager.warn("Application is already initialized.");
            return;
        }

        LoggerManager.info("======================================");
        LoggerManager.info("Starting ARJUN EOS...");
        LoggerManager.info("Initializing Core...");
        LoggerManager.info("======================================");

        LoggerManager.info(
            `Application : ${ConfigurationManager.get("appName")}`
        );

        LoggerManager.info(
            `Version : ${ConfigurationManager.get("version")}`
        );

        LoggerManager.info(
            `Environment : ${ConfigurationManager.get("environment")}`
        );

        this.initialized = true;

        LoggerManager.success("ARJUN EOS Started Successfully.");
    }

    isInitialized() {
        return this.initialized;
    }
}

const appInitializer = new AppInitializer();

export default appInitializer;