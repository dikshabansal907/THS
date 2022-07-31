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

if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    $("body").hide();
    window.scrollTo(0, 0);
  };
}
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




// $(document).ready(function () {
//   const tl2 = gsap.timeline({
//     defaults: { duration: 0.5, ease: "elastic.out(1.5,0.2)" },
//   });
//   tl2.set(".headerSectionText", { y: "100%" });
//   tl2.fromTo(
//     ".headerSectionText",
//     { bottom: "50%", scale: 0, letterSpacing: 0, opacity: 1 },
//     {
//       duration: 2,
//       bottom: "50%",
//       scale: 1.2,
//       letterSpacing: 12,
//       ease: Power1.easeOut,
//       autoRound: false,
//     }
//   );
//   tl2.fromTo(
//     ".headerSectionText",
//     { bottom: "50%", scale: 1.2, letterSpacing: 12 },
//     {
//       duration: 3,
//       bottom: "15%",
//       scale: 1,
//       letterSpacing: 0,
//       ease: Expo.easeOut,
//       autoRound: false,
//     }
//   );
//   tl2.fromTo(
//     ".loaderBackground1",
//     { y: "-49%" },
//     { duration: 2, y: "-100%", ease: Power4.easeOut },
//     "<"
//   );
//   tl2.fromTo(
//     ".loaderBackground2",
//     { y: "49%" },
//     { duration: 2, y: "100%", ease: Power4.easeOut },
//     "<"
//   );
//   tl2.fromTo(
//     ".navbarItem",
//     { y: "-100%" },
//     { duration: 0.5, y: "0%", ease: Back.easeOut.config(1), stagger: 0.2 },
//     "<80%"
//   );

//   $(".loader").addClass("loaderAnimation");
//   $(".loaderBackground").addClass("loaderBackgroundAnimation");
// });

let brandTimerRan = false;
let originalTimerRan = false;
$(window).scroll(function () {
  let hT = $(".brandCountCustomers").offset().top,
    hH = $(".brandCountCustomers").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > hT + hH - wH) {
    if (!brandTimerRan) {
      runTimer();
    }
  }
});

const runTimer = () => {
  brandTimerRan = true;
  let countCustomers = document.querySelector(".brandCountCustomers");
  let countProjects = document.querySelector(".brandCountProjects");
  let countAwards = document.querySelector(".brandCountAwards");
  let customerUpto = 120;
  let projectUpto = 50;
  let awardsUpto = 10;
  let i = 0;
  let j = 0;
  let k = 0;
  let counterC = setInterval(() => {
    if (i == customerUpto) {
      clearInterval(counterC);
    }
    countCustomers.innerText = `${i}+`;
    i = i + 1;
  }, 20);
  document.querySelector(".brandCountCustomers").style.color =
    "rgba(255,0,0,0.5)";
  let counterP = setInterval(() => {
    if (j == projectUpto) {
      clearInterval(counterP);
    }
    countProjects.innerText = `${j}+`;
    j = j + 1;
  }, 50);
  document.querySelector(".brandCountProjects").style.color =
    "rgba(255,0,0,0.5)";
  let counterA = setInterval(() => {
    if (k == awardsUpto) {
      clearInterval(counterA);
    }
    countAwards.innerText = `${k}+`;
    k = k + 1;
  }, 50);
  document.querySelector(".brandCountAwards").style.color = "rgba(255,0,0,0.5)";
};

$(window).scroll(function () {
  let hT = $(".originalCountCustomers").offset().top,
    hH = $(".originalCountCustomers").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > hT + hH - wH) {
    if (!originalTimerRan) {
      runOriginalTimer();
    }
  }
});

const runOriginalTimer = () => {
  originalTimerRan = true;
  let countCustomers = document.querySelector(".originalCountCustomers");
  let countProjects = document.querySelector(".originalCountProjects");
  let countAwards = document.querySelector(".originalCountAwards");
  let customerUpto = 120;
  let projectUpto = 50;
  let awardsUpto = 10;
  let i = 0;
  let j = 0;
  let k = 0;
  let counterC = setInterval(() => {
    if (i == customerUpto) {
      clearInterval(counterC);
    }
    countCustomers.innerText = `${i}+`;
    i = i + 1;
  }, 20);
  document.querySelector(".originalCountCustomers").style.color =
    "rgba(255,0,0,0.5)";
  let counterP = setInterval(() => {
    if (j == projectUpto) {
      clearInterval(counterP);
    }
    countProjects.innerText = `${j}+`;
    j = j + 1;
  }, 50);
  document.querySelector(".originalCountProjects").style.color =
    "rgba(255,0,0,0.5)";
  let counterA = setInterval(() => {
    if (k == awardsUpto) {
      clearInterval(counterA);
    }
    countAwards.innerText = `${k}+`;
    k = k + 1;
  }, 50);
  document.querySelector(".originalCountAwards").style.color =
    "rgba(255,0,0,0.5)";
};

