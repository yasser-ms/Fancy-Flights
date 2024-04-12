// Sélectionner le bouton de bascule de la navigation et les liens de la navigation

const togglebtn = document.querySelector(".nav-toggle");
const link = document.querySelector(".nav-links");
// Ajouter un écouteur d'événement au clic sur le bouton de bascule de la navigation
togglebtn.addEventListener("click", () => {
  // Basculer la classe 'show-links' sur les liens de navigation pour afficher ou masquer les liens
  link.classList.toggle("show-links");
});


/*------------------SERVICES---------------------- */

// Sélectionner tous les éléments ayant la classe CSS ".service" 
const services = document.querySelectorAll(".service");

// Parcourir chaque élément à l'aide de forEach()
services.forEach((service) => {
  // Sélectionner le bouton (.service-btn) à l'intérieur de chaque élément ".service"
  const btn = service.querySelector(".service-btn");

  // Ajouter un écouteur d'événement au clic sur le bouton de chaque service
  btn.addEventListener("click", () => {
    // Parcourir à nouveau tous les éléments ".service" à l'aide de forEach()
    services.forEach((item) => {
      // Vérifier si l'élément en cours de parcours (item) est différent du service cliqué
      if (item !== service) {
        // Si l'élément en cours de parcours n'est pas celui cliqué, retirer la classe "show-text" (cacher le texte)
        item.classList.remove("show-text");
      }
    });

    // Ajouter ou retirer la classe "show-text" sur l'élément ".service" cliqué pour afficher ou masquer le texte
    service.classList.toggle("show-text");
  });
});


/*----------------------SLIDER----------------------- */

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".popular-slider", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: 30,
    breakpoints: {
      768: {
        perPage: 2, // Adjust for tablets
      },
      480: {
        perPage: 1, // Adjust for mobile devices
        gap: 30,
      },
    },
  });
  splide.mount();
  var splide = new Splide(".algeria-slider ", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: 30,
    breakpoints: {
      768: {
        perPage: 2, // Adjust for tablets
      },
      480: {
        perPage: 1, // Adjust for mobile devices
        gap: 30,
      },
    },
  });
  splide.mount();

  var splide = new Splide(".testi-splide ", {
    gap: 20,
  });
  splide.mount();
});

/* ---------------------BACK TO TOP-------------------*/
// Sélectionner l'élément du bouton "BACK TO TOP"
const toTop = document.querySelector(".to-top");

// Ajouter un écouteur d'événement qui se déclenche lorsque l'utilisateur fait défiler la page
window.addEventListener("scroll", () => {
  // Vérifier la position verticale de défilement par rapport au haut de la page
  if (window.pageYOffset > 100) {
    // Si la position de défilement est supérieure à 100 pixels du haut de la page
    // Ajouter la classe "active" au bouton "BACK TO TOP"
    toTop.classList.add("active");
  } else {
    // Si la position de défilement est inférieure ou égale à 100 pixels du haut de la page
    // Retirer la classe "active" du bouton "BACK TO TOP"
    toTop.classList.remove("active");
  }
});
