import Enterprise from "../models/Enterprise";

export default class AnalyticsEngine {

    record(publishedAsset) {

        const analytics = {

            id: Date.now(),

            publishedId: publishedAsset.id,

            title: publishedAsset.title,

            platform: publishedAsset.platform,

            views: publishedAsset.views,

            likes: publishedAsset.likes,

            comments: publishedAsset.comments,

            subscribers: publishedAsset.subscribers,

            revenue: publishedAsset.revenue,

            collectedOn: new Date()

        };

        Enterprise.analytics.channels.push(analytics);

        Enterprise.analytics.views += analytics.views;

        Enterprise.analytics.subscribers += analytics.subscribers;

        Enterprise.analytics.revenue += analytics.revenue;

        return analytics;

    }

    update(id, data) {

        const item = Enterprise.analytics.channels.find(

            channel => channel.id === id

        );

        if (!item) return;

        item.views = data.views;

        item.likes = data.likes;

        item.comments = data.comments;

        item.subscribers = data.subscribers;

        item.revenue = data.revenue;

    }

    getAll() {

        return Enterprise.analytics.channels;

    }

    getSummary() {

        return {

            totalVideos: Enterprise.analytics.channels.length,

            totalViews: Enterprise.analytics.views,

            totalSubscribers: Enterprise.analytics.subscribers,

            totalRevenue: Enterprise.analytics.revenue

        };

    }

}