// Clases en TypeScript

class Jugador {
    nombre: string; // Si no se define el modificador es public
    apellidos: string;
    private goles: number;

    constructor(nombre: string, apellidos: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    getGoles(): number {
        return this.goles;
    }

    setGoles(goles: number): void {
        this.goles = goles;
    }

}

let jugador1 = new Jugador('Lionel', 'Messi');

let jugadores: Array<Jugador>; // Los elementos del array serán objetos instancia de Jugador

jugadores = [
    jugador1,
    // {nombre: 'Cristiano', apellidos: 'Ronaldo', goles: 2} Error ya que debe ser instancia
]

// Clases con constructor breve

class Player {

    constructor(public name: string, public surname: string, private goals) {} // Los parámetros llevarán public o private

    getGoals(): number {
        return this.goals;
    }

    setGoals(goals: number): void {
        this.goals = goals;
    }

}

// Interfaces (como tipado estructural)

interface ButtonState {
    hidden: boolean;
    disabled: boolean;
    waiting: boolean;
    backgroundColor?: string; // Esta propiedad será opcional
}

let sendButtonState: ButtonState = {
    hidden: false,
    disabled: true,
    waiting: false,
    // backgroundColor: 'grey'
}

// Interfaces en clases

interface DatosMaestros {
    razonSocial: string;
    cif: string;

    getCif(): string;
}

class Proveedor implements DatosMaestros {
    razonSocial: string;
    cif: string;
    formaPago: string;
    //...

    constructor() {}

    getCif(): string {
        return //...
    }
}

class Cliente implements DatosMaestros {
    razonSocial: string;
    cif: string;
    formaCobro: string;

    //..

    getCif(): string {
        return //...
    }
}

// Herencia de clases en TypeScript

class Employee {
    name: string;
    protected age: number; // Accesible desde las clases que hereden de Employee
    private mobileNumber: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    //.. resto de get y set
}

class Manager extends Employee {

    role: string;

    constructor(name: string, age: number, role: string) {
        super(name, age);
        this.role = role;
    }

    //.. resto de get y set...
}

let manager1 = new Manager('Juan',40, 'Ventas');
let nombreManager = manager1.getName();
console.log(nombreManager);

// Composicion de clases

class Alumno {
    nombre: string;
    dni: string;
    direcciones: Array<Direccion> = [];

    constructor (nombre: string, dni: string) {
        this.nombre = nombre;
        this.dni = dni;
    }

    setDirecciones (direccion: Direccion): void {
        this.direcciones.push(direccion);
    }
}

class Direccion {
    calle: string;
    localidad: string;

    constructor(calle: string, localidad: string) {
        this.calle = calle;
        this.localidad = localidad;
    }
}

let alumno1 = new Alumno('Sara','44555666T');
let direccion1 = new Direccion('Príncipe de Vergara, 40', 'Madrid');

alumno1.setDirecciones(direccion1);
console.log(alumno1);    


