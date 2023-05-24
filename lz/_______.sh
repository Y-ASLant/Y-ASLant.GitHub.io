
# shell: Petit-Abba

# 蓝奏云链接
URL="https://wwi.lanzoui.com/i1tGpptqrif"
# 链接密码(没有则不填)
PWD=""

# 下载到指定路径
PathName="/sdcard"
# 下载后重命名文件名
FileName="测试.txt"
# 文件全路径
FILE="${PathName}/${FileName}"

# 下载
download() {
   if [[ -n `which curl` ]]; then
        curl -o ${FILE} -sL ${1}
   elif [[ -n `which wget` ]]; then
        wget ${1} -O ${FILE}
   fi
}

# 环境变量
PATH="${PATH}:$(magisk --path)/.magisk/busybox/"
# 检测有没有值
[[ -n $PWD ]] && pwds="&pwd=$PWD" || pwds=""

# 直接下载
download http\://tool.bitefu.net/lanzou/\?url\=$URL\&type\=down$pwds

# 输出直链
curl -X GET -sv http\://tool.bitefu.net/lanzou/\?url\=$URL$pwds 2>&1 | grep 'info' | awk -F '"' '{print $6}'
