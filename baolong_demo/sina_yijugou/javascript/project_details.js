$(function() {
	$("a#project-intro").fancybox({
		'width' : '897',
		'height' : '491',
		'autoDimensions' : false
	});
	$("a#project-traffic").fancybox({
		'width' : '897',
		'height' : '491',
		'autoDimensions' : false
	});
	$("a#project-business-position").fancybox({
		'width' : '897',
		'height' : '491',
		'autoDimensions' : false
	});
	$("a#project-intro-video").fancybox({
		'width' : 897,
		'height' : 501,
		'autoDimensions' : false,
		'type': 'iframe'
	});
	$("a[rel=room-type-drawing]").fancybox({
		'width' : '897',
		'height' : '491',
		'autoDimensions' : false,
		'transitionIn' : 'none',
		'transitionOut' : 'none'
	});
	$("a[rel=business-room-type-drawing]").fancybox({
		'width' : '897',
		'height' : '491',
		'autoDimensions' : false,
		'transitionIn' : 'none',
		'transitionOut' : 'none'
	});
	$("a[rel=house-room-type-drawing]").fancybox({
		'width' : '897',
		'height' : '491',
		'autoDimensions' : false,
		'transitionIn' : 'none',
		'transitionOut' : 'none'
	});
	$("a[rel=facilities]").fancybox({
		'width' : '897',
		'height' : '491',
		'autoDimensions' : false,
		'transitionIn' : 'none',
		'transitionOut' : 'none'
	});
	$("a[rel=project-landscape]").fancybox({
		'width' : '897',
		'height' : '491',
		'autoDimensions' : false,
		'transitionIn' : 'none',
		'transitionOut' : 'none'
	});
	$("a[rel=project-general-business-position]").fancybox({
		'width' : '897',
		'height' : '491',
		'autoDimensions' : false,
		'transitionIn' : 'none',
		'transitionOut' : 'none'
	});
	
	$('#project-intro-slides').jcarousel({
		vertical : true,
		scroll : 1,
		size : 3,
		auto : 3,
		animation : 'slow',
		//easing : 'easeOutExpo',
		wrap : 'circular'
		//itemLoadCallback :itemLoadCallbackFunction
	});
	$('#project-news-slides').jcarousel({
		vertical : true,
		scroll : 1,
		size : 3,
		auto : 3,
		animation : 'slow',
		//easing : 'easeOutExpo',
		wrap : 'circular'
	});
	$('#project-business-position-slides').jcarousel({
		vertical : true,
		scroll : 1,
		size : 3,
		auto : 3,
		animation : 'slow',
		//easing : 'easeOutExpo',
		wrap : 'circular'
	});
	$('#project-general-business-position-slides').jcarousel({
		scroll : 1,
		size : 3,
		auto : 3,
		delay : '4000',
		animation : 'slow',
		//easing : 'easeOutExpo',
		wrap : 'circular'
	});
	$('#project-landscape-slides').jcarousel({
		vertical : true,
		scroll : 1,
		size : 3,
		auto : 3,
		delay : '4000',
		animation : 'slow',
		//easing : 'easeOutExpo',
		wrap : 'circular'
	});
}); 