import Enterprise from "../models/Enterprise";

export default class ContentPlannerEngine {

    createPlan(research) {

        const plan = {

            id: Date.now(),

            researchId: research.id,

            segment: research.document.segment,

            document: research.document.name,

            topics: research.topics,

            content: [],

            status: "Planning"

        };

        research.topics.forEach(topic => {

            plan.content.push({

                id: Date.now() + Math.random(),

                topic: topic,

                type: this.detectType(topic),

                priority: this.detectPriority(topic),

                status: "Pending"

            });

        });

        Enterprise.content.plans.push(plan);

        return plan;

    }

    detectType(topic) {

        const text = topic.toLowerCase();

        if (text.includes("quiz")) return "Quiz";

        if (text.includes("short")) return "Short";

        if (text.includes("case")) return "Case Study";

        if (text.includes("management")) return "Management";

        return "Long Video";

    }

    detectPriority(topic) {

        const text = topic.toLowerCase();

        if (
            text.includes("bnss") ||
            text.includes("bns") ||
            text.includes("evidence") ||
            text.includes("bhagavad")
        ) {

            return "HIGH";

        }

        return "MEDIUM";

    }

    getPlans() {

        return Enterprise.content.plans;

    }

}