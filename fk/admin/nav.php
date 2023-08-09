<aside class="lyear-layout-sidebar">
      <!-- logo -->
      <div id="logo" class="sidebar-header" style="background: #fff;height: 68px;line-height: 68px;">
        <a href="./"><img src="../media/<?php echo $C_logo?>" title="<?php echo $C_webtitle?>" alt="<?php echo $C_webtitle?>" style="left: 0px;margin: 0px;height: 68px;" /></a>
      </div>
      <div class="lyear-layout-sidebar-scroll"> 
        
        <nav class="sidebar-main">
          <ul class="nav nav-drawer">
            <li class="nav-item "> <a href="index.php"><i class="mdi mdi-home"></i> 后台首页</a> </li>

            <li class="nav-item nav-item-has-subnav">
              <a href="javascript:void(0)"><i class="mdi mdi-settings"></i> 网站设置</a>
              <ul class="nav nav-subnav">
                <li> <a href="config.php">基本设置</a> </li>
                <li> <a href="admin.php">管理员设置</a> </li>
                <li> <a href="api.php">接口设置</a> </li>
                <li> <a href="template.php">模板管理</a> </li>
              </ul>
            </li>
            <li class="nav-item "> <a href="news.php"><i class="mdi mdi-new-box"></i> 公告管理</a> </li>
            
            
            <li class="nav-item nav-item-has-subnav">
              <a href="javascript:void(0)"><i class="mdi mdi-shopping"></i> 商品管理</a>
              <ul class="nav nav-subnav">
                <li> <a href="product.php">商品管理</a> </li>
                <li> <a href="psort.php">分类管理</a> </li>
              </ul>
            </li>
            
            <li class="nav-item nav-item-has-subnav">
              <a href="javascript:void(0)"><i class="mdi mdi-cart"></i> 交易管理</a>
              <ul class="nav nav-subnav">
                <li> <a href="orders.php">订单管理</a> </li>
                <li> <a href="list.php">站内明细</a> </li>
              </ul>
            </li>
            

            <li class="nav-item nav-item-has-subnav">
              <a href="javascript:void(0)"><i class="mdi mdi-account"></i> 入驻商家</a>
              <ul class="nav nav-subnav">
                <li> <a href="member.php">商家管理</a> </li>
              </ul>
            </li>
            <li class="nav-item "> <a href="update.php"><i class="mdi mdi-update"></i> 检测更新</a> </li>
            
          </ul>
        </nav>
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
            
          </div>
          
          <ul class="topbar-right">
            <li class="dropdown dropdown-profile">
              <a href="javascript:void(0)" data-toggle="dropdown">
                <img class="img-avatar img-avatar-48 m-r-10" src="images/head.jpg" alt="管理员" />
                <span>管理员 <span class="caret"></span></span>
              </a>
              <ul class="dropdown-menu dropdown-menu-right">
                <li> <a href="../" target="_blank"><i class="mdi mdi-account"></i> 前往首页</a> </li>
                <li> <a href="login.php?action=unlogin"><i class="mdi mdi-logout-variant"></i> 退出登录</a> </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>



<script type="text/javascript">
      document.getElementsByTagName("body")[0].setAttribute("data-logobg","color_8");
      document.getElementsByTagName("body")[0].setAttribute("data-headerbg","color_8");
      document.getElementsByTagName("body")[0].setAttribute("data-sidebarbg","color_8");
</script>