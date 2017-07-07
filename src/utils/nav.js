var isActive = false;

var $body = $('body');
var $nav = $('.nav');

function toggleFullPageMenu() {
	$nav.toggleClass('active');
	$body.toggleClass('menu-open');

	if (isActive) { //closed
		// $nav.removeClass('active');
		// $body.removeClass('menu-open');
		// stopBodyScrolling(false);
		$body.off('touchmove', freezeVp);
	} else { //opened
		// $nav.addClass('active');
		// $body.addClass('menu-open');
		// stopBodyScrolling(true);
		$body.on('touchmove', freezeVp);
	}

	isActive = !isActive;
}

$('.nav, .work').on('click', toggleFullPageMenu);

//stop scrolling on opened menu on iOS
// function stopBodyScrolling (bool) {
//     if (bool === true) {
//         document.body.addEventListener("touchmove", freezeVp, false);
// 				console.log("test-ADD");
//     } else {
//         document.body.removeEventListener("touchmove", freezeVp, false);
// 				console.log("test-REMOVE");
//     }
// }

function freezeVp(e) {
  e.preventDefault();
	console.log("prevent default");
};
