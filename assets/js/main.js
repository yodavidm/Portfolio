/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

const translations = {
    en: {
        home: "Home",
        about: "About",
        skills: "Skills",
        education: "Education",
        projects: "Projects",
        contact: "Contact",
        greeting: "Hi,<br>I'm <span class='home__title-color'>David Martin</span><br>Web Developer",
        greeting2: "I'm David",
        contactButton: "Contact",
        aboutTitle: "About",
        aboutText: "I have just finished my web developer studies and I am passionate about web application development. I consider myself a proactive person who wants to achieve what I set out to do. I already had real project experiences using Spring for backend, Angular for frontend and Docker. I am available to work and eager to start an exciting project.",
        professionalSkills: "Professional Skills",
        educationTitle: "Education",
        atos: "ATOS/EVIDEN SEVILLE 2022-2024",
        atosDescription: "Web Developer student in practice",
        eusa: "EUSA Nuevas Profesiones 2016-2018",
        eusaDescription: "2D/3D Animation and Videogames",
        c1: "C1 Advanced Cambridge Certificate",
        c1Description: "Native English & Spanish level",
        projectsTitle: "Projects",
        migration: "Migration REST API",
        migrationDescription: "Migration from Drupal to Magento via Rest Api Springboot",
        dbateo: "Dbateo Forum",
        dbateoDescription: "Degree Final Project Fullstack Spring/Angular",
        captive: "Captive Portal Raspberry",
        captiveDescription: "Captive Portal using nginx and hostapd",
        contactTitle: "Contact"
    },
    es: {
        home: "Inicio",
        about: "Acerca",
        skills: "Habilidades",
        education: "Educación",
        projects: "Proyectos",
        contact: "Contacto",
        greeting: "Hola,<br>Soy <span class='home__title-color'>David Martin</span><br>Desarrollador Web",
        greeting2: "Me llamo David",
        contactButton: "Contacto",
        aboutTitle: "Acerca",
        aboutText: "Acabo de terminar mis estudios de desarrollador web y me apasiona el desarrollo de aplicaciones web. Me considero una persona proactiva que quiere lograr lo que se propone. Ya tuve experiencias en proyectos reales usando Spring para backend, Angular para frontend y Docker. Estoy disponible para trabajar y con muchas ganas de empezar un proyecto emocionante.",
        professionalSkills: "Habilidades Profesionales",
        educationTitle: "Educación",
        atos: "ATOS/EVIDEN SEVILLA 2022-2024",
        atosDescription: "Estudiante en prácticas de Desarrollador Web",
        eusa: "EUSA Nuevas Profesiones 2016-2018",
        eusaDescription: "Animación 2D/3D y Videojuegos",
        c1: "Certificado Cambridge C1 Avanzado",
        c1Description: "Nivel Nativo de Inglés y Español",
        projectsTitle: "Proyectos",
        migration: "API REST de Migración",
        migrationDescription: "Migración de Drupal a Magento mediante API Rest Springboot",
        dbateo: "Foro Dbateo",
        dbateoDescription: "Proyecto Final de Carrera Fullstack Spring/Angular",
        captive: "Portal Cautivo Raspberry",
        captiveDescription: "Portal Cautivo usando nginx y hostapd",
        contactTitle: "Contacto"
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        el.innerHTML = translations[lang][key];
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Set default language
    setLanguage('en');

    document.querySelectorAll('.lang-flag').forEach(flag => {
        flag.addEventListener('click', () => {
            setLanguage(flag.getAttribute('data-lang'));
        });
    });
});

