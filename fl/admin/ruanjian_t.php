<?php 
include('../include/common.php'); 
?>
<?PHP
session_start();
header("Content-type:text/html;charset=utf-8");
date_default_timezone_set('PRC');
$name = $_SESSION['user'];
if ($name) {
echo "";
}else {
echo "<script>
alert('尚未登录!!!');
window.location.href='./login.php';
</script>";
}
?>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>云溪后台</title>
<link rel="icon" href="../favicon.ico" type="image/ico">
<meta name="keywords" content="<?php echo $conf['keywords'];?>">
<meta name="description" content="<?php echo $conf['js'];?>">
<meta name="author" content="yinqi">
<link href="./css/bootstrap.min.css" rel="stylesheet">
<link href="./css/materialdesignicons.min.css" rel="stylesheet">
<link href="./css/style.min.css" rel="stylesheet">
</head>
  
<body>
<?php require "header.php";?>
    <!--页面主要内容-->
  
     <main class="lyear-layout-content">
      
      <div class="container-fluid">
        
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
                                <div class="alert alert-success alert-dismissible" role="alert">
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <strong>最后更新时间: <?php echo $conf['yunxing']; ?></strong>
                </div>
           
              <div class="tab-content">
                <div class="tab-pane active">
    
     
    	<form action="./php/ruanjian_t.php" method="post" enctype="multipart/form-data">
		 <!--文件上传-->
	 <div class="form-group">
                    <label class="col-xs-12" for="example-file-input">上传文件</label>
                    <div class="col-xs-12">
                      <input type="file" name="up" id="file">
		 </div>
              <br>
                    <br>
                          <br>
                    	<!--核心提交-->
			     <button class="btn btn-pink btn-w-md" type="submit" name="submit"> 上 传 </button>
		 <br/><br/>
		 		 <span>目前仅支持zip,exe,rar.txt文件</span>
			       </div>
                  	</form>
                  	
              </div>

					
		
	
	
	</div>	
              </div>

            </div>
          </div>
          
        </div>
        
      </div>
      
    </main>
    <!--End 页面主要内容-->
 

<script type="text/javascript" src="./js/jquery.min.js"></script>
<script type="text/javascript" src="./js/bootstrap.min.js"></script>
<script type="text/javascript" src="./js/perfect-scrollbar.min.js"></script>
<script type="text/javascript" src="./js/main.min.js"></script>


</body>
</html>