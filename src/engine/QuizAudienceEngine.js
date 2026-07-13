export default class QuizAudienceEngine {
    constructor() {
        this.audiences = [
            "Kids",
            "Students",
            "General Public",
            "Professionals"
        ];
    }

    addAudience(audience) {
        if (!this.audiences.includes(audience)) {
            this.audiences.push(audience);
        }
    }

    removeAudience(audience) {
        this.audiences = this.audiences.filter(
            item => item !== audience
        );
    }

    getAudiences() {
        return this.audiences;
    }

    audienceExists(audience) {
        return this.audiences.includes(audience);
    }

    totalAudiences() {
        return this.audiences.length;
    }
}