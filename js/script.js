$(document).ready(function(){

		$('nav').onePageNav({
			scrollThreshold: 0.4,
			navItems: "a:not(.submenu a)"
		});

		$('#menu-button').click(toggleNav);
		$.stellar();

		function toggleNav() {
			$('nav ul').slideToggle();
		}
					
		function windowResize() {
			var width = $(window).width();
			var menu = $('nav ul');

		if(width > 768 && menu.is(':hidden')){
			menu.removeAttr('style');
			}
		};
			
		$('#wel').delay(2000).hide(2000);
				$(this).animate({

				});

		$(window).resize(windowResize);
			

});