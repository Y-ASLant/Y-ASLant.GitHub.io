<?php
require '../conn/conn.php';
require '../conn/function.php';
require 'member_check.php';

$action=$_GET["action"];
if($action=="save"){
    $M_pwd=$_POST["M_pwd"];
    $M_newpwd=$_POST["M_newpwd"];
    $M_newpwd2=$_POST["M_newpwd2"];
    
    if($M_pwd==""){
        die("请填全信息");
    }else{
        if(md5($M_pwd)!=$_SESSION["M_pwd"]){
            die("原始密码输入错误！");
        }else{
            if($M_newpwd!=$M_newpwd2){
                die("两次密码输入不一致");
            }else{
                mysqli_query($conn,"update sl_member set M_pwd='".md5($M_newpwd)."' where M_id=".$_SESSION["M_id"]);
                mysqli_query($conn, "insert into sl_log(L_time,L_add,L_ip,L_mid,L_title) values('".date('Y-m-d H:i:s')."','','".getip()."',".$M_id.",'修改密码')");
                die("success");
            }
        }
    }
}

?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>修改密码 - 会员中心</title>
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
          <div class="col-md-6">
            <div class="card">
              <div class="card-header"><h4>修改密码</h4></div>
              <div class="card-body">
                <div class="row">
                    <form id="form">
                        <p>原始密码</p>
                        <p><input type="text" class="form-control" name="M_pwd" value=""></p>
                        <p>设置密码</p>
                        <p><input type="text" class="form-control" name="M_newpwd" value=""></p>
                        <p>确认密码</p>
                        <p><input type="text" class="form-control" name="M_newpwd2" value=""></p>
                        <p><button class="btn btn-primary" type="button" onclick="save()">修改密码</button> <span style="font-size:12px">说明：如果忘记原始密码，可以通过<a href="../forget.php">找回密码</a>来重新设置</span></p>
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