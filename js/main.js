$(document).ready(function(){
	$('.menu').click(function(e){
		e.stopPropagation();
		$('#main-nav').toggleClass('active');
	})
	
	$(document).click(function(){
		$('#main-nav').removeClass('active');
	})
})