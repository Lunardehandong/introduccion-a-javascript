// POO - Programación Orientada a Objetos

/** Object Literal (Estructura estática) */
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor Padre
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

// Crear funciones que solo se utilizan en un objeto en específico
Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}

// Constructor que heredará de Producto
function Persona(nombre, precio, telefono) {
    Producto.call(this, nombre, precio); // Hereda propiedades (nombre y precio)
    this.telefono = telefono;            // Propiedad exclusiva de Persona
}

// Heredar los métodos de Producto hacia Persona
Persona.prototype = Object.create(Producto.prototype);

// Reasignar el constructor correcto a Persona
Persona.prototype.constructor = Persona;

// Instanciación
const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);
const persona = new Persona('Diego', 1000, '333444555');

// Pruebas en consola
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(persona.formatearProducto()); // Utiliza el método heredado
