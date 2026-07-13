export default class ResearchReportEngine {

    generateReport(researchList = []) {

        return {
            totalResearch: researchList.length,

            generatedAt: new Date(),

            topics: researchList.map(
                item => item.topic
            ),

            sources: researchList.map(
                item => item.source
            ),

            summaries: researchList.map(
                item => item.summary
            )
        };

    }

}