//declaracion de clases usando constantes
const langEl = document.querySelector('.langWrap');

//el a que hay aqui es porque tiene lenguage en HTML
const link = document.querySelectorAll('a');
const menuHome = document.querySelector('.menuHome');

const nav2 = document.querySelector('.nav2');
const nav3 = document.querySelector('.nav3');
const nav4 = document.querySelector('.nav4');
const nav5 = document.querySelector('.nav5');
const nav6 = document.querySelector('.nav6');
const nav7 = document.querySelector('.nav7');
const contacto_F = document.querySelector('.contacto_F')

const txt0_c = document.querySelector('.txt0_c');
const txt2 = document.querySelector('.txt2');




//TEXTO PRINCIPAL DE MENU

const nombre= document.querySelector('.nombre');
const correo = document.querySelector('.correo');
const numero = document.querySelector('.numero');

const c_txt1 = document.querySelector('.c_txt1');


const op1_c = document.querySelector('.op1_c');
const op2_c = document.querySelector('.op2_c');
const op3_c = document.querySelector('.op3_c');
const op4_c = document.querySelector('.op4_c');
const op5_c = document.querySelector('.op5_c');
const op6_c = document.querySelector('.op6_c');

const c_txt2 = document.querySelector('.c_txt2');

const btn_c = document.querySelector('.btn_c');

const nuestrosContacto = document.querySelector('.nuestrosContacto');
const horario = document.querySelector('.horario');
const l_v = document.querySelector('.l_v');
const emergencia = document.querySelector('.emergencia');


link.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');


        //textContent es una propiedad JS para obtener el contenido de texto de un determinado elemento o nodo.

        menuHome.textContent = changeLanguage[attr].menuHome;
        
        nav2.textContent = changeLanguage[attr].nav2;
        nav3.textContent = changeLanguage[attr].nav3;
        nav4.textContent = changeLanguage[attr].nav4;
        nav5.textContent = changeLanguage[attr].nav5;
        nav6.textContent = changeLanguage[attr].nav6;
        nav7.textContent = changeLanguage[attr].nav7;
        contacto_F.textContent = changeLanguage[attr].contacto_F;

        //INICIO

        txt0_c.textContent = changeLanguage[attr].txt0_c;
        txt2.textContent = changeLanguage[attr].txt2;

        nombre.textContent = changeLanguage[attr].nombre;
        correo.textContent = changeLanguage[attr].correo;
        numero.textContent = changeLanguage[attr].numero;

        c_txt1.textContent = changeLanguage[attr].c_txt1;


        op1_c.textContent = changeLanguage[attr].op1_c;
        op2_c.textContent = changeLanguage[attr].op2_c;
        op3_c.textContent = changeLanguage[attr].op3_c;
        op4_c.textContent = changeLanguage[attr].op4_c;
        op6_c.textContent = changeLanguage[attr].op6_c;


        c_txt2.textContent = changeLanguage[attr].c_txt2;
        btn_c.textContent = changeLanguage[attr].btn_c;


        nuestrosContacto.textContent = changeLanguage[attr].nuestrosContacto;

        horario.textContent = changeLanguage[attr].horario;
        l_v.textContent = changeLanguage[attr].l_v;
        emergencia.textContent = changeLanguage[attr].emergencia;
        
      
    });
});

let changeLanguage = {

    "espanish":
    {   
        //menu

        "menuHome": "Inicio",

        "nav2": "Acerca de nosotros",
        "nav3": "Servicios",
        "nav4": "Contacto",
        "nav5": "Testimonios",
        "nav6": "Tienda",
        "nav7": "Agendar cita",
        
        "txt0_c": "Envíanos un mensaje",
        "txt2": "Queremos saber mas acerca de tu mascota, por favor rellena todos los campos requeridos",

        //inicio de pagina


        "nombre": "Escribe tu nombre aquí",
        "correo": "Escribe tu correo aquí",
        "numero": "Escribe tu numero aquí",
        "c_txt1": "Elige el servicio que buscas",

        "op1_c": "Cardiología",
        "op2_c": "Radiología",
        "op3_c": "Cirugía",
        "op4_c": "Limpieza dental",
        "op5_c": "Baño",
        "op6_c": "Grooming",

        "c_txt2": "Cuentanos con más detalles el servicio que seleccionaste",

        "btn_c": "Enviar mensaje",

        "nuestrosContacto": "Nuestros contactos",
        "horario": "Horario de atención",
        "l_v": "Lunes - Viernes",
        "emergencia": "Emergencias 24 / 7",

        
        //FOOTER
        "contacto_F": "Contáctanos"
        
    },
    "english":
    {   
        //menu

        "menuHome": "Home",

        "nav2": "About us",
        "nav3": "Services",
        "nav4": "Contact",
        "nav5": "Testimonials",
        "nav6": "Store",
        "nav7": "schedule appointment",
        
        "txt0_c": "Send us a message",
        "txt2": "We want to know more about your pet, please fill in all the required fields",

        //inicio de pagina

        "nombre": "Enter your name here",
        "correo": "Enter your email here",
        "numero": "Enter your phone number here",
        
        "c_txt1": "Choose the service you are looking for",

        "op1_c": "Cardiology",
        "op2_c": "Radiology",
        "op3_c": "Surgery",
        "op4_c": "Dental cleaning",
        "op5_c": "Bathing",
        "op6_c": "Grooming",

        "c_txt2": "Tell us more details about the selected service",

        "btn_c": "Send message",

        "nuestrosContacto": "Our contacts",
        "horario": "Business hours",
        "l_v": "Monday - Friday",
        "emergencia": "24/7 emergencies",
    
        //FOOTER
        "contacto_F": "Contact us"
    }
}