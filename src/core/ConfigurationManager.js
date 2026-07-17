/**
 * ====================================================
 * ARJUN EOS
 * Configuration Manager
 * ====================================================
 */

class ConfigurationManager {

    constructor() {

        this.config = {

            appName: "ARJUN EOS",
            version: "1.0.0",

            environment: "development",

            aiProvider: "OpenAI",

            theme: "light",

            language: "en",

            exportPath: "exports",

            assetsPath: "assets"

        };

    }

    get(key) {

        return this.config[key];

    }

    set(key, value) {

        this.config[key] = value;

    }

    has(key) {

        return Object.prototype.hasOwnProperty.call(this.config, key);

    }

    getAll() {

        return this.config;

    }

}

const configurationManager = new ConfigurationManager();

export default configurationManager;