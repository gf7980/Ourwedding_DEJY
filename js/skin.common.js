$(document).ready(function(){
	// sns 링크
	$('.go-link').on('click',function(){
		var link = $(this).attr('data-link');
		var target = $(this).attr('data-link-target');

		if (target == "_blank"){
			window.open(link);
		}

		if (target == "_self"){
			location.href = link;
		}
	}).css('cursor','pointer');
});

function kakaotalk_init(btn_id){
	var title = $('#title').val();
	var sns_msg = $('#sns_msg').val();
	var sns_url = $('#sns_url').val();
	var sns_image = $('#sns_image').val();

	if (sns_msg == "")
	{
		sns_msg = '카톡으로 보낼 메세지가 작성되지 않았습니다. `SNS공유 > 카카오톡 보내기`의 메세지를 입력해주세요';
	}

	var option = {
		container: btn_id,
		objectType: 'feed',
		content: {
			title: title,
			description: sns_msg,
			imageUrl: sns_image,
			link: {
				mobileWebUrl: sns_url,
				webUrl: sns_url
			}
		}
	}



	Kakao.init('22c7c3e271071ca067a109989776a675 ');
	Kakao.Link.createDefaultButton(option);
}

// 앵커 이동
function scrollToAnchor(aid){
	var aTag = $("a[name='"+ aid +"']");
	if (aTag.length > 0){
		$('html,body').stop().animate({scrollTop: aTag.offset().top},'slow');
	}
}
