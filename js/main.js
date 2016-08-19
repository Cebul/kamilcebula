$(function() {																																


	//auto collapsing responsive navbar
	$(".nav a").click(function(){
		$('.navbar-collapse').collapse('hide');
			});
	//sliding logo effect
	$("#logo a").slideUp(1000).slideDown(1000);

	//scroll down button
	$("#scrollbtn-aboutme").click(function(){
		$('html, body').animate({
			scrollTop: $("#aboutme").offset().top
		}, 1500);
		});

	//auto typing about text only for mobile
	var is_mobile = window.matchMedia("only screen and (max-width: 760px)");
	var delay = 1500;

	  $("#scrollbtn-aboutme").click(function(){
	  	setTimeout(function() {
		if(is_mobile.matches) { 
			 $(function(){
					      $(".about-text").typed({
					        strings: ["Nazywam się Kamil Cebula.", "Obecnie posiadam umiejętności z zakresu Junior Front-end developera.", "Chętnię podejmę pracę na etat lub wykonam dla Państwa zlecenia w tym temacie.", "Serdecznie zapraszam do współpracy :)"],
					        typeSpeed: 10
					      });
					  });
		  			}
		  		}, delay);
		  	});

	$(".switch").hover(function() {
		$(this).find('html').hide();
		$(this).find('html-text').show();
	}, function() {
		$(this).find('html-text').hide();
		$(this).find('html').show();
	});																																				
});