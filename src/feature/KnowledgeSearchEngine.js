export default class KnowledgeSearchEngine {

    search(repository, keyword) {

        if (!keyword) {

            return repository;

        }

        const searchKey = keyword.toLowerCase();

        return repository.filter(object =>

            JSON.stringify(object)

                .toLowerCase()

                .includes(searchKey)

        );

    }

    findById(repository, id) {

        return repository.find(

            object => object.id === id

        );

    }

    findByDocument(repository, documentName) {

        return repository.filter(

            object =>

                object.documentName === documentName

        );

    }

}