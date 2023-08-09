<?php
require '../conn/conn.php';
require '../conn/function.php';
require 'admin_check.php';

$action=$_GET["action"];


if($action=="change1"){
	$C_template=$_POST["C_template"];
	if($C_template==""){
		die("请填全信息");
	}else{
		sql("update sl_config set C_template='$C_template'");
		die("success");
	}
}

if($action=="change2"){
  $C_shopt=$_POST["C_shopt"];
  if($C_shopt==""){
    die("请填全信息");
  }else{
    sql("update sl_config set C_shopt='$C_shopt'");
    die("success");
  }
}
if($action=="del"){
    $id="t".intval(substr($_GET["id"],1));
    if($id==$C_template){
        die("该模板正在使用中，无法删除！");
    }else{
        removeDir("../template/".$id);
	    die("success");
    }
}

if($action=="del2"){
    $id="s".intval(substr($_GET["id"],1));
    if($id==$C_shopt){
        die("该模板正在使用中，无法删除！");
    }else{
        removeDir("../shop/template/".$id);
      die("success");
    }
}

if($action=="download"){
  $path=$_GET["path"];
  $T_id=$_GET["T_id"];
  $url=$_GET["url"];
  download($path,$T_id,$url);
  die("success");
}

Function download($path,$T_id,$url){
$strLocalPath=$path.$T_id."/";
flush();
ob_flush();

$GLOBALS['xml']=file_get_contents($url);
  if ($GLOBALS['xml']) {
    $xml = simplexml_load_string($GLOBALS['xml'],'SimpleXMLElement');
    $old = umask(0);
    foreach ($xml->file as $f) {
      $filename=$strLocalPath.$f->path;
      $filename=str_replace('\\','/',$filename);
      $dirname= dirname($filename);
      if(!is_dir($dirname)){
        mkdir($dirname,0755,true);
      }
      $fn=$filename;
      file_put_contents($fn,base64_decode($f->stream));
    }
    umask($old);
  } else {
    exit('release.xml不存在!');
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
            <div class="card">
              <div class="card-header"><h4>平台模板</h4></div>
              <div class="card-body">
                <div class="row">

                  <ul class="nav nav-tabs nav-justified">
                  <li class="active">
                    <a data-toggle="tab" href="#local">本地模板</a>
                  </li>
                  <li class="nav-item">
                    <a data-toggle="tab" href="#network">在线模板库</a>
                  </li>

                </ul>

<div class="tab-content">
<div class="tab-pane fade active in" id="local">
<form id="form1">
                    <table class="table table-striped">
<tr><td>编号</td><td>名称</td><td>模板图片</td><td>应用模板</td><td>编辑</td><td>删除</td></tr>

<?php
$handler = opendir('../template');
while( ($filename = readdir($handler)) !== false ){
 if(is_dir("../template/".$filename) && $filename != "." && $filename != ".."){  
     
  if($filename==$C_template){
    $checked="checked='checked'";
    $class="checked";
  }else{
    $checked="";
    $class="";
  }
  
  $title=json_decode(file_get_contents("../template/$filename/config.json"))->title;

  echo "<tr><td>".$filename."</td><td>$title</td><td><img src=\"../template/$filename/template.jpg\" height=\"80\" style=\"margin-right:10px;margin-bottom:5px;box-shadow: 0 2px 17px 2px rgb(222, 223, 241);\" alt=\"<img src='../template/$filename/template.jpg' width='400'>\"></td><td class=\"buy\"><label aa=\"C_template\" class=\"".$class."\"><input type=\"radio\" value=\"".$filename."\" name=\"C_template\" ".$checked." onclick=\"template_change(1)\">●</label></td>";

  echo "<td><a href=\"template_edit.php?id=".$filename."\" class=\"btn btn-sm btn-success\">编辑</a></td><td><button type=\"button\" class=\"btn btn-sm btn-danger\" onclick=\"template_del('".$filename."')\">删除</button></td></tr>";
  }
}
                      ?>
                        </table>
                        </form>
</div>
<div class="tab-pane fade" id="network">
<?php
$t=file_get_contents("http://card.fahuo100.cn/template/t/template.json");
$t=json_decode($t)->list;

for($i=0;$i<count($t);$i++){

  if(is_dir("../template/".$t[$i]->T_id)){
    $T_info="<button type=\"button\" class=\"btn btn-sm btn-warning\">已安装</button>";
  }else{
    $T_info="<button class=\"btn btn-sm btn-success\" onclick=\"template_download('../template/','http://card.fahuo100.cn/template/t/fakabao_".$t[$i]->T_id.".xml','".$t[$i]->T_id."')\">下载</button>";
  }


  echo "<div class=\"col-md-4\"><div style=\"text-align:center;box-shadow: 0 2px 17px 2px rgb(222 223 241);padding:10px;border-radius:10px;margin-bottom:20px\"><p><img src=\"https://card.fahuo100.cn/images/template/".$t[$i]->T_id.".jpg\" style=\"width:100%;border-radius:10px\" alt=\"<img src='https://card.fahuo100.cn/images/template/".$t[$i]->T_id.".jpg' width='400'>\"></p><p>".$t[$i]->T_id."-".$t[$i]->T_title."</p><p>$T_info <a href=\"".$t[$i]->T_url."\" target=\"_blank\" class=\"btn btn-sm btn-info\">模板演示</a></p></div></div>";
}
?>
</div>
</div>
                    
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <form id="form2">
            <div class="card">
              <div class="card-header"><h4>店铺模板</h4></div>
              <div class="card-body">
                <div class="row">

                  <ul class="nav nav-tabs nav-justified">
                  <li class="active">
                    <a data-toggle="tab" href="#local2">本地模板</a>
                  </li>
                  <li class="nav-item">
                    <a data-toggle="tab" href="#network2">在线模板库</a>
                  </li>

                </ul>
<div class="tab-content">
<div class="tab-pane fade active in" id="local2">
  <form id="form2">
                    <table class="table table-striped">
<tr><td>编号</td><td>名称</td><td>模板图片</td><td>应用模板</td><td>删除</td></tr>

<?php
$handler = opendir('../shop/template');
while( ($filename = readdir($handler)) !== false ){
 if(is_dir("../shop/template/".$filename) && $filename != "." && $filename != ".."){  
     
  if($filename==$C_shopt){
    $checked="checked='checked'";
    $class="checked";
  }else{
    $checked="";
    $class="";
  }
  
  $title=json_decode(file_get_contents("../shop/template/$filename/config.json"))->title;

  echo "<tr><td>".$filename."</td><td>$title</td><td><img src=\"../shop/template/$filename/template.jpg\" height=\"80\" style=\"margin-right:10px;margin-bottom:5px;box-shadow: 0 2px 17px 2px rgb(222, 223, 241);\" alt=\"<img src='../shop/template/$filename/template.jpg' width='350'>\"></td><td class=\"buy\"><label aa=\"C_shopt\" class=\"".$class."\"><input type=\"radio\" value=\"".$filename."\" name=\"C_shopt\" ".$checked." onclick=\"template_change(2)\">●</label></td>";

  echo "<td><button type=\"button\" class=\"btn btn-sm btn-danger\" onclick=\"template_del2('".$filename."')\">删除</button></td></tr>";
  }
}
                      ?>
                        </table>
                        </form>
</div>
<div class="tab-pane fade" id="network2">
  <?php
$t=file_get_contents("http://card.fahuo100.cn/template/s/template.json");
$t=json_decode($t)->list;

for($i=0;$i<count($t);$i++){

  if(is_dir("../shop/template/".$t[$i]->T_id)){
    $T_info="<button type=\"button\" class=\"btn btn-sm btn-warning\">已安装</button>";
  }else{
    $T_info="<button class=\"btn btn-sm btn-success\" onclick=\"template_download('../shop/template/','http://card.fahuo100.cn/template/s/fakabao_".$t[$i]->T_id.".xml','".$t[$i]->T_id."')\">下载</button>";
  }

  echo "<div class=\"col-md-4\"><div style=\"text-align:center;box-shadow: 0 2px 17px 2px rgb(222 223 241);padding:10px;border-radius:10px;margin-bottom:20px\"><p><img src=\"https://card.fahuo100.cn/images/template/".$t[$i]->T_id.".jpg\" style=\"width:100%;border-radius:10px\" alt=\"<img src='https://card.fahuo100.cn/images/template/".$t[$i]->T_id.".jpg' width='350'>\"></p><p>".$t[$i]->T_id."-".$t[$i]->T_title."</p><p>$T_info <a href=\"".$t[$i]->T_url."\" target=\"_blank\" class=\"btn btn-sm btn-info\">模板演示</a></p></div></div>";
}
?>
</div>
</div>
                    
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

function template_del(id) {
    $.alert({
        title: '确认删除',
        content: '确定删除模板吗？',
    buttons: {
      confirm: {
        text: '确认',
        btnClass: 'btn-primary',
        action: function(){
          $.ajax({
            url: '?action=del&id=' + id,
            type: 'post',
            data: $("#form").serialize(),
            success: function(data) {
                if (data == "success") {
                    location.reload();
                } else {
                    lightyear.notify(data, 'danger', 100);
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


function template_del2(id) {
    $.alert({
        title: '确认删除',
        content: '确定删除模板吗？',
    buttons: {
      confirm: {
        text: '确认',
        btnClass: 'btn-primary',
        action: function(){
          $.ajax({
            url: '?action=del2&id=' + id,
            type: 'post',
            data: $("#form").serialize(),
            success: function(data) {
                if (data == "success") {
                    location.reload();
                } else {
                    lightyear.notify(data, 'danger', 100);
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


function template_download(path,url,id) {
    lightyear.loading('show');
    $.ajax({
        url: '?action=download&path='+path+'&url='+url+'&T_id=' + id,
        type: 'get',
        success: function(data) {
            if (data == "success") {
                lightyear.notify("下载成功", 'success', 100);
                window.location = "template.php";
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