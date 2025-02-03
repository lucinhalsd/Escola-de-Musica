document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const totalSlides = slides.length;

    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add('active');
        document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    setInterval(showNextSlide, 3000);

    // Initialize the first slide as active
    slides[currentSlide].classList.add('active');
});
