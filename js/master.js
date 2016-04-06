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
    var name = selected.attr("id")
    var selectedAnchor = $(".section-anchor[href='#" + name + "']")
    $(".section-anchor").not(selectedAnchor).removeClass("active")
    $(".section").not(selected).removeClass("with-fixed-header")

    selectedAnchor.parents(".manifesto").attr("data-active", name)
    selectedAnchor.addClass("active")
    selected.addClass("with-fixed-header")
  });

});
