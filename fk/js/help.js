var pltsPop=null;
var pltsoffsetX = 3;   // 弹出窗口位于鼠标左侧或者右侧的距离；3-12 合适
var pltsoffsetY = 5; // 弹出窗口位于鼠标下方的距离；3-12 合适
var pltsPopbg="#F6FDDC"; //背景色
var pltsPopfg="#DEDBDE"; //前景色
var pltsTitle=""

document.write('<div id="pltsTipLayer" style="display: none;position: absolute; z-index:10001"></div>');
var pltsTipLayer=document.getElementById("pltsTipLayer");

function pltsinits() {
    document.onmouseover = plts, document.onmousemove = moveToMouseLoc;
}

function plts(a) {
    var b, c, d;
    return a ? (o = a.target, MouseX = a.pageX, MouseY = a.pageY) :(o = event.srcElement, 
    MouseX = event.x, MouseY = event.y), null != o.alt && "" != o.alt && (o.dypop = o.alt, 
    o.alt = ""), null != o.title && "" != o.title && (o.dypop = o.title, o.title = ""), 
    pltsPop = o.dypop, null != pltsPop && "" != pltsPop && "undefined" != typeof pltsPop ? (pltsTipLayer.style.left = -1e3, 
    pltsTipLayer.style.display = "", b = pltsPop.replace(/\n/g, "<br>"), b = b.replace(/\0x13/g, "<br>"), 
    c = /\{(.[^\{]*)\}/gi, c.test(b) ? (c = /\{(.[^\{]*)\}(.*)/gi, pltsTitle = b.replace(c, "$1") + "&nbsp;", 
    c = /\{(.[^\{]*)\}/gi, b = b.replace(c, ""), b = b.replace("<br>", "")) :pltsTitle = pltsTitle, 
    b.indexOf("img src=") < 0 && (b = "<ul>" + b + "</ul>"), d = '<table border=0 cellspacing=0 cellpadding=0 id=toolTipTalbe ><tr><td><span id=pltsPoptop><span id=topleft style="float:left">' + pltsTitle + '</span><span id=topright style="display:none;float:right;">' + pltsTitle + "</span></td></tr>" + '<tr><td class="Bttd"><div style="border:solid 1px #DDDDDD;padding:5px;background:#FFFFFF;">' + b + "</div></td></tr>" + '<tr><td><span id=pltsPopbot style="display:none"><b><span id=botleft align=left>' + pltsTitle + '</span><span id=botright align=right style="display:none;float:right;">' + pltsTitle + "</span></td></tr></table>", 
    pltsTipLayer.innerHTML = d, document.getElementById("toolTipTalbe").style.width = Math.min(pltsTipLayer.clientWidth - 10, document.body.clientWidth / 2.2) + "px", 
    moveToMouseLoc(a), !0) :(pltsTipLayer.innerHTML = "", pltsTipLayer.style.display = "none", 
    !0);
}

function moveToMouseLoc(a) {
    var b, c;
    return a ? (MouseX = a.pageX, MouseY = a.pageY) :(MouseX = event.clientX, MouseY = event.clientY), 
    "" == pltsTipLayer.innerHTML ? !0 :(b = pltsTipLayer.clientHeight, c = pltsTipLayer.clientWidth, 
    MouseY + pltsoffsetY + b > document.body.clientHeight ? (popTopAdjust = -b - 1.5 * pltsoffsetY, 
    document.getElementById("pltsPoptop").style.display = "none", document.getElementById("pltsPopbot").style.display = "") :(popTopAdjust = 0, 
    document.getElementById("pltsPoptop").style.display = "", document.getElementById("pltsPopbot").style.display = "none"), 
    MouseX + pltsoffsetX + c > document.body.clientWidth ? (popLeftAdjust = -c - 2 * pltsoffsetX, 
    document.getElementById("topleft").style.display = "none", document.getElementById("botleft").style.display = "none", 
    document.getElementById("topright").style.display = "", document.getElementById("botright").style.display = "") :(popLeftAdjust = 0, 
    document.getElementById("topleft").style.display = "", document.getElementById("botleft").style.display = "", 
    document.getElementById("topright").style.display = "none", document.getElementById("botright").style.display = "none"), 
    pltsTipLayer.style.left = MouseX + pltsoffsetX + document.body.scrollLeft + popLeftAdjust + "px", 
    pltsTipLayer.style.top = navigator.userAgent.indexOf("MSIE") <= 0 ? MouseY + pltsoffsetY + popTopAdjust + "px" :MouseY + pltsoffsetY + document.body.scrollTop + popTopAdjust + "px", 
    !0);
}
pltsinits();

