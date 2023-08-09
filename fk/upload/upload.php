<?php 
require '../conn/conn.php';
require '../conn/function.php';

$S_filetype="jpg|jpeg|png|ico";

$id=$_GET["id"];
$path=$_GET["path"];

$processid=$_GET["processid"];
$n="file".str_Replace("AN","",$processid);

$filename=date("YmdHis").gen_key(10,2);

$kname=splitx($_FILES[$n]["name"],".",1);

$k=$filename.".".splitx($_FILES[$n]["name"],".",1);

if(strpos($S_filetype,$kname)!==false){
  $p=$_SERVER["DOCUMENT_ROOT"]."/media";
  move_uploaded_file($_FILES[$n]["tmp_name"],$p . "/" . $k);
  compressedImage($p . "/" . $k, $p . "/" . $k);
  echo $k;
}

function compressedImage($imgsrc, $imgdst) {
    list($width, $height, $type) = getimagesize($imgsrc);
     
    $new_width = $width;//压缩后的图片宽
    $new_height = $height;//压缩后的图片高
         
    if($width >= 600){
      $per = 600 / $width;//计算比例
      $new_width = $width * $per;
      $new_height = $height * $per;
    }
     
    switch ($type) {
      case 1:
        $giftype = check_gifcartoon($imgsrc);
        if ($giftype) {
          //header('Content-Type:image/gif');
          $image_wp = imagecreatetruecolor($new_width, $new_height);

        /* --- 用以处理缩放gif和png图透明背景变黑色问题 开始 --- */
        $color = imagecolorallocate($image_wp,255,255,255);
        imagecolortransparent($image_wp,$color);
        imagefill($image_wp,0,0,$color);
        /* --- 用以处理缩放gif和png图透明背景变黑色问题 结束 --- */


          $image = imagecreatefromgif($imgsrc);
          imagecopyresampled($image_wp, $image, 0, 0, 0, 0, $new_width, $new_height, $width, $height);
          //90代表的是质量、压缩图片容量大小
          imagejpeg($image_wp, $imgdst, 90);
          imagedestroy($image_wp);
          imagedestroy($image);
        }
        break;
      case 2:
        header('Content-Type:image/jpeg');
        $image_wp = imagecreatetruecolor($new_width, $new_height);
        $image = imagecreatefromjpeg($imgsrc);
        imagecopyresampled($image_wp, $image, 0, 0, 0, 0, $new_width, $new_height, $width, $height);
        //90代表的是质量、压缩图片容量大小
        imagejpeg($image_wp, $imgdst, 90);
        imagedestroy($image_wp);
        imagedestroy($image);
        break;
      case 3:
                //header('Content-Type:image/png');
                $image_wp = imagecreatetruecolor($new_width, $new_height);
                $alpha = imagecolorallocatealpha($image_wp, 0, 0, 0, 127);
                imagefill($image_wp, 0, 0, $alpha);
                $image = imagecreatefrompng($imgsrc);
                imagecopyresampled($image_wp, $image, 0, 0, 0, 0, $new_width, $new_height, $width, $height);
                imagesavealpha($image_wp, true);
                //90代表的是质量、压缩图片容量大小
                imagepng($image_wp, $imgdst);
                imagedestroy($image_wp);
                imagedestroy($image);
                break;

    }
  }

?>