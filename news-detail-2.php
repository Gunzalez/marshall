<?php
require_once('php/Mobile_Detect.php');
require_once('php/isMobile.php');
?>
<!DOCTYPE html>
<html<?php echo $mobileCSS; ?>>
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
                    <li>Our Latest Marshall Fan...</li>
                </ul>
            </div>


            <div class="main">
                <div class="container">

                    <div class="main-heading">
                        <h2>Our Latest Marshall Fan...</h2>
                    </div>

                    <div class="mainbox news-detail content-detail">
                        <div class="content-copy">
                            <p class="date">11th Aug 2014</p>
                            <p>Our deputy foreman, Gordon Farquhar, recently became a grandfather and has already made sure his grand-daughter Emma knows who makes the best trailers! Congratulations to Gordon and his family!</p>
                            <img alt="Marshalls Latest Fan" class="responsive" src="http://www.marshall-trailers.co.uk/uploads/images/14_08_11 Gordon Farquhar Grand-daughter Emma.jpg" title="Marshalls Latest Fan">
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