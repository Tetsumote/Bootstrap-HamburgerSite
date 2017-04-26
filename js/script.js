$(function(){
'use strict';

	
$('#featured').carousel({
  interval: false
});		
	
	
	
var topoffset = 50;		//offset to scrollspy method
//Activate Scroll spy	
$('body').scrollspy({
	target: "header .navbar",
	offset: topoffset
});
  var active = $('body').find('li.active a').attr('href');	
	
	if(active !== '#featured'){
		$('header nav').addClass('inbody');
	}else{
		$('header nav').removeClass('inbody');
}


$('.navbar-fixed-top').on('activate.bs.scrollspy', function () {
  var active = $('body').find('li.active a').attr('href');	
	
	if(active !== '#featured'){
		$('header nav').addClass('inbody');
	}else{
		$('header nav').removeClass('inbody');
}
});	
});
