<?php
require '../conn/conn.php';
require '../conn/function.php';
require 'member_check.php';

if($page==""){
  $page=1;
}
$action=$_GET["action"];

if($action=="refund"){
    $O_id=intval($_GET["O_id"]);
    $O=getrs("select * from sl_orders where O_id=$O_id");
    $sign=md5("no=".$O["O_no"]."&pid=".$M_pid."&key=$M_pkey");
    
    $info=getbody("https://7-pay.cn/refund.php?no=".$O["O_no"]."&pid=$M_pid&sign=$sign","","GET");
    if(json_decode($info)->code=="success"){
        sql("update sl_orders set O_state=2 where O_id=$O_id");
    }
    die($info);
}

$O_counts=getrs("select count(O_id) as O_count from sl_orders where O_mid=$M_id","O_count");
?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>订单管理 - 会员中心</title>
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

            <div class="card">
              <div class="card-header"><h4>订单管理</h4>
              
              <form action="?action=search" method="post" class="pull-right">
                        <div class="input-group" style="width:375px">
                    <select name="type" class="form-control" style="width: 120px;float: left;">
                      <option value="O_title">订单名称</option>
                      <option value="O_no">商户订单号</option>
                      <option value="O_tradeno">交易号</option>
                    </select>
                    <input type="text" name="search" class="form-control"  style="width: 200px">
                    <span class="input-group-btn">
                        <button class="btn btn-info" type="submit">查询</button>
                    </span>
                </div>
              </form>
              
              </div>
                  <table class="table">
                    <tr><th>订单名称/订单金额</th><th>订单时间/联系方式</th><th>支付渠道</th><th>订单号/交易号</th><th>发货内容</th><th>订单状态</th><th>退款</th></tr>
                    <?php

if($action=="search"){
  $type=t($_POST["type"]);
  $search=t($_POST["search"]);
  $sql="select * from sl_orders where O_mid=$M_id and ".$type." like '%".$search."%' order by O_id desc";
}else{
  $sql="select * from sl_orders where O_mid=$M_id order by O_id desc limit ".(($page-1)*20).",20";
}

$list=getlist($sql);
foreach($list as $O){
  switch($O["O_state"]){
    case 0:
    $state="<span style=\"color:#f90\">未付款</span>";
    $info="/";

    break;
    case 1:
    $state="<span style=\"color:#090\">已付款</span>";
    $info="<button type=\"button\" class=\"btn btn-xs btn-danger\" onclick=\"refund(".$O["O_id"].")\">退款</button>";
    break;
    case 2:
    $state="<span style=\"color:#f00\">已退款</span>";
    $info="/";

    break;
  }

  echo "<tr id=\"".$O["O_id"]."\"><td><div style=\"overflow: hidden;white-space: nowrap;text-overflow: ellipsis;width:200px\">".$O["O_title"]."</div><b>￥".$O["O_price"]."×".$O["O_num"]."=￥".($O["O_price"]*$O["O_num"])."</td><td>".$O["O_time"]."<br>".$O["O_address"]."</td><td><img src=\"images/".$O["O_paytype"].".png\"></td><td>".$O["O_no"]."<br>".$O["O_tradeno"]."</td><td>".str_replace("||","<br>",$O["O_content"])."</td><td>$state</td><td>$info</td></tr>";
}
                    ?>
                  </table>
                  
            </div>


<?php if($action!="search"){?>
        <ul class="pagination" id="pagination" style="float: right;"></ul>
        <input type="hidden" id="PageCount" runat="server" />
        <input type="hidden" id="PageSize" runat="server" value="20" />
        <input type="hidden" id="countindex" runat="server" value="20"/>
        <input type="hidden" id="visiblePages" runat="server" value="7" />
<?php }?>
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
                window.location="?page="+num;
            }
        }
    });
}

$(function () {
    loadData(<?php echo $page?>);
    loadpage(<?php echo $page?>);
});

function notice(id){
    $.ajax({
        url: '?action=notice&O_id='+id,
        type: 'get',
        success: function(data) {
            data = JSON.parse(data);
            if (data.msg == "success") {
                location.reload();
            } else {
                lightyear.notify(data.msg, 'danger', 100);
            }
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