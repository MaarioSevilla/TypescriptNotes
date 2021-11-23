//interface hace que estas propiedades sean obligatorias
interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
}

function mostrarPersona(pPersona: Persona){
    console.log(pPersona);
}

mostrarPersona({nombre: 'hola', apellido: 'hey', edad: 13});

interface Coche {
    marca: string;
    modelo: string;
    color?: string;
}
//el signo de interrogacion significa que es opcional

function mostrarCoche(pCoche: Coche){
    console.log('las propiedades')
}
mostrarCoche({marca:"",modelo:''}); //el color no es obligatorio

//propiedades de solo lestura

interface Punto {
    readonly x: number;
    readonly y : number;
}

let p1: Punto = {x:121,y:12};
// p1.x=45;//esto da error


//definir una funcion dentro del interface
//()funcion, devuelve un true o false
interface Busqueda {
    (valor: string, buscar: string): boolean;
}

const miBusqueda: Busqueda = (v: string, b:string): boolean => {
    const result = v.search(b);
    return result > -1;
}

//interfaz en una clase

interface Humano{
    nombre: string;
    edad: number;
}

class Adulto implements Humano {
    nombre: string;
    edad: number;
    coche: boolean;

    constructor (pNombre : string, pEdad: number, pCoche: boolean) {
        this.coche = pCoche;
        this.edad = pEdad;
        this.nombre = pNombre;
    }
}

class Nino implements Humano{
    nombre: string;
    edad: number;
    colegio: string;
}
