//¶¥²¿ÂÖ²¥
	var num=$('#num2'), pic=$('#pic2'), pic_title=$('#pic_title');
	var index=0, num_li=num.find('li'), pic=pic, pic_li=pic.find('li');
	var height=pic.find('li:first').height();
	pic_title.text(pic_li.eq(0).attr('data-title'));
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
		pic_title.text(pic_li.eq(index).attr('data-title'));
		pic.stop(true,false).animate({opacity:0.1},300,function(){
			$(this).css('top',-height*index+'px');
			$(this).animate({opacity:1},800);	
		});
		num.find('li').removeClass('on').eq(index).addClass('on');
	}
	
//
tab_fun($('#tab_menu8'),$('#tab_content8'),'mouseover');
tab_fun($('#tab_menu9'),$('#tab_content9'),'mouseover');
tab_fun($('#tab_menu10'),$('#tab_content10'),'mouseover');
tab_fun($('#tab_menu11'),$('#tab_content11'),'mouseover');
tab_fun($('#tab_menu12'),$('#tab_content12'),'mouseover');
tab_fun($('#tab_menu13'),$('#tab_content13'),'mouseover');
//Î¢²© Ìù°É
function Switching(prev,next,pic){
	var index=0 ,prev=prev ,next=next ,pic3=pic;
	var len=pic3.find('li').length;
	var width=pic3.find('li').width();
	
	next.click(function(){
		index+=1;
		if(index>=len){
			index=0;	
		}
		pic3.stop(true,false).animate({'left':-width*index+'px'},400);
	});
	prev.click(function(){
		index-=1;
		if(index<0){
			index=len-1;
		}
		pic3.stop(true,false).animate({'left':-width*index+'px'},400);
	});
};
Switching($('#prev'),$('#next'),$('#pic3'));
Switching($('#prev2'),$('#next2'),$('#pic4'));
Switching($('#prev3'),$('#next3'),$('#slide'));