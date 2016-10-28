// TODO: Use https://github.com/camwiegert/in-view instead the code below

$(document).ready(function () {
  inView('[data-real-section]')
    .on('enter', function (el) {
      document.querySelector('#' + el.id + ' .section-header').classList.add('active')
      document.body.dataset.active = el.id
    })
    .on('exit', function (el) {
      document.querySelector('#' + el.id + ' .section-header').classList.remove('active')
    })
  ;

  var vh = window.innerHeight;
  inView.offset(vh / 2);

  window.addEventListener('resize', () => {
    vh = window.innerHeight;
    inView.offset(vh / 2);
  });

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
