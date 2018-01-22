$(document).ready(function() {

// Hamburger
	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");
	});

// Auto Play
	function autoPlayMusic() {
		function musicInBrowserHandler() {
			musicPlay(true);
			document.body.removeEventListener('touchstart', musicInBrowserHandler);
		}
		document.body.addEventListener('touchstart', musicInBrowserHandler);
	}
	function musicPlay(isPlay) {
	    var audio = document.getElementById('bgm');
	    if (isPlay && audio.paused) {
	        audio.play();
	    }
	    if (!isPlay && !audio.paused) {
	        audio.pause();
	    }
	}
	autoPlayMusic();

// Music Player
	$('#musicplayer').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('pause');
			if($(this).hasClass('pause')) {
				$("#bgm")[0].pause();
			}
			else {
				$("#bgm")[0].play();
			}
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
	sr.reveal('.customization .js-moveLeft',{},300);
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
	sr.reveal('.staff2.js-moveInRight',{scale: 1},300);
	sr.reveal('.index-staff .js-moveInLeft',{scale: 1},300);
	sr.reveal('.index-quote .js-moveInUp',{},300);

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
	$('.js-popup').click(function () {
		$('.pop, .overlay, .closebtn').fadeIn(300);
		var url = $(this).data('url');
		$('.pop iframe').attr('src',url);
	});
	$('.closebtn, .pop, .overlay').click(function () {
		$('.pop, .overlay, .closebtn').fadeOut(300);
	});

}); // ready() END