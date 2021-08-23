
$.ajax({
	type : "GET",
	url : "YN_data.json",
	dataType : "json",
	success : function(data){
		var str ="";
		$.each(data, function(index, obj){
			str += "<div class='swiper-slide'><p>";
			str +=  obj.item;
			str += "</p><img class='swiperimage'";
			str += "src = 'images/photo";
			str += obj.imgFile;
			str += ".jpg' alt = '";
			str += obj.item;
			str += "'></div>";
		});
		$(".swiper-wrapper").append(str);
	},
	error : function(){
		alert("에러발생");
	}
	
});

