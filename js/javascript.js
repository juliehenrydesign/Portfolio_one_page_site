function toggleNav() {
	$('nav ul').slideToggle();
}
			
$('#menu-button').click(toggleNav);

function windowResize() {
	var width = $(window).width();
	var menu = $('nav ul');

	if(width > 768 && menu.is(':hidden')){
		menu.removeAttr('style');
	}
}

$(window).resize(windowResize);
			
// function toggleChildren(event) {
// 	event.preventDefault();
// 	$('nav ul ul li').slideToggle();
// }
};