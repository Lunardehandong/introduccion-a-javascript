// Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];
console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.table(meses);

// Acceder a los valores de un arreglo

// Agregar elementos
numeros.push(60, 70, 80); // Al final del arreglo
numeros.unshift(-10, -20, -30); // Al inicio del arreglo

console.table(numeros);

// Métodos de eliminación (Comentados)
// meses.pop(); // elimina el último elemento
// meses.shift(); // elimina el primer elemento
// meses.splice(2, 1);
// console.table(meses);

// Rest Operator o Spread Operator
const nuevoArreglo = [...meses, 'Junio'];
console.log(nuevoArreglo);
