const STORAGE_KEY = "arjun.eos.missions";

export default class MissionRepository {

    getAll() {
        const data = localStorage.getItem(STORAGE_KEY);

        return data ? JSON.parse(data) : [];
    }

    saveAll(missions) {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(missions)
        );
    }

    save(mission) {

        const missions = this.getAll();

        const index = missions.findIndex(
            m => m.id === mission.id
        );

        if (index >= 0) {
            missions[index] = mission;
        } else {
            missions.push(mission);
        }

        this.saveAll(missions);

        return mission;
    }

    findById(id) {
        return this.getAll().find(
            mission => mission.id === id
        );
    }

    delete(id) {

        const missions = this
            .getAll()
            .filter(
                mission => mission.id !== id
            );

        this.saveAll(missions);

    }

    clear() {
        localStorage.removeItem(STORAGE_KEY);
    }

}