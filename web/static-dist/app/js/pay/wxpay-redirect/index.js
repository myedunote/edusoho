/*! For license information please see index.js.LICENSE.txt */
!function(i){var s={};function e(o){if(s[o])return s[o].exports;var r=s[o]={i:o,l:!1,exports:{}};return i[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=i,e.c=s,e.d=function(i,s,o){e.o(i,s)||Object.defineProperty(i,s,{enumerable:!0,get:o})},e.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},e.t=function(i,s){if(1&s&&(i=e(i)),8&s)return i;if(4&s&&"object"==typeof i&&i&&i.__esModule)return i;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:i}),2&s&&"string"!=typeof i)for(var r in i)e.d(o,r,function(s){return i[s]}.bind(null,r));return o},e.n=function(i){var s=i&&i.__esModule?function(){return i.default}:function(){return i};return e.d(s,"a",s),s},e.o=function(i,s){return Object.prototype.hasOwnProperty.call(i,s)},e.p="/static-dist/",e(e.s=1104)}({1104:function(i,s,e){"use strict";e.r(s);var o=e(204),r=new(e.n(o).a)(navigator.userAgent),n=r.getBrowser();"iOS"===r.getOS().name&&"Mobile Safari"===n.name?document.getElementById("openApp").click():window.location.href=$("#jsWebViewPay").data("goto")},204:function(i,s,e){var o;!function(r,n){"use strict";var a="function",t="undefined",d="object",l="model",w="name",u="type",c="vendor",b="version",p="architecture",m="console",f="mobile",g="tablet",h="smarttv",v="wearable",x={extend:function(i,s){var e={};for(var o in i)s[o]&&s[o].length%2==0?e[o]=s[o].concat(i[o]):e[o]=i[o];return e},has:function(i,s){return"string"==typeof i&&-1!==s.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return"string"==typeof i?i.replace(/[^\d\.]/g,"").split(".")[0]:n},trim:function(i){return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},k={rgx:function(i,s){for(var e,o,r,t,l,w,u=0;u<s.length&&!l;){var c=s[u],b=s[u+1];for(e=o=0;e<c.length&&!l;)if(l=c[e++].exec(i))for(r=0;r<b.length;r++)w=l[++o],typeof(t=b[r])===d&&t.length>0?2==t.length?typeof t[1]==a?this[t[0]]=t[1].call(this,w):this[t[0]]=t[1]:3==t.length?typeof t[1]!==a||t[1].exec&&t[1].test?this[t[0]]=w?w.replace(t[1],t[2]):n:this[t[0]]=w?t[1].call(this,w,t[2]):n:4==t.length&&(this[t[0]]=w?t[3].call(this,w.replace(t[1],t[2])):n):this[t]=w||n;u+=2}},str:function(i,s){for(var e in s)if(typeof s[e]===d&&s[e].length>0){for(var o=0;o<s[e].length;o++)if(x.has(s[e][o],i))return"?"===e?n:e}else if(x.has(s[e],i))return"?"===e?n:e;return i}},y={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},S={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[w,b],[/(opios)[\/\s]+([\w\.]+)/i],[[w,"Opera Mini"],b],[/\s(opr)\/([\w\.]+)/i],[[w,"Opera"],b],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[w,b],[/(konqueror)\/([\w\.]+)/i],[[w,"Konqueror"],b],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[w,"IE"],b],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[w,"Edge"],b],[/(yabrowser)\/([\w\.]+)/i],[[w,"Yandex"],b],[/(Avast)\/([\w\.]+)/i],[[w,"Avast Secure Browser"],b],[/(AVG)\/([\w\.]+)/i],[[w,"AVG Secure Browser"],b],[/(puffin)\/([\w\.]+)/i],[[w,"Puffin"],b],[/(focus)\/([\w\.]+)/i],[[w,"Firefox Focus"],b],[/(opt)\/([\w\.]+)/i],[[w,"Opera Touch"],b],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[w,"UCBrowser"],b],[/(comodo_dragon)\/([\w\.]+)/i],[[w,/_/g," "],b],[/(windowswechat qbcore)\/([\w\.]+)/i],[[w,"WeChat(Win) Desktop"],b],[/(micromessenger)\/([\w\.]+)/i],[[w,"WeChat"],b],[/(brave)\/([\w\.]+)/i],[[w,"Brave"],b],[/(qqbrowserlite)\/([\w\.]+)/i],[w,b],[/(QQ)\/([\d\.]+)/i],[w,b],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[w,b],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[w,b],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[w,b],[/(MetaSr)[\/\s]?([\w\.]+)/i],[w],[/(LBBROWSER)/i],[w],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[b,[w,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[b,[w,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[w,b],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[b,[w,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[w,/(.+)/,"$1 WebView"],b],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[w,/(.+(?:g|us))(.+)/,"$1 $2"],b],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[b,[w,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[w,"Sailfish Browser"],b],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[w,b],[/(dolfin)\/([\w\.]+)/i],[[w,"Dolphin"],b],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[w,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[w,"Chrome"],b],[/(coast)\/([\w\.]+)/i],[[w,"Opera Coast"],b],[/fxios\/([\w\.-]+)/i],[b,[w,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[b,[w,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[b,w],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[w,"GSA"],b],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[w,[b,k.str,y.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[w,b],[/(navigator|netscape)\/([\w\.-]+)/i],[[w,"Netscape"],b],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[w,b]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,x.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[p,/ower/,"",x.lowerize]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[p,x.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[l,c,[u,g]],[/applecoremedia\/[\w\.]+ \((ipad)/],[l,[c,"Apple"],[u,g]],[/(apple\s{0,1}tv)/i],[[l,"Apple TV"],[c,"Apple"],[u,h]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[c,l,[u,g]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[l,[c,"Amazon"],[u,g]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[l,k.str,y.device.amazon.model],[c,"Amazon"],[u,f]],[/android.+aft([bms])\sbuild/i],[l,[c,"Amazon"],[u,h]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[l,c,[u,f]],[/\((ip[honed|\s\w*]+);/i],[l,[c,"Apple"],[u,f]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[c,l,[u,f]],[/\(bb10;\s(\w+)/i],[l,[c,"BlackBerry"],[u,f]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[l,[c,"Asus"],[u,g]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[c,"Sony"],[l,"Xperia Tablet"],[u,g]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[l,[c,"Sony"],[u,f]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[c,l,[u,m]],[/android.+;\s(shield)\sbuild/i],[l,[c,"Nvidia"],[u,m]],[/(playstation\s[34portablevi]+)/i],[l,[c,"Sony"],[u,m]],[/(sprint\s(\w+))/i],[[c,k.str,y.device.sprint.vendor],[l,k.str,y.device.sprint.model],[u,f]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[c,[l,/_/g," "],[u,f]],[/(nexus\s9)/i],[l,[c,"HTC"],[u,g]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],[l,[c,"Huawei"],[u,f]],[/android.+(bah2?-a?[lw]\d{2})/i],[l,[c,"Huawei"],[u,g]],[/(microsoft);\s(lumia[\s\w]+)/i],[c,l,[u,f]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[l,[c,"Microsoft"],[u,m]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[c,"Microsoft"],[u,f]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[l,[c,"Motorola"],[u,f]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[l,[c,"Motorola"],[u,g]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[c,x.trim],[l,x.trim],[u,h]],[/hbbtv.+maple;(\d+)/i],[[l,/^/,"SmartTV"],[c,"Samsung"],[u,h]],[/\(dtv[\);].+(aquos)/i],[l,[c,"Sharp"],[u,h]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[c,"Samsung"],l,[u,g]],[/smart-tv.+(samsung)/i],[c,[u,h],l],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[c,"Samsung"],l,[u,f]],[/sie-(\w*)/i],[l,[c,"Siemens"],[u,f]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[c,"Nokia"],l,[u,f]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[l,[c,"Acer"],[u,g]],[/android.+([vl]k\-?\d{3})\s+build/i],[l,[c,"LG"],[u,g]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[c,"LG"],l,[u,g]],[/(lg) netcast\.tv/i],[c,l,[u,h]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[l,[c,"LG"],[u,f]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[c,l,[u,g]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[l,[c,"Lenovo"],[u,g]],[/(lenovo)[_\s-]?([\w-]+)/i],[c,l,[u,f]],[/linux;.+((jolla));/i],[c,l,[u,f]],[/((pebble))app\/[\d\.]+\s/i],[c,l,[u,v]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[c,l,[u,f]],[/crkey/i],[[l,"Chromecast"],[c,"Google"],[u,h]],[/android.+;\s(glass)\s\d/i],[l,[c,"Google"],[u,v]],[/android.+;\s(pixel c)[\s)]/i],[l,[c,"Google"],[u,g]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[l,[c,"Google"],[u,f]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[l,/_/g," "],[c,"Xiaomi"],[u,f]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[l,/_/g," "],[c,"Xiaomi"],[u,g]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[l,[c,"Meizu"],[u,f]],[/(mz)-([\w-]{2,})/i],[[c,"Meizu"],l,[u,f]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[l,[c,"OnePlus"],[u,f]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[l,[c,"RCA"],[u,g]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[l,[c,"Dell"],[u,g]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[l,[c,"Verizon"],[u,g]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[c,"Barnes & Noble"],l,[u,g]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[l,[c,"NuVision"],[u,g]],[/android.+;\s(k88)\sbuild/i],[l,[c,"ZTE"],[u,g]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[l,[c,"Swiss"],[u,f]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[l,[c,"Swiss"],[u,g]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[l,[c,"Zeki"],[u,g]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[c,"Dragon Touch"],l,[u,g]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[l,[c,"Insignia"],[u,g]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[l,[c,"NextBook"],[u,g]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[c,"Voice"],l,[u,f]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[c,"LvTel"],l,[u,f]],[/android.+;\s(PH-1)\s/i],[l,[c,"Essential"],[u,f]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[l,[c,"Envizen"],[u,g]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[c,l,[u,g]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[l,[c,"MachSpeed"],[u,g]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[c,l,[u,g]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[l,[c,"Rotor"],[u,g]],[/android.+(KS(.+))\s+build/i],[l,[c,"Amazon"],[u,g]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[c,l,[u,g]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[u,x.lowerize],c,l],[/[\s\/\(](smart-?tv)[;\)]/i],[[u,h]],[/(android[\w\.\s\-]{0,9});.+build/i],[l,[c,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[b,[w,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[b,[w,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[w,b],[/rv\:([\w\.]{1,9}).+(gecko)/i],[b,w]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[w,b],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[w,[b,k.str,y.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[w,"Windows"],[b,k.str,y.os.windows.version]],[/\((bb)(10);/i],[[w,"BlackBerry"],b],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[w,b],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[w,"Symbian"],b],[/\((series40);/i],[w],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[w,"Firefox OS"],b],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[w,b],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[w,"Chromium OS"],b],[/(sunos)\s?([\w\.\d]*)/i],[[w,"Solaris"],b],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[w,b],[/(haiku)\s(\w+)/i],[w,b],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[b,/_/g,"."],[w,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[w,"Mac OS"],[b,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[w,b]]},T=function(i,s){if("object"==typeof i&&(s=i,i=n),!(this instanceof T))return new T(i,s).getResult();var e=i||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),o=s?x.extend(S,s):S;return this.getBrowser=function(){var i={name:n,version:n};return k.rgx.call(i,e,o.browser),i.major=x.major(i.version),i},this.getCPU=function(){var i={architecture:n};return k.rgx.call(i,e,o.cpu),i},this.getDevice=function(){var i={vendor:n,model:n,type:n};return k.rgx.call(i,e,o.device),i},this.getEngine=function(){var i={name:n,version:n};return k.rgx.call(i,e,o.engine),i},this.getOS=function(){var i={name:n,version:n};return k.rgx.call(i,e,o.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return e},this.setUA=function(i){return e=i,this},this};T.VERSION="0.7.21",T.BROWSER={NAME:w,MAJOR:"major",VERSION:b},T.CPU={ARCHITECTURE:p},T.DEVICE={MODEL:l,VENDOR:c,TYPE:u,CONSOLE:m,MOBILE:f,SMARTTV:h,TABLET:g,WEARABLE:v,EMBEDDED:"embedded"},T.ENGINE={NAME:w,VERSION:b},T.OS={NAME:w,VERSION:b},typeof s!==t?(typeof i!==t&&i.exports&&(s=i.exports=T),s.UAParser=T):(o=function(){return T}.call(s,e,s,i))===n||(i.exports=o);var A=r&&(r.jQuery||r.Zepto);if(A&&!A.ua){var E=new T;A.ua=E.getResult(),A.ua.get=function(){return E.getUA()},A.ua.set=function(i){E.setUA(i);var s=E.getResult();for(var e in s)A.ua[e]=s[e]}}}("object"==typeof window?window:this)}});