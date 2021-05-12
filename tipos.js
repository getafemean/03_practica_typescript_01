// Tipos en TypeScript (declaración)
// Sintaxis de declaración en variables o constantes 
// let identificador: tipo;
// string
var mensaje; // Establecer un tipado fuerte a la variable en este caso string
mensaje = 'Hola Mundo!';
// mensaje = 12;  error
// number
var resultado;
resultado = 12.45;
var puntuacion = 12; // Eliminamos el tipado porque por inferencia ya obtiene el tipo.
// puntuacion = '12'; Error ya que el tipo inferido queda como tipo fijo
// boolean
var mayorEdad;
mayorEdad = true;
// null ó undefined (poco uso)
// Tipos complejos
// Arrays 
// let identificador: tipo-elemento[] ó let identificador: Array<tipo-elemento>
var frutas; // Array de elementos de tipo string
var puntuaciones; // Array de elementos de tipo number
frutas = ['peras', 'manzanas', 'plátanos'];
// Tipo any (romper la inferencia de tipos en la declaración)
var id = 2876;
id = '0003456';
// Tipado de funciones (parámetros y salida)
function suma(a, b) {
    return 'El resultado es ' + a + b;
}
suma(3, 2);
function getMensaje(mensaje) {
    console.log('Nuevo mensaje: ' + mensaje);
}
function resta(a, b) {
    return a - b;
}
// Tipos de genéricos (definición en tiempo de invocación)
function getResultado(valor) {
    return 'El resultado es ' + valor;
}
var resultado1 = getResultado('09.90');
var resultado2 = getResultado(9.9);
var referencia = 123;
referencia = '00234';
var perro1 = 'Mastín';
