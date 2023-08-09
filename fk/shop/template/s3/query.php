<?php
$action=$_GET["action"];
if($action=="query"){
    $no=t(trim($_POST["no"]));
    if($no!=""){
        $O=getrs("select * from sl_orders where (O_no='$no' or O_address='$no') and O_state=1");
        if($O==""){
            die("{\"msg\":\"未查询到相关订单，请重新输入\"}");
        }else{
            $O["msg"]="success";
            $O["O_content"]=str_replace("||","<br>",$O["O_content"]);
            die(json_encode($O));
        }
    }else{
        die("{\"msg\":\"请输入订单号或者预留的联系方式\"}");
    }
}
?>

<html data-dpr="1" style="font-size: 39px;">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">
		<title>查询订单</title>
		<meta name="keywords" content="发卡平台,自动发卡平台,发卡网,自动发卡,发卡网站,卡密自动交易,卡密自动发货,虚拟商品自动发货,卡密寄售,自动售卡,卡密自动售卖">
		<meta name="description" content="7支付发卡平台">
		<link rel="shortcut icon" type="image/x-icon" href="template/s3/static/favicon.ico">
		<link href="template/s3/static/css/main.css" rel="stylesheet">
		<link href="template/s3/static/css/message.css" rel="stylesheet">
	</head>
	<body style="font-size: 12px;background: #f7f7f7">
		<div id="app" style="max-width: 880px;margin:0 auto;background:#fff">
			<div id="checking_order" class="Router" style="position:relative">
				<div class="checking_order_hide">
					<div class="back" onclick="history.back();">
						<img src="template/s3/static/img/back.png">
					</div>
					<div class="tous">
						<img src="template/s3/static/img/after.png">
						<span>申请售后</span>
					</div>
				</div>
				
				<div class="suoding">
				    <form id="form">
					<img src="template/s3/static/img/card.png" class="dasuo_img">
					<div class="suoding_text_box">
						<span>查询订单卡密</span>
						<span>填写下单时留的联系方式,或使用"card"开头的订单号查询</span>
					</div>
					<div class="input_box">
						<img src="template/s3/static/img/order.png">
						<input type="text" name="no" placeholder="输入预留联系方式或订单号(以'card'开头)">
					</div>
					<div class="qued_btn" onclick="query()">
						查询
					</div>
					</form>
				</div>
				
				<div class="wxtihs">
					<div class="wxtihs_hide">
						<img src="template/s3/static/img/warning.png">
						<span id="fahuo_title">温馨提示</span>
					</div>
					<div class="wxtihs_text" id="fahuo">
						1.建议输入下单时的留的联系方式查询(30天内可查到)
						<br>
						2.使用订单号(以"card"开头，可在支付账单找到)查询
					</div>

				</div>

			</div>
			
		</div>
		<div style="font-size:12px;margin-top:20px;text-align:center;color:#999">
		<div><a href="http://beian.miit.gov.cn/" target="_blank"><?php echo $C_beian?></a></div>
        <div><?php echo $C_copyright?></div>
                            
		</div>
		<script src="template/s3/static/js/jquery.min.js"></script>
        <script src="template/s3/static/js/message.min.js"></script>
        <script src="template/s3/static/js/main.js"></script>
	</body>
</html>