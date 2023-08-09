<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $P["P_title"];?>-<?php echo $webtitle;?></title> 
    <meta name="keywords" content="<?php echo $keyword;?>">
    <meta name="description" content="<?php echo $description;?>">
    <link rel="shortcut icon" type="image/x-icon" href="../media/<?php echo $ico;?>">
    <link href="template/s4/static/css/message.css" rel="stylesheet">
    <link href="template/s4/static/css/main.css" rel="stylesheet">
    <link rel="stylesheet" href="template/s4/static/css/bootstrap.min.css">  
    <script src="template/s4/static/js/jquery.min.js"></script>
    <script src="template/s4/static/js/bootstrap.min.js"></script>
</head>
<body>

<div class="main">
    <form id="form">
        <input type="hidden" value="<?php echo $id?>" name="id">
        <input type="hidden" value="<?php echo "card".date("Ymdhmi").rand(11111,99999)?>" name="no">
    <div class="top">
        <div style="text-align: center;">
            <img src="../media/<?php echo $logo;?>" style="width: 100px;height: 100px;box-shadow: 0 0 12px rgb(69 79 102 / 20%);background: #fff;border-radius: 100px;border:solid 5px #fff;margin-top: 20px">
            <div style="color:#fff;margin: 10px;"><?php echo $webtitle;?></div>
            <div>

<div class="btn-group btn-group-sm" style="width: 90%">
    <button type="button" class="btn btn-default" style="width: 33.33%" onClick="alert('<?php echo $notice?>')"><span class="glyphicon glyphicon-bell"></span> 店铺公告</button>
    <a class="btn btn-default" style="width: 33.33%" href="<?php 
                            switch($maincontact){
                               case 0:
                                    echo "http://wpa.qq.com/msgrd?v=3&uin=".$qq."&site=qq&menu=yes";
                                break;
                                case 1:
                                    echo "javascript:Qmsg.info('卖家手机号码：".$mobile."',{})";
                                break;
                                case 2:
                                    echo "javascript:Qmsg.loading('<p style=\'text-align:center;margin-bottom:20px\'>使用微信扫码联系卖家</p><p><img src=\'../media/".$wechatcode."\' style=\'width:200px\'></p>',{html:true,showClose:true})";
                                break;
                            }
                            ?>"><span class="glyphicon glyphicon-comment"></span> 在线咨询</a>
    <a class="btn btn-default" style="width: 33.33%" href="query.php"><span class="glyphicon glyphicon-search"></span> 查询订单</a>
</div>
</div>
        </div>
    </div>
    <?php
		$list=getlist("select * from sl_psort where S_mid=".$P["P_mid"]." and S_on=1 and S_del=0 order by S_order asc,S_id desc");
        foreach($list as $row){
        	echo "<div class=\"body\"><div style=\"font-weight:bold;border-bottom:solid 1px #DDD;margin:-20px -20px 20px -20px;padding:10px;font-size:15px;\"><span class=\"	glyphicon glyphicon-shopping-cart\"></span> ".$row["S_title"]."</div>";
            $list2=getlist("select * from sl_product where P_sort=".$row["S_id"]." and P_del=0 and P_sh=1 and P_on=1 and P_mid=".$P["P_mid"]." order by P_order asc,P_id desc");
            foreach($list2 as $row2){

				if($C_html==1){
				  $url=$row2["P_id"];
				}else{
				  $url="?id=".$row2["P_id"];
				}
			    if($row2["P_selltype"]==0){
			        $r="<div style=\"color:#090;background:#EEFFEE;display:inline-block;padding:2px 5px;border-radius:5px;\"><div><span>库存充足</span></div></div>";
			    }else{
			        $r="<div style=\"color:#fb636b;background:#ffebe8;display:inline-block;padding:2px 5px;border-radius:5px;\"><div><span>剩余".get_json_num($row2["P_card"],"sell","0")."件</span></div></div>";
			    }

                if(get_json_num($row2["P_card"],"sell","0")>0 || $row2["P_selltype"]==0){
                    $btn="<a href=\"$url\" class=\"btn btn-danger pull-right\" style=\"margin-top:22px\">购买</a>";
                }else{
                    $btn="<button type=\"button\" class=\"btn btn-default pull-right\" style=\"margin-top:22px\">缺货</button>";
                }
            	echo "<div style=\"border-bottom:solid 1px #DDD;padding-bottom:10px;margin-bottom:10px;\">
            	<a href=\"$url\"><img src=\"../media/".$row2["P_pic"]."\" style=\"width:80px;height:80px;border-radius:10px;display:inline-block;vertical-align:top;margin-right:10px\"></a>
            	<div style=\"display:inline-block;vertical-align:top;width:calc(100% - 160px)\">
            	<div style=\"font-size:15px;font-weight:bold\">".$row2["P_title"]."</div>
            	<div style=\"font-size:20px;font-weight:bold;color:#f00;margin:5px 0\">￥".$row2["P_price"]."</div>
            	<div style=\"font-size:12px;\">$r 销量：".$row2["P_sold"]." 浏览量：".$row2["P_view"]." </div>
            	</div>
            	$btn
            	</div>";
            }
        	echo "</div>";
        }
    ?>


    <div class="body">
        <div><a href="http://beian.miit.gov.cn/" target="_blank"><?php echo $C_beian?></a></div>
        <div><?php echo $C_copyright?> | 技术支持：<a href="https://www.7-card.cn">发卡宝</a></div>
    </div>


    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" >
  <div class="modal-dialog" role="document">
    <div class="modal-content">

        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="position: absolute;top: 10px;right: 15px;background: #fff;border-radius: 15px;padding: 2px 6px"><span aria-hidden="true">&times;</span></button>

      <div style="overflow: auto;" id="mcontent">
        <img src="../media/<?php echo $P["P_pic"];?>" style="width: 100%">
        <div class="modal-body">
            <div class="title" style="font-size: 15px;font-weight: bold"><?php echo $P["P_title"]?></div>
            <div class="price" style="color:#492DD9;font-size: 15px;margin: 5px 0;font-weight: bold;">￥<span style="font-size: 20px"><?php echo $P["P_price"]?></span> <span style="color: #fff;background: #492DD9;font-size: 12px;padding: 2px 5px;border-radius: 3px;">自动发货</span></div>
            <div style="margin: 10px 0;font-size: 12px;color: #AAA">
                <div style="display: inline-block;width: 33.33%">销量：<?php echo $P["P_sold"];?></div><div style="display: inline-block;width: 33.33%"><?php echo $rest_title;?></div><div style="display: inline-block;width: 33.33%">浏览量：<?php echo $P["P_view"];?></div>
            </div>

      </div>
      <div style="background: #f7f7f7;height: 10px;">
      </div>
      <div class="modal-body">
        <div style="font-size: 14px;font-weight: bold;margin-bottom: 10px">商品介绍</div>

      <div style="font-size: 14px;color: #333"><?php echo str_replace("\r\n","<br>",htmlspecialchars($P["P_content"]));?></div>
