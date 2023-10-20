//recibe el controlador de eventos y el ID ed cada contenido

function opciones (evt, info){

    //Declaracion de varible
    //i controla el for
    //tabcontent controla el contenido de los TABS
    //tablinks controla los enlaces de los TABS

    var i, tabcontent, tablinks;

    //obtener todos los elementos con class=="abcontent" y ocultelos para NO mostrarlos en la pagina apenas se ejecute

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i< tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    //Apunta a todos los elementos con class= "tablinks" y elimine la clase "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i<tablinks.length; i++){

        //esto elimina los elementos
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //apunta a todos los elementos con class= "tablinks" y elimine la clase "active"
    //Muestre la pestaña actual y agregue una clase "activa" al boton que abrio la pestanna
    //muestra la info que tienen todos los ID del HTML
    document.getElementById(info).style.display = "block";
    evt.currentTarget.className += " active";
    //HAY QUE HACER UNA CLASE EN CSS PARA QUE FUNCIONE
}


                  









