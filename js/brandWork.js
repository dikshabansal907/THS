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

// footerCopyrightYear copyright year
const year = new Date().getFullYear();
document.querySelector(".footerCopyrightYear").innerText = year;
  