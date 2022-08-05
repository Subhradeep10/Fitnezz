const toggleBtn = document.getElementsByClassName("toggle-button")[0];
const navBar = document.getElementsByClassName("navbar")[0];

toggleBtn.addEventListener("click", ()=> {
    navBar.classList.toggle('active');
})


document.querySelectorAll('.image-container img').forEach(image=>{
    image.onclick = () =>{
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-img span').onclick = () =>{
    document.querySelector('.popup-img').style.display = 'none';
}