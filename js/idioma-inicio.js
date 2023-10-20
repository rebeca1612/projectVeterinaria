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

const btn_menu = document.querySelector('.btn_menu');



//TEXTO PRINCIPAL DE MENU

const txt1_inicio= document.querySelector('.txt1_inicio');

const accesorios = document.querySelector('.accesorios');
const grooming = document.querySelector('.grooming');
const servicio = document.querySelector('.servicio');

const nuestraHistoria = document.querySelector('.nuestraHistoria');
const nuestraHistoria2 = document.querySelector('.nuestraHistoria2');

const mision = document.querySelector('.mision');
const mision1 = document.querySelector('.mision1');
const vision = document.querySelector('.vision');
const vision2 = document.querySelector('.vision2');

const videoTxt = document.querySelector('.videoTxt');
const videoTxt2 = document.querySelector('.videoTxt2');

//FOOTER

const contacto_F = document.querySelector('.contacto_F');
const gmail_F = document.querySelector('.gmail_F');
const ubicacion_F = document.querySelector('.ubicacion_F');


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
        btn_menu.textContent = changeLanguage[attr].btn_menu;

        txt1_inicio.textContent = changeLanguage[attr].txt1_inicio;

        grooming.textContent = changeLanguage[attr].grooming;
        accesorios.textContent = changeLanguage[attr].accesorios;
        servicio.textContent = changeLanguage[attr].servicio;

        nuestraHistoria.textContent = changeLanguage[attr].nuestraHistoria;
        nuestraHistoria2.textContent = changeLanguage[attr].nuestraHistoria2;

        mision.textContent = changeLanguage[attr].mision;
        mision1.textContent = changeLanguage[attr].mision1;
        vision.textContent = changeLanguage[attr].vision;
        vision2.textContent = changeLanguage[attr].vision2;

        videoTxt.textContent = changeLanguage[attr].videoTxt;
        videoTxt2.textContent = changeLanguage[attr].videoTxt2;

        //FOOTER
        contacto_F.textContent = changeLanguage[attr].contacto_F;
       
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
        "btn_menu": "Realiza una cita con nosotros",

        //inicio de pagina

        "txt1_inicio": "¿Porqué nosotros?",
        "accesorios": "Accesorios",
        "grooming": "Grooming",
        "servicio": "Servicio",

        "nuestraHistoria": "Nuestra historia",

        "nuestraHistoria2": "Veterinaria nace bajo el concepto de su primer y más importante valor: la importancia de la vida animal. En nuestra clínica, cada uno de los profesionales está enfocado y comprometido en que la prioridad, sin importar costos o tiempo, será garantizar la vida de las mascotas de nuestros clientes y de todos aquellos animales que bajo nuestras manos, puedan conservar su vida.",

        "mision": "Misión",
        "mision1": "Brindar a los Pacientes y a sus Familiares servicios dignos con calidez y excelencia para otorgar los mejores tratamientos médicos hospitalarios, adquiriendo habilidades, destrezas y uso de nuevas tecnologías en la Práctica de la Medicina Veterinaria a los estudiantes de Licenciatura y Posgrado.",

        "vision": "Visión",
        "vision2": "Ser un Hospital Veterinario reconocido por regirse con normas de bienestar animal y de excelencia profesional, donde estudiantes e investigadores generen conocimientos en la Práctica de la Medicina Veterinaria.",

        "videoTxt": "¿Sabías acerca de nuestros rescates?",
        "videoTxt2": "Cada año, rescatamos a más de 200 perros y gatos en necesidad, y trabajamos arduamente para encontrarles hogares permanentes y amorosos. Sabemos que cada uno de estos animales merece una segunda oportunidad en la vida, y estamos comprometidos a asegurarnos de que reciban todo el amor y cuidado que merecen.",

        //footer
        "contacto_F": "Contáctanos",
       
        
    },
    "english":
    {   
        //menu

        "menuHome": "Inicio",

        "nav2": "About us",
        "nav3": "Services",
        "nav4": "Contact",
        "nav5": "Testimonials",
        "nav6": "Store",
        "nav7": "schedule appointment",
        "btn_menu": "Make an appointment with us",

        //inicio de pagina

        "txt1_inicio": "¿Why us?",
        "accesorios": "Accessories",
        "grooming": "Grooming",
        "servicio": "Service",

        "nuestraHistoria": "Our history",

        "nuestraHistoria2": "Veterinaria was born under the concept of its first and most important value: the importance of animal life. At our clinic, each one of the professionals is focused and committed that the priority, regardless of costs or time, will be to guarantee the lives of our clients' pets and of all those animals that under our hands can preserve their lives..",

        "mision": "Mission",
        "mision1": "Provide Patients and their Families with decent services with warmth and excellence to provide the best hospital medical treatments, acquiring abilities, skills and use of new technologies in the Practice of Veterinary Medicine to Undergraduate and Postgraduate students.",

        "vision": "Vision",
        "vision2": "To be a Veterinary Hospital recognized for abiding by standards of animal welfare and professional excellence, where students and researchers generate knowledge in the Practice of Veterinary Medicine.",

        "videoTxt": "Did you know about our rescues?",
        "videoTxt2": "Every year, we rescue over 200 dogs and cats in need, and work hard to find them permanent and loving homes. We know that each of these animals deserves a second chance at life, and we are committed to ensuring that they receive all the love and care they deserve.",
        "contacto_F": "Contact us"
    }
}