$(window).scroll(function () {
  let hT = $(".typing-demo1").offset().top,
    hH = $(".typing-demo1").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > hT + hH - wH) {
    $(".typing-demo1").addClass("typing-demo-animation");
  }
});
$(window).scroll(function () {
  let hT = $(".typing-demo2").offset().top,
    hH = $(".typing-demo2").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > hT + hH - wH) {
    $(".typing-demo2").addClass("typing-demo-animation");
  }
});
$(window).scroll(function () {
  let hT = $(".typing-demo5").offset().top,
    hH = $(".typing-demo5").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > hT + hH - wH) {
    $(".typing-demo5").addClass("typing-demo-animation");
  }
});
$(window).scroll(function () {
  let hT = $(".typing-demo3").offset().top,
    hH = $(".typing-demo3").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > hT + hH - wH) {
    $(".typing-demo3").addClass("typing-demo-animation");
  }
});
$(window).scroll(function () {
  let hT = $(".typing-demo4").offset().top,
    hH = $(".typing-demo4").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > hT + hH - wH) {
    $(".typing-demo4").addClass("typing-demo-animation");
  }
});

// Go to the next item

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  autoplay: false,
  autoplayTimeout: 7000,
  dots: false,
  center: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    501: {
      items: 1,
    },

    1000: {
      items: 3,
    },
  },
});

// owl buttons
$(".owlNextButton").click(function () {
  $(".owl-carousel").trigger("next.owl.carousel");
});
// Go to the previous item
$(".owlPrevButton").click(function () {
  $(".owl-carousel").trigger("prev.owl.carousel");
});

// testimonial carousel
$(".carousel-control-prev").on("click", function () {
  $("#customerSliderCarousel").carousel("prev");
});

$(".carousel-control-next").on("click", function () {
  $("#customerSliderCarousel").carousel("next");
});


new Skroll()
  .add(".instagramGridContainer > .instagramGridItem:nth-child(3n)", {
    animation: "fadeInUp",
    duration: 700,
  })
  .init();

new Skroll()
  .add(".instagramGridContainer > .instagramGridItem:nth-child(3n+1)", {
    animation: "fadeInLeft",
    duration: 700,
  })
  .init();

new Skroll()
  .add(".instagramGridContainer > .instagramGridItem:nth-child(3n+2)", {
    animation: "fadeInDown",
    duration: 700,
  })
  .init();
// facebook animation
// gsap.set(".facebookSvg", { transformOrigin: "center" });
// setInterval(() => {
//   gsap.fromTo(
//     ".facebookSvg",
//     { rotation: -40, scale: 1 },
//     { rotation: 0, duration: 2, scale: 2, ease: "elastic.out(5, 0.2)" }
//   );
//   gsap.fromTo(
//     ".facebookSvg",
//     { rotation: 40, scale: 2 },
//     { rotation: 0, duration: 2, scale: 1, ease: "elastic.out(5, 0.2)" }
//   );
// }, 5000);
// instagram animation
// gsap.set(".instagramSvg", { transformOrigin: "center" });
// setInterval(() => {
//   gsap.fromTo(
//     ".instagramSvg",
//     { rotation: -40, scale: 1 },
//     { rotation: 0, duration: 2, scale: 2, ease: "elastic.out(5, 0.2)" }
//   );
//   gsap.fromTo(
//     ".instagramSvg",
//     { rotation: 40, scale: 2 },
//     { rotation: 0, duration: 2, scale: 1, ease: "elastic.out(5, 0.2)" }
//   );
// }, 6000);
// twitter animation
// gsap.set(".twitterSvg", { transformOrigin: "center" });
// setInterval(() => {
//   gsap.fromTo(
//     ".twitterSvg",
//     { rotation: -40, scale: 1 },
//     { rotation: 0, duration: 2, scale: 2, ease: "elastic.out(5, 0.2)" }
//   );
//   gsap.fromTo(
//     ".twitterSvg",
//     { rotation: 40, scale: 2 },
//     { rotation: 0, duration: 2, scale: 1, ease: "elastic.out(5, 0.2)" }
//   );
// }, 7000);
