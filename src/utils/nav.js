var isActive = false;

$('.nav').on('click', function() {
	if (isActive) { //closed
		$(this).removeClass('active');
		$('body').removeClass('menu-open');
		stopBodyScrolling(false);
	} else { //opened
		$(this).addClass('active');
		$('body').addClass('menu-open');
		$('body').css( "overflow-y", "hidden" );
		stopBodyScrolling(true);
	}

	isActive = !isActive;
});


function stopBodyScrolling (bool) {
    if (bool === true) {
        document.body.addEventListener("touchmove", freezeVp, false);
				console.log("test-ADD");
    } else {
        document.body.removeEventListener("touchmove", freezeVp, false);
				console.log("test-REMOVE");
    }
}

var freezeVp = function(e) {
    e.preventDefault();
		console.log("prevent default");
};
