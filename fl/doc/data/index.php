<?php
$name=$_GET['name'];
include("./api.php");
tongji($name);
header("Location: ../../ruanjian/$name");
?>