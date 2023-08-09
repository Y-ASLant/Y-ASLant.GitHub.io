<?php
require '../conn/conn.php';
require '../conn/function.php';
require 'member_check.php';

$action=$_GET["action"];

if($action=="change2"){
  $M_shopt=$_POST["M_shopt"];
  if($M_shopt==""){
    die("请填全信息");
  }else{
    sql("update sl_member set M_shopt='$M_shopt' where M_id=$M_id");
    die("success");
  }
}
?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>模板管理 - 后台管理</title>
<link rel="shortcut icon" href="../media/<?php echo $C_ico?>" />
<link href="../css/bootstrap.min.css" rel="stylesheet">
<link href="../css/materialdesignicons.min.css" rel="stylesheet">
<link href="../css/style.min.css" rel="stylesheet">
<link rel="stylesheet" href="../js/jconfirm/jquery-confirm.min.css">
<script type="text/javascript" src="../upload/upload.js"></script>
<style type="text/css">
.qrcode{width:200px;height:200px}
.buy label {
	width: 20px;
	height: 20px;
	text-align: center;
	line-height: 16px;
	cursor: pointer;
	border: #CCCCCC solid 1px;
	border-radius: 100%;
	color: #CCCCCC;
	font-weight: bold;
}

.buy .checked {
	border: #ff0000 solid 1px;
	border-radius: 100%;
	color: #ff0000;
}

.buy input[type="radio"] {
	display: none;
}
</style>
</head>
  
<body>
<div class="lyear-layout-web">
  <div class="lyear-layout-container">
  <?php require 'nav.php';?>
    <main class="lyear-layout-content">
      <div class="container-fluid">
        <div class="row">
            
          <div class="col-md-6">
            <form id="form2">
            <div class="card">
              <div class="card-header"><h4>店铺模板</h4></div>
              <div class="card-body">
                <div class="row">
                    <form id="form2">
                    <table class="table table-striped">
<tr><td>编号</td><td>名称</td><td>模板图片</td><td>应用模板</td></tr>

<?php
$handler = opendir('../shop/template');
while( ($filename = readdir($handler)) !== false ){
 if(is_dir("../shop/template/".$filename) && $filename != "." && $filename != ".."){  
  if($filename==$M_shopt){
    $checked="checked='checked'";
    $class="checked";
  }else{
    $checked="";
    $class="";
  }
  
  $title=json_decode(file_get_contents("../shop/template/$filename/config.json"))->title;

  echo "<tr><td>".$filename."</td><td>$title</td><td><img src=\"../shop/template/$filename/template.jpg\" height=\"80\" style=\"margin-right:10px;margin-bottom:5px;box-shadow: 0 2px 17px 2px rgb(222, 223, 241);\" alt=\"<img src='../shop/template/$filename/template.jpg' width='500'>\"></td><td class=\"buy\"><label aa=\"C_shopt\" class=\"".$class."\"><input type=\"radio\" value=\"".$filename."\" name=\"M_shopt\" ".$checked." onclick=\"template_change(2)\">●</label></td></tr>";
  }
}
                      ?>
                        </table>
                        </form>
                </div>
              </div>


            </div>

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
function template_change(i) {
    $.ajax({
        url: '?action=change'+i,
        type: 'post',
        data: $("#form"+i).serialize(),
        success: function(data) {
            if (data == "success") {
                lightyear.notify("切换成功", 'success', 100);
            } else {
                lightyear.notify(data, 'danger', 100);
            }
        }
    });
}
$(function() { $('.buy label').click(function(){var aa = $(this).attr('aa');$('[aa="'+aa+'"]').removeAttr('class') ;$(this).attr('class','checked');});});
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