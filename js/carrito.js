// constantes y variables
const carrito = document.querySelector('#cart-product');
const listaProduct = document.querySelector('#info-product');
const contenedorCarrito = document.querySelector('#info-cart-product');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

//arreglo 
let articulosCarrito = [];

// cargar funcion 
cargarEventListeners();

function cargarEventListeners() {
    // agregar cursos al carrito de compras
    //id listaCursos en e container de los cursos
    listaProduct.addEventListener('click', agregarProduct);

    // eliminar un curso del carrito de cursos
    //id pantalla del carrito
    carrito.addEventListener('click', eliminarProduct);

    // limpia el carrito de compras
    //id del boton vaciar carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);


    // contenido cargado usando JSON y el almacenamiento de localstorage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        //permite crear el resultado del carrito de compras
        carritoHTML();
    });
}


// Función que añade el curso al carrito
function agregarProduct(e) {
    //cancela el evento si es cancelable, lo que significa que la acción predeterminada que pertenece al evento no ocurrirá.
    e.preventDefault();
    // Delegation para agregar-carrito
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement.parentElement;
        // enviar el curso seleccionado para tomar los datos
        leerDatosCurso(product);
    }
}

// leer los datos de los cursos 
function leerDatosCurso(curso) {
    //objeto que guarda la información del curso
    const infoProduct = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h5').textContent,
        precio: curso.querySelector('.price').textContent,
        //permite asignarle un ID a cada curso virtual usando el anclaje (a) usando el atributo data-id="1"
        //ejemplo HTML <a href="#" class="btn btn-danger btn-lg agregar-carrito" data-id="1">Agregar a carrito</a>
        id: product.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //condicional agregar mas articulos al carrito
    if (articulosCarrito.some(product => product.id === infoProduct.id)) {
        const productos = articulosCarrito.map(product => {
            //si es exactamente igual curso.id e infoCurso.id
            //incrementa la cantidad del curso seleccionado del usuario
            if (product.id === infoProduct.id) {
                let cantidad = parseInt(product.cantidad);
                cantidad++
                product.cantidad = cantidad;
                return product;
            } else {
                return product;
            }
        })
        articulosCarrito = [...productos];
    } else {
        articulosCarrito = [...articulosCarrito, infoProduct];
    }
    //permite crear el resultado del carrito de compras
    carritoHTML();
}



// eliminar el curso del carrito en el DOM
function eliminarCurso(e) {
    e.preventDefault();
    //la clase CSS que permite poner la X de color rojo

    if (e.target.classList.contains('icon-close')) {

        // e.target.parentElement.parentElement.remove();
        const product = e.target.parentElement.parentElement;

        const productId = product.querySelector('a').getAttribute('data-id');

        // eliminar el filtro del curso seleccionado
        articulosCarrito = articulosCarrito.filter(product => product.id !== productId);
        
        carritoHTML();
    }
}


// mostrar en el carrito los cursos seleccionados por parte del usuario
function carritoHTML() {
    
    //limpia el carrito
    vaciarCarrito();

    rowProduct.innerHTML = '';
    let total = 0;
    let totalOfProducts = 0;

    articulosCarrito.forEach(product => {

        const containerProduct= document.createElement('div')
        containerProduct.classList.add('cart-product')

        containerProduct.innerHTML = `
        <div class="info-cart-product row align-items-start">

          <img class="Foto-producto-carrito col" src="${product.imagen}" style="width: 20px;">

          <span class="titulo-producto-carrito col mt-5">${product.title}</span>

          <p class="cantidad-producto-carrito col mt-5">${product.quantity}</p>

          <span class="precio-producto-carrito col mt-5">${product.price}</span>

          <a class="icon-close col mt-5" data-id="${product.id}">X</a>
     

        </div>
        `
        
        rowProduct.append(containerProduct)

        total = total + parseInt(product.quantity * product.price);
        
        totalOfProducts = totalOfProducts + product.quantity;


        
      
 

    });

    // permite agregar el curso al carrito
    sincronizarStorage();

}


//usando localStorage envia los cursos al carrito de compras 
function sincronizarStorage() {
    //envia el item llamado carrito  
    //JSON.stringify()método convierte un valor de JavaScript en una cadena JSON
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}




// eliminar los cursos del carrito (lista elegida) en el DOM 
function vaciarCarrito() {
    // forma rapida usando un ciclo, limpiar el historial del navegador...
    while (rowProduct.firstChild) {
        //elimina desde el primer elemento de la lista de los cursos
        rowProduct.removeChild(rowProduct.firstChild);
    }
}
