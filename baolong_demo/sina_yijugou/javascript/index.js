$(function() {
	//image_slider
	$('#image_slider').slides({
		preload : true,
		preloadImage : 'img/loading.gif',
		play : 5000,
		pause : 2500,
		hoverPause : true
	});
	
	$('#index_project001').jcarousel({
		vertical : true,
		scroll : 1,
		size : 3,
		auto : 7,
		delay:'4000',
		animation:'slow',
		//easing : 'easeOutExpo',
		wrap : 'circular'
	});
		


	$('#index_project002').jcarousel({
		vertical : true,
		scroll : 1,
		size : 3,
		auto : 4,
		delay:'1000',
		animation:'slow',
		//easing : 'easeOutExpo',
		wrap : 'circular'
	});
	$('#index_project003').jcarousel({
		vertical : true,
		scroll : 1,
		size : 3,
		auto : 4,
		delay:'1300',
		//easing : 'easeOutExpo',
		animation:'slow',
		wrap : 'circular'
	});
	$('#index_project004').jcarousel({
		
		rtl : true,
		scroll : 1,
		size : 3,
		auto : 7,
		delay:'7000',
		animation:'slow',
		//easing : 'easeOutExpo',
		wrap : 'circular'
	});
	$('#index_project005').jcarousel({
		
		rtl : true,
		scroll : 1,
		size : 3,
		auto : 7,
		delay:'7300',
		animation:'slow',
		//easing : 'easeOutExpo',
		wrap : 'circular'
	});
	$('#index_project006').jcarousel({
		scroll : 1,
		size : 3,
		auto : 7,
		delay:'4300',
		animation:'slow',
		//easing : 'easeOutExpo',
		wrap : 'circular'
	});
	$("a.building_page").fancybox({
		'width' : 897,
		'height' : 501,
		'autoDimensions' : false,
		'type': 'iframe'
	});

});
