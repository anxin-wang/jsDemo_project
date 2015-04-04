jQuery.scrollto = function(scrolldom,scrolltime) {
    var Url =window.location.href;
    var yHash = window.location.hash;
    var ySearch = window.location.search;
    var ySearchval = ySearch.substr(ySearch.length-3,3);
    var href = Url.substr((Url.length-3),3);
    var yHash2 = yHash.substr(yHash.length-1,1);

    if(!yHash && !ySearch){
        //$('.qa-item dd').hide();
        //console.log("1:"+Url.substring(0,Url.length-5)+yHash2);
    }else{
        if(ySearch){
            $(window).scrollTop(0);
            $('.qa-item dd').show();
            $(scrolldom).each(function(){
                if(ySearchval == $(this).attr('href').substr(1,3)){
                    $(this).addClass("active").parent("li").siblings().find('a').removeClass("active");
                }
            });
            console.log(href);
            console.log(ySearchval);

            var topVal = $('#'+ySearchval).position().top;

            $('.scroll-track').animate({top:-topVal+"px"},scrolltime);
            $('.qa-body').height($('#'+ySearchval).height());
        }else if(yHash){
            //window.location = window.location.pathname+'?=qa'+yHash2;
        }
    }

    $(scrolldom).each(function(i){
        $(this).click(function(){
            //if($(window).scrollTop() > 180){
            //    $(window).scrollTop(180);
            //}

            $(this).addClass("active").parent("li").siblings().find('a').removeClass("active");

            if($(this).attr("ySearchval") == '#qa0'){
                //$('.qa-item dd').slideUp();
                //$('.scroll-track').animate({top:0},scrolltime);
                //$('.qa-body').height(2960);
            }else{
                //$('.qa-item dd').show();
                //var topVal = $($(this).attr("href")).position().top;
                //$(".qa-body .qa-item").eq(i).show().siblings().hide();
                //$(".slide-bar").animate({top:(21+50*i+"px")},400);
                //$('.scroll-track').animate({top:-topVal+"px"},scrolltime);
                //$('.qa-body').height($($(this).attr('href')).height());
                //setTimeout($(window).scrollTop(topVal),scrolltime);
                //return false;
            }
        })
    });

};


$(function(){
    var $window = $(window);

    var nowTime = new Date();
    var thisHour = nowTime.getHours();
    if(thisHour < 9 || thisHour > 22 ){
        $(".work-status").hide();
    }

    if($(window).width()< 480){
        $(".bodybg-invite,.bodybg-earning").css("height",$(window).height());
        $(window).resize(function(){
            //console.log($(window).width()+"+"+$(window).height());
            $(".bodybg-invite,.bodybg-earning").css("height",$(window).height());
        })
    }

    // side bar
    //是头部的高度加头部与nav导航之间的距离。
    /*var topMain = 142;
     $(window).scroll(function(){
     if ($(window).scrollTop() > topMain){
     $(".catalog").addClass("fixed");
     } else {
     $(".catalog").removeClass("fixed");
     }
     });*/

});

//YLBshare.js
var ylbShare = (function(){
    //nav
    function ylb(){
        return 'http://www.core.com/';
    }
    function encode(str){
        return encodeURIComponent(str);
    }
    return {
        //share api
        // default
        skin : '',
        url : '',
        title : '',
        pic : '',
        qqZone : function(url,title,pic){
            window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + encode(url) + '&title=' + encode(title) + '&pics=' + pic);
        },
        sinaT : function(url,title,pic){
            window.open('http://v.t.sina.com.cn/share/share.php?url=' + encode(url) + '&title=' + encode(title) + '&pic=' + pic );
        },
        qqT : function(url,title,pic){
            window.open('http://v.t.qq.com/share/share.php?url=' + encode(url) + '&title=' + encode(title) + '&pic=' + pic);
        },
        renren : function(url){
            window.open('http://share.renren.com/share/buttonshare.do?link=' + encode(url) );
        },
        kaixin : function(url,title){
            window.open('http://www.kaixin001.com/repaste/share.php?rtitle=' + encode(title) + '&rurl=' + encode(url) );
        },
        douban : function(url,title){
            window.open("http://www.douban.com/recommend/?url=" + encode(url) + "&title=" + encode(title) );
        },
        baiduT : function(url,title){
            window.open("http://tieba.baidu.com/f/commit/share/openShareApi?url=" +  encode(url) + "&title=" + encode(title) );
        },
        //加入收藏方法
        addFav : function(){
            var favUrl = top.location.href;
            var favName = top.document.title;
            try{window.external.AddFavorite(favUrl,favName);}
            catch(e){
                try{window.sidebar.addPanel(favName,favUrl,"");}
                catch(e){alert("使用快捷键 Ctrl+D 或 Cmd+D 来收藏此页！");}
            }
        }
    }
})();


