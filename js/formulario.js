document.querySelector('#btnCalcular').addEventListener('click', evaluacion);


function evaluacion(){

    nombre = document.querySelector('#charla').value;

    error_radio = validar_radio();

    if (nombre == "" || error_radio == true){
        Swal.fire({
            title: 'Atencion',
            width: 450,
            height: 200,
            iconColor: '#fff',
            position: 'center',
            confirmButtonColor: '#0d6efd',
            color: '#000',
            html: '<iframe src="https://embed.lottiefiles.com/animation/106184"></iframe>'+'<br>'+'Por favor rellene todos los datos',
        })
    }else {

        preg1 = document.querySelector('#pregunta1 input[type=radio]:checked').value;
        preg2 = document.querySelector('#pregunta2 input[type=radio]:checked').value;
        preg3 = document.querySelector('#pregunta3 input[type=radio]:checked').value;
        preg4 = document.querySelector('#pregunta4 input[type=radio]:checked').value;
        preg5 = document.querySelector('#pregunta5').value;

      

        numres1 = parseInt(preg1);
        numres2 = parseInt(preg2);
        numres3 = parseInt(preg3);
        numres4 = parseInt(preg4);
       

        ptnSubTotal = numres1 + numres2 + numres3 + numres4;
        ptnTotal = ptnSubTotal / 20;
        porcFinal = ptnTotal * 100;

        Swal.fire({
            title: '¡Gracias por tu participacion ' + nombre +'!'+'<br>'+'<iframe src="https://embed.lottiefiles.com/animation/130055"></iframe>'+ '<br> Resumen de tus respuestas',
            icon: 'info',
            iconColor: '#FFF',
            color: '#000',
            confirmButtonColor: '#0d6efd',
            html: '<br><br>¿Que tan bueno fueron nuestros servicios?' + '<br><br>El porcentaje fue de: ' + porcFinal +'%'+'<br><br> ¿Qué le hizo decidirse por nosotros en lugar de un competidor?'+'<br><br>'+ preg5,
        })
    };
}

let validar_radio = () => {
    let error =  false;
    let error_radio = false;
    let inpRadio1 = document.querySelector('#pregunta1 input[type=radio]:checked');
    let inpRadio2 = document.querySelector('#pregunta2 input[type=radio]:checked');
    let inpRadio3 = document.querySelector('#pregunta3 input[type=radio]:checked');
    let inpRadio4 = document.querySelector('#pregunta4 input[type=radio]:checked');
  

    if(!inpRadio1 || !inpRadio2 || !inpRadio3 || !inpRadio4 ){
        error = true;
        error_radio = true;
    }else{
        error_radio = false;
    }
    return error_radio;
   
}

function btnlimpiar(){
    document.getElementById('charla').value = "";
    document.getElementById('pregunta5').value = "";

    document.getElementById("a").checked = false;
    document.getElementById("b").checked = false;
    document.getElementById("c").checked = false;
    document.getElementById("d").checked = false;
    document.getElementById("e").checked = false;

    document.getElementById("f").checked = false;
    document.getElementById("g").checked = false;
    document.getElementById("h").checked = false;
    document.getElementById("i").checked = false;
    document.getElementById("j").checked = false;

    document.getElementById("k").checked = false;
    document.getElementById("l").checked = false;
    document.getElementById("m").checked = false;
    document.getElementById("n").checked = false;
    document.getElementById("o").checked = false;

    document.getElementById("p").checked = false;
    document.getElementById("q").checked = false;
    document.getElementById("r").checked = false;
    document.getElementById("s").checked = false;
    document.getElementById("t").checked = false;
}