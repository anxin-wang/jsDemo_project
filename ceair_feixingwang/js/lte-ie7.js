/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	//window.onload = function(){
	//	var eye = document.getElementById('yicon-eye');
	//	eye.innerHTML = '&#xe652;';
	//};

	//location
	//var yiconcode = document.getElementsByClassName('code');
	//var yiconclass = document.getElementsByClassName('name');
	//for(j = 0; j<yiconcode.length; j++ ){
	//	console.log(j,yiconcode[j].innerHTML,yiconclass[j].innerHTML);
	//	document.write("'yicon-"+yiconclass[j].innerHTML+"': '"+yiconcode[j].innerHTML+"',<br>")
	//}
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<i style="font-family:\'ylbfont\'">' + entity + '</i>' + html;
	}
	var yicons = {
		'yicon-angle-double-right': '&#xe600;',
		'yicon-angle-double-up': '&#xe601;',
		'yicon-angle-down': '&#xe602;',
		'yicon-angle-left': '&#xe603;',
		'yicon-angle-right': '&#xe604;',
		'yicon-angle-up': '&#xe605;',
		'yicon-apple': '&#xe606;',
		'yicon-arrow-left': '&#xe607;',
		'yicon-arrow-right': '&#xe608;',
		'yicon-attach': '&#xe609;',
		'yicon-attention-circled': '&#xe60a;',
		'yicon-auction': '&#xe60b;',
		'yicon-bubble': '&#xe60c;',
		'yicon-bubbles': '&#xe60d;',
		'yicon-alipay': '&#xe60e;',
		'yicon-android': '&#xe60f;',
		'yicon-angle-double-down': '&#xe610;',
		'yicon-angle-double-left': '&#xe611;',
		'yicon-chart3': '&#xe612;',
		'yicon-chat': '&#xe613;',
		'yicon-check': '&#xe614;',
		'yicon-check2': '&#xe615;',
		'yicon-checkbook': '&#xe616;',
		'yicon-check-empty': '&#xe617;',
		'yicon-clock': '&#xe618;',
		'yicon-close': '&#xe619;',
		'yicon-cog': '&#xe61a;',
		'yicon-comments': '&#xe61b;',
		'yicon-credit': '&#xe61c;',
		'yicon-bubbles2': '&#xe61d;',
		'yicon-bubbles3': '&#xe61e;',
		'yicon-calculate': '&#xe61f;',
		'yicon-camera': '&#xe620;',
		'yicon-cancel-circled-outline': '&#xe621;',
		'yicon-chart': '&#xe622;',
		'yicon-chart2': '&#xe623;',
		'yicon-dot2': '&#xe624;',
		'yicon-easel': '&#xe625;',
		'yicon-edit': '&#xe626;',
		'yicon-exchange': '&#xe627;',
		'yicon-eye': '&#xe628;',
		'yicon-eye-off': '&#xe629;',
		'yicon-fail': '&#xe62a;',
		'yicon-file-text': '&#xe62b;',
		'yicon-finder': '&#xe62c;',
		'yicon-fire': '&#xe62d;',
		'yicon-font-ding': '&#xe62e;',
		'yicon-font-huo': '&#xe62f;',
		'yicon-font-ying': '&#xe630;',
		'yicon-cross': '&#xe631;',
		'yicon-cube': '&#xe632;',
		'yicon-data': '&#xe633;',
		'yicon-data2': '&#xe634;',
		'yicon-database': '&#xe635;',
		'yicon-ding-circle': '&#xe636;',
		'yicon-dot': '&#xe637;',
		'yicon-invest': '&#xe638;',
		'yicon-key': '&#xe639;',
		'yicon-keyboard': '&#xe63a;',
		'yicon-library': '&#xe63b;',
		'yicon-gift': '&#xe63c;',
		'yicon-graduate': '&#xe63d;',
		'yicon-group': '&#xe63e;',
		'yicon-guide': '&#xe63f;',
		'yicon-heart': '&#xe640;',
		'yicon-heart-empty': '&#xe641;',
		'yicon-help': '&#xe642;',
		'yicon-history-bill': '&#xe643;',
		'yicon-home': '&#xe644;',
		'yicon-huo-circle': '&#xe645;',
		'yicon-open': '&#xe646;',
		'yicon-passwd': '&#xe647;',
		'yicon-pause': '&#xe648;',
		'yicon-phone': '&#xe649;',
		'yicon-phonecharge': '&#xe64a;',
		'yicon-phone-circled': '&#xe64b;',
		'yicon-phone-squared': '&#xe64c;',
		'yicon-list': '&#xe64d;',
		'yicon-logo': '&#xe64e;',
		'yicon-loop': '&#xe64f;',
		'yicon-mail-1': '&#xe650;',
		'yicon-minus': '&#xe651;',
		'yicon-mobile': '&#xe652;',
		'yicon-money': '&#xe653;',
		'yicon-money-box': '&#xe654;',
		'yicon-money-box-fill': '&#xe655;',
		'yicon-ok': '&#xe656;',
		'yicon-ok-circle': '&#xe657;',
		'yicon-renren': '&#xe658;',
		'yicon-reply': '&#xe659;',
		'yicon-share': '&#xe65a;',
		'yicon-shield': '&#xe65b;',
		'yicon-picture': '&#xe65c;',
		'yicon-pie': '&#xe65d;',
		'yicon-plane': '&#xe65e;',
		'yicon-play-circle-outline': '&#xe65f;',
		'yicon-plus': '&#xe660;',
		'yicon-presentation': '&#xe661;',
		'yicon-profile': '&#xe662;',
		'yicon-profile2': '&#xe663;',
		'yicon-profile3': '&#xe664;',
		'yicon-qq': '&#xe665;',
		'yicon-qq2': '&#xe666;',
		'yicon-qrcode': '&#xe667;',
		'yicon-recommend': '&#xe668;',
		'yicon-recycle': '&#xe669;',
		'yicon-upload': '&#xe66a;',
		'yicon-us': '&#xe66b;',
		'yicon-user': '&#xe66c;',
		'yicon-shuffle': '&#xe66d;',
		'yicon-shuffle2': '&#xe66e;',
		'yicon-sitemap': '&#xe66f;',
		'yicon-sitemap2': '&#xe670;',
		'yicon-speech-bubble': '&#xe671;',
		'yicon-spinner': '&#xe672;',
		'yicon-star': '&#xe673;',
		'yicon-star3': '&#xe674;',
		'yicon-star-empty': '&#xe675;',
		'yicon-stop': '&#xe676;',
		'yicon-succ': '&#xe677;',
		'yicon-tag': '&#xe678;',
		'yicon-tags': '&#xe679;',
		'yicon-tencent-weibo': '&#xe67a;',
		'yicon-transfer': '&#xe67b;',
		'yicon-umbrella': '&#xe67c;',
		'yicon-user-circle': '&#xe67d;',
		'yicon-user-circle-fill': '&#xe67e;',
		'yicon-wallet': '&#xe67f;',
		'yicon-wallet2': '&#xe680;',
		'yicon-wechat': '&#xe681;',
		'yicon-weibo': '&#xe682;',
		'yicon-withdraw': '&#xe683;',
		'yicon-yen': '&#xe684;',
		'yicon-ying-circle': '&#xe685;',
		'yicon-user2': '&#xe686;',
		'yicon-user-add': '&#xe687;',
		'0': 0
		},
		els = document.getElementsByTagName('i'),
		i, c, el;

	//els[1].innerHTML = "&#xe652;";
	//alert(els.length);

	for (i = 0; i<els.length+1; i++ ) {
		el = els[i];
		if(!el) {
			break;
		}
		//console.log(el.className);
		c = el.className;

		//c = c.match(/yicon-[^\s'"]+/);
		//alert(c);
		if (c && yicons[c[0]]) {
			//alert("c");
			addIcon(el, yicons[c[0]]);
		}
	}
}());
