$(document).ready(function() {
	var duration;
	function left() {
		var duration = Math.random() * 2500;
		$('#box').animate({
			left: "0px"
		}, duration, right)
	};
	function right() {
		var duration = Math.random() * 2500;
		$('#box').animate({
			left: "900px"
		}, duration, left)
	};
	$('.start').click(function() {
		right();
		$(this).hide();
	});
});

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
	self.boxlist = ko.observableArray([]);
	BoxStats.forEach(function(boxItem){
		self.boxlist().push(new Box(boxItem));
		console.log(self.boxlist())
	});
	self.currentBox = ko.observable(self.boxlist()[0]);
	self.addScore = function() {
		self.currentBox().score(self.currentBox().score() + 1);
		$('#box').stop();
		box.removeEventListener('click', self.addScore);
	}
	box.addEventListener('click', self.addScore);
}
function init() {
	ko.applyBindings(new ViewModel());;
};


