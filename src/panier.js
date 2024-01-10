const Article = require('../src/article').Article;
class Panier {
    constructor() {
        this.articles = [];
    }

    getArticles() {
        return this.articles;
    }

    addArticle(article) {
        if (article instanceof Article) {
            this.articles.push(article);
            return this.articles;
        } else {
            return "Le panier ne peut contenir que des articles.";
        }
    }

    deleteArticle(article) {
        if (article instanceof Article) {
            this.articles.splice(this.articles.indexOf(article), 1);
            return this.articles;
        } else {
            return `Impossible de retirer ${article} du panier car ce n'est pas un article.`;
        }
    }

    emptyPanier() {
        this.articles = [];
        return this.articles;
    }

    getTotalPricePanier() {
        let totalPrice = 0;
        this.articles.forEach(article => {
            totalPrice += article.getPrice();
        });
        return totalPrice;
    }
}

module.exports = {
    Panier:Panier
}