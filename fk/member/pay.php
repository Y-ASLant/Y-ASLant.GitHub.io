<?php
require '../conn/conn.php';
require '../conn/function.php';
require 'member_check.php';

$action=$_GET["action"];
$money=round($_GET["money"],2);

if($action=="pay"){
  $title="账户充值";
  $money=round($_POST["fee"],2);
  $pay_type=$_POST["paytype"];
  $notify_url=gethttp().$domain."/member/notify.php";
  $return_url=gethttp().$domain."/member/pay.php";
  $no=gen_key(20);

  $sign=strtolower(md5("body=".$title."&fee=".$money."&no=".$no."&notify_url=".$notify_url."&pay_type=".$pay_type."&pid=".$C_pid."&remark=".$M_id."&return_url=".$return_url."&key=".$C_pkey));

  header("location:https://7-pay.cn/pay.php?body=".$title."&fee=".$money."&no=".$no."&notify_url=".$notify_url."&pay_type=".$pay_type."&pid=".$C_pid."&remark=".$M_id."&return_url=".$return_url."&sign=".$sign);
}

?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>账户充值 - 会员中心</title>
<link rel="shortcut icon" href="../media/<?php echo $C_ico?>" />
<link href="../css/bootstrap.min.css" rel="stylesheet">
<link href="../css/materialdesignicons.min.css" rel="stylesheet">
<link href="../css/style.min.css" rel="stylesheet">
<script type="text/javascript" src="../upload/upload.js"></script>
<style type="text/css">
.qrcode{width:200px;height:200px}
.buy label {
  padding: 5px 10px;
  cursor: pointer;
  border: #CCCCCC solid 1px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
}

.buy .checked {
  border: #33cabb solid 1px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  color: #33cabb;
  background: #F1FCFA;
}

.buy input[type="radio"] {
  display: none;
}
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
              <div class="card-header"><h4>账户充值</h4></div>
              <div class="card-body">
                <div class="row">
                    <form method="post" action="?action=pay">
                    <p>账户余额：<?php echo $M_money?>元</p>
                    <p><div class="input-group">
                        <input type="text" class="form-control" name="fee" value="<?php echo $money?>">
                        <span class="input-group-addon">元</span>
                    </div></p>
                    <p class="buy">

                      <?php if($C_alipayon==1){
                        echo "<label aa=\"paytype\"><input type=\"radio\" name=\"paytype\" value=\"alipay\"><img src=\"images/alipay.png\"></label>";
                      }?>
                      <?php if($C_wxpayon==1){
                        echo "<label aa=\"paytype\"><input type=\"radio\" name=\"paytype\" value=\"wxpay\"><img src=\"images/wxpay.png\"></label>";
                      }?>

                    </p>
                    <p><button class="btn btn-primary">充值</button> <span style="font-size:12px">说明：帐号余额可用于商户入驻费/交易手续费/开通VIP使用，不可提现</span></p>
                    </form>
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
  $(function() { $('.buy label').click(function(){var aa = $(this).attr('aa');$('[aa="'+aa+'"]').removeAttr('class') ;$(this).attr('class','checked');});});
  $(".buy").find("input:first").attr("checked","checked");
  $(".buy").find("label:first").addClass("checked");
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