<?php
require 'conn/conn.php';
require 'conn/function.php';
require 'conn/sendmail.php';


$action=$_GET["action"];
if($action=="found"){
    $M_email=$_POST["M_email"];
    $M_code=$_POST["M_code"];
    if(($_POST["M_code"]!=$_SESSION["CmsCode"] || $_POST["M_code"]=="" || $_SESSION["CmsCode"]=="")){
        box("验证码错误!","back","error");
    }else{
        
        $M=getrs("select * from sl_member Where M_email='" . t($M_email) . "'");
            if ($M!="") {
            $M_pwdcode=gen_key(20);
            sql("update sl_member set M_pwdcode='".$M_pwdcode."' where M_email='".$M_email."'");

            $info=sendmail("找回密码邮件","请点击链接重新设置密码<br><a href='".gethttp().$domain."/setpwd.php?M_pwdcode=".$M_pwdcode."'>".gethttp().$domain."/setpwd.php?M_pwdcode=".$M_pwdcode."</a><br>说明：重置密码后链接失效",$M_email);
            if($info=="success"){
                box("请查收密码找回邮件!","login.php","success");
            }else{
                box("请查收密码找回邮件!","login.php","success");
            }
        }else{
            box("邮箱输入错误，请重新输入!","back","error");
        }
    }
}
?>

<!DOCTYPE HTML>
<html>
<head>
<title>找回密码 - <?php echo $C_webtitle?></title>
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
        <div class="panel" style="display: inline-block;">
            <div class="panel-body">

                <div class="brand">
                	<a href="../"><img class="brand-img" src="media/<?php echo $C_logo;?>" style="width: 100%"></a>
                	<h2 class="brand-text font-size-20 margin-top-20">找回密码</h2>
                </div>

                <form method="post" class="met-form-validation" action="?action=found">
                    <div class="form-group form-material floating">
                        <input type="text" class="form-control"  name="M_email" />
                        <label class="floating-label">邮箱/帐号</label>
                    </div>
                    
<?php
                    echo "<div class=\"form-group form-material floating\" style=\"position: relative;\">
                        ".calculation("M_code")."
                    </div>";

                    ?>
                    
                
                    <button type="submit" class="btn btn-primary btn-block btn-lg margin-top-40">找回密码</button>
                </form>

                <p>还没有账号? 去 <a href="reg.php">注册</a> <a href="../">返回首页</a> </p>
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
