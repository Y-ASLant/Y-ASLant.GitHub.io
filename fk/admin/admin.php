<?php
require '../conn/conn.php';
require '../conn/function.php';
require 'admin_check.php';

$action=$_GET["action"];
if($action=="save"){
    
    $C_admin=t($_POST["C_admin"]);
    $C_pwd=$_POST["C_pwd"];

    if($C_admin==""){
        die("请填全信息");
    }else{
        sql("update sl_config set $C_admin='$C_admin'");

        if($C_pwd!=""){
          sql("update sl_config set C_pwd='".md5($C_pwd)."'");
        }
        die("success");
  }
}
?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>管理员设置 - 后台管理</title>
<link rel="shortcut icon" href="../media/<?php echo $C_ico?>" />
<link href="../css/bootstrap.min.css" rel="stylesheet">
<link href="../css/materialdesignicons.min.css" rel="stylesheet">
<link href="../css/style.min.css" rel="stylesheet">
<script type="text/javascript" src="../upload/upload.js"></script>
<style type="text/css">
.qrcode{width:200px;height:200px}
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


              <div class="col-md-6">
                  
                  <div class="card">
              <div class="card-header"><h4>管理员设置</h4></div>
              <div class="card-body">
                <div class="row">
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">帐号</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" name="C_admin" value="<?php echo $C_admin?>">
                    </div>
                  </div>
                        
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">密码</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" name="C_pwd" value="" placeholder="已加密保存，留空则不修改">
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