# lanzou

#### 介绍
蓝奏云下载地址解析API
下载地址:https://www.90pan.com/b1748355 密码：9zz7
#### 软件架构
1.支持检测文件是否被取消

2.支持带密码的文件分享链接但不支持分享的文件夹

3.支持生成直链或直接下载

4.支持ios应用在线安装获取地址




#### 使用说明

url:蓝奏云外链链接

type:是否直接下载 值：down

pwd:外链密码

内部调用方法

include('lanzou.clsss.php');
$lz = new lanzou;
$res=$lz->getUrl($url,$pwd);


直接下载：
无密码：http://tool.bitefu.net/lanzou/?url=https://www.lanzous.com/xxxx&type=down

有密码：http://tool.bitefu.net/lanzou/?url=https://www.lanzous.com/xxxxx&type=down&pwd=1234

输出直链：
无密码：http://tool.bitefu.net/lanzou/?url=https://www.lanzous.com/xxxxx

有密码：http://tool.bitefu.net/lanzou/?url=https://www.lanzous.com/xxxx&pwd=1234

简网址

不带密码:http://tool.bitefu.net/lanzou/?d=iXAYR0e10dpe

带密码:http://tool.bitefu.net/lanzou/?d=ic3qfri-52pj

#### 参与贡献
参考开源项目:https://github.com/MHanL/LanzouAPI
