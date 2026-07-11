import EnterpriseDatabase from "../database/EnterpriseDatabase";

export default class ResearchEngine {

    processKnowledge() {

        const documents = EnterpriseDatabase.knowledge;

        documents.forEach(document => {

            const research = {

                id: Date.now() + Math.random(),

                documentId: document.id,

                documentName: document.name,

                keywords: [],

                topics: [],

                entities: [],

                status: "Research Pending"

            };

            EnterpriseDatabase.research.push(research);

        });

        return EnterpriseDatabase.research;

    }

    extractKeywords(researchId, keywords) {

        const research = EnterpriseDatabase.research.find(

            r => r.id === researchId

        );

        if (!research) return;

        research.keywords = keywords;

    }

    extractTopics(researchId, topics) {

        const research = EnterpriseDatabase.research.find(

            r => r.id === researchId

        );

        if (!research) return;

        research.topics = topics;

    }

    extractEntities(researchId, entities) {

        const research = EnterpriseDatabase.research.find(

            r => r.id === researchId

        );

        if (!research) return;

        research.entities = entities;

    }

}