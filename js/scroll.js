$(document).ready(function() {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    const docViewTop = $(window).scrollTop();
    const docViewBottom = docViewTop + $(window).height();

    const elemTop = $(elem).offset().top;
    const elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, Animation it in
  $(window).scroll(function() {
    $('.highlight').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('visible');
      }
    });
  });
});
