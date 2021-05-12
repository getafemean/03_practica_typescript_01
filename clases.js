// Clases en TypeScript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Jugador = /** @class */ (function () {
    function Jugador(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }
    Jugador.prototype.getGoles = function () {
        return this.goles;
    };
    Jugador.prototype.setGoles = function (goles) {
        this.goles = goles;
    };
    return Jugador;
}());
var jugador1 = new Jugador('Lionel', 'Messi');
var jugadores; // Los elementos del array serán objetos instancia de Jugador
jugadores = [
    jugador1,
    // {nombre: 'Cristiano', apellidos: 'Ronaldo', goles: 2} Error ya que debe ser instancia
];
// Clases con constructor breve
var Player = /** @class */ (function () {
    function Player(name, surname, goals) {
        this.name = name;
        this.surname = surname;
        this.goals = goals;
    } // Los parámetros llevarán public o private
    Player.prototype.getGoals = function () {
        return this.goals;
    };
    Player.prototype.setGoals = function (goals) {
        this.goals = goals;
    };
    return Player;
}());
var sendButtonState = {
    hidden: false,
    disabled: true,
    waiting: false
};
var Proveedor = /** @class */ (function () {
    //...
    function Proveedor() {
    }
    Proveedor.prototype.getCif = function () {
        return; //...
    };
    return Proveedor;
}());
var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    //..
    Cliente.prototype.getCif = function () {
        return; //...
    };
    return Cliente;
}());
// Herencia de clases en TypeScript
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.setName = function (name) {
        this.name = name;
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, role) {
        var _this = _super.call(this, name, age) || this;
        _this.role = role;
        return _this;
    }
    return Manager;
}(Employee));
var manager1 = new Manager('Juan', 40, 'Ventas');
var nombreManager = manager1.getName();
console.log(nombreManager);
// Composicion de clases
var Alumno = /** @class */ (function () {
    function Alumno(nombre, dni) {
        this.direcciones = [];
        this.nombre = nombre;
        this.dni = dni;
    }
    Alumno.prototype.setDirecciones = function (direccion) {
        this.direcciones.push(direccion);
    };
    return Alumno;
}());
var Direccion = /** @class */ (function () {
    function Direccion(calle, localidad) {
        this.calle = calle;
        this.localidad = localidad;
    }
    return Direccion;
}());
var alumno1 = new Alumno('Sara', '44555666T');
var direccion1 = new Direccion('Príncipe de Vergara, 40', 'Madrid');
alumno1.setDirecciones(direccion1);
console.log(alumno1);
