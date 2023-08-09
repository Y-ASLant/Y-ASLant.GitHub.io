/*jquery.min.js*/
/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});
//# sourceMappingURL=jquery.min.map
/*bootstrap.min.js*/
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*core.min.js*/
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
!function(window,document,$){"use strict";var $doc=$(document);$.site=$.site||{},$.extend($.site,{_queue:{prepare:[],run:[],complete:[]},run:function(){var self=this;this.dequeue("prepare",function(){self.trigger("before.run",self)}),this.dequeue("run",function(){self.dequeue("complete",function(){self.trigger("after.run",self)})})},dequeue:function(name,done){var self=this,queue=this.getQueue(name),fn=queue.shift(),next=function(){self.dequeue(name,done)};fn?fn.call(this,next):$.isFunction(done)&&done.call(this)},getQueue:function(name){return $.isArray(this._queue[name])||(this._queue[name]=[]),this._queue[name]},extend:function(obj){return $.each(this._queue,function(name,queue){$.isFunction(obj[name])&&(queue.push(obj[name]),delete obj[name])}),$.extend(this,obj),this},trigger:function(name,data,$el){"undefined"!=typeof name&&("undefined"==typeof $el&&($el=$doc),$el.trigger(name+".site",data))},throttle:function(func,wait){var context,args,result,_now=Date.now||function(){return(new Date).getTime()},timeout=null,previous=0,later=function(){previous=_now(),timeout=null,result=func.apply(context,args),context=args=null};return function(){var now=_now(),remaining=wait-(now-previous);return context=this,args=arguments,0>=remaining?(clearTimeout(timeout),timeout=null,previous=now,result=func.apply(context,args),context=args=null):timeout||(timeout=setTimeout(later,remaining)),result}},resize:function(){if(document.createEvent){var ev=document.createEvent("Event");ev.initEvent("resize",!0,!0),window.dispatchEvent(ev)}else{element=document.documentElement;var event=document.createEventObject();element.fireEvent("onresize",event)}}}),$.configs=$.configs||{},$.extend($.configs,{data:{},get:function(name){for(var callback=function(data,name){return data[name]},data=this.data,i=0;i<arguments.length;i++)name=arguments[i],data=callback(data,name);return data},set:function(name,value){this.data[name]=value},extend:function(name,options){var value=this.get(name);return $.extend(!0,value,options)}}),$.colors=function(name,level){if("primary"===name&&(name=$.configs.get("site","primaryColor"),name||(name="red")),"undefined"==typeof $.configs.colors)return null;if("undefined"!=typeof $.configs.colors[name]){if(level&&"undefined"!=typeof $.configs.colors[name][level])return $.configs.colors[name][level];if("undefined"==typeof level)return $.configs.colors[name]}return null},$.components=$.components||{},$.extend($.components,{_components:{},register:function(name,obj){this._components[name]=obj},init:function(name,context,args){var self=this;if("undefined"==typeof name)$.each(this._components,function(name){self.init(name)});else{context=context||document,args=args||[];var obj=this.get(name);if(obj)switch(obj.mode){case"default":return this._initDefault(name,context);case"init":return this._initComponent(name,obj,context,args);case"api":return this._initApi(name,obj,args);default:return this._initApi(name,obj,context,args),void this._initComponent(name,obj,context,args)}}},call:function(name,context){var args=Array.prototype.slice.call(arguments,2),obj=this.get(name);return context=context||document,this._initComponent(name,obj,context,args)},_initDefault:function(name,context){if($.fn[name]){var defaults=this.getDefaults(name);$("[data-plugin="+name+"]",context).each(function(){var $this=$(this),options=$.extend(!0,{},defaults,$this.data());$this[name](options)})}},_initComponent:function(name,obj,context,args){$.isFunction(obj.init)&&obj.init.apply(obj,[context].concat(args))},_initApi:function(name,obj,args){"undefined"==typeof obj.apiCalled&&$.isFunction(obj.api)&&(obj.api.apply(obj,args),obj.apiCalled=!0)},getDefaults:function(name){var component=this.get(name);return component&&"undefined"!=typeof component.defaults?component.defaults:{}},get:function(name,property){return"undefined"!=typeof this._components[name]?"undefined"!=typeof property?this._components[name][property]:this._components[name]:void 0}})}(window,document,jQuery);
/*site.min.js*/
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
!function(window,document,$){"use strict";var $body=$(document.body);$.configs.set("site",{fontFamily:"Noto Sans, sans-serif",primaryColor:"blue",assets:"../assets"}),window.Site=$.site.extend({run:function(next){this.polyfillIEWidth(),"undefined"!=typeof $.site.menu&&$.site.menu.init(),"undefined"!=typeof $.site.menubar&&($(".site-menubar").on("changing.site.menubar",function(){$('[data-toggle="menubar"]').each(function(){function toggle($el){$el.toggleClass("hided",!$.site.menubar.opened),$el.toggleClass("unfolded",!$.site.menubar.folded)}var $this=$(this),$hamburger=$(this).find(".hamburger");toggle($hamburger.length>0?$hamburger:$this)}),$.site.menu.refresh()}),$(document).on("click",'[data-toggle="collapse"]',function(e){var $trigger=$(e.target);$trigger.is('[data-toggle="collapse"]')||($trigger=$trigger.parents('[data-toggle="collapse"]'));var href,target=$trigger.attr("data-target")||(href=$trigger.attr("href"))&&href.replace(/.*(?=#[^\s]+$)/,""),$target=$(target);if($target.hasClass("navbar-search-overlap"))$target.find("input").focus(),e.preventDefault();else if("site-navbar-collapse"===$target.attr("id")){var isOpen=!$trigger.hasClass("collapsed");$body.addClass("site-navbar-collapsing"),$body.toggleClass("site-navbar-collapse-show",isOpen),setTimeout(function(){$body.removeClass("site-navbar-collapsing")},350),isOpen&&$.site.menubar.scrollable.update()}}),$(document).on("click",'[data-toggle="menubar"]',function(){return $.site.menubar.toggle(),!1}),$.site.menubar.init(),Breakpoints.on("change",function(){$.site.menubar.change()})),"undefined"!=typeof $.site.gridmenu&&$.site.gridmenu.init(),"undefined"!=typeof $.site.sidebar&&$.site.sidebar.init(),$(document).tooltip({selector:"[data-tooltip=true]",container:"body"}),$('[data-toggle="tooltip"]').tooltip(),$('[data-toggle="popover"]').popover(),"undefined"!=typeof screenfull&&($(document).on("click",'[data-toggle="fullscreen"]',function(){return screenfull.enabled&&screenfull.toggle(),!1}),screenfull.enabled&&document.addEventListener(screenfull.raw.fullscreenchange,function(){$('[data-toggle="fullscreen"]').toggleClass("active",screenfull.isFullscreen)})),$body.on("click",".dropdown-menu-media",function(e){e.stopPropagation()}),"undefined"!=typeof $.animsition?this.loadAnimate(function(){$(".animsition").css({"animation-duration":"0s"}),next()}):next(),$(document).on("click",".navbar-mega .dropdown-menu",function(e){e.stopPropagation()}),$(document).on("show.bs.dropdown",function(e){var $target=$(e.target),$trigger=e.relatedTarget?$(e.relatedTarget):$target.children('[data-toggle="dropdown"]'),animation=$trigger.data("animation");if(animation){var $menu=$target.children(".dropdown-menu");$menu.addClass("animation-"+animation),$menu.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$menu.removeClass("animation-"+animation)})}}),$(document).on("shown.bs.dropdown",function(e){var $target=$(e.target),$menu=$target.find(".dropdown-menu-media > .list-group");if($menu.length>0){var api=$menu.data("asScrollable");if(api)api.update();else{var defaults=$.components.getDefaults("scrollable");$menu.asScrollable(defaults)}}});var pageAsideScroll=$('[data-plugin="pageAsideScroll"]');if(pageAsideScroll.length>0){pageAsideScroll.asScrollable({namespace:"scrollable",contentSelector:"> [data-role='content']",containerSelector:"> [data-role='container']"});var pageAside=$(".page-aside"),scrollable=pageAsideScroll.data("asScrollable");scrollable&&(($body.is(".page-aside-fixed")||$body.is(".page-aside-scroll"))&&$(".page-aside").on("transitionend",function(){scrollable.update()}),Breakpoints.on("change",function(){var current=Breakpoints.current().name;$body.is(".page-aside-fixed")||$body.is(".page-aside-scroll")||("xs"===current?(scrollable.enable(),pageAside.on("transitionend",function(){scrollable.update()})):(pageAside.off("transitionend"),scrollable.disable()))}),$(document).on("click.pageAsideScroll",".page-aside-switch",function(){var isOpen=pageAside.hasClass("open");isOpen?pageAside.removeClass("open"):(scrollable.update(),pageAside.addClass("open"))}),$(document).on("click.pageAsideScroll",'[data-toggle="collapse"]',function(e){var $trigger=$(e.target);$trigger.is('[data-toggle="collapse"]')||($trigger=$trigger.parents('[data-toggle="collapse"]'));var href,target=$trigger.attr("data-target")||(href=$trigger.attr("href"))&&href.replace(/.*(?=#[^\s]+$)/,""),$target=$(target);"site-navbar-collapse"===$target.attr("id")&&scrollable.update()}))}$.components.init(),this.startTour()},polyfillIEWidth:function(){if(navigator.userAgent.match(/IEMobile\/10\.0/)){var msViewportStyle=document.createElement("style");msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),document.querySelector("head").appendChild(msViewportStyle)}},loadAnimate:function(callback){return $.components.call("animsition",document,callback)},startTour:function(flag){if("undefined"==typeof this.tour){if("undefined"==typeof introJs)return;var tourOptions=$.configs.get("tour"),self=this;flag=$("body").css("overflow"),this.tour=introJs(),this.tour.onbeforechange(function(){$("body").css("overflow","hidden")}),this.tour.oncomplete(function(){$("body").css("overflow",flag)}),this.tour.onexit(function(){$("body").css("overflow",flag)}),this.tour.setOptions(tourOptions),$(".site-tour-trigger").on("click",function(){self.tour.start()})}}})}(window,document,jQuery);
/*breakpoints.min.js*/
/*! breakpoints.js - v0.4.2 - 2015-04-22
* https://github.com/amazingSurge/breakpoints.js
* Copyright (c) 2015 amazingSurge; Licensed GPL */
!function(a,b,c){"use strict";function d(a,b){var c;for(var d in a)if(c=b(d,a[d]),c===!1)break}function e(a){return"function"==typeof a||!1}function f(a,b){for(var c in b)a[c]=b[c];return a}var g=b.Breakpoints=function(){g.define.apply(g,arguments)};g.defaults={xs:{min:0,max:767},sm:{min:768,max:991},md:{min:992,max:1199},lg:{min:1200,max:1/0}};var h=g.mediaBuilder={min:function(a,b){return"(min-width: "+a+b+")"},max:function(a,b){return"(max-width: "+a+b+")"},between:function(a,b,c){return"(min-width: "+a+c+") and (max-width: "+b+c+")"},get:function(a,b,c){return c||(c="px"),0===a?this.max(b,c):b===1/0?this.min(a,c):this.between(a,b,c)}},i=function(){var a=[];return{length:0,add:function(b,c,d){a.push({fn:b,data:c||{},one:d||0}),this.length++},remove:function(b){for(var c=0;c<a.length;c++)a[c].fn===b&&(a.splice(c,1),this.length--,c--)},empty:function(){a=[],this.length=0},call:function(c,d,f){d||(d=this.length-1);var g=a[d];e(f)?f.call(this,c,g,d):e(g.fn)&&g.fn.call(c||b,g.data),g.one&&(delete a[d],this.length--)},fire:function(b,c){for(var d in a)this.call(b,d,c)}}},j={current:null,callbacks:new i,trigger:function(a){var b=this.current;this.current=a,this.callbacks.fire(a,function(c,d){e(d.fn)&&d.fn.call({current:a,previous:b},d.data)})},one:function(a,b){return this.on(a,b,1)},on:function(a,b,d){return null==b&&e(a)&&(b=a,a=c),e(b)?void this.callbacks.add(b,a,d):this},off:function(a){null==a&&this.callbacks.empty()}},k=g.mediaQuery=function(a,b){this.name=a,this.media=b,this.initialize.apply(this)};k.prototype={constructor:k,initialize:function(){this.callbacks={enter:new i,leave:new i},this.mql=b.matchMedia&&b.matchMedia(this.media)||{matches:!1,media:this.media,addListener:function(){},removeListener:function(){}};var a=this;this.mqlListener=function(b){var c=b.matches&&"enter"||"leave";a.callbacks[c].fire(a)},this.mql.addListener(this.mqlListener)},on:function(a,b,d,f){var g;if("object"==typeof a){for(g in a)this.on(g,b,a[g],f);return this}return null==d&&e(b)&&(d=b,b=c),e(d)?(a in this.callbacks&&(this.callbacks[a].add(d,b,f),this.isMatched()&&"enter"===a&&this.callbacks[a].call(this)),this):this},one:function(a,b,c){return this.on(a,b,c,1)},off:function(a,b){var c;if("object"==typeof a){for(c in a)this.off(c,a[c]);return this}return null==a&&(this.callbacks.enter.empty(),this.callbacks.leave.empty()),a in this.callbacks&&(b?this.callbacks[a].remove(b):this.callbacks[a].empty()),this},isMatched:function(){return this.mql.matches},destory:function(){this.off()}};var l=function(a,b,c,d){this.name=a,this.min=b?b:0,this.max=c?c:1/0,this.media=h.get(this.min,this.max,d),this.initialize.apply(this);var e=this;this.changeListener=function(){e.isMatched()&&j.trigger(e)},this.isMatched()&&(j.current=this),this.mql.addListener(this.changeListener)};l.prototype=k.prototype,l.prototype.constructor=l,f(l.prototype,{destory:function(){this.off(),this.mql.removeListener(this.changeHander)}});var m=function(a){this.name=a,this.sizes=[];var b=this,c=[];d(a.split(" "),function(a,d){var e=g.get(d);e&&(b.sizes.push(e),c.push(e.media))}),this.media=c.join(","),this.initialize.apply(this)};m.prototype=k.prototype,m.prototype.constructor=m;var n={},o={};g=f(g,{defined:!1,define:function(a,b){this.defined&&this.destory(),a||(a=g.defaults),this.options=f(b||{},{unit:"px"});for(var c in a)this.set(c,a[c].min,a[c].max,this.options.unit);this.defined=!0},destory:function(){d(n,function(a,b){b.destory()}),n={},j.current=null},is:function(a){var b=this.get(a);return b?b.isMatched():null},all:function(){var a=[];return d(n,function(b){a.push(b)}),a},set:function(a,b,c,d){var e=this.get(a);return e&&e.destory(),n[a]=new l(a,b||null,c||null,d||null),n[a]},get:function(a){return n.hasOwnProperty(a)?n[a]:null},getUnion:function(a){return o.hasOwnProperty(a)?o[a]:(o[a]=new m(a),o[a])},getMin:function(a){var b=this.get(a);return b?b.min:null},getMax:function(a){var b=this.get(a);return b?b.max:null},current:function(){return j.current},getMedia:function(a){var b=this.get(a);return b?b.media:null},on:function(a,b,c,d,e){if("change"===a)return d=c,c=b,j.on(c,d,e);if(a.indexOf(" ")){var f=this.getUnion(a);f&&f.on(b,c,d,e)}else{var g=this.get(a);g&&g.on(b,c,d,e)}return this},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){if("change"===a)return j.off(b);if(a.indexOf(" ")){var d=this.getUnion(a);d&&d.off(b,c)}else{var e=this.get(a);e&&e.off(b,c)}return this}})}(document,window);
/*modernizr.min.js*/
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return I("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!I("indexedDB",a)},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.borderimage=function(){return I("borderImage")},s.borderradius=function(){return I("borderRadius")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return I("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,e.prefixed=function(a,b,c){return b?I(a,b,c):I(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*ini.js*/
/*!
 * M['weburl']      网站网址
 * M['navurl']      相对于根目录地址
 * default_placeholder 开发者自定义默认图片延迟加载方式，'base64'：灰色背景；自定义背景图片路径；'blur'：图片高斯模糊；默认为'blur'
 * device_type       客户端判断（d：PC端，t：平板端，m：手机端）
 */
// 网站参数
window.MSTR=document.querySelector('meta[name=\"generator\"]').getAttribute('data-variable').split('|'),
    M=new Array();
M['weburl']=MSTR[0],
M['navurl']=MSTR[1];
M['appurl']=MSTR[2];
window.useragent=navigator.userAgent,
    useragent_tlc=useragent.toLowerCase(),
    device_type = /iPad/.test(useragent) ? 't' : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(useragent) ? 'm' : 'd',
    is_ucbro=/UC/.test(useragent),
    is_lteie9=false;
// IE9浏览器判断
if(new RegExp('msie').test(useragent_tlc)){
    var iebrowser_ver=(useragent_tlc.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, '0'])[1];
    if(iebrowser_ver<10) is_lteie9=true;
}
// 延迟加载参数(模板前台用户设置)
window.met_placeholder=$('input[name=met_placeholder]').val(),
    met_lazyloadbg_set=$('input[name=met_lazyloadbg_set]').val(),
    met_lazyloadbg=met_lazyloadbg_set||M['weburl'] +'public/ui/v2/min/img/loading.gif',
    met_lazyloadbg_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC';
if (!!window.ActiveXObject || 'ActiveXObject' in window || is_ucbro) met_lazyloadbg=met_lazyloadbg_base64;
switch(met_placeholder){
    case 'base64':
        met_placeholder=met_lazyloadbg_base64;
        break;
    case 'met_lazyloadbg':
        met_placeholder=met_lazyloadbg;
        break;
    case 'blur':
        met_placeholder='blur';
        break;
}
if(Breakpoints) Breakpoints();// 窗口宽度断点函数
// js严格模式
(function(document, window, $) {
    'use strict';
    var Site=window.Site;
    $(function(){
        Site.run();
        // 中间弹窗隐藏效果优化（点击弹窗框外上下方隐藏弹窗）
        $(document).on('click', '.modal-dialog.modal-center', function(e) {
            if(!$(e.target).closest(".modal-dialog.modal-center .modal-content").length) $(this).parents('.modal').modal('hide');
        });
    })
})(document, window, jQuery);

/*formValidation.min.js*/
/*!
 * FormValidation (http://formvalidation.io)
 * The best jQuery plugin to validate form fields. Support Bootstrap, Foundation, Pure, SemanticUI, UIKit and custom frameworks
 *
 * @version     v0.6.2-dev, built on 2015-03-13 8:15:45 AM
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */
if(window.FormValidation={AddOn:{},Framework:{},I18n:{},Validator:{}},"undefined"==typeof jQuery)throw new Error("FormValidation requires jQuery");!function(a){var b=a.fn.jquery.split(" ")[0].split(".");if(+b[0]<2&&+b[1]<9||1===+b[0]&&9===+b[1]&&+b[2]<1)throw new Error("FormValidation requires jQuery version 1.9.1 or higher")}(jQuery),function(a){FormValidation.Base=function(b,c,d){this.$form=a(b),this.options=a.extend({},a.fn.formValidation.DEFAULT_OPTIONS,c),this._namespace=d||"fv",this.$invalidFields=a([]),this.$submitButton=null,this.$hiddenButton=null,this.STATUS_NOT_VALIDATED="NOT_VALIDATED",this.STATUS_VALIDATING="VALIDATING",this.STATUS_INVALID="INVALID",this.STATUS_VALID="VALID",this.STATUS_IGNORED="IGNORED";var e=function(){for(var a=3,b=document.createElement("div"),c=b.all||[];b.innerHTML="<!--[if gt IE "+ ++a+"]><br><![endif]-->",c[0];);return a>4?a:!a}(),f=document.createElement("div");this._changeEvent=9!==e&&"oninput"in f?"input":"keyup",this._submitIfValid=null,this._cacheFields={},this._init()},FormValidation.Base.prototype={constructor:FormValidation.Base,_exceedThreshold:function(b){var c=this._namespace,d=b.attr("data-"+c+"-field"),e=this.options.fields[d].threshold||this.options.threshold;if(!e)return!0;var f=-1!==a.inArray(b.attr("type"),["button","checkbox","file","hidden","image","radio","reset","submit"]);return f||b.val().length>=e},_init:function(){var b=this,c=this._namespace,d={addOns:{},autoFocus:this.$form.attr("data-"+c+"-autofocus"),button:{selector:this.$form.attr("data-"+c+"-button-selector")||this.$form.attr("data-"+c+"-submitbuttons"),disabled:this.$form.attr("data-"+c+"-button-disabled")},control:{valid:this.$form.attr("data-"+c+"-control-valid"),invalid:this.$form.attr("data-"+c+"-control-invalid")},err:{clazz:this.$form.attr("data-"+c+"-err-clazz"),container:this.$form.attr("data-"+c+"-err-container")||this.$form.attr("data-"+c+"-container"),parent:this.$form.attr("data-"+c+"-err-parent")},events:{formInit:this.$form.attr("data-"+c+"-events-form-init"),formError:this.$form.attr("data-"+c+"-events-form-error"),formSuccess:this.$form.attr("data-"+c+"-events-form-success"),fieldAdded:this.$form.attr("data-"+c+"-events-field-added"),fieldRemoved:this.$form.attr("data-"+c+"-events-field-removed"),fieldInit:this.$form.attr("data-"+c+"-events-field-init"),fieldError:this.$form.attr("data-"+c+"-events-field-error"),fieldSuccess:this.$form.attr("data-"+c+"-events-field-success"),fieldStatus:this.$form.attr("data-"+c+"-events-field-status"),localeChanged:this.$form.attr("data-"+c+"-events-locale-changed"),validatorError:this.$form.attr("data-"+c+"-events-validator-error"),validatorSuccess:this.$form.attr("data-"+c+"-events-validator-success"),validatorIgnored:this.$form.attr("data-"+c+"-events-validator-ignored")},excluded:this.$form.attr("data-"+c+"-excluded"),icon:{valid:this.$form.attr("data-"+c+"-icon-valid")||this.$form.attr("data-"+c+"-feedbackicons-valid"),invalid:this.$form.attr("data-"+c+"-icon-invalid")||this.$form.attr("data-"+c+"-feedbackicons-invalid"),validating:this.$form.attr("data-"+c+"-icon-validating")||this.$form.attr("data-"+c+"-feedbackicons-validating"),feedback:this.$form.attr("data-"+c+"-icon-feedback")},live:this.$form.attr("data-"+c+"-live"),locale:this.$form.attr("data-"+c+"-locale"),message:this.$form.attr("data-"+c+"-message"),onError:this.$form.attr("data-"+c+"-onerror"),onSuccess:this.$form.attr("data-"+c+"-onsuccess"),row:{selector:this.$form.attr("data-"+c+"-row-selector")||this.$form.attr("data-"+c+"-group"),valid:this.$form.attr("data-"+c+"-row-valid"),invalid:this.$form.attr("data-"+c+"-row-invalid"),feedback:this.$form.attr("data-"+c+"-row-feedback")},threshold:this.$form.attr("data-"+c+"-threshold"),trigger:this.$form.attr("data-"+c+"-trigger"),verbose:this.$form.attr("data-"+c+"-verbose"),fields:{}};this.$form.attr("novalidate","novalidate").addClass(this.options.elementClass).on("submit."+c,function(a){a.preventDefault(),b.validate()}).on("click."+c,this.options.button.selector,function(){b.$submitButton=a(this),b._submitIfValid=!0}),(this.options.declarative===!0||"true"===this.options.declarative)&&this.$form.find("[name], [data-"+c+"-field]").each(function(){var e=a(this),f=e.attr("name")||e.attr("data-"+c+"-field"),g=b._parseOptions(e);g&&(e.attr("data-"+c+"-field",f),d.fields[f]=a.extend({},g,d.fields[f]))}),this.options=a.extend(!0,this.options,d),"string"==typeof this.options.err.parent&&(this.options.err.parent=new RegExp(this.options.err.parent)),this.options.container&&(this.options.err.container=this.options.container,delete this.options.container),this.options.feedbackIcons&&(this.options.icon=a.extend(!0,this.options.icon,this.options.feedbackIcons),delete this.options.feedbackIcons),this.options.group&&(this.options.row.selector=this.options.group,delete this.options.group),this.options.submitButtons&&(this.options.button.selector=this.options.submitButtons,delete this.options.submitButtons),FormValidation.I18n[this.options.locale]||(this.options.locale=a.fn.formValidation.DEFAULT_OPTIONS.locale),(this.options.declarative===!0||"true"===this.options.declarative)&&(this.options=a.extend(!0,this.options,{addOns:this._parseAddOnOptions()})),this.$hiddenButton=a("<button/>").attr("type","submit").prependTo(this.$form).addClass("fv-hidden-submit").css({display:"none",width:0,height:0}),this.$form.on("click."+this._namespace,'[type="submit"]',function(c){if(!c.isDefaultPrevented()){var d=a(c.target),e=d.is('[type="submit"]')?d.eq(0):d.parent('[type="submit"]').eq(0);!b.options.button.selector||e.is(b.options.button.selector)||e.is(b.$hiddenButton)||b.$form.off("submit."+b._namespace).submit()}});for(var e in this.options.fields)this._initField(e);for(var f in this.options.addOns)"function"==typeof FormValidation.AddOn[f].init&&FormValidation.AddOn[f].init(this,this.options.addOns[f]);this.$form.trigger(a.Event(this.options.events.formInit),{bv:this,fv:this,options:this.options}),this.options.onSuccess&&this.$form.on(this.options.events.formSuccess,function(a){FormValidation.Helper.call(b.options.onSuccess,[a])}),this.options.onError&&this.$form.on(this.options.events.formError,function(a){FormValidation.Helper.call(b.options.onError,[a])})},_initField:function(b){var c=this._namespace,d=a([]);switch(typeof b){case"object":d=b,b=b.attr("data-"+c+"-field");break;case"string":d=this.getFieldElements(b),d.attr("data-"+c+"-field",b)}if(0!==d.length&&null!==this.options.fields[b]&&null!==this.options.fields[b].validators){var e;for(e in this.options.fields[b].validators)FormValidation.Validator[e]||delete this.options.fields[b].validators[e];null===this.options.fields[b].enabled&&(this.options.fields[b].enabled=!0);for(var f=this,g=d.length,h=d.attr("type"),i=1===g||"radio"===h||"checkbox"===h,j=this._getFieldTrigger(d.eq(0)),k=a.map(j,function(a){return a+".update."+c}).join(" "),l=0;g>l;l++){var m=d.eq(l),n=this.options.fields[b].row||this.options.row.selector,o=m.closest(n),p="function"==typeof(this.options.fields[b].container||this.options.fields[b].err||this.options.err.container)?(this.options.fields[b].container||this.options.fields[b].err||this.options.err.container).call(this,m,this):this.options.fields[b].container||this.options.fields[b].err||this.options.err.container,q=p&&"tooltip"!==p&&"popover"!==p?a(p):this._getMessageContainer(m,n);p&&"tooltip"!==p&&"popover"!==p&&q.addClass(this.options.err.clazz),q.find("."+this.options.err.clazz.split(" ").join(".")+"[data-"+c+"-validator][data-"+c+'-for="'+b+'"]').remove(),o.find("i[data-"+c+'-icon-for="'+b+'"]').remove(),m.off(k).on(k,function(){f.updateStatus(a(this),f.STATUS_NOT_VALIDATED)}),m.data(c+".messages",q);for(e in this.options.fields[b].validators)m.data(c+".result."+e,this.STATUS_NOT_VALIDATED),i&&l!==g-1||a("<small/>").css("display","none").addClass(this.options.err.clazz).attr("data-"+c+"-validator",e).attr("data-"+c+"-for",b).attr("data-"+c+"-result",this.STATUS_NOT_VALIDATED).html(this._getMessage(b,e)).appendTo(q),"function"==typeof FormValidation.Validator[e].init&&FormValidation.Validator[e].init(this,m,this.options.fields[b].validators[e]);if(this.options.fields[b].icon!==!1&&"false"!==this.options.fields[b].icon&&this.options.icon&&this.options.icon.valid&&this.options.icon.invalid&&this.options.icon.validating&&(!i||l===g-1)){o.addClass(this.options.row.feedback);var r=a("<i/>").css("display","none").addClass(this.options.icon.feedback).attr("data-"+c+"-icon-for",b).insertAfter(m);(i?d:m).data(c+".icon",r),("tooltip"===p||"popover"===p)&&((i?d:m).on(this.options.events.fieldError,function(){o.addClass("fv-has-tooltip")}).on(this.options.events.fieldSuccess,function(){o.removeClass("fv-has-tooltip")}),m.off("focus.container."+c).on("focus.container."+c,function(){f._showTooltip(m,p)}).off("blur.container."+c).on("blur.container."+c,function(){f._hideTooltip(m,p)})),"string"==typeof this.options.fields[b].icon&&"true"!==this.options.fields[b].icon?r.appendTo(a(this.options.fields[b].icon)):this._fixIcon(m,r)}}d.on(this.options.events.fieldSuccess,function(a,b){var c=f.getOptions(b.field,null,"onSuccess");c&&FormValidation.Helper.call(c,[a,b])}).on(this.options.events.fieldError,function(a,b){var c=f.getOptions(b.field,null,"onError");c&&FormValidation.Helper.call(c,[a,b])}).on(this.options.events.fieldStatus,function(a,b){var c=f.getOptions(b.field,null,"onStatus");c&&FormValidation.Helper.call(c,[a,b])}).on(this.options.events.validatorError,function(a,b){var c=f.getOptions(b.field,b.validator,"onError");c&&FormValidation.Helper.call(c,[a,b])}).on(this.options.events.validatorSuccess,function(a,b){var c=f.getOptions(b.field,b.validator,"onSuccess");c&&FormValidation.Helper.call(c,[a,b])}),this.onLiveChange(d,"live",function(){f._exceedThreshold(a(this))&&f.validateField(a(this))}),d.trigger(a.Event(this.options.events.fieldInit),{bv:this,fv:this,field:b,element:d})}},_isExcluded:function(b){var c=this._namespace,d=b.attr("data-"+c+"-excluded"),e=b.attr("data-"+c+"-field")||b.attr("name");switch(!0){case!!e&&this.options.fields&&this.options.fields[e]&&("true"===this.options.fields[e].excluded||this.options.fields[e].excluded===!0):case"true"===d:case""===d:return!0;case!!e&&this.options.fields&&this.options.fields[e]&&("false"===this.options.fields[e].excluded||this.options.fields[e].excluded===!1):case"false"===d:return!1;case!!e&&this.options.fields&&this.options.fields[e]&&"function"==typeof this.options.fields[e].excluded:return this.options.fields[e].excluded.call(this,b,this);case!!e&&this.options.fields&&this.options.fields[e]&&"string"==typeof this.options.fields[e].excluded:case d:return FormValidation.Helper.call(this.options.fields[e].excluded,[b,this]);default:if(this.options.excluded){"string"==typeof this.options.excluded&&(this.options.excluded=a.map(this.options.excluded.split(","),function(b){return a.trim(b)}));for(var f=this.options.excluded.length,g=0;f>g;g++)if("string"==typeof this.options.excluded[g]&&b.is(this.options.excluded[g])||"function"==typeof this.options.excluded[g]&&this.options.excluded[g].call(this,b,this)===!0)return!0}return!1}},_getFieldTrigger:function(a){var b=this._namespace,c=a.data(b+".trigger");if(c)return c;var d=a.attr("type"),e=a.attr("data-"+b+"-field"),f="radio"===d||"checkbox"===d||"file"===d||"SELECT"===a.get(0).tagName?"change":this._changeEvent;return c=((this.options.fields[e]?this.options.fields[e].trigger:null)||this.options.trigger||f).split(" "),a.data(b+".trigger",c),c},_getMessage:function(a,b){if(!(this.options.fields[a]&&FormValidation.Validator[b]&&this.options.fields[a].validators&&this.options.fields[a].validators[b]))return"";switch(!0){case!!this.options.fields[a].validators[b].message:return this.options.fields[a].validators[b].message;case!!this.options.fields[a].message:return this.options.fields[a].message;case!!FormValidation.I18n[this.options.locale]&&!!FormValidation.I18n[this.options.locale][b]&&!!FormValidation.I18n[this.options.locale][b]["default"]:return FormValidation.I18n[this.options.locale][b]["default"];default:return this.options.message}},_getMessageContainer:function(a,b){if(!this.options.err.parent)throw new Error("The err.parent option is not defined");var c=a.parent();if(c.is(b))return c;var d=c.attr("class");return d&&this.options.err.parent.test(d)?c:this._getMessageContainer(c,b)},_parseAddOnOptions:function(){var a=this._namespace,b=this.$form.attr("data-"+a+"-addons"),c=this.options.addOns||{};if(b){b=b.replace(/\s/g,"").split(",");for(var d=0;d<b.length;d++)c[b[d]]||(c[b[d]]={})}var e,f,g,h;for(e in c)if(FormValidation.AddOn[e]){if(f=FormValidation.AddOn[e].html5Attributes)for(g in f)h=this.$form.attr("data-"+a+"-addons-"+e.toLowerCase()+"-"+g.toLowerCase()),h&&(c[e][f[g]]=h)}else delete c[e];return c},_parseOptions:function(b){var c,d,e,f,g,h,i,j,k,l=this._namespace,m=b.attr("name")||b.attr("data-"+l+"-field"),n={};for(d in FormValidation.Validator)if(c=FormValidation.Validator[d],e="data-"+l+"-"+d.toLowerCase(),f=b.attr(e)+"",k="function"==typeof c.enableByHtml5?c.enableByHtml5(b):null,k&&"false"!==f||k!==!0&&(""===f||"true"===f||e===f.toLowerCase())){c.html5Attributes=a.extend({},{message:"message",onerror:"onError",onsuccess:"onSuccess",transformer:"transformer"},c.html5Attributes),n[d]=a.extend({},k===!0?{}:k,n[d]);for(j in c.html5Attributes)g=c.html5Attributes[j],h="data-"+l+"-"+d.toLowerCase()+"-"+j,i=b.attr(h),i&&("true"===i||h===i.toLowerCase()?i=!0:"false"===i&&(i=!1),n[d][g]=i)}var o={autoFocus:b.attr("data-"+l+"-autofocus"),err:b.attr("data-"+l+"-err-container")||b.attr("data-"+l+"-container"),excluded:b.attr("data-"+l+"-excluded"),icon:b.attr("data-"+l+"-icon")||b.attr("data-"+l+"-feedbackicons")||(this.options.fields&&this.options.fields[m]?this.options.fields[m].feedbackIcons:null),message:b.attr("data-"+l+"-message"),onError:b.attr("data-"+l+"-onerror"),onStatus:b.attr("data-"+l+"-onstatus"),onSuccess:b.attr("data-"+l+"-onsuccess"),row:b.attr("data-"+l+"-row")||b.attr("data-"+l+"-group")||(this.options.fields&&this.options.fields[m]?this.options.fields[m].group:null),selector:b.attr("data-"+l+"-selector"),threshold:b.attr("data-"+l+"-threshold"),transformer:b.attr("data-"+l+"-transformer"),trigger:b.attr("data-"+l+"-trigger"),verbose:b.attr("data-"+l+"-verbose"),validators:n},p=a.isEmptyObject(o),q=a.isEmptyObject(n);return!q||!p&&this.options.fields&&this.options.fields[m]?(o.validators=n,o):null},_submit:function(){var b=this.isValid();if(null!==b){var c=b?this.options.events.formSuccess:this.options.events.formError,d=a.Event(c);this.$form.trigger(d),this.$submitButton&&(b?this._onSuccess(d):this._onError(d))}},_onError:function(b){if(!b.isDefaultPrevented()){if("submitted"===this.options.live){this.options.live="enabled";var c=this;for(var d in this.options.fields)!function(b){var d=c.getFieldElements(b);d.length&&c.onLiveChange(d,"live",function(){c._exceedThreshold(a(this))&&c.validateField(a(this))})}(d)}for(var e=this._namespace,f=0;f<this.$invalidFields.length;f++){var g=this.$invalidFields.eq(f),h=this.isOptionEnabled(g.attr("data-"+e+"-field"),"autoFocus");if(h){g.focus();break}}}},_onFieldValidated:function(b,c){var d=this._namespace,e=b.attr("data-"+d+"-field"),f=this.options.fields[e].validators,g={},h=0,i={bv:this,fv:this,field:e,element:b,validator:c,result:b.data(d+".response."+c)};if(c)switch(b.data(d+".result."+c)){case this.STATUS_INVALID:b.trigger(a.Event(this.options.events.validatorError),i);break;case this.STATUS_VALID:b.trigger(a.Event(this.options.events.validatorSuccess),i);break;case this.STATUS_IGNORED:b.trigger(a.Event(this.options.events.validatorIgnored),i)}g[this.STATUS_NOT_VALIDATED]=0,g[this.STATUS_VALIDATING]=0,g[this.STATUS_INVALID]=0,g[this.STATUS_VALID]=0,g[this.STATUS_IGNORED]=0;for(var j in f)if(f[j].enabled!==!1){h++;var k=b.data(d+".result."+j);k&&g[k]++}g[this.STATUS_VALID]+g[this.STATUS_IGNORED]===h?(this.$invalidFields=this.$invalidFields.not(b),b.trigger(a.Event(this.options.events.fieldSuccess),i)):(0===g[this.STATUS_NOT_VALIDATED]||!this.isOptionEnabled(e,"verbose"))&&0===g[this.STATUS_VALIDATING]&&g[this.STATUS_INVALID]>0&&(this.$invalidFields=this.$invalidFields.add(b),b.trigger(a.Event(this.options.events.fieldError),i))},_onSuccess:function(a){a.isDefaultPrevented()||this.disableSubmitButtons(!0).defaultSubmit()},_fixIcon:function(){},_createTooltip:function(){},_destroyTooltip:function(){},_hideTooltip:function(){},_showTooltip:function(){},defaultSubmit:function(){var b=this._namespace;this.$submitButton&&a("<input/>").attr({type:"hidden",name:this.$submitButton.attr("name")}).attr("data-"+b+"-submit-hidden","").val(this.$submitButton.val()).appendTo(this.$form),this.$form.off("submit."+b).submit()},disableSubmitButtons:function(a){return a?"disabled"!==this.options.live&&this.$form.find(this.options.button.selector).attr("disabled","disabled").addClass(this.options.button.disabled):this.$form.find(this.options.button.selector).removeAttr("disabled").removeClass(this.options.button.disabled),this},getFieldElements:function(b){if(!this._cacheFields[b])if(this.options.fields[b]&&this.options.fields[b].selector){var c=this.$form.find(this.options.fields[b].selector);this._cacheFields[b]=c.length?c:a(this.options.fields[b].selector)}else this._cacheFields[b]=this.$form.find('[name="'+b+'"]');return this._cacheFields[b]},getFieldValue:function(a,b){var c,d=this._namespace;if("string"==typeof a){if(c=this.getFieldElements(a),0===c.length)return null}else c=a,a=c.attr("data-"+d+"-field");if(!a||!this.options.fields[a])return c.val();var e=(this.options.fields[a].validators&&this.options.fields[a].validators[b]?this.options.fields[a].validators[b].transformer:null)||this.options.fields[a].transformer;return e?FormValidation.Helper.call(e,[c,b,this]):c.val()},getNamespace:function(){return this._namespace},getOptions:function(a,b,c){var d=this._namespace;if(!a)return c?this.options[c]:this.options;if("object"==typeof a&&(a=a.attr("data-"+d+"-field")),!this.options.fields[a])return null;var e=this.options.fields[a];return b?e.validators&&e.validators[b]?c?e.validators[b][c]:e.validators[b]:null:c?e[c]:e},getStatus:function(a,b){var c=this._namespace;switch(typeof a){case"object":return a.data(c+".result."+b);case"string":default:return this.getFieldElements(a).eq(0).data(c+".result."+b)}},isOptionEnabled:function(a,b){return!this.options.fields[a]||"true"!==this.options.fields[a][b]&&this.options.fields[a][b]!==!0?!this.options.fields[a]||"false"!==this.options.fields[a][b]&&this.options.fields[a][b]!==!1?"true"===this.options[b]||this.options[b]===!0:!1:!0},isValid:function(){for(var a in this.options.fields){var b=this.isValidField(a);if(null===b)return null;if(b===!1)return!1}return!0},isValidContainer:function(b){var c=this,d=this._namespace,e=[],f="string"==typeof b?a(b):b;if(0===f.length)return!0;f.find("[data-"+d+"-field]").each(function(){var b=a(this);c._isExcluded(b)||e.push(b)});for(var g=e.length,h=0;g>h;h++){var i=e[h],j=i.attr("data-"+d+"-field"),k=i.data(d+".messages").find("."+this.options.err.clazz.split(" ").join(".")+"[data-"+d+"-validator][data-"+d+'-for="'+j+'"]');if(k.filter("[data-"+d+'-result="'+this.STATUS_INVALID+'"]').length>0)return!1;if(k.filter("[data-"+d+'-result="'+this.STATUS_NOT_VALIDATED+'"]').length>0||k.filter("[data-"+d+'-result="'+this.STATUS_VALIDATING+'"]').length>0)return null}return!0},isValidField:function(b){var c=this._namespace,d=a([]);switch(typeof b){case"object":d=b,b=b.attr("data-"+c+"-field");break;case"string":d=this.getFieldElements(b)}if(0===d.length||!this.options.fields[b]||this.options.fields[b].enabled===!1)return!0;for(var e,f,g,h=d.attr("type"),i="radio"===h||"checkbox"===h?1:d.length,j=0;i>j;j++)if(e=d.eq(j),!this._isExcluded(e))for(f in this.options.fields[b].validators)if(this.options.fields[b].validators[f].enabled!==!1){if(g=e.data(c+".result."+f),g===this.STATUS_VALIDATING||g===this.STATUS_NOT_VALIDATED)return null;if(g===this.STATUS_INVALID)return!1}return!0},offLiveChange:function(b,c){if(null===b||0===b.length)return this;var d=this._namespace,e=this._getFieldTrigger(b.eq(0)),f=a.map(e,function(a){return a+"."+c+"."+d}).join(" ");return b.off(f),this},onLiveChange:function(b,c,d){if(null===b||0===b.length)return this;var e=this._namespace,f=this._getFieldTrigger(b.eq(0)),g=a.map(f,function(a){return a+"."+c+"."+e}).join(" ");switch(this.options.live){case"submitted":break;case"disabled":b.off(g);break;case"enabled":default:b.off(g).on(g,function(){d.apply(this,arguments)})}return this},updateMessage:function(b,c,d){var e=this,f=this._namespace,g=a([]);switch(typeof b){case"object":g=b,b=b.attr("data-"+f+"-field");break;case"string":g=this.getFieldElements(b)}return g.each(function(){a(this).data(f+".messages").find("."+e.options.err.clazz+"[data-"+f+'-validator="'+c+'"][data-'+f+'-for="'+b+'"]').html(d)}),this},updateStatus:function(b,c,d){var e=this._namespace,f=a([]);switch(typeof b){case"object":f=b,b=b.attr("data-"+e+"-field");break;case"string":f=this.getFieldElements(b)}if(!b||!this.options.fields[b])return this;c===this.STATUS_NOT_VALIDATED&&(this._submitIfValid=!1);for(var g=this,h=f.attr("type"),i=this.options.fields[b].row||this.options.row.selector,j="radio"===h||"checkbox"===h?1:f.length,k=0;j>k;k++){var l=f.eq(k);if(!this._isExcluded(l)){var m,n,o=l.closest(i),p=l.data(e+".messages"),q=p.find("."+this.options.err.clazz.split(" ").join(".")+"[data-"+e+"-validator][data-"+e+'-for="'+b+'"]'),r=d?q.filter("[data-"+e+'-validator="'+d+'"]'):q,s=l.data(e+".icon"),t="function"==typeof(this.options.fields[b].container||this.options.fields[b].err||this.options.err.container)?(this.options.fields[b].container||this.options.fields[b].err||this.options.err.container).call(this,l,this):this.options.fields[b].container||this.options.fields[b].err||this.options.err.container,u=null;if(d)l.data(e+".result."+d,c);else for(var v in this.options.fields[b].validators)l.data(e+".result."+v,c);switch(r.attr("data-"+e+"-result",c),c){case this.STATUS_VALIDATING:u=null,this.disableSubmitButtons(!0),l.removeClass(this.options.control.valid).removeClass(this.options.control.invalid),o.removeClass(this.options.row.valid).removeClass(this.options.row.invalid),s&&s.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).addClass(this.options.icon.validating).show();break;case this.STATUS_INVALID:u=!1,this.disableSubmitButtons(!0),l.removeClass(this.options.control.valid).addClass(this.options.control.invalid),o.removeClass(this.options.row.valid).addClass(this.options.row.invalid),s&&s.removeClass(this.options.icon.valid).removeClass(this.options.icon.validating).addClass(this.options.icon.invalid).show();break;case this.STATUS_VALID:case this.STATUS_IGNORED:m=q.filter("[data-"+e+'-result="'+this.STATUS_VALIDATING+'"]').length>0,n=q.filter("[data-"+e+'-result="'+this.STATUS_NOT_VALIDATED+'"]').length>0,u=m||n?null:q.filter("[data-"+e+'-result="'+this.STATUS_VALID+'"]').length+q.filter("[data-"+e+'-result="'+this.STATUS_IGNORED+'"]').length===q.length,l.removeClass(this.options.control.valid).removeClass(this.options.control.invalid),u===!0?(this.disableSubmitButtons(this.isValid()===!1),c===this.STATUS_VALID&&l.addClass(this.options.control.valid)):u===!1&&(this.disableSubmitButtons(!0),c===this.STATUS_VALID&&l.addClass(this.options.control.invalid)),s&&(s.removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).removeClass(this.options.icon.valid),c===this.STATUS_VALID&&s.addClass(null===u?"":u?this.options.icon.valid:m?this.options.icon.validating:this.options.icon.invalid).show());var w=this.isValidContainer(o);null!==w&&(o.removeClass(this.options.row.valid).removeClass(this.options.row.invalid),(c===this.STATUS_VALID||q.length>1)&&o.addClass(w?this.options.row.valid:this.options.row.invalid));break;case this.STATUS_NOT_VALIDATED:default:u=null,this.disableSubmitButtons(!1),l.removeClass(this.options.control.valid).removeClass(this.options.control.invalid),o.removeClass(this.options.row.valid).removeClass(this.options.row.invalid),s&&s.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).hide()}!s||"tooltip"!==t&&"popover"!==t?c===this.STATUS_INVALID?r.show():r.hide():u===!1?this._createTooltip(l,q.filter("[data-"+e+'-result="'+g.STATUS_INVALID+'"]').eq(0).html(),t):this._destroyTooltip(l,t),l.trigger(a.Event(this.options.events.fieldStatus),{bv:this,fv:this,field:b,element:l,status:c}),this._onFieldValidated(l,d)}}return this},validate:function(){if(a.isEmptyObject(this.options.fields))return this._submit(),this;this.disableSubmitButtons(!0),this._submitIfValid=!1;for(var b in this.options.fields)this.validateField(b);return this._submit(),this._submitIfValid=!0,this},validateField:function(b){var c=this._namespace,d=a([]);switch(typeof b){case"object":d=b,b=b.attr("data-"+c+"-field");break;case"string":d=this.getFieldElements(b)}if(0===d.length||!this.options.fields[b]||this.options.fields[b].enabled===!1)return this;for(var e,f,g=this,h=d.attr("type"),i="radio"===h||"checkbox"===h?1:d.length,j="radio"===h||"checkbox"===h,k=this.options.fields[b].validators,l=this.isOptionEnabled(b,"verbose"),m=0;i>m;m++){var n=d.eq(m);if(!this._isExcluded(n)){var o=!1;for(e in k){if(n.data(c+".dfs."+e)&&n.data(c+".dfs."+e).reject(),o)break;var p=n.data(c+".result."+e);if(p!==this.STATUS_VALID&&p!==this.STATUS_INVALID)if(k[e].enabled!==!1)if(n.data(c+".result."+e,this.STATUS_VALIDATING),f=FormValidation.Validator[e].validate(this,n,k[e]),"object"==typeof f&&f.resolve)this.updateStatus(j?b:n,this.STATUS_VALIDATING,e),n.data(c+".dfs."+e,f),f.done(function(a,b,d){a.removeData(c+".dfs."+b).data(c+".response."+b,d),d.message&&g.updateMessage(a,b,d.message),g.updateStatus(j?a.attr("data-"+c+"-field"):a,d.valid===!0?g.STATUS_VALID:d.valid===!1?g.STATUS_INVALID:g.STATUS_IGNORED,b),d.valid&&g._submitIfValid===!0?g._submit():d.valid!==!1||l||(o=!0)});else if("object"==typeof f&&void 0!==f.valid){if(n.data(c+".response."+e,f),f.message&&this.updateMessage(j?b:n,e,f.message),this.updateStatus(j?b:n,f.valid===!0?this.STATUS_VALID:f.valid===!1?this.STATUS_INVALID:this.STATUS_IGNORED,e),f.valid===!1&&!l)break}else if("boolean"==typeof f){if(n.data(c+".response."+e,f),this.updateStatus(j?b:n,f?this.STATUS_VALID:this.STATUS_INVALID,e),!f&&!l)break}else(null===f||void 0===f)&&(n.data(c+".response."+e,f),this.updateStatus(j?b:n,this.STATUS_IGNORED,e));else this.updateStatus(j?b:n,this.STATUS_VALID,e);else this._onFieldValidated(n,e)}}}return this},addField:function(b,c){var d=this._namespace,e=a([]);switch(typeof b){case"object":e=b,b=b.attr("data-"+d+"-field")||b.attr("name");break;case"string":delete this._cacheFields[b],e=this.getFieldElements(b)}e.attr("data-"+d+"-field",b);for(var f=e.attr("type"),g="radio"===f||"checkbox"===f?1:e.length,h=0;g>h;h++){var i=e.eq(h),j=this._parseOptions(i);j=null===j?c:a.extend(!0,j,c),this.options.fields[b]=a.extend(!0,this.options.fields[b],j),this._cacheFields[b]=this._cacheFields[b]?this._cacheFields[b].add(i):i,this._initField("checkbox"===f||"radio"===f?b:i)}return this.disableSubmitButtons(!1),this.$form.trigger(a.Event(this.options.events.fieldAdded),{field:b,element:e,options:this.options.fields[b]}),this},destroy:function(){var a,b,c,d,e,f,g,h=this._namespace;for(b in this.options.fields)for(c=this.getFieldElements(b),a=0;a<c.length;a++){d=c.eq(a);for(e in this.options.fields[b].validators)d.data(h+".dfs."+e)&&d.data(h+".dfs."+e).reject(),d.removeData(h+".result."+e).removeData(h+".response."+e).removeData(h+".dfs."+e),"function"==typeof FormValidation.Validator[e].destroy&&FormValidation.Validator[e].destroy(this,d,this.options.fields[b].validators[e])}for(b in this.options.fields)for(c=this.getFieldElements(b),g=this.options.fields[b].row||this.options.row.selector,a=0;a<c.length;a++){d=c.eq(a),d.data(h+".messages").find("."+this.options.err.clazz.split(" ").join(".")+"[data-"+h+"-validator][data-"+h+'-for="'+b+'"]').remove().end().end().removeData(h+".messages").closest(g).removeClass(this.options.row.valid).removeClass(this.options.row.invalid).removeClass(this.options.row.feedback).end().off("."+h).removeAttr("data-"+h+"-field");var i="function"==typeof(this.options.fields[b].container||this.options.fields[b].err||this.options.err.container)?(this.options.fields[b].container||this.options.fields[b].err||this.options.err.container).call(this,d,this):this.options.fields[b].container||this.options.fields[b].err||this.options.err.container;("tooltip"===i||"popover"===i)&&this._destroyTooltip(d,i),f=d.data(h+".icon"),f&&f.remove(),d.removeData(h+".icon").removeData(h+".trigger")}for(var j in this.options.addOns)"function"==typeof FormValidation.AddOn[j].destroy&&FormValidation.AddOn[j].destroy(this,this.options.addOns[j]);this.disableSubmitButtons(!1),this.$hiddenButton.remove(),this.$form.removeClass(this.options.elementClass).off("."+h).removeData("bootstrapValidator").removeData("formValidation").find("[data-"+h+"-submit-hidden]").remove().end().find('[type="submit"]').off("click."+h)},enableFieldValidators:function(a,b,c){var d=this.options.fields[a].validators;if(c&&d&&d[c]&&d[c].enabled!==b)this.options.fields[a].validators[c].enabled=b,this.updateStatus(a,this.STATUS_NOT_VALIDATED,c);else if(!c&&this.options.fields[a].enabled!==b){this.options.fields[a].enabled=b;for(var e in d)this.enableFieldValidators(a,b,e)}return this},getDynamicOption:function(a,b){var c="string"==typeof a?this.getFieldElements(a):a,d=c.val();if("function"==typeof b)return FormValidation.Helper.call(b,[d,this,c]);if("string"==typeof b){var e=this.getFieldElements(b);return e.length?e.val():FormValidation.Helper.call(b,[d,this,c])||b}return null},getForm:function(){return this.$form},getInvalidFields:function(){return this.$invalidFields},getLocale:function(){return this.options.locale},getMessages:function(b,c){var d=this,e=this._namespace,f=[],g=a([]);switch(!0){case b&&"object"==typeof b:g=b;break;case b&&"string"==typeof b:var h=this.getFieldElements(b);if(h.length>0){var i=h.attr("type");g="radio"===i||"checkbox"===i?h.eq(0):h}break;default:g=this.$invalidFields}var j=c?"[data-"+e+'-validator="'+c+'"]':"";return g.each(function(){f=f.concat(a(this).data(e+".messages").find("."+d.options.err.clazz+"[data-"+e+'-for="'+a(this).attr("data-"+e+"-field")+'"][data-'+e+'-result="'+d.STATUS_INVALID+'"]'+j).map(function(){var b=a(this).attr("data-"+e+"-validator"),c=a(this).attr("data-"+e+"-for");return d.options.fields[c].validators[b].enabled===!1?"":a(this).html()}).get())}),f},getSubmitButton:function(){return this.$submitButton},removeField:function(b){var c=this._namespace,d=a([]);switch(typeof b){case"object":d=b,b=b.attr("data-"+c+"-field")||b.attr("name"),d.attr("data-"+c+"-field",b);break;case"string":d=this.getFieldElements(b)}if(0===d.length)return this;for(var e=d.attr("type"),f="radio"===e||"checkbox"===e?1:d.length,g=0;f>g;g++){var h=d.eq(g);this.$invalidFields=this.$invalidFields.not(h),this._cacheFields[b]=this._cacheFields[b].not(h)}return this._cacheFields[b]&&0!==this._cacheFields[b].length||delete this.options.fields[b],("checkbox"===e||"radio"===e)&&this._initField(b),this.disableSubmitButtons(!1),this.$form.trigger(a.Event(this.options.events.fieldRemoved),{field:b,element:d}),this},resetField:function(b,c){var d=this._namespace,e=a([]);switch(typeof b){case"object":e=b,b=b.attr("data-"+d+"-field");break;case"string":e=this.getFieldElements(b)}var f=e.length;if(this.options.fields[b])for(var g=0;f>g;g++)for(var h in this.options.fields[b].validators)e.eq(g).removeData(d+".dfs."+h);if(c){var i=e.attr("type");"radio"===i||"checkbox"===i?e.prop("checked",!1).removeAttr("selected"):e.val("")}return this.updateStatus(b,this.STATUS_NOT_VALIDATED),this},resetForm:function(b){for(var c in this.options.fields)this.resetField(c,b);return this.$invalidFields=a([]),this.$submitButton=null,this.disableSubmitButtons(!1),this
},revalidateField:function(a){return this.updateStatus(a,this.STATUS_NOT_VALIDATED).validateField(a),this},setLocale:function(b){return this.options.locale=b,this.$form.trigger(a.Event(this.options.events.localeChanged),{locale:b,bv:this,fv:this}),this},updateOption:function(a,b,c,d){var e=this._namespace;return"object"==typeof a&&(a=a.attr("data-"+e+"-field")),this.options.fields[a]&&this.options.fields[a].validators[b]&&(this.options.fields[a].validators[b][c]=d,this.updateStatus(a,this.STATUS_NOT_VALIDATED,b)),this},validateContainer:function(b){var c=this,d=this._namespace,e=[],f="string"==typeof b?a(b):b;if(0===f.length)return this;f.find("[data-"+d+"-field]").each(function(){var b=a(this);c._isExcluded(b)||e.push(b)});for(var g=e.length,h=0;g>h;h++)this.validateField(e[h]);return this}},a.fn.formValidation=function(b){var c=arguments;return this.each(function(){var d=a(this),e=d.data("formValidation"),f="object"==typeof b&&b;if(!e){var g=(f.framework||d.attr("data-fv-framework")||"bootstrap").toLowerCase(),h=g.substr(0,1).toUpperCase()+g.substr(1);if("undefined"==typeof FormValidation.Framework[h])throw new Error("The class FormValidation.Framework."+h+" is not implemented");e=new FormValidation.Framework[h](this,f),d.addClass("fv-form-"+g).data("formValidation",e)}"string"==typeof b&&e[b].apply(e,Array.prototype.slice.call(c,1))})},a.fn.formValidation.Constructor=FormValidation.Base,a.fn.formValidation.DEFAULT_OPTIONS={autoFocus:!0,declarative:!0,elementClass:"fv-form",events:{formInit:"init.form.fv",formError:"err.form.fv",formSuccess:"success.form.fv",fieldAdded:"added.field.fv",fieldRemoved:"removed.field.fv",fieldInit:"init.field.fv",fieldError:"err.field.fv",fieldSuccess:"success.field.fv",fieldStatus:"status.field.fv",localeChanged:"changed.locale.fv",validatorError:"err.validator.fv",validatorSuccess:"success.validator.fv",validatorIgnored:"ignored.validator.fv"},excluded:[":disabled",":hidden",":not(:visible)"],fields:null,live:"enabled",locale:"en_US",message:"This value is not valid",threshold:null,verbose:!0,button:{selector:'[type="submit"]',disabled:""},control:{valid:"",invalid:""},err:{clazz:"",container:null,parent:null},icon:{valid:null,invalid:null,validating:null,feedback:""},row:{selector:null,valid:"",invalid:"",feedback:""}}}(jQuery),function(a){FormValidation.Helper={call:function(a,b){if("function"==typeof a)return a.apply(this,b);if("string"==typeof a){"()"===a.substring(a.length-2)&&(a=a.substring(0,a.length-2));for(var c=a.split("."),d=c.pop(),e=window,f=0;f<c.length;f++)e=e[c[f]];return"undefined"==typeof e[d]?null:e[d].apply(this,b)}},date:function(a,b,c,d){if(isNaN(a)||isNaN(b)||isNaN(c))return!1;if(c.length>2||b.length>2||a.length>4)return!1;if(c=parseInt(c,10),b=parseInt(b,10),a=parseInt(a,10),1e3>a||a>9999||0>=b||b>12)return!1;var e=[31,28,31,30,31,30,31,31,30,31,30,31];if((a%400===0||a%100!==0&&a%4===0)&&(e[1]=29),0>=c||c>e[b-1])return!1;if(d===!0){var f=new Date,g=f.getFullYear(),h=f.getMonth(),i=f.getDate();return g>a||a===g&&h>b-1||a===g&&b-1===h&&i>c}return!0},format:function(b,c){a.isArray(c)||(c=[c]);for(var d in c)b=b.replace("%s",c[d]);return b},luhn:function(a){for(var b=a.length,c=0,d=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],e=0;b--;)e+=d[c][parseInt(a.charAt(b),10)],c^=1;return e%10===0&&e>0},mod11And10:function(a){for(var b=5,c=a.length,d=0;c>d;d++)b=(2*(b||10)%11+parseInt(a.charAt(d),10))%10;return 1===b},mod37And36:function(a,b){b=b||"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(var c=b.length,d=a.length,e=Math.floor(c/2),f=0;d>f;f++)e=(2*(e||c)%(c+1)+b.indexOf(a.charAt(f)))%c;return 1===e}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{base64:{"default":"Please enter a valid base 64 encoded"}}}),FormValidation.Validator.base64={validate:function(a,b){var c=a.getFieldValue(b,"base64");return""===c?!0:/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(c)}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{between:{"default":"Please enter a value between %s and %s",notInclusive:"Please enter a value between %s and %s strictly"}}}),FormValidation.Validator.between={html5Attributes:{message:"message",min:"min",max:"max",inclusive:"inclusive"},enableByHtml5:function(a){return"range"===a.attr("type")?{min:a.attr("min"),max:a.attr("max")}:!1},validate:function(b,c,d){var e=b.getFieldValue(c,"between");if(""===e)return!0;if(e=this._format(e),!a.isNumeric(e))return!1;var f=b.getLocale(),g=a.isNumeric(d.min)?d.min:b.getDynamicOption(c,d.min),h=a.isNumeric(d.max)?d.max:b.getDynamicOption(c,d.max),i=this._format(g),j=this._format(h);return e=parseFloat(e),d.inclusive===!0||void 0===d.inclusive?{valid:e>=i&&j>=e,message:FormValidation.Helper.format(d.message||FormValidation.I18n[f].between["default"],[g,h])}:{valid:e>i&&j>e,message:FormValidation.Helper.format(d.message||FormValidation.I18n[f].between.notInclusive,[g,h])}},_format:function(a){return(a+"").replace(",",".")}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{bic:{"default":"Please enter a valid BIC number"}}}),FormValidation.Validator.bic={validate:function(a,b){var c=a.getFieldValue(b,"bic");return""===c?!0:/^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(c)}}}(jQuery),function(){FormValidation.Validator.blank={validate:function(){return!0}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{callback:{"default":"Please enter a valid value"}}}),FormValidation.Validator.callback={html5Attributes:{message:"message",callback:"callback"},validate:function(b,c,d){var e=b.getFieldValue(c,"callback"),f=new a.Deferred,g={valid:!0};if(d.callback){var h=FormValidation.Helper.call(d.callback,[e,b,c]);g="boolean"==typeof h||null===h?{valid:h}:h}return f.resolve(c,"callback",g),f}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{choice:{"default":"Please enter a valid value",less:"Please choose %s options at minimum",more:"Please choose %s options at maximum",between:"Please choose %s - %s options"}}}),FormValidation.Validator.choice={html5Attributes:{message:"message",min:"min",max:"max"},validate:function(b,c,d){var e=b.getLocale(),f=b.getNamespace(),g=c.is("select")?b.getFieldElements(c.attr("data-"+f+"-field")).find("option").filter(":selected").length:b.getFieldElements(c.attr("data-"+f+"-field")).filter(":checked").length,h=d.min?a.isNumeric(d.min)?d.min:b.getDynamicOption(c,d.min):null,i=d.max?a.isNumeric(d.max)?d.max:b.getDynamicOption(c,d.max):null,j=!0,k=d.message||FormValidation.I18n[e].choice["default"];switch((h&&g<parseInt(h,10)||i&&g>parseInt(i,10))&&(j=!1),!0){case!!h&&!!i:k=FormValidation.Helper.format(d.message||FormValidation.I18n[e].choice.between,[parseInt(h,10),parseInt(i,10)]);break;case!!h:k=FormValidation.Helper.format(d.message||FormValidation.I18n[e].choice.less,parseInt(h,10));break;case!!i:k=FormValidation.Helper.format(d.message||FormValidation.I18n[e].choice.more,parseInt(i,10))}return{valid:j,message:k}}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{color:{"default":"Please enter a valid color"}}}),FormValidation.Validator.color={html5Attributes:{message:"message",type:"type"},enableByHtml5:function(a){return"color"===a.attr("type")},SUPPORTED_TYPES:["hex","rgb","rgba","hsl","hsla","keyword"],KEYWORD_COLORS:["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","green","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","transparent","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],validate:function(b,c,d){var e=b.getFieldValue(c,"color");if(""===e)return!0;if(this.enableByHtml5(c))return/^#[0-9A-F]{6}$/i.test(e);var f=d.type||this.SUPPORTED_TYPES;a.isArray(f)||(f=f.replace(/s/g,"").split(","));for(var g,h,i=!1,j=0;j<f.length;j++)if(h=f[j],g="_"+h.toLowerCase(),i=i||this[g](e))return!0;return!1},_hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},_hsl:function(a){return/^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(a)},_hsla:function(a){return/^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(a)},_keyword:function(b){return a.inArray(b,this.KEYWORD_COLORS)>=0},_rgb:function(a){var b=/^rgb\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){2}(\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*)\)$/,c=/^rgb\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/;return b.test(a)||c.test(a)},_rgba:function(a){var b=/^rgba\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/,c=/^rgba\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/;return b.test(a)||c.test(a)}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{creditCard:{"default":"Please enter a valid credit card number"}}}),FormValidation.Validator.creditCard={validate:function(b,c){var d=b.getFieldValue(c,"creditCard");if(""===d)return!0;if(/[^0-9-\s]+/.test(d))return!1;if(d=d.replace(/\D/g,""),!FormValidation.Helper.luhn(d))return!1;var e,f,g={AMERICAN_EXPRESS:{length:[15],prefix:["34","37"]},DINERS_CLUB:{length:[14],prefix:["300","301","302","303","304","305","36"]},DINERS_CLUB_US:{length:[16],prefix:["54","55"]},DISCOVER:{length:[16],prefix:["6011","622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925","644","645","646","647","648","649","65"]},JCB:{length:[16],prefix:["3528","3529","353","354","355","356","357","358"]},LASER:{length:[16,17,18,19],prefix:["6304","6706","6771","6709"]},MAESTRO:{length:[12,13,14,15,16,17,18,19],prefix:["5018","5020","5038","6304","6759","6761","6762","6763","6764","6765","6766"]},MASTERCARD:{length:[16],prefix:["51","52","53","54","55"]},SOLO:{length:[16,18,19],prefix:["6334","6767"]},UNIONPAY:{length:[16,17,18,19],prefix:["622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925"]},VISA:{length:[16],prefix:["4"]}};for(e in g)for(f in g[e].prefix)if(d.substr(0,g[e].prefix[f].length)===g[e].prefix[f]&&-1!==a.inArray(d.length,g[e].length))return{valid:!0,type:e};return!1}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{cusip:{"default":"Please enter a valid CUSIP number"}}}),FormValidation.Validator.cusip={validate:function(b,c){var d=b.getFieldValue(c,"cusip");if(""===d)return!0;if(d=d.toUpperCase(),!/^[0-9A-Z]{9}$/.test(d))return!1;for(var e=a.map(d.split(""),function(a){var b=a.charCodeAt(0);return b>="A".charCodeAt(0)&&b<="Z".charCodeAt(0)?b-"A".charCodeAt(0)+10:a}),f=e.length,g=0,h=0;f-1>h;h++){var i=parseInt(e[h],10);h%2!==0&&(i*=2),i>9&&(i-=9),g+=i}return g=(10-g%10)%10,g===parseInt(e[f-1],10)}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{cvv:{"default":"Please enter a valid CVV number"}}}),FormValidation.Validator.cvv={html5Attributes:{message:"message",ccfield:"creditCardField"},init:function(a,b,c){if(c.creditCardField){var d=a.getFieldElements(c.creditCardField);a.onLiveChange(d,"live_cvv",function(){var c=a.getStatus(b,"cvv");c!==a.STATUS_NOT_VALIDATED&&a.revalidateField(b)})}},destroy:function(a,b,c){if(c.creditCardField){var d=a.getFieldElements(c.creditCardField);a.offLiveChange(d,"live_cvv")}},validate:function(b,c,d){var e=b.getFieldValue(c,"cvv");if(""===e)return!0;if(!/^[0-9]{3,4}$/.test(e))return!1;if(!d.creditCardField)return!0;var f=b.getFieldElements(d.creditCardField).val();if(""===f)return!0;f=f.replace(/\D/g,"");var g,h,i={AMERICAN_EXPRESS:{length:[15],prefix:["34","37"]},DINERS_CLUB:{length:[14],prefix:["300","301","302","303","304","305","36"]},DINERS_CLUB_US:{length:[16],prefix:["54","55"]},DISCOVER:{length:[16],prefix:["6011","622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925","644","645","646","647","648","649","65"]},JCB:{length:[16],prefix:["3528","3529","353","354","355","356","357","358"]},LASER:{length:[16,17,18,19],prefix:["6304","6706","6771","6709"]},MAESTRO:{length:[12,13,14,15,16,17,18,19],prefix:["5018","5020","5038","6304","6759","6761","6762","6763","6764","6765","6766"]},MASTERCARD:{length:[16],prefix:["51","52","53","54","55"]},SOLO:{length:[16,18,19],prefix:["6334","6767"]},UNIONPAY:{length:[16,17,18,19],prefix:["622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925"]},VISA:{length:[16],prefix:["4"]}},j=null;for(g in i)for(h in i[g].prefix)if(f.substr(0,i[g].prefix[h].length)===i[g].prefix[h]&&-1!==a.inArray(f.length,i[g].length)){j=g;break}return null===j?!1:"AMERICAN_EXPRESS"===j?4===e.length:3===e.length}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{date:{"default":"Please enter a valid date",min:"Please enter a date after %s",max:"Please enter a date before %s",range:"Please enter a date in the range %s - %s"}}}),FormValidation.Validator.date={html5Attributes:{message:"message",format:"format",min:"min",max:"max",separator:"separator"},validate:function(b,c,d){var e=b.getFieldValue(c,"date");if(""===e)return!0;d.format=d.format||"MM/DD/YYYY","date"===c.attr("type")&&(d.format="YYYY-MM-DD");var f=b.getLocale(),g=d.message||FormValidation.I18n[f].date["default"],h=d.format.split(" "),i=h[0],j=h.length>1?h[1]:null,k=h.length>2?h[2]:null,l=e.split(" "),m=l[0],n=l.length>1?l[1]:null;if(h.length!==l.length)return{valid:!1,message:g};var o=d.separator;if(o||(o=-1!==m.indexOf("/")?"/":-1!==m.indexOf("-")?"-":-1!==m.indexOf(".")?".":null),null===o||-1===m.indexOf(o))return{valid:!1,message:g};if(m=m.split(o),i=i.split(o),m.length!==i.length)return{valid:!1,message:g};var p=m[a.inArray("YYYY",i)],q=m[a.inArray("MM",i)],r=m[a.inArray("DD",i)];if(!p||!q||!r||4!==p.length)return{valid:!1,message:g};var s=null,t=null,u=null;if(j){if(j=j.split(":"),n=n.split(":"),j.length!==n.length)return{valid:!1,message:g};if(t=n.length>0?n[0]:null,s=n.length>1?n[1]:null,u=n.length>2?n[2]:null,""===t||""===s||""===u)return{valid:!1,message:g};if(u){if(isNaN(u)||u.length>2)return{valid:!1,message:g};if(u=parseInt(u,10),0>u||u>60)return{valid:!1,message:g}}if(t){if(isNaN(t)||t.length>2)return{valid:!1,message:g};if(t=parseInt(t,10),0>t||t>=24||k&&t>12)return{valid:!1,message:g}}if(s){if(isNaN(s)||s.length>2)return{valid:!1,message:g};if(s=parseInt(s,10),0>s||s>59)return{valid:!1,message:g}}}var v=FormValidation.Helper.date(p,q,r),w=null,x=null,y=d.min,z=d.max;switch(y&&(isNaN(Date.parse(y))&&(y=b.getDynamicOption(c,y)),w=y instanceof Date?y:this._parseDate(y,i,o),y=y instanceof Date?this._formatDate(y,d.format):y),z&&(isNaN(Date.parse(z))&&(z=b.getDynamicOption(c,z)),x=z instanceof Date?z:this._parseDate(z,i,o),z=z instanceof Date?this._formatDate(z,d.format):z),m=new Date(p,q-1,r,t,s,u),!0){case y&&!z&&v:v=m.getTime()>=w.getTime(),g=d.message||FormValidation.Helper.format(FormValidation.I18n[f].date.min,y);break;case z&&!y&&v:v=m.getTime()<=x.getTime(),g=d.message||FormValidation.Helper.format(FormValidation.I18n[f].date.max,z);break;case z&&y&&v:v=m.getTime()<=x.getTime()&&m.getTime()>=w.getTime(),g=d.message||FormValidation.Helper.format(FormValidation.I18n[f].date.range,[y,z])}return{valid:v,message:g}},_parseDate:function(b,c,d){var e=0,f=0,g=0,h=b.split(" "),i=h[0],j=h.length>1?h[1]:null;i=i.split(d);var k=i[a.inArray("YYYY",c)],l=i[a.inArray("MM",c)],m=i[a.inArray("DD",c)];return j&&(j=j.split(":"),f=j.length>0?j[0]:null,e=j.length>1?j[1]:null,g=j.length>2?j[2]:null),new Date(k,l-1,m,f,e,g)},_formatDate:function(a,b){b=b.replace(/Y/g,"y").replace(/M/g,"m").replace(/D/g,"d").replace(/:m/g,":M").replace(/:mm/g,":MM").replace(/:S/,":s").replace(/:SS/,":ss");var c={d:function(a){return a.getDate()},dd:function(a){var b=a.getDate();return 10>b?"0"+b:b},m:function(a){return a.getMonth()+1},mm:function(a){var b=a.getMonth()+1;return 10>b?"0"+b:b},yy:function(a){return(""+a.getFullYear()).substr(2)},yyyy:function(a){return a.getFullYear()},h:function(a){return a.getHours()%12||12},hh:function(a){var b=a.getHours()%12||12;return 10>b?"0"+b:b},H:function(a){return a.getHours()},HH:function(a){var b=a.getHours();return 10>b?"0"+b:b},M:function(a){return a.getMinutes()},MM:function(a){var b=a.getMinutes();return 10>b?"0"+b:b},s:function(a){return a.getSeconds()},ss:function(a){var b=a.getSeconds();return 10>b?"0"+b:b}};return b.replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g,function(b){return c[b]?c[b](a):b.slice(1,b.length-1)})}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{different:{"default":"Please enter a different value"}}}),FormValidation.Validator.different={html5Attributes:{message:"message",field:"field"},init:function(a,b,c){for(var d=c.field.split(","),e=0;e<d.length;e++){var f=a.getFieldElements(d[e]);a.onLiveChange(f,"live_different",function(){var c=a.getStatus(b,"different");c!==a.STATUS_NOT_VALIDATED&&a.revalidateField(b)})}},destroy:function(a,b,c){for(var d=c.field.split(","),e=0;e<d.length;e++){var f=a.getFieldElements(d[e]);a.offLiveChange(f,"live_different")}},validate:function(a,b,c){var d=a.getFieldValue(b,"different");if(""===d)return!0;for(var e=c.field.split(","),f=!0,g=0;g<e.length;g++){var h=a.getFieldElements(e[g]);if(null!=h&&0!==h.length){var i=a.getFieldValue(h,"different");d===i?f=!1:""!==i&&a.updateStatus(h,a.STATUS_VALID,"different")}}return f}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{digits:{"default":"Please enter only digits"}}}),FormValidation.Validator.digits={validate:function(a,b){var c=a.getFieldValue(b,"digits");return""===c?!0:/^\d+$/.test(c)}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{ean:{"default":"Please enter a valid EAN number"}}}),FormValidation.Validator.ean={validate:function(a,b){var c=a.getFieldValue(b,"ean");if(""===c)return!0;if(!/^(\d{8}|\d{12}|\d{13})$/.test(c))return!1;for(var d=c.length,e=0,f=8===d?[3,1]:[1,3],g=0;d-1>g;g++)e+=parseInt(c.charAt(g),10)*f[g%2];return e=(10-e%10)%10,e+""===c.charAt(d-1)}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{ein:{"default":"Please enter a valid EIN number"}}}),FormValidation.Validator.ein={CAMPUS:{ANDOVER:["10","12"],ATLANTA:["60","67"],AUSTIN:["50","53"],BROOKHAVEN:["01","02","03","04","05","06","11","13","14","16","21","22","23","25","34","51","52","54","55","56","57","58","59","65"],CINCINNATI:["30","32","35","36","37","38","61"],FRESNO:["15","24"],KANSAS_CITY:["40","44"],MEMPHIS:["94","95"],OGDEN:["80","90"],PHILADELPHIA:["33","39","41","42","43","46","48","62","63","64","66","68","71","72","73","74","75","76","77","81","82","83","84","85","86","87","88","91","92","93","98","99"],INTERNET:["20","26","27","45","46"],SMALL_BUSINESS_ADMINISTRATION:["31"]},validate:function(b,c){var d=b.getFieldValue(c,"ein");if(""===d)return!0;if(!/^[0-9]{2}-?[0-9]{7}$/.test(d))return!1;var e=d.substr(0,2)+"";for(var f in this.CAMPUS)if(-1!==a.inArray(e,this.CAMPUS[f]))return{valid:!0,campus:f};return!1}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{emailAddress:{"default":"Please enter a valid email address"}}}),FormValidation.Validator.emailAddress={html5Attributes:{message:"message",multiple:"multiple",separator:"separator"},enableByHtml5:function(a){return"email"===a.attr("type")},validate:function(a,b,c){var d=a.getFieldValue(b,"emailAddress");if(""===d)return!0;var e=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,f=c.multiple===!0||"true"===c.multiple;if(f){for(var g=c.separator||/[,;]/,h=this._splitEmailAddresses(d,g),i=0;i<h.length;i++)if(!e.test(h[i]))return!1;return!0}return e.test(d)},_splitEmailAddresses:function(a,b){for(var c=a.split(/"/),d=c.length,e=[],f="",g=0;d>g;g++)if(g%2===0){var h=c[g].split(b),i=h.length;if(1===i)f+=h[0];else{e.push(f+h[0]);for(var j=1;i-1>j;j++)e.push(h[j]);f=h[i-1]}}else f+='"'+c[g],d-1>g&&(f+='"');return e.push(f),e}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{file:{"default":"Please choose a valid file"}}}),FormValidation.Validator.file={html5Attributes:{extension:"extension",maxfiles:"maxFiles",minfiles:"minFiles",maxsize:"maxSize",minsize:"minSize",maxtotalsize:"maxTotalSize",mintotalsize:"minTotalSize",message:"message",type:"type"},validate:function(b,c,d){var e=b.getFieldValue(c,"file");if(""===e)return!0;var f,g=d.extension?d.extension.toLowerCase().split(","):null,h=d.type?d.type.toLowerCase().split(","):null,i=window.File&&window.FileList&&window.FileReader;if(i){var j=c.get(0).files,k=j.length,l=0;if(d.maxFiles&&k>parseInt(d.maxFiles,10)||d.minFiles&&k<parseInt(d.minFiles,10))return!1;for(var m=0;k>m;m++)if(l+=j[m].size,f=j[m].name.substr(j[m].name.lastIndexOf(".")+1),d.minSize&&j[m].size<parseInt(d.minSize,10)||d.maxSize&&j[m].size>parseInt(d.maxSize,10)||g&&-1===a.inArray(f.toLowerCase(),g)||j[m].type&&h&&-1===a.inArray(j[m].type.toLowerCase(),h))return!1;if(d.maxTotalSize&&l>parseInt(d.maxTotalSize,10)||d.minTotalSize&&l<parseInt(d.minTotalSize,10))return!1}else if(f=e.substr(e.lastIndexOf(".")+1),g&&-1===a.inArray(f.toLowerCase(),g))return!1;return!0}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{greaterThan:{"default":"Please enter a value greater than or equal to %s",notInclusive:"Please enter a value greater than %s"}}}),FormValidation.Validator.greaterThan={html5Attributes:{message:"message",value:"value",inclusive:"inclusive"},enableByHtml5:function(a){var b=a.attr("type"),c=a.attr("min");return c&&"date"!==b?{value:c}:!1},validate:function(b,c,d){var e=b.getFieldValue(c,"greaterThan");if(""===e)return!0;if(e=this._format(e),!a.isNumeric(e))return!1;var f=b.getLocale(),g=a.isNumeric(d.value)?d.value:b.getDynamicOption(c,d.value),h=this._format(g);return e=parseFloat(e),d.inclusive===!0||void 0===d.inclusive?{valid:e>=h,message:FormValidation.Helper.format(d.message||FormValidation.I18n[f].greaterThan["default"],g)}:{valid:e>h,message:FormValidation.Helper.format(d.message||FormValidation.I18n[f].greaterThan.notInclusive,g)}},_format:function(a){return(a+"").replace(",",".")}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{grid:{"default":"Please enter a valid GRId number"}}}),FormValidation.Validator.grid={validate:function(a,b){var c=a.getFieldValue(b,"grid");return""===c?!0:(c=c.toUpperCase(),/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(c)?(c=c.replace(/\s/g,"").replace(/-/g,""),"GRID:"===c.substr(0,5)&&(c=c.substr(5)),FormValidation.Helper.mod37And36(c)):!1)}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{hex:{"default":"Please enter a valid hexadecimal number"}}}),FormValidation.Validator.hex={validate:function(a,b){var c=a.getFieldValue(b,"hex");return""===c?!0:/^[0-9a-fA-F]+$/.test(c)}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{iban:{"default":"Please enter a valid IBAN number",country:"Please enter a valid IBAN number in %s",countries:{AD:"Andorra",AE:"United Arab Emirates",AL:"Albania",AO:"Angola",AT:"Austria",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BR:"Brazil",CH:"Switzerland",CI:"Ivory Coast",CM:"Cameroon",CR:"Costa Rica",CV:"Cape Verde",CY:"Cyprus",CZ:"Czech Republic",DE:"Germany",DK:"Denmark",DO:"Dominican Republic",DZ:"Algeria",EE:"Estonia",ES:"Spain",FI:"Finland",FO:"Faroe Islands",FR:"France",GB:"United Kingdom",GE:"Georgia",GI:"Gibraltar",GL:"Greenland",GR:"Greece",GT:"Guatemala",HR:"Croatia",HU:"Hungary",IE:"Ireland",IL:"Israel",IR:"Iran",IS:"Iceland",IT:"Italy",JO:"Jordan",KW:"Kuwait",KZ:"Kazakhstan",LB:"Lebanon",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MG:"Madagascar",MK:"Macedonia",ML:"Mali",MR:"Mauritania",MT:"Malta",MU:"Mauritius",MZ:"Mozambique",NL:"Netherlands",NO:"Norway",PK:"Pakistan",PL:"Poland",PS:"Palestine",PT:"Portugal",QA:"Qatar",RO:"Romania",RS:"Serbia",SA:"Saudi Arabia",SE:"Sweden",SI:"Slovenia",SK:"Slovakia",SM:"San Marino",SN:"Senegal",TN:"Tunisia",TR:"Turkey",VG:"Virgin Islands, British"}}}}),FormValidation.Validator.iban={html5Attributes:{message:"message",country:"country"},REGEX:{AD:"AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}",AE:"AE[0-9]{2}[0-9]{3}[0-9]{16}",AL:"AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}",AO:"AO[0-9]{2}[0-9]{21}",AT:"AT[0-9]{2}[0-9]{5}[0-9]{11}",AZ:"AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}",BA:"BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}",BE:"BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}",BF:"BF[0-9]{2}[0-9]{23}",BG:"BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}",BH:"BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}",BI:"BI[0-9]{2}[0-9]{12}",BJ:"BJ[0-9]{2}[A-Z]{1}[0-9]{23}",BR:"BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]",CH:"CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}",CI:"CI[0-9]{2}[A-Z]{1}[0-9]{23}",CM:"CM[0-9]{2}[0-9]{23}",CR:"CR[0-9]{2}[0-9]{3}[0-9]{14}",CV:"CV[0-9]{2}[0-9]{21}",CY:"CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}",CZ:"CZ[0-9]{2}[0-9]{20}",DE:"DE[0-9]{2}[0-9]{8}[0-9]{10}",DK:"DK[0-9]{2}[0-9]{14}",DO:"DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}",DZ:"DZ[0-9]{2}[0-9]{20}",EE:"EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}",ES:"ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}",FI:"FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}",FO:"FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",FR:"FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",GB:"GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",GE:"GE[0-9]{2}[A-Z]{2}[0-9]{16}",GI:"GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}",GL:"GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",GR:"GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}",GT:"GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}",HR:"HR[0-9]{2}[0-9]{7}[0-9]{10}",HU:"HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}",IE:"IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",IL:"IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}",IR:"IR[0-9]{2}[0-9]{22}",IS:"IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}",IT:"IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",JO:"JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}",KW:"KW[0-9]{2}[A-Z]{4}[0-9]{22}",KZ:"KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}",LB:"LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}",LI:"LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}",LT:"LT[0-9]{2}[0-9]{5}[0-9]{11}",LU:"LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}",LV:"LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}",MC:"MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",MD:"MD[0-9]{2}[A-Z0-9]{20}",ME:"ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",MG:"MG[0-9]{2}[0-9]{23}",MK:"MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}",ML:"ML[0-9]{2}[A-Z]{1}[0-9]{23}",MR:"MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}",MT:"MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}",MU:"MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}",MZ:"MZ[0-9]{2}[0-9]{21}",NL:"NL[0-9]{2}[A-Z]{4}[0-9]{10}",NO:"NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}",PK:"PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",PL:"PL[0-9]{2}[0-9]{8}[0-9]{16}",PS:"PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",PT:"PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}",QA:"QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",RO:"RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",RS:"RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",SA:"SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}",SE:"SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}",SI:"SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}",SK:"SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}",SM:"SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",SN:"SN[0-9]{2}[A-Z]{1}[0-9]{23}",TN:"TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",TR:"TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}",VG:"VG[0-9]{2}[A-Z]{4}[0-9]{16}"},validate:function(b,c,d){var e=b.getFieldValue(c,"iban");if(""===e)return!0;e=e.replace(/[^a-zA-Z0-9]/g,"").toUpperCase();var f=d.country;f?"string"==typeof f&&this.REGEX[f]||(f=b.getDynamicOption(c,f)):f=e.substr(0,2);var g=b.getLocale();if(!this.REGEX[f])return!0;if(!new RegExp("^"+this.REGEX[f]+"$").test(e))return{valid:!1,message:FormValidation.Helper.format(d.message||FormValidation.I18n[g].iban.country,FormValidation.I18n[g].iban.countries[f])};e=e.substr(4)+e.substr(0,4),e=a.map(e.split(""),function(a){var b=a.charCodeAt(0);return b>="A".charCodeAt(0)&&b<="Z".charCodeAt(0)?b-"A".charCodeAt(0)+10:a}),e=e.join("");for(var h=parseInt(e.substr(0,1),10),i=e.length,j=1;i>j;++j)h=(10*h+parseInt(e.substr(j,1),10))%97;return{valid:1===h,message:FormValidation.Helper.format(d.message||FormValidation.I18n[g].iban.country,FormValidation.I18n[g].iban.countries[f])}}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{id:{"default":"Please enter a valid identification number",country:"Please enter a valid identification number in %s",countries:{BA:"Bosnia and Herzegovina",BG:"Bulgaria",BR:"Brazil",CH:"Switzerland",CL:"Chile",CN:"China",CZ:"Czech Republic",DK:"Denmark",EE:"Estonia",ES:"Spain",FI:"Finland",HR:"Croatia",IE:"Ireland",IS:"Iceland",LT:"Lithuania",LV:"Latvia",ME:"Montenegro",MK:"Macedonia",NL:"Netherlands",PL:"Poland",RO:"Romania",RS:"Serbia",SE:"Sweden",SI:"Slovenia",SK:"Slovakia",SM:"San Marino",TH:"Thailand",ZA:"South Africa"}}}}),FormValidation.Validator.id={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["BA","BG","BR","CH","CL","CN","CZ","DK","EE","ES","FI","HR","IE","IS","LT","LV","ME","MK","NL","PL","RO","RS","SE","SI","SK","SM","TH","ZA"],validate:function(b,c,d){var e=b.getFieldValue(c,"id");if(""===e)return!0;var f=b.getLocale(),g=d.country;if(g?("string"!=typeof g||-1===a.inArray(g.toUpperCase(),this.COUNTRY_CODES))&&(g=b.getDynamicOption(c,g)):g=e.substr(0,2),-1===a.inArray(g,this.COUNTRY_CODES))return!0;var h=["_",g.toLowerCase()].join("");return this[h](e)?!0:{valid:!1,message:FormValidation.Helper.format(d.message||FormValidation.I18n[f].id.country,FormValidation.I18n[f].id.countries[g.toUpperCase()])}},_validateJMBG:function(a,b){if(!/^\d{13}$/.test(a))return!1;var c=parseInt(a.substr(0,2),10),d=parseInt(a.substr(2,2),10),e=(parseInt(a.substr(4,3),10),parseInt(a.substr(7,2),10)),f=parseInt(a.substr(12,1),10);
if(c>31||d>12)return!1;for(var g=0,h=0;6>h;h++)g+=(7-h)*(parseInt(a.charAt(h),10)+parseInt(a.charAt(h+6),10));if(g=11-g%11,(10===g||11===g)&&(g=0),g!==f)return!1;switch(b.toUpperCase()){case"BA":return e>=10&&19>=e;case"MK":return e>=41&&49>=e;case"ME":return e>=20&&29>=e;case"RS":return e>=70&&99>=e;case"SI":return e>=50&&59>=e;default:return!0}},_ba:function(a){return this._validateJMBG(a,"BA")},_mk:function(a){return this._validateJMBG(a,"MK")},_me:function(a){return this._validateJMBG(a,"ME")},_rs:function(a){return this._validateJMBG(a,"RS")},_si:function(a){return this._validateJMBG(a,"SI")},_bg:function(a){if(!/^\d{10}$/.test(a)&&!/^\d{6}\s\d{3}\s\d{1}$/.test(a))return!1;a=a.replace(/\s/g,"");var b=parseInt(a.substr(0,2),10)+1900,c=parseInt(a.substr(2,2),10),d=parseInt(a.substr(4,2),10);if(c>40?(b+=100,c-=40):c>20&&(b-=100,c-=20),!FormValidation.Helper.date(b,c,d))return!1;for(var e=0,f=[2,4,8,5,10,9,7,3,6],g=0;9>g;g++)e+=parseInt(a.charAt(g),10)*f[g];return e=e%11%10,e+""===a.substr(9,1)},_br:function(a){if(a=a.replace(/\D/g,""),!/^\d{11}$/.test(a)||/^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(a))return!1;for(var b=0,c=0;9>c;c++)b+=(10-c)*parseInt(a.charAt(c),10);if(b=11-b%11,(10===b||11===b)&&(b=0),b+""!==a.charAt(9))return!1;var d=0;for(c=0;10>c;c++)d+=(11-c)*parseInt(a.charAt(c),10);return d=11-d%11,(10===d||11===d)&&(d=0),d+""===a.charAt(10)},_ch:function(a){if(!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(a))return!1;a=a.replace(/\D/g,"").substr(3);for(var b=a.length,c=0,d=8===b?[3,1]:[1,3],e=0;b-1>e;e++)c+=parseInt(a.charAt(e),10)*d[e%2];return c=10-c%10,c+""===a.charAt(b-1)},_cl:function(a){if(!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(a))return!1;for(a=a.replace(/\-/g,"");a.length<9;)a="0"+a;for(var b=0,c=[3,2,7,6,5,4,3,2],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b=11-b%11,11===b?b=0:10===b&&(b="K"),b+""===a.charAt(8).toUpperCase()},_cn:function(b){if(b=b.trim(),!/^\d{15}$/.test(b)&&!/^\d{17}[\dXx]{1}$/.test(b))return!1;var c={11:{0:[0],1:[[0,9],[11,17]],2:[0,28,29]},12:{0:[0],1:[[0,16]],2:[0,21,23,25]},13:{0:[0],1:[[0,5],7,8,21,[23,33],[81,85]],2:[[0,5],[7,9],[23,25],27,29,30,81,83],3:[[0,4],[21,24]],4:[[0,4],6,21,[23,35],81],5:[[0,3],[21,35],81,82],6:[[0,4],[21,38],[81,84]],7:[[0,3],5,6,[21,33]],8:[[0,4],[21,28]],9:[[0,3],[21,30],[81,84]],10:[[0,3],[22,26],28,81,82],11:[[0,2],[21,28],81,82]},14:{0:[0],1:[0,1,[5,10],[21,23],81],2:[[0,3],11,12,[21,27]],3:[[0,3],11,21,22],4:[[0,2],11,21,[23,31],81],5:[[0,2],21,22,24,25,81],6:[[0,3],[21,24]],7:[[0,2],[21,29],81],8:[[0,2],[21,30],81,82],9:[[0,2],[21,32],81],10:[[0,2],[21,34],81,82],11:[[0,2],[21,30],81,82],23:[[0,3],22,23,[25,30],32,33]},15:{0:[0],1:[[0,5],[21,25]],2:[[0,7],[21,23]],3:[[0,4]],4:[[0,4],[21,26],[28,30]],5:[[0,2],[21,26],81],6:[[0,2],[21,27]],7:[[0,3],[21,27],[81,85]],8:[[0,2],[21,26]],9:[[0,2],[21,29],81],22:[[0,2],[21,24]],25:[[0,2],[22,31]],26:[[0,2],[24,27],[29,32],34],28:[0,1,[22,27]],29:[0,[21,23]]},21:{0:[0],1:[[0,6],[11,14],[22,24],81],2:[[0,4],[11,13],24,[81,83]],3:[[0,4],11,21,23,81],4:[[0,4],11,[21,23]],5:[[0,5],21,22],6:[[0,4],24,81,82],7:[[0,3],11,26,27,81,82],8:[[0,4],11,81,82],9:[[0,5],11,21,22],10:[[0,5],11,21,81],11:[[0,3],21,22],12:[[0,2],4,21,23,24,81,82],13:[[0,3],21,22,24,81,82],14:[[0,4],21,22,81]},22:{0:[0],1:[[0,6],12,22,[81,83]],2:[[0,4],11,21,[81,84]],3:[[0,3],22,23,81,82],4:[[0,3],21,22],5:[[0,3],21,23,24,81,82],6:[[0,2],4,5,[21,23],25,81],7:[[0,2],[21,24],81],8:[[0,2],21,22,81,82],24:[[0,6],24,26]},23:{0:[0],1:[[0,12],21,[23,29],[81,84]],2:[[0,8],21,[23,25],27,[29,31],81],3:[[0,7],21,81,82],4:[[0,7],21,22],5:[[0,3],5,6,[21,24]],6:[[0,6],[21,24]],7:[[0,16],22,81],8:[[0,5],11,22,26,28,33,81,82],9:[[0,4],21],10:[[0,5],24,25,81,[83,85]],11:[[0,2],21,23,24,81,82],12:[[0,2],[21,26],[81,83]],27:[[0,4],[21,23]]},31:{0:[0],1:[0,1,[3,10],[12,20]],2:[0,30]},32:{0:[0],1:[[0,7],11,[13,18],24,25],2:[[0,6],11,81,82],3:[[0,5],11,12,[21,24],81,82],4:[[0,2],4,5,11,12,81,82],5:[[0,9],[81,85]],6:[[0,2],11,12,21,23,[81,84]],7:[0,1,3,5,6,[21,24]],8:[[0,4],11,26,[29,31]],9:[[0,3],[21,25],28,81,82],10:[[0,3],11,12,23,81,84,88],11:[[0,2],11,12,[81,83]],12:[[0,4],[81,84]],13:[[0,2],11,[21,24]]},33:{0:[0],1:[[0,6],[8,10],22,27,82,83,85],2:[0,1,[3,6],11,12,25,26,[81,83]],3:[[0,4],22,24,[26,29],81,82],4:[[0,2],11,21,24,[81,83]],5:[[0,3],[21,23]],6:[[0,2],21,24,[81,83]],7:[[0,3],23,26,27,[81,84]],8:[[0,3],22,24,25,81],9:[[0,3],21,22],10:[[0,4],[21,24],81,82],11:[[0,2],[21,27],81]},34:{0:[0],1:[[0,4],11,[21,24],81],2:[[0,4],7,8,[21,23],25],3:[[0,4],11,[21,23]],4:[[0,6],21],5:[[0,4],6,[21,23]],6:[[0,4],21],7:[[0,3],11,21],8:[[0,3],11,[22,28],81],10:[[0,4],[21,24]],11:[[0,3],22,[24,26],81,82],12:[[0,4],21,22,25,26,82],13:[[0,2],[21,24]],14:[[0,2],[21,24]],15:[[0,3],[21,25]],16:[[0,2],[21,23]],17:[[0,2],[21,23]],18:[[0,2],[21,25],81]},35:{0:[0],1:[[0,5],11,[21,25],28,81,82],2:[[0,6],[11,13]],3:[[0,5],22],4:[[0,3],21,[23,30],81],5:[[0,5],21,[24,27],[81,83]],6:[[0,3],[22,29],81],7:[[0,2],[21,25],[81,84]],8:[[0,2],[21,25],81],9:[[0,2],[21,26],81,82]},36:{0:[0],1:[[0,5],11,[21,24]],2:[[0,3],22,81],3:[[0,2],13,[21,23]],4:[[0,3],21,[23,30],81,82],5:[[0,2],21],6:[[0,2],22,81],7:[[0,2],[21,35],81,82],8:[[0,3],[21,30],81],9:[[0,2],[21,26],[81,83]],10:[[0,2],[21,30]],11:[[0,2],[21,30],81]},37:{0:[0],1:[[0,5],12,13,[24,26],81],2:[[0,3],5,[11,14],[81,85]],3:[[0,6],[21,23]],4:[[0,6],81],5:[[0,3],[21,23]],6:[[0,2],[11,13],34,[81,87]],7:[[0,5],24,25,[81,86]],8:[[0,2],11,[26,32],[81,83]],9:[[0,3],11,21,23,82,83],10:[[0,2],[81,83]],11:[[0,3],21,22],12:[[0,3]],13:[[0,2],11,12,[21,29]],14:[[0,2],[21,28],81,82],15:[[0,2],[21,26],81],16:[[0,2],[21,26]],17:[[0,2],[21,28]]},41:{0:[0],1:[[0,6],8,22,[81,85]],2:[[0,5],11,[21,25]],3:[[0,7],11,[22,29],81],4:[[0,4],11,[21,23],25,81,82],5:[[0,3],5,6,22,23,26,27,81],6:[[0,3],11,21,22],7:[[0,4],11,21,[24,28],81,82],8:[[0,4],11,[21,23],25,[81,83]],9:[[0,2],22,23,[26,28]],10:[[0,2],[23,25],81,82],11:[[0,4],[21,23]],12:[[0,2],21,22,24,81,82],13:[[0,3],[21,30],81],14:[[0,3],[21,26],81],15:[[0,3],[21,28]],16:[[0,2],[21,28],81],17:[[0,2],[21,29]],90:[0,1]},42:{0:[0],1:[[0,7],[11,17]],2:[[0,5],22,81],3:[[0,3],[21,25],81],5:[[0,6],[25,29],[81,83]],6:[[0,2],6,7,[24,26],[82,84]],7:[[0,4]],8:[[0,2],4,21,22,81],9:[[0,2],[21,23],81,82,84],10:[[0,3],[22,24],81,83,87],11:[[0,2],[21,27],81,82],12:[[0,2],[21,24],81],13:[[0,3],21,81],28:[[0,2],22,23,[25,28]],90:[0,[4,6],21]},43:{0:[0],1:[[0,5],11,12,21,22,24,81],2:[[0,4],11,21,[23,25],81],3:[[0,2],4,21,81,82],4:[0,1,[5,8],12,[21,24],26,81,82],5:[[0,3],11,[21,25],[27,29],81],6:[[0,3],11,21,23,24,26,81,82],7:[[0,3],[21,26],81],8:[[0,2],11,21,22],9:[[0,3],[21,23],81],10:[[0,3],[21,28],81],11:[[0,3],[21,29]],12:[[0,2],[21,30],81],13:[[0,2],21,22,81,82],31:[0,1,[22,27],30]},44:{0:[0],1:[[0,7],[11,16],83,84],2:[[0,5],21,22,24,29,32,33,81,82],3:[0,1,[3,8]],4:[[0,4]],5:[0,1,[6,15],23,82,83],6:[0,1,[4,8]],7:[0,1,[3,5],81,[83,85]],8:[[0,4],11,23,25,[81,83]],9:[[0,3],23,[81,83]],12:[[0,3],[23,26],83,84],13:[[0,3],[22,24],81],14:[[0,2],[21,24],26,27,81],15:[[0,2],21,23,81],16:[[0,2],[21,25]],17:[[0,2],21,23,81],18:[[0,3],21,23,[25,27],81,82],19:[0],20:[0],51:[[0,3],21,22],52:[[0,3],21,22,24,81],53:[[0,2],[21,23],81]},45:{0:[0],1:[[0,9],[21,27]],2:[[0,5],[21,26]],3:[[0,5],11,12,[21,32]],4:[0,1,[3,6],11,[21,23],81],5:[[0,3],12,21],6:[[0,3],21,81],7:[[0,3],21,22],8:[[0,4],21,81],9:[[0,3],[21,24],81],10:[[0,2],[21,31]],11:[[0,2],[21,23]],12:[[0,2],[21,29],81],13:[[0,2],[21,24],81],14:[[0,2],[21,25],81]},46:{0:[0],1:[0,1,[5,8]],2:[0,1],3:[0,[21,23]],90:[[0,3],[5,7],[21,39]]},50:{0:[0],1:[[0,19]],2:[0,[22,38],[40,43]],3:[0,[81,84]]},51:{0:[0],1:[0,1,[4,8],[12,15],[21,24],29,31,32,[81,84]],3:[[0,4],11,21,22],4:[[0,3],11,21,22],5:[[0,4],21,22,24,25],6:[0,1,3,23,26,[81,83]],7:[0,1,3,4,[22,27],81],8:[[0,2],11,12,[21,24]],9:[[0,4],[21,23]],10:[[0,2],11,24,25,28],11:[[0,2],[11,13],23,24,26,29,32,33,81],13:[[0,4],[21,25],81],14:[[0,2],[21,25]],15:[[0,3],[21,29]],16:[[0,3],[21,23],81],17:[[0,3],[21,25],81],18:[[0,3],[21,27]],19:[[0,3],[21,23]],20:[[0,2],21,22,81],32:[0,[21,33]],33:[0,[21,38]],34:[0,1,[22,37]]},52:{0:[0],1:[[0,3],[11,15],[21,23],81],2:[0,1,3,21,22],3:[[0,3],[21,30],81,82],4:[[0,2],[21,25]],5:[[0,2],[21,27]],6:[[0,3],[21,28]],22:[0,1,[22,30]],23:[0,1,[22,28]],24:[0,1,[22,28]],26:[0,1,[22,36]],27:[[0,2],22,23,[25,32]]},53:{0:[0],1:[[0,3],[11,14],21,22,[24,29],81],3:[[0,2],[21,26],28,81],4:[[0,2],[21,28]],5:[[0,2],[21,24]],6:[[0,2],[21,30]],7:[[0,2],[21,24]],8:[[0,2],[21,29]],9:[[0,2],[21,27]],23:[0,1,[22,29],31],25:[[0,4],[22,32]],26:[0,1,[21,28]],27:[0,1,[22,30]],28:[0,1,22,23],29:[0,1,[22,32]],31:[0,2,3,[22,24]],34:[0,[21,23]],33:[0,21,[23,25]],35:[0,[21,28]]},54:{0:[0],1:[[0,2],[21,27]],21:[0,[21,29],32,33],22:[0,[21,29],[31,33]],23:[0,1,[22,38]],24:[0,[21,31]],25:[0,[21,27]],26:[0,[21,27]]},61:{0:[0],1:[[0,4],[11,16],22,[24,26]],2:[[0,4],22],3:[[0,4],[21,24],[26,31]],4:[[0,4],[22,31],81],5:[[0,2],[21,28],81,82],6:[[0,2],[21,32]],7:[[0,2],[21,30]],8:[[0,2],[21,31]],9:[[0,2],[21,29]],10:[[0,2],[21,26]]},62:{0:[0],1:[[0,5],11,[21,23]],2:[0,1],3:[[0,2],21],4:[[0,3],[21,23]],5:[[0,3],[21,25]],6:[[0,2],[21,23]],7:[[0,2],[21,25]],8:[[0,2],[21,26]],9:[[0,2],[21,24],81,82],10:[[0,2],[21,27]],11:[[0,2],[21,26]],12:[[0,2],[21,28]],24:[0,21,[24,29]],26:[0,21,[23,30]],29:[0,1,[21,27]],30:[0,1,[21,27]]},63:{0:[0],1:[[0,5],[21,23]],2:[0,2,[21,25]],21:[0,[21,23],[26,28]],22:[0,[21,24]],23:[0,[21,24]],25:[0,[21,25]],26:[0,[21,26]],27:[0,1,[21,26]],28:[[0,2],[21,23]]},64:{0:[0],1:[0,1,[4,6],21,22,81],2:[[0,3],5,[21,23]],3:[[0,3],[21,24],81],4:[[0,2],[21,25]],5:[[0,2],21,22]},65:{0:[0],1:[[0,9],21],2:[[0,5]],21:[0,1,22,23],22:[0,1,22,23],23:[[0,3],[23,25],27,28],28:[0,1,[22,29]],29:[0,1,[22,29]],30:[0,1,[22,24]],31:[0,1,[21,31]],32:[0,1,[21,27]],40:[0,2,3,[21,28]],42:[[0,2],21,[23,26]],43:[0,1,[21,26]],90:[[0,4]],27:[[0,2],22,23]},71:{0:[0]},81:{0:[0]},82:{0:[0]}},d=parseInt(b.substr(0,2),10),e=parseInt(b.substr(2,2),10),f=parseInt(b.substr(4,2),10);if(!c[d]||!c[d][e])return!1;for(var g=!1,h=c[d][e],i=0;i<h.length;i++)if(a.isArray(h[i])&&h[i][0]<=f&&f<=h[i][1]||!a.isArray(h[i])&&f===h[i]){g=!0;break}if(!g)return!1;var j;j=18===b.length?b.substr(6,8):"19"+b.substr(6,6);var k=parseInt(j.substr(0,4),10),l=parseInt(j.substr(4,2),10),m=parseInt(j.substr(6,2),10);if(!FormValidation.Helper.date(k,l,m))return!1;if(18===b.length){var n=0,o=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];for(i=0;17>i;i++)n+=parseInt(b.charAt(i),10)*o[i];n=(12-n%11)%11;var p="X"!==b.charAt(17).toUpperCase()?parseInt(b.charAt(17),10):10;return p===n}return!0},_cz:function(a){if(!/^\d{9,10}$/.test(a))return!1;var b=1900+parseInt(a.substr(0,2),10),c=parseInt(a.substr(2,2),10)%50%20,d=parseInt(a.substr(4,2),10);if(9===a.length){if(b>=1980&&(b-=100),b>1953)return!1}else 1954>b&&(b+=100);if(!FormValidation.Helper.date(b,c,d))return!1;if(10===a.length){var e=parseInt(a.substr(0,9),10)%11;return 1985>b&&(e%=10),e+""===a.substr(9,1)}return!0},_dk:function(a){if(!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(a))return!1;a=a.replace(/-/g,"");var b=parseInt(a.substr(0,2),10),c=parseInt(a.substr(2,2),10),d=parseInt(a.substr(4,2),10);switch(!0){case-1!=="5678".indexOf(a.charAt(6))&&d>=58:d+=1800;break;case-1!=="0123".indexOf(a.charAt(6)):case-1!=="49".indexOf(a.charAt(6))&&d>=37:d+=1900;break;default:d+=2e3}return FormValidation.Helper.date(d,c,b)},_ee:function(a){return this._lt(a)},_es:function(a){var b=/^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(a),c=/^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(a),d=/^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(a);if(!b&&!c&&!d)return!1;a=a.replace(/-/g,"");var e;if(b||c){var f="XYZ".indexOf(a.charAt(0));return-1!==f&&(a=f+a.substr(1)+""),e=parseInt(a.substr(0,8),10),e="TRWAGMYFPDXBNJZSQVHLCKE"[e%23],e===a.substr(8,1)}e=a.substr(1,7);for(var g=a[0],h=a.substr(-1),i=0,j=0;j<e.length;j++)if(j%2!==0)i+=parseInt(e[j],10);else{var k=""+2*parseInt(e[j],10);i+=parseInt(k[0],10),2===k.length&&(i+=parseInt(k[1],10))}var l=i-10*Math.floor(i/10);return 0!==l&&(l=10-l),-1!=="KQS".indexOf(g)?h==="JABCDEFGHI"[l]:-1!=="ABEH".indexOf(g)?h===""+l:h===""+l||h==="JABCDEFGHI"[l]},_fi:function(a){if(!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(a))return!1;var b=parseInt(a.substr(0,2),10),c=parseInt(a.substr(2,2),10),d=parseInt(a.substr(4,2),10),e={"+":1800,"-":1900,A:2e3};if(d=e[a.charAt(6)]+d,!FormValidation.Helper.date(d,c,b))return!1;var f=parseInt(a.substr(7,3),10);if(2>f)return!1;var g=a.substr(0,6)+a.substr(7,3)+"";return g=parseInt(g,10),"0123456789ABCDEFHJKLMNPRSTUVWXY".charAt(g%31)===a.charAt(10)},_hr:function(a){return/^[0-9]{11}$/.test(a)?FormValidation.Helper.mod11And10(a):!1},_ie:function(a){if(!/^\d{7}[A-W][AHWTX]?$/.test(a))return!1;var b=function(a){for(;a.length<7;)a="0"+a;for(var b="WABCDEFGHIJKLMNOPQRSTUV",c=0,d=0;7>d;d++)c+=parseInt(a.charAt(d),10)*(8-d);return c+=9*b.indexOf(a.substr(7)),b[c%23]};return 9!==a.length||"A"!==a.charAt(8)&&"H"!==a.charAt(8)?a.charAt(7)===b(a.substr(0,7)):a.charAt(7)===b(a.substr(0,7)+a.substr(8)+"")},_is:function(a){if(!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(a))return!1;a=a.replace(/-/g,"");var b=parseInt(a.substr(0,2),10),c=parseInt(a.substr(2,2),10),d=parseInt(a.substr(4,2),10),e=parseInt(a.charAt(9),10);if(d=9===e?1900+d:100*(20+e)+d,!FormValidation.Helper.date(d,c,b,!0))return!1;for(var f=0,g=[3,2,7,6,5,4,3,2],h=0;8>h;h++)f+=parseInt(a.charAt(h),10)*g[h];return f=11-f%11,f+""===a.charAt(8)},_lt:function(a){if(!/^[0-9]{11}$/.test(a))return!1;var b=parseInt(a.charAt(0),10),c=parseInt(a.substr(1,2),10),d=parseInt(a.substr(3,2),10),e=parseInt(a.substr(5,2),10),f=b%2===0?17+b/2:17+(b+1)/2;if(c=100*f+c,!FormValidation.Helper.date(c,d,e,!0))return!1;for(var g=0,h=[1,2,3,4,5,6,7,8,9,1],i=0;10>i;i++)g+=parseInt(a.charAt(i),10)*h[i];if(g%=11,10!==g)return g+""===a.charAt(10);for(g=0,h=[3,4,5,6,7,8,9,1,2,3],i=0;10>i;i++)g+=parseInt(a.charAt(i),10)*h[i];return g%=11,10===g&&(g=0),g+""===a.charAt(10)},_lv:function(a){if(!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(a))return!1;a=a.replace(/\D/g,"");var b=parseInt(a.substr(0,2),10),c=parseInt(a.substr(2,2),10),d=parseInt(a.substr(4,2),10);if(d=d+1800+100*parseInt(a.charAt(6),10),!FormValidation.Helper.date(d,c,b,!0))return!1;for(var e=0,f=[10,5,8,4,2,1,6,3,7,9],g=0;10>g;g++)e+=parseInt(a.charAt(g),10)*f[g];return e=(e+1)%11%10,e+""===a.charAt(10)},_nl:function(a){for(;a.length<9;)a="0"+a;if(!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(a))return!1;if(a=a.replace(/\./g,""),0===parseInt(a,10))return!1;for(var b=0,c=a.length,d=0;c-1>d;d++)b+=(9-d)*parseInt(a.charAt(d),10);return b%=11,10===b&&(b=0),b+""===a.charAt(c-1)},_pl:function(a){if(!/^[0-9]{11}$/.test(a))return!1;for(var b=0,c=a.length,d=[1,3,7,9,1,3,7,9,1,3,7],e=0;c-1>e;e++)b+=d[e]*parseInt(a.charAt(e),10);return b%=10,0===b&&(b=10),b=10-b,b+""===a.charAt(c-1)},_ro:function(a){if(!/^[0-9]{13}$/.test(a))return!1;var b=parseInt(a.charAt(0),10);if(0===b||7===b||8===b)return!1;var c=parseInt(a.substr(1,2),10),d=parseInt(a.substr(3,2),10),e=parseInt(a.substr(5,2),10),f={1:1900,2:1900,3:1800,4:1800,5:2e3,6:2e3};if(e>31&&d>12)return!1;if(9!==b&&(c=f[b+""]+c,!FormValidation.Helper.date(c,d,e)))return!1;for(var g=0,h=[2,7,9,1,4,6,3,5,8,2,7,9],i=a.length,j=0;i-1>j;j++)g+=parseInt(a.charAt(j),10)*h[j];return g%=11,10===g&&(g=1),g+""===a.charAt(i-1)},_se:function(a){if(!/^[0-9]{10}$/.test(a)&&!/^[0-9]{6}[-|+][0-9]{4}$/.test(a))return!1;a=a.replace(/[^0-9]/g,"");var b=parseInt(a.substr(0,2),10)+1900,c=parseInt(a.substr(2,2),10),d=parseInt(a.substr(4,2),10);return FormValidation.Helper.date(b,c,d)?FormValidation.Helper.luhn(a):!1},_sk:function(a){return this._cz(a)},_sm:function(a){return/^\d{5}$/.test(a)},_th:function(a){if(13!==a.length)return!1;for(var b=0,c=0;12>c;c++)b+=parseInt(a.charAt(c),10)*(13-c);return(11-b%11)%10===parseInt(a.charAt(12),10)},_za:function(a){if(!/^[0-9]{10}[0|1][8|9][0-9]$/.test(a))return!1;var b=parseInt(a.substr(0,2),10),c=(new Date).getFullYear()%100,d=parseInt(a.substr(2,2),10),e=parseInt(a.substr(4,2),10);return b=b>=c?b+1900:b+2e3,FormValidation.Helper.date(b,d,e)?FormValidation.Helper.luhn(a):!1}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{identical:{"default":"Please enter the same value"}}}),FormValidation.Validator.identical={html5Attributes:{message:"message",field:"field"},init:function(a,b,c){var d=a.getFieldElements(c.field);a.onLiveChange(d,"live_identical",function(){var c=a.getStatus(b,"identical");c!==a.STATUS_NOT_VALIDATED&&a.revalidateField(b)})},destroy:function(a,b,c){var d=a.getFieldElements(c.field);a.offLiveChange(d,"live_identical")},validate:function(a,b,c){var d=a.getFieldValue(b,"identical"),e=a.getFieldElements(c.field);if(null===e||0===e.length)return!0;var f=a.getFieldValue(e,"identical");return d===f?(a.updateStatus(e,a.STATUS_VALID,"identical"),!0):!1}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{imei:{"default":"Please enter a valid IMEI number"}}}),FormValidation.Validator.imei={validate:function(a,b){var c=a.getFieldValue(b,"imei");if(""===c)return!0;switch(!0){case/^\d{15}$/.test(c):case/^\d{2}-\d{6}-\d{6}-\d{1}$/.test(c):case/^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(c):return c=c.replace(/[^0-9]/g,""),FormValidation.Helper.luhn(c);case/^\d{14}$/.test(c):case/^\d{16}$/.test(c):case/^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(c):case/^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(c):return!0;default:return!1}}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{imo:{"default":"Please enter a valid IMO number"}}}),FormValidation.Validator.imo={validate:function(a,b){var c=a.getFieldValue(b,"imo");if(""===c)return!0;if(!/^IMO \d{7}$/i.test(c))return!1;for(var d=0,e=c.replace(/^.*(\d{7})$/,"$1"),f=6;f>=1;f--)d+=e.slice(6-f,-f)*(f+1);return d%10===parseInt(e.charAt(6),10)}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{integer:{"default":"Please enter a valid number"}}}),FormValidation.Validator.integer={enableByHtml5:function(a){return"number"===a.attr("type")&&(void 0===a.attr("step")||a.attr("step")%1===0)},validate:function(a,b){if(this.enableByHtml5(b)&&b.get(0).validity&&b.get(0).validity.badInput===!0)return!1;var c=a.getFieldValue(b,"integer");return""===c?!0:/^(?:-?(?:0|[1-9][0-9]*))$/.test(c)}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{ip:{"default":"Please enter a valid IP address",ipv4:"Please enter a valid IPv4 address",ipv6:"Please enter a valid IPv6 address"}}}),FormValidation.Validator.ip={html5Attributes:{message:"message",ipv4:"ipv4",ipv6:"ipv6"},validate:function(b,c,d){var e=b.getFieldValue(c,"ip");if(""===e)return!0;d=a.extend({},{ipv4:!0,ipv6:!0},d);var f,g=b.getLocale(),h=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,i=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,j=!1;switch(!0){case d.ipv4&&!d.ipv6:j=h.test(e),f=d.message||FormValidation.I18n[g].ip.ipv4;break;case!d.ipv4&&d.ipv6:j=i.test(e),f=d.message||FormValidation.I18n[g].ip.ipv6;break;case d.ipv4&&d.ipv6:default:j=h.test(e)||i.test(e),f=d.message||FormValidation.I18n[g].ip["default"]}return{valid:j,message:f}}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{isbn:{"default":"Please enter a valid ISBN number"}}}),FormValidation.Validator.isbn={validate:function(a,b){var c=a.getFieldValue(b,"isbn");if(""===c)return!0;var d;switch(!0){case/^\d{9}[\dX]$/.test(c):case 13===c.length&&/^(\d+)-(\d+)-(\d+)-([\dX])$/.test(c):case 13===c.length&&/^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(c):d="ISBN10";break;case/^(978|979)\d{9}[\dX]$/.test(c):case 17===c.length&&/^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(c):case 17===c.length&&/^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(c):d="ISBN13";break;default:return!1}c=c.replace(/[^0-9X]/gi,"");var e,f,g=c.split(""),h=g.length,i=0;switch(d){case"ISBN10":for(i=0,e=0;h-1>e;e++)i+=parseInt(g[e],10)*(10-e);return f=11-i%11,11===f?f=0:10===f&&(f="X"),f+""===g[h-1];case"ISBN13":for(i=0,e=0;h-1>e;e++)i+=e%2===0?parseInt(g[e],10):3*parseInt(g[e],10);return f=10-i%10,10===f&&(f="0"),f+""===g[h-1];default:return!1}}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{isin:{"default":"Please enter a valid ISIN number"}}}),FormValidation.Validator.isin={COUNTRY_CODES:"AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW",validate:function(a,b){var c=a.getFieldValue(b,"isin");if(""===c)return!0;c=c.toUpperCase();var d=new RegExp("^("+this.COUNTRY_CODES+")[0-9A-Z]{10}$");if(!d.test(c))return!1;for(var e="",f=c.length,g=0;f-1>g;g++){var h=c.charCodeAt(g);e+=h>57?(h-55).toString():c.charAt(g)}var i="",j=e.length,k=j%2!==0?0:1;for(g=0;j>g;g++)i+=parseInt(e[g],10)*(g%2===k?2:1)+"";var l=0;for(g=0;g<i.length;g++)l+=parseInt(i.charAt(g),10);return l=(10-l%10)%10,l+""===c.charAt(f-1)}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{ismn:{"default":"Please enter a valid ISMN number"}}}),FormValidation.Validator.ismn={validate:function(a,b){var c=a.getFieldValue(b,"ismn");if(""===c)return!0;var d;switch(!0){case/^M\d{9}$/.test(c):case/^M-\d{4}-\d{4}-\d{1}$/.test(c):case/^M\s\d{4}\s\d{4}\s\d{1}$/.test(c):d="ISMN10";break;case/^9790\d{9}$/.test(c):case/^979-0-\d{4}-\d{4}-\d{1}$/.test(c):case/^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(c):d="ISMN13";break;default:return!1}"ISMN10"===d&&(c="9790"+c.substr(1)),c=c.replace(/[^0-9]/gi,"");for(var e=c.length,f=0,g=[1,3],h=0;e-1>h;h++)f+=parseInt(c.charAt(h),10)*g[h%2];return f=10-f%10,f+""===c.charAt(e-1)}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{issn:{"default":"Please enter a valid ISSN number"}}}),FormValidation.Validator.issn={validate:function(a,b){var c=a.getFieldValue(b,"issn");if(""===c)return!0;if(!/^\d{4}\-\d{3}[\dX]$/.test(c))return!1;c=c.replace(/[^0-9X]/gi,"");var d=c.split(""),e=d.length,f=0;"X"===d[7]&&(d[7]=10);for(var g=0;e>g;g++)f+=parseInt(d[g],10)*(8-g);return f%11===0}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{lessThan:{"default":"Please enter a value less than or equal to %s",notInclusive:"Please enter a value less than %s"}}}),FormValidation.Validator.lessThan={html5Attributes:{message:"message",value:"value",inclusive:"inclusive"},enableByHtml5:function(a){var b=a.attr("type"),c=a.attr("max");return c&&"date"!==b?{value:c}:!1},validate:function(b,c,d){var e=b.getFieldValue(c,"lessThan");if(""===e)return!0;if(e=this._format(e),!a.isNumeric(e))return!1;var f=b.getLocale(),g=a.isNumeric(d.value)?d.value:b.getDynamicOption(c,d.value),h=this._format(g);return e=parseFloat(e),d.inclusive===!0||void 0===d.inclusive?{valid:h>=e,message:FormValidation.Helper.format(d.message||FormValidation.I18n[f].lessThan["default"],g)}:{valid:h>e,message:FormValidation.Helper.format(d.message||FormValidation.I18n[f].lessThan.notInclusive,g)}},_format:function(a){return(a+"").replace(",",".")}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{mac:{"default":"Please enter a valid MAC address"}}}),FormValidation.Validator.mac={validate:function(a,b){var c=a.getFieldValue(b,"mac");return""===c?!0:/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(c)}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{meid:{"default":"Please enter a valid MEID number"}}}),FormValidation.Validator.meid={validate:function(a,b){var c=a.getFieldValue(b,"meid");if(""===c)return!0;switch(!0){case/^[0-9A-F]{15}$/i.test(c):case/^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(c):case/^\d{19}$/.test(c):case/^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(c):var d=c.charAt(c.length-1);if(c=c.replace(/[- ]/g,""),c.match(/^\d*$/i))return FormValidation.Helper.luhn(c);c=c.slice(0,-1);for(var e="",f=1;13>=f;f+=2)e+=(2*parseInt(c.charAt(f),16)).toString(16);var g=0;for(f=0;f<e.length;f++)g+=parseInt(e.charAt(f),16);return g%10===0?"0"===d:d===(2*(10*Math.floor((g+10)/10)-g)).toString(16);case/^[0-9A-F]{14}$/i.test(c):case/^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(c):case/^\d{18}$/.test(c):case/^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(c):return!0;default:return!1}}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{notEmpty:{"default":"Please enter a value"}}}),FormValidation.Validator.notEmpty={enableByHtml5:function(a){var b=a.attr("required")+"";return"required"===b||"true"===b},validate:function(b,c){var d=c.attr("type");if("radio"===d||"checkbox"===d){var e=b.getNamespace();return b.getFieldElements(c.attr("data-"+e+"-field")).filter(":checked").length>0}if("number"===d&&c.get(0).validity&&c.get(0).validity.badInput===!0)return!0;var f=b.getFieldValue(c,"notEmpty");return""!==a.trim(f)}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{numeric:{"default":"Please enter a valid float number"}}}),FormValidation.Validator.numeric={html5Attributes:{message:"message",separator:"separator"},enableByHtml5:function(a){return"number"===a.attr("type")&&void 0!==a.attr("step")&&a.attr("step")%1!==0},validate:function(a,b,c){if(this.enableByHtml5(b)&&b.get(0).validity&&b.get(0).validity.badInput===!0)return!1;var d=a.getFieldValue(b,"numeric");if(""===d)return!0;var e=c.separator||".";return"."!==e&&(d=d.replace(e,".")),!isNaN(parseFloat(d))&&isFinite(d)}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{phone:{"default":"Please enter a valid phone number",country:"Please enter a valid phone number in %s",countries:{AE:"United Arab Emirates",BG:"Bulgaria",BR:"Brazil",CN:"China",CZ:"Czech Republic",DE:"Germany",DK:"Denmark",ES:"Spain",FR:"France",GB:"United Kingdom",IN:"India",MA:"Morocco",NL:"Netherlands",PK:"Pakistan",RO:"Romania",RU:"Russia",SK:"Slovakia",TH:"Thailand",US:"USA",VE:"Venezuela"}}}}),FormValidation.Validator.phone={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["AE","BG","BR","CN","CZ","DE","DK","ES","FR","GB","IN","MA","NL","PK","RO","RU","SK","TH","US","VE"],validate:function(b,c,d){var e=b.getFieldValue(c,"phone");if(""===e)return!0;var f=b.getLocale(),g=d.country;if(("string"!=typeof g||-1===a.inArray(g,this.COUNTRY_CODES))&&(g=b.getDynamicOption(c,g)),!g||-1===a.inArray(g.toUpperCase(),this.COUNTRY_CODES))return!0;var h=!0;switch(g.toUpperCase()){case"AE":e=a.trim(e),h=/^(((\+|00)?971[\s\.-]?(\(0\)[\s\.-]?)?|0)(\(5(0|2|5|6)\)|5(0|2|5|6)|2|3|4|6|7|9)|60)([\s\.-]?[0-9]){7}$/.test(e);break;case"BG":e=e.replace(/\+|\s|-|\/|\(|\)/gi,""),h=/^(0|359|00)(((700|900)[0-9]{5}|((800)[0-9]{5}|(800)[0-9]{4}))|(87|88|89)([0-9]{7})|((2[0-9]{7})|(([3-9][0-9])(([0-9]{6})|([0-9]{5})))))$/.test(e);break;case"BR":e=a.trim(e),h=/^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(e);break;case"CN":e=a.trim(e),h=/^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/.test(e);break;case"CZ":h=/^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(e);break;case"DE":e=a.trim(e),h=/^(((((((00|\+)49[ \-/]?)|0)[1-9][0-9]{1,4})[ \-/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-/]?))[0-9]{1,7}([ \-/]?[0-9]{1,5})?)$/.test(e);break;case"DK":e=a.trim(e),h=/^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/.test(e);break;case"ES":e=a.trim(e),h=/^(?:(?:(?:\+|00)34\D?))?(?:5|6|7|8|9)(?:\d\D?){8}$/.test(e);break;case"FR":e=a.trim(e),h=/^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(e);break;case"GB":e=a.trim(e),h=/^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(e);break;case"IN":e=a.trim(e),h=/((\+?)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/.test(e);break;case"MA":e=a.trim(e),h=/^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(e);break;case"NL":e=a.trim(e),h=/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/gm.test(e);break;case"PK":e=a.trim(e),h=/^0?3[0-9]{2}[0-9]{7}$/.test(e);break;case"RO":h=/^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/g.test(e);break;case"RU":h=/^((8|\+7|007)[\-\.\/ ]?)?([\(\/\.]?\d{3}[\)\/\.]?[\-\.\/ ]?)?[\d\-\.\/ ]{7,10}$/g.test(e);break;case"SK":h=/^(((00)([- ]?)|\+)(421)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(e);break;case"TH":h=/^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/.test(e);break;case"VE":e=a.trim(e),h=/^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/.test(e);break;case"US":default:h=/^(?:(1\-?)|(\+1 ?))?\(?(\d{3})[\)\-\.]?(\d{3})[\-\.]?(\d{4})$/.test(e)}return{valid:h,message:FormValidation.Helper.format(d.message||FormValidation.I18n[f].phone.country,FormValidation.I18n[f].phone.countries[g])}}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{regexp:{"default":"Please enter a value matching the pattern"}}}),FormValidation.Validator.regexp={html5Attributes:{message:"message",regexp:"regexp"},enableByHtml5:function(a){var b=a.attr("pattern");return b?{regexp:b}:!1},validate:function(a,b,c){var d=a.getFieldValue(b,"regexp");if(""===d)return!0;var e="string"==typeof c.regexp?new RegExp(c.regexp):c.regexp;return e.test(d)}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{remote:{"default":"Please enter a valid value"}}}),FormValidation.Validator.remote={html5Attributes:{crossdomain:"crossDomain",data:"data",datatype:"dataType",delay:"delay",message:"message",name:"name",type:"type",url:"url",validkey:"validKey"},destroy:function(a,b){var c=a.getNamespace(),d=b.data(c+".remote.timer");d&&(clearTimeout(d),b.removeData(c+".remote.timer"))},validate:function(b,c,d){function e(){var b=a.ajax(m);return b.success(function(a){a.valid=a[l]===!0||"true"===a[l]?!0:a[l]===!1||"false"===a[l]?!1:null,h.resolve(c,"remote",a)
}).error(function(){h.resolve(c,"remote",{valid:!1})}),h.fail(function(){b.abort()}),h}var f=b.getNamespace(),g=b.getFieldValue(c,"remote"),h=new a.Deferred;if(""===g)return h.resolve(c,"remote",{valid:!0}),h;var i=c.attr("data-"+f+"-field"),j=d.data||{},k=d.url,l=d.validKey||"valid";"function"==typeof j&&(j=j.call(this,b)),"string"==typeof j&&(j=JSON.parse(j)),"function"==typeof k&&(k=k.call(this,b)),j[d.name||i]=g;var m={data:j,dataType:d.dataType||"json",headers:d.headers||{},type:d.type||"GET",url:k};return null!==d.crossDomain&&(m.crossDomain=d.crossDomain===!0||"true"===d.crossDomain),d.delay?(c.data(f+".remote.timer")&&clearTimeout(c.data(f+".remote.timer")),c.data(f+".remote.timer",setTimeout(e,d.delay)),h):e()}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{rtn:{"default":"Please enter a valid RTN number"}}}),FormValidation.Validator.rtn={validate:function(a,b){var c=a.getFieldValue(b,"rtn");if(""===c)return!0;if(!/^\d{9}$/.test(c))return!1;for(var d=0,e=0;e<c.length;e+=3)d+=3*parseInt(c.charAt(e),10)+7*parseInt(c.charAt(e+1),10)+parseInt(c.charAt(e+2),10);return 0!==d&&d%10===0}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{sedol:{"default":"Please enter a valid SEDOL number"}}}),FormValidation.Validator.sedol={validate:function(a,b){var c=a.getFieldValue(b,"sedol");if(""===c)return!0;if(c=c.toUpperCase(),!/^[0-9A-Z]{7}$/.test(c))return!1;for(var d=0,e=[1,3,1,7,3,9,1],f=c.length,g=0;f-1>g;g++)d+=e[g]*parseInt(c.charAt(g),36);return d=(10-d%10)%10,d+""===c.charAt(f-1)}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{siren:{"default":"Please enter a valid SIREN number"}}}),FormValidation.Validator.siren={validate:function(a,b){var c=a.getFieldValue(b,"siren");return""===c?!0:/^\d{9}$/.test(c)?FormValidation.Helper.luhn(c):!1}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{siret:{"default":"Please enter a valid SIRET number"}}}),FormValidation.Validator.siret={validate:function(a,b){var c=a.getFieldValue(b,"siret");if(""===c)return!0;for(var d,e=0,f=c.length,g=0;f>g;g++)d=parseInt(c.charAt(g),10),g%2===0&&(d=2*d,d>9&&(d-=9)),e+=d;return e%10===0}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{step:{"default":"Please enter a valid step of %s"}}}),FormValidation.Validator.step={html5Attributes:{message:"message",base:"baseValue",step:"step"},validate:function(b,c,d){var e=b.getFieldValue(c,"step");if(""===e)return!0;if(d=a.extend({},{baseValue:0,step:1},d),e=parseFloat(e),!a.isNumeric(e))return!1;var f=function(a,b){var c=Math.pow(10,b);a*=c;var d=a>0|-(0>a),e=a%1===.5*d;return e?(Math.floor(a)+(d>0))/c:Math.round(a)/c},g=function(a,b){if(0===b)return 1;var c=(a+"").split("."),d=(b+"").split("."),e=(1===c.length?0:c[1].length)+(1===d.length?0:d[1].length);return f(a-b*Math.floor(a/b),e)},h=b.getLocale(),i=g(e-d.baseValue,d.step);return{valid:0===i||i===d.step,message:FormValidation.Helper.format(d.message||FormValidation.I18n[h].step["default"],[d.step])}}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{stringCase:{"default":"Please enter only lowercase characters",upper:"Please enter only uppercase characters"}}}),FormValidation.Validator.stringCase={html5Attributes:{message:"message","case":"case"},validate:function(a,b,c){var d=a.getFieldValue(b,"stringCase");if(""===d)return!0;var e=a.getLocale(),f=(c["case"]||"lower").toLowerCase();return{valid:"upper"===f?d===d.toUpperCase():d===d.toLowerCase(),message:c.message||("upper"===f?FormValidation.I18n[e].stringCase.upper:FormValidation.I18n[e].stringCase["default"])}}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{stringLength:{"default":"Please enter a value with valid length",less:"Please enter less than %s characters",more:"Please enter more than %s characters",between:"Please enter value between %s and %s characters long"}}}),FormValidation.Validator.stringLength={html5Attributes:{message:"message",min:"min",max:"max",trim:"trim",utf8bytes:"utf8Bytes"},enableByHtml5:function(b){var c={},d=b.attr("maxlength"),e=b.attr("minlength");return d&&(c.max=parseInt(d,10)),e&&(c.min=parseInt(e,10)),a.isEmptyObject(c)?!1:c},validate:function(b,c,d){var e=b.getFieldValue(c,"stringLength");if((d.trim===!0||"true"===d.trim)&&(e=a.trim(e)),""===e)return!0;var f=b.getLocale(),g=a.isNumeric(d.min)?d.min:b.getDynamicOption(c,d.min),h=a.isNumeric(d.max)?d.max:b.getDynamicOption(c,d.max),i=function(a){for(var b=a.length,c=a.length-1;c>=0;c--){var d=a.charCodeAt(c);d>127&&2047>=d?b++:d>2047&&65535>=d&&(b+=2),d>=56320&&57343>=d&&c--}return b},j=d.utf8Bytes?i(e):e.length,k=!0,l=d.message||FormValidation.I18n[f].stringLength["default"];switch((g&&j<parseInt(g,10)||h&&j>parseInt(h,10))&&(k=!1),!0){case!!g&&!!h:l=FormValidation.Helper.format(d.message||FormValidation.I18n[f].stringLength.between,[parseInt(g,10),parseInt(h,10)]);break;case!!g:l=FormValidation.Helper.format(d.message||FormValidation.I18n[f].stringLength.more,parseInt(g,10));break;case!!h:l=FormValidation.Helper.format(d.message||FormValidation.I18n[f].stringLength.less,parseInt(h,10))}return{valid:k,message:l}}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{uri:{"default":"Please enter a valid URI"}}}),FormValidation.Validator.uri={html5Attributes:{message:"message",allowlocal:"allowLocal",allowemptyprotocol:"allowEmptyProtocol",protocol:"protocol"},enableByHtml5:function(a){return"url"===a.attr("type")},validate:function(a,b,c){var d=a.getFieldValue(b,"uri");if(""===d)return!0;var e=c.allowLocal===!0||"true"===c.allowLocal,f=c.allowEmptyProtocol===!0||"true"===c.allowEmptyProtocol,g=(c.protocol||"http, https, ftp").split(",").join("|").replace(/\s/g,""),h=new RegExp("^(?:(?:"+g+")://)"+(f?"?":"")+"(?:\\S+(?::\\S*)?@)?(?:"+(e?"":"(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})")+"(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))"+(e?"?":"")+")(?::\\d{2,5})?(?:/[^\\s]*)?$","i");return h.test(d)}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{uuid:{"default":"Please enter a valid UUID number",version:"Please enter a valid UUID version %s number"}}}),FormValidation.Validator.uuid={html5Attributes:{message:"message",version:"version"},validate:function(a,b,c){var d=a.getFieldValue(b,"uuid");if(""===d)return!0;var e=a.getLocale(),f={3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i},g=c.version?c.version+"":"all";return{valid:null===f[g]?!0:f[g].test(d),message:c.version?FormValidation.Helper.format(c.message||FormValidation.I18n[e].uuid.version,c.version):c.message||FormValidation.I18n[e].uuid["default"]}}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{vat:{"default":"Please enter a valid VAT number",country:"Please enter a valid VAT number in %s",countries:{AT:"Austria",BE:"Belgium",BG:"Bulgaria",BR:"Brazil",CH:"Switzerland",CY:"Cyprus",CZ:"Czech Republic",DE:"Germany",DK:"Denmark",EE:"Estonia",ES:"Spain",FI:"Finland",FR:"France",GB:"United Kingdom",GR:"Greek",EL:"Greek",HU:"Hungary",HR:"Croatia",IE:"Ireland",IS:"Iceland",IT:"Italy",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",MT:"Malta",NL:"Netherlands",NO:"Norway",PL:"Poland",PT:"Portugal",RO:"Romania",RU:"Russia",RS:"Serbia",SE:"Sweden",SI:"Slovenia",SK:"Slovakia",VE:"Venezuela",ZA:"South Africa"}}}}),FormValidation.Validator.vat={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["AT","BE","BG","BR","CH","CY","CZ","DE","DK","EE","EL","ES","FI","FR","GB","GR","HR","HU","IE","IS","IT","LT","LU","LV","MT","NL","NO","PL","PT","RO","RU","RS","SE","SK","SI","VE","ZA"],validate:function(b,c,d){var e=b.getFieldValue(c,"vat");if(""===e)return!0;var f=b.getLocale(),g=d.country;if(g?("string"!=typeof g||-1===a.inArray(g.toUpperCase(),this.COUNTRY_CODES))&&(g=b.getDynamicOption(c,g)):g=e.substr(0,2),-1===a.inArray(g,this.COUNTRY_CODES))return!0;var h=["_",g.toLowerCase()].join("");return this[h](e)?!0:{valid:!1,message:FormValidation.Helper.format(d.message||FormValidation.I18n[f].vat.country,FormValidation.I18n[f].vat.countries[g.toUpperCase()])}},_at:function(a){if(/^ATU[0-9]{8}$/.test(a)&&(a=a.substr(2)),!/^U[0-9]{8}$/.test(a))return!1;a=a.substr(1);for(var b=0,c=[1,2,1,2,1,2,1],d=0,e=0;7>e;e++)d=parseInt(a.charAt(e),10)*c[e],d>9&&(d=Math.floor(d/10)+d%10),b+=d;return b=10-(b+4)%10,10===b&&(b=0),b+""===a.substr(7,1)},_be:function(a){if(/^BE[0]{0,1}[0-9]{9}$/.test(a)&&(a=a.substr(2)),!/^[0]{0,1}[0-9]{9}$/.test(a))return!1;if(9===a.length&&(a="0"+a),"0"===a.substr(1,1))return!1;var b=parseInt(a.substr(0,8),10)+parseInt(a.substr(8,2),10);return b%97===0},_bg:function(a){if(/^BG[0-9]{9,10}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{9,10}$/.test(a))return!1;var b=0,c=0;if(9===a.length){for(c=0;8>c;c++)b+=parseInt(a.charAt(c),10)*(c+1);if(b%=11,10===b)for(b=0,c=0;8>c;c++)b+=parseInt(a.charAt(c),10)*(c+3);return b%=10,b+""===a.substr(8)}if(10===a.length){var d=function(a){var b=parseInt(a.substr(0,2),10)+1900,c=parseInt(a.substr(2,2),10),d=parseInt(a.substr(4,2),10);if(c>40?(b+=100,c-=40):c>20&&(b-=100,c-=20),!FormValidation.Helper.date(b,c,d))return!1;for(var e=0,f=[2,4,8,5,10,9,7,3,6],g=0;9>g;g++)e+=parseInt(a.charAt(g),10)*f[g];return e=e%11%10,e+""===a.substr(9,1)},e=function(a){for(var b=0,c=[21,19,17,13,11,9,7,3,1],d=0;9>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%=10,b+""===a.substr(9,1)},f=function(a){for(var b=0,c=[4,3,2,7,6,5,4,3,2],d=0;9>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b=11-b%11,10===b?!1:(11===b&&(b=0),b+""===a.substr(9,1))};return d(a)||e(a)||f(a)}return!1},_br:function(a){if(""===a)return!0;var b=a.replace(/[^\d]+/g,"");if(""===b||14!==b.length)return!1;if("00000000000000"===b||"11111111111111"===b||"22222222222222"===b||"33333333333333"===b||"44444444444444"===b||"55555555555555"===b||"66666666666666"===b||"77777777777777"===b||"88888888888888"===b||"99999999999999"===b)return!1;for(var c=b.length-2,d=b.substring(0,c),e=b.substring(c),f=0,g=c-7,h=c;h>=1;h--)f+=parseInt(d.charAt(c-h),10)*g--,2>g&&(g=9);var i=2>f%11?0:11-f%11;if(i!==parseInt(e.charAt(0),10))return!1;for(c+=1,d=b.substring(0,c),f=0,g=c-7,h=c;h>=1;h--)f+=parseInt(d.charAt(c-h),10)*g--,2>g&&(g=9);return i=2>f%11?0:11-f%11,i===parseInt(e.charAt(1),10)},_ch:function(a){if(/^CHE[0-9]{9}(MWST)?$/.test(a)&&(a=a.substr(2)),!/^E[0-9]{9}(MWST)?$/.test(a))return!1;a=a.substr(1);for(var b=0,c=[5,4,3,2,7,6,5,4],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b=11-b%11,10===b?!1:(11===b&&(b=0),b+""===a.substr(8,1))},_cy:function(a){if(/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(a)&&(a=a.substr(2)),!/^[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(a))return!1;if("12"===a.substr(0,2))return!1;for(var b=0,c={0:1,1:0,2:5,3:7,4:9,5:13,6:15,7:17,8:19,9:21},d=0;8>d;d++){var e=parseInt(a.charAt(d),10);d%2===0&&(e=c[e+""]),b+=e}return b="ABCDEFGHIJKLMNOPQRSTUVWXYZ"[b%26],b+""===a.substr(8,1)},_cz:function(a){if(/^CZ[0-9]{8,10}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{8,10}$/.test(a))return!1;var b=0,c=0;if(8===a.length){if(a.charAt(0)+""=="9")return!1;for(b=0,c=0;7>c;c++)b+=parseInt(a.charAt(c),10)*(8-c);return b=11-b%11,10===b&&(b=0),11===b&&(b=1),b+""===a.substr(7,1)}if(9===a.length&&a.charAt(0)+""=="6"){for(b=0,c=0;7>c;c++)b+=parseInt(a.charAt(c+1),10)*(8-c);return b=11-b%11,10===b&&(b=0),11===b&&(b=1),b=[8,7,6,5,4,3,2,1,0,9,10][b-1],b+""===a.substr(8,1)}if(9===a.length||10===a.length){var d=1900+parseInt(a.substr(0,2),10),e=parseInt(a.substr(2,2),10)%50%20,f=parseInt(a.substr(4,2),10);if(9===a.length){if(d>=1980&&(d-=100),d>1953)return!1}else 1954>d&&(d+=100);if(!FormValidation.Helper.date(d,e,f))return!1;if(10===a.length){var g=parseInt(a.substr(0,9),10)%11;return 1985>d&&(g%=10),g+""===a.substr(9,1)}return!0}return!1},_de:function(a){return/^DE[0-9]{9}$/.test(a)&&(a=a.substr(2)),/^[0-9]{9}$/.test(a)?FormValidation.Helper.mod11And10(a):!1},_dk:function(a){if(/^DK[0-9]{8}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{8}$/.test(a))return!1;for(var b=0,c=[2,7,6,5,4,3,2,1],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%11===0},_ee:function(a){if(/^EE[0-9]{9}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{9}$/.test(a))return!1;for(var b=0,c=[3,7,1,3,7,1,3,7,1],d=0;9>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%10===0},_es:function(a){if(/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(a)&&(a=a.substr(2)),!/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(a))return!1;var b=function(a){var b=parseInt(a.substr(0,8),10);return b="TRWAGMYFPDXBNJZSQVHLCKE"[b%23],b+""===a.substr(8,1)},c=function(a){var b=["XYZ".indexOf(a.charAt(0)),a.substr(1)].join("");return b=parseInt(b,10),b="TRWAGMYFPDXBNJZSQVHLCKE"[b%23],b+""===a.substr(8,1)},d=function(a){var b,c=a.charAt(0);if(-1!=="KLM".indexOf(c))return b=parseInt(a.substr(1,8),10),b="TRWAGMYFPDXBNJZSQVHLCKE"[b%23],b+""===a.substr(8,1);if(-1!=="ABCDEFGHJNPQRSUVW".indexOf(c)){for(var d=0,e=[2,1,2,1,2,1,2],f=0,g=0;7>g;g++)f=parseInt(a.charAt(g+1),10)*e[g],f>9&&(f=Math.floor(f/10)+f%10),d+=f;return d=10-d%10,10===d&&(d=0),d+""===a.substr(8,1)||"JABCDEFGHI"[d]===a.substr(8,1)}return!1},e=a.charAt(0);return/^[0-9]$/.test(e)?b(a):/^[XYZ]$/.test(e)?c(a):d(a)},_fi:function(a){if(/^FI[0-9]{8}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{8}$/.test(a))return!1;for(var b=0,c=[7,9,10,5,8,4,2,1],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%11===0},_fr:function(a){if(/^FR[0-9A-Z]{2}[0-9]{9}$/.test(a)&&(a=a.substr(2)),!/^[0-9A-Z]{2}[0-9]{9}$/.test(a))return!1;if(!FormValidation.Helper.luhn(a.substr(2)))return!1;if(/^[0-9]{2}$/.test(a.substr(0,2)))return a.substr(0,2)===parseInt(a.substr(2)+"12",10)%97+"";var b,c="0123456789ABCDEFGHJKLMNPQRSTUVWXYZ";return b=/^[0-9]{1}$/.test(a.charAt(0))?24*c.indexOf(a.charAt(0))+c.indexOf(a.charAt(1))-10:34*c.indexOf(a.charAt(0))+c.indexOf(a.charAt(1))-100,(parseInt(a.substr(2),10)+1+Math.floor(b/11))%11===b%11},_gb:function(a){if((/^GB[0-9]{9}$/.test(a)||/^GB[0-9]{12}$/.test(a)||/^GBGD[0-9]{3}$/.test(a)||/^GBHA[0-9]{3}$/.test(a)||/^GB(GD|HA)8888[0-9]{5}$/.test(a))&&(a=a.substr(2)),!(/^[0-9]{9}$/.test(a)||/^[0-9]{12}$/.test(a)||/^GD[0-9]{3}$/.test(a)||/^HA[0-9]{3}$/.test(a)||/^(GD|HA)8888[0-9]{5}$/.test(a)))return!1;var b=a.length;if(5===b){var c=a.substr(0,2),d=parseInt(a.substr(2),10);return"GD"===c&&500>d||"HA"===c&&d>=500}if(11===b&&("GD8888"===a.substr(0,6)||"HA8888"===a.substr(0,6)))return"GD"===a.substr(0,2)&&parseInt(a.substr(6,3),10)>=500||"HA"===a.substr(0,2)&&parseInt(a.substr(6,3),10)<500?!1:parseInt(a.substr(6,3),10)%97===parseInt(a.substr(9,2),10);if(9===b||12===b){for(var e=0,f=[8,7,6,5,4,3,2,10,1],g=0;9>g;g++)e+=parseInt(a.charAt(g),10)*f[g];return e%=97,parseInt(a.substr(0,3),10)>=100?0===e||42===e||55===e:0===e}return!0},_gr:function(a){if(/^(GR|EL)[0-9]{9}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{9}$/.test(a))return!1;8===a.length&&(a="0"+a);for(var b=0,c=[256,128,64,32,16,8,4,2],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b=b%11%10,b+""===a.substr(8,1)},_el:function(a){return this._gr(a)},_hu:function(a){if(/^HU[0-9]{8}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{8}$/.test(a))return!1;for(var b=0,c=[9,7,3,1,9,7,3,1],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%10===0},_hr:function(a){return/^HR[0-9]{11}$/.test(a)&&(a=a.substr(2)),/^[0-9]{11}$/.test(a)?FormValidation.Helper.mod11And10(a):!1},_ie:function(a){if(/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(a))return!1;var b=function(a){for(;a.length<7;)a="0"+a;for(var b="WABCDEFGHIJKLMNOPQRSTUV",c=0,d=0;7>d;d++)c+=parseInt(a.charAt(d),10)*(8-d);return c+=9*b.indexOf(a.substr(7)),b[c%23]};return/^[0-9]+$/.test(a.substr(0,7))?a.charAt(7)===b(a.substr(0,7)+a.substr(8)+""):-1!=="ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".indexOf(a.charAt(1))?a.charAt(7)===b(a.substr(2,5)+a.substr(0,1)+""):!0},_is:function(a){return/^IS[0-9]{5,6}$/.test(a)&&(a=a.substr(2)),/^[0-9]{5,6}$/.test(a)},_it:function(a){if(/^IT[0-9]{11}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{11}$/.test(a))return!1;if(0===parseInt(a.substr(0,7),10))return!1;var b=parseInt(a.substr(7,3),10);return 1>b||b>201&&999!==b&&888!==b?!1:FormValidation.Helper.luhn(a)},_lt:function(a){if(/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(a)&&(a=a.substr(2)),!/^([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(a))return!1;var b,c=a.length,d=0;for(b=0;c-1>b;b++)d+=parseInt(a.charAt(b),10)*(1+b%9);var e=d%11;if(10===e)for(d=0,b=0;c-1>b;b++)d+=parseInt(a.charAt(b),10)*(1+(b+2)%9);return e=e%11%10,e+""===a.charAt(c-1)},_lu:function(a){return/^LU[0-9]{8}$/.test(a)&&(a=a.substr(2)),/^[0-9]{8}$/.test(a)?parseInt(a.substr(0,6),10)%89+""===a.substr(6,2):!1},_lv:function(a){if(/^LV[0-9]{11}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{11}$/.test(a))return!1;var b,c=parseInt(a.charAt(0),10),d=0,e=[],f=a.length;if(c>3){for(d=0,e=[9,1,4,8,3,10,2,5,7,6,1],b=0;f>b;b++)d+=parseInt(a.charAt(b),10)*e[b];return d%=11,3===d}var g=parseInt(a.substr(0,2),10),h=parseInt(a.substr(2,2),10),i=parseInt(a.substr(4,2),10);if(i=i+1800+100*parseInt(a.charAt(6),10),!FormValidation.Helper.date(i,h,g))return!1;for(d=0,e=[10,5,8,4,2,1,6,3,7,9],b=0;f-1>b;b++)d+=parseInt(a.charAt(b),10)*e[b];return d=(d+1)%11%10,d+""===a.charAt(f-1)},_mt:function(a){if(/^MT[0-9]{8}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{8}$/.test(a))return!1;for(var b=0,c=[3,4,6,7,8,9,10,1],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%37===0},_nl:function(a){if(/^NL[0-9]{9}B[0-9]{2}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{9}B[0-9]{2}$/.test(a))return!1;for(var b=0,c=[9,8,7,6,5,4,3,2],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%=11,b>9&&(b=0),b+""===a.substr(8,1)},_no:function(a){if(/^NO[0-9]{9}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{9}$/.test(a))return!1;for(var b=0,c=[3,2,7,6,5,4,3,2],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b=11-b%11,11===b&&(b=0),b+""===a.substr(8,1)},_pl:function(a){if(/^PL[0-9]{10}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{10}$/.test(a))return!1;for(var b=0,c=[6,5,7,2,3,4,5,6,7,-1],d=0;10>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%11===0},_pt:function(a){if(/^PT[0-9]{9}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{9}$/.test(a))return!1;for(var b=0,c=[9,8,7,6,5,4,3,2],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b=11-b%11,b>9&&(b=0),b+""===a.substr(8,1)},_ro:function(a){if(/^RO[1-9][0-9]{1,9}$/.test(a)&&(a=a.substr(2)),!/^[1-9][0-9]{1,9}$/.test(a))return!1;for(var b=a.length,c=[7,5,3,2,1,7,5,3,2].slice(10-b),d=0,e=0;b-1>e;e++)d+=parseInt(a.charAt(e),10)*c[e];return d=10*d%11%10,d+""===a.substr(b-1,1)},_ru:function(a){if(/^RU([0-9]{10}|[0-9]{12})$/.test(a)&&(a=a.substr(2)),!/^([0-9]{10}|[0-9]{12})$/.test(a))return!1;var b=0;if(10===a.length){var c=0,d=[2,4,10,3,5,9,4,6,8,0];for(b=0;10>b;b++)c+=parseInt(a.charAt(b),10)*d[b];return c%=11,c>9&&(c%=10),c+""===a.substr(9,1)}if(12===a.length){var e=0,f=[7,2,4,10,3,5,9,4,6,8,0],g=0,h=[3,7,2,4,10,3,5,9,4,6,8,0];for(b=0;11>b;b++)e+=parseInt(a.charAt(b),10)*f[b],g+=parseInt(a.charAt(b),10)*h[b];return e%=11,e>9&&(e%=10),g%=11,g>9&&(g%=10),e+""===a.substr(10,1)&&g+""===a.substr(11,1)}return!1},_rs:function(a){if(/^RS[0-9]{9}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{9}$/.test(a))return!1;for(var b=10,c=0,d=0;8>d;d++)c=(parseInt(a.charAt(d),10)+b)%10,0===c&&(c=10),b=2*c%11;return(b+parseInt(a.substr(8,1),10))%10===1},_se:function(a){return/^SE[0-9]{10}01$/.test(a)&&(a=a.substr(2)),/^[0-9]{10}01$/.test(a)?(a=a.substr(0,10),FormValidation.Helper.luhn(a)):!1},_si:function(a){var b=a.match(/^(SI)?([1-9][0-9]{7})$/);if(!b)return!1;b[1]&&(a=a.substr(2));for(var c=0,d=[8,7,6,5,4,3,2],e=0;7>e;e++)c+=parseInt(a.charAt(e),10)*d[e];return c=11-c%11,10===c&&(c=0),c+""===a.substr(7,1)},_sk:function(a){return/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(a)&&(a=a.substr(2)),/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(a)?parseInt(a,10)%11===0:!1},_ve:function(a){if(/^VE[VEJPG][0-9]{9}$/.test(a)&&(a=a.substr(2)),!/^[VEJPG][0-9]{9}$/.test(a))return!1;for(var b={V:4,E:8,J:12,P:16,G:20},c=b[a.charAt(0)],d=[3,2,7,6,5,4,3,2],e=0;8>e;e++)c+=parseInt(a.charAt(e+1),10)*d[e];return c=11-c%11,(11===c||10===c)&&(c=0),c+""===a.substr(9,1)},_za:function(a){return/^ZA4[0-9]{9}$/.test(a)&&(a=a.substr(2)),/^4[0-9]{9}$/.test(a)}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{vin:{"default":"Please enter a valid VIN number"}}}),FormValidation.Validator.vin={validate:function(a,b){var c=a.getFieldValue(b,"vin");if(""===c)return!0;if(!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(c))return!1;c=c.toUpperCase();for(var d={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,J:1,K:2,L:3,M:4,N:5,P:7,R:9,S:2,T:3,U:4,V:5,W:6,X:7,Y:8,Z:9,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,0:0},e=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],f=0,g=c.length,h=0;g>h;h++)f+=d[c.charAt(h)+""]*e[h];var i=f%11;return 10===i&&(i="X"),i+""===c.charAt(8)}}}(jQuery),function(a){FormValidation.I18n=a.extend(!0,FormValidation.I18n||{},{en_US:{zipCode:{"default":"Please enter a valid postal code",country:"Please enter a valid postal code in %s",countries:{AT:"Austria",BG:"Bulgaria",BR:"Brazil",CA:"Canada",CH:"Switzerland",CZ:"Czech Republic",DE:"Germany",DK:"Denmark",ES:"Spain",FR:"France",GB:"United Kingdom",IE:"Ireland",IN:"India",IT:"Italy",MA:"Morocco",NL:"Netherlands",PL:"Poland",PT:"Portugal",RO:"Romania",RU:"Russia",SE:"Sweden",SG:"Singapore",SK:"Slovakia",US:"USA"}}}}),FormValidation.Validator.zipCode={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["AT","BG","BR","CA","CH","CZ","DE","DK","ES","FR","GB","IE","IN","IT","MA","NL","PL","PT","RO","RU","SE","SG","SK","US"],validate:function(b,c,d){var e=b.getFieldValue(c,"zipCode");if(""===e||!d.country)return!0;var f=b.getLocale(),g=d.country;if(("string"!=typeof g||-1===a.inArray(g,this.COUNTRY_CODES))&&(g=b.getDynamicOption(c,g)),!g||-1===a.inArray(g.toUpperCase(),this.COUNTRY_CODES))return!0;var h=!1;switch(g=g.toUpperCase()){case"AT":h=/^([1-9]{1})(\d{3})$/.test(e);break;case"BG":h=/^([1-9]{1}[0-9]{3})$/.test(a.trim(e));break;case"BR":h=/^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(e);break;case"CA":h=/^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(e);break;case"CH":h=/^([1-9]{1})(\d{3})$/.test(e);break;case"CZ":h=/^(\d{3})([ ]?)(\d{2})$/.test(e);break;case"DE":h=/^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(e);break;case"DK":h=/^(DK(-|\s)?)?\d{4}$/i.test(e);break;case"ES":h=/^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/.test(e);break;case"FR":h=/^[0-9]{5}$/i.test(e);break;case"GB":h=this._gb(e);break;case"IN":h=/^\d{3}\s?\d{3}$/.test(e);break;case"IE":h=/^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(e);break;case"IT":h=/^(I-|IT-)?\d{5}$/i.test(e);break;case"MA":h=/^[1-9][0-9]{4}$/i.test(e);break;case"NL":h=/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(e);break;case"PL":h=/^[0-9]{2}\-[0-9]{3}$/.test(e);break;case"PT":h=/^[1-9]\d{3}-\d{3}$/.test(e);break;case"RO":h=/^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(e);break;case"RU":h=/^[0-9]{6}$/i.test(e);break;case"SE":h=/^(S-)?\d{3}\s?\d{2}$/i.test(e);break;case"SG":h=/^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(e);break;case"SK":h=/^(\d{3})([ ]?)(\d{2})$/.test(e);break;case"US":default:h=/^\d{4,5}([\-]?\d{4})?$/.test(e)}return{valid:h,message:FormValidation.Helper.format(d.message||FormValidation.I18n[f].zipCode.country,FormValidation.I18n[f].zipCode.countries[g])}},_gb:function(a){for(var b="[ABCDEFGHIJKLMNOPRSTUWYZ]",c="[ABCDEFGHKLMNOPQRSTUVWXY]",d="[ABCDEFGHJKPMNRSTUVWXY]",e="[ABEHMNPRVWXY]",f="[ABDEFGHJLNPQRSTUWXYZ]",g=[new RegExp("^("+b+"{1}"+c+"?[0-9]{1,2})(\\s*)([0-9]{1}"+f+"{2})$","i"),new RegExp("^("+b+"{1}[0-9]{1}"+d+"{1})(\\s*)([0-9]{1}"+f+"{2})$","i"),new RegExp("^("+b+"{1}"+c+"{1}?[0-9]{1}"+e+"{1})(\\s*)([0-9]{1}"+f+"{2})$","i"),new RegExp("^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$","i"),/^(GIR)(\s*)(0AA)$/i,/^(BFPO)(\s*)([0-9]{1,4})$/i,/^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i,/^([A-Z]{4})(\s*)(1ZZ)$/i,/^(AI-2640)$/i],h=0;h<g.length;h++)if(g[h].test(a))return!0;return!1}}}(jQuery);
/*zh_CN.js*/
(function ($) {
    /**
     * Simplified Chinese language package
     * Translated by @shamiao
     */
    FormValidation.I18n = $.extend(true, FormValidation.I18n, {
        'zh_CN': {
            base64: {
                'default': '请输入有效的Base64编码'
            },
            between: {
                'default': '请输入在 %s 和 %s 之间的数值',
                notInclusive: '请输入在 %s 和 %s 之间(不含两端)的数值'
            },
            bic: {
                'default': '请输入有效的BIC商品编码'
            },
            callback: {
                'default': '请输入有效的值'
            },
            choice: {
                'default': '请输入有效的值',
                less: '请至少选中 %s 个选项',
                more: '最多只能选中 %s 个选项',
                between: '请选择 %s 至 %s 个选项'
            },
            color: {
                'default': '请输入有效的颜色值'
            },
            creditCard: {
                'default': '请输入有效的信用卡号码'
            },
            cusip: {
                'default': '请输入有效的美国CUSIP代码'
            },
            cvv: {
                'default': '请输入有效的CVV代码'
            },
            date: {
                'default': '请输入有效的日期',
                min: '请输入 %s 或之后的日期',
                max: '请输入 %s 或以前的日期',
                range: '请输入 %s 和 %s 之间的日期'
            },
            different: {
                'default': '请输入不同的值'
            },
            digits: {
                'default': '请输入有效的数字'
            },
            ean: {
                'default': '请输入有效的EAN商品编码'
            },
            ein: {
                'default': '请输入有效的EIN商品编码'
            },
            emailAddress: {
                'default': '请输入有效的邮件地址'
            },
            file: {
                'default': '请选择有效的文件'
            },
            greaterThan: {
                'default': '请输入大于等于 %s 的数值',
                notInclusive: '请输入大于 %s 的数值'
            },
            grid: {
                'default': '请输入有效的GRId编码'
            },
            hex: {
                'default': '请输入有效的16进制数'
            },
            iban: {
                'default': '请输入有效的IBAN(国际银行账户)号码',
                country: '请输入有效的 %s 国家或地区的IBAN(国际银行账户)号码',
                countries: {
                    AD: '安道​​尔',
                    AE: '阿联酋',
                    AL: '阿尔巴尼亚',
                    AO: '安哥拉',
                    AT: '奥地利',
                    AZ: '阿塞拜疆',
                    BA: '波斯尼亚和黑塞哥维那',
                    BE: '比利时',
                    BF: '布基纳法索',
                    BG: '保加利亚',
                    BH: '巴林',
                    BI: '布隆迪',
                    BJ: '贝宁',
                    BR: '巴西',
                    CH: '瑞士',
                    CI: '科特迪瓦',
                    CM: '喀麦隆',
                    CR: '哥斯达黎加',
                    CV: '佛得角',
                    CY: '塞浦路斯',
                    CZ: '捷克共和国',
                    DE: '德国',
                    DK: '丹麦',
                    DO: '多米尼加共和国',
                    DZ: '阿尔及利亚',
                    EE: '爱沙尼亚',
                    ES: '西班牙',
                    FI: '芬兰',
                    FO: '法罗群岛',
                    FR: '法国',
                    GB: '英国',
                    GE: '格鲁吉亚',
                    GI: '直布罗陀',
                    GL: '格陵兰岛',
                    GR: '希腊',
                    GT: '危地马拉',
                    HR: '克罗地亚',
                    HU: '匈牙利',
                    IE: '爱尔兰',
                    IL: '以色列',
                    IR: '伊朗',
                    IS: '冰岛',
                    IT: '意大利',
                    JO: '约旦',
                    KW: '科威特',
                    KZ: '哈萨克斯坦',
                    LB: '黎巴嫩',
                    LI: '列支敦士登',
                    LT: '立陶宛',
                    LU: '卢森堡',
                    LV: '拉脱维亚',
                    MC: '摩纳哥',
                    MD: '摩尔多瓦',
                    ME: '黑山',
                    MG: '马达加斯加',
                    MK: '马其顿',
                    ML: '马里',
                    MR: '毛里塔尼亚',
                    MT: '马耳他',
                    MU: '毛里求斯',
                    MZ: '莫桑比克',
                    NL: '荷兰',
                    NO: '挪威',
                    PK: '巴基斯坦',
                    PL: '波兰',
                    PS: '巴勒斯坦',
                    PT: '葡萄牙',
                    QA: '卡塔尔',
                    RO: '罗马尼亚',
                    RS: '塞尔维亚',
                    SA: '沙特阿拉伯',
                    SE: '瑞典',
                    SI: '斯洛文尼亚',
                    SK: '斯洛伐克',
                    SM: '圣马力诺',
                    SN: '塞内加尔',
                    TL: '东帝汶',
                    TN: '突尼斯',
                    TR: '土耳其',
                    VG: '英属维尔京群岛',
                    XK: '科索沃共和国'
                }
            },
            id: {
                'default': '请输入有效的身份证件号码',
                country: '请输入有效的 %s 国家或地区的身份证件号码',
                countries: {
                    BA: '波黑',
                    BG: '保加利亚',
                    BR: '巴西',
                    CH: '瑞士',
                    CL: '智利',
                    CN: '中国',
                    CZ: '捷克共和国',
                    DK: '丹麦',
                    EE: '爱沙尼亚',
                    ES: '西班牙',
                    FI: '芬兰',
                    HR: '克罗地亚',
                    IE: '爱尔兰',
                    IS: '冰岛',
                    LT: '立陶宛',
                    LV: '拉脱维亚',
                    ME: '黑山',
                    MK: '马其顿',
                    NL: '荷兰',
                    PL: '波兰',
                    RO: '罗马尼亚',
                    RS: '塞尔维亚',
                    SE: '瑞典',
                    SI: '斯洛文尼亚',
                    SK: '斯洛伐克',
                    SM: '圣马力诺',
                    TH: '泰国',
                    TR: '土耳其',
                    ZA: '南非'
                }
            },
            identical: {
                'default': '请输入相同的值'
            },
            imei: {
                'default': '请输入有效的IMEI(手机串号)'
            },
            imo: {
                'default': '请输入有效的国际海事组织(IMO)号码'
            },
            integer: {
                'default': '请输入有效的整数值'
            },
            ip: {
                'default': '请输入有效的IP地址',
                ipv4: '请输入有效的IPv4地址',
                ipv6: '请输入有效的IPv6地址'
            },
            isbn: {
                'default': '请输入有效的ISBN(国际标准书号)'
            },
            isin: {
                'default': '请输入有效的ISIN(国际证券编码)'
            },
            ismn: {
                'default': '请输入有效的ISMN(印刷音乐作品编码)'
            },
            issn: {
                'default': '请输入有效的ISSN(国际标准杂志书号)'
            },
            lessThan: {
                'default': '请输入小于等于 %s 的数值',
                notInclusive: '请输入小于 %s 的数值'
            },
            mac: {
                'default': '请输入有效的MAC物理地址'
            },
            meid: {
                'default': '请输入有效的MEID(移动设备识别码)'
            },
            notEmpty: {
                'default': '请填写必填项目'
            },
            numeric: {
                'default': '请输入有效的数值，允许小数'
            },
            phone: {
                'default': '请输入有效的电话号码',
                country: '请输入有效的 %s 国家或地区的电话号码',
                countries: {
                    AE: '阿联酋',
                    BG: '保加利亚',
                    BR: '巴西',
                    CN: '中国',
                    CZ: '捷克共和国',
                    DE: '德国',
                    DK: '丹麦',
                    ES: '西班牙',
                    FR: '法国',
                    GB: '英国',
                    IN: '印度',
                    MA: '摩洛哥',
                    NL: '荷兰',
                    PK: '巴基斯坦',
                    RO: '罗马尼亚',
                    RU: '俄罗斯',
                    SK: '斯洛伐克',
                    TH: '泰国',
                    US: '美国',
                    VE: '委内瑞拉'
                }
            },
            promise: {
                'default': '请输入有效的值'
            },
            regexp: {
                'default': '请输入符合正则表达式限制的值'
            },
            remote: {
                'default': '请输入有效的值'
            },
            rtn: {
                'default': '请输入有效的RTN号码'
            },
            sedol: {
                'default': '请输入有效的SEDOL代码'
            },
            siren: {
                'default': '请输入有效的SIREN号码'
            },
            siret: {
                'default': '请输入有效的SIRET号码'
            },
            step: {
                'default': '请输入在基础值上，增加 %s 的整数倍的数值'
            },
            stringCase: {
                'default': '只能输入小写字母',
                upper: '只能输入大写字母'
            },
            stringLength: {
                'default': '请输入符合长度限制的值',
                less: '最多只能输入 %s 个字符',
                more: '需要输入至少 %s 个字符',
                between: '请输入 %s 至 %s 个字符'
            },
            uri: {
                'default': '请输入一个有效的URL地址'
            },
            uuid: {
                'default': '请输入有效的UUID',
                version: '请输入版本 %s 的UUID'
            },
            vat: {
                'default': '请输入有效的VAT(税号)',
                country: '请输入有效的 %s 国家或地区的VAT(税号)',
                countries: {
                    AT: '奥地利',
                    BE: '比利时',
                    BG: '保加利亚',
                    BR: '巴西',
                    CH: '瑞士',
                    CY: '塞浦路斯',
                    CZ: '捷克共和国',
                    DE: '德国',
                    DK: '丹麦',
                    EE: '爱沙尼亚',
                    ES: '西班牙',
                    FI: '芬兰',
                    FR: '法语',
                    GB: '英国',
                    GR: '希腊',
                    EL: '希腊',
                    HU: '匈牙利',
                    HR: '克罗地亚',
                    IE: '爱尔兰',
                    IS: '冰岛',
                    IT: '意大利',
                    LT: '立陶宛',
                    LU: '卢森堡',
                    LV: '拉脱维亚',
                    MT: '马耳他',
                    NL: '荷兰',
                    NO: '挪威',
                    PL: '波兰',
                    PT: '葡萄牙',
                    RO: '罗马尼亚',
                    RU: '俄罗斯',
                    RS: '塞尔维亚',
                    SE: '瑞典',
                    SI: '斯洛文尼亚',
                    SK: '斯洛伐克',
                    VE: '委内瑞拉',
                    ZA: '南非'
                }
            },
            vin: {
                'default': '请输入有效的VIN(美国车辆识别号码)'
            },
            zipCode: {
                'default': '请输入有效的邮政编码',
                country: '请输入有效的 %s 国家或地区的邮政编码',
                countries: {
                    AT: '奥地利',
                    BG: '保加利亚',
                    BR: '巴西',
                    CA: '加拿大',
                    CH: '瑞士',
                    CZ: '捷克共和国',
                    DE: '德国',
                    DK: '丹麦',
                    ES: '西班牙',
                    FR: '法国',
                    GB: '英国',
                    IE: '爱尔兰',
                    IN: '印度',
                    IT: '意大利',
                    MA: '摩洛哥',
                    NL: '荷兰',
                    PL: '波兰',
                    PT: '葡萄牙',
                    RO: '罗马尼亚',
                    RU: '俄罗斯',
                    SE: '瑞典',
                    SG: '新加坡',
                    SK: '斯洛伐克',
                    US: '美国'
                }
            }
        }
    });
}(jQuery));

/*bootstrap.min.js*/
/*!
 * FormValidation (http://formvalidation.io)
 * The best jQuery plugin to validate form fields. Support Bootstrap, Foundation, Pure, SemanticUI, UIKit and custom frameworks
 *
 * @version     v0.6.2-dev, built on 2015-03-13 8:15:46 AM
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */
!function(a){FormValidation.Framework.Bootstrap=function(b,c,d){c=a.extend(!0,{button:{selector:'[type="submit"]',disabled:"disabled"},err:{clazz:"help-block",parent:"^(.*)col-(xs|sm|md|lg)-(offset-){0,1}[0-9]+(.*)$"},icon:{valid:null,invalid:null,validating:null,feedback:"form-control-feedback"},row:{selector:".form-group",valid:"has-success",invalid:"has-error",feedback:"has-feedback"}},c),FormValidation.Base.apply(this,[b,c,d])},FormValidation.Framework.Bootstrap.prototype=a.extend({},FormValidation.Base.prototype,{_fixIcon:function(a,b){var c=this._namespace,d=a.attr("type"),e=a.attr("data-"+c+"-field"),f=this.options.fields[e].row||this.options.row.selector,g=a.closest(f);if("checkbox"===d||"radio"===d){var h=a.parent();h.hasClass(d)?b.insertAfter(h):h.parent().hasClass(d)&&b.insertAfter(h.parent())}0===g.find("label").length&&b.addClass("fv-icon-no-label"),0!==g.find(".input-group").length&&b.addClass("fv-bootstrap-icon-input-group").insertAfter(g.find(".input-group").eq(0))},_createTooltip:function(a,b,c){var d=this._namespace,e=a.data(d+".icon");if(e)switch(c){case"popover":e.css({cursor:"pointer","pointer-events":"auto"}).popover("destroy").popover({container:"body",content:b,html:!0,placement:"auto top",trigger:"hover click"});break;case"tooltip":default:e.css({cursor:"pointer","pointer-events":"auto"}).tooltip("destroy").tooltip({container:"body",html:!0,placement:"auto top",title:b})}},_destroyTooltip:function(a,b){var c=this._namespace,d=a.data(c+".icon");if(d)switch(b){case"popover":d.css({cursor:"","pointer-events":"none"}).popover("destroy");break;case"tooltip":default:d.css({cursor:"","pointer-events":"none"}).tooltip("destroy")}},_hideTooltip:function(a,b){var c=this._namespace,d=a.data(c+".icon");if(d)switch(b){case"popover":d.popover("hide");break;case"tooltip":default:d.tooltip("hide")}},_showTooltip:function(a,b){var c=this._namespace,d=a.data(c+".icon");if(d)switch(b){case"popover":d.popover("show");break;case"tooltip":default:d.tooltip("show")}}}),a.fn.bootstrapValidator=function(b){var c=arguments;return this.each(function(){var d=a(this),e=d.data("formValidation")||d.data("bootstrapValidator"),f="object"==typeof b&&b;e||(e=new FormValidation.Framework.Bootstrap(this,a.extend({},{events:{formInit:"init.form.bv",formError:"error.form.bv",formSuccess:"success.form.bv",fieldAdded:"added.field.bv",fieldRemoved:"removed.field.bv",fieldInit:"init.field.bv",fieldError:"error.field.bv",fieldSuccess:"success.field.bv",fieldStatus:"status.field.bv",localeChanged:"changed.locale.bv",validatorError:"error.validator.bv",validatorSuccess:"success.validator.bv"}},f),"bv"),d.addClass("fv-form-bootstrap").data("formValidation",e).data("bootstrapValidator",e)),"string"==typeof b&&e[b].apply(e,Array.prototype.slice.call(c,1))})},a.fn.bootstrapValidator.Constructor=FormValidation.Framework.Bootstrap}(jQuery);
/*jquery.enplaceholder.min.js*/
/**
 * jQuery EnPlaceholder plug
 * EnPlaceholder是一个跨浏览器实现placeholder效果的jQuery插件
 * version 1.0
 * by Frans.Lee <dmon@foxmail.com>  http://www.ifrans.cn
 */
;(function($){$.fn.extend({"placeholder":function(options){options=$.extend({placeholderColor:'#999', isUseSpan:true, onInput:false
},options);$(this).each(function(){var _this=this;var supportPlaceholder='placeholder'in document.createElement('input');if(!supportPlaceholder){var defaultValue=$(_this).attr('placeholder');var defaultColor=$(_this).css('color');if(options.isUseSpan==false){$(_this).focus(function(){var pattern=new RegExp("^"+defaultValue+"$|^$");pattern.test($(_this).val())&&$(_this).val('').css('color',defaultColor);}).blur(function(){if($(_this).val()==defaultValue){$(_this).css('color',defaultColor);}else if($(_this).val().length==0){$(_this).val(defaultValue).css('color',options.placeholderColor)}}).trigger('blur');}else{var $imitate=$('<span class="wrap-placeholder" style="position:absolute; display:inline-block; overflow:hidden;z-index: 10; color:'+options.placeholderColor+'; width:'+$(_this).outerWidth()+'px; height:'+$(_this).outerHeight()+'px;">'+defaultValue+'</span>');$imitate.css({'margin-left':$(_this).css('margin-left'),'margin-top':$(_this).css('margin-top'),'font-size':$(_this).css('font-size'),'font-family':$(_this).css('font-family'),'font-weight':$(_this).css('font-weight'),'padding-left':parseInt($(_this).css('padding-left'))+2+'px','line-height':_this.nodeName.toLowerCase()=='textarea'?$(_this).css('line-weight'):$(_this).outerHeight()+'px','padding-top':_this.nodeName.toLowerCase()=='textarea'?parseInt($(_this).css('padding-top'))+2:0});$(_this).before($imitate.click(function(){$(_this).trigger('focus');}));$(_this).val().length!=0&&$imitate.hide();if(options.onInput){ var inputChangeEvent=typeof(_this.oninput)=='object'?'input':'propertychange';$(_this).bind(inputChangeEvent,function(){$imitate[0].style.display=$(_this).val().length!=0?'none':'inline-block';});}else{$(_this).focus(function(){$imitate.hide();}).blur(function(){/^$/.test($(_this).val())&&$imitate.show();});}}}});return this;}});})(jQuery);
if($('input[placeholder],textarea[placeholder]').length)$('input[placeholder],textarea[placeholder]').placeholder();
/*jquery.asScrollable.all.min.js*/
/*! jQuery asScrollable - v0.3.1 - 2015-06-15
* https://github.com/amazingSurge/jquery-asScrollable
* Copyright (c) 2015 amazingSurge; Licensed GPL */
!function(a,b,c,d){"use strict";function e(){return"undefined"!=typeof a.performance&&a.performance.now?a.performance.now():Date.now()}function f(a){return"string"==typeof a&&-1!=a.indexOf("%")}function g(a){return parseFloat(a.slice(0,-1)/100,10)}function h(a){return a&&"matrix"==a.substr(0,6)?a.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/):!1}var i="asScrollbar";Date.now||(Date.now=function(){return(new Date).getTime()});for(var j=["webkit","moz"],k=0;k<j.length&&!a.requestAnimationFrame;++k){var l=j[k];a.requestAnimationFrame=a[l+"RequestAnimationFrame"],a.cancelAnimationFrame=a[l+"CancelAnimationFrame"]||a[l+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS (6|7|8)/.test(a.navigator.userAgent)||!a.requestAnimationFrame||!a.cancelAnimationFrame){var m=0;a.requestAnimationFrame=function(a){var b=e(),c=Math.max(m+16,b);return setTimeout(function(){a(m=c)},c-b)},a.cancelAnimationFrame=clearTimeout}var n=c[i]=function(a,b){this.$bar=c(b),a=this.options=c.extend({},n.defaults,a||{},this.$bar.data("options")||{}),b.direction=this.options.direction,this.classes={directionClass:a.namespace+"-"+a.direction,barClass:a.barClass?a.barClass:a.namespace,handleClass:a.handleClass?a.handleClass:a.namespace+"-handle"},"vertical"===this.options.direction?this.attributes={axis:"Y",position:"top",length:"height",clientLength:"clientHeight"}:"horizontal"===this.options.direction&&(this.attributes={axis:"X",position:"left",length:"width",clientLength:"clientWidth"}),this._states={},this._drag={time:null,pointer:null},this._frameId=null,this.handlePosition=0,this.easing=n.easing[this.options.easing]||n.easing.ease,this.init()};n.defaults={namespace:"asScrollbar",skin:null,handleSelector:null,handleTemplate:'<div class="{{handle}}"></div>',barClass:null,handleClass:null,disabledClass:"is-disabled",draggingClass:"is-dragging",hoveringClass:"is-hovering",direction:"vertical",barLength:null,handleLength:null,minHandleLength:30,maxHandleLength:null,mouseDrag:!0,touchDrag:!0,pointerDrag:!0,clickMove:!0,clickMoveStep:.3,mousewheel:!0,mousewheelSpeed:50,keyboard:!0,useCssTransforms3d:!0,useCssTransforms:!0,useCssTransitions:!0,duration:"500",easing:"ease"};var o={};n.support=o,function(e){function f(a,b){var e=!1,f=a.charAt(0).toUpperCase()+a.slice(1);return h[a]!==d&&(e=a),e||c.each(i,function(a,b){return h[b+f]!==d?(e="-"+b.toLowerCase()+"-"+f,!1):void 0}),b?e:e?!0:!1}function g(a){return f(a,!0)}var h=c("<support>").get(0).style,i=["webkit","Moz","O","ms"],j={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},k={csstransforms:function(){return!!f("transform")},csstransforms3d:function(){return!!f("perspective")},csstransitions:function(){return!!f("transition")},cssanimations:function(){return!!f("animation")}};k.csstransitions()&&(e.transition=new String(g("transition")),e.transition.end=j.transition.end[e.transition]),k.cssanimations()&&(e.animation=new String(g("animation")),e.animation.end=j.animation.end[e.animation]),k.csstransforms()&&(e.transform=new String(g("transform")),e.transform3d=k.csstransforms3d()),e.touch="ontouchstart"in a||a.DocumentTouch&&b instanceof a.DocumentTouch?!0:!1,e.pointer=a.PointerEvent||a.MSPointerEvent?!0:!1,e.prefixPointerEvent=function(b){return a.MSPointerEvent?"MSPointer"+b.charAt(9).toUpperCase()+b.substr(10):b}}(o);var p=function(a,b,c,d){function e(a,b){return 1-3*b+3*a}function f(a,b){return 3*b-6*a}function g(a){return 3*a}function h(a,b,c){return((e(b,c)*a+f(b,c))*a+g(b))*a}function i(a,b,c){return 3*e(b,c)*a*a+2*f(b,c)*a+g(b)}function j(b){for(var d=b,e=0;4>e;++e){var f=i(d,a,c);if(0===f)return d;var g=h(d,a,c)-b;d-=g/f}return d}return a===b&&c===d?{css:"linear",fn:function(a){return a}}:{css:"cubic-bezier("+a+","+b+","+c+","+d+")",fn:function(a){return h(j(a),b,d)}}};c.extend(n.easing={},{ease:p(.25,.1,.25,1),linear:p(0,0,1,1),"ease-in":p(.42,0,1,1),"ease-out":p(0,0,.58,1),"ease-in-out":p(.42,0,.58,1)}),n.prototype={constructor:n,init:function(){var a=this.options;this.$handle=this.$bar.find(this.options.handleSelector),0===this.$handle.length?this.$handle=c(a.handleTemplate.replace(/\{\{handle\}\}/g,this.classes.handleClass)).appendTo(this.$bar):this.$handle.addClass(this.classes.handleClass),this.$bar.addClass(this.classes.barClass).addClass(this.classes.directionClass).attr("draggable",!1),a.skin&&this.$bar.addClass(a.skin),null!==a.barLength&&this.setBarLength(a.barLength),null!==a.handleLength&&this.setHandleLength(a.handleLength),this.updateLength(),this.bindEvents()},trigger:function(a){var b=Array.prototype.slice.call(arguments,1),c=[this].concat(b);this.$bar.trigger(i+"::"+a,c),a=a.replace(/\b\w+\b/g,function(a){return a.substring(0,1).toUpperCase()+a.substring(1)});var d="on"+a;"function"==typeof this.options[d]&&this.options[d].apply(this,b)},is:function(a){return this._states[a]&&this._states[a]>0},enter:function(a){this._states[a]===d&&(this._states[a]=0),this._states[a]++},leave:function(a){this._states[a]--},eventName:function(a){if("string"!=typeof a||""===a)return"."+this.options.namespace;a=a.split(" ");for(var b=a.length,c=0;b>c;c++)a[c]=a[c]+"."+this.options.namespace;return a.join(" ")},bindEvents:function(){var a=this;this.options.mouseDrag&&(this.$handle.on(this.eventName("mousedown"),c.proxy(this.onDragStart,this)),this.$handle.on(this.eventName("dragstart selectstart"),function(){return!1})),this.options.touchDrag&&o.touch&&(this.$handle.on(this.eventName("touchstart"),c.proxy(this.onDragStart,this)),this.$handle.on(this.eventName("touchcancel"),c.proxy(this.onDragEnd,this))),this.options.pointerDrag&&o.pointer&&(this.$handle.on(this.eventName(o.prefixPointerEvent("pointerdown")),c.proxy(this.onDragStart,this)),this.$handle.on(this.eventName(o.prefixPointerEvent("pointercancel")),c.proxy(this.onDragEnd,this))),this.options.clickMove&&this.$bar.on(this.eventName("mousedown"),c.proxy(this.onClick,this)),this.options.mousewheel&&this.$bar.on(this.eventName("mousewheel"),function(b,c){var d=a.getHandlePosition();return 0>=d&&c>0?!0:d>=a.barLength&&0>c?!0:(d-=a.options.mousewheelSpeed*c,a.move(d,!0),!1)}),this.$bar.on(this.eventName("mouseenter"),function(){a.$bar.addClass(a.options.hoveringClass),a.enter("hovering"),a.trigger("hover")}),this.$bar.on(this.eventName("mouseleave"),function(){a.$bar.removeClass(a.options.hoveringClass),a.is("hovering")&&(a.leave("hovering"),a.trigger("hovered"))}),this.options.keyboard&&c(b).on(this.eventName("keydown"),function(d){if((!d.isDefaultPrevented||!d.isDefaultPrevented())&&a.is("hovering")){for(var e=b.activeElement;e.shadowRoot;)e=e.shadowRoot.activeElement;if(!c(e).is(":input,select,option,[contenteditable]")){var f=0,g=null;switch(d.which){case 37:case 63232:f=-30;break;case 38:case 63233:f=-30;break;case 39:case 63234:f=30;break;case 40:case 63235:f=30;break;case 33:case 63276:f=-90;break;case 32:case 34:case 63277:f=-90;break;case 35:case 63275:g="100%";break;case 36:case 63273:g=0;break;default:return}(f||null!==g)&&(f?a.moveBy(f,!0):null!==g&&a.moveTo(g,!0),d.preventDefault())}}})},onClick:function(a){if(3!==a.which&&a.target!==this.$handle[0]){this._drag.time=(new Date).getTime(),this._drag.pointer=this.pointer(a);var b=this.$handle.offset(),c=this.distance({x:b.left,y:b.top},this._drag.pointer),d=1;c>0?c-=this.handleLength:(c=Math.abs(c),d=-1),c>this.barLength*this.options.clickMoveStep&&(c=this.barLength*this.options.clickMoveStep),this.moveBy(d*c,!0)}},onDragStart:function(a){var d=this;if(3!==a.which){this.$bar.addClass(this.options.draggingClass),this._drag.time=(new Date).getTime(),this._drag.pointer=this.pointer(a);var e=function(){d.enter("dragging"),d.trigger("drag")};this.options.mouseDrag&&(c(b).on(d.eventName("mouseup"),c.proxy(this.onDragEnd,this)),c(b).one(d.eventName("mousemove"),c.proxy(function(){c(b).on(d.eventName("mousemove"),c.proxy(this.onDragMove,this)),e()},this))),this.options.touchDrag&&o.touch&&(c(b).on(d.eventName("touchend"),c.proxy(this.onDragEnd,this)),c(b).one(d.eventName("touchmove"),c.proxy(function(){c(b).on(d.eventName("touchmove"),c.proxy(this.onDragMove,this)),e()},this))),this.options.pointerDrag&&o.pointer&&(c(b).on(d.eventName(o.prefixPointerEvent("pointerup")),c.proxy(this.onDragEnd,this)),c(b).one(d.eventName(o.prefixPointerEvent("pointermove")),c.proxy(function(){c(b).on(d.eventName(o.prefixPointerEvent("pointermove")),c.proxy(this.onDragMove,this)),e()},this))),c(b).on(d.eventName("blur"),c.proxy(this.onDragEnd,this))}},onDragMove:function(a){var b=this.distance(this._drag.pointer,this.pointer(a));this.is("dragging")&&(a.preventDefault(),this.moveBy(b,!0))},onDragEnd:function(){c(b).off(this.eventName("mousemove mouseup touchmove touchend pointermove pointerup MSPointerMove MSPointerUp blur")),this.$bar.removeClass(this.options.draggingClass),this.handlePosition=this.getHandlePosition(),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},pointer:function(b){var c={x:null,y:null};return b=b.originalEvent||b||a.event,b=b.touches&&b.touches.length?b.touches[0]:b.changedTouches&&b.changedTouches.length?b.changedTouches[0]:b,b.pageX?(c.x=b.pageX,c.y=b.pageY):(c.x=b.clientX,c.y=b.clientY),c},distance:function(a,b){return"vertical"===this.options.direction?b.y-a.y:b.x-a.x},setBarLength:function(a,b){"undefined"!=typeof a&&this.$bar.css(this.attributes.length,a),b!==!1&&this.updateLength()},setHandleLength:function(a,b){"undefined"!=typeof a&&(a<this.options.minHandleLength?a=this.options.minHandleLength:this.options.maxHandleLength&&a>this.options.maxHandleLength&&(a=this.options.maxHandleLength),this.$handle.css(this.attributes.length,a),b!==!1&&this.updateLength(a))},updateLength:function(a,b){this.handleLength="undefined"!=typeof a?a:this.getHandleLenght(),this.barLength="undefined"!=typeof b?b:this.getBarLength()},getBarLength:function(){return this.$bar[0][this.attributes.clientLength]},getHandleLenght:function(){return this.$handle[0][this.attributes.clientLength]},getHandlePosition:function(){var a;if(this.options.useCssTransforms&&o.transform){if(a=h(this.$handle.css(o.transform)),!a)return 0;a="X"===this.attributes.axis?a[12]||a[4]:a[13]||a[5]}else a=this.$handle.css(this.attributes.position);return parseFloat(a.replace("px",""))},makeHandlePositionStyle:function(a){var b,c="0",d="0";this.options.useCssTransforms&&o.transform?("X"===this.attributes.axis?c=a+"px":d=a+"px",b=o.transform.toString(),a=this.options.useCssTransforms3d&&o.transform3d?"translate3d("+c+","+d+",0)":"translate("+c+","+d+")"):b=this.attributes.position;var e={};return e[b]=a,e},setHandlePosition:function(a){var b=this.makeHandlePositionStyle(a);this.$handle.css(b),this.is("dragging")||(this.handlePosition=parseFloat(a))},moveTo:function(a,b,c){var d=typeof a;"string"===d&&(f(a)&&(a=g(a)*(this.barLength-this.handleLength)),a=parseFloat(a),d="number"),"number"===d&&this.move(a,b,c)},moveBy:function(a,b,c){var d=typeof a;"string"===d&&(f(a)&&(a=g(a)*(this.barLength-this.handleLength)),a=parseFloat(a),d="number"),"number"===d&&this.move(this.handlePosition+a,b,c)},move:function(a,b,c){"number"!=typeof a||this.is("disabled")||(0>a?a=0:a+this.handleLength>this.barLength&&(a=this.barLength-this.handleLength),this.is("dragging")||c===!0?(this.setHandlePosition(a),b&&this.trigger("change",a/(this.barLength-this.handleLength))):this.doMove(a,this.options.duration,this.options.easing,b))},doMove:function(b,c,d,f){this.enter("moving"),c=c?c:this.options.duration,d=d?d:this.options.easing;var g=this,h=this.makeHandlePositionStyle(b);for(var i in h)break;if(this.options.useCssTransitions&&o.transition)g.enter("transition"),this.prepareTransition(i,c,d),this.$handle.one(o.transition.end,function(){g.$handle.css(o.transition,""),f&&g.trigger("change",b/(g.barLength-g.handleLength)),g.leave("transition"),g.leave("moving")}),g.setHandlePosition(b);else{g.enter("animating");var j=e(),k=g.getHandlePosition(),l=b,m=function(b){var c=(b-j)/g.options.duration;c>1&&(c=1),c=g.easing.fn(c);var d=parseFloat(k+c*(l-k),10);g.setHandlePosition(d),f&&g.trigger("change",d/(g.barLength-g.handleLength)),1===c?(a.cancelAnimationFrame(g._frameId),g._frameId=null,g.leave("animating"),g.leave("moving")):g._frameId=a.requestAnimationFrame(m)};g._frameId=a.requestAnimationFrame(m)}},prepareTransition:function(a,b,d,e){var f=[];a&&f.push(a),b&&(c.isNumeric(b)&&(b+="ms"),f.push(b)),f.push(d?d:this.easing.css),e&&f.push(e),this.$handle.css(o.transition,f.join(" "))},enable:function(){this._states.disabled=0,this.$bar.removeClass(this.options.disabledClass)},disable:function(){this._states.disabled=1,this.$bar.addClass(this.options.disabledClass)},destory:function(){this.$bar.on(this.eventName())}},c.fn[i]=function(a){if("string"!=typeof a)return this.each(function(){c(this).data(i)||c(this).data(i,new n(a,this))});var b=Array.prototype.slice.call(arguments,1);this.each(function(){var d=c(this).data(i);return d&&c.isFunction(d[a])&&"_"!==a.charAt(0)?void d[a].apply(d,b):!1})}}(window,document,jQuery,void 0),function(a,b,c,d,e){"use strict";function f(){return"undefined"!=typeof a.performance&&a.performance.now?a.performance.now():Date.now()}function g(a){return"string"==typeof a&&-1!=a.indexOf("%")}function h(a){return 0>a?a=0:a>1&&(a=1),100*parseFloat(a).toFixed(4)+"%"}function i(a){return parseFloat(a.slice(0,-1)/100,10)}var j="asScrollable",k=0,l=function(){var b,c,d;return c=a.navigator.userAgent,(b=/(?=.+Mac OS X)(?=.+Firefox)/.test(c))?(d=/Firefox\/\d{2}\./.exec(c),d&&(d=d[0].replace(/\D+/g,"")),b&&+d>23):!1}(),m=c[j]=function(a,b){this.$element=c(b),a=this.options=c.extend({},m.defaults,a||{},this.$element.data("options")||{}),this.classes={wrap:a.namespace,content:a.namespace+"-content",container:a.namespace+"-container",bar:a.namespace+"-bar",barHide:a.namespace+"-bar-hide",skin:a.skin},this.attributes={vertical:{axis:"Y",overflow:"overflow-y",scroll:"scrollTop",scrollLength:"scrollHeight",pageOffset:"pageYOffset",ffPadding:"padding-right",length:"height",clientLength:"clientHeight",offset:"offsetHeight",crossLength:"width",crossClientLength:"clientWidth",crossOffset:"offsetWidth"},horizontal:{axis:"X",overflow:"overflow-x",scroll:"scrollLeft",scrollLength:"scrollWidth",pageOffset:"pageXOffset",ffPadding:"padding-bottom",length:"width",clientLength:"clientWidth",offset:"offsetWidth",crossLength:"height",crossClientLength:"clientHeight",crossOffset:"offsetHeight"}},this._states={},this.horizontal=null,this.vertical=null,this.$bar=null,this._frameId=null,this._timeoutId=null,this.instanceId=++k,this.easing=d.easing[this.options.easing]||d.easing.ease;var e=this.$element.css("position");this.options.containerSelector?(this.$container=this.$element.find(this.options.containerSelector),this.$wrap=this.$element,"static"==e&&this.$wrap.css("position","relative")):(this.$container=this.$element.wrap("<div>"),this.$wrap=this.$container.parent(),this.$wrap.height(this.$element.height()),"static"!==e?this.$wrap.css("position",e):this.$wrap.css("position","relative")),this.options.contentSelector?this.$content=this.$container.find(this.options.contentSelector):(this.$content=this.$container.wrap("<div>"),this.$container=this.$content.parent()),this.init()};m.defaults={namespace:j,skin:null,contentSelector:null,containerSelector:null,enabledClass:"is-enabled",disabledClass:"is-disabled",draggingClass:"is-dragging",hoveringClass:"is-hovering",scrollingClass:"is-scrolling",direction:"vertical",showOnHover:!0,showOnBarHover:!1,duration:500,easing:"ease-in",responsive:!0,throttle:20,scrollbar:{}},m.prototype={constructor:m,init:function(){switch(this.options.direction){case"vertical":this.vertical=!0;break;case"horizontal":this.horizontal=!0;break;case"both":this.horizontal=!0,this.vertical=!0;break;case"auto":var a=this.$element.css("overflow-x"),b=this.$element.css("overflow-y");("scroll"===a||"auto"===a)&&(this.horizontal=!0),("scroll"===b||"auto"===b)&&(this.vertical=!0)}(this.vertical||this.horizontal)&&(this.$wrap.addClass(this.classes.wrap),this.$container.addClass(this.classes.container),this.$content.addClass(this.classes.content),this.options.skin&&this.$wrap.addClass(this.classes.skin),this.$wrap.addClass(this.options.enabledClass),this.vertical&&(this.$wrap.addClass(this.classes.wrap+"-vertical"),this.initLayout("vertical"),this.createBar("vertical")),this.horizontal&&(this.$wrap.addClass(this.classes.wrap+"-horizontal"),this.initLayout("horizontal"),this.createBar("horizontal")),this.bindEvents())},bindEvents:function(){var b=this,d=this.options;d.responsive&&(c(a).on(this.eventNameWithId("orientationchange"),function(){b.update.call(b)}),c(a).on(this.eventNameWithId("resize"),this.throttle(function(){b.update.call(b)},d.throttle))),(this.horizontal||this.vertical)&&(this.$wrap.on(this.eventName("mouseenter"),function(){b.$wrap.addClass(b.options.hoveringClass),b.enter("hovering"),b.trigger("hover")}),this.$wrap.on(this.eventName("mouseleave"),function(){b.$wrap.removeClass(b.options.hoveringClass),b.is("hovering")&&(b.leave("hovering"),b.trigger("hovered"))}),d.showOnHover&&(d.showOnBarHover?this.$bar.on("asScrollbar::hover",function(){b.showBar(this.direction)}).on("asScrollbar::hovered",function(){b.hideBar(this.direction)}):(this.$element.on(j+"::hover",c.proxy(this.showBar,this)),this.$element.on(j+"::hovered",c.proxy(this.hideBar,this)))),this.$container.on(this.eventName("scroll"),function(){if(b.horizontal){var a=b.offsetLeft;b.offsetLeft=b.getOffset("horizontal"),a!==b.offsetLeft&&(b.trigger("scroll",b.getPercentOffset("horizontal"),"horizontal"),0===b.offsetLeft&&b.trigger("scrolltop","horizontal"),b.offsetLeft===b.getScrollLength("horizontal")&&b.trigger("scrollend","horizontal"))}if(b.vertical){var c=b.offsetTop;b.offsetTop=b.getOffset("vertical"),c!==b.offsetTop&&(b.trigger("scroll",b.getPercentOffset("vertical"),"vertical"),0===b.offsetTop&&b.trigger("scrolltop","vertical"),b.offsetTop===b.getScrollLength("vertical")&&b.trigger("scrollend","vertical"))}}),this.$element.on(j+"::scroll",function(a,c,d,e){b.is("scrolling")||(b.enter("scrolling"),b.$wrap.addClass(b.options.scrollingClass));var f=c.getBarApi(e);f.moveTo(h(d),!1,!0),clearTimeout(b._timeoutId),b._timeoutId=setTimeout(function(){b.$wrap.removeClass(b.options.scrollingClass),b.leave("scrolling")},200)}),this.$bar.on("asScrollbar::change",function(a,c,d){b.scrollTo(this.direction,h(d),!1,!0)}),this.$bar.on("asScrollbar::drag",function(){b.$wrap.addClass(b.options.draggingClass)}).on("asScrollbar::dragged",function(){b.$wrap.removeClass(b.options.draggingClass)}))},unbindEvents:function(){this.$wrap.off(this.eventName()),this.$element.off(j+"::scroll").off(j+"::hover").off(j+"::hovered"),this.$container.off(this.eventName()),c(a).off(this.eventNameWithId())},initLayout:function(a){"vertical"===a&&this.$container.css("height",this.$wrap.height());var b=this.attributes[a],c=this.$container[0],d=this.getBrowserScrollbarWidth(a),e=c.parentNode[b.crossClientLength];this.$content.css(b.crossLength,e+"px"),this.$container.css(b.crossLength,d+e+"px"),0===d&&l&&this.$container.css(b.ffPadding,16)},createBar:function(a){var b=c.extend(this.options.scrollbar,{namespace:this.classes.bar,direction:a,useCssTransitions:!1,keyboard:!1}),d=c("<div>");d.asScrollbar(b),this.options.showOnHover&&d.addClass(this.classes.barHide),d.appendTo(this.$wrap),this["$"+a]=d,this.$bar=null===this.$bar?d:this.$bar.add(d),this.updateBarHandle(a)},trigger:function(a){var b=Array.prototype.slice.call(arguments,1),c=[this].concat(b);this.$element.trigger(j+"::"+a,c),a=a.replace(/\b\w+\b/g,function(a){return a.substring(0,1).toUpperCase()+a.substring(1)});var d="on"+a;"function"==typeof this.options[d]&&this.options[d].apply(this,b)},is:function(a){return this._states[a]&&this._states[a]>0},enter:function(a){this._states[a]===e&&(this._states[a]=0),this._states[a]++},leave:function(a){this._states[a]--},eventName:function(a){if("string"!=typeof a||""===a)return"."+this.options.namespace;a=a.split(" ");for(var b=a.length,c=0;b>c;c++)a[c]=a[c]+"."+this.options.namespace;return a.join(" ")},eventNameWithId:function(a){if("string"!=typeof a||""===a)return this.options.namespace+"-"+this.instanceId;a=a.split(" ");for(var b=a.length,c=0;b>c;c++)a[c]=a[c]+"."+this.options.namespace+"-"+this.instanceId;return a.join(" ")},throttle:function(a,b){var c,d,e,f=Date.now||function(){return(new Date).getTime()},g=null,h=0,i=function(){h=f(),g=null,e=a.apply(c,d),c=d=null};return function(){var j=f(),k=b-(j-h);return c=this,d=arguments,0>=k?(clearTimeout(g),g=null,h=j,e=a.apply(c,d),c=d=null):g||(g=setTimeout(i,k)),e}},getBrowserScrollbarWidth:function(a){var c,d,e=this.attributes[a];return e.scrollbarWidth?e.scrollbarWidth:(c=b.createElement("div"),d=c.style,d.position="absolute",d.width="100px",d.height="100px",d.overflow="scroll",d.top="-9999px",b.body.appendChild(c),e.scrollbarWidth=c[e.offset]-c[e.clientLength],b.body.removeChild(c),e.scrollbarWidth)},getOffset:function(a){var b=this.attributes[a],c=this.$container[0];return c[b.pageOffset]||c[b.scroll]},getPercentOffset:function(a){return this.getOffset(a)/this.getScrollLength(a)},getContainerLength:function(a){return this.$container[0][this.attributes[a].clientLength]},getScrollLength:function(a){var b=this.$content[0][this.attributes[a].scrollLength];return b-this.getContainerLength(a)},scrollTo:function(a,b,c,d){var e=typeof b;"string"===e&&(g(b)&&(b=i(b)*this.getScrollLength(a)),b=parseFloat(b),e="number"),"number"===e&&this.move(a,b,c,d)},scrollBy:function(a,b,c,d){var e=typeof b;"string"===e&&(g(b)&&(b=i(b)*this.getScrollLength(a)),b=parseFloat(b),e="number"),"number"===e&&this.move(a,this.getOffset(a)+b,c,d)},move:function(b,c,d,e){if(this[b]===!0&&"number"==typeof c){var g=this;this.enter("moving"),0>c?c=0:c>this.getScrollLength(b)&&(c=this.getScrollLength(b));var h=this.attributes[b],i=function(){g.leave("moving")};if(e)this.$container[0][h.scroll]=c,d!==!1&&this.trigger("change",c/this.getScrollLength(b)),i();else{g.enter("animating");var j=f(),k=g.getOffset(b),l=c,m=function(e){var f=(e-j)/g.options.duration;f>1&&(f=1),f=g.easing.fn(f);var n=parseFloat(k+f*(l-k),10);g.$container[0][h.scroll]=n,d!==!1&&g.trigger("change",c/g.getScrollLength(b)),1===f?(a.cancelAnimationFrame(g._frameId),g._frameId=null,g.leave("animating"),i()):g._frameId=a.requestAnimationFrame(m)};g._frameId=a.requestAnimationFrame(m)}}},scrollXto:function(a,b,c){return this.scrollTo("horizontal",a,b,c)},scrollYto:function(a,b,c){return this.scrollTo("vertical",a,b,c)},scrollXby:function(a,b,c){return this.scrollBy("horizontal",a,b,c)},scrollYby:function(a,b,c){return this.scrollBy("vertical",a,b,c)},getBar:function(a){return a&&this["$"+a]?this["$"+a]:this.$bar},getBarApi:function(a){return this.getBar(a).data("asScrollbar")},getBarX:function(){return this.getBar("horizontal")},getBarY:function(){return this.getBar("vertical")},showBar:function(a){this.getBar(a).removeClass(this.classes.barHide)},hideBar:function(a){this.getBar(a).addClass(this.classes.barHide)},updateBarHandle:function(a){var b=this.getBarApi(a),c=this.getScrollLength(a),d=this.getContainerLength(a);c>0?(b.is("disabled")&&b.enable(),b.setHandleLength(b.getBarLength()*d/(c+d),!0)):b.disable()},disable:function(){this.is("disabled")||(this.enter("disabled"),this.$wrap.addClass(this.options.disabledClass).removeClass(this.options.enabledClass),this.unbindEvents(),this.unStyle())},enable:function(){this.is("disabled")&&(this.leave("disabled"),this.$wrap.addClass(this.options.enabledClass).removeClass(this.options.disabledClass),this.bindEvents(),this.update())},update:function(){this.is("disabled")||(this.vertical&&(this.initLayout("vertical"),this.updateBarHandle("vertical")),this.horizontal&&(this.initLayout("horizontal"),this.updateBarHandle("horizontal")))},unStyle:function(){this.horizontal&&(this.$container.css({height:"","padding-bottom":""}),this.$content.css({height:""})),this.vertical&&(this.$container.css({width:"",height:"","padding-right":""}),this.$content.css({width:""})),this.options.containerSelector||this.$wrap.css({height:""})},destory:function(){this.$wrap.removeClass(this.classes.wrap+"-vertical").removeClass(this.classes.wrap+"-horizontal").removeClass(this.classes.wrap).removeClass(this.options.enabledClass).removeClass(this.classes.disabledClass),this.unStyle(),this.$bar&&this.$bar.remove(),this.unbindEvents(),this.options.containerSelector?this.$container.removeClass(this.classes.container):this.$container.unwrap(),this.options.contentSelector||this.$content.unwrap(),this.$content.removeClass(this.classes.content),this.$element.data(j,null)}},c.fn[j]=function(a){if("string"!=typeof a)return this.each(function(){c(this).data(j)?c(this).data(j).update():c(this).data(j,new m(a,this))});var b=a,d=Array.prototype.slice.call(arguments,1);if(/^\_/.test(b))return!1;if(!/^(get)/.test(b))return this.each(function(){var a=c.data(this,j);a&&"function"==typeof a[b]&&a[b].apply(a,d)});var e=this.first().data(j);return e&&"function"==typeof e[b]?e[b].apply(e,d):this}}(window,document,jQuery,function(a){"use strict";return void 0===a.asScrollbar?!1:a.asScrollbar}(jQuery));
/*asscrollable.min.js*/
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("scrollable", {
  mode: "init",
  defaults: {
    namespace: "scrollable",
    contentSelector: "> [data-role='content']",
    containerSelector: "> [data-role='container']"
  },
  init: function(context) {
    if (!$.fn.asScrollable) return;
    var defaults = $.components.getDefaults("scrollable");

    $('[data-plugin="scrollable"]', context).each(function() {
      var options = $.extend({}, defaults, $(this).data());

      $(this).asScrollable(options);
    });
  }
});

/*animsition.min.js*/
/*!
 * animsition v4.0.1
 * A simple and easy jQuery plugin for CSS animated page transitions.
 * http://blivesta.github.io/animsition
 * License : MIT
 * Author : blivesta (http://blivesta.com/)
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){"use strict";var n="animsition",i={init:function(a){a=t.extend({inClass:"fade-in",outClass:"fade-out",inDuration:1500,outDuration:800,linkElement:".animsition-link",loading:!0,loadingParentElement:"body",loadingClass:"animsition-loading",loadingInner:"",timeout:!1,timeoutCountdown:5e3,onLoadEvent:!0,browser:["animation-duration","-webkit-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body",transition:function(t){window.location.href=t}},a),i.settings={timer:!1,data:{inClass:"animsition-in-class",inDuration:"animsition-in-duration",outClass:"animsition-out-class",outDuration:"animsition-out-duration",overlay:"animsition-overlay"},events:{inStart:"animsition.inStart",inEnd:"animsition.inEnd",outStart:"animsition.outStart",outEnd:"animsition.outEnd"}};var o=i.supportCheck.call(this,a);if(!o&&a.browser.length>0&&(!o||!this.length))return"console"in window||(window.console={},window.console.log=function(t){return t}),this.length||console.log("Animsition: Element does not exist on page."),o||console.log("Animsition: Does not support this browser."),i.destroy.call(this);var e=i.optionCheck.call(this,a);return e&&i.addOverlay.call(this,a),a.loading&&i.addLoading.call(this,a),this.each(function(){var o=this,e=t(this),s=t(window),r=t(document),l=e.data(n);l||(a=t.extend({},a),e.data(n,{options:a}),a.timeout&&i.addTimer.call(o),a.onLoadEvent&&s.on("load."+n,function(){i.settings.timer&&clearTimeout(i.settings.timer),i["in"].call(o)}),s.on("pageshow."+n,function(t){t.originalEvent.persisted&&i["in"].call(o)}),s.on("unload."+n,function(){}),r.on("click."+n,a.linkElement,function(n){n.preventDefault();var a=t(this),e=a.attr("href");2===n.which||n.metaKey||n.shiftKey||-1!==navigator.platform.toUpperCase().indexOf("WIN")&&n.ctrlKey?window.open(e,"_blank"):i.out.call(o,a,e)}))})},addOverlay:function(n){t(n.overlayParentElement).prepend('<div class="'+n.overlayClass+'"></div>')},addLoading:function(n){t(n.loadingParentElement).append('<div class="'+n.loadingClass+'">'+n.loadingInner+"</div>")},removeLoading:function(){var i=t(this),a=i.data(n).options,o=t(a.loadingParentElement).children("."+a.loadingClass);o.fadeOut().remove()},addTimer:function(){var a=this,o=t(this),e=o.data(n).options;i.settings.timer=setTimeout(function(){i["in"].call(a),t(window).off("load."+n)},e.timeoutCountdown)},supportCheck:function(n){var i=t(this),a=n.browser,o=a.length,e=!1;0===o&&(e=!0);for(var s=0;o>s;s++)if("string"==typeof i.css(a[s])){e=!0;break}return e},optionCheck:function(n){var a,o=t(this);return a=n.overlay||o.data(i.settings.data.overlay)?!0:!1},animationCheck:function(i,a,o){var e=t(this),s=e.data(n).options,r=typeof i,l=!a&&"number"===r,d=a&&"string"===r&&i.length>0;return l||d?i=i:a&&o?i=s.inClass:!a&&o?i=s.inDuration:a&&!o?i=s.outClass:a||o||(i=s.outDuration),i},"in":function(){var a=this,o=t(this),e=o.data(n).options,s=o.data(i.settings.data.inDuration),r=o.data(i.settings.data.inClass),l=i.animationCheck.call(a,s,!1,!0),d=i.animationCheck.call(a,r,!0,!0),u=i.optionCheck.call(a,e),c=o.data(n).outClass;e.loading&&i.removeLoading.call(a),c&&o.removeClass(c),u?i.inOverlay.call(a,d,l):i.inDefault.call(a,d,l)},inDefault:function(n,a){var o=t(this);o.css({"animation-duration":a+"ms"}).addClass(n).trigger(i.settings.events.inStart).animateCallback(function(){o.removeClass(n).css({opacity:1}).trigger(i.settings.events.inEnd)})},inOverlay:function(a,o){var e=t(this),s=e.data(n).options;e.css({opacity:1}).trigger(i.settings.events.inStart),t(s.overlayParentElement).children("."+s.overlayClass).css({"animation-duration":o+"ms"}).addClass(a).animateCallback(function(){e.trigger(i.settings.events.inEnd)})},out:function(a,o){var e=this,s=t(this),r=s.data(n).options,l=a.data(i.settings.data.outClass),d=s.data(i.settings.data.outClass),u=a.data(i.settings.data.outDuration),c=s.data(i.settings.data.outDuration),m=l?l:d,g=u?u:c,f=i.animationCheck.call(e,m,!0,!1),v=i.animationCheck.call(e,g,!1,!1),h=i.optionCheck.call(e,r);s.data(n).outClass=f,h?i.outOverlay.call(e,f,v,o):i.outDefault.call(e,f,v,o)},outDefault:function(a,o,e){var s=t(this),r=s.data(n).options;s.css({"animation-duration":o+1+"ms"}).addClass(a).trigger(i.settings.events.outStart).animateCallback(function(){s.trigger(i.settings.events.outEnd),r.transition(e)})},outOverlay:function(a,o,e){var s=this,r=t(this),l=r.data(n).options,d=r.data(i.settings.data.inClass),u=i.animationCheck.call(s,d,!0,!0);t(l.overlayParentElement).children("."+l.overlayClass).css({"animation-duration":o+1+"ms"}).removeClass(u).addClass(a).trigger(i.settings.events.outStart).animateCallback(function(){r.trigger(i.settings.events.outEnd),l.transition(e)})},destroy:function(){return this.each(function(){var i=t(this);t(window).off("."+n),i.css({opacity:1}).removeData(n)})}};t.fn.animateCallback=function(n){var i="animationend webkitAnimationEnd";return this.each(function(){var a=t(this);a.on(i,function(){return a.off(i),n.call(this)})})},t.fn.animsition=function(a){return i[a]?i[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?void t.error("Method "+a+" does not exist on jQuery."+n):i.init.apply(this,arguments)}});
/*animsition.min.js*/
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("animsition",{mode:"manual",defaults:{inClass:"fade-in",outClass:"fade-out",inDuration:800,outDuration:500,linkElement:".animsition-link",loading:!0,loadingParentElement:"body",loadingClass:"loader",loadingType:"default",timeout:!1,timeoutCountdown:5e3,onLoadEvent:!0,browser:["animation-duration","-webkit-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body",inDefaults:["fade-in","fade-in-up-sm","fade-in-up","fade-in-up-lg","fade-in-down-sm","fade-in-down","fade-in-down-lg","fade-in-left-sm","fade-in-left","fade-in-left-lg","fade-in-right-sm","fade-in-right","fade-in-right-lg","zoom-in-sm","zoom-in","zoom-in-lg"],outDefaults:["fade-out","fade-out-up-sm","fade-out-up","fade-out-up-lg","fade-out-down-sm","fade-out-down","fade-out-down-lg","fade-out-left-sm","fade-out-left","fade-out-left-lg","fade-out-right-sm","fade-out-right","fade-out-right-lg","zoom-out-sm","zoom-out","zoom-out-lg"]},init:function(context,callback){var options=$.components.getDefaults("animsition");if(options.random){var li=options.inDefaults.length,lo=options.outDefaults.length,ni=parseInt(li*Math.random(),0),no=parseInt(lo*Math.random(),0);options.inClass=options.inDefaults[ni],options.outClass=options.outDefaults[no]}var $this=$(".animsition",context);return $this.animsition(options),$("."+options.loadingClass).addClass("loader-"+options.loadingType),$this.animsition("supportCheck",options)?($.isFunction(callback)&&$this.one("animsition.end",function(){callback.call()}),!0):($.isFunction(callback)&&callback.call(),!1)}});
/*alertify.js*/
(function() {

    "use strict";

    var TRANSITION_FALLBACK_DURATION = 500;
    var hideElement = function(el) {

        if (! el) {
            return;
        }

        var removeThis = function() {
            if (el && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        };

        el.classList.remove("show");
        el.classList.add("hide");
        el.addEventListener("transitionend", removeThis);

        // Fallback for no transitions.
        setTimeout(removeThis, TRANSITION_FALLBACK_DURATION);

    };

    function Alertify() {

        /**
         * Alertify private object
         * @type {Object}
         */
        var _alertify = {

            version: "1.0.8",
            defaultOkLabel: "Ok",
            okLabel: "Ok",
            defaultCancelLabel: "Cancel",
            cancelLabel: "Cancel",
            defaultMaxLogItems: 2,
            maxLogItems: 2,
            promptValue: "",
            promptPlaceholder: "",
            closeLogOnClick: false,
            closeLogOnClickDefault: false,
            delay: 5000,
            defaultDelay: 5000,
            logContainerClass: "alertify-logs",
            logContainerDefaultClass: "alertify-logs",
            dialogs: {
                buttons: {
                    holder: "<nav>{{buttons}}</nav>",
                    ok: "<button class='ok' tabindex='1'>{{ok}}</button>",
                    cancel: "<button class='cancel' tabindex='2'>{{cancel}}</button>"
                },
                input: "<input type='text'>",
                message: "<p class='msg'>{{message}}</p>",
                log: "<div class='{{class}}'>{{message}}</div>"
            },

            defaultDialogs: {
                buttons: {
                    holder: "<nav>{{buttons}}</nav>",
                    ok: "<button class='ok' tabindex='1'>{{ok}}</button>",
                    cancel: "<button class='cancel' tabindex='2'>{{cancel}}</button>"
                },
                input: "<input type='text'>",
                message: "<p class='msg'>{{message}}</p>",
                log: "<div class='{{class}}'>{{message}}</div>"
            },

            /**
             * Build the proper message box
             *
             * @param  {Object} item    Current object in the queue
             *
             * @return {String}         An HTML string of the message box
             */
            build: function(item) {

                var btnTxt = this.dialogs.buttons.ok;
                var html = "<div class='dialog'>" + "<div>" + this.dialogs.message.replace("{{message}}", item.message);

                if(item.type === "confirm" || item.type === "prompt") {
                    btnTxt = this.dialogs.buttons.cancel + this.dialogs.buttons.ok;
                }

                if (item.type === "prompt") {
                    html += this.dialogs.input;
                }

                html = (html + this.dialogs.buttons.holder + "</div>" + "</div>")
                  .replace("{{buttons}}", btnTxt)
                  .replace("{{ok}}", this.okLabel)
                  .replace("{{cancel}}", this.cancelLabel);

                return html;

            },

            setCloseLogOnClick: function(bool) {
                this.closeLogOnClick = !! bool;
            },

            /**
             * Close the log messages
             *
             * @param  {Object} elem    HTML Element of log message to close
             * @param  {Number} wait    [optional] Time (in ms) to wait before automatically hiding the message, if 0 never hide
             *
             * @return {undefined}
             */
            close: function(elem, wait) {

                if (this.closeLogOnClick) {
                    elem.addEventListener("click", function(ev) {
                        hideElement(ev.srcElement);
                    });
                }

                wait = wait && !isNaN(+wait) ? +wait : this.delay;

                if (wait < 0) {
                    hideElement(elem);
                } else if(wait > 0) {
                    setTimeout(function() {
                        hideElement(elem);
                    }, wait);
                }

            },

            /**
             * Create a dialog box
             *
             * @param  {String}   message      The message passed from the callee
             * @param  {String}   type         Type of dialog to create
             * @param  {Function} onOkay       [Optional] Callback function when clicked okay.
             * @param  {Function} onCancel     [Optional] Callback function when cancelled.
             *
             * @return {Object}
             */
            dialog: function(message, type, onOkay, onCancel) {
                return this.setup({
                    type: type,
                    message: message,
                    onOkay: onOkay,
                    onCancel: onCancel
                });
            },

            /**
             * Show a new log message box
             *
             * @param  {String} message    The message passed from the callee
             * @param  {String} type       [Optional] Optional type of log message
             * @param  {Number} wait       [Optional] Time (in ms) to wait before auto-hiding the log
             *
             * @return {Object}
             */
            log: function(message, type, click) {

                var existing = document.querySelectorAll(".alertify-logs > div");
                if (existing) {
                    var diff = existing.length - this.maxLogItems;
                    if (diff >= 0) {
                        for (var i = 0, _i = diff + 1; i < _i; i++) {
                            this.close(existing[i], -1);
                        }
                    }
                }

                this.notify(message, type, click);
            },

            setLogPosition: function(str) {
                this.logContainerClass = "alertify-logs " + str;
            },

            setupLogContainer: function() {

                var elLog = document.querySelector(".alertify-logs");
                var className = this.logContainerClass;
                if (! elLog) {
                    elLog = document.createElement("div");
                    elLog.className = className;
                    document.body.appendChild(elLog);
                }

                // Make sure it's positioned properly.
                if (elLog.className !== className) {
                    elLog.className = className;
                }

                return elLog;

            },

            /**
             * Add new log message
             * If a type is passed, a class name "{type}" will get added.
             * This allows for custom look and feel for various types of notifications.
             *
             * @param  {String} message    The message passed from the callee
             * @param  {String} type       [Optional] Type of log message
             * @param  {Number} wait       [Optional] Time (in ms) to wait before auto-hiding
             *
             * @return {undefined}
             */
            notify: function(message, type, click) {

                var elLog = this.setupLogContainer();
                var log = document.createElement("div");

                log.className = (type || "default");
                if (_alertify.logTemplateMethod) {
                    log.innerHTML = _alertify.logTemplateMethod(message);
                } else {
                    log.innerHTML = message;
                }

                // Add the click handler, if specified.
                if ("function" === typeof click) {
                    log.addEventListener("click", click);
                }

                elLog.appendChild(log);
                setTimeout(function() {
                    log.className += " show";
                }, 10);

                this.close(log, this.delay);

            },

            /**
             * Initiate all the required pieces for the dialog box
             *
             * @return {undefined}
             */
            setup: function(item) {

                var el = document.createElement("div");
                el.className = "alertify hide";
                el.innerHTML = this.build(item);

                var btnOK = el.querySelector(".ok");
                var btnCancel = el.querySelector(".cancel");
                var input = el.querySelector("input");
                var label = el.querySelector("label");

                // Set default value/placeholder of input
                if (input) {
                    if (typeof this.promptPlaceholder === "string") {
                        // Set the label, if available, for MDL, etc.
                        if (label) {
                            label.textContent = this.promptPlaceholder;
                        } else {
                            input.placeholder = this.promptPlaceholder;
                        }
                    }
                    if (typeof this.promptValue === "string") {
                        input.value = this.promptValue;
                    }
                }

                function setupHandlers(resolve) {
                    if ("function" !== typeof resolve) {
                        // promises are not available so resolve is a no-op
                        resolve = function () {};
                    }

                    if (btnOK) {
                        btnOK.addEventListener("click", function(ev) {
                            if (item.onOkay && "function" === typeof item.onOkay) {
                                if (input) {
                                    item.onOkay(input.value, ev);
                                } else {
                                    item.onOkay(ev);
                                }
                            }

                            if (input) {
                                resolve({
                                    buttonClicked: "ok",
                                    inputValue: input.value,
                                    event: ev
                                });
                            } else {
                                resolve({
                                    buttonClicked: "ok",
                                    event: ev
                                });
                            }

                            hideElement(el);
                        });
                    }

                    if (btnCancel) {
                        btnCancel.addEventListener("click", function(ev) {
                            if (item.onCancel && "function" === typeof item.onCancel) {
                                item.onCancel(ev);
                            }

                            resolve({
                                buttonClicked: "cancel",
                                event: ev
                            });

                            hideElement(el);
                        });
                    }
                }

                var promise;

                if (typeof Promise === "function") {
                    promise = new Promise(setupHandlers);
                } else {
                    setupHandlers();
                }

                document.body.appendChild(el);
                setTimeout(function() {
                    el.classList.remove("hide");
                    if(input && item.type && item.type === "prompt") {
                        input.select();
                        input.focus();
                    } else {
                        if (btnOK) {
                            btnOK.focus();
                        }
                    }
                }, 100);

                return promise;
            },

            okBtn: function(label) {
                this.okLabel = label;
                return this;
            },

            setDelay: function(time) {
                var dur = parseInt(time || 0, 10);
                this.delay = isNaN(dur) ? this.defultDelay : time;
                return this;
            },

            cancelBtn: function(str) {
                this.cancelLabel = str;
                return this;
            },

            setMaxLogItems: function(num) {
                this.maxLogItems = parseInt(num || this.defaultMaxLogItems);
            },

            theme: function(themeStr) {
                switch(themeStr.toLowerCase()) {
                case "bootstrap":
                    this.dialogs.buttons.ok = "<button class='ok btn btn-primary' tabindex='1'>{{ok}}</button>";
                    this.dialogs.buttons.cancel = "<button class='cancel btn btn-default' tabindex='2'>{{cancel}}</button>";
                    this.dialogs.input = "<input type='text' class='form-control'>";
                    break;
                case "purecss":
                    this.dialogs.buttons.ok = "<button class='ok pure-button' tabindex='1'>{{ok}}</button>";
                    this.dialogs.buttons.cancel = "<button class='cancel pure-button' tabindex='2'>{{cancel}}</button>";
                    break;
                case "mdl":
                case "material-design-light":
                    this.dialogs.buttons.ok = "<button class='ok mdl-button mdl-js-button mdl-js-ripple-effect'  tabindex='1'>{{ok}}</button>";
                    this.dialogs.buttons.cancel = "<button class='cancel mdl-button mdl-js-button mdl-js-ripple-effect' tabindex='2'>{{cancel}}</button>";
                    this.dialogs.input = "<div class='mdl-textfield mdl-js-textfield'><input class='mdl-textfield__input'><label class='md-textfield__label'></label></div>";
                    break;
                case "angular-material":
                    this.dialogs.buttons.ok = "<button class='ok md-primary md-button' tabindex='1'>{{ok}}</button>";
                    this.dialogs.buttons.cancel = "<button class='cancel md-button' tabindex='2'>{{cancel}}</button>";
                    this.dialogs.input = "<div layout='column'><md-input-container md-no-float><input type='text'></md-input-container></div>";
                    break;
                case "default":
                default:
                    this.dialogs.buttons.ok = this.defaultDialogs.buttons.ok;
                    this.dialogs.buttons.cancel = this.defaultDialogs.buttons.cancel;
                    this.dialogs.input = this.defaultDialogs.input;
                    break;
                }
            },

            reset: function() {
                this.theme("default");
                this.okBtn(this.defaultOkLabel);
                this.cancelBtn(this.defaultCancelLabel);
                this.setMaxLogItems();
                this.promptValue = "";
                this.promptPlaceholder = "";
                this.delay = this.defaultDelay;
                this.setCloseLogOnClick(this.closeLogOnClickDefault);
                this.setLogPosition("bottom left");
                this.logTemplateMethod = null;
            },

            injectCSS: function() {
                if (!document.querySelector("#alertifyCSS")) {
                    var head = document.getElementsByTagName("head")[0];
                    var css = document.createElement("style");
                    css.type = "text/css";
                    css.id = "alertifyCSS";
                    css.innerHTML = "/* style.css */";
                    head.insertBefore(css, head.firstChild);
                }
            },

            removeCSS: function() {
                var css = document.querySelector("#alertifyCSS");
                if (css && css.parentNode) {
                    css.parentNode.removeChild(css);
                }
            }

        };

        _alertify.injectCSS();

        return {
            _$$alertify: _alertify,
            reset: function() {
                _alertify.reset();
                return this;
            },
            alert: function(message, onOkay, onCancel) {
                return _alertify.dialog(message, "alert", onOkay, onCancel) || this;
            },
            confirm: function(message, onOkay, onCancel) {
                return _alertify.dialog(message, "confirm", onOkay, onCancel) || this;
            },
            prompt: function(message, onOkay, onCancel) {
                return _alertify.dialog(message, "prompt", onOkay, onCancel) || this;
            },
            log: function(message, click) {
                _alertify.log(message, "default", click);
                return this;
            },
            theme: function(themeStr) {
                _alertify.theme(themeStr);
                return this;
            },
            success: function(message, click) {
                _alertify.log(message, "success", click);
                return this;
            },
            error: function(message, click) {
                _alertify.log(message, "error", click);
                return this;
            },
            cancelBtn: function(label) {
                _alertify.cancelBtn(label);
                return this;
            },
            okBtn: function(label) {
                _alertify.okBtn(label);
                return this;
            },
            delay: function(time) {
                _alertify.setDelay(time);
                return this;
            },
            placeholder: function(str) {
                _alertify.promptPlaceholder = str;
                return this;
            },
            defaultValue: function(str) {
                _alertify.promptValue = str;
                return this;
            },
            maxLogItems: function(num) {
                _alertify.setMaxLogItems(num);
                return this;
            },
            closeLogOnClick: function(bool) {
                _alertify.setCloseLogOnClick(!! bool);
                return this;
            },
            logPosition: function(str) {
                _alertify.setLogPosition(str || "");
                return this;
            },
            setLogTemplate: function(templateMethod) {
                _alertify.logTemplateMethod = templateMethod;
                return this;
            },
            clearLogs: function() {
                _alertify.setupLogContainer().innerHTML = "";
                return this;
            },
            version: _alertify.version
        };
    }

    // AMD, window, and NPM support
    if ("undefined" !== typeof module && !! module && !! module.exports) {
        // Preserve backwards compatibility
        module.exports = function() {
            return new Alertify();
        };
        var obj = new Alertify();
        for (var key in obj) {
            module.exports[key] = obj[key];
        }
    } else if (typeof define === "function" && define.amd) {
        define(function() {
            return new Alertify();
        });
    } else {
        window.alertify = new Alertify();
    }

}());

/*jquery.appear.js*/
/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.6
 */
(function($) {
  var selectors = [];

  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 250,
    force_process: false
  };
  var $window = $(window);

  var $prior_appeared = [];

  function process() {
    check_lock = false;
    for (var index = 0, selectorsLength = selectors.length; index < selectorsLength; index++) {
      var $appeared = $(selectors[index]).filter(function() {
        return $(this).is(':appeared');
      });

      $appeared.trigger('appear', [$appeared]);

      if ($prior_appeared[index]) {
        var $disappeared = $prior_appeared[index].not($appeared);
        $disappeared.trigger('disappear', [$disappeared]);
      }
      $prior_appeared[index] = $appeared;
    }
  };

  function add_selector(selector) {
    selectors.push(selector);
    $prior_appeared.push();
  }

  // "appeared" custom filter
  $.expr[':']['appeared'] = function(element) {
    var $element = $(element);
    if (!$element.is(':visible')) {
      return false;
    }

    var window_left = $window.scrollLeft();
    var window_top = $window.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;

    if (top + $element.height() >= window_top &&
        top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
        left + $element.width() >= window_left &&
        left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
      return true;
    } else {
      return false;
    }
  };

  $.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function(options) {
      var opts = $.extend({}, defaults, options || {});
      var selector = this.selector || this;
      if (!check_binded) {
        var on_check = function() {
          if (check_lock) {
            return;
          }
          check_lock = true;

          setTimeout(process, opts.interval);
        };

        $(window).scroll(on_check).resize(on_check);
        check_binded = true;
      }

      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }
      add_selector(selector);
      return $(selector);
    }
  });

  $.extend({
    // force elements's appearance check
    force_appear: function() {
      if (check_binded) {
        process();
        return true;
      }
      return false;
    }
  });
})(function() {
  if (typeof module !== 'undefined') {
    // Node
    return require('jquery');
  } else {
    return jQuery;
  }
}());

/*jquery-appear.min.js*/
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("appear",{defaults:{},api:function(context){$.fn.appear&&($(document).on("appear",'[data-plugin="appear"]',function(){var $item=$(this),animate=$item.data("animate");$item.hasClass("appear-no-repeat")||($item.removeClass("invisible").addClass("animation-"+animate),$item.data("repeat")===!1&&$item.addClass("appear-no-repeat"))}),$(document).on("disappear",'[data-plugin="appear"]',function(){var $item=$(this),animate=$item.data("animate");$item.hasClass("appear-no-repeat")||$item.addClass("invisible").removeClass("animation-"+animate)}))},init:function(context){if($.fn.appear){var defaults=$.components.getDefaults("appear");$('[data-plugin="appear"]',context).appear(defaults),$('[data-plugin="appear"]',context).not(":appeared").addClass("invisible")}}});
/*bootstrap-hover-dropdown.min.js*/
/**
 * @preserve
 * Project: Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Version: v2.2.1
 * Contributors: Mattia Larentis
 * Dependencies: Bootstrap's Dropdown plugin, jQuery
 * Description: A simple plugin to enable Bootstrap dropdowns to active on hover and provide a nice user experience.
 * License: MIT
 * Homepage: http://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/
 */
!function(e,n){var o=e();e.fn.dropdownHover=function(t){return"ontouchstart"in document?this:(o=o.add(this.parent()),this.each(function(){function r(){d.parents(".navbar").find(".navbar-toggle").is(":visible")||(n.clearTimeout(a),n.clearTimeout(i),i=n.setTimeout(function(){o.find(":focus").blur(),v.instantlyCloseOthers===!0&&o.removeClass("open"),n.clearTimeout(i),d.attr("aria-expanded","true"),s.addClass("open"),d.trigger(h)},v.hoverDelay))}var a,i,d=e(this),s=d.parent(),u={delay:500,hoverDelay:0,instantlyCloseOthers:!0},l={delay:e(this).data("delay"),hoverDelay:e(this).data("hover-delay"),instantlyCloseOthers:e(this).data("close-others")},h="show.bs.dropdown",c="hide.bs.dropdown",v=e.extend(!0,{},u,t,l);s.hover(function(e){return s.hasClass("open")||d.is(e.target)?void r(e):!0},function(){n.clearTimeout(i),a=n.setTimeout(function(){d.attr("aria-expanded","false"),s.removeClass("open"),d.trigger(c)},v.delay)}),d.hover(function(e){return s.hasClass("open")||s.is(e.target)?void r(e):!0}),s.find(".dropdown-submenu").each(function(){var o,t=e(this);t.hover(function(){n.clearTimeout(o),t.children(".dropdown-menu").show(),t.siblings().children(".dropdown-menu").hide()},function(){var e=t.children(".dropdown-menu");o=n.setTimeout(function(){e.hide()},v.delay)})})}))},e(document).ready(function(){e('[data-hover="dropdown"]').dropdownHover()})}(jQuery,window);
/*jquery.webui-popover.min.js*/
/*
 *  webui popover plugin  - v1.2.3
 *  A lightWeight popover plugin with jquery ,enchance the  popover plugin of bootstrap with some awesome new features. It works well with bootstrap ,but bootstrap is not necessary!
 *  https://github.com/sandywalker/webui-popover
 *
 *  Made by Sandy Duan
 *  Under MIT License
 */
!function(a,b,c){"use strict";function d(b,c){this.$element=a(b),c&&("string"===a.type(c.delay)||"number"===a.type(c.delay))&&(c.delay={show:c.delay,hide:c.delay}),this.options=a.extend({},h,c),this._defaults=h,this._name=e,this._targetclick=!1,this.init(),i.push(this.$element)}var e="webuiPopover",f="webui-popover",g="webui.popover",h={placement:"auto",width:"auto",height:"auto",trigger:"click",style:"",delay:{show:null,hide:null},async:{before:null,success:null},cache:!0,multi:!1,arrow:!0,title:"",content:"",closeable:!1,padding:!0,url:"",type:"html",animation:null,template:'<div class="webui-popover"><div class="arrow"></div><div class="webui-popover-inner"><a href="#" class="close">&times;</a><h3 class="webui-popover-title"></h3><div class="webui-popover-content"><i class="icon-refresh"></i> <p>&nbsp;</p></div></div></div>',backdrop:!1,dismissible:!0,onShow:null,onHide:null,abortXHR:!0,autoHide:!1,offsetTop:0,offsetLeft:0,iframeOptions:{frameborder:"0",allowtransparency:"true",id:"",name:"",scrolling:"",onload:"",height:"",width:""}},i=[],j=a('<div class="webui-popover-backdrop"></div>'),k=0,l=!1,m=-2e3,n=a(c),o=function(a,b){return isNaN(a)?b||0:Number(a)},p=function(a){return a.data("plugin_"+e)},q=function(){for(var a=0;a<i.length;a++)i[a].webuiPopover("hide");n.trigger("hiddenAll."+g)},r=function(a){var b={x:0,y:0};if("touchstart"===a.type||"touchmove"===a.type||"touchend"===a.type||"touchcancel"===a.type){var c=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0];b.x=c.pageX,b.y=c.pageY}else("mousedown"===a.type||"mouseup"===a.type||"click"===a.type)&&(b.x=a.pageX,b.y=a.pageY);return b};d.prototype={init:function(){"click"===this.getTrigger()?this.$element.off("click touchend").on("click touchend",a.proxy(this.toggle,this)):"hover"===this.getTrigger()&&this.$element.off("mouseenter mouseleave click").on("mouseenter",a.proxy(this.mouseenterHandler,this)).on("mouseleave",a.proxy(this.mouseleaveHandler,this)),this._poped=!1,this._inited=!0,this._opened=!1,this._idSeed=k,this.options.backdrop&&j.appendTo(c.body).hide(),k++,"sticky"===this.getTrigger()&&this.show()},destroy:function(){for(var a=-1,b=0;b<i.length;b++)if(i[b]===this.$element){a=b;break}i.splice(a,1),this.hide(),this.$element.data("plugin_"+e,null),"click"===this.getTrigger()?this.$element.off("click"):"hover"===this.getTrigger()&&this.$element.off("mouseenter mouseleave"),this.$target&&this.$target.remove()},hide:function(b,c){if((b||"sticky"!==this.getTrigger())&&this._opened){c&&(c.preventDefault(),c.stopPropagation()),this.xhr&&this.options.abortXHR===!0&&(this.xhr.abort(),this.xhr=null);var d=a.Event("hide."+g);if(this.$element.trigger(d,[this.$target]),this.$target){this.$target.removeClass("in").addClass(this.getHideAnimation());var e=this;setTimeout(function(){e.$target.hide()},300)}this.options.backdrop&&j.hide(),this._opened=!1,this.$element.trigger("hidden."+g,[this.$target]),this.options.onHide&&this.options.onHide(this.$target)}},resetAutoHide:function(){var a=this,b=a.getAutoHide();b&&(a.autoHideHandler&&clearTimeout(a.autoHideHandler),a.autoHideHandler=setTimeout(function(){a.hide()},b))},toggle:function(a){a&&(a.preventDefault(),a.stopPropagation()),this[this.getTarget().hasClass("in")?"hide":"show"]()},hideAll:function(){q()},show:function(){var a=this.getTarget().removeClass().addClass(f).addClass(this._customTargetClass);this.options.multi||this.hideAll(),this._opened||(this.getCache()&&this._poped&&""!==this.content||(this.content="",this.setTitle(this.getTitle()),this.options.closeable||a.find(".close").off("click").remove(),this.isAsync()?this.setContentASync(this.options.content):this.setContent(this.getContent()),a.show()),this.displayContent(),this.options.onShow&&this.options.onShow(a),this.bindBodyEvents(),this.options.backdrop&&j.show(),this._opened=!0,this.resetAutoHide())},displayContent:function(){var b=this.getElementPosition(),d=this.getTarget().removeClass().addClass(f).addClass(this._customTargetClass),e=this.getContentElement(),h=d[0].offsetWidth,i=d[0].offsetHeight,j="bottom",k=a.Event("show."+g);this.$element.trigger(k,[d]);var l=this.$element.data("width")||this.options.width;""===l&&(l=this._defaults.width),"auto"!==l&&d.width(l);var n=this.$element.data("height")||this.options.height;""===n&&(n=this._defaults.height),"auto"!==n&&e.height(n),this.options.style&&this.$target.addClass(f+"-"+this.options.style),this.options.arrow||d.find(".arrow").remove(),d.detach().css({top:m,left:m,display:"block"}),this.getAnimation()&&d.addClass(this.getAnimation()),d.appendTo(c.body),j=this.getPlacement(b),this.$element.trigger("added."+g),this.initTargetEvents(),this.options.padding||("auto"!==this.options.height&&e.css("height",e.outerHeight()),this.$target.addClass("webui-no-padding")),h=d[0].offsetWidth,i=d[0].offsetHeight;var o=this.getTargetPositin(b,j,h,i);if(this.$target.css(o.position).addClass(j).addClass("in"),"iframe"===this.options.type){var p=d.find("iframe"),q=d.width(),r=p.parent().height();""!==this.options.iframeOptions.width&&"auto"!==this.options.iframeOptions.width&&(q=this.options.iframeOptions.width),""!==this.options.iframeOptions.height&&"auto"!==this.options.iframeOptions.height&&(r=this.options.iframeOptions.height),p.width(q).height(r)}if(this.options.arrow||this.$target.css({margin:0}),this.options.arrow){var s=this.$target.find(".arrow");s.removeAttr("style"),"left"===j||"right"===j?s.css({top:this.$target.height()/2}):("top"===j||"bottom"===j)&&s.css({left:this.$target.width()/2}),o.arrowOffset&&(-1===o.arrowOffset.left||-1===o.arrowOffset.top?s.hide():s.css(o.arrowOffset))}this._poped=!0,this.$element.trigger("shown."+g,[this.$target])},isTargetLoaded:function(){return 0===this.getTarget().find("i.glyphicon-refresh").length},getTriggerElement:function(){return this.$element},getTarget:function(){if(!this.$target){var b=e+this._idSeed;this.$target=a(this.options.template).attr("id",b).data("trigger-element",this.getTriggerElement()),this._customTargetClass=this.$target.attr("class")!==f?this.$target.attr("class"):null,this.getTriggerElement().attr("data-target",b)}return this.$target},getTitleElement:function(){return this.getTarget().find("."+f+"-title")},getContentElement:function(){return this.$contentElement||(this.$contentElement=this.getTarget().find("."+f+"-content")),this.$contentElement},getTitle:function(){return this.$element.attr("data-title")||this.options.title||this.$element.attr("title")},getUrl:function(){return this.$element.attr("data-url")||this.options.url},getAutoHide:function(){return this.$element.attr("data-auto-hide")||this.options.autoHide},getOffsetTop:function(){return o(this.$element.attr("data-offset-top"))||this.options.offsetTop},getOffsetLeft:function(){return o(this.$element.attr("data-offset-left"))||this.options.offsetLeft},getCache:function(){var a=this.$element.attr("data-cache");if("undefined"!=typeof a)switch(a.toLowerCase()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":return!1}return this.options.cache},getTrigger:function(){return this.$element.attr("data-trigger")||this.options.trigger},getDelayShow:function(){var a=this.$element.attr("data-delay-show");return"undefined"!=typeof a?a:0===this.options.delay.show?0:this.options.delay.show||100},getHideDelay:function(){var a=this.$element.attr("data-delay-hide");return"undefined"!=typeof a?a:0===this.options.delay.hide?0:this.options.delay.hide||100},getAnimation:function(){var a=this.$element.attr("data-animation");return a||this.options.animation},getHideAnimation:function(){var a=this.getAnimation();return a?a+"-out":"out"},setTitle:function(a){var b=this.getTitleElement();a?b.html(a):b.remove()},hasContent:function(){return this.getContent()},getIframe:function(){var b=a("<iframe></iframe>").attr("src",this.getUrl()),c=this;return a.each(this._defaults.iframeOptions,function(a){"undefined"!=typeof c.options.iframeOptions[a]&&b.attr(a,c.options.iframeOptions[a])}),b},getContent:function(){if(this.getUrl())switch(this.options.type){case"iframe":this.content=this.getIframe();break;case"html":try{this.content=a(this.getUrl()),this.content.is(":visible")||this.content.show()}catch(b){throw new Error("Unable to get popover content. Invalid selector specified.")}}else if(!this.content){var c="";if(c=a.isFunction(this.options.content)?this.options.content.apply(this.$element[0],[this]):this.options.content,this.content=this.$element.attr("data-content")||c,!this.content){var d=this.$element.next();d&&d.hasClass(f+"-content")&&(this.content=d)}}return this.content},setContent:function(a){var b=this.getTarget(),c=this.getContentElement();"string"==typeof a?c.html(a):a instanceof jQuery&&(a.removeClass(f+"-content"),c.html(""),a.appendTo(c)),this.$target=b},isAsync:function(){return"async"===this.options.type},setContentASync:function(b){var c=this;this.xhr||(this.xhr=a.ajax({url:this.getUrl(),type:"GET",cache:this.getCache(),beforeSend:function(a){c.options.async.before&&c.options.async.before(c,a)},success:function(d){c.bindBodyEvents(),c.content=b&&a.isFunction(b)?b.apply(c.$element[0],[d]):d,c.setContent(c.content);var e=c.getContentElement();e.removeAttr("style"),c.displayContent(),c.options.async.success&&c.options.async.success(c,d)},complete:function(){c.xhr=null}}))},bindBodyEvents:function(){this.options.dismissible&&"click"===this.getTrigger()&&!l&&(n.off("keyup.webui-popover").on("keyup.webui-popover",a.proxy(this.escapeHandler,this)),n.off("click.webui-popover touchend.webui-popover").on("click.webui-popover touchend.webui-popover",a.proxy(this.bodyClickHandler,this)))},mouseenterHandler:function(){var a=this;a._timeout&&clearTimeout(a._timeout),a._enterTimeout=setTimeout(function(){a.getTarget().is(":visible")||a.show()},this.getDelayShow())},mouseleaveHandler:function(){var a=this;clearTimeout(a._enterTimeout),a._timeout=setTimeout(function(){a.hide()},this.getHideDelay())},escapeHandler:function(a){27===a.keyCode&&this.hideAll()},bodyClickHandler:function(a){l=!0;for(var b=!0,c=0;c<i.length;c++){var d=p(i[c]);if(d._opened){var e=d.getTarget().offset().left,f=d.getTarget().offset().top,g=d.getTarget().offset().left+d.getTarget().width(),h=d.getTarget().offset().top+d.getTarget().height(),j=r(a),k=j.x>=e&&j.x<=g&&j.y>=f&&j.y<=h;if(k){b=!1;break}}}b&&q()},initTargetEvents:function(){"hover"===this.getTrigger()&&this.$target.off("mouseenter mouseleave").on("mouseenter",a.proxy(this.mouseenterHandler,this)).on("mouseleave",a.proxy(this.mouseleaveHandler,this)),this.$target.find(".close").off("click").on("click",a.proxy(this.hide,this,!0))},getPlacement:function(a){var b,d=c.documentElement,e=c.body,f=d.clientWidth,g=d.clientHeight,h=Math.max(e.scrollTop,d.scrollTop),i=Math.max(e.scrollLeft,d.scrollLeft),j=Math.max(0,a.left-i),k=Math.max(0,a.top-h);b="function"==typeof this.options.placement?this.options.placement.call(this,this.getTarget()[0],this.$element[0]):this.$element.data("placement")||this.options.placement;var l="horizontal"===b,m="vertical"===b,n="auto"===b||l||m;return n?b=f/3>j?g/3>k?l?"right-bottom":"bottom-right":2*g/3>k?m?g/2>=k?"bottom-right":"top-right":"right":l?"right-top":"top-right":2*f/3>j?g/3>k?l?f/2>=j?"right-bottom":"left-bottom":"bottom":2*g/3>k?l?f/2>=j?"right":"left":g/2>=k?"bottom":"top":l?f/2>=j?"right-top":"left-top":"top":g/3>k?l?"left-bottom":"bottom-left":2*g/3>k?m?g/2>=k?"bottom-left":"top-left":"left":l?"left-top":"top-left":"auto-top"===b?b=f/3>j?"top-right":2*f/3>j?"top":"top-left":"auto-bottom"===b?b=f/3>j?"bottom-right":2*f/3>j?"bottom":"bottom-left":"auto-left"===b?b=g/3>k?"left-top":2*g/3>k?"left":"left-bottom":"auto-right"===b&&(b=g/3>k?"right-top":2*g/3>k?"right":"right-bottom"),b},getElementPosition:function(){return a.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTargetPositin:function(a,b,d,e){var f=a,g=c.documentElement,h=c.body,i=g.clientWidth,j=g.clientHeight,k=this.$element.outerWidth(),l=this.$element.outerHeight(),n=Math.max(h.scrollTop,g.scrollTop),o=Math.max(h.scrollLeft,g.scrollLeft),p={},q=null,r=this.options.arrow?20:0,s=10,t=r+s>k?r:0,u=r+s>l?r:0,v=0,w=j+n,x=i+o,y=f.left+f.width/2-t>0,z=f.left+f.width/2+t<x,A=f.top+f.height/2-u>0,B=f.top+f.height/2+u<w;switch(b){case"bottom":p={top:f.top+f.height,left:f.left+f.width/2-d/2};break;case"top":p={top:f.top-e,left:f.left+f.width/2-d/2};break;case"left":p={top:f.top+f.height/2-e/2,left:f.left-d};break;case"right":p={top:f.top+f.height/2-e/2,left:f.left+f.width};break;case"top-right":p={top:f.top-e,left:y?f.left-t:s},q={left:y?Math.min(k,d)/2+t:m};break;case"top-left":v=z?t:-s,p={top:f.top-e,left:f.left-d+f.width+v},q={left:z?d-Math.min(k,d)/2-t:m};break;case"bottom-right":p={top:f.top+f.height,left:y?f.left-t:s},q={left:y?Math.min(k,d)/2+t:m};break;case"bottom-left":v=z?t:-s,p={top:f.top+f.height,left:f.left-d+f.width+v},q={left:z?d-Math.min(k,d)/2-t:m};break;case"right-top":v=B?u:-s,p={top:f.top-e+f.height+v,left:f.left+f.width},q={top:B?e-Math.min(l,e)/2-u:m};break;case"right-bottom":p={top:A?f.top-u:s,left:f.left+f.width},q={top:A?Math.min(l,e)/2+u:m};break;case"left-top":v=B?u:-s,p={top:f.top-e+f.height+v,left:f.left-d},q={top:B?e-Math.min(l,e)/2-u:m};break;case"left-bottom":p={top:A?f.top-u:s,left:f.left-d},q={top:A?Math.min(l,e)/2+u:m}}return p.top+=this.getOffsetTop(),p.left+=this.getOffsetLeft(),{position:p,arrowOffset:q}}},a.fn[e]=function(b,c){var f=[],g=this.each(function(){var g=a.data(this,"plugin_"+e);g?"destroy"===b?g.destroy():"string"==typeof b&&f.push(g[b]()):(b?"string"==typeof b?"destroy"!==b&&(c||(g=new d(this,null),f.push(g[b]()))):"object"==typeof b&&(g=new d(this,b)):g=new d(this,null),a.data(this,"plugin_"+e,g))});return f.length?f:g}}(jQuery,window,document);
/*webui-popover.min.js*/
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("webuiPopover",{mode:"default",defaults:{trigger:"click",width:320,multi:!0,cloaseable:!1,style:"",delay:300,padding:!0}});
/*masonry.pkgd.min.js*/
/*!
 * Masonry PACKAGED v3.3.2
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(window),function(){function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a){function b(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function c(){}function d(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=g.length;c>b;b++){var d=g[b];a[d]=0}return a}function e(c){function e(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||f("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=c("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var g=document.body||document.documentElement;g.appendChild(e);var h=j(e);l=200===b(h.width),g.removeChild(e)}}}function h(a){if(e(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var c=j(a);if("none"===c.display)return d();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var h=f.isBorderBox=!(!k||!c[k]||"border-box"!==c[k]),m=0,n=g.length;n>m;m++){var o=g[m],p=c[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=h&&l,y=b(c.width);y!==!1&&(f.width=y+(x?0:r+v));var z=b(c.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.left,f=b.runtimeStyle,g=f&&f.left;return g&&(f.left=b.currentStyle.left),d.left=c,c=d.pixelLeft,d.left=e,g&&(f.left=g),c}var j,k,l,m=!1;return h}var f="undefined"==typeof console?c:function(a){console.error(a)},g=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],e):"object"==typeof exports?module.exports=e(require("desandro-get-style-property")):a.getSize=e(a.getStyleProperty)}(window),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(a){function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a,b){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)}(window,function(a,b,c){var d={};d.extend=function(a,b){for(var c in b)a[c]=b[c];return a},d.modulo=function(a,b){return(a%b+b)%b};var e=Object.prototype.toString;d.isArray=function(a){return"[object Array]"==e.call(a)},d.makeArray=function(a){var b=[];if(d.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var c=0,e=a.length;e>c;c++)b.push(a[c]);else b.push(a);return b},d.indexOf=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},d.removeFrom=function(a,b){var c=d.indexOf(a,b);-1!=c&&a.splice(c,1)},d.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1==a.nodeType&&"string"==typeof a.nodeName},d.setText=function(){function a(a,c){b=b||(void 0!==document.documentElement.textContent?"textContent":"innerText"),a[b]=c}var b;return a}(),d.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},d.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},d.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.filterFindElements=function(a,b){a=d.makeArray(a);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f];if(d.isElement(h))if(b){c(h,b)&&e.push(h);for(var i=h.querySelectorAll(b),j=0,k=i.length;k>j;j++)e.push(i[j])}else e.push(h)}return e},d.debounceMethod=function(a,b,c){var d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var a=this[e];a&&clearTimeout(a);var b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||100)}},d.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var f=a.console;return d.htmlInit=function(c,e){b(function(){for(var b=d.toDashed(e),g=document.querySelectorAll(".js-"+b),h="data-"+b+"-options",i=0,j=g.length;j>i;i++){var k,l=g[i],m=l.getAttribute(h);try{k=m&&JSON.parse(m)}catch(n){f&&f.error("Error parsing "+h+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+n);continue}var o=new c(l,k),p=a.jQuery;p&&p.data(l,e,o)}})},d}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,d,e,f){return b(a,c,d,e,f)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))}(window,function(a,b,c,d,e){function f(a){for(var b in a)return!1;return b=null,!0}function g(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function h(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var i=a.getComputedStyle,j=i?function(a){return i(a,null)}:function(a){return a.currentStyle},k=d("transition"),l=d("transform"),m=k&&l,n=!!d("perspective"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[k],p=["transform","transition","transitionDuration","transitionProperty"],q=function(){for(var a={},b=0,c=p.length;c>b;b++){var e=p[b],f=d(e);f&&f!==e&&(a[e]=f)}return a}();e.extend(g.prototype,b.prototype),g.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.getSize=function(){this.size=c(this.element)},g.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=q[c]||c;b[d]=a[c]}},g.prototype.getPosition=function(){var a=j(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=a[c?"left":"right"],f=a[d?"top":"bottom"],g=this.layout.size,h=-1!=e.indexOf("%")?parseFloat(e)/100*g.width:parseInt(e,10),i=-1!=f.indexOf("%")?parseFloat(f)/100*g.height:parseInt(f,10);h=isNaN(h)?0:h,i=isNaN(i)?0:i,h-=c?g.paddingLeft:g.paddingRight,i-=d?g.paddingTop:g.paddingBottom,this.position.x=h,this.position.y=i},g.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={},d=b.isOriginLeft?"paddingLeft":"paddingRight",e=b.isOriginLeft?"left":"right",f=b.isOriginLeft?"right":"left",g=this.position.x+a[d];c[e]=this.getXValue(g),c[f]="";var h=b.isOriginTop?"paddingTop":"paddingBottom",i=b.isOriginTop?"top":"bottom",j=b.isOriginTop?"bottom":"top",k=this.position.y+a[h];c[i]=this.getYValue(k),c[j]="",this.css(c),this.emitEvent("layout",[this])},g.prototype.getXValue=function(a){var b=this.layout.options;return b.percentPosition&&!b.isHorizontal?a/this.layout.size.width*100+"%":a+"px"},g.prototype.getYValue=function(a){var b=this.layout.options;return b.percentPosition&&b.isHorizontal?a/this.layout.size.height*100+"%":a+"px"},g.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={};j.transform=this.getTranslate(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.prototype.getTranslate=function(a,b){var c=this.layout.options;return a=c.isOriginLeft?a:-a,b=c.isOriginTop?b:-b,n?"translate3d("+a+"px, "+b+"px, 0)":"translate("+a+"px, "+b+"px)"},g.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},g.prototype.moveTo=m?g.prototype._transitionTo:g.prototype.goTo,g.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},g.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},g.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var r="opacity,"+h(q.transform||"transform");g.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:r,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(o,this,!1))},g.prototype.transition=g.prototype[k?"_transition":"_nonTransition"],g.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},g.prototype.onotransitionend=function(a){this.ontransitionend(a)};var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};g.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,c=s[a.propertyName]||a.propertyName;if(delete b.ingProperties[c],f(b.ingProperties)&&this.disableTransition(),c in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in b.onEnd){var d=b.onEnd[c];d.call(this),delete b.onEnd[c]}this.emitEvent("transitionEnd",[this])}},g.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(o,this,!1),this.isTransitioning=!1},g.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var t={transitionProperty:"",transitionDuration:""};return g.prototype.removeTransitionStyles=function(){this.css(t)},g.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},g.prototype.remove=function(){if(!k||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.once("transitionEnd",function(){a.removeElem()}),this.hide()},g.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},g.prototype.getHideRevealTransitionEndProperty=function(a){var b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return c},g.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},g.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},g}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f,g){return b(a,c,d,e,f,g)}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e,f){function g(a,b){var c=e.getQueryElement(a);if(!c)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));this.element=c,i&&(this.$element=i(this.element)),this.options=e.extend({},this.constructor.defaults),this.option(b);var d=++k;this.element.outlayerGUID=d,l[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var h=a.console,i=a.jQuery,j=function(){},k=0,l={};return g.namespace="outlayer",g.Item=f,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e.extend(g.prototype,c.prototype),g.prototype.option=function(a){e.extend(this.options,a)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},g.prototype._filterFindItemElements=function(a){return e.filterFindElements(a,this.options.itemSelector)},g.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(a,b){var c,f=this.options[a];f?("string"==typeof f?c=this.element.querySelector(f):e.isElement(f)&&(c=f),this[a]=c?d(c)[b]:f):this[a]=0},g.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},g.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},g.prototype._layoutItems=function(a,b){if(this._emitCompleteOnItems("layout",a),a&&a.length){for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d],g=this._getItemLayoutPosition(f);g.item=f,g.isInstant=b||f.isLayoutInstant,c.push(g)}this._processLayoutQueue(c)}},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},g.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},g.prototype._getContainerSize=j,g.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},g.prototype._emitCompleteOnItems=function(a,b){function c(){e.dispatchEvent(a+"Complete",null,[b])}function d(){g++,g===f&&c()}var e=this,f=b.length;if(!b||!f)return void c();for(var g=0,h=0,i=b.length;i>h;h++){var j=b[h];j.once(a,d)}},g.prototype.dispatchEvent=function(a,b,c){var d=b?[b].concat(c):c;if(this.emitEvent(a,d),i)if(this.$element=this.$element||i(this.element),b){var e=i.Event(b);e.type=a,this.$element.trigger(e,c)}else this.$element.trigger(a,c)},g.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},g.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},g.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},g.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e.removeFrom(this.stamps,d),this.unignore(d)}},g.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=e.makeArray(a)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},g.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},g.prototype._manageStamp=j,g.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,e=d(a),f={left:b.left-c.left-e.marginLeft,top:b.top-c.top-e.marginTop,right:c.right-b.right-e.marginRight,bottom:c.bottom-b.bottom-e.marginBottom};return f},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.bindResize=function(){this.isResizeBound||(b.bind(a,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&b.unbind(a,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},g.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},g.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},g.prototype.reveal=function(a){this._emitCompleteOnItems("reveal",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.reveal()}},g.prototype.hide=function(a){this._emitCompleteOnItems("hide",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.hide()}},g.prototype.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},g.prototype.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},g.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},g.prototype.getItems=function(a){a=e.makeArray(a);for(var b=[],c=0,d=a.length;d>c;c++){var f=a[c],g=this.getItem(f);g&&b.push(g)}return b},g.prototype.remove=function(a){var b=this.getItems(a);if(this._emitCompleteOnItems("remove",b),b&&b.length)for(var c=0,d=b.length;d>c;c++){var f=b[c];f.remove(),e.removeFrom(this.items,f)}},g.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constructor.namespace)},g.data=function(a){a=e.getQueryElement(a);var b=a&&a.outlayerGUID;return b&&l[b]},g.create=function(a,b){function c(){g.apply(this,arguments)}return Object.create?c.prototype=Object.create(g.prototype):e.extend(c.prototype,g.prototype),c.prototype.constructor=c,c.defaults=e.extend({},g.defaults),e.extend(c.defaults,b),c.prototype.settings={},c.namespace=a,c.data=g.data,c.Item=function(){f.apply(this,arguments)},c.Item.prototype=new f,e.htmlInit(c,a),i&&i.bridget&&i.bridget(a,c),c},g.Item=f,g}),function(a,b){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):a.Masonry=b(a.Outlayer,a.getSize,a.fizzyUIUtils)}(window,function(a,b,c){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max(f,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c.indexOf(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d});
/*masonry.min.js*/
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("masonry",{mode:"init",defaults:{itemSelector:".masonry-item"},init:function(context){if("undefined"!=typeof $.fn.masonry){var defaults=$.components.getDefaults("masonry"),callback=function(){$('[data-plugin="masonry"]',context).each(function(){var $this=$(this),options=$.extend(!0,{},defaults,$this.data());$this.masonry(options)})};context!==document?callback():$(window).on("load",function(){callback()})}}});
/*jquery.bootstrap-touchspin.min.js*/
/*
 *  Bootstrap TouchSpin - v3.0.1
 *  A mobile and touch friendly input spinner component for Bootstrap 3.
 *  http://www.virtuosoft.eu/code/bootstrap-touchspin/
 *
 *  Made by István Ujj-Mészáros
 *  Under Apache License v2.0 License
 */
!function(a){"use strict";function b(a,b){return a+".touchspin_"+b}function c(c,d){return a.map(c,function(a){return b(a,d)})}var d=0;a.fn.TouchSpin=function(b){if("destroy"===b)return void this.each(function(){var b=a(this),d=b.data();a(document).off(c(["mouseup","touchend","touchcancel","mousemove","touchmove","scroll","scrollstart"],d.spinnerid).join(" "))});var e={min:0,max:100,initval:"",step:1,decimals:0,stepinterval:100,forcestepdivisibility:"round",stepintervaldelay:500,verticalbuttons:!1,verticalupclass:"glyphicon glyphicon-chevron-up",verticaldownclass:"glyphicon glyphicon-chevron-down",prefix:"",postfix:"",prefix_extraclass:"",postfix_extraclass:"",booster:!0,boostat:10,maxboostedstep:!1,mousewheel:!0,buttondown_class:"btn btn-default",buttonup_class:"btn btn-default",buttondown_txt:"-",buttonup_txt:"+"},f={min:"min",max:"max",initval:"init-val",step:"step",decimals:"decimals",stepinterval:"step-interval",verticalbuttons:"vertical-buttons",verticalupclass:"vertical-up-class",verticaldownclass:"vertical-down-class",forcestepdivisibility:"force-step-divisibility",stepintervaldelay:"step-interval-delay",prefix:"prefix",postfix:"postfix",prefix_extraclass:"prefix-extra-class",postfix_extraclass:"postfix-extra-class",booster:"booster",boostat:"boostat",maxboostedstep:"max-boosted-step",mousewheel:"mouse-wheel",buttondown_class:"button-down-class",buttonup_class:"button-up-class",buttondown_txt:"button-down-txt",buttonup_txt:"button-up-txt"};return this.each(function(){function g(){if(!J.data("alreadyinitialized")){if(J.data("alreadyinitialized",!0),d+=1,J.data("spinnerid",d),!J.is("input"))return void console.log("Must be an input.");j(),h(),u(),m(),p(),q(),r(),s(),D.input.css("display","block")}}function h(){""!==B.initval&&""===J.val()&&J.val(B.initval)}function i(a){l(a),u();var b=D.input.val();""!==b&&(b=Number(D.input.val()),D.input.val(b.toFixed(B.decimals)))}function j(){B=a.extend({},e,K,k(),b)}function k(){var b={};return a.each(f,function(a,c){var d="bts-"+c;J.is("[data-"+d+"]")&&(b[a]=J.data(d))}),b}function l(b){B=a.extend({},B,b)}function m(){var a=J.val(),b=J.parent();""!==a&&(a=Number(a).toFixed(B.decimals)),J.data("initvalue",a).val(a),J.addClass("form-control"),b.hasClass("input-group")?n(b):o()}function n(b){b.addClass("bootstrap-touchspin");var c,d,e=J.prev(),f=J.next(),g='<span class="input-group-addon bootstrap-touchspin-prefix">'+B.prefix+"</span>",h='<span class="input-group-addon bootstrap-touchspin-postfix">'+B.postfix+"</span>";e.hasClass("input-group-btn")?(c='<button class="'+B.buttondown_class+' bootstrap-touchspin-down" type="button">'+B.buttondown_txt+"</button>",e.append(c)):(c='<span class="input-group-btn"><button class="'+B.buttondown_class+' bootstrap-touchspin-down" type="button">'+B.buttondown_txt+"</button></span>",a(c).insertBefore(J)),f.hasClass("input-group-btn")?(d='<button class="'+B.buttonup_class+' bootstrap-touchspin-up" type="button">'+B.buttonup_txt+"</button>",f.prepend(d)):(d='<span class="input-group-btn"><button class="'+B.buttonup_class+' bootstrap-touchspin-up" type="button">'+B.buttonup_txt+"</button></span>",a(d).insertAfter(J)),a(g).insertBefore(J),a(h).insertAfter(J),C=b}function o(){var b;b=B.verticalbuttons?'<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">'+B.prefix+'</span><span class="input-group-addon bootstrap-touchspin-postfix">'+B.postfix+'</span><span class="input-group-btn-vertical"><button class="'+B.buttondown_class+' bootstrap-touchspin-up" type="button"><i class="'+B.verticalupclass+'"></i></button><button class="'+B.buttonup_class+' bootstrap-touchspin-down" type="button"><i class="'+B.verticaldownclass+'"></i></button></span></div>':'<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="'+B.buttondown_class+' bootstrap-touchspin-down" type="button">'+B.buttondown_txt+'</button></span><span class="input-group-addon bootstrap-touchspin-prefix">'+B.prefix+'</span><span class="input-group-addon bootstrap-touchspin-postfix">'+B.postfix+'</span><span class="input-group-btn"><button class="'+B.buttonup_class+' bootstrap-touchspin-up" type="button">'+B.buttonup_txt+"</button></span></div>",C=a(b).insertBefore(J),a(".bootstrap-touchspin-prefix",C).after(J),J.hasClass("input-sm")?C.addClass("input-group-sm"):J.hasClass("input-lg")&&C.addClass("input-group-lg")}function p(){D={down:a(".bootstrap-touchspin-down",C),up:a(".bootstrap-touchspin-up",C),input:a("input",C),prefix:a(".bootstrap-touchspin-prefix",C).addClass(B.prefix_extraclass),postfix:a(".bootstrap-touchspin-postfix",C).addClass(B.postfix_extraclass)}}function q(){""===B.prefix&&D.prefix.hide(),""===B.postfix&&D.postfix.hide()}function r(){J.on("keydown",function(a){var b=a.keyCode||a.which;38===b?("up"!==M&&(w(),z()),a.preventDefault()):40===b&&("down"!==M&&(x(),y()),a.preventDefault())}),J.on("keyup",function(a){var b=a.keyCode||a.which;38===b?A():40===b&&A()}),J.on("blur",function(){u()}),D.down.on("keydown",function(a){var b=a.keyCode||a.which;(32===b||13===b)&&("down"!==M&&(x(),y()),a.preventDefault())}),D.down.on("keyup",function(a){var b=a.keyCode||a.which;(32===b||13===b)&&A()}),D.up.on("keydown",function(a){var b=a.keyCode||a.which;(32===b||13===b)&&("up"!==M&&(w(),z()),a.preventDefault())}),D.up.on("keyup",function(a){var b=a.keyCode||a.which;(32===b||13===b)&&A()}),D.down.on("mousedown.touchspin",function(a){D.down.off("touchstart.touchspin"),J.is(":disabled")||(x(),y(),a.preventDefault(),a.stopPropagation())}),D.down.on("touchstart.touchspin",function(a){D.down.off("mousedown.touchspin"),J.is(":disabled")||(x(),y(),a.preventDefault(),a.stopPropagation())}),D.up.on("mousedown.touchspin",function(a){D.up.off("touchstart.touchspin"),J.is(":disabled")||(w(),z(),a.preventDefault(),a.stopPropagation())}),D.up.on("touchstart.touchspin",function(a){D.up.off("mousedown.touchspin"),J.is(":disabled")||(w(),z(),a.preventDefault(),a.stopPropagation())}),D.up.on("mouseout touchleave touchend touchcancel",function(a){M&&(a.stopPropagation(),A())}),D.down.on("mouseout touchleave touchend touchcancel",function(a){M&&(a.stopPropagation(),A())}),D.down.on("mousemove touchmove",function(a){M&&(a.stopPropagation(),a.preventDefault())}),D.up.on("mousemove touchmove",function(a){M&&(a.stopPropagation(),a.preventDefault())}),a(document).on(c(["mouseup","touchend","touchcancel"],d).join(" "),function(a){M&&(a.preventDefault(),A())}),a(document).on(c(["mousemove","touchmove","scroll","scrollstart"],d).join(" "),function(a){M&&(a.preventDefault(),A())}),J.on("mousewheel DOMMouseScroll",function(a){if(B.mousewheel&&J.is(":focus")){var b=a.originalEvent.wheelDelta||-a.originalEvent.deltaY||-a.originalEvent.detail;a.stopPropagation(),a.preventDefault(),0>b?x():w()}})}function s(){J.on("touchspin.uponce",function(){A(),w()}),J.on("touchspin.downonce",function(){A(),x()}),J.on("touchspin.startupspin",function(){z()}),J.on("touchspin.startdownspin",function(){y()}),J.on("touchspin.stopspin",function(){A()}),J.on("touchspin.updatesettings",function(a,b){i(b)})}function t(a){switch(B.forcestepdivisibility){case"round":return(Math.round(a/B.step)*B.step).toFixed(B.decimals);case"floor":return(Math.floor(a/B.step)*B.step).toFixed(B.decimals);case"ceil":return(Math.ceil(a/B.step)*B.step).toFixed(B.decimals);default:return a}}function u(){var a,b,c;a=J.val(),""!==a&&(B.decimals>0&&"."===a||(b=parseFloat(a),isNaN(b)&&(b=0),c=b,b.toString()!==a&&(c=b),b<B.min&&(c=B.min),b>B.max&&(c=B.max),c=t(c),Number(a).toString()!==c.toString()&&(J.val(c),J.trigger("change"))))}function v(){if(B.booster){var a=Math.pow(2,Math.floor(L/B.boostat))*B.step;return B.maxboostedstep&&a>B.maxboostedstep&&(a=B.maxboostedstep,E=Math.round(E/a)*a),Math.max(B.step,a)}return B.step}function w(){u(),E=parseFloat(D.input.val()),isNaN(E)&&(E=0);var a=E,b=v();E+=b,E>B.max&&(E=B.max,J.trigger("touchspin.on.max"),A()),D.input.val(Number(E).toFixed(B.decimals)),a!==E&&J.trigger("change")}function x(){u(),E=parseFloat(D.input.val()),isNaN(E)&&(E=0);var a=E,b=v();E-=b,E<B.min&&(E=B.min,J.trigger("touchspin.on.min"),A()),D.input.val(E.toFixed(B.decimals)),a!==E&&J.trigger("change")}function y(){A(),L=0,M="down",J.trigger("touchspin.on.startspin"),J.trigger("touchspin.on.startdownspin"),H=setTimeout(function(){F=setInterval(function(){L++,x()},B.stepinterval)},B.stepintervaldelay)}function z(){A(),L=0,M="up",J.trigger("touchspin.on.startspin"),J.trigger("touchspin.on.startupspin"),I=setTimeout(function(){G=setInterval(function(){L++,w()},B.stepinterval)},B.stepintervaldelay)}function A(){switch(clearTimeout(H),clearTimeout(I),clearInterval(F),clearInterval(G),M){case"up":J.trigger("touchspin.on.stopupspin"),J.trigger("touchspin.on.stopspin");break;case"down":J.trigger("touchspin.on.stopdownspin"),J.trigger("touchspin.on.stopspin")}L=0,M=!1}var B,C,D,E,F,G,H,I,J=a(this),K=J.data(),L=0,M=!1;g()})}}(jQuery);
/*bootstrap-editable.min.js*/
/*! X-editable - v1.5.1 
* In-place editing with Twitter Bootstrap, jQuery UI or pure jQuery
* http://github.com/vitalets/x-editable
* Copyright (c) 2013 Vitaliy Potapov; Licensed MIT */
!function(a){"use strict";var b=function(b,c){this.options=a.extend({},a.fn.editableform.defaults,c),this.$div=a(b),this.options.scope||(this.options.scope=this)};b.prototype={constructor:b,initInput:function(){this.input=this.options.input,this.value=this.input.str2value(this.options.value),this.input.prerender()},initTemplate:function(){this.$form=a(a.fn.editableform.template)},initButtons:function(){var b=this.$form.find(".editable-buttons");b.append(a.fn.editableform.buttons),"bottom"===this.options.showbuttons&&b.addClass("editable-buttons-bottom")},render:function(){this.$loading=a(a.fn.editableform.loading),this.$div.empty().append(this.$loading),this.initTemplate(),this.options.showbuttons?this.initButtons():this.$form.find(".editable-buttons").remove(),this.showLoading(),this.isSaving=!1,this.$div.triggerHandler("rendering"),this.initInput(),this.$form.find("div.editable-input").append(this.input.$tpl),this.$div.append(this.$form),a.when(this.input.render()).then(a.proxy(function(){if(this.options.showbuttons||this.input.autosubmit(),this.$form.find(".editable-cancel").click(a.proxy(this.cancel,this)),this.input.error)this.error(this.input.error),this.$form.find(".editable-submit").attr("disabled",!0),this.input.$input.attr("disabled",!0),this.$form.submit(function(a){a.preventDefault()});else{this.error(!1),this.input.$input.removeAttr("disabled"),this.$form.find(".editable-submit").removeAttr("disabled");var b=null===this.value||void 0===this.value||""===this.value?this.options.defaultValue:this.value;this.input.value2input(b),this.$form.submit(a.proxy(this.submit,this))}this.$div.triggerHandler("rendered"),this.showForm(),this.input.postrender&&this.input.postrender()},this))},cancel:function(){this.$div.triggerHandler("cancel")},showLoading:function(){var a,b;this.$form?(a=this.$form.outerWidth(),b=this.$form.outerHeight(),a&&this.$loading.width(a),b&&this.$loading.height(b),this.$form.hide()):(a=this.$loading.parent().width(),a&&this.$loading.width(a)),this.$loading.show()},showForm:function(a){this.$loading.hide(),this.$form.show(),a!==!1&&this.input.activate(),this.$div.triggerHandler("show")},error:function(b){var c,d=this.$form.find(".control-group"),e=this.$form.find(".editable-error-block");if(b===!1)d.removeClass(a.fn.editableform.errorGroupClass),e.removeClass(a.fn.editableform.errorBlockClass).empty().hide();else{if(b){c=(""+b).split("\n");for(var f=0;f<c.length;f++)c[f]=a("<div>").text(c[f]).html();b=c.join("<br>")}d.addClass(a.fn.editableform.errorGroupClass),e.addClass(a.fn.editableform.errorBlockClass).html(b).show()}},submit:function(b){b.stopPropagation(),b.preventDefault();var c=this.input.input2value(),d=this.validate(c);if("object"===a.type(d)&&void 0!==d.newValue){if(c=d.newValue,this.input.value2input(c),"string"==typeof d.msg)return this.error(d.msg),this.showForm(),void 0}else if(d)return this.error(d),this.showForm(),void 0;if(!this.options.savenochange&&this.input.value2str(c)==this.input.value2str(this.value))return this.$div.triggerHandler("nochange"),void 0;var e=this.input.value2submit(c);this.isSaving=!0,a.when(this.save(e)).done(a.proxy(function(a){this.isSaving=!1;var b="function"==typeof this.options.success?this.options.success.call(this.options.scope,a,c):null;return b===!1?(this.error(!1),this.showForm(!1),void 0):"string"==typeof b?(this.error(b),this.showForm(),void 0):(b&&"object"==typeof b&&b.hasOwnProperty("newValue")&&(c=b.newValue),this.error(!1),this.value=c,this.$div.triggerHandler("save",{newValue:c,submitValue:e,response:a}),void 0)},this)).fail(a.proxy(function(a){this.isSaving=!1;var b;b="function"==typeof this.options.error?this.options.error.call(this.options.scope,a,c):"string"==typeof a?a:a.responseText||a.statusText||"Unknown error!",this.error(b),this.showForm()},this))},save:function(b){this.options.pk=a.fn.editableutils.tryParseJson(this.options.pk,!0);var c,d="function"==typeof this.options.pk?this.options.pk.call(this.options.scope):this.options.pk,e=!!("function"==typeof this.options.url||this.options.url&&("always"===this.options.send||"auto"===this.options.send&&null!==d&&void 0!==d));return e?(this.showLoading(),c={name:this.options.name||"",value:b,pk:d},"function"==typeof this.options.params?c=this.options.params.call(this.options.scope,c):(this.options.params=a.fn.editableutils.tryParseJson(this.options.params,!0),a.extend(c,this.options.params)),"function"==typeof this.options.url?this.options.url.call(this.options.scope,c):a.ajax(a.extend({url:this.options.url,data:c,type:"POST"},this.options.ajaxOptions))):void 0},validate:function(a){return void 0===a&&(a=this.value),"function"==typeof this.options.validate?this.options.validate.call(this.options.scope,a):void 0},option:function(a,b){a in this.options&&(this.options[a]=b),"value"===a&&this.setValue(b)},setValue:function(a,b){this.value=b?this.input.str2value(a):a,this.$form&&this.$form.is(":visible")&&this.input.value2input(this.value)}},a.fn.editableform=function(c){var d=arguments;return this.each(function(){var e=a(this),f=e.data("editableform"),g="object"==typeof c&&c;f||e.data("editableform",f=new b(this,g)),"string"==typeof c&&f[c].apply(f,Array.prototype.slice.call(d,1))})},a.fn.editableform.Constructor=b,a.fn.editableform.defaults={type:"text",url:null,params:null,name:null,pk:null,value:null,defaultValue:null,send:"auto",validate:null,success:null,error:null,ajaxOptions:null,showbuttons:!0,scope:null,savenochange:!1},a.fn.editableform.template='<form class="form-inline editableform"><div class="control-group"><div><div class="editable-input"></div><div class="editable-buttons"></div></div><div class="editable-error-block"></div></div></form>',a.fn.editableform.loading='<div class="editableform-loading"></div>',a.fn.editableform.buttons='<button type="submit" class="editable-submit">ok</button><button type="button" class="editable-cancel">cancel</button>',a.fn.editableform.errorGroupClass=null,a.fn.editableform.errorBlockClass="editable-error",a.fn.editableform.engine="jquery"}(window.jQuery),function(a){"use strict";a.fn.editableutils={inherit:function(a,b){var c=function(){};c.prototype=b.prototype,a.prototype=new c,a.prototype.constructor=a,a.superclass=b.prototype},setCursorPosition:function(a,b){if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",b),c.select()}},tryParseJson:function(a,b){if("string"==typeof a&&a.length&&a.match(/^[\{\[].*[\}\]]$/))if(b)try{a=new Function("return "+a)()}catch(c){}finally{return a}else a=new Function("return "+a)();return a},sliceObj:function(b,c,d){var e,f,g={};if(!a.isArray(c)||!c.length)return g;for(var h=0;h<c.length;h++)e=c[h],b.hasOwnProperty(e)&&(g[e]=b[e]),d!==!0&&(f=e.toLowerCase(),b.hasOwnProperty(f)&&(g[e]=b[f]));return g},getConfigData:function(b){var c={};return a.each(b.data(),function(a,b){("object"!=typeof b||b&&"object"==typeof b&&(b.constructor===Object||b.constructor===Array))&&(c[a]=b)}),c},objectKeys:function(a){if(Object.keys)return Object.keys(a);if(a!==Object(a))throw new TypeError("Object.keys called on a non-object");var b,c=[];for(b in a)Object.prototype.hasOwnProperty.call(a,b)&&c.push(b);return c},escape:function(b){return a("<div>").text(b).html()},itemsByValue:function(b,c,d){if(!c||null===b)return[];if("function"!=typeof d){var e=d||"value";d=function(a){return a[e]}}var f=a.isArray(b),g=[],h=this;return a.each(c,function(c,e){if(e.children)g=g.concat(h.itemsByValue(b,e.children,d));else if(f)a.grep(b,function(a){return a==(e&&"object"==typeof e?d(e):e)}).length&&g.push(e);else{var i=e&&"object"==typeof e?d(e):e;b==i&&g.push(e)}}),g},createInput:function(b){var c,d,e,f=b.type;return"date"===f&&("inline"===b.mode?a.fn.editabletypes.datefield?f="datefield":a.fn.editabletypes.dateuifield&&(f="dateuifield"):a.fn.editabletypes.date?f="date":a.fn.editabletypes.dateui&&(f="dateui"),"date"!==f||a.fn.editabletypes.date||(f="combodate")),"datetime"===f&&"inline"===b.mode&&(f="datetimefield"),"wysihtml5"!==f||a.fn.editabletypes[f]||(f="textarea"),"function"==typeof a.fn.editabletypes[f]?(c=a.fn.editabletypes[f],d=this.sliceObj(b,this.objectKeys(c.defaults)),e=new c(d)):(a.error("Unknown type: "+f),!1)},supportsTransitions:function(){var a=document.body||document.documentElement,b=a.style,c="transition",d=["Moz","Webkit","Khtml","O","ms"];if("string"==typeof b[c])return!0;c=c.charAt(0).toUpperCase()+c.substr(1);for(var e=0;e<d.length;e++)if("string"==typeof b[d[e]+c])return!0;return!1}}}(window.jQuery),function(a){"use strict";var b=function(a,b){this.init(a,b)},c=function(a,b){this.init(a,b)};b.prototype={containerName:null,containerDataName:null,innerCss:null,containerClass:"editable-container editable-popup",defaults:{},init:function(c,d){this.$element=a(c),this.options=a.extend({},a.fn.editableContainer.defaults,d),this.splitOptions(),this.formOptions.scope=this.$element[0],this.initContainer(),this.delayedHide=!1,this.$element.on("destroyed",a.proxy(function(){this.destroy()},this)),a(document).data("editable-handlers-attached")||(a(document).on("keyup.editable",function(b){27===b.which&&a(".editable-open").editableContainer("hide")}),a(document).on("click.editable",function(c){var d,e=a(c.target),f=[".editable-container",".ui-datepicker-header",".datepicker",".modal-backdrop",".bootstrap-wysihtml5-insert-image-modal",".bootstrap-wysihtml5-insert-link-modal"];if(a.contains(document.documentElement,c.target)&&!e.is(document)){for(d=0;d<f.length;d++)if(e.is(f[d])||e.parents(f[d]).length)return;b.prototype.closeOthers(c.target)}}),a(document).data("editable-handlers-attached",!0))},splitOptions:function(){if(this.containerOptions={},this.formOptions={},!a.fn[this.containerName])throw new Error(this.containerName+" not found. Have you included corresponding js file?");for(var b in this.options)b in this.defaults?this.containerOptions[b]=this.options[b]:this.formOptions[b]=this.options[b]},tip:function(){return this.container()?this.container().$tip:null},container:function(){var a;return this.containerDataName&&(a=this.$element.data(this.containerDataName))?a:a=this.$element.data(this.containerName)},call:function(){this.$element[this.containerName].apply(this.$element,arguments)},initContainer:function(){this.call(this.containerOptions)},renderForm:function(){this.$form.editableform(this.formOptions).on({save:a.proxy(this.save,this),nochange:a.proxy(function(){this.hide("nochange")},this),cancel:a.proxy(function(){this.hide("cancel")},this),show:a.proxy(function(){this.delayedHide?(this.hide(this.delayedHide.reason),this.delayedHide=!1):this.setPosition()},this),rendering:a.proxy(this.setPosition,this),resize:a.proxy(this.setPosition,this),rendered:a.proxy(function(){this.$element.triggerHandler("shown",a(this.options.scope).data("editable"))},this)}).editableform("render")},show:function(b){this.$element.addClass("editable-open"),b!==!1&&this.closeOthers(this.$element[0]),this.innerShow(),this.tip().addClass(this.containerClass),this.$form,this.$form=a("<div>"),this.tip().is(this.innerCss)?this.tip().append(this.$form):this.tip().find(this.innerCss).append(this.$form),this.renderForm()},hide:function(a){if(this.tip()&&this.tip().is(":visible")&&this.$element.hasClass("editable-open")){if(this.$form.data("editableform").isSaving)return this.delayedHide={reason:a},void 0;this.delayedHide=!1,this.$element.removeClass("editable-open"),this.innerHide(),this.$element.triggerHandler("hidden",a||"manual")}},innerShow:function(){},innerHide:function(){},toggle:function(a){this.container()&&this.tip()&&this.tip().is(":visible")?this.hide():this.show(a)},setPosition:function(){},save:function(a,b){this.$element.triggerHandler("save",b),this.hide("save")},option:function(a,b){this.options[a]=b,a in this.containerOptions?(this.containerOptions[a]=b,this.setContainerOption(a,b)):(this.formOptions[a]=b,this.$form&&this.$form.editableform("option",a,b))},setContainerOption:function(a,b){this.call("option",a,b)},destroy:function(){this.hide(),this.innerDestroy(),this.$element.off("destroyed"),this.$element.removeData("editableContainer")},innerDestroy:function(){},closeOthers:function(b){a(".editable-open").each(function(c,d){if(d!==b&&!a(d).find(b).length){var e=a(d),f=e.data("editableContainer");f&&("cancel"===f.options.onblur?e.data("editableContainer").hide("onblur"):"submit"===f.options.onblur&&e.data("editableContainer").tip().find("form").submit())}})},activate:function(){this.tip&&this.tip().is(":visible")&&this.$form&&this.$form.data("editableform").input.activate()}},a.fn.editableContainer=function(d){var e=arguments;return this.each(function(){var f=a(this),g="editableContainer",h=f.data(g),i="object"==typeof d&&d,j="inline"===i.mode?c:b;h||f.data(g,h=new j(this,i)),"string"==typeof d&&h[d].apply(h,Array.prototype.slice.call(e,1))})},a.fn.editableContainer.Popup=b,a.fn.editableContainer.Inline=c,a.fn.editableContainer.defaults={value:null,placement:"top",autohide:!0,onblur:"cancel",anim:!1,mode:"popup"},jQuery.event.special.destroyed={remove:function(a){a.handler&&a.handler()}}}(window.jQuery),function(a){"use strict";a.extend(a.fn.editableContainer.Inline.prototype,a.fn.editableContainer.Popup.prototype,{containerName:"editableform",innerCss:".editable-inline",containerClass:"editable-container editable-inline",initContainer:function(){this.$tip=a("<span></span>"),this.options.anim||(this.options.anim=0)},splitOptions:function(){this.containerOptions={},this.formOptions=this.options},tip:function(){return this.$tip},innerShow:function(){this.$element.hide(),this.tip().insertAfter(this.$element).show()},innerHide:function(){this.$tip.hide(this.options.anim,a.proxy(function(){this.$element.show(),this.innerDestroy()},this))},innerDestroy:function(){this.tip()&&this.tip().empty().remove()}})}(window.jQuery),function(a){"use strict";var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.editable.defaults,c,a.fn.editableutils.getConfigData(this.$element)),this.options.selector?this.initLive():this.init(),this.options.highlight&&!a.fn.editableutils.supportsTransitions()&&(this.options.highlight=!1)};b.prototype={constructor:b,init:function(){var b,c=!1;if(this.options.name=this.options.name||this.$element.attr("id"),this.options.scope=this.$element[0],this.input=a.fn.editableutils.createInput(this.options),this.input){switch(void 0===this.options.value||null===this.options.value?(this.value=this.input.html2value(a.trim(this.$element.html())),c=!0):(this.options.value=a.fn.editableutils.tryParseJson(this.options.value,!0),this.value="string"==typeof this.options.value?this.input.str2value(this.options.value):this.options.value),this.$element.addClass("editable"),"textarea"===this.input.type&&this.$element.addClass("editable-pre-wrapped"),"manual"!==this.options.toggle?(this.$element.addClass("editable-click"),this.$element.on(this.options.toggle+".editable",a.proxy(function(a){if(this.options.disabled||a.preventDefault(),"mouseenter"===this.options.toggle)this.show();else{var b="click"!==this.options.toggle;this.toggle(b)}},this))):this.$element.attr("tabindex",-1),"function"==typeof this.options.display&&(this.options.autotext="always"),this.options.autotext){case"always":b=!0;break;case"auto":b=!a.trim(this.$element.text()).length&&null!==this.value&&void 0!==this.value&&!c;break;default:b=!1}a.when(b?this.render():!0).then(a.proxy(function(){this.options.disabled?this.disable():this.enable(),this.$element.triggerHandler("init",this)},this))}},initLive:function(){var b=this.options.selector;this.options.selector=!1,this.options.autotext="never",this.$element.on(this.options.toggle+".editable",b,a.proxy(function(b){var c=a(b.target);c.data("editable")||(c.hasClass(this.options.emptyclass)&&c.empty(),c.editable(this.options).trigger(b))},this))},render:function(a){return this.options.display!==!1?this.input.value2htmlFinal?this.input.value2html(this.value,this.$element[0],this.options.display,a):"function"==typeof this.options.display?this.options.display.call(this.$element[0],this.value,a):this.input.value2html(this.value,this.$element[0]):void 0},enable:function(){this.options.disabled=!1,this.$element.removeClass("editable-disabled"),this.handleEmpty(this.isEmpty),"manual"!==this.options.toggle&&"-1"===this.$element.attr("tabindex")&&this.$element.removeAttr("tabindex")},disable:function(){this.options.disabled=!0,this.hide(),this.$element.addClass("editable-disabled"),this.handleEmpty(this.isEmpty),this.$element.attr("tabindex",-1)},toggleDisabled:function(){this.options.disabled?this.enable():this.disable()},option:function(b,c){return b&&"object"==typeof b?(a.each(b,a.proxy(function(b,c){this.option(a.trim(b),c)},this)),void 0):(this.options[b]=c,"disabled"===b?c?this.disable():this.enable():("value"===b&&this.setValue(c),this.container&&this.container.option(b,c),this.input.option&&this.input.option(b,c),void 0))},handleEmpty:function(b){this.options.display!==!1&&(this.isEmpty=void 0!==b?b:"function"==typeof this.input.isEmpty?this.input.isEmpty(this.$element):""===a.trim(this.$element.html()),this.options.disabled?this.isEmpty&&(this.$element.empty(),this.options.emptyclass&&this.$element.removeClass(this.options.emptyclass)):this.isEmpty?(this.$element.html(this.options.emptytext),this.options.emptyclass&&this.$element.addClass(this.options.emptyclass)):this.options.emptyclass&&this.$element.removeClass(this.options.emptyclass))},show:function(b){if(!this.options.disabled){if(this.container){if(this.container.tip().is(":visible"))return}else{var c=a.extend({},this.options,{value:this.value,input:this.input});this.$element.editableContainer(c),this.$element.on("save.internal",a.proxy(this.save,this)),this.container=this.$element.data("editableContainer")}this.container.show(b)}},hide:function(){this.container&&this.container.hide()},toggle:function(a){this.container&&this.container.tip().is(":visible")?this.hide():this.show(a)},save:function(a,b){if(this.options.unsavedclass){var c=!1;c=c||"function"==typeof this.options.url,c=c||this.options.display===!1,c=c||void 0!==b.response,c=c||this.options.savenochange&&this.input.value2str(this.value)!==this.input.value2str(b.newValue),c?this.$element.removeClass(this.options.unsavedclass):this.$element.addClass(this.options.unsavedclass)}if(this.options.highlight){var d=this.$element,e=d.css("background-color");d.css("background-color",this.options.highlight),setTimeout(function(){"transparent"===e&&(e=""),d.css("background-color",e),d.addClass("editable-bg-transition"),setTimeout(function(){d.removeClass("editable-bg-transition")},1700)},10)}this.setValue(b.newValue,!1,b.response)},validate:function(){return"function"==typeof this.options.validate?this.options.validate.call(this,this.value):void 0},setValue:function(b,c,d){this.value=c?this.input.str2value(b):b,this.container&&this.container.option("value",this.value),a.when(this.render(d)).then(a.proxy(function(){this.handleEmpty()},this))},activate:function(){this.container&&this.container.activate()},destroy:function(){this.disable(),this.container&&this.container.destroy(),this.input.destroy(),"manual"!==this.options.toggle&&(this.$element.removeClass("editable-click"),this.$element.off(this.options.toggle+".editable")),this.$element.off("save.internal"),this.$element.removeClass("editable editable-open editable-disabled"),this.$element.removeData("editable")}},a.fn.editable=function(c){var d={},e=arguments,f="editable";switch(c){case"validate":return this.each(function(){var b,c=a(this),e=c.data(f);e&&(b=e.validate())&&(d[e.options.name]=b)}),d;case"getValue":return 2===arguments.length&&arguments[1]===!0?d=this.eq(0).data(f).value:this.each(function(){var b=a(this),c=b.data(f);c&&void 0!==c.value&&null!==c.value&&(d[c.options.name]=c.input.value2submit(c.value))}),d;case"submit":var g=arguments[1]||{},h=this,i=this.editable("validate");if(a.isEmptyObject(i)){var j={};if(1===h.length){var k=h.data("editable"),l={name:k.options.name||"",value:k.input.value2submit(k.value),pk:"function"==typeof k.options.pk?k.options.pk.call(k.options.scope):k.options.pk};"function"==typeof k.options.params?l=k.options.params.call(k.options.scope,l):(k.options.params=a.fn.editableutils.tryParseJson(k.options.params,!0),a.extend(l,k.options.params)),j={url:k.options.url,data:l,type:"POST"},g.success=g.success||k.options.success,g.error=g.error||k.options.error}else{var m=this.editable("getValue");j={url:g.url,data:m,type:"POST"}}j.success="function"==typeof g.success?function(a){g.success.call(h,a,g)}:a.noop,j.error="function"==typeof g.error?function(){g.error.apply(h,arguments)}:a.noop,g.ajaxOptions&&a.extend(j,g.ajaxOptions),g.data&&a.extend(j.data,g.data),a.ajax(j)}else"function"==typeof g.error&&g.error.call(h,i);return this}return this.each(function(){var d=a(this),g=d.data(f),h="object"==typeof c&&c;return h&&h.selector?(g=new b(this,h),void 0):(g||d.data(f,g=new b(this,h)),"string"==typeof c&&g[c].apply(g,Array.prototype.slice.call(e,1)),void 0)})},a.fn.editable.defaults={type:"text",disabled:!1,toggle:"click",emptytext:"Empty",autotext:"auto",value:null,display:null,emptyclass:"editable-empty",unsavedclass:"editable-unsaved",selector:null,highlight:"#FFFF80"}}(window.jQuery),function(a){"use strict";a.fn.editabletypes={};var b=function(){};b.prototype={init:function(b,c,d){this.type=b,this.options=a.extend({},d,c)},prerender:function(){this.$tpl=a(this.options.tpl),this.$input=this.$tpl,this.$clear=null,this.error=null},render:function(){},value2html:function(b,c){a(c)[this.options.escape?"text":"html"](a.trim(b))},html2value:function(b){return a("<div>").html(b).text()},value2str:function(a){return a},str2value:function(a){return a},value2submit:function(a){return a},value2input:function(a){this.$input.val(a)},input2value:function(){return this.$input.val()},activate:function(){this.$input.is(":visible")&&this.$input.focus()},clear:function(){this.$input.val(null)},escape:function(b){return a("<div>").text(b).html()},autosubmit:function(){},destroy:function(){},setClass:function(){this.options.inputclass&&this.$input.addClass(this.options.inputclass)},setAttr:function(a){void 0!==this.options[a]&&null!==this.options[a]&&this.$input.attr(a,this.options[a])},option:function(a,b){this.options[a]=b}},b.defaults={tpl:"",inputclass:null,escape:!0,scope:null,showbuttons:!0},a.extend(a.fn.editabletypes,{abstractinput:b})}(window.jQuery),function(a){"use strict";var b=function(){};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{render:function(){var b=a.Deferred();return this.error=null,this.onSourceReady(function(){this.renderList(),b.resolve()},function(){this.error=this.options.sourceError,b.resolve()}),b.promise()},html2value:function(){return null},value2html:function(b,c,d,e){var f=a.Deferred(),g=function(){"function"==typeof d?d.call(c,b,this.sourceData,e):this.value2htmlFinal(b,c),f.resolve()};return null===b?g.call(this):this.onSourceReady(g,function(){f.resolve()}),f.promise()},onSourceReady:function(b,c){var d;if(a.isFunction(this.options.source)?(d=this.options.source.call(this.options.scope),this.sourceData=null):d=this.options.source,this.options.sourceCache&&a.isArray(this.sourceData))return b.call(this),void 0;try{d=a.fn.editableutils.tryParseJson(d,!1)}catch(e){return c.call(this),void 0}if("string"==typeof d){if(this.options.sourceCache){var f,g=d;if(a(document).data(g)||a(document).data(g,{}),f=a(document).data(g),f.loading===!1&&f.sourceData)return this.sourceData=f.sourceData,this.doPrepend(),b.call(this),void 0;if(f.loading===!0)return f.callbacks.push(a.proxy(function(){this.sourceData=f.sourceData,this.doPrepend(),b.call(this)},this)),f.err_callbacks.push(a.proxy(c,this)),void 0;f.loading=!0,f.callbacks=[],f.err_callbacks=[]}var h=a.extend({url:d,type:"get",cache:!1,dataType:"json",success:a.proxy(function(d){f&&(f.loading=!1),this.sourceData=this.makeArray(d),a.isArray(this.sourceData)?(f&&(f.sourceData=this.sourceData,a.each(f.callbacks,function(){this.call()})),this.doPrepend(),b.call(this)):(c.call(this),f&&a.each(f.err_callbacks,function(){this.call()}))},this),error:a.proxy(function(){c.call(this),f&&(f.loading=!1,a.each(f.err_callbacks,function(){this.call()}))},this)},this.options.sourceOptions);a.ajax(h)}else this.sourceData=this.makeArray(d),a.isArray(this.sourceData)?(this.doPrepend(),b.call(this)):c.call(this)},doPrepend:function(){null!==this.options.prepend&&void 0!==this.options.prepend&&(a.isArray(this.prependData)||(a.isFunction(this.options.prepend)&&(this.options.prepend=this.options.prepend.call(this.options.scope)),this.options.prepend=a.fn.editableutils.tryParseJson(this.options.prepend,!0),"string"==typeof this.options.prepend&&(this.options.prepend={"":this.options.prepend}),this.prependData=this.makeArray(this.options.prepend)),a.isArray(this.prependData)&&a.isArray(this.sourceData)&&(this.sourceData=this.prependData.concat(this.sourceData)))},renderList:function(){},value2htmlFinal:function(){},makeArray:function(b){var c,d,e,f,g=[];if(!b||"string"==typeof b)return null;if(a.isArray(b)){f=function(a,b){return d={value:a,text:b},c++>=2?!1:void 0};for(var h=0;h<b.length;h++)e=b[h],"object"==typeof e?(c=0,a.each(e,f),1===c?g.push(d):c>1&&(e.children&&(e.children=this.makeArray(e.children)),g.push(e))):g.push({value:e,text:e})}else a.each(b,function(a,b){g.push({value:a,text:b})});return g},option:function(a,b){this.options[a]=b,"source"===a&&(this.sourceData=null),"prepend"===a&&(this.prependData=null)}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{source:null,prepend:!1,sourceError:"Error when loading list",sourceCache:!0,sourceOptions:null}),a.fn.editabletypes.list=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("text",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{render:function(){this.renderClear(),this.setClass(),this.setAttr("placeholder")},activate:function(){this.$input.is(":visible")&&(this.$input.focus(),a.fn.editableutils.setCursorPosition(this.$input.get(0),this.$input.val().length),this.toggleClear&&this.toggleClear())},renderClear:function(){this.options.clear&&(this.$clear=a('<span class="editable-clear-x"></span>'),this.$input.after(this.$clear).css("padding-right",24).keyup(a.proxy(function(b){if(!~a.inArray(b.keyCode,[40,38,9,13,27])){clearTimeout(this.t);var c=this;this.t=setTimeout(function(){c.toggleClear(b)},100)}},this)).parent().css("position","relative"),this.$clear.click(a.proxy(this.clear,this)))},postrender:function(){},toggleClear:function(){if(this.$clear){var a=this.$input.val().length,b=this.$clear.is(":visible");a&&!b&&this.$clear.show(),!a&&b&&this.$clear.hide()}},clear:function(){this.$clear.hide(),this.$input.val("").focus()}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{tpl:'<input type="text">',placeholder:null,clear:!0}),a.fn.editabletypes.text=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("textarea",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{render:function(){this.setClass(),this.setAttr("placeholder"),this.setAttr("rows"),this.$input.keydown(function(b){b.ctrlKey&&13===b.which&&a(this).closest("form").submit()})},activate:function(){a.fn.editabletypes.text.prototype.activate.call(this)}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{tpl:"<textarea></textarea>",inputclass:"input-large",placeholder:null,rows:7}),a.fn.editabletypes.textarea=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("select",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.list),a.extend(b.prototype,{renderList:function(){this.$input.empty();var b=function(c,d){var e;if(a.isArray(d))for(var f=0;f<d.length;f++)e={},d[f].children?(e.label=d[f].text,c.append(b(a("<optgroup>",e),d[f].children))):(e.value=d[f].value,d[f].disabled&&(e.disabled=!0),c.append(a("<option>",e).text(d[f].text)));return c};b(this.$input,this.sourceData),this.setClass(),this.$input.on("keydown.editable",function(b){13===b.which&&a(this).closest("form").submit()})},value2htmlFinal:function(b,c){var d="",e=a.fn.editableutils.itemsByValue(b,this.sourceData);e.length&&(d=e[0].text),a.fn.editabletypes.abstractinput.prototype.value2html.call(this,d,c)},autosubmit:function(){this.$input.off("keydown.editable").on("change.editable",function(){a(this).closest("form").submit()})}}),b.defaults=a.extend({},a.fn.editabletypes.list.defaults,{tpl:"<select></select>"}),a.fn.editabletypes.select=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("checklist",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.list),a.extend(b.prototype,{renderList:function(){var b;if(this.$tpl.empty(),a.isArray(this.sourceData)){for(var c=0;c<this.sourceData.length;c++)b=a("<label>").append(a("<input>",{type:"checkbox",value:this.sourceData[c].value})).append(a("<span>").text(" "+this.sourceData[c].text)),a("<div>").append(b).appendTo(this.$tpl);this.$input=this.$tpl.find('input[type="checkbox"]'),this.setClass()}},value2str:function(b){return a.isArray(b)?b.sort().join(a.trim(this.options.separator)):""},str2value:function(b){var c,d=null;return"string"==typeof b&&b.length?(c=new RegExp("\\s*"+a.trim(this.options.separator)+"\\s*"),d=b.split(c)):d=a.isArray(b)?b:[b],d},value2input:function(b){this.$input.prop("checked",!1),a.isArray(b)&&b.length&&this.$input.each(function(c,d){var e=a(d);a.each(b,function(a,b){e.val()==b&&e.prop("checked",!0)})})},input2value:function(){var b=[];return this.$input.filter(":checked").each(function(c,d){b.push(a(d).val())}),b},value2htmlFinal:function(b,c){var d=[],e=a.fn.editableutils.itemsByValue(b,this.sourceData),f=this.options.escape;e.length?(a.each(e,function(b,c){var e=f?a.fn.editableutils.escape(c.text):c.text;d.push(e)}),a(c).html(d.join("<br>"))):a(c).empty()},activate:function(){this.$input.first().focus()},autosubmit:function(){this.$input.on("keydown",function(b){13===b.which&&a(this).closest("form").submit()})}}),b.defaults=a.extend({},a.fn.editabletypes.list.defaults,{tpl:'<div class="editable-checklist"></div>',inputclass:null,separator:","}),a.fn.editabletypes.checklist=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("password",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.text),a.extend(b.prototype,{value2html:function(b,c){b?a(c).text("[hidden]"):a(c).empty()},html2value:function(){return null}}),b.defaults=a.extend({},a.fn.editabletypes.text.defaults,{tpl:'<input type="password">'}),a.fn.editabletypes.password=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("email",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.text),b.defaults=a.extend({},a.fn.editabletypes.text.defaults,{tpl:'<input type="email">'}),a.fn.editabletypes.email=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("url",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.text),b.defaults=a.extend({},a.fn.editabletypes.text.defaults,{tpl:'<input type="url">'}),a.fn.editabletypes.url=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("tel",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.text),b.defaults=a.extend({},a.fn.editabletypes.text.defaults,{tpl:'<input type="tel">'}),a.fn.editabletypes.tel=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("number",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.text),a.extend(b.prototype,{render:function(){b.superclass.render.call(this),this.setAttr("min"),this.setAttr("max"),this.setAttr("step")},postrender:function(){this.$clear&&this.$clear.css({right:24})}}),b.defaults=a.extend({},a.fn.editabletypes.text.defaults,{tpl:'<input type="number">',inputclass:"input-mini",min:null,max:null,step:null}),a.fn.editabletypes.number=b}(window.jQuery),function(a){"use strict";
var b=function(a){this.init("range",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.number),a.extend(b.prototype,{render:function(){this.$input=this.$tpl.filter("input"),this.setClass(),this.setAttr("min"),this.setAttr("max"),this.setAttr("step"),this.$input.on("input",function(){a(this).siblings("output").text(a(this).val())})},activate:function(){this.$input.focus()}}),b.defaults=a.extend({},a.fn.editabletypes.number.defaults,{tpl:'<input type="range"><output style="width: 30px; display: inline-block"></output>',inputclass:"input-medium"}),a.fn.editabletypes.range=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("time",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{render:function(){this.setClass()}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{tpl:'<input type="time">'}),a.fn.editabletypes.time=b}(window.jQuery),function(a){"use strict";var b=function(c){if(this.init("select2",c,b.defaults),c.select2=c.select2||{},this.sourceData=null,c.placeholder&&(c.select2.placeholder=c.placeholder),!c.select2.tags&&c.source){var d=c.source;a.isFunction(c.source)&&(d=c.source.call(c.scope)),"string"==typeof d?(c.select2.ajax=c.select2.ajax||{},c.select2.ajax.data||(c.select2.ajax.data=function(a){return{query:a}}),c.select2.ajax.results||(c.select2.ajax.results=function(a){return{results:a}}),c.select2.ajax.url=d):(this.sourceData=this.convertSource(d),c.select2.data=this.sourceData)}if(this.options.select2=a.extend({},b.defaults.select2,c.select2),this.isMultiple=this.options.select2.tags||this.options.select2.multiple,this.isRemote="ajax"in this.options.select2,this.idFunc=this.options.select2.id,"function"!=typeof this.idFunc){var e=this.idFunc||"id";this.idFunc=function(a){return a[e]}}this.formatSelection=this.options.select2.formatSelection,"function"!=typeof this.formatSelection&&(this.formatSelection=function(a){return a.text})};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{render:function(){this.setClass(),this.isRemote&&this.$input.on("select2-loaded",a.proxy(function(a){this.sourceData=a.items.results},this)),this.isMultiple&&this.$input.on("change",function(){a(this).closest("form").parent().triggerHandler("resize")})},value2html:function(c,d){var e,f="",g=this;this.options.select2.tags?e=c:this.sourceData&&(e=a.fn.editableutils.itemsByValue(c,this.sourceData,this.idFunc)),a.isArray(e)?(f=[],a.each(e,function(a,b){f.push(b&&"object"==typeof b?g.formatSelection(b):b)})):e&&(f=g.formatSelection(e)),f=a.isArray(f)?f.join(this.options.viewseparator):f,b.superclass.value2html.call(this,f,d)},html2value:function(a){return this.options.select2.tags?this.str2value(a,this.options.viewseparator):null},value2input:function(b){if(a.isArray(b)&&(b=b.join(this.getSeparator())),this.$input.data("select2")?this.$input.val(b).trigger("change",!0):(this.$input.val(b),this.$input.select2(this.options.select2)),this.isRemote&&!this.isMultiple&&!this.options.select2.initSelection){var c=this.options.select2.id,d=this.options.select2.formatSelection;if(!c&&!d){var e=a(this.options.scope);if(!e.data("editable").isEmpty){var f={id:b,text:e.text()};this.$input.select2("data",f)}}}},input2value:function(){return this.$input.select2("val")},str2value:function(b,c){if("string"!=typeof b||!this.isMultiple)return b;c=c||this.getSeparator();var d,e,f;if(null===b||b.length<1)return null;for(d=b.split(c),e=0,f=d.length;f>e;e+=1)d[e]=a.trim(d[e]);return d},autosubmit:function(){this.$input.on("change",function(b,c){c||a(this).closest("form").submit()})},getSeparator:function(){return this.options.select2.separator||a.fn.select2.defaults.separator},convertSource:function(b){if(a.isArray(b)&&b.length&&void 0!==b[0].value)for(var c=0;c<b.length;c++)void 0!==b[c].value&&(b[c].id=b[c].value,delete b[c].value);return b},destroy:function(){this.$input.data("select2")&&this.$input.select2("destroy")}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{tpl:'<input type="hidden">',select2:null,placeholder:null,source:null,viewseparator:", "}),a.fn.editabletypes.select2=b}(window.jQuery),function(a){var b=function(b,c){return this.$element=a(b),this.$element.is("input")?(this.options=a.extend({},a.fn.combodate.defaults,c,this.$element.data()),this.init(),void 0):(a.error("Combodate should be applied to INPUT element"),void 0)};b.prototype={constructor:b,init:function(){this.map={day:["D","date"],month:["M","month"],year:["Y","year"],hour:["[Hh]","hours"],minute:["m","minutes"],second:["s","seconds"],ampm:["[Aa]",""]},this.$widget=a('<span class="combodate"></span>').html(this.getTemplate()),this.initCombos(),this.$widget.on("change","select",a.proxy(function(b){this.$element.val(this.getValue()).change(),this.options.smartDays&&(a(b.target).is(".month")||a(b.target).is(".year"))&&this.fillCombo("day")},this)),this.$widget.find("select").css("width","auto"),this.$element.hide().after(this.$widget),this.setValue(this.$element.val()||this.options.value)},getTemplate:function(){var b=this.options.template;return a.each(this.map,function(a,c){c=c[0];var d=new RegExp(c+"+"),e=c.length>1?c.substring(1,2):c;b=b.replace(d,"{"+e+"}")}),b=b.replace(/ /g,"&nbsp;"),a.each(this.map,function(a,c){c=c[0];var d=c.length>1?c.substring(1,2):c;b=b.replace("{"+d+"}",'<select class="'+a+'"></select>')}),b},initCombos:function(){for(var a in this.map){var b=this.$widget.find("."+a);this["$"+a]=b.length?b:null,this.fillCombo(a)}},fillCombo:function(a){var b=this["$"+a];if(b){var c="fill"+a.charAt(0).toUpperCase()+a.slice(1),d=this[c](),e=b.val();b.empty();for(var f=0;f<d.length;f++)b.append('<option value="'+d[f][0]+'">'+d[f][1]+"</option>");b.val(e)}},fillCommon:function(a){var b,c=[];if("name"===this.options.firstItem){b=moment.relativeTime||moment.langData()._relativeTime;var d="function"==typeof b[a]?b[a](1,!0,a,!1):b[a];d=d.split(" ").reverse()[0],c.push(["",d])}else"empty"===this.options.firstItem&&c.push(["",""]);return c},fillDay:function(){var a,b,c=this.fillCommon("d"),d=-1!==this.options.template.indexOf("DD"),e=31;if(this.options.smartDays&&this.$month&&this.$year){var f=parseInt(this.$month.val(),10),g=parseInt(this.$year.val(),10);isNaN(f)||isNaN(g)||(e=moment([g,f]).daysInMonth())}for(b=1;e>=b;b++)a=d?this.leadZero(b):b,c.push([b,a]);return c},fillMonth:function(){var a,b,c=this.fillCommon("M"),d=-1!==this.options.template.indexOf("MMMM"),e=-1!==this.options.template.indexOf("MMM"),f=-1!==this.options.template.indexOf("MM");for(b=0;11>=b;b++)a=d?moment().date(1).month(b).format("MMMM"):e?moment().date(1).month(b).format("MMM"):f?this.leadZero(b+1):b+1,c.push([b,a]);return c},fillYear:function(){var a,b,c=[],d=-1!==this.options.template.indexOf("YYYY");for(b=this.options.maxYear;b>=this.options.minYear;b--)a=d?b:(b+"").substring(2),c[this.options.yearDescending?"push":"unshift"]([b,a]);return c=this.fillCommon("y").concat(c)},fillHour:function(){var a,b,c=this.fillCommon("h"),d=-1!==this.options.template.indexOf("h"),e=(-1!==this.options.template.indexOf("H"),-1!==this.options.template.toLowerCase().indexOf("hh")),f=d?1:0,g=d?12:23;for(b=f;g>=b;b++)a=e?this.leadZero(b):b,c.push([b,a]);return c},fillMinute:function(){var a,b,c=this.fillCommon("m"),d=-1!==this.options.template.indexOf("mm");for(b=0;59>=b;b+=this.options.minuteStep)a=d?this.leadZero(b):b,c.push([b,a]);return c},fillSecond:function(){var a,b,c=this.fillCommon("s"),d=-1!==this.options.template.indexOf("ss");for(b=0;59>=b;b+=this.options.secondStep)a=d?this.leadZero(b):b,c.push([b,a]);return c},fillAmpm:function(){var a=-1!==this.options.template.indexOf("a"),b=(-1!==this.options.template.indexOf("A"),[["am",a?"am":"AM"],["pm",a?"pm":"PM"]]);return b},getValue:function(b){var c,d={},e=this,f=!1;return a.each(this.map,function(a){if("ampm"!==a){var b="day"===a?1:0;return d[a]=e["$"+a]?parseInt(e["$"+a].val(),10):b,isNaN(d[a])?(f=!0,!1):void 0}}),f?"":(this.$ampm&&(d.hour=12===d.hour?"am"===this.$ampm.val()?0:12:"am"===this.$ampm.val()?d.hour:d.hour+12),c=moment([d.year,d.month,d.day,d.hour,d.minute,d.second]),this.highlight(c),b=void 0===b?this.options.format:b,null===b?c.isValid()?c:null:c.isValid()?c.format(b):"")},setValue:function(b){function c(b,c){var d={};return b.children("option").each(function(b,e){var f,g=a(e).attr("value");""!==g&&(f=Math.abs(g-c),("undefined"==typeof d.distance||f<d.distance)&&(d={value:g,distance:f}))}),d.value}if(b){var d="string"==typeof b?moment(b,this.options.format):moment(b),e=this,f={};d.isValid()&&(a.each(this.map,function(a,b){"ampm"!==a&&(f[a]=d[b[1]]())}),this.$ampm&&(f.hour>=12?(f.ampm="pm",f.hour>12&&(f.hour-=12)):(f.ampm="am",0===f.hour&&(f.hour=12))),a.each(f,function(a,b){e["$"+a]&&("minute"===a&&e.options.minuteStep>1&&e.options.roundTime&&(b=c(e["$"+a],b)),"second"===a&&e.options.secondStep>1&&e.options.roundTime&&(b=c(e["$"+a],b)),e["$"+a].val(b))}),this.options.smartDays&&this.fillCombo("day"),this.$element.val(d.format(this.options.format)).change())}},highlight:function(a){a.isValid()?this.options.errorClass?this.$widget.removeClass(this.options.errorClass):this.$widget.find("select").css("border-color",this.borderColor):this.options.errorClass?this.$widget.addClass(this.options.errorClass):(this.borderColor||(this.borderColor=this.$widget.find("select").css("border-color")),this.$widget.find("select").css("border-color","red"))},leadZero:function(a){return 9>=a?"0"+a:a},destroy:function(){this.$widget.remove(),this.$element.removeData("combodate").show()}},a.fn.combodate=function(c){var d,e=Array.apply(null,arguments);return e.shift(),"getValue"===c&&this.length&&(d=this.eq(0).data("combodate"))?d.getValue.apply(d,e):this.each(function(){var d=a(this),f=d.data("combodate"),g="object"==typeof c&&c;f||d.data("combodate",f=new b(this,g)),"string"==typeof c&&"function"==typeof f[c]&&f[c].apply(f,e)})},a.fn.combodate.defaults={format:"DD-MM-YYYY HH:mm",template:"D / MMM / YYYY   H : mm",value:null,minYear:1970,maxYear:2015,yearDescending:!0,minuteStep:5,secondStep:1,firstItem:"empty",errorClass:null,roundTime:!0,smartDays:!1}}(window.jQuery),function(a){"use strict";var b=function(c){this.init("combodate",c,b.defaults),this.options.viewformat||(this.options.viewformat=this.options.format),c.combodate=a.fn.editableutils.tryParseJson(c.combodate,!0),this.options.combodate=a.extend({},b.defaults.combodate,c.combodate,{format:this.options.format,template:this.options.template})};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{render:function(){this.$input.combodate(this.options.combodate),"bs3"===a.fn.editableform.engine&&this.$input.siblings().find("select").addClass("form-control"),this.options.inputclass&&this.$input.siblings().find("select").addClass(this.options.inputclass)},value2html:function(a,c){var d=a?a.format(this.options.viewformat):"";b.superclass.value2html.call(this,d,c)},html2value:function(a){return a?moment(a,this.options.viewformat):null},value2str:function(a){return a?a.format(this.options.format):""},str2value:function(a){return a?moment(a,this.options.format):null},value2submit:function(a){return this.value2str(a)},value2input:function(a){this.$input.combodate("setValue",a)},input2value:function(){return this.$input.combodate("getValue",null)},activate:function(){this.$input.siblings(".combodate").find("select").eq(0).focus()},autosubmit:function(){}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{tpl:'<input type="text">',inputclass:null,format:"YYYY-MM-DD",viewformat:null,template:"D / MMM / YYYY",combodate:null}),a.fn.editabletypes.combodate=b}(window.jQuery),function(a){"use strict";var b=a.fn.editableform.Constructor.prototype.initInput;a.extend(a.fn.editableform.Constructor.prototype,{initTemplate:function(){this.$form=a(a.fn.editableform.template),this.$form.find(".control-group").addClass("form-group"),this.$form.find(".editable-error-block").addClass("help-block")},initInput:function(){b.apply(this);var c=null===this.input.options.inputclass||this.input.options.inputclass===!1,d="input-sm",e="text,select,textarea,password,email,url,tel,number,range,time,typeaheadjs".split(",");~a.inArray(this.input.type,e)&&(this.input.$input.addClass("form-control"),c&&(this.input.options.inputclass=d,this.input.$input.addClass(d)));for(var f=this.$form.find(".editable-buttons"),g=c?[d]:this.input.options.inputclass.split(" "),h=0;h<g.length;h++)"input-lg"===g[h].toLowerCase()&&f.find("button").removeClass("btn-sm").addClass("btn-lg")}}),a.fn.editableform.buttons='<button type="submit" class="btn btn-primary btn-sm editable-submit"><i class="glyphicon glyphicon-ok"></i></button><button type="button" class="btn btn-default btn-sm editable-cancel"><i class="glyphicon glyphicon-remove"></i></button>',a.fn.editableform.errorGroupClass="has-error",a.fn.editableform.errorBlockClass=null,a.fn.editableform.engine="bs3"}(window.jQuery),function(a){"use strict";a.extend(a.fn.editableContainer.Popup.prototype,{containerName:"popover",containerDataName:"bs.popover",innerCss:".popover-content",defaults:a.fn.popover.Constructor.DEFAULTS,initContainer:function(){a.extend(this.containerOptions,{trigger:"manual",selector:!1,content:" ",template:this.defaults.template});var b;this.$element.data("template")&&(b=this.$element.data("template"),this.$element.removeData("template")),this.call(this.containerOptions),b&&this.$element.data("template",b)},innerShow:function(){this.call("show")},innerHide:function(){this.call("hide")},innerDestroy:function(){this.call("destroy")},setContainerOption:function(a,b){this.container().options[a]=b},setPosition:function(){!function(){var a=this.tip(),b="function"==typeof this.options.placement?this.options.placement.call(this,a[0],this.$element[0]):this.options.placement,c=/\s?auto?\s?/i,d=c.test(b);d&&(b=b.replace(c,"")||"top");var e=this.getPosition(),f=a[0].offsetWidth,g=a[0].offsetHeight;if(d){var h=this.$element.parent(),i=b,j=document.documentElement.scrollTop||document.body.scrollTop,k="body"==this.options.container?window.innerWidth:h.outerWidth(),l="body"==this.options.container?window.innerHeight:h.outerHeight(),m="body"==this.options.container?0:h.offset().left;b="bottom"==b&&e.top+e.height+g-j>l?"top":"top"==b&&e.top-j-g<0?"bottom":"right"==b&&e.right+f>k?"left":"left"==b&&e.left-f<m?"right":b,a.removeClass(i).addClass(b)}var n=this.getCalculatedOffset(b,e,f,g);this.applyPlacement(n,b)}.call(this.container())}})}(window.jQuery),function(a){function b(){return new Date(Date.UTC.apply(Date,arguments))}function c(b,c){var d,e=a(b).data(),f={},g=new RegExp("^"+c.toLowerCase()+"([A-Z])"),c=new RegExp("^"+c.toLowerCase());for(var h in e)c.test(h)&&(d=h.replace(g,function(a,b){return b.toLowerCase()}),f[d]=e[h]);return f}function d(b){var c={};if(k[b]||(b=b.split("-")[0],k[b])){var d=k[b];return a.each(j,function(a,b){b in d&&(c[b]=d[b])}),c}}var e=function(b,c){this._process_options(c),this.element=a(b),this.isInline=!1,this.isInput=this.element.is("input"),this.component=this.element.is(".date")?this.element.find(".add-on, .btn"):!1,this.hasInput=this.component&&this.element.find("input").length,this.component&&0===this.component.length&&(this.component=!1),this.picker=a(l.template),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&(this.picker.addClass("datepicker-rtl"),this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right")),this.viewMode=this.o.startView,this.o.calendarWeeks&&this.picker.find("tfoot th.today").attr("colspan",function(a,b){return parseInt(b)+1}),this._allow_update=!1,this.setStartDate(this.o.startDate),this.setEndDate(this.o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.showMode(),this.isInline&&this.show()};e.prototype={constructor:e,_process_options:function(b){this._o=a.extend({},this._o,b);var c=this.o=a.extend({},this._o),d=c.language;switch(k[d]||(d=d.split("-")[0],k[d]||(d=i.language)),c.language=d,c.startView){case 2:case"decade":c.startView=2;break;case 1:case"year":c.startView=1;break;default:c.startView=0}switch(c.minViewMode){case 1:case"months":c.minViewMode=1;break;case 2:case"years":c.minViewMode=2;break;default:c.minViewMode=0}c.startView=Math.max(c.startView,c.minViewMode),c.weekStart%=7,c.weekEnd=(c.weekStart+6)%7;var e=l.parseFormat(c.format);c.startDate!==-1/0&&(c.startDate=l.parseDate(c.startDate,e,c.language)),1/0!==c.endDate&&(c.endDate=l.parseDate(c.endDate,e,c.language)),c.daysOfWeekDisabled=c.daysOfWeekDisabled||[],a.isArray(c.daysOfWeekDisabled)||(c.daysOfWeekDisabled=c.daysOfWeekDisabled.split(/[,\s]*/)),c.daysOfWeekDisabled=a.map(c.daysOfWeekDisabled,function(a){return parseInt(a,10)})},_events:[],_secondaryEvents:[],_applyEvents:function(a){for(var b,c,d=0;d<a.length;d++)b=a[d][0],c=a[d][1],b.on(c)},_unapplyEvents:function(a){for(var b,c,d=0;d<a.length;d++)b=a[d][0],c=a[d][1],b.off(c)},_buildEvents:function(){this.isInput?this._events=[[this.element,{focus:a.proxy(this.show,this),keyup:a.proxy(this.update,this),keydown:a.proxy(this.keydown,this)}]]:this.component&&this.hasInput?this._events=[[this.element.find("input"),{focus:a.proxy(this.show,this),keyup:a.proxy(this.update,this),keydown:a.proxy(this.keydown,this)}],[this.component,{click:a.proxy(this.show,this)}]]:this.element.is("div")?this.isInline=!0:this._events=[[this.element,{click:a.proxy(this.show,this)}]],this._secondaryEvents=[[this.picker,{click:a.proxy(this.click,this)}],[a(window),{resize:a.proxy(this.place,this)}],[a(document),{mousedown:a.proxy(function(a){this.element.is(a.target)||this.element.find(a.target).size()||this.picker.is(a.target)||this.picker.find(a.target).size()||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(b,c){var d=c||this.date,e=new Date(d.getTime()+6e4*d.getTimezoneOffset());this.element.trigger({type:b,date:e,format:a.proxy(function(a){var b=a||this.o.format;return l.formatDate(d,b,this.o.language)},this)})},show:function(a){this.isInline||this.picker.appendTo("body"),this.picker.show(),this.height=this.component?this.component.outerHeight():this.element.outerHeight(),this.place(),this._attachSecondaryEvents(),a&&a.preventDefault(),this._trigger("show")},hide:function(){this.isInline||this.picker.is(":visible")&&(this.picker.hide().detach(),this._detachSecondaryEvents(),this.viewMode=this.o.startView,this.showMode(),this.o.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())&&this.setValue(),this._trigger("hide"))},remove:function(){this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date},getDate:function(){var a=this.getUTCDate();return new Date(a.getTime()+6e4*a.getTimezoneOffset())},getUTCDate:function(){return this.date},setDate:function(a){this.setUTCDate(new Date(a.getTime()-6e4*a.getTimezoneOffset()))},setUTCDate:function(a){this.date=a,this.setValue()},setValue:function(){var a=this.getFormattedDate();this.isInput?this.element.val(a):this.component&&this.element.find("input").val(a)},getFormattedDate:function(a){return void 0===a&&(a=this.o.format),l.formatDate(this.date,a,this.o.language)},setStartDate:function(a){this._process_options({startDate:a}),this.update(),this.updateNavArrows()},setEndDate:function(a){this._process_options({endDate:a}),this.update(),this.updateNavArrows()},setDaysOfWeekDisabled:function(a){this._process_options({daysOfWeekDisabled:a}),this.update(),this.updateNavArrows()},place:function(){if(!this.isInline){var b=parseInt(this.element.parents().filter(function(){return"auto"!=a(this).css("z-index")}).first().css("z-index"))+10,c=this.component?this.component.parent().offset():this.element.offset(),d=this.component?this.component.outerHeight(!0):this.element.outerHeight(!0);this.picker.css({top:c.top+d,left:c.left,zIndex:b})}},_allow_update:!0,update:function(){if(this._allow_update){var a,b=!1;arguments&&arguments.length&&("string"==typeof arguments[0]||arguments[0]instanceof Date)?(a=arguments[0],b=!0):(a=this.isInput?this.element.val():this.element.data("date")||this.element.find("input").val(),delete this.element.data().date),this.date=l.parseDate(a,this.o.format,this.o.language),b&&this.setValue(),this.viewDate=this.date<this.o.startDate?new Date(this.o.startDate):this.date>this.o.endDate?new Date(this.o.endDate):new Date(this.date),this.fill()}},fillDow:function(){var a=this.o.weekStart,b="<tr>";if(this.o.calendarWeeks){var c='<th class="cw">&nbsp;</th>';b+=c,this.picker.find(".datepicker-days thead tr:first-child").prepend(c)}for(;a<this.o.weekStart+7;)b+='<th class="dow">'+k[this.o.language].daysMin[a++%7]+"</th>";b+="</tr>",this.picker.find(".datepicker-days thead").append(b)},fillMonths:function(){for(var a="",b=0;12>b;)a+='<span class="month">'+k[this.o.language].monthsShort[b++]+"</span>";this.picker.find(".datepicker-months td").html(a)},setRange:function(b){b&&b.length?this.range=a.map(b,function(a){return a.valueOf()}):delete this.range,this.fill()},getClassNames:function(b){var c=[],d=this.viewDate.getUTCFullYear(),e=this.viewDate.getUTCMonth(),f=this.date.valueOf(),g=new Date;return b.getUTCFullYear()<d||b.getUTCFullYear()==d&&b.getUTCMonth()<e?c.push("old"):(b.getUTCFullYear()>d||b.getUTCFullYear()==d&&b.getUTCMonth()>e)&&c.push("new"),this.o.todayHighlight&&b.getUTCFullYear()==g.getFullYear()&&b.getUTCMonth()==g.getMonth()&&b.getUTCDate()==g.getDate()&&c.push("today"),f&&b.valueOf()==f&&c.push("active"),(b.valueOf()<this.o.startDate||b.valueOf()>this.o.endDate||-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekDisabled))&&c.push("disabled"),this.range&&(b>this.range[0]&&b<this.range[this.range.length-1]&&c.push("range"),-1!=a.inArray(b.valueOf(),this.range)&&c.push("selected")),c},fill:function(){var c,d=new Date(this.viewDate),e=d.getUTCFullYear(),f=d.getUTCMonth(),g=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,h=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,i=1/0!==this.o.endDate?this.o.endDate.getUTCFullYear():1/0,j=1/0!==this.o.endDate?this.o.endDate.getUTCMonth():1/0;this.date&&this.date.valueOf(),this.picker.find(".datepicker-days thead th.datepicker-switch").text(k[this.o.language].months[f]+" "+e),this.picker.find("tfoot th.today").text(k[this.o.language].today).toggle(this.o.todayBtn!==!1),this.picker.find("tfoot th.clear").text(k[this.o.language].clear).toggle(this.o.clearBtn!==!1),this.updateNavArrows(),this.fillMonths();var m=b(e,f-1,28,0,0,0,0),n=l.getDaysInMonth(m.getUTCFullYear(),m.getUTCMonth());m.setUTCDate(n),m.setUTCDate(n-(m.getUTCDay()-this.o.weekStart+7)%7);var o=new Date(m);o.setUTCDate(o.getUTCDate()+42),o=o.valueOf();for(var p,q=[];m.valueOf()<o;){if(m.getUTCDay()==this.o.weekStart&&(q.push("<tr>"),this.o.calendarWeeks)){var r=new Date(+m+864e5*((this.o.weekStart-m.getUTCDay()-7)%7)),s=new Date(+r+864e5*((11-r.getUTCDay())%7)),t=new Date(+(t=b(s.getUTCFullYear(),0,1))+864e5*((11-t.getUTCDay())%7)),u=(s-t)/864e5/7+1;q.push('<td class="cw">'+u+"</td>")}p=this.getClassNames(m),p.push("day");var v=this.o.beforeShowDay(m);void 0===v?v={}:"boolean"==typeof v?v={enabled:v}:"string"==typeof v&&(v={classes:v}),v.enabled===!1&&p.push("disabled"),v.classes&&(p=p.concat(v.classes.split(/\s+/))),v.tooltip&&(c=v.tooltip),p=a.unique(p),q.push('<td class="'+p.join(" ")+'"'+(c?' title="'+c+'"':"")+">"+m.getUTCDate()+"</td>"),m.getUTCDay()==this.o.weekEnd&&q.push("</tr>"),m.setUTCDate(m.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(q.join(""));var w=this.date&&this.date.getUTCFullYear(),x=this.picker.find(".datepicker-months").find("th:eq(1)").text(e).end().find("span").removeClass("active");w&&w==e&&x.eq(this.date.getUTCMonth()).addClass("active"),(g>e||e>i)&&x.addClass("disabled"),e==g&&x.slice(0,h).addClass("disabled"),e==i&&x.slice(j+1).addClass("disabled"),q="",e=10*parseInt(e/10,10);var y=this.picker.find(".datepicker-years").find("th:eq(1)").text(e+"-"+(e+9)).end().find("td");e-=1;for(var z=-1;11>z;z++)q+='<span class="year'+(-1==z?" old":10==z?" new":"")+(w==e?" active":"")+(g>e||e>i?" disabled":"")+'">'+e+"</span>",e+=1;y.html(q)},updateNavArrows:function(){if(this._allow_update){var a=new Date(this.viewDate),b=a.getUTCFullYear(),c=a.getUTCMonth();switch(this.viewMode){case 0:this.o.startDate!==-1/0&&b<=this.o.startDate.getUTCFullYear()&&c<=this.o.startDate.getUTCMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),1/0!==this.o.endDate&&b>=this.o.endDate.getUTCFullYear()&&c>=this.o.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:case 2:this.o.startDate!==-1/0&&b<=this.o.startDate.getUTCFullYear()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),1/0!==this.o.endDate&&b>=this.o.endDate.getUTCFullYear()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})}}},click:function(c){c.preventDefault();var d=a(c.target).closest("span, td, th");if(1==d.length)switch(d[0].nodeName.toLowerCase()){case"th":switch(d[0].className){case"datepicker-switch":this.showMode(1);break;case"prev":case"next":var e=l.modes[this.viewMode].navStep*("prev"==d[0].className?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,e);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,e)}this.fill();break;case"today":var f=new Date;f=b(f.getFullYear(),f.getMonth(),f.getDate(),0,0,0),this.showMode(-2);var g="linked"==this.o.todayBtn?null:"view";this._setDate(f,g);break;case"clear":var h;this.isInput?h=this.element:this.component&&(h=this.element.find("input")),h&&h.val("").change(),this._trigger("changeDate"),this.update(),this.o.autoclose&&this.hide()}break;case"span":if(!d.is(".disabled")){if(this.viewDate.setUTCDate(1),d.is(".month")){var i=1,j=d.parent().find("span").index(d),k=this.viewDate.getUTCFullYear();this.viewDate.setUTCMonth(j),this._trigger("changeMonth",this.viewDate),1===this.o.minViewMode&&this._setDate(b(k,j,i,0,0,0,0))}else{var k=parseInt(d.text(),10)||0,i=1,j=0;this.viewDate.setUTCFullYear(k),this._trigger("changeYear",this.viewDate),2===this.o.minViewMode&&this._setDate(b(k,j,i,0,0,0,0))}this.showMode(-1),this.fill()}break;case"td":if(d.is(".day")&&!d.is(".disabled")){var i=parseInt(d.text(),10)||1,k=this.viewDate.getUTCFullYear(),j=this.viewDate.getUTCMonth();d.is(".old")?0===j?(j=11,k-=1):j-=1:d.is(".new")&&(11==j?(j=0,k+=1):j+=1),this._setDate(b(k,j,i,0,0,0,0))}}},_setDate:function(a,b){b&&"date"!=b||(this.date=new Date(a)),b&&"view"!=b||(this.viewDate=new Date(a)),this.fill(),this.setValue(),this._trigger("changeDate");var c;this.isInput?c=this.element:this.component&&(c=this.element.find("input")),c&&(c.change(),!this.o.autoclose||b&&"date"!=b||this.hide())},moveMonth:function(a,b){if(!b)return a;var c,d,e=new Date(a.valueOf()),f=e.getUTCDate(),g=e.getUTCMonth(),h=Math.abs(b);if(b=b>0?1:-1,1==h)d=-1==b?function(){return e.getUTCMonth()==g}:function(){return e.getUTCMonth()!=c},c=g+b,e.setUTCMonth(c),(0>c||c>11)&&(c=(c+12)%12);else{for(var i=0;h>i;i++)e=this.moveMonth(e,b);c=e.getUTCMonth(),e.setUTCDate(f),d=function(){return c!=e.getUTCMonth()}}for(;d();)e.setUTCDate(--f),e.setUTCMonth(c);return e},moveYear:function(a,b){return this.moveMonth(a,12*b)},dateWithinRange:function(a){return a>=this.o.startDate&&a<=this.o.endDate},keydown:function(a){if(this.picker.is(":not(:visible)"))return 27==a.keyCode&&this.show(),void 0;var b,c,d,e=!1;switch(a.keyCode){case 27:this.hide(),a.preventDefault();break;case 37:case 39:if(!this.o.keyboardNavigation)break;b=37==a.keyCode?-1:1,a.ctrlKey?(c=this.moveYear(this.date,b),d=this.moveYear(this.viewDate,b)):a.shiftKey?(c=this.moveMonth(this.date,b),d=this.moveMonth(this.viewDate,b)):(c=new Date(this.date),c.setUTCDate(this.date.getUTCDate()+b),d=new Date(this.viewDate),d.setUTCDate(this.viewDate.getUTCDate()+b)),this.dateWithinRange(c)&&(this.date=c,this.viewDate=d,this.setValue(),this.update(),a.preventDefault(),e=!0);break;case 38:case 40:if(!this.o.keyboardNavigation)break;b=38==a.keyCode?-1:1,a.ctrlKey?(c=this.moveYear(this.date,b),d=this.moveYear(this.viewDate,b)):a.shiftKey?(c=this.moveMonth(this.date,b),d=this.moveMonth(this.viewDate,b)):(c=new Date(this.date),c.setUTCDate(this.date.getUTCDate()+7*b),d=new Date(this.viewDate),d.setUTCDate(this.viewDate.getUTCDate()+7*b)),this.dateWithinRange(c)&&(this.date=c,this.viewDate=d,this.setValue(),this.update(),a.preventDefault(),e=!0);break;case 13:this.hide(),a.preventDefault();break;case 9:this.hide()}if(e){this._trigger("changeDate");var f;this.isInput?f=this.element:this.component&&(f=this.element.find("input")),f&&f.change()}},showMode:function(a){a&&(this.viewMode=Math.max(this.o.minViewMode,Math.min(2,this.viewMode+a))),this.picker.find(">div").hide().filter(".datepicker-"+l.modes[this.viewMode].clsName).css("display","block"),this.updateNavArrows()}};var f=function(b,c){this.element=a(b),this.inputs=a.map(c.inputs,function(a){return a.jquery?a[0]:a}),delete c.inputs,a(this.inputs).datepicker(c).bind("changeDate",a.proxy(this.dateUpdated,this)),this.pickers=a.map(this.inputs,function(b){return a(b).data("datepicker")}),this.updateDates()};f.prototype={updateDates:function(){this.dates=a.map(this.pickers,function(a){return a.date}),this.updateRanges()},updateRanges:function(){var b=a.map(this.dates,function(a){return a.valueOf()});a.each(this.pickers,function(a,c){c.setRange(b)})},dateUpdated:function(b){var c=a(b.target).data("datepicker"),d=c.getUTCDate(),e=a.inArray(b.target,this.inputs),f=this.inputs.length;if(-1!=e){if(d<this.dates[e])for(;e>=0&&d<this.dates[e];)this.pickers[e--].setUTCDate(d);else if(d>this.dates[e])for(;f>e&&d>this.dates[e];)this.pickers[e++].setUTCDate(d);this.updateDates()}},remove:function(){a.map(this.pickers,function(a){a.remove()}),delete this.element.data().datepicker}};var g=a.fn.datepicker,h=a.fn.datepicker=function(b){var g=Array.apply(null,arguments);g.shift();var h;return this.each(function(){var j=a(this),k=j.data("datepicker"),l="object"==typeof b&&b;if(!k){var m=c(this,"date"),n=a.extend({},i,m,l),o=d(n.language),p=a.extend({},i,o,m,l);if(j.is(".input-daterange")||p.inputs){var q={inputs:p.inputs||j.find("input").toArray()};j.data("datepicker",k=new f(this,a.extend(p,q)))}else j.data("datepicker",k=new e(this,p))}return"string"==typeof b&&"function"==typeof k[b]&&(h=k[b].apply(k,g),void 0!==h)?!1:void 0}),void 0!==h?h:this},i=a.fn.datepicker.defaults={autoclose:!1,beforeShowDay:a.noop,calendarWeeks:!1,clearBtn:!1,daysOfWeekDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keyboardNavigation:!0,language:"en",minViewMode:0,rtl:!1,startDate:-1/0,startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0},j=a.fn.datepicker.locale_opts=["format","rtl","weekStart"];a.fn.datepicker.Constructor=e;var k=a.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear"}},l={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(a){return 0===a%4&&0!==a%100||0===a%400
},getDaysInMonth:function(a,b){return[31,l.isLeapYear(a)?29:28,31,30,31,30,31,31,30,31,30,31][b]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(a){var b=a.replace(this.validParts,"\0").split("\0"),c=a.match(this.validParts);if(!b||!b.length||!c||0===c.length)throw new Error("Invalid date format.");return{separators:b,parts:c}},parseDate:function(c,d,f){if(c instanceof Date)return c;if("string"==typeof d&&(d=l.parseFormat(d)),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(c)){var g,h,i=/([\-+]\d+)([dmwy])/,j=c.match(/([\-+]\d+)([dmwy])/g);c=new Date;for(var m=0;m<j.length;m++)switch(g=i.exec(j[m]),h=parseInt(g[1]),g[2]){case"d":c.setUTCDate(c.getUTCDate()+h);break;case"m":c=e.prototype.moveMonth.call(e.prototype,c,h);break;case"w":c.setUTCDate(c.getUTCDate()+7*h);break;case"y":c=e.prototype.moveYear.call(e.prototype,c,h)}return b(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate(),0,0,0)}var n,o,g,j=c&&c.match(this.nonpunctuation)||[],c=new Date,p={},q=["yyyy","yy","M","MM","m","mm","d","dd"],r={yyyy:function(a,b){return a.setUTCFullYear(b)},yy:function(a,b){return a.setUTCFullYear(2e3+b)},m:function(a,b){for(b-=1;0>b;)b+=12;for(b%=12,a.setUTCMonth(b);a.getUTCMonth()!=b;)a.setUTCDate(a.getUTCDate()-1);return a},d:function(a,b){return a.setUTCDate(b)}};r.M=r.MM=r.mm=r.m,r.dd=r.d,c=b(c.getFullYear(),c.getMonth(),c.getDate(),0,0,0);var s=d.parts.slice();if(j.length!=s.length&&(s=a(s).filter(function(b,c){return-1!==a.inArray(c,q)}).toArray()),j.length==s.length){for(var m=0,t=s.length;t>m;m++){if(n=parseInt(j[m],10),g=s[m],isNaN(n))switch(g){case"MM":o=a(k[f].months).filter(function(){var a=this.slice(0,j[m].length),b=j[m].slice(0,a.length);return a==b}),n=a.inArray(o[0],k[f].months)+1;break;case"M":o=a(k[f].monthsShort).filter(function(){var a=this.slice(0,j[m].length),b=j[m].slice(0,a.length);return a==b}),n=a.inArray(o[0],k[f].monthsShort)+1}p[g]=n}for(var u,m=0;m<q.length;m++)u=q[m],u in p&&!isNaN(p[u])&&r[u](c,p[u])}return c},formatDate:function(b,c,d){"string"==typeof c&&(c=l.parseFormat(c));var e={d:b.getUTCDate(),D:k[d].daysShort[b.getUTCDay()],DD:k[d].days[b.getUTCDay()],m:b.getUTCMonth()+1,M:k[d].monthsShort[b.getUTCMonth()],MM:k[d].months[b.getUTCMonth()],yy:b.getUTCFullYear().toString().substring(2),yyyy:b.getUTCFullYear()};e.dd=(e.d<10?"0":"")+e.d,e.mm=(e.m<10?"0":"")+e.m;for(var b=[],f=a.extend([],c.separators),g=0,h=c.parts.length;h>=g;g++)f.length&&b.push(f.shift()),b.push(e[c.parts[g]]);return b.join("")},headTemplate:'<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="datepicker-switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};l.template='<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">'+l.headTemplate+"<tbody></tbody>"+l.footTemplate+"</table>"+"</div>"+'<div class="datepicker-months">'+'<table class="table-condensed">'+l.headTemplate+l.contTemplate+l.footTemplate+"</table>"+"</div>"+'<div class="datepicker-years">'+'<table class="table-condensed">'+l.headTemplate+l.contTemplate+l.footTemplate+"</table>"+"</div>"+"</div>",a.fn.datepicker.DPGlobal=l,a.fn.datepicker.noConflict=function(){return a.fn.datepicker=g,this},a(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(b){var c=a(this);c.data("datepicker")||(b.preventDefault(),h.call(c,"show"))}),a(function(){h.call(a('[data-provide="datepicker-inline"]'))})}(window.jQuery),function(a){"use strict";a.fn.bdatepicker=a.fn.datepicker.noConflict(),a.fn.datepicker||(a.fn.datepicker=a.fn.bdatepicker);var b=function(a){this.init("date",a,b.defaults),this.initPicker(a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{initPicker:function(b,c){this.options.viewformat||(this.options.viewformat=this.options.format),b.datepicker=a.fn.editableutils.tryParseJson(b.datepicker,!0),this.options.datepicker=a.extend({},c.datepicker,b.datepicker,{format:this.options.viewformat}),this.options.datepicker.language=this.options.datepicker.language||"en",this.dpg=a.fn.bdatepicker.DPGlobal,this.parsedFormat=this.dpg.parseFormat(this.options.format),this.parsedViewFormat=this.dpg.parseFormat(this.options.viewformat)},render:function(){this.$input.bdatepicker(this.options.datepicker),this.options.clear&&(this.$clear=a('<a href="#"></a>').html(this.options.clear).click(a.proxy(function(a){a.preventDefault(),a.stopPropagation(),this.clear()},this)),this.$tpl.parent().append(a('<div class="editable-clear">').append(this.$clear)))},value2html:function(a,c){var d=a?this.dpg.formatDate(a,this.parsedViewFormat,this.options.datepicker.language):"";b.superclass.value2html.call(this,d,c)},html2value:function(a){return this.parseDate(a,this.parsedViewFormat)},value2str:function(a){return a?this.dpg.formatDate(a,this.parsedFormat,this.options.datepicker.language):""},str2value:function(a){return this.parseDate(a,this.parsedFormat)},value2submit:function(a){return this.value2str(a)},value2input:function(a){this.$input.bdatepicker("update",a)},input2value:function(){return this.$input.data("datepicker").date},activate:function(){},clear:function(){this.$input.data("datepicker").date=null,this.$input.find(".active").removeClass("active"),this.options.showbuttons||this.$input.closest("form").submit()},autosubmit:function(){this.$input.on("mouseup",".day",function(b){if(!a(b.currentTarget).is(".old")&&!a(b.currentTarget).is(".new")){var c=a(this).closest("form");setTimeout(function(){c.submit()},200)}})},parseDate:function(a,b){var c,d=null;return a&&(d=this.dpg.parseDate(a,b,this.options.datepicker.language),"string"==typeof a&&(c=this.dpg.formatDate(d,b,this.options.datepicker.language),a!==c&&(d=null))),d}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{tpl:'<div class="editable-date well"></div>',inputclass:null,format:"yyyy-mm-dd",viewformat:null,datepicker:{weekStart:0,startView:0,minViewMode:0,autoclose:!1},clear:"&times; clear"}),a.fn.editabletypes.date=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("datefield",a,b.defaults),this.initPicker(a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.date),a.extend(b.prototype,{render:function(){this.$input=this.$tpl.find("input"),this.setClass(),this.setAttr("placeholder"),this.$tpl.bdatepicker(this.options.datepicker),this.$input.off("focus keydown"),this.$input.keyup(a.proxy(function(){this.$tpl.removeData("date"),this.$tpl.bdatepicker("update")},this))},value2input:function(a){this.$input.val(a?this.dpg.formatDate(a,this.parsedViewFormat,this.options.datepicker.language):""),this.$tpl.bdatepicker("update")},input2value:function(){return this.html2value(this.$input.val())},activate:function(){a.fn.editabletypes.text.prototype.activate.call(this)},autosubmit:function(){}}),b.defaults=a.extend({},a.fn.editabletypes.date.defaults,{tpl:'<div class="input-append date"><input type="text"/><span class="add-on"><i class="icon-th"></i></span></div>',inputclass:"input-small",datepicker:{weekStart:0,startView:0,minViewMode:0,autoclose:!0}}),a.fn.editabletypes.datefield=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("datetime",a,b.defaults),this.initPicker(a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{initPicker:function(b,c){this.options.viewformat||(this.options.viewformat=this.options.format),b.datetimepicker=a.fn.editableutils.tryParseJson(b.datetimepicker,!0),this.options.datetimepicker=a.extend({},c.datetimepicker,b.datetimepicker,{format:this.options.viewformat}),this.options.datetimepicker.language=this.options.datetimepicker.language||"en",this.dpg=a.fn.datetimepicker.DPGlobal,this.parsedFormat=this.dpg.parseFormat(this.options.format,this.options.formatType),this.parsedViewFormat=this.dpg.parseFormat(this.options.viewformat,this.options.formatType)},render:function(){this.$input.datetimepicker(this.options.datetimepicker),this.$input.on("changeMode",function(){var b=a(this).closest("form").parent();setTimeout(function(){b.triggerHandler("resize")},0)}),this.options.clear&&(this.$clear=a('<a href="#"></a>').html(this.options.clear).click(a.proxy(function(a){a.preventDefault(),a.stopPropagation(),this.clear()},this)),this.$tpl.parent().append(a('<div class="editable-clear">').append(this.$clear)))},value2html:function(a,c){var d=a?this.dpg.formatDate(this.toUTC(a),this.parsedViewFormat,this.options.datetimepicker.language,this.options.formatType):"";return c?(b.superclass.value2html.call(this,d,c),void 0):d},html2value:function(a){var b=this.parseDate(a,this.parsedViewFormat);return b?this.fromUTC(b):null},value2str:function(a){return a?this.dpg.formatDate(this.toUTC(a),this.parsedFormat,this.options.datetimepicker.language,this.options.formatType):""},str2value:function(a){var b=this.parseDate(a,this.parsedFormat);return b?this.fromUTC(b):null},value2submit:function(a){return this.value2str(a)},value2input:function(a){a&&this.$input.data("datetimepicker").setDate(a)},input2value:function(){var a=this.$input.data("datetimepicker");return a.date?a.getDate():null},activate:function(){},clear:function(){this.$input.data("datetimepicker").date=null,this.$input.find(".active").removeClass("active"),this.options.showbuttons||this.$input.closest("form").submit()},autosubmit:function(){this.$input.on("mouseup",".minute",function(){var b=a(this).closest("form");setTimeout(function(){b.submit()},200)})},toUTC:function(a){return a?new Date(a.valueOf()-6e4*a.getTimezoneOffset()):a},fromUTC:function(a){return a?new Date(a.valueOf()+6e4*a.getTimezoneOffset()):a},parseDate:function(a,b){var c,d=null;return a&&(d=this.dpg.parseDate(a,b,this.options.datetimepicker.language,this.options.formatType),"string"==typeof a&&(c=this.dpg.formatDate(d,b,this.options.datetimepicker.language,this.options.formatType),a!==c&&(d=null))),d}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{tpl:'<div class="editable-date well"></div>',inputclass:null,format:"yyyy-mm-dd hh:ii",formatType:"standard",viewformat:null,datetimepicker:{todayHighlight:!1,autoclose:!1},clear:"&times; clear"}),a.fn.editabletypes.datetime=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("datetimefield",a,b.defaults),this.initPicker(a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.datetime),a.extend(b.prototype,{render:function(){this.$input=this.$tpl.find("input"),this.setClass(),this.setAttr("placeholder"),this.$tpl.datetimepicker(this.options.datetimepicker),this.$input.off("focus keydown"),this.$input.keyup(a.proxy(function(){this.$tpl.removeData("date"),this.$tpl.datetimepicker("update")},this))},value2input:function(a){this.$input.val(this.value2html(a)),this.$tpl.datetimepicker("update")},input2value:function(){return this.html2value(this.$input.val())},activate:function(){a.fn.editabletypes.text.prototype.activate.call(this)},autosubmit:function(){}}),b.defaults=a.extend({},a.fn.editabletypes.datetime.defaults,{tpl:'<div class="input-append date"><input type="text"/><span class="add-on"><i class="icon-th"></i></span></div>',inputclass:"input-medium",datetimepicker:{todayHighlight:!1,autoclose:!0}}),a.fn.editabletypes.datetimefield=b}(window.jQuery);
/*address.js*/
/**
Address editable input.
Internally value stored as {city: "Moscow", street: "Lenina", building: "15"}

@class address
@extends abstractinput
@final
@example
<a href="#" id="address" data-type="address" data-pk="1">awesome</a>
<script>
$(function(){
    $('#address').editable({
        url: '/post',
        title: 'Enter city, street and building #',
        value: {
            city: "Moscow", 
            street: "Lenina", 
            building: "15"
        }
    });
});
</script>
**/
(function ($) {
    "use strict";
    
    var Address = function (options) {
        this.init('address', options, Address.defaults);
    };

    //inherit from Abstract input
    $.fn.editableutils.inherit(Address, $.fn.editabletypes.abstractinput);

    $.extend(Address.prototype, {
        /**
        Renders input from tpl

        @method render() 
        **/        
        render: function() {
           this.$input = this.$tpl.find('input');
        },
        
        /**
        Default method to show value in element. Can be overwritten by display option.
        
        @method value2html(value, element) 
        **/
        value2html: function(value, element) {
            if(!value) {
                $(element).empty();
                return; 
            }
            var html = $('<div>').text(value.city).html() + ', ' + $('<div>').text(value.street).html() + ' st., bld. ' + $('<div>').text(value.building).html();
            $(element).html(html); 
        },
        
        /**
        Gets value from element's html
        
        @method html2value(html) 
        **/        
        html2value: function(html) {        
          /*
            you may write parsing method to get value by element's html
            e.g. "Moscow, st. Lenina, bld. 15" => {city: "Moscow", street: "Lenina", building: "15"}
            but for complex structures it's not recommended.
            Better set value directly via javascript, e.g. 
            editable({
                value: {
                    city: "Moscow", 
                    street: "Lenina", 
                    building: "15"
                }
            });
          */ 
          return null;  
        },
      
       /**
        Converts value to string. 
        It is used in internal comparing (not for sending to server).
        
        @method value2str(value)  
       **/
       value2str: function(value) {
           var str = '';
           if(value) {
               for(var k in value) {
                   str = str + k + ':' + value[k] + ';';  
               }
           }
           return str;
       }, 
       
       /*
        Converts string to value. Used for reading value from 'data-value' attribute.
        
        @method str2value(str)  
       */
       str2value: function(str) {
           /*
           this is mainly for parsing value defined in data-value attribute. 
           If you will always set value by javascript, no need to overwrite it
           */
           return str;
       },                
       
       /**
        Sets value of input.
        
        @method value2input(value) 
        @param {mixed} value
       **/         
       value2input: function(value) {
           if(!value) {
             return;
           }
           this.$input.filter('[name="city"]').val(value.city);
           this.$input.filter('[name="street"]').val(value.street);
           this.$input.filter('[name="building"]').val(value.building);
       },       
       
       /**
        Returns value of input.
        
        @method input2value() 
       **/          
       input2value: function() { 
           return {
              city: this.$input.filter('[name="city"]').val(), 
              street: this.$input.filter('[name="street"]').val(), 
              building: this.$input.filter('[name="building"]').val()
           };
       },        
       
        /**
        Activates input: sets focus on the first field.
        
        @method activate() 
       **/        
       activate: function() {
            this.$input.filter('[name="city"]').focus();
       },  
       
       /**
        Attaches handler to submit form in case of 'showbuttons=false' mode
        
        @method autosubmit() 
       **/       
       autosubmit: function() {
           this.$input.keydown(function (e) {
                if (e.which === 13) {
                    $(this).closest('form').submit();
                }
           });
       }       
    });

    Address.defaults = $.extend({}, $.fn.editabletypes.abstractinput.defaults, {
        tpl: '<div class="editable-address"><label><span>City: </span><input type="text" name="city" class="input-small"></label></div>'+
             '<div class="editable-address"><label><span>Street: </span><input type="text" name="street" class="input-small"></label></div>'+
             '<div class="editable-address"><label><span>Building: </span><input type="text" name="building" class="input-mini"></label></div>',
             
        inputclass: ''
    });

    $.fn.editabletypes.address = Address;

}(window.jQuery));
/*jquery.dataTables.min.js*/
/*!
 DataTables 1.10.10
 ©2008-2015 SpryMedia Ltd - datatables.net/license
*/
(function(h){"function"===typeof define&&define.amd?define(["jquery"],function(E){return h(E,window,document)}):"object"===typeof exports?module.exports=function(E,H){E||(E=window);H||(H="undefined"!==typeof window?require("jquery"):require("jquery")(E));return h(H,E,E.document)}:h(jQuery,window,document)})(function(h,E,H,k){function Y(a){var b,c,d={};h.each(a,function(e){if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()),
d[c]=e,"o"===b[1]&&Y(a[e])});a._hungarianMap=d}function J(a,b,c){a._hungarianMap||Y(a);var d;h.each(b,function(e){d=a._hungarianMap[e];if(d!==k&&(c||b[d]===k))"o"===d.charAt(0)?(b[d]||(b[d]={}),h.extend(!0,b[d],b[e]),J(a[d],b[d],c)):b[d]=b[e]})}function Fa(a){var b=m.defaults.oLanguage,c=a.sZeroRecords;!a.sEmptyTable&&(c&&"No data available in table"===b.sEmptyTable)&&F(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(c&&"Loading..."===b.sLoadingRecords)&&F(a,a,"sZeroRecords","sLoadingRecords");
a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&db(a)}function eb(a){A(a,"ordering","bSort");A(a,"orderMulti","bSortMulti");A(a,"orderClasses","bSortClasses");A(a,"orderCellsTop","bSortCellsTop");A(a,"order","aaSorting");A(a,"orderFixed","aaSortingFixed");A(a,"paging","bPaginate");A(a,"pagingType","sPaginationType");A(a,"pageLength","iDisplayLength");A(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":"");"boolean"===typeof a.scrollX&&(a.scrollX=
a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&J(m.models.oSearch,a[b])}function fb(a){A(a,"orderable","bSortable");A(a,"orderData","aDataSort");A(a,"orderSequence","asSorting");A(a,"orderDataType","sortDataType");var b=a.aDataSort;b&&!h.isArray(b)&&(a.aDataSort=[b])}function gb(a){if(!m.__browser){var b={};m.__browser=b;var c=h("<div/>").css({position:"fixed",top:0,left:0,height:1,width:1,overflow:"hidden"}).append(h("<div/>").css({position:"absolute",top:1,left:1,
width:100,overflow:"scroll"}).append(h("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}h.extend(a.oBrowser,m.__browser);a.oScroll.iBarWidth=m.__browser.barWidth}function hb(a,b,c,d,e,f){var g,j=!1;c!==k&&(g=c,j=!0);for(;d!==e;)a.hasOwnProperty(d)&&
(g=j?b(g,a[d],d,a):a[d],j=!0,d+=f);return g}function Ga(a,b){var c=m.defaults.column,d=a.aoColumns.length,c=h.extend({},m.models.oColumn,c,{nTh:b?b:H.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=h.extend({},m.models.oSearch,c[d]);la(a,d,h(b).data())}function la(a,b,c){var b=a.aoColumns[b],d=a.oClasses,e=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=e.attr("width")||null;var f=
(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1])}c!==k&&null!==c&&(fb(c),J(m.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),h.extend(b,c),F(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),F(b,c,"aDataSort"));var g=b.mData,j=Q(g),i=b.mRender?Q(b.mRender):null,c=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};b._bAttrSrc=h.isPlainObject(g)&&
(c(g.sort)||c(g.type)||c(g.filter));b.fnGetData=function(a,b,c){var d=j(a,b,k,c);return i&&b?i(d,b,a,c):d};b.fnSetData=function(a,b,c){return R(g)(a,b,c)};"number"!==typeof g&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=d.sSortableNone,b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=
d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI)}function U(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Ha(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&Z(a);v(a,null,"column-sizing",[a])}function $(a,b){var c=aa(a,"bVisible");return"number"===typeof c[b]?c[b]:null}function ba(a,b){var c=aa(a,"bVisible"),c=h.inArray(b,c);return-1!==c?c:null}function ca(a){return aa(a,
"bVisible").length}function aa(a,b){var c=[];h.map(a.aoColumns,function(a,e){a[b]&&c.push(e)});return c}function Ia(a){var b=a.aoColumns,c=a.aoData,d=m.ext.type.detect,e,f,g,j,i,h,l,q,u;e=0;for(f=b.length;e<f;e++)if(l=b[e],u=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){g=0;for(j=d.length;g<j;g++){i=0;for(h=c.length;i<h;i++){u[i]===k&&(u[i]=B(a,i,e,"type"));q=d[g](u[i],a);if(!q&&g!==d.length-1)break;if("html"===q)break}if(q){l.sType=q;break}}l.sType||(l.sType="string")}}function ib(a,
b,c,d){var e,f,g,j,i,o,l=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){o=b[e];var q=o.targets!==k?o.targets:o.aTargets;h.isArray(q)||(q=[q]);f=0;for(g=q.length;f<g;f++)if("number"===typeof q[f]&&0<=q[f]){for(;l.length<=q[f];)Ga(a);d(q[f],o)}else if("number"===typeof q[f]&&0>q[f])d(l.length+q[f],o);else if("string"===typeof q[f]){j=0;for(i=l.length;j<i;j++)("_all"==q[f]||h(l[j].nTh).hasClass(q[f]))&&d(j,o)}}if(c){e=0;for(a=c.length;e<a;e++)d(e,c[e])}}function N(a,b,c,d){var e=a.aoData.length,f=h.extend(!0,
{},m.models.oRow,{src:c?"dom":"data",idx:e});f._aData=b;a.aoData.push(f);for(var g=a.aoColumns,j=0,i=g.length;j<i;j++)g[j].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==k&&(a.aIds[b]=f);(c||!a.oFeatures.bDeferRender)&&Ja(a,e,c,d);return e}function ma(a,b){var c;b instanceof h||(b=h(b));return b.map(function(b,e){c=Ka(a,e);return N(a,c.data,e,c.cells)})}function B(a,b,c,d){var e=a.iDraw,f=a.aoColumns[c],g=a.aoData[b]._aData,j=f.sDefaultContent,i=f.fnGetData(g,d,{settings:a,row:b,col:c});
if(i===k)return a.iDrawError!=e&&null===j&&(K(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),j;if((i===g||null===i)&&null!==j)i=j;else if("function"===typeof i)return i.call(g);return null===i&&"display"==d?"":i}function jb(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c})}function La(a){return h.map(a.match(/(\\.|[^\.])+/g)||[""],function(a){return a.replace(/\\./g,".")})}function Q(a){if(h.isPlainObject(a)){var b=
{};h.each(a,function(a,c){c&&(b[a]=Q(c))});return function(a,c,f,g){var j=b[c]||b._;return j!==k?j(a,c,f,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,f,g){return a(b,c,f,g)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var c=function(a,b,f){var g,j;if(""!==f){j=La(f);for(var i=0,o=j.length;i<o;i++){f=j[i].match(da);g=j[i].match(V);if(f){j[i]=j[i].replace(da,"");""!==j[i]&&(a=a[j[i]]);g=[];j.splice(0,i+1);j=
j.join(".");if(h.isArray(a)){i=0;for(o=a.length;i<o;i++)g.push(c(a[i],b,j))}a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break}else if(g){j[i]=j[i].replace(V,"");a=a[j[i]]();continue}if(null===a||a[j[i]]===k)return k;a=a[j[i]]}}return a};return function(b,e){return c(b,e,a)}}return function(b){return b[a]}}function R(a){if(h.isPlainObject(a))return R(a._);if(null===a)return function(){};if("function"===typeof a)return function(b,d,e){a(b,"set",d,e)};if("string"===typeof a&&(-1!==a.indexOf(".")||
-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,d,e){var e=La(e),f;f=e[e.length-1];for(var g,j,i=0,o=e.length-1;i<o;i++){g=e[i].match(da);j=e[i].match(V);if(g){e[i]=e[i].replace(da,"");a[e[i]]=[];f=e.slice();f.splice(0,i+1);g=f.join(".");if(h.isArray(d)){j=0;for(o=d.length;j<o;j++)f={},b(f,d[j],g),a[e[i]].push(f)}else a[e[i]]=d;return}j&&(e[i]=e[i].replace(V,""),a=a[e[i]](d));if(null===a[e[i]]||a[e[i]]===k)a[e[i]]={};a=a[e[i]]}if(f.match(V))a[f.replace(V,"")](d);else a[f.replace(da,"")]=
d};return function(c,d){return b(c,d,a)}}return function(b,d){b[a]=d}}function Ma(a){return D(a.aoData,"_aData")}function na(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}function oa(a,b,c){for(var d=-1,e=0,f=a.length;e<f;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===k&&a.splice(d,1)}function ea(a,b,c,d){var e=a.aoData[b],f,g=function(c,d){for(;c.childNodes.length;)c.removeChild(c.firstChild);c.innerHTML=B(a,b,d,"display")};if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=
Ka(a,e,d,d===k?k:e._aData).data;else{var j=e.anCells;if(j)if(d!==k)g(j[d],d);else{c=0;for(f=j.length;c<f;c++)g(j[c],c)}}e._aSortData=null;e._aFilterData=null;g=a.aoColumns;if(d!==k)g[d].sType=null;else{c=0;for(f=g.length;c<f;c++)g[c].sType=null;Na(a,e)}}function Ka(a,b,c,d){var e=[],f=b.firstChild,g,j,i=0,o,l=a.aoColumns,q=a._rowReadObject,d=d!==k?d:q?{}:[],u=function(a,b){if("string"===typeof a){var c=a.indexOf("@");-1!==c&&(c=a.substring(c+1),R(a)(d,b.getAttribute(c)))}},S=function(a){if(c===k||
c===i)j=l[i],o=h.trim(a.innerHTML),j&&j._bAttrSrc?(R(j.mData._)(d,o),u(j.mData.sort,a),u(j.mData.type,a),u(j.mData.filter,a)):q?(j._setter||(j._setter=R(j.mData)),j._setter(d,o)):d[i]=o;i++};if(f)for(;f;){g=f.nodeName.toUpperCase();if("TD"==g||"TH"==g)S(f),e.push(f);f=f.nextSibling}else{e=b.anCells;f=0;for(g=e.length;f<g;f++)S(e[f])}if(b=b.firstChild?b:b.nTr)(b=b.getAttribute("id"))&&R(a.rowId)(d,b);return{data:d,cells:e}}function Ja(a,b,c,d){var e=a.aoData[b],f=e._aData,g=[],j,i,h,l,q;if(null===
e.nTr){j=c||H.createElement("tr");e.nTr=j;e.anCells=g;j._DT_RowIndex=b;Na(a,e);l=0;for(q=a.aoColumns.length;l<q;l++){h=a.aoColumns[l];i=c?d[l]:H.createElement(h.sCellType);i._DT_CellIndex={row:b,column:l};g.push(i);if(!c||h.mRender||h.mData!==l)i.innerHTML=B(a,b,l,"display");h.sClass&&(i.className+=" "+h.sClass);h.bVisible&&!c?j.appendChild(i):!h.bVisible&&c&&i.parentNode.removeChild(i);h.fnCreatedCell&&h.fnCreatedCell.call(a.oInstance,i,B(a,b,l),f,b,l)}v(a,"aoRowCreatedCallback",null,[j,f,b])}e.nTr.setAttribute("role",
"row")}function Na(a,b){var c=b.nTr,d=b._aData;if(c){var e=a.rowIdFn(d);e&&(c.id=e);d.DT_RowClass&&(e=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?pa(b.__rowc.concat(e)):e,h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));d.DT_RowAttr&&h(c).attr(d.DT_RowAttr);d.DT_RowData&&h(c).data(d.DT_RowData)}}function kb(a){var b,c,d,e,f,g=a.nTHead,j=a.nTFoot,i=0===h("th, td",g).length,o=a.oClasses,l=a.aoColumns;i&&(e=h("<tr/>").appendTo(g));b=0;for(c=l.length;b<c;b++)f=l[b],d=h(f.nTh).addClass(f.sClass),
i&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Oa(a,f.nTh,b))),f.sTitle!=d[0].innerHTML&&d.html(f.sTitle),Pa(a,"header")(a,d,f,o);i&&fa(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(o.sHeaderTH);h(j).find(">tr>th, >tr>td").addClass(o.sFooterTH);if(null!==j){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=l[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)}}
function ga(a,b,c){var d,e,f,g=[],j=[],i=a.aoColumns.length,o;if(b){c===k&&(c=!1);d=0;for(e=b.length;d<e;d++){g[d]=b[d].slice();g[d].nTr=b[d].nTr;for(f=i-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[d].splice(f,1);j.push([])}d=0;for(e=g.length;d<e;d++){if(a=g[d].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=g[d].length;f<b;f++)if(o=i=1,j[d][f]===k){a.appendChild(g[d][f].cell);for(j[d][f]=1;g[d+i]!==k&&g[d][f].cell==g[d+i][f].cell;)j[d+i][f]=1,i++;for(;g[d][f+o]!==k&&g[d][f].cell==g[d][f+o].cell;){for(c=
0;c<i;c++)j[d+c][f+o]=1;o++}h(g[d][f].cell).attr("rowspan",i).attr("colspan",o)}}}}function O(a){var b=v(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))C(a,!1);else{var b=[],c=0,d=a.asStripeClasses,e=d.length,f=a.oLanguage,g=a.iInitDisplayStart,j="ssp"==y(a),i=a.aiDisplay;a.bDrawing=!0;g!==k&&-1!==g&&(a._iDisplayStart=j?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=-1);var g=a._iDisplayStart,o=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(j){if(!a.bDestroying&&
!lb(a))return}else a.iDraw++;if(0!==i.length){f=j?a.aoData.length:o;for(j=j?0:g;j<f;j++){var l=i[j],q=a.aoData[l];null===q.nTr&&Ja(a,l);l=q.nTr;if(0!==e){var u=d[c%e];q._sRowStripe!=u&&(h(l).removeClass(q._sRowStripe).addClass(u),q._sRowStripe=u)}v(a,"aoRowCallback",null,[l,q._aData,c,j]);b.push(l);c++}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==y(a)?c=f.sLoadingRecords:f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=h("<tr/>",{"class":e?d[0]:""}).append(h("<td />",{valign:"top",colSpan:ca(a),
"class":a.oClasses.sRowEmpty}).html(c))[0];v(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Ma(a),g,o,i]);v(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],Ma(a),g,o,i]);d=h(a.nTBody);d.children().detach();d.append(h(b));v(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function T(a,b){var c=a.oFeatures,d=c.bFilter;c.bSort&&mb(a);d?ha(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;O(a);a._drawHold=
!1}function nb(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),d=a.oFeatures,e=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var f=a.sDom.split(""),g,j,i,o,l,q,u=0;u<f.length;u++){g=null;j=f[u];if("<"==j){i=h("<div/>")[0];o=f[u+1];if("'"==o||'"'==o){l="";for(q=2;f[u+q]!=o;)l+=f[u+q],q++;"H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);-1!=l.indexOf(".")?(o=l.split("."),
i.id=o[0].substr(1,o[0].length-1),i.className=o[1]):"#"==l.charAt(0)?i.id=l.substr(1,l.length-1):i.className=l;u+=q}e.append(i);e=h(i)}else if(">"==j)e=e.parent();else if("l"==j&&d.bPaginate&&d.bLengthChange)g=ob(a);else if("f"==j&&d.bFilter)g=pb(a);else if("r"==j&&d.bProcessing)g=qb(a);else if("t"==j)g=rb(a);else if("i"==j&&d.bInfo)g=sb(a);else if("p"==j&&d.bPaginate)g=tb(a);else if(0!==m.ext.feature.length){i=m.ext.feature;q=0;for(o=i.length;q<o;q++)if(j==i[q].cFeature){g=i[q].fnInit(a);break}}g&&
(i=a.aanFeatures,i[j]||(i[j]=[]),i[j].push(g),e.append(g))}c.replaceWith(e);a.nHolding=null}function fa(a,b){var c=h(b).children("tr"),d,e,f,g,j,i,o,l,q,u;a.splice(0,a.length);f=0;for(i=c.length;f<i;f++)a.push([]);f=0;for(i=c.length;f<i;f++){d=c[f];for(e=d.firstChild;e;){if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){l=1*e.getAttribute("colspan");q=1*e.getAttribute("rowspan");l=!l||0===l||1===l?1:l;q=!q||0===q||1===q?1:q;g=0;for(j=a[f];j[g];)g++;o=g;u=1===l?!0:!1;for(j=0;j<l;j++)for(g=
0;g<q;g++)a[f+g][o+j]={cell:e,unique:u},a[f+g].nTr=d}e=e.nextSibling}}}function qa(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],fa(c,b)));for(var b=0,e=c.length;b<e;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!d[f]||!a.bSortCellsTop))d[f]=c[b][f].cell;return d}function ra(a,b,c){v(a,"aoServerParams","serverParams",[b]);if(b&&h.isArray(b)){var d={},e=/(.*?)\[\]$/;h.each(b,function(a,b){var c=b.name.match(e);c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value});b=d}var f,g=a.ajax,
j=a.oInstance,i=function(b){v(a,null,"xhr",[a,b,a.jqXHR]);c(b)};if(h.isPlainObject(g)&&g.data){f=g.data;var o=h.isFunction(f)?f(b,a):f,b=h.isFunction(f)&&o?o:h.extend(!0,b,o);delete g.data}o={data:b,success:function(b){var c=b.error||b.sError;c&&K(a,0,c);a.json=b;i(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c){var d=v(a,null,"xhr",[a,null,a.jqXHR]);-1===h.inArray(!0,d)&&("parsererror"==c?K(a,0,"Invalid JSON response",1):4===b.readyState&&K(a,0,"Ajax error",7));C(a,!1)}};a.oAjaxData=
b;v(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(j,a.sAjaxSource,h.map(b,function(a,b){return{name:b,value:a}}),i,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(o,{url:g||a.sAjaxSource})):h.isFunction(g)?a.jqXHR=g.call(j,b,i,a):(a.jqXHR=h.ajax(h.extend(o,g)),g.data=f)}function lb(a){return a.bAjaxDataGet?(a.iDraw++,C(a,!0),ra(a,ub(a),function(b){vb(a,b)}),!1):!0}function ub(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,f=a.aoPreSearchCols,g,j=[],i,o,
l,q=W(a);g=a._iDisplayStart;i=!1!==d.bPaginate?a._iDisplayLength:-1;var k=function(a,b){j.push({name:a,value:b})};k("sEcho",a.iDraw);k("iColumns",c);k("sColumns",D(b,"sName").join(","));k("iDisplayStart",g);k("iDisplayLength",i);var S={draw:a.iDraw,columns:[],order:[],start:g,length:i,search:{value:e.sSearch,regex:e.bRegex}};for(g=0;g<c;g++)o=b[g],l=f[g],i="function"==typeof o.mData?"function":o.mData,S.columns.push({data:i,name:o.sName,searchable:o.bSearchable,orderable:o.bSortable,search:{value:l.sSearch,
regex:l.bRegex}}),k("mDataProp_"+g,i),d.bFilter&&(k("sSearch_"+g,l.sSearch),k("bRegex_"+g,l.bRegex),k("bSearchable_"+g,o.bSearchable)),d.bSort&&k("bSortable_"+g,o.bSortable);d.bFilter&&(k("sSearch",e.sSearch),k("bRegex",e.bRegex));d.bSort&&(h.each(q,function(a,b){S.order.push({column:b.col,dir:b.dir});k("iSortCol_"+a,b.col);k("sSortDir_"+a,b.dir)}),k("iSortingCols",q.length));b=m.ext.legacy.ajax;return null===b?a.sAjaxSource?j:S:b?j:S}function vb(a,b){var c=sa(a,b),d=b.sEcho!==k?b.sEcho:b.draw,e=
b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;if(d){if(1*d<a.iDraw)return;a.iDraw=1*d}na(a);a._iRecordsTotal=parseInt(e,10);a._iRecordsDisplay=parseInt(f,10);d=0;for(e=c.length;d<e;d++)N(a,c[d]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;O(a);a._bInitComplete||ta(a,b);a.bAjaxDataGet=!0;C(a,!1)}function sa(a,b){var c=h.isPlainObject(a.ajax)&&a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||
b[c]:""!==c?Q(c)(b):b}function pb(a){var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',j=d.sSearch,j=j.match(/_INPUT_/)?j.replace("_INPUT_",g):j+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(j)),f=function(){var b=!this.value?"":this.value;b!=e.sSearch&&(ha(a,{sSearch:b,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive}),a._iDisplayStart=0,O(a))},g=null!==
a.searchDelay?a.searchDelay:"ssp"===y(a)?400:0,i=h("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT",g?ua(f,g):f).bind("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{i[0]!==H.activeElement&&i.val(e.sSearch)}catch(d){}});return b[0]}function ha(a,b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,f=function(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;
d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive};Ia(a);if("ssp"!=y(a)){wb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<e.length;b++)xb(a,e[b].sSearch,b,e[b].bEscapeRegex!==k?!e[b].bEscapeRegex:e[b].bRegex,e[b].bSmart,e[b].bCaseInsensitive);yb(a)}else f(b);a.bFiltered=!0;v(a,null,"search",[a])}function yb(a){for(var b=m.ext.search,c=a.aiDisplay,d,e,f=0,g=b.length;f<g;f++){for(var j=[],i=0,o=c.length;i<o;i++)e=c[i],d=a.aoData[e],b[f](a,
d._aFilterData,e,d._aData,i)&&j.push(e);c.length=0;h.merge(c,j)}}function xb(a,b,c,d,e,f){if(""!==b)for(var g=a.aiDisplay,d=Qa(b,d,e,f),e=g.length-1;0<=e;e--)b=a.aoData[g[e]]._aFilterData[c],d.test(b)||g.splice(e,1)}function wb(a,b,c,d,e,f){var d=Qa(b,d,e,f),e=a.oPreviousSearch.sSearch,f=a.aiDisplayMaster,g;0!==m.ext.search.length&&(c=!0);g=zb(a);if(0>=b.length)a.aiDisplay=f.slice();else{if(g||c||e.length>b.length||0!==b.indexOf(e)||a.bSorted)a.aiDisplay=f.slice();b=a.aiDisplay;for(c=b.length-1;0<=
c;c--)d.test(a.aoData[b[c]]._sFilterRow)||b.splice(c,1)}}function Qa(a,b,c,d){a=b?a:va(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',"")}).join(")(?=.*?")+").*$");return RegExp(a,d?"i":"")}function va(a){return a.replace(Yb,"\\$1")}function zb(a){var b=a.aoColumns,c,d,e,f,g,j,i,h,l=m.ext.type.search;c=!1;d=0;for(f=a.aoData.length;d<f;d++)if(h=a.aoData[d],!h._aFilterData){j=[];e=0;for(g=b.length;e<
g;e++)c=b[e],c.bSearchable?(i=B(a,d,e,"filter"),l[c.sType]&&(i=l[c.sType](i)),null===i&&(i=""),"string"!==typeof i&&i.toString&&(i=i.toString())):i="",i.indexOf&&-1!==i.indexOf("&")&&(wa.innerHTML=i,i=Zb?wa.textContent:wa.innerText),i.replace&&(i=i.replace(/[\r\n]/g,"")),j.push(i);h._aFilterData=j;h._sFilterRow=j.join("  ");c=!0}return c}function Ab(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,caseInsensitive:a.bCaseInsensitive}}function Bb(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,
bCaseInsensitive:a.caseInsensitive}}function sb(a){var b=a.sTableId,c=a.aanFeatures.i,d=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Cb,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",b+"_info"));return d[0]}function Cb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),j=g?c.sInfo:c.sInfoEmpty;g!==f&&
(j+=" "+c.sInfoFiltered);j+=c.sInfoPostFix;j=Db(a,j);c=c.fnInfoCallback;null!==c&&(j=c.call(a.oInstance,a,d,e,f,g,j));h(b).html(j)}}function Db(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,f=a.fnRecordsDisplay(),g=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/
e)))}function ia(a){var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;c=a.oFeatures;var g=a.bDeferLoading;if(a.bInitialised){nb(a);kb(a);ga(a,a.aoHeader);ga(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Ha(a);b=0;for(c=e.length;b<c;b++)f=e[b],f.sWidth&&(f.nTh.style.width=w(f.sWidth));v(a,null,"preInit",[a]);T(a);e=y(a);if("ssp"!=e||g)"ajax"==e?ra(a,[],function(c){var f=sa(a,c);for(b=0;b<f.length;b++)N(a,f[b]);a.iInitDisplayStart=d;T(a);C(a,!1);ta(a,c)},a):(C(a,!1),ta(a))}else setTimeout(function(){ia(a)},200)}
function ta(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&U(a);v(a,null,"plugin-init",[a,b]);v(a,"aoInitComplete","init",[a,b])}function Ra(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Sa(a);v(a,null,"length",[a,c])}function ob(a){for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=h.isArray(d[0]),f=e?d[0]:d,d=e?d[1]:d,e=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),g=0,j=f.length;g<j;g++)e[0][g]=new Option(d[g],f[g]);var i=h("<div><label/></div>").addClass(b.sLength);
a.aanFeatures.l||(i[0].id=c+"_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));h("select",i).val(a._iDisplayLength).bind("change.DT",function(){Ra(a,h(this).val());O(a)});h(a.nTable).bind("length.dt.DT",function(b,c,d){a===c&&h("select",i).val(d)});return i[0]}function tb(a){var b=a.sPaginationType,c=m.ext.pager[b],d="function"===typeof c,e=function(a){O(a)},b=h("<div/>").addClass(a.oClasses.sPaging+b)[0],f=a.aanFeatures;d||c.fnInit(a,b,e);f.p||(b.id=a.sTableId+
"_paginate",a.aoDrawCallback.push({fn:function(a){if(d){var b=a._iDisplayStart,i=a._iDisplayLength,h=a.fnRecordsDisplay(),l=-1===i,b=l?0:Math.ceil(b/i),i=l?1:Math.ceil(h/i),h=c(b,i),k,l=0;for(k=f.p.length;l<k;l++)Pa(a,"pageButton")(a,f.p[l],l,h,b,i)}else c.fnUpdate(a,e)},sName:"pagination"}));return b}function Ta(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===e?d=0:"number"===typeof b?(d=b*e,d>f&&(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==
b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:K(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(v(a,null,"page",[a]),c&&O(a));return b}function qb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function C(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",b?"block":"none");v(a,null,"processing",[a,b])}function rb(a){var b=h(a.nTable);b.attr("role",
"grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,f=a.oClasses,g=b.children("caption"),j=g.length?g[0]._captionSide:null,i=h(b[0].cloneNode(!1)),o=h(b[0].cloneNode(!1)),l=b.children("tfoot");l.length||(l=null);i=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:d?!d?null:w(d):"100%"}).append(h("<div/>",{"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||
"100%"}).append(i.removeAttr("id").css("margin-left",0).append("top"===j?g:null).append(b.children("thead"))))).append(h("<div/>",{"class":f.sScrollBody}).css({position:"relative",overflow:"auto",width:!d?null:w(d)}).append(b));l&&i.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:d?!d?null:w(d):"100%"}).append(h("<div/>",{"class":f.sScrollFootInner}).append(o.removeAttr("id").css("margin-left",0).append("bottom"===j?g:null).append(b.children("tfoot")))));var b=i.children(),
k=b[0],f=b[1],u=l?b[2]:null;if(d)h(f).on("scroll.DT",function(){var a=this.scrollLeft;k.scrollLeft=a;l&&(u.scrollLeft=a)});h(f).css(e&&c.bCollapse?"max-height":"height",e);a.nScrollHead=k;a.nScrollBody=f;a.nScrollFoot=u;a.aoDrawCallback.push({fn:Z,sName:"scrolling"});return i[0]}function Z(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,b=b.iBarWidth,f=h(a.nScrollHead),g=f[0].style,j=f.children("div"),i=j[0].style,o=j.children("table"),j=a.nScrollBody,l=h(j),q=j.style,u=h(a.nScrollFoot).children("div"),
m=u.children("table"),n=h(a.nTHead),p=h(a.nTable),t=p[0],v=t.style,r=a.nTFoot?h(a.nTFoot):null,Eb=a.oBrowser,Ua=Eb.bScrollOversize,s,L,P,x,y=[],z=[],A=[],B,C=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};L=j.scrollHeight>j.clientHeight;if(a.scrollBarVis!==L&&a.scrollBarVis!==k)a.scrollBarVis=L,U(a);else{a.scrollBarVis=L;p.children("thead, tfoot").remove();x=n.clone().prependTo(p);n=n.find("tr");L=x.find("tr");x.find("th, td").removeAttr("tabindex");
r&&(P=r.clone().prependTo(p),s=r.find("tr"),P=P.find("tr"));c||(q.width="100%",f[0].style.width="100%");h.each(qa(a,x),function(b,c){B=$(a,b);c.style.width=a.aoColumns[B].sWidth});r&&I(function(a){a.style.width=""},P);f=p.outerWidth();if(""===c){v.width="100%";if(Ua&&(p.find("tbody").height()>j.offsetHeight||"scroll"==l.css("overflow-y")))v.width=w(p.outerWidth()-b);f=p.outerWidth()}else""!==d&&(v.width=w(d),f=p.outerWidth());I(C,L);I(function(a){A.push(a.innerHTML);y.push(w(h(a).css("width")))},
L);I(function(a,b){a.style.width=y[b]},n);h(L).height(0);r&&(I(C,P),I(function(a){z.push(w(h(a).css("width")))},P),I(function(a,b){a.style.width=z[b]},s),h(P).height(0));I(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+A[b]+"</div>";a.style.width=y[b]},L);r&&I(function(a,b){a.innerHTML="";a.style.width=z[b]},P);if(p.outerWidth()<f){s=j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")?f+b:f;if(Ua&&(j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")))v.width=
w(s-b);(""===c||""!==d)&&K(a,1,"Possible column misalignment",6)}else s="100%";q.width=w(s);g.width=w(s);r&&(a.nScrollFoot.style.width=w(s));!e&&Ua&&(q.height=w(t.offsetHeight+b));c=p.outerWidth();o[0].style.width=w(c);i.width=w(c);d=p.height()>j.clientHeight||"scroll"==l.css("overflow-y");e="padding"+(Eb.bScrollbarLeft?"Left":"Right");i[e]=d?b+"px":"0px";r&&(m[0].style.width=w(c),u[0].style.width=w(c),u[0].style[e]=d?b+"px":"0px");l.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)j.scrollTop=
0}}function I(a,b,c){for(var d=0,e=0,f=b.length,g,j;e<f;){g=b[e].firstChild;for(j=c?c[e].firstChild:null;g;)1===g.nodeType&&(c?a(g,j,d):a(g,d),d++),g=g.nextSibling,j=c?j.nextSibling:null;e++}}function Ha(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,e=d.sY,f=d.sX,g=d.sXInner,j=c.length,i=aa(a,"bVisible"),o=h("th",a.nTHead),l=b.getAttribute("width"),k=b.parentNode,u=!1,m,n,p=a.oBrowser,d=p.bScrollOversize;(m=b.style.width)&&-1!==m.indexOf("%")&&(l=m);for(m=0;m<i.length;m++)n=c[i[m]],null!==n.sWidth&&
(n.sWidth=Fb(n.sWidthOrig,k),u=!0);if(d||!u&&!f&&!e&&j==ca(a)&&j==o.length)for(m=0;m<j;m++)i=$(a,m),null!==i&&(c[i].sWidth=w(o.eq(m).width()));else{j=h(b).clone().css("visibility","hidden").removeAttr("id");j.find("tbody tr").remove();var t=h("<tr/>").appendTo(j.find("tbody"));j.find("thead, tfoot").remove();j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());j.find("tfoot th, tfoot td").css("width","");o=qa(a,j.find("thead")[0]);for(m=0;m<i.length;m++)n=c[i[m]],o[m].style.width=null!==n.sWidthOrig&&
""!==n.sWidthOrig?w(n.sWidthOrig):"",n.sWidthOrig&&f&&h(o[m]).append(h("<div/>").css({width:n.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(m=0;m<i.length;m++)u=i[m],n=c[u],h(Gb(a,u)).clone(!1).append(n.sContentPadding).appendTo(t);n=h("<div/>").css(f||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(j).appendTo(k);f&&g?j.width(g):f?(j.css("width","auto"),j.removeAttr("width"),j.width()<k.clientWidth&&l&&j.width(k.clientWidth)):e?j.width(k.clientWidth):
l&&j.width(l);for(m=e=0;m<i.length;m++)k=h(o[m]),g=k.outerWidth()-k.width(),k=p.bBounding?Math.ceil(o[m].getBoundingClientRect().width):k.outerWidth(),e+=k,c[i[m]].sWidth=w(k-g);b.style.width=w(e);n.remove()}l&&(b.style.width=w(l));if((l||f)&&!a._reszEvt)b=function(){h(E).bind("resize.DT-"+a.sInstance,ua(function(){U(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0}function ua(a,b){var c=b!==k?b:200,d,e;return function(){var b=this,g=+new Date,j=arguments;d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){d=
k;a.apply(b,j)},c)):(d=g,a.apply(b,j))}}function Fb(a,b){if(!a)return 0;var c=h("<div/>").css("width",w(a)).appendTo(b||H.body),d=c[0].offsetWidth;c.remove();return d}function Gb(a,b){var c=Hb(a,b);if(0>c)return null;var d=a.aoData[c];return!d.nTr?h("<td/>").html(B(a,c,b,"display"))[0]:d.anCells[b]}function Hb(a,b){for(var c,d=-1,e=-1,f=0,g=a.aoData.length;f<g;f++)c=B(a,f,b,"display")+"",c=c.replace($b,""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=f);return e}function w(a){return null===
a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function W(a){var b,c,d=[],e=a.aoColumns,f,g,j,i;b=a.aaSortingFixed;c=h.isPlainObject(b);var o=[];f=function(a){a.length&&!h.isArray(a[0])?o.push(a):h.merge(o,a)};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<o.length;a++){i=o[a][0];f=e[i].aDataSort;b=0;for(c=f.length;b<c;b++)g=f[b],j=e[g].sType||"string",o[a]._idx===k&&(o[a]._idx=h.inArray(o[a][1],e[g].asSorting)),d.push({src:i,col:g,dir:o[a][1],
index:o[a]._idx,type:j,formatter:m.ext.type.order[j+"-pre"]})}return d}function mb(a){var b,c,d=[],e=m.ext.type.order,f=a.aoData,g=0,j,i=a.aiDisplayMaster,h;Ia(a);h=W(a);b=0;for(c=h.length;b<c;b++)j=h[b],j.formatter&&g++,Ib(a,j.col);if("ssp"!=y(a)&&0!==h.length){b=0;for(c=i.length;b<c;b++)d[i[b]]=b;g===h.length?i.sort(function(a,b){var c,e,g,j,i=h.length,k=f[a]._aSortData,m=f[b]._aSortData;for(g=0;g<i;g++)if(j=h[g],c=k[j.col],e=m[j.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===j.dir?c:-c;c=d[a];e=d[b];
return c<e?-1:c>e?1:0}):i.sort(function(a,b){var c,g,j,i,k=h.length,m=f[a]._aSortData,p=f[b]._aSortData;for(j=0;j<k;j++)if(i=h[j],c=m[i.col],g=p[i.col],i=e[i.type+"-"+i.dir]||e["string-"+i.dir],c=i(c,g),0!==c)return c;c=d[a];g=d[b];return c<g?-1:c>g?1:0})}a.bSorted=!0}function Jb(a){for(var b,c,d=a.aoColumns,e=W(a),a=a.oLanguage.oAria,f=0,g=d.length;f<g;f++){c=d[f];var j=c.asSorting;b=c.sTitle.replace(/<.*?>/g,"");var i=c.nTh;i.removeAttribute("aria-sort");c.bSortable&&(0<e.length&&e[0].col==f?(i.setAttribute("aria-sort",
"asc"==e[0].dir?"ascending":"descending"),c=j[e[0].index+1]||j[0]):c=j[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);i.setAttribute("aria-label",b)}}function Va(a,b,c,d){var e=a.aaSorting,f=a.aoColumns[b].asSorting,g=function(a,b){var c=a._idx;c===k&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b,D(e,"0")),-1!==c?(b=g(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=f[b],e[c]._idx=
b)):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=f[b],e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);T(a);"function"==typeof d&&d(a)}function Oa(a,b,c,d){var e=a.aoColumns[c];Wa(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Va(a,c,b.shiftKey,d);"ssp"!==y(a)&&C(a,!1)},0)):Va(a,c,b.shiftKey,d))})}function xa(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=W(a),e=a.oFeatures,f,g;if(e.bSort&&e.bSortClasses){e=
0;for(f=b.length;e<f;e++)g=b[e].src,h(D(a.aoData,"anCells",g)).removeClass(c+(2>e?e+1:3));e=0;for(f=d.length;e<f;e++)g=d[e].src,h(D(a.aoData,"anCells",g)).addClass(c+(2>e?e+1:3))}a.aLastSort=d}function Ib(a,b){var c=a.aoColumns[b],d=m.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,ba(a,b)));for(var f,g=m.ext.type.order[c.sType+"-pre"],j=0,i=a.aoData.length;j<i;j++)if(c=a.aoData[j],c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[j]:B(a,j,b,"sort"),c._aSortData[b]=g?g(f):f}function ya(a){if(a.oFeatures.bStateSave&&
!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),search:Ab(a.oPreviousSearch),columns:h.map(a.aoColumns,function(b,d){return{visible:b.bVisible,search:Ab(a.aoPreSearchCols[d])}})};v(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,b)}}function Kb(a){var b,c,d=a.aoColumns;if(a.oFeatures.bStateSave){var e=a.fnStateLoadCallback.call(a.oInstance,a);if(e&&e.time&&(b=v(a,"aoStateLoadParams",
"stateLoadParams",[a,e]),-1===h.inArray(!1,b)&&(b=a.iStateDuration,!(0<b&&e.time<+new Date-1E3*b)&&d.length===e.columns.length))){a.oLoadedState=h.extend(!0,{},e);e.start!==k&&(a._iDisplayStart=e.start,a.iInitDisplayStart=e.start);e.length!==k&&(a._iDisplayLength=e.length);e.order!==k&&(a.aaSorting=[],h.each(e.order,function(b,c){a.aaSorting.push(c[0]>=d.length?[0,c[1]]:c)}));e.search!==k&&h.extend(a.oPreviousSearch,Bb(e.search));b=0;for(c=e.columns.length;b<c;b++){var f=e.columns[b];f.visible!==
k&&(d[b].bVisible=f.visible);f.search!==k&&h.extend(a.aoPreSearchCols[b],Bb(f.search))}v(a,"aoStateLoaded","stateLoaded",[a,e])}}}function za(a){var b=m.settings,a=h.inArray(a,D(b,"nTable"));return-1!==a?b[a]:null}function K(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+" - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)E.console&&console.log&&console.log(c);else if(b=m.ext,b=b.sErrMode||b.errMode,a&&v(a,null,"error",[a,d,c]),"alert"==
b)alert(c);else{if("throw"==b)throw Error(c);"function"==typeof b&&b(a,d,c)}}function F(a,b,c,d){h.isArray(c)?h.each(c,function(c,d){h.isArray(d)?F(a,b,d[0],d[1]):F(a,b,d)}):(d===k&&(d=c),b[c]!==k&&(a[d]=b[c]))}function Lb(a,b,c){var d,e;for(e in b)b.hasOwnProperty(e)&&(d=b[e],h.isPlainObject(d)?(h.isPlainObject(a[e])||(a[e]={}),h.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&h.isArray(d)?d.slice():d);return a}function Wa(a,b,c){h(a).bind("click.DT",b,function(b){a.blur();c(b)}).bind("keypress.DT",
b,function(a){13===a.which&&(a.preventDefault(),c(a))}).bind("selectstart.DT",function(){return!1})}function z(a,b,c,d){c&&a[b].push({fn:c,sName:d})}function v(a,b,c,d){var e=[];b&&(e=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,d)}));null!==c&&(b=h.Event(c+".dt"),h(a.nTable).trigger(b,d),e.push(b.result));return e}function Sa(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function Pa(a,b){var c=
a.renderer,d=m.ext.renderer[b];return h.isPlainObject(c)&&c[b]?d[c[b]]||d._:"string"===typeof c?d[c]||d._:d._}function y(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function Aa(a,b){var c=[],c=Mb.numbers_length,d=Math.floor(c/2);b<=c?c=X(0,b):a<=d?(c=X(0,c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=X(b-(c-2),b):(c=X(a-d+2,a+d-1),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c}function db(a){h.each({num:function(b){return Ba(b,
a)},"num-fmt":function(b){return Ba(b,a,Xa)},"html-num":function(b){return Ba(b,a,Ca)},"html-num-fmt":function(b){return Ba(b,a,Ca,Xa)}},function(b,c){s.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(s.type.search[b+a]=s.type.search.html)})}function Nb(a){return function(){var b=[za(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return m.ext.internal[a].apply(this,b)}}var m,s,t,p,r,Ya={},Ob=/[\r\n]/g,Ca=/<.*?>/g,ac=/^[\w\+\-]/,bc=/[\w\+\-]$/,Yb=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)",
"g"),Xa=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,M=function(a){return!a||!0===a||"-"===a?!0:!1},Pb=function(a){var b=parseInt(a,10);return!isNaN(b)&&isFinite(a)?b:null},Qb=function(a,b){Ya[b]||(Ya[b]=RegExp(va(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace(Ya[b],"."):a},Za=function(a,b,c){var d="string"===typeof a;if(M(a))return!0;b&&d&&(a=Qb(a,b));c&&d&&(a=a.replace(Xa,""));return!isNaN(parseFloat(a))&&isFinite(a)},Rb=function(a,b,c){return M(a)?!0:!(M(a)||"string"===
typeof a)?null:Za(a.replace(Ca,""),b,c)?!0:null},D=function(a,b,c){var d=[],e=0,f=a.length;if(c!==k)for(;e<f;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<f;e++)a[e]&&d.push(a[e][b]);return d},ja=function(a,b,c,d){var e=[],f=0,g=b.length;if(d!==k)for(;f<g;f++)a[b[f]][c]&&e.push(a[b[f]][c][d]);else for(;f<g;f++)e.push(a[b[f]][c]);return e},X=function(a,b){var c=[],d;b===k?(b=0,d=a):(d=b,b=a);for(var e=b;e<d;e++)c.push(e);return c},Sb=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);
return b},pa=function(a){var b=[],c,d,e=a.length,f,g=0;d=0;a:for(;d<e;d++){c=a[d];for(f=0;f<g;f++)if(b[f]===c)continue a;b.push(c);g++}return b},A=function(a,b,c){a[b]!==k&&(a[c]=a[b])},da=/\[.*?\]$/,V=/\(\)$/,wa=h("<div>")[0],Zb=wa.textContent!==k,$b=/<.*?>/g;m=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new t(za(this[s.iApiIndex])):new t(this)};this.fnAddData=function(a,b){var c=this.api(!0),
d=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===k||b)&&c.draw();return d.flatten().toArray()};this.fnAdjustColumnSizing=function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===k||a?b.draw(!1):(""!==d.sX||""!==d.sY)&&Z(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===k||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,b,c){var d=this.api(!0),a=d.rows(a),e=a.settings()[0],
h=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,h);(c===k||c)&&d.draw();return h};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(a)};this.fnFilter=function(a,b,c,d,e,h){e=this.api(!0);null===b||b===k?e.search(a,c,d,h):e.column(b).search(a,c,d,h);e.draw()};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==k){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==k||"td"==d||"th"==d?c.cell(a,b).data():c.row(a).data()||null}return c.data().toArray()};
this.fnGetNodes=function(a){var b=this.api(!0);return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};this.fnPageChange=function(a,b){var c=this.api(!0).page(a);
(b===k||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===k||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return za(this[s.iApiIndex])};this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,d,e){var h=this.api(!0);c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);(e===k||e)&&h.columns.adjust();(d===k||d)&&h.draw();return 0};this.fnVersionCheck=
s.fnVersionCheck;var b=this,c=a===k,d=this.length;c&&(a={});this.oApi=this.internal=s.internal;for(var e in m.ext.internal)e&&(this[e]=Nb(e));this.each(function(){var e={},e=1<d?Lb(e,a,!0):a,g=0,j,i=this.getAttribute("id"),o=!1,l=m.defaults,q=h(this);if("table"!=this.nodeName.toLowerCase())K(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{eb(l);fb(l.column);J(l,l,!0);J(l.column,l.column,!0);J(l,h.extend(e,q.data()));var u=m.settings,g=0;for(j=u.length;g<j;g++){var p=u[g];if(p.nTable==
this||p.nTHead.parentNode==this||p.nTFoot&&p.nTFoot.parentNode==this){g=e.bRetrieve!==k?e.bRetrieve:l.bRetrieve;if(c||g)return p.oInstance;if(e.bDestroy!==k?e.bDestroy:l.bDestroy){p.oInstance.fnDestroy();break}else{K(p,0,"Cannot reinitialise DataTable",3);return}}if(p.sTableId==this.id){u.splice(g,1);break}}if(null===i||""===i)this.id=i="DataTables_Table_"+m.ext._unique++;var n=h.extend(!0,{},m.models.oSettings,{sDestroyWidth:q[0].style.width,sInstance:i,sTableId:i});n.nTable=this;n.oApi=b.internal;
n.oInit=e;u.push(n);n.oInstance=1===b.length?b:q.dataTable();eb(e);e.oLanguage&&Fa(e.oLanguage);e.aLengthMenu&&!e.iDisplayLength&&(e.iDisplayLength=h.isArray(e.aLengthMenu[0])?e.aLengthMenu[0][0]:e.aLengthMenu[0]);e=Lb(h.extend(!0,{},l),e);F(n.oFeatures,e,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));F(n,e,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu",
"sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);F(n.oScroll,e,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);F(n.oLanguage,e,"fnInfoCallback");z(n,"aoDrawCallback",
e.fnDrawCallback,"user");z(n,"aoServerParams",e.fnServerParams,"user");z(n,"aoStateSaveParams",e.fnStateSaveParams,"user");z(n,"aoStateLoadParams",e.fnStateLoadParams,"user");z(n,"aoStateLoaded",e.fnStateLoaded,"user");z(n,"aoRowCallback",e.fnRowCallback,"user");z(n,"aoRowCreatedCallback",e.fnCreatedRow,"user");z(n,"aoHeaderCallback",e.fnHeaderCallback,"user");z(n,"aoFooterCallback",e.fnFooterCallback,"user");z(n,"aoInitComplete",e.fnInitComplete,"user");z(n,"aoPreDrawCallback",e.fnPreDrawCallback,
"user");n.rowIdFn=Q(e.rowId);gb(n);i=n.oClasses;e.bJQueryUI?(h.extend(i,m.ext.oJUIClasses,e.oClasses),e.sDom===l.sDom&&"lfrtip"===l.sDom&&(n.sDom='<"H"lfr>t<"F"ip>'),n.renderer)?h.isPlainObject(n.renderer)&&!n.renderer.header&&(n.renderer.header="jqueryui"):n.renderer="jqueryui":h.extend(i,m.ext.classes,e.oClasses);q.addClass(i.sTable);n.iInitDisplayStart===k&&(n.iInitDisplayStart=e.iDisplayStart,n._iDisplayStart=e.iDisplayStart);null!==e.iDeferLoading&&(n.bDeferLoading=!0,g=h.isArray(e.iDeferLoading),
n._iRecordsDisplay=g?e.iDeferLoading[0]:e.iDeferLoading,n._iRecordsTotal=g?e.iDeferLoading[1]:e.iDeferLoading);var t=n.oLanguage;h.extend(!0,t,e.oLanguage);""!==t.sUrl&&(h.ajax({dataType:"json",url:t.sUrl,success:function(a){Fa(a);J(l.oLanguage,a);h.extend(true,t,a);ia(n)},error:function(){ia(n)}}),o=!0);null===e.asStripeClasses&&(n.asStripeClasses=[i.sStripeOdd,i.sStripeEven]);var g=n.asStripeClasses,r=q.children("tbody").find("tr").eq(0);-1!==h.inArray(!0,h.map(g,function(a){return r.hasClass(a)}))&&
(h("tbody tr",this).removeClass(g.join(" ")),n.asDestroyStripes=g.slice());u=[];g=this.getElementsByTagName("thead");0!==g.length&&(fa(n.aoHeader,g[0]),u=qa(n));if(null===e.aoColumns){p=[];g=0;for(j=u.length;g<j;g++)p.push(null)}else p=e.aoColumns;g=0;for(j=p.length;g<j;g++)Ga(n,u?u[g]:null);ib(n,e.aoColumnDefs,p,function(a,b){la(n,a,b)});if(r.length){var s=function(a,b){return a.getAttribute("data-"+b)!==null?b:null};h(r[0]).children("th, td").each(function(a,b){var c=n.aoColumns[a];if(c.mData===
a){var d=s(b,"sort")||s(b,"order"),e=s(b,"filter")||s(b,"search");if(d!==null||e!==null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+d:k,type:d!==null?a+".@data-"+d:k,filter:e!==null?a+".@data-"+e:k};la(n,a)}}})}var w=n.oFeatures;e.bStateSave&&(w.bStateSave=!0,Kb(n,e),z(n,"aoDrawCallback",ya,"state_save"));if(e.aaSorting===k){u=n.aaSorting;g=0;for(j=u.length;g<j;g++)u[g][1]=n.aoColumns[g].asSorting[0]}xa(n);w.bSort&&z(n,"aoDrawCallback",function(){if(n.bSorted){var a=W(n),b={};h.each(a,function(a,
c){b[c.src]=c.dir});v(n,null,"order",[n,a,b]);Jb(n)}});z(n,"aoDrawCallback",function(){(n.bSorted||y(n)==="ssp"||w.bDeferRender)&&xa(n)},"sc");g=q.children("caption").each(function(){this._captionSide=q.css("caption-side")});j=q.children("thead");0===j.length&&(j=h("<thead/>").appendTo(this));n.nTHead=j[0];j=q.children("tbody");0===j.length&&(j=h("<tbody/>").appendTo(this));n.nTBody=j[0];j=q.children("tfoot");if(0===j.length&&0<g.length&&(""!==n.oScroll.sX||""!==n.oScroll.sY))j=h("<tfoot/>").appendTo(this);
0===j.length||0===j.children().length?q.addClass(i.sNoFooter):0<j.length&&(n.nTFoot=j[0],fa(n.aoFooter,n.nTFoot));if(e.aaData)for(g=0;g<e.aaData.length;g++)N(n,e.aaData[g]);else(n.bDeferLoading||"dom"==y(n))&&ma(n,h(n.nTBody).children("tr"));n.aiDisplay=n.aiDisplayMaster.slice();n.bInitialised=!0;!1===o&&ia(n)}});b=null;return this};var Tb=[],x=Array.prototype,cc=function(a){var b,c,d=m.settings,e=h.map(d,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=
h.inArray(a,e),-1!==b?[d[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=h(a):a instanceof h&&(c=a)}else return[];if(c)return c.map(function(){b=h.inArray(this,e);return-1!==b?d[b]:null}).toArray()};t=function(a,b){if(!(this instanceof t))return new t(a,b);var c=[],d=function(a){(a=cc(a))&&(c=c.concat(a))};if(h.isArray(a))for(var e=0,f=a.length;e<f;e++)d(a[e]);else d(a);this.context=pa(c);b&&h.merge(this,b);this.selector={rows:null,cols:null,opts:null};
t.extend(this,this,Tb)};m.Api=t;h.extend(t.prototype,{any:function(){return 0!==this.count()},concat:x.concat,context:[],count:function(){return this.flatten().length},each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=this.context;return b.length>a?new t(b[a],this[a]):null},filter:function(a){var b=[];if(x.filter)b=x.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new t(this.context,
b)},flatten:function(){var a=[];return new t(this.context,a.concat.apply(a,this.toArray()))},join:x.join,indexOf:x.indexOf||function(a,b){for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1},iterator:function(a,b,c,d){var e=[],f,g,h,i,o,l=this.context,m,p,r=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);g=0;for(h=l.length;g<h;g++){var n=new t(l[g]);if("table"===b)f=c.call(n,l[g],g),f!==k&&e.push(f);else if("columns"===b||"rows"===b)f=c.call(n,l[g],this[g],g),f!==k&&e.push(f);
else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){p=this[g];"column-rows"===b&&(m=Da(l[g],r.opts));i=0;for(o=p.length;i<o;i++)f=p[i],f="cell"===b?c.call(n,l[g],f.row,f.column,g,i):c.call(n,l[g],f,g,i,m),f!==k&&e.push(f)}}return e.length||d?(a=new t(l,a?e.concat.apply([],e):e),b=a.selector,b.rows=r.rows,b.cols=r.cols,b.opts=r.opts,a):this},lastIndexOf:x.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(x.map)b=
x.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new t(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:x.pop,push:x.push,reduce:x.reduce||function(a,b){return hb(this,a,b,0,this.length,1)},reduceRight:x.reduceRight||function(a,b){return hb(this,a,b,this.length-1,-1,-1)},reverse:x.reverse,selector:null,shift:x.shift,sort:x.sort,splice:x.splice,toArray:function(){return x.slice.call(this)},to$:function(){return h(this)},
toJQuery:function(){return h(this)},unique:function(){return new t(this.context,pa(this))},unshift:x.unshift});t.extend=function(a,b,c){if(c.length&&b&&(b instanceof t||b.__dt_wrapper)){var d,e,f,g=function(a,b,c){return function(){var d=b.apply(a,arguments);t.extend(d,d,c.methodExt);return d}};d=0;for(e=c.length;d<e;d++)f=c[d],b[f.name]="function"===typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,t.extend(a,b[f.name],f.propExt)}};t.register=p=function(a,b){if(h.isArray(a))for(var c=
0,d=a.length;c<d;c++)t.register(a[c],b);else for(var e=a.split("."),f=Tb,g,j,c=0,d=e.length;c<d;c++){g=(j=-1!==e[c].indexOf("()"))?e[c].replace("()",""):e[c];var i;a:{i=0;for(var k=f.length;i<k;i++)if(f[i].name===g){i=f[i];break a}i=null}i||(i={name:g,val:{},methodExt:[],propExt:[]},f.push(i));c===d-1?i.val=b:f=j?i.methodExt:i.propExt}};t.registerPlural=r=function(a,b,c){t.register(a,c);t.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof t?a.length?h.isArray(a[0])?
new t(a.context,a[0]):a[0]:k:a})};p("tables()",function(a){var b;if(a){b=t;var c=this.context;if("number"===typeof a)a=[c[a]];else var d=h.map(c,function(a){return a.nTable}),a=h(d).filter(a).map(function(){var a=h.inArray(this,d);return c[a]}).toArray();b=new b(a)}else b=this;return b});p("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new t(b[0]):a});r("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});r("tables().body()",
"table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});r("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});r("tables().footer()","table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});r("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});p("draw()",function(a){return this.iterator("table",
function(b){"page"===a?O(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),T(b,!1===a))})});p("page()",function(a){return a===k?this.page.info().page:this.iterator("table",function(b){Ta(b,a)})});p("page.info()",function(){if(0===this.context.length)return k;var a=this.context[0],b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),
recordsDisplay:d,serverSide:"ssp"===y(a)}});p("page.len()",function(a){return a===k?0!==this.context.length?this.context[0]._iDisplayLength:k:this.iterator("table",function(b){Ra(b,a)})});var Ub=function(a,b,c){if(c){var d=new t(a);d.one("draw",function(){c(d.ajax.json())})}if("ssp"==y(a))T(a,b);else{C(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();ra(a,[],function(c){na(a);for(var c=sa(a,c),d=0,e=c.length;d<e;d++)N(a,c[d]);T(a,b);C(a,!1)})}};p("ajax.json()",function(){var a=this.context;if(0<
a.length)return a[0].json});p("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});p("ajax.reload()",function(a,b){return this.iterator("table",function(c){Ub(c,!1===b,a)})});p("ajax.url()",function(a){var b=this.context;if(a===k){if(0===b.length)return k;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});p("ajax.url().load()",function(a,b){return this.iterator("table",
function(c){Ub(c,!1===b,a)})});var $a=function(a,b,c,d,e){var f=[],g,j,i,o,l,m;i=typeof b;if(!b||"string"===i||"function"===i||b.length===k)b=[b];i=0;for(o=b.length;i<o;i++){j=b[i]&&b[i].split?b[i].split(","):[b[i]];l=0;for(m=j.length;l<m;l++)(g=c("string"===typeof j[l]?h.trim(j[l]):j[l]))&&g.length&&(f=f.concat(g))}a=s.selector[a];if(a.length){i=0;for(o=a.length;i<o;i++)f=a[i](d,e,f)}return pa(f)},ab=function(a){a||(a={});a.filter&&a.search===k&&(a.search=a.filter);return h.extend({search:"none",
order:"current",page:"all"},a)},bb=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Da=function(a,b){var c,d,e,f=[],g=a.aiDisplay;c=a.aiDisplayMaster;var j=b.search;d=b.order;e=b.page;if("ssp"==y(a))return"removed"===j?[]:X(0,c.length);if("current"==e){c=a._iDisplayStart;for(d=a.fnDisplayEnd();c<d;c++)f.push(g[c])}else if("current"==d||"applied"==d)f="none"==j?c.slice():"applied"==j?g.slice():h.map(c,
function(a){return-1===h.inArray(a,g)?a:null});else if("index"==d||"original"==d){c=0;for(d=a.aoData.length;c<d;c++)"none"==j?f.push(c):(e=h.inArray(c,g),(-1===e&&"removed"==j||0<=e&&"applied"==j)&&f.push(c))}return f};p("rows()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=ab(b),c=this.iterator("table",function(c){var e=b;return $a("row",a,function(a){var b=Pb(a);if(b!==null&&!e)return[b];var j=Da(c,e);if(b!==null&&h.inArray(b,j)!==-1)return[b];if(!a)return j;if(typeof a==="function")return h.map(j,
function(b){var e=c.aoData[b];return a(b,e._aData,e.nTr)?b:null});b=Sb(ja(c.aoData,j,"nTr"));if(a.nodeName&&h.inArray(a,b)!==-1)return[a._DT_RowIndex];if(typeof a==="string"&&a.charAt(0)==="#"){j=c.aIds[a.replace(/^#/,"")];if(j!==k)return[j.idx]}return h(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()},c,e)},1);c.selector.rows=a;c.selector.opts=b;return c});p("rows().nodes()",function(){return this.iterator("row",function(a,b){return a.aoData[b].nTr||k},1)});p("rows().data()",function(){return this.iterator(!0,
"rows",function(a,b){return ja(a.aoData,b,"_aData")},1)});r("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var d=b.aoData[c];return"search"===a?d._aFilterData:d._aSortData},1)});r("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){ea(b,c,a)})});r("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,b){return b},1)});r("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,
d=0,e=c.length;d<e;d++)for(var f=0,g=this[d].length;f<g;f++){var h=c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);b.push((!0===a?"#":"")+h)}return new t(c,b)});r("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,f=e[c],g,h,i,o,l;e.splice(c,1);g=0;for(h=e.length;g<h;g++)if(i=e[g],l=i.anCells,null!==i.nTr&&(i.nTr._DT_RowIndex=g),null!==l){i=0;for(o=l.length;i<o;i++)l[i]._DT_CellIndex.row=g}oa(b.aiDisplayMaster,c);oa(b.aiDisplay,c);oa(a[d],c,!1);
Sa(b);c=b.rowIdFn(f._aData);c!==k&&delete b.aIds[c]});this.iterator("table",function(a){for(var c=0,d=a.aoData.length;c<d;c++)a.aoData[c].idx=c});return this});p("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,g,h=[];f=0;for(g=a.length;f<g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(ma(b,c)[0]):h.push(N(b,c));return h},1),c=this.rows(-1);c.pop();h.merge(c,b);return c});p("row()",function(a,b){return bb(this.rows(a,b))});p("row().data()",function(a){var b=
this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:k;b[0].aoData[this[0]]._aData=a;ea(b[0],this[0],"data");return this});p("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});p("row.add()",function(a){a instanceof h&&a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?ma(b,a)[0]:N(b,a)});return this.row(b[0])});var cb=function(a,b){var c=a.context;if(c.length&&
(c=c[0].aoData[b!==k?b:a[0]])&&c._details)c._details.remove(),c._detailsShow=k,c._details=k},Vb=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];if(d._details){(d._detailsShow=b)?d._details.insertAfter(d.nTr):d._details.detach();var e=c[0],f=new t(e),g=e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");0<D(g,"_details").length&&(f.on("draw.dt.DT_details",function(a,b){e===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];
a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",function(a,b){if(e===b)for(var c,d=ca(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",d)}),f.on("destroy.dt.DT_details",function(a,b){if(e===b)for(var c=0,d=g.length;c<d;c++)g[c]._details&&cb(f,c)}))}}};p("row().child()",function(a,b){var c=this.context;if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;if(!0===a)this.child.show();else if(!1===
a)cb(this);else if(c.length&&this.length){var d=c[0],c=c[0].aoData[this[0]],e=[],f=function(a,b){if(h.isArray(a)||a instanceof h)for(var c=0,k=a.length;c<k;c++)f(a[c],b);else a.nodeName&&"tr"===a.nodeName.toLowerCase()?e.push(a):(c=h("<tr><td/></tr>").addClass(b),h("td",c).addClass(b).html(a)[0].colSpan=ca(d),e.push(c[0]))};f(a,b);c._details&&c._details.remove();c._details=h(e);c._detailsShow&&c._details.insertAfter(c.nTr)}return this});p(["row().child.show()","row().child().show()"],function(){Vb(this,
!0);return this});p(["row().child.hide()","row().child().hide()"],function(){Vb(this,!1);return this});p(["row().child.remove()","row().child().remove()"],function(){cb(this);return this});p("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var dc=/^(.+):(name|visIdx|visible)$/,Wb=function(a,b,c,d,e){for(var c=[],d=0,f=e.length;d<f;d++)c.push(B(a,e[d],b));return c};p("columns()",function(a,b){a===k?a="":h.isPlainObject(a)&&
(b=a,a="");var b=ab(b),c=this.iterator("table",function(c){var e=a,f=b,g=c.aoColumns,j=D(g,"sName"),i=D(g,"nTh");return $a("column",e,function(a){var b=Pb(a);if(a==="")return X(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a==="function"){var e=Da(c,f);return h.map(g,function(b,f){return a(f,Wb(c,f,0,0,e),i[f])?f:null})}var k=typeof a==="string"?a.match(dc):"";if(k)switch(k[2]){case "visIdx":case "visible":b=parseInt(k[1],10);if(b<0){var m=h.map(g,function(a,b){return a.bVisible?b:null});
return[m[m.length+b]]}return[$(c,b)];case "name":return h.map(j,function(a,b){return a===k[1]?b:null})}else return h(i).filter(a).map(function(){return h.inArray(this,i)}).toArray()},c,f)},1);c.selector.cols=a;c.selector.opts=b;return c});r("columns().header()","column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh},1)});r("columns().footer()","column().footer()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf},1)});r("columns().data()",
"column().data()",function(){return this.iterator("column-rows",Wb,1)});r("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},1)});r("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,f){return ja(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});r("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return ja(a.aoData,
e,"anCells",b)},1)});r("columns().visible()","column().visible()",function(a,b){return this.iterator("column",function(c,d){if(a===k)return c.aoColumns[d].bVisible;var e=c.aoColumns,f=e[d],g=c.aoData,j,i,m;if(a!==k&&f.bVisible!==a){if(a){var l=h.inArray(!0,D(e,"bVisible"),d+1);j=0;for(i=g.length;j<i;j++)m=g[j].nTr,e=g[j].anCells,m&&m.insertBefore(e[d],e[l]||null)}else h(D(c.aoData,"anCells",d)).detach();f.bVisible=a;ga(c,c.aoHeader);ga(c,c.aoFooter);if(b===k||b)U(c),(c.oScroll.sX||c.oScroll.sY)&&
Z(c);v(c,null,"column-visibility",[c,d,a,b]);ya(c)}})});r("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?ba(b,c):c},1)});p("columns.adjust()",function(){return this.iterator("table",function(a){U(a)},1)});p("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===a||"toData"===a)return $(c,b);if("fromData"===a||"toVisible"===a)return ba(c,b)}});p("column()",function(a,b){return bb(this.columns(a,
b))});p("cells()",function(a,b,c){h.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",function(b){var d=a,e=ab(c),f=b.aoData,g=Da(b,e),j=Sb(ja(f,g,"anCells")),i=h([].concat.apply([],j)),l,m=b.aoColumns.length,o,p,t,r,s,v;return $a("cell",d,function(a){var c=typeof a==="function";if(a===null||a===k||c){o=[];p=0;for(t=g.length;p<t;p++){l=g[p];for(r=0;r<m;r++){s={row:l,column:r};if(c){v=f[l];a(s,B(b,l,r),v.anCells?
v.anCells[r]:null)&&o.push(s)}else o.push(s)}}return o}return h.isPlainObject(a)?[a]:i.filter(a).map(function(a,b){return{row:b._DT_CellIndex.row,column:b._DT_CellIndex.column}}).toArray()},b,e)});var d=this.columns(b,c),e=this.rows(a,c),f,g,j,i,m,l=this.iterator("table",function(a,b){f=[];g=0;for(j=e[b].length;g<j;g++){i=0;for(m=d[b].length;i<m;i++)f.push({row:e[b][g],column:d[b][i]})}return f},1);h.extend(l.selector,{cols:b,rows:a,opts:c});return l});r("cells().nodes()","cell().node()",function(){return this.iterator("cell",
function(a,b,c){return(a=a.aoData[b].anCells)?a[c]:k},1)});p("cells().data()",function(){return this.iterator("cell",function(a,b,c){return B(a,b,c)},1)});r("cells().cache()","cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});r("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,d){return B(b,c,d,a)},1)});r("cells().indexes()","cell().index()",function(){return this.iterator("cell",
function(a,b,c){return{row:b,column:c,columnVisible:ba(a,c)}},1)});r("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,c,d){ea(b,c,a,d)})});p("cell()",function(a,b,c){return bb(this.cells(a,b,c))});p("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?B(b[0],c[0].row,c[0].column):k;jb(b[0],c[0].row,c[0].column,a);ea(b[0],c[0].row,"data",c[0].column);return this});p("order()",function(a,b){var c=this.context;if(a===
k)return 0!==c.length?c[0].aaSorting:k;"number"===typeof a?a=[[a,b]]:h.isArray(a[0])||(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=a.slice()})});p("order.listener()",function(a,b,c){return this.iterator("table",function(d){Oa(d,a,b,c)})});p("order.fixed()",function(a){if(!a){var b=this.context,b=b.length?b[0].aaSortingFixed:k;return h.isArray(b)?{pre:b}:b}return this.iterator("table",function(b){b.aaSortingFixed=h.extend(!0,{},a)})});p(["columns().order()",
"column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];h.each(b[d],function(b,c){e.push([c,a])});c.aaSorting=e})});p("search()",function(a,b,c,d){var e=this.context;return a===k?0!==e.length?e[0].oPreviousSearch.sSearch:k:this.iterator("table",function(e){e.oFeatures.bFilter&&ha(e,h.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});r("columns().search()","column().search()",function(a,
b,c,d){return this.iterator("column",function(e,f){var g=e.aoPreSearchCols;if(a===k)return g[f].sSearch;e.oFeatures.bFilter&&(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),ha(e,e.oPreviousSearch,1))})});p("state()",function(){return this.context.length?this.context[0].oSavedState:null});p("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});p("state.loaded()",function(){return this.context.length?
this.context[0].oLoadedState:null});p("state.save()",function(){return this.iterator("table",function(a){ya(a)})});m.versionCheck=m.fnVersionCheck=function(a){for(var b=m.version.split("."),a=a.split("."),c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};m.isDataTable=m.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;h.each(m.settings,function(a,e){var f=e.nScrollHead?h("table",e.nScrollHead)[0]:null,g=e.nScrollFoot?h("table",e.nScrollFoot)[0]:
null;if(e.nTable===b||f===b||g===b)c=!0});return c};m.tables=m.fnTables=function(a){var b=!1;h.isPlainObject(a)&&(b=a.api,a=a.visible);var c=h.map(m.settings,function(b){if(!a||a&&h(b.nTable).is(":visible"))return b.nTable});return b?new t(c):c};m.util={throttle:ua,escapeRegex:va};m.camelToHungarian=J;p("$()",function(a,b){var c=this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))});h.each(["on","one","off"],function(a,b){p(b+"()",function(){var a=Array.prototype.slice.call(arguments);
a[0].match(/\.dt\b/)||(a[0]+=".dt");var d=h(this.tables().nodes());d[b].apply(d,a);return this})});p("clear()",function(){return this.iterator("table",function(a){na(a)})});p("settings()",function(){return new t(this.context,this.context)});p("init()",function(){var a=this.context;return a.length?a[0].oInit:null});p("data()",function(){return this.iterator("table",function(a){return D(a.aoData,"_aData")}).flatten()});p("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=
b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,g=b.nTHead,j=b.nTFoot,i=h(e),f=h(f),k=h(b.nTableWrapper),l=h.map(b.aoData,function(a){return a.nTr}),p;b.bDestroying=!0;v(b,"aoDestroyCallback","destroy",[b]);a||(new t(b)).columns().visible(!0);k.unbind(".DT").find(":not(tbody *)").unbind(".DT");h(E).unbind(".DT-"+b.sInstance);e!=g.parentNode&&(i.children("thead").detach(),i.append(g));j&&e!=j.parentNode&&(i.children("tfoot").detach(),i.append(j));b.aaSorting=[];b.aaSortingFixed=[];xa(b);
h(l).removeClass(b.asStripeClasses.join(" "));h("th, td",g).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);b.bJUI&&(h("th span."+d.sSortIcon+", td span."+d.sSortIcon,g).detach(),h("th, td",g).each(function(){var a=h("div."+d.sSortJUIWrapper,this);h(this).append(a.contents());a.detach()}));f.children().detach();f.append(l);g=a?"remove":"detach";i[g]();k[g]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),i.css("width",b.sDestroyWidth).removeClass(d.sTable),(p=
b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%p])}));c=h.inArray(b,m.settings);-1!==c&&m.settings.splice(c,1)})});h.each(["column","row","cell"],function(a,b){p(b+"s().every()",function(a){var d=this.selector.opts,e=this;return this.iterator(b,function(f,g,h,i,m){a.call(e[b](g,"cell"===b?h:d,"cell"===b?d:k),g,h,i,m)})})});p("i18n()",function(a,b,c){var d=this.context[0],a=Q(a)(d.oLanguage);a===k&&(a=b);c!==k&&h.isPlainObject(a)&&(a=a[c]!==k?a[c]:a._);
return a.replace("%d",c)});m.version="1.10.10";m.settings=[];m.models={};m.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};m.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};m.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,
sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};m.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,
bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+
a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+"_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},
oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:h.extend({},
m.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};Y(m.defaults);m.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};
Y(m.defaults.column);m.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],
aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",
iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==y(this)?
1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==y(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,f=e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};
m.ext=s={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:m.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:m.version};h.extend(s,{afnFiltering:s.search,aTypes:s.type.detect,ofnSearch:s.type.search,oSort:s.type.order,afnSortData:s.order,aoFeatures:s.feature,oApi:s.internal,oStdClasses:s.classes,
oPagination:s.pager});h.extend(m.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",
sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",
sJUIHeader:"",sJUIFooter:""});var Ea="",Ea="",G=Ea+"ui-state-default",ka=Ea+"css_right ui-icon ui-icon-",Xb=Ea+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";h.extend(m.ext.oJUIClasses,m.ext.classes,{sPageButton:"fg-button ui-button "+G,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:G+" sorting_asc",sSortDesc:G+" sorting_desc",sSortable:G+" sorting",
sSortableAsc:G+" sorting_asc_disabled",sSortableDesc:G+" sorting_desc_disabled",sSortableNone:G+" sorting_disabled",sSortJUIAsc:ka+"triangle-1-n",sSortJUIDesc:ka+"triangle-1-s",sSortJUI:ka+"carat-2-n-s",sSortJUIAscAllowed:ka+"carat-1-n",sSortJUIDescAllowed:ka+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+G,sScrollFoot:"dataTables_scrollFoot "+G,sHeaderTH:G,sFooterTH:G,sJUIHeader:Xb+" ui-corner-tl ui-corner-tr",sJUIFooter:Xb+
" ui-corner-bl ui-corner-br"});var Mb=m.ext.pager;h.extend(Mb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(a,b){return[Aa(a,b)]},simple_numbers:function(a,b){return["previous",Aa(a,b),"next"]},full_numbers:function(a,b){return["first","previous",Aa(a,b),"next","last"]},_numbers:Aa,numbers_length:7});h.extend(!0,m.ext.renderer,{pageButton:{_:function(a,b,c,d,e,f){var g=a.oClasses,j=a.oLanguage.oPaginate,i=a.oLanguage.oAria.paginate||
{},k,l,m=0,p=function(b,d){var n,r,t,s,v=function(b){Ta(a,b.data.action,true)};n=0;for(r=d.length;n<r;n++){s=d[n];if(h.isArray(s)){t=h("<"+(s.DT_el||"div")+"/>").appendTo(b);p(t,s)}else{k=null;l="";switch(s){case "ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;case "first":k=j.sFirst;l=s+(e>0?"":" "+g.sPageButtonDisabled);break;case "previous":k=j.sPrevious;l=s+(e>0?"":" "+g.sPageButtonDisabled);break;case "next":k=j.sNext;l=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;case "last":k=
j.sLast;l=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;default:k=s+1;l=e===s?g.sPageButtonActive:""}if(k!==null){t=h("<a>",{"class":g.sPageButton+" "+l,"aria-controls":a.sTableId,"aria-label":i[s],"data-dt-idx":m,tabindex:a.iTabIndex,id:c===0&&typeof s==="string"?a.sTableId+"_"+s:null}).html(k).appendTo(b);Wa(t,{action:s},v);m++}}}},r;try{r=h(b).find(H.activeElement).data("dt-idx")}catch(n){}p(h(b).empty(),d);r&&h(b).find("[data-dt-idx="+r+"]").focus()}}});h.extend(m.ext.type.detect,[function(a,b){var c=
b.oLanguage.sDecimal;return Za(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&(!ac.test(a)||!bc.test(a)))return null;var b=Date.parse(a);return null!==b&&!isNaN(b)||M(a)?"date":null},function(a,b){var c=b.oLanguage.sDecimal;return Za(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Rb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Rb(a,c,!0)?"html-num-fmt"+c:null},function(a){return M(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":
null}]);h.extend(m.ext.type.search,{html:function(a){return M(a)?a:"string"===typeof a?a.replace(Ob," ").replace(Ca,""):""},string:function(a){return M(a)?a:"string"===typeof a?a.replace(Ob," "):a}});var Ba=function(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Qb(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};h.extend(s.type.order,{"date-pre":function(a){return Date.parse(a)||0},"html-pre":function(a){return M(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():
a+""},"string-pre":function(a){return M(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,b){return a<b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});db("");h.extend(!0,m.ext.renderer,{header:{_:function(a,b,c,d){h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass)}})},jqueryui:function(a,
b,c,d){h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(h[e]=="asc"?d.sSortJUIAsc:
h[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI)}})}}});m.render={number:function(a,b,c,d,e){return{display:function(f){if("number"!==typeof f&&"string"!==typeof f)return f;var g=0>f?"-":"",h=parseFloat(f);if(isNaN(h))return f;f=Math.abs(h);h=parseInt(f,10);f=c?b+(f-h).toFixed(c).substring(2):"";return g+(d||"")+h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+f+(e||"")}}},text:function(){return{display:function(a){return"string"===typeof a?a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):
a}}}};h.extend(m.ext.internal,{_fnExternApiFunc:Nb,_fnBuildAjax:ra,_fnAjaxUpdate:lb,_fnAjaxParameters:ub,_fnAjaxUpdateDraw:vb,_fnAjaxDataSrc:sa,_fnAddColumn:Ga,_fnColumnOptions:la,_fnAdjustColumnSizing:U,_fnVisibleToColumnIndex:$,_fnColumnIndexToVisible:ba,_fnVisbleColumns:ca,_fnGetColumns:aa,_fnColumnTypes:Ia,_fnApplyColumnDefs:ib,_fnHungarianMap:Y,_fnCamelToHungarian:J,_fnLanguageCompat:Fa,_fnBrowserDetect:gb,_fnAddData:N,_fnAddTr:ma,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==k?b._DT_RowIndex:
null},_fnNodeToColumnIndex:function(a,b,c){return h.inArray(c,a.aoData[b].anCells)},_fnGetCellData:B,_fnSetCellData:jb,_fnSplitObjNotation:La,_fnGetObjectDataFn:Q,_fnSetObjectDataFn:R,_fnGetDataMaster:Ma,_fnClearTable:na,_fnDeleteIndex:oa,_fnInvalidate:ea,_fnGetRowElements:Ka,_fnCreateTr:Ja,_fnBuildHead:kb,_fnDrawHead:ga,_fnDraw:O,_fnReDraw:T,_fnAddOptionsHtml:nb,_fnDetectHeader:fa,_fnGetUniqueThs:qa,_fnFeatureHtmlFilter:pb,_fnFilterComplete:ha,_fnFilterCustom:yb,_fnFilterColumn:xb,_fnFilter:wb,_fnFilterCreateSearch:Qa,
_fnEscapeRegex:va,_fnFilterData:zb,_fnFeatureHtmlInfo:sb,_fnUpdateInfo:Cb,_fnInfoMacros:Db,_fnInitialise:ia,_fnInitComplete:ta,_fnLengthChange:Ra,_fnFeatureHtmlLength:ob,_fnFeatureHtmlPaginate:tb,_fnPageChange:Ta,_fnFeatureHtmlProcessing:qb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:rb,_fnScrollDraw:Z,_fnApplyToChildren:I,_fnCalculateColumnWidths:Ha,_fnThrottle:ua,_fnConvertToWidth:Fb,_fnGetWidestNode:Gb,_fnGetMaxLenString:Hb,_fnStringToCss:w,_fnSortFlatten:W,_fnSort:mb,_fnSortAria:Jb,_fnSortListener:Va,
_fnSortAttachListener:Oa,_fnSortingClasses:xa,_fnSortData:Ib,_fnSaveState:ya,_fnLoadState:Kb,_fnSettingsFromNode:za,_fnLog:K,_fnMap:F,_fnBindAction:Wa,_fnCallbackReg:z,_fnCallbackFire:v,_fnLengthOverflow:Sa,_fnRenderer:Pa,_fnDataSource:y,_fnRowAttributes:Na,_fnCalculateEnd:function(){}});h.fn.dataTable=m;m.$=h;h.fn.dataTableSettings=m.settings;h.fn.dataTableExt=m.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api()};h.each(m,function(a,b){h.fn.DataTable[a]=b});return h.fn.dataTable});

/*dataTables.bootstrap.min.js*/
/*!
 DataTables Bootstrap 3 integration
 ©2011-2014 SpryMedia Ltd - datatables.net/license
*/
(function(l,q){var e=function(b,c){b.extend(!0,c.defaults,{dom:"<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",renderer:"bootstrap"});b.extend(c.ext.classes,{sWrapper:"dataTables_wrapper form-inline dt-bootstrap",sFilterInput:"form-control input-sm",sLengthSelect:"form-control input-sm"});c.ext.renderer.pageButton.bootstrap=function(g,e,r,s,i,m){var t=new c.Api(g),u=g.oClasses,j=g.oLanguage.oPaginate,d,f,n=0,p=function(c,e){var k,h,o,a,l=function(a){a.preventDefault();
b(a.currentTarget).hasClass("disabled")||t.page(a.data.action).draw(!1)};k=0;for(h=e.length;k<h;k++)if(a=e[k],b.isArray(a))p(c,a);else{f=d="";switch(a){case "ellipsis":d="&hellip;";f="disabled";break;case "first":d=j.sFirst;f=a+(0<i?"":" disabled");break;case "previous":d=j.sPrevious;f=a+(0<i?"":" disabled");break;case "next":d=j.sNext;f=a+(i<m-1?"":" disabled");break;case "last":d=j.sLast;f=a+(i<m-1?"":" disabled");break;default:d=a+1,f=i===a?"active":""}d&&(o=b("<li>",{"class":u.sPageButton+" "+
f,id:0===r&&"string"===typeof a?g.sTableId+"_"+a:null}).append(b("<a>",{href:"#","aria-controls":g.sTableId,"data-dt-idx":n,tabindex:g.iTabIndex}).html(d)).appendTo(c),g.oApi._fnBindAction(o,{action:a},l),n++)}},h;try{h=b(q.activeElement).data("dt-idx")}catch(l){}p(b(e).empty().html('<ul class="pagination"/>').children("ul"),s);h&&b(e).find("[data-dt-idx="+h+"]").focus()};c.TableTools&&(b.extend(!0,c.TableTools.classes,{container:"DTTT btn-group",buttons:{normal:"btn btn-default",disabled:"disabled"},
collection:{container:"DTTT_dropdown dropdown-menu",buttons:{normal:"",disabled:"disabled"}},print:{info:"DTTT_print_info"},select:{row:"active"}}),b.extend(!0,c.TableTools.DEFAULTS.oTags,{collection:{container:"ul",button:"li",liner:"a"}}))};"function"===typeof define&&define.amd?define(["jquery","datatables"],e):"object"===typeof exports?e(require("jquery"),require("datatables")):jQuery&&e(jQuery,jQuery.fn.dataTable)})(window,document);

/*dataTables.responsive.js*/
/*! Responsive 2.0.1-dev
 * 2014-2015 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     Responsive
 * @description Responsive tables plug-in for DataTables
 * @version     2.0.1-dev
 * @file        dataTables.responsive.js
 * @author      SpryMedia Ltd (www.sprymedia.co.uk)
 * @contact     www.sprymedia.co.uk/contact
 * @copyright   Copyright 2014-2015 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license/mit
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */
(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery', 'datatables.net'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = function (root, $) {
			if ( ! root ) {
				root = window;
			}

			if ( ! $ || ! $.fn.dataTable ) {
				$ = require('datatables.net')(root, $).$;
			}

			return factory( $, root, root.document );
		};
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}(function( $, window, document, undefined ) {
'use strict';
var DataTable = $.fn.dataTable;


/**
 * Responsive is a plug-in for the DataTables library that makes use of
 * DataTables' ability to change the visibility of columns, changing the
 * visibility of columns so the displayed columns fit into the table container.
 * The end result is that complex tables will be dynamically adjusted to fit
 * into the viewport, be it on a desktop, tablet or mobile browser.
 *
 * Responsive for DataTables has two modes of operation, which can used
 * individually or combined:
 *
 * * Class name based control - columns assigned class names that match the
 *   breakpoint logic can be shown / hidden as required for each breakpoint.
 * * Automatic control - columns are automatically hidden when there is no
 *   room left to display them. Columns removed from the right.
 *
 * In additional to column visibility control, Responsive also has built into
 * options to use DataTables' child row display to show / hide the information
 * from the table that has been hidden. There are also two modes of operation
 * for this child row display:
 *
 * * Inline - when the control element that the user can use to show / hide
 *   child rows is displayed inside the first column of the table.
 * * Column - where a whole column is dedicated to be the show / hide control.
 *
 * Initialisation of Responsive is performed by:
 *
 * * Adding the class `responsive` or `dt-responsive` to the table. In this case
 *   Responsive will automatically be initialised with the default configuration
 *   options when the DataTable is created.
 * * Using the `responsive` option in the DataTables configuration options. This
 *   can also be used to specify the configuration options, or simply set to
 *   `true` to use the defaults.
 *
 *  @class
 *  @param {object} settings DataTables settings object for the host table
 *  @param {object} [opts] Configuration options
 *  @requires jQuery 1.7+
 *  @requires DataTables 1.10.3+
 *
 *  @example
 *      $('#example').DataTable( {
 *        responsive: true
 *      } );
 *    } );
 */
var Responsive = function ( settings, opts ) {
	// Sanity check that we are using DataTables 1.10 or newer
	if ( ! DataTable.versionCheck || ! DataTable.versionCheck( '1.10.3' ) ) {
		throw 'DataTables Responsive requires DataTables 1.10.3 or newer';
	}

	this.s = {
		dt: new DataTable.Api( settings ),
		columns: [],
		current: []
	};

	// Check if responsive has already been initialised on this table
	if ( this.s.dt.settings()[0].responsive ) {
		return;
	}

	// details is an object, but for simplicity the user can give it as a string
	if ( opts && typeof opts.details === 'string' ) {
		opts.details = { type: opts.details };
	}

	this.c = $.extend( true, {}, Responsive.defaults, DataTable.defaults.responsive, opts );
	settings.responsive = this;
	this._constructor();
};

$.extend( Responsive.prototype, {
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Constructor
	 */

	/**
	 * Initialise the Responsive instance
	 *
	 * @private
	 */
	_constructor: function ()
	{
		var that = this;
		var dt = this.s.dt;
		var dtPrivateSettings = dt.settings()[0];
		var oldWindowWidth = $(window).width();

		dt.settings()[0]._responsive = this;

		// Use DataTables' throttle function to avoid processor thrashing on
		// resize
		$(window).on( 'resize.dtr orientationchange.dtr', DataTable.util.throttle( function () {
			// iOS has a bug whereby resize can fire when only scrolling
			// See: http://stackoverflow.com/questions/8898412
			var width = $(window).width();

			if ( width !== oldWindowWidth ) {
				that._resize();
				oldWindowWidth = width;
			}
		} ) );

		// DataTables doesn't currently trigger an event when a row is added, so
		// we need to hook into its private API to enforce the hidden rows when
		// new data is added
		dtPrivateSettings.oApi._fnCallbackReg( dtPrivateSettings, 'aoRowCreatedCallback', function (tr, data, idx) {
			if ( $.inArray( false, that.s.current ) !== -1 ) {
				$('td, th', tr).each( function ( i ) {
					var idx = dt.column.index( 'toData', i );

					if ( that.s.current[idx] === false ) {
						$(this).css('display', 'none');
					}
				} );
			}
		} );

		// Destroy event handler
		dt.on( 'destroy.dtr', function () {
			dt.off( '.dtr' );
			$( dt.table().body() ).off( '.dtr' );
			$(window).off( 'resize.dtr orientationchange.dtr' );

			// Restore the columns that we've hidden
			$.each( that.s.current, function ( i, val ) {
				if ( val === false ) {
					that._setColumnVis( i, true );
				}
			} );
		} );

		// Reorder the breakpoints array here in case they have been added out
		// of order
		this.c.breakpoints.sort( function (a, b) {
			return a.width < b.width ? 1 :
				a.width > b.width ? -1 : 0;
		} );

		this._classLogic();
		this._resizeAuto();

		// Details handler
		var details = this.c.details;

		if ( details.type !== false ) {
			that._detailsInit();

			// DataTables will trigger this event on every column it shows and
			// hides individually
			dt.on( 'column-visibility.dtr', function (e, ctx, col, vis) {
				that._classLogic();
				that._resizeAuto();
				that._resize();
			} );

			// Redraw the details box on each draw which will happen if the data
			// has changed. This is used until DataTables implements a native
			// `updated` event for rows
			dt.on( 'draw.dtr', function () {
				that._redrawChildren();
			} );

			$(dt.table().node()).addClass( 'dtr-'+details.type );
		}

		dt.on( 'column-reorder.dtr', function (e, settings, details) {
			// This requires ColReorder 1.2.1 or newer
			if ( details.drop ) {
				that._classLogic();
				that._resizeAuto();
				that._resize();
			}
		} );

		dt.on( 'init.dtr', function (e, settings, details) {
			that._resizeAuto();
			that._resize();
		} );

		// First pass - draw the table for the current viewport size
		this._resize();
	},


	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Private methods
	 */

	/**
	 * Calculate the visibility for the columns in a table for a given
	 * breakpoint. The result is pre-determined based on the class logic if
	 * class names are used to control all columns, but the width of the table
	 * is also used if there are columns which are to be automatically shown
	 * and hidden.
	 *
	 * @param  {string} breakpoint Breakpoint name to use for the calculation
	 * @return {array} Array of boolean values initiating the visibility of each
	 *   column.
	 *  @private
	 */
	_columnsVisiblity: function ( breakpoint )
	{
		var dt = this.s.dt;
		var columns = this.s.columns;
		var i, ien;

		// Create an array that defines the column ordering based first on the
		// column's priority, and secondly the column index. This allows the
		// columns to be removed from the right if the priority matches
		var order = columns
			.map( function ( col, idx ) {
				return {
					columnIdx: idx,
					priority: col.priority
				};
			} )
			.sort( function ( a, b ) {
				if ( a.priority !== b.priority ) {
					return a.priority - b.priority;
				}
				return a.columnIdx - b.columnIdx;
			} );


		// Class logic - determine which columns are in this breakpoint based
		// on the classes. If no class control (i.e. `auto`) then `-` is used
		// to indicate this to the rest of the function
		var display = $.map( columns, function ( col ) {
			return col.auto && col.minWidth === null ?
				false :
				col.auto === true ?
					'-' :
					$.inArray( breakpoint, col.includeIn ) !== -1;
		} );

		// Auto column control - first pass: how much width is taken by the
		// ones that must be included from the non-auto columns
		var requiredWidth = 0;
		for ( i=0, ien=display.length ; i<ien ; i++ ) {
			if ( display[i] === true ) {
				requiredWidth += columns[i].minWidth;
			}
		}

		// Second pass, use up any remaining width for other columns. For
		// scrolling tables we need to subtract the width of the scrollbar. It
		// may not be requires which makes this sub-optimal, but it would
		// require another full redraw to make complete use of those extra few
		// pixels
		var scrolling = dt.settings()[0].oScroll;
		var bar = scrolling.sY || scrolling.sX ? scrolling.iBarWidth : 0;
		var widthAvailable = dt.table().container().offsetWidth - bar;
		var usedWidth = widthAvailable - requiredWidth;

		// Control column needs to always be included. This makes it sub-
		// optimal in terms of using the available with, but to stop layout
		// thrashing or overflow. Also we need to account for the control column
		// width first so we know how much width is available for the other
		// columns, since the control column might not be the first one shown
		for ( i=0, ien=display.length ; i<ien ; i++ ) {
			if ( columns[i].control ) {
				usedWidth -= columns[i].minWidth;
			}
		}

		// Allow columns to be shown (counting by priority and then right to
		// left) until we run out of room
		var empty = false;
		for ( i=0, ien=order.length ; i<ien ; i++ ) {
			var colIdx = order[i].columnIdx;

			if ( display[colIdx] === '-' && ! columns[colIdx].control && columns[colIdx].minWidth ) {
				// Once we've found a column that won't fit we don't let any
				// others display either, or columns might disappear in the
				// middle of the table
				if ( empty || usedWidth - columns[colIdx].minWidth < 0 ) {
					empty = true;
					display[colIdx] = false;
				}
				else {
					display[colIdx] = true;
				}

				usedWidth -= columns[colIdx].minWidth;
			}
		}

		// Determine if the 'control' column should be shown (if there is one).
		// This is the case when there is a hidden column (that is not the
		// control column). The two loops look inefficient here, but they are
		// trivial and will fly through. We need to know the outcome from the
		// first , before the action in the second can be taken
		var showControl = false;

		for ( i=0, ien=columns.length ; i<ien ; i++ ) {
			if ( ! columns[i].control && ! columns[i].never && ! display[i] ) {
				showControl = true;
				break;
			}
		}

		for ( i=0, ien=columns.length ; i<ien ; i++ ) {
			if ( columns[i].control ) {
				display[i] = showControl;
			}
		}

		// Finally we need to make sure that there is at least one column that
		// is visible
		if ( $.inArray( true, display ) === -1 ) {
			display[0] = true;
		}

		return display;
	},


	/**
	 * Create the internal `columns` array with information about the columns
	 * for the table. This includes determining which breakpoints the column
	 * will appear in, based upon class names in the column, which makes up the
	 * vast majority of this method.
	 *
	 * @private
	 */
	_classLogic: function ()
	{
		var that = this;
		var calc = {};
		var breakpoints = this.c.breakpoints;
		var dt = this.s.dt;
		var columns = dt.columns().eq(0).map( function (i) {
			var column = this.column(i);
			var className = column.header().className;
			var priority = dt.settings()[0].aoColumns[i].responsivePriority;

			if ( priority === undefined ) {
				var dataPriority = $(column.header()).data('priority');

				priority = dataPriority !== undefined ?
					dataPriority * 1 :
					10000;
			}

			return {
				className: className,
				includeIn: [],
				auto:      false,
				control:   false,
				never:     className.match(/\bnever\b/) ? true : false,
				priority:  priority
			};
		} );

		// Simply add a breakpoint to `includeIn` array, ensuring that there are
		// no duplicates
		var add = function ( colIdx, name ) {
			var includeIn = columns[ colIdx ].includeIn;

			if ( $.inArray( name, includeIn ) === -1 ) {
				includeIn.push( name );
			}
		};

		var column = function ( colIdx, name, operator, matched ) {
			var size, i, ien;

			if ( ! operator ) {
				columns[ colIdx ].includeIn.push( name );
			}
			else if ( operator === 'max-' ) {
				// Add this breakpoint and all smaller
				size = that._find( name ).width;

				for ( i=0, ien=breakpoints.length ; i<ien ; i++ ) {
					if ( breakpoints[i].width <= size ) {
						add( colIdx, breakpoints[i].name );
					}
				}
			}
			else if ( operator === 'min-' ) {
				// Add this breakpoint and all larger
				size = that._find( name ).width;

				for ( i=0, ien=breakpoints.length ; i<ien ; i++ ) {
					if ( breakpoints[i].width >= size ) {
						add( colIdx, breakpoints[i].name );
					}
				}
			}
			else if ( operator === 'not-' ) {
				// Add all but this breakpoint
				for ( i=0, ien=breakpoints.length ; i<ien ; i++ ) {
					if ( breakpoints[i].name.indexOf( matched ) === -1 ) {
						add( colIdx, breakpoints[i].name );
					}
				}
			}
		};

		// Loop over each column and determine if it has a responsive control
		// class
		columns.each( function ( col, i ) {
			var classNames = col.className.split(' ');
			var hasClass = false;

			// Split the class name up so multiple rules can be applied if needed
			for ( var k=0, ken=classNames.length ; k<ken ; k++ ) {
				var className = $.trim( classNames[k] );

				if ( className === 'all' ) {
					// Include in all
					hasClass = true;
					col.includeIn = $.map( breakpoints, function (a) {
						return a.name;
					} );
					return;
				}
				else if ( className === 'none' || col.never ) {
					// Include in none (default) and no auto
					hasClass = true;
					return;
				}
				else if ( className === 'control' ) {
					// Special column that is only visible, when one of the other
					// columns is hidden. This is used for the details control
					hasClass = true;
					col.control = true;
					return;
				}

				$.each( breakpoints, function ( j, breakpoint ) {
					// Does this column have a class that matches this breakpoint?
					var brokenPoint = breakpoint.name.split('-');
					var re = new RegExp( '(min\\-|max\\-|not\\-)?('+brokenPoint[0]+')(\\-[_a-zA-Z0-9])?' );
					var match = className.match( re );

					if ( match ) {
						hasClass = true;

						if ( match[2] === brokenPoint[0] && match[3] === '-'+brokenPoint[1] ) {
							// Class name matches breakpoint name fully
							column( i, breakpoint.name, match[1], match[2]+match[3] );
						}
						else if ( match[2] === brokenPoint[0] && ! match[3] ) {
							// Class name matched primary breakpoint name with no qualifier
							column( i, breakpoint.name, match[1], match[2] );
						}
					}
				} );
			}

			// If there was no control class, then automatic sizing is used
			if ( ! hasClass ) {
				col.auto = true;
			}
		} );

		this.s.columns = columns;
	},


	/**
	 * Show the details for the child row
	 *
	 * @param  {DataTables.Api} row    API instance for the row
	 * @param  {boolean}        update Update flag
	 * @private
	 */
	_detailsDisplay: function ( row, update )
	{
		var that = this;
		var dt = this.s.dt;
		var details = this.c.details;

		if ( details && details.type ) {
			var res = details.display( row, update, function () {
				return details.renderer(
					dt, row[0], that._detailsObj(row[0])
				);
			} );

			if ( res === true || res === false ) {
				$(dt.table().node()).triggerHandler( 'responsive-display.dt', [dt, row, res, update] );
			}
		}
	},


	/**
	 * Initialisation for the details handler
	 *
	 * @private
	 */
	_detailsInit: function ()
	{
		var that    = this;
		var dt      = this.s.dt;
		var details = this.c.details;

		// The inline type always uses the first child as the target
		if ( details.type === 'inline' ) {
			details.target = 'td:first-child';
		}

		// Keyboard accessibility
		dt.on( 'draw.dtr', function () {
			that._tabIndexes();
		} );
		that._tabIndexes(); // Initial draw has already happened

		$( dt.table().body() ).on( 'keyup.dtr', 'td', function (e) {
			if ( e.keyCode === 13 && $(this).data('dtr-keyboard') ) {
				$(this).click();
			}
		} );

		// type.target can be a string jQuery selector or a column index
		var target   = details.target;
		var selector = typeof target === 'string' ? target : 'td';

		// Click handler to show / hide the details rows when they are available
		$( dt.table().body() )
			.on( 'click.dtr mousedown.dtr', selector, function (e) {
				// If the table is not collapsed (i.e. there is no hidden columns)
				// then take no action
				if ( ! $(dt.table().node()).hasClass('collapsed' ) ) {
					return;
				}

				// Check that the row is actually a DataTable's controlled node
				if ( ! dt.row( $(this).closest('tr') ).length ) {
					return;
				}

				// For column index, we determine if we should act or not in the
				// handler - otherwise it is already okay
				if ( typeof target === 'number' ) {
					var targetIdx = target < 0 ?
						dt.columns().eq(0).length + target :
						target;

					if ( dt.cell( this ).index().column !== targetIdx ) {
						return;
					}
				}

				// $().closest() includes itself in its check
				var row = dt.row( $(this).closest('tr') );

				// Check event type to do an action
				if ( e.type === 'click' ) {
					// The renderer is given as a function so the caller can execute it
					// only when they need (i.e. if hiding there is no point is running
					// the renderer)
					that._detailsDisplay( row, false );
				}
				else if ( e.type === 'mousedown' ) {
					// For mouse users, prevent the focus ring from showing
					e.preventDefault();
				}
			} );
	},


	/**
	 * Get the details to pass to a renderer for a row
	 * @param  {int} rowIdx Row index
	 * @private
	 */
	_detailsObj: function ( rowIdx )
	{
		var that = this;
		var dt = this.s.dt;

		return $.map( this.s.columns, function( col, i ) {
			if ( col.never ) {
				return;
			}

			return {
				title:       dt.settings()[0].aoColumns[ i ].sTitle,
				data:        dt.cell( rowIdx, i ).render( that.c.orthogonal ),
				hidden:      dt.column( i ).visible() && !that.s.current[ i ],
				columnIndex: i
			};
		} );
	},


	/**
	 * Find a breakpoint object from a name
	 *
	 * @param  {string} name Breakpoint name to find
	 * @return {object}      Breakpoint description object
	 * @private
	 */
	_find: function ( name )
	{
		var breakpoints = this.c.breakpoints;

		for ( var i=0, ien=breakpoints.length ; i<ien ; i++ ) {
			if ( breakpoints[i].name === name ) {
				return breakpoints[i];
			}
		}
	},


	/**
	 * Re-create the contents of the child rows as the display has changed in
	 * some way.
	 *
	 * @private
	 */
	_redrawChildren: function ()
	{
		var that = this;
		var dt = this.s.dt;

		dt.rows( {page: 'current'} ).iterator( 'row', function ( settings, idx ) {
			var row = dt.row( idx );

			that._detailsDisplay( dt.row( idx ), true );
		} );
	},


	/**
	 * Alter the table display for a resized viewport. This involves first
	 * determining what breakpoint the window currently is in, getting the
	 * column visibilities to apply and then setting them.
	 *
	 * @private
	 */
	_resize: function ()
	{
		var that = this;
		var dt = this.s.dt;
		var width = $(window).width();
		var breakpoints = this.c.breakpoints;
		var breakpoint = breakpoints[0].name;
		var columns = this.s.columns;
		var i, ien;
		var oldVis = this.s.current.slice();

		// Determine what breakpoint we are currently at
		for ( i=breakpoints.length-1 ; i>=0 ; i-- ) {
			if ( width <= breakpoints[i].width ) {
				breakpoint = breakpoints[i].name;
				break;
			}
		}
		
		// Show the columns for that break point
		var columnsVis = this._columnsVisiblity( breakpoint );
		this.s.current = columnsVis;

		// Set the class before the column visibility is changed so event
		// listeners know what the state is. Need to determine if there are
		// any columns that are not visible but can be shown
		var collapsedClass = false;
		for ( i=0, ien=columns.length ; i<ien ; i++ ) {
			if ( columnsVis[i] === false && ! columns[i].never && ! columns[i].control ) {
				collapsedClass = true;
				break;
			}
		}

		$( dt.table().node() ).toggleClass( 'collapsed', collapsedClass );

		var changed = false;

		dt.columns().eq(0).each( function ( colIdx, i ) {
			if ( columnsVis[i] !== oldVis[i] ) {
				changed = true;
				that._setColumnVis( colIdx, columnsVis[i] );
			}
		} );

		if ( changed ) {
			this._redrawChildren();

			// Inform listeners of the change
			$(dt.table().node()).trigger( 'responsive-resize.dt', [dt, this.s.current] );
		}
	},


	/**
	 * Determine the width of each column in the table so the auto column hiding
	 * has that information to work with. This method is never going to be 100%
	 * perfect since column widths can change slightly per page, but without
	 * seriously compromising performance this is quite effective.
	 *
	 * @private
	 */
	_resizeAuto: function ()
	{
		var dt = this.s.dt;
		var columns = this.s.columns;

		// Are we allowed to do auto sizing?
		if ( ! this.c.auto ) {
			return;
		}

		// Are there any columns that actually need auto-sizing, or do they all
		// have classes defined
		if ( $.inArray( true, $.map( columns, function (c) { return c.auto; } ) ) === -1 ) {
			return;
		}

		// Clone the table with the current data in it
		var tableWidth   = dt.table().node().offsetWidth;
		var columnWidths = dt.columns;
		var clonedTable  = dt.table().node().cloneNode( false );
		var clonedHeader = $( dt.table().header().cloneNode( false ) ).appendTo( clonedTable );
		var clonedBody   = $( dt.table().body().cloneNode( false ) ).appendTo( clonedTable );

		// Header
		var headerCells = dt.columns()
			.header()
			.filter( function (idx) {
				return dt.column(idx).visible();
			} )
			.to$()
			.clone( false )
			.css( 'display', 'table-cell' );

		// Body rows - we don't need to take account of DataTables' column
		// visibility since we implement our own here (hence the `display` set)
		$(clonedBody)
			.append( $(dt.rows( { page: 'current' } ).nodes()).clone( false ) )
			.find( 'th, td' ).css( 'display', '' );

		// Footer
		var footer = dt.table().footer();
		if ( footer ) {
			var clonedFooter = $( footer.cloneNode( false ) ).appendTo( clonedTable );
			var footerCells = dt.columns()
				.header()
				.filter( function (idx) {
					return dt.column(idx).visible();
				} )
				.to$()
				.clone( false )
				.css( 'display', 'table-cell' );

			$('<tr/>')
				.append( footerCells )
				.appendTo( clonedFooter );
		}

		$('<tr/>')
			.append( headerCells )
			.appendTo( clonedHeader );

		// In the inline case extra padding is applied to the first column to
		// give space for the show / hide icon. We need to use this in the
		// calculation
		if ( this.c.details.type === 'inline' ) {
			$(clonedTable).addClass( 'dtr-inline collapsed' );
		}

		var inserted = $('<div/>')
			.css( {
				width: 1,
				height: 1,
				overflow: 'hidden'
			} )
			.append( clonedTable );

		inserted.insertBefore( dt.table().node() );

		// The cloned header now contains the smallest that each column can be
		headerCells.each( function (i) {
			var idx = dt.column.index( 'fromVisible', i );
			columns[ idx ].minWidth =  this.offsetWidth || 0;
		} );

		inserted.remove();
	},

	/**
	 * Set a column's visibility.
	 *
	 * We don't use DataTables' column visibility controls in order to ensure
	 * that column visibility can Responsive can no-exist. Since only IE8+ is
	 * supported (and all evergreen browsers of course) the control of the
	 * display attribute works well.
	 *
	 * @param {integer} col      Column index
	 * @param {boolean} showHide Show or hide (true or false)
	 * @private
	 */
	_setColumnVis: function ( col, showHide )
	{
		var dt = this.s.dt;
		var display = showHide ? '' : 'none'; // empty string will remove the attr

		$( dt.column( col ).header() ).css( 'display', display );
		$( dt.column( col ).footer() ).css( 'display', display );
		dt.column( col ).nodes().to$().css( 'display', display );
	},


	/**
	 * Update the cell tab indexes for keyboard accessibility. This is called on
	 * every table draw - that is potentially inefficient, but also the least
	 * complex option given that column visibility can change on the fly. Its a
	 * shame user-focus was removed from CSS 3 UI, as it would have solved this
	 * issue with a single CSS statement.
	 *
	 * @private
	 */
	_tabIndexes: function ()
	{
		var dt = this.s.dt;
		var cells = dt.cells( { page: 'current' } ).nodes().to$();
		var ctx = dt.settings()[0];
		var target = this.c.details.target;

		cells.filter( '[data-dtr-keyboard]' ).removeData( '[data-dtr-keyboard]' );

		var selector = typeof target === 'number' ?
			':eq('+target+')' :
			target;

		$( selector, dt.rows( { page: 'current' } ).nodes() )
			.attr( 'tabIndex', ctx.iTabIndex )
			.data( 'dtr-keyboard', 1 );
	}
} );


/**
 * List of default breakpoints. Each item in the array is an object with two
 * properties:
 *
 * * `name` - the breakpoint name.
 * * `width` - the breakpoint width
 *
 * @name Responsive.breakpoints
 * @static
 */
Responsive.breakpoints = [
	{ name: 'desktop',  width: Infinity },
	{ name: 'tablet-l', width: 1024 },
	{ name: 'tablet-p', width: 768 },
	{ name: 'mobile-l', width: 480 },
	{ name: 'mobile-p', width: 320 }
];


/**
 * Display methods - functions which define how the hidden data should be shown
 * in the table.
 *
 * @namespace
 * @name Responsive.defaults
 * @static
 */
Responsive.display = {
	childRow: function ( row, update, render ) {
		if ( update ) {
			if ( $(row.node()).hasClass('parent') ) {
				row.child( render(), 'child' ).show();

				return true;
			}
		}
		else {
			if ( ! row.child.isShown()  ) {
				row.child( render(), 'child' ).show();
				$( row.node() ).addClass( 'parent' );

				return true;
			}
			else {
				row.child( false );
				$( row.node() ).removeClass( 'parent' );

				return false;
			}
		}
	},

	childRowImmediate: function ( row, update, render ) {
		if ( (! update && row.child.isShown()) || ! row.responsive.hasHidden() ) {
			// User interaction and the row is show, or nothing to show
			row.child( false );
			$( row.node() ).removeClass( 'parent' );

			return false;
		}
		else {
			// Display
			row.child( render(), 'child' ).show();
			$( row.node() ).addClass( 'parent' );

			return true;
		}
	},

	// This is a wrapper so the modal options for Bootstrap and jQuery UI can
	// have options passed into them. This specific one doesn't need to be a
	// function but it is for consistency in the `modal` name
	modal: function ( options ) {
		return function ( row, update, render ) {
			if ( ! update ) {
				// Show a modal
				var close = function () {
					modal.remove(); // will tidy events for us
					$(document).off( 'keypress.dtr' );
				};

				var modal = $('<div class="dtr-modal"/>')
					.append( $('<div class="dtr-modal-display"/>')
						.append( $('<div class="dtr-modal-content"/>')
							.append( render() )
						)
						.append( $('<div class="dtr-modal-close">&times;</div>' )
							.click( function () {
								close();
							} )
						)
					)
					.append( $('<div class="dtr-modal-background"/>')
						.click( function () {
							close();
						} )
					)
					.appendTo( 'body' );

				if ( options && options.header ) {
					modal.find( 'div.dtr-modal-content' ).prepend(
						'<h2>'+options.header( row )+'</h2>'
					);
				}

				$(document).on( 'keyup.dtr', function (e) {
					if ( e.keyCode === 27 ) {
						e.stopPropagation();

						close();
					}
				} );
			}
			else {
				$('div.dtr-modal-content')
					.empty()
					.append( render() );
			}
		};
	}
};


/**
 * Responsive default settings for initialisation
 *
 * @namespace
 * @name Responsive.defaults
 * @static
 */
Responsive.defaults = {
	/**
	 * List of breakpoints for the instance. Note that this means that each
	 * instance can have its own breakpoints. Additionally, the breakpoints
	 * cannot be changed once an instance has been creased.
	 *
	 * @type {Array}
	 * @default Takes the value of `Responsive.breakpoints`
	 */
	breakpoints: Responsive.breakpoints,

	/**
	 * Enable / disable auto hiding calculations. It can help to increase
	 * performance slightly if you disable this option, but all columns would
	 * need to have breakpoint classes assigned to them
	 *
	 * @type {Boolean}
	 * @default  `true`
	 */
	auto: true,

	/**
	 * Details control. If given as a string value, the `type` property of the
	 * default object is set to that value, and the defaults used for the rest
	 * of the object - this is for ease of implementation.
	 *
	 * The object consists of the following properties:
	 *
	 * * `display` - A function that is used to show and hide the hidden details
	 * * `renderer` - function that is called for display of the child row data.
	 *   The default function will show the data from the hidden columns
	 * * `target` - Used as the selector for what objects to attach the child
	 *   open / close to
	 * * `type` - `false` to disable the details display, `inline` or `column`
	 *   for the two control types
	 *
	 * @type {Object|string}
	 */
	details: {
		display: Responsive.display.childRow,

		renderer: function ( api, rowIdx, columns ) {
			var data = $.map( columns, function ( col, i ) {
				return col.hidden ?
					'<li data-dtr-index="'+col.columnIndex+'">'+
						'<span class="dtr-title">'+
							col.title+
						'</span> '+
						'<span class="dtr-data">'+
							col.data+
						'</span>'+
					'</li>' :
					'';
			} ).join('');

			return data ?
				$('<ul data-dtr-index="'+rowIdx+'"/>').append( data ) :
				false;
		},

		target: 0,

		type: 'inline'
	},

	/**
	 * Orthogonal data request option. This is used to define the data type
	 * requested when Responsive gets the data to show in the child row.
	 *
	 * @type {String}
	 */
	orthogonal: 'display'
};


/*
 * API
 */
var Api = $.fn.dataTable.Api;

// Doesn't do anything - work around for a bug in DT... Not documented
Api.register( 'responsive()', function () {
	return this;
} );

Api.register( 'responsive.index()', function ( li ) {
	li = $(li);

	return {
		column: li.data('dtr-index'),
		row:    li.parent().data('dtr-index')
	};
} );

Api.register( 'responsive.rebuild()', function () {
	return this.iterator( 'table', function ( ctx ) {
		if ( ctx._responsive ) {
			ctx._responsive._classLogic();
		}
	} );
} );

Api.register( 'responsive.recalc()', function () {
	return this.iterator( 'table', function ( ctx ) {
		if ( ctx._responsive ) {
			ctx._responsive._resizeAuto();
			ctx._responsive._resize();
		}
	} );
} );

Api.register( 'responsive.hasHidden()', function () {
	var ctx = this.context[0];

	return ctx._responsive ?
		$.inArray( false, ctx._responsive.s.current ) !== -1 :
		false;
} );


/**
 * Version information
 *
 * @name Responsive.version
 * @static
 */
Responsive.version = '2.0.1-dev';


$.fn.dataTable.Responsive = Responsive;
$.fn.DataTable.Responsive = Responsive;

// Attach a listener to the document which listens for DataTables initialisation
// events so we can automatically initialise
$(document).on( 'preInit.dt.dtr', function (e, settings, json) {
	if ( e.namespace !== 'dt' ) {
		return;
	}

	if ( $(settings.nTable).hasClass( 'responsive' ) ||
		 $(settings.nTable).hasClass( 'dt-responsive' ) ||
		 settings.oInit.responsive ||
		 DataTable.defaults.responsive
	) {
		var init = settings.oInit.responsive;

		if ( init !== false ) {
			new Responsive( settings, $.isPlainObject( init ) ? init : {}  );
		}
	}
} );


return Responsive;
}));

/*switchery.min.js*/
(function(){function require(name){var module=require.modules[name];if(!module)throw new Error('failed to require "'+name+'"');if(!("exports"in module)&&typeof module.definition==="function"){module.client=module.component=true;module.definition.call(this,module.exports={},module);delete module.definition}return module.exports}require.loader="component";require.helper={};require.helper.semVerSort=function(a,b){var aArray=a.version.split(".");var bArray=b.version.split(".");for(var i=0;i<aArray.length;++i){var aInt=parseInt(aArray[i],10);var bInt=parseInt(bArray[i],10);if(aInt===bInt){var aLex=aArray[i].substr((""+aInt).length);var bLex=bArray[i].substr((""+bInt).length);if(aLex===""&&bLex!=="")return 1;if(aLex!==""&&bLex==="")return-1;if(aLex!==""&&bLex!=="")return aLex>bLex?1:-1;continue}else if(aInt>bInt){return 1}else{return-1}}return 0};require.latest=function(name,returnPath){function showError(name){throw new Error('failed to find latest module of "'+name+'"')}var versionRegexp=/(.*)~(.*)@v?(\d+\.\d+\.\d+[^\/]*)$/;var remoteRegexp=/(.*)~(.*)/;if(!remoteRegexp.test(name))showError(name);var moduleNames=Object.keys(require.modules);var semVerCandidates=[];var otherCandidates=[];for(var i=0;i<moduleNames.length;i++){var moduleName=moduleNames[i];if(new RegExp(name+"@").test(moduleName)){var version=moduleName.substr(name.length+1);var semVerMatch=versionRegexp.exec(moduleName);if(semVerMatch!=null){semVerCandidates.push({version:version,name:moduleName})}else{otherCandidates.push({version:version,name:moduleName})}}}if(semVerCandidates.concat(otherCandidates).length===0){showError(name)}if(semVerCandidates.length>0){var module=semVerCandidates.sort(require.helper.semVerSort).pop().name;if(returnPath===true){return module}return require(module)}var module=otherCandidates.sort(function(a,b){return a.name>b.name})[0].name;if(returnPath===true){return module}return require(module)};require.modules={};require.register=function(name,definition){require.modules[name]={definition:definition}};require.define=function(name,exports){require.modules[name]={exports:exports}};require.register("abpetkov~transitionize@0.0.3",function(exports,module){module.exports=Transitionize;function Transitionize(element,props){if(!(this instanceof Transitionize))return new Transitionize(element,props);this.element=element;this.props=props||{};this.init()}Transitionize.prototype.isSafari=function(){return/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)};Transitionize.prototype.init=function(){var transitions=[];for(var key in this.props){transitions.push(key+" "+this.props[key])}this.element.style.transition=transitions.join(", ");if(this.isSafari())this.element.style.webkitTransition=transitions.join(", ")}});require.register("ftlabs~fastclick@v0.6.11",function(exports,module){function FastClick(layer){"use strict";var oldOnClick,self=this;this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=10;this.layer=layer;if(!layer||!layer.nodeType){throw new TypeError("Layer must be a document node")}this.onClick=function(){return FastClick.prototype.onClick.apply(self,arguments)};this.onMouse=function(){return FastClick.prototype.onMouse.apply(self,arguments)};this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(self,arguments)};this.onTouchMove=function(){return FastClick.prototype.onTouchMove.apply(self,arguments)};this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(self,arguments)};this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(self,arguments)};if(FastClick.notNeeded(layer)){return}if(this.deviceIsAndroid){layer.addEventListener("mouseover",this.onMouse,true);layer.addEventListener("mousedown",this.onMouse,true);layer.addEventListener("mouseup",this.onMouse,true)}layer.addEventListener("click",this.onClick,true);layer.addEventListener("touchstart",this.onTouchStart,false);layer.addEventListener("touchmove",this.onTouchMove,false);layer.addEventListener("touchend",this.onTouchEnd,false);layer.addEventListener("touchcancel",this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){layer.removeEventListener=function(type,callback,capture){var rmv=Node.prototype.removeEventListener;if(type==="click"){rmv.call(layer,type,callback.hijacked||callback,capture)}else{rmv.call(layer,type,callback,capture)}};layer.addEventListener=function(type,callback,capture){var adv=Node.prototype.addEventListener;if(type==="click"){adv.call(layer,type,callback.hijacked||(callback.hijacked=function(event){if(!event.propagationStopped){callback(event)}}),capture)}else{adv.call(layer,type,callback,capture)}}}if(typeof layer.onclick==="function"){oldOnClick=layer.onclick;layer.addEventListener("click",function(event){oldOnClick(event)},false);layer.onclick=null}}FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0;FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent);FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent);FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);FastClick.prototype.needsClick=function(target){"use strict";switch(target.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(target.disabled){return true}break;case"input":if(this.deviceIsIOS&&target.type==="file"||target.disabled){return true}break;case"label":case"video":return true}return/\bneedsclick\b/.test(target.className)};FastClick.prototype.needsFocus=function(target){"use strict";switch(target.nodeName.toLowerCase()){case"textarea":return true;case"select":return!this.deviceIsAndroid;case"input":switch(target.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false}return!target.disabled&&!target.readOnly;default:return/\bneedsfocus\b/.test(target.className)}};FastClick.prototype.sendClick=function(targetElement,event){"use strict";var clickEvent,touch;if(document.activeElement&&document.activeElement!==targetElement){document.activeElement.blur()}touch=event.changedTouches[0];clickEvent=document.createEvent("MouseEvents");clickEvent.initMouseEvent(this.determineEventType(targetElement),true,true,window,1,touch.screenX,touch.screenY,touch.clientX,touch.clientY,false,false,false,false,0,null);clickEvent.forwardedTouchEvent=true;targetElement.dispatchEvent(clickEvent)};FastClick.prototype.determineEventType=function(targetElement){"use strict";if(this.deviceIsAndroid&&targetElement.tagName.toLowerCase()==="select"){return"mousedown"}return"click"};FastClick.prototype.focus=function(targetElement){"use strict";var length;if(this.deviceIsIOS&&targetElement.setSelectionRange&&targetElement.type.indexOf("date")!==0&&targetElement.type!=="time"){length=targetElement.value.length;targetElement.setSelectionRange(length,length)}else{targetElement.focus()}};FastClick.prototype.updateScrollParent=function(targetElement){"use strict";var scrollParent,parentElement;scrollParent=targetElement.fastClickScrollParent;if(!scrollParent||!scrollParent.contains(targetElement)){parentElement=targetElement;do{if(parentElement.scrollHeight>parentElement.offsetHeight){scrollParent=parentElement;targetElement.fastClickScrollParent=parentElement;break}parentElement=parentElement.parentElement}while(parentElement)}if(scrollParent){scrollParent.fastClickLastScrollTop=scrollParent.scrollTop}};FastClick.prototype.getTargetElementFromEventTarget=function(eventTarget){"use strict";if(eventTarget.nodeType===Node.TEXT_NODE){return eventTarget.parentNode}return eventTarget};FastClick.prototype.onTouchStart=function(event){"use strict";var targetElement,touch,selection;if(event.targetTouches.length>1){return true}targetElement=this.getTargetElementFromEventTarget(event.target);touch=event.targetTouches[0];if(this.deviceIsIOS){selection=window.getSelection();if(selection.rangeCount&&!selection.isCollapsed){return true}if(!this.deviceIsIOS4){if(touch.identifier===this.lastTouchIdentifier){event.preventDefault();return false}this.lastTouchIdentifier=touch.identifier;this.updateScrollParent(targetElement)}}this.trackingClick=true;this.trackingClickStart=event.timeStamp;this.targetElement=targetElement;this.touchStartX=touch.pageX;this.touchStartY=touch.pageY;if(event.timeStamp-this.lastClickTime<200){event.preventDefault()}return true};FastClick.prototype.touchHasMoved=function(event){"use strict";var touch=event.changedTouches[0],boundary=this.touchBoundary;if(Math.abs(touch.pageX-this.touchStartX)>boundary||Math.abs(touch.pageY-this.touchStartY)>boundary){return true}return false};FastClick.prototype.onTouchMove=function(event){"use strict";if(!this.trackingClick){return true}if(this.targetElement!==this.getTargetElementFromEventTarget(event.target)||this.touchHasMoved(event)){this.trackingClick=false;this.targetElement=null}return true};FastClick.prototype.findControl=function(labelElement){"use strict";if(labelElement.control!==undefined){return labelElement.control}if(labelElement.htmlFor){return document.getElementById(labelElement.htmlFor)}return labelElement.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};FastClick.prototype.onTouchEnd=function(event){"use strict";var forElement,trackingClickStart,targetTagName,scrollParent,touch,targetElement=this.targetElement;if(!this.trackingClick){return true}if(event.timeStamp-this.lastClickTime<200){this.cancelNextClick=true;return true}this.cancelNextClick=false;this.lastClickTime=event.timeStamp;trackingClickStart=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(this.deviceIsIOSWithBadTarget){touch=event.changedTouches[0];targetElement=document.elementFromPoint(touch.pageX-window.pageXOffset,touch.pageY-window.pageYOffset)||targetElement;targetElement.fastClickScrollParent=this.targetElement.fastClickScrollParent}targetTagName=targetElement.tagName.toLowerCase();if(targetTagName==="label"){forElement=this.findControl(targetElement);if(forElement){this.focus(targetElement);if(this.deviceIsAndroid){return false}targetElement=forElement}}else if(this.needsFocus(targetElement)){if(event.timeStamp-trackingClickStart>100||this.deviceIsIOS&&window.top!==window&&targetTagName==="input"){this.targetElement=null;return false}this.focus(targetElement);if(!this.deviceIsIOS4||targetTagName!=="select"){this.targetElement=null;event.preventDefault()}return false}if(this.deviceIsIOS&&!this.deviceIsIOS4){scrollParent=targetElement.fastClickScrollParent;if(scrollParent&&scrollParent.fastClickLastScrollTop!==scrollParent.scrollTop){return true}}if(!this.needsClick(targetElement)){event.preventDefault();this.sendClick(targetElement,event)}return false};FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=false;this.targetElement=null};FastClick.prototype.onMouse=function(event){"use strict";if(!this.targetElement){return true}if(event.forwardedTouchEvent){return true}if(!event.cancelable){return true}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(event.stopImmediatePropagation){event.stopImmediatePropagation()}else{event.propagationStopped=true}event.stopPropagation();event.preventDefault();return false}return true};FastClick.prototype.onClick=function(event){"use strict";var permitted;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true}if(event.target.type==="submit"&&event.detail===0){return true}permitted=this.onMouse(event);if(!permitted){this.targetElement=null}return permitted};FastClick.prototype.destroy=function(){"use strict";var layer=this.layer;if(this.deviceIsAndroid){layer.removeEventListener("mouseover",this.onMouse,true);layer.removeEventListener("mousedown",this.onMouse,true);layer.removeEventListener("mouseup",this.onMouse,true)}layer.removeEventListener("click",this.onClick,true);layer.removeEventListener("touchstart",this.onTouchStart,false);layer.removeEventListener("touchmove",this.onTouchMove,false);layer.removeEventListener("touchend",this.onTouchEnd,false);layer.removeEventListener("touchcancel",this.onTouchCancel,false)};FastClick.notNeeded=function(layer){"use strict";var metaViewport;var chromeVersion;if(typeof window.ontouchstart==="undefined"){return true}chromeVersion=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(chromeVersion){if(FastClick.prototype.deviceIsAndroid){metaViewport=document.querySelector("meta[name=viewport]");if(metaViewport){if(metaViewport.content.indexOf("user-scalable=no")!==-1){return true}if(chromeVersion>31&&window.innerWidth<=window.screen.width){return true}}}else{return true}}if(layer.style.msTouchAction==="none"){return true}return false};FastClick.attach=function(layer){"use strict";return new FastClick(layer)};if(typeof define!=="undefined"&&define.amd){define(function(){"use strict";return FastClick})}else if(typeof module!=="undefined"&&module.exports){module.exports=FastClick.attach;module.exports.FastClick=FastClick}else{window.FastClick=FastClick}});require.register("component~indexof@0.0.3",function(exports,module){module.exports=function(arr,obj){if(arr.indexOf)return arr.indexOf(obj);for(var i=0;i<arr.length;++i){if(arr[i]===obj)return i}return-1}});require.register("component~classes@1.2.1",function(exports,module){var index=require("component~indexof@0.0.3");var re=/\s+/;var toString=Object.prototype.toString;module.exports=function(el){return new ClassList(el)};function ClassList(el){if(!el)throw new Error("A DOM element reference is required");this.el=el;this.list=el.classList}ClassList.prototype.add=function(name){if(this.list){this.list.add(name);return this}var arr=this.array();var i=index(arr,name);if(!~i)arr.push(name);this.el.className=arr.join(" ");return this};ClassList.prototype.remove=function(name){if("[object RegExp]"==toString.call(name)){return this.removeMatching(name)}if(this.list){this.list.remove(name);return this}var arr=this.array();var i=index(arr,name);if(~i)arr.splice(i,1);this.el.className=arr.join(" ");return this};ClassList.prototype.removeMatching=function(re){var arr=this.array();for(var i=0;i<arr.length;i++){if(re.test(arr[i])){this.remove(arr[i])}}return this};ClassList.prototype.toggle=function(name,force){if(this.list){if("undefined"!==typeof force){if(force!==this.list.toggle(name,force)){this.list.toggle(name)}}else{this.list.toggle(name)}return this}if("undefined"!==typeof force){if(!force){this.remove(name)}else{this.add(name)}}else{if(this.has(name)){this.remove(name)}else{this.add(name)}}return this};ClassList.prototype.array=function(){var str=this.el.className.replace(/^\s+|\s+$/g,"");var arr=str.split(re);if(""===arr[0])arr.shift();return arr};ClassList.prototype.has=ClassList.prototype.contains=function(name){return this.list?this.list.contains(name):!!~index(this.array(),name)}});require.register("component~event@0.1.4",function(exports,module){var bind=window.addEventListener?"addEventListener":"attachEvent",unbind=window.removeEventListener?"removeEventListener":"detachEvent",prefix=bind!=="addEventListener"?"on":"";exports.bind=function(el,type,fn,capture){el[bind](prefix+type,fn,capture||false);return fn};exports.unbind=function(el,type,fn,capture){el[unbind](prefix+type,fn,capture||false);return fn}});require.register("component~query@0.0.3",function(exports,module){function one(selector,el){return el.querySelector(selector)}exports=module.exports=function(selector,el){el=el||document;return one(selector,el)};exports.all=function(selector,el){el=el||document;return el.querySelectorAll(selector)};exports.engine=function(obj){if(!obj.one)throw new Error(".one callback required");if(!obj.all)throw new Error(".all callback required");one=obj.one;exports.all=obj.all;return exports}});require.register("component~matches-selector@0.1.5",function(exports,module){var query=require("component~query@0.0.3");var proto=Element.prototype;var vendor=proto.matches||proto.webkitMatchesSelector||proto.mozMatchesSelector||proto.msMatchesSelector||proto.oMatchesSelector;module.exports=match;function match(el,selector){if(!el||el.nodeType!==1)return false;if(vendor)return vendor.call(el,selector);var nodes=query.all(selector,el.parentNode);for(var i=0;i<nodes.length;++i){if(nodes[i]==el)return true}return false}});require.register("component~closest@0.1.4",function(exports,module){var matches=require("component~matches-selector@0.1.5");module.exports=function(element,selector,checkYoSelf,root){element=checkYoSelf?{parentNode:element}:element;root=root||document;while((element=element.parentNode)&&element!==document){if(matches(element,selector))return element;if(element===root)return}}});require.register("component~delegate@0.2.3",function(exports,module){var closest=require("component~closest@0.1.4"),event=require("component~event@0.1.4");exports.bind=function(el,selector,type,fn,capture){return event.bind(el,type,function(e){var target=e.target||e.srcElement;e.delegateTarget=closest(target,selector,true,el);if(e.delegateTarget)fn.call(el,e)},capture)};exports.unbind=function(el,type,fn,capture){event.unbind(el,type,fn,capture)}});require.register("component~events@1.0.9",function(exports,module){var events=require("component~event@0.1.4");var delegate=require("component~delegate@0.2.3");module.exports=Events;function Events(el,obj){if(!(this instanceof Events))return new Events(el,obj);if(!el)throw new Error("element required");if(!obj)throw new Error("object required");this.el=el;this.obj=obj;this._events={}}Events.prototype.sub=function(event,method,cb){this._events[event]=this._events[event]||{};this._events[event][method]=cb};Events.prototype.bind=function(event,method){var e=parse(event);var el=this.el;var obj=this.obj;var name=e.name;var method=method||"on"+name;var args=[].slice.call(arguments,2);function cb(){var a=[].slice.call(arguments).concat(args);obj[method].apply(obj,a)}if(e.selector){cb=delegate.bind(el,e.selector,name,cb)}else{events.bind(el,name,cb)}this.sub(name,method,cb);return cb};Events.prototype.unbind=function(event,method){if(0==arguments.length)return this.unbindAll();if(1==arguments.length)return this.unbindAllOf(event);var bindings=this._events[event];if(!bindings)return;var cb=bindings[method];if(!cb)return;events.unbind(this.el,event,cb)};Events.prototype.unbindAll=function(){for(var event in this._events){this.unbindAllOf(event)}};Events.prototype.unbindAllOf=function(event){var bindings=this._events[event];if(!bindings)return;for(var method in bindings){this.unbind(event,method)}};function parse(event){var parts=event.split(/ +/);return{name:parts.shift(),selector:parts.join(" ")}}});require.register("switchery",function(exports,module){var transitionize=require("abpetkov~transitionize@0.0.3"),fastclick=require("ftlabs~fastclick@v0.6.11"),classes=require("component~classes@1.2.1"),events=require("component~events@1.0.9");module.exports=Switchery;var defaults={color:"#64bd63",secondaryColor:"#dfdfdf",jackColor:"#fff",jackSecondaryColor:null,className:"switchery",disabled:false,disabledOpacity:.5,speed:"0.4s",size:"default"};function Switchery(element,options){if(!(this instanceof Switchery))return new Switchery(element,options);this.element=element;this.options=options||{};for(var i in defaults){if(this.options[i]==null){this.options[i]=defaults[i]}}if(this.element!=null&&this.element.type=="checkbox")this.init();if(this.isDisabled()===true)this.disable()}Switchery.prototype.hide=function(){this.element.style.display="none"};Switchery.prototype.show=function(){var switcher=this.create();this.insertAfter(this.element,switcher)};Switchery.prototype.create=function(){this.switcher=document.createElement("span");this.jack=document.createElement("small");this.switcher.appendChild(this.jack);this.switcher.className=this.options.className;this.events=events(this.switcher,this);return this.switcher};Switchery.prototype.insertAfter=function(reference,target){reference.parentNode.insertBefore(target,reference.nextSibling)};Switchery.prototype.setPosition=function(clicked){var checked=this.isChecked(),switcher=this.switcher,jack=this.jack;if(clicked&&checked)checked=false;else if(clicked&&!checked)checked=true;if(checked===true){this.element.checked=true;if(window.getComputedStyle)jack.style.left=parseInt(window.getComputedStyle(switcher).width)-parseInt(window.getComputedStyle(jack).width)+"px";else jack.style.left=parseInt(switcher.currentStyle["width"])-parseInt(jack.currentStyle["width"])+"px";if(this.options.color)this.colorize();this.setSpeed()}else{jack.style.left=0;this.element.checked=false;this.switcher.style.boxShadow="inset 0 0 0 0 "+this.options.secondaryColor;this.switcher.style.borderColor=this.options.secondaryColor;this.switcher.style.backgroundColor=this.options.secondaryColor!==defaults.secondaryColor?this.options.secondaryColor:"#fff";this.jack.style.backgroundColor=this.options.jackSecondaryColor!==this.options.jackColor?this.options.jackSecondaryColor:this.options.jackColor;this.setSpeed()}};Switchery.prototype.setSpeed=function(){var switcherProp={},jackProp={"background-color":this.options.speed,left:this.options.speed.replace(/[a-z]/,"")/2+"s"};if(this.isChecked()){switcherProp={border:this.options.speed,"box-shadow":this.options.speed,"background-color":this.options.speed.replace(/[a-z]/,"")*3+"s"}}else{switcherProp={border:this.options.speed,"box-shadow":this.options.speed}}transitionize(this.switcher,switcherProp);transitionize(this.jack,jackProp)};Switchery.prototype.setSize=function(){var small="switchery-small",normal="switchery-default",large="switchery-large";switch(this.options.size){case"small":classes(this.switcher).add(small);break;case"large":classes(this.switcher).add(large);break;default:classes(this.switcher).add(normal);break}};Switchery.prototype.colorize=function(){var switcherHeight=this.switcher.offsetHeight/2;this.switcher.style.backgroundColor=this.options.color;this.switcher.style.borderColor=this.options.color;this.switcher.style.boxShadow="inset 0 0 0 "+switcherHeight+"px "+this.options.color;this.jack.style.backgroundColor=this.options.jackColor};Switchery.prototype.handleOnchange=function(state){if(document.dispatchEvent){var event=document.createEvent("HTMLEvents");event.initEvent("change",true,true);this.element.dispatchEvent(event)}else{this.element.fireEvent("onchange")}};Switchery.prototype.handleChange=function(){var self=this,el=this.element;if(el.addEventListener){el.addEventListener("change",function(){self.setPosition()})}else{el.attachEvent("onchange",function(){self.setPosition()})}};Switchery.prototype.handleClick=function(){var switcher=this.switcher;fastclick(switcher);this.events.bind("click","bindClick")};Switchery.prototype.bindClick=function(){var parent=this.element.parentNode.tagName.toLowerCase(),labelParent=parent==="label"?false:true;this.setPosition(labelParent);this.handleOnchange(this.element.checked)};Switchery.prototype.markAsSwitched=function(){this.element.setAttribute("data-switchery",true)};Switchery.prototype.markedAsSwitched=function(){return this.element.getAttribute("data-switchery")};Switchery.prototype.init=function(){this.hide();this.show();this.setSize();this.setPosition();this.markAsSwitched();this.handleChange();this.handleClick()};Switchery.prototype.isChecked=function(){return this.element.checked};Switchery.prototype.isDisabled=function(){return this.options.disabled||this.element.disabled||this.element.readOnly};Switchery.prototype.destroy=function(){this.events.unbind()};Switchery.prototype.enable=function(){if(this.options.disabled)this.options.disabled=false;if(this.element.disabled)this.element.disabled=false;if(this.element.readOnly)this.element.readOnly=false;this.switcher.style.opacity=1;this.events.bind("click","bindClick")};Switchery.prototype.disable=function(){if(!this.options.disabled)this.options.disabled=true;if(!this.element.disabled)this.element.disabled=true;if(!this.element.readOnly)this.element.readOnly=true;this.switcher.style.opacity=this.options.disabledOpacity;this.destroy()}});if(typeof exports=="object"){module.exports=require("switchery")}else if(typeof define=="function"&&define.amd){define("Switchery",[],function(){return require("switchery")})}else{(this||window)["Switchery"]=require("switchery")}})();
/*switchery.min.js*/
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("switchery",{mode:"init",defaults:{color:$.colors("primary",600)},init:function(context){if("undefined"!=typeof Switchery){var defaults=$.components.getDefaults("switchery");$('[data-plugin="switchery"]',context).each(function(){var options=$.extend({},defaults,$(this).data());new Switchery(this,options)})}}});
/*jquery-asPieProgress.min.js*/
/*! jQuery asPieProgress - v0.3.4 - 2015-06-19
* https://github.com/amazingSurge/jquery-asPieProgress
* Copyright (c) 2015 amazingSurge; Licensed GPL */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(){return"undefined"!=typeof window.performance&&window.performance.now?window.performance.now():Date.now()}function c(a){return"string"==typeof a&&-1!=a.indexOf("%")}Date.now||(Date.now=function(){return(new Date).getTime()});for(var d=["webkit","moz"],e=0;e<d.length&&!window.requestAnimationFrame;++e){var f=d[e];window.requestAnimationFrame=window[f+"RequestAnimationFrame"],window.cancelAnimationFrame=window[f+"CancelAnimationFrame"]||window[f+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS (6|7)/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var g=0;window.requestAnimationFrame=function(a){var c=b(),d=Math.max(g+16,c);return setTimeout(function(){a(g=d)},d-c)},window.cancelAnimationFrame=clearTimeout}var h=function(b,c){var d=document.createElementNS("http://www.w3.org/2000/svg",b);return a.each(c,function(a,b){d.setAttribute(a,b)}),d},i="createElementNS"in document&&new h("svg",{}).createSVGRect,j="asPieProgress",k=a[j]=function(b,c){this.element=b,this.$element=a(b),this.options=a.extend({},k.defaults,c,this.$element.data()),this.namespace=this.options.namespace,this.classes=this.options.classes,this.easing=k.easing[this.options.easing]||k.easing.ease,this.$element.addClass(this.classes.element),this.min=this.$element.attr("aria-valuemin"),this.max=this.$element.attr("aria-valuemax"),this.min=this.min?parseInt(this.min,10):this.options.min,this.max=this.max?parseInt(this.max,10):this.options.max,this.first=this.$element.attr("aria-valuenow"),this.first=this.first?parseInt(this.first,10):this.options.first?this.options.first:this.min,this.now=this.first,this.goal=this.options.goal,this._frameId=null,this.initialized=!1,this._trigger("init"),this.init()};k.defaults={namespace:"asPieProgress",classes:{svg:"pie_progress__svg",element:"pie_progress",number:"pie_progress__number",content:"pie_progress__content"},min:0,max:100,goal:100,size:160,speed:15,barcolor:"#ef1e25",barsize:"4",trackcolor:"#f2f2f2",fillcolor:"none",easing:"ease",numberCallback:function(a){var b=Math.round(this.getPercentage(a));return b+"%"},contentCallback:null};var l=function(a,b,c,d){function e(a,b){return 1-3*b+3*a}function f(a,b){return 3*b-6*a}function g(a){return 3*a}function h(a,b,c){return((e(b,c)*a+f(b,c))*a+g(b))*a}function i(a,b,c){return 3*e(b,c)*a*a+2*f(b,c)*a+g(b)}function j(b){for(var d=b,e=0;4>e;++e){var f=i(d,a,c);if(0===f)return d;var g=h(d,a,c)-b;d-=g/f}return d}return a===b&&c===d?{css:"linear",fn:function(a){return a}}:{css:"cubic-bezier("+a+","+b+","+c+","+d+")",fn:function(a){return h(j(a),b,d)}}};a.extend(k.easing={},{ease:l(.25,.1,.25,1),linear:l(0,0,1,1),"ease-in":l(.42,0,1,1),"ease-out":l(0,0,.58,1),"ease-in-out":l(.42,0,.58,1)}),k.prototype={constructor:k,init:function(){this.$number=this.$element.find("."+this.classes.number),this.$content=this.$element.find("."+this.classes.content),this.size=this.options.size,this.width=this.size,this.height=this.size,this.prepare(),this.initialized=!0,this._trigger("ready")},prepare:function(){i&&(this.svg=new h("svg",{version:"1.1",preserveAspectRatio:"xMinYMin meet",viewBox:"0 0 "+this.width+" "+this.height}),this.buildTrack(),this.buildBar(),a('<div class="'+this.classes.svg+'"></div>').append(this.svg).appendTo(this.$element))},buildTrack:function(){var a=this.size,b=this.size,c=a/2,d=b/2,e=this.options.barsize,f=new h("ellipse",{rx:c-e/2,ry:d-e/2,cx:c,cy:d,stroke:this.options.trackcolor,fill:this.options.fillcolor,"stroke-width":e});this.svg.appendChild(f)},buildBar:function(){if(i){var a=new h("path",{fill:"none","stroke-width":this.options.barsize,stroke:this.options.barcolor});this.bar=a,this.svg.appendChild(a),this._drawBar(this.first),this._updateBar()}},_drawBar:function(a){if(i){this.bar_goal=a;var b=this.size,c=this.size,d=b/2,e=c/2,f=0,g=this.options.barsize,h=Math.min(d,e)-g/2;this.r=h;var j=this.getPercentage(a);100===j&&(j-=1e-4);var k=f+j*Math.PI*2/100,l=d+h*Math.sin(f),m=e-h*Math.cos(f),n=d+h*Math.sin(k),o=e-h*Math.cos(k),p=0;k-f>Math.PI&&(p=1);var q="M"+l+","+m+" A"+h+","+h+" 0 "+p+" 1 "+n+","+o;this.bar.setAttribute("d",q)}},_updateBar:function(){if(i){var a=this.getPercentage(this.now),b=this.bar.getTotalLength(),c=b*(1-a/this.getPercentage(this.bar_goal));this.bar.style.strokeDasharray=b+" "+b,this.bar.style.strokeDashoffset=c}},_trigger:function(a){var b=Array.prototype.slice.call(arguments,1),c=[this].concat(b);this.$element.trigger(j+"::"+a,c),a=a.replace(/\b\w+\b/g,function(a){return a.substring(0,1).toUpperCase()+a.substring(1)});var d="on"+a;"function"==typeof this.options[d]&&this.options[d].apply(this,b)},getPercentage:function(a){return 100*(a-this.min)/(this.max-this.min)},go:function(a){var d=this;this._clear(),c(a)&&(a=parseInt(a.replace("%",""),10),a=Math.round(this.min+a/100*(this.max-this.min))),"undefined"==typeof a&&(a=this.goal),a>this.max?a=this.max:a<this.min&&(a=this.min),this.bar_goal<a&&this._drawBar(a);var e=d.now,f=b(),g=f+100*Math.abs(e-a)*d.options.speed/(d.max-d.min),h=function(b){var c;if(b>g)c=a;else{var i=(b-f)/d.options.speed;c=Math.round(d.easing.fn(i/100)*(d.max-d.min)),a>e?(c=e+c,c>a&&(c=a)):(c=e-c,a>c&&(c=a))}d._update(c),c===a?(window.cancelAnimationFrame(d._frameId),d._frameId=null,d.now===d.goal&&d._trigger("finish")):d._frameId=window.requestAnimationFrame(h)};d._frameId=window.requestAnimationFrame(h)},_update:function(a){this.now=a,this._updateBar(),this.$element.attr("aria-valuenow",this.now),this.$number.length>0&&"function"==typeof this.options.numberCallback&&this.$number.html(this.options.numberCallback.call(this,[this.now])),this.$content.length>0&&"function"==typeof this.options.contentCallback&&this.$content.html(this.options.contentCallback.call(this,[this.now])),this._trigger("update",a)},_clear:function(){this._frameId&&(window.cancelAnimationFrame(this._frameId),this._frameId=null)},get:function(){return this.now},start:function(){this._clear(),this._trigger("start"),this.go(this.goal)},reset:function(){this._clear(),this._drawBar(this.first),this._update(this.first),this._trigger("reset")},stop:function(){this._clear(),this._trigger("stop")},finish:function(){this._clear(),this._update(this.goal),this._trigger("finish")},destory:function(){this.$element.data(j,null),this._trigger("destory")}},a.fn[j]=function(b){if("string"!=typeof b)return this.each(function(){a.data(this,j)||a.data(this,j,new k(this,b))});var c=b,d=Array.prototype.slice.call(arguments,1);if(/^\_/.test(c))return!1;if(!/^(get)$/.test(c))return this.each(function(){var b=a.data(this,j);b&&"function"==typeof b[c]&&b[c].apply(b,d)});var e=this.first().data(j);return e&&"function"==typeof e[c]?e[c].apply(e,d):void 0}});
/*aspieprogress.min.js*/
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("pieProgress",{mode:"init",defaults:{namespace:"pie-progress",speed:30,classes:{svg:"pie-progress-svg",element:"pie-progress",number:"pie-progress-number",content:"pie-progress-content"}},init:function(context){if($.fn.asPieProgress){var defaults=$.components.getDefaults("pieProgress");$('[data-plugin="pieProgress"]',context).each(function(){var $this=$(this),options=$this.data();options=$.extend(!0,{},defaults,options),$this.asPieProgress(options)})}}});
/*spin.min.js*/
(function(t,e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Spinner=e()})(this,function(){"use strict";function t(t,e){var i,n=document.createElement(t||"div");for(i in e)n[i]=e[i];return n}function e(t){for(var e=1,i=arguments.length;i>e;e++)t.appendChild(arguments[e]);return t}function i(t,e,i,n){var r=["opacity",e,~~(100*t),i,n].join("-"),o=.01+100*(i/n),a=Math.max(1-(1-t)/e*(100-o),t),s=u.substring(0,u.indexOf("Animation")).toLowerCase(),l=s&&"-"+s+"-"||"";return c[r]||(p.insertRule("@"+l+"keyframes "+r+"{"+"0%{opacity:"+a+"}"+o+"%{opacity:"+t+"}"+(o+.01)+"%{opacity:1}"+(o+e)%100+"%{opacity:"+t+"}"+"100%{opacity:"+a+"}"+"}",p.cssRules.length),c[r]=1),r}function n(t,e){var i,n,r=t.style;for(e=e.charAt(0).toUpperCase()+e.slice(1),n=0;d.length>n;n++)if(i=d[n]+e,void 0!==r[i])return i;return void 0!==r[e]?e:void 0}function r(t,e){for(var i in e)t.style[n(t,i)||i]=e[i];return t}function o(t){for(var e=1;arguments.length>e;e++){var i=arguments[e];for(var n in i)void 0===t[n]&&(t[n]=i[n])}return t}function a(t,e){return"string"==typeof t?t:t[e%t.length]}function s(t){this.opts=o(t||{},s.defaults,f)}function l(){function i(e,i){return t("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',i)}p.addRule(".spin-vml","behavior:url(#default#VML)"),s.prototype.lines=function(t,n){function o(){return r(i("group",{coordsize:d+" "+d,coordorigin:-u+" "+-u}),{width:d,height:d})}function s(t,s,l){e(p,e(r(o(),{rotation:360/n.lines*t+"deg",left:~~s}),e(r(i("roundrect",{arcsize:n.corners}),{width:u,height:n.width,left:n.radius,top:-n.width>>1,filter:l}),i("fill",{color:a(n.color,t),opacity:n.opacity}),i("stroke",{opacity:0}))))}var l,u=n.length+n.width,d=2*u,c=2*-(n.width+n.length)+"px",p=r(o(),{position:"absolute",top:c,left:c});if(n.shadow)for(l=1;n.lines>=l;l++)s(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;n.lines>=l;l++)s(l);return e(t,p)},s.prototype.opacity=function(t,e,i,n){var r=t.firstChild;n=n.shadow&&n.lines||0,r&&r.childNodes.length>e+n&&(r=r.childNodes[e+n],r=r&&r.firstChild,r=r&&r.firstChild,r&&(r.opacity=i))}}var u,d=["webkit","Moz","ms","O"],c={},p=function(){var i=t("style",{type:"text/css"});return e(document.getElementsByTagName("head")[0],i),i.sheet||i.styleSheet}(),f={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};s.defaults={},o(s.prototype,{spin:function(e){this.stop();var i=this,n=i.opts,o=i.el=r(t(0,{className:n.className}),{position:n.position,width:0,zIndex:n.zIndex});if(n.radius+n.length+n.width,r(o,{left:n.left,top:n.top}),e&&e.insertBefore(o,e.firstChild||null),o.setAttribute("role","progressbar"),i.lines(o,i.opts),!u){var a,s=0,l=(n.lines-1)*(1-n.direction)/2,d=n.fps,c=d/n.speed,p=(1-n.opacity)/(c*n.trail/100),f=c/n.lines;(function h(){s++;for(var t=0;n.lines>t;t++)a=Math.max(1-(s+(n.lines-t)*f)%c*p,n.opacity),i.opacity(o,t*n.direction+l,a,n);i.timeout=i.el&&setTimeout(h,~~(1e3/d))})()}return i},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=void 0),this},lines:function(n,o){function s(e,i){return r(t(),{position:"absolute",width:o.length+o.width+"px",height:o.width+"px",background:e,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/o.lines*d+o.rotate)+"deg) translate("+o.radius+"px"+",0)",borderRadius:(o.corners*o.width>>1)+"px"})}for(var l,d=0,c=(o.lines-1)*(1-o.direction)/2;o.lines>d;d++)l=r(t(),{position:"absolute",top:1+~(o.width/2)+"px",transform:o.hwaccel?"translate3d(0,0,0)":"",opacity:o.opacity,animation:u&&i(o.opacity,o.trail,c+d*o.direction,o.lines)+" "+1/o.speed+"s linear infinite"}),o.shadow&&e(l,r(s("#000","0 0 4px #000"),{top:"2px"})),e(n,e(l,s(a(o.color,d),"0 0 1px rgba(0,0,0,.1)")));return n},opacity:function(t,e,i){t.childNodes.length>e&&(t.childNodes[e].style.opacity=i)}});var h=r(t("group"),{behavior:"url(#default#VML)"});return!n(h,"transform")&&h.adj?l():u=n(h,"animation"),s});
/*ladda.min.js*/
/*!
 * Ladda 0.9.4 (2014-06-21, 11:24)
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2014 Hakim El Hattab, http://hakim.se
 */
(function(t,e){"object"==typeof exports?module.exports=e(require("spin.js")):"function"==typeof define&&define.amd?define(["spin"],e):t.Ladda=e(t.Spinner)})(this,function(t){"use strict";function e(t){if(t===void 0)return console.warn("Ladda button target must be defined."),void 0;t.querySelector(".ladda-label")||(t.innerHTML='<span class="ladda-label">'+t.innerHTML+"</span>");var e,n=document.createElement("span");n.className="ladda-spinner",t.appendChild(n);var r,a={start:function(){return e||(e=o(t)),t.setAttribute("disabled",""),t.setAttribute("data-loading",""),clearTimeout(r),e.spin(n),this.setProgress(0),this},startAfter:function(t){return clearTimeout(r),r=setTimeout(function(){a.start()},t),this},stop:function(){return t.removeAttribute("disabled"),t.removeAttribute("data-loading"),clearTimeout(r),e&&(r=setTimeout(function(){e.stop()},1e3)),this},toggle:function(){return this.isLoading()?this.stop():this.start(),this},setProgress:function(e){e=Math.max(Math.min(e,1),0);var n=t.querySelector(".ladda-progress");0===e&&n&&n.parentNode?n.parentNode.removeChild(n):(n||(n=document.createElement("div"),n.className="ladda-progress",t.appendChild(n)),n.style.width=(e||0)*t.offsetWidth+"px")},enable:function(){return this.stop(),this},disable:function(){return this.stop(),t.setAttribute("disabled",""),this},isLoading:function(){return t.hasAttribute("data-loading")},remove:function(){clearTimeout(r),t.removeAttribute("disabled",""),t.removeAttribute("data-loading",""),e&&(e.stop(),e=null);for(var n=0,i=u.length;i>n;n++)if(a===u[n]){u.splice(n,1);break}}};return u.push(a),a}function n(t,e){for(;t.parentNode&&t.tagName!==e;)t=t.parentNode;return e===t.tagName?t:void 0}function r(t){for(var e=["input","textarea"],n=[],r=0;e.length>r;r++)for(var a=t.getElementsByTagName(e[r]),i=0;a.length>i;i++)a[i].hasAttribute("required")&&n.push(a[i]);return n}function a(t,a){a=a||{};var i=[];"string"==typeof t?i=s(document.querySelectorAll(t)):"object"==typeof t&&"string"==typeof t.nodeName&&(i=[t]);for(var o=0,u=i.length;u>o;o++)(function(){var t=i[o];if("function"==typeof t.addEventListener){var s=e(t),u=-1;t.addEventListener("click",function(){var e=!0,i=n(t,"FORM");if(i!==void 0)for(var o=r(i),d=0;o.length>d;d++)""===o[d].value.replace(/^\s+|\s+$/g,"")&&(e=!1);e&&(s.startAfter(1),"number"==typeof a.timeout&&(clearTimeout(u),u=setTimeout(s.stop,a.timeout)),"function"==typeof a.callback&&a.callback.apply(null,[s]))},!1)}})()}function i(){for(var t=0,e=u.length;e>t;t++)u[t].stop()}function o(e){var n,r=e.offsetHeight;0===r&&(r=parseFloat(window.getComputedStyle(e).height)),r>32&&(r*=.8),e.hasAttribute("data-spinner-size")&&(r=parseInt(e.getAttribute("data-spinner-size"),10)),e.hasAttribute("data-spinner-color")&&(n=e.getAttribute("data-spinner-color"));var a=12,i=.2*r,o=.6*i,s=7>i?2:3;return new t({color:n||"#fff",lines:a,radius:i,length:o,width:s,zIndex:"auto",top:"auto",left:"auto",className:""})}function s(t){for(var e=[],n=0;t.length>n;n++)e.push(t[n]);return e}var u=[];return{bind:a,create:e,stopAll:i}});
/*ladda-bootstrap.min.js*/
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("ladda",{mode:"init",defaults:{timeout:2e3},init:function(){if("undefined"!=typeof Ladda){var defaults=$.components.getDefaults("ladda");Ladda.bind('[data-plugin="ladda"]',defaults)}}}),$.components.register("laddaProgress",{mode:"init",defaults:{init:function(instance){var progress=0,interval=setInterval(function(){progress=Math.min(progress+.1*Math.random(),1),instance.setProgress(progress),1===progress&&(instance.stop(),clearInterval(interval))},200)}},init:function(){if("undefined"!=typeof Ladda){var defaults=$.components.getDefaults("laddaProgress");Ladda.bind('[data-plugin="laddaProgress"]',defaults)}}});
/*tablesaw.js*/
/*! Tablesaw - v2.0.2 - 2015-10-28
* https://github.com/filamentgroup/tablesaw
* Copyright (c) 2015 Filament Group; Licensed  */
/*
* tablesaw: A set of plugins for responsive tables
* Stack and Column Toggle tables
* Copyright (c) 2013 Filament Group, Inc.
* MIT License
*/

if( typeof Tablesaw === "undefined" ) {
	Tablesaw = {
		i18n: {
			modes: [ 'Stack', 'Swipe', 'Toggle' ],
			columns: 'Col<span class=\"a11y-sm\">umn</span>s',
			columnBtnText: 'Columns',
			columnsDialogError: 'No eligible columns.',
			sort: 'Sort'
		},
		// cut the mustard
		mustard: 'querySelector' in document &&
			( !window.blackberry || window.WebKitPoint ) &&
			!window.operamini
	};
}
if( !Tablesaw.config ) {
	Tablesaw.config = {};
}
if( Tablesaw.mustard ) {
	jQuery( document.documentElement ).addClass( 'tablesaw-enhanced' );
}

;(function( $ ) {
	var pluginName = "table",
		classes = {
			toolbar: "tablesaw-bar"
		},
		events = {
			create: "tablesawcreate",
			destroy: "tablesawdestroy",
			refresh: "tablesawrefresh"
		},
		defaultMode = "stack",
		initSelector = "table[data-tablesaw-mode],table[data-tablesaw-sortable]";

	var Table = function( element ) {
		if( !element ) {
			throw new Error( "Tablesaw requires an element." );
		}

		this.table = element;
		this.$table = $( element );

		this.mode = this.$table.attr( "data-tablesaw-mode" ) || defaultMode;

		this.init();
	};

	Table.prototype.init = function() {
		// assign an id if there is none
		if ( !this.$table.attr( "id" ) ) {
			this.$table.attr( "id", pluginName + "-" + Math.round( Math.random() * 10000 ) );
		}

		this.createToolbar();

		var colstart = this._initCells();

		this.$table.trigger( events.create, [ this, colstart ] );
	};

	Table.prototype._initCells = function() {
		var colstart,
			thrs = this.table.querySelectorAll( "thead tr" ),
			self = this;

		$( thrs ).each( function(){
			var coltally = 0;

			$( this ).children().each( function(){
				var span = parseInt( this.getAttribute( "colspan" ), 10 ),
					sel = ":nth-child(" + ( coltally + 1 ) + ")";

				colstart = coltally + 1;

				if( span ){
					for( var k = 0; k < span - 1; k++ ){
						coltally++;
						sel += ", :nth-child(" + ( coltally + 1 ) + ")";
					}
				}

				// Store "cells" data on header as a reference to all cells in the same column as this TH
				this.cells = self.$table.find("tr").not( thrs[0] ).not( this ).children().filter( sel );
				coltally++;
			});
		});

		return colstart;
	};

	Table.prototype.refresh = function() {
		this._initCells();

		this.$table.trigger( events.refresh );
	};

	Table.prototype.createToolbar = function() {
		// Insert the toolbar
		// TODO move this into a separate component
		var $toolbar = this.$table.prev().filter( '.' + classes.toolbar );
		if( !$toolbar.length ) {
			$toolbar = $( '<div>' )
				.addClass( classes.toolbar )
				.insertBefore( this.$table );
		}
		this.$toolbar = $toolbar;

		if( this.mode ) {
			this.$toolbar.addClass( 'mode-' + this.mode );
		}
	};

	Table.prototype.destroy = function() {
		// Don’t remove the toolbar. Some of the table features are not yet destroy-friendly.
		this.$table.prev().filter( '.' + classes.toolbar ).each(function() {
			this.className = this.className.replace( /\bmode\-\w*\b/gi, '' );
		});

		var tableId = this.$table.attr( 'id' );
		$( document ).unbind( "." + tableId );
		$( window ).unbind( "." + tableId );

		// other plugins
		this.$table.trigger( events.destroy, [ this ] );

		this.$table.removeAttr( 'data-tablesaw-mode' );

		this.$table.removeData( pluginName );
	};

	// Collection method.
	$.fn[ pluginName ] = function() {
		return this.each( function() {
			var $t = $( this );

			if( $t.data( pluginName ) ){
				return;
			}

			var table = new Table( this );
			$t.data( pluginName, table );
		});
	};

	$( document ).on( "enhance.tablesaw", function( e ) {
		// Cut the mustard
		if( Tablesaw.mustard ) {
			$( e.target ).find( initSelector )[ pluginName ]();
		}
	});

}( jQuery ));

;(function( win, $, undefined ){

	var classes = {
		stackTable: 'tablesaw-stack',
		cellLabels: 'tablesaw-cell-label',
		cellContentLabels: 'tablesaw-cell-content'
	};

	var data = {
		obj: 'tablesaw-stack'
	};

	var attrs = {
		labelless: 'data-tablesaw-no-labels',
		hideempty: 'data-tablesaw-hide-empty'
	};

	var Stack = function( element ) {

		this.$table = $( element );

		this.labelless = this.$table.is( '[' + attrs.labelless + ']' );
		this.hideempty = this.$table.is( '[' + attrs.hideempty + ']' );

		if( !this.labelless ) {
			// allHeaders references headers, plus all THs in the thead, which may include several rows, or not
			this.allHeaders = this.$table.find( "th" );
		}

		this.$table.data( data.obj, this );
	};

	Stack.prototype.init = function( colstart ) {
		this.$table.addClass( classes.stackTable );

		if( this.labelless ) {
			return;
		}

		// get headers in reverse order so that top-level headers are appended last
		var reverseHeaders = $( this.allHeaders );
		var hideempty = this.hideempty;
		
		// create the hide/show toggles
		reverseHeaders.each(function(){
			var $t = $( this ),
				$cells = $( this.cells ).filter(function() {
					return !$( this ).parent().is( "[" + attrs.labelless + "]" ) && ( !hideempty || !$( this ).is( ":empty" ) );
				}),
				hierarchyClass = $cells.not( this ).filter( "thead th" ).length && " tablesaw-cell-label-top",
				// TODO reduce coupling with sortable
				$sortableButton = $t.find( ".tablesaw-sortable-btn" ),
				html = $sortableButton.length ? $sortableButton.html() : $t.html();

			if( html !== "" ){
				if( hierarchyClass ){
					var iteration = parseInt( $( this ).attr( "colspan" ), 10 ),
						filter = "";

					if( iteration ){
						filter = "td:nth-child("+ iteration +"n + " + ( colstart ) +")";
					}
					$cells.filter( filter ).prepend( "<b class='" + classes.cellLabels + hierarchyClass + "'>" + html + "</b>"  );
				} else {
					$cells.wrapInner( "<span class='" + classes.cellContentLabels + "'></span>" );
					$cells.prepend( "<b class='" + classes.cellLabels + "'>" + html + "</b>"  );
				}
			}
		});
	};

	Stack.prototype.destroy = function() {
		this.$table.removeClass( classes.stackTable );
		this.$table.find( '.' + classes.cellLabels ).remove();
		this.$table.find( '.' + classes.cellContentLabels ).each(function() {
			$( this ).replaceWith( this.childNodes );
		});
	};

	// on tablecreate, init
	$( document ).on( "tablesawcreate", function( e, Tablesaw, colstart ){
		if( Tablesaw.mode === 'stack' ){
			var table = new Stack( Tablesaw.table );
			table.init( colstart );
		}

	} );

	$( document ).on( "tablesawdestroy", function( e, Tablesaw ){

		if( Tablesaw.mode === 'stack' ){
			$( Tablesaw.table ).data( data.obj ).destroy();
		}

	} );

}( this, jQuery ));
;(function( $ ) {
	var pluginName = "tablesawbtn",
		methods = {
			_create: function(){
				return $( this ).each(function() {
					$( this )
						.trigger( "beforecreate." + pluginName )
						[ pluginName ]( "_init" )
						.trigger( "create." + pluginName );
				});
			},
			_init: function(){
				var oEl = $( this ),
					sel = this.getElementsByTagName( "select" )[ 0 ];

				if( sel ) {
					$( this )
						.addClass( "btn-select" )
						[ pluginName ]( "_select", sel );
				}
				return oEl;
			},
			_select: function( sel ) {
				var update = function( oEl, sel ) {
					var opts = $( sel ).find( "option" ),
						label, el, children;

					opts.each(function() {
						var opt = this;
						if( opt.selected ) {
							label = document.createTextNode( opt.text );
						}
					});

					children = oEl.childNodes;
					if( opts.length > 0 ){
						for( var i = 0, l = children.length; i < l; i++ ) {
							el = children[ i ];

							if( el && el.nodeType === 3 ) {
								oEl.replaceChild( label, el );
							}
						}
					}
				};

				update( this, sel );
				$( this ).bind( "change refresh", function() {
					update( this, sel );
				});
			}
		};

	// Collection method.
	$.fn[ pluginName ] = function( arrg, a, b, c ) {
		return this.each(function() {

		// if it's a method
		if( arrg && typeof( arrg ) === "string" ){
			return $.fn[ pluginName ].prototype[ arrg ].call( this, a, b, c );
		}

		// don't re-init
		if( $( this ).data( pluginName + "active" ) ){
			return $( this );
		}

		// otherwise, init

		$( this ).data( pluginName + "active", true );
			$.fn[ pluginName ].prototype._create.call( this );
		});
	};

	// add methods
	$.extend( $.fn[ pluginName ].prototype, methods );

}( jQuery ));
;(function( win, $, undefined ){

	var ColumnToggle = function( element ) {

		this.$table = $( element );

		this.classes = {
			columnToggleTable: 'tablesaw-columntoggle',
			columnBtnContain: 'tablesaw-columntoggle-btnwrap tablesaw-advance',
			columnBtn: 'tablesaw-columntoggle-btn tablesaw-nav-btn down',
			popup: 'tablesaw-columntoggle-popup',
			priorityPrefix: 'tablesaw-priority-',
			// TODO duplicate class, also in tables.js
			toolbar: 'tablesaw-bar'
		};

		// Expose headers and allHeaders properties on the widget
		// headers references the THs within the first TR in the table
		this.headers = this.$table.find( 'tr:first > th' );

		this.$table.data( 'tablesaw-coltoggle', this );
	};

	ColumnToggle.prototype.init = function() {

		var tableId,
			id,
			$menuButton,
			$popup,
			$menu,
			$btnContain,
			self = this;

		this.$table.addClass( this.classes.columnToggleTable );

		tableId = this.$table.attr( "id" );
		id = tableId + "-popup";
		$btnContain = $( "<div class='" + this.classes.columnBtnContain + "'></div>" );
		$menuButton = $( "<a href='#" + id + "' class='btn btn-micro " + this.classes.columnBtn +"' data-popup-link>" +
										"<span>" + Tablesaw.i18n.columnBtnText + "</span></a>" );
		$popup = $( "<div class='dialog-table-coltoggle " + this.classes.popup + "' id='" + id + "'></div>" );
		$menu = $( "<div class='btn-group'></div>" );

		var hasNonPersistentHeaders = false;
		$( this.headers ).not( "td" ).each( function() {
			var $this = $( this ),
				priority = $this.attr("data-tablesaw-priority"),
				$cells = self.$getCells( this );

			if( priority && priority !== "persist" ) {
				$cells.addClass( self.classes.priorityPrefix + priority );

				$("<label><input type='checkbox' checked>" + $this.text() + "</label>" )
					.appendTo( $menu )
					.children( 0 )
					.data( "tablesaw-header", this );

				hasNonPersistentHeaders = true;
			}
		});

		if( !hasNonPersistentHeaders ) {
			$menu.append( '<label>' + Tablesaw.i18n.columnsDialogError + '</label>' );
		}

		$menu.appendTo( $popup );

		// bind change event listeners to inputs - TODO: move to a private method?
		$menu.find( 'input[type="checkbox"]' ).on( "change", function(e) {
			var checked = e.target.checked;

			self.$getCellsFromCheckbox( e.target )
				.toggleClass( "tablesaw-cell-hidden", !checked )
				.toggleClass( "tablesaw-cell-visible", checked );

			self.$table.trigger( 'tablesawcolumns' );
		});

		$menuButton.appendTo( $btnContain );
		$btnContain.appendTo( this.$table.prev().filter( '.' + this.classes.toolbar ) );

		var closeTimeout;
		function openPopup() {
			$btnContain.addClass( 'visible' );
			$menuButton.removeClass( 'down' ).addClass( 'up' );

			$( document ).unbind( 'click.' + tableId, closePopup );

			window.clearTimeout( closeTimeout );
			closeTimeout = window.setTimeout(function() {
				$( document ).one( 'click.' + tableId, closePopup );
			}, 15 );
		}

		function closePopup( event ) {
			// Click came from inside the popup, ignore.
			if( event && $( event.target ).closest( "." + self.classes.popup ).length ) {
				return;
			}

			$( document ).unbind( 'click.' + tableId );
			$menuButton.removeClass( 'up' ).addClass( 'down' );
			$btnContain.removeClass( 'visible' );
		}

		$menuButton.on( "click.tablesaw", function( event ) {
			event.preventDefault();

			if( !$btnContain.is( ".visible" ) ) {
				openPopup();
			} else {
				closePopup();
			}
		});

		$popup.appendTo( $btnContain );

		this.$menu = $menu;

		$(window).on( "resize." + tableId, function(){
			self.refreshToggle();
		});

		this.refreshToggle();
	};

	ColumnToggle.prototype.$getCells = function( th ) {
		return $( th ).add( th.cells );
	};

	ColumnToggle.prototype.$getCellsFromCheckbox = function( checkbox ) {
		var th = $( checkbox ).data( "tablesaw-header" );
		return this.$getCells( th );
	};

	ColumnToggle.prototype.refreshToggle = function() {
		var self = this;
		this.$menu.find( "input" ).each( function() {
			this.checked = self.$getCellsFromCheckbox( this ).eq( 0 ).css( "display" ) === "table-cell";
		});
	};

	ColumnToggle.prototype.refreshPriority = function(){
		var self = this;
		$(this.headers).not( "td" ).each( function() {
			var $this = $( this ),
				priority = $this.attr("data-tablesaw-priority"),
				$cells = $this.add( this.cells );

			if( priority && priority !== "persist" ) {
				$cells.addClass( self.classes.priorityPrefix + priority );
			}
		});
	};

	ColumnToggle.prototype.destroy = function() {
		// table toolbars, document and window .tableId events
		// removed in parent tables.js destroy method

		this.$table.removeClass( this.classes.columnToggleTable );
		this.$table.find( 'th, td' ).each(function() {
			var $cell = $( this );
			$cell.removeClass( 'tablesaw-cell-hidden' )
				.removeClass( 'tablesaw-cell-visible' );

			this.className = this.className.replace( /\bui\-table\-priority\-\d\b/g, '' );
		});
	};

	// on tablecreate, init
	$( document ).on( "tablesawcreate", function( e, Tablesaw ){

		if( Tablesaw.mode === 'columntoggle' ){
			var table = new ColumnToggle( Tablesaw.table );
			table.init();
		}

	} );

	$( document ).on( "tablesawdestroy", function( e, Tablesaw ){
		if( Tablesaw.mode === 'columntoggle' ){
			$( Tablesaw.table ).data( 'tablesaw-coltoggle' ).destroy();
		}
	} );

}( this, jQuery ));
;(function( win, $, undefined ){

	$.extend( Tablesaw.config, {
		swipe: {
			horizontalThreshold: 15,
			verticalThreshold: 30
		}
	});

	function isIE8() {
		var div = document.createElement('div'),
			all = div.getElementsByTagName('i');

		div.innerHTML = '<!--[if lte IE 8]><i></i><![endif]-->';

		return !!all.length;
	}

	function createSwipeTable( $table ){

		var $btns = $( "<div class='tablesaw-advance'></div>" ),
			$prevBtn = $( "<a href='#' class='tablesaw-nav-btn btn btn-micro left' title='Previous Column'></a>" ).appendTo( $btns ),
			$nextBtn = $( "<a href='#' class='tablesaw-nav-btn btn btn-micro right' title='Next Column'></a>" ).appendTo( $btns ),
			hideBtn = 'disabled',
			persistWidths = 'tablesaw-fix-persist',
			$headerCells = $table.find( "thead th" ),
			$headerCellsNoPersist = $headerCells.not( '[data-tablesaw-priority="persist"]' ),
			headerWidths = [],
			$head = $( document.head || 'head' ),
			tableId = $table.attr( 'id' ),
			// TODO switch this to an nth-child feature test
			supportsNthChild = !isIE8();

		if( !$headerCells.length ) {
			throw new Error( "tablesaw swipe: no header cells found. Are you using <th> inside of <thead>?" );
		}

		// Calculate initial widths
		$table.css('width', 'auto');
		$headerCells.each(function() {
			headerWidths.push( $( this ).outerWidth() );
		});
		$table.css( 'width', '' );

		$btns.appendTo( $table.prev().filter( '.tablesaw-bar' ) );

		$table.addClass( "tablesaw-swipe" );

		if( !tableId ) {
			tableId = 'tableswipe-' + Math.round( Math.random() * 10000 );
			$table.attr( 'id', tableId );
		}

		function $getCells( headerCell ) {
			return $( headerCell.cells ).add( headerCell );
		}

		function showColumn( headerCell ) {
			$getCells( headerCell ).removeClass( 'tablesaw-cell-hidden' );
		}

		function hideColumn( headerCell ) {
			$getCells( headerCell ).addClass( 'tablesaw-cell-hidden' );
		}

		function persistColumn( headerCell ) {
			$getCells( headerCell ).addClass( 'tablesaw-cell-persist' );
		}

		function isPersistent( headerCell ) {
			return $( headerCell ).is( '[data-tablesaw-priority="persist"]' );
		}

		function unmaintainWidths() {
			$table.removeClass( persistWidths );
			$( '#' + tableId + '-persist' ).remove();
		}

		function maintainWidths() {
			var prefix = '#' + tableId + '.tablesaw-swipe ',
				styles = [],
				tableWidth = $table.width(),
				hash = [],
				newHash;

			$headerCells.each(function( index ) {
				var width;
				if( isPersistent( this ) ) {
					width = $( this ).outerWidth();

					// Only save width on non-greedy columns (take up less than 75% of table width)
					if( width < tableWidth * 0.75 ) {
						hash.push( index + '-' + width );
						styles.push( prefix + ' .tablesaw-cell-persist:nth-child(' + ( index + 1 ) + ') { width: ' + width + 'px; }' );
					}
				}
			});
			newHash = hash.join( '_' );

			$table.addClass( persistWidths );

			var $style = $( '#' + tableId + '-persist' );
			// If style element not yet added OR if the widths have changed
			if( !$style.length || $style.data( 'hash' ) !== newHash ) {
				// Remove existing
				$style.remove();

				if( styles.length ) {
					$( '<style>' + styles.join( "\n" ) + '</style>' )
						.attr( 'id', tableId + '-persist' )
						.data( 'hash', newHash )
						.appendTo( $head );
				}
			}
		}

		function getNext(){
			var next = [],
				checkFound;

			$headerCellsNoPersist.each(function( i ) {
				var $t = $( this ),
					isHidden = $t.css( "display" ) === "none" || $t.is( ".tablesaw-cell-hidden" );

				if( !isHidden && !checkFound ) {
					checkFound = true;
					next[ 0 ] = i;
				} else if( isHidden && checkFound ) {
					next[ 1 ] = i;

					return false;
				}
			});

			return next;
		}

		function getPrev(){
			var next = getNext();
			return [ next[ 1 ] - 1 , next[ 0 ] - 1 ];
		}

		function nextpair( fwd ){
			return fwd ? getNext() : getPrev();
		}

		function canAdvance( pair ){
			return pair[ 1 ] > -1 && pair[ 1 ] < $headerCellsNoPersist.length;
		}

		function matchesMedia() {
			var matchMedia = $table.attr( "data-tablesaw-swipe-media" );
			return !matchMedia || ( "matchMedia" in win ) && win.matchMedia( matchMedia ).matches;
		}

		function fakeBreakpoints() {
			if( !matchesMedia() ) {
				return;
			}

			var extraPaddingPixels = 20,
				containerWidth = $table.parent().width(),
				persist = [],
				sum = 0,
				sums = [],
				visibleNonPersistantCount = $headerCells.length;

			$headerCells.each(function( index ) {
				var $t = $( this ),
					isPersist = $t.is( '[data-tablesaw-priority="persist"]' );

				persist.push( isPersist );

				sum += headerWidths[ index ] + ( isPersist ? 0 : extraPaddingPixels );
				sums.push( sum );

				// is persistent or is hidden
				if( isPersist || sum > containerWidth ) {
					visibleNonPersistantCount--;
				}
			});

			var needsNonPersistentColumn = visibleNonPersistantCount === 0;

			$headerCells.each(function( index ) {
				if( persist[ index ] ) {

					// for visual box-shadow
					persistColumn( this );
					return;
				}

				if( sums[ index ] <= containerWidth || needsNonPersistentColumn ) {
					needsNonPersistentColumn = false;
					showColumn( this );
				} else {
					hideColumn( this );
				}
			});

			if( supportsNthChild ) {
				unmaintainWidths();
			}
			$table.trigger( 'tablesawcolumns' );
		}

		function advance( fwd ){
			var pair = nextpair( fwd );
			if( canAdvance( pair ) ){
				if( isNaN( pair[ 0 ] ) ){
					if( fwd ){
						pair[0] = 0;
					}
					else {
						pair[0] = $headerCellsNoPersist.length - 1;
					}
				}

				if( supportsNthChild ) {
					maintainWidths();
				}

				hideColumn( $headerCellsNoPersist.get( pair[ 0 ] ) );
				showColumn( $headerCellsNoPersist.get( pair[ 1 ] ) );

				$table.trigger( 'tablesawcolumns' );
			}
		}

		$prevBtn.add( $nextBtn ).click(function( e ){
			advance( !!$( e.target ).closest( $nextBtn ).length );
			e.preventDefault();
		});

		function getCoord( event, key ) {
			return ( event.touches || event.originalEvent.touches )[ 0 ][ key ];
		}

		$table
			.bind( "touchstart.swipetoggle", function( e ){
				var originX = getCoord( e, 'pageX' ),
					originY = getCoord( e, 'pageY' ),
					x,
					y;

				$( win ).off( "resize", fakeBreakpoints );

				$( this )
					.bind( "touchmove", function( e ){
						x = getCoord( e, 'pageX' );
						y = getCoord( e, 'pageY' );
						var cfg = Tablesaw.config.swipe;
						if( Math.abs( x - originX ) > cfg.horizontalThreshold && Math.abs( y - originY ) < cfg.verticalThreshold ) {
							e.preventDefault();
						}
					})
					.bind( "touchend.swipetoggle", function(){
						var cfg = Tablesaw.config.swipe;
						if( Math.abs( y - originY ) < cfg.verticalThreshold ) {
							if( x - originX < -1 * cfg.horizontalThreshold ){
								advance( true );
							}
							if( x - originX > cfg.horizontalThreshold ){
								advance( false );
							}
						}

						window.setTimeout(function() {
							$( win ).on( "resize", fakeBreakpoints );
						}, 300);
						$( this ).unbind( "touchmove touchend" );
					});

			})
			.bind( "tablesawcolumns.swipetoggle", function(){
				$prevBtn[ canAdvance( getPrev() ) ? "removeClass" : "addClass" ]( hideBtn );
				$nextBtn[ canAdvance( getNext() ) ? "removeClass" : "addClass" ]( hideBtn );
			})
			.bind( "tablesawnext.swipetoggle", function(){
				advance( true );
			} )
			.bind( "tablesawprev.swipetoggle", function(){
				advance( false );
			} )
			.bind( "tablesawdestroy.swipetoggle", function(){
				var $t = $( this );

				$t.removeClass( 'tablesaw-swipe' );
				$t.prev().filter( '.tablesaw-bar' ).find( '.tablesaw-advance' ).remove();
				$( win ).off( "resize", fakeBreakpoints );

				$t.unbind( ".swipetoggle" );
			});

		fakeBreakpoints();
		$( win ).on( "resize", fakeBreakpoints );
	}



	// on tablecreate, init
	$( document ).on( "tablesawcreate", function( e, Tablesaw ){

		if( Tablesaw.mode === 'swipe' ){
			createSwipeTable( Tablesaw.$table );
		}

	} );

}( this, jQuery ));

;(function( $ ) {
	function getSortValue( cell ) {
		return $.map( cell.childNodes, function( el ) {
				var $el = $( el );
				if( $el.is( 'input, select' ) ) {
					return $el.val();
				} else if( $el.hasClass( 'tablesaw-cell-label' ) ) {
					return;
				}
				return $.trim( $el.text() );
			}).join( '' );
	}

	var pluginName = "tablesaw-sortable",
		initSelector = "table[data-" + pluginName + "]",
		sortableSwitchSelector = "[data-" + pluginName + "-switch]",
		attrs = {
			defaultCol: "data-tablesaw-sortable-default-col",
			numericCol: "data-tablesaw-sortable-numeric"
		},
		classes = {
			head: pluginName + "-head",
			ascend: pluginName + "-ascending",
			descend: pluginName + "-descending",
			switcher: pluginName + "-switch",
			tableToolbar: 'tablesaw-toolbar',
			sortButton: pluginName + "-btn"
		},
		methods = {
			_create: function( o ){
				return $( this ).each(function() {
					var init = $( this ).data( "init" + pluginName );
					if( init ) {
						return false;
					}
					$( this )
						.data( "init"+ pluginName, true )
						.trigger( "beforecreate." + pluginName )
						[ pluginName ]( "_init" , o )
						.trigger( "create." + pluginName );
				});
			},
			_init: function(){
				var el = $( this ),
					heads,
					$switcher;

				var addClassToTable = function(){
						el.addClass( pluginName );
					},
					addClassToHeads = function( h ){
						$.each( h , function( i , v ){
							$( v ).addClass( classes.head );
						});
					},
					makeHeadsActionable = function( h , fn ){
						$.each( h , function( i , v ){
							var b = $( "<button class='" + classes.sortButton + "'/>" );
							b.bind( "click" , { col: v } , fn );
							$( v ).wrapInner( b );
						});
					},
					clearOthers = function( sibs ){
						$.each( sibs , function( i , v ){
							var col = $( v );
							col.removeAttr( attrs.defaultCol );
							col.removeClass( classes.ascend );
							col.removeClass( classes.descend );
						});
					},
					headsOnAction = function( e ){
						if( $( e.target ).is( 'a[href]' ) ) {
							return;
						}

						e.stopPropagation();
						var head = $( this ).parent(),
							v = e.data.col,
							newSortValue = heads.index( head );

						clearOthers( head.siblings() );
						if( head.hasClass( classes.descend ) ){
							el[ pluginName ]( "sortBy" , v , true);
							newSortValue += '_asc';
						} else {
							el[ pluginName ]( "sortBy" , v );
							newSortValue += '_desc';
						}
						if( $switcher ) {
							$switcher.find( 'select' ).val( newSortValue ).trigger( 'refresh' );
						}

						e.preventDefault();
					},
					handleDefault = function( heads ){
						$.each( heads , function( idx , el ){
							var $el = $( el );
							if( $el.is( "[" + attrs.defaultCol + "]" ) ){
								if( !$el.hasClass( classes.descend ) ) {
									$el.addClass( classes.ascend );
								}
							}
						});
					},
					addSwitcher = function( heads ){
						$switcher = $( '<div>' ).addClass( classes.switcher ).addClass( classes.tableToolbar ).html(function() {
							var html = [ '<label>' + Tablesaw.i18n.sort + ':' ];

							html.push( '<span class="btn btn-small">&#160;<select>' );
							heads.each(function( j ) {
								var $t = $( this );
								var isDefaultCol = $t.is( "[" + attrs.defaultCol + "]" );
								var isDescending = $t.hasClass( classes.descend );

								var hasNumericAttribute = $t.is( '[data-sortable-numeric]' );
								var numericCount = 0;
								// Check only the first four rows to see if the column is numbers.
								var numericCountMax = 5;

								$( this.cells ).slice( 0, numericCountMax ).each(function() {
									if( !isNaN( parseInt( getSortValue( this ), 10 ) ) ) {
										numericCount++;
									}
								});
								var isNumeric = numericCount === numericCountMax;
								if( !hasNumericAttribute ) {
									$t.attr( "data-sortable-numeric", isNumeric ? "" : "false" );
								}

								html.push( '<option' + ( isDefaultCol && !isDescending ? ' selected' : '' ) + ' value="' + j + '_asc">' + $t.text() + ' ' + ( isNumeric ? '&#x2191;' : '(A-Z)' ) + '</option>' );
								html.push( '<option' + ( isDefaultCol && isDescending ? ' selected' : '' ) + ' value="' + j + '_desc">' + $t.text() + ' ' + ( isNumeric ? '&#x2193;' : '(Z-A)' ) + '</option>' );
							});
							html.push( '</select></span></label>' );

							return html.join('');
						});

						var $toolbar = el.prev().filter( '.tablesaw-bar' ),
							$firstChild = $toolbar.children().eq( 0 );

						if( $firstChild.length ) {
							$switcher.insertBefore( $firstChild );
						} else {
							$switcher.appendTo( $toolbar );
						}
						$switcher.find( '.btn' ).tablesawbtn();
						$switcher.find( 'select' ).on( 'change', function() {
							var val = $( this ).val().split( '_' ),
								head = heads.eq( val[ 0 ] );

							clearOthers( head.siblings() );
							el[ pluginName ]( 'sortBy', head.get( 0 ), val[ 1 ] === 'asc' );
						});
					};

					addClassToTable();
					heads = el.find( "thead th[data-" + pluginName + "-col]" );
					addClassToHeads( heads );
					makeHeadsActionable( heads , headsOnAction );
					handleDefault( heads );

					if( el.is( sortableSwitchSelector ) ) {
						addSwitcher( heads, el.find('tbody tr:nth-child(-n+3)') );
					}
			},
			getColumnNumber: function( col ){
				return $( col ).prevAll().length;
			},
			getTableRows: function(){
				return $( this ).find( "tbody tr" );
			},
			sortRows: function( rows , colNum , ascending, col ){
				var cells, fn, sorted;
				var getCells = function( rows ){
						var cells = [];
						$.each( rows , function( i , r ){
							var element = $( r ).children().get( colNum );
							cells.push({
								element: element,
								cell: getSortValue( element ),
								rowNum: i
							});
						});
						return cells;
					},
					getSortFxn = function( ascending, forceNumeric ){
						var fn,
							regex = /[^\-\+\d\.]/g;
						if( ascending ){
							fn = function( a , b ){
								if( forceNumeric ) {
									return parseFloat( a.cell.replace( regex, '' ) ) - parseFloat( b.cell.replace( regex, '' ) );
								} else {
									return a.cell.toLowerCase() > b.cell.toLowerCase() ? 1 : -1;
								}
							};
						} else {
							fn = function( a , b ){
								if( forceNumeric ) {
									return parseFloat( b.cell.replace( regex, '' ) ) - parseFloat( a.cell.replace( regex, '' ) );
								} else {
									return a.cell.toLowerCase() < b.cell.toLowerCase() ? 1 : -1;
								}
							};
						}
						return fn;
					},
					applyToRows = function( sorted , rows ){
						var newRows = [], i, l, cur;
						for( i = 0, l = sorted.length ; i < l ; i++ ){
							cur = sorted[ i ].rowNum;
							newRows.push( rows[cur] );
						}
						return newRows;
					};

				cells = getCells( rows );
				var customFn = $( col ).data( 'tablesaw-sort' );
				fn = ( customFn && typeof customFn === "function" ? customFn( ascending ) : false ) ||
					getSortFxn( ascending, $( col ).is( '[data-sortable-numeric]' ) && !$( col ).is( '[data-sortable-numeric="false"]' ) );
				sorted = cells.sort( fn );
				rows = applyToRows( sorted , rows );
				return rows;
			},
			replaceTableRows: function( rows ){
				var el = $( this ),
					body = el.find( "tbody" );
				body.html( rows );
			},
			makeColDefault: function( col , a ){
				var c = $( col );
				c.attr( attrs.defaultCol , "true" );
				if( a ){
					c.removeClass( classes.descend );
					c.addClass( classes.ascend );
				} else {
					c.removeClass( classes.ascend );
					c.addClass( classes.descend );
				}
			},
			sortBy: function( col , ascending ){
				var el = $( this ), colNum, rows;

				colNum = el[ pluginName ]( "getColumnNumber" , col );
				rows = el[ pluginName ]( "getTableRows" );
				rows = el[ pluginName ]( "sortRows" , rows , colNum , ascending, col );
				el[ pluginName ]( "replaceTableRows" , rows );
				el[ pluginName ]( "makeColDefault" , col , ascending );
			}
		};

	// Collection method.
	$.fn[ pluginName ] = function( arrg ) {
		var args = Array.prototype.slice.call( arguments , 1),
			returnVal;

		// if it's a method
		if( arrg && typeof( arrg ) === "string" ){
			returnVal = $.fn[ pluginName ].prototype[ arrg ].apply( this[0], args );
			return (typeof returnVal !== "undefined")? returnVal:$(this);
		}
		// check init
		if( !$( this ).data( pluginName + "data" ) ){
			$( this ).data( pluginName + "active", true );
			$.fn[ pluginName ].prototype._create.call( this , arrg );
		}
		return $(this);
	};
	// add methods
	$.extend( $.fn[ pluginName ].prototype, methods );

	$( document ).on( "tablesawcreate", function( e, Tablesaw ) {
		if( Tablesaw.$table.is( initSelector ) ) {
			Tablesaw.$table[ pluginName ]();
		}
	});

}( jQuery ));

;(function( win, $, undefined ){

	var MM = {
		attr: {
			init: 'data-tablesaw-minimap'
		}
	};

	function createMiniMap( $table ){

		var $btns = $( '<div class="tablesaw-advance minimap">' ),
			$dotNav = $( '<ul class="tablesaw-advance-dots">' ).appendTo( $btns ),
			hideDot = 'tablesaw-advance-dots-hide',
			$headerCells = $table.find( 'thead th' );

		// populate dots
		$headerCells.each(function(){
			$dotNav.append( '<li><i></i></li>' );
		});

		$btns.appendTo( $table.prev().filter( '.tablesaw-bar' ) );

		function showMinimap( $table ) {
			var mq = $table.attr( MM.attr.init );
			return !mq || win.matchMedia && win.matchMedia( mq ).matches;
		}

		function showHideNav(){
			if( !showMinimap( $table ) ) {
				$btns.hide();
				return;
			}
			$btns.show();

			// show/hide dots
			var dots = $dotNav.find( "li" ).removeClass( hideDot );
			$table.find( "thead th" ).each(function(i){
				if( $( this ).css( "display" ) === "none" ){
					dots.eq( i ).addClass( hideDot );
				}
			});
		}

		// run on init and resize
		showHideNav();
		$( win ).on( "resize", showHideNav );


		$table
			.bind( "tablesawcolumns.minimap", function(){
				showHideNav();
			})
			.bind( "tablesawdestroy.minimap", function(){
				var $t = $( this );

				$t.prev().filter( '.tablesaw-bar' ).find( '.tablesaw-advance' ).remove();
				$( win ).off( "resize", showHideNav );

				$t.unbind( ".minimap" );
			});
	}



	// on tablecreate, init
	$( document ).on( "tablesawcreate", function( e, Tablesaw ){

		if( ( Tablesaw.mode === 'swipe' || Tablesaw.mode === 'columntoggle' ) && Tablesaw.$table.is( '[ ' + MM.attr.init + ']' ) ){
			createMiniMap( Tablesaw.$table );
		}

	} );

}( this, jQuery ));

;(function( win, $ ) {

	var S = {
		selectors: {
			init: 'table[data-tablesaw-mode-switch]'
		},
		attributes: {
			excludeMode: 'data-tablesaw-mode-exclude'
		},
		classes: {
			main: 'tablesaw-modeswitch',
			toolbar: 'tablesaw-toolbar'
		},
		modes: [ 'stack', 'swipe', 'columntoggle' ],
		init: function( table ) {
			var $table = $( table ),
				ignoreMode = $table.attr( S.attributes.excludeMode ),
				$toolbar = $table.prev().filter( '.tablesaw-bar' ),
				modeVal = '',
				$switcher = $( '<div>' ).addClass( S.classes.main + ' ' + S.classes.toolbar ).html(function() {
					var html = [ '<label>' + Tablesaw.i18n.columns + ':' ],
						dataMode = $table.attr( 'data-tablesaw-mode' ),
						isSelected;

					html.push( '<span class="btn btn-small">&#160;<select>' );
					for( var j=0, k = S.modes.length; j<k; j++ ) {
						if( ignoreMode && ignoreMode.toLowerCase() === S.modes[ j ] ) {
							continue;
						}

						isSelected = dataMode === S.modes[ j ];

						if( isSelected ) {
							modeVal = S.modes[ j ];
						}

						html.push( '<option' +
							( isSelected ? ' selected' : '' ) +
							' value="' + S.modes[ j ] + '">' + Tablesaw.i18n.modes[ j ] + '</option>' );
					}
					html.push( '</select></span></label>' );

					return html.join('');
				});

			var $otherToolbarItems = $toolbar.find( '.tablesaw-advance' ).eq( 0 );
			if( $otherToolbarItems.length ) {
				$switcher.insertBefore( $otherToolbarItems );
			} else {
				$switcher.appendTo( $toolbar );
			}

			$switcher.find( '.btn' ).tablesawbtn();
			$switcher.find( 'select' ).bind( 'change', S.onModeChange );
		},
		onModeChange: function() {
			var $t = $( this ),
				$switcher = $t.closest( '.' + S.classes.main ),
				$table = $t.closest( '.tablesaw-bar' ).nextUntil( $table ).eq( 0 ),
				val = $t.val();

			$switcher.remove();
			$table.data( 'table' ).destroy();

			$table.attr( 'data-tablesaw-mode', val );
			$table.table();
		}
	};

	$( win.document ).on( "tablesawcreate", function( e, Tablesaw ) {
		if( Tablesaw.$table.is( S.selectors.init ) ) {
			S.init( Tablesaw.table );
		}
	});

})( this, jQuery );
/*tablesaw-init.js*/
/*! Tablesaw - v2.0.2 - 2015-10-28
* https://github.com/filamentgroup/tablesaw
* Copyright (c) 2015 Filament Group; Licensed  */
;(function( $ ) {

	// DOM-ready auto-init of plugins.
	// Many plugins bind to an "enhance" event to init themselves on dom ready, or when new markup is inserted into the DOM
	$( function(){
		$( document ).trigger( "enhance.tablesaw" );
	});

})( jQuery );
/*sweet-alert.min.js*/
!function(a,b){function c(b){var c=p(),d=c.querySelector("h2"),e=c.querySelector("p"),f=c.querySelector("button.cancel"),g=c.querySelector("button.confirm");if(d.innerHTML=u(b.title).split("\n").join("<br>"),e.innerHTML=u(b.text||"").split("\n").join("<br>"),b.text&&w(e),y(c.querySelectorAll(".icon")),b.type){for(var h=!1,i=0;i<n.length;i++)if(b.type===n[i]){h=!0;break}if(!h)return a.console.error("Unknown alert type: "+b.type),!1;var j=c.querySelector(".icon."+b.type);switch(w(j),b.type){case"success":s(j,"animate"),s(j.querySelector(".tip"),"animateSuccessTip"),s(j.querySelector(".long"),"animateSuccessLong");break;case"error":s(j,"animateErrorIcon"),s(j.querySelector(".x-mark"),"animateXMark");break;case"warning":s(j,"pulseWarning"),s(j.querySelector(".body"),"pulseWarningIns"),s(j.querySelector(".dot"),"pulseWarningIns")}}if(b.imageUrl){var k=c.querySelector(".icon.custom");k.style.backgroundImage="url("+b.imageUrl+")",w(k);var l=80,m=80;if(b.imageSize){var o=b.imageSize.split("x")[0],q=b.imageSize.split("x")[1];o&&q?(l=o,m=q,k.css({width:o+"px",height:q+"px"})):a.console.error("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+b.imageSize)}k.setAttribute("style",k.getAttribute("style")+"width:"+l+"px; height:"+m+"px")}c.setAttribute("data-has-cancel-button",b.showCancelButton),b.showCancelButton?f.style.display="inline-block":y(f),c.setAttribute("data-has-confirm-button",b.showConfirmButton),b.showConfirmButton?g.style.display="inline-block":y(g),b.cancelButtonText&&(f.innerHTML=u(b.cancelButtonText)),b.confirmButtonText&&(g.innerHTML=u(b.confirmButtonText)),g.className="confirm btn btn-lg",s(c,b.containerClass),s(g,b.confirmButtonClass),s(f,b.cancelButtonClass),s(d,b.titleClass),s(e,b.textClass),c.setAttribute("data-allow-ouside-click",b.allowOutsideClick);var r=b.doneFunction?!0:!1;c.setAttribute("data-has-done-function",r),c.setAttribute("data-timer",b.timer)}function d(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function e(){var a=p();B(q(),10),w(a),s(a,"showSweetAlert"),t(a,"hideSweetAlert"),h=b.activeElement;var c=a.querySelector("button.confirm");c.focus(),setTimeout(function(){s(a,"visible")},500);var d=a.getAttribute("data-timer");"null"!==d&&""!==d&&setTimeout(function(){f()},d)}function f(){var c=p();C(q(),5),C(c,5),t(c,"showSweetAlert"),s(c,"hideSweetAlert"),t(c,"visible");var d=c.querySelector(".icon.success");t(d,"animate"),t(d.querySelector(".tip"),"animateSuccessTip"),t(d.querySelector(".long"),"animateSuccessLong");var e=c.querySelector(".icon.error");t(e,"animateErrorIcon"),t(e.querySelector(".x-mark"),"animateXMark");var f=c.querySelector(".icon.warning");t(f,"pulseWarning"),t(f.querySelector(".body"),"pulseWarningIns"),t(f.querySelector(".dot"),"pulseWarningIns"),a.onkeydown=j,b.onclick=i,h&&h.focus(),k=void 0}function g(){var a=p();a.style.marginTop=A(p())}var h,i,j,k,l=".sweet-alert",m=".sweet-overlay",n=["error","warning","info","success"],o={title:"",text:"",type:null,allowOutsideClick:!1,showCancelButton:!1,showConfirmButton:!0,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonClass:"btn-primary",cancelButtonText:"Cancel",cancelButtonClass:"btn-default",containerClass:"",titleClass:"",textClass:"",imageUrl:null,imageSize:null,timer:null},p=function(){return b.querySelector(l)},q=function(){return b.querySelector(m)},r=function(a,b){return new RegExp(" "+b+" ").test(" "+a.className+" ")},s=function(a,b){b&&!r(a,b)&&(a.className+=" "+b)},t=function(a,b){var c=" "+a.className.replace(/[\t\r\n]/g," ")+" ";if(r(a,b)){for(;c.indexOf(" "+b+" ")>=0;)c=c.replace(" "+b+" "," ");a.className=c.replace(/^\s+|\s+$/g,"")}},u=function(a){var c=b.createElement("div");return c.appendChild(b.createTextNode(a)),c.innerHTML},v=function(a){a.style.opacity="",a.style.display="block"},w=function(a){if(a&&!a.length)return v(a);for(var b=0;b<a.length;++b)v(a[b])},x=function(a){a.style.opacity="",a.style.display="none"},y=function(a){if(a&&!a.length)return x(a);for(var b=0;b<a.length;++b)x(a[b])},z=function(a,b){for(var c=b.parentNode;null!==c;){if(c===a)return!0;c=c.parentNode}return!1},A=function(a){a.style.left="-9999px",a.style.display="block";var b=a.clientHeight,c=parseInt(getComputedStyle(a).getPropertyValue("padding"),10);return a.style.left="",a.style.display="none","-"+parseInt(b/2+c)+"px"},B=function(a,b){if(+a.style.opacity<1){b=b||16,a.style.opacity=0,a.style.display="block";var c=+new Date,d=function(){a.style.opacity=+a.style.opacity+(new Date-c)/100,c=+new Date,+a.style.opacity<1&&setTimeout(d,b)};d()}},C=function(a,b){b=b||16,a.style.opacity=1;var c=+new Date,d=function(){a.style.opacity=+a.style.opacity-(new Date-c)/100,c=+new Date,+a.style.opacity>0?setTimeout(d,b):a.style.display="none"};d()},D=function(c){if(MouseEvent){var d=new MouseEvent("click",{view:a,bubbles:!1,cancelable:!0});c.dispatchEvent(d)}else if(b.createEvent){var e=b.createEvent("MouseEvents");e.initEvent("click",!1,!1),c.dispatchEvent(e)}else b.createEventObject?c.fireEvent("onclick"):"function"==typeof c.onclick&&c.onclick()},E=function(b){"function"==typeof b.stopPropagation?(b.stopPropagation(),b.preventDefault()):a.event&&a.event.hasOwnProperty("cancelBubble")&&(a.event.cancelBubble=!0)};a.sweetAlertInitialize=function(){var a='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <div class="icon custom"></div> <h2>Title</h2><p class="lead text-muted">Text</p><p><button class="cancel btn btn-lg" tabIndex="2">Cancel</button> <button class="confirm btn btn-lg" tabIndex="1">OK</button></p></div>',c=b.createElement("div");c.innerHTML=a,b.body.appendChild(c)},a.sweetAlert=a.swal=function(){function h(a){var b=a.keyCode||a.which;if(-1!==[9,13,32,27].indexOf(b)){for(var c=a.target||a.srcElement,d=-1,e=0;e<w.length;e++)if(c===w[e]){d=e;break}9===b?(c=-1===d?u:d===w.length-1?w[0]:w[d+1],E(a),c.focus()):(c=13===b||32===b?-1===d?u:void 0:27!==b||v.hidden||"none"===v.style.display?void 0:v,void 0!==c&&D(c,a))}}function l(a){var b=a.target||a.srcElement,c=a.relatedTarget,d=r(n,"visible");if(d){var e=-1;if(null!==c){for(var f=0;f<w.length;f++)if(c===w[f]){e=f;break}-1===e&&b.focus()}else k=b}}if(void 0===arguments[0])return a.console.error("sweetAlert expects at least 1 attribute!"),!1;var m=d({},o);switch(typeof arguments[0]){case"string":m.title=arguments[0],m.text=arguments[1]||"",m.type=arguments[2]||"";break;case"object":if(void 0===arguments[0].title)return a.console.error('Missing "title" argument!'),!1;m.title=arguments[0].title,m.text=arguments[0].text||o.text,m.type=arguments[0].type||o.type,m.allowOutsideClick=arguments[0].allowOutsideClick||o.allowOutsideClick,m.showCancelButton=void 0!==arguments[0].showCancelButton?arguments[0].showCancelButton:o.showCancelButton,m.showConfirmButton=void 0!==arguments[0].showConfirmButton?arguments[0].showConfirmButton:o.showConfirmButton,m.closeOnConfirm=void 0!==arguments[0].closeOnConfirm?arguments[0].closeOnConfirm:o.closeOnConfirm,m.closeOnCancel=void 0!==arguments[0].closeOnCancel?arguments[0].closeOnCancel:o.closeOnCancel,m.timer=arguments[0].timer||o.timer,m.confirmButtonText=o.showCancelButton?"Confirm":o.confirmButtonText,m.confirmButtonText=arguments[0].confirmButtonText||o.confirmButtonText,m.confirmButtonClass=arguments[0].confirmButtonClass||(arguments[0].type?"btn-"+arguments[0].type:null)||o.confirmButtonClass,m.cancelButtonText=arguments[0].cancelButtonText||o.cancelButtonText,m.cancelButtonClass=arguments[0].cancelButtonClass||o.cancelButtonClass,m.containerClass=arguments[0].containerClass||o.containerClass,m.titleClass=arguments[0].titleClass||o.titleClass,m.textClass=arguments[0].textClass||o.textClass,m.imageUrl=arguments[0].imageUrl||o.imageUrl,m.imageSize=arguments[0].imageSize||o.imageSize,m.doneFunction=arguments[1]||null;break;default:return a.console.error('Unexpected type of argument! Expected "string" or "object", got '+typeof arguments[0]),!1}c(m),g(),e();for(var n=p(),q=function(a){var b=a.target||a.srcElement,c=b.className.indexOf("confirm")>-1,d=r(n,"visible"),e=m.doneFunction&&"true"===n.getAttribute("data-has-done-function");switch(a.type){case"click":if(c&&e&&d)m.doneFunction(!0),m.closeOnConfirm&&f();else if(e&&d){var g=String(m.doneFunction).replace(/\s/g,""),h="function("===g.substring(0,9)&&")"!==g.substring(9,10);h&&m.doneFunction(!1),m.closeOnCancel&&f()}else f()}},s=n.querySelectorAll("button"),t=0;t<s.length;t++)s[t].onclick=q;i=b.onclick,b.onclick=function(a){var b=a.target||a.srcElement,c=n===b,d=z(n,a.target),e=r(n,"visible"),g="true"===n.getAttribute("data-allow-ouside-click");!c&&!d&&e&&g&&f()};var u=n.querySelector("button.confirm"),v=n.querySelector("button.cancel"),w=n.querySelectorAll("button:not([type=hidden])");j=a.onkeydown,a.onkeydown=h,u.onblur=l,v.onblur=l,a.onfocus=function(){a.setTimeout(function(){void 0!==k&&(k.focus(),k=void 0)},0)}},a.swal.setDefaults=function(a){if(!a)throw new Error("userParams is required");if("object"!=typeof a)throw new Error("userParams has to be a object");d(o,a)},a.swal.close=function(){f()},function(){"complete"===b.readyState||"interactive"===b.readyState&&b.body?sweetAlertInitialize():b.addEventListener?b.addEventListener("DOMContentLoaded",function a(){b.removeEventListener("DOMContentLoaded",a,!1),sweetAlertInitialize()},!1):b.attachEvent&&b.attachEvent("onreadystatechange",function c(){"complete"===b.readyState&&(b.detachEvent("onreadystatechange",c),sweetAlertInitialize())})}()}(window,document);
/*bootstrap-sweetalert.min.js*/
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("sweetalert",{mode:"api",api:function(){if("undefined"!=typeof swal){var defaults=$.components.getDefaults("sweetalert");$(document).on("click.site.sweetalert",'[data-plugin="sweetalert"]',function(){var options=$.extend(!0,{},defaults,$(this).data());swal(options)})}}});
/*jquery-wizard.min.js*/
/*! jQuery wizard - v0.3.1 - 2015-05-07
* https://github.com/amazingSurge/jquery-wizard
* Copyright (c) 2015 amazingSurge; Licensed GPL */
!function(a,b,c,d){"use strict";function e(a,b){var c=!1;a.one(g.transition.end,function(){c=!0});var d=function(){c||a.trigger(g.transition.end)};setTimeout(d,b)}function f(){return this.initialize.apply(this,Array.prototype.slice.call(arguments))}var g=function(){function b(b,c){var g=!1,h=b.charAt(0).toUpperCase()+b.slice(1);return e[b]!==d&&(g=b),g||a.each(f,function(a,b){return e[b+h]!==d?(g="-"+b.toLowerCase()+"-"+h,!1):void 0}),c?g:g?!0:!1}function c(a){return b(a,!0)}var e=a("<support>").get(0).style,f=["webkit","Moz","O","ms"],g={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}}},h={csstransitions:function(){return!!b("transition")}},i={};return h.csstransitions()&&(i.transition=new String(c("transition")),i.transition.end=g.transition.end[i.transition]),i}(),h=0,i=function(b,c){this.$element=a(b),this.options=a.extend(!0,{},i.defaults,c),this.$steps=this.$element.find(this.options.step),this.id=this.$element.attr("id"),this.id||(this.id="wizard-"+ ++h,this.$element.attr("id",this.id)),this.initialize()};i.defaults={step:".wizard-steps > li",getPane:function(a,b){return this.$element.find(".wizard-content").children().eq(a)},buttonsAppendTo:"this",templates:{buttons:function(){var a=this.options;return'<div class="wizard-buttons"><a class="wizard-back" href="#'+this.id+'" data-wizard="back" role="button">'+a.buttonLabels.back+'</a><a class="wizard-next" href="#'+this.id+'" data-wizard="next" role="button">'+a.buttonLabels.next+'</a><a class="wizard-finish" href="#'+this.id+'" data-wizard="finish" role="button">'+a.buttonLabels.finish+"</a></div>"}},classes:{step:{done:"done",error:"error",active:"current",disabled:"disabled",activing:"activing",loading:"loading"},pane:{active:"active",activing:"activing"},button:{hide:"hide",disabled:"disabled"}},autoFocus:!0,keyboard:!0,enableWhenVisited:!1,buttonLabels:{next:"Next",back:"Back",finish:"Finish"},loading:{show:function(a){},hide:function(a){},fail:function(a){}},cacheContent:!1,validator:function(a){return!0},onInit:null,onNext:null,onBack:null,onReset:null,onBeforeShow:null,onAfterShow:null,onBeforeHide:null,onAfterHide:null,onBeforeLoad:null,onAfterLoad:null,onBeforeChange:null,onAfterChange:null,onStateChange:null,onFinish:null},a.extend(f.prototype,{TRANSITION_DURATION:200,initialize:function(b,c,d){this.$element=a(b),this.wizard=c,this.events={},this.loader=null,this.loaded=!1,this.validator=this.wizard.options.validator,this.states={done:!1,error:!1,active:!1,disabled:!1,activing:!1},this.index=d,this.$element.data("wizard-index",d),this.$pane=this.getPaneFromTarget(),this.$pane||(this.$pane=this.wizard.options.getPane.call(this.wizard,d,b)),this.setValidatorFromData(),this.setLoaderFromData()},getPaneFromTarget:function(){var b=this.$element.data("target");return b||(b=this.$element.attr("href"),b=b&&b.replace(/.*(?=#[^\s]*$)/,"")),b?a(b):null},setup:function(){var a=this.wizard.currentIndex();this.index===a?(this.enter("active"),this.loader&&this.load()):this.index>a&&this.enter("disabled"),this.$element.attr("aria-expanded",this.is("active")),this.$pane.attr("aria-expanded",this.is("active"));var b=this.wizard.options.classes;this.is("active")?this.$pane.addClass(b.pane.active):this.$pane.removeClass(b.pane.active)},show:function(b){if(!this.is("activing")&&!this.is("active")){this.trigger("beforeShow"),this.enter("activing");var c=this.wizard.options.classes;this.$element.attr("aria-expanded",!0),this.$pane.addClass(c.pane.activing).addClass(c.pane.active).attr("aria-expanded",!0);var d=function(){this.$pane.removeClass(c.pane.activing),this.leave("activing"),this.enter("active"),this.trigger("afterShow"),a.isFunction(b)&&b.call(this)};if(!g.transition)return d.call(this);this.$pane.one(g.transition.end,a.proxy(d,this)),e(this.$pane,this.TRANSITION_DURATION)}},hide:function(b){if(!this.is("activing")&&this.is("active")){this.trigger("beforeHide"),this.enter("activing");var c=this.wizard.options.classes;this.$element.attr("aria-expanded",!1),this.$pane.addClass(c.pane.activing).removeClass(c.pane.active).attr("aria-expanded",!1);var d=function(){this.$pane.removeClass(c.pane.activing),this.leave("activing"),this.leave("active"),this.trigger("afterHide"),a.isFunction(b)&&b.call(this)};if(!g.transition)return d.call(this);this.$pane.one(g.transition.end,a.proxy(d,this)),e(this.$pane,this.TRANSITION_DURATION)}},empty:function(){this.$pane.empty()},load:function(b){function c(c){d.$pane.html(c),d.leave("loading"),d.loaded=!0,d.trigger("afterLoad"),a.isFunction(b)&&b.call(d)}var d=this,e=this.loader;return a.isFunction(e)&&(e=e.call(this.wizard,this)),this.wizard.options.cacheContent&&this.loaded?(a.isFunction(b)&&b.call(this),!0):(this.trigger("beforeLoad"),this.enter("loading"),void("string"==typeof e?c(e):"object"==typeof e&&e.hasOwnProperty("url")?(d.wizard.options.loading.show.call(d.wizard,d),a.ajax(e.url,e.settings||{}).done(function(a){c(a),d.wizard.options.loading.hide.call(d.wizard,d)}).fail(function(){d.wizard.options.loading.fail.call(d.wizard,d)})):c("")))},trigger:function(b){var c=Array.prototype.slice.call(arguments,1);if(a.isArray(this.events[b]))for(var d in this.events[b])this.events[b][d].apply(this,c);this.wizard.trigger.apply(this.wizard,[b,this].concat(c))},enter:function(a){this.states[a]=!0;var b=this.wizard.options.classes;this.$element.addClass(b.step[a]),this.trigger("stateChange",!0,a)},leave:function(a){if(this.states[a]){this.states[a]=!1;var b=this.wizard.options.classes;this.$element.removeClass(b.step[a]),this.trigger("stateChange",!1,a)}},setValidatorFromData:function(){var b=this.$pane.data("validator");b&&a.isFunction(c[b])&&(this.validator=c[b])},setLoaderFromData:function(){var b=this.$pane.data("loader");if(b)a.isFunction(c[b])&&(this.loader=c[b]);else{var d=this.$pane.data("loader-url");d&&(this.loader={url:d,settings:this.$pane.data("settings")||{}})}},active:function(){return this.wizard.goTo(this.index)},on:function(b,c){return a.isFunction(c)&&(a.isArray(this.events[b])?this.events[b].push(c):this.events[b]=[c]),this},off:function(b,c){return a.isFunction(c)&&a.isArray(this.events[b])&&a.each(this.events[b],function(a,d){return d===c?(delete this.events[b][a],!1):void 0}),this},is:function(a){return this.states[a]&&this.states[a]===!0},reset:function(){for(var a in this.states)this.leave(a);return this.setup(),this},setLoader:function(a){return this.loader=a,this.is("active")&&this.load(),this},setValidator:function(b){return a.isFunction(b)&&(this.validator=b),this},validate:function(){return this.validator.call(this.$pane.get(0),this)}}),a.extend(i.prototype,{Constructor:i,initialize:function(){this.steps=[];var c=this;this.$steps.each(function(a){c.steps.push(new f(this,c,a))}),this._current=0,this.transitioning=null,a.each(this.steps,function(a,b){b.setup()}),this.setup(),this.$element.on("click",this.options.step,function(b){var d=a(this).data("wizard-index");c.get(d).is("disabled")||c.goTo(d),b.preventDefault(),b.stopPropagation()}),this.options.keyboard&&a(b).on("keyup",a.proxy(this.keydown,this)),this.trigger("init")},setup:function(){this.$buttons=a(this.options.templates.buttons.call(this)),this.updateButtons();var b,c=this.options.buttonsAppendTo;b="this"===c?this.$element:a.isFunction(c)?c.call(this):this.$element.find(c),this.$buttons=this.$buttons.appendTo(b)},updateButtons:function(){var a=this.options.classes.button,b=this.$buttons.find('[data-wizard="back"]'),c=this.$buttons.find('[data-wizard="next"]'),d=this.$buttons.find('[data-wizard="finish"]');0===this._current?b.addClass(a.disabled):b.removeClass(a.disabled),this._current===this.lastIndex()?(c.addClass(a.hide),d.removeClass(a.hide)):(c.removeClass(a.hide),d.addClass(a.hide))},updateSteps:function(){var b=this;a.each(this.steps,function(a,c){a>b._current&&(c.leave("error"),c.leave("active"),c.leave("done"),b.options.enableWhenVisited||c.enter("disabled"))})},keydown:function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.back();break;case 39:this.next();break;default:return}a.preventDefault()}},trigger:function(a){var b=Array.prototype.slice.call(arguments,1),c=[this].concat(b);this.$element.trigger("wizard::"+a,c),a=a.replace(/\b\w+\b/g,function(a){return a.substring(0,1).toUpperCase()+a.substring(1)});var d="on"+a;"function"==typeof this.options[d]&&this.options[d].apply(this,b)},get:function(a){if("string"==typeof a&&"#"===a.substring(0,1)){var b=a.substring(1);for(var c in this.steps)if(this.steps[c].$pane.attr("id")===b)return this.steps[c]}return a<this.length()&&this.steps[a]?this.steps[a]:null},goTo:function(b,c){if(b===this._current||this.transitioning===!0)return!1;var d=this.current(),e=this.get(b);if(b>this._current){if(!d.validate())return d.leave("done"),d.enter("error"),-1;d.leave("error"),b>this._current&&d.enter("done")}var f=this,g=function(){f.trigger("beforeChange",d,e),f.transitioning=!0,d.hide(),e.show(function(){if(f._current=b,f.transitioning=!1,this.leave("disabled"),f.updateButtons(),f.updateSteps(),f.options.autoFocus){var g=this.$pane.find(":input");g.length>0?g.eq(0).focus():this.$pane.focus()}a.isFunction(c)&&c.call(f),f.trigger("afterChange",d,e)})};return e.loader?e.load(function(){g()}):g(),!0},length:function(){return this.steps.length},current:function(){return this.get(this._current)},currentIndex:function(){return this._current},lastIndex:function(){return this.length()-1},next:function(){if(this._current<this.lastIndex()){var a=this._current,b=this._current+1;this.goTo(b,function(){this.trigger("next",this.get(a),this.get(b))})}return!1},back:function(){if(this._current>0){var a=this._current,b=this._current-1;this.goTo(b,function(){this.trigger("back",this.get(a),this.get(b))})}return!1},first:function(){return this.goTo(0)},finish:function(){if(this._current===this.lastIndex()){var a=this.current();a.validate()?(this.trigger("finish"),a.leave("error"),a.enter("done")):a.enter("error")}},reset:function(){this._current=0,a.each(this.steps,function(a,b){b.reset()}),this.trigger("reset")}}),a(b).on("click","[data-wizard]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("wizard");if(f){var g=d.data("wizard");/^(back|next|first|finish|reset)$/.test(g)&&f[g](),b.preventDefault()}}),a.fn.wizard=function(b){if("string"!=typeof b)return this.each(function(){a.data(this,"wizard")||a.data(this,"wizard",new i(this,b))});var c=b,d=Array.prototype.slice.call(arguments,1);if(/^\_/.test(c))return!1;if(!/^(get)$/.test(c))return this.each(function(){var b=a.data(this,"wizard");b&&"function"==typeof b[c]&&b[c].apply(b,d)});var e=this.first().data("wizard");return e&&"function"==typeof e[c]?e[c].apply(e,d):void 0}}(jQuery,document,window);
/*jquery-wizard.min.js*/
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("wizard",{mode:"default",defaults:{step:".steps .step, .pearls .pearl",templates:{buttons:function(){var options=this.options;return'<div class="wizard-buttons"><a class="btn btn-default btn-outline" href="#'+this.id+'" data-wizard="back" role="button">'+options.buttonLabels.back+'</a><a class="btn btn-primary btn-outline pull-right" href="#'+this.id+'" data-wizard="next" role="button">'+options.buttonLabels.next+'</a><a class="btn btn-success btn-outline pull-right" href="#'+this.id+'" data-wizard="finish" role="button">'+options.buttonLabels.finish+"</a></div>"}}}});
/*material.min.js*/
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("material",{init:function(context){$(".form-material",context).each(function(){var $this=$(this);if($this.data("material")!==!0){var $control=$this.find(".form-control");if($control.attr("data-hint")&&$control.after("<div class=hint>"+$control.attr("data-hint")+"</div>"),$this.hasClass("floating")){if($control.hasClass("floating-label")){var placeholder=$control.attr("placeholder");$control.attr("placeholder",null).removeClass("floating-label"),$control.after("<div class=floating-label>"+placeholder+"</div>")}(null===$control.val()||"undefined"==$control.val()||""===$control.val())&&$control.addClass("empty")}$control.next().is("[type=file]")&&$this.addClass("form-material-file"),$this.data("material",!0)}})},api:function(){function _isChar(e){return"undefined"==typeof e.which?!0:"number"==typeof e.which&&e.which>0?!e.ctrlKey&&!e.metaKey&&!e.altKey&&8!=e.which&&9!=e.which:!1}$(document).on("keydown.site.material paste.site.material",".form-control",function(e){_isChar(e)&&$(this).removeClass("empty")}).on("keyup.site.material change.site.material",".form-control",function(){var $this=$(this);""===$this.val()&&"undefined"!=typeof $this[0].checkValidity&&$this[0].checkValidity()?$this.addClass("empty"):$this.removeClass("empty")}).on("focus",".form-material-file",function(){$(this).find("input").addClass("focus")}).on("blur",".form-material-file",function(){$(this).find("input").removeClass("focus")}).on("change",".form-material-file [type=file]",function(){var $this=$(this),value="";$.each($this[0].files,function(i,file){value+=file.name+", "}),value=value.substring(0,value.length-2),value?$this.prev().removeClass("empty"):$this.prev().addClass("empty"),$this.prev().val(value)})}});
/*form.js*/
$(function(){
    if($(".met-form-validation").length){
    	$(".met-form-validation").formValidation({
    		locale:'zh_CN',
    		framework: "bootstrap"
    	})
    }
});
/*datatable.js*/
$(function(){
	var $datatable=$('[data-table-ajaxurl]');
    if($datatable.length){
		window.datatable_option={
			drawCallback: function(settings){
	            if($(window).scrollTop()>$(this).offset().top) $(window).scrollTop($(this).offset().top);// 表单重绘后页面滚动回表单顶部
            	if($('[data-original]',this).length) $('[data-original]',this).lazyload();
	        },
			responsive: true,
			//scrollX: met_mobile?true:'',
			ordering: false, //是否支持排序
			searching: false, //搜索
			searchable: false, //让搜索支持ajax异步查询
			//info: false, //左下角条数信息
			lengthChange: false,//让用户可以下拉无刷新设置显示条数
			pageLength:20,//默认每一页的显示数量
			//paging: true,  //分页功能
			//processing: true, //
			serverSide: true, //ajax服务开启
			//stateSave: true,//记录当前页，状态保存 - 再次加载页面时还原表格状态
			language: {
				sProcessing:   "处理中...",
				sLengthMenu:   "显示 _MENU_ 项结果",
				sZeroRecords:  "没有匹配结果",
				sInfo:         "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
				sInfoEmpty:    "显示第 0 至 0 项结果，共 0 项",
				sInfoFiltered: "(由 _MAX_ 项结果过滤)",
				sInfoPostFix:  "",
				sSearch:       "搜索：",
				sUrl:          "",
				sEmptyTable:     "没有任何数据...",
				sLoadingRecords: "载入中...",
				sInfoThousands:  ",",
				oPaginate: {
					sFirst:    "首页",
					sPrevious: "上页",
					sNext:     "下页",
					sLast:     "末页"
				},
				oAria: {
					sSortAscending:  ": 以升序排列此列",
					sSortDescending: ": 以降序排列此列"
				}
			},
			ajax: {
				url: $datatable.attr('data-table-ajaxurl'),
				dataType:'jsonp'
			}
		};
		if($('#datatable').length) window.datatable=$('#datatable').DataTable(datatable_option);
		$(document).on( 'init.dt', function (e, settings, json) { //表格加载完成时执行
			$("table.table tbody tr td").removeAttr('tabindex');
			$('[data-toggle="tooltip"]').tooltip();
			var api = new $.fn.dataTable.Api( settings );
			api.on( 'draw.dt', function ( e, settings, json ) { //点击分页，数据重载完成后
				$("table.table tbody tr td").removeAttr('tabindex');
				$('[data-toggle="tooltip"]').tooltip();
			});
			if($('#datatable_paginate .paginate_button').length<4) $("#datatable_paginate").parent().parent('.row').addClass('hide');//隐藏表格分页
			if(!json.data.length && $datatable.data('empty-text')) $('.dataTables_empty').append('<br /><a href="'+$datatable.data('empty-url')+'" class="btn btn-primary margin-top-10" target="_blank">'+$datatable.data('empty-text')+'</a>');
		});
	}
});
/*cookie.js*/
/**
 * jquery cookie插件
 * 使用：
 * $.cookie('key'); //读取Cookie值
 * $.cookie('key', 'value'); // 设置/新建cookie的值
 * $.cookie('key', 'value', {expires: 7, path: '/', domain: 'dh89.com', secure: true});//新建一个cookie 包括有效期(天数) 路径 域名等
 * $.cookie('key', null); //删除一个cookie
 */
jQuery.cookie = function (name, value, options) { if (typeof value != "undefined") { options = options || {}; if (value === null) { value = ""; options.expires = -1; } var expires = ""; if (options.expires && (typeof options.expires == "number" || options.expires.toUTCString)) { var date; if (typeof options.expires == "number") { date = new Date(); date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000)); } else { date = options.expires; } expires = "; expires=" + date.toUTCString(); } var path = options.path ? "; path=" + options.path : ""; var domain = options.domain ? "; domain=" + options.domain : ""; var secure = options.secure ? "; secure" : ""; document.cookie = [name, "=", encodeURIComponent(value), expires, path, domain, secure].join(""); } else { var cookieValue = null; if (document.cookie && document.cookie != "") { var cookies = document.cookie.split(";"); for (var i = 0; i < cookies.length; i++) { var cookie = jQuery.trim(cookies[i]); if (cookie.substring(0, name.length + 1) == (name + "=")) { cookieValue = decodeURIComponent(cookie.substring(name.length + 1)); break; } } } return cookieValue; } };
/*host.js*/
$(function(){
	if(pagetype=='profile_host' || pagetype=='profile_index'){
		var getstrcodeurl = $(".profile_host").data('getstrcodeurl');
		/*
		$.fn.editableform.buttons =
  '<button type="submit" class="btn btn-success btn-sm editable-submit">确定</button>' +
 '<button type="button" class="btn btn-default btn-sm editable-cancel">取消</button>';
		$(document).on('click', '.edit_host_name', function(e) {
			e.stopPropagation();
			e.preventDefault();
			var d = $(this).parent().find('.host_name');
			d.editable({
				url: getstrcodeurl,
				type: 'text',
				pk: 1,
				name: 'cname',
				title: '主机名称',
				emptytext:'',
				value:d.text(),
				ajaxOptions: {
					dataType: 'json'
				},
				success: function(result, newValue) {
					var url = M['appurl']+'index.php?n=platform&c=idc&a=doedithostcname&strcode='+result.code+'&ftpuser='+d.data('ftpuser');
					$.ajax({
						url: url,
						data:{'value':newValue},
						type: 'POST',
						dataType:'jsonp',
						success: function(data) {
						}
					});
					success('修改成功');
				}
			});
			d.editable('toggle');
		})
		*/
		//绑定域名
		$(document).on('click', '.dominbind', function(e) {
			var ftpuser=$(this).data('ftpuser'),domain = $(this).data('domain'),html;
				html = '<div class="modal-body padding-bottom-0">'+
							'<input type="hidden" name="ftpuser" />'+
							'<div class="form-group">'+
								'<div class="input-group">'+
									'<input type="text" class="form-control" name="domain" data-domain="'+domain+'" placeholder="输入要绑定的域名">'+
									'<span class="input-group-btn">'+
										'<button type="submit" class="btn btn-primary">绑定域名</button>'+
									'</span>'+
								'</div>'+
							'</div>'+
							'<div class="form-group">'+
								'<label class="control-label blue-grey-400">已绑域名列表</label>'+
								'<ul class="list-group list-group-dividered list-group-full">'+
									'<li class="list-group-item">努力加载中...</li>'+
								'</ul>'+
								'<div class="alert alert-danger">带 www 和不带 www 的域名都需要解析绑定。</div>'+
							'</div>'+
							'<hr>'+
							'<p class="text-center margin-bottom-25"><a href="'+ M['appurl'] + 'index.php?n=platform&c=idc&a=doadminftp&name='+ftpuser+'&strcode='+strcode+'" target="_blank">更多主机操作<i class="icon font-size-30 pe-angle-right" style="position:relative;top:8px;" aria-hidden="true"></i></a></p>'+
						'</div>';
			$('#dominbind').remove();
			gentmodal({
				'id':'dominbind',
				'content': gentmodal_header({'title':'域名绑定'})+html
			});
			$('#dominbind input[name="ftpuser"]').val(ftpuser);
			$('#dominbind').modal('show');
			host_domainlist(domain,ftpuser);
		})
		//添加绑定域名
		$(document).on('click', '#dominbind button[type="submit"]', function(e) {
			var domain = $('#dominbind input[name="domain"]'),ftpuser=$('#dominbind input[name="ftpuser"]').val();
			if(domain.val()==''){
				error('请输入域名');
				domain.focus();
			}else{
				alertify.maxLogItems(1).delay(0).log('正在处理...');
				var data = {};
					data.ftpuser = ftpuser;
					data.domain = domain.val();
					data.type = 'adddomain';
				getstrcode('platform','idc','dobinddomain',data,function(jsonp){
					if(jsonp.state==1){
						alertify.delay(3000).success('绑定成功');
						host_domainload(jsonp.data['domain']);
						domain.val('').focus();
						datatable.row().draw(false);
					}else{
						alertify.delay(3000).error('绑定失败');
					}
				});
			}
		})
		//删除绑定域名
		$(document).on('click', '#dominbind ul li i', function(e) {
			var domain = $(this).data('domain'),ftpuser=$('#dominbind input[name="ftpuser"]').val();
			alertify.maxLogItems(1).delay(0).log('正在处理...');
			var data = {};
				data.ftpuser = ftpuser;
				data.domain = domain;
				data.type = 'removedomain';
			getstrcode('platform','idc','dobinddomain',data,function(jsonp){
				if(jsonp.state==1){
					alertify.delay(3000).success('删除成功');
					host_domainload(jsonp.data['domain']);
					datatable.row().draw(false);
				}else{
					alertify.delay(3000).error('删除失败');
				}
			});
		})
	}
});
function host_domainload(domain){
	host_domainlist(domain);
	$('#dominbind input[name="domain"]').data('domain',domain);
}
function host_domainlist(domain,ftpuser){
	var list='',bt;
	if(ftpuser){
		var json = {};
			json.ftpuser = ftpuser;
		getstrcode('platform','idc','dogetbinddomain',json,function(ret){
			//alert(JSON.stringify(ret));
			if(ret.state==1){
				host_domainload(ret.data);
				if(ret.data!=domain){
					datatable.row().draw(false);
				}
			}
		});
	}else{
		if(domain==''){
			list = '<li class="list-group-item">暂无域名绑定</li>';
		}else{
			if(domain.indexOf(',')>0){
				domain = domain.split(',');
				for(var i=0;i<domain.length;i++){
					if(domain[i]!=''){
						bt='<i class="icon pe-trash blue-grey-400 pull-right" aria-hidden="true" data-domain="'+domain[i]+'"></i>';
						list+= '<li class="list-group-item">'+domain[i]+bt+'</li>';
					}
				}
			}else{
				bt='<i class="icon pe-trash blue-grey-400 pull-right" aria-hidden="true" data-domain="'+domain+'"></i>';
				list = '<li class="list-group-item">'+domain+bt+'</li>';
			}
		}
		$('#dominbind ul').html(list);
	}
}

/*dev.js*/
$(function(){
	if(pagetype=='dev'){
		if($(".profile_dev_balance_ajax").length){
			url = $(".profile_dev_balance_ajax").attr('data-url');
			$.ajax({
				url: url,
				type: "GET",
				cache: false,
				dataType: "jsonp",
				success: function(data) {
					var noiss = parseFloat(data.total-data.iss);
						noiss = noiss.toFixed(1);
					$('.cash_total').html(data.total);
					$('.cash_iss').html(data.iss);
					$('.cash_noiss').html(noiss);
				}
			});
		}
	}
});
/*info.js*/
$(function(){
	if(pagetype=='profile_info'){
		//修改公司信息
		$('#companyinfoedit').formValidation({
			locale:'zh_CN',
			framework: "bootstrap"
		})
		.on('success.form.fv', function(e, data) {
			e.preventDefault();

			var $form    = $(e.target),
				formData = new FormData(),
				params   = $form.serializeArray();

			$.each(params, function(i, val) {
				formData.append(val.name, val.value);
			});
			$.ajax({
				url: $form.attr('action'),
				data: formData,
				cache: false,
				contentType: false,
				processData: false,
				type: 'POST',
				dataType:'json'
			});
			success('修改成功');
		});
		//修改头像
		$(document).on('click', '.headuploadimg', function(e) {
			$('input[name="head"]').click();
		})
		$(document).on('change', 'input[name="head"]', function(e) {
			if($(this).val()!=''){
				var fd = new FormData();
					fd.append("head", $(this)[0].files[0]);
				var img = $(".headuploadimg");
					img.html('<div class="loader-default loader vertical-align-middle" data-type="default"></div>');
					$.ajax({
						url: "https://img.metinfo.cn/giHHgegu.php?code="+code,
						type: 'POST',
						data: fd,
						contentType:false,
						processData:false,
						success: function(data) {
							var json = $.parseJSON(data);
							img.html("<img src='"+json.path+"' />");
							$(".site-menubar .site-menubar-head .navbar-avatar .avatar img").attr('src',json.path);
							$.cookie('headlogoload', Math.floor(Math.random()*9999+1),{path:'/'});
							success('修改成功');
						}
					}).done(function(result){
						console.log(result);
					}).fail(function(err){
						console.log(err);
					});
			}
		})
		//修改密码
		$('#passedit form').formValidation({
			locale:'zh_CN',
			framework: "bootstrap"
		});
		$(document).on('click', '.passedit', function(e) {
			var url = $(this).data('url');
			//模态框生成
			var mdid='modal_passedit',
				html = gentmodal_header({title:'修改密码'});
				if($('#'+mdid).length>0){
					$('#'+mdid).remove();
				}
				html+= '<div class="modal-body">'+
							'<form method="POST" action="'+url+'">'+
								'<div class="form-group">'+
									'<input type="password" class="form-control" placeholder="请输入当前密码" name="password_old" data-fv-notempty="true">'+
								'</div>'+
								'<div class="form-group">'+
									'<input type="password" class="form-control" placeholder="请输入新密码（6-16位）" name="password_new" maxlength="16" minlength="6" data-fv-notempty="true">'+
								'</div>'+
								'<div class="form-group">'+
									'<input type="password" class="form-control" placeholder="再输一次新密码" name="password_new_re" data-fv-identical-field="password_new" data-fv-notempty="true">'+
								'</div>'+
								'<div class="form-group margin-bottom-0">'+
									'<button type="submit" class="btn btn-primary btn-block">确认</button>'+
								'</div>'+
							'</form>'+
						'</div>';
			gentmodal({
				id:mdid,
				size:'modal-sm',
				content:html
			});
			$('#'+mdid+' form').formValidation({
				locale:'zh_CN',
				framework: 'bootstrap'
			});
			$('#'+mdid).modal('show');
		})
		//修改手机
		$('#teledit form').formValidation({
			locale:'zh_CN',
			framework: "bootstrap"
		})
		.on('success.form.fv', function(e, data) {
			e.preventDefault();

			var $form    = $(e.target),
				formData = new FormData(),
				params   = $form.serializeArray();

			$.each(params, function(i, val) {
				formData.append(val.name, val.value);
			});
			alertify.maxLogItems(1).delay(0).log('正在处理...');
			$.ajax({
				url: $form.attr('action'),
				data: formData,
				cache: false,
				contentType: false,
				processData: false,
				type: 'POST',
				dataType:'json',
				success: function(result) {
					if(result.state){
						alertify.delay(3000).success('修改成功');
						window.location.reload();
					}else{
						alertify.delay(30000).error(result.msg);
						$('#teledit form').data('formValidation').resetForm();
					}
				}
			});
		});
		$(document).on('click', '#teledit .code', function(e) {
			var btn = $(this),tel = btn.parents('form').find('input[name="tel"]');
			if(btn.hasClass('btn-success')){
				if(tel.val()==''){
					error('请输入手机号码');
					tel.focus();
				}else{
					$.ajax({
						url: btn.attr('action')+'?tel='+tel.val(),
						cache: false,
						contentType: false,
						processData: false,
						type: 'GET',
						dataType:'json',
						success: function(result) {
							if(result.state) {
								success(result.msg);
							}else{
								//$('.teledit input').each().val('');
								error(result.msg);
							}
						}
					});
					//等待
					var i = 60,p,
					reciprocal = setInterval(function(){
						if(i < 0) {
							btn.removeClass('btn-dark').addClass('btn-success').html('获取验证码');
							clearInterval(reciprocal);
						}else{
							p = i--;
							btn.removeClass('btn-success').addClass('btn-dark').html(p+' 秒后可重试');
						}
					},1000);
				}
			}
		})
		$(document).on('click', '.teledit', function(e) {
			$('#teledit form').data('formValidation').resetForm();
			$('#teledit').modal('show');
		})
		//修改邮箱
		$('#emailedit form').formValidation({
			locale:'zh_CN',
			framework: "bootstrap"
		})
		.on('success.form.fv', function(e, data) {
			e.preventDefault();

			var $form    = $(e.target),
				formData = new FormData(),
				params   = $form.serializeArray();

			$.each(params, function(i, val) {
				formData.append(val.name, val.value);
			});
			alertify.maxLogItems(1).delay(0).log('正在处理...');
			$.ajax({
				url: $form.attr('action'),
				data: formData,
				cache: false,
				contentType: false,
				processData: false,
				type: 'POST',
				dataType:'json',
				success: function(result) {
					$('#emailedit form').data('formValidation').resetForm();
					if(result.state){
						alertify.delay(3000).success('成功发送邮件');
						$('#emailedit').modal('hide');
					}else{
						alertify.delay(30000).error(result.msg);
						$('#emailedit form').data('formValidation').resetForm();
					}
				}
			});
		});
		$(document).on('click', '.emailedit', function(e) {
			$('#emailedit form').data('formValidation').resetForm();
			$('#emailedit').modal('show');
		})
	}
});

function dump(arr,level) {
    var dumped_text = "";
    if(!level) level = 0;
    //The padding given at the beginning of the line.
    var level_padding = "";
    for(var j=0;j<level+1;j++) level_padding += " ";
    if(typeof(arr) == 'object') { //Array/Hashes/Objects
        for(var item in arr) {
            var value = arr[item];
            if(typeof(value) == 'object') { //If it is an array,
                dumped_text += level_padding + "'" + item + "' ...\n";
                dumped_text += dump(value,level+1);
            } else {
                dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
            }
        }
    } else { //Stings/Chars/Numbers etc.
        dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
    }
    return dumped_text;
}
/*index.js*/
$(function(){
	if(pagetype=='profile_index'){
		//获取列表
		website_list(function(){
			if($(".domainregist").length){//提示完善域名注册
				//domainregistopen($(".domainregist").eq(0));
			}
		});
		//修改名称
		$(document).on('click', '.edit_name', function(e) {
			e.stopPropagation();
			e.preventDefault();
			$.fn.editableform.buttons = '<button type="submit" class="btn btn-success btn-sm editable-submit">确定</button>' + '<button type="button" class="btn btn-default btn-sm editable-cancel">取消</button>';
			var id = $(this).parents('li.list-group-item').data('id');
			var d = $(this).parent().find('.name');
			d.editable({
				url: ownurl+'dostrcode',
				type: 'text',
				pk: 1,
				name: 'name',
				title: '网站名称',
				emptytext:'',
				value:d.text(),
				ajaxOptions: {
					dataType: 'json'
				},
				success: function(result, newValue) {
					//此处获取加密代码提交到服务器处理
					var url = M['appurl'] + 'index.php?n=platform&c=idc&a=doeditwebsitecname&strcode='+result.code;
					$.ajax({
						url: url,
						data:{'websiteid':id,'name':newValue},
						type: 'POST',
						dataType:'jsonp',
						success: function(data) {
							if(data.state==1){
								success('修改成功');
							}else{
								error('数据错误');
							}
						}
					});
				}
			});
			d.editable('toggle');
		})
		//提交一键登录设置
		$('#setbinding form').formValidation({
			locale:'zh_CN',
			framework: "bootstrap"
		})
		.on('success.form.fv', function(e, data) {
			e.preventDefault();
			var $form    = $(e.target),
				json 	 = {},
				params   = $form.serializeArray();
			$.each(params, function(i, val) {
				json[val.name]=val.value;
			});
			json.websiteid  = $('#setbinding').data('websiteid');
			json.url 		= $('#setbinding').data('url');
			alertify.maxLogItems(1).delay(0).log('正在处理...');
			getstrcode('platform','server_keylogin','dotestlogin',json,function(ret){
				if(ret.state==0){
					alertify.delay(3000).error(ret.msg);
					$('#setbinding button[type="submit"]').removeClass('disabled').removeAttr('disabled');
				}else if(ret.state==1){
					alertify.delay(3000).success('设置成功');
					$('#setbinding').modal('hide');//关闭模态框
					website_list();//刷新列表
				}
			});
		});
		//一键登录
		$(document).on('click', '.loginsiteadmin', function(e) {
			var id = $(this).parents('li.list-group-item').data('id');
			getstrcode('platform','server_keylogin','dologin','',function(url){
				$("a.loginadminlink").attr('href',url+'&websiteid='+id);
				$("a.loginadminlink span").click();
			},1);
		})
		//开启一键登录
		$(document).on('click', '.setbinding', function(e) {
			$('#setbinding input').val('');
			var id = $(this).parents('li.list-group-item').data('id'),
				url = $(this).parents('li.list-group-item').data('url');
			$('#setbinding').data('websiteid',id);
			$('#setbinding').data('url',url);
			$('#setbinding').modal('show');
			$('#setbinding form').data('formValidation').resetForm();
		});

        $.ajax({
            url: M['weburl']+"profile/profile/docoupon_prompt",
            type: 'POST',
            dataType: 'json',
			data: {'type':buy_type},
            success: function (data) {
                if(data){
                    document.getElementById('coupon_text').innerHTML = data;
                    $('#coupon input').val('');
                    $('#coupon').modal('show');
                }
            }
        });

		//解除一键登录
		$(document).on('click', '.bindrelieve', function(e) {
			var id = $(this).parents('li.list-group-item').data('id');
			var json 	 = {};
				json.websiteid = id;
				alertify.theme('bootstrap').okBtn('确定').cancelBtn('取消').confirm('确定要解除一键登录？<br><span style="color:red">解除绑定前必须先到网站后台修改【管理员密码】并且记住【后台登录地址】！！！</span>', function (ev) {
				ev.preventDefault();
				//确定解除
				getstrcode('platform','server_keylogin','dorelievelogin',json,function (ret) {
					if(ret.state==1){
						success('一键登录已解除');
						website_list();//刷新列表
					}else{
						error('数据错误');
					}
				});
			}, function(ev) {
				ev.preventDefault();
				//取消
			})
		});
		//域名注册
		$(document).on('click', '.domainregist', function(e) {
			domainregistopen($(this));
		});
		//查看配置
		$(document).on('click', '.website-body .list-group-item .parameter', function(e) {
			var body = $(this).parents('li.list-group-item');
			body.find('.collapse').collapse('toggle');
			/*
			//alert(JSON.stringify(json));
			*/
		});
		//去备案
		$(document).on('click', '.website-body .list-group-item .gobeian', function(e) {
			var ftpuser = $(this).data('ftpuser');
			//模态框生成
			var mdid='modalbeian',
				html = gentmodal_header({title:'我该如何开始？'});
				if($('#'+mdid).length>0){
					$('#'+mdid).remove();
				}
				html+= '<div class="modal-body">'+
							'<div class="alert alert-primary">'+
								'<p>1. 在备案网站「注册账号」；</p>'+
								'<p>2. 按流程「提交资料」操作网站备案（5-20个工作日审核）；</p>'+
								'<p>3. 收到「备案成功」短信后请登录此页面（即可通过域名访问网站，域名非我司购买需手动绑定解析）；</p>'+
							'</div>'+
							'<table class="table">'+
								'<thead><tr>'+
									'<th>FTP用户名</th>'+
									'<th>密码</th>'+
								'</tr></thead>'+
								'<tr>'+
									'<td>'+ftpuser+'</td>'+
									'<td class="ftppass">获取中...</td>'+
								'</tr>'+
							'</table>'+
							'<a href="http://beian.vhostgo.com/" class="btn btn-block btn-primary" target="_blank">去备案网站</a>'+
						'</div>';
			gentmodal({
				id:mdid,
				size:'modal-sm',
				content:html
			});
			var json ={};
				json.ftpuser = ftpuser;
			getstrcode('platform','idc','dogetftpinfo',json,function(jsonp){
				$('#'+mdid+' .ftppass').html(jsonp.password);
			});
			$('#'+mdid).modal('show');
		});
		//设置站点域名
		/*
		$(document).on('click', '.website-body .list-group-item .freedomain_seturl', function(e) {
			var id = $(this).parents('li.list-group-item').data('id');
			var mdid='modal_seturl',
				html = gentmodal_header({title:'设置站点域名'});
				if($('#'+mdid).length>0){
					$('#'+mdid).remove();
				}
				html+= '<div class="modal-body">'+
							'<input type="hidden" name="websiteid" value="'+id+'" />'+
							'<div class="alert alert-danger">'+
								'<p>请确保您填写的域名已经被您成功注册并通过了实名认证。</p>'+
								'<p>请先完成网站备案，否则无法通过域名访问。<a href="http://beian.vhostgo.com/" target="_blank">去备案网站</a></p>'+
								'<p>请您手动完成空间域名的解析绑定。</p>'+
							'</div>'+
							'<div class="form-group">'+
								'<input type="text" class="form-control" placeholder="请输入域名" name="domain" autocomplete="off" />'+
							'</div>'+
							'<a href="javascript:void(0)" class="btn btn-block btn-primary">提交</a>'+
						'</div>';
			gentmodal({
				id:mdid,
				size:'modal-sm',
				content:html
			});
			$('#'+mdid).modal('show');
		});
		$(document).on('click', '#modal_seturl .btn-primary', function(e) {
			var id = $('#modal_seturl input[name="websiteid"]').val(),
				di = $('#modal_seturl input[name="domain"]').val();
			if(di==''){
				error('请输入域名！');
				$('#modal_seturl input[name="domain"]').focus();
				return false;
			}
			var json ={};
				json.websiteid = id;
				json.domain = di;
				alertify.maxLogItems(1).delay(0).log('正在处理...');
				//处理成功
				alertify.delay(3000).success('设置成功');
				website_list();
				$('#modal_seturl').modal('hide');
		})
		*/
		//阻止表单自动填充
		form_block_fill();
	}
});
//自动安装
function install_loop(ret,code,i,b,prevret){
	if(ret.state==1){
		if(ret.code=='installsuc'){
			b.find('.pie-progress').asPieProgress('go', '100%');
			//提示成功
			swal({
				title:"安装成功！",
				text:"您可以一键登录网站后台！后台网址、密码随机设置，便捷又安全。",
				type:"success",
				confirmButtonText:'好的'
			});
			//刷新列表
			website_list();
			//去除整体提示
			$(".installprofiletips").remove();
		}else{
			// if(parseInt(b.data('tem'))==0){
			// 	i=i+4;
			// }else{
			// 	i=i+2;
			// }
			//
			i++;
			var go = i;
			if(go>95)go=95;
			if(ret.code=='installok'){
				//go = 95;
			}
			b.find('.pie-progress').asPieProgress('go', go+'%');
            if (ret.msg == '上传成功'){
            	//http无法跨域http
                $.ajax({
                    url		: M['weburl']+'profile/profile/doauto_install',
                    type	: 'POST',
					data   : {'nexturl':ret.nexturl},
                    dataType: 'json',
                    success: function(jsonp) {
                        install_loop(jsonp,code,i,b,ret);
                    }
                });
            }else{
                $.ajax({
                    url		: ret.nexturl+'&strcode='+ code,
                    type	: 'POST',
                    dataType: 'jsonp',
                    success: function(jsonp) {
                        install_loop(jsonp,code,i,b,ret);
                    }
                });
			}

		}
	}else{
		if(ret.code=='uploaderror'){
			$.ajax({
				url		: prevret.nexturl+'&strcode='+ code,
				type	: 'POST',
				dataType: 'jsonp',
				success: function(jsonp) {
					install_loop(jsonp,code,i,b,prevret);
				}
			});
		}
	}
}
function install_chuli(b){
	b.find('.install_test').removeClass('hide');
	var json 	 = {};
		json.websiteid = b.data('id');
	getstrcode('platform','auto_install','doinstalltest',json,function(jsonp,code){
		//满足安装条件
		if(jsonp.state==1){
			//调整提示信息
			b.find("span.install_test").addClass('hide');
			b.find("span.install_tips").removeClass('hide');
			//设定进度条
			b.find('.pie-progress').asPieProgress('go', '1%');
			$.ajax({
				url		: M['appurl'] + 'index.php?n=platform&c=auto_install&a=doinstall&strcode='+code,
				data	: json,
				type	: 'POST',
				dataType: 'jsonp',
				success: function(ret) {
					//设定进度条
					b.find('.pie-progress').asPieProgress('go', '2%');
					//处理安装过程
					install_loop(ret,code,2,b);
				}
			});
		//不满足安装条件
		}else if(jsonp.state==0){
			var ht = jsonp.msg;
			if(jsonp.code=='install'){
				ht = '空间已经存在安装好的网站，请清空空间文件后刷新该页面重试。';
			}
			b.find("span.install_test").html(ht);
		}
	});
}
function install(){
	var d = $(".website-body .list-group-item .pie-progress");
	if(d.length){
		$.components.init('pieProgress');
		d.each(function(){
			var b=$(this).parents('li.list-group-item');
			if(b.data('installallow')==1)install_chuli(b);
		});
	}
}

/*index_bind.js*/
//站点列表获取
function website_list(func){
	$(".website-body").html(loading(100));
	//ajax请求
	if(window.strcodeok==1){
		$.ajax({
			url: ownurl+'dostrcode',
			type: 'POST',
			dataType:'json',
			success: function(data) {
				website_list_jsonp(data.code,func);
			}
		});
	}else{
		website_list_jsonp(strcode,func);
		window.strcodeok=1;
	}
}
//获取服务器数据
function website_list_jsonp(code,func){
	var url = M['appurl'] + 'index.php?n=platform&c=idc&a=dowebsite_json_metinfo';
	url = url + '&strcode=' + code;
	$.ajax({
		url: url,
		type: 'GET',
		dataType:'jsonp',
		success: function(jsonlist) {
			//输入页面内容
			$(".website-body").html(website_html(jsonlist.website));
			if(func)func();
			$('[data-toggle="tooltip"]').tooltip();
			$(".list-group-item").each(function(){
				var my = $(this),b = my.data('analysis_bind'),t = my.data('hosttype');
				//自动解析绑定
				if(b==1){
					var json 	 = {};
					json.websiteid = my.data('id');
					my.find('span.analysis_bind').removeClass('hide');
					getstrcode('platform','auto_install','doautoanalysis',json,function(ret){
						my.find('span.analysis_bind').addClass('hide');
						if(ret.state==0){
							//ret.code = 'need_bind';
							//无法解析和绑定
							if(ret.code=='need_bind_analysis'){
								my.find('.dominrz_tips').removeClass('hide');
								if(t==1){
									my.find('.beian_tips').removeClass('hide');
								}
							}else{
								//无法解析
								if(ret.code=='need_analysis'){
									my.find('.dominrz_tips').removeClass('hide');
								}
								//无法绑定
								if(ret.code=='need_bind'){
									//国内空间
									if(t==1){
										my.find('.beian_tips').removeClass('hide');
									}else{
										alertify.delay(3000).error(ret.msg);
									}
								}
								if(ret.code=='nodomain'){
									if(t==1){
										my.find('.beian_tips').removeClass('hide');
									}
								}
							}
						}else if(ret.state==1){
							if(t!=1)install_chuli(my);
						}
					});
				}
			});
			install();
			//手机端排版处理
			Breakpoints.get('xs').on({
				enter: function(){
					$(".website-body .bind-ul-body").addClass('dropdown-menu-right');
				}
			});
			//科稻营销
			if(jsonlist.kedao&&jsonlist.kedao!=''){
				include("//static.criteo.net/js/ld/ld.js",function(){
					var deviceType = /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d";
					$.each(jsonlist.kedao, function(i, temp){
						window.criteo_q = window.criteo_q || [];
						window.criteo_q.push(
						{ event: "setAccount", account: 33731 },
						{ event: "setEmail", email: useremail },
						{ event: "setSiteType", type: deviceType },
						{ event: "trackTransaction", id: temp.oirderid, item: [
							{ id: temp.pid, price: temp.price, quantity: 1 }
						]}
						);
					});
				});
			}
		}
	});
}
//处理返回数据
function website_html(json){
	var html='',logohtml;
	$.each(json, function(i, item){
		var host = item.vhost,
			bdhtml='',
			domain=item.domain,
			domainhtml='',
			domrgt='',
			bdjxtest = 0;
		item.name = item.name==''?'自定义名称':item.name;
		//空间类型
		var hno = host.no,hnoe = hno.substr(0, 1),hosttype,hosttypetxt='',installallow=0;
		if(hnoe=='b'||hnoe=='B'){
			hosttype = 1;
			hosttypetxt = '国内空间';
		}else if(hnoe=='t'||hnoe=='T'){
			hosttype = 2;
			hosttypetxt = '港台空间';
		}else{
			hosttype = 3;
			hosttypetxt = '美国空间';
		}
		//买了域名
		if(domain!=0){
			if(domain['state']==1){
				domainhtml = domain['domainname']+
							'<div class="blue-grey-400">将于 '+domain['expiredate']+' 到期</div>';
			}else{
				domainhtml = '<span>'+
								'域名尚未注册完成 <a href="javascript:void(0)" class="domainregist red-600" data-id="'+domain['recordid']+'" data-type="'+domain['no']+'">点此继续</a>'+
							'</span>';
				domrgt = '<span  class="badge badge-lg badge-radius badge-default">'+
								'域名尚未注册完成 <a href="javascript:void(0)" class="domainregist red-600" data-id="'+domain['recordid']+'" data-type="'+domain['no']+'">点此继续</a>'+
						'</span>';
			}
		//没有买域名
		}else{
			domainhtml = '并没有购买域名';
		}
		//是否三级域名
		var seturl = '';
		if(item.url==host['freedomain']&&hosttype==1){
			if(domain==0){
				seturl='<div class="margin-top-10"><span class="badge badge-lg badge-radius badge-default">您需要完成空间域名的解析绑定，即可通过您的域名访问网站。</span></div>';
			}
		}
		//网址赋值
		item.oldurl = item.url;
		item.url = 'http://'+item.url+'/';
		//已设置一键登录
		if(item['is_login']==1){
			bdhtml = 	'<a href="'+item.url+'" target="_blank" class="btn btn-sm btn-primary margin-right-10">访问网站</a><div class="btn-group">'+
							'<a href="javascript:void(0)" class="btn btn-sm btn-success loginsiteadmin" target="_blank">后台管理</a>'+
							'<div class="btn-group">'+
								'<button type="button" class="btn btn-sm btn-outline btn-success dropdown-toggle" id="dropdownbinding" data-toggle="dropdown" aria-expanded="false">'+
									'<i class="site-menu-icon icon pe-config" aria-hidden="true"></i>'+
								'</button>'+
								'<ul class="dropdown-menu bind-ul-body" aria-labelledby="dropdownbinding" role="menu">'+
									'<li><a href="javascript:void(0)" class="setbinding">修改设置</a></li>'+
									'<li><a href="javascript:void(0)" class="bindrelieve">解除</a></li>'+
								'</ul>'+
							'</div>'+
						'</div>';
		//未设置一键登录
		}else{
			bdhtml = '<a href="'+item.url+'" target="_blank" class="btn btn-sm btn-primary margin-right-10">访问网站</a><button type="button" class="btn btn-sm btn-danger setbinding">开启一键登录</button>';
		}
		if(domain!=0){
			jxhtml= '<a href="' +M['appurl'] +'index.php?n=platform&c=idc&a=doadmindomain&name='+item.oldurl+'" target="_blank" class="btn btn-sm btn-primary margin-left-10 domain_strcode">解析域名</a>';
		}else{
      jxhtml="";
		}
		bdhtml+='<a href="javascript:void(0)" class="btn btn-sm btn-primary margin-left-10 dominbind" data-ftpuser="'+host.ftpuser+'" data-domain="">绑定域名</a>'+jxhtml;

		//LOGO
		if(item.is_install==1){
			logohtml = '<a href="'+item.url+'" target="_blank" class="avatar avatar-online" data-toggle="tooltip" data-placement="right" data-trigger="hover" data-original-title="显示您网站后台「设置-基本信息」的地址栏图标">'+
							'<img src="'+item.url+'favicon.ico?'+metrandom()+'">'+
						'</a>';
		//安装进度
		}else{
			//国内空间
			if(hosttype==1){
				installallow = 1;
			}else{
				//没有购买域名
				if(domain==0){
					installallow = 1;
				}
				//已解析绑定域名
				if(item.oldurl!=''){
					installallow = 1;
				}
			}
			logohtml = '<div class="pie-progress center-block" data-plugin="pieProgress" data-barcolor="#89bceb" data-goal="100" data-size="350" data-barsize="60" aria-valuemin="0" aria-valuemax="100" role="progressbar"></div>';
			bdhtml= '';
		}
		//数据转HTML
		html += '<li class="list-group-item" data-id="'+item.id+'" data-url="'+item.url+'" data-hosttype="'+hosttype+'" data-analysis_bind="'+item.analysis_bind+'" data-installallow="'+installallow+'" data-tem="'+item.tem+'">'+
					'<div class="media">'+
						'<div class="media-left padding-right-10">'+
							logohtml+
						'</div>'+
						'<div class="media-body">'+
							'<h4 class="media-heading"><span class="name">'+item.name+'</span><i class=\"edit_name icon wb-pencil margin-left-10 hide animation-fade\"></i></h4>'+
							bdhtml+
							'<div class="margin-top-10">'+
								'<span class="badge badge-lg badge-radius badge-default hide install_tips">网站自动搭建中，可能需要3至5分钟，请不要关闭该页面。</span>'+
								'<span class="badge badge-lg badge-radius badge-default install_test hide">正在测试安装条件...</span>'+
							'</div>'+
							'<div class="margin-top-10">'+
								'<span class="badge badge-lg badge-radius badge-default analysis_bind hide">自动解析绑定中...</span>'+
								'<span class="badge badge-lg badge-radius badge-default dominrz_tips hide">您的域名尚未进行实名认证，认证通过之后，方可正常访问。<a href=' + M['appurl'] + '"index.php?n=platform&c=idc&a=doadmindomain&name='+domain['domainname']+'" class="red-600" target="_blank">去认证</a></span>'+
							'</div>'+
							'<div class="margin-top-10">'+
								'<span class="badge badge-lg badge-radius badge-default beian_tips hide">网站备案尚未完成 <a href="javascript:void(0)" class="red-600 gobeian" data-ftpuser="'+host['ftpuser']+'">去备案</a></span>'+
							'</div>'+
							seturl+
						'</div>'+
						'<div class="media-right">'+
							'<a href="http://help.metinfo.cn/wang-zhan-shang-xian.html" target="_blank" class="btn btn-outline btn-sm btn-primary margin-right-10">帮助教程</a>'+
							'<a href="javascript:void(0)" class="btn btn-outline btn-sm btn-success parameter">查看配置</a>'+
							'<a href="'+M['weburl']+'profile/support/" class="btn btn-outline btn-success hide" target="_blank">申请售后</a>'+
							'<a href="'+item.renewurl+'" class="btn btn-outline btn-sm btn-success margin-left-10">续费</a>'+
						'</div>'+
						'<div class="collapse margin-top-15">'+
							'<div class="well margin-bottom-0">'+
								'<h4 class="font-size-16">域名</h4>'+
								'<div class="blue-grey-400">'+domainhtml+'</div>'+
								'<hr>'+
								'<h4 class="font-size-16">空间</h4>'+
								'<div class="blue-grey-400">类型 : '+hosttypetxt+'</div>'+
								'<div class="blue-grey-400">容量 : '+host['size']+'Mb</div>'+
								'<div class="blue-grey-400">FTP名称 : '+host['ftpuser']+'</div>'+
								'<div class="blue-grey-400">绑定域名 : '+host['domain']+'</div>'+
								'<div class="blue-grey-400">将于 '+host['expdate']+' 到期</div>'+
							'</div>'+
						'</div>'+
					'</div>';
	})
	if(html==''){
		html = '<p class="blue-grey-400">没有可管理的网站<i class="icon pe-help1 font-size-18" style="margin-left:3px; position:relative; top:2px;" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" data-trigger="hover" data-original-title="在米拓官网购买空间后可在此处更加便捷的管理网站（自动安装、一键登录后台等）。"></i></p><p><a href="http://www.metinfo.cn/product/" class="btn btn-primary padding-horizontal-25" target="_blank">去开通站点</a></p>';
	}
	return html;
}

/*domainregist.js*/
var current_request;
//域名验证
function domainsearch(domain,suffix,info,btn,delay){
	var url = M['appurl']+'index.php?n=platform&c=idc&a=docheck_domain_jsonp';//域名类型
		clearTimeout(current_request);//清除延迟处理
		if(domain!=''){//域名不能为空
			if(domain_verification(domain,suffix)){//验证域名格式
				var time = delay;
				//延迟执行
				current_request = setTimeout(function () {
					shop_option_calm(info,btn);//查询前让输入框保持正常样式状态
					info.html("正在查询域名...");//提示文字
					$.ajax({
						url: url+'&domainname='+domain+'&suffix='+suffix,
						type: 'POST',
						dataType:'jsonp',
						success: function(json) {
							if(json.returncode==200){
								//根据返回值判断是否可以注册
								if(json.returnmsg.allow==domain+suffix){
									shop_option_success(info,domain+suffix+' 可注册',btn);
								}else{
									//已被注册处理
									shop_option_error(info,domain+suffix+' 已被注册',btn);
								}
							}else{
								shop_option_error(info,'服务器 '+json.returncode+' 错误，请联系客服人员或稍后再试。',btn);
							}
						}
					});
				}, time);
			}else{
				shop_option_error(info,'域名格式错误，仅允许「英文字母、数字、"-"」',btn);
			}
		}
}
//域名格式验证
function domain_verification(domain,suffix){
	var rtn = true;
	var maxlenth = 67 - suffix.length,//域名字节数不能超过67位（包含域名后缀.com...）
		regexp = new RegExp("^^[a-z0-9-]{1,"+maxlenth+"}$","i");
	if(!regexp.test(domain)){
		rtn = false;
	}
	//开头不能为 -
	if(domain.indexOf('-')==0){
		rtn = false;
	}
	//结尾不能为 -
	if(domain.charAt(domain.length-1)=="-"){
		rtn = false;
	}
	return rtn;
}
//域名填写正常状态
function shop_option_calm(info,btn){
	info.parent('.form-group').removeClass('has-error');
	info.parent('.form-group').removeClass('has-success');
	info.html('');
	btn.addClass('disabled');
}
//域名填写错误
function shop_option_error(info,txt,btn){
	info.parent('.form-group').removeClass('has-success').addClass('has-error');
	info.html(txt);
	btn.addClass('disabled');
}
//域名填写正确
function shop_option_success(info,txt,btn){
	info.parent('.form-group').removeClass('has-error').addClass('has-success');
	info.html(txt);
	btn.removeClass('disabled');
}
//初始化域名注册步骤
function domainwizard(){

    // set up formvalidation
    $('#exampleAccountForm').formValidation({
		locale:'zh_CN',
		framework: 'bootstrap'
    });

    $("#exampleBillingForm").formValidation({
		locale:'zh_CN',
		framework: 'bootstrap'
    })
	.on('success.form.fv', function(e, data) {
			e.preventDefault();

			var $form    = $(e.target),
				formData = '',
				params   = $form.serializeArray();

			$.each(params, function(i, val) {
				//formData.append(val.name, val.value);
				formData += '&'+val.name+'='+val.value;
			});
			$.ajax({
				url: ownurl+'dostrcode',
				type: 'POST',
				dataType:'json',
				success: function(data) {
					var url = M['appurl']+'index.php?n=platform&c=idc&a=dobuydomain&strcode='+data.code;
					$.ajax({
						url: url,
						data: formData,
						cache: false,
						contentType: false,
						processData: false,
						type: 'GET',
						dataType:'jsonp',
						success: function(result) {
							if(result.state == 1){
								alertify.delay(3000).success('注册成功');
								$("#domainregist #exampleGetting").html('<div class="sweet-alert" style="display:block;position:static;margin:0;width:100%;padding:0"><div class="icon success animate" style="display:block"><span class="line tip animateSuccessTip"></span><span class="line long animateSuccessLong"></span><div class="placeholder"></div><div class="fix"></div></div><h2>域名注册成功！</h2><p class="lead text-muted" style="display:block;margin:0px 20px 20px;">您还需要进行域名实名认证才能够解析使用，在域名解析页面会提示提交实名认证资料。</p><a class="confirm btn btn-lg btn-success gorealname" tabindex="1" style="display: inline-block;" href="'+result.nexturl+' target="_blank">去实名认证</a></div>');
							}else{
								$("#domainregist #exampleGetting").html('<div class="sweet-alert" style="display:block;position:static;margin:0;width:100%;padding:0"><div class="icon success animate" style="display:block"><span class="line tip animateSuccessTip"></span><span class="line long animateSuccessLong"></span><div class="placeholder"></div><div class="fix"></div></div><h2>域名注册失败！</h2><p class="lead text-muted" style="display:block;margin:0px 20px 20px;">'+result.msg+'</p></div>');

							}
						}
					});
				}
			});

			//alert('提交成功');
			/*

			*/
	});

    // init the wizard
    var defaults = $.components.getDefaults("wizard");
    var options = $.extend(true, {}, defaults, {
		buttonsAppendTo: '.panel-body',
		templates: {
			buttons: function() {
				var options = this.options;
				return '<div class="wizard-buttons">' +
				  '<a class="btn btn-default btn-outline" href="#' + this.id + '" data-wizard="back" role="button">上一步</a>' +
				  '<a class="btn btn-primary btn-outline pull-right" href="#' + this.id + '" data-wizard="next" role="button">下一步</a>' +
				  '<a class="btn btn-success btn-outline pull-right" href="#' + this.id + '" data-wizard="finish" role="button">完成</a>' +
				  '</div>';
			}
		}
    });

    var wizard = $("#exampleWizardForm").wizard(options).data('wizard');

    // setup validator
    // http://formvalidation.io/api/#is-valid
    wizard.get("#exampleAccount").setValidator(function() {
		var domain = $('#domainregist input[name="domain"]').val();
		if (domain=='') {
			return false;
		}else{
			//域名验证完成后
			$("#domainregist input[name='domain_val']").val(domain);
			var type = $("#domain-type").html();
			$("#domainregist p.domain_content").html(domain+type);
				type = type.replace(".", "");
				type = 'dom'+type;
			$("#domainregist input[name='producttype']").val(type);
			$.ajax({
				url: ownurl+'douserinfo',
				type: 'POST',
				dataType:'json',
				success: function(data) {
					var company   = $("#domainregist input[name='dom_org_m']"),
						name      = $("#domainregist input[name='dom_ln_m']"),
						telephone = $("#domainregist input[name='dom_ph']"),
						email     = $("#domainregist input[name='dom_em']"),
						province  = $("#domainregist input[name='dom_st_m']"),
						city      = $("#domainregist input[name='dom_ct_m']"),
						address   = $("#domainregist textarea[name='dom_adr_m']"),
						postcode  = $("#domainregist input[name='dom_pc']");
					if(company.val()==''){
						company.val(data.company);
					}
					if(name.val()==''){
						name.val(data.name);
					}
					if(telephone.val()==''){
						telephone.val(data.telephone);
					}
					if(email.val()==''){
						email.val(data.email);
					}
					if(province.val()==''){
						province.val(data.province);
					}
					if(city.val()==''){
						city.val(data.city);
					}
					if(address.val()==''){
						address.val(data.address);
					}
					if(postcode.val()==''){
						postcode.val(data.postcode);
					}
				}
			})
		}

      return true;
    });

    wizard.get("#exampleBilling").setValidator(function() {
      var fv = $("#exampleBillingForm").data('formValidation');
      fv.validate();

      if (!fv.isValid()) {
        return false;
      }
		//AJAX处理完成
		/*
		setTimeout(function () {
			alertify.delay(3000).success('注册成功');
			$("#domainregist #exampleGetting").html('<div class="sweet-alert" style="display:block;position:static;margin:0;width:100%;padding:0"><div class="icon success animate" style="display:block"><span class="line tip animateSuccessTip"></span><span class="line long animateSuccessLong"></span><div class="placeholder"></div><div class="fix"></div></div><h2>域名注册成功！</h2><p class="lead text-muted" style="display:block;margin:0px 20px 20px;">您还需要进行域名实名认证才能够解析使用，在域名解析页面会提示提交实名认证资料。</p><button class="confirm btn btn-lg btn-success gorealname" tabindex="1" style="display: inline-block;">去实名认证</button></div>');
			//$('#domainregist').modal('hide');
			//完成后不再刷新站点列表，以免影响自动安装。
		},3000);
	    */
	  //状态
	  alertify.maxLogItems(1).delay(0).log('正在处理...');

	  $("#domainregist .wizard-buttons a.btn").remove();
	  //$("#domainregist .wizard-buttons .btn-success").addClass('disabled');


      return true;
    });

	$("#domainregist .wizard-buttons .btn-primary").addClass('disabled');

	//输入域名
	$(document).on('input propertychange', '#domainregist input[name="domain"]', function(e) {
		var domain = $('#domainregist input[name="domain"]').val(),
			suffix = $("#domain-type").html(),
			info   = $("#domainregist .domain-info"),
			btn	   = $("#domainregist .wizard-buttons .btn-primary");
			btn.addClass('disabled');
			domain = domain.toLowerCase();
			$('#domainregist input[name="domain"]').val(domain);
		domainsearch(domain,suffix,info,btn,1000);
	});
	//域名类型选择
	$(document).on('click', '#domainregist .domain-type li a', function(e) {
		$("#domain-type")
			.html($(this).data('val'))
			.attr('data-pid',$(this).data('pid'));
		var domain = $('#domainregist input[name="domain"]').val(),
			suffix = $("#domain-type").html(),
			info   = $("#domainregist .domain-info"),
			btn	   = $("#domainregist .wizard-buttons .btn-primary");
		domainsearch(domain,suffix,info,btn);
	});
	//域名注册完成
	$(document).on('click', '#domainregist .gorealname', function(e) {
		$('#domainregist').modal('hide');
	});

}
//生成模态框
function domainregistmodal(id, type){
	var html,
		domainlist = {
			'0':{'name':'.com','value':'.com','pid':'1'},
			'1':{'name':'.cn','value':'.cn','pid':'2'},
			'2':{'name':'.net','value':'.net','pid':'3'}
		},domainlisthtml,dedm='.com',dedmid='1';
		if(type!=''){
			type = type.replace("dom", ".");
			$.each(domainlist, function(i, item){
				if(item.value==type){
					dedm = item.value;
					dedmid = item.pid;
				}
			})
		}
		domainlisthtml = '<button type="button" class="btn btn-default btn-outline dropdown-toggle" data-toggle="dropdown" aria-expanded="false">';
		domainlisthtml+='<span id="domain-type" data-pid="'+dedmid+'">'+dedm+'</span>';
		if(type=='')domainlisthtml+='<span class="caret margin-left-5"></span>';
		domainlisthtml+='</button>';
		if(type==''){
			domainlisthtml+= '<ul class="dropdown-menu" role="menu">';
			$.each(domainlist, function(i, item){
					domainlisthtml+= '<li><a href="javascript:void(0)" data-val="'+item.value+'" data-pid="'+item.pid+'">'+item.name+'</a></li>';
			})
			domainlisthtml+= '</ul>';
		}

	html =  '<div class="modal-body padding-bottom-0">'+
				'<div class="panel" id="exampleWizardForm">'+
					'<div class="panel-body">'+
				'<div class="steps steps-sm row" data-plugin="matchHeight" data-by-row="true" role="tablist">'+
					'<div class="step col-md-4 current" data-target="#exampleAccount" role="tab">'+
						'<span class="step-number">1</span>'+
						'<div class="step-desc">'+
							'<span class="step-title">验证域名</span>'+
						'</div>'+
					'</div>'+
					'<div class="step col-md-4" data-target="#exampleBilling" role="tab">'+
						'<span class="step-number">2</span>'+
						'<div class="step-desc">'+
							'<span class="step-title">资料完善</span>'+
						'</div>'+
					'</div>'+
					'<div class="step col-md-4" data-target="#exampleGetting" role="tab">'+
						'<span class="step-number">3</span>'+
						'<div class="step-desc">'+
							'<span class="step-title">完成注册</span>'+
						'</div>'+
					'</div>'+
				'</div>'+
				'<div class="wizard-content">'+
					'<div class="wizard-pane active" role="tabpanel" id="exampleAccount">'+
						'<form id="exampleAccountForm">'+
							'<div class="form-group">'+
								'<div class="input-group">'+
									'<input type="text" name="domain" class="form-control" placeholder="请输入要注册的域名">'+
									'<div class="input-group-btn domain-type">'+
										domainlisthtml+
									'</div>'+
								'</div>'+
								'<small class="help-block margin-bottom-0 domain-info font-size-14"></small>'+
							'</div>'+
						'</form>'+
					'</div>'+
					'<div class="wizard-pane" id="exampleBilling" role="tabpanel">'+
						'<form id="exampleBillingForm">'+
							'<input type="hidden" name="recordid" value="'+id+'"/>'+
							'<input type="hidden" name="domain_val" />'+
							'<input type="hidden" name="producttype" />'+
							'<div class="row">'+
								'<div class="col-sm-12"><p class="domain_content font-size-20 well text-center"></p></div>'+
								'<div class="form-group col-sm-12 margin-bottom-0">'+
									'<label class="control-label">域名所有者</label>'+
									'<input type="text" class="form-control" name="dom_org_m" data-fv-notempty="true" minlength="2">'+
									'<span class="help-block">公司或个人名称，此项关系到所有权，且提交后无法修改，请认真填写。</span>'+
								'</div>'+
								'<div class="col-sm-12"><hr/></div>'+
								'<div class="form-group col-sm-4">'+
									'<input type="text" class="form-control" name="dom_ln_m" placeholder="联系人" data-fv-notempty="true" minlength="2">'+
								'</div>'+
								'<div class="form-group col-sm-4">'+
									'<input type="text" class="form-control" name="dom_ph" placeholder="固定电话" data-fv-notempty="true">'+
								'</div>'+
								'<div class="form-group col-sm-4">'+
									'<input type="email" class="form-control" name="dom_em" placeholder="Email" data-fv-notempty="true" data-fv-field="email">'+
								'</div>'+
								'<div class="form-group col-sm-6">'+
									'<input type="text" class="form-control" name="dom_st_m" placeholder="省份" data-fv-notempty="true">'+
								'</div>'+
								'<div class="form-group col-sm-6">'+
									'<input type="text" class="form-control" name="dom_ct_m" placeholder="城市" data-fv-notempty="true">'+
								'</div>'+
								'<div class="form-group col-sm-12">'+
									'<textarea class="form-control" name="dom_adr_m" rows="2" placeholder="详细地址" data-fv-notempty="true"></textarea>'+
								'</div>'+
							'</div>'+
						'</form>'+
					'</div>'+
					'<div class="wizard-pane" id="exampleGetting" role="tabpanel">'+
						'<div class="height-200 vertical-align text-center"><div class="loader vertical-align-middle loader-circle" data-type="default"></div></div>'+
					'</div>'+
				'</div>'+
					'</div>'+
				'</div>'+
			'</div>';
	$('#domainregist').remove();
	gentmodal({
		'id':'domainregist',
		'content': html
	});
	domainwizard();
}
//启动域名注册
function domainregistopen(dom){
	var id = dom.data('id'),type=dom.data('type');
	domainregistmodal(id, type);
	$('#domainregist input[name="id"]').val(id);
	//$('#domainregist').modal({backdrop: 'static', keyboard: false});
	$('#domainregist').modal('show');
}

/*template.js*/
$(function(){
	if(pagetype=='profile_template'){
		//下载源码
		$(document).on('click', '.downloadsource', function(e) {
			var durl = $(this).data('url');
			//模态框生成
			var mdid='modalbeian',
				html = gentmodal_header({title:'获取源码须知'});
				if($('#'+mdid).length>0){
					$('#'+mdid).remove();
				}
				html+= '<div class="modal-body">'+
							'<div class="well font-size-16 blue-grey-500">'+
								'<ul class="padding-left-20 margin-bottom-0">'+
									'<li class="margin-bottom-10">通常下载源码是出于自由修改用；<a href="http://doc.metinfo.cn/muban/" target="_blank">模板制作文档<i class="icon pe-angle-right font-size-30" aria-hidden="true" style="positoin:relative;top:8px;"></i></a></li>'+
									'<li class="margin-bottom-10">手动安装模板过于复杂，建议安装 MetInfo 后到网站后台「应用商店」在线安装；</li>'+
									'<li class="margin-bottom-10">如同时选购了空间，在「站点」系统会自动帮您完成模板和程序的安装（含演示数据）；</li>'+
									'<li class="margin-bottom-10">此源码为模板源码，不含 MetInfo 程序和演示数据；</li>'+
								'</ul>'+
							'</div>'+
								'<p class="alert alert-danger alert-dismissible">'+
									'一套模板只能做一个网站；<br />模板必须绑定一个顶级域名，第一次使用时系统自动绑定网站域名（本地测试localhost或127.0.0.1不受限制）；<br />模板仅能在绑定域名下正常使用，绑定后无法更换。'+
								'</p>'+
							'<a href="'+durl+'" class="btn btn-block btn-success">我清楚了，立即下载</a>'+
						'</div>';
			gentmodal({
				id:mdid,
				//size:'modal-sm',
				content:html
			});
			$('#'+mdid).modal('show');
		})
	}
});

/*business.js*/
$(function(){
	if(pagetype=='profile_business'){
		// 查看授权
		$(document).on('click', '.businesscode', function(e) {
			$(this).next().collapse('toggle');
		})
		// 领取商业授权码
		$(document).on('change', '#totemporary', function(e) {
			$('#modal_receive form').data('formValidation').resetForm();
			if($(this).is(':checked')){
				$('.tmpdomain-body').collapse('show');
			}else{
				$('.tmpdomain-body').collapse('hide');
			}
		})
		$(document).on('click', '.receive', function(e) {
			var id = $(this).data('id');
			var agent = $(this).data('agent');
			// 模态框生成
			var mdid='modal_receive',
				html = gentmodal_header({title:'领取商业授权码'});
				if($('#'+mdid).length>0){
					$('#'+mdid).remove();
				}
				html+= '<div class="modal-body">'+
							'<form method="POST" action="./doauth">'+
								'<input type="hidden" name="recordid" value="'+id+'">'+
								'<p class="alert alert-danger font-size-16">领取后将无法更改！<br/>请仔细核对填写的域名！<br/>只能授权一个域名。</p>'+
								'<div class="form-group">'+
									'<div class="input-group">'+
										'<span class="input-group-addon">http://www.</span>'+
										'<input type="text" class="form-control" name="domain" placeholder="输入您的域名" data-fv-notempty="true">'+
									'</div>'+
								'</div>';
				if(agent == 1) {
					html+='<div class="form-group ">'+
									'<div class="input-group">'+
										'<span class="input-group-addon">会员帐号</span>'+
										'<input type="text" class="form-control" name="account" placeholder="输入会员帐号" data-fv-notempty="true">'+
									'</div>'+
								'</div>';
				}
				html+=	'<div class="form-group">'+
									'<div class="checkbox-custom checkbox-default" data-toggle="tooltip" data-placement="top" data-trigger="hover" data-original-title="如果您的域名暂时不能访问，比如在备案期间，则可增加一个临时域名，临时域名通常为空间赠送的三级域名。">'+
										'<input type="checkbox" id="totemporary" name="inputCheckbox">'+
										'<label for="totemporary"><i class="icon pe-help1 font-size-18 margin-left-5 pull-right orange-600"></i>设置临时域名</label>'+
									'</div>'+
								'</div>'+
								'<div class="form-group collapse tmpdomain-body">'+
										'<input type="text" class="form-control" name="tmpdomain" placeholder="请输入临时域名" data-fv-notempty="true">'+
								'</div>'+
								'<div class="form-group margin-bottom-0">'+
									'<button type="submit" class="btn btn-success btn-block">立即领取</button>'+
								'</div>'+
							'</form>'+
						'</div>';
			gentmodal({
				id:mdid,
				size:'modal-sm',
				content:html
			});
			$('#'+mdid+' form').formValidation({
				locale:'zh_CN',
				framework: 'bootstrap'
			})
			.on('success.form.fv', function(e, data) {
				e.preventDefault();
				var $form    = $(e.target),
					formData = new FormData(),
					params   = $form.serializeArray();

				$.each(params, function(i, val) {
					formData.append(val.name, val.value);
				});
				alertify.maxLogItems(1).delay(0).log('正在处理...');
				$.ajax({
					url: $form.attr('action'),
					data: formData,
					cache: false,
					contentType: false,
					processData: false,
					type: 'POST',
					//dataType:'json',
					success: function(result) {
						if(result=='suc'){
							alertify.delay(3000).success('修改成功');
							window.location.reload();
						}else{
							alertify.delay(30000).error('领取失败');
							$('#'+mdid+' form').data('formValidation').resetForm();
						}
					}
				});
			});
			$('[data-toggle="tooltip"]').tooltip();
			$('#'+mdid).modal('show');
		})
	}
});
/*pay.js*/
$(function(){
    if (pagetype == 'pay') {
        // 显示购买确认协议
        if($('.buy-agreement').length){
            $('.buy-agreement').modal({
                keyboard:false,
                backdrop:false
            }).on('hide.bs.modal',function(event) {
                $('.page.pay').removeAttr('hidden');
            });
        }
        //域名资料填写
        if ($("tr.good_type_domain").length) {
            $(".pay_domain_info").removeClass('hide');
        }
        //计算金额
        pay_compute('k');
        //年限选择
        $(document).on('change', '.pay_life select', function (e) {
            var price = $(this).find('option:selected').data('price');
            pay_good_price($(this).data('type'), price);
            var total = 0;
            $(".goodlist_price").each(function () {
                total = total + parseFloat($(this).data('price'));
            });
            pay_total(total);
        })
        //安装服务
        $(document).on('change', 'input[name="install"]', function (e) {
            if ($('input[name="install"]').is(':checked')) {
                $("#install-body").collapse('show');
            } else {
                $("#install-body").collapse('hide');
            }
        })
        //开具发票
        $(document).on('change', 'input[name="invoice"]', function (e) {
            if ($('input[name="invoice"]').is(':checked')) {
                $("#invoice-body").collapse('show');
            } else {
                $("#invoice-body").collapse('hide');
            }
        })
        //模板优惠券
        $(document).on('change', 'input[name="coupon_tem"]', function (e) {
            pay_compute('k');
        })

        //模板优惠券
        $(document).on('change', 'input[name="coupon_auth"]', function (e) {
            pay_compute('k');
        })
        //无忧优惠券
        $(document).on('change', 'input[name="coupon_wuyou"]', function (e) {
            pay_compute('k');
        })
        //增加域名注册
        $(document).on('click', '.register_domain_btn', function (e) {
            pay_register_domain();
        });
        //选择支付方式
        $(document).on('click', '.pay-oder-mode-body button', function (e) {
            var type = $(this).data('paytype');
            $("input[name='paytype']").val(type);
            $(".pay-form").submit();
        })
        //余额支付
        $(document).on('click', '#pay_balance button.btn-primary', function (e) {
            var pw = $("#pay_balance input[name='pw']");
            if (pw.val() == '') {
                error('请输入登录密码');
                pw.focus();
            } else {
                $("input[name='password']").val(pw.val());
                $("#pay_balance").hide();
                $(".pay-form").submit();

            }
        })
        //提交支付
        $(".pay-form").formValidation({
            locale: 'zh_CN',
            framework: "bootstrap"
        })
        .on('err.form.fv', function (e, data) {
            error('请完善表单信息');
        })
        .on('success.form.fv', function (e, data) {
            e.preventDefault();
            //充值
            if ($("input[name='price']").val() != '') {
                var json = {};
                json.price = $("input[name='price']").val();
                json.paytype = $("input[name='paytype']").val();
                $.ajax({
                    url: ownurl + 'dorecharge/',
                    data: json,
                    type: 'POST',
                    success: function (url) {
                        if (json.paytype == 'alipay') {
                            pay_alipay(url, M['weburl'] + 'profile/record/');
                        }
                        if (json.paytype == 'weixin') {
                            $.ajax({
                                url: url,
                                data: json,
                                type: 'POST',
                                dataType: 'jsonp',
                                success: function (data) {
                                    pay_weixin(data, M['weburl'] + 'profile/record/');
                                }
                            });
                        }
                    }
                });
            } else {
                //消费
                if ($("input[name='paytype']").val() == 'balance' && $("input[name='password']").val() == '' || $("input[name='paytype']").val() == 'balance' && $('#pay_balance').length == 0) {
                    pay_balance();
                } else {
                    var json = {};
                    json.goods = $.parseJSON(goodsjson);
                    //空间域名年限
                    var newgoods = new Array();
                    $.each(json.goods, function (i, item) {
                        if (item.type == 'vhost') {
                            var no = item.no;
                            no = no.split('-');
                            no = no[0] + '-' + $('select[name="life_vhost"]').val() + '年' + '-' + no[2];
                            item.no = no;
                        }
                        if (item.type == 'domain') {
                            var no = item.no;
                            no = no.split('-');
                            item.no = no[0] + '-' + $('select[name="life_domain"]').val() + '年' + '-' + no[2];
                            if (no[2] == 1) {//域名注册信息
                                item.dom_org_m = $("input[name='dom_org_m']").val();
                                item.dom_ln_m = $("input[name='dom_ln_m']").val();
                                item.dom_ph = $("input[name='dom_ph']").val();
                                item.dom_st_m = $("input[name='dom_st_m']").val();
                                item.dom_ct_m = $("input[name='dom_ct_m']").val();
                                item.dom_adr_m = $("textarea[name='dom_adr_m']").val();
                                item.dom_em = $("input[name='dom_em']").val();
                            }
                        }
                        newgoods[i] = item;
                    })
                    json.goods = newgoods;
                    json.pid=pid;
                    //订单类型
                    json.goodtypeid = goodtypeid;
                    //订单类型
                    json.demo = demo;
                    //订单号
                    json.ordernum = $("input[name='ordernum']").val();
                    //付款方式
                    json.paytype = $("input[name='paytype']").val();
                    //账户密码
                    json.pw = $("input[name='password']").val();
                    //是否开票
                    json.is_invoice = $('input[name="invoice"]:checked').length;
                    //安装服务
                    json.is_instill = $('input[name="install"]:checked').length;
                    //联系电话
                    json.install_tel = $('input[name="install_tel"]').val();
                    //发票抬头
                    json.invoice_header = $('input[name="header"]').val();
                    //发票邮寄地址
                    json.invoice_address = $('textarea[name="address"]').val();
                    //发票联系人
                    json.invoice_name = $('input[name="name"]').val();
                    //发票联系电话
                    json.invoice_tel = $('input[name="tel"]').val();
                    //纳税人识别号
                    json.invoice_taxpayer = $('input[name="invoice_taxpayer"]').val();
                    //是否使用模板优惠券
                    json.coupon_tem = $('input[name="coupon_tem"]').val();
                    //是否使用授权优惠券
                    json.coupon_auth = $('input[name="coupon_auth"]').val();
                    //是否使用授权优惠券
                    json.coupon_wuyou = $('input[name="coupon_wuyou"]').val();
                    //无忧联系电话
                    json.wuyou_tel = $('input[name="wuyou_tel"]').val();
                    //无忧联系QQ
                    json.wuyou_qq = $('input[name="wuyou_qq"]').val();
                    //无忧服务
                    json.is_wuyou = $('input[name="is_wuyou"]').val();
                    $.ajax({
                        url: ownurl + 'dopaycode',
                        data: json,
                        type: 'POST',
                        success: function (url) {
                            var paytype = $("input[name='paytype']").val();
                            if (paytype == 'weixin') {
                                $.ajax({
                                    url: url,
                                    data: json,
                                    type: 'POST',
                                    dataType: 'jsonp',
                                    success: function (data) {
                                        pay_weixin(data);
                                    }
                                });
                            }
                            if (paytype == 'alipay') {
                                pay_alipay(url);
                            }
                            if (paytype == 'weixin_h5') {
                                $.ajax({
                                    url: url,
                                    data: json,
                                    type: 'POST',
                                    dataType: 'jsonp',
                                    success: function (data) {
                                        alert('22222222');
                                    }
                                });
                            }
                            if (paytype == 'balance') {
                                window.location.href = url;
                            }
                        }
                    });
                }
            }
        });
    }
});

/*pay_func.js*/
//计算总额
function pay_compute(type) {
    $.ajax({
        url: goodsinfo,
        type: 'POST',
        dataType: 'jsonp',
        success: function (json) {
            //alert(JSON.stringify(json));
            var total = 0;
            $.each(json, function (i, item) {

                pay_good_price(item.type, item.price);
                if (item.type == 'vhost' || item.type == 'domain') {
                    pay_life(item);
                }

                total = total + parseFloat(item.price);
                pay_total(total);
                // 模板优惠券
                if ($('input[name="coupon_tem"]').is(':checked')) {
                    $("tr[id=tem_get]").remove();
                    if (item.type == 'tem') {

                        getstrcode('coupon', 'coupon', 'doindex', {type: 1, status: 0}, function (voucher) {

                            if (voucher.code == 1) {

                                if (voucher.data.amount < 300 || (voucher.data.amount >= 300 && item.price > 300)) {

                                    if (voucher.data.amount >= 500) {

                                        voucher.data.name = '全免券';

                                        voucher.data.amount = item.price;

                                    }

                                    var tbody = $('.table tbody'), html;

                                    html = '<tr id="tem_get">' +

                                        '<td class="padding-vertical-15">'

                                        + voucher.data.name +

                                        '</td>' +

                                        '<td class="text-right">' +

                                        '<span class="badge badge-success">-' + voucher.data.amount + '元</span>' +


                                        '</td>' +


                                        '</tr>';

                                    tbody.find("tr:last").before(html)

                                    total = total - voucher.data.amount;

                                    pay_total(total);

                                    $("#total").html(total + '元');

                                }

                            }

                        })

                    }
                    $("input[name='coupon_tem']").val('1');
                } else {
                    $("tr[id=tem_get]").remove();
                    $("input[name='coupon_tem']").val('0');
                }

                // 授权优惠券
                if ($('input[name="coupon_auth"]').is(':checked')) {
                    $("tr[id=auth_get]").remove();
                    if (item.type == 'auth') {

                        getstrcode('coupon', 'coupon', 'doindex', {type: 2, status: 0}, function (voucher) {

                            if (voucher.code == 1) {

                                if (voucher.data.amount >= 1000) {

                                    voucher.data.name = '全免券';

                                    voucher.data.amount = item.price;

                                }

                                var tbody = $('.table tbody'), html;

                                html = '<tr id="auth_get">' +

                                    '<td class="padding-vertical-15">' + voucher.data.name +

                                    '</td>' +

                                    '<td class="text-right">' +

                                    '<span class="badge badge-success">-' + voucher.data.amount + '元</span>' +

                                    '</td>' +


                                    '</tr>';

                                tbody.find("tr:last").before(html)

                                total = total - voucher.data.amount;

                                pay_total(total);

                                $("#total").html(total + '元');

                            }

                        })

                    }
                    $("input[name='coupon_auth']").val('1');
                } else {
                    $("tr[id=auth_get]").remove();
                    $("input[name='coupon_auth']").val('0');
                }

                // 无忧优惠券
                if ($('input[name="coupon_wuyou"]').is(':checked')) {
                    $("tr[id=wuyou_get]").remove();
                    if (item.type == 'wuyou') {

                        getstrcode('coupon', 'coupon', 'doindex', {type: 3, status: 0}, function (voucher) {

                            if (voucher.code == 1) {


                                if (voucher.data.amount < 300 || (voucher.data.amount >= 300 && item.price > 300)) {

                                    if (voucher.data.amount >= 500) {

                                        voucher.data.name = '全免券';

                                        voucher.data.amount = item.price;

                                    }

                                    var tbody = $('.table tbody'), html;

                                    html = '<tr id="wuyou_get">' +

                                        '<td class="padding-vertical-15">' + voucher.data.name +

                                        '</td>' +

                                        '<td class="text-right">' +

                                        '<span class="badge badge-success">-' + voucher.data.amount + '元</span>' +

                                        '</td>' +


                                        '</tr>';

                                    tbody.find("tr:last").before(html)

                                    total = total - voucher.data.amount;

                                    pay_total(total);

                                    $("#total").html(total + '元');

                                }
                            }
                        })

                    }
                    $("input[name='coupon_wuyou']").val('1');
                } else {
                    $("tr[id=wuyou_get]").remove();
                    $("input[name='coupon_wuyou']").val('0');
                }
            });
            //营销分析
            if (type == 'k') {
                var ptem = $('#goods_tem');
                if (ptem.length) {
                    include("//static.criteo.net/js/ld/ld.js", function () {
                        var deviceType = /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d";
                        window.criteo_q = window.criteo_q || [];
                        window.criteo_q.push(
                            {event: "setAccount", account: 33731},
                            {event: "setEmail", email: useremail},
                            {event: "setSiteType", type: deviceType},
                            {
                                event: "viewBasket", item: [
                                    {id: ptem.data('pid'), price: parseInt(ptem.html()), quantity: 1}
                                ]
                            }
                        );
                    });
                }
            }
        }
    });
}
//金额处理
function pay_total(total){
	if($(".panel.invoice").length){
		if(total>800){//开票起步金额
            document.getElementById("prompt").innerHTML= '请选择以下支付方式';
			$(".panel.invoice").removeClass('hide');
		}else{
            document.getElementById("prompt").innerHTML= '请选择以下支付方式<span class="badge badge-success margin-left-10">'+
                '以上价格不含税，你的消费未满800元，我们不提供免费开票和邮寄服务，如需开具发票请联系在线客服。'+
                '</span>';
			$(".panel.invoice").addClass('hide');
		}
	}
	getstrcode('platform','platform','domember_obtain','',function(json){
		$(".pay-oder-balance .balance").html('可用 '+json.money+' 元');
		if(json.money>=total){
			$(".pay-oder-balance").removeAttr('disabled');
		}else{
			$(".pay-oder-balance").attr('disabled','disabled');
		}
	});
	$("#total").html(total+'元');
}
//金额赋值
function pay_good_price(type,price){
	$("#goods_"+type).html(price+'元');
	$("#goods_"+type).data('price',price);
}
//购买年限
function pay_life(item){
	var body,html='',price = {};
	if(item.type=='vhost'){
		body = $(".pay_life select[name='life_vhost']");
		price[1] = item.p_price;
		price[2] = item.p_price*2;
		price[3] = item.p_price*3;
		price[5] = item.p_price*5;
	}
	if(item.type=='domain'){
		body = $(".pay_life select[name='life_domain']");
		var pe = item.p_price;
			pe = pe.split('/');
		if(renew==0){
			price[1] = parseFloat(pe[1]);
			price[2] = parseFloat(pe[1])+parseFloat(pe[0]);
			price[3] = price[2]+parseFloat(pe[0]);
			price[4] = price[3]+parseFloat(pe[0]);
			price[5] = price[4]+parseFloat(pe[0]);
		}else{
			//续费价格
			price[1] = parseFloat(pe[0]);
			price[2] = parseFloat(pe[0])*2;
			price[3] = parseFloat(pe[0])*3;
			price[4] = parseFloat(pe[0])*4;
			price[5] = parseFloat(pe[0])*5;
		}
	}
	$.each(price, function(i, v){
		var n = i;
		if(item.type=='domain'&&n==1&&renew==0)n='首';
		var s = '';
		if(v==item.price)s = 'selected';
		html+= '<option value="'+i+'" '+s+' data-price="'+v+'">'+v+'元/'+n+'年</option>';
	});
	body.html(html);

}
//支付宝支付
function pay_alipay(url,to){
	window.location.href = url;
	/*
	alertify.theme('bootstrap').okBtn('付款成功').cancelBtn('付款失败').confirm('付款成功了吗？', function (ev) {
		ev.preventDefault();
		window.location.href = to?to:M['weburl']+'profile/';
	}, function(ev) {
		ev.preventDefault();
	});
	$("a.paygetlink").attr('href',url);
	$("a.paygetlink span").click();
	*/
}
//微信支付
function pay_weixin(data,to){
	//alert(JSON.stringify(data));
	//模态框生成
	var mdid='modalweixin',
		html = gentmodal_header({title:'微信扫码支付'});
		if($('#'+mdid).length>0){
			$('#'+mdid).remove();
		}
		html+= '<div class="modal-body">'+
					'<img src="'+data.imgurl+'" class="img-responsive"/>'+
				'</div>';
	gentmodal({
		id:mdid,
		size:'modal-sm',
		content:html
	});
	$('#'+mdid).modal('show');
	var inter = setInterval(function(){
			$.ajax({
				url: data.check_url,
				type: 'POST',
				dataType:'jsonp',
				success: function(data) {
					if(data.trade_state=='SUCCESS'){
						clearInterval(inter);
						alertify.maxLogItems(1).delay(0).success('付款成功');
						setTimeout(function(){
							window.location.href = to?to:M['weburl']+'profile/';
						},4000);
					}
				}
			});
		},1000);
	$('#'+mdid).on('hide.bs.modal', function (e) {
		clearInterval(inter);
	})
}
//余额支付
function pay_balance(){
	if($('#pay_balance').length==0){
		var html = gentmodal_header({title:'余额支付'});
			html+=  '<div class="modal-body padding-bottom-10">'+
						'<div class="form-group margin-bottom-0">'+
							'<input type="password" name="pw" class="form-control" placeholder="请输入登录密码">'+
						'</div>'+
					'</div>'+
					'<div class="modal-footer text-left">'+
						'<button type="button" class="btn btn-block btn-primary margin-top-5">确认支付</button>'+
					'</div>';
		gentmodal({
			id:'pay_balance',
			size:'modal-sm',
			content:html
		});
		$('#pay_balance').on('hide.bs.modal', function (e) {
			$("input[name='password']").val('');
		})
	}
	$('#pay_balance').modal('show');
}
//增加域名注册
function pay_register_domain(){
	if($('#pay_register_domain').length==0){
		var html = gentmodal_header({title:'注册域名'});
			html+=  '<div class="modal-body padding-bottom-10">'+
						'<div class="form-group margin-bottom-0">'+
							'<div class="input-group">'+
								'<input type="text" name="domain" class="form-control" placeholder="请输入域名">'+
								'<div class="input-group-btn domain-type">'+
									'<button type="button" class="btn btn-default btn-outline dropdown-toggle padding-horizontal-20 bg-blue-grey-100" data-toggle="dropdown" aria-expanded="false"><span id="domain-type">.com</span><span class="caret margin-left-5"></span></button>'+
									'<ul class="dropdown-menu" role="menu">'+
										'<li><a href="javascript:void(0)" data-val=".com">.com</a></li>'+
										'<li><a href="javascript:void(0)" data-val=".cn">.cn</a></li>'+
										'<li><a href="javascript:void(0)" data-val=".net">.net</a></li>'+
									'</ul>'+
								'</div>'+
							'</div>'+
							'<small class="help-block margin-bottom-0 domain-info font-size-14"></small>'+
						'</div>'+
					'</div>'+
					'<div class="modal-footer text-left">'+
						'<button type="submit" class="btn btn-block btn-primary margin-top-5">确认</button>'+
					'</div>';
		gentmodal({
			id:'pay_register_domain',
			size:'modal-sm',
			content:html
		});
	}
	$('#pay_register_domain').modal('show');
	//输入域名
	$(document).on('input propertychange', '#pay_register_domain input[name="domain"]', function(e) {
		var domain = $('#pay_register_domain input[name="domain"]').val(),
			suffix = $("#domain-type").html(),
			info   = $("#pay_register_domain .domain-info"),
			btn    = $("#pay_register_domain button[type='submit']");
			btn.addClass('disabled');
			domain = domain.toLowerCase();
			$('#pay_register_domain input[name="domain"]').val(domain);
		domainsearch(domain,suffix,info,btn,1000);
	});
	//域名类型选择
	$(document).on('click', '#pay_register_domain .domain-type li a', function(e) {
		$("#domain-type").html($(this).data('val'));
		var domain = $('#pay_register_domain input[name="domain"]').val(),
			suffix = $("#domain-type").html(),
			info   = $("#pay_register_domain .domain-info"),
			btn    = $("#pay_register_domain button[type='submit']");
		domainsearch(domain,suffix,info,btn);
	});
	//确定域名
	$(document).on('click', "#pay_register_domain button[type='submit']", function(e) {
		if(!$(this).hasClass("disabled")){
			var domain = $('#pay_register_domain input[name="domain"]').val(),
				suffix = $("#domain-type").html(),
				newgoods = new Array(),
				json = $.parseJSON(goodsjson);
				suffix = suffix.split('.');
				suffix = suffix[1];
			if(domain!=''){
				//修改商品项目json
				var k = 0;
				$.each(json, function(i, item){
					k = i;
					newgoods[i] = item;
				});
				k = k + 1;
				newgoods[k] = {};
				newgoods[k]['type'] 	= 'domain';
				newgoods[k]['no']   	= 'dom'+suffix+'-1年-1';
				newgoods[k]['domain']	= domain;
				goodsjson = JSON.stringify(newgoods);
				$('#pay_register_domain').modal('hide');
				//修改项目列表HTML
				var dotr = '<tr class="good_type_domain">'+
								'<td class="padding-vertical-15">'+
									'<h4 class="font-size-14 margin-bottom-0">域名</h4>'+
									'<p class="blue-grey-400 margin-bottom-0">'+domain+'.'+suffix+'</p>'+
									'<div class="form-group width-150 margin-top-5 margin-bottom-0 pay_life">'+
										'<select name="life_domain" class="form-control" data-type="domain">'+
										'</select>'+
									'</div>'+
								'</td>'+
								'<td class="text-right goodlist_price" id="goods_domain"></td>'+
							'</tr>';
				$('tr.register_domain').before(dotr);
				$('tr.register_domain').remove();
				//修改域名年限选择下拉菜单
				var price = [];
					price['com'] 	= '65/60';
					price['cn'] 	= '39/35';
					price['net'] 	= '65/60';
				var domainjson = {};
					domainjson.type    = 'domain';
					domainjson.p_price = price[suffix];
				var pdm = price[suffix];
					pdm = pdm.split('/');
					pdm = pdm[1];
					domainjson.price = pdm;
					pay_life(domainjson);
				//触发下拉菜单
				$("select[name='life_domain']").change();
				//域名资料填写
				if($("tr.good_type_domain").length){
					$(".pay_domain_info").removeClass('hide');
				}
			}else{
				error('请输入域名');
				$('#pay_register_domain input[name="domain"]').focus();
			}
		}
	});
}
/*recharge.js*/
$(function(){
	if(pagetype=='profile_recharge'){
		$('#gorecharge').formValidation({
			locale:'zh_CN',
			framework: "bootstrap"
		});
	}
});
/*unorder.js*/
/*订单管理*/
$(function(){
    if(pagetype=='profile_unorder'){
        // 删除订单
        $(document).on('click', '.del-unorder', function(event) {
            event.preventDefault();
            var dom = $(this);
            alertify.theme('bootstrap').okBtn('确定').cancelBtn('取消').confirm('是否删除该订单', function (ev) {
                $.ajax({
                    url:  accurl+'pay?a=dostrcode',
                    type: 'POST',
                    dataType:'json',
                    success: function(data) {
                    unorder(data.code,dom.data('pid'));
                }
              });
               
            });
        });
    }
})

function unorder(code,ordernum){
           $.ajax({
                    url: appurl+'index.php?n=platform&c=pay_acc&a=dodel_unorder',
                    type: 'GET',
                    dataType:'jsonp',
                    data:{pid:ordernum,strcode:code},
                    success: function(result) {
                        if(typeof result != 'underfind'){
                            if(parseInt(result.state)){
                                alertify.success(result.info);
                                datatable.ajax.reload();
                            }else{
                                alertify.error(result.info);
                            }
                        }
                    }
                });

}
/*domain.js*/
$(function(){
	if(pagetype=='profile_domain' || pagetype=='profile_index'){
		// 域名设置
		$(document).on('click', '.domain_strcode', function(e) {
			var url = $(this).attr("href")+'&strcode='+strcode;
			$(this).attr("href",url);
			return true;
		})
	}
});
/*coupon.js*/
$(function(){
	if(pagetype=='coupon_index'){
		$(document).on('change', 'input[name="purchase"]', function(e) {
			if($(this).val()==1){
				$('#purchase_1').collapse('show');
				$('#purchase_2').collapse('hide');
			}else{
				$('#purchase_1').collapse('hide');
				$('#purchase_2').collapse('show');
			}
		})
		$(document).on('change', 'input[name="whynot"]', function(e) {
			if($(this).val()==3){
				$('#whynot_3').collapse('show');
			}else{
				$('#whynot_3').collapse('hide');
			}
		})
	}
});
/*favaorite.js*/
/*模板收藏*/
$(function(){
    if(pagetype=='profile_favaorite'){
        // 删除收藏
        $(document).on('click', '.del-favaorite', function(event) {
            event.preventDefault();
            var $self = $(this);
            alertify.theme('bootstrap').okBtn('确定').cancelBtn('取消').confirm('是否删除该收藏模板', function (ev) {
                $.ajax({
                    url: $self.attr('href'),
                    type: 'GET',
                    dataType:'jsonp',
                    data:{id:$self.data('id')},
                    success: function(result) {
                        if(parseInt(result.state)){
                            alertify.success(result.info);
                            datatable.ajax.reload();
                        }else{
                            alertify.error(result.info);
                        }
                    }
                });
            });
        });
    }
})
/*caseapply.js*/
/*申请案例*/
$(function(){
    if(pagetype=='profile_caseapply'){
        // 撤销显示案例
        $(document).on('click', '.revoke-case', function(event) {
            event.preventDefault();
            var $self = $(this);
            alertify.theme('bootstrap').okBtn('确定').cancelBtn('取消').confirm('是否确定撤销显示案例？', function (ev) {
                $.ajax({
                    url: $self.attr('href'),
                    type: 'GET',
                    dataType:'jsonp',
                    success: function(result) {
                        if(parseInt(result.state)){
                            alertify.success(result.info);
                            datatable.ajax.reload();
                        }else{
                            alertify.error(result.info);
                        }
                    }
                });
            });
        });
        // 申请显示案例
        $(document).on('click', '.apply-case', function(event) {
            event.preventDefault();
            var $self = $(this);
            alertify.theme('bootstrap').okBtn('确定').cancelBtn('取消').confirm('是否确定申请显示案例？', function (ev) {
                $.ajax({
                    url: $self.attr('href'),
                    type: 'GET',
                    dataType:'jsonp',
                    success: function(result) {
                        if(parseInt(result.state)){
                            alertify.success(result.info);
                            datatable.ajax.reload();
                        }else{
                            alertify.error(result.info);
                        }
                    }
                });
            });
        });
    }
})

/*own.js*/
$(function(){
    // 验证码
    $("#getcode").click(function(){
        $(this).attr("src",M['weburl']+'login/code/?' + Math.random());
    });
    if(pagetype!=''){
        if(pagetype!='pay' && pagetype!='profile_wuyou'){
            if(useremail==''){
                conmtips('danger','您的户尚未绑定邮箱<a class="btn btn-primary btn-xs btn-inverse btn-outline margin-left-10" href="'+M['weburl']+'profile/info/" style="position:relative;bottom:2px;">去设置</a>');
            }
            if(pagetype!='profile_index'){
                /*安装未完成*/
                getstrcode('platform','idc','doisinstall','',function(ret){
                    if(ret.code==0){
                        conmtips('danger','您的网站尚未安装完成<a class="btn btn-primary btn-xs btn-inverse btn-outline margin-left-10" href="'+M['weburl']+'profile/" style="position:relative;bottom:2px;">点此继续</a>');
                    }
                });
            }
                /*订单未完成*/
                getstrcode('platform','platform','dotable_unorder_json','',function(ret){
                    console.log(ret.recordsTotal);
                    if(ret.recordsTotal!=0){
                        conmtips('danger','您有尚未完成的订单<a class="btn btn-primary btn-xs btn-inverse btn-outline margin-left-10" href="'+M['weburl']+'profile/record/dounorder" style="position:relative;bottom:2px;">点此继续</a>');
                    }
                });
        }
    }
    // 产品中心导航当前页面对应选项卡点击禁止跳转
    $('.profile_nav .active a').click(function(event) {
        event.preventDefault();
    });
    // 在线咨询
    include(M['weburl']+'templates/account/min/js/online.js');
});
// 获取加密信息提交请求
function getstrcode(n,c,a,data,func,type){
    $.ajax({
        url: M['weburl']+'profile/profile/dostrcode',
        type: 'POST',
        dataType:'json',
        success: function(code) {
            var url = M['appurl'] + 'index.php?n='+n+'&c='+c+'&a='+a;
            url = url + '&strcode=' + code.code;
            if(type==1){
                func(url);
            }else{
                $.ajax({
                    url     : url,
                    data    : data,
                    type    : 'POST',
                    dataType: 'jsonp',
                    success: function(jsonp) {
                        func(jsonp,code.code);
                    }
                });
            }
        }
    });
}
// 阻止表单自动填充
function form_block_fill(){
　　if(navigator.userAgent.toLowerCase().indexOf("chrome") != -1){
　　　　var selectors = document.getElementsByTagName("input");
　　　　for(var i=0;i<selectors.length;i++){
　　　　　　if((selectors[i].type !== "submit") && (selectors[i].type !== "password")){
　　　　　　　　var input = selectors[i];
　　　　　　　　var inputName = selectors[i].name;
　　　　　　　　var inputid = selectors[i].id;
　　　　　　　　selectors[i].removeAttribute("name");
　　　　　　　　selectors[i].removeAttribute("id");
　　　　　　　　setTimeout(function(){
　　　　　　　　　　input.setAttribute("name",inputName);
　　　　　　　　　　input.setAttribute("id",inputid);
　　　　　　　　},1)
　　　　　　}

　　　　}

　　}
}
// 模态框生成
function gentmodal_header(options){
    var html = '<div class="modal-header">'+
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                        '<span aria-hidden="true">×</span>'+
                    '</button>'+
                    '<h4 class="modal-title">'+options.title+'</h4>'+
                '</div>';
    return html;
}
function gentmodal(options){
    var html = '<div class="modal modal-primary fade" id="'+options.id+'">'+
                '<div class="modal-dialog '+options.size+' modal-center">'+
                    '<div class="modal-content">'+
                        options.content+
                    '</div>'+
                '</div>'+
            '</div>';
        $('body').append(html);
}
// 加载状态
function loading(y){
    y = y?y:100;
    return '<div class="height-'+y+' vertical-align text-center order-loader"><div class="loader vertical-align-middle loader-default"></div></div>';
}
// 头部提示栏
function conmtips(type,content){
    var html = '<div class="alert dark alert-'+type+' alert-dismissible padding-vertical-5 padding-horizontal-10 margin-bottom-0" style="border-radius:0px;">'+content+'</div>';
    $(".page.profile").prepend(html);
}
// 全局成功&错误
function success(info){
    alertify.success(info);
}
function error(info){
    alertify.error(info);
}
function logprompt(info){
    alertify.log(info);
}
/**
 * include 异步加载文件
 * @param  {String}   file 文件路径
 * @param  {function} fun  文件加载完成回调
 */
function include(file,fun){
    var files=typeof file=="string" ? [file]:file,
        fileallnum=typeof file=="string" ?1:files.length,
        filenum=0;
    for (var i=0; i < fileallnum; i++){
        var name=files[i].replace(/^\s|\s$/g,""),
            att=name.split('.'),
            ext=att[att.length - 1].toLowerCase().split('?');
        if (ext[0]=='js'){
            var filesi=document.createElement('script');
            filesi.src=name;
            filesi.type="text/javascript";
            if (typeof filesi !="undefined") document.getElementsByTagName('html')[0].appendChild(filesi);
        } else if (ext[0]=='css'){
            var filesi=document.createElement('link');
            filesi.href=name;
            filesi.type='text/css';
            filesi.rel="stylesheet";
            if (typeof filesi !="undefined") document.getElementsByTagName('head')[0].appendChild(filesi);
        }
        // 文件加载完成回调
        if (typeof fun==="function"){
            filesi.onload=filesi.onreadystatechange=function(){
                var r=filesi.readyState;
                if (!r || r==='loaded' || r==='complete'){
                    filenum++;
                    if(filenum==fileallnum){
                         filesi.onload=filesi.onreadystatechange=null;
                         fun();
                    }
                }
            };
        }
    }
}
// 生成随机数
function metrandom(){
    var high = 1, low = 1 ^ 0x49616E42;
    var shuffle = function(seed){
        high = seed;
        low = seed ^ 0x49616E42;
    }
    var a = new Date()-0
    shuffle(a);
    high = (high << 16) + (high >> 16);
    high += low;
        low += high;
    return high;
}
