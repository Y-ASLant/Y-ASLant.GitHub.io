<?php
require '../conn/conn.php';
require '../conn/function.php';
require 'admin_check.php';

$action=$_GET["action"];
if($action=="save"){
    $C_email=t($_POST["C_email"]);
    $C_smtp=t($_POST["C_smtp"]);
    $C_emailpwd=t(trim($_POST["C_emailpwd"]));
    $C_recieve=t($_POST["C_recieve"]);
    $C_userid=t($_POST["C_userid"]);
    $C_sms=t($_POST["C_sms"]);
    $C_smspwd=t(trim($_POST["C_smspwd"]));

    $C_pid=t(trim($_POST["C_pid"]));
    $C_pkey=t(trim($_POST["C_pkey"]));
    
    $C_alipayon=intval($_POST["C_alipayon"]);
    $C_wxpayon=intval($_POST["C_wxpayon"]);

    if($C_email==""){
        die("请填全信息");
    }else{
        sql("update sl_config set 
        C_email='$C_email',
        C_smtp='$C_smtp',
        C_recieve='$C_recieve',
        C_userid='$C_userid',
        C_sms='$C_sms',
        C_pid='$C_pid',
        C_alipayon=$C_alipayon,
        C_wxpayon=$C_wxpayon");

        if($C_pkey!=""){
          sql("update sl_config set C_pkey='$C_pkey'");
        }
        if($C_smspwd!=""){
          sql("update sl_config set C_smspwd='$C_smspwd'");
        }
        if($C_emailpwd!=""){
          sql("update sl_config set C_emailpwd='$C_emailpwd'");
        }
        die("success");
  }
}
?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>接口设置 - 后台管理</title>
<link rel="shortcut icon" href="../media/<?php echo $C_ico?>" />
<link href="../css/bootstrap.min.css" rel="stylesheet">
<link href="../css/materialdesignicons.min.css" rel="stylesheet">
<link href="../css/style.min.css" rel="stylesheet">
<script type="text/javascript" src="../upload/upload.js"></script>
<style type="text/css">
.qrcode{width:200px;height:200px}
</style>
</head>
  
<body>
<div class="lyear-layout-web">
  <div class="lyear-layout-container">
  <?php require 'nav.php';?>
    <main class="lyear-layout-content">
      <div class="container-fluid">
        <div class="row">
            
        <form id="form">

          <div class="col-md-6">
            
                <div class="card">
              <div class="card-header"><h4>支付接口（由7支付提供）</h4></div>
              <div class="card-body">
                <div class="row">
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">PID</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" name="C_pid" value="<?php echo $C_pid?>">
                    </div>
                  </div>
                        
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">PKEY</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" name="C_pkey" value="" placeholder="已加密保存，留空则不修改">
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">支付开关</label>
                    <div class="col-md-10">
                      <label><input type="checkbox" name="C_alipayon" value="1" <?php if($C_alipayon==1){echo "checked='checked'";}?>> 支付宝</label>
                      <label><input type="checkbox" name="C_wxpayon" value="1" <?php if($C_wxpayon==1){echo "checked='checked'";}?>> 微信支付</label>
                    </div>
                  </div>
                  
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input"></label>
                    <div class="col-md-10">
                      <div style="font-size: 12px;margin-top: 10px;color: #33cabb">请到<a href="https://7-pay.cn" target="_blank"><u>7支付官网</u></a>申请收款接口 <a href="https://www.7-card.cn/newsinfo.html?id=1" class="btn btn-xs btn-success" target="_blank">帮助文档</a></div>
                    </div>
                  </div>
                  
                    </div>
                  </div>

                </div>
                
                <div class="form-group row">
                    <div class="col-md-12">
                      <button class="btn btn-primary" type="button" onclick="save()">保存</button>
                    </div>
                  </div>

              </div>


              <div class="col-md-6">

                <div class="card">
              <div class="card-header"><h4>邮箱接口</h4></div>
              <div class="card-body">
                <div class="row">
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">收件邮箱</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" name="C_recieve" value="<?php echo $C_recieve?>">
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">发件邮箱</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" name="C_email" value="<?php echo $C_email?>">
                    </div>
                  </div>
                        
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">发件smtp</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" name="C_smtp" value="<?php echo $C_smtp?>">
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">邮箱授权码</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" name="C_emailpwd" value="" placeholder="已加密保存，留空则不修改">
                    </div>
                  </div>
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input"></label>
                    <div class="col-md-10">
                      <div style="font-size: 12px;margin-top: 10px;color: #33cabb">如果您不知道如何填写，请点击 <a href="https://www.7-card.cn/newsinfo.html?id=2" class="btn btn-xs btn-success" target="_blank">帮助文档</a></div>
                    </div>
                  </div>

                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</div>

<script type="text/javascript" src="../js/jquery.min.js"></script>
<script type="text/javascript" src="../js/bootstrap.min.js"></script>
<script type="text/javascript" src="../js/perfect-scrollbar.min.js"></script>
<script type="text/javascript" src="../js/main.min.js"></script>
<script src="../js/bootstrap-notify.min.js"></script>
<script type="text/javascript" src="../js/lightyear.js"></script>
<script src="../js/jqPaginator.min.js" type="text/javascript"></script>
<script src="../js/help.js" type="text/javascript"></script>
<script src="../js/jconfirm/jquery-confirm.min.js"></script>
<script type="text/javascript">
function save(){
    lightyear.loading('show');
    $.ajax({
        url:'?action=save',
        type:'post',
        data:$("#form").serialize(),
        success:function (data) {
        lightyear.loading('hide');
        if(data=="success"){
          lightyear.notify("保存成功", 'success', 100);
        }else{
          lightyear.notify(data, 'danger', 100);
        }
        }
      });
}

  var path=window.location.pathname;
  $("a").each(function(){
    if(path.indexOf($(this).attr("href"))!=-1){
      console.log($(this).attr("href"));
      $(this).parent("li").addClass("active");
      $(this).parent("li").parent("ul").parent("li").addClass("open active");
    }
  });
</script>
</body>
</html>