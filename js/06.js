// Objeto Math
let resultado;

// Math.PI nos da el valor de la constante Pi (aproximadamente 3.14159...)
resultado = Math.PI;

// Math.round() redondea al entero más cercano (.5 o más sube, menos de .5 baja) -> Resultado: 3
resultado = Math.round(2.5);

// Math.ceil() siempre redondea hacia arriba, sin importar los decimales -> Resultado: 3
resultado = Math.ceil(2.1); 

// Math.floor() siempre redondea hacia abajo, ignorando los decimales -> Resultado: 2
resultado = Math.floor(2.9); 

// Math.sqrt() calcula la raíz cuadrada de un número -> Resultado: 12
resultado = Math.sqrt(144);

// Math.abs() devuelve el valor absoluto (convierte números negativos en positivos) -> Resultado: 200
resultado = Math.abs(-200);

// Math.min() devuelve el número con el valor más bajo de una lista -> Resultado: 0
resultado = Math.min(3, 5, 1, 0, 2, 10);

// Math.max() devuelve el número con el valor más alto de una lista -> Resultado: 10
resultado = Math.max(3, 5, 1, 0, 2, 10);

// Math.random() genera un número decimal aleatorio entre 0 (inclusivo) y 1 (exclusivo)
resultado = Math.random();

// Genera un número entero aleatorio entre 0 y 29. 
// Math.random() * 30 da un decimal entre 0 y 29.999..., y Math.floor() lo redondea hacia abajo.
resultado = Math.floor(Math.random() * 30);

// Muestra el último valor asignado a la variable 'resultado' en la consola
console.log(resultado);
