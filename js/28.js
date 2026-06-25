// POO - Programación Orientada a Objetos

/** Object Literal (Estructura estática) */
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor de Producto (Plano de diseño para crear productos)
function Producto(nombre, precio) {
    this.nombre = nombre; // Asigna el argumento nombre a la propiedad nombre del nuevo objeto
    this.precio = precio; // Asigna el argumento precio a la propiedad precio del nuevo objeto
}

// MIGRACIÓN A PROTOTYPE: Vincula la función de formato exclusivamente a la entidad Producto
Producto.prototype.formatearProducto = function() {
    // 'this' accede directamente a las propiedades del objeto que invoque el método
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}

// Object Constructor de Cliente (Plano de diseño para crear clientes)
function Cliente(nombre, apellido) { 
    this.nombre = nombre; // Asigna el argumento nombre a la propiedad nombre del objeto
    this.apellido = apellido; // Asigna el argumento apellido a la propiedad apellido del objeto
}

// PROTOTYPE DE CLIENTE: Método exclusivo para dar formato a los datos del cliente
Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`;
}

// Instanciación: Creación de objetos específicos utilizando la palabra clave 'new'
const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);

// CORRECCIÓN: Se cambió 'new Client' por 'new Cliente' para coincidir con el constructor
const cliente = new Cliente('Juan', 'De la torre'); 

// Impresiones en consola para verificar las estructuras de los objetos creados
console.log(cliente); 
console.log(producto2);
console.log(producto3);

// Invocación de los métodos desde sus respectivos prototipos
console.log( producto2.formatearProducto() ); // Imprime el texto formateado de producto2
console.log( producto3.formatearProducto() ); // Imprime el texto formateado de producto3
console.log( cliente.formatearCliente() );     // Imprime el texto formateado de cliente
