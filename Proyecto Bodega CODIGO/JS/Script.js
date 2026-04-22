        /*Primer modal*/
function modalBienvenida (){
    document.getElementById("modalBienvenida").style.display="block";
    document.getElementById("TituloEncabezado").style.animationPlayState = "paused";
    document.getElementById("SubtituloEncabezado").style.animationPlayState = "paused";
    document.documentElement.style.overflow="hidden";
}
function cerrarMBB() {
    document.getElementById("modalBienvenida").style.display="none";
    document.getElementById("TituloEncabezado").style.animationPlayState = "running";
    document.getElementById("SubtituloEncabezado").style.animationPlayState = "running";
    document.documentElement.style.overflow="auto";
}

        /* SLIDESHOW AUTOMATICO EN LA HEROIMAGE */

var bgCounter = 0;
function heroSlideShow(){
    var listaImgBg = [
    "url('imagenes/HEROIMAGEREDIMENSIONADA.png')",
    "url('imagenes/CarrouselHero/bodega2.png')",
    "url('imagenes/CarrouselHero/bodega3.jpg')",
    "url('imagenes/CarrouselHero/bodega4.jpg')"
    ];
    console.log(window.location.href);

    bgCounter++;

    if(bgCounter == listaImgBg.length){
        bgCounter = 0;
    }
    document.getElementById("encabezado").style.backgroundImage = "linear-gradient(#00000033, #00000033)," + listaImgBg[bgCounter];
    
}

//Con animación:

var counterNext = 0; 
var counterMain = 0;

function slidesShowAnim(){

    var listaImgAnim = document.getElementsByClassName("fondosHero");
    counterNext++;
    counterMain = counterNext -1;

    if (counterNext == listaImgAnim.length){
        counterNext = 0;
    }
    if (counterMain < 0){
        counterMain = listaImgAnim.length-1;
    }

    for (var i=0; i<listaImgAnim.length; i++){
        listaImgAnim[i].classList.remove("nextSlide");
        listaImgAnim[i].classList.remove("mainSlide");
        listaImgAnim[i].classList.remove("hiddenSlide");

        if(i == counterNext){
            listaImgAnim[i].classList.add("nextSlide");
        }

        else if (i== counterMain){
            listaImgAnim[i].classList.add("mainSlide");
        }
        else{
            listaImgAnim[i].classList.add("hiddenSlide");
        }
    }
}




        /*Modal para los formularios*/

function modalReserva() {
    document.getElementById("modalReserva").style.display="block";
    document.documentElement.style.overflow="hidden";
    
    var nombre=document.getElementById("Nombre").value;
    var apellidos=document.getElementById("Apellidos").value;
    var email=document.getElementById("Email").value;
    var telefono=document.getElementById("Telefono").value;
    var comentario=document.getElementById("comentario").value;
    var terminos=document.getElementById("terminos");

    var mensaje;

    (function FormularioCheck(){
        if(!document.getElementById("Nombre").checkValidity()){
            mensaje = "Introduce un nombre correcto.";
            document.getElementById("mensajeReserva").innerHTML = mensaje;
        }

        else if (!document.getElementById("Apellidos").checkValidity()){
            mensaje = "Introduce un apellido correcto.";
            document.getElementById("mensajeReserva").innerHTML = mensaje;
        }
        else if (!document.getElementById("Email").checkValidity()){
            mensaje = "Introduce un e-mail correcto.";
            document.getElementById("mensajeReserva").innerHTML = mensaje;
        }
        else if (!document.getElementById("Telefono").checkValidity()){
            mensaje = "Introduce un teléfono correcto.";
            document.getElementById("mensajeReserva").innerHTML = mensaje;
        }
        else if (!document.getElementById("comentario").checkValidity()){
            mensaje = "Introduce un comentario.";
            document.getElementById("mensajeReserva").innerHTML = mensaje;
        }
        else if (!terminos.checked) {
            mensaje = "Debes aceptar los términos y condiciones.";
            document.getElementById("mensajeReserva").innerHTML = mensaje;
        }

        else {
            mensaje = "Se ha registrado de forma exitosa su solicitud, " +nombre + " " +apellidos + "." + " Podremos contactar con usted por " +email+ " o por " +telefono + " con lo referente a: "+comentario ;
            document.getElementById("mensajeReserva").innerHTML = mensaje;
        }

        
    })(); 

}
function cerrarMBR(){
    document.getElementById("modalReserva").style.display="none";
    document.documentElement.style.overflow="auto";
}


/* Código para el menú */

var posPreviaScroll = document.documentElement.scrollTop 

window.onscroll = function() {EsconderMostrarMenu()};

function EsconderMostrarMenu(){

    var posActualScroll = document.documentElement.scrollTop;

    if (posPreviaScroll>posActualScroll){
        //Cuando estamos subiendo mostramos el menú
        document.getElementById("navbar").style.top = "0";
    }
    else {
        //Cuando estamos bajando escondemos el menú (130 es la altura del menú)
        document.getElementById("navbar").style.top = "-130px";
    }

    posPreviaScroll= posActualScroll;
}

/*Código para las pestañas */

function marcarPestana (contenedorAMostrar, tabClicada){
    var listaConPestanas = document.getElementsByClassName("contenedorPestana");

    for (var i=0; i<listaConPestanas.length; i++){
        listaConPestanas[i].style.display="none"
    }

    document.getElementById(contenedorAMostrar).style.display="block";

    var tabLinks = document.getElementsByClassName("opcion");

    for (var i=0; i<tabLinks.length; i++){
        tabLinks[i].classList.remove("pestanaActiva");
    }
    document.getElementById(tabClicada).classList.add("pestanaActiva");
}

