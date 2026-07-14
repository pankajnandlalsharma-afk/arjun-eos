export default class UniversalImportQueue {

    constructor() {

        this.queue = [];

    }

    add(file, sourceType) {

        const item = {

            id: Date.now(),

            fileName: file.name,

            sourceType: sourceType,

            size: file.size,

            status: "Pending",

            importedAt: new Date(),

            nextStep: "Validation Engine"

        };

        this.queue.push(item);

        return item;

    }

    getAll() {

        return this.queue;

    }

    getPending() {

        return this.queue.filter(item => item.status === "Pending");

    }

    getCompleted() {

        return this.queue.filter(item => item.status === "Completed");

    }

    updateStatus(id, status) {

        const item = this.queue.find(item => item.id === id);

        if(item){

            item.status = status;

        }

    }

}