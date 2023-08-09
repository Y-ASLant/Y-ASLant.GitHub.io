<?php
require '../conn/conn.php';
require '../conn/function.php';
require 'member_check.php';

$action=$_GET["action"];
if($action=="save"){
    $M_webtitle=t(htmlspecialchars($_POST["M_webtitle"]));
    $M_logo=t(htmlspecialchars($_POST["M_logo"]));
    $M_ico=t(htmlspecialchars($_POST["M_ico"]));
    $M_wechatcode=t(htmlspecialchars($_POST["M_wechatcode"]));
    $M_keyword=t(htmlspecialchars($_POST["M_keyword"]));
    $M_description=t(htmlspecialchars($_POST["M_description"]));
    $M_notice=t(htmlspecialchars($_POST["M_notice"]));
    $M_domain=t(htmlspecialchars($_POST["M_domain"]));
    
    $M_qq=t(htmlspecialchars($_POST["M_qq"]));
    $M_mobile=t(htmlspecialchars($_POST["M_mobile"]));
    $M_wechat=t(htmlspecialchars($_POST["M_wechat"]));
    $M_maincontact=intval($_POST["M_maincontact"]);
    
    if($M_webtitle==""){
        die("请填全信息");
    }else{
        sql("update sl_member set 
        M_webtitle='$M_webtitle',
        M_logo='$M_logo',
        M_ico='$M_ico',
        M_wechatcode='$M_wechatcode',
        M_keyword='$M_keyword',
        M_description='$M_description',
        M_notice='$M_notice',
        M_domain='$M_domain',
        M_maincontact=$M_maincontact,
        M_qq='$M_qq',
        M_mobile='$M_mobile',
        M_wechat='$M_wechat'
        where M_id=$M_id");
        die("success");
  }
}
?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>店铺信息 - 卖家中心</title>
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
              <div class="card-header"><h4>店铺信息</h4></div>
              <div class="card-body">
                <div class="row">

                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">店铺标题</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" name="M_webtitle" value="<?php echo $M_webtitle?>">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">店铺关键词</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" name="M_keyword" value="<?php echo $M_keyword?>">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">店铺描述</label>
                    <div class="col-md-10">
                      <textarea class="form-control" name="M_description"><?php echo $M_description?></textarea>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">店铺logo</label>
                    <div class="col-md-10">
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
                    <div class="col-md-10">
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
                  </div>
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">店铺公告</label>
                    <div class="col-md-10">
                      <textarea class="form-control" name="M_notice"><?php echo $M_notice?></textarea>
                    </div>
                  </div>
                  

                  
                  

                </div>
              </div>
              
              
            </div>
            
            <div class="form-group row">

                    <div class="col-md-10">
                      <button class="btn btn-primary" type="button" onclick="save()">保存</button>
                    </div>
                  </div>
                  
          </div>
          
          
          <div class="col-md-6">
            <div class="card">
              <div class="card-header"><h4>联系方式</h4></div>
              <div class="card-body">
                <div class="row">
                    
                <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">顶部显示</label>
                    <div class="col-md-10">
                      <label><input type="radio" name="M_maincontact" value="0" <?php if($M_maincontact==0){echo "checked='checked'";}?>> QQ号码</label>
                      <label><input type="radio" name="M_maincontact" value="1" <?php if($M_maincontact==1){echo "checked='checked'";}?>> 手机号码</label>
                      <label><input type="radio" name="M_maincontact" value="2" <?php if($M_maincontact==2){echo "checked='checked'";}?>> 微信号码</label>
                    </div>
                  </div>
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">QQ号码</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" name="M_qq" value="<?php echo $M_qq?>">
                    </div>
                  </div>
                        
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">手机号码</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" name="M_mobile" value="<?php echo $M_mobile?>">
                    </div>
                  </div>
                  
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">微信号码</label>
                    <div class="col-md-10">
                      <textarea class="form-control" name="M_wechat"><?php echo $M_wechat?></textarea>
                    </div>
                  </div>
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">微信二维码</label>
                    <div class="col-md-10">
                      <div class="row">
                      <div class="col-xs-3">
                      <img src="../media/<?php echo $M_wechatcode?>" id="M_wechatcodex" class="showpic" onClick="showUpload('M_wechatcode','../media');">
                    </div>
                    <div class="col-xs-9">
                            <div class="input-group">
                              <input type="text" id="M_wechatcode" name="M_wechatcode" class="form-control" value="<?php echo $M_wechatcode?>">
                              <span class="input-group-btn">
                            <button class="btn btn-primary m-b-5 m-t-5" type="button" onClick="showUpload('M_wechatcode','../media');">上传</button>
                              </span>
                      </div>
                    </div>
                  </div>
                    </div>
                  </div>

                  <!--
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">绑定域名</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" name="M_domain" value="<?php echo $M_domain?>" placeholder="不带http(s)://">
                    </div>
                  </div>
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input"></label>
                    <div class="col-md-10">
                      <div style="font-size: 12px;margin-top: 10px;color: #33cabb">说明：域名请解析CNAME记录指向<?php echo $domain;?> <a href="https://card.fahuo100.cn/newsinfo.html?id=4" class="btn btn-xs btn-success" target="_blank">帮助文档</a></div>
                    </div>
                  </div>-->
                  
                    </div>
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