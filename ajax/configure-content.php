<?php
$machineId = $_GET['machineId'];
if ($machineId % 2 == 0) {
?>

<div class="img">
    <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/171211-1824-1265.jpg" alt="The Marshall ST2000 slurry tanker.">
</div>
<div class="content">
    <h3>Tankers / ST2000</h3>
    <ul class="specs">
        <li><strong>Standard Tyres:</strong> 750/60 - 30.5 90mm 10 stud Axle</li>
        <li><strong>Sprung Drawbar:</strong> standard</li>
        <li><strong>Pump Size:</strong> 10,000l</li>
    </ul>
    <h4>Basic Price: &pound;14,450.00</h4>
    <a href="#" id="btnConfigure" class="add-options">Add your options</a>
</div>

<?php } else { ?>

<div class="img">
    <img src="http://www.marshall-trailers.co.uk/uploads/products/optionals/290313-0832-5148.jpg" alt="QM1200 Monocoque Trailer">
</div>
<div class="content">
    <h3>Monocoque Trailers / QM/1200</h3>
    <ul class="specs">
        <li><strong>Standard Tyres:</strong> 400-60R x 22.5 80mm 8 Stud Tandem Axles</li>
        <li><strong>Body Size:</strong> 16' x 7' 9" - 8' x 4' 8"</li>
        <li><strong>Standard Equipment:</strong> Spring Drawbar / Hydraulic Up &amp; Over Grain Door / Inspection Ladders / Adjustable Drawbar</li>
    </ul>
    <h4>Basic Price: &pound;12,552.00</h4>
    <a href="#" id="btnConfigure" class="add-options">Add your options</a>
</div>

<?php
}
?>