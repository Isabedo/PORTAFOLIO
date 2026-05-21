
/*Lenguaje y tema*/
const buttonTheme = document.querySelectorAll('.change-theme');
const buttonLenguage = document.querySelectorAll('.change-lenguage');
const temaGuardado = localStorage.getItem('tema');
/*fin lenguaje y tema*/
/*menu hamburguesa*/
const hamburguesa = document.getElementById('hamburguesa');
const menuFullscreen = document.getElementById('menu-fullscreen');
const menuClose = document.getElementById('menu-close');
/*fin menu hamburguesa*/
/*estrellas fondo*/
const starsContainer = document.getElementById('stars');
/*fin estrellas fondo*/
/*formulario*/
const form = document.getElementById('contactForm');
/*fin formulario*/
/*Juego integrado*/
const btnJugar = document.getElementById('btnJugar');
const modalJuego = document.getElementById('modalJuego');
const cerrarModal = document.getElementById('cerrarModal');
/*fin juego integrado*/

let currentLanguage = 'es';
iniciarReloj();


/*Lógica para mapa*/
let map;

if (document.getElementById('map')) {

    map = L.map('map').setView([6.2351, -75.6018], 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);

    L.marker([6.2351, -75.6018])
        .addTo(map)
        .bindPopup('Universidad de Medellín')
        .openPopup();
}
/*Fin mapa*/

/*logica juego integrado*/
document.querySelectorAll('.menu-link-game').forEach(link => {
    link.addEventListener('click', () => {
        menuFullscreen.classList.remove('abierto');
    });
});

btnJugar.addEventListener('click', function (e) {
        e.preventDefault();
        modalJuego.classList.add('activo');
    });

    
    cerrarModal.addEventListener('click', function () {
        modalJuego.classList.remove('activo');
    });

    
    modalJuego.addEventListener('click', function (e) {
        if (e.target === modalJuego) {
            modalJuego.classList.remove('activo');
        }
    });
