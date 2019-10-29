(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

$("#back-top").hide();
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });
    $('#back-top a').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
    items: 1,
    nav: true
    },
    600: {
    items: 3,
    nav: false
    },
    1000: {
    items: 5,
    nav: true,
    loop: false,
    margin: 20
    }
  }
  })
});