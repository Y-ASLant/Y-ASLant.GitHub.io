<?php
require '../conn/conn.php';
require '../conn/function.php';
require 'admin_check.php';
$page=$_GET["page"];
$action=$_GET["action"];
$N_id=intval($_GET["N_id"]);

if($page==""){
  $page=1;
}

$row=getrs("select * from sl_news where N_id=".$N_id);

if ($row!="") {
    $N_title=$row["N_title"];
    $N_content=$row["N_content"];
    $N_author=$row["N_author"];
    $N_date=$row["N_date"];
    $title="编辑";
    $aa="edit&N_id=".$N_id;
}else{
    $N_date=date('Y-m-d H:i:s');
    $title="新增";
    $aa="add";
}

if($action=="add"){
    $N_title=$_POST["N_title"];
    $N_content=$_POST["N_content"];
    $N_author=$_POST["N_author"];
    $N_date=$_POST["N_date"];
  
  if($N_title!=""){
      sql("insert into sl_news(N_title,N_content,N_date,N_author) values('$N_title','$N_content','$N_date','$N_author')");
      $N_id=getrs("select * from sl_news where N_title='$N_title' order by N_id desc","N_id");
      die("{\"msg\":\"success\",\"id\":\"".$N_id."\"}");
  }else{
      die("{\"msg\":\"请填全信息\"}");
  }
}


if($action=="edit"){
    $N_title=$_POST["N_title"];
    $N_content=$_POST["N_content"];
    $N_author=$_POST["N_author"];
    $N_date=$_POST["N_date"];
  
  if($N_title!=""){
    sql("update sl_news set 
    N_title='$N_title',
    N_content='$N_content',
    N_author='$N_author',
    N_date='$N_date'
    where N_id=".$N_id);

    die("{\"msg\":\"success\",\"id\":\"".$N_id."\"}");
  }else{
    die("{\"msg\":\"请填全信息\"}");
  }
}

$N_counts=getrs("select count(N_id) as N_count from sl_news","N_count");
?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>公告管理 - 后台管理</title>
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
.part{display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;}
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
                      <h4>公告列表</h4>
                      
                    </div>
                    <form id="list">
                        <ul class="list-group">

                          <?php 

                                $sql="select * from sl_news order by N_id desc limit ".(($page-1)*10).",10";

                                $list=getlist($sql);

                                foreach($list as $row){

                                  if($row["N_id"]==$N_id){
                                    $active="active";
                                  }else{
                                    $active="";
                                  }


                                  echo "<a id=\"".$row["N_id"]."\" href=\"?N_id=".$row["N_id"]."&page=$page\" class=\"list-group-item ".$active."\">
                                  <div class=\"part\"><input type=\"checkbox\" name=\"id[]\" value=\"".$row["N_id"]."\"> <span>".$row["N_id"].".".$row["N_title"]."</span></div>
                                  </a>";
                                }

                          ?>
                          
                        </ul>
                        </form>
                  </div>
                  <label><input type="checkbox" id="selectAll" name="selectAll"> 全选</label>
                  <button class="btn btn-sm btn-danger" type="button" onClick="delall()"><i class="fa fa-times-circle" ></i> 删除所选</button>
                  <a class="btn btn-sm btn-info" href="news.php"><i class="fa fa-times-circle" ></i> 新增公告</a>

                  <ul class="pagination" id="pagination" style="float: right;"></ul>
                  <input type="hidden" id="PageCount" runat="server" />
        <input type="hidden" id="PageSize" runat="server" value="10" />
        <input type="hidden" id="countindex" runat="server" value="10"/>
        <!--设置最多显示的页码数 可以手动设置 默认为7-->
        <input type="hidden" id="visiblePages" runat="server" value="5" />
                
                </div>


                <div class="col-lg-8">
                  <form id="form">
                  <div class="card card-primary">
                    <div class="card-header ">
                      <h4><?php echo $title?>公告</h4>
                    </div>
                    <div class="card-body">
                        
                        <div class="form-group row">
                          <label class="col-md-2 col-form-label" >公告标题</label>
                          <div class="col-md-10">
                            <input type="text"  name="N_title" class="form-control" value="<?php echo $N_title?>">
                          </div>
                        </div>
                        
                        <div class="form-group row">
                          <label class="col-md-2 col-form-label" >发布时间</label>
                          <div class="col-md-4">
                            <input type="text"  name="N_date" class="form-control" value="<?php echo $N_date?>">
                          </div>

                          <label class="col-md-2 col-form-label" >作者</label>
                          <div class="col-md-4">
                            <input type="text"  name="N_author" class="form-control" value="<?php echo $N_author?>">
                          </div>
                        </div>
                        
                        <div class="form-group row">
                          <label class="col-md-2 col-form-label" >公告内容</label>
                          <div class="col-md-10">
                            <textarea class="form-control" name="N_content" rows="20"><?php echo $N_content?></textarea>
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