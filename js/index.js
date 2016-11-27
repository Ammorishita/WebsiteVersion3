window.onload = function() {
	nav();
	function nav() {
		setTimeout(function() {
			$('#container > ul > li').css({
				'display': 'inline-block'
			});			
		}, 50);
	};

	$('.navigation').fadeIn(1500);
};

$('.projects, .extra, .about').click(function() {
	$('#container').animate({
		'opacity': '0'
	},1000);
	var classes = $(this).attr('class').split(' ');
	var currentClass = classes[1];
	var location = currentClass + '.html';
	time();
	function time() {
		setTimeout(function() {
			window.location.href = location;
		},1000);			
	};
});