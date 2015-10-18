$(function() {
	$('.hidden').hide();
	$('.login-button').attr('href', 'javascript: void(0);').click(function() {
		if ($('#login-hide').css('display') == "block") {

			$('#login-form-wrapper', '#login-hide').fadeOut(300, null, function() {
				$('#login-hide').slideToggle(500);
			});

		} else {

			$('#login-hide').slideToggle(500, null, function() {
				$('#login-form-wrapper', '#login-hide').fadeIn(300);
			});

		}
	});
});
