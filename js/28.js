// POO

/** Object Literal */
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

function Cliente(nombre, apellido) { // Define el constructor para objetos de tipo Cliente
    this.nombre = nombre; // Asigna el argumento nombre a la propiedad nombre del objeto
    this.apellido = apellido; // Asigna el argumento apellido a la propiedad apellido del objeto
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);

const cliente = new Client('Juan', 'De la torre'); // Crea una nueva instancia de Cliente usando 'new'

console.log(cliente); // Muestra en consola la estructura del objeto cliente creado

function formatearProducto(producto) { // Función global para dar formato de texto a un producto
    return `El Producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`; // Retorna un string interpolado con los datos
}

console.log(producto2);
console.log(producto3);

console.log( formatearProducto(producto2) ); // Pasa el objeto producto2 como argumento para formatear su texto
