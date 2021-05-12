// Tipos en TypeScript (declaración)

// Sintaxis de declaración en variables o constantes 
// let identificador: tipo;

// string

let mensaje: string; // Establecer un tipado fuerte a la variable en este caso string

mensaje = 'Hola Mundo!';
// mensaje = 12;  error

// number

let resultado: number;
resultado = 12.45;

let puntuacion = 12; // Eliminamos el tipado porque por inferencia ya obtiene el tipo.
// puntuacion = '12'; Error ya que el tipo inferido queda como tipo fijo

// boolean

let mayorEdad: boolean;
mayorEdad = true;

// null ó undefined (poco uso)

// Tipos complejos

// Arrays 
// let identificador: tipo-elemento[] ó let identificador: Array<tipo-elemento>

let frutas: string[]; // Array de elementos de tipo string
let puntuaciones: Array<number>; // Array de elementos de tipo number

frutas = ['peras','manzanas','plátanos'];

// Tipo any (romper la inferencia de tipos en la declaración)

let id: any = 2876;

id = '0003456';

// Tipado de funciones (parámetros y salida)

function suma(a: number, b: number): string {
    return 'El resultado es ' + a + b;
}

suma(3,2);

function getMensaje(mensaje: string): void {
    console.log('Nuevo mensaje: ' + mensaje)
}

function resta(a, b) {  // En las funciones no es obligatorio introducir tipos
    return a - b;
}

// Tipos de genéricos (definición en tiempo de invocación)

function getResultado<T> (valor: T): string {
    return 'El resultado es ' + valor;
}

const resultado1 = getResultado<string> ('09.90');
const resultado2 = getResultado<number> (9.9);

// Tipos de unión

type _id = string | number;  // Definimos el tipo compuesto pasándole un identificador a la palabra type

let referencia: _id = 123;
referencia = '00234';

// Tipos de unión complejos

type razasPerroAceptadas = 'Pastor Alemán' | 'Pastor Belga' | 'Mastín';

let perro1: razasPerroAceptadas = 'Mastín';
