jQuery(function() {
			var pull 		= jQuery('#pull');
				menu 		= jQuery('nav ul');
				menuHeight	= menu.height();

			jQuery(pull).on('click', function(e) {
				e.preventDefault();
				menu.slideToggle();
			});

			jQuery(window).resize(function(){
        		var w = jQuery(window).width();
        		if(w > 320 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        		}
    		});
		});

jQuery(document).ready(function() {
	jQuery("#owl-example").owlCarousel({
		navigation: true,
		navigationText : false,
		singleItem: true,
		slideSpeed : 1000,
    	paginationSpeed : 1000,
    	rewindSpeed : 800,
    	autoPlay:true
	});
});
