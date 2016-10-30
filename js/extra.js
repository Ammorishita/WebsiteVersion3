$(document).ready(function() {

});
var slide = function() {
		$('.about').hide();
	}

var Warcraft = [
	{
		'title' : 'March of the Scourge - Destroy All Enemies',
		'src' : "https://www.youtube.com/embed/UrDzCpbrXgU?autoplay=1",
		'img' : "images/VideoImages/March of the Scourge.png"		
	},
	{
		'title' : 'The Hunter of Shadows - No Fountain',
		'src' : "https://www.youtube.com/embed/dqZ02Uing7Q?autoplay=1",
		'img' : "images/VideoImages/Hunter of Shadows.png"		
	},
	{
		'title' : 'The Culling - Destroy Undead Base',
		'src' : "https://www.youtube.com/embed/kJ0BKrvavXQ?autoplay=1",
		'img' : "images/VideoImages/The Culling.png"		
	},
	{
		'title' : 'Awakening of Stormrage - Destroy Undead Base',
		'src' : "https://www.youtube.com/embed/znOPi5-jMpA?autoplay=1",
		'img' : "images/VideoImages/Awakening of Stormrage.png"		
	},
	{
		'title' : 'Twilight of the Gods - No Starfall',
		'src' : "https://www.youtube.com/embed/7CEWjnEjP-Q?autoplay=1",
		'img' : "images/VideoImages/Twilight of the Gods.png"		
	},
	{
		'title' : 'Frostmourne - Kill Malganis Without Arthas',
		'src' : "https://www.youtube.com/embed/nOV7RU7qxJ8?autoplay=1",
		'img' : "images/VideoImages/Frostmourne.png"		
	},
	{
		'title' : 'Under the Burning Sky - Destroy All Forces',
		'src' : "https://www.youtube.com/embed/QKN20ZKVKss?autoplay=1",
		'img' : "images/VideoImages/Under the Burning Sky.png"		
	},
];
var WarcraftFrozen = [
	{
		'title' : 'Frost and Flame - Destroy All Forces',
		'src' : "https://www.youtube.com/embed/AOu2ITDM404?autoplay=1",
		'img' : "images/VideoImages/Frost and Flame.png"		
	},
	{
		'title' : 'Ruins of Dalaran - Destroy All Enemy Bases',
		'src' : "https://www.youtube.com/embed/OhrdAya3K6g?autoplay=1",
		'img' : "images/VideoImages/Ruins of Dalaran.png"		
	},
	{
		'title' : 'King Arthas - 0 Escaped Villagers',
		'src' : "https://www.youtube.com/embed/IrUnOZmYugA?autoplay=1",
		'img' : "images/VideoImages/King Arthas.png"		
	},
	{
		'title' : 'Dreadlord\'s Fall - Destroy Both Bases',
		'src' : "https://www.youtube.com/embed/ocNJ4NCKnmk?autoplay=1",
		'img' : "images/VideoImages/Dreadlord's Fall.png"		
	},
	{
		'title' : 'The Crossing - 100% Portal Life',
		'src' : "https://www.youtube.com/embed/4qBRyVeFsVk?autoplay=1",
		'img' : "images/VideoImages/The Crossing.png"	
	},
	{
		'title' : 'Balancing the Scales - No Base Units',
		'src' : "https://www.youtube.com/embed/ZkNp7wqsf3s?autoplay=1",
		'img' : "images/VideoImages/Balancing the Scales.png"		
	},
	{
		'title' : 'Balancing the Scales - No Tyande/Furion',
		'src' : "https://www.youtube.com/embed/loObfZucIKs?autoplay=1",
		'img' : "images/VideoImages/Balancing the Scales.png"		
	},
];
var Starcraft2 = [
	{
		'title' : 'Unsealing the Past - Starting Units Only',
		'src' : "https://www.youtube.com/embed/FeGTt_Z-XyU?autoplay=1",
		'img' : "images/VideoImages/Unsealing the Past.png"		
	},
	{
		'title' : 'Salvation - No Allies',
		'src' : "https://www.youtube.com/embed/B34bX69xuec?autoplay=1",
		'img' : "images/VideoImages/Salvation.png"		
	},
	{
		'title' : 'The Essence of Eternity - No Celestial Beam',
		'src' : "https://www.youtube.com/embed/xFMYo4ktOoM?autoplay=1",
		'img' : "images/VideoImages/The Essence of Eternity.png"		
	},
	{
		'title' : 'Dark Whispers - Destroy Zerg Bases',
		'src' : "https://www.youtube.com/embed/VHd_UTP1NBY?autoplay=1",
		'img' : "images/VideoImages/Dark Whispers.png"		
	},
	{
		'title' : 'Templar\'s Charge - Stationary Platform',
		'src' : "https://www.youtube.com/embed/-O0gcw5gDhE?autoplay=1",
		'img' : "images/VideoImages/Templar's Charge.png"		
	},
	{
		'title' : 'Temple of Unification - Destroy All Forces',
		'src' : "https://www.youtube.com/embed/WmVlD7RtqRA?autoplay=1",
		'img' : "images/VideoImages/Temple of Unification.png"		
	},
	{
		'title' : 'Harbinger of Oblivion - Destroy Enemy Bases',
		'src' : "https://www.youtube.com/embed/Uno5NxtZbSU?autoplay=1",
		'img' : "images/VideoImages/Harbinger of Oblivion.png"		
	},
	{
		'title' : 'Last Stand - 2.6 Billion',
		'src' : "https://www.youtube.com/embed/qH32pAGFsbY?autoplay=1",
		'img' : "images/VideoImages/Last Stand.png"		
	},
];

var Videos = function(data) {
	this.title = data.title;
	this.src = data.src;
	this.img = data.img;
};

var ViewModel = function() {
	var self = this;
	self.youtube = ko.observable(true);
	self.cycling = ko.observable(false);
	self.ReignofChaos = ko.observableArray([]);
	self.FrozenThrone = ko.observableArray([]);
	self.Starcraft2 = ko.observableArray([]);
	Warcraft.forEach(function(data){
		self.ReignofChaos().push(new Videos(data));
	});
	WarcraftFrozen.forEach(function(data){
		self.FrozenThrone().push(new Videos(data));
	});
	Starcraft2.forEach(function(data){
		self.Starcraft2().push(new Videos(data));
	});
	self.setVideo = function() {
		console.log(this.src);
		var vid = document.getElementById("mainVideo");
		vid.src = this.src;
		var topPos = vid.offsetTop;
		$('.extraContainer').animate({
		    scrollTop: $("#mainVideo").offset().top
		}, 500)};
};

$(function() {
	ko.applyBindings(new ViewModel());
})