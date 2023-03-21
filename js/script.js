// Picture Popup
function openPopup() {
  document.getElementById("myModal").style.display = "block";
}

function closePopup() {
  document.getElementById("myModal").style.display = "none";
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

// Slider
let viewport = document.getElementById("viewport").offsetWidth;
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
let slider = document.querySelector(".slider");

let viewSlide = 0;

btnNext.addEventListener("click", function () {
    if (viewSlide < 2) {
        viewSlide++;
    } else {
        viewSlide = 0;
    }
    slider.style.left = -viewSlide * viewport + "px";
});

btnPrev.addEventListener("click", function () {
    if (viewSlide > 0) {
        viewSlide--;
    } else {
        viewSlide = 2;
    }
    slider.style.left = -viewSlide * viewport + "px";
});