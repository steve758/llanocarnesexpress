/* efectos scroll reveal  menu principal*/
window.sr = ScrollReveal();

sr.reveal('.scroll-banner',{
        duration : 20
      });

    sr.reveal('.scroll-banner', {
      duration: 3000,
      origin: 'top',
      distance:'-100px'

    })  

    sr.reveal('.scroll-banner', {
        duration: 3000,
        origin: 'top',
        distance:'-100px'
  
      })  

      sr.reveal('.buton-banner',{
        duration : 80
      });

    sr.reveal('.buton-banner', {
      duration: 5000,
      origin: 'top',
      distance:'-50px'

    })  

    sr.reveal('.buton-banner', {
        duration: 5000,
        origin: 'top',
        distance:'-50px'
  
      })  


      sr.reveal('.logo', {
       rotate:  {
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
 /*-----------activacion y desactivacion clase active----------*/

 document.addEventListener('DOMContentLoaded', function () {
  const toggleButtons = document.querySelectorAll('.toggle-button');

  toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
      const parentValor = this.closest('.valor');
      const textContainer = parentValor.querySelector('.valor-text-container');

      // Cambia la visibilidad del contenedor y del botón
      textContainer.classList.toggle('active');
      this.classList.toggle('active');

      // Muestra u oculta el cuadro solo cuando está activo
      if (textContainer.classList.contains('active')) {
        textContainer.style.display = 'block';
      } else {
        textContainer.style.display = 'none';
      }
    });
  });
});
/*---------------------------------------------------------------*/ 
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

/*------------Barras dinamicas------------------*/ 

document.addEventListener('DOMContentLoaded', function () {
  const graficos = document.querySelectorAll('.grafico');

  graficos.forEach(grafico => {
    const porcentaje = grafico.getAttribute('data-porcentaje');
    const barra = grafico.querySelector('.barra');
    barra.style.width = porcentaje + '%';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const graficos = document.querySelectorAll('.grafico');

  graficos.forEach(grafico => {
    const porcentaje = grafico.getAttribute('data-porcentaje');
    const barra = grafico.querySelector('.barra');
    const porcentajeElement = grafico.querySelector('.porcentaje');

    let contador = 0;
    const duracionAnimacion = 15000; // Duración de la animación en milisegundos
    const intervalo = setInterval(() => {
      contador++;
      barra.style.width = contador + '%';
      porcentajeElement.textContent = contador + '%';

      if (contador === parseInt(porcentaje)) {
        clearInterval(intervalo);
      }
    }, duracionAnimacion / porcentaje); // Ajusta el intervalo en relación con la duración de la animación
  });
});

sr.reveal('.ofrecemos-section',{
  duration : 100
});

sr.reveal('.ofrecemos-section', {
  duration: 4000,
  origin: 'top',
  distance:'-500px'

}) 