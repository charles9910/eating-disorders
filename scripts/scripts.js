/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

  // Scroll Reveal
  // ScrollReveal().reveal('.services .grid .card');
  
  $('.square.blue').on('inview', function(event, isInView) {
    if (isInView) {
      // element is now visible in the viewport
      $(this).addClass("in-view");
    } else {
      // element has gone out of viewport
      $(this).removeClass("in-view");
    }
  });
});
 