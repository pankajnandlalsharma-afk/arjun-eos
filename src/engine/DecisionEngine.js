import ChannelFactoryEngine from "./ChannelFactoryEngine";

export default class DecisionEngine {

    constructor() {

        this.channelFactory = new ChannelFactoryEngine();

    }

    chooseBestSegment() {

        const segments = this.channelFactory.getSegments();

        if (segments.length === 0) return null;

        return segments[0];

    }

    chooseNextChannel(segmentName) {

        const channels = this.channelFactory.getChannels(segmentName);

        if (channels.length === 0) return null;

        return channels.find(

            channel => channel.status === "Planning"

        );

    }

    assignPriority(channel) {

        if (!channel) return "LOW";

        if (channel.niche.toLowerCase().includes("quiz"))
            return "HIGH";

        if (channel.niche.toLowerCase().includes("short"))
            return "HIGH";

        return "MEDIUM";

    }

    approve(channel) {

        console.log("Approved :", channel.name);

        channel.status = "Approved";

    }

    reject(channel) {

        console.log("Rejected :", channel.name);

        channel.status = "Rejected";

    }

}