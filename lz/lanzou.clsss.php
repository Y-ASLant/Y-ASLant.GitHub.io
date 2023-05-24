<?php
class lanzou{
    private $UserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36';
    private $UserAgentIOS = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1';
    private $base_domain = '';
    private $verify = '';//验证 必须包含某字符串下载 如 分享用户：</span><font>15**</font>
    public function getUrl($url,$pwd=''){
        $return =array('status'=>0,'info'=>'');
        if(empty($url)){$return['info']= '请输入URL';return $return;}
        $this->base_domain = $this->getbasedomain();
        $softInfo = $this->str_exists($url,'http')?$this->curlget($url):'';
        if(empty($softInfo) && !$this->str_exists($url, $this->base_domain)){
            $url = $this->format_url($url);
            $softInfo = $this->curlget($url);
            if($this->str_exists($str,'404 Not Found')){
                $url = $this->checkurl();$return['info']= '请稍后重试';return $return;
            }
        }
        if(empty($softInfo)){$this->getbasedomain(1);$return['info']= '链接无法访问';return $return;}
        if($this->str_exists($softInfo, "文件取消分享了")) {$return['info']= '文件取消分享了';return $return;}
        if($this->verify && !$this->str_exists($softInfo, $this->verify)){$return['info']= '盗链';return $return;}
        $optsother=array(CURLOPT_REFERER=>$url);
        if ($this->str_exists($softInfo, "手机Safari可在线安装")) {
          	if($this->str_exists($softInfo, "n_file_infos")){
              	$ipaInfo = $this->curlget($url,'','GET' ,array(),$this->UserAgentIOS);
            	preg_match('~href="(.*?)" target="_blank" class="appa"~', $ipaInfo, $ipaDownUrl);
            }else{
            	preg_match('~com/(\w+)~', $url, $lanzouId);
                if (!isset($lanzouId[1])) {$return['info']= '解析失败，获取不到文件ID';return $return;}
                $lanzouId = $lanzouId[1];
                $ipaInfo = $this->curlget($this->base_domain."/tp/" . $lanzouId,'','GET' ,array(), $this->UserAgentIOS);
                preg_match('~href="(.*?)" id="plist"~', $ipaInfo, $ipaDownUrl);
            }
            $ipaDownUrl = isset($ipaDownUrl[1]) ? $ipaDownUrl[1] : "";
            if($ipaDownUrl){
                $return['status']=1;
                $return['info']=$ipaDownUrl;
                return $return;
            }
        }
        if($this->str_exists($softInfo, "filemoreajax")){$return['info']= '暂不支持文件夹获取';return $return;}
        if($this->str_exists($softInfo, "function down_p(){")){
        	if(empty($pwd)){$return['info']= '请输入分享密码';return $return;}
            $softInfo = $this->getPostData($softInfo,0);
            preg_match("~'action=(.*?)&sign=(.*?)&p='\+(.*?),~", $softInfo, $segment);
        	$post_data = array(
        		"action" => $segment[1],
        		"sign" => $segment[2],
        		"p" => $pwd
        	);
        	$header =  array('X-FORWARDED-FOR:'.$this->Rand_IP(), 'CLIENT-IP:'.$this->Rand_IP());
        	$softInfo = $this->curlget($this->base_domain."/ajaxm.php",$post_data,'POST',$header,false,false,$optsother);
        }else{
            preg_match('/<iframe\s+class="(ifr2|n_downlink)".*?src="(\/fn\?[\w]{3,}?)".*?><\/iframe>/i', $softInfo, $link);
        	$ifurl = $this->base_domain."/" . $link[2];
        	$softInfo = $this->curlget($ifurl);
            $post_data = $this->getPostData($softInfo);
        	$header =  array('X-FORWARDED-FOR:'.$this->Rand_IP(), 'CLIENT-IP:'.$this->Rand_IP());
        	$softInfo = $this->curlget($this->base_domain."/ajaxm.php",$post_data,'POST',$header,false,false,$optsother);
        }
        $softInfo = json_decode($softInfo, true);
        if ($softInfo['zt'] != 1) {if(empty($softInfo['inf']))$softInfo['inf']='获取失败';$return['info']= $softInfo['inf'];return $return;}
        $downUrl1 = $softInfo['dom'] . '/file/' . $softInfo['url'];
        //解析最终直链地址
        $downUrl2 = $this->get_head($downUrl1,$this->base_domain,"down_ip=1; expires=Sat, 16-Nov-2019 11:42:54 GMT; path=/; domain=.baidupan.com");
        $downUrl = $downUrl2?$downUrl2:$downUrl1;
        if(empty($downUrl)){$return['info']= '获取下载地址失败';return $return;}
        $return['status']=1;
        $return['info']=$downUrl;
        return $return;
    }
    private function getPostData($content,$is_clean=1){
        $lines = explode("\n",$content);
        $replace = array();
        foreach($lines as $k=>$v){
            if($this->str_exists($v,'//'))continue;
            if($this->str_exists($v,'var')){//字义变量
                $var_arr=explode('=',str_replace('var ','',$v));
                $replace[trim($var_arr[0])]=trim($var_arr[1]);
            }
            if($this->str_exists($v,'data : ')){//字义变量
                if($is_clean){
                    $rep=array('data : '=>'','},'=>'}');
                    $data = strtr($v,$rep);
                }else{
                    return $v;
                }
            }
        }
        $json_str = trim(strtr($data,$replace));
        $json_str = str_replace("';","'",$json_str);
        $json_str = str_replace("'",'"',$json_str);
        $json_arr = json_decode($json_str,1);
        return $json_arr;     
    }
    private function getsign($softInfo){
        $fields=array('postdown','pdownload','ajaxdata','sg');
        foreach($fields as $v){
            if($this->str_exists($softInfo,$v)){
                preg_match("~var ".$v." = '(.*?)';~", $softInfo, $segmentsg);
                if($segmentsg[1] && strlen($segmentsg[1])>10)return $segmentsg[1];
            }
        }
        return false;
    }
    //直链解析函数
    private function get_head($url,$guise,$cookie){
        $headers = array(
        	'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        	'Accept-Encoding: gzip, deflate','Accept-Language: zh-CN,zh;q=0.9',
        	'Cache-Control: no-cache','Connection: keep-alive','Pragma: no-cache',
        	'Upgrade-Insecure-Requests: 1','User-Agent: '.$this->UserAgent
        );
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_HTTPHEADER,$headers);
        curl_setopt($curl, CURLOPT_REFERER, $guise);
        curl_setopt($curl, CURLOPT_COOKIE , $cookie);
        curl_setopt($curl, CURLOPT_USERAGENT, $this->UserAgent);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLINFO_HEADER_OUT, TRUE);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        $data = curl_exec($curl);
        $url=curl_getinfo($curl);
        curl_close($curl);
        return $url["redirect_url"];
    }
    /**
     * CURL发送HTTP请求
     * @param  string $url    请求URL
     * @param  array  $params 请求参数
     * @param  string $method 请求方法GET/POST
     * @param  $header 头信息
     * @param  $multi  是否支付附件
     * @param  $debug  是否输出错误
     * @param  $optsother 附件项
     * @return array  $data   响应数据
     */
    private function curlget($url, $params='', $method = 'GET', $header = array(), $UserAgent = false,$debug=false,$optsother='') {
        if(empty($UserAgent))$UserAgent=$this->UserAgent;
    	$opts = array(CURLOPT_TIMEOUT => 10,CURLOPT_RETURNTRANSFER=> 1,CURLOPT_SSL_VERIFYPEER=> false,CURLOPT_SSL_VERIFYHOST=> false,CURLOPT_HTTPHEADER => $header,CURLOPT_USERAGENT=>$UserAgent);		
    	switch (strtoupper($method)) {/* 根据请求类型设置特定参数 */
    		case 'GET':$opts[CURLOPT_URL] = $params?$url.'?'.http_build_query($params):$url;break;
    		case 'POST':$params = http_build_query($params);//判断是否传输文件
        	$opts[CURLOPT_URL] = $url;$opts[CURLOPT_POST] = 1;$opts[CURLOPT_POSTFIELDS] = $params;break;			
    		default:if($debug)echo ('不支持的请求方式！');break;
    	}$ch = curl_init();if($optsother && is_array($optsother))$opts=$opts+$optsother;curl_setopt_array($ch, $opts);$data = curl_exec($ch);$error = curl_error($ch);curl_close($ch);/* 初始化并执行curl请求 */
    	if($error && $debug){echo ('请求发生错误:'.$error);}
    	return $data;
    }//检测字符串中是否存在
    private function str_exists($haystack, $needle){
    	return !(strpos(''.$haystack, ''.$needle) === FALSE);
    }//重购主域名
    private function getbasedomain($is_check=0){
        $basedomain = file_get_contents('domain.txt');
        if(empty($basedomain) || $is_check==1){
            $basedomain = $this->checkurl();
        }
        return $basedomain;
    }//重购url
    private function format_url($url){       
        if($this->str_exists($url,'.com')){
            $arr = explode('.com',$url);
            $urlbase = $arr[1];
        }else{
            $urlbase='/'.$url;  
        }
        return $this->base_domain.$urlbase;
    }
    //获取随机ip
    private function Rand_IP(){
        $ip2id = round(rand(600000, 2550000) / 10000);
        $ip3id = round(rand(600000, 2550000) / 10000);
        $ip4id = round(rand(600000, 2550000) / 10000);
        $arr_1 = array("218","218","66","66","218","218","60","60","202","204","66","66","66","59","61","60","222","221","66","59","60","60","66","218","218","62","63","64","66","66","122","211");
        $randarr= mt_rand(0,count($arr_1)-1);
        $ip1id = $arr_1[$randarr];
        return $ip1id.".".$ip2id.".".$ip3id.".".$ip4id;
    }
    //检测域名是否有效
    public function checkurl(){
        $list = array(
            'https://www.lanzouy.com',
            'https://www.lanzoux.com',
            'https://www.lanzouq.com',
            'https://www.lanzoup.com',
            'https://www.lanzoum.com',
            'https://www.lanzoul.com',
            'https://www.lanzouj.com',
            'https://www.lanzoui.com',
            'https://www.lanzouh.com',
            'https://www.lanzouf.com',
            'https://www.lanzoue.com',
            'https://www.lanzoub.com',
        );
        $domain='';
        foreach($list as $v){
            $str = $this->curlget($v);
            if($this->str_exists($str,'lanzou') && !$this->str_exists($str,'404 Not Found')){
                $domain=$v;file_put_contents('domain.txt',$v);break;
            }
        }
        return $domain;
    }
}
?>