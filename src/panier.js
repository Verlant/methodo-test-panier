const Article = require('../src/article').Article;
class Panier {
    constructor() {
        this.articles = [];
        this.totalPrice = 0.00;
        this.remise = 0.00;
    }

    getArticles() {
        return this.articles;
    }

    addArticle(article) {
        if (article instanceof Article) {
            this.articles.push(article);
            this.setTotalPrice(article.price);
            return this.articles;
        } else {
            return "Le panier ne peut contenir que des articles.";
        }
    }

    deleteArticle(article) {
        if (article instanceof Article) {
            this.articles.splice(this.articles.indexOf(article), 1);
            this.setTotalPrice(article.price * (-1));
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
        return this.totalPrice;
    }

    setTotalPrice(montant) {
        this.totalPrice + montant < 0 ? this.totalPrice = 0.00 : this.totalPrice += montant;
    }

    setRemise(remise) {
        if (typeof remise !== 'number' || remise < 0 || remise > 100) {
            return "La remise doit être un nombre entier compris entre 0 et 100";
        } else if (typeof remise === 'number') {
            this.remise = remise;
            this.setTotalPrice(this.totalPrice * (1 - remise / 100));
        } else {
            return "Une erreure est survenue.";
        }
    }
}

module.exports = {
    Panier:Panier
}