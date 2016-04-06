$(document).ready(function() {
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
    var selectedAnchor = $(".section-anchor[href='#" + selected.attr("id") + "']")
    $(".section-anchor").not(selectedAnchor).removeClass("active")
    $(".section").not(selected).removeClass("with-fixed-header")

    selectedAnchor.addClass("active")
    selected.addClass("with-fixed-header")
  });

});
