<?php
require '../conn/conn.php';
require '../conn/function.php';
require 'member_check.php';

$id=t($_GET["id"]);
$action=$_GET["action"];
if($action=="delallx"){
	sql("delete from sl_psort where S_del=1");
	sql("delete from sl_product where P_del=1");
	die("success");
}


if($action=="del"){
	sql("delete from sl_".splitx($id,"_",0)." where ".splitx($id,"_",1)."_id=".intval(splitx($id,"_",2)));
	die("success");
}

if($action=="recycle"){
	sql("update sl_".splitx($id,"_",0)." set ".splitx($id,"_",1)."_del=0 where ".splitx($id,"_",1)."_id=".intval(splitx($id,"_",2)));
	die("success");
}

if($action=="delall"){
		$id=$_POST["id"];
		if(count($id)>0) {
			$shu=0 ;
			for ($i=0 ;$i<count($id);$i++ ) {
				sql("delete from sl_".splitx($id[$i],"_",0)." where ".splitx($id[$i],"_",1)."_id=".intval(splitx($id[$i],"_",2)));
				$shu=$shu+1 ;
				$ids=$ids.$id[$i].",";
			}
			$ids= substr($ids,0,strlen($ids)-1);
			if($shu>0) {
				die("success");
			} else {
				die("删除失败");
			}
		} else {
			die("未选择要删除的内容");
		}
	}

	if($action=="recycleall"){
		$id=$_POST["id"];
		if(count($id)>0) {
			$shu=0 ;
			for ($i=0 ;$i<count($id);$i++ ) {
				sql("update sl_".splitx($id[$i],"_",0)." set ".splitx($id[$i],"_",1)."_del=0 where ".splitx($id[$i],"_",1)."_id=".intval(splitx($id[$i],"_",2)));
				$shu=$shu+1 ;
				$ids=$ids.$id[$i].",";
			}
			$ids= substr($ids,0,strlen($ids)-1);
			if($shu>0) {
				die("success");
			} else {
				die("恢复失败");
			}
		} else {
			die("未选择要恢复的内容");
		}
	}
	
if($page==""){
  $page=1;
}


$L_count=getrs("select count(*) as L_count from (select P_id as id,P_title as title,'product_P' as type,'商品' as tag from sl_product where P_del=1 union select S_id as id,S_title as title,'psort_S' as type,'商品分类' as tag from sl_psort where S_del=1)a","L_count");
?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>回收站 - 会员中心</title>
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
              <div class="card-header"><h4>回收站</h4>
              

              
              </div>
              <form id="form">
                  <table class="table">
                    <tr>
														<th>选择</th>
														<th>名称</th>
														<th>类型</th>

														<th>恢复</th>
														<th>删除</th>
													</tr>

<?php
    $list=getlist("select id,title,type,tag from (select P_id as id,P_title as title,'product_P' as type,'商品' as tag from sl_product where P_del=1 union select S_id as id,S_title as title,'psort_S' as type,'商品分类' as tag from sl_psort where S_del=1)a limit ".(($page-1)*20).",20");
    foreach($list as $row){
    echo "<tr><td><input type=\"checkbox\" name=\"id[]\" value=\"".$row["type"]."_".$row["id"]."\"></td><td>".$row["title"]."</td><td><b>".$row["tag"]."</b></td><td><button class='btn btn-sm btn-info' type='button' onClick=\"recycle_recycle('".$row["type"]."_".$row["id"]."')\"><i class=\"fa fa-recycle\"></i> 恢复</button></td><td><button class='btn btn-sm btn-danger' type='button' onClick=\"recycle_del('".$row["type"]."_".$row["id"]."')\"><i class=\"fa fa-times-circle\"></i> 彻底删除</button></td></tr>";
}
?>
                  </table>
                  </form>
            </div>

<label><input type="checkbox" id="selectAll" name="selectAll"> 全选</label>
<button class="btn btn-sm btn-danger" type="button" onClick="recycle_delall()"><i class="fa fa-times-circle" ></i> 删除所选</button>
<button class="btn btn-sm btn-primary" type="button" onClick="recycle_delallx()"><i class="fa fa-times-circle" ></i> 清空回收站</button>
<button class="btn btn-sm btn-info" type="button" onClick="recycle_recycleall()"><i class="fa fa-times-circle" ></i> 恢复所选</button>


        <ul class="pagination" id="pagination" style="float: right;"></ul>
        <input type="hidden" id="PageCount" runat="server" />
        <input type="hidden" id="PageSize" runat="server" value="20" />
        <input type="hidden" id="countindex" runat="server" value="20"/>
        <input type="hidden" id="visiblePages" runat="server" value="7" />

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
            $("#PageCount").val("<?php echo $L_count?>");
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



function recycle_del(id) {
    if (confirm("确定删除吗？") == true) {
        $.ajax({
            url: '?action=del&id=' + id,
            type: 'post',
            success: function(data) {
                if (data == "success") {
                    location.reload();
                } else {
                    toastr.error(data, '错误');
                }
            }
        });
        return true;
    } else {
        return false;
    }
}

function recycle_delallx() {
    if (confirm("确定清空回收站吗？") == true) {
        $.ajax({
            url: '?action=delallx',
            type: 'post',
            success: function(data) {
                if (data == "success") {
                    location.reload();
                } else {
                    toastr.error(data, '错误');
                }
            }
        });
        return true;
    } else {
        return false;
    }
}

function recycle_recycle(id) {
    if (confirm("确定恢复吗？") == true) {
        $.ajax({
            url: '?action=recycle&id=' + id,
            type: 'post',
            success: function(data) {
                if (data == "success") {
                    location.reload();
                } else {
                    toastr.error(data, '错误');
                }
            }
        });
        return true;
    } else {
        return false;
    }
}

function recycle_delall() {
    $.ajax({
        url: '?action=delall',
        type: 'post',
        data: $("#form").serialize(),
        success: function(data) {
            if (data == "success") {
                location.reload();
            } else {
                toastr.error(data, '错误');
            }
        }
    });

}

function recycle_recycleall() {
    $.ajax({
        url: '?action=recycleall',
        type: 'post',
        data: $("#form").serialize(),
        success: function(data) {
            if (data == "success") {
                location.reload();
            } else {
                toastr.error(data, '错误');
            }
        }
    });

}
function recycle_clearx() {
    if (window.confirm('清理冗余数据说明：\r1.清理没有用的图片，节省本地空间\r2.清理没有分类的新闻，商品，卡密\r3.清理没有上级分类的新闻子分类，商品子分类\r4.清理没有上级菜单的子菜单')) {
        $.ajax({
            url: '?action=clear',
            type: 'get',
            success: function(data) {
                if (data == "success") {
                    toastr.success("清理完成", '成功');
                } else {
                    toastr.error(data, '错误');
                }
            }
        });
    } else {
        return false;
    }
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