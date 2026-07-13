export default class DistractorGenerationEngine {

    generate(correctAnswer) {

        const distractors = [];

        for (let i = 1; i <= 3; i++) {
            distractors.push(
                ${correctAnswer} - Alternative ${i}
            );
        }

        return distractors;

    }

}
