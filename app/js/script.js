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
		var pull 		= $('#pull');
			menu 		= $('nav ul');
			menuHeight	= menu.height();

		$(pull).on('click', function(e) {
			e.preventDefault();
			menu.slideToggle();
		});

		$(window).resize(function(){
        	var w = $(window).width();
        	if(w > 320 && menu.is(':hidden')) {
        		menu.removeAttr('style');
        	}
    	});
	});

/*SLIDER*/
	$(document).ready(function() {
	$("#reviews").owlCarousel({
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
if($("div").is('#full_banner')){
	history.scrollRestoration = 'manual';
	document.getElementById('full_banner').scrollIntoView(true);
}

});

})(jQuery);




	 	