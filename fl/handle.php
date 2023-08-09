<?php
include('./config.php');
$do=$_POST['do'];
$servername = $dbconfig['host'];
$username = $dbconfig['user'];
$password = $dbconfig['pwd'];
$dbname = $dbconfig['dbname'];
$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_set_charset($conn,"utf8");
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}
if($do == ""){
$sqli_select="select*from yunxi_ruanjian";
foreach ($conn->query($sqli_select)as $row) {
	$id = $row['ruanjian_id'];
	$name = $row['ruanjian_name'];
	$user = $row['ruanjian_user'];
	$time = $row['ruanjian_time'];
	$lianjie = $row['ruanjian_lianjie'];
	$tu = $row['ruanjian_tupian'];
echo '
<div id="ready"><div class="mbx">
                 <a href="'.$lianjie.'" target="_blank" class="mlink minPx-top">
                   <div class="fileimg">
                    <img src="'.$tu.'" alt="云溪软件库" style="width: 35px;">
                  </div>
                   <div class="filename">
                     '.$name.'
                    <div class="filesize">
                     <div class="file_time"></div>
                    <div>更新时间：'.$time.'</div>
                  </div>
                </div>
             <div class="filedown">
              <div class="filedown-1"></div>
              <div class="filedown-2"></div>
             </div>
            </a>
         </div>
        </div>';
}
}else{
$sql="SELECT * FROM yunxi_ruanjian WHERE ruanjian_name like '%".$do."%'";
foreach ($conn->query($sql)as $row) {
	$id = $row['ruanjian_id'];
	$name = $row['ruanjian_name'];
	$user = $row['ruanjian_user'];
	$time = $row['ruanjian_time'];
	$lianjie = $row['ruanjian_lianjie'];
	$tu = $row['ruanjian_tupian'];
echo '
<div id="ready"><div class="mbx">
                 <a href="'.$lianjie.'" target="_blank" class="mlink minPx-top">
                   <div class="fileimg">
                    <img src="'.$tu.'" align="absmiddle" border="0">
                  </div>
                   <div class="filename">
                     '.$name.'
                    <div class="filesize">
                     <div class="file_time"></div>
                    <div>更新时间：'.$time.'</div>
                  </div>
                </div>
             <div class="filedown">
              <div class="filedown-1"></div>
              <div class="filedown-2"></div>
             </div>
            </a>
         </div>
        </div>';
}
}
?>