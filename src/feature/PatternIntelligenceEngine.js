export default class PatternIntelligenceEngine {

    analyze(researchBlueprint) {

        return {

            id: researchBlueprint.id,

            projectName: researchBlueprint.projectName,

            patternBlueprint: {

                viralPatterns:
                    this.getViralPatterns(
                        researchBlueprint
                    ),

                hookPatterns:
                    this.getHookPatterns(
                        researchBlueprint
                    ),

                titlePatterns:
                    this.getTitlePatterns(
                        researchBlueprint
                    ),

                thumbnailPatterns:
                    this.getThumbnailPatterns(
                        researchBlueprint
                    ),

                scriptPatterns:
                    this.getScriptPatterns(
                        researchBlueprint
                    ),

                storytellingPatterns:
                    this.getStorytellingPatterns(
                        researchBlueprint
                    ),

                engagementPatterns:
                    this.getEngagementPatterns(
                        researchBlueprint
                    ),

                postingPatterns:
                    this.getPostingPatterns(
                        researchBlueprint
                    ),

                audiencePatterns:
                    this.getAudiencePatterns(
                        researchBlueprint
                    ),

                revenuePatterns:
                    this.getRevenuePatterns(
                        researchBlueprint
                    ),

                repeatableFrameworks:
                    this.getRepeatableFrameworks(
                        researchBlueprint
                    ),

                confidenceScore:
                    this.calculateConfidenceScore(
                        researchBlueprint
                    )

            },

            analyzedAt: new Date(),

            status: "Pattern Blueprint Created",

            nextStep: "Trajectory Intelligence Engine"

        };

    }

    getViralPatterns(researchBlueprint) {

        return researchBlueprint.viralPatterns || [];

    }

    getHookPatterns(researchBlueprint) {

        return researchBlueprint.hookPatterns || [];

    }

    getTitlePatterns(researchBlueprint) {

        return researchBlueprint.titlePatterns || [];

    }

    getThumbnailPatterns(researchBlueprint) {

        return researchBlueprint.thumbnailPatterns || [];

    }

    getScriptPatterns(researchBlueprint) {

        return researchBlueprint.scriptPatterns || [];

    }

    getStorytellingPatterns(researchBlueprint) {

        return researchBlueprint.storytellingPatterns || [];

    }

    getEngagementPatterns(researchBlueprint) {

        return researchBlueprint.engagementPatterns || [];

    }

    getPostingPatterns(researchBlueprint) {

        return researchBlueprint.postingPatterns || [];

    }

    getAudiencePatterns(researchBlueprint) {

        return researchBlueprint.audiencePatterns || [];

    }

    getRevenuePatterns(researchBlueprint) {

        return researchBlueprint.revenuePatterns || [];

    }

    getRepeatableFrameworks(researchBlueprint) {

        return researchBlueprint.repeatableFrameworks || [];

    }

    calculateConfidenceScore(researchBlueprint) {

        let score = 0;

        score += (researchBlueprint.youtubeResearch || []).length;

        score += (researchBlueprint.googleResearch || []).length;

        score += (researchBlueprint.newsResearch || []).length;

        score += (researchBlueprint.booksResearch || []).length;

        score += (researchBlueprint.papersResearch || []).length;

        score += (researchBlueprint.trendingTopics || []).length;

        score += (researchBlueprint.emergingTopics || []).length;

        return score;

    }

}