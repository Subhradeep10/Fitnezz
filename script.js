const toggleBtn = document.getElementsByClassName("toggle-button")[0];
const navBar = document.getElementsByClassName("navbar")[0];

toggleBtn.addEventListener("click", ()=> {
    navBar.classList.toggle('active');
})
const wrapper = document.querySelector('.wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];
let currentTestimonial = 0;
indicators.forEach((item,i) => {
item.addEventListener('click',() => {
    indicators[currentTestimonial].classList.remove('active');
    wrapper.style.marginLeft=`-${100 * i}%`;
    item.classList.add('active');
    currentTestimonial = i;
})
})