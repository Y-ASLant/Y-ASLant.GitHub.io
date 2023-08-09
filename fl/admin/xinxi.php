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
                
                
                <div class="alert alert-success alert-dismissible" role="alert">
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <strong>最后更新时间: <?php echo $conf['yunxing']; ?></strong>
                </div>
                
                 <ul class="nav nav-tabs page-tabs">
                <li class="active"> <a href="web_1.php">基本</a> </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane active">
					
    <form action="./php/web_1.php" method="post">
                   <!--网站标题-->
                    <div class="form-group">
                      <label for="web_title_a">网站标题</label>
                    <input class="form-control" type="text" name="name" value="<?php echo $conf['name'];?>" placeholder="请输入网站标题..." size="20">
	</div>
		<!--备案信息-->
		<div class="form-group">
			<label for="web_title_a">网站备案号</label>
			<input class="form-control" type="text" name="beian" value="<?php echo $conf['beian'];?>" placeholder="请输入备案号..." size="20">
	</div>
		<!--网站简介-->
		<div class="form-group">
			<label for="web_title_a">网站简介</label>
			<input class="form-control" type="text" name="jianjie" value="<?php echo $conf['js'];?>" placeholder="请输入网站简介..." size="20">
			
	</div>
				<!--网站关键词-->
		<div class="form-group">
			<label for="web_title_a">网站关键词</label>
			<input class="form-control" type="text" name="ci" value="<?php echo $conf['keywords'];?>" placeholder="请输入网站关键词..." size="20">
			
	</div>
		<!--QQ群进群链接地址-->
		<div class="form-group">
			<label for="web_title_a">QQ群进群链接地址</label>
			<input class="form-control" type="text" name="qq" value="<?php echo $conf['qun'];?>" placeholder="请输入进群链接..." size="20">
	</div>
		<!--邮箱-->
		<div class="form-group">
			<label for="web_title_a">邮箱</label>
			<input class="form-control" type="text" name="youxiang" value="<?php echo $conf['youxiang'];?>" placeholder="请输入邮箱..." size="20">
	</div>
				<!--公告-->
		<div class="form-group">
			<label for="web_title_a">公告</label>
			<input class="form-control" type="text" name="gonggao" value="<?php echo $conf['gonggao'];?>" placeholder="请输入首页公告..." size="20">
	</div>
						<!--底部版权-->
		<div class="form-group">
			<label for="web_title_a">底部版权</label>
			<input class="form-control" type="text" name="dibu" value="<?php echo $conf['dibu'];?>" placeholder="请输入底部版权..." size="20">
	</div>
							<!--发布信息-->
		<div class="form-group">
			<label for="web_title_a">文件发布者</label>
			<input class="form-control" type="text" name="fabu" value="<?php echo $conf['fabu'];?>" placeholder="请输入发布者..." size="20">
	</div>
<!--核心提交-->
				<div align="center" style="margin: 20 auto; display: inline-block;width: 100%;">
	
			     <button class="btn btn-pink btn-w-md" type="submit"> 修 改 </button>
			     
			 
				</div>	
			</form>
	
	
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
