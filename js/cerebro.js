//navegador celu y navegacion por tabulador*/

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
navMenu.classList.toggle("nav-menu_visible");

if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
} else {
    navToggle.setAttribute("aria-label", "Abrir menú");
}
});

//cambio de color de fondo*/


document.getElementById("boton_color").addEventListener("click", function(){
    document.body.style.backgroundColor = '#cfd5e1'; 
})

document.getElementById("boton_default").addEventListener("click", function(){
    document.body.style.backgroundColor = 'white'; 
})

//carrusel de imagenes*/

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}