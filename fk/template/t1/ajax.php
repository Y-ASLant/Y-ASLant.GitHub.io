<?php
require '../../conn/conn.php';
require '../../conn/function.php';

$action=$_GET["action"];
switch($action){
    case "query":
        $no=t(trim($_POST["no"]));
        if($no!=""){
            $O=getrs("select * from sl_orders where (O_no='$no' or O_address='$no') and O_state=1");
            if($O==""){
                die("{\"msg\":\"未查询到相关订单，请重新输入！\"}");
            }else{
                $O["msg"]="success";
                $O["O_content"]=str_replace("||","<br>",$O["O_content"]);
                die(json_encode($O));
            }
        }else{
            die("{\"msg\":\"请输入订单号或者预留的联系方式！\"}");
        }
    break;
    case "news":
        $id=intval($_GET["id"]);
        if($id==0){
            $N=getrs("select * from sl_news order by N_id desc");
        }else{
            $N=getrs("select * from sl_news where N_id=$id");
        }
        $N["N_content"]=str_replace("\r\n","<br>",$N["N_content"]);
        die(json_encode($N));
    break;
    case "news_list":
    die(json_encode(getlist("select * from sl_news order by N_id desc")));
    break;
}

?>