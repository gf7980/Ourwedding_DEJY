$(document).ready(function(){
	$('.bgm').find('img').click(function(){
		bgm_player();
	});

	// 탭
	// $('.tab-area').find('li').click(function(){
	// 	var tab = $(this).attr('data-tab');
	// 	$('.tab-area').find('li').removeClass('on');
	// 	$(this).addClass('on');
	//
	// 	$('.tab-area').find('li').each(function(){
	// 		tab_div = $(this).attr('data-tab');
	// 		$('.'+tab_div).hide();
	// 	});
	//
	// 	if (tab == 'photo'){
	// 		$('.'+tab).css('height','auto');
	// 		$('.'+tab).show();
	// 	}else{
	// 		$('.'+tab).show();
	// 	}
	// });


	//혼주분께 연락하기 클릭시 팝업창
	$('.parents').click(function(event){
		event.preventDefault();
		$('.call_parents_black').fadeIn();
		$('.call_parents_wrap').fadeIn();
		$('html').addClass('hidden');
		return false;
	});

	$('.call_parents_black').click(function(event){
		event.preventDefault();
		$(this).fadeOut();
		$('.call_parents_wrap').fadeOut();
		$('html').removeClass('hidden'); //스크롤 가능
		return false;
	});

	$('.call_close').click(function(event){
		event.preventDefault();
		$('.call_parents_black').fadeOut();
		$('.call_parents_wrap').fadeOut();
		$('html').removeClass('hidden'); //스크롤 가능
		return false;
	});

	// 스와이퍼 슬라이드
	var swiper = new Swiper(".mygallery", {
		observer: true,
		observeParents: true,
	});


	//갤러리닫기
		$(".close").click(function(){
			$("#gallery-view").css('transform','translate(-50%, 100%)');
			$("#container").css({"z-index":"99"});
		});

});

function bgm_player() {
	var bgm = document.getElementById("bgm");

	if (bgm.paused) {
		bgm.play();
		$(".bgm").find('img').attr("src","/images/common/bgm_on.png");
	} else {
		bgm.pause();
		$(".bgm").find('img').attr("src","/images/common/bgm_off.png");
	}
}

function viewgallery(i) {
	$("#gallery-view").css('transform','translate(-50%, 0%)');
	$("#container").css({"z-index":"8"});
	$(".swiper-slide").removeClass("swiper-slide-active").removeClass("swiper-slide-prev").removeClass("swiper-slide-next");
	$("#gallery-all"+i).addClass("swiper-slide-active");
	var n = Number(i)+1;
	var p = Number(i)-1;
	$("#gallery-all"+n).addClass("swiper-slide-next");
	$("#gallery-all"+p).addClass("swiper-slide-prev");
	var w = $('#container').width();
	var gw = w*i-w;
	$('.swiper-wrapper').css({"transition-duration":"0ms","transform":"translate3d(-"+gw+"px, 0px, 0px)"})
}
function newnum(s){}
