// Selecciona el elemento del HTML con el ID 'boton'
const boton = document.querySelector('#boton');

// Escucha el evento 'click' en el botón para solicitar los permisos
boton.addEventListener('click', () => {
    Notification.requestPermission()
        // .then captura la respuesta asíncrona (si el usuario aceptó o rechazó)
        .then( resultado => console.log(`El resultado es ${resultado}`) )
});

// Si el permiso ya fue concedido previamente, lanza la notificación directamente
if(Notification.permission === 'granted') {
    new Notification('Esta es una notificación', {
        icon: 'img/ccj.png',
        body: 'Código con Juan, los mejores tutoriales'
    })
}
