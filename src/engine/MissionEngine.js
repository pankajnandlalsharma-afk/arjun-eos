export default class MissionEngine {

    constructor() {

        this.activeMission = {
            name: "100 Channel Mission",
            targetChannels: 100,
            completedChannels: 0,
            targetDate: "2026-07-15",
            status: "Running"
        };

        this.segments = [
            "Law",
            "Bhagavad Gita",
            "ISKCON",
            "Finance",
            "AI",
            "Education",
            "Health",
            "Business",
            "Motivation",
            "Kids"
        ];

    }

    getMission() {
        return this.activeMission;
    }

    getSegments() {
        return this.segments;
    }

    getProgress() {

        return (
            this.activeMission.completedChannels /
            this.activeMission.targetChannels
        ) * 100;

    }

    completeChannel() {

        this.activeMission.completedChannels++;

    }

    getNextSegment() {

        return this.segments[0];

    }

    missionReport() {

        return {

            mission: this.activeMission.name,

            progress: this.getProgress(),

            remaining:

                this.activeMission.targetChannels -

                this.activeMission.completedChannels,

            deadline: this.activeMission.targetDate

        };

    }

}