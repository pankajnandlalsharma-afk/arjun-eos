import Enterprise from "../models/Enterprise";

export default class ProductionEngine {

    createProduction(plan) {

        const production = {

            id: Date.now(),

            planId: plan.id,

            status: "Started",

            script: null,

            voice: null,

            video: null,

            thumbnail: null,

            seo: null,

            quality: "Pending",

            published: false

        };

        Enterprise.production.jobs =
            Enterprise.production.jobs || [];

        Enterprise.production.jobs.push(production);

        return production;

    }

    updateScript(id, script) {

        const job = Enterprise.production.jobs.find(

            j => j.id === id

        );

        if (!job) return;

        job.script = script;

    }

    updateVoice(id, voice) {

        const job = Enterprise.production.jobs.find(

            j => j.id === id

        );

        if (!job) return;

        job.voice = voice;

    }

    updateVideo(id, video) {

        const job = Enterprise.production.jobs.find(

            j => j.id === id

        );

        if (!job) return;

        job.video = video;

    }

    updateThumbnail(id, thumbnail) {

        const job = Enterprise.production.jobs.find(

            j => j.id === id

        );

        if (!job) return;

        job.thumbnail = thumbnail;

    }

    updateSEO(id, seo) {

        const job = Enterprise.production.jobs.find(

            j => j.id === id

        );

        if (!job) return;

        job.seo = seo;

    }

    complete(id) {

        const job = Enterprise.production.jobs.find(

            j => j.id === id

        );

        if (!job) return;

        job.status = "Completed";

    }

    getJobs() {

        return Enterprise.production.jobs || [];

    }

}