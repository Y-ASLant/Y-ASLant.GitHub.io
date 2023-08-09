<?php
$no=t($_GET["no"]);
$O=getrs("select * from sl_orders where O_no='$no' and O_state=1");
if($O==""){
    die("未获取到发货内容，请联系客服人员！");
}

if($O["O_mid"]==0){
    $maincontact=$C_maincontact;
    $qq=$C_qq;
    $mobile=$C_mobile;
    $wechat=$C_wechat;
}else{
    $M=getrs("select * from sl_member where M_id=".$O["O_mid"]);
    $maincontact=$M["M_maincontact"];
    $qq=$M["M_qq"];
    $mobile=$M["M_mobile"];
    $wechat=$M["M_wechat"];
}

$P=getrs("select * from sl_product where P_id=".$O["O_pid"]);

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>发货内容</title>
    <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">  
    <script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <style>
        html{height:100%;}
        body{background:#f7f7f7;height:100%;padding:0px;margin:0px}
        .main{width:100%;max-width:880px;margin:0 auto;background:#fff;height:100%;padding-top:50px}
    </style>
</head>
<body>
<div class="main">
    <?php
    switch($maincontact){
        case 0:
            $contact="QQ号码：".$qq;
        break;
        case 1:
            $contact="手机号码：".$mobile;
        break;
        case 2:
            $contact="微信号码：".$wechat;
        break;
    }

    if($C_html==1){
        $url=$O["O_pid"];
    }else{
        $url="./?id=".$O["O_pid"];
    }
    echo '<div style="text-align:center;margin-bottom:50px;"><svg t="1640249538074" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2084" width="100" height="100"><path d="M464.247573 677.487844C474.214622 686.649009 489.665824 686.201589 499.086059 676.479029L798.905035 367.037897C808.503379 357.131511 808.253662 341.319802 798.347275 331.721455 788.44089 322.12311 772.62918 322.372828 763.030833 332.279215L463.211857 641.720346 498.050342 640.711531 316.608838 473.940461C306.453342 464.606084 290.653675 465.271735 281.319298 475.427234 271.984922 485.582733 272.650573 501.382398 282.806071 510.716774L464.247573 677.487844Z" p-id="2085" fill="#009900"></path><path d="M1024 512C1024 229.230208 794.769792 0 512 0 229.230208 0 0 229.230208 0 512 0 794.769792 229.230208 1024 512 1024 629.410831 1024 740.826187 984.331046 830.768465 912.686662 841.557579 904.092491 843.33693 888.379234 834.742758 877.590121 826.148587 866.801009 810.43533 865.021658 799.646219 873.615827 718.470035 938.277495 618.001779 974.048781 512 974.048781 256.817504 974.048781 49.951219 767.182496 49.951219 512 49.951219 256.817504 256.817504 49.951219 512 49.951219 767.182496 49.951219 974.048781 256.817504 974.048781 512 974.048781 599.492834 949.714859 683.336764 904.470807 755.960693 897.177109 767.668243 900.755245 783.071797 912.462793 790.365493 924.170342 797.659191 939.573897 794.081058 946.867595 782.373508 997.013826 701.880796 1024 608.898379 1024 512Z" p-id="2086" fill="#009900"></path></svg>
    <h2>恭喜，支付成功</h2>
    <p style="color:#999">感谢您的购买，如遇到问题请联系客服人员 '.$contact.'</p>
    <p><a href="'.$url.'" class="btn btn-xs btn-success">返回店铺</a> <a href="http://wpa.qq.com/msgrd?v=3&uin=450245869&site=qq&menu=yes" class="btn btn-xs btn-danger" target="_blank">投诉订单</a></p>
    </div>';
    ?>
    <div style="height:10px;background:#f7f7f7"></div>
    <div style="padding:50px">
    <?php
            echo '<div><img src="template/s1/static/img/order.png" style="height:20px;margin-right:10px;vertical-align:top;"><span style="color:#4A30DB;font-weight:bold;">订单信息</span></div>
            <div style="font-size:14px;margin-top:20px;margin-bottom:20px;color:#999;line-height:20px">
                    商品名称：'.$O["O_title"].'<br>
                    商品价格：'.$O["O_price"].'元<br>
                    购买数量：'.$O["O_num"].'件<br>
                    购买时间：'.$O["O_time"].'<br>
                    订单编号：'.$O["O_no"].'<br>
                    联系方式：'.$O["O_address"].'</div>';
            
            echo '<div><img src="template/s1/static/img/product.png" style="height:20px;margin-right:10px;vertical-align:top;"><span style="color:#4A30DB;font-weight:bold;">发货内容</span></div><div style="font-size:14px;margin-top:20px;color:#999;margin-bottom:20px;">'.str_replace("||","<br>",$O["O_content"]).'</div>';
            
            echo '<div><img src="template/s1/static/img/intro.png" style="height:20px;margin-right:10px;vertical-align:top;"><span style="color:#4A30DB;font-weight:bold;">使用方法</span></div><div style="font-size:14px;margin-top:20px;color:#999">'.str_replace("\r\n","<br>",htmlspecialchars($P["P_use"])).'</div>';
    ?>
</div>
    </div>
</body>
</html>