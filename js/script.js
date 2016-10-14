
var BoxStats = [
	{
		'score': 1
	}
];
var Box = function(data) {
	this.score = ko.observable(data.score);
};
var ViewModel = function() {
	var self = this;
	canClick = false;
	var width = height = 200;
	var speed = 2000;
	var number;
	self.dontclick = ko.observable(false);
	self.level1 = ko.observable(true);
	self.level2 = ko.observable(false);
	self.level3 = ko.observable(false);
	self.level4 = ko.observable(false);
	self.level5 = ko.observable(false);
	self.level6 = ko.observable(false);
	self.level7 = ko.observable(false);
	self.level8 = ko.observable(false);
	self.win = ko.observable(false);
	self.gameover = ko.observable(false);
	self.boxlist = ko.observableArray([]);
	BoxStats.forEach(function(boxItem){
		self.boxlist().push(new Box(boxItem));
		console.log(self.boxlist());
	});
	self.currentBox = ko.observable(self.boxlist()[0]);

	////////--------ALL GAME FUNCTIONS-------------////////
	self.randomGenerate = function() {
		number = Math.random();
		console.log(number);
	};
	self.start = function() {
		self.randomGenerate();
		self.choice();
		self.win(false);
		console.log(speed);
		$('.start').hide();
		self.gameover(false);
		self.level1(true);
		box.addEventListener('click', self.success);
	};
	self.choice = function() {
		// initial yPos 177 to 437 and xPos between 306 and 806
		var box = $('#box');
		var yPos = box.position().top;
		var xPos = box.position().left;		
		console.log(box.position());
		self.randomGenerate();
		if (number < 0.5 && xPos > 805 && yPos < 178) {
			self.left();
			console.log('moved left from top right')
		} else if (number > 0.5 && xPos > 805 && yPos < 178) {
			self.down();
			console.log('moved down from top right')
		} else if (number > 0.5 && xPos > 805 && yPos > 178) {
			self.left();
			console.log('moved left from bottom right')
		} else if (number < 0.5 && xPos > 805 && yPos > 178) {
			self.up();
			console.log('moved up from bottom right')
		} else if (number > 0.5 && xPos < 307 && yPos > 178) {
			self.right();
			console.log('moved right from bottom left')
		} else if (number < 0.5 && xPos < 307 && yPos > 178) {
			self.up();
			console.log('moved up from bottom left')
		} else if (number > 0.5 && xPos < 307 && yPos < 178) {
			self.right();
			console.log('moved right from top left')
		} else if (number < 0.5 && xPos < 307 && yPos < 178) {
			self.down();
			console.log('moved down from top left')
		}
	};
	self.right = function() {
		$('#box').animate({
			left: "500px"
		}, speed, self.choice);
	};
	self.left = function() {
		$('#box').animate({
			left: "0px"
		}, speed, self.choice);
	};
	self.down = function() {
		$('#box').animate({
			top: "260px"
		}, speed, self.choice);
	};
	self.up = function() {
		$('#box').animate({
			top: "0px"
		}, speed, self.choice);
	};
	self.success = function(e) {
		e.stopPropagation();
		self.currentBox().score(self.currentBox().score() + 1);
		$('#box').stop();
		$('#box').css('background' , 'red');
		$('#screen').css('pointer-events', 'none')
		self.dontclick(true);
		$('#box').animate({
			top: '0px',
			left: '0px'
		}, 2000, self.nextLevel);
		var score = self.currentBox().score();
		console.log(score);
		if(score == 2) {self.level2(true); self.level1(false);}
		if(score == 3) {self.level3(true); self.level2(false);}
		if(score == 4) {self.level4(true); self.level3(false);}
		if(score == 5) {self.level5(true); self.level4(false);}
		if(score == 6) {self.level6(true); self.level5(false);}
		if(score == 7) {self.level7(true); self.level6(false);}
		if(score == 8) {self.level8(true); self.level7(false);}	
		if(score == 9) {
			self.win(true); 
			self.level8(false);
			self.reset();
		}	
	};
	self.nextLevel = function() {
		console.log('LEVEL UP');
		var safeColors = ['00','33','66','99','cc','ee'];
		var rand = function() {
		return Math.floor(Math.random()*6);
		};
		var randomColor = function() {
		var r = safeColors[rand()];
		var g = safeColors[rand()];
		var b = safeColors[rand()];
		return "#"+r+g+b;
		};
		$('#box').css('background',randomColor());
		width-= 25;
		height-= 25;
		speed-= 150;
		console.log(speed);
		$('#box').css({
			top: '0px',
			left: '0px',
			width: width + 'px',
			height: height + 'px'
		});
		var yPos = $('#box').position().top;
		var xPos = $('#box').position().left;
		self.start();
		setTimeout(function() {
			$('#screen').css('pointer-events', 'auto')
			self.dontclick(false);
		}, 1000)

	};
	self.reset = function() {
		self.currentBox().score(1);
		width = 200;
		height = 200;
		speed = 2000;
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
			top: '0px',
			width: '200px',
			height: '200px',
			backgroundColor: 'purple'
		});
		box.removeEventListener('click', self.success);
		$('.start').show();
	};	

	$('#screen').click(function() {
		self.gameover(true);
		self.reset();
	});
	/////-----------END OF GAME FUNCTIONS------------//////
};

$(function() {
	ko.applyBindings(new ViewModel());
});

