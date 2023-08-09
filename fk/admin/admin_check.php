<?php
if($_SESSION["A_login"]=="" || $_SESSION["A_pwd"]==""){
	Header("Location: login.php");
    die();
}else{
	$C=getrs("select * from sl_config where C_admin='".$_SESSION["A_login"]."' and C_pwd='".$_SESSION["A_pwd"]."'");
	if($C=="") {
		Header("Location: login.php");
    	die();
	}
}
?>