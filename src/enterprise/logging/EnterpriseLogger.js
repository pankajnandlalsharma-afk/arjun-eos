class EnterpriseLogger {

    info(message, data = null) {

        console.log(
            `[INFO] ${new Date().toISOString()} - ${message}`,
            data ?? ""
        );

    }

    warn(message, data = null) {

        console.warn(
            `[WARN] ${new Date().toISOString()} - ${message}`,
            data ?? ""
        );

    }

    error(message, error = null) {

        console.error(
            `[ERROR] ${new Date().toISOString()} - ${message}`,
            error ?? ""
        );

    }

    debug(message, data = null) {

        if (import.meta.env.DEV) {

            console.debug(
                `[DEBUG] ${new Date().toISOString()} - ${message}`,
                data ?? ""
            );

        }

    }

}

const enterpriseLogger = new EnterpriseLogger();

export default enterpriseLogger;