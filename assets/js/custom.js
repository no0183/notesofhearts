$(document).ready(function() {

// Hamburger
	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");
	});

// Scroll add and remove Class //
	$(window).scroll(function(){
    	// console.log($(window).scrollTop()); // 偵測距離
		if ($(window).scrollTop() > 300){
			$(".bar").addClass("bar-animation");
			}
		if ($(window).scrollTop() < 300 || $(window).scrollTop() > 1200){
            $(".bar").removeClass("bar-animation");
        }
    });

// Scrollspy //
	$('body').scrollspy({target:'.scrollspy'});

// Menu active //
	// $('nav ul li a').click(function(){
	// 	$('nav li a').removeClass("active");
	// 	$(this).addClass("active");
	// });
	
// Scrollreveal //
	window.sr = ScrollReveal({
		reset: true,
		duration: 1000,
		distance: '100px'
	});
	sr.reveal('.js-moveInUp-delay',{
		delay: 2000,
	},200);
	sr.reveal('.js-moveInRight',{
		origin: 'left',
	},200);
	sr.reveal('.js-moveInLeft',{
		origin: 'right',
	},200);

	sr.reveal('.jumbotron .js-moveInUp',{},300);
	sr.reveal('.news .js-moveInUp',{scale: 1},300);
	sr.reveal('.index-chapter .js-moveInUp',{},300);
	sr.reveal('.index-gallery .js-moveInUp',{scale: 1},300);
	sr.reveal('.customization .js-moveInUp',{},300);
	sr.reveal('.index-character .js-moveInUp',{scale: 1},300);
	sr.reveal('.download .js-moveInUp',{},300);
	sr.reveal('.download .js-moveInRight',{scale: 1},300);
	sr.reveal('.download .js-moveInLeft',{
		scale: 1,
		delay: 300,
	},300);
	sr.reveal('.index-staff .js-moveInUp',{},300);
	sr.reveal('.index-staff .js-moveInRight',{scale: 1},300);
	sr.reveal('.index-staff .js-moveInLeft',{scale: 1},300);
	sr.reveal('.index-quote .js-moveInUp',{},300);
	sr.reveal('.index-pre .js-moveInUp',{},300);
	sr.reveal('.index-contact .js-moveInUp',{scale: 1},300);
	sr.reveal('.index-contact .js-moveInRight',{scale: 1},300);
	sr.reveal('.index-contact .js-moveInLeft',{scale: 1},300);

// ScrollTop //
	var h1 = $("#anchor1").position();
	var h2 = $("#anchor2").position();
	var h3 = $("#anchor3").position();
	var h3a = $("#anchor3a").position();
	var h3b = $("#anchor3b").position();
	var h3c = $("#anchor3c").position();
	var h4 = $("#anchor4").position();
	var h5 = $("#anchor5").position();
	var h6 = $("#anchor6").position();

	$('.anchor1').click(function() {
	 	$('html, body').animate({
		scrollTop: h1.top
		}, 800);
		return false;
		});
	$('.anchor2').click(function() {
	 	$('html, body').animate({
		scrollTop: h2.top
		}, 800);
		return false;
		});
	$('.anchor3').click(function() {
	 	$('html, body').animate({
		scrollTop: h3.top
		}, 800);
		return false;
		});
	$('.anchor3a').click(function() {
		$('html, body').animate({
		scrollTop: h3a.top
		}, 800);
		return false;
		});
	$('.anchor3b').click(function() {
		$('html, body').animate({
		scrollTop: h3b.top
		}, 800);
		return false;
		});
	$('.anchor3c').click(function() {
		$('html, body').animate({
		scrollTop: h3c.top
		}, 800);
		return false;
		});
	$('.anchor4').click(function() {
		$('html, body').animate({
		scrollTop: h4.top
		}, 800);
		return false;
		});
	$('.anchor5').click(function() {
		$('html, body').animate({
		scrollTop: h5.top
		}, 800);
		return false;
		});
	$('.anchor6').click(function() {
		$('html, body').animate({
		scrollTop: h6.top
		}, 800);
		return false;
		});

// AOS
      // AOS.init({
      //   easing: 'ease-in-sine'
      // });

// 3D-Gallery
	$(function() {
		$('#dg-container').gallery();
		});

// Tabs
	// $(".nav-tabs a").click(function(){
	// 	$(this).tab('show');
	// });
	// $('.nav-tabs a').on('shown.bs.tab', function(event){
	// 	var x = $(event.target).text();         // active tab
	// 	var y = $(event.relatedTarget).text();  // previous tab
	// 	$(".act span").text(x);
	// 	$(".prev span").text(y);
	// });

// Swiper
	// var mySwiper = new Swiper ('.swiper-container', {
	// 	direction: 'horizontal',
	// 	loop: true,

	// 	// 如果需要分页器
	// 	pagination: {
	// 		el: '.swiper-pagination',
	// 	},

	// 	// 如果需要前进后退按钮
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	},
	    
	// })

}); // ready() END