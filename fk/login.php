<?php 
require 'conn/conn.php';
require 'conn/function.php';

$from = $_GET["from"];
$action = $_GET["action"];
if($from==""){
	$from="member/index.php";
}
if ($action == "unlogin") {
    $_SESSION["M_login"] = "";
    $_SESSION["M_id"] = "";
    $_SESSION["M_pwd"] = "";
    $_SESSION["from"] = "";
    if($from==""){
        box("退出成功!", "login.php", "success");
    }else{
        box("退出成功!", $from, "success");
    }
}

if ($action == "login") {
    $M_email = t($_POST["M_email"]);
    $M_pwd = $_POST["M_pwd"];
    $M_code = $_POST["M_code"];
    $L_add = $_POST["add"];

    if(($_POST["M_code"]!=$_SESSION["CmsCode"] || $_POST["M_code"]=="" || $_SESSION["CmsCode"]=="")){
        die("{\"code\":\"error2\",\"msg\":\"请填写正确的计算结果！\"}");
    } else {


        $M=getrs("select * from sl_member Where M_email='" . $M_email . "'  and M_pwd='" . md5($M_pwd) . "'");
        if($M!=""){
            $M_id = $M["M_id"];
            $M_openid = $M["M_openid"];
            $_SESSION["M_email"] = $M["M_email"];
            $_SESSION["M_id"] = $M["M_id"];
            $_SESSION["M_pwd"] = $M["M_pwd"];

            if ($from == "") {
                Header("Location:member");
                die();
            } else {
                Header("Location:".$from);
            }

        }else{
            box("帐号或密码错误!", "back", "error");
        }
    }
}
if($_SESSION["M_email"]!=="" && $_SESSION["M_pwd"]!="" && $_SESSION["M_id"]!=""){
    die("<script>window.location.href=\"$from\"</script>");
}
?>

<!DOCTYPE HTML>
<html>
<head>
<title>会员登录 - 7支付</title>
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
	<a href="index.php"><img class="brand-img" src="media/<?php echo $C_logo;?>" alt="<?php echo $C_webtitle;?>" style="width: 100%"></a>
	<h2 class="brand-text font-size-20 margin-top-20">会员登录</h2>
</div>

                <form method="post" class="met-form-validation" action="?action=login">
                    <input type="hidden" name="add">
                    <div class="form-group form-material floating">
                        <input type="text" class="form-control"  name="M_email" />
                        <label class="floating-label">邮箱</label>
                    </div>
                    
                    <div class="form-group form-material floating">
                        <input
                        type="password" class="form-control" name="M_pwd"
                        data-fv-notempty="true"
                        maxlength="100"
                        minlength="1"
                        />
                        <label class="floating-label">密码</label>
                    </div>

                    <?php
                    echo "<div class=\"form-group form-material floating\" style=\"position: relative;\">
                        ".calculation("M_code")."
                    </div>";

                    ?>
                    
                    <button type="submit" class="btn btn-primary btn-block btn-lg margin-top-10">登录</button>
                </form>
                
                <p>还没有账号? 去 <a href="reg.php">注册</a> <a href="forget.php">忘记密码？</a></p>
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
