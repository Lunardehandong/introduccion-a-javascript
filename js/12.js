//"use strict";
const producto ={
    nombreproducto:"monitor de 20 pulgadas",
    precio: 300,
    disponible: true

}

Object.seal(producto);
producto.precio='nuevo precio';
delete producto.precio;

console.log(producto);
