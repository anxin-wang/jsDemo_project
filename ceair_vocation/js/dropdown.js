function $$$$$(_sId) {
    return document.getElementById(_sId);
}

function hide(evt, _sId) {
    evt.stopPropagation ? evt.stopPropagation() : evt.cancelBubble = true;
    $$$$$(_sId).style.display = $$$$$(_sId).style.display == "none" ? "" : "none";
}

function hideAll(_sId) {
    $$$$$(_sId).style.display = "none";
}

function pick(evt, v,img) {
    document.getElementById('language_text').value = v;
    document.getElementById('language_img').src = "images/flags/"+img+".png";
    hide(evt, 'HMF-1')
}

function bgcolor(id) {
    document.getElementById(id).style.background = "#4e7321";
    document.getElementById(id).style.color = "#fff";
}

function nocolor(id) {
    document.getElementById(id).style.background = "";
    document.getElementById(id).style.color = "#333";
}
hideAll('HMF-1');

$(".dropdown").hover(function(){
    $(this).children(".dropdown-menu").show();
},function(){
    $(this).children(".dropdown-menu").hide();
})
$(".dropdown .dropdown-menu span").click(function(){
    $(this).parent().siblings('.dropdown-trigger').find('#language_text').val($(this).attr("data-language"))
    $(this).parent().siblings('.dropdown-trigger').find('#language_img').attr("src","images/flags/"+$(this).attr("data-pic")+".png")
    $(this).parent().hide()
})
$(".dropdown.customer ul.dropdown-menu li a").click(function(e){
    e.preventDefault();
    $(this).parents("ul.dropdown-menu").siblings('.dropdown-trigger').find("span").text($(this).text())

    $(this).parents("ul.dropdown-menu").hide()
})
$(".dropdown.yuding_jingjia ul.dropdown-menu li a").click(function(e){
    e.preventDefault();
    var text=$(this).text();
    if(text=="预定销售价"){
        $(".pay .prise").hide();
        $(".pay .customer_container").hide();
        $(".pay .commission.prise").show();


    }else{
        $(".pay .prise").show();
        $(".pay .customer_container").show();
        $(".pay .commission.prise").hide();

    }
    $(this).parents("ul.dropdown-menu").siblings('.dropdown-trigger').find("span").text(text)

    $(this).parents("ul.dropdown-menu").hide()
})
$(".dropdown.yuding_shuliang ul.dropdown-menu li a").click(function(e){
    e.preventDefault();
    $(this).parents("ul.dropdown-menu").siblings('.dropdown-trigger').find("span").text($(this).text())

    $(this).parents("ul.dropdown-menu").hide()
})

