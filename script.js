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
});