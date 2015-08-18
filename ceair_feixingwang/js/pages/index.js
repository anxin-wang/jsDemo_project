$('.index-slider').bxSlider();
$('.menu-list').hover(function () {
    $(this).find('ul').show()
}, function () {
    $(this).find('ul').hide()
})
$(".product-list li").hover(function () {
    $(this).addClass("hover")
}, function () {
    $(this).removeClass("hover")
})
$(".product-list li").click(function (e) {
    e.preventDefault();
    var item = $(this);
    var tab = $(this).find("a").attr("href") + "";
    item.siblings().removeClass("selected")
    item.parent().siblings().children("li").removeClass("selected")
    item.addClass("selected");
    $(tab).siblings().hide();
    $(tab).show();
})

//数据与新闻切换
$("#btn-show-webdata").click(function (e) {
    e.preventDefault();
    var $notice = $("#notice");
    var width = $notice.width()
    $notice.animate({
        right: "+=" + width
    }, 500);
    $("#web-data").animate({
        left: "-=" + width
    }, 500);
})

$("#btn-show-newest").click(function (e) {
    e.preventDefault();
    var $notice = $("#notice");
    var width = $notice.width()
    $notice.animate({
        right: "-=" + width
    }, 500);
    $("#web-data").animate({
        left: "+=" + width
    }, 500);
})

$("#wechat-public-code,#android-app-download,#apple-app-download").hover(function () {
    $(this).siblings().show();
}, function () {
    $(this).siblings().hide();
});
if (!$.support.leadingWhitespace) {
    $(".ranking .table tr:nth-child(1) td .icon-cup").css('background-position', '-24px -33px');
    $(".ranking .table tr:nth-child(2) td .icon-cup").css('background-position', '-24px -75px');
    $(".ranking .table tr:nth-child(3) td .icon-cup").css('background-position', '-24px -117px');
}
/*var touzi_option={
 success: "valid",
 rules: {
 cash: {
 required: true,
 money:true
 }
 },
 messages: {
 cash: {
 required: "请输入您要投资的金额",
 money:"金额为100的整数倍"
 }
 },
 errorElement:'span',
 errorClass: "msg-error",
 validClass: "valid"
 };
 var yinlibao_touzi_option={
 success: "valid",
 rules: {
 cash: {
 required: true,
 money_1000:true
 }
 },
 messages: {
 cash: {
 required: "请输入您要投资的金额",
 money_1000:"金额为1000的整数倍"
 }
 },
 errorElement:'span',
 errorClass: "msg-error",
 validClass: "valid"
 };
 $("#qilibaoform").validate(touzi_option);
 $("#fanglibaoform").validate(touzi_option);
 $("#chelibaoform").validate(touzi_option);
 $("#zulibaoform").validate(touzi_option);
 $("#huolibaoform").validate(touzi_option);
 $("#yinglibaoform").validate(yinlibao_touzi_option);
 */