<?php
require '../conn/conn.php';
require '../conn/function.php';
require 'admin_check.php';

$action=$_GET["action"];
$id=intval($_GET["id"]);
$page=$_GET["page"];
$M_id=intval($_GET["M_id"]);

if($action=="delall"){
    sql("delete from sl_orders where O_state=0 and O_time < CURDATE()");
    die("success");
}

if($action=="refund"){
    $O_id=intval($_GET["O_id"]);
    $O=getrs("select * from sl_orders where O_id=$O_id");
    $sign=md5("no=".$O["O_no"]."&pid=".$C_pid."&key=$C_pkey");
    
    $info=getbody("https://7-pay.cn/refund.php?no=".$O["O_no"]."&pid=$C_pid&sign=$sign","","GET");
    if(json_decode($info)->code=="success"){
        sql("update sl_orders set O_state=2 where O_id=$O_id");
    }
    die($info);
}

if($page==""){
  $page=1;
}
if($M_id==0){
    $sql="select count(O_id) as O_count from sl_orders";
}else{
    $sql="select count(O_id) as O_count from sl_orders where O_mid=$M_id";
}
$O_counts=getrs($sql,"O_count");
?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>订单管理 - 后台管理</title>
<link rel="shortcut icon" href="../media/<?php echo $C_ico?>" />
<link href="../css/bootstrap.min.css" rel="stylesheet">
<link href="../css/materialdesignicons.min.css" rel="stylesheet">
<link href="../css/style.min.css" rel="stylesheet">
<link rel="stylesheet" href="../js/jconfirm/jquery-confirm.min.css">
<style type="text/css">
.pagination{margin: 0px;}
</style>
</head>
  
<body>
<div class="lyear-layout-web">
  <div class="lyear-layout-container">
  <?php require 'nav.php';?>
    <main class="lyear-layout-content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <form id="list">
            <div class="card">
              <div class="card-header"><h4>订单管理</h4>
              
              </div>
                  <table class="table">
                    <tr><th>订单名称/订单金额</th><th>会员</th><th>支付渠道</th><th>订单时间<br>联系方式</th><th>订单号<br>交易号</th><th>订单状态</th><th>退款</th></tr>
                    <?php
if($M_id==0){
    $sql="select * from sl_orders order by O_id desc limit ".(($page-1)*20).",20";
}else{
    $sql="select * from sl_orders where O_mid=$M_id order by O_id desc limit ".(($page-1)*20).",20";
}
$list=getlist($sql);
foreach($list as $row){

  switch($row["O_state"]){
    case 0:
        $state="<span style=\"color:#f90\">未付款</span>";
        $info="/";
    break;
    case 1:
        $state="<span style=\"color:#090\">已付款</span>";
        if($row["O_mid"]==0){
            $info="<button type=\"button\" class=\"btn btn-xs btn-danger\" onclick=\"refund(".$row["O_id"].")\">退款</button>";
        }else{
            $info="/";
        }
        
    break;
    case 2:
        $state="<span style=\"color:#f00\">已退款</span>";
        $info="/";

    break;
  }
  if($row["O_mid"]==0){
      $shop="自营";
      $email="自营店";
  }else{
      $M=getrs("select * from sl_member where M_id=".$row["O_mid"]);
      $shop=$M["M_webtitle"];
      $email=$M["M_email"];
  }
  

    
  echo "<tr id=\"".$row["O_id"]."\"><td><b>".htmlspecialchars($row["O_title"])."</b><br>￥".$row["O_price"]."×".$row["O_num"]."=￥".($row["O_price"]*$row["O_num"])."</td><td><a href=\"member.php?M_id=".$row["O_mid"]."\" target=\"_blank\" style=\"color:".$color."\">[".$shop."]".$email."</a> <a href=\"?M_id=".$row["O_mid"]."\" class=\"btn btn-xs btn-info\">查询</a></td><td><img src=\"images/".$row["O_paytype"].".png\"></td><td>".$row["O_time"]."<br>".$row["O_address"]."</td><td>".htmlspecialchars($row["O_no"])."<br>".htmlspecialchars($row["O_tradeno"])."</td><td>$state</td><td>$info</td></tr>";
    }

                    ?>
                  </table>
                  
            </div>

            <button class="btn btn-sm btn-danger" type="button" onClick="delall()"><i class="fa fa-times-circle" ></i> 清理未付款订单</button>

            <ul class="pagination" id="pagination" style="float: right;"></ul>
                  <input type="hidden" id="PageCount" runat="server" />
        <input type="hidden" id="PageSize" runat="server" value="20" />
        <input type="hidden" id="countindex" runat="server" value="20"/>
        <!--设置最多显示的页码数 可以手动设置 默认为7-->
        <input type="hidden" id="visiblePages" runat="server" value="7" />
        </form>
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
<script src="../js/jconfirm/jquery-confirm.min.js"></script>

