<?php


$url = 'https://vip.123pan.cn/1812053017/ASLant_SoftWare/';

$private_key = 'aslantycx123';

$uid = 1812053017;

$expire_time = time() + 30;   // 该签发的资源30s以后过期

$rand_value = rand(0, 100000); // 生成随机数

$parse_result = parse_url($url); // 解析 URL

$request_path = $parse_result["path"];

$sign = md5(sprintf("%s-%d-%d-%d-%s", $request_path, $expire_time, $rand_value, $uid, $private_key));

$wait = sprintf("%d-%d-%d-%s", $expire_time, $rand_value, $uid, $sign);

$result = $url . "?auth_key=" . $wait;

echo $result;


?>