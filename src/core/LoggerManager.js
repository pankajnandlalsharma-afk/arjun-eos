/**
 * ====================================================
 * ARJUN EOS
 * Logger Manager
 * ====================================================
 */

class LoggerManager {

    info(message) {

        console.log(
            `[INFO] ${new Date().toLocaleString()} : ${message}`
        );

    }

    warn(message) {

        console.warn(
            `[WARN] ${new Date().toLocaleString()} : ${message}`
        );

    }

    error(message) {

        console.error(
            `[ERROR] ${new Date().toLocaleString()} : ${message}`
        );

    }

    success(message) {

        console.log(
            `[SUCCESS] ${new Date().toLocaleString()} : ${message}`
        );

    }

}

const loggerManager = new LoggerManager();

export default loggerManager;