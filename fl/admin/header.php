<?php
 $file1 = "../install/install.lock";
if(file_exists($file1))
{
}
else
{
echo "<script>
alert('本程序暂未安装!!!');
window.location.href='../install';
</script>";
}
?>
<div class="lyear-layout-web">
<div class="lyear-layout-container">
      
    <!--左侧导航-->
    <aside class="lyear-layout-sidebar">
      
      <!-- logo -->
      <div id="logo" class="sidebar-header">
        <a href="https://www.dkewl.com"><img src="./img/1.jpg" title="<?php $conf ['banquan'];?>" alt="<?php $conf['banquan'];?>" /></a>
      </div>
      <div class="lyear-layout-sidebar-scroll"> 
        
        <nav class="sidebar-main">
          <ul class="nav nav-drawer">
             
              <!-- 前后台首页跳转 -->
              <li class="nav-item nav-item-has-subnav"> 
                  <a href="javascript:void(0)"><i class="mdi mdi-home"></i>首页</a>
                  <ul class="nav nav-subnav">
                   <li><a href="../">前台</a></li>
                   <li><a href="index.php">后台</a></li>
                      </ul>
                     </li>
                     
           <!--  信息配置 -->
               <li class="nav-item nav-item-has-subnav"> 
                 <a href="javascript:void(0)"><i class="mdi mdi-name mdi-settings"></i>信息配置</a>
                  <ul class="nav nav-subnav">
                   <li><a href="xinxi.php">网站信息</a></li>
                      </ul>
          </li>
          
         <!--  用户设置 -->
                  <li class="nav-item nav-item-has-subnav"> 
                 <a href="javascript:void(0)"><i class="mdi mdi-lead-pencil"></i>文件设置</a>
                  <ul class="nav nav-subnav">
                      <li data-toggle="tooltip" data-placement="bottom"><a href="ruanjian_list.php">文件列表</a></li>
					  <li data-toggle="tooltip" data-placement="bottom"><a href="ruanjian_t.php">文件添加</a></li>
                      </ul>
                      </li>
                      
         <!--  其他功能... -->
     <li class="nav-item nav-item-has-subnav"> 
             <a href="javascript:void(0)">    <i class="mdi mdi-dots-horizontal"></i>其他功能</a>
                  <ul class="nav nav-subnav">
                   <li data-toggle="tooltip" data-placement="bottom" title="本功能正在开发中..."><a href="#!">待更新...</a></li> 
                      </ul>
                      </li>
        <div class="sidebar-footer">
          <p class="copyright">Copyright &copy; <a target="_blank" href="/"><?php echo $conf['banquan'];?></a></p><p>由<?php echo $conf['banquan'];?>设计与编码❤️</p>

        </div>
      </div>
      
    </aside>
    
    
    <!--End 左侧导航-->
    
    <!--头部信息-->
    <header class="lyear-layout-header">
      
      <nav class="navbar navbar-default">
        <div class="topbar">
          
          <div class="topbar-left">
            <div class="lyear-aside-toggler">
              <span class="lyear-toggler-bar"></span>
              <span class="lyear-toggler-bar"></span>
              <span class="lyear-toggler-bar"></span>
            </div>
            <span class="navbar-page-title"> </span>
          </div>

          <!-- 右上角导航 -->
          <ul class="topbar-right">
            <li class="dropdown dropdown-profile">
              <a href="javascript:void(0)" data-toggle="dropdown">
                <img class="img-avatar img-avatar-48 m-r-10" src="./img/1.jpg"style="width:50px;" alt="残梦API" />
                <span><span class="caret"></span></span>
              </a>
              <ul class="dropdown-menu dropdown-menu-right">
                <li> <a href="config_1.php"><i class="mdi mdi-lock-outline"></i>修改密码</a> </li>
                <li> <a href="./"><i class="mdi mdi-delete"></i>清除缓存</a></li>
                <li class="divider"></li>
                <li> <a href="./php/cookie.php"><i class="mdi mdi-logout-variant"></i>退出登录</a> </li>
              </ul>
            </li>
            
            <!--切换主题配色-->
        
		    <li class="dropdown dropdown-skin">
			  <span data-toggle="dropdown" class="icon-palette"><i class="mdi mdi-palette"></i></span>
			  <ul class="dropdown-menu dropdown-menu-right" data-stopPropagation="true">
                <li class="drop-title"><p>主题</p></li>
                <li class="drop-skin-li clearfix">
                  <span class="inverse">
                    <input type="radio" name="site_theme" value="default" id="site_theme_1" checked>
                    <label for="site_theme_1"></label>
                  </span>
                  <span>
                    <input type="radio" name="site_theme" value="dark" id="site_theme_2">
                    <label for="site_theme_2"></label>
                  </span>
                  <span>
                    <input type="radio" name="site_theme" value="translucent" id="site_theme_3">
                    <label for="site_theme_3"></label>
                  </span>
                </li>
                
			    <li class="drop-title"><p>LOGO</p></li>
				<li class="drop-skin-li clearfix">
                  <span class="inverse">
                    <input type="radio" name="logo_bg" value="default" id="logo_bg_1" checked>
                    <label for="logo_bg_1"></label>
                  </span>
                  <span>
                    <input type="radio" name="logo_bg" value="color_2" id="logo_bg_2">
                    <label for="logo_bg_2"></label>
                  </span>
                  <span>
                    <input type="radio" name="logo_bg" value="color_3" id="logo_bg_3">
                    <label for="logo_bg_3"></label>
                  </span>
                  <span>
                    <input type="radio" name="logo_bg" value="color_4" id="logo_bg_4">
                    <label for="logo_bg_4"></label>
                  </span>
                  <span>
                    <input type="radio" name="logo_bg" value="color_5" id="logo_bg_5">
                    <label for="logo_bg_5"></label>
                  </span>
                  <span>
                    <input type="radio" name="logo_bg" value="color_6" id="logo_bg_6">
                    <label for="logo_bg_6"></label>
                  </span>
                  <span>
                    <input type="radio" name="logo_bg" value="color_7" id="logo_bg_7">
                    <label for="logo_bg_7"></label>
                  </span>
                  <span>
                    <input type="radio" name="logo_bg" value="color_8" id="logo_bg_8">
                    <label for="logo_bg_8"></label>
                  </span>
				</li>
				<li class="drop-title"><p>头部</p></li>
				<li class="drop-skin-li clearfix">
                  <span class="inverse">
                    <input type="radio" name="header_bg" value="default" id="header_bg_1" checked>
                    <label for="header_bg_1"></label>                      
                  </span>                                                    
                  <span>                                                     
                    <input type="radio" name="header_bg" value="color_2" id="header_bg_2">
                    <label for="header_bg_2"></label>                      
                  </span>                                                    
                  <span>                                                     
                    <input type="radio" name="header_bg" value="color_3" id="header_bg_3">
                    <label for="header_bg_3"></label>
                  </span>
                  <span>
                    <input type="radio" name="header_bg" value="color_4" id="header_bg_4">
                    <label for="header_bg_4"></label>                      
                  </span>                                                    
                  <span>                                                     
                    <input type="radio" name="header_bg" value="color_5" id="header_bg_5">
                    <label for="header_bg_5"></label>                      
                  </span>                                                    
                  <span>                                                     
                    <input type="radio" name="header_bg" value="color_6" id="header_bg_6">
                    <label for="header_bg_6"></label>                      
                  </span>                                                    
                  <span>                                                     
                    <input type="radio" name="header_bg" value="color_7" id="header_bg_7">
                    <label for="header_bg_7"></label>
                  </span>
                  <span>
                    <input type="radio" name="header_bg" value="color_8" id="header_bg_8">
                    <label for="header_bg_8"></label>
                  </span>
				</li>
				<li class="drop-title"><p>侧边栏</p></li>
				<li class="drop-skin-li clearfix">
                  <span class="inverse">
                    <input type="radio" name="sidebar_bg" value="default" id="sidebar_bg_1" checked>
                    <label for="sidebar_bg_1"></label>
                  </span>
                  <span>
                    <input type="radio" name="sidebar_bg" value="color_2" id="sidebar_bg_2">
                    <label for="sidebar_bg_2"></label>
                  </span>
                  <span>
                    <input type="radio" name="sidebar_bg" value="color_3" id="sidebar_bg_3">
                    <label for="sidebar_bg_3"></label>
                  </span>
                  <span>
                    <input type="radio" name="sidebar_bg" value="color_4" id="sidebar_bg_4">
                    <label for="sidebar_bg_4"></label>
                  </span>
                  <span>
                    <input type="radio" name="sidebar_bg" value="color_5" id="sidebar_bg_5">
                    <label for="sidebar_bg_5"></label>
                  </span>
                  <span>
                    <input type="radio" name="sidebar_bg" value="color_6" id="sidebar_bg_6">
                    <label for="sidebar_bg_6"></label>
                  </span>
                  <span>
                    <input type="radio" name="sidebar_bg" value="color_7" id="sidebar_bg_7">
                    <label for="sidebar_bg_7"></label>
                  </span>
                  <span>
                    <input type="radio" name="sidebar_bg" value="color_8" id="sidebar_bg_8">
                    <label for="sidebar_bg_8"></label>
                  </span>
				</li>
			  </ul>
			</li>
            <!--切换主题配色-->
          </ul>
          
        </div>
      </nav>
      
    </header>
    <!--End 头部信息-->