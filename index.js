// JavaScript Document
$(function(){
	$('.slick-slider').slick({
		infinite:true,
		dots:false,
		arrows:false,
		slideToShow:1,
		centerMode:true,
		centerPadding:'100px',
		autoplay:true
	});
	
	$(document).ready(function(){
    	$('.materialboxed').materialbox();
    });
	
	$('a[href^="#"]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
	
	$(document).ready(function(){
		$('.sidenav').sidenav();
	});
	
	$(document).ready(function(){
		$('.carousel').carousel();
	});
});