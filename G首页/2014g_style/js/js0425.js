

/*//document.domain = 'pps.tv';
var ie;
var firefox;
if (document.all) ie = true; else ie = false; //�ж��Ƿ�IE
document.onkeydown = KeyPress;
//���ü����¼�����
function KeyPress(){
	var key;
	if (ie) key = event.keyCode;
	//Ieʹ��event.keyCode��ȡ������
 	else
    	key = KeyPress.arguments[0].keyCode;
//FireFoxʹ�����Ƕ���ļ��̺�����arguments[0].keyCode����ȡ������
 	if(key == 13){
		PPSGameLogin.login();
 	}
}

function AddFavorite(sURL, sTitle)
{
    try
    {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e)
    { 
        try
        {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e)
        {
            alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������");
        }
    }
}
*/
//ͨ��tab
function tab_fun(tab_menu,tab_content,events){
	tab_menu.find('.menu-box').each(function(index){
		$(this).bind(events,function(){
			$(this).addClass('on').siblings().removeClass('on');
			tab_content.find('.tab-box').eq(index).addClass('on').siblings().removeClass('on');
		})
	});
}
tab_fun($('#tab_menu3'),$('#tab_content3'),'mouseover');
tab_fun($('#tab_menu4'),$('#tab_content4'),'click');

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
			that.siblings('.game-info').find('.inner-box').removeClass('active').eq(index).addClass('active');
		});            
	});
});

//�ֲ�ͼ
function slide(pic,num){
	var index=0, num_li=num.find('li'), pic=pic;
	var height=pic.find('li:first').height();
	function circle(){
		var len=pic.find('li').length;
		index++;
		if(index==len){
		   index=0;	
		}
		showimg(index);
	}
	var tt=setInterval(circle,4000);
	num_li.mouseover(function(){
		clearInterval(tt);
		index=num_li.index(this);
		showimg(index);
	}).mouseleave(function(){
		tt=setInterval(circle,4000)	
	})
	function showimg(index){		
		pic.stop(true,false).animate({opacity:0.1},300,function(){
			$(this).css('top',-height*index+'px');
			$(this).animate({opacity:1},800);	
		});
		num.find('li').removeClass('on').eq(index).addClass('on');
	}
};
slide($('#pic'),$('#num'));

//����tab
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

//��ҳ��ά��
var qr=$('#qr'),qr_pic=$('#qr_pic');
qr.hover(function(){
	qr_pic.show(100);
},function(){
	qr_pic.hide(100);
});

//��Ϸ��ȫ
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
		
	gl.bind("selectstart",function(){return false;}); //ie�½�������ѡ��
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

//qq����
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
            G.ui.popup.showMsg('���Ѿ���ӹ�������');
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
	var id ='r_'+ $(this).index('.remind');
	var title=$(this).attr('data-title'),
		address=$(this).attr('data-href'),
		time=$(this).attr('data-time');
	qqRemindEvent(title,address,time,5,id);return false;
});

//��Ϸ��ȫ
function slide2(pic,num){
	var index=0, num_li=num.find('li'), pic=pic;
	var height=pic.find('li:first').height();
	function circle(){
		var len=pic.find('li').length;
		index++;
		if(index==len){
		   index=0;	
		}
		showimg(index);
	}
	num_li.mouseover(function(){
		index=num_li.index(this);
		showimg(index);
	}).mouseleave(function(){
	})
	function showimg(index){		
		pic.stop(true,false).animate({opacity:0.1},300,function(){
			$(this).css('top',-height*index+'px');
			$(this).animate({opacity:1},800);	
		});
		num.find('li').removeClass('on').eq(index).addClass('on');
	}
};

var tab_menu2=$('#tab_menu2'), tab_content2=$('#tab_content2');
tab_menu2.find('a').each(function(index, element) {
    $(this).mouseover(function(){
		$(this).addClass('on').siblings('a').removeClass('on');
		tab_content2.find('.tab-box').eq(index).addClass('on').siblings().removeClass('on');
	});
});


var pic2=$('.pic2'), num2=$('.num2');
pic2.each(function(index, element){
	var this_pic=pic2.eq(index);
	if(this_pic.find('li').length<2){
		return;
	}
	var this_num=num2.eq(index);
	slide2(this_pic,this_num);
});


//�����Ƽ�
$(".down div").hover(
	function(){
		if(!$(this).children('a').hasClass('down-disabled')){
			$(this).find(".erWei").addClass("add")
		}	
      },function() {
	 $(this).find(".erWei").removeClass("add")
      });
	$(".phoneGame .img").hover(function() {
        $(this).parent().find(".big").addClass("show");
        $(this).parent().css("z-index", "4");

    },function() {
        $(this).parent().find(".big").removeClass("show");
		$(this).parent().css("z-index", "1");
});
var phoneGame=$('.phoneGame');
phoneGame.find('li').each(function(index, element) {
    if(index>2){
		$(this).addClass('remove-line');	
	}
});

//���ҳ��
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

//��¼�����ر�
$('#close').click(function(){
	$('#login_dialog').hide(300);
});

$('.close-tip').click(function(){
	$(this).closest('.bind-tip').hide(300);
});

//�ײ�֤��
$('#z_1').click(function(){
	$('#z1').show();
	$('#mask').show();
});
$('#z_2').click(function(){
	$('#z2').show();
	$('#mask').show();
});
$('.zheng,#mask').click(function(){
	$('.zheng,#mask').hide();
});