// const Cube = require('../src/app').Cube;
const Article = require('../src/article').Article;
const Panier = require('../src/panier').Panier;
const Coupon = require('../src/coupon').Coupon;
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

    it('6. Modification du prix total du panier', function(done) {
        let panier = new Panier();
        let article1 = new Article("article1", 10.00);
        let article2 = new Article("article2", 10.00);
        let article3 = new Article("article3", 10.00);
        let article4 = new Article("article4", 10.00);
        let article5 = new Article("article5", 10.00);
        panier.addArticle(article1);
        expect(panier.getTotalPricePanier()).to.equal(10);
        panier.addArticle(article2);
        expect(panier.getTotalPricePanier()).to.equal(20);
        panier.addArticle(article3);
        expect(panier.getTotalPricePanier()).to.equal(30);
        panier.addArticle(article4);
        expect(panier.getTotalPricePanier()).to.equal(40);
        panier.addArticle(article5);
        expect(panier.getTotalPricePanier()).to.equal(50);
        panier.deleteArticle(article1);
        expect(panier.getTotalPricePanier()).to.equal(40);
        panier.deleteArticle(article2);
        expect(panier.getTotalPricePanier()).to.equal(30);
        panier.deleteArticle(article3);
        expect(panier.getTotalPricePanier()).to.equal(20);
        panier.deleteArticle(article4);
        expect(panier.getTotalPricePanier()).to.equal(10);
        panier.deleteArticle(article5);
        expect(panier.getTotalPricePanier()).to.equal(0);
        done();
    });

    it('7. Test remise est de type int', function(done) {
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
        panier.setRemise(10);
        expect(Number.isInteger(panier.remise)).to.equal(true);
        done();
    });

    it('8. Test panier ne doit pas etre vide', function(done) {
        let panier = new Panier();
        let article1 = new Article("article1", 10.00);
        let article2 = new Article("article2", 10.00);
        let article3 = new Article("article3", 10.00);
        let article4 = new Article("article4", 10.00);
        let article5 = new Article("article5", 10.00);
        expect(panier.setRemise(10)).to.equal("Le panier est vide !");
        panier.addArticle(article1);
        panier.addArticle(article2);
        panier.addArticle(article3);
        panier.addArticle(article4);
        panier.addArticle(article5);
        expect(panier.setRemise(10)).to.equal(panier.remise);
        done();
    });

    it('9. Test montant panier doit être supérieur à 0', function(done) {
        // let panier = new Panier();
        // let article1 = new Article("article1", 10.00);
        // let article2 = new Article("article2", 10.00);
        // let article3 = new Article("article3", 10.00);
        // let article4 = new Article("article4", 10.00);
        // let article5 = new Article("article5", 10.00);
        // expect(panier.setRemise(10)).to.equal("Le panier est vide !");
        // panier.addArticle(article1);
        // panier.addArticle(article2);
        // panier.addArticle(article3);
        // panier.addArticle(article4);
        // panier.addArticle(article5);
        // expect(panier.setRemise(10)).to.equal(panier.remise);
        done();
    });

    it('80. Test coupon existe', function(done) {
        let couponExiste = false;
        let coupon = new Coupon(Math.floor(Math.random() * 100));
        if (coupon) {
            couponExiste = true;
        }
        expect(couponExiste).to.equal(true);
        done();
    });

    it('90. Test coupon valide', function(done) {
        let couponValide = false;
        let coupon = new Coupon(Math.floor(Math.random() * 100), new Date(), 1);
        if (coupon.dateLimite <= new Date() && coupon.utilisationsRestante > 0) {
            couponValide = true;
        }
        expect(couponValide).to.equal(true);
        done();
    });

    it('100. Test montant total du panier supérieur à 55', function(done) {
        // let couponValide = false;
        // let coupon = new Coupon(Math.floor(Math.random() * 100), new Date(), 1);
        // if (coupon.dateLimite <= new Date() && coupon.utilisationsRestante > 0) {
        //     couponValide = true;
        // }
        // expect(couponValide).to.equal(true);
        // done();
    });
});