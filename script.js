const toggleBtn = document.getElementsByClassName("toggle-button")[0];
const navBar = document.getElementsByClassName("navbar")[0];

toggleBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

$(function () {
  $(".accordion")
    .find(".accordion__title")
    .click(function () {
      $(this).toggleClass("active");
      $(this).next().slideToggle("fast");
      $(".accordion__content").not($(this).next()).slideUp("fast");
      $(".accordion__title").not($(this)).removeClass("active");
    });
});
