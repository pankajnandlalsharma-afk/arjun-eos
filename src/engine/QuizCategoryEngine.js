export default class QuizCategoryEngine {
    constructor() {
        this.categories = [];
    }

    addCategory(category) {
        this.categories.push(category);
    }

    removeCategory(category) {
        this.categories = this.categories.filter(
            item => item !== category
        );
    }

    getCategories() {
        return this.categories;
    }

    categoryExists(category) {
        return this.categories.includes(category);
    }

    totalCategories() {
        return this.categories.length;
    }
}
