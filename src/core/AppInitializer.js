/**
 * ====================================================
 * ARJUN EOS
 * App Initializer
 * ====================================================
 */

class AppInitializer {
    constructor() {
        this.initialized = false;
    }

    async initialize() {
        console.log("======================================");
        console.log("Starting ARJUN EOS...");
        console.log("Initializing Core...");
        console.log("======================================");

        this.initialized = true;

        console.log("ARJUN EOS Started Successfully.");
    }

    isInitialized() {
        return this.initialized;
    }
}

const appInitializer = new AppInitializer();

export default appInitializer;