<?php
header("Content-type:text/html;charset=utf-8");
$name=$_POST['name'];
$beian=$_POST['beian'];
$jianjie=$_POST['jianjie'];
$ci=$_POST['ci'];
$qq=$_POST['qq'];
$youxiang=$_POST['youxiang'];
$gonggao=$_POST['gonggao'];
$dibu=$_POST['dibu'];
$fabu=$_POST['fabu'];
$shijian = date("Y-m-d H:i:s");
include("../../config.php");
$servername = $dbconfig['host'];
$username = $dbconfig['user'];
$password = $dbconfig['pwd'];
$dbname = $dbconfig['dbname'];
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}
mysqli_query($conn , "set names utf8");
$sql_1="UPDATE `yunxi_config` SET `v` = '$name' WHERE `yunxi_config`.`k` = 'name'";
$sql_2="UPDATE `yunxi_config` SET `v` = '$beian' WHERE `yunxi_config`.`k` = 'beian'";
$sql_3="UPDATE `yunxi_config` SET `v` = '$jianjie' WHERE `yunxi_config`.`k` = 'js'";
$sql_4="UPDATE `yunxi_config` SET `v` = '$ci' WHERE `yunxi_config`.`k` = 'keywords'";
$sql_5="UPDATE `yunxi_config` SET `v` = '$qq' WHERE `yunxi_config`.`k` = 'qq'";
$sql_6="UPDATE `yunxi_config` SET `v` = '$shijian' WHERE `yunxi_config`.`k` = 'yunxing'";
$sql_7="UPDATE `yunxi_config` SET `v` = '$youxiang' WHERE `yunxi_config`.`k` = 'youxiang'";
$sql_8="UPDATE `yunxi_config` SET `v` = '$gonggao' WHERE `yunxi_config`.`k` = 'gonggao'";
$sql_9="UPDATE `yunxi_config` SET `v` = '$dibu' WHERE `yunxi_config`.`k` = 'dibu'";
$sql_10="UPDATE `yunxi_config` SET `v` = '$fabu' WHERE `yunxi_config`.`k` = 'fabu'";
$row = mysqli_query($conn,$sql_1);
$row = mysqli_query($conn,$sql_2);
$row = mysqli_query($conn,$sql_3);
$row = mysqli_query($conn,$sql_4);
$row = mysqli_query($conn,$sql_5);
$row = mysqli_query($conn,$sql_6);
$row = mysqli_query($conn,$sql_7);
$row = mysqli_query($conn,$sql_8);
$row = mysqli_query($conn,$sql_9);
$row = mysqli_query($conn,$sql_10);
if($row<0){
	echo "<script>alert('修改失败!!!!');window.location.href='../xinxi.php';</script>";
}
echo "<script>alert('修改成功');window.location.href='../xinxi.php';</script>";
?>