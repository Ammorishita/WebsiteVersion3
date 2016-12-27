<!DOCTYPE html>
<html>
<head>
  <title>Website Lets Try Again</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="../css/extrastyle.css">
</head>
<body>
<?php include('../comicheader.html');?>

  <main>
    <article>
      <section id="container">

      <?php include('../comicfilter.html');?>

        <div class="comicContainer">
          <div class="comic" data-bind="">
            <img id="currentComic" src="../images/Comic/Ch4.png" width="1000" data-bind="">
          </div>

          <div class="comicNav">
            <ul>
              <li class="first"><a href="1.php">First</a></li>
              <li class="previous"><a href="3.php">Previous</a></li>
              <li class="archive">Archive</li>
              <li class="next"><a href="4.php">Next</a></li>
              <li class="last"><a href="4.php">Last</a></li>
            </ul>
          </div>
        <?php include('../comicarchives.html');?>
        </div>
          
      </section>
    </article>  
  </main>
  <?php include('../footer.html');?>
  <link rel="stylesheet" href="../css/extraComicStyle.css">
  <script src="../js/libs/jquery-3.1.0.min.js"></script>
  <script src="../js/libs/knockout.js"></script>
  <script src="../js/extra.js"></script>
</body>
</html>