<?php
require '../conn/conn.php';
require '../conn/function.php';
require 'admin_check.php';

$id=$_GET["id"];
$type=$_GET["type"];
$action=$_GET["action"];
if($type==""){
    $type="index";
}

if($action=="save"){
    $template=$_POST["template"];
    $type=$_POST["type"];
    $id=$_POST["id"];

    if($template==""){
        die("请填全信息");
    }else{
        file_put_contents("../template/$id/$type.html",$template);
        die("success");
  }
}
?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>编辑模板 - 后台管理</title>
<link rel="shortcut icon" href="../media/<?php echo $C_ico?>" />
<link href="../css/bootstrap.min.css" rel="stylesheet">
<link href="../css/materialdesignicons.min.css" rel="stylesheet">
<link href="../css/style.min.css" rel="stylesheet">
<script type="text/javascript" src="../upload/upload.js"></script>
<style type="text/css">
.qrcode{width:200px;height:200px}
.label{padding:5px 10px;border:solid 1px #DDD;border-radius:5px;color:#000;background:#fff;display:inline-block}
.label_check{padding:5px 10px;border:solid 1px #33cabb;border-radius:5px;color:#33cabb;background:#F1FCFA;display:inline-block}
</style>
</head>
  
<body>
<div class="lyear-layout-web">
  <div class="lyear-layout-container">
  <?php require 'nav.php';?>
    <main class="lyear-layout-content">
      <div class="container-fluid">
        <div class="row">
            
        <form id="form">

          <div class="col-md-12">
            
            <div class="card">
              <div class="card-header"><h4>编辑模板</h4></div>
              <div class="card-body">
                <div class="row">
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">模板编号</label>
                    <div class="col-md-10">
                     <?php echo $id?>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">选择模块</label>
                    <div class="col-md-10">
                      <a href="?id=<?php echo $id?>&type=index" class="<?php if($type=="index"){echo "label_check";}else{echo "label";}?>">网站首页</a>
                      <a href="?id=<?php echo $id?>&type=about" class="<?php if($type=="about"){echo "label_check";}else{echo "label";}?>">关于我们</a>
                      <a href="?id=<?php echo $id?>&type=news" class="<?php if($type=="news"){echo "label_check";}else{echo "label";}?>">平台公告</a>
                      <a href="?id=<?php echo $id?>&type=query" class="<?php if($type=="query"){echo "label_check";}else{echo "label";}?>">订单查询</a>
                      <a href="?id=<?php echo $id?>&type=contact" class="<?php if($type=="contact"){echo "label_check";}else{echo "label";}?>">联系我们</a>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">模板代码</label>
                    <div class="col-md-10">
                        <input type="hidden" name="id" value="<?php echo $id;?>">
                        <input type="hidden" name="type" value="<?php echo $type;?>">
                      <textarea class="form-control" name="template" rows="25"><?php echo file_get_contents("../template/$id/$type.html")?></textarea>
                    </div>
                  </div>
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input"></label>
                    <div class="col-md-10">
                      <div style="font-size: 12px;margin-top: 10px;color: #33cabb">编辑模板需要有html基础，非技术人员请勿修改</div>
                    </div>
                  </div>
                  
                    </div>
                  </div>

                </div>
                
                <div class="form-group row">
                    <div class="col-md-12">
                      <button class="btn btn-primary" type="button" onclick="save()">保存</button>
                    </div>
                  </div>

              </div>


            </div>

          </div>
          </form>
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
function save(){
    lightyear.loading('show');
    $.ajax({
        url:'?action=save',
        type:'post',
        data:$("#form").serialize(),
        success:function (data) {
        lightyear.loading('hide');
        if(data=="success"){
          lightyear.notify("保存成功", 'success', 100);
        }else{
          lightyear.notify(data, 'danger', 100);
        }
        }
      });
}

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