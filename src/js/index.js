import Swal from 'sweetalert2';

document.querySelector('#opinionId').addEventListener('click', (event) => {
    event.preventDefault();
    Swal.fire({
        title: 'Muchas gracias',
        text: 'Gracias por transmitirnos que te gusta nuestro sitio. Seguimos trabajando para mejorarlo.',
        icon: 'success',
        confirmButtonText: 'Volver'
      })
})