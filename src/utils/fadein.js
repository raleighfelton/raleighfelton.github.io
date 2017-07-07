console.log('fade IN');

$(document).ready(function() {

  /* Every time the window is scrolled ... */
  $(window).scroll(function(){
    /* Check the location of each desired element */
    $('.hide').each( function(){

      var bottom_of_object = $(this).position().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ) {

          $(this).animate({'opacity':'1'},1500);
          console.log('test');
        }
    });
  });
});
