// POO - Programación Orientada a Objetos

/** Object Literal (Estructura de objeto estática) */
const producto = {
    nombre: 'Tablet', // Propiedad estática para almacenar el nombre
    precio: 500       // Propiedad estática para almacenar el precio
}

// Object Constructor para la entidad Cliente (Plano de diseño para instancias)
function Cliente(nombre, apellido) { 
    this.nombre = nombre;     // Asigna el argumento nombre a la propiedad del objeto en creación
    this.apellido = apellido; // Asigna el argumento apellido a la propiedad del objeto en creación
}

// Asignación de método al Prototype de Cliente para aislar su comportamiento
Cliente.prototype.formatearCliente = function() {
    // 'this' apunta directamente a la instancia de Cliente que invoque la función
    return `El Cliente ${this.nombre} ${this.apellido}`;
}

// Object Constructor para la entidad Producto (Plano de diseño para instancias)
function Producto(nombre, precio) {
    this.nombre = nombre; // Asigna el argumento nombre a la propiedad del objeto en creación
    this.precio = precio; // Asigna el argumento precio a la propiedad del objeto en creación
}

// Asignación de método al Prototype de Producto (Optimización en memoria)
Producto.prototype.formatearProducto = function() {
    // 'this' apunta dinámicamente a las propiedades de la instancia de Producto en ejecución
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}

// Instanciación: Creación de objetos específicos utilizando la palabra clave 'new'
const producto2 = new Producto('Monitor Curvo de 49"', 800); // Instancia independiente producto2
const producto3 = new Producto('Laptop', 300);              // Instancia independiente producto3

const cliente = new Cliente('Juan', 'De la torre'); // Instancia de Cliente (Corregido 'Client' por 'Cliente')

// Pruebas e Impresión de resultados en Consola
console.log(cliente);   // Imprime la estructura completa del objeto cliente
console.log(producto2); // Imprime la estructura completa del objeto producto2

// Invocación de métodos heredados mediante la cadena de prototipos (Prototype Chain)
console.log( producto2.formatearProducto() ); // Ejecuta el método y devuelve el texto formateado
console.log( producto3.formatearProducto() ); // Ejecuta el método y devuelve el texto formateado
