<?php
$detect = new Mobile_Detect;
$mobileCSS = ' class="desktop"';
if ($detect->isMobile()){
    $mobileCSS = ' class="mobile"';
}

function writeTextContent($mobileString, $desktopString){
    global $detect;
    if ($detect->isMobile()){
        echo $mobileString;
    } else {
        echo $desktopString;
    }
}
?>