//行内line方法-短
function createLineShort(shareClass,shareUrl,shareTitle, sharePic){

    ylbShare.url = shareUrl;
    ylbShare.title = shareTitle;
    if( "undefined" === typeof sharePic) sharePic = "";
    ylbShare.pic = sharePic;
    //console.log(shareClass);
    //console.log(ylbShare.url);
    var lineBox = $("#"+shareClass);

    var shareLineHtml = '<li class=\"share-title\">分享到：</li>\
		<li><a class=\"share-qqZone\" href=\"javascript:\" onclick=\"ylbShare.qqZone(\'' + ylbShare.url + '\', \'' + ylbShare.title + '\', \'' + ylbShare.pic + '\')\" title=\"分享到QQ空间\">QQ空间</a></li>\
		<li><a class=\"share-sinaT\" href=\"javascript:\" onclick=\"ylbShare.sinaT(\'' + ylbShare.url + '\', \'' + ylbShare.title + '\', \'' + ylbShare.pic + '\')\" title=\"分享到新浪微博\">新浪微博</a></li>\
		<li><a class=\"share-qqT\" href=\"javascript:\" onclick=\"ylbShare.qqT(\'' + ylbShare.url + '\', \'' + ylbShare.title + '\', \'' + ylbShare.pic + '\')\" title=\"分享到腾讯微博\">腾讯微博</a></li>\
		<li><a class=\"share-renren\" href=\"javascript:\" onclick=\"ylbShare.renren(\'' + ylbShare.url + '\', \'' + ylbShare.title + '\', \'' + ylbShare.pic + '\')\" title=\"分享到人人网\">人人网</a></li>\
		<li><a class=\"share-kaixin\" href=\"javascript:\" onclick=\"ylbShare.kaixin(\'' + ylbShare.url + '\', \'' + ylbShare.title + '\', \'' + ylbShare.pic + '\')\" title=\"分享到开心网\">开心网</a></li>\
		<li><a class=\"share-douban\" href=\"javascript:\" onclick=\"ylbShare.douban(\'' + ylbShare.url + '\', \'' + ylbShare.title + '\', \'' + ylbShare.pic + '\')\" title=\"分享到豆瓣网\">豆瓣网</a></li>\
		<li><a class=\"share-baiduT\" href=\"javascript:\" onclick=\"ylbShare.baiduT(\'' + ylbShare.url + '\', \'' + ylbShare.title + '\', \'' + ylbShare.pic + '\')\" title=\"分享到百度贴吧\">百度贴吧</a></li>';

    lineBox.html('<ul class=\"share_line_ul clearfix\">' + shareLineHtml + '</ul>');
}

function oShow(id,artBoxwidth,artBoxtitle,isHTML,artBoxHeight){

    var artBoxH = $(id).height();
    if(artBoxH > 500) artBoxH = 500;
    var oLeft = ($(window).width() - artBoxwidth)/2;
    var offTop = ($(window).height() - artBoxH - 48)/2;
    //console.log($(id).html());

    if(isHTML){
        //console.log($(id).html());
        var bgObj = '<div class="artBox-overlay"></div>';
        offTop = ($(window).height() - artBoxHeight - 48)/2;
        $("body").append(bgObj);
        $("#"+id).show().css({width:artBoxwidth,left:oLeft,top:offTop});
        $(".artBox-body").css({height:artBoxHeight});
    }else{
        var bgObj = '<div class="artBox"><i class="artBox-close yicon" onclick="oClose();">&#xe631;</i><h3 class="artBox-title"></h3><div class="artBox-body">loading...</div></div><div class="artBox-overlay"></div>';
        $("body").append(bgObj);

        $(".artBox-title").html(artBoxtitle);
        if(!artBoxHeight){
            $(".artBox-body").css({height:artBoxH+40});
        }else{
            $(".artBox-body").css({height:artBoxHeight});
        }

        var offTop = ($(window).height() - $(".artBox-body").height() - 40)/2;

        $(".artBox").show().addClass("art_animated art_speed_fast art_ani_fadeIn2").css({width:artBoxwidth,left:oLeft,top:offTop}).find(".artBox-body").html($(id).html());

    }


    if ('undefined' == typeof(document.body.style.maxHeight)) {
        $(window).resize(onScroll);
        $(window).scroll(onScroll);
    }

    function onScroll(){
        var oLeft = ($(window).width()-artBoxwidth)/2;
        var offTop = ($(window).height()-$(id).height()-48)/2;
        $(".artBox").animate({top:offTop},{duration:200,queue:false});
        $(".artBox").animate({left:oLeft},{duration:200,queue:false});
    }
}

function oClose(){
    $(".artBox-overlay").remove();
    $(".pro-con").html("");
    $(".artBox").addClass("art_animated art_speed_fast art_ani_bounceOut").remove();
}
function AutoResizeImage (){
    $(".loading").hide();
    $(".card-item-con-pic").show();
}

function artSlide(el){
    var timer;
    var sideDom = $(el);
    function autoRun(){
        timer=setInterval(function(){
            lastHight=sideDom.find("li:last").height();
            sideDom.animate({marginTop:lastHight+3+"px"},1e3,function(){
                sideDom.find("li:last").prependTo(sideDom);
                sideDom.find("li:first").hide();
                sideDom.css({marginTop:0});
                sideDom.find("li:first").fadeIn(1e3);
            })
        },3e3)
    }
    autoRun();
    sideDom.hover(function(){
        clearInterval(timer)
    },function(){
        autoRun();
    });
}


