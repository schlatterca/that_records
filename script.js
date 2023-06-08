let defaultMessage = " THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER  THAT RECORDS MUSIC PLAYER "
let chiptuneMessage = " NOW PLAYING: CHIPTUNE MIXTAPE  NOW PLAYING: CHIPTUNE MIXTAPE  NOW PLAYING: CHIPTUNE MIXTAPE  NOW PLAYING: CHIPTUNE MIXTAPE  NOW PLAYING: CHIPTUNE MIXTAPE  NOW PLAYING: CHIPTUNE MIXTAPE  NOW PLAYING: CHIPTUNE MIXTAPE  NOW PLAYING: CHIPTUNE MIXTAPE  NOW PLAYING: CHIPTUNE MIXTAPE  NOW PLAYING: CHIPTUNE MIXTAPE  NOW PLAYING: CHIPTUNE MIXTAPE  NOW PLAYING: CHIPTUNE MIXTAPE  NOW PLAYING: CHIPTUNE MIXTAPE "
let punkMessage = " NOW PLAYING: PUNK MIXTAPE  NOW PLAYING: PUNK MIXTAPE  NOW PLAYING: PUNK MIXTAPE  NOW PLAYING: PUNK MIXTAPE  NOW PLAYING: PUNK MIXTAPE  NOW PLAYING: PUNK MIXTAPE  NOW PLAYING: PUNK MIXTAPE  NOW PLAYING: PUNK MIXTAPE  NOW PLAYING: PUNK MIXTAPE  NOW PLAYING: PUNK MIXTAPE  NOW PLAYING: PUNK MIXTAPE  NOW PLAYING: PUNK MIXTAPE  NOW PLAYING: PUNK MIXTAPE  NOW PLAYING: PUNK MIXTAPE  NOW PLAYING: PUNK MIXTAPE "
let nebbiaMessage = " NOW PLAYING: POST NEBBIA  NOW PLAYING: POST NEBBIA  NOW PLAYING: POST NEBBIA  NOW PLAYING: POST NEBBIA  NOW PLAYING: POST NEBBIA  NOW PLAYING: POST NEBBIA  NOW PLAYING: POST NEBBIA  NOW PLAYING: POST NEBBIA  NOW PLAYING: POST NEBBIA  NOW PLAYING: POST NEBBIA  NOW PLAYING: POST NEBBIA  NOW PLAYING: POST NEBBIA  NOW PLAYING: POST NEBBIA  NOW PLAYING: POST NEBBIA  NOW PLAYING: POST NEBBIA  NOW PLAYING: POST NEBBIA  NOW PLAYING: POST NEBBIA "

