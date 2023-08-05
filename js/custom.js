$('.robote-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
})

$('.carouselNew-carousel').owlCarousel({
  margin: 0,
  center: true,
  loop: true,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 200,
  autoplayHoverPause: true,
  slideTransition: 'linear',
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2,
      margin: 15
    },
    1000: {
      items: 2
    }
  }
})
