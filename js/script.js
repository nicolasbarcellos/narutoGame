const x = window.matchMedia("(max-width: 1070px)");
const mobile = window.matchMedia("(max-width: 750px)");
const newsSwiper = window.matchMedia("(max-width: 1068px)");

const menuMobile = document.querySelector(".menuMobile");
const menu = document.querySelector(".menu");
const panel = document.querySelector(".panel");
const logo = document.querySelector(".logo img");
const social = document.querySelector(".social");
const flags = document.querySelector(".langIcons");
const news = document.querySelector("main");
const mySwiper = document.querySelector(".mySwiper");
const imgNaruto = document.querySelector(".contentImg");
const a1 = document.querySelector(".a1");
const b1 = document.querySelector(".b1");
const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const circles = document.querySelectorAll('[data-js="c"]');
const author = document.querySelectorAll(".author");
const boxImg = document.querySelector(".boxIMG img");
const boxTitle = document.querySelector(".boxTitle h3");

function activeCircle(e) {
  circles.forEach((c) => {
    if (c.classList.contains("circleActive")) {
      c.classList.remove("circleActive");
    }
  });
  this.classList.add("circleActive");

  const title = this.getAttribute("title");
  const cargo = this.getAttribute("cargo");
  const img = this.getAttribute("data-img");
  const titleBig = this.getAttribute("boxTitle");
  console.log(titleBig);
  boxImg.src = img;
  boxTitle.innerText = titleBig;

  if (titleBig === "KARIN") {
    boxTitle.style.color = "#8d3132";
  } else if (titleBig === "ROCK LEE") {
    boxTitle.style.color = "#8257e6";
  } else if (titleBig === "KIMIMARU") {
    boxTitle.style.color = "#fc8834";
  } else {
    boxTitle.style.color = "#5b8c79";
  }

  const titleH2 = document.createElement("h2");
  const cargoP = document.createElement("p");
  const p = (cargoP.innerText = cargo);
  const h2 = (titleH2.innerText = title);

  document.querySelector(".author h3").innerHTML = h2.toUpperCase();
  document.querySelector(".author p").innerHTML = p;

  console.log(document.querySelector(".author h3"));
}

circles.forEach((c) => c.addEventListener("click", activeCircle));

a1.classList.add("showLeft");
c1.classList.add("showLeft");

function showImage() {
  if (a1.classList.contains("showLeft")) {
    a1.classList.remove("showLeft");
    b1.classList.add("showLeft");
  } else {
    a1.classList.add("showLeft");
    b1.classList.remove("showLeft");
  }

  if (c1.classList.contains("showLeft")) {
    c1.classList.remove("showLeft");
    c2.classList.add("showLeft");
  } else {
    c1.classList.add("showLeft");
    c2.classList.remove("showLeft");
  }
}

setInterval(showImage, 5000);

function test(x) {
  if (x.matches) {
    menuMobile.style.display = "inline-block";
    menu.style.display = "none";
  } else {
    menuMobile.style.display = "none";
    menu.style.display = "flex";
  }

  if (mobile.matches) {
    social.style.display = "none";
    flags.style.display = "none";
    logo.src = "assets/logo-mobile.png";
  } else {
    logo.src = "assets/logo.png";
    social.style.display = "flex";
    flags.style.display = "flex";
  }
}

function aaa() {
  if (panel.classList.contains("show")) {
    panel.classList.remove("show");
    menuMobile.classList.remove("round");
  } else {
    menuMobile.classList.add("round");
    panel.classList.add("show");
  }
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

menuMobile.addEventListener("click", aaa);
x.addEventListener("change", test);
mobile.addEventListener("change", test);
// newsSwiper.addEventListener('change', test);
test(x);
test(mobile);
test(newsSwiper);
AOS.init();
