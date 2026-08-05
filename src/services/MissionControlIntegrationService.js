/**
 * ============================================================
 * ARJUN EOS
 * Mission Control Integration Service
 *
 * Contract : MCI-002
 * Layer    : Service
 * Purpose  : Coordinates Mission Control Integration.
 * ============================================================
 */

import MissionControlIntegrationEngine
    from "../engine/MissionControlIntegrationEngine";

export default class MissionControlIntegrationService {

    constructor() {

        this.engine =
            new MissionControlIntegrationEngine();

    }

    //--------------------------------------------------
    // Departments
    //--------------------------------------------------

    getDepartments() {

        return this.engine.getDepartments();

    }

    getDepartment(departmentId) {

        return this.engine.getDepartment(

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

        return this.engine.updateStatus(

            departmentId,

            status

        );

    }

    //--------------------------------------------------
    // Mission
    //--------------------------------------------------

    getMissionStatus() {

        return this.engine.getMissionStatus();

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return this.engine.getStatistics();

    }

}