//tipo de dato personalizado
type alfanumerico = string | number;

// String
var cadena: alfanumerico | number = 'Dani';
cadena = 44;

//number
var numero: number = 22;

//Boleano
var verdadero_falso: boolean = true;

//Any
var cualquiera: any = 'hola';
cualquiera = 88;

//Arrays
var lenguajes: Array<string> = ['php', 'js', 'css'];

var years: number[] = [12, 13, 14];

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes);


