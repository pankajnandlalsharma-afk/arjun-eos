/**
 * ============================================================
 * ARJUN EOS
 * Knowledge Acquisition Engine
 *
 * Contract : KE.KAD
 * Layer    : Engine
 * Purpose  : Executes Knowledge Acquisition business rules.
 * ============================================================
 */

import EnterpriseResourceLifecycle
    from "../enterprise/contracts/EnterpriseResourceLifecycle";

export default class KnowledgeAcquisitionEngine {

    //--------------------------------------------------
    // Registration
    //--------------------------------------------------

    registerResource(resource) {

        resource.updateLifecycle(

            EnterpriseResourceLifecycle.REGISTERED

        );

        resource.updateProcessing(

            "RESOURCE_REGISTERED",

            "IN_PROGRESS"

        );

        resource.addAuditEntry(

            "RESOURCE_REGISTERED"

        );

        return resource;

    }

    //--------------------------------------------------
    // Inspection
    //--------------------------------------------------

    inspectResource(resource) {

        resource.updateProcessing(

            "RESOURCE_INSPECTED",

            "IN_PROGRESS"

        );

        resource.addAuditEntry(

            "RESOURCE_INSPECTED"

        );

        return resource;

    }

    //--------------------------------------------------
    // Validation
    //--------------------------------------------------

    prepareForValidation(resource) {

        resource.updateProcessing(

            "READY_FOR_VALIDATION",

            "READY"

        );

        resource.addAuditEntry(

            "READY_FOR_VALIDATION"

        );

        return resource;

    }

    //--------------------------------------------------
    // Classification
    //--------------------------------------------------

    classifyResource(resource) {

        let category = "GENERAL";

        const name = (

            resource.resourceName ||

            ""

        ).toLowerCase();

        if (

            name.includes("law") ||

            name.includes("court") ||

            name.includes("bnss") ||

            name.includes("constitution")

        ) {

            category = "LEGAL";

        }

        else if (

            name.includes("gita") ||

            name.includes("krishna") ||

            name.includes("veda")

        ) {

            category = "SPIRITUAL";

        }

        else if (

            name.includes("medical") ||

            name.includes("hospital")

        ) {

            category = "MEDICAL";

        }

        resource.category = category;

        resource.classification = {

            category,

            confidence: 0.95,

            classifiedAt: new Date().toISOString()

        };

        resource.updateProcessing(

            "RESOURCE_CLASSIFIED",

            "COMPLETED"

        );

        resource.addAuditEntry(

            "RESOURCE_CLASSIFIED"

        );

        return resource;

    }

}