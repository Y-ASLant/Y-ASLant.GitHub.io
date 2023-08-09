<?php
header("content-type:text/html;charset=utf8");
//print_r($_FILES);
include("../../include/common.php");
$type = $_FILES["up"]["type"];
$size = $_FILES["up"]["size"];
$name = $_FILES["up"]["name"];
$tmp = $_FILES["up"]["tmp_name"];
$f = '../../ruanjian/';
$shijian = date("Y-m-d H:i:s");
$id=file_get_contents("id.dat");
$id=$id+1;
file_put_contents("id.dat",$id);
function formatBytes($size) {

$units = [' B', ' KB', ' MB', ' GB', ' TB'];

for ($i = 0; $size >= 1024 && $i < 4; $i++) $size /= 1024;

return round($size, 2) . $units[$i];

}
if($type!= "text/plain" && $type!="application/vnd.android.package-archive"){
	$img="./admin/img/imags/w.png";
}
if($type == "application/vnd.android.package-archive"){
$img = "./admin/img/imags/apk.png";
}
if($type == "text/plain"){
	$img = "./aadmin/img/imags/txt.png";
}

$size = formatBytes($size); 
include("../../config.php");
$servername = $dbconfig['host'];
$username = $dbconfig['user'];
$password = $dbconfig['pwd'];
$dbname = $dbconfig['dbname'];
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_set_charset($conn,'utf8');
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}
if (($_FILES["up"]["type"] == "application/vnd.android.package-archive")
	||($_FILES["up"]["type"] == "application/x-zip-compressed")
	||($_FILES['up']['type'] == "application/zip")
	||($_FILES["up"]["type"] == "application/octet-stream")
	||($_FILES['up']['type'] == "application/rar")
	||($_FILES["up"]["type"] == "text/plain")
	||($_FILES["up"]["type"] == "application/x-msdownload")){
	if(move_uploaded_file($tmp,$f.$name)){
		for ($i = 1; $i <= 1; $i++) {
			$a=chr(rand(65, 90));
			$b=chr(rand(97, 112));
			$c=chr(rand(97, 112));
			$d=chr(rand(65, 90));
		}
		$ay = "/doc/".$a.$b.$c.$d.".php";
		$ay1 = $a.$b.$c.$d.".php";
		$file='../..'.$ay.'';
		$filen=$_SERVER['HTTP_HOST'];
		echo "<script>alert('上传服务器成功');window.location.href='../ruanjian_t.php';</script>";
		$sql="INSERT INTO yunxi_ruanjian(`ruanjian_id`, `ruanjian_name`, `ruanjian_user`, `ruanjian_time`, `ruanjian_size`, `ruanjian_lianjie`, `ruanjian_tupian`, `ruanjian_w`) VALUES ('$id', '$name', '残梦', '$shijian', '$size', 'http://$filen$ay', '$img', '$ay1')";
		$rw=mysqli_query($conn,$sql);
$m=fopen($file, 'w');
$content='<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
<title>'.$name.'</title>
<link rel="stylesheet" href="./l.css">
</head>
<body>
<div class="top">
<div class="d1">
<div class="d11 bgimg">
<a href="/" class="d7">&nbsp;</a>
</div>
</div>
</div>
<div class="pc bgimg">
</div>
<div class="mb">
<div class="md">
'.$name.'
<span class="mtt">
( '.$size.' )
</span>
</div>
<div class="mf">
<span class="mt2">
分享者:
</span>
'.$conf['fabu'].'
<span class="mt2">
</span>
'.$shijian.'
</div>
<div class="mad">
</div>
<div class="mh">
<a href="./data/index.php?name='.$name.'" id="submit" target="_blank" download="'.$name.'">
立即下载
</a>
</div>
<div style="color: #8a6d3b;background-color: #fcf8e3;padding: 5px;border-radius: 6px;font-size: 10px;clear: both;margin: auto;text-align: center;line-height: initial;margin-bottom: 10px;">
谨防刷单兼职，网贷，金融，裸聊敲诈，赌博等诈骗，请立即举报
</div>
</div>
<div>
</div>
<div style="display:none">
</div>
</body>
</html>
';
fwrite($m, $content);
fclose($m);
	}else{
		echo "<script>alert('上传服务器失败');window.location.href='../ruanjian_t.php';</script>";
	}
}else{
	echo "<script>alert('抱歉，您的文件类型不支持！<br/>目前仅支持:apk,zip,rar,txt,exe文件');window.location.href='../ruanjian_t.php';</script>";
}
?>