let currentSlideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    currentSlideIndex++;
    if (currentSlideIndex > slides.length) {
        currentSlideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[currentSlideIndex - 1].style.display = "flex";
    dots[currentSlideIndex - 1].classList.add("active");
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function currentSlide(n) {
    currentSlideIndex = n - 1;
    showSlides();
}
