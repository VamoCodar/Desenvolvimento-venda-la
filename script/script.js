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
    if (window.pageYOffset >= 200) {
      body.classList.add("ativoScrool");
      i.setAttribute("style", "background-color: white;");
    } else if (window.pageYOffset < 200) {
      i.removeAttribute("style", "background-color");
      body.classList.remove("ativoScrool");
    }
  });
}

window.addEventListener("resize", resize);
window.addEventListener("scroll", menuPreenchido);
