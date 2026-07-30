/**
 * ============================================================
 * ARJUN EOS
 * Storage Manager
 * ============================================================
 */

class StorageManager {

    get(key, defaultValue = null) {

        try {

            const value = localStorage.getItem(key);

            return value
                ? JSON.parse(value)
                : defaultValue;

        } catch (error) {

            console.error(error);

            return defaultValue;

        }

    }

    set(key, value) {

        try {

            localStorage.setItem(
                key,
                JSON.stringify(value)
            );

        } catch (error) {

            console.error(error);

        }

    }

    remove(key) {

        localStorage.removeItem(key);

    }

    clear() {

        localStorage.clear();

    }

}

const storageManager = new StorageManager();

export default storageManager;