
const Btn = document.querySelectorAll(".btn")
const slides = document.querySelectorAll(".Tsm_slides");

const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const modalMenu = document.querySelector(".modal_menu");
const overlay = document.querySelector(".overlay");


openMenu.addEventListener("click", () => {
    if (modalMenu.classList.contains("open")) {
        modalMenu.classList.remove("open");
        openMenu.innerHTML = '<i class="ri-menu-line"></i>';
       overlay.classList.remove("show")
    }
    else {
        modalMenu.classList.add("open");
        openMenu.innerHTML = '<i class="ri-close-line"></i>'; 
        overlay.classList.add("show")
    }
});

closeMenu.addEventListener("click", () => {
    modalMenu.classList.remove("open");
    openMenu.innerHTML = '<i class="ri-menu-line"></i>';
    overlay.classList.remove("show")
});


const navLinks = document.querySelectorAll(".navLinks")
navLinks.forEach(nLink => {
    nLink.addEventListener("click", () => {
        modalMenu.classList.remove("open");
        openMenu.innerHTML = '<i class="ri-menu-line"></i>';
        overlay.classList.remove("show")
    } )
})


let autosliderplay;
let index = 0;
Btn.forEach((btnControl, idx) =>{
btnControl.addEventListener("click", () => {
    index = idx
    updateSlider()
  autoslider()
}) 
})

function updateSlider() {
    slides.forEach((slide)=> {
        slide.style.transform = `translateX(-${index * 100}%)`
})
Btn.forEach((btn) => {
    btn.classList.remove("active")
})
Btn[index].classList.add("active")
}

function autoslider() {
clearInterval(autosliderplay)

 autosliderplay = setInterval(() => {
    index = (index +1) % slides.length;
    updateSlider()
}, 5000)

    
}

autoslider()