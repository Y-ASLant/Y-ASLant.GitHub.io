<?php
require '../conn/conn.php';
require '../conn/function.php';
require 'admin_check.php';

$M_all=getrs("select count(M_id) as M_all from sl_member","M_all");
$M_today=getrs("select count(M_id) as M_today from sl_member where to_days(M_regtime) = to_days(now())","M_today");
$M_yestoday=getrs("select count(M_id) as M_today from sl_member where to_days(M_regtime) = to_days(now())-1","M_today");


$g1=round(getrs("select sum(O_price*O_num) as money_total from sl_orders where O_state=1 and DATE_FORMAT( O_time, '%Y-%m' )='".date('Y-m', strtotime ("-0 month", time()))."'","money_total")/date("d")*date("t",strtotime(date("Y-m-d"))),2);

$g2=round(getrs("select sum(L_money) as money_total from sl_list where L_money>0 and DATE_FORMAT( L_time, '%Y-%m' )='".date('Y-m', strtotime ("-0 month", time()))."'","money_total")/date("d")*date("t",strtotime(date("Y-m-d"))),2);

for ($j=0;$j<=30;$j++){
  $row=getrs("select sum(O_price*O_num) as money_total from sl_orders where O_state=1  and DATE_FORMAT( O_time, '%Y-%m-%d' )='".date('Y-m-d', strtotime ("-".(30-$j)." day", time()))."'");
  $m_all1=round($row["money_total"],2);
  if ($m_all1==""){
    $m_all1=0;
  }
    $info1=$info1.$m_all1.",";
  }
  
for ($j=0;$j<=12;$j++){
  $row=getrs("select sum(O_price*O_num) as money_total from sl_orders where O_state=1  and DATE_FORMAT( O_time, '%Y-%m' )='".date('Y-m', strtotime ("-".(12-$j)." month", time()))."'");
  $m_all4=round($row["money_total"],2);
  if ($m_all4==""){
    $m_all4=0;
  }
    $info4=$info4.$m_all4.",";
  }
  
for ($j=0;$j<=30;$j++){
  $row=getrs("select sum(L_money) as money_total from sl_list where L_money>0  and DATE_FORMAT( L_time, '%Y-%m-%d' )='".date('Y-m-d', strtotime ("-".(30-$j)." day", time()))."'");
  $m_all2=round($row["money_total"],2);
  if ($m_all2==""){
    $m_all2=0;
  }
    $info2=$info2.$m_all2.",";
  }
  
for ($j=0;$j<=12;$j++){
  $row=getrs("select sum(L_money) as money_total from sl_list where L_money>0  and DATE_FORMAT( L_time, '%Y-%m' )='".date('Y-m', strtotime ("-".(12-$j)." month", time()))."'");
  $m_all3=round($row["money_total"],2);
  if ($m_all3==""){
    $m_all3=0;
  }
    $info3=$info3.$m_all3.",";
  }
  
?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>首页 - 后台管理</title>
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
          
        <div class="row">

<div class="col-lg-12"> 
          <div class="alert alert-success alert-dismissible" role="alert">
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                  欢迎您使用《发卡宝-卡密寄售系统》<a class="btn btn-xs btn-info" href="https://www.7-card.cn" target="_blank">官网</a>，如果遇到问题可联系客服QQ：450245869或微信：shanling1706
                </div>
              </div>
          <div class="col-lg-6"> 
            <div class="card">
              <div class="card-header">
                <h4>日度交易额统计</h4>
              </div>
              <div class="card-body" >
                <div id="main2" style="height:200px"></div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6"> 
            <div class="card">
              <div class="card-header">
                <h4>月度交易额统计</h4>
                <div class="pull-right">本月预估：<?php echo $g1."元";?></div>
              </div>
              <div class="card-body" >
                <div id="main4" style="height:200px"></div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6"> 
            <div class="card">
              <div class="card-header">
                <h4>日度充值统计</h4>
              </div>
              <div class="card-body" >
                <div id="main3" style="height:200px"></div>
              </div>
            </div>
          </div>
        

            <div class="col-lg-6"> 
            <div class="card">
              <div class="card-header">
                <h4>月度充值统计</h4>
                <div class="pull-right">本月预估：<?php echo $g2."元";?></div>
              </div>
              <div class="card-body">
                  <div id="main" style="height:200px"></div>
                </div>
            </div>
            </div>
        
        
            
        </div>
        
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
              <div class="card-header">
                <h4>最新会员（总计：<?php echo $M_all;?> / 昨日：<?php echo $M_yestoday;?> / 今日：<?php echo $M_today;?>）</h4>
              </div>
              <div class="card-nody">
                  <?php
                  $list=getlist("select * from sl_member order by M_id desc limit 16");
                  foreach($list as $row){
                        $M_viptimex=$row["M_viptime"];
                    $M_viplongx=$row["M_viplong"];
                    $M_vipx=$row["M_vip"];
                                                  
                        if($M_viplongx-(time()-strtotime($M_viptimex))/86400>0){
                            if($M_vipx==0){
                            $color="#f90";
                        }
                        if($M_vipx==1){
                            $color="#f90";
                        }
                        if($M_vipx==2){
                            $color="#f00";
                        }
                    }else{
                      $color="#000";
                    }
                            
                            echo "<a class=\"mbox\" href=\"member.php?M_id=".$row["M_id"]."\">
                            <img src=\"images/head.jpg\">
                            <div style=\"color:$color\">".$row["M_email"]."</div>
                            <div style=\"overflow: hidden;white-space: nowrap;text-overflow: ellipsis;\">".$row["M_name"]."</div>
                            <div>".date("Y-m-d",strtotime($row["M_regtime"]))."</div>
                            </a>";
                        }

                  
                  ?>
              </div>
              </div>
            </div>
            
            
            
            
        </div>
      </div>
    </main>
    <!--End 页面主要内容-->
  </div>