// Carrusel 1 - "Dónde Estamos"
const imagenesDondeEstamos = [
    './imagenes/DondeEstamos/MiradorDuero.jpg',
    './imagenes/DondeEstamos/colegiata.jpg',
    './imagenes/DondeEstamos/toro de piedra.jpg',
    './imagenes/DondeEstamos/la plaza.jpg',
    './imagenes/DondeEstamos/La carcel.jpg'
];
let contDondeEstamos = 0;

function carrouselDondeEstamos(contenedor) {
    contenedor.addEventListener('click', e => {
        const atras = contenedor.querySelector('.atras'),
              adelante = contenedor.querySelector('.adelante'),
              img = contenedor.querySelector('img'),
              tgt = e.target;

        if(tgt == atras){
            contDondeEstamos = (contDondeEstamos > 0) ? contDondeEstamos - 1 : imagenesDondeEstamos.length - 1;
        } else if(tgt == adelante){
            contDondeEstamos = (contDondeEstamos < imagenesDondeEstamos.length - 1) ? contDondeEstamos + 1 : 0;
        }
        img.src = imagenesDondeEstamos[contDondeEstamos];
    });
}

// Carrusel 2 - "Quiénes Somos"
const imagenesQuienesSomos = [
    './imagenes/quienes Somos/bodega.jpg',
    './imagenes/quienes Somos/bodega2.jpg',
    './imagenes/quienes Somos/bodega3.jpg',
    './imagenes/quienes Somos/bodega4.jpg',
    './imagenes/quienes Somos/bodega5.jpg'
];
let contQuienesSomos = 0;

function carrouselQuienesSomos(contenedor) {
    contenedor.addEventListener('click', e => {
        const atras = contenedor.querySelector('.atras'),
              adelante = contenedor.querySelector('.adelante'),
              img = contenedor.querySelector('img'),
              tgt = e.target;

        if(tgt == atras){
            contQuienesSomos = (contQuienesSomos > 0) ? contQuienesSomos - 1 : imagenesQuienesSomos.length - 1;
        } else if(tgt == adelante){
            contQuienesSomos = (contQuienesSomos < imagenesQuienesSomos.length - 1) ? contQuienesSomos + 1 : 0;
        }
        img.src = imagenesQuienesSomos[contQuienesSomos];
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const contenedorDondeEstamos = document.querySelector('.contenedor');
    const contenedorQuienesSomos = document.querySelector('.contenedorUno');

    carrouselDondeEstamos(contenedorDondeEstamos);
    carrouselQuienesSomos(contenedorQuienesSomos);
});



                                                            /* LIGHTBOX*/ 

var listaRutaImgGal = [];
var numeroIMG = 0;
/*
function modalLightBox(){
    document.getElementById("modalLightBox").style.display = "block";
    document.documentElement.style.overflow = 'hidden';

    var listaImgGal = document.getElementsByClassName("imgGrande");

    for(var i=0; i<listaImgGal.length; i++ ){

        listaRutaImgGal.push(listaImgGal[i].src);
    }

    document.getElementById("imageToShow").innerHTML = "<img class='imageLightBox' src='./imagenes/EventosCelebrados/intro.jpg'>";

}
*/

//PARA SELECCIONAR LA IMAGEN DETECTADA EN EL ARRRAY
function readyLightBox() {

    var listaImgGal = document.getElementsByClassName("imgGrande");
//Coge las imagenes en un array
    for(var i=0; i<listaImgGal.length; i++ ){

        listaRutaImgGal.push(listaImgGal[i].src);
    }
//Selecciona las imagenes en el array
    for(var i=0; i<listaImgGal.length; i++){
        listaImgGal[i].addEventListener('click', openLightBox);
    }
    function openLightBox(){
        //Detectar el elemento clicado
        var rutaImgClicada = event.currentTarget.src;
        var numeroIMG = listaRutaImgGal.indexOf(rutaImgClicada);

        document.getElementById("imageToShow").innerHTML = "<img class='imageLightBox' src=" + listaRutaImgGal[numeroIMG] +">";
        document.getElementById("modalLightBox").style.display = "block";
        document.documentElement.style.overflow = 'hidden';
        closeLightBox();
    }

    //Cerrar imagen
    function closeLightBox(){
        window.addEventListener("click", function(event) {

            if (!event.target.matches(".imageLightBox") && (!event.target.matches(".imgGrande")) && (!event.target.matches(".lbButtons")) && (!event.target.matches(".flecha"))  ){
                document.getElementById("modalLightBox").style.display = "none";
                document.documentElement.style.overflow = 'auto';
            }
        });
    }


}

//Función de avanzar
function nextImgGrande() {

    numeroIMG++; 

    if(numeroIMG == listaRutaImgGal.length){
        numeroIMG = 0;
    }
    document.getElementById("imageToShow").innerHTML = "<img class='imageLightBox' src=" + listaRutaImgGal[numeroIMG] +">";
}

//Función de retroceder
function prevImgGrande() {

    numeroIMG--; 

    if(numeroIMG < 0){
        numeroIMG = listaRutaImgGal.length -1;
    }
    document.getElementById("imageToShow").innerHTML = "<img class='imageLightBox' src=" + listaRutaImgGal[numeroIMG] +">";
}

