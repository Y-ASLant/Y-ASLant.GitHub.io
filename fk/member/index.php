<?php
require '../conn/conn.php';
require '../conn/function.php';
require 'member_check.php';

$t1=getrs("select sum(O_price*O_num) as O_sum from sl_orders where O_mid=$M_id and O_state=1 and to_days(O_time) = to_days(now())","O_sum");
$t2=getrs("select sum(O_price*O_num) as O_sum from sl_orders where O_mid=$M_id and O_state=1 and DATE_FORMAT( O_time, '%Y%m' ) = DATE_FORMAT( CURDATE( ) , '%Y%m' )","O_sum");
$t3=getrs("select sum(O_price*O_num) as O_sum from sl_orders where O_mid=$M_id and O_state=1","O_sum");

if($C_rate>0){
  $t5=round($M_money/$C_rate*100,2);
  if($t5<0){
      $t5=0;
  }
}

for ($j=0;$j<=30;$j++){
  $list=getlist("select sum(O_price*O_num) as money_total from sl_orders where O_state=1 and O_mid=$M_id and DATE_FORMAT( O_time, '%Y-%m-%d' )='".date('Y-m-d', strtotime ("-".(30-$j)." day", time()))."'");
  foreach($list as $O){
    $m_all1=round($O["money_total"],2);
    if ($m_all1==""){
      $m_all1=0;
    }
    $info1=$info1.$m_all1.",";
  }
}
?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>首页 - 卖家中心</title>
<link rel="shortcut icon" href="../media/<?php echo $C_ico?>" />
<link href="../css/bootstrap.min.css" rel="stylesheet">
<link href="../css/materialdesignicons.min.css" rel="stylesheet">
<link href="../css/style.min.css" rel="stylesheet">
</head>
  
