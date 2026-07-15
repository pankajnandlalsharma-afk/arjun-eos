export default class CompetitorIntelligenceEngine {

    analyze(audienceBlueprint) {

        return {

            id: audienceBlueprint.id,

            projectName: audienceBlueprint.projectName,

            competitorBlueprint: {

                competitors:
                    this.getCompetitors(
                        audienceBlueprint
                    ),

                topChannels:
                    this.getTopChannels(
                        audienceBlueprint
                    ),

                topCreators:
                    this.getTopCreators(
                        audienceBlueprint
                    ),

                topVideos:
                    this.getTopVideos(
                        audienceBlueprint
                    ),

                contentFormats:
                    this.getContentFormats(
                        audienceBlueprint
                    ),

                postingFrequency:
                    this.getPostingFrequency(
                        audienceBlueprint
                    ),

                averageViews:
                    this.getAverageViews(
                        audienceBlueprint
                    ),

                averageEngagement:
                    this.getAverageEngagement(
                        audienceBlueprint
                    ),

                topHooks:
                    this.getTopHooks(
                        audienceBlueprint
                    ),

                topTitles:
                    this.getTopTitles(
                        audienceBlueprint
                    ),

                topThumbnails:
                    this.getTopThumbnails(
                        audienceBlueprint
                    ),

                topHashtags:
                    this.getTopHashtags(
                        audienceBlueprint
                    ),

                strengths:
                    this.getStrengths(
                        audienceBlueprint
                    ),

                weaknesses:
                    this.getWeaknesses(
                        audienceBlueprint
                    ),

                opportunities:
                    this.getOpportunities(
                        audienceBlueprint
                    ),

                threats:
                    this.getThreats(
                        audienceBlueprint
                    ),

                benchmarkKPIs:
                    this.getBenchmarkKPIs(
                        audienceBlueprint
                    )

            },

            analyzedAt: new Date(),

            status: "Competitor Blueprint Created",

            nextStep: "Research Intelligence Engine"

        };

    }

    getCompetitors(audienceBlueprint) {

        return audienceBlueprint.competitors || [];

    }

    getTopChannels(audienceBlueprint) {

        return audienceBlueprint.topChannels || [];

    }

    getTopCreators(audienceBlueprint) {

        return audienceBlueprint.topCreators || [];

    }

    getTopVideos(audienceBlueprint) {

        return audienceBlueprint.topVideos || [];

    }

    getContentFormats(audienceBlueprint) {

        return audienceBlueprint.contentFormats || [];

    }

    getPostingFrequency(audienceBlueprint) {

        return audienceBlueprint.postingFrequency || "";

    }

    getAverageViews(audienceBlueprint) {

        return audienceBlueprint.averageViews || 0;

    }

    getAverageEngagement(audienceBlueprint) {

        return audienceBlueprint.averageEngagement || 0;

    }

    getTopHooks(audienceBlueprint) {

        return audienceBlueprint.topHooks || [];

    }

    getTopTitles(audienceBlueprint) {

        return audienceBlueprint.topTitles || [];

    }

    getTopThumbnails(audienceBlueprint) {

        return audienceBlueprint.topThumbnails || [];

    }

    getTopHashtags(audienceBlueprint) {

        return audienceBlueprint.topHashtags || [];

    }

    getStrengths(audienceBlueprint) {

        return audienceBlueprint.strengths || [];

    }

    getWeaknesses(audienceBlueprint) {

        return audienceBlueprint.weaknesses || [];

    }

    getOpportunities(audienceBlueprint) {

        return audienceBlueprint.opportunities || [];

    }

    getThreats(audienceBlueprint) {

        return audienceBlueprint.threats || [];

    }

    getBenchmarkKPIs(audienceBlueprint) {

        return audienceBlueprint.benchmarkKPIs || [];

    }

}