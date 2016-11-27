window.onload = function() {
	nav();
	function nav() {
		setTimeout(function() {
			$('#container > ul > li').css({
				'display': 'inline-block'
			});			
		}, 50)
	}

	$('.navigation').fadeIn(1500);
};