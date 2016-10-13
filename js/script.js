
var BoxStats = [
	{
		'score': 1
	}
]
var Box = function(data) {
	this.score = ko.observable(data.score)
}
var ViewModel = function() {
	var self = this;
	canClick = false;
	var width = height = 200;
	var speed = 4000;
	self.level1 = ko.observable(true);
	self.level2 = ko.observable(false);
	self.level3 = ko.observable(false);
	self.level4 = ko.observable(false);
	self.level5 = ko.observable(false);
	self.level6 = ko.observable(false);
	self.level7 = ko.observable(false);
	self.level8 = ko.observable(false);
	self.gameover = ko.observable(false);
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
		self.gameover(false);
		self.level1(true);
		box.addEventListener('click', self.success);
	};
	self.right = function() {
		duration = Math.random() * speed;
		$('#box').animate({
			left: "500px"
		}, duration, self.left)
	};
	self.left = function() {
		duration = Math.random() * speed;
		$('#box').animate({
			left: "0px"
		}, duration, self.right)
	};
	self.success = function(e) {
		e.stopPropagation();
		self.currentBox().score(self.currentBox().score() + 1);
		$('#box').stop();
		self.nextLevel();
		var score = self.currentBox().score();
		console.log(score);
		if(score == 2) {self.level2(true); self.level1(false)}
		if(score == 3) {self.level3(true); self.level2(false)}
		if(score == 4) {self.level4(true); self.level3(false)}
		if(score == 5) {self.level5(true); self.level4(false)}
		if(score == 6) {self.level6(true); self.level5(false)}
		if(score == 7) {self.level7(true); self.level6(false)}
		if(score == 8) {self.level8(true); self.level7(false)}	
	};
	self.nextLevel = function() {
		console.log('LEVEL UP')
		width-= 25;
		height-= 25;
		speed-= 500;
		console.log(duration);
		$('#box').css({
			left: '0px',
			backgroundColor: 'red',
			width: width + 'px',
			height: height + 'px'
		});
		self.right();
	};
	self.reset = function() {
		self.currentBox().score(1);
		width = 200;
		height = 200;
		speed = 4000;
		self.gameover(true);
		self.level1(false);
		self.level2(false);
		self.level3(false);
		self.level4(false);
		self.level5(false);
		self.level6(false);
		self.level7(false);
		self.level8(false);
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

