export default class QuizLanguageEngine {
    constructor() {
        this.languages = [
            "English",
            "Hindi"
        ];
    }

    addLanguage(language) {
        if (!this.languages.includes(language)) {
            this.languages.push(language);
        }
    }

    removeLanguage(language) {
        this.languages = this.languages.filter(
            item => item !== language
        );
    }

    getLanguages() {
        return this.languages;
    }

    languageExists(language) {
        return this.languages.includes(language);
    }

    totalLanguages() {
        return this.languages.length;
    }
}