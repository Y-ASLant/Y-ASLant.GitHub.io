<?php
$file1 = "../install/install.lock";
if(file_exists($file1)){
}else{
	echo "<script>
	alert('本程序暂未安装！！');
	window.location.href='../install';
	</script>";
}
?>
<?php
	include('../include/common.php');
?>
<?PHP
session_start();
header("Content-type:text/html;charset=utf-8");
date_default_timezone_set('PRC');
$name = $_SESSION['user'];
if ($name) {
echo "<script>
window.location.href='./index.php';
</script>";
}else {
echo "";
}
?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>&#20992;&#23458;&#28304;&#30721;&#32593;&#32;&#21518;&#21488;</title>
<link rel="icon" href="./img/icon.jpg" type="image/ico">
<meta name="keywords" content="<?php echo $conf['keywords'];?>">
<meta name="description" content="<?php echo $conf['js'];?>">
<meta name="author" content="yinqi">
<link href="./css/bootstrap.min.css" rel="stylesheet">
<link href="./css/materialdesignicons.min.css" rel="stylesheet">
<link href="./css/style.min.css" rel="stylesheet">
<style>
.lyear-wrapper {
    position: relative;
}
.lyear-login {
    display: flex !important;
    min-height: 100vh;
    align-items: center !important;
    justify-content: center !important;
}
.lyear-login:after{
    content: '';
    min-height: inherit;
    font-size: 0;
}
.login-center {
    background: #fff;
    min-width: 29.25rem;
    padding: 2.14286em 3.57143em;
    border-radius: 3px;
    margin: 2.85714em;
}
.login-header {
    margin-bottom: 1.5rem !important;
}
.login-center .has-feedback.feedback-left .form-control {
    padding-left: 38px;
    padding-right: 12px;
}
.login-center .has-feedback.feedback-left .form-control-feedback {
    left: 0;
    right: auto;
    width: 38px;
    height: 38px;
    line-height: 38px;
    z-index: 4;
    color: #dcdcdc;
}
.login-center .has-feedback.feedback-left.row .form-control-feedback {
    left: 15px;
}
</style>
</head>
<body>
<div class="row lyear-wrapper" style="background-image: url('https://api.ghser.com/random/api.php'); background-size: cover;">
  <div class="lyear-login">
    <div class="login-center">
      <div class="login-header text-center">
        <a href=""> <img alt="<?php echo $conf['banquan'];?>" src="./img/1.jpg" title="<?php echo $conf['banquan'];?>" style="width:70px;"> </a>
      </div>
     <form method="post" action="login_form.php" onsubmit="return ck();" style="padding:0;">
         <div class="form-group has-feedback feedback-left">
        	<input class="form-control" name="user" type="text" placeholder="账号...">
          <span class="mdi mdi-account form-control-feedback" aria-hidden="true"></span>
        </div>
        <div class="form-group has-feedback feedback-left">
        	<input class="form-control" name="pass" type="password" onkeyup="this.value=this.value.replace(/[^\w_]/g,'');" size="30" minlength="6" maxlength="11" placeholder="密码...">
          <span class="mdi mdi-lock form-control-feedback" aria-hidden="true"></span>
        </div>
<div class="form-group has-feedback feedback-left row">
          <div class="col-xs-7">
            <input type="text" name="code" oninput="value=value.replace(/[^\d]/g,'')" minlength="4" maxlength="4"class="form-control" placeholder="验证码...">
            <span class="mdi mdi-check-all form-control-feedback" aria-hidden="true"></span>
          </div>
          <div class="col-xs-5">
            <img src="./php/code.php" class="pull-right" name="code" style="cursor: pointer;" onclick="this.src=this.src+'?d='+Math.random();" title="点击刷新" alt="验证码">
          </div>
        </div>

        <div class="form-group">
            
          <button class="btn btn-block btn-primary" name="login" type="submit"> 立 即 登 录 </button>
                    <footer class="col-sm-12 text-center">
						      <b>由<?php echo $conf['banquan'];?>设计与编码</b> 
        </footer>
        </div>
      </form>

    </div>
  </div>
</div>
<script type="text/javascript" src="./js/jquery.min.js"></script>
<script type="text/javascript" src="./js/bootstrap.min.js"></script>
<script type="text/javascript">;</script>
</body>
</html>