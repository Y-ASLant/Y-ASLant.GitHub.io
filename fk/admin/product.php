<?php
require '../conn/conn.php';
require '../conn/function.php';
require 'admin_check.php';

$page=$_GET["page"];
$action=$_GET["action"];
$P_id=intval($_GET["P_id"]);
$S_id=intval($_GET["S_id"]);


if($page==""){
  $page=1;
}

if($action=="sh"){
    $P_id=intval($_GET["P_id"]);
    sql("update sl_product set P_sh=1 where P_id=$P_id");
    die("success");
}

if($action=="del"){
    $P_id=intval($_GET["P_id"]);
    sql("update sl_product set P_del=1 where P_id=$P_id");
    die("success");
}

if($action=="on"){
    $P_id=intval($_GET["P_id"]);
    $on=intval($_GET["on"]);
    sql("update sl_product set P_on=$on where P_id=$P_id");
    if($on==1){
        die("{\"code\":\"success\",\"msg\":\"产品已上架\"}");
    }else{
        die("{\"code\":\"error\",\"msg\":\"产品已下架\"}");
    }
}

if($action=="sort_on"){
    $S_id=intval($_GET["S_id"]);
    $on=intval($_GET["on"]);
    sql("update sl_psort set S_on=$on where S_id=$S_id");
    if($on==1){
        die("{\"code\":\"success\",\"msg\":\"产品分类已上架\"}");
    }else{
        die("{\"code\":\"error\",\"msg\":\"产品分类已下架\"}");
    }
}

if($action=="delall"){
  $id=$_POST["id"];
  if(count($id)>0) {
    $shu=0 ;
    for ($i=0 ;$i<count($id);$i++) {
      sql("update sl_product set P_del=1 where P_id=".intval($id[$i]));
      $shu=$shu+1 ;
      $ids=$ids.$id[$i].",";
    }
    $ids= substr($ids,0,strlen($ids)-1);
    if($shu>0) {
      die("{\"msg\":\"success\",\"ids\":\"".$ids."\"}");
    } else {
      die("{\"msg\":\"删除失败\"}");
    }
  } else {
    die("{\"msg\":\"未选择要删除的内容\"}");
  }
}


if($action=="save"){
	foreach ($_POST as $x=>$value) {
		if(splitx($x,"_",0)=="title"){
			sql("update sl_product set P_title='".$_POST[$x]."' where  P_id=".intval(splitx($x,"_",1)));
		}
		if(splitx($x,"_",0)=="order"){
			sql("update sl_product set P_order=".$_POST[$x]." where  P_id=".intval(splitx($x,"_",1)));
		}
		if(splitx($x,"_",0)=="sort"){
			sql("update sl_product set P_sort=".$_POST[$x]." where  P_id=".intval(splitx($x,"_",1)));
		}
		if(splitx($x,"_",0)=="price"){
			sql("update sl_product set P_price=".$_POST[$x]." where P_id=".intval(splitx($x,"_",1)));
		}
	}
	die("success");
}

$P_all=getrs("select count(P_id) as P_count from sl_product where P_del=0","P_count");
$P_all2=getrs("select count(P_id) as P_count from sl_product where P_mid>0 and P_del=0","P_count");
$P_all3=getrs("select count(P_id) as P_count from sl_product where P_mid=0 and P_del=0","P_count");
?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>商品管理 - 后台管理</title>
<link rel="shortcut icon" href="../media/<?php echo $C_ico?>" />
<link href="../css/bootstrap.min.css" rel="stylesheet">
<link href="../css/materialdesignicons.min.css" rel="stylesheet">
<link href="../css/style.min.css" rel="stylesheet">
<script type="text/javascript" src="../upload/upload.js"></script>
<link rel="stylesheet" href="../js/jconfirm/jquery-confirm.min.css">
<style type="text/css">

