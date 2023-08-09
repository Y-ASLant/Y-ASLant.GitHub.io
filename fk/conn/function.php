<?php
error_reporting(E_ALL ^ E_NOTICE); 
header("content-type:text/html;charset=utf-8");
session_start();
date_default_timezone_set("PRC");

$C=getrs("select * from sl_config");
$C_webtitle=$C["C_webtitle"];
$C_logo=$C["C_logo"];
$C_ico=$C["C_ico"];
$C_keyword=$C["C_keyword"];
$C_description=$C["C_description"];
$C_admin=$C["C_admin"];
$C_pwd=$C["C_pwd"];
$C_alipayon=$C["C_alipayon"];
$C_wxpayon=$C["C_wxpayon"];
$C_qq=$C["C_qq"];
$C_wechat=$C["C_wechat"];
$C_wechatcode=$C["C_wechatcode"];
$C_mobile=$C["C_mobile"];
$C_maincontact=$C["C_maincontact"];
$C_pid=$C["C_pid"];
$C_pkey=$C["C_pkey"];
$C_notice=$C["C_notice"];
$C_rate=$C["C_rate"];
$C_fee=$C["C_fee"];
$C_sh=$C["C_sh"];
$C_copyright=$C["C_copyright"];
$C_beian=$C["C_beian"];
$C_code=$C["C_code"];
$C_html=$C["C_html"];
$C_pay=$C["C_pay"];

$C_recieve=$C["C_recieve"];
$C_email=$C["C_email"];
$C_smtp=$C["C_smtp"];
$C_emailpwd=$C["C_emailpwd"];
$C_userid=$C["C_userid"];
$C_sms=$C["C_sms"];
$C_smspwd=$C["C_smspwd"];
$C_model=$C["C_model"];
$C_template=$C["C_template"];
$C_shopt=$C["C_shopt"];
$domain=$_SERVER['HTTP_HOST'];

function get_json_num($json,$key,$value){
    $json=json_decode($json,true);
    $j=0;
    for($i=0;$i<count($json);$i++){
        if($json[$i][$key]==$value){
            $j=$j+1;
        }
    }
    return $j;
}

function template($str){
    global $C_webtitle,$C_keyword,$C_description,$C_ico,$C_logo,$C_qq,$C_wechat,$C_copyright,$C_beian,$C_code,$C_html;
    $str=str_replace("[header]",file_get_contents("template/t1/header.html"),$str);
    $str=str_replace("[footer]",file_get_contents("template/t1/footer.html"),$str);
    $str=str_replace("[webtitle]",$C_webtitle,$str);
    $str=str_replace("[keyword]",$C_keyword,$str);
    $str=str_replace("[description]",$C_description,$str);
    $str=str_replace("[ico]",$C_ico,$str);
    $str=str_replace("[logo]",$C_logo,$str);
    $str=str_replace("[qq]",$C_qq,$str);
    $str=str_replace("[wechat]",$C_wechat,$str);
    $str=str_replace("[copyright]",$C_copyright,$str);
    $str=str_replace("[beian]",$C_beian,$str);
    $str=str_replace("[code]",$C_code,$str);
    if($C_html==1){
        $str=preg_replace("/\"\?type=(.*)\"/iU","\"$1.html\"",$str);
        $str=preg_replace("/\"\?type=(.*)&id=([0-9]*)\"/iU","\"$1-$2.html\"",$str);
    }
    return $str;
}

function getrs($sql,$value=""){
	global $db;
	$conn = mysqli_connect($db["servername"],$db["username"],$db["password"],$db["dbname"]);
	if (!$conn) {
    	die("数据库连接失败: " . mysqli_connect_error());
	}else{
		$result = mysqli_query($conn,$sql);
		$row = mysqli_fetch_assoc($result);
		if (mysqli_num_rows($result) > 0) {
			if($value==""){
				$getrs=$row;
			}else{
				$getrs=$row[$value];
			}
		}else{
			$getrs="";
		}
		mysqli_close($conn);
	}
	return $getrs;
}

function getlist($sql){
	global $db;
	$conn = mysqli_connect($db["servername"],$db["username"],$db["password"],$db["dbname"]);
	if (!$conn) {
    	die("数据库连接失败: " . mysqli_connect_error());
	}else{
		$result = mysqli_query($conn, $sql);
		$arr = array();  
		while($row = mysqli_fetch_array($result)) {
			$count=count($row);
			  for($i=0;$i<$count;$i++){ 
			    unset($row[$i]);
			  }   
		    array_push($arr,$row);
		} 
		$getlist=$arr;
		mysqli_close($conn);
	}
	return $getlist;
}

function sql($sql){
	global $db;
	$conn = mysqli_connect($db["servername"],$db["username"],$db["password"],$db["dbname"]);
	if (!$conn) {
    	die("数据库连接失败: " . mysqli_connect_error());
	}else{
		mysqli_query($conn, $sql);
		mysqli_close($conn);
	}
	return "success";
}

function removeDir($dirName) 
{ 
    if(! is_dir($dirName)) 
    { 
        return false; 
    } 
    $handle = @opendir($dirName); 
    while(($file = @readdir($handle)) !== false) 
    { 
        if($file != '.' && $file != '..') 
        { 
            $dir = $dirName . '/' . $file; 
            is_dir($dir) ? removeDir($dir) : @unlink($dir); 
        } 
    } 
    closedir($handle); 
      
    return rmdir($dirName) ; 
} 
function gethttp(){
    if (is_ssl()){
        $gethttp="https://";
    }else{
        $gethttp="http://";
    }
    return $gethttp;
}


