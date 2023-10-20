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

const txt0_S = document.querySelector('.txt0_S');
const txt2_S= document.querySelector('.txt2_S');




//TEXTO PRINCIPAL DE MENU

const txt3_S= document.querySelector('.txt3_S');

const Cardiologia = document.querySelector('.Cardiologia');
const Cardiologia1 = document.querySelector('.Cardiologia1');
const Cardiologia3 = document.querySelector('.Cardiologia3');


const Radiologia = document.querySelector('.Radiologia');
const Radiologia1 = document.querySelector('.Radiologia1');
const Radiologia3 = document.querySelector('.Radiologia3');

const cirugia = document.querySelector('.cirugia');
const cirugia1 = document.querySelector('.cirugia1');
const cirugia3 = document.querySelector('.cirugia3');


const conocenos = document.querySelector('.conocenos');
const personal = document.querySelector('.personal');


const personal1_1 = document.querySelector('.personal1_1');
const personal1_2 = document.querySelector('.personal1_2');

const personal2_1 = document.querySelector('.personal2_1');
const personal2_2 = document.querySelector('.personal2_2');

const personal3_1 = document.querySelector('.personal3_1');
const personal3_2 = document.querySelector('.personal3_2');

const personal4_1 = document.querySelector('.personal4_1');
const personal4_2 = document.querySelector('.personal4_2');

const personal5_1 = document.querySelector('.personal5_1');
const personal5_2 = document.querySelector('.personal5_2');


//Servicios de limpieza
const grooming_S = document.querySelector('.grooming_S');

const limpieza = document.querySelector('.limpieza');
const limpieza2 = document.querySelector('.limpieza2');
const limpieza3 = document.querySelector('.limpieza3');

const grooming_1 = document.querySelector('.grooming_1');
const grooming_2 = document.querySelector('.grooming_2');
const grooming_3 = document.querySelector('.grooming_3')

const bano = document.querySelector('.bano');
const bano2 = document.querySelector('.bano2');
const bano3 = document.querySelector('.bano3')

