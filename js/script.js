(function($) {
 $( document ).ready(function() {

/*SCROLL IMAGES*/
  $('.number_slide').waypoint(function() {
		$('.number_slide').removeClass('active');
		$(this.element).addClass('active');
		$(".step").css({opacity: 0, transform: "rotate(0deg)"});
		$(this.element).siblings().find(".step").css({opacity:1, "-webkit-transform": "rotate(360deg)", transform: "rotate(360deg)"});
	},{offset:'45%'});
/*SCROLL IMAGES*/

/*SLIDER*/
	$(function() {
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

	$(document).ready(function() {
	$("#owl-example").owlCarousel({
		navigation: true,
		navigationText : false,
		singleItem: true,
		slideSpeed : 1000,
    	paginationSpeed : 1000,
    	rewindSpeed : 800,
    	autoPlay:true
		});
	});
	/*SLIDER*/

	/*FULL-SIZE BANNER*/
	history.scrollRestoration = 'manual';
	document.getElementById('full_banner').scrollIntoView(true);
	/*FULL-SIZE BANNER*/
});

})(jQuery);




	 	