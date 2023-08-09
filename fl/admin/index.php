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
<link rel="icon" href="./img/icon.jpg" type="image/ico">
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
               <div style="margin-top:20px ;">
		   	<?php 
		   	require '../include/common.php';
		   		if($conf['admin_user']=='admin' and $conf['admin_mima']=='123456'){
			   		echo "    
	<!-- 弹窗公告开始-->
    <script src='https://cdn.bootcss.com/sweetalert/2.1.0/sweetalert.min.js'></script>
    <script>
    swal('','阁下的账号及密码为系统默认,请尽快修改!!!','success');
    </script>
    <!-- 弹窗公告结束-->
";	
				}
		   ?>
</div>
    <div class="alert alert-success alert-dismissible" role="alert">
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <strong>欢迎使用云溪软件库系统1.1</strong>
                </div>
			<?php $shi = date("Y-m-d");?>
			<?php @$zong = intval(file_get_contents("../doc/data/zongtiaoyong/xiaoyu.dat")); //总下载次数?>
			<?php @$jin = intval(file_get_contents("../doc/data/jinri/".$shi."/".$shi.".dat")); //日下载次数?>
            <!-- 总下载统计 -->
          <div class="col-sm-6 col-lg-3">
            <div class="card bg-primary">
              <div class="card-body clearfix">
                <div class="pull-right">
                  <p class="h6 text-white m-t-0">软件总下载量</p>
                  <p class="h3 text-white m-b-0 fa-1-5x"><?php echo $zong;?>次</p>
                </div>
                <div class="pull-left"> <span class="img-avatar img-avatar-48 bg-translucent"><i class="mdi mdi-radioactive fa-1-5x"></i></span> </div>
              </div>
            </div>
          </div>
          
            <!-- 今日调用统计 -->
          <div class="col-sm-6 col-lg-3">
            <div class="card bg-primary">
              <div class="card-body clearfix">
                <div class="pull-right">
                  <p class="h6 text-white m-t-0">软件今日下载量</p>
                  <p class="h3 text-white m-b-0 fa-1-5x"><?php echo $jin;?> 次</p>
                </div>
                <div class="pull-left"> <span class="img-avatar img-avatar-48 bg-translucent"><i class="mdi mdi-radioactive fa-1-5x"></i></span> </div>
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
  </div>
</div>

<script type="text/javascript" src="./js/jquery.min.js"></script>
<script type="text/javascript" src="./js/bootstrap.min.js"></script>
<script type="text/javascript" src="./js/perfect-scrollbar.min.js"></script>
<script type="text/javascript" src="./js/main.min.js"></script>



</body>
</html>