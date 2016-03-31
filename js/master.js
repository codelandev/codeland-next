$(document).ready(function() {

  // $("section:first").addClass("with-fixed-header");

  var headerHeight = $(".section-header").outerHeight()

  var divs = $(".section").map(function(_index, section) {
    var wrappedSection = $(section)
    return {
      bottom: wrappedSection.offset().top + wrappedSection.outerHeight(),
      section: wrappedSection,
     };
  });

  var height = $(".section").outerHeight();

  $(window).scroll(function() {
    $(".section").removeClass("with-fixed-header")
    var scrolledPast = divs.filter(function(_index, elem) {
      return elem.bottom < $(window).scrollTop() + headerHeight;
    });
    $(divs[scrolledPast.length].section).addClass("with-fixed-header")
  });

});
