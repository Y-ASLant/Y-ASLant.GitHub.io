<?php
require '../conn/conn.php';
require '../conn/function.php';
require 'admin_check.php';

$action=$_GET["action"];
$P_id=intval($_GET["P_id"]);

$S_count=intval(getrs("select count(S_id) as S_count from sl_psort where S_mid=0","S_count"));

if($P_id!=""){
  $aa="edit&P_id=".$P_id;
  $P=getrs("select * from sl_product where P_id=".$P_id);
  $P_title=$P["P_title"];
  $P_pic=$P["P_pic"];
  $P_content=$P["P_content"];
  $P_price=$P["P_price"];
  $P_sort=$P["P_sort"];
  $P_time=$P["P_time"];
  $P_sell=$P["P_sell"];
  $P_selltype=$P["P_selltype"];
  $P_card=$P["P_card"];
  $P_use=$P["P_use"];
  $P_sh=$P["P_sh"];
  $P_sold=$P["P_sold"];
  $P_view=$P["P_view"];
  $title="编辑";
  $M_id=$P["P_mid"];
}else{
  $aa="add";
  $title="新增";
  $P_selltype=0;
  $P_pic="nopic.png";
  $P_price=0;
  $P_sold=0;
  $P_view=0;
  $P_time=date('Y-m-d H:i:s');
  $P_card="[]";
  $P_sh=1;
  $M_id=0;
}

if($action=="add"){
    $P_title=$_POST["P_title"];
    $P_pic=$_POST["P_pic"];
    $P_content=$_POST["P_content"];
    $P_price=round($_POST["P_price"],2);
    $P_sort=intval($_POST["P_sort"]);
    $P_sh=intval($_POST["P_sh"]);
    $P_time=$_POST["P_time"];
    $P_sell=$_POST["P_sell"];
    $P_use=$_POST["P_use"];
    $P_sold=intval($_POST["P_sold"]);
    $P_view=intval($_POST["P_view"]);
    $P_selltype=intval($_POST["P_selltype"]);
    
    foreach ($_POST as $x=>$value) {
	    if(splitx($x,"_",0)=="content"){
	       if($_POST[$x]!=""){
	           $arr=array(
	            "content"=>$_POST[$x],
	            "sell"=>$_POST["sell_".splitx($x,"_",1)]
	            );
	           $c=$c.json_encode($arr).",";
	       }
	    }
	}
	$c= substr($c,0,strlen($c)-1);
	$P_card="[".$c."]";
	$P_card=str_replace("\\","\\\\",$P_card);
	
if($P_price>0){
  if($P_title!="" && $P_content!=""){
    sql("insert into sl_product(P_title,P_pic,P_content,P_price,P_sort,P_time,P_sell,P_selltype,P_card,P_use,P_sh,P_sold,P_view,P_mid) values('$P_title','$P_pic','$P_content',$P_price,$P_sort,'$P_time','$P_sell',$P_selltype,'$P_card','$P_use',$P_sh,$P_sold,$P_view,0)");
    $P_id=getrs("select * from sl_product where P_title='$P_title'  and P_sort=$P_sort","P_id");
    die("{\"msg\":\"success\",\"id\":\"".$P_id."\"}");
  }else{
    die("{\"msg\":\"请填全信息\"}");
  }
}else{
    die("{\"msg\":\"商品售价需大于0元\"}");
}
}

