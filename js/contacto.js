
function enviar() {

    let nombre = document.getElementById('nombreTxt');
    let vetTxt = document.getElementById('vetTxt');
    let email = document.getElementById('emailTxt');
    let numero = document.getElementById('numberTxt');
    let mensaje = document.getElementById('mensajeTxt');
    let alerta = document.getElementById('mensajeAlert');
  
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    vetTxt = vetTxt.value;
    nombre = nombreTxt.value;
    email = emailTxt.value;
    numero = numberTxt.value;
    mensaje = mensajeTxt.value;


    if (nombre === '' && email === '' && numero === '' && mensaje === '') {
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

    } else if (mensaje === '') {
        alerta.textContent = 'El campo mensaje esta vacío';
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


        alerta.textContent = 'Mensaje enviado';
        alerta.classList.add('alertaVerde');
        alerta.classList.remove('alertaRoja');

        //el id del formulario es #form2
        emailjs.sendForm('service_9vnzfj8', 'template_jof1aom', '#form', 'ZM2RXSFKDoqdGmfns');


        //limpia campos
        cleanInputs();
    }
    

    function cleanInputs() {
        document.getElementById("mensajeAlert").innerHTML = "";
        document.getElementById("nombreTxt").value = "";
        document.getElementById("emailTxt").value = "";
        document.getElementById("numberTxt").value = "";
        document.getElementById("mensajeTxt").value = "";
    }
}






//----DOBLE COMBO-------





window.onload = function() {
    //funcion de elegir modelo de carro
    document.getElementById("lugares").onchange = function(e) {
        //permite guardar un valor destino
        a = e.target.value;

        if (a == "Alajuela"){
            var imagen = "img/vet1_contacto.jpg";
        }else if (a == "San jose"){
            var imagen = "img/vet2_contacto.jpg";
        }else if (a == "Heredia"){
            var imagen = "img/vet3_contacto.jpg";
        }
        //permite mostrar la imagen del carrp
        document.getElementById("imagen").src = imagen;
    }

    //permite elegir la version del carro, su destino
    document.getElementById("servicios").onchange = function(es){
        n = es.target.value;
    }

}

function calcular(){
    //VALIDACION DE SELECCION
    if(document.getElementById("lugares").value == "Lugares"){
        swal.fire({
            icon: "info",
            title: "Atencion",
            html: 'Seleccione una sede por favor'
            
        })
    }else {
        if (document.getElementById("servicios").value == "Servicios"){
            swal.fire({
                icon: "info",
                title: "Atencion",
                html: 'Seleccione un servicio por favor'
            })
            
        }else {
            var montoCuota =  0;
            //la a es el modelo
            //la n es la version
            if (a == "Alajuela"){
                if (n == "Cardiología" || n =="Radiología" || n =="Cirugía" || n =="Grooming profesionales" || n =="Limpieza dental" ){
                    montoCuota = 500;
                    swal.fire({
                        icon: 'success',
                        title: 'Sede de alajuela',
                        confirmButtonColor: '#fe8787',
                        html: "<p><strong>Esta sede tiene servicio 24/7 de emergencia</strong></p>"
                    })

                    document.getElementById("lugar").innerHTML= a;
                    document.getElementById("servicio").innerHTML= n;
                    document.getElementById("horario").innerHTML= "L - V : 8:00 am - 5:00 pm";


                }
            }else if(a == "San jose"){
                if(n == "Cardiología" || n =="Radiología" || n =="Cirugía" || n =="Grooming profesionales" || n =="Limpieza dental" ){
                  
                    swal.fire({
                        icon: 'success',
                        title: 'Sede de San Jose',
                        confirmButtonColor: '#fe8787'
                    })

                    document.getElementById("lugar").innerHTML= a;
                    document.getElementById("servicio").innerHTML= n;
                    document.getElementById("horario").innerHTML= "L - V : 10>00 am - 8:00 pm";

                }
            }else if(a == "Heredia"){
                if (n == "Cardiología" || n =="Radiología" || n =="Cirugía" || n =="Grooming profesionales" || n =="Limpieza dental"){
                    montoCuota = 800;
                    swal.fire({
                        icon: 'success',
                        title: 'Sede de heredia',
                        confirmButtonColor: '#fe8787'
                    })
                    document.getElementById("lugar").innerHTML= a;
                    document.getElementById("servicio").innerHTML= n;
                    document.getElementById("horario").innerHTML= "L - V : 7:00 am - 3:00 pm";

                }
            }
            
        }
    }

}