</div>
<div style="background: #f7f7f7;height: 10px;"></div>
<div class="modal-body">
      <p>
                <div class="input-group">
                    <span class="input-group-addon">剩余库存</span>
                    <input type="text" class="form-control" value="<?php echo $rest_title?>" disabled>
                </div>
            </p>
            <p>
                <div class="input-group">
                    <span class="input-group-addon">下单份数</span>
                    <span class="input-group-btn">
                        <button class="btn btn-info" type="button" onClick='javascript:if(this.form.amount.value>=2){this.form.amount.value--;}'><span class="glyphicon glyphicon-minus"></span></button>
                    </span>
                    <input type="text" class="form-control" name="amount" value="1" id='amount'>
                    <span class="input-group-btn">
                        <button class="btn btn-info" type="button" onClick='javascript:if(this.form.amount.value<<?php echo $rest;?>){this.form.amount.value++;}'><span class="glyphicon glyphicon-plus"></span></button>
                    </span>
                </div>
            </p>
            <p>
                <div class="input-group">
                    <span class="input-group-addon">联系方式</span>
                    <input type="text" name="address" class="form-control" placeholder="联系方式特别重要，可用来查询订单，如果填写的是邮箱，付款成功后商品自动发送到您的邮箱">
                </div>
            </p>

            <p>
                <div class="input-group">
                    <span class="input-group-addon">支付方式</span>
                    <select class="form-control" name="pay_type">
                        <?php
                            if($alipayon==1){
                                echo "<option value=\"alipay\">支付宝</option>";
                            }
                            
                            if($wxpayon==1){
                                echo "<option value=\"wxpay\">微信支付</option>";
                            }
                        ?>
                    </select>
                </div>
            </p>
            <div style="height: 50px"></div>
            <?php
                if($rest>0){
                    echo "<div onclick=\"pay(".$id.")\" style=\"width: 100%;height: 50px;line-height: 50px;text-align: center;background: #492DD9;color:#fff;position: fixed;bottom:0px;left:0px;z-index: 9999;cursor: pointer;\">立即购买</div>";
                }else{
                    echo "<div style=\"width: 100%;height: 50px;line-height: 50px;text-align: center;background: #492DD9;color:#fff;position: fixed;bottom:0px;left:0px;z-index: 9999;\">库存不足，等待补货</div>";
                }
            ?>
</div>
  </div>
  </div>
</div>  
</div>

</form>
</div>
   <?php echo $C_code?>
   <script>
        var $rest=<?php echo $rest?>;
        var $price=<?php echo $P["P_price"];?>;
    </script>
   <script src="template/s4/static/js/message.min.js"></script>
   <script src="template/s4/static/js/main.js?v=221218"></script>
   <script type="text/javascript">
	$("#mcontent").height($(window).height()-25);
    <?php
    if($_GET["show"]!="none"){
        echo "$('#myModal').modal('show');";
    }
    ?>
    
   </script>
</body>
</html>