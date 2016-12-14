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
	$('svg').show();
	$('path, line, polyline').attr('id', 'first');
	function svg() {
		setTimeout(function() {
			$('#chair').attr('data', 'images/path.svg');
		},1500)
	}
	svg();
};
$(document).click(function(e) {
	const x = e.pageX;
	const y = e.pageY;
	console.log(x, y);
	const myDiv = '<div class="click"></div>';
	$('body').append(myDiv);
	$('.click').css({
		'left' : x - 5,
		'top' : y - 5,
	});
	$('.click').addClass('active')
	setTimeout(function() {
		$('.click').css({
			'-webkit-transform' : 'scale(5)',
			'transform' : 'scale(50)'
		});
	},1)
	setTimeout(function() {
		$('.click').removeClass('active');
		$('body .click:last').remove();
	},150);
});
$('.projects, .about').click(function() {
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
$('.extra').click(function() {
	$('#container').animate({
		'opacity': '0'
	},1000);
	time();
	function time() {
		setTimeout(function() {
			window.location.href = 'comic/4.php';
		},1000);			
	};
});