$(document).ready(function() {
	/*setTimeout(function() {
		$(".loader").css("display", "none");
		$(".loader_background").css("display", "none");
	}, 3990);*/

	if($(".loader")){
		setTimeout(function() {
			$(".loader").fadeOut( "slow" );
			$(".loader_background").fadeOut( "slow" );
		}, 1990);
	}
	


	if($('.dropdown-content a')){
		$('.dropdown-content a').on("click", function(){
			let thisClicked = this;
			let name = this.innerText.toLowerCase();
			let dropbtn = $('.dropdown > .dropbtn')[0];
			let actuallyOpen = $('.feed_side:not(.hidden)');

			this.innerText = dropbtn.innerText;
			dropbtn.innerText = name.toUpperCase();

			$('#'+name+'').removeClass('hidden');
			setTimeout(function() {
				actuallyOpen.addClass( "hidden" );
			}, 100);
		});
	}

	if($('#logo .logo_mano')){
		$('#logo .logo_mano').on( "mouseenter", function() {
			
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
	}
	/*$('#logo .logo_mano').on( "click", function() {
		
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


	//ADD ARROWS TO GALLERIES
	if($('.columns .gallery > figure > img')){
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
	}
	//END: ADD ARROWS TO GALLERIES





	//function $(id) { return document.getElementById(id); };
	const media = $('audio');

	let ui = {
	  play: 'playAudio',
	  audio: 'audio',
	  percentage: 'percentage',
	  seekObj: 'seekObj',
	  currentTime: 'currentTime'
	};

	function togglePlay() {
		if ($(document.getElementById('audio'))[0].paused === false) {
		    $(document.getElementById('audio'))[0].pause();
		    $('.gif1')[0].src = 'player/1.tiff';
		    $('.gif2')[0].src = 'player/2.tiff';
		    $('.gif3')[0].src = 'player/3.tiff';
		    $(document.getElementById('playAudio'))[0].classList.remove('pause');

		    $('marquee').innerHTML = defaultMessage;
		} else {
		    $(document.getElementById('audio'))[0].play();
		    $('.gif1')[0].src = 'player/1.gif';
		    $('.gif2')[0].src = 'player/2.gif';
		    $('.gif3')[0].src = 'player/3.gif';
		    $(document.getElementById('playAudio'))[0].classList.add('pause');

		    if($('audio > source')[0].src.includes('chiptune')){
		    	$('marquee')[0].innerHTML = chiptuneMessage;
		    } else if ($('audio > source')[0].src.includes('punk')) {
		    	$('marquee')[0].innerHTML = punkMessage;
		    } else {
		    	$('marquee')[0].innerHTML = nebbiaMessage;
		    }
		}
	}

	function restartSong() {
		/*$('.gif1')[0].src = '';
		$('.gif1')[0].src = 'player/1.gif';
		$('.gif2')[0].src = '';
		$('.gif2')[0].src = 'player/2.gif';
		$('.gif3')[0].src = '';
		$('.gif3')[0].src = 'player/3.gif';*/
		$(document.getElementById('audio'))[0].currentTime = 0;
	}

	function nextSong() {
		if($('source')[0].src.includes('chiptune')) {
			$('source').remove();
			$('.gif1').addClass('hidden');
			$('.gif3').removeClass('hidden');
			$('audio').append( "<source src='player/punk.mp3' type='audio/mp3'>" );
			restartSong();
		} else if($('source')[0].src.includes('punk')) {
			$('source').remove();
			$('.gif3').addClass('hidden');
			$('.gif2').removeClass('hidden');
			$('audio').append( "<source src='player/postnebbia.mp3' type='audio/mp3'>" );
			restartSong();
		} else {
			$('source').remove();
			$('.gif2').addClass('hidden');
			$('.gif1').removeClass('hidden');
			$('audio').append( "<source src='player/chiptune.mp3' type='audio/mp3'>" );
			restartSong();
		}

		if($(document.getElementById('audio'))[0].paused === false){
			if($('audio > source')[0].src.includes('chiptune')){
			    $('marquee')[0].innerHTML = chiptuneMessage;
			} else if ($('audio > source')[0].src.includes('punk')) {
			  	$('marquee')[0].innerHTML = punkMessage;
			} else {
			   	$('marquee')[0].innerHTML = nebbiaMessage;
			}
		}
	}

	function calculatePercentPlayed() {
	  let percentage = ($(document.getElementById('currentTime'))[0] / $(document.getElementById('audio'))[0].duration).toFixed(2) * 100;
	  $(document.getElementById('percentage'))[0].style.width = `${percentage}%`;
	}

	function calculateCurrentValue(currentTime) {
	  const currentMinute = parseInt(currentTime / 60) % 60;
	  const currentSecondsLong = currentTime % 60;
	  const currentSeconds = currentSecondsLong.toFixed();
	  const currentTimeFormatted = `${currentMinute < 10 ? `0${currentMinute}` : currentMinute}:${
	  currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds
	  }`;
	  
	  return currentTimeFormatted;
	}

	function initProgressBar() {
	  const currentTime = calculateCurrentValue($(document.getElementById('currentTime'))[0]);
	  $(document.getElementById('currentTime'))[0].innerHTML = currentTime;
	  $(document.getElementById('seekObj'))[0].addEventListener('click', seek);

	  $(document.getElementById('audio'))[0].onended = () => {
	    $(document.getElementById('playAudio'))[0].classList.remove('pause');
	    $(document.getElementById('percentage'))[0].style.width = 0;
	    $(document.getElementById('currentTime'))[0].innerHTML = '00:00';
	  };

	  function seek(e) {
	    const percent = e.offsetX / this.offsetWidth;
	    $(document.getElementById('currentTime'))[0] = percent * $(document.getElementById('audio'))[0].duration;
	  }
	  
	  calculatePercentPlayed();
	}

	if($(ui.play)){
		$(document.getElementById('playAudio'))[0].addEventListener('click', togglePlay);
		//$(document.getElementById('audio'))[0].addEventListener('timeupdate', initProgressBar);

		$(document.getElementById('leftHand'))[0].addEventListener('click', restartSong);
		$(document.getElementById('rightHand'))[0].addEventListener('click', nextSong);
	}
});







