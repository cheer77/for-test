$(document).ready(function () {
	$('.bq1').click(function () {
		$('#q1').fadeOut('slow', function () {
			$('#q2').fadeIn('slow');
		});
	}),
		// $('.bq2').click(function () {
		// 	$('#q2').fadeOut('slow', function () {
		// 		$('#q3').fadeIn('slow');
		// 	});
		// }),
		// $('.bq3').click(function () {
		// 	$('#q3').fadeOut('slow', function () {
		// 		$('#q4').fadeIn('slow');
		// 	});
		// }),
		$('.bq2').click(function () {
			scrollTo('id1'),
				$('#content1').fadeOut('slow', function () {
					$('#content2').fadeIn(),
						setTimeout(function () {
							$('#result1').fadeIn(1e3);
						}, 1800),
						setTimeout(function () {
							$('#result2').fadeIn(1e3);
						}, 2300),
						setTimeout(function () {
							$('#content2').fadeOut('slow', function () {
								'undefined' != typeof roulette_ini
									? rouletteRoot._init()
									: 'undefined' != typeof box_ini && boxRoot._init(),
									$('#content3').fadeIn();
							});
						}, 5000);
				});
		});
});
