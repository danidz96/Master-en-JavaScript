var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log('Camiseta estampada con el logo de: ' + logo);
        };
    };
}
//Clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    //Métodos (funciones o acciones del objeto)
    function Camiseta(color, marca, talla, precio) {
        this.color = color;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar('Nike')
        /* export */ 
    ], Camiseta);
    return Camiseta;
}());
//Herencia - Clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var camiseta = new Camiseta('rojo', 'nike', 's', 42);
console.log(camiseta);
var sudadera_nike = new Sudadera('rojo', 'nike', 's', 42);
sudadera_nike.setCapucha(true);
console.log(sudadera_nike);
/* var camisa = new Camiseta();
camisa.setColor('amarillo');

console.log(camisa); */
