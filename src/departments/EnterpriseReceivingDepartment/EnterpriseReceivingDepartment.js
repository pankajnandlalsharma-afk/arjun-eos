/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Receiving Department
 * DEP-001
 * ============================================================
 *
 * Purpose
 * -------
 * Formally receive external resources entering ARJUN EOS,
 * establish enterprise ownership, validate the shipment,
 * generate Enterprise Resources, and hand them over to the
 * Inspection Department.
 *
 * NOTE
 * ----
 * This class defines the Enterprise Contract.
 * Actual implementation will be completed by Services.
 * ============================================================
 */

export default class EnterpriseReceivingDepartment {

    /**
     * Receive a Gate Pass and incoming resource.
     */
    receive(gatePass, resource) {

        throw new Error("Not implemented.");

    }

    /**
     * Accept ownership of the incoming resource.
     */
    accept(resource) {

        throw new Error("Not implemented.");

    }

    /**
     * Reject the incoming resource.
     */
    reject(resource, reason) {

        throw new Error("Not implemented.");

    }

    /**
     * Transfer custody from the external world
     * to ARJUN EOS.
     */
    transferOwnership(resource) {

        throw new Error("Not implemented.");

    }

    /**
     * Generate an Enterprise Resource.
     */
    generateEnterpriseResource(resource) {

        throw new Error("Not implemented.");

    }

    /**
     * Release the Enterprise Resource
     * to the Inspection Department.
     */
    releaseToInspection(resource) {

        throw new Error("Not implemented.");

    }

}