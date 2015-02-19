// 基于JQ的图片切换插件    
;(function($){    
   //插件主要内容 
  $.fn.tab = function(options) { 
    // 处理默认参数   
    var opts = $.extend({}, $.fn.tab.defaults, options);
	//初始条件构造  
	var $tabM=$(this).find(opts.tabM);
	var _num=$tabM.length;
	var _scrollHeight=$tabM.eq(0).height();//垂直滚动的高度
	var _scrollWidth=$tabM.eq(0).width();//水平滚动的宽度
	var $targetLi,_scrollWH,_autoPlay,_stop = false,_index=0;
	if(opts.effect=="scrollY")
	{
		_scrollWH=_scrollHeight;
		$tabM.parent().css({"height":_num*_scrollHeight});
		$tabM.parent().css({"position":"absolute"});
	}else if(opts.effect=="scrollX")
		{
			_scrollWH=_scrollWidth;
			$tabM.parent().css({"width":_num*_scrollWidth,"position":"absolute"});
			$tabM.css({"float":"left","display":"inline-block"});
		}
	 else if(opts.effect=="fade")
		{
		 	$tabM.css({"display":"none","position":"absolute","z-index":"0"}).eq(0).css({"display":"block","z-index":"50"});
		}		 
	//保存JQ的连贯操作
    return this.each(function() {
		   //导航构造
		  var $this=$(this);
		  $targetLi=$(this).find(opts.tabN);
		  //行为添加
		  if(opts.eventType=="hover"){
			$targetLi.mouseenter(function()
			{
			  _index=$targetLi.index(this);
			  $.fn.tab.effect[opts.effect]($tabM,$targetLi,_index,_scrollWH, opts);
			}).eq(0).mouseenter();
		  }
		   if(opts.eventType=="click"){
			$targetLi.click(function()
			{
			  _index=$targetLi.index(this);
			  $.fn.tab.effect[opts.effect]($tabM,$targetLi,_index,_scrollWH, opts);
			});
		  }
		
		  
		  if(opts.autoPlay) 
		  {
			 _autoPlay = setInterval(autoPlayHandle,opts.autoPlayTimer);
			 $this.hover(function(){
					clearAutoPlay();
				},function(){
					clearAutoPlay();
					_autoPlay=setInterval(autoPlayHandle,opts.autoPlayTimer);
				});
		  }
			
		  function clearAutoPlay()
		  {
			  if(_autoPlay){clearInterval(_autoPlay);}
		  }
			
		  function autoPlayHandle()
		  {
			  $.fn.tab.effect[opts.effect]($tabM,$targetLi,_index,_scrollWH,opts);
			  _index=(_index+1)% _num;
		  }
		  //arrow
		  if(opts.arrow){
			$(this).append('<div class="tab-controls-direction"><a class="tab-prev" href="javascript:;"><i class="yicon-angleleft"></i></a><a class="tab-next"               href="javascript:;"><i class="yicon-angleright"></i></a></div>')
			}
			
			$(".tab-prev").click(function(){
				  clearAutoPlay();
				  if(!$tabM.is(":animated"))
				  {
					  _index=$targetLi.index($("."+opts.currentClass,$this)[0]);
					  if(_index==0)
					  {
						  _index=_num-1;
					  }else{_index=(_index-1)% _num;}
					  $.fn.tab.effect[opts.effect]($tabM,$targetLi,_index,_scrollWH,opts);			
				  }
			});

		  
			  $(".tab-next").click(function(){
				  	clearAutoPlay();
			  		if(!$tabM.is(":animated"))
			  		{
						_index=$targetLi.index($("."+opts.currentClass,$this)[0]);
						_index=(_index+1)% _num;
						$.fn.tab.effect[opts.effect]($tabM,$targetLi,_index,_scrollWH,opts);			
					}
			  });

		     					
    }); 
	
  };
  //插件主要内容结束 		
    
  // 插件的defaults     
  $.fn.tab.defaults = {     
        tabM:'.tab-m ul',
		tabN:'.tab-n li',
		currentClass:'on',
		autoPlay:false,
		arrow:false,
		eventType:'click',
		autoPlayTimer:3000,
		effect:'fade'
  }; 
  // 插件的defaults参数结束
  // 动作效果
   $.fn.tab.effect=
   {
		scrollY:function(contentObj,tabN,i,slideH,opts,callback){
			contentObj.parent().stop().animate({"top":-i*slideH},opts.speed,callback);
				tabN.eq(i).addClass(opts.currentClass).siblings().removeClass(opts.currentClass);
		},
		scrollX:function(contentObj,tabN,i,slideW,opts,callback){
			contentObj.parent().stop().animate({"left":-i*slideW},opts.speed,callback);
				tabN.eq(i).addClass(opts.currentClass).siblings().removeClass(opts.currentClass);
		},
		fade:function(contentObj,tabN,i,slideW,opts,callback){
			contentObj.eq(i).css("z-index","50").fadeIn().siblings().css("z-index","0").fadeOut();
			tabN.eq(i).addClass(opts.currentClass).siblings().removeClass(opts.currentClass); 
		}		
  };        
  // 动作效果结束
})(jQuery);
//闭包结束