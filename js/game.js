var BoxStats = [
	{
		'round': 1,
		'level': 1
	}
];
var Box = function(data) {
	this.round = ko.observable(data.round);
	this.level = ko.observable(data.level);
};
var ViewModel = function() {
	var self = this;
	var width = height = 200;
	var speed = 2000;
	var number, round, level;
	var distance = 0;
	$('#screen').css('pointer-events', 'none');
	self.dontclick = ko.observable(false);
	self.started = ko.observable(false);
	self.level1 = ko.observable(false);
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

	/// ---- ALL MENU FUNCTIONS --- ///
	$('.gameplay').click(function() {
		$('.gameplayDisplay').fadeToggle();	
		$('.gameplayDisplay').css('display','flex');
	});

	////////--------ALL GAME FUNCTIONS-------------////////
	$('.slow').click(function(e) {
			e.stopPropagation();
		console.log('SLOW DOWN')
	})
	self.randomGenerate = function() {
		number = Math.random();
		console.log(number);
	};
	self.start = function() {
		self.started(true);
		self.choice();
		self.win(false);
		self.level1(true);
		console.log(speed);	
		console.log(number);
		console.log($('#box').position());
		self.gameover(false);
		$('#screen').css('pointer-events', 'auto');
		$('#box').css('display', 'block');
		box.addEventListener('click', self.success);
	};
	self.choice = function() {
		// initial yPos 177 to 437 and xPos between 306 and 806
		var box = $('#box');
		var yPos = box.position().top;
		var xPos = box.position().left;		
		console.log(box.position());
		self.randomGenerate();
		if (number < 0.5 && xPos >= 500 && yPos < 178) {
			self.left();
			console.log('moved left from top right');
		} else if (number >= 0.5 && xPos >= 500 && yPos < 178) {
			self.down();
			console.log('moved down from top right');
		} else if (number >= 0.5 && xPos >= 500 && yPos >= 178) {
			self.left();
			console.log('moved left from bottom right');
		} else if (number < 0.5 && xPos >= 500 && yPos >= 178) {
			self.up();
			console.log('moved up from bottom right');
		} else if (number >= 0.5 && xPos < 500 && yPos >= 178) {
			self.right();
			console.log('moved right from bottom left');
		} else if (number < 0.5 && xPos < 500 && yPos >= 178) {
			self.up();
			console.log('moved up from bottom left');
		} else if (number >= 0.5 && xPos < 500 && yPos < 178) {
			self.right();
			console.log('moved right from top left');
		} else if (number < 0.5 && xPos < 500 && yPos < 178) {
			self.down();
			console.log('moved down from top left');
		}
	};
	self.slow = function() {
		$('.slow').animate({
			left: '500px'
		}, speed)
	}
	self.right = function() {
		$('#box').animate({
			left: 500 + distance + 'px'
		}, speed, self.choice);
	};
	self.left = function() {
		$('#box').animate({
			left: '0px'
		}, speed, self.choice);
	};
	self.down = function() {
		$('#box').animate({
			top: 260 + distance + 'px'
		}, speed, self.choice);
	};
	self.up = function() {
		$('#box').animate({
			top: '0px'
		}, speed, self.choice);
	};
	self.success = function(e) {
		distance+=25;
		e.stopPropagation();
		self.currentBox().round(self.currentBox().round() + 1);
		round = self.currentBox().round();
		level = self.currentBox().level();
		console.log(round, level)
		if(round == 2) {self.level2(true); self.level1(false);}
		if(round == 3) {self.level3(true); self.level2(false);}
		if(round == 4) {self.level4(true); self.level3(false);}
		if(round == 5) {self.level5(true); self.level4(false);}
		if(round == 6) {self.level6(true); self.level5(false);}
		if(round == 7) {self.level7(true); self.level6(false);}
		if(round == 8) {self.level8(true); self.level7(false);}	
		if(round == 9) {
			self.level8(false);
			self.currentBox().level(self.currentBox().level() + 1);
			self.currentBox().round(1);
			console.log('IS ROUDN 0 WORKING?')
			level = self.currentBox().level();
		}	
		$('#box').stop();
		$('#box').css('background' , 'red');
		$('#screen').css('pointer-events', 'none');
		$('.taunt').css('display', 'block');
		self.dontclick(true);
		$('#box').animate({
			top: '0px',
			left: '0px'
		}, 2000, self.nextLevel);
		console.log('current round' + round);
		console.log('current level' + self.currentBox().level());
	};
	self.nextLevel = function() {
		console.log('LEVEL UP');
		$('.taunt').css('display', 'none');
		var safeColors = ['05','33','66','99','cc','dd'];
		var rand = function() {
		return Math.floor(Math.random()*6);
		};
		var randomColor = function() {
		var r = safeColors[rand()];
		var g = safeColors[rand()];
		var b = safeColors[2];
		return "#"+r+g+b;
		};
		$('#box').css('background',randomColor());
		console.log(level)
		if(level == 2) {
			width = height = 200;
			speed = 1500;
			distance = 25;
			console.log('LEVEL TWO NOW')
		}
		width-= 25;
		height-= 25;
		speed-= 150;
		console.log(speed);
		$('#box').css({
			width: width + 'px',
			height: height + 'px'
		});
		var yPos = $('#box').position().top;
		var xPos = $('#box').position().left;
		self.choice();
		setTimeout(function() {
			$('#screen').css('pointer-events', 'auto')
			self.dontclick(false);
		}, 1000)

	};
	self.reset = function() {
		self.currentBox().round(1);
		self.currentBox().level(1);
		self.started(false);
		width = 200;
		height = 200;
		speed = 2000;
		distance = 0;
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
			backgroundColor: 'purple',
			display: 'none'
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
