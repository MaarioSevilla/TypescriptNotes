// Boolean
let esValido: boolean = true;

esValido = false;

//Number
let edad: number = 12;

//String 
let nombre : String = 'gustavo';
let nombre2 : String = 'gustavo';

//concatenar
let nombre_completo: string = `${nombre} ${nombre}`;

//arrays
let numeros: number[] = [1,2,3,4,5];
let numeros2: Array<number> = [1,2,3,5];

//tuplas
let sitio: [string, number] = ['casa',29]

//enum
enum Estado {
    Offline,
    Indefinido,
    Online = 3
}

let stat: Estado = Estado.Online;

//unknown
let sinTipo: unknown = 'Hola';
sinTipo = 13;
sinTipo = true;

let nuevaCadena: String = 'hola';

//any
let tipoindefinido: any = 'esto es un string';
nuevaCadena = tipoindefinido;

//Void para cuando no devuelve nada
function logger(): void {
    console.log('logger');
}


