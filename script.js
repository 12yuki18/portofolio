$(function () { 
    $('.bd-solid').on('mouseover', function () {
      $(this).animate({
        opacity: 0.5,
        marginLeft: 20,
      }, 100);
    });

    $('.bd-solid').on('mouseout', function () {
        $(this).animate({
          opacity: 1.0,
          marginLeft: 0
        }, 100);
      });

      $('.more-box').on('mouseover', function () {
        $(this).animate({
          opacity: 0.5,
          marginLeft: 0,
        }, 100);
      });
  
      $('.more-box').on('mouseout', function () {
          $(this).animate({
            opacity: 1.0,
            marginLeft: 0
          }, 100);
        });
  });

  