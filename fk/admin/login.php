<?php
require '../conn/conn.php';
require '../conn/function.php';

if($_GET["action"]=="unlogin"){
  $_SESSION["A_login"]="";
  $_SESSION["A_pwd"]="";
  Header("Location:login.php");
  die();
}

if(getrs("select * from sl_config where C_admin='".$_SESSION["A_login"]."' and C_pwd='".$_SESSION["A_pwd"]."'","C_title")!=""){
  Header("Location: index.php");
  die();
}

if($_GET["action"]=="login"){
  $M_code = $_POST["M_code"];
    
  if(($_POST["M_code"]!=$_SESSION["CmsCode"] || $_POST["M_code"]=="" || $_SESSION["CmsCode"]=="")){
      die("{\"code\":\"error2\",\"msg\":\"请输入正确的计算结果\"}");
  } else {//滑块验证通过

    $C=getrs("select * from sl_config where C_admin='".t($_POST["A_login"])."' and C_pwd='".md5($_POST["A_pwd"])."'");
      if($C!=""){
          $_SESSION["A_login"] = $C["C_admin"];
          $_SESSION["A_pwd"] = $C["C_pwd"];
          die("{\"code\":\"success\",\"msg\":\"成功\"}");
      } else {//用户名密码错误
          die("{\"code\":\"error2\",\"msg\":\"用户名或密码错误\"}");
      }
  }
}

?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>后台登录</title>
<link rel="icon" href="../media/<?php echo $C_ico?>" type="image/ico">
<link href="../css/bootstrap.min.css" rel="stylesheet">
<link href="../css/materialdesignicons.min.css" rel="stylesheet">
<link href="../css/style.min.css" rel="stylesheet">
<link href="../css/animate.css" rel="stylesheet">

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
.login-center {
    background: #fff;
    min-width: 38.25rem;
    padding: 2.14286em 3.57143em;
    border-radius: 5px;
    margin: 2.85714em 0;
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
<div class="row lyear-wrapper">
  <div class="lyear-login">
    <div class="login-center">
      <div class="login-header text-center">
        <a href="../"> <img alt="7支付" src="../media/<?php echo $C_logo?>" style="width: 200px"> </a>
        <hr>
        <h2>后台管理系统</h2>
      </div>
      <form id="form" onsubmit="login();return false;">
        <div class="form-group has-feedback feedback-left">
          <input type="text" placeholder="用户名" class="form-control" name="A_login"/>
          <span class="mdi mdi-account form-control-feedback" aria-hidden="true"></span>
        </div>
        <div class="form-group has-feedback feedback-left">
          <input type="password" placeholder="密码" class="form-control" name="A_pwd"/>
          <span class="mdi mdi-lock form-control-feedback" aria-hidden="true"></span>
        </div>

        <?php
                    echo "<div class=\"form-group form-material floating\" style=\"position: relative;\">
                        ".calculation("M_code")."
                    </div>";

                    ?>
        
        <div class="form-group">
          <button class="btn btn-block btn-primary" type="submit" >立即登录</button>
        </div>
      </form>
      <hr>
      <footer class="col-sm-12 text-center">
        <p class="m-b-0"><?php echo $C_copyright?></p>
      </footer>
    </div>
  </div>
</div>
<script type="text/javascript" src="../js/jquery.min.js"></script>
<script type="text/javascript" src="../js/bootstrap.min.js"></script>
<!--消息提示-->
<script src="../js/bootstrap-notify.min.js"></script>
<script type="text/javascript" src="../js/lightyear.js"></script>
<script type="text/javascript" src="../js/main.min.js"></script>

<script type="text/javascript">
function login(){
  lightyear.loading('show');
        $.ajax({
              url:'login.php?action=login',
              type:'post',
              data:$("#form").serialize(),
              success:function (data) {
                lightyear.loading('hide');
                data=JSON.parse(data);
                if(data.code=="success"){
                  window.location='index.php';
                }else{
                  lightyear.notify(data.msg, 'danger', 100);
                }
              }
              });
      }
</script>
</body>
</html>