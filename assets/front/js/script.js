var swiper = new Swiper(".slide-content", {
  initialSlide: 0,
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centeredSlides: true,
  fade: 'true',
  grabCursor: 'true',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

const links = document.querySelectorAll('.projects-search-filter');

if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
        link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}
function toggle() {
  if (document.getElementById("menu-ul").style.display == "block") {
    document.getElementById("menu-ul").style.display = ""
  }
  else {
    document.getElementById("menu-ul").style.display = "block";
  }
}
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.onscroll = function() {myFunction()};

var fdeco = document.getElementById("fdeco");
var sticky = fdeco.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    fdeco.classList.add("sticky")
  } else {
    fdeco.classList.remove("sticky");
  }
}
$(document).ready(function(){
  //FANCYBOX
  //https://github.com/fancyapps/fancyBox
  $(".fancybox").fancybox({
      openEffect: "none",
      closeEffect: "none"
  });
});
 
