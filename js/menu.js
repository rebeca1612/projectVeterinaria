
function lista(){

    document.querySelector('#accesoriosPerro').style.display = 'none';
    document.querySelector('#accesoriosGato').style.display = 'none';
    document.querySelector('#accesoriosOtro').style.display = 'none';
    document.querySelector('#granja').style.display = 'none';
    document.querySelector('.listaGeneral').style.display = 'block';

}



function galeria(){
    
    var opciones = document.getElementById('menuOpciones').value;


    switch(opciones) {
        //valor de cada opcion del select
        //case "carne" es el value de cada select

        case "perros":
            Swal.fire({

                icon: 'warning',
                title: 'Tienda de perros',
                buttonColor: '#ff9393'
                
            })

            document.querySelector('#accesoriosPerro').style.display = 'block';
            document.querySelector('#accesoriosGato').style.display = 'none';
            document.querySelector('#accesoriosOtro').style.display = 'none';
            document.querySelector('#granja').style.display = 'none';
            document.querySelector('.listaGeneral').style.display = 'none';

            break;

        case "gatos":

            Swal.fire({

                icon: 'warning',
                title: 'Tienda de gatos',
                buttonColor: '#ff9393'
            
            })

            document.querySelector('#accesoriosPerro').style.display = 'none';
            document.querySelector('#accesoriosGato').style.display = 'block';
            document.querySelector('#accesoriosOtro').style.display = 'none';
            document.querySelector('#granja').style.display = 'none';
            document.querySelector('.listaGeneral').style.display = 'none';
          
            break;
        case "otro":

            Swal.fire({

                icon: 'warning',
                title: 'Tienda de animales exoticos',
                buttonColor: '#ff9393'
        
            })

            document.querySelector('#accesoriosPerro').style.display = 'none';
            document.querySelector('#accesoriosGato').style.display = 'none';
            document.querySelector('#accesoriosOtro').style.display = 'block';
            document.querySelector('#granja').style.display = 'none';
            document.querySelector('.listaGeneral').style.display = 'none';
 
            break;

        case "granja":

            Swal.fire({

                icon: 'warning',
                title: 'Alimentos y accesorios para granja',
                buttonColor: '#ff9393'
    
            })
                
            document.querySelector('#accesoriosPerro').style.display = 'none';
            document.querySelector('#accesoriosGato').style.display = 'none';
            document.querySelector('#accesoriosOtro').style.display = 'none';
            document.querySelector('#granja').style.display = 'block';
            document.querySelector('.listaGeneral').style.display = 'none';
     
            break;
        default:
            document.querySelector('#accesoriosPerro').style.display = 'none';
            document.querySelector('#accesoriosGato').style.display = 'none';
            document.querySelector('#accesoriosOtro').style.display = 'none';
            document.querySelector('.listaGeneral').style.display = 'none';

            
            break;
            //default es la ultima opcion para ocultar todas las imagenes
    }
}

document.getElementById('menuOpciones').addEventListener('change', galeria);