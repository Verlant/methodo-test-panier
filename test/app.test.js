// const Cube = require('../src/app').Cube;
const Article = require('../src/article').Article;
const Panier = require('../src/panier').Panier;
const expect = require('chai').expect;

// describe('Testing the Cube Functions', function() {
//     it('1. The side length of the Cube', function(done) {
//         let c1 = new Cube(2);
//         expect(c1.getSideLength()).to.equal(2);
//         done();
//     });
    
//     it('2. The surface area of the Cube', function(done) {
//         let c2 = new Cube(5);
//         expect(c2.getSurfaceArea()).to.equal(150);
//         done();
//     });
    
//     it('3. The volume of the Cube', function(done) {
//         let c3 = new Cube(7);
//         expect(c3.getVolume()).to.equal(343);
//         done();
//     });
    
// });

describe('Testing the Panier Functions', function() {
    it('1. Ajout d\'un article succès', function(done) {
        let panier = new Panier();
        let article = new Article("article1", 10.00);
        expect(panier.addArticle(article)).to.equal(panier.articles);
        done();
    });

    it('2. Ajout d\'un article echec', function(done) {
        let panier = new Panier();
        let article = 10;
        expect(panier.addArticle(article)).to.equal("Le panier ne peut contenir que des articles.");
        done();
    });

    it('3. Calcul du montant total du panier', function(done) {
        let panier = new Panier();
        let article1 = new Article("article1", 10.00);
        let article2 = new Article("article2", 10.00);
        let article3 = new Article("article3", 10.00);
        let article4 = new Article("article4", 10.00);
        let article5 = new Article("article5", 10.00);
        panier.addArticle(article1);
        panier.addArticle(article2);
        panier.addArticle(article3);
        panier.addArticle(article4);
        panier.addArticle(article5);
        expect(panier.getTotalPricePanier()).to.equal(50.00);
        done();
    });

    it('3. Suppression d\'un article succès', function(done) {
        let panier = new Panier();
        let article1 = new Article("article1", 10.00);
        let article2 = new Article("article2", 10.00);
        let article3 = new Article("article3", 10.00);
        let article4 = new Article("article4", 10.00);
        let article5 = new Article("article5", 10.00);
        panier.addArticle(article1);
        panier.addArticle(article2);
        panier.addArticle(article3);
        panier.addArticle(article4);
        panier.addArticle(article5);
        expect(panier.deleteArticle(article1)).to.equal(panier.articles);
        done();
    });

    it('4. Suppression d\'un article échec', function(done) {
        let panier = new Panier();
        let article1 = new Article("article1", 10.00);
        let article2 = new Article("article2", 10.00);
        let article3 = new Article("article3", 10.00);
        let article4 = new Article("article4", 10.00);
        let article5 = new Article("article5", 10.00);
        panier.addArticle(article1);
        panier.addArticle(article2);
        panier.addArticle(article3);
        panier.addArticle(article4);
        panier.addArticle(article5);
        expect(panier.deleteArticle(50)).to.equal(`Impossible de retirer ${50} du panier car ce n'est pas un article.`);
        done();
    });

    it('5. Suppression de tous les articles du panier', function(done) {
        let panier = new Panier();
        let article1 = new Article("article1", 10.00);
        let article2 = new Article("article2", 10.00);
        let article3 = new Article("article3", 10.00);
        let article4 = new Article("article4", 10.00);
        let article5 = new Article("article5", 10.00);
        panier.addArticle(article1);
        panier.addArticle(article2);
        panier.addArticle(article3);
        panier.addArticle(article4);
        panier.addArticle(article5);
        expect(panier.emptyPanier()).to.equal(panier.articles);
        done();
    });
});