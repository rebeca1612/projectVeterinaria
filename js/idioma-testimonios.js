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

const txt1 = document.querySelector('.txt1');
const txt2 = document.querySelector('.txt2');
const txt3 = document.querySelector('.txt3');


//INICIO

const testi1 = document.querySelector('.testi1');
const testi2 = document.querySelector('.testi2');
const testi3 = document.querySelector('.testi3');
const testi4 = document.querySelector('.testi4');
const testi5 = document.querySelector('.testi5');
const testi6 = document.querySelector('.testi6');
const testi7 = document.querySelector('.testi7');
const testi8 = document.querySelector('.testi8');

const experiencia = document.querySelector('.experiencia');

const exp = document.querySelector('.exp');
const rescatados = document.querySelector('.rescatados');
const clientes = document.querySelector('.clientes');
const equipo = document.querySelector('.equipo');

const txt4 = document.querySelector('.txt4');
const btn_agendar1 = document.querySelector('.btn_agendar1');



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

        txt1.textContent = changeLanguage[attr].txt1;
        txt2.textContent = changeLanguage[attr].txt2;

        txt3.textContent = changeLanguage[attr].txt3;

        //testimonios

        testi1.textContent = changeLanguage[attr].testi1;

        testi2.textContent = changeLanguage[attr].testi2;

        testi3.textContent = changeLanguage[attr].testi3;

        testi4.textContent = changeLanguage[attr].testi4;

        testi5.textContent = changeLanguage[attr].testi5;

        testi6.textContent = changeLanguage[attr].testi6;

        testi7.textContent = changeLanguage[attr].testi7;

        testi8.textContent = changeLanguage[attr].testi8;
        
        txt4.textContent = changeLanguage[attr].txt4;

        txt4.textContent = changeLanguage[attr].txt4;

        experiencia.textContent = changeLanguage[attr].experiencia;
        exp.textContent = changeLanguage[attr].exp;
        rescatados.textContent = changeLanguage[attr].rescatados;
        clientes.textContent = changeLanguage[attr].clientes;
        equipo.textContent = changeLanguage[attr].equipo;

        btn_agendar1.textContent = changeLanguage[attr].btn_agendar1;
      
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
        
        "txt1": "Testimonios de nuestros cliente",
        "txt2": "La mejor referencia es una buena palabra.",

        //inicio de pagina


        "txt3": "Algunos de nuestros clientes",


        "testi1": "La atención y el servicio en esta clínica veterinaria son excepcionales. El personal es muy amable y siempre se toman el tiempo para responder a todas mis preguntas y preocupaciones. Definitivamente recomendaría esta clínica a cualquier dueño de mascotas.",

        "testi2": "Estoy muy agradecido por el excelente servicio y atención que recibí en esta clínica veterinaria. El personal fue muy detallado y minucioso con cada paso del proceso de atención y me sentí muy cómodo dejando a mi mascota en sus manos.",

        "testi3": "Esta clínica veterinaria es maravillosa. El personal es muy dedicado y siempre se asegura de que mi mascota reciba la mejor atención y tratamiento posible. Definitivamente volveré a traer a mi mascota aquí en el futuro.",

        "testi4": "La atención que recibí en esta clínica veterinaria fue simplemente asombrosa. El personal fue muy amable y comprensivo con mis preocupaciones sobre el tratamiento de mi mascota. Definitivamente recomiendo esta clínica a todos los dueños de mascotas.",

        "testi5": "Esta clínica veterinaria es la mejor que he visitado. El personal es muy profesional y siempre se toma el tiempo para explicar los procedimientos y tratamientos de manera clara y concisa. Realmente aprecio su dedicación y profesionalismo.",

        "testi6": "Estoy muy agradecido por la atención que recibí en esta clínica veterinaria. El personal fue muy profesional y siempre se aseguró de que mi mascota se sintiera cómoda durante su visita. Definitivamente volveré a traer a mi mascota aquí en el futuro.",

        "testi7": "La atención y el servicio en esta clínica veterinaria son excepcionales. El personal es muy amable y siempre se asegura de que mi mascota se sienta cómoda durante cada visita. Definitivamente volveré a traer a mi mascota aquí en el futuro.",

        "testi8": "La atención que recibí en esta clínica veterinaria fue simplemente increíble. El personal fue muy atento a las necesidades de mi mascota y se aseguró de que recibiera el mejor tratamiento posible. Definitivamente recomendaría esta clínica a cualquier dueño de mascotas.",

        "txt4": "Comunicaté con nuestra clínica",
        
        "experiencia": "Nuestra experiencia",
        "exp": "Años de Experiencia",
        "rescatados": "Animales rescatados",
        "clientes": "Clientes por día",
        "equipo": "Equipo de trabajo",

        "txt4": "Comunicaté con nuestra clínica veterinaria y programa una cita hoy mismo",
        "btn_agendar1": "Agendar cita",


        
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
        
        "txt1": "Testimonials from Our Clients",
        "txt2": "The best reference is a good word.",
    
        //page content
    
    
        "txt3": "Some of Our Clients",
    
    
        "testi1": "The attention and service at this veterinary clinic are exceptional. The staff is very friendly and always takes the time to answer all my questions and concerns. I would definitely recommend this clinic to any pet owner.",
    
        "testi2": "I am very grateful for the excellent service and attention I received at this veterinary clinic. The staff was very detailed and thorough with every step of the care process and I felt very comfortable leaving my pet in their hands.",
    
        "testi3": "This veterinary clinic is wonderful. The staff is very dedicated and always ensures that my pet receives the best care and treatment possible. I will definitely bring my pet back here in the future.",
    
        "testi4": "The care I received at this veterinary clinic was simply amazing. The staff was very kind and understanding of my concerns about my pet's treatment. I would definitely recommend this clinic to all pet owners.",
    
        "testi5": "This veterinary clinic is the best I have visited. The staff is very professional and always takes the time to explain procedures and treatments clearly and concisely. I really appreciate their dedication and professionalism.",
    
        "testi6": "I am very grateful for the care I received at this veterinary clinic. The staff was very professional and always made sure that my pet felt comfortable during their visit. I will definitely bring my pet back here in the future.",
    
        "testi7": "The attention and service at this veterinary clinic are exceptional. The staff is very friendly and always makes sure that my pet feels comfortable during each visit. I will definitely bring my pet back here in the future.",
    
        "testi8": "The care I received at this veterinary clinic was simply incredible. The staff was very attentive to my pet's needs and made sure that they received the best treatment possible. I would definitely recommend this clinic to any pet owner.",

        "experiencia": "Our experience",
        "exp": "Years of experience",
        "rescatados": "Rescued animals",
        "clientes": "Clients per day",
        "equipo": "Work team",

        "txt4": "Contact our veterinary clinic and schedule an appointment today",
        "btn_agendar1": "schedule appointment",
        
        
        
        //FOOTER
        "contacto_F": "Contact Us"
    }
}