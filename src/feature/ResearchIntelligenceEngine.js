export default class ResearchIntelligenceEngine {

    analyze(competitorBlueprint) {

        return {

            id: competitorBlueprint.id,

            projectName: competitorBlueprint.projectName,

            researchBlueprint: {

                youtubeResearch:
                    this.getYouTubeResearch(
                        competitorBlueprint
                    ),

                instagramResearch:
                    this.getInstagramResearch(
                        competitorBlueprint
                    ),

                facebookResearch:
                    this.getFacebookResearch(
                        competitorBlueprint
                    ),

                linkedinResearch:
                    this.getLinkedInResearch(
                        competitorBlueprint
                    ),

                xResearch:
                    this.getXResearch(
                        competitorBlueprint
                    ),

                websiteResearch:
                    this.getWebsiteResearch(
                        competitorBlueprint
                    ),

                googleResearch:
                    this.getGoogleResearch(
                        competitorBlueprint
                    ),

                googleTrends:
                    this.getGoogleTrends(
                        competitorBlueprint
                    ),

                newsResearch:
                    this.getNewsResearch(
                        competitorBlueprint
                    ),

                booksResearch:
                    this.getBooksResearch(
                        competitorBlueprint
                    ),

                papersResearch:
                    this.getPapersResearch(
                        competitorBlueprint
                    ),

                internalKnowledge:
                    this.getInternalKnowledge(
                        competitorBlueprint
                    ),

                emergingTopics:
                    this.getEmergingTopics(
                        competitorBlueprint
                    ),

                trendingTopics:
                    this.getTrendingTopics(
                        competitorBlueprint
                    ),

                contentGaps:
                    this.getContentGaps(
                        competitorBlueprint
                    ),

                opportunities:
                    this.getOpportunities(
                        competitorBlueprint
                    ),

                researchConfidence:
                    this.calculateResearchConfidence(
                        competitorBlueprint
                    )

            },

            analyzedAt: new Date(),

            status: "Research Blueprint Created",

            nextStep: "Pattern Intelligence Engine"

        };

    }

    getYouTubeResearch(competitorBlueprint) {

        return competitorBlueprint.youtubeResearch || [];

    }

    getInstagramResearch(competitorBlueprint) {

        return competitorBlueprint.instagramResearch || [];

    }

    getFacebookResearch(competitorBlueprint) {

        return competitorBlueprint.facebookResearch || [];

    }

    getLinkedInResearch(competitorBlueprint) {

        return competitorBlueprint.linkedinResearch || [];

    }

    getXResearch(competitorBlueprint) {

        return competitorBlueprint.xResearch || [];

    }

    getWebsiteResearch(competitorBlueprint) {

        return competitorBlueprint.websiteResearch || [];

    }

    getGoogleResearch(competitorBlueprint) {

        return competitorBlueprint.googleResearch || [];

    }

    getGoogleTrends(competitorBlueprint) {

        return competitorBlueprint.googleTrends || [];

    }

    getNewsResearch(competitorBlueprint) {

        return competitorBlueprint.newsResearch || [];

    }

    getBooksResearch(competitorBlueprint) {

        return competitorBlueprint.booksResearch || [];

    }

    getPapersResearch(competitorBlueprint) {

        return competitorBlueprint.papersResearch || [];

    }

    getInternalKnowledge(competitorBlueprint) {

        return competitorBlueprint.internalKnowledge || [];

    }

    getEmergingTopics(competitorBlueprint) {

        return competitorBlueprint.emergingTopics || [];

    }

    getTrendingTopics(competitorBlueprint) {

        return competitorBlueprint.trendingTopics || [];

    }

    getContentGaps(competitorBlueprint) {

        return competitorBlueprint.contentGaps || [];

    }

    getOpportunities(competitorBlueprint) {

        return competitorBlueprint.opportunities || [];

    }

    calculateResearchConfidence(competitorBlueprint) {

        let confidence = 0;

        confidence += (competitorBlueprint.youtubeResearch || []).length;
        confidence += (competitorBlueprint.googleResearch || []).length;
        confidence += (competitorBlueprint.newsResearch || []).length;
        confidence += (competitorBlueprint.booksResearch || []).length;
        confidence += (competitorBlueprint.papersResearch || []).length;

        return confidence;

    }

}