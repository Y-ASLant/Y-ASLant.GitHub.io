<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$dirx=dirname(dirname(__FILE__))."/";

require $dirx.'/PHPMailer/Exception.php';
require $dirx.'/PHPMailer/PHPMailer.php';
require $dirx.'/PHPMailer/SMTP.php';

function sendmail($mailsubject,$body,$mailto){
	global $C_email,$C_smtp,$C_emailpwd;

	$smtpusermail   = $C_email;//发件人
	$smtppass       = $C_emailpwd;//发件邮箱密码
	$smtpserver     = $C_smtp;//发件smtp
	if(time()-intval($_SESSION["email_time"])>30){
		$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
		try {
		    //服务器配置
		    $mail->CharSet ="UTF-8";                     //设定邮件编码
		    $mail->SMTPDebug = 0;                        // 调试模式输出
		    $mail->isSMTP();                             // 使用SMTP
		    $mail->Host = $smtpserver;                // SMTP服务器
		    $mail->SMTPAuth = true;                      // 允许 SMTP 认证
		    $mail->Username = $smtpusermail;                // SMTP 用户名  即邮箱的用户名
		    $mail->Password = $smtppass;             // SMTP 密码  部分邮箱是授权码(例如163邮箱)
		    $mail->SMTPSecure = 'ssl';                    // 允许 TLS 或者ssl协议
		    $mail->Port = 465;                            // 服务器端口 25 或者465 具体要看邮箱服务器支持

		    $mail->setFrom($smtpusermail, $smtpusermail);  //发件人
		    $mail->addAddress($mailto, $mailto);  // 收件人
		    //$mail->addAddress('ellen@example.com');  // 可添加多个收件人
		    $mail->addReplyTo($smtpusermail, $smtpusermail); //回复的时候回复给哪个邮箱 建议和发件人一致
		    //$mail->addCC('cc@example.com');                    //抄送
		    //$mail->addBCC('bcc@example.com');                    //密送

		    //发送附件
		    // $mail->addAttachment('../xy.zip');         // 添加附件
		    // $mail->addAttachment('../thumb-1.jpg', 'new.jpg');    // 发送附件并且重命名

		    //Content
		    $mail->isHTML(true);                                  // 是否以HTML文档格式发送  发送后客户端可直接显示对应HTML内容
		    $mail->Subject = $mailsubject;
		    $mail->Body    = $body;
		    $mail->AltBody = '如果邮件客户端不支持HTML则显示此内容';
		    $mail->send();
		    $_SESSION["email_time"]=time();
		    return 'success';
		} catch (Exception $e) {
		    return '邮箱接口未正确配置: '. $mail->ErrorInfo;
		}
	}else{
		return "发送邮件过于频繁，请".(30-time()+intval($_SESSION["email_time"]))."秒后再试！";
	}
}
?>