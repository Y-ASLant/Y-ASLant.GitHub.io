<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $P["P_title"];?>-<?php echo $webtitle;?></title> 
    <meta name="keywords" content="<?php echo $keyword;?>">
    <meta name="description" content="<?php echo $description;?>">
    <link rel="shortcut icon" type="image/x-icon" href="../media/<?php echo $ico;?>">
    <link href="template/s3/static/css/main.css" rel="stylesheet">
    <link href="template/s3/static/css/message.css" rel="stylesheet">
    <link rel="stylesheet" href="template/s3/static/css/bootstrap.min.css">  
    <script src="template/s3/static/js/jquery.min.js"></script>
    <script src="template/s3/static/js/bootstrap.min.js"></script>
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
    <div class="body">
        <div class="t">
            <div class="tab_active" onclick="tab_change(0)"><span class="glyphicon glyphicon-shopping-cart"></span> 购物下单</div><div class="tab" onclick="tab_change(1)"><span class="glyphicon glyphicon-list"></span> 商品介绍</div>
        </div>

        <div style="text-align: center;margin-top: 15px;" id="t0">
            <img src="../media/<?php echo $P["P_pic"];?>" style="width: 200px;height:200px;box-shadow: 0 0 12px rgb(69 79 102 / 20%);background: #fff;">
            <p>
                <div class="input-group">
                    <span class="input-group-addon">选择分类</span>
                    <select class="form-control" id="S_id" onchange="changesort()">
                        <?php
                            $list=getlist("select * from sl_psort where S_mid=".$P["P_mid"]." and S_on=1 and S_del=0 order by S_order asc,S_id desc");
                            foreach($list as $row){

                                $P_id=getrs("select * from sl_product where P_del=0 and P_sh=1 and P_on=1 and P_sort=".$row["S_id"]." order by P_order asc,P_id desc","P_id");

                                if($row["S_id"]==$P["P_sort"]){
                                    echo "<option value=\"".$P_id."\" selected=\"selected\">".$row["S_title"]."</option>";
                                }else{
                                    echo "<option value=\"".$P_id."\">".$row["S_title"]."</option>";
                                }
                            }
                        ?>
                    </select>

                </div>
            </p>
            <p>
                <div class="input-group">
                    <span class="input-group-addon">选择商品</span>
                    <select class="form-control" id="P_id" onchange="change()">
                        <?php
                            $list=getlist("select * from sl_product where P_sort=".$P["P_sort"]." and P_del=0 and P_sh=1 and P_on=1 and P_mid=".$P["P_mid"]." order by P_order asc,P_id desc");
                            foreach($list as $row){
                                if($row["P_id"]==$id){
                                    echo "<option value=\"".$row["P_id"]."\" selected=\"selected\">".$row["P_title"]."</option>";
                                }else{
                                    echo "<option value=\"".$row["P_id"]."\">".$row["P_title"]."</option>";
                                }
                            }
                        ?>
                    </select>

                </div>
            </p>
            <p>
                <div class="input-group">
                    <span class="input-group-addon">商品价格</span>
                    <input type="text" class="form-control" value="<?php echo $P["P_price"]?>" disabled>
                    <span class="input-group-addon">元</span>
                </div>
            </p>
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
        <div id="t1" style="padding-top: 10px;display: none">
            <?php echo str_replace("\r\n","<br>",htmlspecialchars($P["P_content"]));?>
        </div>

    </div>

    <div class="body">
        <div><a href="http://beian.miit.gov.cn/" target="_blank"><?php echo $C_beian?></a></div>
        <div><?php echo $C_copyright?> | 技术支持：<a href="https://www.7-card.cn">发卡宝</a></div>
    </div>
</form>
</div>
   <?php echo $C_code?>
   <script>
        var $rest=<?php echo $rest?>;
        var $price=<?php echo $P["P_price"];?>;
    </script>
   <script src="template/s3/static/js/message.min.js"></script>
   <script src="template/s3/static/js/main.js?v=221218"></script>
   <script type="text/javascript">
    function tab_change(i){
        $("#t0").hide();
        $("#t1").hide();
        $("#t"+i).show();
        if(i==0){
            $(".t").find("div").eq(0).attr("class", "tab_active");
            $(".t").find("div").eq(1).attr("class", "tab");
        }
        if(i==1){
            $(".t").find("div").eq(0).attr("class", "tab");
            $(".t").find("div").eq(1).attr("class", "tab_active");
        }
    }
    <?php
    if($C_html==1){
        echo 'function change(){
            window.location=$("#P_id").val();
        }

        function changesort(){
            window.location=$("#S_id").val();
        }';
      }else{
        echo 'function change(){
            window.location="?id="+$("#P_id").val();
        }

        function changesort(){
            window.location="?id="+$("#S_id").val();
        }';
      }

    ?>
    
   </script>
</body>
</html>