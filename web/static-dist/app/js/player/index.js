/*! For license information please see index.js.LICENSE.txt */
!function(e){function i(i){for(var s,r,a=i[0],l=i[1],u=i[2],c=0,p=[];c<a.length;c++)r=a[c],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);for(d&&d(i);p.length;)p.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var e,i=0;i<o.length;i++){for(var t=o[i],s=!0,a=1;a<t.length;a++){var l=t[a];0!==n[l]&&(s=!1)}s&&(o.splice(i--,1),e=r(r.s=t[0]))}return e}var s={},n={333:0},o=[];function r(i){if(s[i])return s[i].exports;var t=s[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=s,r.d=function(e,i,t){r.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,i){if(1&i&&(e=r(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var s in e)r.d(t,s,function(i){return e[i]}.bind(null,s));return t},r.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(i,"a",i),i},r.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},r.p="/static-dist/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=i,a=a.slice();for(var u=0;u<a.length;u++)i(a[u]);var d=l;o.push([1599,0]),t()}({113:function(e,i,t){"use strict";var s=t(26),n=t.n(s),o=t(4),r=t.n(o),a=t(5),l=t.n(a),u=(t(115),function(){function e(){r()(this,e)}return l()(e,null,[{key:"set",value:function(e,i,t){var s=store.get("durations",{});s&&s instanceof Array||(s=new Array);var n=e+"-"+i+":"+t;s.length>0&&s.slice(s.length-1,s.length)[0].indexOf(e+"-"+i)>-1&&s.splice(s.length-1,s.length),s.length>=20&&s.shift(),s.push(n),store.set("durations",s)}},{key:"get",value:function(e,i){var t=store.get("durations",{});if(t)for(var s=0;s<t.length;s++){if(t[s].indexOf(e+"-"+i)>-1){var o=t[s];return n()(o.split(":")[1])}}return 0}},{key:"del",value:function(e,i){var t=store.get("durations");if(t){for(var s=0;s<t.length;s++){t[s].indexOf(e+"-"+i)>-1&&t.splice(s,1)}store.set("durations",t)}}}]),e}());i.a=u},1599:function(e,i,t){"use strict";t.r(i);var s=t(12),n=t.n(s),o=t(20),r=t.n(o),a=t(22),l=t.n(a),u=t(14),d=t.n(u),c=t(4),p=t.n(c),m=t(5),h=t.n(m),f=t(7),w=t.n(f),b=t(18),y=t.n(b),g=t(19),v=t.n(g),k=t(13),T=t.n(k),x=t(87),P=t.n(x),S=t(57),C=t.n(S),M=(t(383),t(384),t(104)),I=t.n(M);function E(e){var i=function(){if("undefined"==typeof Reflect||!w.a)return!1;if(w.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(w()(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=T()(e);if(i){var n=T()(this).constructor;t=w()(s,arguments,n)}else t=s.apply(this,arguments);return v()(this,t)}}var _=function(e){y()(t,e);var i=E(t);function t(e){var s;return p()(this,t),(s=i.call(this)).options=e,s.player={},s.setup(),s}return h()(t,[{key:"setup",value:function(){var e=$('[name="task-result-status"]',window.parent.document).val(),i=$('[name="mode"]',window.parent.document).val(),t=$("#video-content").data("finishType"),s=$("#video-content").data("finishData"),n=("start"===e||"none"===e)&&"learn"===i&&"end"===t&&s,o=n?"forward":"none";console.log(o);this.options.element;var r=this,a={};if(r.options.resNo&&(a=l()(a,{resNo:r.options.resNo})),r.options.token&&(a=l()(a,{token:r.options.token})),r.options.watermark&&(a=l()(a,{watermark:{file:r.options.watermark,pos:"top.right",xrepeat:0,opacity:.5}})),r.options.fingerprint&&(a=l()(a,{fingerprint:{html:r.options.fingerprint,duration:r.options.fingerprintTime}})),r.options.timelimit&&(a=l()(a,{pluck:{timelimit:r.options.timelimit,text:Translator.trans("activity.video.try_watch_finish_hint"),display:!0}})),!n&&r.options.enablePlaybackRates&&(a=l()(a,{playbackRates:["0.75","1.0","1.25","1.5","2.0","3.0"]})),r.options.videoH5&&(a=l()(a,{h5:!0})),r.options.playerType&&(a=l()(a,{playerType:r.options.playerType})),r.options.controlBar&&(a=l()(a,{controlBar:r.options.controlBar})),r.options.user){var u=r.options.user;a=l()(a,{user:{accesskey:u.accesskey,globalId:u.globalId,id:u.id,name:u.name}})}var d=!(!r.options.customPos||!r.options.rememberLastPos),c="zh_CN"==document.documentElement.lang?"zh-CN":document.documentElement.lang;r.options.customPos=r.options.customPos.toString(),a=l()(a,{id:$(r.options.element).attr("id"),sdkBaseUri:app.cloudSdkBaseUri,disableDataUpload:app.cloudDisableLogReport,disableSentry:app.cloudDisableLogReport,disableControlBar:r.options.disableControlBar,disableProgressBar:r.options.disableProgressBar,disableFullscreen:r.options.disableFullscreen,disableSeek:o,playlist:r.options.url,rememberLastPos:d,initPos:r.options.customPos,autoplay:r.options.autoplay,strictMode:!r.options.strictMode,language:c}),console.log(a);var p=new QiQiuYun.Player(a);p.on("ready",(function(e){r.emit("ready",e)})),p.on("timeupdate",(function(e){r.currentTime=e.currentTime,r.duration=e.duration,r.emit("timechange",e)})),p.on("firstplay",(function(e){p.setCurrentTime(r.options.customPos)})),p.on("unableConfirm",(function(e){$(".js-back-link",parent.document)[0].click()})),p.on("ended",(function(e){var i={mode:r.playMode,currentTime:r.currentTime,duration:r.duration};r.emit("ended",i)})),p.on("playing",(function(e){r.emit("playing",e)})),p.on("paused",(function(e){r.emit("paused",e)})),p.on("exam.answered",(function(e){e.type=r.convertQuestionType(e.type,"cloud"),r.emit("answered",e)})),p.on("requestFullscreen",(function(e){r.emit("requestFullscreen",e)})),this.player=p,this._registerChannel()}},{key:"play",value:function(){this.player.play()}},{key:"pause",value:function(){this.player.pause()}},{key:"getCurrentTime",value:function(){return this.player.getCurrentTime()}},{key:"setCurrentTime",value:function(e){return this.player.setCurrentTime(e),this}},{key:"replay",value:function(){return this.setCurrentTime(0).play(),this}},{key:"isPlaying",value:function(){return!(!this.player||!this.player.paused)&&!this.player.paused()}},{key:"setQuestions",value:function(e){if(e.length>0){for(var i in e)e[i].type=this.convertQuestionType(e[i].type,"es");var t={popupExam:{config:{mode:"middle"},questions:e}};this.player.setExams(t)}return this}},{key:"convertQuestionType",value:function(e,i){var t=[{es:"choice",cloud:"multiChoice"},{es:"single_choice",cloud:"choice"},{es:"determine",cloud:"judge"},{es:"fill",cloud:"completion"},{es:"uncertain_choice",cloud:"uncertainChoice"}];for(var s in t){if("es"==i&&t[s].es==e)return t[s].cloud;if("cloud"==i&&t[s].cloud==e)return t[s].es}return e}},{key:"_registerChannel",value:function(){var e=this;return C.a.instanceId("task"),C.a.fedx.addFilter([{channel:"task-events",topic:"monitoringEvent",direction:"in"}]),C.a.subscribe({channel:"task-events",topic:"monitoringEvent",callback:function(i){I.a.isFullscreen&&I.a.exit(),"pause"===i?e.pause():"play"===i&&e.play()}}),this}}]),t}(P.a);function N(e){var i=function(){if("undefined"==typeof Reflect||!w.a)return!1;if(w.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(w()(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=T()(e);if(i){var n=T()(this).constructor;t=w()(s,arguments,n)}else t=s.apply(this,arguments);return v()(this,t)}}var A=function(e){y()(t,e);var i=N(t);function t(e){var s;return p()(this,t),(s=i.call(this)).options=e,s.playMode="sequence",s.player={},s.setup(),s.duration=0,s.currentTime=0,s}return h()(t,[{key:"setup",value:function(){this.options.element;var e=this,i={};if(e.options.enablePlaybackRates&&(i=l()(i,{playbackRates:["0.8","1.0","1.25","1.5","2.0"]})),e.options.resNo&&(i=l()(i,{resNo:e.options.resNo})),e.options.token&&(i=l()(i,{token:e.options.token})),e.options.user){var t=e.options.user;i=l()(i,{user:{accesskey:t.accesskey,globalId:t.globalId,id:t.id,name:t.name}})}var s="zh_CN"==document.documentElement.lang?"zh-CN":document.documentElement.lang,n=e.options.customPos<e.options.mediaLength;n&&e.options.customPos?e.options.customPos=e.options.customPos.toString():e.options.customPos?e.options.customPos="0":e.options.customPos=0,i=l()(i,{id:"lesson-player",playlist:e.options.url,audioDocMode:{template:e.options.content,sequentialMode:!0},autoplay:!0,initPos:e.options.customPos,disableModeSelection:e.options.disableModeSelection,rememberLastPos:n,language:s});var o=new QiQiuYun.Player(i);o.on("ready",(function(i){e.emit("ready",i)})),o.on("firstplay",(function(i){o.setCurrentTime(e.options.customPos)})),o.on("timeupdate",(function(i){e.currentTime=i.currentTime,e.duration=i.duration,e.emit("timechange",i)})),o.on("modeChanged",(function(i){e.playMode=i.data.mode})),o.on("ended",(function(i){var t={mode:e.playMode,currentTime:e.currentTime,duration:e.duration};e.emit("ended",t)})),o.on("playing",(function(i){e.emit("playing",i)})),o.on("paused",(function(i){e.emit("paused",i)})),this.player=o,this._registerChannel()}},{key:"play",value:function(){this.player.play()}},{key:"pause",value:function(){this.player.pause()}},{key:"getCurrentTime",value:function(){return this.player.getCurrentTime()}},{key:"setCurrentTime",value:function(e){return this.player.setCurrentTime(e),this}},{key:"replay",value:function(){return this.setCurrentTime(0).play(),this}},{key:"isPlaying",value:function(){return!(!this.player||!this.player.paused)&&!this.player.paused()}},{key:"_registerChannel",value:function(){var e=this;return C.a.instanceId("task"),C.a.fedx.addFilter([{channel:"task-events",topic:"monitoringEvent",direction:"in"}]),C.a.subscribe({channel:"task-events",topic:"monitoringEvent",callback:function(i){"pause"===i?e.pause():"play"===i&&e.play()}}),this}}]),t}(P.a),B=function(){function e(){p()(this,e)}return h()(e,null,[{key:"create",value:function(e,i){switch(e){case"local-video-player":return new _(i);case"audio-player":return new A(i);case"balloon-cloud-video-player":return new _(i)}}}]),e}(),L=t(158),O=t(113),R=t(244),j=t.n(R);new(function(){function e(i){p()(this,e);var t=$(i);this.htmlDom=$(i),this.content=t.data("content"),this.userId=t.data("userId"),this.userName=t.data("userName"),this.fileId=t.data("fileId"),this.fileGlobalId=t.data("fileGlobalId"),this.courseId=t.data("courseId"),this.lessonId=t.data("lessonId"),this.timelimit=t.data("timelimit"),this.token=t.data("token"),this.fileType=t.data("fileType"),this.fileLength=t.data("fileLength"),this.enablePlaybackRates=t.data("enablePlaybackRates"),this.videoH5=t.data("videoH5"),this.watermark=t.data("watermark"),this.accesskey=t.data("accessKey"),this.fingerprint=t.data("fingerprint"),this.fingerprintSrc=t.data("fingerprintSrc"),this.fingerprintTime=t.data("fingerprintTime"),this.jsPlayer=t.data("jsPlayer"),this.markerUrl=t.data("markerurl"),this.finishQuestionMarkerUrl=t.data("finishQuestionMarkerUrl"),this.starttime=t.data("starttime"),this.agentInWhiteList=t.data("agentInWhiteList"),this.disableVolumeButton=t.data("disableVolumeButton"),this.disablePlaybackButton=t.data("disablePlaybackButton"),this.disableModeSelection=t.data("disableModeSelection"),this.disableResolutionSwitcher=t.data("disableResolutionSwitcher"),this.subtitles=t.data("subtitles"),this.autoplay=t.data("autoplay"),this.rememberLastPos=t.data("rememberLastPos"),this.isHlsPlus=t.data("is-hls-plus");var s=$(window.parent.document.getElementById("task-content-iframe"));if(s.length>0){var n=d()(s.data("lastLearnTime"))+1;n=d()(this.fileLength)+d()(s.data("videoHeaderLength"))<=n?0:n,O.a.del(this.userId,this.fileId),O.a.set(this.userId,this.fileId,n)}this.lastLearnTime=O.a.get(this.userId,this.fileId),this.strictMode=t.data("strict"),this.url=t.data("url"),this.fileStorage=t.data("fileStorage"),this.allowedBrowse=t.data("allowedBrowse"),this.securityVideoPlayer=t.data("securityVideoPlayer"),this.initView(),this.initEvent()}var i;return h()(e,[{key:"initView",value:function(){var e="";"video"==this.fileType?e+='<div id="lesson-player" style="width: 100%;height: 100%;"></div>':"audio"==this.fileType&&(e+='<div id="lesson-player" style="width: 100%;height: 100%;" class="video-js vjs-default-skin" controls preload="auto"></audio>'),this.htmlDom.html(e),this.htmlDom.show()}},{key:"initPlayer",value:function(){var e=d()(this.lastLearnTime)?d()(this.lastLearnTime):0,i=new j.a,t={element:"#lesson-player",content:this.content,mediaType:this.fileType,fingerprint:this.fingerprint,fingerprintSrc:this.fingerprintSrc,fingerprintTime:this.fingerprintTime,watermark:this.watermark,starttime:this.starttime,agentInWhiteList:this.agentInWhiteList,timelimit:this.timelimit,enablePlaybackRates:this.enablePlaybackRates,disableModeSelection:this.disableModeSelection,disableFullscreen:1==this.isHlsPlus&&["mobile","tablet"].indexOf(i.getDevice().type)>-1,videoH5:this.videoH5,controlBar:{disableVolumeButton:this.disableVolumeButton,disablePlaybackButton:this.disablePlaybackButton,disableResolutionSwitcher:this.disableResolutionSwitcher},user:{accesskey:this.accesskey,globalId:this.fileGlobalId,id:this.userId,name:this.userName},textTrack:this.transToTextrack(this.subtitles),autoplay:this.autoplay,customPos:e,mediaLength:this.fileLength,strictMode:this.strictMode,rememberLastPos:this.rememberLastPos};return t="local"===this.fileStorage?l()(t,{url:this.url}):l()(t,{resNo:this.fileGlobalId,token:this.token}),window.player=B.create(this.jsPlayer,t)}},{key:"transToTextrack",value:function(e){var i=[];if(e)for(var t in e){var s={label:e[t].name,src:e[t].url,default:"default"in e[t]&&e[t].default};i.push(s)}for(var n in i){if(i[n].default)return;i[0].default=!0}return i}},{key:"initMesseger",value:function(){return new L.a({name:"parent",project:"PlayerProject",type:"child"})}},{key:"isCloudVideoPalyer",value:function(){return"balloon-cloud-video-player"==this.jsPlayer}},{key:"isCloudAudioPlayer",value:function(){return"audio-player"==this.jsPlayer}},{key:"initEvent",value:(i=r()(n.a.mark((function e(){var i,t,s=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.ajax({url:"/api/settings/course",headers:{Accept:"application/vnd.edusoho.v2+json"}});case 2:if(1!==e.sent.only_learning_on_APP){e.next=7;break}return cd.confirm({title:Translator.trans("activity.video.only_can_app_title"),content:Translator.trans("activity.video.only_can_app_desc"),okText:Translator.trans("site.confirm"),cancelText:!1}).on("ok",(function(){$(".js-back-link",window.parent.document)[0].click()})),e.abrupt("return");case 7:i=this.initPlayer(),t=this.initMesseger(),i.on("ready",(function(){if(t.sendToParent("ready",{pause:!0,currentTime:i.getCurrentTime()}),!s.isCloudVideoPalyer()&&!s.isCloudAudioPlayer()){var e=O.a.get(s.userId,s.fileId);e>0&&i.setCurrentTime(e),i.play()}if(s.isCloudVideoPalyer()&&s.markerUrl){var n=window.location.href.indexOf("preview=1")>0?1:0;$.getJSON(s.markerUrl,{isPreview:n},(function(e){i.setQuestions(e)}))}})),i.on("answered",(function(e){var i=/course\/(\d+)\/task\/(\d+)\//.exec(window.location.href);i&&$.post(s.finishQuestionMarkerUrl,{questionMarkerId:e.questionMarkerId,answer:e.userAnswers,type:e.type,courseId:i[1],taskId:i[2]},(function(e){}))})),i.on("timechange",(function(e){t.sendToParent("timechange",{pause:!0,currentTime:i.getCurrentTime()}),(s.isCloudVideoPalyer()||s.isCloudAudioPlayer()||d()(i.getCurrentTime())!=d()(i.getDuration()))&&(O.a.del(s.userId,s.fileId),O.a.set(s.userId,s.fileId,i.getCurrentTime()))})),i.on("paused",(function(){t.sendToParent("paused",{pause:!0,currentTime:i.getCurrentTime()})})),i.on("playing",(function(){t.sendToParent("playing",{pause:!1,currentTime:i.getCurrentTime()})})),i.on("ended",(function(e){t.sendToParent("ended",{stop:!0,playerMsg:e}),s.isCloudVideoPalyer()||s.isCloudAudioPlayer()||O.a.del(s.userId,s.fileId)})),i.on("requestFullscreen",(function(e){t.sendToParent("requestFullscreen",e)}));case 16:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})}]),e}())("#lesson-video-content")},244:function(e,i,t){var s;!function(n,o){"use strict";var r="function",a="undefined",l="object",u="model",d="name",c="type",p="vendor",m="version",h="architecture",f="console",w="mobile",b="tablet",y="smarttv",g="wearable",v={extend:function(e,i){var t={};for(var s in e)i[s]&&i[s].length%2==0?t[s]=i[s].concat(e[s]):t[s]=e[s];return t},has:function(e,i){return"string"==typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"==typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:o},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},k={rgx:function(e,i){for(var t,s,n,a,u,d,c=0;c<i.length&&!u;){var p=i[c],m=i[c+1];for(t=s=0;t<p.length&&!u;)if(u=p[t++].exec(e))for(n=0;n<m.length;n++)d=u[++s],typeof(a=m[n])===l&&a.length>0?2==a.length?typeof a[1]==r?this[a[0]]=a[1].call(this,d):this[a[0]]=a[1]:3==a.length?typeof a[1]!==r||a[1].exec&&a[1].test?this[a[0]]=d?d.replace(a[1],a[2]):o:this[a[0]]=d?a[1].call(this,d,a[2]):o:4==a.length&&(this[a[0]]=d?a[3].call(this,d.replace(a[1],a[2])):o):this[a]=d||o;c+=2}},str:function(e,i){for(var t in i)if(typeof i[t]===l&&i[t].length>0){for(var s=0;s<i[t].length;s++)if(v.has(i[t][s],e))return"?"===t?o:t}else if(v.has(i[t],e))return"?"===t?o:t;return e}},T={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},x={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[d,m],[/(opios)[\/\s]+([\w\.]+)/i],[[d,"Opera Mini"],m],[/\s(opr)\/([\w\.]+)/i],[[d,"Opera"],m],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[d,m],[/(konqueror)\/([\w\.]+)/i],[[d,"Konqueror"],m],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[d,"IE"],m],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[d,"Edge"],m],[/(yabrowser)\/([\w\.]+)/i],[[d,"Yandex"],m],[/(Avast)\/([\w\.]+)/i],[[d,"Avast Secure Browser"],m],[/(AVG)\/([\w\.]+)/i],[[d,"AVG Secure Browser"],m],[/(puffin)\/([\w\.]+)/i],[[d,"Puffin"],m],[/(focus)\/([\w\.]+)/i],[[d,"Firefox Focus"],m],[/(opt)\/([\w\.]+)/i],[[d,"Opera Touch"],m],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[d,"UCBrowser"],m],[/(comodo_dragon)\/([\w\.]+)/i],[[d,/_/g," "],m],[/(windowswechat qbcore)\/([\w\.]+)/i],[[d,"WeChat(Win) Desktop"],m],[/(micromessenger)\/([\w\.]+)/i],[[d,"WeChat"],m],[/(brave)\/([\w\.]+)/i],[[d,"Brave"],m],[/(qqbrowserlite)\/([\w\.]+)/i],[d,m],[/(QQ)\/([\d\.]+)/i],[d,m],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[d,m],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[d,m],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[d,m],[/(MetaSr)[\/\s]?([\w\.]+)/i],[d],[/(LBBROWSER)/i],[d],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[m,[d,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[m,[d,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[d,m],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[m,[d,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[d,/(.+)/,"$1 WebView"],m],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[d,/(.+(?:g|us))(.+)/,"$1 $2"],m],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[m,[d,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[d,"Sailfish Browser"],m],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[d,m],[/(dolfin)\/([\w\.]+)/i],[[d,"Dolphin"],m],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[d,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[d,"Chrome"],m],[/(coast)\/([\w\.]+)/i],[[d,"Opera Coast"],m],[/fxios\/([\w\.-]+)/i],[m,[d,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[m,[d,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[m,d],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[d,"GSA"],m],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[d,[m,k.str,T.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[d,m],[/(navigator|netscape)\/([\w\.-]+)/i],[[d,"Netscape"],m],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[d,m]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[h,"amd64"]],[/(ia32(?=;))/i],[[h,v.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[h,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[h,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[h,/ower/,"",v.lowerize]],[/(sun4\w)[;\)]/i],[[h,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[h,v.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[u,p,[c,b]],[/applecoremedia\/[\w\.]+ \((ipad)/],[u,[p,"Apple"],[c,b]],[/(apple\s{0,1}tv)/i],[[u,"Apple TV"],[p,"Apple"],[c,y]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[p,u,[c,b]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[u,[p,"Amazon"],[c,b]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[u,k.str,T.device.amazon.model],[p,"Amazon"],[c,w]],[/android.+aft([bms])\sbuild/i],[u,[p,"Amazon"],[c,y]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[u,p,[c,w]],[/\((ip[honed|\s\w*]+);/i],[u,[p,"Apple"],[c,w]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[p,u,[c,w]],[/\(bb10;\s(\w+)/i],[u,[p,"BlackBerry"],[c,w]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[u,[p,"Asus"],[c,b]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[p,"Sony"],[u,"Xperia Tablet"],[c,b]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[u,[p,"Sony"],[c,w]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[p,u,[c,f]],[/android.+;\s(shield)\sbuild/i],[u,[p,"Nvidia"],[c,f]],[/(playstation\s[34portablevi]+)/i],[u,[p,"Sony"],[c,f]],[/(sprint\s(\w+))/i],[[p,k.str,T.device.sprint.vendor],[u,k.str,T.device.sprint.model],[c,w]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[p,[u,/_/g," "],[c,w]],[/(nexus\s9)/i],[u,[p,"HTC"],[c,b]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],[u,[p,"Huawei"],[c,w]],[/android.+(bah2?-a?[lw]\d{2})/i],[u,[p,"Huawei"],[c,b]],[/(microsoft);\s(lumia[\s\w]+)/i],[p,u,[c,w]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[u,[p,"Microsoft"],[c,f]],[/(kin\.[onetw]{3})/i],[[u,/\./g," "],[p,"Microsoft"],[c,w]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[u,[p,"Motorola"],[c,w]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[u,[p,"Motorola"],[c,b]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[p,v.trim],[u,v.trim],[c,y]],[/hbbtv.+maple;(\d+)/i],[[u,/^/,"SmartTV"],[p,"Samsung"],[c,y]],[/\(dtv[\);].+(aquos)/i],[u,[p,"Sharp"],[c,y]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[p,"Samsung"],u,[c,b]],[/smart-tv.+(samsung)/i],[p,[c,y],u],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[p,"Samsung"],u,[c,w]],[/sie-(\w*)/i],[u,[p,"Siemens"],[c,w]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[p,"Nokia"],u,[c,w]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[u,[p,"Acer"],[c,b]],[/android.+([vl]k\-?\d{3})\s+build/i],[u,[p,"LG"],[c,b]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[p,"LG"],u,[c,b]],[/(lg) netcast\.tv/i],[p,u,[c,y]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[u,[p,"LG"],[c,w]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[p,u,[c,b]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[u,[p,"Lenovo"],[c,b]],[/(lenovo)[_\s-]?([\w-]+)/i],[p,u,[c,w]],[/linux;.+((jolla));/i],[p,u,[c,w]],[/((pebble))app\/[\d\.]+\s/i],[p,u,[c,g]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[p,u,[c,w]],[/crkey/i],[[u,"Chromecast"],[p,"Google"],[c,y]],[/android.+;\s(glass)\s\d/i],[u,[p,"Google"],[c,g]],[/android.+;\s(pixel c)[\s)]/i],[u,[p,"Google"],[c,b]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[u,[p,"Google"],[c,w]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[u,/_/g," "],[p,"Xiaomi"],[c,w]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[u,/_/g," "],[p,"Xiaomi"],[c,b]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[u,[p,"Meizu"],[c,w]],[/(mz)-([\w-]{2,})/i],[[p,"Meizu"],u,[c,w]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[u,[p,"OnePlus"],[c,w]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[u,[p,"RCA"],[c,b]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[u,[p,"Dell"],[c,b]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[u,[p,"Verizon"],[c,b]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[p,"Barnes & Noble"],u,[c,b]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[u,[p,"NuVision"],[c,b]],[/android.+;\s(k88)\sbuild/i],[u,[p,"ZTE"],[c,b]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[u,[p,"Swiss"],[c,w]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[u,[p,"Swiss"],[c,b]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[u,[p,"Zeki"],[c,b]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[p,"Dragon Touch"],u,[c,b]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[u,[p,"Insignia"],[c,b]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[u,[p,"NextBook"],[c,b]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[p,"Voice"],u,[c,w]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[p,"LvTel"],u,[c,w]],[/android.+;\s(PH-1)\s/i],[u,[p,"Essential"],[c,w]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[u,[p,"Envizen"],[c,b]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[p,u,[c,b]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[u,[p,"MachSpeed"],[c,b]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[p,u,[c,b]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[u,[p,"Rotor"],[c,b]],[/android.+(KS(.+))\s+build/i],[u,[p,"Amazon"],[c,b]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[p,u,[c,b]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[c,v.lowerize],p,u],[/[\s\/\(](smart-?tv)[;\)]/i],[[c,y]],[/(android[\w\.\s\-]{0,9});.+build/i],[u,[p,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[m,[d,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[d,m],[/rv\:([\w\.]{1,9}).+(gecko)/i],[m,d]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[d,m],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[d,[m,k.str,T.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[d,"Windows"],[m,k.str,T.os.windows.version]],[/\((bb)(10);/i],[[d,"BlackBerry"],m],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[d,m],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[d,"Symbian"],m],[/\((series40);/i],[d],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[d,"Firefox OS"],m],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[d,m],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[d,"Chromium OS"],m],[/(sunos)\s?([\w\.\d]*)/i],[[d,"Solaris"],m],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[d,m],[/(haiku)\s(\w+)/i],[d,m],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[m,/_/g,"."],[d,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[d,"Mac OS"],[m,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[d,m]]},P=function(e,i){if("object"==typeof e&&(i=e,e=o),!(this instanceof P))return new P(e,i).getResult();var t=e||(n&&n.navigator&&n.navigator.userAgent?n.navigator.userAgent:""),s=i?v.extend(x,i):x;return this.getBrowser=function(){var e={name:o,version:o};return k.rgx.call(e,t,s.browser),e.major=v.major(e.version),e},this.getCPU=function(){var e={architecture:o};return k.rgx.call(e,t,s.cpu),e},this.getDevice=function(){var e={vendor:o,model:o,type:o};return k.rgx.call(e,t,s.device),e},this.getEngine=function(){var e={name:o,version:o};return k.rgx.call(e,t,s.engine),e},this.getOS=function(){var e={name:o,version:o};return k.rgx.call(e,t,s.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return t},this.setUA=function(e){return t=e,this},this};P.VERSION="0.7.21",P.BROWSER={NAME:d,MAJOR:"major",VERSION:m},P.CPU={ARCHITECTURE:h},P.DEVICE={MODEL:u,VENDOR:p,TYPE:c,CONSOLE:f,MOBILE:w,SMARTTV:y,TABLET:b,WEARABLE:g,EMBEDDED:"embedded"},P.ENGINE={NAME:d,VERSION:m},P.OS={NAME:d,VERSION:m},typeof i!==a?(typeof e!==a&&e.exports&&(i=e.exports=P),i.UAParser=P):(s=function(){return P}.call(i,t,i,e))===o||(e.exports=s);var S=n&&(n.jQuery||n.Zepto);if(S&&!S.ua){var C=new P;S.ua=C.getResult(),S.ua.get=function(){return C.getUA()},S.ua.set=function(e){C.setUA(e);var i=C.getResult();for(var t in i)S.ua[t]=i[t]}}}("object"==typeof window?window:this)}});