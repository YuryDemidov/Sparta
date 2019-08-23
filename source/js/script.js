//Скрипт активирует контролирующие элементы видео при ховере

var video = document.querySelector('video');

video.addEventListener('mouseover', function(event) {
  event.preventDefault();
  this.controls = true;
});

video.addEventListener('mouseout', function(event) {
  event.preventDefault();
  this.controls = false;
});

//Скрипт обеспечивает работу слайдера

var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".tour-photo-slider__photo");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
