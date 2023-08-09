<?php
require '../conn/conn.php';
require '../conn/function.php';
require 'admin_check.php';
$page=$_GET["page"];
$action=$_GET["action"];
$M_id=intval($_GET["M_id"]);

if($page==""){
  $page=1;
}

$aa="edit&M_id=".$M_id;
$row=getrs("select * from sl_member where M_id=".$M_id);

if ($row!="") {
  $M_email=$row["M_email"];
  $M_money=$row["M_money"];
  $M_regtime=$row["M_regtime"];
  $M_wechat=$row["M_wechat"];
  $M_mobile=$row["M_mobile"];
  $M_qq=$row["M_qq"];
  $M_stop=$row["M_stop"];
  $M_reason=$row["M_reason"];

  $M_webtitle=$row["M_webtitle"];
  $M_logo=$row["M_logo"];
  $M_ico=$row["M_ico"];
  $M_keyword=$row["M_keyword"];
  $M_description=$row["M_description"];
  $M_notice=$row["M_notice"];

}
$title="编辑";

if($action=="edit"){

  $M_email=$_POST["M_email"];
  $M_money=$_POST["M_money"];
  $M_regtime=$_POST["M_regtime"];
  $M_wechat=$_POST["M_wechat"];
  $M_mobile=$_POST["M_mobile"];
  $M_qq=$_POST["M_qq"];
  $M_stop=intval($_POST["M_stop"]);
  $M_reason=$_POST["M_reason"];

  $M_webtitle=$_POST["M_webtitle"];
  $M_logo=$_POST["M_logo"];
  $M_ico=$_POST["M_ico"];
  $M_keyword=$_POST["M_keyword"];
  $M_description=$_POST["M_description"];
  $M_notice=$_POST["M_notice"];


  if($M_email!=""){
    sql("update sl_member set 
    M_email='$M_email',
    M_money=$M_money,
    M_regtime='$M_regtime',
    M_wechat='$M_wechat',
    M_mobile='$M_mobile',
    M_qq='$M_qq',
    M_stop='$M_stop',
    M_reason='$M_reason',
    M_webtitle='$M_webtitle',
    M_logo='$M_logo',
    M_ico='$M_ico',
    M_keyword='$M_keyword',
    M_description='$M_description',
    M_notice='$M_notice'
    where M_id=".$M_id);

    die("{\"msg\":\"success\",\"id\":\"".$M_id."\"}");
  }else{
    die("{\"msg\":\"请填全信息\"}");
  }
}

if($action=="delall"){
  $id=$_POST["id"];
  if(count($id)>0) {
    $shu=0 ;
    for ($i=0 ;$i<count($id);$i++) {
      sql("delete from sl_member  where M_id=".intval($id[$i]));
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
$M_counts=getrs("select count(M_id) as M_count from sl_member","M_count");
?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>商家管理 - 后台管理</title>
<link rel="icon" href="../media/<?php echo $C_ico?>" type="image/ico">
<link href="../css/bootstrap.min.css" rel="stylesheet">
<link href="../css/materialdesignicons.min.css" rel="stylesheet">
<link href="../css/style.min.css" rel="stylesheet">
<script type="text/javascript" src="../upload/upload.js"></script>
<link rel="stylesheet" href="../js/jconfirm/jquery-confirm.min.css">
<style type="text/css">
.showpic{height: 50px;border: solid 1px #DDDDDD;padding: 5px;}
.showpicx{width: 100%;max-width: 500px}
.list-group a{text-decoration:none}
.part{display:inline-block;width:40%;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;}
.part2{display:inline-block;width:30%;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;}
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
                
                <div class="col-lg-4">
                  <div class="card card-primary">
                    <div class="card-header">
                      <h4>商家列表</h4>
                      
                      <form action="?action=search" method="post" class="pull-right">
                        <div class="input-group" style="width:295px">
                    <select name="type" class="form-control" style="width: 90px;float: left;">
                      <option value="M_email">邮箱</option>
                      <option value="M_webtitle">店铺名</option>
                    </select>
                    <input type="text" name="search" class="form-control"  style="width: 150px">
                    <span class="input-group-btn">
                        <button class="btn btn-info" type="submit">搜索</button>
                    </span>
                </div>
              </form>
              
                    </div>
                    <form id="list">
                        <ul class="list-group">
                          <li class="list-group-item " style="background: #f7f7f7"><div class="part">邮箱</div><div class="part2">状态</div><div class="part2">余额</div></li>
                          <?php 
                                if($action=="search"){
                                  $type=$_POST["type"];
                                  $search=$_POST["search"];
                                  $sql="select * from sl_member where ".$type." like '%".$search."%' order by M_id desc";
                                }else{
                                  $sql="select * from sl_member order by M_id desc limit ".(($page-1)*10).",10";
                                }
                                $list=getlist($sql);

                                foreach($list as $row){

                                  if($row["M_id"]==$M_id){
                                    $active="active";
                                  }else{
                                    $active="";
                                  }

                                  if($row["M_stop"]==1){
                                    $stop="<span style=\"color:#f00\">停用</span>";
                                  }else{
                                    $stop="<span style=\"color:#090\">正常</span>";
                                  }

                                  echo "<a id=\"".$row["M_id"]."\" href=\"?M_id=".$row["M_id"]."&page=$page\" class=\"list-group-item ".$active."\">
                                  <div class=\"part\"><input type=\"checkbox\" name=\"id[]\" value=\"".$row["M_id"]."\"> <span>".$row["M_id"].".".$row["M_email"]."</span></div><div class=\"part2\">".$stop."</div><div class=\"part2\">".$row["M_money"]."元</div>
                                  </a>";
                                }

                          ?>
                          
                        </ul>
                        </form>
                  </div>
                  <label><input type="checkbox" id="selectAll" name="selectAll"> 全选</label>
                  <button class="btn btn-sm btn-danger" type="button" onClick="delall()"><i class="fa fa-times-circle" ></i> 删除所选</button>

                  <ul class="pagination" id="pagination" style="float: right;"></ul>
                  <input type="hidden" id="PageCount" runat="server" />
        <input type="hidden" id="PageSize" runat="server" value="10" />
        <input type="hidden" id="countindex" runat="server" value="10"/>
        <!--设置最多显示的页码数 可以手动设置 默认为7-->
        <input type="hidden" id="visiblePages" runat="server" value="5" />
                
                </div>

                <?php if($_GET["M_id"]!=""){?>
                <div class="col-lg-8">
                  <form id="form">
                  <div class="card card-primary">
                    <div class="card-header ">
                      <h4><?php echo $title?>会员</h4>
                    </div>
                    <div class="card-body">

                        <div class="form-group row">
                          <label class="col-md-2 col-form-label" >电子邮箱</label>
                          <div class="col-md-4">
                            <input type="text"  name="M_email" class="form-control" value="<?php echo $M_email?>">
                          </div>

                          <label class="col-md-2 col-form-label" >账户余额</label>
                          <div class="col-md-4">
                            <input type="text"  name="M_money" class="form-control" value="<?php echo $M_money?>">
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-md-2 col-form-label" >注册时间</label>
                          <div class="col-md-4">
                            <input type="text"  name="M_regtime" class="form-control" value="<?php echo $M_regtime?>">
                          </div>

                          <label class="col-md-2 col-form-label" >微信号码</label>
                          <div class="col-md-4">
                            <input type="text"  name="M_wechat" class="form-control" value="<?php echo $M_wechat?>">
                          </div>

                          
                        </div>
                        
                         
                        
                        <div class="form-group row">
                          <label class="col-md-2 col-form-label" >手机</label>
                          <div class="col-md-4">
                            <input type="text"  name="M_mobile" class="form-control" value="<?php echo $M_mobile?>">
                          </div>

                          <label class="col-md-2 col-form-label" >QQ</label>
                          <div class="col-md-4">
                            <input type="text"  name="M_qq" class="form-control" value="<?php echo $M_qq?>">
                          </div>
                        </div>
                        

                        <div class="form-group row">

                          <label class="col-md-2 col-form-label" >账户封停</label>
                          <div class="col-md-4">
                            <select class="form-control" name="M_stop">
                                <option value="0" <?php if($M_stop==0){echo "selected='selected'";}?>>正常</option>
                                <option value="1" <?php if($M_stop==1){echo "selected='selected'";}?>>封停</option>
                            <select>
                          </div>

                          <label class="col-md-2 col-form-label" >封停原因</label>
                          <div class="col-md-4">
                            <input type="text"  name="M_reason" class="form-control" value="<?php echo $M_reason?>">
                          </div>
                          
                        </div>
                        <hr>



                        <div class="form-group row">
                          <label class="col-md-2 col-form-label" >店铺名称</label>
                          <div class="col-md-4">
                            <input type="text"  name="M_webtitle" class="form-control" value="<?php echo $M_webtitle?>">
                          </div>

                          <label class="col-md-2" for="example-email-input">店铺logo</label>
                    <div class="col-md-4">
                      <div class="row">
                      <div class="col-xs-3">
                      <img src="../media/<?php echo $M_logo?>" id="M_logox" class="showpic" onClick="showUpload('M_logo','../media');">
                    </div>
                    <div class="col-xs-9">
                            <div class="input-group">
                              <input type="text" id="M_logo" name="M_logo" class="form-control" value="<?php echo $M_logo?>">
                              <span class="input-group-btn">
                            <button class="btn btn-primary m-b-5 m-t-5" type="button" onClick="showUpload('M_logo','../media');">上传</button>
                              </span>
                      </div>
                    </div>
                  </div>
                    </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-md-2" for="example-email-input">店铺ico图标</label>
                    <div class="col-md-4">
                      <div class="row">
                      <div class="col-xs-3">
                      <img src="../media/<?php echo $M_ico?>" id="M_icox" class="showpic" onClick="showUpload('M_ico','../media');">
                    </div>
                     <div class="col-xs-9">
                            <div class="input-group">
                              <input type="text" id="M_ico" name="M_ico" class="form-control" value="<?php echo $M_ico?>">
                              <span class="input-group-btn">
                                      <button class="btn btn-primary m-b-5 m-t-5" type="button" onClick="showUpload('M_ico','../media');">上传</button>
                              </span>
                      </div>
                    </div>
                    </div>
                  </div>

                          <label class="col-md-2 col-form-label" >关键词</label>
                          <div class="col-md-4">
                            <input type="text"  name="M_keyword" class="form-control" value="<?php echo $M_keyword?>">
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-md-2 col-form-label" >描述</label>
                          <div class="col-md-4">
                            <input type="text"  name="M_description" class="form-control" value="<?php echo $M_description?>">
                          </div>

                          <label class="col-md-2 col-form-label" >店铺公告</label>
                          <div class="col-md-4">
                            <input type="text"  name="M_notice" class="form-control" value="<?php echo $M_notice?>">
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="col-md-2 col-form-label" ></label>
                          <div class="col-md-10">
                            <button class="btn btn-info" type="button" onClick="save()"><?php echo $title?></button>

                          </div>
                        </div>
                    </div>
                  </div>
                  </form>
                </div>
                <?php }?>
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
<script type="text/javascript">

  function loadData(num) {
            $("#PageCount").val("<?php echo $M_counts?>");
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