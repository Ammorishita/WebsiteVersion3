

var BoxStats = [
	{
		'score': 'Level: ' + 0
	}
]
var Box = function(data) {
	this.score = ko.observable(data.score)
}
var ViewModel = function() {
	var self = this;
	self.boxlist = ko.observableArray([]);
	var screen = document.getElementById('screen');
	var boxSize = $('#box').css('left');
	console.log(boxSize);
	BoxStats.forEach(function(boxItem){
		self.boxlist().push(new Box(boxItem));
		console.log(self.boxlist())
	});
	self.currentBox = ko.observable(self.boxlist()[0]);

	////////--------ALL GAME FUNCTIONS-------------////////

	self.start = function() {
		self.right();
		$('.start').hide();
	};
	self.left = function() {
		var duration = Math.random() * 2500;
		$('#box').animate({
			left: "0px"
		}, duration, self.right)
	};
	self.right = function() {
		var duration = Math.random() * 2500;
		$('#box').animate({
			left: "500px"
		}, duration, self.left)
	};
	self.success = function(e) {
		e.stopPropagation();
		self.currentBox().score(self.currentBox().score() + 1);
		$('#box').stop();
		self.nextLevel();
		box.removeEventListener('click', self.success);
	};
	self.nextLevel = function() {
		console.log('LEVEL UP')
		$('#box').css({
			left: '0px',
			backgroundColor: 'red',
			width: '150px',
			height: '150px'
		});
		right();
	};
	self.reset = function() {
		self.currentBox().score(0);
		console.log('game over')
		$('#box').stop().css({
			left: '0px',
			width: '200px',
			height: '200px',
			backgroundColor: 'purple'
		});
		$('.start').show();
	};	
	box.addEventListener('click', self.success);

	$('#screen').click(function() {
		self.reset();
	});
	/////-----------END OF GAME FUNCTIONS------------//////
}

$(function() {
	ko.applyBindings(new ViewModel());;
});

