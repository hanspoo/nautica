export function home() {
  // ---------------- What people say section ---------------------//

  let slider = document.querySelector(".reviews-container .slider"),
    psSlideItem = slider.querySelectorAll(".review"),
    psSlideItemWidth = psSlideItem[0].clientWidth,
    pscounter = 1;

  //------------------ cloning
  let firstClone = psSlideItem[0].cloneNode(true),
    lastClone = psSlideItem[1].cloneNode(true);

  firstClone.classList.add("firstClone");
  lastClone.classList.add("lastClone");

  slider.append(firstClone);
  slider.prepend(lastClone);

  psSlideItem = slider.querySelectorAll(".review");
  // ----------------------

  slider.style.transform = `translateX(${-psSlideItemWidth * pscounter}px)`;

  function slides() {
    if (pscounter === psSlideItem.length - 1) return;
    slider.style.transition = "0.7s ease-in-out";
    pscounter++;
    slider.style.transform = `translateX(${-psSlideItemWidth * pscounter}px)`;
  }

  slider.addEventListener("transitionend", () => {
    if (psSlideItem[pscounter].classList.contains("firstClone")) {
      slider.style.transition = "none";
      pscounter = 1;
      slider.style.transform = `translateX(${-psSlideItemWidth * pscounter}px)`;
    }
  });

  setInterval(slides, 5000);

  window.addEventListener("resize", () => {
    // eslint-disable-next-line no-unused-expressions
    (psSlideItemWidth = psSlideItem[0].clientWidth), (pscounter = 0);
  });

  // ---------------- scrolling Event ---------------------//

  // bars icon
  let barsIcon = document.querySelector(".bars-icon");
  let links = document.querySelector(".links");

  barsIcon.onclick = function () {
    links.classList.toggle("active");
  };

  // -------------------- scrollTop

  // -------------------- services Done
  let counter = document.querySelectorAll(".counter");
  let deal = document.querySelector(".deal");

  window.onscroll = function () {
    // -------------------- Countdown
    let offsetHeight = deal.offsetTop;
    let servicesHeight = deal.clientHeight;
    let windowHeight = this.innerHeight;
    let scrolledPixs = window.scrollY;
    if (scrolledPixs > offsetHeight + servicesHeight - windowHeight) {
      counter.forEach((count) => {
        function CountUpdate() {
          let speed = 500;
          let addition = Number(count.dataset.target / speed);
          let target = Number(count.dataset.target);
          let initial = +count.textContent;
          if (initial < target) {
            count.textContent = Math.ceil(initial + addition);
            setTimeout(CountUpdate, 60);
          }
        }
        CountUpdate();
      });
    }
    // -------------------- scrollTop

    // -------------------- scrolldown
    navScrolling();
  };
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

  // -------------- search icon

  // --------------------PlayVideo--------------------
}
export default home;
