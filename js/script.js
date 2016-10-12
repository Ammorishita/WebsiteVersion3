var durationleft, durationright, canClick;

var BoxStats = [
	{
		'score': 0
	}
]
var Box = function(data) {
	this.score = ko.observable(data.score)
}
var ViewModel = function() {
	var self = this;
	canClick = false;
	var width = 200;
	var height = 200;
	self.boxlist = ko.observableArray([]);
	BoxStats.forEach(function(boxItem){
		self.boxlist().push(new Box(boxItem));
		console.log(self.boxlist())
	});
	self.currentBox = ko.observable(self.boxlist()[0]);

	////////--------ALL GAME FUNCTIONS-------------////////

	self.start = function() {
		self.right();
		$('.start').hide();
		box.addEventListener('click', self.success);
	};
	self.right = function() {
		duration = Math.random() * 4000;
		$('#box').animate({
			left: "500px"
		}, duration, self.left)
	};
	self.left = function() {
		duration = Math.random() * 4000;
		$('#box').animate({
			left: "0px"
		}, duration, self.right)
	};
	self.success = function(e) {
		e.stopPropagation();
		self.currentBox().score(self.currentBox().score() + 1);
		$('#box').stop();
		self.nextLevel();
		//box.removeEventListener('click', self.success);
	};
	self.nextLevel = function() {
		console.log('LEVEL UP')
		width-= 25;
		height-= 25;
		$('#box').css({
			left: '0px',
			backgroundColor: 'red',
			width: width + 'px',
			height: height + 'px'
		});
		self.right();
	};
	self.reset = function() {
		self.currentBox().score(0);
		console.log('game over')
		width = 200;
		height = 200;
		$('#box').stop().css({
			left: '0px',
			width: '200px',
			height: '200px',
			backgroundColor: 'purple'
		});
		box.removeEventListener('click', self.success)
		$('.start').show();
	};	

	$('#screen').click(function() {
		self.reset();
	});
	/////-----------END OF GAME FUNCTIONS------------//////
}

$(function() {
	ko.applyBindings(new ViewModel());;
});

