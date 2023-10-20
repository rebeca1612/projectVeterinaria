const queryString = window.location.search; // Obtiene la cadena de consulta de la URL actual
const formObject = Object.fromEntries(new URLSearchParams(queryString)); // Convierte la cadena de consulta a un objeto JavaScript

// Aquí puedes hacer lo que quieras con los datos del formulario
console.log(formObject);

// Por ejemplo, puedes mostrar los datos en la página
const summaryElement = document.getElementById('summary');
summaryElement.innerHTML = `
  <p>Nombre: ${formObject.name}</p>
  <p>Correo electrónico: ${formObject.email}</p>
  <p>Mensaje: ${formObject.message}</p>
`;