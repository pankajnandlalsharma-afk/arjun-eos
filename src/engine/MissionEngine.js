export default class MissionEngine {
    constructor() {
        this.missions = [];
    }

    createMission({
        name,
        targetChannels = 100,
        targetDate,
        segments = [],
        description = ""
    }) {
        const mission = {
            id: crypto.randomUUID(),

            name,

            description,

            targetChannels,

            completedChannels: 0,

            targetDate,

            segments,

            currentSegmentIndex: 0,

            status: "CREATED",

            createdAt: new Date().toISOString(),

            updatedAt: new Date().toISOString()
        };

        this.missions.push(mission);

        return mission;
    }

    getMission(id) {
        return this.missions.find(m => m.id === id);
    }

    getAllMissions() {
        return [...this.missions];
    }

    startMission(id) {
        const mission = this.getMission(id);

        if (!mission)
            throw new Error("Mission not found");

        mission.status = "RUNNING";
        mission.updatedAt = new Date().toISOString();

        return mission;
    }

    completeChannel(id) {
        const mission = this.getMission(id);

        if (!mission)
            throw new Error("Mission not found");

        if (mission.completedChannels < mission.targetChannels) {
            mission.completedChannels++;
        }

        if (mission.completedChannels >= mission.targetChannels) {
            mission.status = "COMPLETED";
        }

        mission.updatedAt = new Date().toISOString();

        return mission;
    }

    getProgress(id) {
        const mission = this.getMission(id);

        if (!mission)
            return 0;

        return Number(
            (
                (mission.completedChannels /
                    mission.targetChannels) *
                100
            ).toFixed(2)
        );
    }

    getNextSegment(id) {
        const mission = this.getMission(id);

        if (!mission)
            return null;

        return (
            mission.segments[
                mission.currentSegmentIndex
            ] || null
        );
    }

    moveToNextSegment(id) {
        const mission = this.getMission(id);

        if (!mission)
            return null;

        if (
            mission.currentSegmentIndex <
            mission.segments.length - 1
        ) {
            mission.currentSegmentIndex++;
        }

        mission.updatedAt = new Date().toISOString();

        return this.getNextSegment(id);
    }

    generateMissionReport(id) {
        const mission = this.getMission(id);

        if (!mission)
            return null;

        return {
            id: mission.id,

            name: mission.name,

            status: mission.status,

            progress: this.getProgress(id),

            completedChannels:
                mission.completedChannels,

            remainingChannels:
                mission.targetChannels -
                mission.completedChannels,

            nextSegment:
                this.getNextSegment(id),

            deadline:
                mission.targetDate
        };
    }
}