export default class EnterpriseDatabase {

    constructor() {

        this.documents = [];

        this.keywords = [];

        this.topics = [];

        this.entities = [];

        this.research = [];

        this.comparisons = [];

        this.summaries = [];

        this.trainingModules = [];

        this.quizzes = [];

        this.faqs = [];

    }

    addDocument(document) {

        this.documents.push(document);

    }

    getDocuments() {

        return this.documents;

    }

    getDocument(id) {

        return this.documents.find(

            document => document.id === id

        );

    }

    removeDocument(id) {

        this.documents = this.documents.filter(

            document => document.id !== id

        );

    }

    clear() {

        this.documents = [];

        this.keywords = [];

        this.topics = [];

        this.entities = [];

        this.research = [];

        this.comparisons = [];

        this.summaries = [];

        this.trainingModules = [];

        this.quizzes = [];

        this.faqs = [];

    }

}