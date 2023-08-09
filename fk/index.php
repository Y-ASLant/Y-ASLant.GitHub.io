<?php
$first=json_decode(file_get_contents("conn/config.json"))->first;

if($first=="1"){
    Header("Location: /install/");
    die();
}
require 'conn/conn.php';
require 'conn/function.php';
if($C_model==0){
    $P_id=getrs("select * from sl_product where P_mid=0 and P_sh=1 and P_del=0 order by P_order asc,P_id desc","P_id");
    if($P_id==""){
    	die("尚未发布商品");
    }else{
        if($C_html==1){
            header("location:shop/".$P_id);
        }else{
            header("location:shop/?id=".$P_id);
        }
    }
}
$type=$_GET["type"];
switch($type){
    case "index":
    case "":
        echo template(file_get_contents("template/t1/index.html"));
    break;
    case "about":
        echo template(file_get_contents("template/t1/about.html"));
    break;
    case "news":
        echo template(file_get_contents("template/t1/news.html"));
    break;
    case "query":
        echo template(file_get_contents("template/t1/query.html"));
    break;
    case "contact":
        echo template(file_get_contents("template/t1/contact.html"));
    break;
}

?>