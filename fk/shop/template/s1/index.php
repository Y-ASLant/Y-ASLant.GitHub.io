<!DOCTYPE html>
<html data-dpr="1" style="font-size: 37.5px;">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">
        <title><?php echo $P["P_title"];?>-<?php echo $webtitle;?></title>
        <meta name="keywords" content="<?php echo $keyword;?>">
        <meta name="description" content="<?php echo $description;?>">
        <link rel="shortcut icon" type="image/x-icon" href="../media/<?php echo $ico;?>">
        <link href="template/s1/static/css/main.css?v=221218" rel="stylesheet">
        <link href="template/s1/static/css/message.css" rel="stylesheet">
    </head>
    
    <body style="font-size: 12px; top: 0px;background: #f7f7f7" class="">
        <form id="form">
        <input type="hidden" value="<?php echo $id?>" name="id">
        <input type="hidden" value="<?php echo "card".date("Ymdhmi").rand(11111,99999)?>" name="no">
        <div id="app" style="max-width: 880px;margin:0 auto">
            <div id="card7_zz" class="Router">
                
                <div id="card7_xb">
                    <!---->
                    <div class="bangz_box">
                    </div>
                    <!---->
                    <div class="hide">
                        <img src="../media/<?php echo $logo;?>" style="background: #fff"
                        class="toux">
                        <div class="dianpming">
                            <span>
                                <?php echo $webtitle;?>
                            </span>
                            <?php
                            switch($maincontact){
                                case 0:
                                    echo "<span>卖家QQ：".$qq."</span>";
                                break;
                                case 1:
                                    echo "<span>卖家手机号码：".$mobile."</span>";
                                break;
                                case 2:
                                    echo "<span>卖家微信：".$wechat."</span>";
                                break;
                            }
                            ?>
                            
                        </div>
                        <div class="shouqian_box">
                            <a class="shouqian" href="<?php 
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
                            ?>">
                                <p style="background: rgb(153, 153, 153);">
                                </p>
                                在线咨询
                            </a>
                            <a class="shouqian shouqian_guanw" href="query.php">订单查询</a>
                        </div>
                    </div>
                    
                    <div class="classification">
                        <div class="classification_hide">
                            <img src="template/s1/static/img/notice.png">
                            <span>
                                店铺公告：
                            </span>
                        </div>
                        <div class="classification_fl_box">
                            <marquee direction="left" style="background: #f9f9f9;padding:10px;border-radius:10px;color:#333" onMouseOver="this.stop()" onMouseOut="this.start()"><?php echo $notice;?></marquee>
                        </div>
                    </div>

                    <div class="classification">
                        <div class="classification_hide">
                            <img src="template/s1/static/img/sort.png">
                            <span>
                                选择分类
                            </span>
                        </div>
                        <div class="classification_fl_box">
                            <?php
                            $list=getlist("select * from sl_psort where S_mid=".$P["P_mid"]." and S_on=1 and S_del=0 order by S_order asc,S_id desc");

                            foreach($list as $row){
                                
                                $P_count=getrs("select count(P_id) as P_count from sl_product where P_mid=".$P["P_mid"]." and P_sort=".$row["S_id"]." and P_del=0 and P_sh=1 and P_on=1","P_count");

                                  if($row["S_id"]==$P["P_sort"]){
                                      
                                      echo "<div class=\"check_card classification_fl_leng\" style=\"margin-right:10px;display:inline-block\">
                                                <img src=\"template/s1/static/img/checked2.png\"
                                                class=\"fl_img\">
                                                <div class=\"fl_name\" style=\"overflow: hidden;white-space: nowrap;text-overflow: ellipsis;\">
                                                    ".$row["S_title"]."
                                                </div>
                                                <div class=\"products\">
                                                    包含".$P_count."种商品
                                                </div>
                                            </div>";
                                  }else{
                                      $P_id=getrs("select * from sl_product where P_del=0 and P_sh=1 and P_on=1 and P_sort=".$row["S_id"]." order by P_order asc,P_id desc","P_id");
                                      
                                      if($P_id==""){

                                      }else{
                                          if($C_html==1){
                                              $url=$P_id;
                                          }else{
                                              $url="?id=".$P_id;
                                          }
                                          echo "<a class=\"classification_fl_leng\" href=\"".$url."\" style=\"margin-right:10px;display:inline-block\">
                                        <div class=\"fl_name\" style=\"overflow: hidden;white-space: nowrap;text-overflow: ellipsis;\">
                                            ".$row["S_title"]."
                                        </div>
                                        <div class=\"products\">
                                            包含".$P_count."种商品
                                        </div>
                                    </a>";
                                      }
                                      
                                  }
                            }
                            ?>
                        </div>
                    </div>
                    <div class="card_pr">
                        <div class="card_pr_hide">
                            <img src="template/s1/static/img/product.png">
                            <span>
                                选择商品
                            </span>
                        </div>
                        <div class="card_pr_fl_box">
                            
                            <?php
                            $list=getlist("select * from sl_product where P_sort=".$P["P_sort"]." and P_del=0 and P_sh=1 and P_on=1 and P_mid=".$P["P_mid"]." order by P_order asc,P_id desc");
                            foreach($list as $row){
                                if($row["P_selltype"]==0){
        $r="<div class=\"products discount_tips\" style=\"color:#090;background:#EEFFEE;\"><div><span>库存充足</span></div></div>";
    }else{
        $r="<div class=\"products discount_tips\"><div><span>剩余".get_json_num($row["P_card"],"sell","0")."件</span></div></div>";
    }

    if($row["P_id"]==$id){
        echo "<div class=\"card_pr_leng\" style=\"border: 1px solid #492DD9;overflow:hidden\">
        <img src=\"../media/".$row["P_pic"]."\" style=\"width:63px;height:63px;display:inline-block;margin:-20px 10px -14px -14px\">
            <img src=\"template/s1/static/img/checked.png\"
            class=\"pr_img\">
            <div style=\"display:inline-block\">
                <div class=\"pr_name\" style=\"color: #492DD9;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;max-width:230px\">
                    ".$row["P_title"]."
                </div>
                <div class=\"products\">
                    ￥ ".$row["P_price"]."
                </div>
            $r
            </div>
        </div>";
    }else{
        if($C_html==1){
              $url=$row["P_id"];
          }else{
              $url="?id=".$row["P_id"];
          }
                                          
            echo "<a class=\"card_pr_leng\" style=\"overflow:hidden\" href=\"".$url."\">
            <img src=\"../media/".$row["P_pic"]."\" style=\"width:63px;height:63px;display:inline-block;margin:-20px 10px -14px -14px\">
            <div style=\"display:inline-block\">
            <div class=\"pr_name\" style=\"overflow: hidden;white-space: nowrap;text-overflow: ellipsis;max-width:230px\">
                ".$row["P_title"]."
            </div>
            <div class=\"products\">
                ￥ ".$row["P_price"]."
            </div>
            $r
            </div>
        </a>";
    }
}

    
                            ?>

                        </div>
                        <div class="discount_box">
                            <div class="discount_leng miaos">
                                <img src="template/s1/static/img/intro.png">
                                <div>
                                    商品介绍：<?php echo str_replace("\r\n","<br>",htmlspecialchars($P["P_content"]));?>
                                </div>
                            </div>
                        </div>
                        <div class="user_info">
                            <div class="user_info_leng">
                                <div class="user_info_hide">
                                    <span>
                                        *
                                    </span>
                                    <span>
                                        购买数量
                                    </span>
                                    <span>

								(<?php echo $rest_title;?>)

							</span>
                                </div>
                                <div class="jiajian">
                                    <span id="minus">
                                        <p >
                                        </p>
                                    </span>
                                    <input type="number" name="amount" value="1" id="amount">
                                    <span id="plus">
                                        <p>
                                        </p>
                                        <p>
                                        </p>
                                    </span>
                                </div>
                            </div>
                            <div class="user_info_leng">
                                <div class="user_info_hide">
                                    <span>
                                        *
                                    </span>
                                    <span>
                                        请输入联系方式
                                    </span>
                                </div>
                                <div class="input_box">
                                    <input type="text" name="address" placeholder="例如QQ、手机号、邮箱等">
                                </div>
                                <div class="msg" style="margin-top: 0.64rem;">
                                    联系方式特别重要，可用来查询订单，如果填写的是邮箱，付款成功后商品自动发送到您的邮箱
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="border">
                    </div>
                    
                    <div class="pay_box">
                        <div class="pay_box_hide">
                            支付方式
                        </div>
                        
                        <div class="pay_box_leng_box">
                            <?php
                            if($alipayon==1){
                                echo "<label class=\"pay_box_leng\"  aa=\"pay_type\">
                                <input type=\"radio\" value=\"alipay\"  name=\"pay_type\">
                                <div>
                                    <img src=\"template/s1/static/img/alipay.png\"
                                    class=\"buy_type\">
                                    <span>
                                        支付宝
                                    </span>
                                </div>
                                
                            </label>";
                            }
                            
                            if($wxpayon==1){
                                echo "<label class=\"pay_box_leng\" aa=\"pay_type\">
                                <input type=\"radio\" value=\"wxpay\" name=\"pay_type\">
                                <div>
                                    <img src=\"template/s1/static/img/wxpay.png\"
                                    class=\"buy_type\">
                                    <span>
                                        微信支付
                                    </span>
                                </div>
                            </label>";
                            }

                            ?>

                        </div>
                    </div>

                        <div class="card7" style="padding:70px 0px">
                            <div><a href="http://beian.miit.gov.cn/" target="_blank"><?php echo $C_beian?></a></div>
                            <div><?php echo $C_copyright?> | 技术支持：<a href="https://www.7-card.cn">发卡宝</a></div>
                        </div>
                        
                        <?php
                        if($rest>0){
                            echo "<div class=\"btn_buy\" style=\"height:50px\">
                          <div class=\"to_pay\" onclick=\"pay(".$id.")\" style=\"cursor:pointer\">
                              <span>支付 ￥<span id=\"price\">".$P["P_price"]."</span></span>
                            </div>
                        </div>";
                        }else{
                            echo "<div class=\"btn_buy\" style=\"height:50px\">
                          <div class=\"to_pay\">
                              <span>库存不足，等待补货</span>
                            </div>
                        </div>";
                        }
                        
                        ?>
                    </div>
                </div>

            </div>
            </form>
            <?php echo $C_code?>
            <script>
                var $rest=<?php echo $rest?>;
                var $price=<?php echo $P["P_price"];?>;
            </script>
            <script src="template/s1/static/js/jquery.min.js"></script>
            <script src="template/s1/static/js/message.min.js"></script>
            <script src="template/s1/static/js/main.js?v=221218"></script>

    </body>

</html>