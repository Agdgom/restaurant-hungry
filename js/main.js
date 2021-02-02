let slideIndex = 1;
showSlides(slideIndex);
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".slide-item");
    let dots = document.querySelectorAll(".slider-dots-item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}

/*Menu*/
let burger = document.querySelector('.burger');
let mainNav = document.querySelector('.main-nav');
burger.addEventListener('click', () =>{
   if(mainNav.classList.contains('visible')){
       mainNav.classList.remove('visible');
   }else{
       mainNav.classList.add('visible');
   } 
   
    
})
