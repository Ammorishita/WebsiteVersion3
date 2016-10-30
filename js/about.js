
window.onload = function() {
	$('.resume').css({
		'left':'0px'
	});
	$('.resume').addClass('active');
};
var about = ['.bio','.resume','.contact'];

$('.biolink').click(function() {
	$(this).css('pointer-events','none')
	$('.resumelink').css('pointer-events','none')
	$('.contactlink').css('pointer-events','none')
	setTimeout(function() {
		$('.resumelink').css('pointer-events','auto')
		$('.contactlink').css('pointer-events','auto')
	},500);

	$('.bio').animate({
		'left': '0px'
	},500, function() {
		console.log($('.bio').css('left'))
	});
	$('.active').animate({
		'left': '700px'
	},500, function() {
		$('.active').css('left','-700px');
		$('.bio').addClass('active');
		$('.resume').removeClass('active');
		$('.contact').removeClass('active');
	});
});

$('.resumelink').click(function() {
	if($('.resume').hasClass('active')) {
		console.log('has class')
	} else {
		$(this).css('pointer-events','none')
		$('.biolink').css('pointer-events','none')
		$('.contactlink').css('pointer-events','none')
		setTimeout(function() {
			$('.contactlink').css('pointer-events','auto')
			$('.biolink').css('pointer-events','auto')
		},500)

		$('.resume').animate({
			'left': '0px'
		},500);
		$('.active').animate({
			'left': '700px'
		},500, function() {
			$('.active').css('left','-700px');
			$('.resume').addClass('active');
			$('.bio').removeClass('active');
			$('.contact').removeClass('active');
		});
	}

});

$('.contactlink').click(function() {
	$(this).css('pointer-events','none')
	$('.resumelink').css('pointer-events','none')
	$('.biolink').css('pointer-events','none')
	setTimeout(function() {
		$('.resumelink').css('pointer-events','auto')
		$('.biolink').css('pointer-events','auto')
	},500)

	$('.contact').animate({
		'left': '0px'
	},500);
	$('.active').animate({
		'left': '700px'
	},500, function() {
		$('.active').css('left','-700px');
		$('.contact').addClass('active');
		$('.bio').removeClass('active');
		$('.resume').removeClass('active');
	});
});

