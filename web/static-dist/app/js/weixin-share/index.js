!function(e){var n={};function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(t,o,function(n){return e[n]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/static-dist/",i(i.s=1521)}({1521:function(e,n,i){"use strict";i.r(n);var t=i(162),o=i.n(t),r=$(".jweixin-data");o.a.config(r.data("config")),o.a.ready((function(){o.a.onMenuShareTimeline({title:r.data("title"),link:r.data("link"),imgUrl:r.data("imgUrl")}),o.a.onMenuShareAppMessage({title:r.data("title"),desc:r.data("desc"),link:r.data("link"),imgUrl:r.data("imgUrl"),type:"",dataUrl:""}),o.a.onMenuShareQQ({title:r.data("title"),desc:r.data("desc"),link:r.data("link"),imgUrl:r.data("imgUrl")}),o.a.onMenuShareQZone({title:r.data("title"),desc:r.data("desc"),link:r.data("link"),imgUrl:r.data("imgUrl")})}))},162:function(e,n){var i;i=window,e.exports=function(e,n){if(!e.jWeixin){var i,t={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},o=function(){var e={};for(var n in t)e[t[n]]=n;return e}(),r=e.document,a=r.title,c=navigator.userAgent.toLowerCase(),s=navigator.platform.toLowerCase(),d=!(!s.match("mac")&&!s.match("win")),l=-1!=c.indexOf("wxdebugger"),u=-1!=c.indexOf("micromessenger"),p=-1!=c.indexOf("android"),f=-1!=c.indexOf("iphone")||-1!=c.indexOf("ipad"),g=(i=c.match(/micromessenger\/(\d+\.\d+\.\d+)/)||c.match(/micromessenger\/(\d+\.\d+)/))?i[1]:"",m={initStartTime:O(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},h={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:f?1:p?2:-1,clientVersion:g,url:encodeURIComponent(location.href)},v={},S={_completes:[]},y={state:0,data:{}};B((function(){m.initEndTime=O()}));var I=!1,_=[],k={config:function(n){C("config",v=n);var i=!1!==v.check;B((function(){if(i)M(t.config,{verifyJsApiList:b(v.jsApiList),verifyOpenTagList:b(v.openTagList)},function(){S._complete=function(e){m.preVerifyEndTime=O(),y.state=1,y.data=e},S.success=function(e){h.isPreVerifyOk=0},S.fail=function(e){S._fail?S._fail(e):y.state=-1};var e=S._completes;return e.push((function(){!function(){if(!(d||l||v.debug||g<"6.0.2"||h.systemType<0)){var e=new Image;h.appId=v.appId,h.initTime=m.initEndTime-m.initStartTime,h.preVerifyTime=m.preVerifyEndTime-m.preVerifyStartTime,k.getNetworkType({isInnerInvoke:!0,success:function(n){h.networkType=n.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+h.version+"&o="+h.isPreVerifyOk+"&s="+h.systemType+"&c="+h.clientVersion+"&a="+h.appId+"&n="+h.networkType+"&i="+h.initTime+"&p="+h.preVerifyTime+"&u="+h.url;e.src=i}})}}()})),S.complete=function(n){for(var i=0,t=e.length;i<t;++i)e[i]();S._completes=[]},S}()),m.preVerifyStartTime=O();else{y.state=1;for(var e=S._completes,n=0,o=e.length;n<o;++n)e[n]();S._completes=[]}})),k.invoke||(k.invoke=function(n,i,t){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,P(i),t)},k.on=function(n,i){e.WeixinJSBridge&&WeixinJSBridge.on(n,i)})},ready:function(e){0!=y.state?e():(S._completes.push(e),!u&&v.debug&&e())},error:function(e){g<"6.0.2"||(-1==y.state?e(y.data):S._fail=e)},checkJsApi:function(e){M("checkJsApi",{jsApiList:b(e.jsApiList)},(e._complete=function(e){if(p){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var i in n){var t=o[i];t&&(n[t]=n[i],delete n[i])}return e}(e)},e))},onMenuShareTimeline:function(e){x(t.onMenuShareTimeline,{complete:function(){M("shareTimeline",{title:e.title||a,desc:e.title||a,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){x(t.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?M("sendAppMessage",{title:e.title||a,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):M("sendAppMessage",{title:e.title||a,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){x(t.onMenuShareQQ,{complete:function(){M("shareQQ",{title:e.title||a,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){x(t.onMenuShareWeibo,{complete:function(){M("shareWeiboApp",{title:e.title||a,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){x(t.onMenuShareQZone,{complete:function(){M("shareQZone",{title:e.title||a,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){M("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){M("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){M("startRecord",{},e)},stopRecord:function(e){M("stopRecord",{},e)},onVoiceRecordEnd:function(e){x("onVoiceRecordEnd",e)},playVoice:function(e){M("playVoice",{localId:e.localId},e)},pauseVoice:function(e){M("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){M("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){x("onVoicePlayEnd",e)},uploadVoice:function(e){M("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){M("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){M("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){M("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(p){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){M(t.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){M("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){M("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===I?(I=!0,M("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(I=!1,0<_.length){var n=_.shift();wx.getLocalImgData(n)}},e))):_.push(e)},getNetworkType:function(e){M("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var t=n.indexOf(":"),o=n.substring(t+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){M("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){M(t.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){M("hideOptionMenu",{},e)},showOptionMenu:function(e){M("showOptionMenu",{},e)},closeWindow:function(e){M("closeWindow",{},e=e||{})},hideMenuItems:function(e){M("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){M("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){M("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){M("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){M("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(f){var n=e.resultStr;if(n){var i=JSON.parse(n);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openAddress:function(e){M(t.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))},openProductSpecificView:function(e){M(t.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var n=e.cardList,i=[],o=0,r=n.length;o<r;++o){var a=n[o],c={card_id:a.cardId,card_ext:a.cardExt};i.push(c)}M(t.addCard,{card_list:i},(e._complete=function(e){var n=e.card_list;if(n){for(var i=0,t=(n=JSON.parse(n)).length;i<t;++i){var o=n[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e))},chooseCard:function(e){M("chooseCard",{app_id:v.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var n=e.cardList,i=[],o=0,r=n.length;o<r;++o){var a=n[o],c={card_id:a.cardId,code:a.code};i.push(c)}M(t.openCard,{card_list:i},e)},consumeAndShareCard:function(e){M(t.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){M(t.chooseWXPay,V(e),e)},openEnterpriseRedPacket:function(e){M(t.openEnterpriseRedPacket,V(e),e)},startSearchBeacons:function(e){M(t.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){M(t.stopSearchBeacons,{},e)},onSearchBeacons:function(e){x(t.onSearchBeacons,e)},openEnterpriseChat:function(e){M("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){M("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var n=e.split("?")[0],i=e.split("?")[1];return n+=".html",void 0!==i?n+"?"+i:n}}(e.path),envVersion:e.envVersion},e)},openBusinessView:function(e){M("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(p){var n=e.extraData;if(n)try{e.extraData=JSON.parse(n)}catch(n){e.extraData={}}}},e))},miniProgram:{navigateBack:function(e){e=e||{},B((function(){M("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){B((function(){M("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){B((function(){M("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){B((function(){M("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){B((function(){M("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){B((function(){M("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(n){B((function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}},w=1,T={};return r.addEventListener("error",(function(e){if(!p){var n=e.target,i=n.tagName,t=n.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=t.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=n["wx-id"];if(o||(o=w++,n["wx-id"]=o),T[o])return;T[o]=!0,wx.ready((function(){wx.getLocalImgData({localId:t,success:function(e){n.src=e.localData}})}))}}}),!0),r.addEventListener("load",(function(e){if(!p){var n=e.target,i=n.tagName;if(n.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var t=n["wx-id"];t&&(T[t]=!1)}}}),!0),n&&(e.wx=e.jWeixin=k),k}function M(n,i,t){e.WeixinJSBridge?WeixinJSBridge.invoke(n,P(i),(function(e){A(n,e,t)})):C(n,t)}function x(n,i,t){e.WeixinJSBridge?WeixinJSBridge.on(n,(function(e){t&&t.trigger&&t.trigger(e),A(n,e,i)})):C(n,t||i)}function P(e){return(e=e||{}).appId=v.appId,e.verifyAppId=v.appId,e.verifySignType="sha1",e.verifyTimestamp=v.timestamp+"",e.verifyNonceStr=v.nonceStr,e.verifySignature=v.signature,e}function V(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function A(e,n,i){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var t=n.errMsg;t||(t=n.err_msg,delete n.err_msg,t=function(e,n){var i=e,t=o[i];t&&(i=t);var r="ok";if(n){var a=n.indexOf(":");"confirm"==(r=n.substring(a+1))&&(r="ok"),"failed"==r&&(r="fail"),-1!=r.indexOf("failed_")&&(r=r.substring(7)),-1!=r.indexOf("fail_")&&(r=r.substring(5)),"access denied"!=(r=(r=r.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=r||(r="permission denied"),"config"==i&&"function not exist"==r&&(r="ok"),""==r&&(r="fail")}return i+":"+r}(e,t),n.errMsg=t),(i=i||{})._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",v.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n));var r=t.indexOf(":");switch(t.substring(r+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function b(e){if(e){for(var n=0,i=e.length;n<i;++n){var o=e[n],r=t[o];r&&(e[n]=r)}return e}}function C(e,n){if(!(!v.debug||n&&n.isInnerInvoke)){var i=o[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function O(){return(new Date).getTime()}function B(n){u&&(e.WeixinJSBridge?n():r.addEventListener&&r.addEventListener("WeixinJSBridgeReady",n,!1))}}(i)}});