export default class BusinessIntelligenceEngine {

    analyze(project) {

        return {

            id: project.id,

            projectName: project.name,

            businessBlueprint: {

                objective: "",

                targetRevenue: 0,

                targetAudience: "",

                targetPlatforms: [],

                targetSubscribers: 0,

                targetViews: 0,

                targetEngagement: 0,

                targetAuthority: "",

                successKPIs: [],

                businessPriority: "High"

            },

            analyzedAt: new Date(),

            status: "Business Blueprint Created",

            nextStep: "Revenue Intelligence Engine"

        };

    }

}