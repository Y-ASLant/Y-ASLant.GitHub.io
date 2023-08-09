<?PHP
session_start();
header("Content-type:text/html;charset=utf-8");
date_default_timezone_set('PRC');
include "../include/common.php";
 $user = ($_POST["user"]);
 $pass = ($_POST["pass"]);
 $time = date("Y:m:d H:i:s",time());
 $ip = $_SERVER["SERVER_ADDR"];
 if ($user==$conf['admin_user']&&$pass==$conf['admin_mima']&&$_POST['code']==$_SESSION["code"]) {
  $_SESSION["user"] = $user;
  $_SESSION["pass"] = $pass;
  $_SESSION["time"] = $time;
  $_SESSION["ip"] = $ip;
  echo '<script>alert("登录成功!!!");window.location.href="./index.php";</script>';
 }else {
       echo '<script>alert("登录失败,账号或密码或验证码错误!!!");window.location.href="./login.php";</script>';
}
?>
