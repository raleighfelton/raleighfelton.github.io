var isActive = false;

$('.nav').on('click', function() {
	if (isActive) {
		$(this).removeClass('active');
		$('body').removeClass('menu-open');
	} else {
		$(this).addClass('active');
		$('body').addClass('menu-open');
		$('body').css( "overflow-y", "hidden" );
		$('body').css('height', '100%');
	}

	isActive = !isActive;
});
