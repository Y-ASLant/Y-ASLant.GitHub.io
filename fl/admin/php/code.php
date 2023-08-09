<?php
//必须至于顶部,多服务器端记录验证码信息，便于用户输入后做校验
session_start();
//默认返回的是黑色的照片
$image = imagecreatetruecolor(90, 30);
//将背景设置为白色的
$bgcolor = imagecolorallocate($image, 255, 255, 255);
//将白色铺满地图
imagefill($image, 0, 0, $bgcolor);
//空字符串，每循环一次，追加到字符串后面  
$captch_code = '';
//获取 4 个随机数，添加到图片中
for ($i=0; $i < 4; $i++) { 
    $fontsize = 20;
    $fontcolor=imagecolorallocate($image,rand(0,120),rand(0,120),rand(0,120));
    //产生随机数字0-9
    $fontcontent = rand(0,9);
    $captch_code.= $fontcontent;
    //数字的位置，0，0是左上角。不能重合显示不完全
    $x = ($i*100/4)+rand(5,6);
    $y=rand(5,8);
    imagestring($image,$fontsize,$x,$y,$fontcontent,$fontcolor);
}
//将生成的随机数，记录到 SESSION 中
$_SESSION['code'] = $captch_code;
//为验证码图片添加干扰元素 点
for ($i=0; $i < 200; $i++) { 
    $pointcolor = imagecolorallocate($image,rand(50,200),rand(50,200),rand(50,200));
    imagesetpixel($image, rand(1,99), rand(1,29), $pointcolor);
}
//为验证码图片添加干扰元素 线
for ($i=0; $i < 3; $i++) { 
    $linecolor = imagecolorallocate($image,rand(80,220),rand(80,220),rand(80,220));
    imageline($image, rand(1,99), rand(1,29),rand(1,99), rand(1,29) ,$linecolor);
}
header('content-type:image/png');
imagepng($image);
imagedestroy($image);
?>