// Creación de una Promise
const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth) {
        resolve('Usuario Autenticado'); // EL PROMISE SE CUMPLE
    } else {
        reject('No se pudo iniciar sesión'); // El promise no se cumple
    }
});

// Consumo de la Promise
usuarioAutenticado
    .then( (resultado) => console.log(resultado) )
    .catch( (error) => console.log(error) )

// En los Promises existen 3 valores posibles:
// Pending   : No se ha cumplido pero tampoco se ha rechazado (está en espera).
// Fulfilled : Ya se cumplió exitosamente (se ejecuta el .then).
// Rejected  : Se ha rechazado o no se pudo cumplir (se ejecuta el .catch).
