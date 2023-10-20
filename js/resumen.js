const form = document.getElementById('form1');
const respuesta = document.getElementById('respuesta');


function verResumen() {

  
    // Aquí colocas el código para enviar el formulario
    // Puedes obtener los valores de los campos del formulario de esta manera:
    const name = form.elements['name'].value;
    const dog = form.elements['dog'].value;
    const email = form.elements['email'].value;

  // Muestra los valores en el div de respuesta
    respuesta.innerHTML = `<h1>Resumen</h1><br>Nombre: ${name}<br>Nombre de mascota: ${dog}<br>Email: ${email}`;
}