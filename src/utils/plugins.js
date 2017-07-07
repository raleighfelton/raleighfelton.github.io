console.log('hi');

// Adds animation to scroll to
// $('a[href*="#"]').on('click', function(event) {
$('a[data-linked-section]').on('click', function(event) {
    console.log("clicked now animate");

    // var target = $( $(this).attr('href') );
    var target = $('#' + $(this).data('linked-section') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 10000);
    }

});
