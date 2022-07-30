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
