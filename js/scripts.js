(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict


// Animacion de fondos del header
let header = document.getElementById("header");

const primerFondoHeader = () => {
  return new Promise((resolve, reject) => {
    
    header.style.backgroundImage = 'linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url("./assets/img/bg-header.jpg")'

    setTimeout(() => {
      resolve();
    },2000);
  })
}
const segundoFondoHeader = () => {
  return new Promise((resolve, reject) => {
    
    header.style.backgroundImage = 'linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url("./assets/img/bg-header-2.jpg")'

    setTimeout(() => {
      resolve();
    },2000);
  })
}
const tercerFondoHeader = () => {
  
  header.style.backgroundImage = 'linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url("./assets/img/bg-header-3.jpg")'

}

let promesaFondo = primerFondoHeader();
  promesaFondo
    .then(segundoFondoHeader)
      .then(tercerFondoHeader);


setInterval(() => {

  let promesaFondo = primerFondoHeader();
  promesaFondo
    .then(segundoFondoHeader)
      .then(tercerFondoHeader);

} ,6000);

