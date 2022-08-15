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

const wrapper = document.querySelector(".wrapper");
const indicators = [...document.querySelectorAll(".indicators button")];
let currentTestimonial = 0;
indicators.forEach((item, i) => {
  item.addEventListener("click", () => {
    indicators[currentTestimonial].classList.remove("active");
    wrapper.style.marginLeft = `-${100 * i}%`;
    item.classList.add("active");
    currentTestimonial = i;
  });
});
document.querySelectorAll(".image-container img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-img").style.display = "block";
    document.querySelector(".popup-img img").src = image.getAttribute("src");
  };
});

document.querySelector(".popup-img span").onclick = () => {
  document.querySelector(".popup-img").style.display = "none";
};
