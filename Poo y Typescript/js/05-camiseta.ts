//Interfaz
interface CamisetaBase{
    setColor(color);
    getColor();
}

//Decorador
function estampar(logo: string) {
    return function (target: Function) {
        target.prototype.estampacion = function():void {
            console.log('Camiseta estampada con el logo de: ' + logo);
        }
    }
}

//Clase (molde del objeto)
@estampar('Nike')
/* export */ class Camiseta implements CamisetaBase{
    //Propiedades (características del objeto)
    public color: string;
    public marca: string;
    public talla: string;
    public precio: number;

    //Métodos (funciones o acciones del objeto)
    constructor(color, marca, talla, precio){
        this.color = color;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    
    public setColor(color){
        this.color = color;
    }
    public getColor(){
        return this.color;
    }
}

//Herencia - Clase hija
class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha
    }

    getCapucha(): boolean{
        return this.capucha;
    }
}

var camiseta = new Camiseta('rojo', 'nike', 's', 42);

console.log(camiseta);

var sudadera_nike = new Sudadera('rojo', 'nike', 's', 42);
sudadera_nike.setCapucha(true);
console.log(sudadera_nike);

/* var camisa = new Camiseta();
camisa.setColor('amarillo');

console.log(camisa); */