.showpic{height: 100px;border: solid 1px #DDDDDD;padding: 5px;}
.showpicx{width: 100%;max-width: 500px}
.list-group a{text-decoration:none}
.part{display:inline-block;width:80%;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;}
.part2{display:inline-block;width:20%;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;}
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
                <div class="col-lg-3">
                  <form id="list">
                  <div class="card card-primary">

                    <div class="card-header">
                      <h4>商品分类列表</h4>
                    </div>
                        <ul class="list-group">
                          <a href="?S_id=0" class="list-group-item <?php if($S_id==0){echo "active";}?>"><div class="part"><b>全部商品 [<?php echo $P_all?>个]</b></div><div class="part2">上架</div></a>
                          <a href="?S_id=-1" class="list-group-item <?php if($S_id==-1){echo "active";}?>"><div class="part"><b>自营分类 [<?php echo $P_all3?>个]</b></div><div class="part2">上架</div></a>

                          <?php 
                            $list=getlist("select * from sl_psort where S_mid=0 and S_del=0 order by S_id desc");
                            foreach($list as $S){
                              $P_count=getrs("select count(P_id) as P_count from sl_product where P_sort=".$S["S_id"]." and P_del=0","P_count");

                                  if($S["S_id"]==$S_id){
                                    $active="active";
                                  }else{
                                    $active="";
                                  }
                                  
                                  
                                  if($S["S_on"]==1){
                                        $state="checked=\"checked\"";
                                    }else{
                                        $state="";
                                    }

                                  echo "<a href=\"?S_id=".$S["S_id"]."\" class=\"list-group-item ".$active."\">
                                  <div class=\"part\">&nbsp;&nbsp;&nbsp;└ ".$S["S_title"]." [".$P_count."个]</div><div class=\"part2\"><label class=\"lyear-switch switch-solid switch-success\">
                        <input type=\"checkbox\" value=\"1\" $state id=\"S_".$S["S_id"]."\" onclick=\"switchy(".$S["S_id"].")\">
                        <span></span>
                      </label></div>
                                  </a>";
                            }

                                
                          ?>
                          
                        </ul>
                  </div>


                  <div class="card card-primary">
                        <ul class="list-group">
   
                          <li class="list-group-item "><div class="part"><b>入驻商家分类 [<?php echo $P_all2?>个]</b></div><div class="part2">上架</div></li>

                          <?php 
                            $list=getlist("select * from sl_psort where S_mid>0 and S_del=0 order by S_id desc");
                            foreach($list as $S){
                              $P_count=getrs("select count(P_id) as P_count from sl_product where P_sort=".$S["S_id"]." and P_del=0","P_count");

                                  if($S["S_id"]==$S_id){
                                    $active="active";
                                  }else{
                                    $active="";
                                  }
                                  
                                  
                                  if($S["S_on"]==1){
                                        $state="checked=\"checked\"";
                                    }else{
                                        $state="";
                                    }

                                  echo "<a href=\"?S_id=".$S["S_id"]."\" class=\"list-group-item ".$active."\">
                                  <div class=\"part\">&nbsp;&nbsp;&nbsp;└ ".$S["S_title"]." [".$P_count."个]</div><div class=\"part2\"><label class=\"lyear-switch switch-solid switch-success\">
                        <input type=\"checkbox\" value=\"1\" $state id=\"S_".$S["S_id"]."\" onclick=\"switchy(".$S["S_id"].")\">
                        <span></span>
                      </label></div>
                                  </a>";
                            }
                                
                          ?>
                          
                        </ul>
                  </div>

                  <a href="product_add.php" class="btn btn-sm btn-primary btn-label"><label><i class="mdi mdi-plus-circle"></i></label> 新增商品</a>
                  <a href="psort.php" class="btn btn-sm btn-info btn-label"><label><i class="mdi mdi-plus-circle"></i></label> 新增分类</a>

                </form>
                </div>
                
                <div class="col-lg-9">

                  <div class="card card-primary">
                    <div class="card-header ">
                      <h4>商品列表</h4>
                    </div>
<form id="form">
<table class="table">
  <tr><td>选择</td><td>排序</td><td>商品图片</td><td>商品标题</td><td>价格/审核</td><td>分类/库存</td><td>发布时间</td><td>上架</td><td>操作</td></tr>
  <?php
  if($S_id==0){
    $sql="select * from sl_product where P_del=0 order by P_id desc limit ".(($page-1)*20).",20";
  }else{
    if($S_id==-1){
      $sql="select * from sl_product where P_del=0 and P_mid=0 order by P_id desc limit ".(($page-1)*20).",20";
    }else{
      $sql="select * from sl_product where P_del=0 and P_sort=".$S_id." order by P_id desc limit ".(($page-1)*20).",20";
    }
  }


      $list=getlist($sql);
      foreach($list as $P){
        if($P["P_sh"]==0){
            $sh="<span class=\"label label-outline-warning\" onclick=\"sh(".$P["P_id"].")\" style=\"cursor:pointer\">未审核</span>";
        }
        if($P["P_sh"]==1){
            $sh="<span class=\"label label-outline-success\">已审核</span>";
        }
        if($P["P_sh"]==2){
            $sh="<span class=\"label label-outline-danger\">未通过</span>";
        }
        
        if($P["P_selltype"]==0){
            $r="<span class=\"label label-success-light\">库存充足</span>";
        }else{
            $r="<span class=\"label label-danger-light\">剩余".get_json_num($P["P_card"],"sell","0")."件</span>";
        }
        
        if($P["P_on"]==1){
            $state="checked=\"checked\"";
        }else{
            $state="";
        }

        if($P["P_mid"]==0){
          $seller="<span class=\"label label-warning-light\">自营</span>";
        }else{
          $seller="<span class=\"label label-info-light\">商家</span>";
        }
        
        if($C_html==1){
            $url="../shop/".$P["P_id"];
        }else{
            $url="../shop/?id=".$P["P_id"];
        }
        
        echo "<tr id=\"".$P["P_id"]."\">
        <td><input type=\"checkbox\" name=\"id[]\" value=\"".$P["P_id"]."\"></td>
        <td><input type=\"text\" name=\"order_".$P["P_id"]."\" onblur=\"product_list_save()\" value=\"".$P["P_order"]."\" class=\"form-control\" style=\"width:50px\"></td>
        <td><img src=\"../media/".$P["P_pic"]."\" style=\"width:60px;height:60px\"></td>
        <td>
        <textarea style=\"width:100%;min-width:180px;\" rows=\"3\" class=\"form-control\" name=\"title_".$P["P_id"]."\" onblur=\"product_list_save()\"/>".htmlspecialchars($P["P_title"])."</textarea>
        </td>

        <td>
        <p>
        
        <div class=\"input-group\" style=\"width:120px\">
            <input type=\"text\" class=\"form-control\" name=\"price_".$P["P_id"]."\" value=\"".$P["P_price"]."\" onblur=\"product_list_save()\">
            <span class=\"input-group-addon\">元</span>
        </div>
        </p>
        
        <p>$seller $sh</p>
        </td>
        
        <td><p><select name=\"sort_".$P["P_id"]."\" class=\"form-control\" style=\"width:120px;\" onchange=\"product_list_save()\">

        ";

  $list=getlist("select * from sl_psort where S_del=0 and S_mid=".$P["P_mid"]." order by S_order,S_id desc");
        foreach($list as $row2){
            if($row2["S_id"]==$P["P_sort"]){
                  $selected="selected='selected'";
                }else{
                  $selected="";
                }
                echo "<option value=\"".$row2["S_id"]."\" $selected>".$row2["S_title"]."</option>";
        }


    echo "</select></p>
    <p>$r</p>
    </td>
        <td><p>".$P["P_time"]."</p><p><a href='".$url."' target='_blank' class='btn btn-xs btn-success btn-label'><label><i class=\"mdi mdi-link\"></i></label>商品链接</a></p></td>
        <td><label class=\"lyear-switch switch-solid switch-success\">
                        <input type=\"checkbox\" value=\"1\" $state id=\"P_".$P["P_id"]."\" onclick=\"switchx(".$P["P_id"].")\">
                        <span></span>
                      </label></td>
        <td><p><a href='product_add.php?P_id=".$P["P_id"]."' class='btn btn-sm btn-info btn-label'><label><i class=\"mdi mdi-lead-pencil\"></i></label>编辑</a></p>
        <p><button type='button' class='btn btn-sm btn-danger btn-label' onclick='del(".$P["P_id"].")'><label><i class=\"mdi mdi-close-circle\"></i></label>删除</button></p>
         </td></tr>";
      }
  ?>
</table>
</form>

                  </div>
                  <label><input type="checkbox" id="selectAll" name="selectAll"> 全选</label>
                  <button class="btn btn-sm btn-danger btn-label" type="button" onclick="delall()"><label><i class="mdi mdi-close-circle"></i></label>删除所选</button>
                  <button class="btn btn-sm btn-primary btn-label" type="button" onclick="save()"><label><i class="mdi mdi-content-save"></i></label>保存修改</button>
                  <a href="product_add.php" class="btn btn-sm btn-info btn-label"><label><i class="mdi mdi-plus-circle"></i></label> 新增商品</a>
                    <ul class="pagination" id="pagination" style="float: right;"></ul>
                    <input type="hidden" id="PageCount" runat="server" />
                    <input type="hidden" id="PageSize" runat="server" value="20" />
                    <input type="hidden" id="countindex" runat="server" value="20"/>
                    <input type="hidden" id="visiblePages" runat="server" value="7" />
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

  function loadData(num) {
            $("#PageCount").val("<?php echo $P_all?>");
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

    function save(){
      lightyear.loading('show');
        $.ajax({
            url:'?action=save',
            type:'post',
            data:$("#form").serialize(),
            success:function (data) {
                lightyear.loading('hide');
                if(data=="success"){
                	lightyear.notify('保存成功', 'success', 100);
                }else{
                  	lightyear.notify(data.msg, 'danger', 100);
                }
            }
          });
      }


function sh(id){
    $.alert({
        title: '确认审核',
        content: '确认审核通过吗？',
    buttons: {
      confirm: {
        text: '确认',
        btnClass: 'btn-primary',
        action: function(){
          $.ajax({
            url: '?action=sh&P_id=' + id,
            type: 'post',
            success: function(data) {
                if (data == "success") {
                    location.reload();
                } else {
                	lightyear.notify(data, 'error', 100);
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
      function del(id){
    $.alert({
        title: '确认删除',
        content: '确认删除？',
    buttons: {
      confirm: {
        text: '确认',
        btnClass: 'btn-primary',
        action: function(){
          $.ajax({
		            url: '?action=del&P_id=' + id,
		            type: 'post',
		            success: function(data) {
		                if (data == "success") {
		                    $("#" + id).hide();
		                    lightyear.notify('删除成功', 'success', 100);
		                } else {
		                	lightyear.notify(data, 'error', 100);
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
      
function switchy(id){
      if($("#S_"+id).prop("checked")){
          on=1;
      }else{
          on=0;
      }
      lightyear.loading('show');
    $.ajax({
        url:'?action=sort_on&S_id='+id+"&on="+on,
        type:'get',
        success:function (data) {
            data = JSON.parse(data);
            lightyear.loading('hide');
            if(data.code=="success"){
                lightyear.notify(data.msg, 'success', 100);
            }else{
                lightyear.notify(data.msg, 'danger', 100);
            }
        }
     });
  }
function switchx(id){
      if($("#P_"+id).prop("checked")){
          on=1;
      }else{
          on=0;
      }
      lightyear.loading('show');
    $.ajax({
        url:'?action=on&P_id='+id+"&on="+on,
        type:'get',
        success:function (data) {
            data = JSON.parse(data);
            lightyear.loading('hide');
            if(data.code=="success"){
                lightyear.notify(data.msg, 'success', 100);
            }else{
                lightyear.notify(data.msg, 'danger', 100);
            }
        }
     });
  }
  
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
            data: $("#form").serialize(),
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