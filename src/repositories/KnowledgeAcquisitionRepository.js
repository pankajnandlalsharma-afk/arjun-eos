const STORAGE_KEY = "arjun.eos.knowledge.resources";

export default class KnowledgeAcquisitionRepository {

    //--------------------------------------------------
    // Read All
    //--------------------------------------------------

    getAll() {

        const data = localStorage.getItem(STORAGE_KEY);

        return data
            ? JSON.parse(data)
            : [];

    }

    //--------------------------------------------------
    // Save All
    //--------------------------------------------------

    saveAll(resources) {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(resources)
        );

    }

    //--------------------------------------------------
    // Save
    //--------------------------------------------------

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

    //--------------------------------------------------
    // Update
    //--------------------------------------------------

    update(resource) {

        return this.save(resource);

    }

    //--------------------------------------------------
    // Find By ID
    //--------------------------------------------------

    findById(resourceId) {

        return this
            .getAll()
            .find(
                resource =>
                    resource.resourceId === resourceId
            );

    }

    //--------------------------------------------------
    // Exists
    //--------------------------------------------------

    exists(resourceId) {

        return this.findById(resourceId) != null;

    }

    //--------------------------------------------------
    // Delete
    //--------------------------------------------------

    delete(resourceId) {

        const resources = this
            .getAll()
            .filter(
                resource =>
                    resource.resourceId !== resourceId
            );

        this.saveAll(resources);

    }

    //--------------------------------------------------
    // Clear
    //--------------------------------------------------

    clear() {

        localStorage.removeItem(STORAGE_KEY);

    }

    //--------------------------------------------------
    // Total Resources
    //--------------------------------------------------

    getTotalResources() {

        return this.getAll().length;

    }

    //--------------------------------------------------
    // Count By Type
    //--------------------------------------------------

    countByType(type) {

        return this
            .getAll()
            .filter(
                resource =>
                    resource.resourceType === type
            )
            .length;

    }

    //--------------------------------------------------
    // Count By Status
    //--------------------------------------------------

    countByStatus(status) {

        return this
            .getAll()
            .filter(
                resource =>
                    resource.lifecycle === status
            )
            .length;

    }

    //--------------------------------------------------
    // Search
    //--------------------------------------------------

    search(keyword = "") {

        const searchText =
            keyword.toLowerCase();

        return this
            .getAll()
            .filter(resource =>

                (resource.resourceName || "")
                    .toLowerCase()
                    .includes(searchText)

                ||

                (resource.resourceType || "")
                    .toLowerCase()
                    .includes(searchText)

                ||

                (resource.sourceType || "")
                    .toLowerCase()
                    .includes(searchText)

            );

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        const resources =
            this.getAll();

        return {

            totalResources:
                resources.length,

            documents:
                this.countByType("DOCUMENT"),

            pdfs:
                resources.filter(
                    r => r.sourceType === "PDF"
                ).length,

            images:
                resources.filter(
                    r => r.sourceType === "IMAGE"
                ).length,

            videos:
                resources.filter(
                    r => r.sourceType === "VIDEO"
                ).length,

            audio:
                resources.filter(
                    r => r.sourceType === "AUDIO"
                ).length,

            websites:
                resources.filter(
                    r => r.sourceType === "WEBSITE"
                ).length

        };

    }

}