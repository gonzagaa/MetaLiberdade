

document.getElementById('vid').play();

// onScroll()
// function onScroll() {
//     showNavOnScroll()
// }

// function showNavOnScroll() {
//     if(scrollY > 0) {
//         document.querySelector("#navigation").classList.add("scroll")
//     } else {
//         document.querySelector("#navigation").classList.remove("scroll")
//     }
// }

// function openMenu() {
//     document.body.classList.add('menu-expanded')
// }

// function closeMenu() {
//     document.body.classList.remove('menu-expanded')
// }

// Função para calcular a diferença de tempo
function updateCountdown() {
  const now = new Date();
  const endOfYear = new Date('December 31, 2024 23:59:59');
  const totalSeconds = Math.floor((endOfYear - now) / 1000);
  
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = totalSeconds % 60;

  document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Atualiza o countdown a cada segundo
setInterval(updateCountdown, 1000);

// Inicializa o countdown na primeira carga
updateCountdown();

// smoothscroll
 const body = document.body,
 scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
 height = scrollWrap.getBoundingClientRect().height - 1,
 speed = 0.04;

 var offset = 0;

 body.style.height = Math.floor(height) + "px";

 function smoothScroll() {
 offset += (window.pageYOffset - offset) * speed;

 var scroll = "translateY(-" + offset + "px) translateZ(0)";
 scrollWrap.style.transform = scroll;

 callScroll = requestAnimationFrame(smoothScroll);
 }

 smoothScroll();

const larguraDaTela = window.innerWidth
  
if (larguraDaTela < 800) {
    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        grabCursor: true,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
} else {
    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

if (larguraDaTela < 800) {
  var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
} else {
  var swiper4 = new Swiper(".mySwiper4", {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
}