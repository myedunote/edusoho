(window.webpackJsonp=window.webpackJsonp||[]).push([["courseTry"],{"07b4":function(e,t,i){"use strict";i("8e6e"),i("ac6a"),i("456d"),i("e7e5");var s=i("d399"),n=i("bd86"),r=i("3ce7"),a=i("2164"),o=i("2f62"),c=i("faa5");function u(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?u(Object(i),!0).forEach((function(t){Object(n.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var d={name:"finish-dialog",mixins:[a.a],inject:["reload"],data:function(){return{show:!0,path:""}},props:{finishResult:{type:Object,default:function(){return{}}},courseId:{type:String,default:""}},computed:l(l({},Object(o.e)("course",{allTask:function(e){return e.allTask}})),{},{rate:function(){return this.finishResult?"".concat(parseInt(this.finishResult.completionRate),"%"):"0%"},title:function(){return this.finishResult?this.allTask[this.finishResult.result.courseTaskId].title:""}}),created:function(){this.path=this.$route.path},methods:l(l({},Object(o.d)("course",{setSourceType:c.A})),{},{goNextTask:function(){var e=this;if(!this.finishResult.nextTask)return Object(s.a)("没有下一课"),void(this.show=!1);var t={courseId:this.courseId,taskId:this.finishResult.nextTask.id};r.a.getCourseData({query:t}).then((function(t){e.toLearnTask(t)}))},toLearnTask:function(e){if("create"!==e.status){var t={id:e.id};this.$store.commit("course/".concat(c.i),{nextTask:t}),this.showTypeDetail(e),this.show=!1,this.setSourceType({sourceType:"img",taskId:e.id})}else Object(s.a)("课时创建中，敬请期待")},showTypeDetail:function(e){if("published"===e.status)switch(e.type){case"video":this.playVedio(e);break;case"audio":this.playAudio(e);break;case"text":case"ppt":case"doc":this.$router.push({name:"course_web",query:{courseId:this.courseId,taskId:e.id,type:e.type,backUrl:"/course/".concat(this.courseId)}}),this.reload();break;case"live":var t=!1;if(new Date>new Date(1e3*e.endTime)){if(e.activity&&"videoGenerated"===e.activity.replayStatus)return void("self"===e.mediaSource?this.setSourceType({sourceType:"video",taskId:e.id}):this.copyPcUrl(e.courseUrl));if(e.activity&&"ungenerated"===e.activity.replayStatus)return void Object(s.a)("暂无回放");t=!0}this.$router.push({name:"live",query:{courseId:this.courseId,taskId:e.id,type:e.type,title:e.title,replay:t}});break;case"testpaper":var i=e.activity.testpaperInfo.testpaperId;this.$router.push({name:"testpaperIntro",query:{testId:i,targetId:e.id}});break;case"homework":this.$router.push({name:"homeworkIntro",query:{courseId:this.courseId,taskId:e.id}});break;case"exercise":this.$router.push({name:"exerciseIntro",query:{courseId:this.courseId,taskId:e.id}});break;default:this.copyPcUrl(e.courseUrl)}else Object(s.a)("敬请期待")},playVedio:function(e){if("self"===e.mediaSource){var t="/course/".concat(this.courseId);this.$route.path===t?this.setSourceType({sourceType:"video",taskId:e.id}):this.$router.push({path:t,query:{sourceType:"video",taskId:e.id}})}else this.copyPcUrl(e.courseUrl)},playAudio:function(e){var t="/course/".concat(this.courseId);this.$route.path===t?this.setSourceType({sourceType:"audio",taskId:e.id}):this.$router.push({path:t,query:{sourceType:"audio",taskId:e.id}})},closeFinishDialog:function(){this.show=!1,this.$emit("closeFinishDialog")}})},h=i("0c7c"),p=Object(h.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("van-overlay",{attrs:{show:e.show,"z-index":9999}},[i("div",{staticClass:"finish-dialog "},[i("div",{staticClass:"finish-dialog-content clearfix"},[i("div",{staticClass:"finish-dialog-top"},[i("img",{staticClass:"finish-dialog-img",attrs:{src:"static/images/reportDialog.png"}}),i("div",{staticClass:"finish-dialog-top--text"},[e._v(e._s(e.$t("courseLearning.learningCompletion")))])]),i("div",{staticClass:"finish-dialog-close",on:{click:e.closeFinishDialog}},[i("i",{staticClass:"iconfont icon-guanbi"})]),i("div",{staticClass:"progress-bar"},[i("div",{staticClass:"progress-bar__content"},[i("div",{staticClass:"progress-bar__rate",style:{width:e.rate}})]),i("div",{staticClass:"progress-bar__text"},[e._v(e._s(e.rate))])]),i("p",{staticClass:"finish-dialog-text"},[e._v(e._s(e.$t("courseLearning.congratulationsOnCompletion")))]),[i("p",{staticClass:"text-overflow"},[e._v(e._s(e.title))]),i("div",{staticClass:"finish-dialog-btn",on:{click:e.goNextTask}},[e._v(e._s(e.$t("courseLearning.nextLesson")))])]],2)])])}),[],!1,null,null,null);t.a=p.exports},"202a":function(e,t,i){"use strict";i("8e6e"),i("ac6a"),i("456d"),i("e17f");var s=i("2241"),n=(i("a481"),i("4917"),i("e7e5"),i("d399")),r=(i("c5f6"),i("96cf"),i("3b8d")),a=(i("7f7f"),i("6762"),i("2fdb"),i("bd86")),o=i("32e6"),c=i.n(o),u=i("2f62"),l=i("3ce7"),d=i("fd23"),h=i("bced"),p=i("07b4"),f=i("4328"),v=i.n(f),m=i("c8a5"),g={props:{type:{type:String,default:""},isShow:{type:Boolean,default:!1},reportType:{type:String,default:""}},methods:{onKeepLearning:function(e){this.$emit("outFocusMask",e)}}},y=i("0c7c"),b=Object(y.a)(g,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isShow?i("div",{staticClass:"video-report-mask"},["ineffective_learning"===e.type&&"video"===e.reportType?[i("div",{staticClass:"content"},[e._m(0),i("van-button",{attrs:{color:"#43bc60",size:"small"},on:{click:function(t){return e.onKeepLearning("ineffective_learning")}}},[e._v("\n        继续学习\n      ")])],1)]:e._e(),"kick_previous"===e.type?[i("div",{staticClass:"content"},[e._m(1),i("van-button",{attrs:{color:"#43bc60",size:"small"},on:{click:function(t){return e.onKeepLearning("kick_previous")}}},[e._v("\n        继续学习\n      ")])],1)]:e._e(),"reject_current"===e.type?[e._m(2)]:e._e()],2):e._e()}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tips"},[t("p",{staticClass:"ineffective-learning"},[this._v("学累了可以休息一会 :D")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tips"},[t("p",{staticClass:"kick-each-other"},[this._v("请勿同时多开任务学习")]),t("p",{staticClass:"kick-each-other"},[this._v("不要一心多用哦！")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content"},[t("div",{staticClass:"tips"},[t("p",{staticClass:"kick-each-other"},[this._v("请勿同时多开任务学习")]),t("p",{staticClass:"kick-each-other"},[this._v("不要一心多用哦！")])])])}],!1,null,null,null).exports,k=(i("28a5"),i("18a0")),w=i.n(k),T=/accept/,I={name:"WechatSubscribe",data:function(){return{templateId:"",isWechatSubscribe:!1,firstGuide:!1,secondGuide:!1,isSubscribe:!1}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isWeixin()){t.next=2;break}return t.abrupt("return");case 2:return e.isKeyLocalStorage("WECHAT_SUBSCRIBE_FIRST_GUIDE")||(e.firstGuide=!0),t.next=5,l.a.wechatSubscribe();case 5:if(i=t.sent,i.enable){t.next=9;break}return t.abrupt("return");case 9:return t.next=11,l.a.wechatTemplate();case 11:if(e.templateId=t.sent,e.templateId){t.next=14;break}return t.abrupt("return");case 14:e.$nextTick((function(t){e.initSubscribe()}));case 15:case"end":return t.stop()}}),t)})))()},methods:{initSubscribe:function(){var e=this,t={url:window.location.href.split("#")[0]};l.a.wechatJsSdkConfig({params:t}).then((function(t){w.a.config({debug:!1,appId:t.appId,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:t.jsApiList,openTagList:["wx-open-subscribe"]}),w.a.ready((function(){e.isWechatSubscribe=!0}))}))},success:function(e){this.firstGuide=!1;var t=e.detail.subscribeDetails;T.test(t)&&(this.isSubscribe=!0,this.$toast(this.$t("courseLearning.subscriptionSucceeded")))},subError:function(e){},isWeixin:function(){return"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)},isKeyLocalStorage:function(e){return!!localStorage.getItem(e)||(localStorage.setItem(e,!0),!1)}}},_=Object(y.a)(I,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isWechatSubscribe?i("div",{staticClass:"wechat-subscribe"},[e.firstGuide?i("div",{staticClass:"wechat-subscribe-first-guide"},[e._v("\n    "+e._s(e.$t("courseLearning.pleaseClickSubscribe"))+"\n  ")]):e._e(),i("i",{class:["iconfont",e.isSubscribe?"icon-subscribed":"icon-subscribe"]}),i("wx-open-subscribe",{attrs:{template:e.templateId,id:"subscribe-btn"},on:{success:e.success,error:e.subError}},[i("script",{attrs:{slot:"style",type:"text/wxtag-template"},slot:"style"},[e._v("\n      <style>\n        .subscribe-btn {\n          display: inline-block;\n          min-width: 30px;\n          color: #fff;\n          font-size: 14px;\n        }\n      </style>\n    ")]),i("script",{attrs:{type:"text/wxtag-template"}},[e._v('\n      <span class="subscribe-btn">\n        '+e._s(e.$t("courseLearning.subscribe"))+"\n      </span>\n    ")])])],1):e._e()}),[],!1,null,null,null).exports,S=i("faa5"),C=i("2164"),O=i("6647"),D=i("a556"),P=i("f8b7");function x(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function j(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?x(Object(i),!0).forEach((function(t){Object(a.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var R={components:{countDown:d.a,tagLink:h.a,finishDialog:p.a,VideoReportMask:b,WechatSubscribe:_,openAppDialog:P.a},mixins:[m.a,C.a],props:{courseSet:{type:Object,default:function(){return{}}},seckillActivities:{type:Object,default:null}},data:function(){return{media:{},isShowVedioIframe:!1,finishCondition:void 0,learnMode:!1,enableFinish:!1,isEncryptionPlus:!1,isCoverOpen:!1,isPlaying:!1,player:null,counting:!0,isEmpty:!1,textContent:null,tagData:{earnings:0,isShow:!1,link:"",className:"course-tag",minDirectRewardRatio:0},timeChangingList:[],bindAgencyRelation:{},finishResult:null,finishDialog:!1,lastWatchTime:0,nowWatchTime:0,activity:{},openAppUrl:"",appShow:!1}},inject:["getDetailsContent"],computed:j(j(j({},Object(u.e)(["DrpSwitch","cloudSdkCdn","courseSettings","course"])),Object(u.e)("course",{course:function(e){return e},sourceType:function(e){return e.sourceType},selectedPlanId:function(e){return e.selectedPlanId},taskId:function(e){return e.taskId},details:function(e){return e.details},joinStatus:function(e){return e.joinStatus},user:function(e){var t;return(null===(t=e.joinStatus)||void 0===t?void 0:t.user)||{}},allTask:function(e){return e.allTask},nextStudy:function(e){return e.nextStudy}})),{},{showLearnBtn:function(){return this.joinStatus&&["video","audio","ppt"].includes(this.sourceType)},continueLearningText:function(){var e=this.nextStudy,t=e.nextTask,i=e.progress;return t&&0==i?this.$t("courseLearning.startLearning"):this.$t("courseLearning.continueLearning")}}),watch:{taskId:function(e,t){("course"!==this.$route.name||this.joinStatus)&&e>0&&this.initHead()},selectedPlanId:function(e){("course"!==this.$route.name||this.joinStatus)&&e>0&&this.initHead()}},created:function(){this.initHead(),this.showTagLink()},beforeDestroy:function(){this.sign.length>0&&localStorage.setItem("flowSign",this.sign),this.player&&this.player.destory&&this.player.destory(),this.clearComputeWatchTime()},methods:j(j(j(j({},Object(u.c)(["setCloudAddress"])),Object(u.d)("course",{setSourceType:S.A})),Object(u.d)("course",{setSourceType:S.A})),{},{toToast:function(){var e=this.finishCondition;if(e){var t="";if(["time","watchTime"].includes(e.type)){var i=Math.ceil((60*e.data-this.learnedTime)/60);t=i>0?"\n剩余 ".concat(i," 分完成"):"\n恭喜！你已完成该任务"}this.$toast({message:"完成条件：".concat(e.text).concat(t),position:"bottom"})}},initHead:function(){["video","audio","ppt"].includes(this.sourceType)&&(window.scrollTo(0,0),this.joinStatus&&(this.initReport(),this.clearComputeWatchTime(),this.lastWatchTime=0,this.nowWatchTime=0),this.initData())},initReport:function(){this.finishDialog=!1,this.getFinishCondition(),this.IsLivePlayback()},getFinishCondition:function(){var e=this;this.getCourseData(this.selectedPlanId,this.taskId).then((function(t){e.activity=t.activity,e.finishCondition=t.activity&&t.activity.finishCondition}))},IsLivePlayback:function(){"live"===this.allTask[this.taskId].type&&this.reprtData({eventName:"finish"})},viewAudioDoc:function(){this.isCoverOpen=!0},hideAudioDoc:function(){this.isCoverOpen=!1},handlePlayer:function(){return this.isPlaying?this.player&&this.player.pause():this.player&&this.player.play()},getParams:function(){return this.joinStatus?{query:{courseId:this.selectedPlanId,taskId:this.taskId},params:{version:"escloud"}}:{query:{courseId:this.selectedPlanId,taskId:this.taskId},params:{preview:1,version:"escloud"}}},initData:function(){this.isShowOutFocusMask=!1,this.sign.length>0&&(localStorage.setItem("flowSign",this.sign),this.sign=""),this.$refs.video&&(this.$refs.video.innerHTML=""),this.enableFinish=!!parseInt(this.details.enableFinish),this.player&&this.player.destory&&this.player.destory(),this.getData()},getData:function(){var e=this;l.a.getMedia(this.getParams()).then(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(i){var s,n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=i.media.resNo,n=i.mediaType,e.media=i.media,"0"!==s){t.next=8;break}return t.next=5,l.a.getLocalMediaLive({query:{taskId:e.taskId},params:{hls_encryption:1}});case 5:r=t.sent,delete i.media.resNo,i.media.url=r.mediaUri;case 8:if("audio"!==n){t.next=11;break}return e.formateAudioData(i),t.abrupt("return");case 11:if("video"!==n&&"live"!==n){t.next=14;break}return e.formateVedioData(i),t.abrupt("return");case 14:"ppt"===n&&e.formatePptData(i);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){var i=Number(e.details.id);4040101==t.code&&e.$router.push({name:"login",query:{redirect:"/course/".concat(i)}}),n.a.fail(t.message)}))},formateAudioData:function(e){var t=e.media;if(t.isFinishConvert){if(!this.handleOnlyLearnOnApp())if(this.isEncryptionPlus=t.isEncryptionPlus,t.isEncryptionPlus)Object(n.a)("该浏览器不支持云视频播放，请下载App");else{this.textContent=t.text;var i={id:"course-detail__head--video",user:this.user,resNo:t.resNo,token:t.token,autoplay:!0,disableDataUpload:!0,watermark:{pos:"top.right",width:30,height:30},rememberLastPos:!0,playlist:t.url};this.$store.commit("UPDATE_LOADING_STATUS",!0),this.initPlayer(i)}}else Object(n.a)("课程内容准备中，请稍候查看")},isAndroid:function(){var e=navigator.userAgent;return e.indexOf("Android")>-1||e.indexOf("Adr")>-1},cancel:function(){this.setSourceType({sourceType:"",taskId:""}),this.appShow=!1},handleOnlyLearnOnApp:function(){if(0==this.courseSettings.only_learning_on_APP)return!1;var e=this.course.details,t=e.goodsId,i=e.id,s=window.location,n=s.host,r=s.protocol;return navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)?this.openAppUrl="kuozhi://".concat(n,"?courseId=").concat(i,"&goodsId=").concat(t):this.openAppUrl="kuozhi://".concat(n,"?protocol=").concat(r.replace(":",""),"&courseId=").concat(i,"&goodsId=").concat(t),this.appShow=!0,!0},formateVedioData:function(e){var t,i,s,r=e.media,a=r.timeLimit,o=r.securityVideoPlayer,c=!this.joinStatus&&Number(this.details.tryLookable);if(r.isFinishConvert){if(!this.handleOnlyLearnOnApp()){if(this.isEncryptionPlus=r.isEncryptionPlus,r.isEncryptionPlus&&o)return Object(n.a)("请在APP学习"),void(this.isShowVedioIframe=!0);if(r.isEncryptionPlus&&!o&&!this.detectBrowserInfo())return Object(n.a)("请在APP学习或使用钉钉/飞书/微信/企业微信内置浏览器打开"),void(this.isShowVedioIframe=!0);var u={id:"course-detail__head--video",user:this.user,autoplay:!0,disableFullscreen:"audio"===this.sourceType,strictMode:!r.supportMobile,pluck:{timelimit:a},fingerprint:{html:null===(t=e.fingerPrintSetting)||void 0===t?void 0:t.video_fingerprint,duration:100*(null===(i=e.fingerPrintSetting)||void 0===i?void 0:i.video_fingerprint_time)},playbackRates:[.75,1,1.25,1.5,2,3],resNo:r.resNo,disableDataUpload:!0,watermark:{pos:"top.right",width:30,height:30,file:null===(s=e.watermarkSetting)||void 0===s?void 0:s.video_watermark_image},language:Object(O.b)(),token:r.token,rememberLastPos:!0,playlist:r.url};r.isEncryptionPlus&&this.isWechat&&o&&(u.playerType="wasm"),c||delete u.pluck;var l=this.activity,d=l.finishType,h=l.finishData;"end"==d&&"1"==h&&(u.controlBar={disableProgressBar:!0}),this.$store.commit("UPDATE_LOADING_STATUS",!0),this.initPlayer(u)}}else Object(n.a)("课程内容准备中，请稍候查看")},formatePptData:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function i(){var s,n;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(s=e.media,t.isEncryptionPlus=s.isEncryptionPlus,t.cloudSdkCdn){i.next=5;break}return i.next=5,t.setCloudAddress();case 5:n="//".concat(t.cloudSdkCdn,"/js-sdk-v2/sdk-v1.js?")+~~(Date.now()/1e3/60),c()(n,(function(i){if(i)throw i;var n=new window.QiQiuYun.Player({id:"course-detail__head--video",resNo:s.resNo,token:s.token,source:{type:e.mediaType,args:s}});t.player=n,n.on("ready",(function(){t.initReportData(t.selectedPlanId,t.taskId,t.sourceType)})),n.on("pagechanged",(function(e){e.page===e.total&&t.finishCondition&&"end"===t.finishCondition.type&&t.reprtData({eventName:"finish"})}))}));case 7:case"end":return i.stop()}}),i)})))()},initPlayer:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(t.cloudSdkCdn){i.next=3;break}return i.next=3,t.setCloudAddress();case 3:n="//".concat(t.cloudSdkCdn,"/js-sdk-v2/sdk-v1.js?")+~~(Date.now()/1e3/60),c()(n,(function(i){if(t.$store.commit("UPDATE_LOADING_STATUS",!1),i)throw i;"zh-cn"!==e.language&&e.language||(e.language="zh-CN");var n=new window.QiQiuYun.Player(e);t.player=n,n.on("unablePlay",(function(){t.$refs.video.innerHTML="",s.a.alert({message:"当前内容不支持该手机浏览器观看，建议您使用Chrome、Safari浏览器观看。"}).then((function(){}))})),n.on("ready",(function(){t.initReportData(t.selectedPlanId,t.taskId,t.sourceType)})),n.on("playing",(function(){t.isPlaying=!0,t.clearComputeWatchTime(),t.computeWatchTime()})),n.on("paused",(function(e){t.isPlaying=!1,t.clearComputeWatchTime(),t.reprtData({eventName:"doing",ContinuousReport:!0})})),n.on("ended",(function(){t.clearComputeWatchTime(),t.finishCondition&&"end"===t.finishCondition.type&&t.reprtData({eventName:"finish"})}))}));case 5:case"end":return i.stop()}}),i)})))()},isWechat:function(){return"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)},detectBrowserInfo:function(){var e=navigator.userAgent.toLowerCase(),t=/micromessenger/i.test(e),i=/wxwork/i.test(e),s=/dingtalk/i.test(e),n=/lark/i.test(e);return!!(t||i||s||n)},expire:function(){this.counting=!1},sellOut:function(){this.isEmpty=!0,this.$emit("goodsEmpty")},showTagLink:function(){this.DrpSwitch?(this.initTagData(),this.getAgencyBindRelation()):this.tagData.isShow=!1},getAgencyBindRelation:function(){var e=this;l.a.getAgencyBindRelation().then((function(t){t.agencyId?(e.bindAgencyRelation=t,e.tagData.isShow=!0):e.tagData.isShow=!1}))},initTagData:function(){var e=this;l.a.getDrpSetting().then((function(t){e.drpSetting=t,e.tagData.minDirectRewardRatio=t.minDirectRewardRatio;var i={type:"course",id:e.details.id,merchant_id:e.drpSetting.merchantId};e.tagData.link=e.drpSetting.distributor_template_url+"?"+v.a.stringify(i);var s=e.drpSetting.minDirectRewardRatio/100*e.details.price;e.tagData.earnings=(Math.floor(100*s)/100).toFixed(2)}))},toLearned:function(){var e=this;this.reprtData({eventName:"finish"}).then((function(t){e.finishResult=t,e.finishDialog=!0}))},computeWatchTime:function(){var e=this;this.intervalWatchTime=setInterval((function(){e.nowWatchTime++}),1e3)},clearComputeWatchTime:function(){clearInterval(this.intervalWatchTime),this.intervalWatchTime=null},closeFinishDialog:function(){this.finishDialog=!1},handleClickContinueLearning:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var i,s,r,a,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getDetailsContent();case 2:if("closed"!=(null===(i=e.courseSet)||void 0===i?void 0:i.status)){t.next=4;break}return t.abrupt("return",Object(D.a)("course"));case 4:if(!(null===(s=e.course)||void 0===s||null===(r=s.details)||void 0===r||null===(a=r.learningExpiryDate)||void 0===a?void 0:a.expired)){t.next=6;break}return t.abrupt("return",Object(n.a)(e.$t("learning.expired")));case 6:o=e.nextStudy.nextTask.id,c={courseId:e.selectedPlanId,taskId:o};try{l.a.getCourseData({query:c}).then((function(t){e.toLearnTask(t)}))}catch(e){}case 9:case"end":return t.stop()}}),t)})))()},toLearnTask:function(e){"create"!==e.status?(this.$store.commit("course/".concat(S.i),{nextTask:e}),this.showTypeDetail(e)):Object(n.a)("课时创建中，敬请期待")},showTypeDetail:function(e){if("published"===e.status)switch(e.type){case"video":this.playVedio(e);break;case"audio":this.playAudio(e);break;case"ppt":this.setSourceType({sourceType:"ppt",taskId:e.id});break;case"text":case"doc":this.$router.push({name:"course_web",query:{courseId:this.selectedPlanId,taskId:e.id,type:e.type,backUrl:"/course/".concat(this.selectedPlanId)}});break;case"live":var t=!1;if(new Date>new Date(1e3*e.endTime)){if(e.activity&&"videoGenerated"===e.activity.replayStatus)return void("self"===e.mediaSource?this.setSourceType({sourceType:"video",taskId:e.id}):this.copyPcUrl(e.courseUrl));if(e.activity&&"ungenerated"===e.activity.replayStatus)return void Object(n.a)("暂无回放");t=!0}this.$router.push({name:"live",query:{courseId:this.selectedPlanId,taskId:e.id,type:e.type,title:e.title,replay:t}});break;case"testpaper":var i=e.activity.testpaperInfo.testpaperId;this.$router.push({name:"testpaperIntro",query:{testId:i,targetId:e.id}});break;case"homework":this.$router.push({name:"homeworkIntro",query:{courseId:this.selectedPlanId,taskId:e.id}});break;case"exercise":this.$router.push({name:"exerciseIntro",query:{courseId:this.selectedPlanId,taskId:e.id}});break;default:this.copyPcUrl(e.courseUrl)}else Object(n.a)("敬请期待")},playVedio:function(e){if("self"===e.mediaSource){var t="/course/".concat(this.selectedPlanId);this.$route.path===t?this.setSourceType({sourceType:"video",taskId:e.id}):this.$router.push({path:t,query:{sourceType:"video",taskId:e.id}})}else this.copyPcUrl(e.courseUrl)},playAudio:function(e){var t="/course/".concat(this.selectedPlanId);this.$route.path===t?this.setSourceType({sourceType:"audio",taskId:e.id}):this.$router.push({path:t,query:{sourceType:"audio",taskId:e.id}})}})},L=Object(y.a)(R,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"course-detail__head pos-rl",attrs:{id:"course-detail__head"}},[i("video-report-mask",{attrs:{type:e.outFocusMaskType,isShow:e.isShowOutFocusMask,reportType:e.reportType},on:{outFocusMask:e.outFocusMask}}),e.textContent?i("div",{directives:[{name:"show",rawName:"v-show",value:["audio"].includes(e.sourceType)&&!e.isEncryptionPlus&&!e.isCoverOpen,expression:"\n      ['audio'].includes(sourceType) && !isEncryptionPlus && !isCoverOpen\n    "}],staticClass:"course-detail__nav--btn",on:{click:e.viewAudioDoc}},[e._v("\n    "+e._s(e.$t("courseLearning.manuscripts"))+"\n  ")]):e._e(),e.textContent?i("div",{directives:[{name:"show",rawName:"v-show",value:["audio"].includes(e.sourceType)&&!e.isEncryptionPlus,expression:"['audio'].includes(sourceType) && !isEncryptionPlus"}],staticClass:"course-detail__nav--cover web-view",class:{opened:e.isCoverOpen}},[i("div",{staticClass:"media-text",domProps:{innerHTML:e._s(e.textContent)}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isCoverOpen,expression:"isCoverOpen"}],staticClass:"course-detail__nav--cover-control",on:{click:e.handlePlayer}},[i("i",{staticClass:"iconfont",class:e.isPlaying?"icon-zanting":"icon-bofang"})]),i("div",{staticClass:"course-detail__nav--cover-close-btn",on:{click:e.hideAudioDoc}},[i("i",{staticClass:"van-icon van-icon-arrow van-nav-bar__arrow"})])]):e._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:"img"===e.sourceType||e.finishDialog||e.isShowVedioIframe,expression:"sourceType === 'img' || finishDialog || isShowVedioIframe"}],staticClass:"course-detail__head--img",attrs:{id:"course-detail__head--img"}},[e.courseSet.cover?i("img",{class:{"continue-learning-img":e.nextStudy.nextTask},attrs:{src:e.courseSet.cover.large,alt:""}}):e._e(),e.nextStudy.nextTask?i("div",{staticClass:"continue-learning"},[i("h3",{staticClass:"continue-learning__title"},[e._v(e._s(e.nextStudy.nextTask.title))]),i("div",{staticClass:"continue-learning__btn",on:{click:e.handleClickContinueLearning}},[e._v(e._s(e.continueLearningText))])]):e._e(),e.seckillActivities&&"ongoing"===e.seckillActivities.status&&e.counting&&!e.isEmpty?i("countDown",{attrs:{activity:e.seckillActivities},on:{timesUp:e.expire,sellOut:e.sellOut}}):e._e(),i("div",{staticClass:"wechat-subscribe-box"},[i("wechat-subscribe")],1)],1),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isShowOutFocusMask,expression:"!isShowOutFocusMask"}]},[i("div",{directives:[{name:"show",rawName:"v-show",value:["video","audio","ppt"].includes(e.sourceType)&&!e.isShowVedioIframe&&!e.finishDialog,expression:"\n        ['video', 'audio', 'ppt'].includes(sourceType) &&\n        !isShowVedioIframe &&\n        !finishDialog\n      "}],ref:"video",attrs:{id:"course-detail__head--video"}})]),e.showLearnBtn?[e.isFinish?i("div",{staticClass:"course-detail__head--btn course-detail__head--activebtn"},[i("i",{staticClass:"iconfont icon-markdone"}),e._v("\n      "+e._s(e.$t("courseLearning.learned"))+"\n    ")]):e._e(),e.isFinish?e._e():i("div",[e.enableFinish?i("div",{staticClass:"course-detail__head--btn",on:{click:e.toLearned}},[e._v("\n        "+e._s(e.$t("courseLearning.learned"))+"\n      ")]):e._e(),e.enableFinish?e._e():i("div",{staticClass:"course-detail__head--btn",on:{click:e.toToast}},[e._v("\n        "+e._s(e.$t("courseLearning.completionConditions"))+"\n      ")])])]:e._e(),i("tagLink",{attrs:{"tag-data":e.tagData}}),e.finishDialog?i("finishDialog",{attrs:{finishResult:e.finishResult,courseId:e.selectedPlanId},on:{closeFinishDialog:e.closeFinishDialog}}):e._e(),e.appShow?i("open-app-dialog",{attrs:{openAppUrl:e.openAppUrl},on:{cancel:function(t){return e.cancel()}}}):e._e()],2)}),[],!1,null,null,null);t.a=L.exports},2164:function(e,t,i){"use strict";i("e17f");var s=i("2241");t.a={methods:{copyPcUrl:function(e){var t=this,i="暂不支持此类课程学习，请移步至APP或电脑「".concat(e,"」完成课程。");s.a.alert({title:"暂不支持",message:i,messageAlign:"left",confirmButtonText:"复制链接"}).then((function(){t.$copyText(e).then((function(e){}))}))}}}},"4c51":function(e,t,i){"use strict";i.r(t),i("8e6e"),i("ac6a"),i("456d");var s=i("bd86"),n=i("b127"),r=i("202a"),a=i("2f62"),o=i("faa5");function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function u(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){Object(s.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var l={components:{Directory:n.a,DetailHead:r.a},computed:u(u({},Object(a.e)("course",{details:function(e){return e.details}})),Object(a.e)({isLoading:function(e){return e.isLoading}})),beforeRouteLeave:function(e,t,i){this.$store.commit("course/".concat(o.A),{sourceType:"img"}),i()}},d=i("0c7c"),h=Object(d.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"course-detail try"},[this.isLoading?t("e-loading"):this._e(),t("detail-head",{attrs:{"course-set":this.details.courseSet}}),t("directory",{attrs:{"hidde-title":!0,"course-items":this.details.courseItems}})],1)}),[],!1,null,null,null);t.default=h.exports},"6a4d":function(e,t,i){"use strict";var s=i("f253b");i.n(s).a},c8a5:function(e,t,i){"use strict";i("6762"),i("2fdb");var s=i("3ce7"),n=i("faa5");i("a556"),t.a={data:function(){return{reportIntervalTime:null,reportLearnTime:null,reportFinishCondition:null,reportData:{courseId:null,taskId:null},reportResult:null,isFinish:!1,reportType:null,learnTime:0,isShowOutFocusMask:!1,outFocusMaskType:"",sign:"",record:{},absorbed:0,learnedTime:0}},beforeRouteLeave:function(e,t,i){this.sign.length>0&&localStorage.setItem("flowSign",this.sign),i()},beforeDestroy:function(){this.clearReportIntervalTime(),window.removeEventListener("beforeunload",this.onbeforeunloadFlowSign),this.toggleReportMaskHidden("remove")},methods:{initReportData:function(e,t,i){var s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this.clearReportIntervalTime(),this.reportData={courseId:e,taskId:t},this.reportType=i,this.isFinish=!1,this.reportIntervalTime=null,this.reportLearnTime=null,this.reportResult=null,this.learnTime=0,this.reportFinishCondition=null,s&&this.initReportEvent(),this.onbeforeunload()},initReportEvent:function(){this.reprtData(),this.intervalReportData(),this.intervalReportLearnTime()},getCourseData:function(e,t){var i=this,n={courseId:e,taskId:t};return new Promise((function(e,t){s.a.getCourseData({query:n}).then((function(t){i.reportFinishCondition=t.activity.finishCondition,e(t)})).catch((function(e){t(e)}))}))},reprtData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{eventName:"doing",ContinuousReport:!1,watchTime:null};if(null!==this.reportData.courseId&&null!==this.reportData.taskId&&(!this.isFinish||e.ContinuousReport))if(""===this.sign){var t={client:"h5"},i=localStorage.getItem("flowSign");i&&(t.lastSign=i,localStorage.removeItem("flowSign")),this.start(e,t)}else this.reportTaskEvent(e)},start:function(e,t){var i=this;s.a.reportTaskEvent({query:{courseId:this.reportData.courseId,taskId:this.reportData.taskId,eventName:"start"},data:t}).then((function(t){if(i.handleReportResult(t),t.learnControl.allowLearn)i.sign=t.record.flowSign,i.record=t.record,i.reportTaskEvent(e);else{var s=t.learnControl.denyReason;i.reportJudge(s)}}))},reportTaskEvent:function(e){var t=this;if(0!==this.sign.length){var i={client:"h5",sign:this.sign,duration:this.learnTime,status:this.absorbed};if(e.reActive&&(i.reActive=e.reActive),this.sourceType&&"video"===this.sourceType){var n=parseInt(this.nowWatchTime-this.lastWatchTime);this.lastWatchTime=this.nowWatchTime;var r={watchData:{duration:n}};i=Object.assign(i,r)}this.learnTime=0,s.a.reportTaskEvent({query:{courseId:this.reportData.courseId,taskId:this.reportData.taskId,eventName:e.eventName},data:i}).then((function(e){if(t.handleReportResult(e),t.record=e.record,t.absorbed=0,t.sign=e.record.flowSign,!e.learnControl.allowLearn){var i=e.learnControl.denyReason;t.reportJudge(i)}})).catch((function(e){t.clearReportIntervalTime()}))}},handleReportResult:function(e){this.reportResult=e,this.learnedTime=e.learnedTime,e.taskResult&&"finish"===e.taskResult.status?(this.isFinish=!0,this.$store.commit(n.B,"finish"),this.$store.commit("course/".concat(n.F),e.completionRate)):this.$store.commit(n.B,"start")},intervalReportLearnTime:function(){var e=this;this.reportLearnTime=setInterval((function(){e.checkoutTime(),e.learnTime++}),1e3)},intervalReportData:function(){var e=this,t=60*(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*1e3;this.reportIntervalTime=setInterval((function(){e.reprtData({eventName:"doing",ContinuousReport:!0})}),t)},checkoutTime:function(){this.reportFinishCondition&&["time","watchTime"].includes(this.reportFinishCondition.type)&&parseInt(this.learnTime/60,10)>=parseInt(this.reportFinishCondition.data,10)&&this.reprtData({eventName:"finish",ContinuousReport:!0})},clearReportIntervalTime:function(){clearInterval(this.reportIntervalTime),clearInterval(this.reportLearnTime),this.reportIntervalTime=null,this.reportLearnTime=null},reportJudge:function(e){"kick_previous"===e?this.kickEachOther("kick_previous"):"reject_current"===e&&(this.clearReportIntervalTime(),this.kickEachOther("reject_current"))},outFocusMask:function(e){this.absorbed=1,this.isShowOutFocusMask=!1,!this.player||"video"!==this.reportType&&"audio"!==this.reportType||this.player.play(),this.toggleReportMaskHidden("remove"),this.reprtData({eventName:"doing",ContinuousReport:!0,reActive:1})},kickEachOther:function(e){if(this.absorbed=1,"testpaper"!==this.reportType&&"live"!==this.reportType&&"homework"!==this.reportType||"kick_previous"!==e){if(this.isShowOutFocusMask=!0,this.outFocusMaskType=e,"video"===this.reportType||"audio"===this.reportType){if(this.player&&this.player.destory&&"reject_current"===e)return void this.player.destory();this.player&&this.player.pause&&this.player.pause()}this.toggleReportMaskHidden("add")}},ineffectiveLearning:function(e){this.isShowOutFocusMask||(this.absorbed=0,this.isShowOutFocusMask=!0,this.outFocusMaskType=e,this.player&&"video"===this.reportType&&this.player.pause(),this.reprtData({eventName:"doing",ContinuousReport:!0}))},toggleReportMaskHidden:function(e){"video"!==this.reportType&&"audio"!==this.reportType&&("add"===e?document.getElementsByTagName("body")[0].classList.add("report-mask-hidden"):"remove"===e&&document.getElementsByTagName("body")[0].classList.remove("report-mask-hidden"))},initVisibilitychange:function(){document.addEventListener("visibilitychange",this.visibilityState)},visibilityState:function(){"video"===this.reportType&&("hidden"===document.visibilityState?this.ineffectiveLearning("ineffective_learning"):"visible"===document.visibilityState&&this.player.pause())},onbeforeunload:function(){window.addEventListener("beforeunload",this.onbeforeunloadFlowSign)},onbeforeunloadFlowSign:function(){this.sign.length>0&&localStorage.setItem("flowSign",this.sign)}}}},f253b:function(e,t,i){},f8b7:function(e,t,i){"use strict";var s={props:["openAppUrl"],methods:{cancel:function(){this.$emit("cancel")}}},n=(i("6a4d"),i("0c7c")),r=Object(n.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"open-app-container"},[i("div",{staticClass:"open-app-overlay"}),i("div",{staticClass:"open-app-dialog"},[i("div",{staticClass:"message"},[e._v("将为您跳转至App进行学习")]),i("div",{staticClass:"footer"},[i("button",{on:{click:function(t){return e.cancel()}}},[e._v("取消")]),i("a",{attrs:{href:e.openAppUrl}},[e._v("继续")])])])])}),[],!1,null,"4ade1bb2",null);t.a=r.exports}}]);