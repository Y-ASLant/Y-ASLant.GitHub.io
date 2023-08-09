<?php
require '../conn/conn.php';
require '../conn/function.php';
require 'admin_check.php';

$action=$_GET["action"];
if($action=="save"){
    $C_webtitle=t(htmlspecialchars($_POST["C_webtitle"]));
    $C_logo=t(htmlspecialchars($_POST["C_logo"]));
    $C_ico=t(htmlspecialchars($_POST["C_ico"]));
    $C_keyword=t(htmlspecialchars($_POST["C_keyword"]));
    $C_description=t(htmlspecialchars($_POST["C_description"]));
    $C_notice=t(htmlspecialchars($_POST["C_notice"]));
    
    $C_qq=t(htmlspecialchars($_POST["C_qq"]));
    $C_mobile=t(htmlspecialchars($_POST["C_mobile"]));
    $C_wechat=t(htmlspecialchars($_POST["C_wechat"]));
    $C_wechatcode=t(htmlspecialchars($_POST["C_wechatcode"]));
    $C_maincontact=intval($_POST["C_maincontact"]);

    $C_copyright=t(htmlspecialchars($_POST["C_copyright"]));
    $C_beian=t(htmlspecialchars($_POST["C_beian"]));
    $C_code=t($_POST["C_code"]);


    $C_fee=round($_POST["C_fee"],2);
    $C_rate=round($_POST["C_rate"],2);
    $C_sh=intval($_POST["C_sh"]);
    $C_model=intval($_POST["C_model"]);
    $C_html=intval($_POST["C_html"]);
    $C_pay=intval($_POST["C_pay"]);

    if($C_webtitle==""){
        die("请填全信息");
    }else{
        sql("update sl_config set 
        C_webtitle='$C_webtitle',
        C_logo='$C_logo',
        C_ico='$C_ico',
        C_keyword='$C_keyword',
        C_description='$C_description',
        C_notice='$C_notice',
        C_maincontact=$C_maincontact,
        C_qq='$C_qq',

        C_mobile='$C_mobile',
        C_wechat='$C_wechat',
        C_wechatcode='$C_wechatcode',
        C_copyright='$C_copyright',
        C_beian='$C_beian',
        C_code='$C_code',
        C_sh=$C_sh,
        C_pay=$C_pay,
        C_html=$C_html,
        C_model=$C_model,
        C_fee=$C_fee,
        C_rate=$C_rate");
        
        die("success");
  }
}
?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>基本设置 - 后台管理</title>
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
              <div class="card-header"><h4>基本设置</h4></div>
              <div class="card-body">
                <div class="row">

                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">网站标题</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" name="C_webtitle" value="<?php echo $C_webtitle?>">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">网站关键词</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" name="C_keyword" value="<?php echo $C_keyword?>">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">网站描述</label>
                    <div class="col-md-10">
                      <textarea class="form-control" name="C_description"><?php echo $C_description?></textarea>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">网站logo</label>
                    <div class="col-md-10">
                      <div class="row">
                      <div class="col-xs-3">
                      <img src="../media/<?php echo $C_logo?>" id="C_logox" class="showpic" onClick="showUpload('C_logo','../media');">
                    </div>
                    <div class="col-xs-9">
                            <div class="input-group">
                              <input type="text" id="C_logo" name="C_logo" class="form-control" value="<?php echo $C_logo?>">
                              <span class="input-group-btn">
                            <button class="btn btn-primary m-b-5 m-t-5" type="button" onClick="showUpload('C_logo','../media');">上传</button>
                              </span>
                      </div>
                    </div>
                  </div>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">网站ico图标</label>
                    <div class="col-md-10">
                      <div class="row">
                      <div class="col-xs-3">
                      <img src="../media/<?php echo $C_ico?>" id="C_icox" class="showpic" onClick="showUpload('C_ico','../media');">
                    </div>
                     <div class="col-xs-9">
                            <div class="input-group">
                              <input type="text" id="C_ico" name="C_ico" class="form-control" value="<?php echo $C_ico?>">
                              <span class="input-group-btn">
                                      <button class="btn btn-primary m-b-5 m-t-5" type="button" onClick="showUpload('C_ico','../media');">上传</button>
                              </span>
                      </div>
                    </div>
                    </div>
                  </div>
                  </div>
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">网站公告</label>
                    <div class="col-md-10">
                      <textarea class="form-control" name="C_notice"><?php echo $C_notice?></textarea>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">版权文字</label>
                    <div class="col-md-10">
                      <textarea class="form-control" name="C_copyright"><?php echo $C_copyright?></textarea>
                    </div>
                  </div>
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">备案号</label>
                    <div class="col-md-10">
                      <textarea class="form-control" name="C_beian" placeholder="可留空"><?php echo $C_beian?></textarea>
                    </div>
                  </div>
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">统计代码</label>
                    <div class="col-md-10">
                      <textarea class="form-control" name="C_code"><?php echo $C_code?></textarea>
                    </div>
                  </div>
                  
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">开启伪静态</label>
                    <div class="col-md-10">
                      <label><input type="radio" value="0" name="C_html" <?php if($C_html==0){echo "checked='checked'";}?>> 关闭</label>
                      <label><input type="radio" value="1" name="C_html" <?php if($C_html==1){echo "checked='checked'";}?>> 开启</label>
                    </div>
                  </div>
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input"></label>
                    <div class="col-md-10">
                      <div style="font-size: 12px;margin-top: 10px;color: #33cabb">如果您不知道如何填写，请点击 <a href="https://www.7-card.cn/newsinfo.html?id=3" class="btn btn-xs btn-success" target="_blank">帮助文档</a></div>
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
          
          
          <div class="col-md-6">
            <div class="card">
              <div class="card-header"><h4>联系方式</h4></div>
              <div class="card-body">
                <div class="row">
                    
                <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">顶部显示</label>
                    <div class="col-md-10">
                      <label><input type="radio" name="C_maincontact" value="0" <?php if($C_maincontact==0){echo "checked='checked'";}?>> QQ号码</label>
                      <label><input type="radio" name="C_maincontact" value="1" <?php if($C_maincontact==1){echo "checked='checked'";}?>> 手机号码</label>
                      <label><input type="radio" name="C_maincontact" value="2" <?php if($C_maincontact==2){echo "checked='checked'";}?>> 微信号码</label>
                    </div>
                  </div>
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">QQ号码</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" name="C_qq" value="<?php echo $C_qq?>">
                    </div>
                  </div>
                        
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">手机号码</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" name="C_mobile" value="<?php echo $C_mobile?>">
                    </div>
                  </div>
                  
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">微信号码</label>
                    <div class="col-md-10">
                      <textarea class="form-control" name="C_wechat"><?php echo $C_wechat?></textarea>
                    </div>
                  </div>
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">微信二维码</label>
                    <div class="col-md-10">
                      <div class="row">
                      <div class="col-xs-3">
                      <img src="../media/<?php echo $C_wechatcode?>" id="C_wechatcodex" class="showpic" onClick="showUpload('C_wechatcode','../media');">
                    </div>
                    <div class="col-xs-9">
                            <div class="input-group">
                              <input type="text" id="C_wechatcode" name="C_wechatcode" class="form-control" value="<?php echo $C_wechatcode?>">
                              <span class="input-group-btn">
                            <button class="btn btn-primary m-b-5 m-t-5" type="button" onClick="showUpload('C_wechatcode','../media');">上传</button>
                              </span>
                      </div>
                    </div>
                  </div>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>


                <div class="card">
              <div class="card-header"><h4>商户入驻设置</h4></div>
              <div class="card-body">
                <div class="row">
                    
                    
                    <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">运营模式</label>
                    <div class="col-md-10">
                      <label><input type="radio" value="0" name="C_model" <?php if($C_model==0){echo "checked='checked'";}?>> 自营模式</label>
                      <label><input type="radio" value="1" name="C_model" <?php if($C_model==1){echo "checked='checked'";}?>> 商家入驻</label>
                    </div>
                  </div>
                  
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">入驻费</label>
                    <div class="col-md-10">

                      <div class="input-group">
            <input class="form-control" type="text" name="C_fee" value="<?php echo $C_fee?>">
            <span class="input-group-addon">元</span>
        </div>


                      
                    </div>
                  </div>
                        
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">交易手续费</label>
                    <div class="col-md-10">
                      <div class="input-group">
                      <input class="form-control" type="text" name="C_rate" value="<?php echo $C_rate?>">
                      <span class="input-group-addon">%</span>
        </div>
                    </div>
                  </div>
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">收款模式</label>
                    <div class="col-md-10">
                      <label><input type="radio" value="1" name="C_pay" <?php if($C_pay==1){echo "checked='checked'";}?>> 平台代收款</label>
                      <label><input type="radio" value="0" name="C_pay" <?php if($C_pay==0){echo "checked='checked'";}?>> 商户自行收款</label>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input">商家商品审核</label>
                    <div class="col-md-10">
                      <label><input type="radio" value="1" name="C_sh" <?php if($C_sh==1){echo "checked='checked'";}?>> 需审核</label>
                      <label><input type="radio" value="0" name="C_sh" <?php if($C_sh==0){echo "checked='checked'";}?>> 免审核</label>
                    </div>
                  </div>
                  
                  
                  <div class="form-group row">
                    <label class="col-md-2" for="example-email-input"></label>
                    <div class="col-md-10">
                      <div style="font-size: 12px;margin-top: 10px;color: #33cabb">如果您不知道如何填写，请点击 <a href="https://www.7-card.cn/newsinfo.html?id=5" class="btn btn-xs btn-success" target="_blank">帮助文档</a></div>
                    </div>
                  </div>
                  

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