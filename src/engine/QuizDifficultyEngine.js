export default class QuizDifficultyEngine {
    constructor() {
        this.difficulties = [
            "Easy",
            "Medium",
            "Hard",
            "Expert"
        ];
    }

    getDifficulties() {
        return this.difficulties;
    }

    addDifficulty(level) {
        if (!this.difficulties.includes(level)) {
            this.difficulties.push(level);
        }
    }

    removeDifficulty(level) {
        this.difficulties = this.difficulties.filter(
            item => item !== level
        );
    }

    difficultyExists(level) {
        return this.difficulties.includes(level);
    }

    totalDifficulties() {
        return this.difficulties.length;
    }
}