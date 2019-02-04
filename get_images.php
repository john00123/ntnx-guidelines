<?php

if(!$_SERVER['HTTP_X_REQUESTED_WITH'])
{
    //redirect to Forbidden if page is called directly and not through AJAX
    header("HTTP/1.0 403 Forbidden");
    exit;
}

$images = array();
foreach(glob("images/*") as $image) {
    $images[] = $image;
}
echo json_encode($images);
?>
