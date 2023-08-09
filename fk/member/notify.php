<?php
require '../conn/conn.php';
require '../conn/function.php';

$json_string=file_get_contents("php://input");
file_put_contents("1.txt",$json_string);
$obj=json_decode($json_string);

$title = $obj->title;
$money = $obj->money;
$no = t($obj->no);
$tradeno = t($obj->tradeno);
$paytype = $obj->paytype;
$remark = $obj->remark;
$time = $obj->time;
$sign = $obj->sign;

$M_id=$remark;

if(strtolower(md5("money=".$money."&no=".$no."&paytype=".$paytype."&remark=".$remark."&time=".$time."&title=".$title."&tradeno=".$tradeno."&key=".$C_pkey))==strtolower($sign)){ 
    
    $row=getrs("select * from sl_list where L_no='".$tradeno."' and L_mid=$M_id");
	if($row=="") {
	    sql("update sl_member set M_money=M_money+$money where M_id=$M_id");
	    sql("insert into sl_list(L_time,L_title,L_money,L_mid,L_no) values('".date('Y-m-d H:i:s')."','账户充值',".$money.",".$M_id.",'".$tradeno."')");
	    echo "success";
	}else{
	    echo "fail";
	}
    
}else{
	echo "fail";
}
?>