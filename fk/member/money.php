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
<title>资金提现 - 会员中心</title>
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
                    
                    <?php if($C_pay==0){
                        echo "由商家自行提供收款接口，无需提现。";
                    }else{?>
                    <form method="post" action="?action=pay">
                    <p>账户余额：<?php echo $M_money?>元</p>
                    
                    <p><div class="input-group">
                        <span class="input-group-addon">提现金额</span>
                        <input type="text" class="form-control" name="" value="">
                        <span class="input-group-addon">元</span>
                    </div></p>
                    
                    <p><div class="input-group">
                        <span class="input-group-addon">支付宝帐号</span>
                        <input type="text" class="form-control" name="aliapy" value="">
                        
                    </div></p>
                    
                    <p><div class="input-group">
                        <span class="input-group-addon">真实姓名</span>
                        <input type="text" class="form-control" name="name" value="">
                        
                    </div></p>
                    
                    
                    <p><button class="btn btn-primary">提现</button>  <span style="font-size:12px">说明：一个工作日到账</span></p>
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