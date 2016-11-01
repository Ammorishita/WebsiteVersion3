$(document).ready(function() {
	$('.archive').click(function() {
		$('.archives').fadeToggle();
	});
});
var comic, currentComic;
var ArtworkList = [
	{
		'title' : 'Four Elements',
		'img' : 'images/Artworks/4 Elements.jpg'
	},
	{
		'title' : 'Beach Cycling',
		'img' : 'images/Artworks/Beach Cycling.jpg'
	},
	{
		'title' : 'Sniper Soldier',
		'img' : 'images/Artworks/Sniper Soldier.jpg'
	},
	{
		'title' : 'Snow Archer',
		'img' : 'images/Artworks/Archer.png'
	},
];
var GraphicList = [
	{
		'title' : 'Wolf Head Old',
		'img' : 'images/Artworks/Wolf Head Old.jpg',
		'height' : '400'
	},
	{
		'title' : 'Wolf Head',
		'img' : 'images/Artworks/Wolf Head.png',
		'height' : '400'
	},
	{
		'title' : 'Gladiator Old',
		'img' : 'images/Artworks/Gladiator old.jpg',
		'height' : '375'
	},
	{
		'title' : 'Gladiator',
		'img' : 'images/Artworks/gladiator.png',
		'height' : '375'
	},
	{
		'title' : 'Football Field Old',
		'img' : 'images/Artworks/Football Field Old.jpg',
		'height' : '300'
	},
	{
		'title' : 'Football Field',
		'img' : 'images/Artworks/Football Field.jpg',
		'height' : '300'
	},
	{
		'title' : 'DiamondDustersOld',
		'img' : 'images/Artworks/DiamondDustersOld.jpg',
		'height' : '235'
	},
	{
		'title' : 'DiamondDusters',
		'img' : 'images/Artworks/DiamondDusters.jpg',
		'height' : '235'
	},
	{
		'title' : 'Bison Old',
		'img' : 'images/Artworks/Bison Old.jpg',
		'height' : '400'
	},
	{
		'title' : 'Bison',
		'img' : 'images/Artworks/Bison.png',
		'height' : '400'
	},
	{
		'title' : 'Helmet Logo Old',
		'img' : 'images/Artworks/Helmet Logo Old.jpg',
		'height' : '350'
	},
	{
		'title' : 'Helmet Logo',
		'img' : 'images/Artworks/HelmetLogo.png',
		'height' : '350'
	},
	{
		'title' : 'Eagle NH old',
		'img' : 'images/Artworks/eaglenewNHold.jpg',
		'height' : '400'
	},
	{
		'title' : 'Eagle Nh',
		'img' : 'images/Artworks/eaglenewNH.png',
		'height' : '400'
	},
];
var ComicList = [
	{
		'title' : 'Chapter 1: Pest Control',
		'src' : "images/Comic/Ch1.png"
	},
	{
		'title' : 'Chapter 2: No Parking',
		'src' : "images/Comic/Ch2.png"
	},
	{
		'title' : 'Chapter 3: Pasta and Cereal',
		'src' : "images/Comic/Ch3.png"
	},	
	{
		'title' : 'Chapter 4: Hard to See',
		'src' : "images/Comic/Ch4.png"
	},
]
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
	this.title = (data.title);
	this.src = data.src;
	this.img = data.img;
};
var Comic = function(data) {
	this.title = data.title;
	this.src = data.src;
};
var Artwork = function(data) {
	this.title = data.title;
	this.img = data.img;
	this.height = data.height;
};

var ViewModel = function() {
	var self = this;
	comic = document.getElementById('currentComic')
	currentComic = ComicList.length - 1;
	self.youtube = ko.observable(false);
	self.comic = ko.observable(false);
	self.artworks = ko.observable(true);
	self.projects = ko.observable(false);
	self.illustration = ko.observable(false);
	self.vectors = ko.observable(true);
	self.ReignofChaos = ko.observableArray([]);
	self.FrozenThrone = ko.observableArray([]);
	self.Starcraft2 = ko.observableArray([]);
	self.Comics = ko.observableArray([]);
	self.Artworks = ko.observableArray([]);
	self.Graphics = ko.observableArray([]);
	$('.current').click(function() {
		self.youtube(false);
		self.comic(false);
		self.artworks(false);
		self.projects(false);
		var currentClass = ($(this).attr("class"))
		if(currentClass == 'youtubeLink current') {self.youtube(true);}
		if(currentClass == 'comicLink current') {self.comic(true);}
		if(currentClass == 'artworksLink current') {self.artworks(true);}
		if(currentClass == 'projectsLink current') {self.projects(true);}
	});
	$('.illustrationLink').click(function() {
		self.illustration(true);
		self.vectors(false);
		$('#artworksSubContainer').animate({
		    scrollTop: 0
		}, 0);
	});
	$('.graphicsLink').click(function() {
		self.illustration(false);
		self.vectors(true);
		$('#graphicsSubContainer').animate({
		    scrollTop: 0
		}, 0);
	});
	ArtworkList.forEach(function(data) {
		self.Artworks().push(new Artwork(data));
	});
	GraphicList.forEach(function(data) {
		self.Graphics().push(new Artwork(data));
	});
	console.log(self.Artworks())
	ComicList.forEach(function(data) {
		self.Comics().push(new Comic(data));
	});
	console.log(self.Comics());
	Warcraft.forEach(function(data){
		self.ReignofChaos().push(new Videos(data));
	});
	WarcraftFrozen.forEach(function(data){
		self.FrozenThrone().push(new Videos(data));
	});
	Starcraft2.forEach(function(data){
		self.Starcraft2().push(new Videos(data));
	});
	self.setComic = function() {
		comic.src = this.src;
		currentComic = ComicList.map(function(e) { return e.title; }).indexOf(this.title);
		console.log(currentComic);
	};

	self.firstComic = function() {
		comic.src = ComicList[0].src;
		currentComic = 0;
	};
	self.lastComic = function() {
		currentComic = ComicList.length - 1;
		comic.src = ComicList[currentComic].src;
	};
	self.next = function() {
		var length = ComicList.length- 1;
		if (currentComic == length) {} else {
			currentComic++;
			comic.src = ComicList[currentComic].src;
		}
	};
	self.previous = function() {
		if (currentComic == 0) {} else {
			currentComic--;
			comic.src = ComicList[currentComic].src;
		}
	};
	self.setVideo = function() {
		console.log(this.src);
		var vid = document.getElementById("mainVideo");
		vid.src = this.src;
		var topPos = vid.offsetTop;
		$('.youtubeContainer').animate({
		    scrollTop: $("#mainVideo").offset().top
		}, 500)
	};
};

$(function() {
	ko.applyBindings(new ViewModel());
})