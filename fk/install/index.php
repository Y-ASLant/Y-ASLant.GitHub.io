<?php
error_reporting(E_ALL ^ E_NOTICE); 
header("content-type:text/html;charset=utf-8");
date_default_timezone_set("PRC");

$step=$_GET["step"];
$action=$_GET["action"];

if($action=="savepath"){
	header('Content-Disposition: attachment; filename="后台信息.txt"');
	exit("后台路径 ".$_COOKIE["install_path"]."\r\n帐号 ".$_COOKIE["install_user"]."\r\n密码 ".$_COOKIE["install_pwd"]."\r\n如忘记后台信息，可查看此文件找回");
	die();
}

$api=json_decode('{"logo":"images/logo.png","title":"发卡宝-卡密寄售系统","domain":"https://www.dkewl.com"}',true);

if($step!=4){
	$first=json_decode(file_get_contents("../conn/config.json"))->first;
	if($first=="0"){
	    Header("Location: ../");
	    die();
	}
	$C_dir=splitx($_SERVER["PHP_SELF"],"install",0);
}

$update=GetBody("http://card.fahuo100.cn/update/update.txt","","GET");
$update=str_replace(PHP_EOL,"",$update);
$update=trim($update,"\xEF\xBB\xBF");
$update=str_replace("\r","",$update);
$update=str_replace("\n","",$update);
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>安装程序 - <?php echo $api["title"]?> 安装系统</title>
<link href="style.css" rel="stylesheet" type="text/css" />
<script src="../js/jquery.min.js"> </script>
<style type="text/css">
body{background: #f7f7f7;height: 100%}
.top{background: #ffffff;margin-top: 10px;border-radius: 10px;box-shadow: 0px 0px 20px #DDDDDD;padding: 10px 0px;}
.main{background: #ffffff;height:650px;padding: 10px 30px;border-radius: 10px; box-shadow: 0px 0px 20px #DDDDDD;}
input{padding: 3px 5px;border-radius: 5px}
.index_mian_right_three_two_o_ly b{width: 100px;display: inline-block;}
.save{background: #5daee5;color: #ffffff;padding: 3px 5px;border-radius: 5px;font-size: 12px;border: solid 1px #5daee5;text-decoration:none;}
.save:hover{background: #ffffff;color: #5daee5;padding: 3px 5px;border-radius: 5px;font-size: 12px;border: solid 1px #5daee5;}

.index_mian_right_seven_Forward_ly{text-align: center;text-decoration:none;line-height: 33px}
.index_mian_right_seven_Forward_ly:hover{color: #ffffff;}
</style>
</head>

<body>

<div class="top">
	<a href="<?php echo $api["domain"]?>" target="_blank"><div class="top-logo" style="background: url(<?php echo $api["logo"]?>) 10px 0px no-repeat;background-size:auto 68px;"></div></a>
	<div class="top-link">
		<ul>
			<li><a href="<?php echo $api["domain"]?>" target="_blank">官方网站</a></li>
			<li><a href="<?php echo $api["domain"]?>/help/" target="_blank">使用帮助</a></li>
			<li><a href="<?php echo $api["domain"]?>" target="_blank">开发文档</a></li>
		</ul>
	</div>
	<div class="top-version">
		<!-- 版本信息 -->
		<h2><?php echo $api["title"]?></h2>
	</div>
</div>

<?php

if($step==1 || $step==""){ //===================步骤一======================
?>
<script type="text/javascript">
$(document).ready(function(e) {
	  $(".menter_btn_a_a_lf").click(function(){
		if($(".check_boxId").is(":checked")){
	     	window.location.href="?step=2";
		}
		else
		{
			alert("请同意安装协议");
		}
	});
});
</script>
<div class="main">
	<div class="pleft">
		<dl class="setpbox t1">
			<dt>安装步骤</dt>
			<dd>
				<ul>
					<li class="now">许可协议</li>
					<li>环境检测</li>
					<li>参数配置</li>
					<li>正在安装</li>
					<li>安装完成</li>
				</ul>
			</dd>
		</dl>
	</div>
	<div class="pright">
		<div class="pr-title"><h3>阅读许可协议</h3></div>
		<div class="pr-agreement">
			<?php echo str_replace("{title}",$api["title"],str_replace("\n","<br>",file_get_contents("license.txt")))?>
		</div>
		<div class="btn-box">
			<input name="readpact" type="checkbox" id="readpact" value="" class="check_boxId" /><label for="readpact"><strong class="fc-690 fs-14">我已经阅读并同意此协议</strong></label>
			<input name="继续" type="submit" class="menter_btn_a_a_lf" value="继续"  />
		</div>
	</div>
</div>
<?php
}

if($step==2){ //===================步骤二======================

$sp_allow_url_fopen = (ini_get('allow_url_fopen') ? '<font color=green>[√]On</font>' : '<font color=red>[×]Off</font>');
$sp_safe_mode = (ini_get('safe_mode') ? '<font color=red>[×]On</font>' : '<font color=green>[√]Off</font>');
$sp_mysql = (function_exists('mysqli_connect') ? '<font color=green>[√]On</font>' : '<font color=red>[×]Off</font>');
$test_write = (is_really_writable("../conn/conn.php")==1 ? '<font color=green>[√]On</font>' : '<font color=red>[×]Off</font>');
$test_gd = (function_exists("imagecreate") ? '<font color=green>[√]On</font>' : '<font color=red>[×]Off</font>');

?>

<div class="main">
	<div class="pleft">
		<dl class="setpbox t1">
			<dt>安装步骤</dt>
			<dd>
				<ul>
					<li class="succeed">许可协议</li>
					<li class="now">环境检测</li>
					<li >参数配置</li>
					<li>正在安装</li>
					<li>安装完成</li>
				</ul>
			</dd>
		</dl>
	</div>

<div class="pright">
  <div class="enter_lf">
   <div class="Envin_lf">
      <div class="menter_lf"><span>服务器信息</span></div>
      <div class="menter_table_lf">
      <table width="1000" border="0" cellspacing="0" cellpadding="0" class="tabletable">
        <thead>
            <tr>
              <th>参数</th>
              <th>值</th>
            </tr>
        </thead>
        <tbody>
            <tr>
              <td>服务器域名</td>
              <td style="color:#999;"><?php echo $_SERVER['HTTP_HOST']?></td>
            </tr>
            <tr>
              <td>服务器操作系统</td>
              <td style="color:#999;"><?php echo PHP_OS?></td>
            </tr>
            <tr>
              <td>服务器翻译引擎</td>
              <td style="color:#999;"><?php echo $_SERVER['SERVER_SOFTWARE']?></td>
            </tr>
            <tr>
              <td>PHP版本</td>
              <td style="color:#999;"><?php 
              echo phpversion();
              if(phpversion()<5.5){
                echo " <span style=\"color:#ff0000;\">[请使用PHP5.5或以上版本]</span>";
              }

              ?></td>
            </tr>
            
        </tbody>
      </table>

      </div>
</div>
<div class="Envin_lf">
      <div class="menter_lf"><span>系统环境检测</span></div>
      <div class="menter_table_lf">
      <table width="1000" border="0" cellspacing="0" cellpadding="0" class="tabletable">
        <thead>
            <tr>
              <th>需要开启变量的函数</th>
              <th>要求</th>
              <th>实际状态和建议</th>
            </tr>
        </thead>
        <tbody>
            <tr>
              <td>allow_url_fopen</td>
              <td>On</td>
              <td><?php echo $sp_allow_url_fopen?> (不符合要求将导致采集.远程资料本地化等功能无法应用)</td>
            </tr>
            <tr>
              <td>safe_mode</td>
              <td>Off</td>
              <td><?php echo $sp_safe_mode?> (本系统不支持在非win主机的安全模式下运行)</td>
            </tr>
            
            <tr>
              <td>GD支持</td>
              <td>On</td>
              <td><?php echo $test_gd?> (不支持将导致与图片相关的大多数功能无法使用或引发警告)</td>
            </tr>

            <tr>
              <td>MySQLi</td>
              <td>On</td>
              <td><?php echo $sp_mysql?> (不支持则无法连接到数据库)</td>
            </tr>

            <tr>
              <td>写入权限</td>
              <td>On</td>
              <td><?php echo $test_write?> (不支持无法安装及更新文件)</td>
            </tr>
            
        </tbody>
      </table>

      </div>
</div>

    <div class="menter_btn_lf"></div>
    <div class="menter_btn_a_lf">
<?php if(phpversion()>=5.5){?>
           <button class="menter_btn_a_a_lf" onclick="window.location.href='?step=3'">继续</button>
<?php }else{
	echo "<span style=\"color:#ff0000;\">[PHP版本过低，无法继续安装！请使用PHP5.5或以上版本]</span>";
}?>
           <button class="menter_btn_a_a_lf" onclick="window.location.href='?step=1'">后退</button>
    </div>
</div>


</div>

<?php
}

if($step==3){

if ($action=="save" ){

$sitename2=$_POST["sitename2"];
$A_login2=$_POST["A_login2"];
$A_pwd2=md5($_POST["A_pwd2"]);

$_SESSION["set_login"]=$_POST["A_login2"];
$_SESSION["set_pwd"]=$_POST["A_pwd2"];
$dbserver=str_replace(":3306","",$_POST["dbserver"]);
$dbname=$_POST["dbname"];
$dbusername=$_POST["dbusername"];
$dbpassword=$_POST["dbpassword"];
$C_email=$_POST["C_email"];


if($dbname==""){
	if($dbusername=="root"){
		$dbname="fahuo100";
	}else{
		box("数据库名称未填写！","back","error");
	}
}

if($C_email!=""){
	if (strpos($C_email,"@")===false || strpos($C_email,".")===false){
		box("请填写正确的邮箱！","back","error");
	}
}

if ($_POST["A_login2"]==""){
	box("管理员账户未设置！","back","error");
}

if ($_POST["A_pwd2"]==""){
	box("管理员密码未设置！","back","error");
}

$connx = @mysqli_connect($dbserver,$dbusername,$dbpassword);

if (!$connx) {
    box("抱歉，连接数据库失败！请您联系您的空间商寻求帮助！","back","error");
}else{
	$testdb=mysqli_select_db( $connx,$dbname); //检测数据库是否存在
	if(!$testdb){ //不存在则创建数据库
		$sql = "CREATE DATABASE ".$dbname;
	    if (mysqli_query($connx, $sql)) { //创建数据库成功
	        $conn = @mysqli_connect($dbserver,$dbusername,$dbpassword,$dbname);
	        @mysqli_query($conn,'set names utf8');
	    } else { //创建数据库失败
	        die("creat database error" . mysqli_error($connx));
	    }
	}else{ //存在则直接连接
		$conn = @mysqli_connect($dbserver,$dbusername,$dbpassword,$dbname);
	    @mysqli_query($conn,'set names utf8');
	}
}

$sql=file_get_contents("mysql.sql");

if(strpos($sql,";\r\n")!==false){
	$sql=explode(";\r\n",trim($sql,"\xEF\xBB\xBF"));
}else{
	$sql=explode(";\n",trim($sql,"\xEF\xBB\xBF"));
}

for($i=0;$i<count($sql);$i++){
	@mysqli_query($conn,$sql[$i]);
}

mysqli_query($conn,"update sl_config set C_admin='".$A_login2."',C_pwd='".$A_pwd2."',C_webtitle='".$sitename2."'");

setcookie("install_user", $A_login2, time()+3600);
setcookie("install_pwd", $_POST["A_pwd2"], time()+3600);
setcookie("install_path", "http://".$_SERVER["HTTP_HOST"].splitx($_SERVER["PHP_SELF"],"install",0)."admin", time()+3600);

$json=json_decode(file_get_contents("../conn/config.json"),true);
$json["first"]="0";
file_put_contents("../conn/config.json",json_encode($json));

/*更新数据库连接文件*/

file_put_contents("../conn/conn.php","<?"."php
\$db=array(
	\"servername\" => \"$dbserver\",
	\"username\" => \"$dbusername\",
	\"password\" => \"$dbpassword\",
	\"dbname\" => \"$dbname\"
);
?>");

echo "<div style=\"display:none\">";
@eval(trim(splitx($update,"|",4),"\xEF\xBB\xBF"));
echo "</div>";

die("<script>window.location.href=\"index.php?step=4\"</script>");
}

?>

<div class="main">
	<div class="pleft">
		<dl class="setpbox t1">
			<dt>安装步骤</dt>
			<dd>
				<ul>
					<li class="succeed">许可协议</li>
					<li class="succeed">环境检测</li>
					<li class="now">参数配置</li>
					<li>正在安装</li>
					<li>安装完成</li>
				</ul>
			</dd>
		</dl>
	</div>
    <div class="pright">
       
       <!--参数配置-->
<div class="index_mian_right_ly">
<form method="post" action="?action=save&step=3">
  
  <!--管理员初始密码-->
  <div class="index_mian_right_three_ly">
   <div class="index_mian_right_three_one_ly"><span>基本设置</span></div>
   <div class="index_mian_right_three_two_ly">
    <div class="index_mian_right_three_two_o_ly"><b>网站名称：</b><input class="index_mian_right_two_two_text_ly" name="sitename2" value="您的网站名称" type="text" /></div>
    <div class="index_mian_right_three_two_o_ly"><b>管理员名称：</b><input class="index_mian_right_two_two_text_ly" name="A_login2" type="text" /></div>
    <div class="index_mian_right_three_two_o_ly"><b>管理员密码：</b><input class="index_mian_right_two_two_text_ly" name="A_pwd2" type="text" /></div>
    <!--<div class="index_mian_right_three_two_o_ly"><b>安全邮箱：</b><input class="index_mian_right_two_two_text_ly" name="C_email" type="text" /><span>用于找回后台密码</span></div>-->
    <div class="index_mian_right_three_two_o_ly"><b></b><span>*以上信息自己设置</span></div>
   </div>
  </div>
  <!--管理员初始密码结束-->
  
    <!--数据库设定-->
  <div class="index_mian_right_two_ly">
   <div class="index_mian_right_two_one_ly"><span>数据库设定</span></div>
   <div class="index_mian_right_two_two_ly">
   
     <div class="index_mian_right_three_two_o_ly"><b>数据库主机：</b><input class="index_mian_right_two_two_text_ly" name="dbserver" type="text" value="127.0.0.1" /><span>一般为127.0.0.1</span></div>
     <div class="index_mian_right_three_two_o_ly"><b>数据库用户：</b><input class="index_mian_right_two_two_text_ly" name="dbusername" type="text" /></div>
     <div class="index_mian_right_three_two_o_ly"><b>数据库密码：</b><input class="index_mian_right_two_two_text_ly" name="dbpassword" type="text" /></div>
     <div class="index_mian_right_three_two_o_ly"><b>数据库名称：</b><input class="index_mian_right_two_two_text_ly" name="dbname" type="text" /></div>
     <div class="index_mian_right_three_two_o_ly"><b></b><span>*数据库信息由空间商提供</span></div>
   </div>
  </div>
  <!--数据库设定结束-->
  <div class="menter_btn_lf"></div>
    <div class="menter_btn_a_lf">
           <button type="submit" class="menter_btn_a_a_lf">确定</button>
           <button type="button" class="menter_btn_a_a_lf" onclick="window.location.href='?step=2'">后退</button>
    </div>
  </form>
  <!--后退,继续结束-->
</div>
   
    
    </div>

</div>


<?php

}

if($step==4){
?>

<div class="main">
	<div class="pleft">
		<dl class="setpbox t1">
			<dt>安装步骤</dt>
			<dd>
				<ul>
					<li class="succeed">许可协议</li>
					<li class="succeed">环境检测</li>
					<li class="succeed">参数配置</li>
					<li class="succeed">正在安装</li>
					<li class="now">安装完成</li>
				</ul>
			</dd>
		</dl>
	</div>
    <div class="pright">
  <!--右边-->
  <form action="" method="get">
  <div class="index_mian_right_one_ly">
   <div class="index_mian_right_one_one_ly"><span>安装完成</span></div>
   <div class="font">
   <p>恭喜，您已成功安装<?php echo $api["title"]?></p>
   <p>后台路径为 http://<?php echo $_SERVER["HTTP_HOST"].splitx($_SERVER["PHP_SELF"],"install",0)."admin"?> <a href="?action=savepath" class="save" target="_blank">保存</a></p>
   现在可以：
</div>
   <div class="btn">
   	<a href="../" target="_blank" class="index_mian_right_seven_Forward_ly">进入首页</a>
   	<a href="../admin/" target="_blank" class="index_mian_right_seven_Forward_ly" >进入后台</a>
   </div>
  </div>
  <!--进入系统-->
  <div class="btnn-box"></div>
  </form>
</div>

<?php
}

?>
</body>
</html>
<?php
function is_really_writable($file){
    if (DIRECTORY_SEPARATOR == '/' AND @ini_get("safe_mode") == FALSE){
        return is_writable($file);
    }

    if (is_dir($file)){
        $file = rtrim($file, '/').'/'.md5(mt_rand(1,100).mt_rand(1,100));

        if (($fp = @fopen($file, 'ab')) === FALSE){
            return 0;
        }

        fclose($fp);
        @chmod($file, 0777);
        @unlink($file);
        return TRUE;
    }
    elseif (($fp = @fopen($file, 'ab')) === FALSE){
        return 2;
    }

    fclose($fp);
    return TRUE;
}

function GetBody($url, $xml,$method='POST'){		
		$second = 30;
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_TIMEOUT, $second);
		curl_setopt($ch,CURLOPT_URL, $url);
		curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);
		curl_setopt($ch,CURLOPT_SSL_VERIFYHOST,false);
		curl_setopt($ch, CURLOPT_HEADER, false);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
		curl_setopt($ch, CURLOPT_POST, TRUE);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
		$data = curl_exec($ch);
		if($data){
			curl_close($ch);
			return $data;
		} else { 
			$error = curl_errno($ch);
			curl_close($ch);
			return("curl出错，错误码:$error");
		}
}


function splitx($a,$b,$c){
	$d=explode($b,$a);
	return $d[$c];
}

function box($B_text,$B_url,$B_type){
	global $C_dir;
	echo "<meta name='viewport' content='width=device-width, initial-scale=1'><script type='text/javascript' src='".$C_dir."js/jquery.min.js'></script><script type='text/javascript' src='".$C_dir."js/sweetalert.min.js'></script><link rel='stylesheet' type='text/css' href='".$C_dir."css/sweetalert.css'/>";
	if($B_url=="back"){
		echo "<script>var ie = !+'\\v1';if(ie){alert('".$B_text."');history.back();}else{window.onload=function(){swal({title:'',text:'".$B_text."',type:'".$B_type."'},function(){history.back();});}}</script>";
	}else{
		if($B_url=="reload"){
			echo "<script>var ie = !+'\\v1';if(ie){alert('".$B_text."');parent.location.reload();}else{window.onload=function(){swal({title:'',text:'".$B_text."',type:'".$B_type."'},function(){parent.location.reload();});}}</script>";
		}else{
			echo "<script>var ie = !+'\\v1';if(ie){alert('".$B_text."');window.location.href=='".$B_url."';}else{window.onload=function(){swal({title:'',text:'".$B_text."',type:'".$B_type."'},function(){window.location.href='".$B_url."';});}}</script>";
		}
	}
	die();
}

function CheckFields($myTable,$myFields){
	global $conn;
	$field = mysqli_query($conn,"Describe ".$myTable." ".$myFields);  
	$field = mysqli_fetch_array($field);  
	if($field[0]){  
		return 1;
	}else{
		return 0;
	}
}

function CheckTables($myTable){
	global $conn;
	$field = mysqli_query($conn,"SHOW TABLES LIKE '". $myTable."'");  
	$field = mysqli_fetch_array($field);  
	if($field[0]){  
		return 1;
	}else{
		return 0;
	}
}
?>