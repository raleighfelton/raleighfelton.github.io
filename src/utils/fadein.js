console.log('fade IN');

$(document).ready(function() {
  $('.c-portfolio__project').load(function(){
    // $(this).fadeIn('slow');
    $(this).css( "border", "13px solid red" );
      console.log('test');
  })
});
