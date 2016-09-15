(function($) {

 $( document ).ready(function() {

  $('.number_slide').waypoint(function() {
			$('.number_slide').removeClass('active');
			$(this.element).addClass('active');
		},{offset:'30%'});
  
});

})(jQuery)