/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Knowledge Repository
 *
 * Contract : KNOWLEDGE-REPOSITORY-001
 * Layer    : Repository
 * Purpose  : Stores Enterprise Knowledge Objects.
 * ============================================================
 */

const STORAGE_KEY =
    "arjun.eos.knowledge.repository";

export default class KnowledgeRepository {

    //--------------------------------------------------
    // Read All
    //--------------------------------------------------

    getAll() {

        const data =

            localStorage.getItem(

                STORAGE_KEY

            );

        return data

            ? JSON.parse(data)

            : [];

    }

    //--------------------------------------------------
    // Save All
    //--------------------------------------------------

    saveAll(knowledge) {

        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(knowledge)

        );

    }

    //--------------------------------------------------
    // Save
    //--------------------------------------------------

    save(knowledgeObject) {

        const knowledge =

            this.getAll();

        const index =

            knowledge.findIndex(

                item =>

                    item.knowledgeId ===

                    knowledgeObject.knowledgeId

            );

        if (index >= 0) {

            knowledge[index] =

                knowledgeObject;

        }

        else {

            knowledge.push(

                knowledgeObject

            );

        }

        this.saveAll(

            knowledge

        );

        return knowledgeObject;

    }

    //--------------------------------------------------
    // Find
    //--------------------------------------------------

    findById(knowledgeId) {

        return this

            .getAll()

            .find(

                item =>

                    item.knowledgeId ===

                    knowledgeId

            );

    }

    //--------------------------------------------------
    // Delete
    //--------------------------------------------------

    delete(knowledgeId) {

        this.saveAll(

            this.getAll()

                .filter(

                    item =>

                        item.knowledgeId !==

                        knowledgeId

                )

        );

    }

    //--------------------------------------------------
    // Search
    //--------------------------------------------------

    search(keyword = "") {

        const search =

            keyword.toLowerCase();

        return this

            .getAll()

            .filter(item =>

                (item.title || "")

                    .toLowerCase()

                    .includes(search)

                ||

                (item.summary || "")

                    .toLowerCase()

                    .includes(search)

                ||

                (item.category || "")

                    .toLowerCase()

                    .includes(search)

            );

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        const knowledge =

            this.getAll();

        return {

            totalKnowledge:

                knowledge.length,

            legal:

                knowledge.filter(

                    k =>

                        k.category ===

                        "LEGAL"

                ).length,

            spiritual:

                knowledge.filter(

                    k =>

                        k.category ===

                        "SPIRITUAL"

                ).length,

            medical:

                knowledge.filter(

                    k =>

                        k.category ===

                        "MEDICAL"

                ).length,

            general:

                knowledge.filter(

                    k =>

                        k.category ===

                        "GENERAL"

                ).length

        };

    }

}