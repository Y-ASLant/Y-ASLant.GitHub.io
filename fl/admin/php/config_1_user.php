<?php
header("Content-type:text/html;charset=utf-8");
session_start();
include("../../config.php");
$time=time();
$user=($_POST['user']);

$servername = $dbconfig['host'];
$username = $dbconfig['user'];
$password = $dbconfig['pwd'];
$dbname = $dbconfig['dbname'];
 
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

// 设置编码，防止中文乱码
mysqli_query($conn , "set names utf8");

$sql="UPDATE `yunxi_config` SET `v` = '$user' WHERE `yunxi_config`.`k` = 'admin_user'";
$row = mysqli_query($conn,$sql);
if($row<0){
	echo "<script>alert('修改失败!!!!');window.location.href='../config_1.php';</script>";
}
$_SESSION = array();
session_destroy();
echo "<script>alert('修改成功,旧账号已失效,请重新登录!!!');location.href='../'</script>";

$conn->close(); 

?>