
//elasticidad boton scrolltop
$(document).ready(function() {
    smoothScroll.init({

        //permite activar la aceleracioin del scroll

        selector: '[data-scroll]',
        speed: 500,

        //tipos de aceleracion: link: http://easings.net
        easing: 'easeInOutElastic',
    });
});

document.getElementById("flechabtn").style.display = "none";


//Esconder o mostrar el boton de scrolltop
//se autoejecuta la funcion
window.onscroll = function() {
    //carga la funcion scrollfuntion
    scrollFunction()
};

function scrollFunction() {
    //determina cuando ocultar el scrolltopo en pantalla
    //se usa el operador logico 0
    if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280){
        //muestra el boton scrolltop
        document.getElementById("flechabtn").style.display = "block";
    } else {
        //esconde el boton scrolltop
        document.getElementById("flechabtn").style.display = "none";

    }
}