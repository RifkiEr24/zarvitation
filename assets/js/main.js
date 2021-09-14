// AOS.init();
$('.carousel-center').slick({
    arrows : false,
    dots: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    focusOnSelect: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          variableWidth: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
        }
      }
    ]
  });
  $('.carousel-catalog-hero').slick({
    arrows : false,
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
         
        }
      }
    ]
  });
      
      
