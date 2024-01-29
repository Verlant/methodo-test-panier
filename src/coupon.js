class Coupon {
    constructor(numero, dateLimite, utilisationsRestante) {
        this.numero = numero;
        this.dateLimite = dateLimite;
        this.utilisationsRestante = utilisationsRestante;
    }
}

module.exports = {
    Coupon:Coupon
}