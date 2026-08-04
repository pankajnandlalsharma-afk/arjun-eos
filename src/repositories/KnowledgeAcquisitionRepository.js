const STORAGE_KEY = "arjun.eos.knowledge.resources";

export default class KnowledgeAcquisitionRepository {

    getAll() {

        const data = localStorage.getItem(STORAGE_KEY);

        return data ? JSON.parse(data) : [];

    }

    saveAll(resources) {

        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(resources)

        );

    }

    save(resource) {

        const resources = this.getAll();

        const index = resources.findIndex(

            r => r.resourceId === resource.resourceId

        );

        if (index >= 0) {

            resources[index] = resource;

        }
        else {

            resources.push(resource);

        }

        this.saveAll(resources);

        return resource;

    }

    findById(resourceId) {

        return this.getAll().find(

            resource =>

                resource.resourceId === resourceId

        );

    }

    delete(resourceId) {

        const resources = this

            .getAll()

            .filter(

                resource =>

                    resource.resourceId !== resourceId

            );

        this.saveAll(resources);

    }

    clear() {

        localStorage.removeItem(STORAGE_KEY);

    }

}