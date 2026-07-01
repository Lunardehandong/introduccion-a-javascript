const numero1 = 20;
const numero3 = 30;

console.log(numero1);

try {
    console.log(numero2); // Intenta mandar a llamar una variable que no existe
} catch (error) {
    console.log(error);   // Captura el error de referencia y lo muestra sin detener el script
}

console.log(numero3);
