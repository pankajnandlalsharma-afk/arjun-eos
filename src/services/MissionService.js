import MissionEngine from "../engine/MissionEngine";
import MissionRepository from "../repositories/MissionRepository";

export default class MissionService {

    constructor() {
        this.engine = new MissionEngine();
        this.repository = new MissionRepository();

        const missions = this.repository.getAll();

        this.engine.missions = missions;
    }

    createMission(data) {

        const mission = this.engine.createMission(data);

        this.repository.save(mission);

        return mission;
    }

    getAllMissions() {
        return this.repository.getAll();
    }

    getMission(id) {
        return this.repository.findById(id);
    }

    startMission(id) {

        const mission = this.engine.startMission(id);

        this.repository.save(mission);

        return mission;
    }

    completeChannel(id) {

        const mission = this.engine.completeChannel(id);

        this.repository.save(mission);

        return mission;
    }

    getMissionReport(id) {
        return this.engine.generateMissionReport(id);
    }

    deleteMission(id) {
        this.repository.delete(id);
    }

    clearMissions() {
        this.repository.clear();
    }
}