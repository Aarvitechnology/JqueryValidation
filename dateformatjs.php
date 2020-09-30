<?php
// require_once('include/config.php');

// require_once('include/session_check.php');

// require_once('include/config_key_list.php');

// $FinalDate_format = str_replace('yy','yyyy',BUSINESS_JS_DATEFORMAT);

$FinalDate_format = 'DD-MM-YYYY';

$response['code'] = '1';
$response['data'] = $FinalDate_format;
echo json_encode($response);
exit;

?>