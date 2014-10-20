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
                    <li>Bespoke OMD/10 Dump Trailer</li>
                </ul>
            </div>


            <div class="main">
                <div class="container">

                    <div class="main-heading">
                        <h2>Bespoke OMD/10 Dump Trailer</h2>
                    </div>

                    <div class="mainbox news-detail content-detail">

                        <div class="content-copy">
                            <p class="date">25th Aug 2014</p>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                            <p>Kalesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>

                            <img src="images/news-image.jpg" class="responsive" />

                            <p>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ant pink llentestique senectus et netus et malesuada fames ac turpis egestas.</p>
                            <p>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Maursque habitant morbi triis csan.</p>
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