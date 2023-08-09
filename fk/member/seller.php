<?php
require '../conn/conn.php';
require '../conn/function.php';
require 'member_check.php';

$action=$_GET["action"];
if($action=="shop"){

    if($M_money-$C_fee>=0){
        sql("update sl_member set M_webtitle='您的店铺名称',M_keyword='网站关键词用,隔开',M_description='您的网站描述',M_seller=1,M_shopt='s1',M_money=M_money-".$C_fee." where M_id=".$M_id);
        sql("insert into sl_list(L_time,L_title,L_money,L_mid,L_no) values('".date('Y-m-d H:i:s')."','入驻商家',-".$C_fee.",".$M_id.",'".gen_key(20)."')");
        die("{\"msg\":\"success\"}");
    }else{
        die("{\"msg\":\"账户余额不足，请先充值\"}");
    }
}

?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>入驻商家 - 会员中心</title>
<link rel="shortcut icon" href="/favicon.ico" />
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
    <main class="lyear-layout-content" style="background:url(images/home-bg.png)">
      
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
              <div style="margin-top:30px;font-weight:bold;">
                  <p style="font-size:40px">为 <span style="color:#492DD9">数字虚拟商品</span> 量身打造的交易平台</p>
                  <p style="font-size:35px">无需人工值守，增加您的被动收入</p>
                  <p style="font-size:20px">支持固定内容（可重复发货）和卡密（不重复发货）两种模式</p>
                  <p>固定内容（素材类、教程类、源码类） 卡密发货（软件激活码、会员兑换码、游戏账号等）</p>
                  <p>开店费用：入驻费用<span style="color:#f00"><?php echo $C_fee?>元</span>，每笔订单收取<span style="color:#f00"><?php echo $C_rate?>%手续费（不含支付接口）</span></p>
                  <p><button class="btn btn-primary" onclick="shop()">立即入驻</button> <a class="btn btn-info" href="../shop" target="_blank">查看演示</a></p>
              </div>
            </div>
            <div class="col-md-6">
                <img src="images/seo.gif">
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

function shop(){
    lightyear.loading('show');
    $.ajax({
        url:'?action=shop',
        type:'get',
        success:function (data) {
        lightyear.loading('hide');
        data = JSON.parse(data);
        
        if(data.msg=="success"){
          lightyear.notify("开店成功！即将进入卖家中心", 'success', 100);
          setTimeout(function(){
              window.location.href="index.php"
          }, 1000 )
        }else{
          lightyear.notify(data.msg, 'danger', 100);
          setTimeout(function(){
              window.location.href="pay.php"
          }, 1000 )
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