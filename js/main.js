$(document).ready(function() {
    
    $('.features__slider').slick({
        infinite: false,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        arrows: true,
        responsive:[
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3.5,

            }
          },
          {
            breakpoint: 751,
            settings: {
              slidesToShow: 2.5,

            }
          },
          {
            breakpoint: 471,
            settings: {
              slidesToShow: 1.5,

            }
          },
          {
            breakpoint: 401,
            settings: {
              slidesToShow: 1.5,
              arrows: false,

            }
          }
          
        ]
        
      });
});