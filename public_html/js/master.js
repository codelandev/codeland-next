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
  }, 500);


  particlesJS('home', {
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#F3D430"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.3,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 80,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 300,
        "color": "#F3D430",
        "opacity": 0.2,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 7,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 800,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 800,
          "size": 80,
          "duration": 2,
          "opacity": 0.8,
          "speed": 3
        },
        "repulse": {
          "distance": 50,
          "duration": 0.2
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
});
