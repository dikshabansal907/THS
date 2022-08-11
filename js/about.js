$('#gallery-dropdown-button').click(function(){return false;});
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



// floating contact us
setInterval(() => {
    $(".floatingContactEmailIcon").toggleClass("animation-paused");
  }, 2000);