<?php
error_reporting(0);
define('IN_CRONLITE', true);
define('VERSION', '1001');
define('SYSTEM_ROOT', dirname(__FILE__).'/');
define('ROOT', dirname(SYSTEM_ROOT).'/');
define('SYS_KEY', 'quanquan');
define('CC_Defender', 1); 

date_default_timezone_set("PRC");
$date = date("Y-m-d H:i:s");
session_start();

if(CC_Defender!=0)
	include_once SYSTEM_ROOT.'security.php';

require ROOT.'config.php';
include_once(SYSTEM_ROOT."db.class.php");
$DB=new DB($dbconfig['host'],$dbconfig['user'],$dbconfig['pwd'],$dbconfig['dbname'],$dbconfig['port']);

$rs=$DB->query("select * from yunxi_config");
while($row=$DB->fetch($rs)){ 
	$conf[$row['k']]=$row['v'];
}

$rs=$DB->query("select * from yunxi_ruanjian");
while($row=$DB->fetch($rs)){ 
	$con[$row['k']]=$row['v'];
}


include_once(SYSTEM_ROOT."function.php");
include_once(SYSTEM_ROOT."member.php");