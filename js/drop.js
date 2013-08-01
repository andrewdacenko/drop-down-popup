$(function() {
	$('.pointer').on('mouseenter', function(){
	    $('.popup').stop().show();
	}).on('mouseleave', function(){
	    $('.popup').stop().hide();
	});
});