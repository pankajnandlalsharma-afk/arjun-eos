export default class AIAgentManager {

    constructor() {

        this.agents = [

            { name: "Business Agent", status: "Idle" },

            { name: "Research Agent", status: "Idle" },

            { name: "Competitor Agent", status: "Idle" },

            { name: "Audience Agent", status: "Idle" },

            { name: "Knowledge Agent", status: "Idle" },

            { name: "Quiz Agent", status: "Idle" },

            { name: "Shorts Agent", status: "Idle" },

            { name: "Publishing Agent", status: "Idle" },

            { name: "Analytics Agent", status: "Idle" },

            { name: "Strategy Agent", status: "Idle" },

            { name: "Quality Agent", status: "Idle" }

        ];

    }

    getAgents() {

        return this.agents;

    }

    startAgent(agentName) {

        const agent = this.agents.find(

            agent => agent.name === agentName

        );

        if(agent){

            agent.status = "Running";

        }

        return agent;

    }

    completeAgent(agentName) {

        const agent = this.agents.find(

            agent => agent.name === agentName

        );

        if(agent){

            agent.status = "Completed";

        }

        return agent;

    }

    resetAgents() {

        this.agents.forEach(agent => {

            agent.status = "Idle";

        });

    }

}