<body>
<div class="lyear-layout-web">
  <div class="lyear-layout-container">
	<?php require 'nav.php';?>
    <main class="lyear-layout-content">
      <div class="container-fluid">
          <div class="alert alert-warning alert-dismissable">
            <button type="button" class="close" data-dismiss="alert"
                    aria-hidden="true">
                &times;
            </button>
            尊敬的用户您好，我们平台不接任何违法违规业务，一经发现将永久冻结账号并提交公安机关处理！
        </div>
        <?php
        if($M_money<=0){
            echo '<div class="alert alert-danger alert-dismissable">
            <button type="button" class="close" data-dismiss="alert"
                    aria-hidden="true">
                &times;
            </button>
            您的账户余额（'.$M_money.'元）不足以支付交易手续费，请尽快充值，以免影响您的网站正常收款。<a href="pay.php" class="btn btn-xs btn-info">充值</a>
        </div>';
        }
        ?>
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <div class="card bg-primary">
              <div class="card-body clearfix">
                <div class="pull-right">
                  <p class="h6 text-white m-t-0">今日交易额</p>
                  <p class="h3 text-white m-b-0">￥<?php echo round($t1,2)?></p>
                </div>
                <div class="pull-left"> <span class="img-avatar img-avatar-48 bg-translucent"><i class="mdi mdi-currency-cny fa-1-5x"></i></span> </div>
              </div>
            </div>
          </div>
          
          <div class="col-sm-6 col-lg-3">
            <div class="card bg-danger">
              <div class="card-body clearfix">
                <div class="pull-right">
                  <p class="h6 text-white m-t-0">本月交易额</p>
                  <p class="h3 text-white m-b-0">￥<?php echo round($t2,2)?></p>
                </div>
                <div class="pull-left"> <span class="img-avatar img-avatar-48 bg-translucent"><i class="mdi mdi-account fa-1-5x"></i></span> </div>
              </div>
            </div>
          </div>
          
          <div class="col-sm-6 col-lg-3" href="vip.php">
            <div class="card bg-success">
              <div class="card-body clearfix">
                <div class="pull-right">
                  <p class="h6 text-white m-t-0">总交易额</p>
                  <p class="h3 text-white m-b-0">￥<?php echo round($t3,2)?></p>
                </div>
                <div class="pull-left"> <span class="img-avatar img-avatar-48 bg-translucent"><i class="mdi mdi-arrow-down-bold fa-1-5x"></i></span> </div>
              </div>
            </div>
          </div>
          
          <a class="col-sm-6 col-lg-3" href="pay.php">
            <div class="card bg-purple">
              <div class="card-body clearfix">
                <div class="pull-right" style="text-align: right;">
                  <p class="h6 text-white m-t-0">账户余额</p>
                  <p class="h3 text-white m-b-0">￥<?php echo $M_money?></p>
                  <?php
                    if($C_rate>0){
                      echo "<p style=\"font-size:12px;margin-bottom:-17px\">交易手续费".$C_rate."%，预计还可收款".$t5."元</p>";
                    }
                  ?>
 
                </div>
                <div class="pull-left"> <span class="img-avatar img-avatar-48 bg-translucent"><i class="mdi mdi-comment-outline fa-1-5x"></i></span> </div>
              </div>
            </div>
          </a>
        </div>
        
        
        <div class="row">
          <div class="col-lg-6"> 
            <div class="card">
              <div class="card-header">
                <h4>订单统计</h4>
              </div>
              <div class="card-body" >
                <canvas id="myChart" class="js-chartjs-bars"></canvas>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6"> 
            <div class="card" style="min-height:475px">
              <div class="card-header">
                <h4>最近订单</h4>
                <a href="orders.php" class="btn btn-warning btn-sm pull-right">查看全部</a>
              </div>

              <table class="table">
                    <tr><th>订单名称</th><th>订单价格/数量</th><th>订单时间</th><th>订单状态</th></tr>
                    <?php
                      $list=getlist("select * from sl_orders where O_mid=$M_id order by O_id desc limit 9");
                      foreach($list as $O){
                        switch($O["O_state"]){
                          case 0:
                              $state="<span style=\"color:#f90\">未付款</span>";
                          break;
                          case 1:
                              $state="<span style=\"color:#090\">已付款</span>";
                          break;
                          case 2:
                              $state="<span style=\"color:#f00\">已退款</span>";
                          break;
                        }
                        echo "<tr id=\"".$O["O_id"]."\"><td><div style=\"overflow: hidden;white-space: nowrap;text-overflow: ellipsis;width:200px\">".$O["O_title"]."</div></td><td>￥".$O["O_price"]."×".$O["O_num"]."=￥".round($O["O_price"]*$O["O_num"],2)."</td><td>".$O["O_time"]."</td><td>$state</td></tr>";
                      }
                    ?>
                  </table>
              </div>
            </div>
        </div>
      </div>
    </main>
    <!--End 页面主要内容-->
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

<!--图表插件-->
<script type="text/javascript" src="../js/Chart.js"></script>
<script type="text/javascript">
$(document).ready(function(e) {

var ctx = $('#myChart');

ctx.height(500);

    var $dashChartBarsCnt  = jQuery('.js-chartjs-bars' )[0].getContext( '2d' );
    var $dashChartBarsData = {
    labels: [<?php
            for($i=0;$i<=30;$i++){
              echo "'".date('m-d', strtotime ("-".(30-$i)." day", time()))."',";
            }
            ?>],
    datasets: [
      {
        label: '订单金额',
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0)',
        backgroundColor: 'rgba(51,202,185,0.5)',
                hoverBackgroundColor: "rgba(51,202,185,0.7)",
                hoverBorderColor: "rgba(0,0,0,0)",
        data: [<?php echo $info1?>]
      }
    ]
  };


    new Chart($dashChartBarsCnt, {
        type: 'bar',
        data: $dashChartBarsData
    });
    
    var myLineChart = new Chart($dashChartLinesCnt, {
        type: 'line',
        data: $dashChartLinesData,
    });
});
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