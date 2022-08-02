let dropdownForGallery = document.getElementById("gallery-dropdown-button");
dropdownForGallery.addEventListener("mouseover", () => {
  document.getElementById("gallery-dropdown").style.display = "block";
});
dropdownForGallery.addEventListener("mouseout", () => {
  document.getElementById("gallery-dropdown").style.display = "none";
});
let dropdownForGalleryOptions = document.getElementById("gallery-dropdown");
dropdownForGalleryOptions.addEventListener("mouseover", () => {
  document.getElementById("gallery-dropdown").style.display = "block";
});
dropdownForGalleryOptions.addEventListener("mouseout", () => {
  document.getElementById("gallery-dropdown").style.display = "none";
});

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
// const portfolioLightbox = GLightbox({
//   selector: ".portfolio-lightbox",
// });

/**
 * Initiate glightbox
 */
// const gLightbox = GLightbox({
//   selector: ".glightbox",
// });

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
              "Story driven films with characters, emotions and scenes. Tailor made for maximum emotional impact. Ideal for ads, product launches and social campaigns."
            );
            break;
          case ".filter-3d":
            $(".portfolioText").text(
              "Rich immersive films created with realism and depth .Ideal for premium content that stands out."
              
            );
            break;
            case ".filter-motion":
              $(".portfolioText").text(
                "Graphics, shapes, colors  and text brought to life to create sleek  looking information and Brand identity. Ideal for explainers, product teasers, brand films and corporate comms."
                
              );
              break;
              case ".filter-original":
              $(".portfolioText").text(
                "Extremely relatable and engaging animated stories made for the Indian audience. Served hot every week to a million eyeballs."
                
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

const showThis = (selector) => {
  $(selector).removeClass("display-none");
};

const hideThis = (selector) => {
  $(selector).addClass("display-none");
};

const passIframeSrc = (src) => {
  $(".iframeSectionVideo").attr("src", `https://www.youtube.com/embed/${src}`);
};

const stopVideo = () => {
  $(".iframeSectionVideo").attr("src", "");
};
