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

$('#gallery-dropdown-button').click(function(){return false;});


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
  let customerUpto = 20;
  let projectUpto = 100;
  let awardsUpto = 115;
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
    countProjects.innerText = `${j}M+`;
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
  let customerUpto = 150;
  let projectUpto = 20;
  let awardsUpto = 115;
  let i = 0;
  let j = 0;
  let k = 0;
  let counterC = setInterval(() => {
    if (i == customerUpto) {
      clearInterval(counterC);
    }
    countCustomers.innerText = `${i}K+`;
    i = i + 1;
  }, 20);
  document.querySelector(".originalCountCustomers").style.color =
    "rgba(255,0,0,0.5)";
  let counterP = setInterval(() => {
    if (j == projectUpto) {
      clearInterval(counterP);
    }
    countProjects.innerText = `${j}M+`;
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

// floating contact us
setInterval(() => {
  $(".floatingContactEmailIcon").toggleClass("animation-paused");
}, 2000);

