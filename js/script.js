$(document).ready(function(){

	$('nav').onePageNav({
		scrollThreshold: 0.4,
		navItems: "a:not(.submenu a)"
	});

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
};

		
$('#wel').delay(2000).hide(2000);
		$(this).animate({
		// top: '200px',
		// opacity: '1',
		});

// $("#wel").click(function(){
//         var div = $("#wel");  
//         div.animate({left: '100px'}, "slow");
//         div.animate({fontSize: '3em'}, "slow");
//     });
// 		top:'60px', left: '20px',
// }, 750);


$(window).resize(windowResize);
			
// function toggleChildren(event) {
// 	event.preventDefault();
// 	$('nav ul ul li').slideToggle();
// }
});