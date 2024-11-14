export default function main() {
  // ---------------- Home Page ---------------------//
  // ---------------- landing Page change ---------------------//
  if (typeof document === "undefined")
	return;

  let textBox = document.querySelectorAll(".textbox");
  let activeBox = 0;
  let imgs = ["url(/imgs/Main.jpg)", "url(/imgs/Main1.jpg)"];
  let angles = document.querySelectorAll(".angles");
  let landing = document.querySelector(".landing");
  let activeImg = 0;

  landing.style.cssText = `background-image:${imgs[activeImg]};`;

  // add click event to the angles
  angles.forEach((i) => {
    i.addEventListener("click", (e) => {
      if (e.currentTarget === angles[0]) {
        checkRightArrow();
      } else {
        checkLeftArrow();
      }
      landingChange();
    });
  });

  function landingChange() {
    landing.style.backgroundImage = imgs[activeImg];
    textBox.forEach((box) => {
      box.style.transition = "none";
      box.classList.remove("active");
    });
    textBox[activeBox].classList.add("active");
    textBox[activeBox].style.cssText =
      "transition: 1s ease-in-out; transition-delay:0.1s; transition-property:opacity,left";
  }
  landingChange();

  // check the counter in left click
  function checkLeftArrow() {
    if (activeBox === 0) {
      activeBox = textBox.length - 1;
    } else activeBox--;
    if (activeImg === 0) {
      activeImg = imgs.length - 1;
    } else activeImg--;
  }

  // check the counter in right click
  function checkRightArrow() {
    if (activeImg === imgs.length - 1) {
      activeImg = 0;
    } else activeImg++;
    if (activeBox === textBox.length - 1) {
      activeBox = 0;
    } else activeBox++;
  }

  // set the interval change
  setInterval(function () {
    checkRightArrow();
    landingChange();
  }, 5000);

  // ---------------- scrolling Event ---------------------//
  // bars icon
  let barsIcon = document.querySelector(".bars-icon");
  let links = document.querySelector(".links");

  barsIcon.onclick = function () {
    links.classList.toggle("active");
  };

  // -------------------- scrollTop
  // let goUp = document.querySelector(".scroll-top");

  // function scrollTop() {
  //   if (window.scrollY >= 1000) {
  //     goUp.classList.add("scrolling");
  //   } else goUp.classList.remove("scrolling");
  //   goUp.onclick = function () {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   };
  // }
  // -------------------- nav Scrolling

  let scrollItems = document.querySelectorAll(".scroll-event");
  let logo = document.querySelector(".logo");

  function navScrolling() {
    if (window.scrollY >= 100) {
      scrollItems.forEach((i) => {
        i.classList.add("scrolling");
      });
      logo.src = "/imgs/logo-dark.png";
      barsIcon.style.color = "#222";
    } else {
      scrollItems.forEach((i) => {
        i.classList.remove("scrolling");
      });
      logo.src = "/imgs/logo-light.png";
      barsIcon.style.color = "#fff";
    }
  }

  // window.onscroll = function () {
  //   scrollTop();
  //   navScrolling();
  // };

  // -------------- search icon

  let searchOverlay = document.querySelector(".search-overLay");
  let searchIcon = document.getElementById("search");
  let closeSearch = document.querySelector(".close-Overlay");

  searchIcon.onclick = function () {
    searchOverlay.classList.add("show");
  };

  closeSearch.onclick = function () {
    searchOverlay.classList.remove("show");
  };
}
