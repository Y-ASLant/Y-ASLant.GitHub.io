<?php
require '../conn/conn.php';
require '../conn/function.php';
require 'member_check.php';

$action=$_GET["action"];
if($action=="save"){
    $M_pid=t($_POST["M_pid"]);
    $M_pkey=t(trim($_POST["M_pkey"]));
    $M_alipayon=intval($_POST["M_alipayon"]);
    $M_wxpayon=intval($_POST["M_wxpayon"]);

    if($M_pid==""){
        die("请填全信息");
    }else{
        sql("update sl_member set M_pid='$M_pid',M_alipayon=$M_alipayon,M_wxpayon=$M_wxpayon where M_id=$M_id");
        if($M_pkey!=""){
          sql("update sl_member set M_pkey='$M_pkey' where M_id=$M_id");
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
<title>支付接口 - 会员中心</title>
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
          <div class="col-md-6">
            <div class="card">
              <div class="card-header"><h4>支付接口</h4></div>
              <div class="card-body">
                <div class="row">
                    <?php if($C_pay==1){
                        echo "由平台代收款，无需配置支付接口。";
                    }else{?>
                  <form id="form">
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">PID</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" name="M_pid" value="<?php echo $M_pid?>">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">PKEY</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" name="M_pkey" value="" placeholder="已加密保存，留空则不修改">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">支付开关</label>
                    <div class="col-md-10">
                      <label><input type="checkbox" name="M_alipayon" value="1" <?php if($M_alipayon==1){echo "checked='checked'";}?>> 支付宝</label>
                      <label><input type="checkbox" name="M_wxpayon" value="1" <?php if($M_wxpayon==1){echo "checked='checked'";}?>> 微信支付</label>
                    </div>
                  </div>
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input"></label>
                    <div class="col-md-10">
                      <div style="font-size: 12px;margin-top: 10px;color: #33cabb">请到<a href="https://7-pay.cn" target="_blank"><u>7支付官网</u></a>申请收款接口 <a href="https://card.fahuo100.cn/newsinfo.html?id=1" class="btn btn-xs btn-success" target="_blank">帮助文档</a></div>
                    </div>
                  </div>
                  

                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input"></label>
                    <div class="col-md-10">
                      <button class="btn btn-primary" type="button" onclick="save()">保存</button>
                    </div>
                  </div>
                  </form>
                  <?php }?>
                  
                </div>
              </div>
            </div>
          </div>
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