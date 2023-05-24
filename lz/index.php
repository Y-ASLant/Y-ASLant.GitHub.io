<?php
header('Access-Control-Allow-Origin:*');error_reporting("E_ALL");ini_set("display_errors", 1);
header('Content-Type:application/json; charset=utf-8');
$d = isset($_GET['d']) ? $_GET['d'] : "";
$url = isset($_GET['url']) ? $_GET['url'] : "";
$pwd = isset($_GET['pwd']) ? $_GET['pwd'] : "";
$type = isset($_GET['type']) ? $_GET['type'] : "";
include('lanzou.clsss.php');
if(!empty($d) && empty($url)){$arr = explode('-',$d);$url=$arr[0];$pwd=$arr[1];$type='down';}
$lz = new lanzou;
if($type=='check'){
   $info= $lz->checkurl();
   $res=array('status'=>1,'info'=>$info);ajaxReturn($res);
}else{
   $res=$lz->getUrl($url,$pwd);
   if($res['status']==0)ajaxReturn($res);
   switch($type){
        case "down":
        header("Location:".$res['info']);die;
        break;
        default:
        ajaxReturn($res);
        break;
    }
}

function ajaxReturn($array){
    $content=json_encode($array,JSON_UNESCAPED_UNICODE);
    if(empty($_GET['callback'])){
        echo $content;exit;
    }else{
        echo $_GET['callback']."(".$content.")";exit;
    }
}
?>