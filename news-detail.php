<?php
require_once('php/Mobile_Detect.php');
require_once('php/isMobile.php');
?>
<!DOCTYPE html>
<html<?php echo $mobileCSS; ?>>
<head>
    <meta charset="utf-8">
    <title>Marshall Trailers</title>

    <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="js/plugins/fancybox/source/jquery.fancybox.css?v=2.1.5" media="screen" />

    <link rel="stylesheet" type="text/css" href="css/marshall.css">
    <script src="js/modernizr-2.6.1.min.js"></script>
</head>
<body>

    <div class="page">
        <?php include_once('includes/header.php'); ?>

        <div class="content">

            <div class="breadcrumb">
                <ul>
                    <li><a href="index.php" title="Home">Home</a> &gt; </li>
                    <li><a href="news.php">News</a> &gt; </li>
                    <li>Lackham College Trailers 2</li>
                </ul>
            </div>


            <div class="main">
                <div class="container">

                    <div class="main-heading">
                        <h2>Lackham College Trailers 2</h2>
                    </div>

                    <div class="mainbox news-detail content-detail">

                        <div class="content-copy">
                            <p class="date">18th September 2014</p>
                            <p>Three QM/14SS monocoque trailers sold by one of our dealers Chippenham Farm Sales to Lackham College in Wilthshire...</p>
                            <a href="http://www.marshall-trailers.co.uk/uploads/news/large/180914-0838-7364.jpg" title="QM/14SS Lackham College Farm" class="fancybox" rel="news_gallery"><img src="http://www.marshall-trailers.co.uk/uploads/news/medium/180914-0838-7364.jpg" alt="QM/14SS Lackham College Farm" class="float-left shadow set-of-two"></a>
                            <a href="http://www.marshall-trailers.co.uk/uploads/news/large/180914-0839-8345.jpg" title="QM/14SS Lackham College Farm" class="fancybox" rel="news_gallery"><img src="http://www.marshall-trailers.co.uk/uploads/news/medium/180914-0839-8345.jpg" alt="QM/14SS Lackham College Farm" class="float-right shadow set-of-two"></a>
                            <a href="http://www.marshall-trailers.co.uk/uploads/news/large/180914-0839-3680.jpg" title="QM/14SS Lackham College Farm" class="fancybox" rel="news_gallery"><img src="http://www.marshall-trailers.co.uk/uploads/news/medium/180914-0839-3680.jpg" alt="QM/14SS Lackham College Farm" class="float-left shadow set-of-two"></a>
                            <a href="http://www.marshall-trailers.co.uk/uploads/news/large/180914-0839-2759.jpg" title="QM/14SS Lackham College Farm" class="fancybox" rel="news_gallery"><img src="http://www.marshall-trailers.co.uk/uploads/news/medium/180914-0839-2759.jpg" alt="QM/14SS Lackham College Farm" class="float-right shadow set-of-two"></a>
                            <a href="http://www.marshall-trailers.co.uk/uploads/news/large/180914-0840-9596.jpg" title="QM/14SS Lackham College Farm" class="fancybox" rel="news_gallery"><img src="http://www.marshall-trailers.co.uk/uploads/news/medium/180914-0840-9596.jpg" alt="QM/14SS Lackham College Farm" class="float-left shadow set-of-two""></a>
                            <a href="http://www.marshall-trailers.co.uk/uploads/news/large/180914-0838-1897.jpg" title="QM/14SS Lackham College Farm" class="fancybox" rel="news_gallery"><img src="http://www.marshall-trailers.co.uk/uploads/news/medium/180914-0838-1897.jpg" alt="QM/14SS Lackham College Farm" class="float-right shadow set-of-two"></a>
                        </div>

                        <a href="news.php" class="big-link blue-link">Back</a>
                    </div>

                    <?php include_once('includes/mainbox-configure.php'); ?>

                </div>
            </div>
            <div class="sidebar sidebox-2">

                <?php include_once('includes/sidebox-configure.php'); ?>

                <?php include_once('includes/sidebox-gallery-image.php'); ?>

                <?php include_once('includes/sidebox-news.php'); ?>

            </div>

        </div>

        <?php include_once('includes/footer.php'); ?>
        <div id="mobile-nav"></div>
    </div>

    <?php include_once('includes/back-to-top.php'); ?>
    <?php include_once('includes/javascript.php'); ?>

</body>
</html>