</div>

<style>
    .mbox{width:100px;display:inline-block;text-align:center;overflow:hidden;font-size:12px;padding:10px}
    .mbox:hover{background:#EEE}
    .mbox img{width:50px;height:50px;margin-bottom:10px;border-radius:10px}
</style>
<script type="text/javascript" src="../js/jquery.min.js"></script>
<script type="text/javascript" src="../js/bootstrap.min.js"></script>
<script type="text/javascript" src="../js/perfect-scrollbar.min.js"></script>
<script type="text/javascript" src="../js/main.min.js"></script>

<script type="text/javascript" src="../js/lightyear.js"></script>

<script type="text/javascript">

function sendmail(){
    lightyear.loading('show'); 
    $.ajax({
        url: '?action=sendmail',
        type: 'get',
        success: function(data) {
            lightyear.loading('hide');
            lightyear.notify('批量通知成功', 'success', 100);
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
    <script src="../js/echarts.min.js"></script>
    <script>
    
    
    
var myChart = echarts.init(document.getElementById('main')); 
var myChart2 = echarts.init(document.getElementById('main2')); 
var myChart3 = echarts.init(document.getElementById('main3')); 
var myChart4 = echarts.init(document.getElementById('main4')); 

option = {
      tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    top: '3%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [<?php
            for($i=0;$i<=12;$i++){
              echo "'".date('Y-m', strtotime ("-".(12-$i)." month", time()))."',";
            }
            ?>]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [<?php echo $info3?>],
      type: 'line',
      areaStyle: {},
      smooth: true
    },{
      data: [,,,,,,,,,,,<?php echo splitx($info3,",",11)?>,<?php echo $g2?>],
      type: 'line',
       lineStyle: {
        type: 'dashed'
      },
      smooth: true
    }
  ]
};


option2 = {
      tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    top: '3%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: [<?php
            for($i=0;$i<=30;$i++){
              echo "'".date('m-d', strtotime ("-".(30-$i)." day", time()))."',";
            }
            ?>]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [<?php echo $info1?>],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
};



option3 = {
      tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    top: '3%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [<?php
            for($i=0;$i<=30;$i++){
              echo "'".date('m-d', strtotime ("-".(30-$i)." day", time()))."',";
            }
            ?>]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [<?php echo $info2?>],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
};


option4 = {
      tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    top: '3%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [<?php
            for($i=0;$i<=12;$i++){
              echo "'".date('Y-m', strtotime ("-".(12-$i)." month", time()))."',";
            }
            ?>]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [<?php echo $info4?>],
      type: 'line',
      areaStyle: {},
      smooth: true
    },{
      data: [,,,,,,,,,,,<?php echo splitx($info4,",",11)?>,<?php echo $g1?>],
      type: 'line',
       lineStyle: {
        type: 'dashed'
      },
      smooth: true
    }
  ]
};
      myChart.setOption(option);
      myChart2.setOption(option2);
      myChart3.setOption(option3);
      myChart4.setOption(option4);

    </script>
</body>
</html>