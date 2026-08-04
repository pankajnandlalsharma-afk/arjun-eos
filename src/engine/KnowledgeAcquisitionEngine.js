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

}