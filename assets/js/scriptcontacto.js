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
      delay: 2000,
        duration: 3000,
        origin: 'top',
        distance:'-100px'
  
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
 document.addEventListener('DOMContentLoaded', function () {
  const sr = ScrollReveal();

  sr.reveal('.valor img', {
    duration: 1000,  // Ajusta la duración de la animación según tus preferencias
    origin: 'bottom',  // Puedes ajustar la dirección de la animación (top, bottom, left, right)
    distance: '50px',  // Puedes ajustar la distancia de la animación
  });
});