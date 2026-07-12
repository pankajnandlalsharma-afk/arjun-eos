export default class KnowledgeSearchEngine {

    search(query = "", documents = []) {

        const searchText = query.toLowerCase();

        return documents.filter(document => {

            const text = (document.extractedText || "").toLowerCase();

            return text.includes(searchText);

        });

    }

    searchByKeyword(keyword = "", documents = []) {

        return documents.filter(document =>

            (document.keywords || []).includes(keyword)

        );

    }

    searchByTopic(topic = "", documents = []) {

        return documents.filter(document =>

            (document.topics || []).includes(topic)

        );

    }

    searchByEntity(entity = "", documents = []) {

        return documents.filter(document =>

            (document.entities || []).includes(entity)

        );

    }

}