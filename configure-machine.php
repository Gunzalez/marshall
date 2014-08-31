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


        <form id="config_machine" name="config_machine" class="validator" action="/configure_pdf.php" method="post" novalidate="novalidate" autocomplete="off">
        <div class="content full-width">
            <div class="main">

                    <div class="container">

                        <div class="main-heading">
                            <h2>Price & Configure a Marshall Machine</h2>
                        </div>

                        <div class="mainbox">
                            <h3 class="step">
                                <span>Step 1:</span>
                                Choose a machine
                            </h3>
                            <div class="body">
                                <div id="configure-machine" class="configure">
                                    <label>Choose machine to configure</label>
                                    <select id="machine" name="machine" required="required">
                                        <option value="">Please select...</option>
                                        <optgroup label="Monocoque Trailers">
                                            <option value="4">QM/6</option>
                                            <option value="6">QM/8</option>
                                            <option value="38">QM/11</option>
                                            <option value="39">QM/12</option>
                                            <option value="48">QM/1200</option>
                                            <option value="40">QM/14</option>
                                            <option value="49">QM/1400</option>
                                            <option value="41">QM/16</option>
                                            <option value="50">QM/1600</option>
                                        </optgroup>
                                        <optgroup label="Drop-Side Trailers">
                                            <option value="42">S/2</option>
                                            <option value="43">S/4</option>
                                            <option value="44">S/5</option>
                                            <option value="45">S/6</option>
                                            <option value="46">S/85</option>
                                            <option value="47">S/10</option>
                                        </optgroup>
                                        <optgroup label="Flat / Bale Trailers">
                                            <option value="32">BC/18</option>
                                            <option value="33">BC/21</option>
                                            <option value="34">BC/25-10ton</option>
                                            <option value="35">BC/25-12ton</option>
                                            <option value="36">BC/28</option>
                                            <option value="37">BC/32</option>
                                        </optgroup>
                                        <optgroup label="Dumper Trailers">
                                            <option value="27">QMD/6</option>
                                            <option value="28">QMD/8</option>
                                            <option value="119">QMD/10</option>
                                            <option value="30">QMD/12H</option>
                                            <option value="31">QMD/14H</option>
                                        </optgroup>
                                        <optgroup label="Feed Trailers">
                                            <option value="7">FT/15</option>
                                            <option value="8">FT/20</option>
                                        </optgroup>
                                        <optgroup label="Livestock Trailers / Containers">
                                            <option value="9">21</option>
                                            <option value="10">25</option>
                                            <option value="11">28</option>
                                            <option value="108">32</option>
                                        </optgroup>
                                        <optgroup label="Muck Spreaders">
                                            <option value="12">MS45</option>
                                            <option value="13">MS60</option>
                                            <option value="14">MS75</option>
                                            <option value="15">MS90</option>
                                            <option value="16">MS105</option>
                                        </optgroup>
                                        <optgroup label="Rear Discharge Muck Spreaders">
                                            <option value="17">VES1500</option>
                                            <option value="18">VES2000</option>
                                            <option value="19">VES2500</option>
                                        </optgroup>
                                        <optgroup label="Tankers">
                                            <option value="20">ST1200</option>
                                            <option value="21">ST1400</option>
                                            <option value="22">ST1600</option>
                                            <option value="23">ST1800</option>
                                            <option value="24">ST2000</option>
                                            <option value="25">ST2300</option>
                                            <option value="26">ST2550</option>
                                        </optgroup>
                                        <optgroup label="Feed Barriers">
                                            <option value="118">FB/6</option>
                                        </optgroup>
                                    </select>
                                </div>
                                <div id="configure-content" class="configure-content">
                                    <div class="empty-configuration">
                                        <h3>Please select a machine from the options</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mainbox configure-options open">
                            <h3 class="step">
                                <span>Step 2:</span>
                                Add your options
                                <a href="#" class="show-hide">
                                    <span class="show">Show
                                        <span class="fa fa-chevron-down">&nbsp;</span>
                                    </span>
                                    <span class="hide">Hide
                                        <span class="fa fa-chevron-up">&nbsp;</span>
                                    </span>
                                </a>
                            </h3>
                            <div class="body">
                                <ul id="options" class="options">
                                    <li>
                                        <h3>Silage Sides c/w Hyd Door Silage Attachments</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/QM12SS.jpg" alt="Silage Sides c/w Hyd Door Silage Attachments">
                                            <h4>Part No.<br>065/03-0645</h4>
                                            <p class="pricing">&pound;1,648.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>Essential for carrying silage. Comes complete with silage attachments for hydraulic door. Cubic capacity: 1013 cu.ft / 28.7 cu.mtrs</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 41"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="41" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li class="selected">
                                        <h3>Split Oscillating Suspension</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/Rockers.jpg" alt="Split Oscillating Suspension">
                                            <h4>Part No.<br>085/03-0000</h4>
                                            <p class="pricing">&pound;0.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>No-cost Option. Reduces lateral movement making high-loads more stable.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 51"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="51" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Top Silage Mesh Panel</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/Top Silage Mesh.jpg" alt="Top Silage Mesh Panel">
                                            <h4>Part No.<br>000/00-000</h4>
                                            <p class="pricing">&pound;96.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>Increases silage capacity by extending the height of the trailer front.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 48"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="48" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Spring Suspension</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/Springs.jpg" alt="Spring Suspension">
                                            <h4>Part No.<br>076/01-0000</h4>
                                            <p class="pricing">&pound;0.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>No-cost Option. Provides excellent performance on the road.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 49"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="49" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>NEW 400-60 x 22.5 Wheels</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/2008-400-60.jpg" alt="NEW 400-60 x 22.5 Wheels">
                                            <h4>Part No.<br>000/00-000</h4>
                                            <p class="pricing">&pound;788.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>These tyres offer general all-round performance, effectively reducing ground compaction and performing reasonably well during road use. Please note all prices are in place of standard tyres.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 71"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="71" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>550-45 x 22.5 Wheels</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/2008-550-45.jpg" alt="550-45 x 22.5 Wheels">
                                            <h4>Part No.<br>000/00-000</h4>
                                            <p class="pricing">&pound;2,205.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>These tyres are excellent in wet conditions and significantly reduce the ground compaction of the machine; ideal if the machine is predominantly used off-road. This price includes the necessary mudguards. Please note all prices are in place of standard tyres.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 72"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="72" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>560-45 x 22.5 Wheels</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/09-12-15 560-45 Wheel.jpg" alt="560-45 x 22.5 Wheels">
                                            <h4>Part No.<br>000/00-000</h4>
                                            <p class="pricing">&pound;2,845.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>These tyres excell at both on road performance and off-road performance and are the best all-round tyres we offer. This price includes the necessary mudguards. Please note all prices are in place of standard tyres.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 75"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="75" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>16.5 x 70-18ply Wheels</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/2008-16.5x70.jpg" alt="16.5 x 70-18ply Wheels">
                                            <h4>Part No.<br>083/01-165-70/08</h4>
                                            <p class="pricing">&pound;884.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>These tyres offer general all-round performance, effectively reducing ground compaction and performing reasonably well during road use. Please note all prices are in place of standard tyres.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 88"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="88" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>10 Stud Commercial Axles (406 x 120 S Cam)</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/08-06-06 10-stud Commercial Axle (4).jpg" alt="10 Stud Commercial Axles (406 x 120 S Cam)">
                                            <h4>Part No.<br>050/01-1076</h4>
                                            <p class="pricing">&pound;1,214.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>Ideal if the machine is frequently used on the road. Please note price is for a pair of axles in lieu of 8 stud axles.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 90"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="90" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>10 Stud Commercial Axles c/w ABS Brakes</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/11-07-15 ABS.jpg" alt="10 Stud Commercial Axles c/w ABS Brakes">
                                            <h4>Part No.<br>050/03-1076</h4>
                                            <p class="pricing">&pound;4,870.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>Ideal if the machine is frequently used on the road, and provides HGV levels of braking. Please note price is for a pair of axles in lieu of 8 stud axles.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 91"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="91" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>10 Stud Commercial Axles (420 x 180 S Cam)</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/10 Stud Commercial Axle 420x180 S-cam.jpg" alt="10 Stud Commercial Axles (420 x 180 S Cam)">
                                            <h4>Part No.<br>050/01-1081</h4>
                                            <p class="pricing">&pound;2,104.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>Ideal if the machine is frequently used on the road. Please note price is for a pair of axles in lieu of 8 stud axles.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 93"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="93" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Air/Oil Brakes c/w Load Sensing (Non ABS)</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/Air Brakes pg 21.jpg" alt="Air/Oil Brakes c/w Load Sensing (Non ABS)">
                                            <h4>Part No.<br>050/11-4000</h4>
                                            <p class="pricing">&pound;1,250.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>Ideal if the machine is frequently used on the road, provides improved braking for higher speeds. Automatic load sensing available on springs &amp; manual load sensing available on rockers.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 98"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="98" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Oil Brakes Load Sensing System</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/Oil_Load_Sensing_Valve_(web).jpg" alt="Oil Brakes Load Sensing System">
                                            <h4>Part No.<br>082/03-1000</h4>
                                            <p class="pricing">&pound;750.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>This optional extra prevents the trailer wheels from locking up by reducing the flow of oil to the brake rams.  Automatic load sensing available on springs &amp; manual load sensing available on rockers.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 99"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="99" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Hydraulic Door Safety Valve</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/safety_valve.jpg" alt="Hydraulic Door Safety Valve">
                                            <h4>Part No.<br>082/02-3000</h4>
                                            <p class="pricing">&pound;160.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>Ensures the hydraulic door of the trailer cannot be opened unless the trailer body is slightly tipped.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 107"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="107" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Hydraulic Door Seal</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/11-07-26 QM Hydraulic Door Seal (2).jpg" alt="Hydraulic Door Seal">
                                            <h4>Part No.<br>067/08-0820</h4>
                                            <p class="pricing">&pound;95.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>This rubber seal acts as an extra measure to ensure the rear door securely seals.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 108"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="108" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>8" Grain Hatch</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/8 inch Grain Hatch.jpg" alt="8" grain="" hatch"="">
                                            <h4>Part No.<br>065/07-8000</h4>
                                            <p class="pricing">&pound;118.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>Allows easy discharge of grain, with a simple and reliable design.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 109"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="109" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>12" Grain Hatch</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/12 inch Grain Hatch.jpg" alt="12" grain="" hatch"="">
                                            <h4>Part No.<br>065/07-1200</h4>
                                            <p class="pricing">&pound;142.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>Allows easy discharge of grain, with a simple and reliable design.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 110"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="110" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>12" Grain Hatch with Sock</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/10-08 T4U Grain Sock.jpg" alt="12" grain="" hatch="" with="" sock"="">
                                            <h4>Part No.<br>065/07-1250</h4>
                                            <p class="pricing">&pound;306.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>Allows easy discharge of grain, with a simple and reliable design. The additional grain sock ensures the discharge is complete without excessive dust or mess.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 111"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="111" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Front Body Prop</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/Front Body Prop.jpg" alt="Front Body Prop">
                                            <h4>Part No.<br>065/11-0200</h4>
                                            <p class="pricing">&pound;90.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>Allows the underside of the trailer to be safely worked on.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 116"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="116" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Rear Tow Hitch c/w Lights &amp; Brakes</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/Rear Tow Hitch.jpg" alt="Rear Tow Hitch c/w Lights &amp; Brakes">
                                            <h4>Part No.<br>065/04-5000</h4>
                                            <p class="pricing">&pound;325.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>Allows multiple machines to be moved around the farm at once.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 117"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="117" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Swivel Hitch</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/Swivel Hitch.jpg" alt="Swivel Hitch">
                                            <h4>Part No.<br>060/01-0050</h4>
                                            <p class="pricing">&pound;155.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>Reduces wear on the tractor pick-up hitch.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 118"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="118" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Mudguards/Wings</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/Mudguards.jpg" alt="Mudguards/Wings">
                                            <h4>Part No.<br>065/03-6005</h4>
                                            <p class="pricing">&pound;365.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>Doubles the floor thickness above the wheels and reduces mud splatter to the rest of the machine.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 120"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="120" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Perspex Front Window</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/Perspex Window.jpg" alt="Perspex Front Window">
                                            <h4>Part No.<br>067/06-4000</h4>
                                            <p class="pricing">&pound;125.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>Allows a clear view when loading the trailer.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 123"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="123" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Perspex Front Window - Full Width</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/New Full-width Window.jpg" alt="Perspex Front Window - Full Width">
                                            <h4>Part No.<br>067/06-4100</h4>
                                            <p class="pricing">&pound;595.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>Provides maximum visibility when loading the trailer. Included with the window is a galavanized grill and blanking plate.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 125"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="125" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Trailer Cover</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/Cover.jpg" alt="Trailer Cover">
                                            <h4>Part No.<br>057/02-1101</h4>
                                            <p class="pricing">&pound;220.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>A simple 640g PVC cover to protect grain or other valuable loads.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 134"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="134" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Roll Over Cover</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/Rollover Cover.jpg" alt="Roll Over Cover">
                                            <h4>Part No.<br>057/01-1101</h4>
                                            <p class="pricing">&pound;1,275.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>This heavy-duty 1000g PVC cover allows loads to be quickly covered and protected, ideal when carrying mutliple loads between the fields and farm.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 144"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="144" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Taildoor Cover</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/Taildoor Cover.jpg" alt="Taildoor Cover">
                                            <h4>Part No.<br>057/03-1000</h4>
                                            <p class="pricing">&pound;158.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>This cover that can be used on silage doors to prevent maize and other crops passing through the mesh door.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 148"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="148" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Electric Cover</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/QM14 DOCKS COVERS.jpg" alt="Electric Cover">
                                            <h4>Part No.<br>057/01-3001</h4>
                                            <p class="pricing">&pound;3,180.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>This cover electrically deploys from the front of the trailer to the back to quickly cover and protect loads.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 149"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="149" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>LED Beacon</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/LED Beacon (3).jpg" alt="LED Beacon">
                                            <h4>Part No.<br>064/02-8020</h4>
                                            <p class="pricing">&pound;135.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>Ideal if the machine is frequently used on the road.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 200"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="200" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>LED Lights</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/LED_lights.jpg" alt="LED Lights">
                                            <h4>Part No.<br>064/02-9010</h4>
                                            <p class="pricing">&pound;150.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>Improved visibility of the machine and reduces maintenance of lights.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 201"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="201" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Dual Lights</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/Dual Lights.jpg" alt="Dual Lights">
                                            <h4>Part No.<br>064/03-0002</h4>
                                            <p class="pricing">&pound;205.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>Provides improved visibility. Machine now has four indicators and four brake lights.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 203"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="203" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>High-level Rear LED Lights</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/High Level LEDs (1).jpg" alt="High-level Rear LED Lights">
                                            <h4>Part No.<br>064/02-9020</h4>
                                            <p class="pricing">&pound;240.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>These lights are mounted on the top of the door, to further improve visibility</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 206"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="206" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Bespoke Colour Finish - Single Colour</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/11-8-1 S5 SS Yellow (9).jpg" alt="Bespoke Colour Finish - Single Colour">
                                            <h4>Part No.<br>000/00-000</h4>
                                            <p class="pricing">&pound;200.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>Your Marshall product can receive a bespoke paint finish. Please note paint is not guaranteed to be an exact colour match, although every effort will be made to match the colour as closely as possible.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 207"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="207" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Bespoke Colour Finish - Dual Colour</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/12-07-17 QM11SS.jpg" alt="Bespoke Colour Finish - Dual Colour">
                                            <h4>Part No.<br>000/00-000</h4>
                                            <p class="pricing">&pound;400.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>Your Marshall product can receive a bespoke paint finish. Please note paint is not guaranteed to be an exact colour match, although every effort will be made to match the colour as closely as possible.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 208"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="208" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Rear Name Plate</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/Rear Name QM Range (2).jpg" alt="Rear Name Plate">
                                            <h4>Part No.<br>000/00-000</h4>
                                            <p class="pricing">&pound;135.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>Your Marshall product can have your name or farm name on the rear door.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 209"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="209" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li>
                                        <h3>T4U Model</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/tailored_4_you.jpg" alt="T4U Model">
                                            <h4>Part No.<br>000/00-000</h4>
                                            <p class="pricing">&pound;0.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>If a customer selects four extras it automatically becomes a T4U model, and receives a unique coloured chassis and other special extras.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 210"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="210" class="optionCheckbox">
                                        </div>
                                    </li>
                                    <li id="delivery" class="selected">
                                        <h3>Delivery Charge</h3>
                                        <div class="col left">
                                            <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/delivery_lorry.jpg" alt="Delivery Charge">
                                            <h4>Part No.<br>000/00-000</h4>
                                            <p class="pricing">&pound;145.00</p>
                                        </div>
                                        <div class="col right">
                                            <p>This is the standard rate for delivery to a UK mainland address.</p>
                                        </div>
                                        <div class="add">
                                            <label for="option" 211"="">Click to add to my machine</label>
                                            <input type="checkbox" name="option[]" value="211" class="optionCheckbox" checked="checked">
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="mainbox basket open">
                            <h3 class="step">
                                <span>Step 3:</span>
                                Confirm your specifications
                                <a href="#" class="show-hide">
                                    <span class="show">Show
                                        <span class="fa fa-chevron-down">&nbsp;</span>
                                    </span>
                                    <span class="hide">Hide
                                        <span class="fa fa-chevron-up">&nbsp;</span>
                                    </span>
                                </a>
                            </h3>
                            <div class="body">
                                <table cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th class="image">Image</th>
                                            <th class="name">Product name</th>
                                            <th class="cost">Cost</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <td colspan="2" class="total">Retail Price Total ex VAT:</td>
                                            <td class="cost">&pound;<span id="total_cost">12,911.00</span></td>
                                        </tr>
                                    </tfoot>
                                    <tbody id="quote">
                                        <tr>
                                            <td class="image"><img src="http://www.marshall-trailers.co.uk/uploads/products/thumbnails/290313-0832-5148.jpg" alt="QM1200 Monocoque Trailer"></td>
                                            <td class="name">Monocoque Trailers / QM/1200 - Basic price:</td>
                                            <td class="cost">&pound;12,552.00</td>
                                        </tr>
                                        <tr id="211">
                                            <td class="image"><img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/delivery_lorry.jpg" alt="Delivery Charge"></td>
                                            <td class="name">Delivery Charge (000/00-000):</td>
                                            <td class="cost">&pound;145.00</td>
                                        </tr>
                                        <tr id="48">
                                            <td class="image"><img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/Top Silage Mesh.jpg" alt="Top Silage Mesh Panel"></td>
                                            <td class="name">Top Silage Mesh Panel (000/00-000):</td>
                                            <td class="cost">&pound;96.00</td>
                                        </tr>
                                        <tr id="109">
                                            <td class="image"><img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/8 inch Grain Hatch.jpg" alt="8 grain hatch"></td>
                                            <td class="name">8" Grain Hatch (065/07-8000):</td>
                                            <td class="cost">&pound;118.00</td>
                                        </tr>
                                    </tbody>
                                </table>
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