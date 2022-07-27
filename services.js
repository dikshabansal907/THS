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
// window.addEventListener("load", () => {
//   let portfolioContainer = select(".portfolio-container");
//   if (portfolioContainer) {
//     let portfolioIsotope = new Isotope(portfolioContainer, {
//       filter: ".filter-2d",
//     });

//     let portfolioFilters = select("#portfolio-flters li");

//     on(
//       "click",
//       "#portfolio-flters li",
//       function (e) {
//         e.preventDefault();
//         portfolioFilters.forEach(function (el) {
//           el.classList.remove("filter-active");
//         });
//         this.classList.add("filter-active");

//         switch (this.getAttribute("data-filter")) {
//           case ".filter-2d":
//             $(".portfolioText").text("lorem303030300303");
//             break;
//           case ".filter-3d":
//             $(".portfolioText").text("lorem50505050505");
//             break;
//         }

//         portfolioIsotope.arrange({
//           filter: this.getAttribute("data-filter"),
//         });
//         portfolioIsotope.on("arrangeComplete", function () {
//           AOS.refresh();
//         });
//       },
//       true
//     );
//   }
// });

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
      filter: ".filter-2d",
    });

    let portfolioFilters = select("#portfolio-flters li", true);

    on(
      "click",
      "#portfolio-flters li",
      function (e) {
        e.preventDefault();
        console.log("ran");
        console.log(portfolioFilters);
        portfolioFilters.forEach(function (el) {
          el.classList.remove("filter-active");
        });
        this.classList.add("filter-active");

        switch (this.getAttribute("data-filter")) {
          case ".filter-2d":
            $(".portfolioText").text(
              "2d ipsum dolor sit amet consectetur adipisicing elit. Vel molestiae animi similique reiciendis odit. Neque comm odi saepe voluptas sunt eos ut. Libero rerum impedit expedita ducimus, numquam eius saepe illum et. Est eligendi iste quos sit nemo! Cum eos non aliquam reiciendis, hic dicta quis, odio automnis, odit doloremque."
            );
            break;
          case ".filter-3d":
            $(".portfolioText").text(
              "3d ipsum dolor sit amet consectetur adipisicing elit. Vel molestiae animi similique reiciendis odit. Neque comm odi saepe voluptas sunt eos ut. Libero rerum impedit expedita ducimus, numquam eius saepe illum et. Est eligendi iste quos sit nemo! Cum eos non aliquam reiciendis, hic dicta quis, odio automnis, odit doloremque."
            );
            break;
        }

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
