export default class QuizConfigurationEngine {
    constructor() {
        this.configuration = {
            enterpriseName: "Quiz Enterprise",
            version: "1.0.0",
            language: "English",
            category: "General Knowledge",
            difficulty: "Easy",
            platform: "YouTube",
            shortsDuration: 60,
            longVideoDuration: 600
        };
    }

    getConfiguration() {
        return this.configuration;
    }

    updateConfiguration(key, value) {
        this.configuration[key] = value;
    }

    resetConfiguration() {
        this.configuration = {
            enterpriseName: "Quiz Enterprise",
            version: "1.0.0",
            language: "English",
            category: "General Knowledge",
            difficulty: "Easy",
            platform: "YouTube",
            shortsDuration: 60,
            longVideoDuration: 600
        };
    }
}