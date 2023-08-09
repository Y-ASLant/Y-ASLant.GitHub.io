<?php
require 'conn/conn.php';
require 'conn/function.php';

$action=$_GET["action"];
$M_pwdcode=t($_GET["M_pwdcode"]);

if($M_pwdcode==""){
    die("重置码不可为空！");
}
$M=getrs("Select * from sl_member Where M_pwdcode='".$M_pwdcode."'");

        if ($M!="") {
            $M_email=$M["M_email"];
        }else{
            box("重置码错误!","login.php","error");
        }
if($action=="setpwd"){
    if($_POST["M_newpwd"]==$_POST["M_newpwd2"] && $_POST["M_newpwd"]!=""){
        sql("update sl_member set M_pwd='".md5($_POST["M_newpwd"])."',M_pwdcode='' where M_pwdcode='".$M_pwdcode."'");
        box("重置密码成功，请返回登录!","login.php","success");
    }else{
        box("两次密码不一致!","back","error");
    }
}
?>


<!DOCTYPE HTML>
<html>
<head>
<title>重设密码 - 7支付</title>
<meta name="renderer" content="webkit">
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
<meta name="generator" data-variable="" />
<link href="media/<?php $C_ico?>" rel="shortcut icon" type="image/x-icon" />
<link rel='stylesheet' type='text/css' href="css/account.css">
</head>
<!--[if lte IE 8]>
<div class="text-center margin-bottom-0 bg-blue-grey-100 alert">
    <button type="button" class="close" aria-label="Close" data-dismiss="alert">
        <span aria-hidden="true">×</span>
    </button>
    你正在使用一个 <strong>过时</strong> 的浏览器。请 <a href="http://browsehappy.com/" target="_blank">升级您的浏览器</a>，以提高您的体验。
</div>
<![endif]-->

<body class="page-register-v3 layout-full">
<div class="page animsition vertical-align text-center" data-animsition-in="fade-in" data-animsition-out="fade-out">>
    <div class="page-content vertical-align-middle">
        <div class="panel">
            <div class="panel-body">

<div class="brand">
	<a href="../"><img class="brand-img" src="media/<?php echo $C_logo;?>" style="width: 100%"></a>
	<h2 class="brand-text font-size-20 margin-top-20">重设密码</h2>
</div>

                <form method="post" class="met-form-validation" action="?action=setpwd&M_pwdcode=<?php echo $M_pwdcode?>">

                <div class="form-group form-material floating">
                        <input type="text" class="form-control"  value="<?php echo $M_email?>" />
                        <label class="floating-label"></label>
                    </div>

                    <div class="form-group form-material floating">
                        <input type="text" class="form-control"  name="M_newpwd" />
                        <label class="floating-label">设置密码</label>
                    </div>


                    <div class="form-group form-material floating">
                        <input type="text" class="form-control"  name="M_newpwd2" />
                        <label class="floating-label">确认密码</label>
                    </div>
                    
                    <button type="submit" class="btn btn-primary btn-block btn-lg margin-top-40">确认</button>
                </form>
                

            </div>
        </div>

<footer class="page-copyright page-copyright-inverse">
	<p class="txt">
		<span class="beian"> <?php echo $C_beian;?> </a>
        </span>
	</p>
	<div class=""><?php echo $C_copyright;?></div>
</footer>

    </div>
</div>
<script src="js/account.js"></script>
</body>
</html>
