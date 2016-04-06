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
    var scrolledPast = divs.filter(function(_index, elem) {
      return elem.bottom < $(window).scrollTop() + headerHeight;
    });
    var selected = $(divs[scrolledPast.length].section)
    $(".section").not(selected).removeClass("with-fixed-header")
    selected.addClass("with-fixed-header")
  });

});
