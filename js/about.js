
window.onload = function() {
	$('.bio').css({
		'left':'0px'
	});
	$('.slideContainer').css({
		'overflow':'auto',
		'width' : '1000px'
	});
	$('.bio').addClass('active');
};
var about = ['.bio','.resume','.contact'];

var chartList = [
	{
		'title' : 'The Normal Routine',
		'src' : 'images/Piechart.svg',
		'height' : '300',
		'width' : '300'
	},
	{
		'title' : 'Driving to Work',
		'src' : 'images/Driving.svg',
		'height' : '300',
		'width' : '300'
	},
	{
		'title' : 'Buying Food',
		'src' : 'images/Food.svg',
		'height' : '300',
		'width' : '300'
	},
	{
		'title' : 'Energy Use',
		'src' : 'images/Energy.svg',
		'height' : '300',
		'width' : '400'
	},
];

var Chart = function(data) {
	this.title = data.title;
	this.src = data.src;
	this.height = data.height;
	this.width = data.width;
};

var ViewModel = function() {
	var self = this;
	self.Charts = ko.observableArray([]);
	chartList.forEach(function(data) {
		self.Charts().push(new Chart(data));
	});
	console.log(self.Charts())
};

$(function() {
	ko.applyBindings(new ViewModel());
});

$('.biolink').click(function() {
	$(this).css('pointer-events','none')
	$('.slideContainer').css({
		'overflow':'auto',
		'width' : '1000px'
	});
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
		'left': '1024px'
	},500, function() {
		$('.active').css('left','-1024px');
		$('.bio').addClass('active');
		$('.resume').removeClass('active');
		$('.contact').removeClass('active');
	});
});

$('.resumelink').click(function() {
	$('.slideContainer').css({
		'overflow':'hidden',
		'width':'1000px'
	});
	$('.slideContainer').animate({
		scrollTop: 0
	}, 0);
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
			'left': '1024px'
		},500, function() {
			$('.active').css('left','-1024px');
			$('.resume').addClass('active');
			$('.bio').removeClass('active');
			$('.contact').removeClass('active');
		});
	}

});

$('.contactlink').click(function() {
	$('.slideContainer').css({
		'overflow':'hidden',
		'width':'1000px'
	});
	$('.slideContainer').animate({
		scrollTop: 0
	}, 0);
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
		'left': '1024px'
	},500, function() {
		$('.active').css('left','-1024px');
		$('.contact').addClass('active');
		$('.bio').removeClass('active');
		$('.resume').removeClass('active');
	});
});

