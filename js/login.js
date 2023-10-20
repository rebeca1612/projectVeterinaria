document.getElementById("botonLogin").addEventListener("click", login);

function login(){

    let nombreUsuario = document.getElementById("nombreUsuario").value;
    let passwordID = document.getElementById("passwordID").value;

    let username = "cenfo";
    let password = "123";

   
    let input = [nombreUsuario, passwordID];
    let input_id = ["nombreUsuario","passwordID"];
    let error_count = 0;
    let text = "";

   
    for (let i = 0; i < input.length; i++){
        document.getElementById (input_id[i]).classList.remove("error");
        if (input[i] == "") {
            text = "El campo requerido no puede estar vacio.";
            validation_alert(text);
            document.getElementById (input_id[i]).classList.add("error");
            error_count++;

        }
    }

   
    if (error_count == 0){
        if (nombreUsuario == username && passwordID == password){
            swal.fire({
                title: "¡Bienvenido!" + "<br>"+ username,
                text: "Bienvenido",
                showConfirmButton: false,
                
                timer: 7000,
                html: '<iframe src="https://embed.lottiefiles.com/animation/106186"></iframe>',

            }).then(() => {
                window.location.href = "landing.html";
            });
                
        }else{
            text = "Usuario o contrasenna incorrecta";
            
            validation_alert (text);
        }
    }
}

function validation_alert(ptext){
    swal.fire({
       
        title: "Por favor verifique si los datos estan correctos",
        text: ptext,
        confirmButtonText:"Intentar de nuevo",
        confirmButtonColor:"#00ccbe",
        html:'<iframe src="https://embed.lottiefiles.com/animation/106184"></iframe>',

    }).then(() => {

        

        location.reload();
        document.getElementById("nombreUsuario").value = "";
        document.getElementById("passwordID").value = "";
    });
}
