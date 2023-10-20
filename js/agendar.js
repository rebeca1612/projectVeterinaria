
function enviar() {

    let nombre = document.getElementById('name');
    let vetTxt = document.getElementById('vetTxt');
    let email = document.getElementById('emailTxt');
    let numero = document.getElementById('numberTxt');

    let hora = document.getElementById('hora');
    let fecha = document.getElementById('fecha');


    let alerta = document.getElementById('mensajeAlert');
  
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    vetTxt = vetTxt.value;
    nombre = name.value;
    email = emailTxt.value;
    numero = numberTxt.value;

    hora = hora.value;
    fecha = fecha.value;
    
  


    if (nombre === '' && email === '' && numero === '' && hora === '' && fecha === '') {
        alerta.textContent = 'Debe llenar todos los campos';
        alerta.classList.add('alertaRoja');
        alerta.classList.remove('alertaVerde');

    } else if (nombre === '') {
        alerta.textContent = 'El campo nombre esta vacío';
        alerta.classList.add('alertaRoja');
        alerta.classList.remove('alertaVerde');
      
    } else if (vetTxt === '') {
        alerta.textContent = 'El campo esta vacío';
        alerta.classList.add('alertaRoja');
        alerta.classList.remove('alertaVerde');

    } else if (email === '') {
        alerta.textContent = 'El campo email esta vacío';
        alerta.classList.add('alertaRoja');
        alerta.classList.remove('alertaVerde');

    } else if (expressionEmail.test(email) === false) {
        alerta.textContent = 'Email invalido';
        alerta.classList.add('alertaRoja');
        alerta.classList.remove('alertaVerde');

    } else if (numero === '') {
        alerta.textContent = 'El campo teléfono esta vacío';
        alerta.classList.add('alertaRoja');
        alerta.classList.remove('alertaVerde');

    }else if (hora === ''){

        alerta.textContent = 'El campo hora esta vacío';
        alerta.classList.add('alertaRoja');
        alerta.classList.remove('alertaVerde');

    }else if (fecha === ''){

        alerta.textContent = 'El campo fecha esta vacío';
        alerta.classList.add('alertaRoja');
        alerta.classList.remove('alertaVerde');

    } else {



        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Mensaje enviado',
            showConfirmButton: false,
            timer: 1500
        })

        document.querySelector('#carruselPequeno').style.display = 'block';

        document.querySelector('#verResumen').style.display = 'block';

        alerta.textContent = 'Mensaje enviado';
        alerta.classList.add('alertaVerde');
        alerta.classList.remove('alertaRoja');
        //el id del formulario es #form2
        emailjs.sendForm('service_9vnzfj8', 'template_1tybje8', '#form1', 'ZM2RXSFKDoqdGmfns');
        //limpia campos
        cleanInputs();
        
    }

    function cleanInputs() {
       
        document.getElementById("name").value = "";
        document.getElementById("emailTxt").value = "";
        document.getElementById("numberTxt").value = "";
        document.getElementById("hora").value = "";
        document.getElementById("fecha").value = "";
        document.getElementById("totalPagar").innerHTML = "";
        
    }
    

    

    
}

function limpiar(){

    var img = document.createElement("img");
    img.src = "img/personal_agenda.png";

    document.getElementById("name").value = "";
    document.getElementById("emailTxt").value = "";
    document.getElementById("numberTxt").value = "";
    document.getElementById("hora").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("lugares").value = "";
    document.getElementById("totalPagarGeneral").innerHTML = "";
    document.getElementById("totalPagarVet").innerHTML = "";
    document.getElementById("totalPagarDesc").innerHTML = "";
    document.getElementById("nombreMascota").innerHTML = "";
    document.getElementById("personalElegido").innerHTML
    = "";

    //document.getElementById("imagenLugar").innerHTML = "";
    document.getElementById("personalImg").innerHTML = personalImg;
 
    document.getElementById("imagenLugar").innerHTML
    = lugarImagen;


    var personalImg = '<img src="img/personal_agenda.png">';

    var lugarImagen = '<img src="img/lugares_agendar.jpg.gif">';
  


}




var foto = 0 ;
var micarrusel = {} ;
var total = 0 ;

//arreglo para cargar las imagenes
//RECORDAR PONER RUTA EJP IMAGENES/ETC
micarrusel = [
    {imageurl: "img/prodct6_dog.jpg", titulo: "Juguete articulo en la seccion de perro"},{imageurl: "img/prodct5_dog.jpg", titulo: "Cama articulo en la seccion de perro"},{imageurl: "img/prodct3_otro.jpg", titulo: "Jaula para roedor en la seccion de animales exoticos"},
    {imageurl: "img/prodct5_granj.jpg", titulo: "Jaula para aves en la seccion de la granje"},
    {imageurl: "img/prodct1_granj.jpg", titulo: "Shampoo para caballo"}
];

//Funcion que permite cambiar las imagenes (anterior,siguiente)
var cambiar = function(mas){

    //almacena la cantidad total de imagenes
    total = micarrusel.length;
    foto = foto + mas;

    //condicionales para determinar la imagen a presentar
    if (foto > total){
        foto = 1
    }
    if (foto < 1){
        foto = total;
    }

    //instrucciones que apuntan a cada imagen y titulo
    document.thumb.src = micarrusel[foto-1].imageurl;
    titulo = document.getElementById('titulo');
    titulo.innerText = micarrusel[foto-1].titulo;

}