<script src="../js/bootstrap-notify.min.js"></script>
<script type="text/javascript" src="../js/lightyear.js"></script>

<script src="../js/jqPaginator.min.js" type="text/javascript"></script>
<script type="text/javascript">

  function loadData(num) {
            $("#PageCount").val("<?php echo $O_counts?>");
        }
function loadpage(id) {
    var myPageCount = parseInt($("#PageCount").val());
    var myPageSize = parseInt($("#PageSize").val());
    var countindex = myPageCount % myPageSize > 0 ? (myPageCount / myPageSize) + 1 : (myPageCount / myPageSize);
    $("#countindex").val(countindex);

    $.jqPaginator('#pagination', {
        totalPages: parseInt($("#countindex").val()),
        visiblePages: parseInt($("#visiblePages").val()),
        currentPage: id,
        first: '<li class="first page-item"><a href="javascript:;" class="page-link">|<</a></li>',
        prev: '<li class="prev page-item"><a href="javascript:;" class="page-link"><i class="arrow arrow2"></i><</a></li>',
        next: '<li class="next page-item"><a href="javascript:;" class="page-link">><i class="arrow arrow3"></i></a></li>',
        last: '<li class="last page-item"><a href="javascript:;" class="page-link">>|</a></li>',
        page: '<li class="page page-item"><a href="javascript:;" class="page-link">{{page}}</a></li>',
        onPageChange: function (num, type) {
            if (type == "change") {
                window.location="?M_id=<?php echo $M_id?>&page="+num;
            }
        }
    });
}
$(function () {
    loadData(<?php echo $page?>);
    loadpage(<?php echo $page?>);

});

function notice(){
    lightyear.loading('show'); 
    $.ajax({
        url: '../api/notice.php',
        type: 'get',
        success: function(data) {
            lightyear.loading('hide');
            lightyear.notify('批量通知成功', 'success', 100);
        }
    });
}

function refund(id){
    $.alert({
    title: '确认退款',
    content: '确定退款吗？',
    buttons: {
      confirm: {
        text: '确认',
        btnClass: 'btn-primary',
        action: function(){
          $.ajax({
            url: '?action=refund&O_id='+id,
            type: 'post',
            success: function(data) {
                data = JSON.parse(data);
                if (data.code == "success") {
                    location.reload();
                } else {
                    lightyear.notify(data.msg, 'danger', 100);
                }
            }
        });
        }
      },
      cancel: {
        text: '取消',
        action: function () {

        }
      }
    }
    });
    
}

function delall() {
    $.alert({
        title: '确认删除',
        content: '清理一天前未付款订单？',
    buttons: {
      confirm: {
        text: '确认',
        btnClass: 'btn-primary',
        action: function(){
          $.ajax({
            url: '?action=delall',
            type: 'post',
            data: $("#list").serialize(),
            success: function(data) {
                data = JSON.parse(data);
                if (data.msg == "success") {
                  lightyear.notify('删除成功', 'success', 100);
                    id = data.ids.split(",");
                    for (var i = 0; i < id.length; i++) {
                        $("#" + id[i]).hide();
                    };
                } else {
                  lightyear.notify(data.msg, 'danger', 100);

                }
            }
        });
        }
      },
      cancel: {
        text: '取消',
        action: function () {

        }
      }
    }
    });

}

$('input[name="selectAll"]').on("click",function(){
        if($(this).is(':checked')){
            $('input[name="id[]"]').each(function(){
                $(this).prop("checked",true);
            });
        }else{
            $('input[name="id[]"]').each(function(){
                $(this).prop("checked",false);
            });
        }
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