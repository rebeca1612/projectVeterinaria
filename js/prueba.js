const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')


////////////Vaciar y eliminar del carrito
const carrito = document.querySelector('#carrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

btnCart.addEventListener('click',() => {
    containerCartProducts.classList.toggle('hidden-cart')
})

const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-product')

///////LISTA DE TODOS LOS CONTENEDORES////////////

const productsList = document.querySelector('.container-items')

/////variable de arreglos de productos de
let allProducts = []

const valorTotal = document.querySelector('.total-pagar')

const countProducts = document.querySelector('#contador-productos')


// Cargar carrito del localStorage al cargar la página



function cargarEventListeners(){
    carrito.addEventListener('click', eliminarCurso);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}



productsList.addEventListener('click', e => {

    if (e.target.classList.contains('btn-add-cart')){

        const product = e.target.parentElement
        
        const infoProduct = {

            quantity: 1,

            imagen: product.querySelector('img').src,

            title : product.querySelector('h5').textContent,

            price : product.querySelector('p').textContent,

            id: product.querySelector('a').getAttribute('data-id')


        }

        const exits = allProducts.some (product => product.title === infoProduct.title)

        if (exits){
            const products = allProducts.map(product => {

                if(product.title === infoProduct.title){

                    Swal.fire({
                        html:'<iframe src="https://embed.lottiefiles.com/animation/100563"></iframe>',
                        position: 'top-end',
                        title: 'Sumando a la lista más de una vez!',
                        showConfirmButton: false,
                        timer: 3000
                    })

                    product.quantity++;

                    return product;
                    
                    
                } else {
                    return product
                }
            })

            allProducts == [...products]

        } else {

            allProducts = [...allProducts,infoProduct]

        }

        localStorage.setItem('carrito', JSON.stringify(allProducts));

        showHTML();
        saveCartToLocalStorage();

    }

    
    
})



/*rowProduct.addEventListener('click',(e) => {

    if (e.target.classList.contains('icon-close')){

        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(
            product => product.title !== title
        );

        
        showHTML();
    }

}) */

/*function eliminarProducto(e) {
    if (e.target.classList.contains("icon-close")) {
      const id = e.target.dataset.id;
      allProducts = allProducts.filter((product) => product.id !== id);
      showHTML();
      localStorage.setItem("carrito", JSON.stringify(allProducts));
    }
}

function eliminarProducto(id) {
    allProducts = allProducts.filter(product => product.id !== id);
    showHTML();
    saveCartToLocalStorage();
}

rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
      const productId = e.target.getAttribute('data-id');
      eliminarProducto(productId);
    }

    showHTML();
});*/



const showHTML = () => {

    //limpiar HTML
    
    vaciarCarrito();


    rowProduct.innerHTML = '';
    let total = 0;
    let totalOfProducts = 0;

    

    allProducts.forEach(product => {

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

    


    if (totalOfProducts >= 10) {
        const descContainer = document.getElementById('desc');
        descContainer.innerHTML = `<h5>Obtuviste un 30% de descuento por haber seleccionado más de 10 productos</h5><br><p>Para aplicarlo a tu compra, copia el siguiente código y agrégalo a tu factura: '125'</p>`;

        if (totalOfProducts == 10) {
            Swal.fire({
                html: '<iframe src="https://embed.lottiefiles.com/animation/83655"></iframe>',
                title: '<p>Haz conseguido un descuento de 30%!</p>'+'<br>'+
                '<h5>aplicalo con este codigo "140" </h5>',
            })
        }

    }

    
    
    localStorage.setItem('total', total);

    valorTotal.innerText = total;
    countProducts.innerText = totalOfProducts;

    saveCartToLocalStorage();

    
}






function saveCartToLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(allProducts));
    
}

window.addEventListener('load', () => {
    if (localStorage.getItem('carrito')) {
      allProducts = JSON.parse(localStorage.getItem('carrito'));
      showHTML();
    }
});

function vaciarCarrito() {

    document.getElementById("desc").innerHTML = "";
    // forma rapida usando un ciclo, limpiar el historial del navegador...
    while (rowProduct.firstChild) {
        //elimina desde el primer elemento de la lista de los cursos
        rowProduct.removeChild(rowProduct.firstChild);
    }
    saveCartToLocalStorage();
}

function limpiarCarrito() {
    allProducts = [];
    vaciarCarrito();
    showHTML();
}

















//------------------------------SUSCRIPCION----------------------------------


'use extrict';

window.addEventListener('load',init,false);


function init() {

    let email = document.getElementById('inscriptionTxt');
    let btnEnviar = document.getElementById('btnSend');

    //puse la expresion de validacion en el chat..

    //expresionEmail envia el correo
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    //mensaje alert esta en un p de html
    let alerta = document.getElementById('mensajeAlert');

    btnEnviar.onclick = function() {
        email = inscriptionTxt.value;

        if (email === ''){
            //si el campo esta vacio
            alerta.textContent = 'El campo email esta vacio';
            // alerta roja esta en css
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        }else if (expressionEmail.test(email) === false){
            alerta.textContent = 'Email invalido';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        }else {

            Swal.fire({
                title: 'Su registro fue exitoso ✔',
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

            alerta.textContent = 'Su registro fue exitoso';
            alerta.classList.remove('alertaRoja');
            alerta.classList.add('alertaVerde');


            //el primer campo se agrego de la pagina
            //el segundo campo esta en setting > template ID
            //el tercer campo esta account > public key
            emailjs.sendForm('service_9vnzfj8','template_jof1aom','#inscription','ZM2RXSFKDoqdGmfns');
            //service ID/template ID/ID form/piblic ley cuenta
            //el id del formulario es #inscripcion
            //estos 2 no los escribo, solo el que esta en la linea 33
            //emailjs.sendForm('service_')
            
            cleanInputs();
            // carga la funcion para limpiar cuando se envie
        }
    }

    function cleanInputs() {
        inscriptionTxt.value= '';
    }

}