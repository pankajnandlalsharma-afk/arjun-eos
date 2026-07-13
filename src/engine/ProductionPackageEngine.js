export default class ProductionPackageEngine {

    generate(script, storyboard) {

        return {
            script,
            storyboard,
            voiceOver: true,
            subtitles: true,
            thumbnail: true,
            backgroundMusic: true,
            soundEffects: true,
            exportFormat: "YouTube Shorts",
            createdAt: new Date()
        };

    }

}