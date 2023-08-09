<?php
require '../conn/conn.php';
require '../conn/function.php';
require 'member_check.php';

$page=$_GET["page"];
$action=$_GET["action"];
$S_id=intval($_GET["S_id"]);

if($action=="on"){
    $S_id=intval($_GET["S_id"]);
    $on=intval($_GET["on"]);
    sql("update sl_psort set S_on=$on where S_id=$S_id and S_mid=$M_id");
    if($on==1){
        die("{\"code\":\"success\",\"msg\":\"产品分类已上架\"}");
    }else{
        die("{\"code\":\"error\",\"msg\":\"产品分类已下架\"}");
    }
}

if($page==""){
  $page=1;
}

if($S_id!=""){
  $aa="edit&S_id=".$S_id;
  $S=getrs("select * from sl_psort where S_id=".$S_id);
  $S_title=$S["S_title"];
  $S_order=$S["S_order"];
  $title="编辑";
}else{
  $aa="add";
  $title="新增";
  $S_order=0;
}

if($action=="add"){
  $S_title=t(htmlspecialchars($_POST["S_title"]));
  $S_order=intval($_POST["S_order"]);
  
  if($S_title!=""){
    sql("insert into sl_psort(S_title,S_order,S_mid) values('$S_title',$S_order,$M_id)");
    die("{\"msg\":\"success\",\"id\":\"".$S_id."\"}");
  }else{
    die("{\"msg\":\"请填全信息\"}");
  }
}

if($action=="edit"){
  $S_title=t(htmlspecialchars($_POST["S_title"]));
  $S_order=intval($_POST["S_order"]);
  if($S_title!=""){
    sql("update sl_psort set 
    S_title='$S_title',
    S_order=$S_order
    where S_id=$S_id and S_mid=$M_id");
    die("{\"msg\":\"success\",\"id\":\"".$S_id."\"}");
  }else{
    die("{\"msg\":\"请填全信息\"}");
  }
}

if($action=="delall"){
  $id=$_POST["id"];
  if(count($id)>0) {
    $shu=0 ;
    for ($i=0 ;$i<count($id);$i++) {
      sql("update sl_psort set S_del=1 where S_id=".intval($id[$i]));
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

$S_counts=getrs("select count(S_id) as S_count from sl_psort where S_del=0","S_count");
?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>商品分类管理 - 卖家中心</title>
<link rel="icon" href="../media/<?php echo $C_ico?>" type="image/ico">
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
                <div class="col-lg-5">
                  <form id="list">
                  <div class="card card-primary">

                    <div class="card-header">
                      <h4>商品分类列表</h4>
                    </div>
                        <ul class="list-group">
                          <li class="list-group-item" style="background: #f7f7f7"><div class="part">商品分类</div><div class="part2">上架</div></li>
                          <?php 
                            $list=getlist("select * from sl_psort where S_mid=$M_id and S_del=0 order by S_order asc,S_id desc");
                            foreach($list as $S){
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

                                  echo "<a id=\"".$S["S_id"]."\" href=\"?S_id=".$S["S_id"]."\" class=\"list-group-item ".$active."\">
                                  <div class=\"part\"><input type=\"checkbox\" name=\"id[]\" value=\"".$S["S_id"]."\"> ".$S["S_order"].".".$S["S_title"]."</div><div class=\"part2\"><label class=\"lyear-switch switch-solid switch-success\">
                        <input type=\"checkbox\" value=\"1\" $state id=\"S_".$S["S_id"]."\" onclick=\"switchx(".$S["S_id"].")\">
                        <span></span>
                      </label></div> 
                                  </a>";
                            }

                          ?>
                          
                        </ul>
                  </div>
                  <label><input type="checkbox" id="selectAll" name="selectAll"> 全选</label>
                  <button class="btn btn-sm btn-danger" type="button" onClick="delall()"><i class="fa fa-times-circle" ></i> 删除所选</button>
                  <a href="psort.php" class="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i> 新增分类</a>
                  <ul class="pagination" id="pagination" style="float: right;"></ul>
                  <input type="hidden" id="PageCount" runat="server" />
                  <input type="hidden" id="PageSize" runat="server" value="10" />
                  <input type="hidden" id="countindex" runat="server" value="10"/>
                  <input type="hidden" id="visiblePages" runat="server" value="7" />
                </form>
                </div>
                
                <div class="col-lg-7">
                  <form id="form">
                  <div class="card card-primary">
                    <div class="card-header ">
                      <h4><?php echo $title?>商品分类</h4>
                    </div>
                    <div class="card-body">
                        <div class="form-group row">
                          <label class="col-md-3 col-form-label" >分类标题</label>
                          <div class="col-md-9">
                            <input type="text"  name="S_title" class="form-control" value="<?php echo $S_title?>">
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="col-md-3 col-form-label" >分类排序</label>
                          <div class="col-md-9">
                            <input type="text"  name="S_order" class="form-control" value="<?php echo $S_order?>">
                          </div>
                        </div>
                        
                        <div class="form-group row">
                          <label class="col-md-3 col-form-label" ></label>
                          <div class="col-md-9">
                            <button class="btn btn-info" type="button" onClick="save()"><?php echo $title?></button>
                          </div>
                        </div>
                    </div>
                  </div>
                  </form>
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
            $("#PageCount").val("<?php echo $S_counts?>");
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
                url:'?action=<?php echo $aa?>',
                type:'post',
                data:$("#form").serialize(),
                success:function (data) {
	                data=JSON.parse(data);
	                lightyear.loading('hide');
	                if(data.msg=="success"){
	                	lightyear.notify('保存成功', 'success', 100);
	                	setTimeout("window.location.href='?L_id="+data.id+"'", 2000 )
	                }else{
	                  	lightyear.notify(data.msg, 'danger', 100);
	                }
                }
              });
      }
function switchx(id){
      if($("#S_"+id).prop("checked")){
          on=1;
      }else{
          on=0;
      }
      lightyear.loading('show');
    $.ajax({
        url:'?action=on&S_id='+id+"&on="+on,
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