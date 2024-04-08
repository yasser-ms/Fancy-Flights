const togglebtn = document.querySelector(".nav-toggle");
const link = document.querySelector(".nav-links");
togglebtn.addEventListener("click", () => {
  link.classList.toggle("show-links");
});

const services = document.querySelectorAll(".service");
services.forEach((service) => {
  const btn = service.querySelector(".service-btn");
  btn.addEventListener("click", () => {
    services.forEach((item) => {
      if (item !== service) {
        item.classList.remove("show-text");
      }
    });
    service.classList.toggle("show-text");
  });
});

/*SLIDER */

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

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll",()=>{
  if(window.pageYOffset>100){
    toTop.classList.add("active")
  }else{
    toTop.classList.remove ("active")
  }
})