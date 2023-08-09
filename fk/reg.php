<?php
require 'conn/conn.php';
require 'conn/function.php';
require 'conn/sendmail.php';

$from = $_GET["from"];
$action=$_GET["action"];

if($action=="sendcode"){
    $email=t($_GET["email"]);
    $code=strtoupper(substr(md5($email),-4));
    if (strpos($email,"@")===false){
        die("{\"msg\":\"请输入一个正确格式的邮箱！\"}");
    }else{
        if(getrs("select * from sl_member where M_email='$email'")==""){
            $info=sendmail("您的邮箱验证码","您的7支付邮箱验证码为<b>".$code."</b>，请在注册页面正确填写。",$email);
            die("{\"msg\":\"$info\"}");
        }else{
            die("{\"msg\":\"该邮箱已被占用，请换邮箱重试！\"}");
        }
    }
    
}

if($action=="reg"){
    $M_emailcode=$_POST["M_emailcode"];
    $M_pwd=$_POST["M_pwd"];
    $M_pwd2=$_POST["M_pwd2"];
    $M_email=htmlspecialchars($_POST["M_email"]);
    
    if ($M_pwd!=$M_pwd2){
        die("{\"msg\":\"两次输入密码不一致！\"}");
    }
    if($M_emailcode!=strtoupper(substr(md5($_POST["M_email"]),-4))){
        die("{\"msg\":\"邮箱验证码错误！\"}");
    }

    if(($_POST["M_code"]!=$_SESSION["CmsCode"] || $_POST["M_code"]=="" || $_SESSION["CmsCode"]=="")){
        die("{\"code\":\"error2\",\"msg\":\"请填写正确的计算结果！\"}");
    }else {
        if ($M_pwd!="" && $M_pwd2!="" && $M_email!=""){
            if (strpos($M_email,"@")===false){
                die("{\"msg\":\"请输入一个正确格式的邮箱！\"}");
            }else{
                if(getrs("select * from sl_member Where M_email='".$M_email."'","M_email")!=""){
                    die("{\"msg\":\"邮箱已被占用！\"}");
                }else{
                    sql("insert into sl_member(M_pwd,M_email,M_regtime,M_logo,M_ico,M_wechatcode) values('".md5($M_pwd)."','".$M_email."','".date('Y-m-d H:i:s')."','nopic.png','nopic.png','nopic.png')");
                    $M_id=getrs("select * from sl_member where M_email='$M_email'","M_id");
                    sql("insert into sl_psort(S_title,S_order,S_mid) values('默认分类',0,$M_id)");
                    die("{\"msg\":\"success\"}");
                }
            }
        }else{
            die("{\"msg\":\"请填全信息！\"}");
        }
    }
}

?>

<!DOCTYPE HTML>
<html>
<head>
<title>会员注册 - <?php echo $C_webtitle?></title>
<meta name="renderer" content="webkit">
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
<meta name="generator" data-variable="" />
<link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />

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
	<a href="index.php"><img class="brand-img" src="media/<?php echo $C_logo?>" alt="<?php echo $C_webtitle?>" style="width: 100%"></a>
	<h2 class="brand-text font-size-20 margin-top-20">会员注册</h2>
</div>

                <form method="post" id="form" class="met-form-validation">
                    <div class="form-group form-material floating">
                        <input type="email" class="form-control"  name="M_email" id="email" data-fv-notempty="true" data-fv-field="email" />
                        <label class="floating-label">电子邮箱</label>
                        <button style="position:absolute;top:5px;right:0px" class="btn btn-xs btn-info" type="button" onclick="sendcode($('#email').val())">获取验证码</button>
                    </div>
                    
                    <div class="form-group form-material floating">
                        <input type="text" class="form-control"  name="M_emailcode" />
                        <label class="floating-label">邮箱验证码</label>
                    </div>
                    
                    
                    <div class="form-group form-material floating">
                        <input
                        type="password" class="form-control" name="M_pwd"
                        data-fv-notempty="true"
                        maxlength="16"
                        minlength="6"
                        />
                        <label class="floating-label">设置密码</label>
                    </div>
                    <div class="form-group form-material floating">
                        <input
                        type="password" class="form-control" name="M_pwd2"
                        data-fv-identical="true"
                        data-fv-identical-field="password"
                        />
                        <label class="floating-label">密码确认</label>
                    </div>
                    
                    
                    <?php
                    echo "<div class=\"form-group form-material floating\" style=\"position: relative;\">
                        ".calculation("M_code")."
                    </div>";

                    ?>


                    <button type="button" onclick="reg()" class="btn btn-primary btn-block btn-lg margin-top-10">注册</button>
                </form>
                
                <p>已经有账号了? 去 <a href="login.php">登录</a></p>
            </div>
        </div>

        <footer class="page-copyright page-copyright-inverse">
        	<p class="txt">
        		<span class="beian"> <?php echo $C_beian;?> </a>
                </span>
        	</p>
        	<div class=""><?php echo $C_copyright;?>
        	</div>
        </footer>

    </div>
</div>
<script src="js/account.js"></script>
<script>
    function reg(){
        $.ajax({
            url: '?action=reg',
            type: 'post',
            data: $("#form").serialize(),
            success: function(data) {
                data = JSON.parse(data);
                if (data.msg == "success") {
                    alert("注册成功，您可以登录了");
                    window.location.href="login.php";
                } else {
                    alert(data.msg);
                }
            }
        });
    }
    function sendcode(email){
        $.ajax({
        url: '?action=sendcode&email=' + email,
        type: 'get',
        success: function(data) {
            data = JSON.parse(data);
            if (data.msg == "success") {
                alert("验证码已发送，请到邮箱查收");
            } else {
                alert(data.msg);
            }
        }
    });
    }
    
</script>
</body>
</html>
