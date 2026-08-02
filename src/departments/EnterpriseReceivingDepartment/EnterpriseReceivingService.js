/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Receiving Service
 * DEP-001-SVC-001
 * ============================================================
 *
 * Business Logic
 * --------------
 * Receives Gate Passes and incoming resources,
 * validates them,
 * accepts or rejects them,
 * generates Enterprise Resources,
 * and prepares them for handover to the
 * Inspection Department.
 * ============================================================
 */

import EnterpriseResource from "../../enterprise/contracts/EnterpriseResource";

export default class EnterpriseReceivingService {

    receive(gatePass, resource) {

        if (!gatePass) {

            throw new Error("Gate Pass is required.");

        }

        if (!resource) {

            throw new Error("Incoming resource is required.");

        }

        return this.accept(gatePass, resource);

    }

    accept(gatePass, resource) {

        const enterpriseResource = new EnterpriseResource({

            resourceId: crypto.randomUUID(),

            resourceName: resource.name,

            originalFileName: resource.name,

            resourceType: this.getResourceType(resource),

            sourceType: gatePass.source

        });

        enterpriseResource.metadata = {

            gatePassId: gatePass.gatePassId,

            fileSize: resource.size,

            mimeType: resource.type,

            acceptedAt: new Date().toISOString()

        };

        return {

            accepted: true,

            enterpriseResource

        };

    }

    reject(reason) {

        return {

            accepted: false,

            reason

        };

    }

    getResourceType(resource) {

        if (resource.type.startsWith("image/")) {

            return "IMAGE";

        }

        if (resource.type.startsWith("video/")) {

            return "VIDEO";

        }

        if (resource.type.startsWith("audio/")) {

            return "AUDIO";

        }

        if (resource.type === "application/pdf") {

            return "DOCUMENT";

        }

        return "UNKNOWN";

    }

}