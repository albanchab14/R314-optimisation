/* script.js optimisé */
(function(){
  // Suppression des boucles de ralentissement artificiel
  
  window.addEventListener('load', function(){
    const imgs = document.querySelectorAll('.card img, .image-wrapper img');
    
    // Gestion de l'effet d'apparition (fade-in)
    imgs.forEach(img => { 
        if (img.complete) {
            img.classList.add('loaded'); 
        } else {
            img.addEventListener('load', ()=> img.classList.add('loaded')); 
        }
    });
    
    console.log("Script chargé sans blocage !");
  });
})();