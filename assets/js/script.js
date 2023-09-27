/* efectos scroll reveal  menu principal*/
window.sr = ScrollReveal();

sr.reveal('.scroll-banner',{
        duration : 20
      });

    sr.reveal('.scroll-banner', {
      duration: 3000,
      origin: 'bottom',
      distance:'-100px'

    })  

    sr.reveal('.scroll-banner', {
        duration: 3000,
        origin: 'bottom',
        distance:'-100px'
  
      })  

      sr.reveal('.buton-banner',{
        duration : 80
      });

    sr.reveal('.buton-banner', {
      duration: 5000,
      origin: 'bottom',
      distance:'-100px'

    })  

    sr.reveal('.buton-banner', {
        duration: 5000,
        origin: 'down',
        distance:'-400px'
  
      })  


      sr.reveal('.logo', {
       rotate: {
        duration: 9000,
        x: 12,
        y: 90,
        
       }
  
      })  

/*-----------*/
 /* scrollreveal banner*/
sr.reveal('.scroll-valores',{
    duration : 100
  });

sr.reveal('.scroll-valores', {
    duration: 4000,
    origin: 'right',
    distance:'-500px'

  })  

  /*efecto esconder texto detras de boton*/

  const toggleButtons = document.querySelectorAll('.toggle-button');
  const valorTexts = document.querySelectorAll('.valor-text');
  
  toggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      valorTexts[index].classList.toggle('hidden');
    });
  });
 /*---------------------*/

const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");


btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 3000);


let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
    
}   

/*----------efectos cabio automatico 2 banner-------------*/

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".banner-images img");
  let currentImageIndex = 0;

  function changeImage() {
    // Ocultar la imagen actual
    images[currentImageIndex].style.opacity = "0";

    // Incrementar el índice de la imagen actual
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Mostrar la siguiente imagen
    images[currentImageIndex].style.opacity = "1";
  }

  // Mostrar la primera imagen
  images[currentImageIndex].style.opacity = "1";

  // Cambiar la imagen cada 2 segundos (2000 milisegundos)
  setInterval(changeImage, 5000);
});
