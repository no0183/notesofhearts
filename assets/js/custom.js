$(document).ready(function() {

// Hamburger
	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");
	});

// Scroll add and remove Class //
	$(window).scroll(function(){
    	// console.log($(window).scrollTop()); // 偵測距離
		if ($(window).scrollTop() > 600){
			$(".bar").addClass("bar-animation");
			}
		if ($(window).scrollTop() < 600 || $(window).scrollTop() > 1500){
            $(".bar").removeClass("bar-animation");
        }
    });

// Scrollspy //
	$('body').scrollspy({target:'.scrollspy'});

// Scrollreveal //
	window.sr = ScrollReveal({
		reset: true,
		duration: 1000,
		distance: '100px'
	});
	sr.reveal('.js-moveInUp-delay',{
		delay: 2000
	},200);
	sr.reveal('.js-moveInRight',{
		origin: 'left'
	},200);
	sr.reveal('.js-moveInLeft',{
		origin: 'right'
	},200);

	sr.reveal('.jumbotron .js-moveInUp',{},300);
	sr.reveal('.news .js-moveInUp',{},300);
	sr.reveal('.index-chapter .js-moveInUp',{},300);
	sr.reveal('.index-gallery .js-moveInUp',{scale: 1},300);
	sr.reveal('.customization .js-moveInUp',{},300);
	sr.reveal('.index-posture .js-moveInUp',{},300);
	sr.reveal('.equipment .js-moveInUp',{},300);
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
	// sr.reveal('.index-contact .js-moveInUp',{scale: 1},300);
	// sr.reveal('.index-contact .js-moveInRight',{scale: 1},300);
	// sr.reveal('.index-contact .js-moveInLeft',{scale: 1},300);

// ScrollTop //
	var h1 = $("#anchor1").position();
	var h2 = $("#anchor2").position();
	var h3a = $("#anchor3a").position();
	var h3b = $("#anchor3b").position();
	var h3c = $("#anchor3c").position();
	var h3d = $("#anchor3d").position();
	var h3e = $("#anchor3e").position();
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
	$('.anchor3d').click(function() {
		$('html, body').animate({
		scrollTop: h3d.top
		}, 800);
		return false;
		});
	$('.anchor3e').click(function() {
		$('html, body').animate({
		scrollTop: h3e.top
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

// 3D-Gallery
	$(function() {
		$('#dg-container').gallery();
		});

// Popup
	// news_all
	$("#pop_news_all").click(function () {
		$("#news_all, .overlay").fadeIn(300);
		// $("html, body").addClass("overflow");
	});

	$(".closebtn, #news_all, .overlay").click(function () {
		$("#news_all, .overlay").fadeOut(300);
		// $("html, body").removeClass("overflow");
	});
	// news_1
	$("#pop_1").click(function () {
		$("#news1, .overlay").fadeIn(300);
		// $("html, body").addClass("overflow");
	});

	$(".closebtn, .pop, .overlay").click(function () {
		$("#news1, .overlay").fadeOut(300);
		// $("html, body").removeClass("overflow");
	});
	// news_2
	$("#pop_2").click(function () {
		$("#news2, .overlay").fadeIn(300);
		// $("html, body").addClass("overflow");
	});

	$(".closebtn, .pop, .overlay").click(function () {
		$("#news2, .overlay").fadeOut(300);
		// $("html, body").removeClass("overflow");
	});
	// news_3
	$("#pop_3").click(function () {
		$("#news3, .overlay").fadeIn(300);
		// $("html, body").addClass("overflow");
	});

	$(".closebtn, .pop, .overlay").click(function () {
		$("#news3, .overlay").fadeOut(300);
		// $("html, body").removeClass("overflow");
	});
	// news_4
	$("#pop_4").click(function () {
		$("#news4, .overlay").fadeIn(300);
		// $("html, body").addClass("overflow");
	});

	$(".closebtn, .pop, .overlay").click(function () {
		$("#news4, .overlay").fadeOut(300);
		// $("html, body").removeClass("overflow");
	});
	// news_5
	$("#pop_5").click(function () {
		$("#news5, .overlay").fadeIn(300);
		// $("html, body").addClass("overflow");
	});

	$(".closebtn, .pop, .overlay").click(function () {
		$("#news5, .overlay").fadeOut(300);
		// $("html, body").removeClass("overflow");
	});
	// version_news
	$("#pop_versions").click(function () {
		$("#versions_all, .overlay").fadeIn(300);
		// $("html, body").addClass("overflow");
	});

	$(".closebtn, .pop, .overlay").click(function () {
		$("#versions_all, .overlay").fadeOut(300);
		// $("html, body").removeClass("overflow");
	});

// Hover-color
	$("#pop_1").hover(function(){
		$(".news-para.link1").css("color","#963448");
		$("#date1").css("color","#333");
		},function(){
		$(".news-para.link1").css("color","#333");
		$("#date1").css("color","#b8b8b8");
	});
	$("#pop_2").hover(function(){
		$(".news-para.link2").css("color","#963448");
		$("#date2").css("color","#333");
		},function(){
		$(".news-para.link2").css("color","#333");
		$("#date2").css("color","#b8b8b8");
	});
	$("#pop_3").hover(function(){
		$(".news-para.link3").css("color","#963448");
		$("#date3").css("color","#333");
		},function(){
		$(".news-para.link3").css("color","#333");
		$("#date3").css("color","#b8b8b8");
	});
	$("#pop_4").hover(function(){
		$(".news-para.link4").css("color","#963448");
		$("#date4").css("color","#333");
		},function(){
		$(".news-para.link4").css("color","#333");
		$("#date4").css("color","#b8b8b8");
	});
	$("#pop_5").hover(function(){
		$(".news-para.link5").css("color","#963448");
		$("#date5").css("color","#333");
		},function(){
		$(".news-para.link5").css("color","#333");
		$("#date5").css("color","#b8b8b8");
	});
}); // ready() END