/*fin logica juego integrado*/
/*Generación de estrellas de fondo*/
for (let i = 0; i < 80; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    const size = Math.random() * 2.5 + 0.5; // tamaño entre 0.5px y 3px

    star.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        top: ${Math.random() * 100}%;    /* posición Y aleatoria */
        left: ${Math.random() * 100}%;   /* posición X aleatoria */
        --d: ${2 + Math.random() * 4}s;  /* duración animación aleatoria */
        animation-delay: ${Math.random() * 4}s;
        opacity: ${Math.random() * 0.5 + 0.1};
    `;

    starsContainer.appendChild(star);
}
/*fin generación de estrellas de fondo*/
/*Lógica para cambio de tema y lenguaje*/
if (temaGuardado === 'light') {
    document.body.classList.add('light-theme');
    buttonTheme.forEach(btn => {
        btn.querySelector('p').textContent = '☾';
    });
}

// Botón de tema
buttonTheme.forEach(btn => {
    btn.addEventListener('click', () => {
        const esClaro = document.body.classList.toggle('light-theme');

        // Guarda en localStorage
        localStorage.setItem('tema', esClaro ? 'light' : 'dark');

        // Actualiza el ícono en todos los botones
        buttonTheme.forEach(b => {
            b.querySelector('p').textContent = esClaro ? '☾' : '☼';
        });
    });
});

buttonLenguage.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.textContent === '🇪🇸-') {
            btn.textContent = 'EN-';
            currentLanguage = 'es';
            changeLenguage(currentLanguage);
        } else {
            btn.textContent = '🇪🇸-';
            currentLanguage = 'en';
            changeLenguage(currentLanguage);
        }
    });
});

const traducciones = {
    es: {
        /*Menú y home*/
        home: "Inicio",
        projects: "Proyectos",
        about: "Sobre mí",
        services: "Servicios",
        play: "Jugar",
        contact: "Contáctame",
        /*iinicio home*/
        home_h1: "✦ PROGRAMADORA ✦",
        home_h2: "Arte conceptual",
        desc_home: "Creo juegos e historias interactivas — programando la lógica, dibujando los personajes y animando los mundos que los hacen cobrar vida.",
        verMas: "Ver proyectos",
        /*proyectos*/
        art: "Arte",
        programming: "Programación",
        animation2d: "Animación 2D",
        animation3d: "Animación y modelado 3D",
        /*servicios*/
        service_1:"Tengo conocimientos en Python, C#, HTML, CSS, JavaScript y motores gráficos como unity y Unreal Engine.", 
        desc_service_1_1: "Desarrollo de mecánicas de juego.",
        desc_service_1_2: "Optimización de código.",
        desc_service_1_3: "Desarrollo de sitios y páginas web interactivas.",
        service_2: "Diseño de entornos y personajes para videojuegos.",
        desc_service_2_1: "Creación de personajes y criaturas originales.",
        desc_service_2_2: "Diseño de escenarios y fondos para juegos.",
        desc_service_2_3: "Ilustraciones.",
        animation2D_3D: "Animación 2D y 3D",
        desc_service_3_1: "Animación de personajes y objetos para juegos 2D.",
        desc_service_3_2: "Creación de cinemáticas y secuencias animadas.",
        desc_service_3_3: "Modelado y animación 3D",
        /*about*/
        desc_about:"Soy estudiante de comunicación y entretenimiento digital de 5to semestre. Me apasiona el desarrollo de videojuegos y la creación de experiencias interactivas. Con habilidades en programación, arte conceptual y animación, me esfuerzo por crear historias que conecten con los jugadores a nivel emocional y a mejorar constantenemnte mis conocimientos. Estoy emocionada por seguir creciendo en esta industria y contribuir con mi creatividad y dedicación a proyectos innovadores.",
        tools: "Herramientas",
        experience: "Experiencia",
        desc_experience: "Actualmente sin experiencia profesional",
        abilities: "Habilidades",
        desc_abilities: "Programación, diseño de persoanjes, animación 2d y 3D.",
        studies: "Estudios",
        desc_studies: "Tecnica en desarrollo de software en el Sena. / Comunicación y entretenimiento digital en la universidad de Medellín.",
        contact_me: "Trabajemos juntos",
        desc_form: "Si estás buscando apoyo de programación o arte 2D y 3D en tu proyecto, no dudes en contactarme. Siempre estoy abierta a explorar nuevas ideas y ver dónde puedo contribuir. Ya sea que estés en las primeras etapas de desarrollo o profundamente en producción, me encantaría conocer más sobre tu proyecto y cómo podría ayudarte.",
        /*form*/
        name: "Nombre*",
        LastName: "Apellido",
        error_name: "Ingresa tu nombre",
        email: "Correo electrónico*",
        error_email: "Ingresa un email válido",
        message: "Mensaje*",
        error_msg: "El mensaje no puede estar vacío",
        send: "Enviar",
        formExito: "¡Mensaje enviado! Me pondré en contacto pronto.",
        footer: "© 2026 Isabela — Portafolio universitario",
        /*art*/

        /*2D*/
        portfolio: "✦ Portafolio ✦",
        desc_2d: "Proyectos de animación 2D tanto universitarios como personales",
        _2D_1: "Todo lo que no dijimos",
        desc_2d_1: "Animación 2D hecha en After Effects, con personajes y fondos totalmente originales",
        /*prox*/
        coming_soon: "Próximamente",
        process: "En desarrollo",
        desc_development: "Este proyecto está en camino. Vuelve pronto para verlo.",
        /*program*/
        desc_programming: "Proyectos de programación universitarios y personales",
        rem: "R.E.M: Los fragmentos de Milo",
        desc_rem: "Juego 2D plataformero estilo Metroidvania",
        see: "Ver proyecto",
        desc_pong: "Recreación del famoso juego PONG como práctica de programación",
        desc_memories: "Juego realizado en Unity para mi primera Game Jam, con temática de máscaras",
        /*3d*/
        desc_3D: "Proyectos de animación y modelado 3D universitarios y personales",
        desc_restart: "Animación 3D con tematica de E-sports. Personajes y ambiente totalmente propios y originales.",
        desc_tardis: "Render 3D inspirado en la máquina del tiempo del Doctor Who",
        jarrones: "Jarrones",
        desc_jarrones: "Render 3D de práctica haciendo uso de distintas técnicas de texturización",
        
        
        
        desc_programming_: "Proyectos de programación universitarios y personales",
        
        
        
        
        
        
        

    },
    en: {
        /*Menú y home*/
        home: "Home",
        projects: "Projects",
        about: "About Me",
        services: "Services",
        play: "Play",
        contact: "Contact Me",
        /*inicio home*/
        home_h1: "✦ GAME PROGRAMMER ✦",
        home_h2: "Concept Art",
        desc_home: "I create games and interactive stories — programming the logic, drawing the characters, and animating the worlds that bring them to life.",
        verMas: "See projects",
        /*proyectos*/
        art: "Art",
        programming: "Programming",
        animation2d: "2D Animation",
        animation3d: "3D Animation",
        /*servicios*/
        service_1:"I have knowledge in Python, C#, HTML, CSS, JavaScript and graphics engines like unity and Unreal Engine.", 
        desc_service_1_1: "Game mechanic development.",
        desc_service_1_2: "Code optimization.",
        desc_service_1_3: "Development of interactive websites and pages.",
        service_2: "Design of environments and characters for video games.",
        desc_service_2_1: "Creation of original characters and creatures.",
        desc_service_2_2: "Design of scenarios and backgrounds for games.",
        desc_service_2_3: "Illustrations.",
        animation2D_3D: "2D and 3D Animation",
        desc_service_3_1: "Animation of characters and objects for 2D games.",
        desc_service_3_2: "Creation of cinematics and animated sequences.",
        desc_service_3_3: "Modeling and 3D Animation",
        /*about*/
        desc_about:"I am a 5th semester student of communication and digital entertainment. I am passionate about game development and creating interactive experiences. With skills in programming, concept art, and animation, I strive to create stories that emotionally connect with players and to constantly improve my knowledge. I am excited to continue growing in this industry and contribute with my creativity and dedication to innovative projects.",
        tools: "Tools",
        experience: "Experience",
        desc_experience: "Currently without professional experience",
        abilities: "Abilities",
        desc_abilities: "Programming, character design, 2D and 3D animation,  ",
        studies: "Studies",
        desc_studies: "Software development technician at Sena. -Communication and digital entertainment at the University of Medellín.",
        contact_me: "let's work together",
        desc_form: "If you’re looking for a programmer or a 2D and 3D artist support on your project, feel free to reach out. I’m always open to exploring new ideas and seeing where I can contribute. Whether you're in early development or deep into production, I’d be glad to learn more about your project and how I might be able to help.",
        /*form*/
        name: "Name*",
        LastName: "Last Name",
        error_name: "Please enter your name",
        email: "Email*",
        error_email: "Please enter a valid email",
        message: "Message*",
        error_msg: "Please enter a message",
        send: "Send",
        formExito: "Message sent! I will contact you soon.",
        footer: "© 2026 Isabela — University Portfolio",
        /*2D*/
        portfolio: "✦ Portfolio ✦",
        desc_2d: "2D animation projects both university and personal",
        _2D_1: "All that we didn't say",
        desc_2d_1: "2D animation made in After Effects, with completely original characters and backgrounds",
        /*prox*/
        coming_soon: "Coming soon",
        process: "In development",
        desc_development: "This project is on the way. Check back soon to see it.",
        /*program*/
        desc_programming: "University and personal programming projects",
        rem: "R.E.M: The fragments of Milo",
        desc_rem: "2D platformer game in the Metroidvania style",
        see: "See project",
        desc_pong: "Recreation of the classic PONG game as a programming practice",
        desc_memories: "Game developed in Unity for my first Game Jam, themed around masks",
        /*3d*/
        desc_3D: "University and personal 3D animation and modeling projects",
        desc_restart: "3D animation with an E-sports theme. Fully original characters and environment.",
        desc_tardis: "3D render inspired by the Doctor Who time machine",
        jarrones: "Vases",
        desc_jarrones: "3D render using different texturing techniques",

    }
};

function changeLenguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (traducciones[lang][key]) {
            el.textContent = traducciones[lang][key];
        }
    });
}

/*fin lógica para cambio de tema y lenguaje*/
/*Lógica para menú hamburguesa*/
hamburguesa.addEventListener('click', () => {
    menuFullscreen.classList.add('abierto');
});

menuClose.addEventListener('click', () => {
    menuFullscreen.classList.remove('abierto');
});
/*Fin lógica para menú hamburguesa*/
/*Lógica para reloj en vivo*/
function iniciarReloj() {
  var reloj = document.getElementById("liveClock");

  function mostrarHora(desfase) {
    var ahora = new Date(Date.now() + desfase);
    var h = String(ahora.getHours()).padStart(2, "0");
    var m = String(ahora.getMinutes()).padStart(2, "0");
    var s = String(ahora.getSeconds()).padStart(2, "0");
    reloj.textContent = h + ":" + m + ":" + s;
  }

  fetch("https://worldtimeapi.org/api/timezone/America/Bogota")
    .then(function(r) { return r.json(); })
    .then(function(datos) {
      var desfase = new Date(datos.datetime) - new Date();
      mostrarHora(desfase);
      setInterval(function() { mostrarHora(desfase); }, 1000);
    })
    .catch(function() {
      mostrarHora(0);
      setInterval(function() { mostrarHora(0); }, 1000);
    });
}

/*Fin lógica para reloj en vivo*/
/*Lógica para validación de formulario*/


form.addEventListener('submit', function (e) {
    e.preventDefault();

    let valido = true;

    // Limpia errores previos
    document.querySelectorAll('.campo').forEach(c => c.classList.remove('con-error'));
    document.getElementById('formExito').style.display = 'none';

    // Valida nombre
    const nombre = document.getElementById('name');
    if (!nombre.value.trim()) {
        nombre.closest('.campo').classList.add('con-error');
        valido = false;
    }

    // Valida email
    const email = document.getElementById('email');
    if (!email.value.trim() || !email.checkValidity()) {
        email.closest('.campo').classList.add('con-error');
        valido = false;
    }

    // Valida mensaje
    const mensaje = document.getElementById('message');
    if (!mensaje.value.trim()) {
        mensaje.closest('.campo').classList.add('con-error');
        valido = false;
    }

    if (valido) {
        document.getElementById('formExito').style.display = 'block';
        form.reset();
    }
});
/*Fin lógica para validación de formulario*/