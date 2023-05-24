<?php
$url = 'http://jqr.evv1.com/api/api.php'; // 外部API的URL
$data = file_get_contents($url); // 获取API返回的数据
$result = json_decode($data, true); // 将返回的JSON数据转换为PHP数组

if ($result['result'] === 0) { // 假设这里判断返回的结果是否为0
    // 执行你需要执行的操作..
  
header( "Access-Control-Allow-Origin: *" );
header( "Content-Type: application/json" );
$context = json_decode( $_POST['context'] ?: "[]" ) ?: [];
// 初始化模型参数
$postData = [
    "model" => "gpt-3.5-turbo",
    "messages" => [],
];
if( !empty( $context ) ) {
    $context = array_slice( $context, -5 );
    foreach( $context as $message ) {
        $postData['messages'][] = ['role' => 'user', 'content' => str_replace("\n", "\\n", $message[0])];
        $postData['messages'][] = ['role' => 'assistant', 'content' => str_replace("\n", "\\n", $message[1])];
    }
}
$postData['messages'][] = ['role' => 'user', 'content' => $_POST['message']];

$ch = curl_init();
$OPENAI_API_KEY = "sfgz";

$headers  = [
    'Accept: application/json',
    'Content-Type: application/json',
    'Authorization: Bearer ' . $OPENAI_API_KEY . ''
];

$postData = json_encode($postData);

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($ch, CURLOPT_URL, 'http://mm1.ltd/chatgpt.php');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);

$result = curl_exec($ch);
$complete = json_decode($result);

if( isset( $complete->choices[0]->message->content ) ) {
    $text = trim(str_replace( "\\n", "\n", $complete->choices[0]->message->content ),"\n");
} elseif( isset( $complete->error->message ) ) {
    $text = "服务器返回错误信息：".$complete->error->message;
} else {
    $text = "服务器超时或返回异常消息。";
}

echo json_encode( [
     "message" => $text,
     "raw_message" => $text,
     "status" => "success",
 ] );

$content2 = $_SERVER["REMOTE_ADDR"]." | ".date("Y-m-d H:i:s")."\n";
$content2 .= "Q:".$_POST['message']."\nA:".$text."\n----------------\n";
$myfile = fopen(__DIR__ . "/chat.txt", "a") or die("Writing file failed.");
fwrite($myfile, $content2);
fclose($myfile);


} else {
    // 不执行操作，例如输出提示信息或重定向到其他页面
    echo "<script>alert(' 网站未授权 www.2ym.cn ');</script>";
    
}
?>


