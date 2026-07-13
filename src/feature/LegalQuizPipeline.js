import QuizResearchEngine from "../engine/QuizResearchEngine";
import QuestionGenerationEngine from "../engine/QuestionGenerationEngine";
import AnswerValidationEngine from "../engine/AnswerValidationEngine";
import ExplanationGenerationEngine from "../engine/ExplanationGenerationEngine";
import QuestionQualityEngine from "../engine/QuestionQualityEngine";
import ScriptGenerationEngine from "../engine/ScriptGenerationEngine";
import VideoStoryboardEngine from "../engine/VideoStoryboardEngine";
import ProductionPackageEngine from "../engine/ProductionPackageEngine";
import PublishingPackageEngine from "../engine/PublishingPackageEngine";

export default class LegalQuizPipeline {

    generate(topic) {

        const researchEngine =
            new QuizResearchEngine();

        const questionEngine =
            new QuestionGenerationEngine();

        const validationEngine =
            new AnswerValidationEngine();

        const explanationEngine =
            new ExplanationGenerationEngine();

        const qualityEngine =
            new QuestionQualityEngine();

        const scriptEngine =
            new ScriptGenerationEngine();

        const storyboardEngine =
            new VideoStoryboardEngine();

        const productionEngine =
            new ProductionPackageEngine();

        const publishingEngine =
            new PublishingPackageEngine();

        const question =
            questionEngine.generate(topic);

        validationEngine.validate(question);

        const explanation =
            explanationEngine.generate(
                question.question,
                question.correctAnswer
            );

        const quality =
            qualityEngine.evaluate(question);

        const script =
            scriptEngine.generate(question);

        const storyboard =
            storyboardEngine.generate(script);

        const production =
            productionEngine.generate(
                script,
                storyboard
            );

        const publishing =
            publishingEngine.generate(
                topic,
                "Legal Quiz",
                ["#law","#quiz"]
            );

        return {

            question,

            explanation,

            quality,

            script,

            storyboard,

            production,

            publishing

        };

    }

}
