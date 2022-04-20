$(function(){
	$(window).scroll(function(){
		if (parseInt($(this).scrollTop()) > 10)
		{
			$('#notice-a').fadeIn();
		}else{
			$('#notice-a').fadeOut();
		}
	});
});
