export default class PublishingPackageEngine {

    generate(title, description, hashtags) {

        return {
            title,
            description,
            hashtags,
            platform: "YouTube",
            visibility: "Public",
            scheduled: false,
            generatedAt: new Date()
        };

    }

}
