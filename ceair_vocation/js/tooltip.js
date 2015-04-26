// 基于JQ的tooltip切换插件
// 创建一个闭包     
(function($) {     
  //插件主要内容     
  $.fn.tooltip = function(options) {     
    // 处理默认参数   
    var opts = $.extend({}, $.fn.tooltip.defaults, options); 
    return this.each(function() {
		var  that=$(this),
	         $tooptipText =($(this).attr("data-text")==undefined?"暂无公告":$(this).attr("data-text")),
		     $tooptiplacement =($(this).attr("data-place")==undefined?"bottom":$(this).attr("data-place")),
             $tooptipTop =($(this).attr("data-top")==undefined?"auto":$(this).attr("data-top")),
             $tooptipLeft = ($(this).attr("data-left")==undefined?"auto":$(this).attr("data-left")),
			 $tooptipBottom =($(this).attr("data-bottom")==undefined?"auto":$(this).attr("data-bottom")),
             $tooptipRight = ($(this).attr("data-right")==undefined?"auto":$(this).attr("data-right")),
			 $tooptipTrigger = ($(this).attr("data-trigger")==undefined?"click":$(this).attr("data-trigger")),
			 $tooptipWidth = ($(this).attr("data-width")==undefined?"auto":$(this).attr("data-width"));
			 if($tooptipTrigger=="click"){
				 console.log("ddd")
				  $(this).toggle(function(){
					  place();
					  console.log("ccc")
					  },function(){
					  console.log("aaa")
				      $(this).siblings(".tooltip").remove();
				});
			  };
			   if($tooptipTrigger=="hover"){
				  $(this).hover(function(){
				       place();
				},function(){
				  $(this).siblings(".tooltip").remove();
				}); 
			  };
			  function place(){		  				 
				  if($tooptiplacement=="top"){
					    that.after('<div class="tooltip '+$tooptiplacement+'" style="bottom:'+$tooptipBottom+';left:'+$tooptipLeft+';width:'+$tooptipWidth+'"><em class="arrow"></em><div class="tooltip-content"> '+$tooptipText+'</div></div>');
					  }
				  if($tooptiplacement=="left"){
					    that.after('<div class="tooltip '+$tooptiplacement+'" style="top:'+$tooptipTop+';right:'+$tooptipRight+';width:'+$tooptipWidth+'"><em class="arrow"></em><div class="tooltip-content"> '+$tooptipText+'</div></div>');
					  }
				  if($tooptiplacement=="bottom"||$tooptiplacement=="right"){
					   that.after('<div class="tooltip '+$tooptiplacement+'" style="top:'+$tooptipTop+';left:'+$tooptipLeft+';width:'+$tooptipWidth+'"><em class="arrow"></em><div class="tooltip-content"> '+$tooptipText+'</div></div>');
					  }
					   that.siblings(".tooltip").fadeIn();
				  };
	}); 
    // 保存JQ的连贯操作结束
  };
	//插件主要内容结束    
// 闭包结束     
})(jQuery); 