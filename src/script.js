document.addEventListener("load", start);

function start() {
  scrollFunction();
  scrolls();
}

function scrollFunction() {
  console.log("second");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.header.style.height = "50px";
    document.header.style.backgroundColor = "white";
  } else {
    document.header.style.height = "70px";
    document.header.style.backgroundColor = "#3F5366";
  }
}

(function scrolls() {
  console.log("scroll");
  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var header = document.getElementById("site-header");

  var checkScroll = function () {
    /*
     ** Find the direction of scroll
     ** 0 - initial, 1 - up, 2 - down
     */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  var toggleHeader = function (direction, curScroll) {
    if (direction === 2 && curScroll > 70) {
      //replace 52 with the height of your header in px

      header.classList.add("hide");
      prevDirection = direction;
    } else if (direction === 1) {
      header.classList.remove("hide");
      prevDirection = direction;
    }
  };

  window.addEventListener("scroll", checkScroll);
})();
