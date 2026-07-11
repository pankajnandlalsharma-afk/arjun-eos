export default class ChannelFactoryEngine {

    constructor() {

        this.segments = [

            {
                name: "Law",
                channels: []
            },

            {
                name: "Bhagavad Gita",
                channels: []
            },

            {
                name: "ISKCON",
                channels: []
            },

            {
                name: "Kids",
                channels: []
            },

            {
                name: "Finance",
                channels: []
            },

            {
                name: "Fishing",
                channels: []
            }

        ];

    }

    getSegments() {
        return this.segments;
    }

    createSegment(name) {

        this.segments.push({

            name,

            channels: []

        });

    }

    createChannel(segmentName, channelName, niche) {

        const segment = this.segments.find(

            s => s.name === segmentName

        );

        if (!segment) return;

        segment.channels.push({

            id: Date.now(),

            name: channelName,

            niche,

            status: "Planning",

            videos: 0,

            revenue: 0,

            subscribers: 0,

            quality: "Pending"

        });

    }

    getChannels(segmentName) {

        const segment = this.segments.find(

            s => s.name === segmentName

        );

        return segment ? segment.channels : [];

    }

    deleteChannel(segmentName, id) {

        const segment = this.segments.find(

            s => s.name === segmentName

        );

        if (!segment) return;

        segment.channels = segment.channels.filter(

            c => c.id !== id

        );

    }

    updateStatus(segmentName, id, status) {

        const segment = this.segments.find(

            s => s.name === segmentName

        );

        if (!segment) return;

        const channel = segment.channels.find(

            c => c.id === id

        );

        if (channel) {

            channel.status = status;

        }

    }

}