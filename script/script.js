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
    body.classList.add("open");
    linksMenu.setAttribute(
      "style",
      "animation: desceMenu 300ms both ease-out;"
    );
    setTimeout(() => {
      linksMenu.removeAttribute("style", "animation");
    }, 300);
  } else {
    linksMenu.setAttribute("style", "animation: sobeMenu 300ms both ease-out;");
    setTimeout(() => {
      menuMobile.classList.remove("menu-open");
      body.classList.remove("open");

      linksMenu.removeAttribute("style", "animation");
    }, 300);
  }
}
//fecha o menu
function fechaMenu(event) {
  const linksMenu = document.querySelector(".bg-menu-mobile");
  const menuMobile = document.querySelector(".menu-mobile");
  const apontador = document.querySelector(".apontador");
  const hamburguer = document.querySelector(".hamburguer");

  if (
    body.classList.contains("open") &&
    event.target != apontador &&
    event.target != hamburguer
  ) {
    linksMenu.setAttribute("style", "animation: sobeMenu 300ms both ease-out;");
    setTimeout(() => {
      menuMobile.classList.remove("menu-open");
      body.classList.remove("open");

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

//animação ao scrool TITULOS
const sections = document.querySelectorAll(".js-scroll");
function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < 380) {
      section.classList.add("passou");
    }
  });
}

//animação cards do bloco-2
const containerCards = document.querySelector(".bloco-2");
function animaCards() {
  const cardsTop = containerCards.getBoundingClientRect().top;
  if (cardsTop < 100) {
    containerCards.classList.add("anima-cards");
  }
}

//função pra adiconar o value do dropdown DO FORMULARIO
function dropdownValue(event) {
  event.preventDefault();
  var botoes = document
    .querySelectorAll(".dropdown-menu button")
    .forEach((button) => {
      button.classList.remove("active");
    });
  const button = event.currentTarget;
  button.classList.add("active");
  const input = document.querySelector('[name="experiencia"]');
  input.value = button.dataset.value;
}
//scroll suave
const menuItems = document.querySelectorAll('a[href^="#"]');

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}
function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 80;
  scrollToPosition(to);
}

//eventos pilimpimpim
window.addEventListener("resize", resize);
body.addEventListener("click", fechaMenu);
window.addEventListener("scroll", menuPreenchido);
window.addEventListener("scroll", animaScroll);
window.addEventListener("scroll", animaCards);
