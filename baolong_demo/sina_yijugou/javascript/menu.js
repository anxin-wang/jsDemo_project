$(function(){
	//menu hover
	$("ul#menu-levelone li").hover(function(){
		$("ul#menu-leveltwo",this).show();
	},function(){
		$("ul#menu-leveltwo",this).hide();
	})
	$("ul#menu-leveltwo li").hover(function(){
		$("ul.menu-levelthree",this).show();
		//for ie6
		$(this).parent().prev().addClass("selected");
	},function(){
		$("ul.menu-levelthree",this).hide();
		//for ie6
		$(this).parent().prev().removeClass("selected");
	})
	//for ie6
	$("ul.menu-levelthree li").hover(function(){
		
		$(this).parent().prev().addClass("selected");
	},function(){
		$(this).parent().prev().removeClass("selected");
	})
});