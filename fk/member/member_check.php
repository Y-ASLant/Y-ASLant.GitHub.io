<?php 
if ($_SESSION["M_pwd"]=="" || $_SESSION["M_id"]=="" || $_SESSION["M_email"]==""){
	$_SESSION["M_email"] = "";
	$_SESSION["M_id"] = "";
	$_SESSION["M_pwd"] = "";
	die("<script>window.location.href='../login.php'</script>");
}else{
	$M_id=$_SESSION["M_id"];
	$M=getrs("Select * from sl_member where M_id=$M_id and M_email='".$_SESSION["M_email"]."' and M_pwd='".$_SESSION["M_pwd"]."'");
	if($M!=""){
		$M_money=$M["M_money"];
		$M_pid=$M["M_pid"];
		$M_pkey=$M["M_pkey"];

		$M_alipayon=$M["M_alipayon"];
		$M_wxpayon=$M["M_wxpayon"];

		$M_email=$M["M_email"];
		$M_qq=$M["M_qq"];
		$M_wechat=$M["M_wechat"];
		$M_wechatcode=$M["M_wechatcode"];
		$M_maincontact=$M["M_maincontact"];
		$M_mobile=$M["M_mobile"];
		$M_seller=$M["M_seller"];
		$M_domain=$M["M_domain"];
		
		$M_webtitle=$M["M_webtitle"];
		$M_logo=$M["M_logo"];
		$M_ico=$M["M_ico"];
		$M_notice=$M["M_notice"];
		$M_keyword=$M["M_keyword"];
		$M_description=$M["M_description"];
		$M_shopt=$M["M_shopt"];
		$domain=$_SERVER["HTTP_HOST"];
		$P_idx=getrs("select * from sl_product where P_mid=$M_id and P_sh=1 and P_del=0 order by P_order asc,P_id desc","P_id");
		if($C_html==1){
		    $url="../shop/".$P_idx."?show=none";
		}else{
		    $url="../shop/?id=".$P_idx."&show=none";
		}
		if($M_seller==0 && $_SERVER['PHP_SELF']!="/member/seller.php" && $_SERVER['PHP_SELF']!="/member/pay.php"){
            header("location:seller.php");
        }

	}else{
		$_SESSION["M_login"] = "";
    	$_SESSION["M_id"] = "";
    	$_SESSION["M_pwd"] = "";
    	$_SESSION["M_pwdcode"] = "";
		die("<script>alert('登录状态失效，请重新登录！');window.location.href='../login.php'</script>");
	}
}
?>