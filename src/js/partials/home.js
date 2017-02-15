$(document).ready(function() {
	
	// Setting imgs in 2 and 3 blocks
	// at the middle of block (verticaly)
	var AwsomeInfo = $("#awsome-info").height();
	var HopeInfo = $("#hope-info").height();
	var WorldInfo = $("#world-info").height();

	$("#awsome-img").height(AwsomeInfo);
	$("#awsome-img").css('line-height', AwsomeInfo + "px");
	$("#hope-img").height(HopeInfo);
	$("#hope-img").css('line-height', HopeInfo + "px");
	$("#world-img").height(WorldInfo);
	$("#world-img").css('line-height', WorldInfo + "px");

	// opinions slider
	$("#opinion-slider").unslider({
		autoplay: true,
		infinite: true,
		delay: 5000,
		arrows: {
			//  Unslider arrows
			prev: '<a class="unslider-arrow prev"></a>',
			next: '<a class="unslider-arrow next"></a>',
		}
	});

	// Setting height = width of block
	var TeamMemberWidth = $(".team-member").width();
	$(".team-member").each(function(index, el) {
		$(this).css('height', TeamMemberWidth);
	});

	$(window).resize(function(event) {
		var TeamMemberWidth = $(".team-member").width();
		$(".team-member").each(function(index, el) {
			$(this).css('height', TeamMemberWidth);
		});
	});

	// Anchor scrolling
	$('.header-menu-button').click(function(){
		var target = $(this).attr('to');
		console.log(target);
		$('html, body').animate({scrollTop:$('#' + target).position().top}, 2000);
	});

	// Animations
	if (screen.height > 900) {
		$(".about-us-item").css('animation', 'Under 1.4s ease forwards');
		$("#about-us-btn").css('animation', 'Left 1s forwards');
	}
	else if (screen.height <= 673 && screen.width < 768) {
		$(".about-us-item").css('animation', 'Under 1.4s ease forwards');
		$("#about-us-btn").css('animation', 'Left 1s forwards');
		$("#awsome-img").css('animation', 'Left 1s forwards');
	}

	$(window).scroll(function(event) {
		var top = $(window).scrollTop();

		if (screen.width < 768 && screen.height <= 673) {
			if (top >= 230) {
				$("#hope-img").css('animation', 'Right 1s forwards');
			}
			if (top >= 1680) {
				$(".service-header-circle").css('animation', 'Rotate 0.9s ease-out forwards');
			}
			if (top >= 3350) {
				$(".pricing-item").css('animation', 'Rotate 0.9s ease-out forwards');
			}
			if (top >= 3950) {
				$("#world-img").css('animation', 'Right 1s ease-out forwards');
			}
			if (top >= 4650) {
				$("#try-btn").css('animation', 'Apear 2s ease-in forwards');
			}
		}

		else if (screen.width >= 768 && screen.height >= 673 && screen.height <= 900) {
			if (top >= 630) {
				$(".about-us-item").css('animation', 'Under 1.4s ease forwards');
			}
			if (top >= 950) {
				$("#about-us-btn").css('animation', 'Left 1s forwards');
			}
			if (top >= 1450) {
				$("#awsome-img").css('animation', 'Left 1s forwards');
			}
			if (top >= 2012) {
				$("#hope-img").css('animation', 'Right 1s forwards');
			}
			if (top >= 3330) {
				$(".service-header-circle").css('animation', 'Rotate 0.9s ease-out forwards');
			}
			if (top >= 5060) {
				$(".pricing-item").css('animation', 'Rotate 0.9s ease-out forwards');
			}
			if (top >= 5780) {
				$("#world-img").css('animation', 'Right 1s ease-out forwards');
			}
			if (top >= 6700) {
				$("#try-btn").css('animation', 'Apear 2s ease-in forwards');
			}
		}
		else if (screen.height > 900) {
			if (top >= 550) {
				$("#awsome-img").css('animation', 'Left 1s forwards');
			}
			if (top >= 1000) {
				$("#hope-img").css('animation', 'Right 1s forwards');
			}
			if (top >= 2550) {
				$(".service-header-circle").css('animation', 'Rotate 0.9s ease-out forwards');
			}
			if (top >= 4280) {
				$(".pricing-item").css('animation', 'Rotate 0.9s ease-out forwards');
			}
			if (top >= 5040) {
				$("#world-img").css('animation', 'Right 1s ease-out forwards');
			}
			if (top >= 5800) {
				$("#try-btn").css('animation', 'Apear 2s ease-in forwards');
			}
		}
	});

});