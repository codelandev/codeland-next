var calculateHeaderChanges = function () {
  var showSelectedHeader = function () {
    var scrolledPast = divs.filter(function(_index, elem) {
      return elem.bottom < $(window).scrollTop() + headerHeight;
    });
    var selected = $(divs[scrolledPast.length].section);
    var name = selected.attr("id");
    var selectedAnchor = $(".section-anchor[href='#" + name + "']");
    $(".section-anchor").not(selectedAnchor).removeClass("active");
    $(".section").not(selected).removeClass("with-fixed-header");

    $("body").attr("data-active", name);
    selectedAnchor.addClass("active");
    selected.addClass("with-fixed-header");
  }

  var sectionMinHeight = $(window.top).outerHeight();
  $(".section").css("min-height", sectionMinHeight);
  var headerHeight = $(".section-header").height();

  var divs = $(".section").map(function(_index, section) {
    var wrappedSection = $(section);
    var bottom = wrappedSection.offset().top +
      wrappedSection.outerHeight() - 95;
    return {
      bottom: bottom,
      section: wrappedSection,
    };
  });

  showSelectedHeader();
  $(window).scroll(function() {
    showSelectedHeader();
  });
}

$(document).ready(function() {

  calculateHeaderChanges();
  window.onresize = function() {
    calculateHeaderChanges();
  };

});
