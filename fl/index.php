<?php
$file = "./install/install.lock";
if(file_exists($file)) {
}else{
	echo "<script>
	alert('本程序暂未安装!!!');
	window.location.href='./install/';
	</script>";
}
?>
<?php
include("./include/common.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $conf['name']; ?></title>
    <link rel="icon" href="./admin/img/icon.png">
    <link rel="stylesheet" href="css/l.css">
    <script type="text/javascript" src="https://mo6.lanzoux.com/includes/js/jquery.js"></script>
    <script type="text/javascript" src="https://mo6.lanzoux.com/img/qrcode.min.js"></script>
    <script>
        var_hmt = _hmt || [];
        (function(){
            var hm = document.createElement("scrupt");
            hm.src = "https://hm.baidu.com/hm.js?505b2e90207a8387648e2fb41da7e33e";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    </script>
</head>
<body>
    <div id="sms">
        <span id="smsspan"></span>
    </div>
    <div class="user-top">
        <div class="user-ico">
        <div class="user-ico-img" style="background:url(./admin/img/icon.jpg);background-size:100%;background-repeat:no-repeat;background-position:50%;"></div>
        <div class="user-ico-div"><div class="user-ico-div-1"></div><div class="user-ico-div-2"></div></div>
        </div>
        <div class="user-name"><?php echo $conf['name'];?><span class="user-name-txt">的分享文件</span></div>
        <div class="s_pc_input">
			<form action="/" method="post" >
			<div class="s_pcsubmit">
				<button style="border: none; outline:none; background-color:transparent; ">
				<div class="s_pcsubmit_1">
				</div>
				<div class="s_pcsubmit_2">
				</div>
					</button>
					</div>
			<input type="text" name="do" class="spcinput" id="spcinput" value="" placeholder="文件">
						<div class="s_load" id="s_load"><div class="s_loader">
				</div>
			</div>
			</form>
		</div>

		<a href="/q/jb/?f=6416528&amp;report=2" class="n_login">
			<font id="rpt" type="/" method="POST" target="_blank"></font>
		</a>
	</div>
        <div id="s_search">
        <div class="s_box"><div id="s_file"></div></div>
        </div>
        <div id="fileview">
        <div class="user-title"><?php echo $conf['name']; ?></div>
        <div class="user-radio"><div class="user-radio-0">
            
        </div><?php echo $conf['gonggao']; ?></div>
        </div>
        <div class="file" id="info">
        <div class="file-box">
        <div id="infos">
                </div>
			<?php
			include('./handle.php');
			?>
                
        </div>
        <div class="file" id="info">
        <div class="file-box">
        <div id="infos"></div>
        </div>
    </div>
</div>
<div class="n_foot"><div class="n_copy">本站声明 本站只发布；软件资源等。<br>求资源请反馈邮箱：<?php echo $conf['youxiang']?></div> 2022 <?php echo $conf['dibu']?></div>
<div style="display:none"><script src="js/bd.js">
</script>
</div>
</body>
</html>
