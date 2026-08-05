/**
 * ============================================================
 * ARJUN EOS
 * Knowledge Quiz Integration Service
 *
 * Contract : KQI-002
 * Layer    : Service
 * Purpose  : Coordinates Knowledge → Quiz Integration.
 * ============================================================
 */

import KnowledgeQuizIntegrationEngine
    from "../engine/KnowledgeQuizIntegrationEngine";

import KnowledgeRepository
    from "../repositories/KnowledgeRepository";

export default class KnowledgeQuizIntegrationService {

    constructor() {

        this.engine =
            new KnowledgeQuizIntegrationEngine();

        this.repository =
            new KnowledgeRepository();

    }

    //--------------------------------------------------
    // Integrate All Knowledge
    //--------------------------------------------------

    integrateKnowledge() {

        const knowledgeObjects =

            this.repository.getAll();

        return knowledgeObjects

            .filter(

                knowledge =>

                    this.engine.validate(

                        knowledge

                    )

            )

            .map(

                knowledge =>

                    this.engine.transform(

                        knowledge

                    )

            );

    }

    //--------------------------------------------------
    // Integrate One Knowledge Object
    //--------------------------------------------------

    integrateKnowledgeById(

        knowledgeId

    ) {

        const knowledge =

            this.repository.findById(

                knowledgeId

            );

        if (!knowledge) {

            throw new Error(

                "Knowledge Object not found."

            );

        }

        if (

            !this.engine.validate(

                knowledge

            )

        ) {

            throw new Error(

                "Knowledge Object is not valid."

            );

        }

        return this.engine.transform(

            knowledge

        );

    }

    //--------------------------------------------------
    // Status
    //--------------------------------------------------

    getIntegrationStatus() {

        return this.engine.getIntegrationStatus();

    }

}