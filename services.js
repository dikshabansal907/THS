const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all);
  if (selectEl) {
    if (all) {
      selectEl.forEach((e) => e.addEventListener(type, listener));
    } else {
      selectEl.addEventListener(type, listener);
    }
  }
};

/**
 * Porfolio isotope and filter
 */
window.addEventListener("load", () => {
  let portfolioContainer = select(".portfolio-container");
  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    let portfolioFilters = select("#portfolio-flters li");
    console.log(portfolioFilters);

    let twoDAnimation = document.getElementById("2dAnimation");

    portfolioIsotope.arrange({
      filter: twoDAnimation.getAttribute("data-filter"),
    });
    portfolioIsotope.on("arrangeComplete", function () {
      AOS.refresh();
    });
    // }

    on(
      "click",
      "#portfolio-flters li",
      function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove("filter-active");
        });
        this.classList.add("filter-active");

        portfolioIsotope.arrange({
          filter: this.getAttribute("data-filter"),
        });
        portfolioIsotope.on("arrangeComplete", function () {
          AOS.refresh();
        });
      },
      true
    );
  }
});

/**
 * Initiate portfolio lightbox
 */
const portfolioLightbox = GLightbox({
  selector: ".portfolio-lightbox",
});

/**
 * Initiate glightbox
 */
const gLightbox = GLightbox({
  selector: ".glightbox",
});

/**
 * Portfolio details slider
 */
new Swiper(".portfolio-details-slider", {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

/**
 * Porfolio isotope and filter
 */
window.addEventListener("load", () => {
  let portfolioContainer = select(".portfolio-container");
  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    let portfolioFilters = select("#portfolio-flters li", true);

    on(
      "click",
      "#portfolio-flters li",
      function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove("filter-active");
        });
        this.classList.add("filter-active");

        portfolioIsotope.arrange({
          filter: this.getAttribute("data-filter"),
        });
        portfolioIsotope.on("arrangeComplete", function () {
          AOS.refresh();
        });
      },
      true
    );
  }
});





$(window).scroll(function () {
  var hT = $(".originalCountCustomers").offset().top,
    hH = $(".originalCountCustomers").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > hT + hH - wH) {
    if (!timerRan) {
      runTimer();
    }
  }
});

const runTimer = () => {
  timerRan = true;
  var countCustomers = document.querySelector(".originalCountCustomers");
  var countProjects = document.querySelector(".brandCountProjects");
  var countAwards = document.querySelector(".brandCountAwards");
  let customerUpto = 120;
  let projectUpto = 50;
  let awardsUpto = 10;
  var i = 0;
  var j = 0;
  var k = 0;
  var counterC = setInterval(() => {
    if (i == customerUpto) {
      clearInterval(counterC);
    }
    countCustomers.innerText = `${i}+`;
    i = i + 1;
  }, 20);
  document.querySelector(".originalCountCustomers").style.color =
    "rgba(255,0,0,0.5)";
  var counterP = setInterval(() => {
    if (j == projectUpto) {
      clearInterval(counterP);
    }
    countProjects.innerText = `${j}+`;
    j = j + 1;
  }, 50);
  document.querySelector(".brandCountProjects").style.color =
    "rgba(255,0,0,0.5)";
  var counterA = setInterval(() => {
    if (k == awardsUpto) {
      clearInterval(counterA);
    }
    countAwards.innerText = `${k}+`;
    k = k + 1;
  }, 50);
};