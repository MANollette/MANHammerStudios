// Open the Modal
function openModal(s) {
    document.getElementById(s).style.display = "block";
}

// Close the Modal
function closeModal(s) {
    document.getElementById(s).style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
//Takes slide number, slide class, thumbnail class, and caption class
function plusSlides(n, s, t, c) {
    showSlides(slideIndex += n, s, t, c);
}

// Thumbnail image controls
//Takes slide number, slide class, thumbnail class, and caption class

function currentSlide(n, s, t, c) {
    showSlides(slideIndex = n, s, t, c);
}

//Show slides after receiving slide number, slide class, thumbnail class, and caption class
function showSlides(n, s, t, c) {
    var i;
    var slides = document.getElementsByClassName(s);
    var dots = document.getElementsByClassName(t);
    var captionText = document.getElementById(c);
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}