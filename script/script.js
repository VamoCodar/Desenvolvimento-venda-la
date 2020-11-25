const body = document.querySelector("body");

//função que adiciona a classe mobile ou desktop dependendo do tamanho da tela
function checagem() {
  const body = document.querySelector("body");
  if (window.innerWidth >= 1000) {
    body.classList.add("desktop");
    body.classList.remove("mobile");
  } else {
    body.classList.add("mobile");
    body.classList.remove("desktop");
  }
}
checagem();

//mesma funçao de checagem só que no resize
function resize() {
  if (window.innerWidth >= 1000) {
    body.classList.add("desktop");
    body.classList.remove("mobile");
  } else {
    body.classList.add("mobile");
    body.classList.remove("desktop");
  }
}

//abre menu mobile
function ativaMenu() {
  const menuMobile = document.querySelector(".menu-mobile");
  const linksMenu = document.querySelector(".bg-menu-mobile");

  if (!menuMobile.classList.contains("menu-open")) {
    menuMobile.classList.add("menu-open");
  } else if (menuMobile.classList.contains("menu-open")) {
    linksMenu.setAttribute("style", "animation: sobeMenu 300ms both ease-out;");
    setTimeout(() => {
      menuMobile.classList.remove("menu-open");
      linksMenu.removeAttribute("style", "animation");
    }, 300);
  }
}
//preenchimento do menu ao rolar o scrool
function menuPreenchido() {
  const menuFixo = document.querySelectorAll(".fixed-top");
  menuFixo.forEach((i) => {
    if (window.pageYOffset >= 100) {
      body.classList.add("ativoScrool");
      i.setAttribute("style", "background-color: white;");
    } else if (window.pageYOffset < 100) {
      i.removeAttribute("style", "background-color");
      body.classList.remove("ativoScrool");
    }
  });
}
menuPreenchido();

//animação ao scrool titulos
const sections = document.querySelectorAll(".js-scroll");
function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < 320) {
      section.classList.add("passou");
    }
  });
}

//animação cards
const containerCards = document.querySelector(".secao-1");

function animaCards() {
  const cardsTop = containerCards.getBoundingClientRect().top;
  console.log(cardsTop);
  if (cardsTop < 100) {
    containerCards.classList.add("anima-cards");
  }
}

window.addEventListener("resize", resize);
window.addEventListener("scroll", menuPreenchido);
window.addEventListener("scroll", animaScroll);
window.addEventListener("scroll", animaCards);
