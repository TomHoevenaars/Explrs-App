$(document).ready(function(){
	$("#toReisInfo").click(function(){
		window.location.href="reisinfo.html";
	});

	$(".rotate").click(function(){
		$(this).toggleClass("down")  ; 
	})
	$(".go-back").click(function () {
  		$("html, body").animate({scrollTop: 0}, 500);
	});
	
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if (y > 200) {
                    		$(".go-back").show();
                	} else {
                    		$(".go-back").css("display","none");
                }
           });

	$(".splash").delay(3500).fadeOut(200);

	$("#stad1").click(function(){
		$(".stad-info1").show();
		$(".stad-info2").css("display","none");
		$(".stad-info3").css("display","none");
		$(".stad-info4").css("display","none");
		$(".stad-info5").css("display","none");
		$(".stad-info6").css("display","none");
		$(".stad-info7").css("display","none");
		$(".stad-info8").css("display","none");
	});

	$("#stad2").click(function(){
		$(".stad-info2").show();
		$(".stad-info1").css("display","none");
		$(".stad-info3").css("display","none");
		$(".stad-info4").css("display","none");
		$(".stad-info5").css("display","none");
		$(".stad-info6").css("display","none");
		$(".stad-info7").css("display","none");
		$(".stad-info8").css("display","none");
	});

	$("#stad3").click(function(){
		$(".stad-info3").show();
		$(".stad-info1").css("display","none");
		$(".stad-info2").css("display","none");
		$(".stad-info4").css("display","none");
		$(".stad-info5").css("display","none");
		$(".stad-info6").css("display","none");
		$(".stad-info7").css("display","none");
		$(".stad-info8").css("display","none");
	});

	$("#stad4").click(function(){
		$(".stad-info4").show();
		$(".stad-info1").css("display","none");
		$(".stad-info2").css("display","none");
		$(".stad-info3").css("display","none");
		$(".stad-info5").css("display","none");
		$(".stad-info6").css("display","none");
		$(".stad-info7").css("display","none");
		$(".stad-info8").css("display","none");
	});

	$("#stad5").click(function(){
		$(".stad-info5").show();
		$(".stad-info1").css("display","none");
		$(".stad-info2").css("display","none");
		$(".stad-info4").css("display","none");
		$(".stad-info3").css("display","none");
		$(".stad-info6").css("display","none");
		$(".stad-info7").css("display","none");
		$(".stad-info8").css("display","none");
	});

	$("#stad6").click(function(){
		$(".stad-info6").show();
		$(".stad-info1").css("display","none");
		$(".stad-info2").css("display","none");
		$(".stad-info4").css("display","none");
		$(".stad-info3").css("display","none");
		$(".stad-info5").css("display","none");
		$(".stad-info7").css("display","none");
		$(".stad-info8").css("display","none");
	});

	$("#stad7").click(function(){
		$(".stad-info7").show();
		$(".stad-info1").css("display","none");
		$(".stad-info2").css("display","none");
		$(".stad-info4").css("display","none");
		$(".stad-info3").css("display","none");
		$(".stad-info6").css("display","none");
		$(".stad-info5").css("display","none");
		$(".stad-info8").css("display","none");
	});

	$("#stad8").click(function(){
		$(".stad-info8").show();
		$(".stad-info1").css("display","none");
		$(".stad-info2").css("display","none");
		$(".stad-info4").css("display","none");
		$(".stad-info3").css("display","none");
		$(".stad-info6").css("display","none");
		$(".stad-info7").css("display","none");
		$(".stad-info5").css("display","none");
	});

	$(function(){
	  $("#syncing").click(function(){
	    var $d1 = $("#syncing");
	    var $d2 = $("body");
	    var $d3 = $(".modal");
	    $d1.addClass("spinEffect");
	    setTimeout(function(){ 
	    	$d1.removeClass("spinEffect");
	    	$d3.removeClass("in");
	    	$(".modal-backdrop").css("display","none")
	    },5000);
	  });
	});
});

