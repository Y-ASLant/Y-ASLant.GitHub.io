<?php
require '../conn/conn.php';
require '../conn/function.php';
require 'admin_check.php';

$t1=getrs("select sum(L_money) as L_sum from sl_list where L_money>0 and L_title like '%账户充值%' and to_days(L_time) = to_days(now())","L_sum");
$t2=getrs("select sum(L_money) as L_sum from sl_list where L_money<0 and L_title like '%手续费%' and to_days(L_time) = to_days(now())","L_sum")*-1;
$t3=getrs("select sum(L_money) as L_sum from sl_list where L_money>0 and L_title like '%账户充值%' and to_days(L_time) = to_days(now())-1","L_sum");
$t4=getrs("select sum(L_money) as L_sum from sl_list where L_money<0 and L_title like '%手续费%' and to_days(L_time) = to_days(now())-1","L_sum")*-1;

$action=$_GET["action"];
$id=intval($_GET["id"]);
$page=$_GET["page"];
$M_id=intval($_GET["M_id"]);

if($page==""){
  $page=1;
}
if($_GET["type"]=="pay"){
    $sql="select count(L_id) as L_count from sl_list where L_money>0";
}else{
    if($M_id==0){
        $sql="select count(L_id) as L_count from sl_list";
    }else{
        $sql="select count(L_id) as L_count from sl_list where L_mid=$M_id";
    }
}

$L_counts=getrs($sql,"L_count")
?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>资金明细 - 后台管理</title>
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
              <div class="card-header">
                  <h4>站内明细</h4>

              </div>
                  <table class="table">
                    <tr><th>ID</th><th>明细名称</th><th>会员帐号</th><th>金额（元）</th><th>时间</th><th>订单号</th></tr>
                    <?php
if($_GET["type"]=="pay"){
    $sql="select * from sl_list where L_money>0  order by L_id desc limit ".(($page-1)*20).",20";
}else{
    if($M_id==0){
        $sql="select * from sl_list  order by L_id desc limit ".(($page-1)*20).",20";
    }else{
        $sql="select * from sl_list where L_mid=$M_id order by L_id desc limit ".(($page-1)*20).",20";
    }
}


$list=getlist($sql);
foreach($list as $row){

    $M=getrs("select * from sl_member where M_id=".$row["L_mid"]);
    if($M!=""){
        $M_viptimex=$M["M_viptime"];
        $M_viplongx=$M["M_viplong"];
        $M_vipx=$M["M_vip"];
        $M_email=$M["M_email"];
    }
    
                              
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
if($row["L_money"]>0){
    $L="+";
}else{
    $L="";
}


  echo "<tr id=\"".$row["L_id"]."\"><td>".$row["L_id"]."</td><td>".$row["L_title"]."</td><td><a href=\"member.php?M_id=".$row["L_mid"]."\" target=\"_blank\" style=\"color:".$color."\">".$M_email."</a> <a href=\"?M_id=".$row["L_mid"]."\" class=\"btn btn-xs btn-info\">查询</a></td><td>".$L.$row["L_money"]."</td><td>".$row["L_time"]."</td><td>".$row["L_no"]."</td></tr>";
} 
                    ?>
                  </table>
            </div>

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
            $("#PageCount").val("<?php echo $L_counts?>");
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


function delall() {
    $.alert({
        title: '确认删除',
        content: '确认删除？',
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