
//通用tab
function tab_fun(tab_menu,tab_content,events){
	tab_menu.find('.menu-box').each(function(index){
		$(this).bind(events,function(){
			$(this).addClass('on').siblings().removeClass('on');
			tab_content.find('.tab-box').eq(index).addClass('on').siblings().removeClass('on');
		})
	});
}
tab_fun($('#tab_menu3'),$('#tab_content3'),'mouseover');
tab_fun($('#tab_menu4'),$('#tab_content4'),'mouseover');

function tab_fun2(tab_menu,tab_content,events){
	tab_menu.find('.menu-box').each(function(index){
		$(this).bind(events,function(){
			$(this).addClass('active').siblings().removeClass('active');
			tab_content.find('.inner-box').removeClass('active').eq(index).addClass('active');
		})
	});
}
tab_fun2($('#tab_menu6'),$('#tab_content6'),'click');
tab_fun2($('#tab_menu7'),$('#tab_content7'),'click');


$('.tab-menu5').each(function(index){
	var that=$(this);
	that.find('.menu-box').each(function(index, element) {
		$(this).mouseover(function(){
			$(this).addClass('active').siblings().removeClass('active');
			that.siblings('.tab-content5').find('.inner-box').removeClass('active').eq(index).addClass('active');
		});            
	});
});


//开服tab
function tab(outer){
	var menu=outer.find('.tab-menu');
	var content=outer.find('.tab-content');
	menu.find('li').each(function(index){
		$(this).mouseover(function(){
			if(index==0){
				menu.removeClass('active');
			}else if(index==1){
				menu.addClass('active');	
			}
			$(this).addClass('on').siblings().removeClass('on');
			content.find('.tab-box').eq(index).addClass('on').siblings().removeClass('on');
		});
	});
}
tab($('#tab_1'));
tab($('#tab_2'));

//游戏大全
(function(){
	var g=$('#PPSGameDaquan'),gl=$('#gameDaquan'),cur=0;
	g.mouseover(function(){
		$(this).addClass('active');
		gl.removeClass('open');
		gl.find('.unexpand').show();
		gl.show();
		
	});
	gl.hover(function(event){
			event.stopPropagation();
			gl.show();
			gl.find('.moreBtn').click(function(){
				gl.addClass('open');
				gl.find('.unexpand').hide();
			});
		},function(event){
			event.stopPropagation();
			gl.hide();
			gl.find('.moreBtn').unbind('click');
		});
		
	gl.bind("selectstart",function(){return false;}); //ie下禁用文字选择
	g.mouseout(function(){
		$(this).removeClass('active');
		gl.removeClass('open');
		gl.find('.unexpand').show();
		gl.hide();
	});
	gl.find('.item').each(function(i){
		$(this).mouseover(function(event){
			event.stopPropagation();
			if(i!=cur){
				$(this).addClass('itemOn');
				$(gl.find('.item')[cur]).removeClass('itemOn');
				cur=i;
			}
		});
	});
})();

//qq提醒
var remind=$('.remind');
remind.hover(function(){
	$(this).addClass('r-show');
},function(){
	$(this).removeClass('r-show')
});
function qqRemindEvent(eventName,eventUrl,time,advance,id){
    var uniqid = "17986"+"_"+id;
    QQReminder.query.isSet(1500001013,1001,'DD5127A085A9536885596EC8765D3BF1',uniqid,function(isSet){
        if(isSet){
            G.ui.popup.showMsg('您已经添加过该提醒');
        }else{
            QQReminder.dialog.addRemind(1500001013,1001,'DD5127A085A9536885596EC8765D3BF1',uniqid,{params:{
                begin: time,
                advance:advance,
                editable:0,
                dateedit:0,
                timeedit:0,
                eventUrl: eventUrl,
                eventName:eventName
            }
            },{hasNoBg:0});
        }
    });
}
remind.click(function(){
	var title=$(this).attr('data-title'),
		address=$(this).attr('data-href'),
		time=$(this).attr('data-time');
	qqRemindEvent(title,address,time,5,3);return false;
});


//礼包页面
function scrolling(dom){
	function repeat(){
		var libao_list=dom;
		var li_height=libao_list.find(':first-child').height();
		libao_list.animate({marginTop:-li_height},300,function(){
			libao_list.find('li:first').appendTo(libao_list);
			libao_list.css('margin-top',0);
		});
	}
	setInterval(repeat,3000);
}
scrolling($('#libao_list'));

//登录弹窗关闭
$('#close').click(function(){
	$('#login_dialog').hide(300);
});