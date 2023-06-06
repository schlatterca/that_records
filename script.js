$(document).ready(function() {
	/*$('#logo .logo_mano').on( "mouseenter", function() {
		
		function getRandomInt(fabio) {
		  return Math.floor(Math.random() * fabio);
		}

		let randomNumber = getRandomInt(7);
		//console.log(randomNumber);
		//console.log($('#logo .logo_mano.'+randomNumber+''));
		let loghi = $('#logo .logo_mano');

		for (let i = 0; i < loghi.length; i++) {
			$('#logo .logo_mano.'+i+'').addClass('hidden');
		}

		$('#logo .logo_mano.'+randomNumber+'').removeClass('hidden');

	});*/
	$('#logo .logo_mano').on( "click", function() {
		
		function getRandomInt(fabio) {
		  return Math.floor(Math.random() * fabio);
		}

		let randomNumber = getRandomInt(7);
		//console.log(randomNumber);
		//console.log($('#logo .logo_mano.'+randomNumber+''));
		let loghi = $('#logo .logo_mano');

		for (let i = 0; i < loghi.length; i++) {
			$('#logo .logo_mano.'+i+'').addClass('hidden');
		}

		$('#logo .logo_mano.'+randomNumber+'').removeClass('hidden');

	});


	//ADD ARROWS TO GALLERIES
	$('.columns .gallery > figure > img').before('<div class="imageArrowLeft"></div>').after('<div class="imageArrowRight"></div>');
	$(".imageArrowLeft").on('click', function(event) {
		event.preventDefault();
		$(".body_home_projects > .wp-block-post-content > figure.has-nested-images > figure.wp-block-image").css("scroll-snap-align", "none");
		$(".body_home_projects > .wp-block-post-content > figure.has-nested-images").css("overflow", "hidden");
		
		if ($(this).parent().is(':first-child')) {
			$(this).parent().parent().animate({
				scrollLeft: ($(this).parent().width() * $(this).parent().parent().children().length)
			}, 400);
			setTimeout(function() {
				$(".body_home_projects > .wp-block-post-content > figure.has-nested-images > figure.wp-block-image").css("scroll-snap-align", "start");
				$(".body_home_projects > .wp-block-post-content > figure.has-nested-images").css("overflow", "scroll");
			}, 400);
			return
		}
		
		$(this).parent().parent().animate({
			scrollLeft: '-='+($(this).parent().width())
		}, 400);
		setTimeout(function() {
			$(".body_home_projects > .wp-block-post-content > figure.has-nested-images > figure.wp-block-image").css("scroll-snap-align", "start");
			$(".body_home_projects > .wp-block-post-content > figure.has-nested-images").css("overflow", "scroll");
		}, 400);
		return
	});
	
	$(".imageArrowRight").on('click', function(event) {
		event.preventDefault();
		$(".body_home_projects > .wp-block-post-content > figure.has-nested-images > figure.wp-block-image").css("scroll-snap-align", "none");
		$(".body_home_projects > .wp-block-post-content > figure.has-nested-images").css("overflow", "hidden");
		
		if ($(this).parent().is(':last-child')) {
			$(this).parent().parent().animate({
				scrollLeft: 0
			}, 400);
			setTimeout(function() {
				$(".body_home_projects > .wp-block-post-content > figure.has-nested-images > figure.wp-block-image").css("scroll-snap-align", "start");
				$(".body_home_projects > .wp-block-post-content > figure.has-nested-images").css("overflow", "scroll");
			}, 400);
			return
		}
		
		$(this).parent().parent().animate({
			scrollLeft: '+='+($(this).parent().width())
		}, 400);
		setTimeout(function() {
			$(".body_home_projects > .wp-block-post-content > figure.has-nested-images > figure.wp-block-image").css("scroll-snap-align", "start");
			$(".body_home_projects > .wp-block-post-content > figure.has-nested-images").css("overflow", "scroll");
		}, 400);
		return
	});
	//END: ADD ARROWS TO GALLERIES
});