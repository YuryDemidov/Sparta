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

/*Скрипт отвечает за открытие и закрытие pop-up'а*/

var popUp = document.querySelector('.pop-up');
var openButton = document.querySelectorAll('a.button');
var closeButton = document.querySelector('.pop-up__close');
var closeArea = document.querySelector('.pop-up__back');
var nameInput = document.querySelector('#popup-name-id');

for (var i = 0; i <= openButton.length - 1; i++) {
  openButton[i].addEventListener('click', function(){
    event.preventDefault();
    popUp.classList.add('pop-up--visible');
    nameInput.focus();
  });
}

closeButton.addEventListener('click', function(event) {
  popUp.classList.remove('pop-up--visible');
});
closeArea.addEventListener('click', function(event) {
  popUp.classList.remove('pop-up--visible');
});

window.addEventListener('keydown', function(event) {
  if (event.code == 'Escape') {
    if (popUp.classList.contains('pop-up--visible')) {
      popUp.classList.remove('pop-up--visible');
    }
  }
});

/*Скрипт отвечает за появление полного текста комментария
и удаление кнопки «Читать весь отзыв»*/

var hiddenText = document.querySelectorAll('.comment__hidden');
var buttonFullComment = document.querySelector('.comment__show');

buttonFullComment.addEventListener('click', function() {
  for (var i = 0; i < hiddenText.length; i++) {
    hiddenText[i].classList.remove('comment__hidden');
  }
  buttonFullComment.style = "display: none;";
});
