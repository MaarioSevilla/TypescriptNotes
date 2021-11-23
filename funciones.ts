// function sumar(a, b) {
//     return a + b;
// }

const sumar: (a: number, b:number) => number = function( a: number, b:number): number{
    return a+b;
}

const sumar2 = function( a: number, b:number): number {
    return a+b;
}
//=> number es lo que retorna, retorna un numero
const sumar3: (a:number, b:number)=> number = function (a,b){
    return a+b;
}

//parametros opcionales y valores por defecto

function nombreCompleto(nombre: string, apellido?: string): string{
    if(apellido) return nombre+" "+apellido;
    else return nombre;
}
//inicializa el valor
//function nombreCompleto(nombre: string, apellido: string = 'Gomez'): string{
console.log(nombreCompleto('hola'));
console.log(nombreCompleto('hola', 'hoka'));

//parametros de tipo rest, es como pasar un array

function nombreCompleto2 (nombre: string, ...restoNombre: string[]): string{
    return nombre + " "+restoNombre.join(' ');
}

console.log(nombreCompleto2('ana', 'ma', 'le', 'li'));
