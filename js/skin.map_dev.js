$(function(){
		var map_width	= $(window).width();
		var map_height	= ($(window).width() / 100) * 70;

$("#map").css({"max-width":"420px","max-height":"400px"})
$("#map").width(map_width);
$("#map").height(map_height);

		var mapContainer = document.getElementById('map'), // 지도를 표시할 div
		    mapOption = {
						center: new kakao.maps.LatLng($('#wdh_xpos').val(), $('#wdh_ypos').val()), // 지도의 중심좌표
						level: 2, // 지도의 확대 레벨
						mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
		    };

		// 지도를 생성한다
		 var map = new kakao.maps.Map(mapContainer, mapOption);

		 // 마커가 표시될 위치입니다
 var markerPosition  = new kakao.maps.LatLng($('#wdh_xpos').val(), $('#wdh_ypos').val());

 // 마커를 생성합니다
 var marker = new kakao.maps.Marker({
     position: markerPosition,
     draggable : true // 마커를 드래그 가능하도록 설정한다
 });

 // 마커가 지도 위에 표시되도록 설정합니다
 marker.setMap(map);
});
