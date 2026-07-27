import MissionService from "../services/MissionService";

export default class MissionController {

    constructor() {
        this.service = new MissionService();
    }

    createMission(data) {
        return this.service.createMission(data);
    }

    getAllMissions() {
        return this.service.getAllMissions();
    }

    getMission(id) {
        return this.service.getMission(id);
    }

    startMission(id) {
        return this.service.startMission(id);
    }

    completeChannel(id) {
        return this.service.completeChannel(id);
    }

    getMissionReport(id) {
        return this.service.getMissionReport(id);
    }

    deleteMission(id) {
        return this.service.deleteMission(id);
    }

    clearMissions() {
        return this.service.clearMissions();
    }
}