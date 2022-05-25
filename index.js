if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    $("body").hide();
    window.scrollTo(0, 0);
  };
}

$(document).ready(function () {
  const tl2 = gsap.timeline({
    defaults: { duration: 0.5, ease: "elastic.out(1.5,0.2)" },
  });
  tl2.set(".headerSectionText", { y: "100%" });
  tl2.fromTo(
    ".headerSectionText",
    { bottom: "50%", scale: 0, letterSpacing: 0, opacity: 1 },
    {
      duration: 2,
      bottom: "50%",
      scale: 1.2,
      letterSpacing: 12,
      ease: Power1.easeOut,
      autoRound: false,
    }
  );
  tl2.fromTo(
    ".headerSectionText",
    { bottom: "50%", scale: 1.2, letterSpacing: 12 },
    {
      duration: 3,
      bottom: "15%",
      scale: 1,
      letterSpacing: 0,
      ease: Expo.easeOut,
      autoRound: false,
    }
  );
  tl2.fromTo(
    ".loaderBackground1",
    { y: "-49%" },
    { duration: 2, y: "-100%", ease: Power4.easeOut },
    "<"
  );
  tl2.fromTo(
    ".loaderBackground2",
    { y: "49%" },
    { duration: 2, y: "100%", ease: Power4.easeOut },
    "<"
  );
  tl2.fromTo(
    ".navbarItem",
    { y: "-100%" },
    { duration: 0.5, y: "0%", ease: Back.easeOut.config(1), stagger: 0.2 },
    "<80%"
  );

  // $(".loader").addClass("loaderAnimation");
  // $(".loaderBackground").addClass("loaderBackgroundAnimation");
});

var timerRan = false;
$(window).scroll(function () {
  var hT = $(".countCustomers").offset().top,
    hH = $(".countCustomers").outerHeight(),
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
  var countCustomers = document.querySelector(".countCustomers");
  var countProjects = document.querySelector(".countProjects");
  var countAwards = document.querySelector(".countAwards");
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
  }, 50);
  document.querySelector(".countCustomers").style.color = "rgba(255,0,0,0.5)";
  var counterP = setInterval(() => {
    if (j == projectUpto) {
      clearInterval(counterP);
    }
    countProjects.innerText = `${j}+`;
    j = j + 1;
  }, 50);
  document.querySelector(".countProjects").style.color = "rgba(255,0,0,0.5)";
  var counterA = setInterval(() => {
    if (k == awardsUpto) {
      clearInterval(counterA);
    }
    countAwards.innerText = `${k}+`;
    k = k + 1;
  }, 50);
};
document.querySelector(".countAwards").style.color = "rgba(255,0,0,0.5)";

$(window).scroll(function () {
  var hT = $(".typing-demo1").offset().top,
    hH = $(".typing-demo1").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > hT + hH - wH) {
    $(".typing-demo1").addClass("typing-demo-animation");
  }
});
$(window).scroll(function () {
  var hT = $(".typing-demo2").offset().top,
    hH = $(".typing-demo2").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > hT + hH - wH) {
    $(".typing-demo2").addClass("typing-demo-animation");
  }
});
$(window).scroll(function () {
  var hT = $(".typing-demo5").offset().top,
    hH = $(".typing-demo5").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > hT + hH - wH) {
    $(".typing-demo5").addClass("typing-demo-animation");
  }
});
$(window).scroll(function () {
  var hT = $(".typing-demo3").offset().top,
    hH = $(".typing-demo3").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > hT + hH - wH) {
    $(".typing-demo3").addClass("typing-demo-animation");
  }
});
$(window).scroll(function () {
  var hT = $(".typing-demo4").offset().top,
    hH = $(".typing-demo4").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > hT + hH - wH) {
    $(".typing-demo4").addClass("typing-demo-animation");
  }
});
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
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
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
gsap.set(".facebookSvg", { transformOrigin: "center" });
setInterval(() => {
  gsap.fromTo(
    ".facebookSvg",
    { rotation: -40, scale: 1 },
    { rotation: 0, duration: 2, scale: 2, ease: "elastic.out(5, 0.2)" }
  );
  gsap.fromTo(
    ".facebookSvg",
    { rotation: 40, scale: 2 },
    { rotation: 0, duration: 2, scale: 1, ease: "elastic.out(5, 0.2)" }
  );
}, 5000);
// instagram animation
gsap.set(".instagramSvg", { transformOrigin: "center" });
setInterval(() => {
  gsap.fromTo(
    ".instagramSvg",
    { rotation: -40, scale: 1 },
    { rotation: 0, duration: 2, scale: 2, ease: "elastic.out(5, 0.2)" }
  );
  gsap.fromTo(
    ".instagramSvg",
    { rotation: 40, scale: 2 },
    { rotation: 0, duration: 2, scale: 1, ease: "elastic.out(5, 0.2)" }
  );
}, 6000);
// twitter animation
gsap.set(".twitterSvg", { transformOrigin: "center" });
setInterval(() => {
  gsap.fromTo(
    ".twitterSvg",
    { rotation: -40, scale: 1 },
    { rotation: 0, duration: 2, scale: 2, ease: "elastic.out(5, 0.2)" }
  );
  gsap.fromTo(
    ".twitterSvg",
    { rotation: 40, scale: 2 },
    { rotation: 0, duration: 2, scale: 1, ease: "elastic.out(5, 0.2)" }
  );
}, 7000);