const bnt_S = document.querySelector('.bnt_S')



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

        txt0_S.textContent = changeLanguage[attr].txt0_S;
        txt2_S.textContent = changeLanguage[attr].txt2_S;

        txt3_S.textContent = changeLanguage[attr].txt3_S;

        Cardiologia.textContent = changeLanguage[attr].Cardiologia;
        Cardiologia1.textContent = changeLanguage[attr].Cardiologia1;
        Cardiologia3.textContent = changeLanguage[attr].Cardiologia3;


        Radiologia.textContent = changeLanguage[attr].Radiologia;
        Radiologia1.textContent = changeLanguage[attr].Radiologia1;
        Radiologia3.textContent = changeLanguage[attr].Radiologia3;

        cirugia.textContent = changeLanguage[attr].cirugia;
        cirugia1.textContent = changeLanguage[attr].cirugia1;
        cirugia3.textContent = changeLanguage[attr].cirugia3;

        
        conocenos.textContent = changeLanguage[attr].conocenos;
        personal.textContent = changeLanguage[attr].personal;

        personal1_1.textContent = changeLanguage[attr].personal1_1;
        personal1_2.textContent = changeLanguage[attr].personal1_2;

        personal2_1.textContent = changeLanguage[attr].personal2_1;
        personal2_2.textContent = changeLanguage[attr].personal2_2;

        personal3_1.textContent = changeLanguage[attr].personal3_1;
        personal3_2.textContent = changeLanguage[attr].personal3_2;

        personal4_1.textContent = changeLanguage[attr].personal4_1;
        personal4_2.textContent = changeLanguage[attr].personal4_2;
     
        personal5_1.textContent = changeLanguage[attr].personal5_1;
        personal5_2.textContent = changeLanguage[attr].personal5_2;

        grooming_S.textContent = changeLanguage[attr].grooming_S;

        //Grooming
        limpieza.textContent = changeLanguage[attr].limpieza;
        limpieza2.textContent = changeLanguage[attr].limpieza2;
        limpieza3.textContent = changeLanguage[attr].limpieza3;

        grooming_1.textContent = changeLanguage[attr].grooming_1;
        grooming_2.textContent = changeLanguage[attr].grooming_2;
        grooming_3.textContent = changeLanguage[attr].grooming_3;

        bano.textContent = changeLanguage[attr].bano;
        bano2.textContent = changeLanguage[attr].bano2;
        bano3.textContent = changeLanguage[attr].bano3;


        bnt_S.textContent = changeLanguage[attr].bnt_S;


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
        
        "txt0_S": "Nuestros servicios",
        "txt2_S": "Porque sabemos que tu mascota es parte de tu familia, nos encargamos de su salud con el mismo amor y cuidado que tú le brindas.",

        //inicio de pagina

        "txt3_S": "Servicios de veterinaria",

        "Cardiologia": "Cardiología",
        "Cardiologia1": "Servicio especializado en Cardiología, Ecocardiografía Bidimensional, Presión arterial y Termografía.",
        "Cardiologia3": "Desde ₡ 50,000",

        "Radiologia": "Radiología",
        "Radiologia1": "El servicio de radiología digital lo que permite disponer de imágenes de alta calidad en cuestión de minutos. Nuestros profesionales y el personal auxiliar le ofrecerán un servicio excelente a tu mascota.",
        "Radiologia3": "Desde ₡ 30,000",

        "cirugia": "Cirugía",
        "cirugia1": "Los cirujanos veterinarios tienen a tu disposición quirófanos completamente equipados con máquinas de anestesia inhalatoria y monitorización para el control de las constantes vitales.",
        "cirugia3": "Desde ₡ 70,000",

        "conocenos": "¡Conócenos!",
        "personal": "personal",

        "personal1_1": "Alejandra de Radiología",
        "personal1_2": "Alejandra es un médico radiólogo altamente capacitado y experimentado. Se graduó de la facultad de medicina con honores y ha trabajado en varias clínicas y hospitales en su carrera.",


        "personal2_1": "Andrea de Cardiología",
        "personal2_2": "Andrea es una cardióloga con una amplia experiencia en el diagnóstico y tratamiento de enfermedades del corazón.",


        "personal3_1": "Dra. Laura Torres de Cirugía",
        "personal3_2": "La Dra. Laura Torres es una cirujana experimentada y altamente capacitada. Ha trabajado en varios hospitales y centros médicos",

        "personal4_1": "Ms. Julia Sanchez de Peluquera canina",
        "personal4_2": "La Sra. Julia Sánchez es una peluquera canina experimentada y altamente capacitada. Tiene una amplia experiencia en la realización de una variedad de servicios de peluquería canina, incluyendo cortes de pelo, baños y peinados. ",

        "personal5_1": "Armando Sanchez de limpieza dental",
        "personal5_2": "Armando ha estado trabajando con animales durante varios años y ha adquirido habilidades y conocimientos especializados en la limpieza dental canina.",

        "grooming_S": "Grooming profesional",
 

        "limpieza": "¡Limpieza dental!",
        "limpieza2": "eliminamos la placa dental sin dañar el esmalte, reduciendo el sangrado de encías y obteniendo una limpieza profunda incluso en áreas difíciles",
        "limpieza3": "Desde ₡ 10,000",

        "grooming_1": "Grooming",
        "grooming_2": "Contamos con instalaciones de primera y profesionales locales destacados en la estética comercial, exposición canina y docencia para la capacitación de nuevos talentos por medio de la Escuela de Grooming que funciona en nuestras sedes",
        "grooming_3": "Desde ₡ 15,000 ",

        "bano": "Baño",
        "bano2": "Contamos con instalaciones de primera y profesionales locales destacados en la estética comercial, exposición canina y docencia para la capacitación de nuevos talentos por medio de la Escuela de Grooming que funciona en nuestras sedes.",
        "bano3": "Desde ₡ 7,000",

        "bnt_S": "Haz una cita con nosotros",


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
        
        "txt0_S": "Our services",
        "txt2_S": "Because we know that your pet is part of your family, we take care of its health with the same love and care that you give it.",

        //inicio de pagina

        "txt3_S": "Veterinary services",

        "Cardiologia": "Cardiology",
        "Cardiologia1": "Service specialized in Cardiology, Two-Dimensional Echocardiography, Blood Pressure and Thermography.",
        "Cardiologia3": "Starting at ₡50,000",

        "Radiologia": "Radiology",
        "Radiologia1": "Our digital radiology service allows us to have high-quality images ready in a matter of minutes. Our professionals and auxiliary staff will provide excellent service to your pet.",
        "Radiologia3": "Starting at ₡30,000",

        "cirugia": "Surgery",
        "cirugia1": "Our veterinary surgeons have fully equipped operating rooms with inhalation anesthesia machines and monitoring equipment for vital signs control.",
        "cirugia3": "Starting at ₡70,000",

        "conocenos": "Get to know us!",
        "personal": "Staff",

        "personal1_1": "Alejandra from Radiology",
        "personal1_2": "Alejandra is a highly trained and experienced radiologist. She graduated from medical school with honors and has worked in several clinics and hospitals throughout her career.",


        "personal2_1": "Andrea from Cardiology",
        "personal2_2": "Andrea is a cardiologist with extensive experience in the diagnosis and treatment of heart disease.",


        "personal3_1": "Dr. Laura Torres from Surgery",
        "personal3_2": "Dr. Laura Torres is an experienced and highly trained surgeon. She has worked in several hospitals and medical centers.",

        "personal4_1": "Ms. Julia Sanchez from Canine Grooming",
        "personal4_2": "Ms. Julia Sanchez is an experienced and highly trained canine groomer. She has extensive experience in performing a variety of canine grooming services, including haircuts, baths, and styling.",

        "personal5_1": "Armando Sanchez from Dental Cleaning",
        "personal5_2": "Armando has been working with animals for several years and has acquired specialized skills and knowledge in canine dental cleaning.",

        "grooming_S": "Professional Grooming",


        "limpieza": "Dental Cleaning!",
        "limpieza2": "We remove dental plaque without damaging the enamel, reducing gum bleeding and achieving deep cleaning even in difficult areas",
        "limpieza3": "Starting at ₡ 10,000",

        "grooming_1": "Grooming",
        "grooming_2": "We have first-class facilities and outstanding local professionals in commercial aesthetics, canine exhibition, and teaching for the training of new talents through the Grooming School that operates in our locations.",
        "grooming_3": "Starting at ₡ 15,000",

        "bano": "Bath",
        "bano2": "We have first-class facilities and outstanding local professionals in commercial aesthetics, canine exhibition, and teaching for the training of new talents through the Grooming School that operates in our locations.",
        "bano3": "Starting at ₡ 7,000",

        "bnt_S": "Make an appointment with us",
       
        //FOOTER
        "contacto_F": "contact us"
    
    }
}