if($action=="edit"){
    $P_title=$_POST["P_title"];
    $P_pic=$_POST["P_pic"];
    $P_content=$_POST["P_content"];
    $P_price=round($_POST["P_price"],2);
    $P_sort=intval($_POST["P_sort"]);
    $P_sh=intval($_POST["P_sh"]);
    $P_time=$_POST["P_time"];
    $P_sell=$_POST["P_sell"];
    $P_use=$_POST["P_use"];
    $P_sold=intval($_POST["P_sold"]);
    $P_view=intval($_POST["P_view"]);
    $P_selltype=intval($_POST["P_selltype"]);

    foreach ($_POST as $x=>$value) {
	    if(splitx($x,"_",0)=="content"){
	       if($_POST[$x]!=""){
	           $arr=array(
	            "content"=>$_POST[$x],
	            "sell"=>$_POST["sell_".splitx($x,"_",1)]
	            );
	           $c=$c.json_encode($arr).",";
	       }
	    }
	}
	$c= substr($c,0,strlen($c)-1);
	$P_card="[".$c."]";
	$P_card=str_replace("\\","\\\\",$P_card);

if($P_price>0){
  if($P_title!="" && $P_content!=""){
    sql("update sl_product set 
    P_title='$P_title',
    P_pic='$P_pic',
    P_content='$P_content',
    P_price=$P_price,
    P_sort=$P_sort,
    P_sh=$P_sh,
    P_selltype=$P_selltype,
    P_time='$P_time',
    P_sell='$P_sell',
    P_use='$P_use',
    P_sold='$P_sold',
    P_view='$P_view',
    P_card='$P_card'
    where P_id=$P_id");
    
    die("{\"msg\":\"success\",\"id\":\"".$P_id."\"}");
    
  }else{
    die("{\"msg\":\"请填全信息\"}");
  }
}else{
    die("{\"msg\":\"商品售价需大于0元\"}");
}
}

?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>商品管理 - 后台管理</title>
<link rel="icon" href="../media/<?php echo $C_ico?>" type="image/ico">
<link href="../css/bootstrap.min.css" rel="stylesheet">
<link href="../css/materialdesignicons.min.css" rel="stylesheet">
<link href="../css/style.min.css" rel="stylesheet">
<script type="text/javascript" src="../upload/upload.js"></script>
<link rel="stylesheet" href="../js/jconfirm/jquery-confirm.min.css">
<style type="text/css">
.showpic{height: 80px;width:80px;border: solid 1px #DDDDDD;padding: 5px;}
.showpicx{width: 100%;max-width: 500px}
.list-group a{text-decoration:none}
.part{display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;}
.pagination{margin: 0px;}

.buy label {
	padding: 5px 10px;
	cursor: pointer;
	border: #CCCCCC solid 1px;
	-moz-border-radius: 3px;
	-webkit-border-radius: 3px;
	border-radius: 3px;
}

.buy .checked {
	border: #33cabb solid 1px;
	-moz-border-radius: 3px;
	-webkit-border-radius: 3px;
	border-radius: 3px;
	color: #33cabb;
	background: #F1FCFA;
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
                <div class="col-lg-3">
                  <div class="card card-primary">
                    <div class="card-header">
                      <h4>自营商品列表</h4>
                    </div>
                        <ul class="list-group">
                        <?php 
                        $list=getlist("select * from sl_product where P_del=0 and P_mid=0  order by P_id desc limit 10");
                        foreach($list as $row){
                          if($row["P_id"]==$P_id){
                            $active="active";
                          }else{
                            $active="";
                          }

                          echo "<a id=\"".$row["P_id"]."\" href=\"?P_id=".$row["P_id"]."\" class=\"list-group-item ".$active."\">
                          <div class=\"part\">".$row["P_title"]."</div> 
                          </a>";
                        }
                        ?>
                          
                        </ul>
                  </div>
                  <a href="product_add.php" class="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i> 新增商品</a>
                  <a href="psort.php" class="btn btn-sm btn-info"><i class="fa fa-plus-circle"></i> 新增分类</a>
                </div>
                
                <div class="col-lg-9">
                  <div class="card card-primary">
                    <div class="card-header ">
                      <h4>编辑商品</h4>
                    </div>
                    <div class="card-body">
                      <form id="form">
<div class="form-group row">
                    <label class="col-md-2" for="example-email-input">商品图片</label>
                    <div class="col-md-10">
                      <div class="row">
                      <div class="col-xs-3">
                      <img src="../media/<?php echo $P_pic?>" id="P_picx" class="showpic" onClick="showUpload('P_pic','../media');">
                    </div>
                     <div class="col-xs-9">
                            <div class="input-group">
                              <input type="text" id="P_pic" name="P_pic" class="form-control" value="<?php echo $P_pic?>">
                              <span class="input-group-btn">
                                      <button class="btn btn-primary m-b-5 m-t-5" type="button" onClick="showUpload('P_pic','../media');">上传</button>
                              </span>
                      </div>
                    </div>
                    </div>
                  </div>
                  </div>
                          <div class="form-group row">
                            <label class="col-md-2 col-form-label" >商品标题</label>
                            <div class="col-md-4">
                              <input type="text"  name="P_title" class="form-control" value="<?php echo $P_title?>">
                            </div>
                            
                            

                            <label class="col-md-2 col-form-label" >商品分类</label>
                            <div class="col-md-4">
                              <select name="P_sort" class="form-control">


									<?php
										$list=getlist("select * from sl_psort where S_del=0 and S_mid=$M_id order by S_order,S_id desc");
                    foreach($list as $row){
												if($P_sort==$row["S_id"]){
													$selected="selected";
												}else{
													$selected="";
												}
												echo "<option value=\"".$row["S_id"]."\" ".$selected.">".$row["S_title"]."</option>";
										}
									?>

								</select>
								
                            </div>

                          </div>

                          <div class="form-group row">

                            <label class="col-md-2 col-form-label" >商品价格</label>
                            <div class="col-md-4">

                              <div class="input-group">
                            <input type="text"  name="P_price" class="form-control" value="<?php echo $P_price?>">
                            <span class="input-group-addon">元</span>
                          </div>

                            </div>


                            <label class="col-md-2 col-form-label" >发布时间</label>
                            <div class="col-md-4">
                            <div class="input-group">
                                        <input type="text"  name="P_time" id="P_time" class="form-control" value="<?php echo $P_time?>">
                                        <span class="input-group-btn">
                                            <button class="btn btn-info" type="button" onclick="getdate('P_time')">获取</button>
                                        </span>
                                    </div>
                            </div>
                          </div>


                          <div class="form-group row">

                            <label class="col-md-2 col-form-label" >商品销量</label>
                            <div class="col-md-4">

                              <div class="input-group">
                            <input type="text"  name="P_sold" class="form-control" value="<?php echo $P_sold?>">
                            <span class="input-group-addon">件</span>
                          </div>

                            </div>


                            <label class="col-md-2 col-form-label" >商品浏览量</label>
                            <div class="col-md-4">
                            <div class="input-group">
                            <input type="text"  name="P_view" class="form-control" value="<?php echo $P_view?>">
                            <span class="input-group-addon">次</span>
                          </div>
                            </div>
                          </div>
                          
                         <div class="form-group row">
                          <label class="col-md-2 col-form-label" >发货类型</label>
                          <div class="col-md-4 buy">
                              
                            <label aa="P_selltype" <?php if($P_selltype==0){echo "class='checked'";}?>><input type="radio" name="P_selltype" value="0" onclick="show(0)" <?php if($P_selltype==0){echo "checked='checked'";}?>> 固定内容-重复发货</label>
                            
                            <label aa="P_selltype" <?php if($P_selltype==1){echo "class='checked'";}?>><input type="radio" name="P_selltype" value="1" onclick="show(1)" <?php if($P_selltype==1){echo "checked='checked'";}?>> 卡密内容-不重复发货</label>
                            
                          </div>

                          <label class="col-md-2 col-form-label" >商品审核</label>
                          <div class="col-md-4">
                          <select class="form-control" name="P_sh">
                          	<option value="0" <?php if($P_sh==0){echo "selected='selected'";}?>>未审核</option>
                          	<option value="1" <?php if($P_sh==1){echo "selected='selected'";}?>>已通过</option>
                          	<option value="2" <?php if($P_sh==2){echo "selected='selected'";}?>>未通过</option>
                          </select>
                      	</div>
                        </div>
                        
                        <div class="form-group row" id="P_sell0">
                          <label class="col-md-2 col-form-label" >发货内容</label>
                          <div class="col-md-10">
                            <textarea class="form-control" rows="5" name="P_sell" placeholder="在发货页展示"><?php echo $P_sell;?></textarea>
                          </div>
                        </div>
                        
                        <div class="form-group row" id="P_sell1">
                          <label class="col-md-2 col-form-label" >发货内容</label>
                          <div class="col-md-10">
                              <div style="max-height:300px;overflow:auto;margin-bottom:10px;border-radius:5px;border:solid 1px #DDD" id="card_area">
                              <table class="table table-striped table-hover table-condensed" style="margin-bottom:0px" id="card_table">
                                  <tr><th>卡密内容</th><th>发放</th><th>删除</th></tr>
                                  <?php
                                  $card=json_decode($P_card,true);
                                  for($i=0;$i<count($card);$i++){
                                      
                                      if($card[$i]["sell"]==0){
                                          $sell0="selected=\"selected\"";
                                          $sell1="";
                                      }else{
                                          $sell0="";
                                          $sell1="selected=\"selected\"";
                                      }
                                      
                                      echo "<tr id=\"tr_".($i+1)."\"><td><input type=\"text\" name=\"content_".($i+1)."\" class=\"form-control input-sm\" value=\"".$card[$i]["content"]."\"></td><td><select name=\"sell_".($i+1)."\" class=\"form-control input-sm\"><option value=\"0\" $sell0>未发放</option><option value=\"1\" $sell1>已发放</option></select></td><td><button onclick=\"del(".($i+1).")\" class=\"btn btn-xs btn-danger\">删除</button></td></tr>";
                                  }
                                  ?>
                              </table>
                              </div>

                              <button class="btn btn-warning btn-sm btn-label" type="button" onclick="add()"><label><i class="mdi mdi-plus-box"></i></label>增加卡密</button>
                              <button class="btn btn-info btn-sm btn-label" type="button" data-toggle="modal" data-target=".bs-example-modal-lg"><label><i class="mdi mdi-library-plus"></i></label>批量增加卡密</button>
                          </div>
                        </div>
                        
                        
                          <div class="form-group row">
                          <label class="col-md-2 col-form-label" >商品介绍</label>
                          <div class="col-md-10">
                            <textarea class="form-control" rows="15" name="P_content" placeholder="在介绍页展示"><?php echo $P_content?></textarea>
                          </div>
                        </div>
                        
                        <div class="form-group row">
                          <label class="col-md-2 col-form-label" >使用方法</label>
                          <div class="col-md-10">
                            <textarea class="form-control" rows="5" name="P_use" placeholder="在发货页展示"><?php echo $P_use?></textarea>
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="col-md-2 col-form-label" ></label>
                          <div class="col-md-10">
                            <button class="btn btn-info" type="button" onClick="save()"><?php echo $title?></button>
                          </div>
                        </div>
                    </div>

                  </form>
                  </div>
                  
                </div>
              </div>
        
      </div>
      
    </main>
  </div>
</div>

<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
        <h4 class="modal-title" id="myLargeModalLabel">批量增加卡密</h4>
      </div>
      <div class="modal-body">
          <textarea class="form-control" rows="20" placeholder="支持批量增加，每行一条，空行无效" id="card_content"></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="addcard()">点击保存</button>
      </div>
    </div>
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
$(function() { $('.buy label').click(function(){var aa = $(this).attr('aa');$('[aa="'+aa+'"]').removeAttr('class') ;$(this).attr('class','checked');});});
var S_sount=<?php echo $S_count?>;
if(S_sount==0){
    $.alert({
        title: '无商品分类',
        content: '请先新增商品分类',
    buttons: {
      confirm: {
        text: '确认',
        btnClass: 'btn-primary',
        action: function(){
          window.location.href="psort.php";
        }
      },
      cancel: {
        text: '取消',
        action: function () {
            window.location.href="psort.php";
        }
      }
    }
    });
}
show(<?php echo $P_selltype;?>);
function show(i){
    if(i==1){
        $("#P_sell0").hide();
        $("#P_sell1").show();
    }else{
        $("#P_sell0").show();
        $("#P_sell1").hide();
    }
}
function add(){
    $count=card_table.rows.length;
    $("#card_table").append("<tr id=\"tr_"+($count)+"\"><td><input type=\"text\" name=\"content_"+($count)+"\" class=\"form-control input-sm\" value=\"\"></td></td><td><select name=\"sell_"+($count)+"\" class=\"form-control input-sm\"><option value=\"0\">未发放</option><option value=\"1\">已发放</option></select></td><td><button class=\"btn btn-xs btn-danger\" onclick=\"del("+($count)+")\">删除</button></td></tr>");
    var div= document.getElementById('card_area');
    div.scrollTop = div.scrollHeight;
}

function addcard(){
    $count=card_table.rows.length;
    card=$("#card_content").val().split("\n");
    
    for(var $i=0;$i<card.length;$i++){
        if(card[$i]!=""){
            $("#card_table").append("<tr id=\"tr_"+($i+$count)+"\"><td><input type=\"text\" name=\"content_"+($i+$count)+"\" class=\"form-control input-sm\" value=\""+card[$i]+"\"></td></td><td><select name=\"sell_"+($i+$count)+"\" class=\"form-control input-sm\"><option value=\"0\">未发放</option><option value=\"1\">已发放</option></select></td><td><button class=\"btn btn-xs btn-danger\" onclick=\"del("+($i+$count)+")\">删除</button></td></tr>");
        }
    }
    var div= document.getElementById('card_area');
    div.scrollTop = div.scrollHeight;
    $("#card_content").val("");
}

function del(i){
    $("#tr_"+i).remove();
}
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
	                	setTimeout("window.location.href='?P_id="+data.id+"'", 2000 )
	                }else{
	                  	lightyear.notify(data.msg, 'danger', 100);
	                }
                }
              });
      }

    function getdate(id){
      var day1 = new Date();
      day1.setDate(day1.getDate());
      var s1 = day1.format("yyyy-MM-dd hh:mm:ss");
      $("#"+id).val(s1);
    }
      Date.prototype.format = function (fmt) {
          var o = {
              "M+": this.getMonth() + 1, //月份
              "d+": this.getDate(), //日
              "h+": this.getHours(), //小时
              "m+": this.getMinutes(), //分
              "s+": this.getSeconds(), //秒
              "q+": Math.floor((this.getMonth() + 3) / 3), //季度
              "S": this.getMilliseconds() //毫秒
          };
          if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
          for (var k in o)
              if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
          return fmt;
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