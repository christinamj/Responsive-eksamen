window.addEventListener("load", start);
window.addEventListener("scroll", scrollFunction);
var prevScrollpos = window.pageYOffset;
let currentURL = window.location.href;

function start() {
  document.querySelector("#close").addEventListener("click", closeBurgerMenu);
  document.querySelector(".burgermenu").addEventListener("click", burgerMenu);
  document.querySelectorAll("nav a").forEach((p) => {
    if (currentURL.indexOf(p.getAttribute("href")) !== -1) {
      p.classList.add("active");
    }
  });

  scrollFunction();
  getFooter();
}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("site-header").style.backgroundColor = "white";
    document.querySelector(".burgermenu").style.backgroundImage = "url('img/burgermenu-black.svg')";
    document.getElementById("logo").style.backgroundImage = "url('img/responsive-black.png')";
    document.querySelectorAll(".menupoint").forEach((link) => {
      link.style.color = "black";
      link.style.fontSize = "15px";
    });
    document.querySelectorAll("nav a").forEach((p) => {
      if (currentURL.indexOf(p.getAttribute("href")) !== -1) {
        p.classList.add("active-black");
      }
    });
  } else {
    document.getElementById("site-header").style.backgroundColor = "transparent";
    document.querySelector(".burgermenu").style.backgroundImage = "url('img/burger-white.svg')";
    document.getElementById("logo").style.backgroundImage = "url('img/resposive-white.png')";
    document.querySelectorAll(".menupoint").forEach((link) => {
      link.style.color = "white";
      link.style.fontSize = "18px";
    });
    document.querySelectorAll("nav a").forEach((p) => {
      if (currentURL.indexOf(p.getAttribute("href")) !== -1) {
        p.classList.remove("active-black");
      }
    });
  }

  //   var currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     document.getElementById("site-header").style.top = "0";
  //   } else {
  //     document.getElementById("site-header").style.top = "-155px";
  //   }
  //   prevScrollpos = currentScrollPos;

  //   if (currentScrollPos == 0) {
  //     document.getElementById("site-header").style.top = "0";
  //   }
}
start();

function burgerMenu() {
  // document.querySelector(".section-con").classList.add("hide");
  document.querySelector("header").classList.add("hide");
  document.querySelector("#burger").classList.remove("hide");
  // document.querySelector("#burger").classList.add("fade");
  // start();
}

function closeBurgerMenu() {
  document.querySelector("#burger").classList.add("hide");

  // document.querySelector(".section-con").classList.remove("hide");
  document.querySelector("header").classList.remove("hide");
  // start();
}

async function getFooter() {
  //henter footer.html
  const responseFooter = await fetch("inc/footer.html");

  //fortæller at indholdet i footer skal være text
  const inclusionFooter = await responseFooter.text();

  //indsætter footer.html ind i <footer></footer> på alle sider.
  document.querySelector(".section-footer").innerHTML = inclusionFooter;
}
