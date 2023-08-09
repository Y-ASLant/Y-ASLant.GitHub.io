<?php
include('../include/common.php');
?>
<?PHP
session_start();
header("Content-type:text/html;charset=utf-8");
date_default_timezone_set('PRC');
$name = $_SESSION['user'];
if ($name) {
echo "";
}else {
echo "<script>
alert('尚未登录!!!');
window.location.href='./login.php';
</script>";
}
?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>云溪后台</title>
<link rel="icon" href="../favicon.ico" type="image/ico">
<meta name="keywords" content="<?php echo $conf['keywords'];?>">
<meta name="description" content="<?php echo $conf['js'];?>">
<meta name="author" content="yinqi">
<link href="./css/bootstrap.min.css" rel="stylesheet">
<link href="./css/materialdesignicons.min.css" rel="stylesheet">
<link href="./css/style.min.css" rel="stylesheet">
</head>
  
<body>
<?php require "header.php";?>
    
    <!--页面主要内容-->

<main class="lyear-layout-content">
      
      <div class="container-fluid">
        
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-toolbar clearfix">

    <!-- <a href="./php/api_all_modeify.php"><button type="submit" class="btn btn-label btn-danger"><label><i class="mdi mdi-close"></i></label> 全 部 删 除</button></a>
     -->

              </div>
              <div class="card-body">
         
                <div class="table-responsive">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th>文件</th>
                        <th>发布者</th>
					    <th>发布时间</th>
						<th>下载地址</th>
						<th>操作</th>
						
                  <!--  <th>操作</th>
                        <th>时间</th> -->
                      </tr>
                    </thead>
                    
                    <tbody>
                   
<?php 
$servername = $dbconfig['host'];
$username = $dbconfig['user'];
$password = $dbconfig['pwd'];
$dbname = $dbconfig['dbname'];
 
 
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_set_charset($conn,"utf8");
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}
$sqli_select="select*from yunxi_ruanjian";
foreach ($conn->query($sqli_select)as $row) {
	$id = $row['ruanjian_id'];
	$name = $row['ruanjian_name'];
	$user = $row['ruanjian_user'];
	$time = $row['ruanjian_time'];
	$lianjie = $row['ruanjian_lianjie'];
	$wen = $row['ruanjian_w'];
echo '
<tr>
<th scope="row">
'.$name.'
</td>
<th scope="row">
'.$user.'
</td>
<th scope="row">
'.$time.'
</td>
<th scope="row">
'.$lianjie.'
<th scope="row">
<a class="btn btn-xs btn-default" type="button" href="'.$lianjie.'" title="查看" data-toggle="tooltip"><i class="mdi mdi-eye"></i></a>
&nbsp;
&nbsp;
<a class="btn btn-xs btn-default"  href="./php/ruanjian_delete.php?id='.$id.'&name='.$name.'&wen='.$wen.'" type="button" title="删除" data-toggle="tooltip"><i class="mdi mdi-window-close"></i></a> <br>   
</tr>';
}
?>


                      
                    </tbody>
                  </table>
                  
                </div>

              </div>
            </div>
          </div>
          
        </div>
        
      </div>
      
          </div>
          
        </div>
        
      </div>
      
    </main>


    <!--End 页面主要内容-->



<script type="text/javascript" src="./js/jquery.min.js"></script>
<script type="text/javascript" src="./js/bootstrap.min.js"></script>
<script type="text/javascript" src="./js/perfect-scrollbar.min.js"></script>
<script type="text/javascript" src="./js/main.min.js"></script>


</body>
</html>