window.onload = function() {

    const total = localStorage.getItem('total');
    document.getElementById('totalPagarCarrito').textContent = total;


    let totalPagar = document.getElementById('totalPagarVet');
    let personalElegido = document.getElementById('personalElegido')

    //funcion de elegir modelo de carro
    document.getElementById("vetTxt").onchange = function(e) {
        //permite guardar un valor destino
        a = e.target.value;

        if (a == "Cardiologia") {
            monto = 50000;
          } else if (a == "Radiologia") {
            monto = 30000;
          } else if (a == "Cirugia") {
            monto = 70000;
          } else if (a == "Limpieza") {
            monto = 10000;
          } else if (a == "Grooming") {
            monto = 15000;
          } else if (a == "Consulta Medica") {
            monto = 10000;
        }

        totalPagar.innerHTML = monto;

        const total = localStorage.getItem('total');
        const resultado = parseInt(monto) + parseInt(total);
        document.getElementById('totalPagarGeneral').textContent = resultado;

        
    }


    

    document.getElementById("lugares").onchange = function(es){

        n = es.target.value;

        let imagen;
        let picture;
        let personal;

        if (n == "alajuela"){
                
            if (a == "Cardiologia"){

                imagen ="img/vet1_contacto.jpg";
                picture ="img/carrusel1-servicios.png";
                personal = "Dra. Alenjandra de Cardiologia";

            }else if (a == "Radiologia"){


                imagen ="img/vet1_contacto.jpg";
                picture ="img/carrusel2-servicios.png";
                personal = "Dra. Cinthya de Radiologia";

            }else if (a == "Cirugia"){

                
                imagen ="img/vet1_contacto.jpg";
                picture ="img/carrusel3-servicios.png";
                personal = "Dra. Fernanda Cirugia";

            }else if (a == "Limpieza"){

                imagen ="img/vet1_contacto.jpg";
                picture ="img/carrusel4-servicios.png";
                personal = "Dra. Stephanie de limpieza dental";

            }else if (a == "Grooming"){

                imagen ="img/vet1_contacto.jpg";
                picture ="img/alaGroo.png";
                personal = "Dra. Ana de Grooming";

            }else if (a == "Consulta Medica"){

                imagen ="img/vet1_contacto.jpg";
                picture ="img/carrusel5servicios.png";
                personal = "Dr. Alberto de Consulta medica General";

            }

        }else if(n == "sanjose"){
                
            if (a == "Cardiologia"){
                

                imagen ="img/vet2_contacto.jpg";
                picture ="img/sjCardi.png";
                personal = "Dra. Ivannia de Cardiologia";

            }else if (a == "Radiologia"){


                imagen ="img/vet2_contacto.jpg";
                picture ="img/sjRadi.png";
                personal = "Dra. Patricia de Radiologia";

            }else if (a == "Cirugia"){

                
                imagen ="img/vet2_contacto.jpg";
                picture ="img/sjCiru.png";
                personal = "Dra. Flor de Cirugia";

            }else if (a == "Limpieza"){

                imagen ="img/vet2_contacto.jpg";
                picture ="img/sjLim.png";
                personal = "Dr. Juliana de limpieza dental";

            }else if (a == "Grooming"){

                imagen ="img/vet2_contacto.jpg";
                picture ="img/sjGroom.png";
                personal = "Dra. Silvia de Grooming";

            }else if (a == "Consulta Medica"){

                imagen ="img/vet2_contacto.jpg";
                picture ="img/sjCm.png";
                personal = "Dr. Ricardo de consulta medica";

            }
        }else if(n == "heredia"){
                
            if (a == "Cardiologia"){
                

                imagen ="img/vet3_contacto.jpg";
                picture ="img/hereCardi.png";
                personal = "Dra. Maria de Cardiologia";

            }else if (a == "Radiologia"){

                imagen ="img/vet3_contacto.jpg";
                picture ="img/hereRadio.png";
                personal = "Dr. Bryan de Radiologia";

            }else if (a == "Cirugia"){

                
                imagen ="img/vet3_contacto.jpg";
                picture ="img/hereCiru.png";
                personal = "Dra. Maria Jose de Cirugia";

            }else if (a == "Limpieza"){

                imagen ="img/vet3_contacto.jpg";
                picture ="img/hereLim.png";
                personal = "Dra. Anahi de limpieza dental";

            }else if (a == "Grooming"){

                imagen ="img/vet3_contacto.jpg";
                picture ="img/hereLim.png";
                personal = "Dra. Anahi de Grooming";

            }else if (a == "Consulta Medica"){

                imagen ="img/vet3_contacto.jpg";
                picture ="img/hereCm.png";
                personal = "Dr. Mario de Consulta medica General";

            }

        }


        document.getElementById("imagenLugar").src = imagen;
        personalElegido.innerHTML = personal;
        document.getElementById("personalImg").src = picture;

    }


    

}

function descu() {
    const descInput = document.getElementById('desc').value;
    const totalGeneral = parseFloat(document.getElementById('totalPagarGeneral').textContent);
    const totalCarrito = parseFloat(document.getElementById('totalPagarCarrito').textContent);

    const valorInput = parseFloat(descInput);

    if (valorInput >= 100 && valorInput <= 150) {


        Swal.fire({
            title: 'Codigo de ingreso valido✔',
            position: 'top-start',
            showClass: {
              popup: `
                animate__animated
                animate__fadeInLeft
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutLeft
                animate__faster
              `
            },
            grow: 'column',
            width: 300,
            showConfirmButton: false,
            showCloseButton: true
        })

        const treintaPorCiento = totalGeneral * 0.3;
        const resultado = totalGeneral - treintaPorCiento;
        document.getElementById('totalPagarDesc').textContent = resultado.toFixed(0);

        const resultadoCarrito = totalCarrito - (totalCarrito * 0.3);
        document.getElementById('totalPagarDesc').textContent = resultadoCarrito.toFixed(0);

    }else{
        Swal.fire({
            icon: 'error',
            title: 'Codigo invalido',
            text: 'El codigo ingresado no es valido',
        });
        return;
    }
    
}





