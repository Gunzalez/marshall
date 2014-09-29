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
                    <li>Downloads</li>
                </ul>
            </div>


            <div class="main">
                <div class="container">

                    <div class="main-heading">
                        <h2>Downloads</h2>
                    </div>

                    <div class="mainbox content-detail">
                        <p>This section allows customers to download our price list, handbooks and a number of other useful resources. In addition all the photos and videos that feature on the website are consolidated in one place to allow easy browsing.</p>
                        <p>This section includes:</p>
                        <ul class="bullets">
                            <li><a href="#">Owners Manuals</a> - downloadable owners manuals for some of our machines</li>
                            <li><a href="#">Videos</a> - linked to Marshall products featured on YouTube</li>
                            <li><a href="image-gallery.php">Image Gallery</a> - of all product related images on the site, available for downloading</li>
                            <li><a href="#">General documents</a> - including Marshall logo's, product leaflets and the latest Marshall pricelist</li>
                        </ul>
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