<?php
error_reporting(0);
include("../../config.php");
$id=$_GET['id'];
$wen=$_GET['wen'];
$name=$_GET['name'];
$servername = $dbconfig['host'];
$username = $dbconfig['user'];
$password = $dbconfig['pwd'];
$dbname = $dbconfig['dbname'];

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
 
// 检测连接
if ($conn->connect_error) {
    die("数据库连接失败: " . $conn->connect_error);
} 
$sql = "DELETE FROM yunxi_ruanjian WHERE ruanjian_id=".$id."";

    if ($conn->query($sql) === TRUE) {
//echo ("Deleted $file");
   echo  "<script>
        alert('删除成功!!!');
window.location.href='../ruanjian_list.php';
</script>";
		unlink("../../doc/".$wen);
		unlink("../../ruanjian/".$name);
} else {
        echo  "<script>
    alert('删除失败!!!');
window.location.href='../ruanjian_list.php';
</script>";

}

$conn->close(); 
?>