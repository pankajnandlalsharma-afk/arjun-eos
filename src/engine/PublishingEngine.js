import Enterprise from "../models/Enterprise";

export default class PublishingEngine {

    publish(productionJob) {

        const publishedAsset = {

            id: Date.now(),

            productionId: productionJob.id,

            title: productionJob.script?.title || "Untitled",

            platform: "YouTube",

            status: "Published",

            publishedOn: new Date(),

            views: 0,

            likes: 0,

            comments: 0,

            subscribers: 0,

            revenue: 0

        };

        Enterprise.publishing.published.push(publishedAsset);

        productionJob.published = true;

        return publishedAsset;

    }

    getPublishedAssets() {

        return Enterprise.publishing.published;

    }

    getPublishedAsset(id) {

        return Enterprise.publishing.published.find(

            asset => asset.id === id

        );

    }

    updateAnalytics(id, analytics) {

        const asset = this.getPublishedAsset(id);

        if (!asset) return;

        asset.views = analytics.views;

        asset.likes = analytics.likes;

        asset.comments = analytics.comments;

        asset.subscribers = analytics.subscribers;

        asset.revenue = analytics.revenue;

    }

}