(function($) {
 $( document ).ready(function() {

/*SCROLL IMAGES*/
  	$('.number_slide').waypoint(function() {
		$('.number_slide').removeClass('active');
		$(this.element).addClass('active');
		$(".step").css({opacity: 0, transform: "rotate(0deg)"});
		$(this.element).siblings().find(".step").css({opacity:1, "-webkit-transform": "rotate(360deg)", transform: "rotate(360deg)"});
	},{offset:'45%'});


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

/*SLIDER*/
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

/*FULL-SIZE BANNER*/
if(jQuery("div").is('#full_banner')){
	history.scrollRestoration = 'manual';
	document.getElementById('full_banner').scrollIntoView(true);
}

/*ANIMATION MOUSE*/
	function isScrolledIntoView(elem){
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();
		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height() - 150;
		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	var state = false;
	var refreshIntervalId;

	$(window).scroll(function(){
		if(jQuery("img").is('#mouse')){
			if (isScrolledIntoView($("#mouse")) && !state){
				refreshIntervalId = setInterval(function (){
					$("#mouse").addClass("test");
					setTimeout(function(){$("#mouse").removeClass("test");}, 700);
				}, 1400);
				state = true;
			}
			else if(!isScrolledIntoView($("#mouse"))){
				clearInterval(refreshIntervalId);
				state = false;
			}
		}
	});
});

})(jQuery);




	 	