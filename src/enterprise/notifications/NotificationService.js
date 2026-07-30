class NotificationService {

    success(message) {

        alert(`✅ ${message}`);

    }

    warning(message) {

        alert(`⚠️ ${message}`);

    }

    error(message) {

        alert(`❌ ${message}`);

    }

    info(message) {

        alert(`ℹ️ ${message}`);

    }

}

const notificationService = new NotificationService();

export default notificationService;