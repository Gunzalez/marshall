<!DOCTYPE html>
<html>
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
                    <li>Marshall Lorry Feature</li>
                </ul>
            </div>


            <div class="main">
                <div class="container">

                    <div class="main-heading">
                        <h2>Marshall Lorry Feature</h2>
                    </div>

                    <div class="mainbox news-detail content-detail">
                        <div class="content-copy">
                            <p class="date">11th September 2014</p>
                            <p>The new Marshall DAF XF510 was featured in the Transport News magazine last month.</p>
                            <p>To see more pictures of our lorries in action, visit: http://www.marshall-trailers.co.uk/downloads/image-gallery</p>
                            <img alt="Marshalls Latest Fan" class="responsive" src="http://www.marshall-trailers.co.uk/uploads/images/photo%201(7).JPG" title="Marshall Lorry Feature">
                        </div>
                        <a href="news.php" class="big-link blue-link">Back</a>
                    </div>


                    <?php include_once('includes/mainbox-configure.php'); ?>


                </div>
            </div>
            <div class="sidebar">

                <?php include_once('includes/sidebox-configure.php'); ?>

                <?php include_once('includes/sidebox-gallery-image.php'); ?>

                <?php include_once('includes/sidebox-news.php'); ?>

            </div>

        </div>

        <?php include_once('includes/footer.php'); ?>
        <div id="mobile-nav"></div>
    </div>

    <script src="js/jquery-1.9.1.min.js"></script>
    <script src="js/plugins/bxslider/jquery.bxslider.js"></script>
    <script type="text/javascript" src="js/plugins/fancybox/source/jquery.fancybox.js?v=2.1.5"></script>
    <script src="js/utilities.js"></script>
    <script src="js/marshall.js"></script>
</body>
</html>