$(function(){
'use strict';

	
$('#featured').carousel({
  interval: false
});		
$('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling	
	
	
var topoffset = 50;		//offset to scrollspy method
var slideqty = $('#featured .item').length;
	
	
// add fullheight carousel images
var	wheight = $(window).height();

$('.fullheight').css('height',wheight);
//Automatically generate carousel indicators
	
	for(var i = 0; i < slideqty; i++){
		var insertText = '<li data-target="#featured" data-slide-to="' + i + '"></li>';
		$('#featured ol').append(insertText);
	}
	
//replace IMG inside carousels with a background image
	
	$('#featured .item img').each(function(){
		var imgSrc = $(this).attr('src');
		$(this).parent().css({'background-image':'url('+imgSrc+')'});
		$(this).remove();
	});
	
//adjust height of .fullheight element on window resize
	
	$(window).resize(function(){
		wheight = $(window).height();
		$('.fullheight').css('height',wheight);
	});
	
	
	

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
