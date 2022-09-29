$(document).ready(function() {
    
    $('.features__slider').slick({
        infinite: false,
        arrows: true,
        mobileFirst:true,
        responsive: [
          {
              breakpoint: 1025,
              settings: {
                slidesToShow: 4.5,
                slidesToScroll: 1,
              }
          },
          {
              breakpoint: 751,
              settings: {
                  slidesToShow: 3.5,
                  slidesToScroll: 1,
                  mobileFirst:true
              }
          },
          {
              breakpoint: 530,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
                
              }
          },
          {
              breakpoint: 320,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                arrows:false
                
              }
          },
      ]
        /* mobileFirst:true, */
        /* responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3.5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 751,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 530,
          settings:{
            slidesToShow: 1.5,
            slidesToScroll: 1,
            autoplay:true,
          }
        },
        {
          breakpoint: 401,
          settings:{
            arrows: false,
            autoplay:true,
          }
        }
      ], */
        
      });
});