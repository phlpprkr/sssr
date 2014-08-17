$(document).ready(function() {
	$('div').hover(function(){
		$(this).addClass('red');
	}).click(function(){
		$(this).fadeOut('fast');
	});
});