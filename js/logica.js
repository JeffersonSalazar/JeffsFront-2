// Efecto Scroll
AOS.init();

// Clase de Css para aparecer el Menu Navegacion
// y cambiar el Menu Hamburg por la X de cierre
$('#icon-menu').on('click', function() {
    $('ul').toggleClass('menu-off');
    
    $(this).toggleClass('fas fa-bars'); // Cambio de Icono Menu
    $(this).toggleClass('fas fa-times');
});

// Scroll con Background al desplazar el Menu de Navegacion
var alturaScroll = 0;
var menuNav = $('#nav-menu');
var titleContainer = $('#text-banner');
var title = $('#titulo-empresa');

$(window).on('scroll', function() {
    alturaScroll = $(this).scrollTop();
    
    if (alturaScroll >60) {
        menuNav.css({
            'height':'60px',
        });
        titleContainer.css({
            'height':'60px',
            'position':'fixed',
            'z-index':'50',
        });
        title.css({
            'font-size':'2.4rem',
        });
    } 
    else {
        menuNav.css({
            'height':'0',
        });
        titleContainer.css({
            'height':'440px',
            'z-index':'5',
        });
        title.css({
            'font-size':'5rem',
        });
    }
});

// Header Carrusel 
window.addEventListener('load', function() {

    var imagenes = ['img/img1-min.jpg', 'img/img2-min.jpg', 'img/img4-min.jpg'];
    var indiceImg = 0;

    function carrusel() {
        document.carrusel.src = imagenes[indiceImg];

        if (indiceImg < 2) {
            indiceImg++;
        } else {
            indiceImg = 0;
        }
    }
    setInterval(carrusel, 3000);
    // carrusel();
});

// Modals
let modalOne = document.getElementById('modal-uno');
let btnOpenOne = document.getElementById('open-modal-uno');
let closeOne = document.getElementById('cerrar-uno');

btnOpenOne.addEventListener('click', function () {
    modalOne.style.display = "flex";
});

closeOne.addEventListener('click', function() {
    modalOne.style.display = "none";   
});

// Modal Dos
let modalTwo = document.getElementById('modal-dos');
let btnOpenTwo = document.getElementById('open-modal-dos');
let closeTwo = document.getElementById('cerrar-dos');

btnOpenTwo.addEventListener('click', function () {
    modalTwo.style.display = "flex";
});

closeTwo.addEventListener('click', function() {
    modalTwo.style.display = "none";   
});

// Modal Tres
let modalThree = document.getElementById('modal-tres');
let btnOpenThree = document.getElementById('open-modal-tres');
let closeThree = document.getElementById('cerrar-tres');

btnOpenThree.addEventListener('click', function () {
    modalThree.style.display = "flex";
});

closeThree.addEventListener('click', function() {
    modalThree.style.display = "none";   
});

// Autors
$('#btn-authors-uno').on('click', function() {
    $('#text-uno').fadeToggle(1000);
});
$('#btn-authors-dos').on('click', function() {
    $('#text-dos').fadeToggle(1000);
});
$('#btn-authors-tres').on('click', function() {
    $('#text-tres').fadeToggle(1000);
});