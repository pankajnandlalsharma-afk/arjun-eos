/**
 * ============================================================
 * ARJUN EOS
 * Mission Control Integration Controller
 *
 * Contract : MCI-003
 * Layer    : Controller
 * Purpose  : Public API for Mission Control Integration.
 * ============================================================
 */

import MissionControlIntegrationService
    from "../services/MissionControlIntegrationService";

export default class MissionControlIntegrationController {

    constructor() {

        this.service =
            new MissionControlIntegrationService();

    }

    //--------------------------------------------------
    // Departments
    //--------------------------------------------------

    getDepartments() {

        return this.service.getDepartments();

    }

    getDepartment(departmentId) {

        return this.service.getDepartment(

            departmentId

        );

    }

    //--------------------------------------------------
    // Status
    //--------------------------------------------------

    updateDepartmentStatus(

        departmentId,

        status

    ) {

        return this.service.updateDepartmentStatus(

            departmentId,

            status

        );

    }

    //--------------------------------------------------
    // Mission
    //--------------------------------------------------

    getMissionStatus() {

        return this.service.getMissionStatus();

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return this.service.getStatistics();

    }

}
