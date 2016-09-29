var didScroll = false,
  divs = [],
  headerHeight = 0;

var calculateHeaderChanges = function () {
  var sectionMinHeight = $(window.top).outerHeight();
  $(".section").css("min-height", sectionMinHeight);
  headerHeight = $(".section-header:last").height();

  divs = $(".section").map(function (_index, section) {
    var wrappedSection = $(section);
    var bottom = wrappedSection.offset().top +
      wrappedSection.outerHeight();
    return {
      bottom: bottom,
      section: wrappedSection,
    };
  });

  showSelectedHeader(divs, headerHeight);
}

var showSelectedHeader = function (divs, headerHeight) {
  var scrolledPast = divs.filter(function (_index, elem) {
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

$(document).ready(function () {
  calculateHeaderChanges();
  window.onresize = function () {
    calculateHeaderChanges();
  };

  $(window).scroll(function () {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      didScroll = false;
      showSelectedHeader(divs, headerHeight);
    }
  }, 250);

});
