export default class ScenePlanningEngine {

    generate(storyboard = []) {

        return storyboard.map((scene, index) => ({
            sceneNumber: index + 1,
            title: scene.title,
            duration: scene.duration,
            camera: "Center",
            transition: "Fade",
            background: "Default",
            animation: "Zoom In",
            subtitle: true
        }));

    }

}
