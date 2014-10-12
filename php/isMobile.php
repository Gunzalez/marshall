<?php
$detect = new Mobile_Detect;
$mobileCSS = ' class="desktop"';
if ($detect->isMobile()){
    $mobileCSS = ' class="mobile"';
}
?>