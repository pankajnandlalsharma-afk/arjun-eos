import { build } from "pdfjs-dist";

export default class QuizEnterpriseEngine {
    constructor() {
        this.name = "Quiz Enterprise";
        this.version = "1.0.0";
        this.status = "Development";
        this.modules = [];
    }

    registerModule(moduleName = "") {
        this.modules.push(moduleName);
    }

    getModules() {
        return this.modules;
    }

    getInformation() {
        return {
            name: this.name,
            version: this.version,
            status: this.status,
            totalModules: this.modules.length
        };
    }
}no