function is_ssl() {
    global $config;
    if($config->https=="true"){
        return true;
    }else{
        if(isset($_SERVER['HTTPS']) && ('1' == $_SERVER['HTTPS'] || 'on' == strtolower($_SERVER['HTTPS']))){
            return true;
        }else{
            if(isset($_SERVER['SERVER_PORT']) && ('443' == $_SERVER['SERVER_PORT'] )) {
                return true;
            }else{
                if(isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && ('https' == $_SERVER['HTTP_X_FORWARDED_PROTO'] )) {
                    return true;
                }else{
                    if(isset($_SERVER['HTTP_FROM_HTTPS']) && ('on' == $_SERVER['HTTP_FROM_HTTPS'] )) {
                        return true;
                    }else{
                        return false;
                    }
                }
            }
        }
    }
}

function t($str){
	global $db;
	$conn = mysqli_connect($db["servername"],$db["username"],$db["password"],$db["dbname"]);
    $str=mysqli_real_escape_string($conn,$str);
    mysqli_close($conn);
    return $str;
}

function calculation($name){
	$a=rand(1,9);
	$b=rand(1,9);
	$s=rand(1,2);

	switch($s){
		case 1:
		$symbol="＋";
		$c=$a+$b;
		break;
		case 2:
		$symbol="×";
		$c=$a*$b;
		break;
	}

	$_SESSION["CmsCode"]=$c;
	return "<div style=\"background: #f7f7f7;text-align: center;padding: 8px;\">计算结果：".$a." ".$symbol." ".$b." = <input type=\"text\" style=\"width: 50px;height: 25px;\" name=\"".$name."\"></div>";
}
function splitx($a,$b,$c){
	$d=explode($b,$a);
	return $d[$c];
}

function box($B_text,$B_url,$B_type){
    if ($B_url=="back"){
    	echo "<script>alert('".$B_text."');history.back();</script>";
    }else{
    	echo "<script>alert('".$B_text."');window.location.href='".$B_url."';</script>";
    }
    die();
}

function GetBody($url, $xml,$method='POST'){    
    $second = 30;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_TIMEOUT, $second);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER,false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST,false);
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
      return false;
    }
}

function isMobile() {
  if (isset($_SERVER['HTTP_X_WAP_PROFILE'])) {
    return true;
  }
  
  if (isset($_SERVER['HTTP_USER_AGENT'])) {
    $clientkeywords = array('nokia','sony','ericsson','mot','samsung','htc','sgh','lg','sharp','sie-','philips','panasonic','alcatel','lenovo','iphone','ipod','blackberry','meizu','android','netfront','symbian','ucweb','windowsce','palm','operamini','operamobi','openwave','nexusone','cldc','midp','wap','mobile');
    if (preg_match("/(" . implode('|', $clientkeywords) . ")/i", strtolower($_SERVER['HTTP_USER_AGENT']))) {
      return true;
    }
  }

  if (isset($_SERVER['HTTP_VIA'])) {
    return stristr($_SERVER['HTTP_VIA'], "wap") ? true : false;
  }

  if (isset ($_SERVER['HTTP_ACCEPT'])) {
    if ((strpos($_SERVER['HTTP_ACCEPT'], 'vnd.wap.wml') !== false) && (strpos($_SERVER['HTTP_ACCEPT'], 'text/html') === false || (strpos($_SERVER['HTTP_ACCEPT'], 'vnd.wap.wml') < strpos($_SERVER['HTTP_ACCEPT'], 'text/html')))) {
      return true;
    }
  }
  return false;
}

function isWeixin() {
  if (strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false) {
    return true;
  } else {
    return false;
  }
}

function getip(){
    static $realip;
    if (isset($_SERVER)){
        if (isset($_SERVER["HTTP_X_FORWARDED_FOR"])){
            $realip = $_SERVER["HTTP_X_FORWARDED_FOR"];
        } else if (isset($_SERVER["HTTP_CLIENT_IP"])) {
            $realip = $_SERVER["HTTP_CLIENT_IP"];
        } else {
            $realip = $_SERVER["REMOTE_ADDR"];
        }
    } else {
        if (getenv("HTTP_X_FORWARDED_FOR")){
            $realip = getenv("HTTP_X_FORWARDED_FOR");
        } else if (getenv("HTTP_CLIENT_IP")) {
            $realip = getenv("HTTP_CLIENT_IP");
        } else {
            $realip = getenv("REMOTE_ADDR");
        }
    }
    if(filter_var($realip, FILTER_VALIDATE_IP)) {
    	return $realip;
    }else{
    	return "::1";
    }
}
function CheckFields($myTable,$myFields){
    global $db;
    $conn = mysqli_connect($db["servername"],$db["username"],$db["password"],$db["dbname"]);
    $field = mysqli_query($conn,"Describe ".$myTable." ".$myFields);  
    $field = mysqli_fetch_array($field);  
    if($field[0]){  
        return 1;
    }else{
        return 0;
    }
}

function CheckTables($myTable){
    global $db;
    $conn = mysqli_connect($db["servername"],$db["username"],$db["password"],$db["dbname"]);
    $field = mysqli_query($conn,"SHOW TABLES LIKE '". $myTable."'");  
    $field = mysqli_fetch_array($field);  
    if($field[0]){  
        return 1;
    }else{
        return 0;
    }
}
function gen_key($length,$type=1) { 
	switch ($type){
		case 1:
		$chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; 
		break;
		case 2:
		$chars = '0123456789'; 
		break;
		case 3:
		$chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
		break;
		case 4:
		$chars = 'abcdefghijklmnopqrstuvwxyz'; 
		break;
		default:
		$chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; 
	}

	$password = ''; 
	for ( $i = 0; $i < $length; $i++ ) { 
	$password .= $chars[ mt_rand(0, strlen($chars) - 1) ]; 
	} 
	return $password; 
} 
?>