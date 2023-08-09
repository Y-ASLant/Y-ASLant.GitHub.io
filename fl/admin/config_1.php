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
              <div class="tab-content">
                <div class="tab-pane active">
    
     
    <form action="./php/config_1_user.php" method="post">
	 <!--后台账号-->
         <div class="form-group">
                      <label for="config__user">后台账号</label>
                     	<input class="form-control" name="user" type="text">
                     	    <small class="help-block">[ps] 请输入新后台账号,若不想改变后台账号请不要填写</small>	
                    </div>
                    <!--核心提交-->
				<div align="center" style="margin: 20 auto; display: inline-block;width: 100%;">
			     <a onclick="return alert('修改成功!!!');" target="_blank">
			     <button class="btn btn-pink btn-w-md" type="submit"> 修 改 账 号 </button>
			     </a>
			 
				</div>	
                    	</form>
                    	   <form action="./php/config_1_pass.php" method="post">
		<!--后台密码-->
	 <div class="form-group">
                 <label for="config_pass">后台密码</label>
					    	<input class="form-control"  name="pass" type="password" value="" placeholder="" size="30" minlength="6" maxlength="11">
					    	    <small class="help-block">[ps] 请输入新后台密码,若不想改变后台密码请不要填写</small>	
	</div>	
<!--核心提交-->
				<div align="center" style="margin: 20 auto; display: inline-block;width: 100%;">
								     <button class="btn btn-pink btn-w-md" type="submit"> 修 改 密 码 </button>
			
			 
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