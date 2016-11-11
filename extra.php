<!DOCTYPE html>
<html>
<head>
	<title>Website Lets Try Again</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/extrastyle.css">
</head>
<body>
	<header>
		<div class="wrapper">
			<img src="images/logowhite.svg" height="125">
			<nav>
				<ul>
					<li>{</li>
					<li><a href="index.html">Home</a></li>
					<li><a href="about.html">About</a></li>
					<li><a href="projects.html">Projects</a></li>
					<li><a href="extra.html">Extra</a></li>
					<li>}</li>
				</ul>		
			</nav>
		</div>
	</header>

	<main>
		<article>
			<section id="container">
				<div class="filter">
					<li class="youtubeLink current"><a href="gaming.html">Gaming</a></li>
					<li class="comicLink current"><a href="extra.html">Comic</a></li>
					<li class="artworksLink current"><a href="artworks.html">Artworks</a></li>
				</div>

				<div class="comicContainer">
				
					<div class="comic">
						<?php include 'comic/1.html'; ?>
					</div>

					<div class="comicNav">
						<ul>
							<li class="first" data-bind="click: $root.firstComic">First</li>
							<li class="previous" data-bind="click: $root.previous">Previous</li>
							<li class="archive">Archive</li>
							<li class="next" data-bind="click: $root.next">Next</li>
							<li class="last" data-bind="click: $root.lastComic">Last</li>
						</ul>
					</div>

					<div class="archives">
						<h3>Find a comic</h3>
						<ul data-bind="foreach: Comics">
							<li data-bind= "text: title, click: $root.setComic"></li>
						</ul>
					</div>
				</div>
					
			</section>
		</article>	
	</main>

	<footer>
		<p>Alex Morishita</p>
	</footer>
	<link rel="stylesheet" href="css/extraComicStyle.css">
	<script src="js/libs/jquery-3.1.0.min.js"></script>
	<script src="js/libs/knockout.js"></script>
	<script src="js/extra.js"></script>
</body>
</html>