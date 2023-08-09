<aside class="lyear-layout-sidebar">
      <div id="logo" class="sidebar-header" style="background: #fff;height: 68px;line-height: 68px;">
        <a href="./"><img src="../media/<?php echo $C_logo;?>" title="<?php echo $C_webtitle;?>" alt="<?php echo $C_webtitle;?>" style="left: 0px;margin: 0px;height: 68px;" /></a>
      </div>
      <div class="lyear-layout-sidebar-scroll"> 
        
        <nav class="sidebar-main">
          <ul class="nav nav-drawer">
            <li class="nav-item "> <a href="index.php"><i class="mdi mdi-home"></i> 卖家中心</a> </li>
            <li class="nav-item nav-item-has-subnav">
              <a href="javascript:void(0)"><i class="mdi mdi-settings"></i> 店铺设置</a>
              <ul class="nav nav-subnav">
                <li> <a href="shop.php">基本设置</a> </li>
                <?php if($C_pay==0){echo '<li> <a href="api.php">支付接口</a> </li>';}?>
                <li> <a href="template.php">模板设置</a> </li>
                <li> <a href="pwd.php">修改密码</a> </li>
              </ul>
            </li>
            <li class="nav-item nav-item-has-subnav">
              <a href="javascript:void(0)"><i class="mdi mdi-shopping"></i> 商品管理</a>
              <ul class="nav nav-subnav">
                <li> <a href="product.php">商品管理</a> </li>
                <li> <a href="psort.php">商品分类</a> </li>
              </ul>
            </li>
            
            <li class="nav-item nav-item-has-subnav">
              <a href="javascript:void(0)"><i class="mdi mdi-cart"></i> 交易管理</a>
              <ul class="nav nav-subnav">
                
                <li> <a href="orders.php">订单管理</a> </li>
                <li> <a href="list.php">资金明细</a> </li>
                <li> <a href="pay.php">账户充值</a> </li>
                <?php if($C_pay==1){echo '<li> <a href="money.php">资金提现</a> </li>';}?>
                
              </ul>
            </li>
            <li class="nav-item "> <a href="recycle.php"><i class="mdi mdi-recycle"></i> 回收站</a> </li>
            <li class="nav-item "> <a href="../login.php?action=unlogin"><i class="mdi mdi-logout-variant"></i> 退出登录</a> </li>
          </ul>
        </nav>
      </div>
    </aside>

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
                <img class="img-avatar img-avatar-48 m-r-10" src="images/head.jpg" alt="<?php echo $M_email?>" />
                <span><?php echo $M_email?> <span class="caret"></span></span>
              </a>
              <ul class="dropdown-menu dropdown-menu-right">
                <li> <a href="<?php echo $url?>" target="_blank"><i class="mdi mdi-cart"></i> 进入店铺</a> </li>
                <li> <a href="../login.php?action=unlogin"><i class="mdi mdi-logout-variant"></i> 退出登录</a> </li>
              </ul>
            </li>
            <li class="dropdown dropdown-profile">余额：<?php echo $M_money;?>元 
            <a href="../member/pay.php" class="btn btn-xs btn-info" style="padding:0px">充值</a></li>
          </ul>
        </div>
      </nav>
    </header>

