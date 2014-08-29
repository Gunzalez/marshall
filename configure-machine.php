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


        <form id="config_machine" name="config_machine" class="validator" action="/configure_pdf.php" method="post" novalidate="novalidate">
        <div class="content full-width">
            <div class="main">

                    <div class="container">

                        <div class="main-heading">
                            <h2>Price & Configure a Marshall Machine</h2>
                        </div>

                        <div class="mainbox">
                            <h3 class="step">
                                <span>Step 1:</span>
                                Choose basic machine specifications
                            </h3>
                            <div class="body">

                            </div>
                        </div>

                        <div class="mainbox">
                            <h3 class="step">
                                <span>Step 2:</span>
                                Choose basic machine specifications
                                <a href="#">
                                    <span class="show">Show</span>
                                    <span class="hide">Hide</span>
                                </a>
                            </h3>
                            <div class="body">

                            </div>
                        </div>





                    </div>


            </div>

        </div>
        </form>

        <?php include_once('includes/footer.php'); ?>
        <div id="mobile-nav"></div>
    </div>

    <script src="js/jquery-1.9.1.min.js"></script>
    <script src="js/plugins/bxslider/jquery.bxslider.js"></script>
    <script src="js/plugins/jqmodal/jqModal.js"></script>
    <script type="text/javascript" src="js/plugins/fancybox/source/jquery.fancybox.js?v=2.1.5"></script>
    <script src="js/utilities.js"></script>
    <script src="js/marshall.js"></script>
</body>
</html>