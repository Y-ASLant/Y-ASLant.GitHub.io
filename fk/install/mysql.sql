-- Adminer 4.6.3 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `sl_complaint`;
CREATE TABLE `sl_complaint` (
  `C_id` int(11) NOT NULL AUTO_INCREMENT,
  `C_content` text COLLATE utf8_unicode_ci NOT NULL,
  `C_mid` int(11) NOT NULL DEFAULT '0',
  `C_pid` int(11) NOT NULL DEFAULT '0',
  `C_time` datetime NOT NULL,
  `C_state` int(11) NOT NULL DEFAULT '0',
  `C_email` text COLLATE utf8_unicode_ci NOT NULL,
  `C_response` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`C_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS `sl_config`;
CREATE TABLE `sl_config` (
  `C_webtitle` text COLLATE utf8_unicode_ci,
  `C_logo` text COLLATE utf8_unicode_ci,
  `C_ico` text COLLATE utf8_unicode_ci,
  `C_keyword` text COLLATE utf8_unicode_ci,
  `C_description` text COLLATE utf8_unicode_ci,
  `C_admin` text COLLATE utf8_unicode_ci,
  `C_pwd` text COLLATE utf8_unicode_ci,
  `C_alipayon` int(11) NOT NULL DEFAULT '0',
  `C_wxpayon` int(11) NOT NULL DEFAULT '0',
  `C_qq` text COLLATE utf8_unicode_ci,
  `C_wechat` text COLLATE utf8_unicode_ci,
  `C_wechatcode` text COLLATE utf8_unicode_ci,
  `C_mobile` text COLLATE utf8_unicode_ci,
  `C_maincontact` int(11) NOT NULL DEFAULT '0',
  `C_pid` text COLLATE utf8_unicode_ci,
  `C_pkey` text COLLATE utf8_unicode_ci,
  `C_notice` text COLLATE utf8_unicode_ci,
  `C_rate` decimal(10,2) DEFAULT '0.00',
  `C_fee` decimal(10,2) DEFAULT '0.00',
  `C_recieve` text COLLATE utf8_unicode_ci,
  `C_email` text COLLATE utf8_unicode_ci,
  `C_smtp` text COLLATE utf8_unicode_ci,
  `C_emailpwd` text COLLATE utf8_unicode_ci,
  `C_userid` text COLLATE utf8_unicode_ci,
  `C_sms` text COLLATE utf8_unicode_ci,
  `C_smspwd` text COLLATE utf8_unicode_ci,
  `C_sh` int(11) DEFAULT '0',
  `C_copyright` text COLLATE utf8_unicode_ci,
  `C_beian` text COLLATE utf8_unicode_ci,
  `C_model` int(11) DEFAULT '0',
  `C_code` text COLLATE utf8_unicode_ci,
  `C_html` int(11) DEFAULT '0',
  `C_pay` int(11) DEFAULT '0',
  `C_template` text COLLATE utf8_unicode_ci,
  `C_shopt` text COLLATE utf8_unicode_ci
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `sl_config` (`C_webtitle`, `C_logo`, `C_ico`, `C_keyword`, `C_description`, `C_admin`, `C_pwd`, `C_alipayon`, `C_wxpayon`, `C_qq`, `C_wechat`, `C_wechatcode`, `C_mobile`, `C_maincontact`, `C_pid`, `C_pkey`, `C_notice`, `C_rate`, `C_fee`, `C_recieve`, `C_email`, `C_smtp`, `C_emailpwd`, `C_userid`, `C_sms`, `C_smspwd`, `C_sh`, `C_copyright`, `C_beian`, `C_model`, `C_code`, `C_html`, `C_pay`, `C_template`, `C_shopt`) VALUES
('您的网站名称',	'202212302212430085044146.png',	'202212302215452468581894.ico',	'刀客源码网,自动发货,付费阅读,电子商城',	'发卡宝是一套功能强大的卡密寄售系统，无需人工值守，客户在线购买即可自动完成交易。支持自动发货/免登录购买/回收站/个人支付接口等多种功能。源码来自刀客源码网www.dkewl.com',	'admin',	'd73ed8a01f624fcb878296bc7ff302bc',	1,	1,	'8888888',	'weixin',	'202212221053489613969059.jpg',	'15555555555',	2,	'',	'',	'本店铺为演示店铺，所有展示的商品均非真实商品，仅供填充数据用，请勿购买！！！',	3.00,	0.00,	'',	'',	'',	'',	'',	'',	'',	1,	'© Copyright 2022-2023 发卡宝, All Rights Reserved',	'鲁ICP备xxxxxxxx号',	1,	'',	0,	0,	't1',	's2');

DROP TABLE IF EXISTS `sl_list`;
CREATE TABLE `sl_list` (
  `L_id` int(11) NOT NULL AUTO_INCREMENT,
  `L_mid` int(11) NOT NULL DEFAULT '0',
  `L_title` text,
  `L_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00',
  `L_money` decimal(10,2) NOT NULL,
  `L_no` text,
  PRIMARY KEY (`L_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `sl_member`;
CREATE TABLE `sl_member` (
  `M_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增量',
  `M_email` text COMMENT '邮箱',
  `M_pwd` text COMMENT '密码',
  `M_money` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '余额',
  `M_regtime` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '注册时间',
  `M_pid` text COMMENT 'PID',
  `M_pkey` text COMMENT 'PKEY',
  `M_stop` int(11) NOT NULL DEFAULT '0' COMMENT '是否封禁',
  `M_mobile` text COMMENT '手机号码',
  `M_qq` text COMMENT 'QQ号码',
  `M_wechat` text COMMENT '微信号码',
  `M_pwdcode` text COMMENT '找回密码用',
  `M_webtitle` text COMMENT '店铺名称',
  `M_logo` text COMMENT 'logo',
  `M_ico` text COMMENT 'ico',
  `M_notice` text COMMENT '店铺公告',
  `M_keyword` text COMMENT '关键词',
  `M_description` text COMMENT '描述',
  `M_wechatcode` text COMMENT '微信二维码',
  `M_maincontact` int(11) DEFAULT '0' COMMENT '顶部显示0QQ1手机2微信',
  `M_alipayon` int(11) DEFAULT '0' COMMENT '开启支付宝',
  `M_wxpayon` int(11) DEFAULT '0' COMMENT '开启微信支付',
  `M_reason` text COMMENT '封停原因',
  `M_seller` int(11) DEFAULT '0' COMMENT '是否已入驻',
  `M_domain` text COMMENT '绑定域名',
  `M_shopt` text COMMENT '店铺模板',
  PRIMARY KEY (`M_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `sl_member` (`M_id`, `M_email`, `M_pwd`, `M_money`, `M_regtime`, `M_pid`, `M_pkey`, `M_stop`, `M_mobile`, `M_qq`, `M_wechat`, `M_pwdcode`, `M_webtitle`, `M_logo`, `M_ico`, `M_notice`, `M_keyword`, `M_description`, `M_wechatcode`, `M_maincontact`, `M_alipayon`, `M_wxpayon`, `M_reason`, `M_seller`, `M_domain`, `M_shopt`) VALUES
(1,	'user2@qq.com',	'980ac217c6b51e7dc41040bec1edfec8',	0.00,	'2022-12-19 22:45:45',	'',	'',	0,	'1555555555',	'450245869',	'shanling1706',	'123123',	'刀客源码演示',	'1.png',	'202212230958015861268742.png',	'店铺公告',	'关键词2',	'描述3',	'2.jpg',	2,	1,	1,	'',	1,	'card.s-cms.cn',	's4');

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `sl_news`;
CREATE TABLE `sl_news` (
  `N_id` int(11) NOT NULL AUTO_INCREMENT,
  `N_title` text,
  `N_content` text,
  `N_author` text,
  `N_date` datetime NOT NULL DEFAULT '1970-01-01 00:00:00',
  PRIMARY KEY (`N_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `sl_news` (`N_id`, `N_title`, `N_content`, `N_author`, `N_date`) VALUES
(1,	'【入驻必看】平台禁售目录',	'本平台禁止出售：涉、黄、赌、毒、诈骗类，接码类、VPN类、网盘链接类、卡密为联系方式的、公民身份信息等、任何实名制账号如微信支付宝、QQ刷赞、卡盟QQ钻、红包码、钓鱼类、套现洗钱、资金盘、金融相关、等任何违反国家法律的类目，一经发现，立刻冻结账户！（若被风控系统检测到您利用平台进行以上等行为。一律封禁清退冻结结算！没有任何商量余地，一经核查发现将备案相关资料移交给相关部门处理）\r\n\r\n本网站在国家相关法律法规规定的范围内，只按现有状况提供虚拟物品在线自动发卡综合解决方案服务，本网站及其所有者非交易一方，也非交易任何一方之代理人或代表;同时，本网站及其所有者也未授权任何人代表或代理本网站及其所有者从事任何网络交易行为或做出任何承诺、保证或其他类似行为，除非有明确的书面授权。\r\n\r\n鉴于互联网及网络交易的特殊性，本网站无法鉴别和判断相关交易各主体之民事权利和行为能力、资质、信用等状况，也无法鉴别和判断虚拟交易或正在交易或已交易虚拟物品来源、权属、真伪、性能、规格、质量、数量等权利属性、自然属性及其他各种状况。因此，交易各方在交易前应加以仔细辨明，并慎重考虑和评估交易可能产生的各项风险。\r\n\r\n本网站不希望出现任何因虚拟物品交易而在用户之间及用户与游戏开发运营商之间产生纠纷，但并不保证不发生该类纠纷。对于因前述各类情形而产生的任何纠纷，将由交易各方依据中华人民共和国现行的有关法律通过适当的方式直接加以解决，本网站及其所有者不参与其中；对于因此类交易而产生的各类纠纷之任何责任和后果，由交易各方承担，本网站及其所有者不承担任何责任及后果。\r\n\r\n本网站不希望出现任何人利用本网站或因使用本网站而侵犯他人合法权益的行为，但并不保证不会发生此类行为或类似行为。本网站将依据中国法律采取必要的措施防止发生前述各类行为或降低发生这类行为的可能性或者降低由此造成的损失及其后果。对于因前述各类情形而产生的任何纠纷，将由权利受到侵害之人和侵权方依据中华人民共和国现行的有关法律通过适当的方式直接加以解决，本网站及其所有者不参与其中；对于因此类行为产生的各类纠纷之任何责任和后果，由相关责任方承担，本网站及其所有者不承担任何责任及后果。\r\n\r\n凡有客户投诉涉及不正常交易或疑似诈骗的帐户，公司有权冻结相应帐户。请相应帐户持有人于冻结之日起30日内提供相应证明材料证明交易的真实性或投诉不属实。在相应时间内未提供材料或材料审核未通过的，公司有权进行帐户相应款项退回处理。\r\n\r\n\r\n任何非本网站责任而产生的任何其他纠纷，概由纠纷各方依据中国相关法律以适当的方式直接加以解决，本网站不参与其中；对于因该类行为产生的各类纠纷之任何责任和后果，由相关各方承担，本网站及其所有者不承担任何责任及后果。',	'admin',	'2023-01-10 00:16:57'),
(2,	'【关于我们】企业资质齐全-正规企业运营-工信部已备案',	'企业资质齐全-正规企业运营-工信部已备案\r\n\r\n本站点仅是提供自动发卡服务,并非商品的销售商\r\n\r\n微信公众号关注：【发卡平台】-售卡通知-投诉通知\r\n\r\n服务器安全，资金保障，超低费率，持续更新，企业自主研发，绝非市场开源程序，安全有保障\r\n\r\n服务一流：客服团队7x24小时严正以待，QQ、企点、电话、邮件等多渠道沟通，全程淘宝式亲亲服务，拒绝等待，快速响应解决任何问题！ \r\n\r\n接口稳定：风控组严格筛选：杜绝不良商户，拒绝风险商户，确保接口持续稳定。实时监控平台投诉情况，及时处理投诉以全方位障商户权益！\r\n\r\n运营安全：技术团队7x24小时严密监控，全网站SSL加密，分布式容灾备份，高防ddos与cc服务器，全方位确保平台安全、高效、稳定运行！',	'admin',	'2023-01-10 00:17:49'),
(3,	'用户必看,防止电信诈骗！',	'如果你是第一次使用本平台购物，请务必仔细看完以下内容：\r\n\r\n1.我们的唯一官方域名是www.xxx.com,所有本平台的商家店铺也肯定是发卡平台的子链接，其余均为假冒，请勿上当受骗！\r\n\r\n2.本平台仅仅是一个提供自动发货的平台，对于商品的用途和使用方法并不清楚，所以在购买前一定要先和商家沟通清楚，你买的是什么，怎么使用。\r\n\r\n3.对于陌生的商家，请不要直接购买很贵的卡密，我们推荐先购买一个天卡测试一下是否达到你的心里预期，减少损失。\r\n\r\n4.本平台采取T+1结算模式，所有销售额将会直接进入本平台，第二天再结算给商户，这里的时间是指自然日，不是购买订单的日期。\r\n\r\n5.我们建议不要在每天接近24点的时候购买商品，因为24点一过钱会准备结算给商家，某些不法商家可能会卷钱跑路，此时平台没法帮你维权。\r\n\r\n（举个例子：你在1月1日的23:58分购买了一张卡密，此时你发现卡密没法使用，卖家不回信息，当你明白自己被骗了的时候，时间已经到了1月2日的0:05分，这个时候就很难投诉成功，推荐的做法是避开24点前选择0:01后购买）\r\n\r\n6.所以，当你遇到卡密没法使用等情况，记得一定要留下足够的时间联系卖家，如果卖家不处理，你必须要在当天使用本平台的投诉订单功能，这样你的钱才能有保障。\r\n\r\n7.网上骗子套路层出不穷，他们可能会以各种理由拖延你的投诉时间，此时请记住，不管商家承诺做什么，只要无法使用就一定要投诉订单，否则平台没有办法帮你。\r\n\r\n8.投诉订单并不会对商家产生什么不好的影响，只是暂时冻结你这笔订单的钱，等事情处理好以后才会决定这笔钱如何处理，是退回给你还是结算给卖家。\r\n\r\n9.很多时候商家不回消息并不是跑路了，每个人的作息时间不同，回复消息的时间也不同，如果卖家长时间不回复消息、不处理售后，请投诉订单。\r\n\r\n10.请务必记住：当天的订单有问题一定要当天投诉，超过时间则默认订单没有问题！\r\n\r\n11.投诉订单后，平台会在24小时内做出判决，你可以在投诉查询中看到投诉进度。',	'322',	'2023-01-10 00:40:50');

DROP TABLE IF EXISTS `sl_orders`;
CREATE TABLE `sl_orders` (
  `O_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增量',
  `O_title` text COMMENT '订单标题',
  `O_price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '订单价格',
  `O_num` int(11) NOT NULL DEFAULT '0' COMMENT '数量',
  `O_address` text COMMENT '收货地址',
  `O_mid` int(11) NOT NULL DEFAULT '0' COMMENT '会员ID',
  `O_content` text NOT NULL COMMENT '发货内容',
  `O_no` text NOT NULL COMMENT '订单编号',
  `O_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '订单时间',
  `O_paytype` text COMMENT '支付方式',
  `O_state` int(11) NOT NULL DEFAULT '0' COMMENT '订单状态',
  `O_pid` int(11) NOT NULL DEFAULT '0' COMMENT '关联商品ID',
  `O_tradeno` text COMMENT '交易号',
  PRIMARY KEY (`O_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `sl_product`;
CREATE TABLE `sl_product` (
  `P_id` int(11) NOT NULL AUTO_INCREMENT,
  `P_title` text,
  `P_pic` text,
  `P_content` text,
  `P_price` decimal(10,2) NOT NULL,
  `P_sort` int(11) NOT NULL DEFAULT '0',
  `P_sell` text,
  `P_time` datetime NOT NULL DEFAULT '1970-01-01 00:00:00',
  `P_mid` int(11) NOT NULL DEFAULT '0',
  `P_del` int(11) NOT NULL DEFAULT '0',
  `P_order` int(11) NOT NULL DEFAULT '0',
  `P_sh` int(11) NOT NULL DEFAULT '0',
  `P_selltype` int(11) NOT NULL DEFAULT '0',
  `P_card` longtext,
  `P_on` int(11) DEFAULT '1',
  `P_use` text,
  `P_sold` int(11) DEFAULT '0',
  `P_view` int(11) DEFAULT '0',
  PRIMARY KEY (`P_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `sl_product` (`P_id`, `P_title`, `P_pic`, `P_content`, `P_price`, `P_sort`, `P_sell`, `P_time`, `P_mid`, `P_del`, `P_order`, `P_sh`, `P_selltype`, `P_card`, `P_on`, `P_use`, `P_sold`, `P_view`) VALUES
(1,	'设计素材',	'202212200017495350713745.jpg',	'2121',	0.01,	1,	'221',	'2022-12-20 00:17:43',	1,	0,	0,	1,	0,	'[{\"content\":\"1\",\"sell\":\"1\"},{\"content\":\"2\",\"sell\":\"1\"},{\"content\":\"3\",\"sell\":\"0\"},{\"content\":\"4\",\"sell\":\"0\"},{\"content\":\"5\",\"sell\":\"0\"},{\"content\":\"6\",\"sell\":\"0\"},{\"content\":\"7\",\"sell\":\"0\"},{\"content\":\"8\",\"sell\":\"0\"}]',	1,	'1212',	0,	10),
(2,	'手机号码实名验证',	'202301061443516507628222.jpg',	'2',	1.00,	1,	'1',	'2022-12-20 00:42:40',	1,	0,	0,	1,	0,	'[]',	1,	'3',	0,	20),
(3,	'VIP卡',	'202212202310398586281267.jpg',	'本网站所有商品均为演示数据，不是真实商品，请提前知晓\r\n购买流程\r\n1.右击我的电脑点属性查看自己系统版本拍相应的版本\r\n2.旺旺联系客服索取产品密钥\r\n3.点击更改产品密钥输入产品密钥激活系统。\r\n具体步骤\r\nwin7和win8.1用户: 右键我的电脑属性--更改产品密钥输入产品密钥\r\nwin11/10用户: 点 开始-设置--更新与安全-一激活更改产品密钥一-输入密钥\r\n永久使用/联网激活/正品保障/支持重装',	0.10,	3,	'1112',	'2022-12-20 23:10:28',	0,	0,	0,	1,	0,	'[]',	1,	'444',	0,	16),
(4,	'序列号',	'202301052341234035720353.jpg',	'本网站所有商品均为演示数据，不是真实商品，请提前知晓\r\n购买流程\r\n1.右击我的电脑点属性查看自己系统版本拍相应的版本\r\n2.旺旺联系客服索取产品密钥\r\n3.点击更改产品密钥输入产品密钥激活系统。\r\n具体步骤\r\nwin7和win8.1用户: 右键我的电脑属性--更改产品密钥输入产品密钥\r\nwin11/10用户: 点 开始-设置--更新与安全-一激活更改产品密钥一-输入密钥\r\n永久使用/联网激活/正品保障/支持重装',	0.01,	2,	'',	'2022-12-21 10:49:40',	0,	0,	0,	1,	1,	'[{\"content\":\"1\",\"sell\":\"1\"},{\"content\":\"2\",\"sell\":\"1\"},{\"content\":\"3\",\"sell\":\"1\"},{\"content\":\"4\",\"sell\":\"1\"},{\"content\":\"5\",\"sell\":\"1\"},{\"content\":\"6\",\"sell\":\"1\"},{\"content\":\"7\",\"sell\":\"1\"},{\"content\":\"8\",\"sell\":\"1\"}]',	1,	'333',	0,	29),
(5,	'虚拟商品',	'202212212218038367855447.jpg',	'2266',	1.00,	1,	'11',	'2022-12-21 22:17:56',	1,	0,	0,	1,	1,	'[{\"content\":\"1\",\"sell\":\"0\"},{\"content\":\"2\",\"sell\":\"0\"},{\"content\":\"3\",\"sell\":\"0\"},{\"content\":\"4\",\"sell\":\"0\"},{\"content\":\"5\",\"sell\":\"0\"}]',	1,	'33',	0,	10),
(6,	'测试月卡',	'202212231112122747482246.jpg',	'测试内容介绍',	0.01,	4,	'测试内容',	'2022-12-23 11:11:48',	4,	0,	0,	1,	0,	'[]',	1,	'测试内容使用方法',	0,	0),
(7,	'游戏点卡',	'202301052342497354858905.jpg',	'本网站所有商品均为演示数据，不是真实商品，请提前知晓\r\n购买流程\r\n1.右击我的电脑点属性查看自己系统版本拍相应的版本\r\n2.旺旺联系客服索取产品密钥\r\n3.点击更改产品密钥输入产品密钥激活系统。\r\n具体步骤\r\nwin7和win8.1用户: 右键我的电脑属性--更改产品密钥输入产品密钥\r\nwin11/10用户: 点 开始-设置--更新与安全-一激活更改产品密钥一-输入密钥\r\n永久使用/联网激活/正品保障/支持重装',	0.10,	3,	'测试内容',	'2023-01-05 23:42:44',	0,	0,	0,	1,	0,	'[]',	1,	'测试内容',	0,	67),
(8,	'激活码',	'202301052343450699312604.jpg',	'本网站所有商品均为演示数据，不是真实商品，请提前知晓\r\n购买流程\r\n1.右击我的电脑点属性查看自己系统版本拍相应的版本\r\n2.旺旺联系客服索取产品密钥\r\n3.点击更改产品密钥输入产品密钥激活系统。\r\n具体步骤\r\nwin7和win8.1用户: 右键我的电脑属性--更改产品密钥输入产品密钥\r\nwin11/10用户: 点 开始-设置--更新与安全-一激活更改产品密钥一-输入密钥\r\n永久使用/联网激活/正品保障/支持重装',	0.01,	2,	'11222',	'2023-01-05 23:43:34',	0,	0,	0,	1,	0,	'[]',	1,	'444',	0,	220),
(9,	'杀毒软件',	'202301060942593230350311.jpg',	'杀毒软件',	1.00,	1,	'杀毒软件',	'2023-01-06 09:42:46',	1,	0,	0,	1,	0,	'[]',	1,	'杀毒软件',	0,	8),
(10,	'设计素材',	'202301061444060661936967.jpg',	'2',	1.00,	1,	'1',	'2023-01-06 14:44:02',	1,	0,	0,	1,	0,	'[]',	1,	'3',	0,	90),
(11,	'腾讯视频VIP',	'202301061444328680772836.png',	'购买流程\r\n1.右击我的电脑点属性查看自己系统版本拍相应的版本\r\n2.旺旺联系客服索取产品密钥\r\n3.点击更改产品密钥输入产品密钥激活系统。\r\n具体步骤\r\nwin7和win8.1用户: 右键我的电脑属性--更改产品密钥输入产品密钥\r\nwin11/10用户: 点 开始-设置--更新与安全-一激活更改产品密钥一-输入密钥\r\n永久使用/联网激活/正品保障/支持重装',	148.00,	1,	'1',	'2023-01-06 14:44:25',	1,	0,	0,	1,	0,	'[]',	1,	'1',	0,	88),
(12,	'手机号码实名验证',	'nopic.png',	'2',	1.00,	6,	'1',	'2023-01-11 21:03:50',	6,	0,	0,	1,	0,	'[]',	1,	'3',	0,	1);

DROP TABLE IF EXISTS `sl_psort`;
CREATE TABLE `sl_psort` (
  `S_id` int(11) NOT NULL AUTO_INCREMENT,
  `S_mid` int(11) NOT NULL DEFAULT '0',
  `S_order` int(11) NOT NULL DEFAULT '0',
  `S_title` text NOT NULL,
  `S_del` int(11) NOT NULL DEFAULT '0',
  `S_on` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`S_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `sl_psort` (`S_id`, `S_mid`, `S_order`, `S_title`, `S_del`, `S_on`) VALUES
(1,	1,	0,	'前端开发',	0,	1),
(2,	0,	0,	'软件序列号',	0,	1),
(3,	0,	0,	'VIP充值',	0,	1),
(4,	4,	0,	'默认分类',	0,	1),
(5,	5,	0,	'默认分类',	0,	1),
(6,	6,	0,	'默认分类',	0,	1),
(7,	7,	0,	'默认分类',	0,	1);

-- 2023-02-02 16:08:20
