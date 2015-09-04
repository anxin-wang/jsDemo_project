//点击弹出二级菜单

$(function(){

	$('.all-goods .item').hover(function(){
		$(this).addClass('active').find('s').hide();
		$(this).find('.product-wrap').show();
	},function(){
		$(this).removeClass('active').find('s').show();
		$(this).find('.product-wrap').hide();
	});
	});

//breeze的三张图片切换
$(function () {
    var sWidth = $("#ak-EIP-home-left-breeze-focus").width();
    var len = $("#ak-EIP-home-left-breeze-focus ul li").length;
    var index = 0;
    var picTimer;
    var btn = "<div class='btnBg'></div><div class='btn'>";
    for (var i = 0; i < len; i++) {
        btn += "<span></span>";
    }
    btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
    $("#ak-EIP-home-left-breeze-focus").append(btn);
    $("#ak-EIP-home-left-breeze-focus .btnBg").css("opacity", 0);
    $("#ak-EIP-home-left-breeze-focus .btn span").css("opacity", 0.4).mouseenter(function () {
        index = $("#ak-EIP-home-left-breeze-focus .btn span").index(this);
        showPics(index);
    }).eq(0).trigger("mouseenter");
    $("#ak-EIP-home-left-breeze-focus .preNext").css("opacity", 0.0).hover(function () {
        $(this).stop(true, false).animate({ "opacity": "0.5" }, 300);
    }, function () {
        $(this).stop(true, false).animate({ "opacity": "0" }, 300);
    });
    $("#ak-EIP-home-left-breeze-focus .pre").click(function () {
        index -= 1;
        if (index == -1) { index = len - 1; }
        showPics(index);
    });
    $("#ak-EIP-home-left-breeze-focus .next").click(function () {
        index += 1;
        if (index == len) { index = 0; }
        showPics(index);
    });
    $("#ak-EIP-home-left-breeze-focus ul").css("width", sWidth * (len));
    $("#ak-EIP-home-left-breeze-focus").hover(function () {
        clearInterval(picTimer);
    }, function () {
        picTimer = setInterval(function () {
            showPics(index);
            index++;
            if (index == len) { index = 0; }
        }, 4000);
    }).trigger("mouseleave");
    function showPics(index) {
        var nowLeft = -index * sWidth;
        $("#ak-EIP-home-left-breeze-focus ul").stop(true, false).animate({ "left": nowLeft }, 300);
        $("#ak-EIP-home-left-breeze-focus .btn span").stop(true, false).animate({ "opacity": "0.4" }, 300).eq(index).stop(true, false).animate({ "opacity": "1" }, 300);
    }
});


//search
 
 $(function(){
	 $(".ak-EIP-home-right-top-search input").focus(function(){
		 $(this).val("");
		 });
	$(".ak-EIP-home-right-top-search input").blur(function(){
		if($(this).val()==""){
		 $(this).val("search");
		}
		 });
	 });