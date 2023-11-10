(window.webpackJsonp=window.webpackJsonp||[]).push([[428],{1690:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i(39),s=i.n(n),a=(i(31),i(75)),c=i.n(a),o=i(62),r=c.a.create({timeout:15e3}),l=document.getElementsByTagName("meta")["csrf-token"];l&&localStorage.setItem("csrf-token",l.content),r.interceptors.request.use((function(t){return t.headers["X-Requested-With"]="XMLHttpRequest",t.headers["X-CSRF-Token"]=localStorage.getItem("csrf-token"),t.headers.Accept="application/vnd.edusoho.v2+json",t}),(function(t){return s.a.reject(t)})),r.interceptors.response.use((function(t){return t.data}),(function(t){try{o.a.prototype.$message.error(t.response.data.error.message)}catch(t){}return s.a.reject(t)}))},1691:function(t,e,i){},1694:function(t,e,i){"use strict";var n={name:"AsideLayout",props:{breadcrumbs:{type:Array,required:!0},headerTitle:{type:String,default:""},headerTip:{type:String,default:""},titleTip:{type:String,default:""}}},s=(i(1695),i(38)),a=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"aside-layout"},[i("div",{staticClass:"aside-layout-header"},[i("a-breadcrumb",{staticClass:"pull-left aside-layout-header__breadcrumb",attrs:{separator:"/"}},t._l(t.breadcrumbs,(function(e,n){return i("a-breadcrumb-item",{key:n},[e.href?[i("a",{attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.name))])]:e.pathName?[i("a",{attrs:{href:"javascript:;"},on:{click:function(i){return t.$router.push({name:e.pathName})}}},[t._v(t._s(e.name))])]:[t._v("\n          "+t._s(e.name)+"\n        ")]],2)})),1),t._v(" "),t.headerTip?i("a-popover",{attrs:{placement:"bottomLeft"}},[i("template",{slot:"content"},[i("div",{staticClass:"aside-header-tip",domProps:{innerHTML:t._s(t.headerTip)}})]),t._v(" "),i("span",{staticClass:"aside-header-title-icon"},[i("a-icon",{attrs:{theme:"filled",type:"question-circle"}}),i("span",{staticClass:"icon-circle"},[t._v(t._s(t.headerTitle))])],1)],2):t._e(),t._v(" "),t.titleTip?i("span",{staticClass:"aside-header-title-icon"},[t._v(t._s(t.titleTip))]):t._e()],1),t._v(" "),i("div",{staticClass:"aside-layout-main"},[t._t("default")],2)])}),[],!1,null,null,null);e.a=a.exports},1695:function(t,e,i){"use strict";var n=i(1691);i.n(n).a},1699:function(t,e,i){},1710:function(t,e,i){"use strict";var n={name:"Empty",props:{description:{type:String,default:"暂无数据"},image:{type:String,default:"/static-dist/app/img/vue/empty.png"},imageStyle:{type:Object,default:function(){return{height:"200px"}}}}},s=(i(1711),i(38)),a=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-empty",{staticClass:"custom-empty",attrs:{image:t.image,"image-style":t.imageStyle}},[i("span",{staticClass:"custom-empty__description",attrs:{slot:"description"},slot:"description"},[t._v(t._s(t.description))])])}),[],!1,null,null,null);e.a=a.exports},1711:function(t,e,i){"use strict";var n=i(1699);i.n(n).a},1736:function(t,e,i){"use strict";var n=i(1690);e.a={search:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(t.query,t.params),i=void 0===e?{}:e;t.data;return n.a.get("/api/multi_class_inspection",{params:i})},getLiveInfoById:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.query,i=void 0===e?{}:e,s=t.params,a=void 0===s?{}:s;t.data;return n.a.get("/api/multi_class_inspection_live_info/".concat(i.id),{params:a})}}},1815:function(t,e,i){},1986:function(t,e,i){"use strict";var n=i(1815);i.n(n).a},870:function(t,e,i){"use strict";i.r(e);var n=i(239),s=i.n(n),a=i(416),c=i.n(a),o=i(1694),r=i(1710),l=i(261),p=i.n(l),u={name:"InspectionCard",components:{},props:{inspection:{type:Object,require:!0,default:function(){return{}}}},data:function(){return{ellipsis:!1}},computed:{realTimeStudent:function(){return this.inspection.liveInfo.viewerOnlineNum?this.inspection.liveInfo.viewerOnlineNum:0}},mounted:function(){var t=this.$refs.assistant;this.ellipsis=t.scrollWidth>t.clientWidth},methods:{isAttend:function(t,e){var i={teacher:this.inspection.liveInfo.speakers,assistant:this.inspection.liveInfo.assistants};return p.a.find(i[t],["userId",Number(e)])}}},d=(i(1986),i(38)),v=Object(d.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"inspection-card"},[i("div",{staticClass:"inspection-card__info",class:{noborder:0==t.inspection.liveInfo.length}},[i("div",{staticClass:"inspection-card__title info text-overflow"},[t._v("班课名称："+t._s(t.inspection.multiClass.title))]),t._v(" "),i("div",{staticClass:"inspection-card__item info text-overflow"},[t._v("课时名称："+t._s(t.inspection.title))]),t._v(" "),i("div",{staticClass:"inspection-card__item info"},[t._v("开课时间："+t._s(t.$dateFormat(t.inspection.startTime,"YYYY-MM-DD HH:mm")))]),t._v(" "),i("div",{staticClass:"inspection-card__item info"},[t._v("课程时长："+t._s(t.inspection.length)+"分钟")]),t._v(" "),i("div",{staticClass:"inspection-card__item info"},[t._v("实时学员人数："+t._s(t.realTimeStudent)+"/"+t._s(t.inspection.studentNum))]),t._v(" "),i("div",{staticClass:"inspection-card__item info"},[t._v("授课教师：\n      "),i("span",{staticClass:"teacher"},[t._v("\n        "+t._s(t.inspection.teacherInfo.nickname)+"\n        "),0!==t.inspection.liveInfo.length?[t.isAttend("teacher",t.inspection.teacherInfo.id)?i("svg-icon",{staticClass:"icon-check-circle",attrs:{icon:"icon-check-circle"}}):i("svg-icon",{staticClass:"icon-a-closecircle",attrs:{icon:"icon-a-closecircle"}})]:t._e()],2)]),t._v(" "),i("div",{ref:"assistant",staticClass:"inspection-card__item info text-overflow"},[t._v("助教出席：\n      "),t._l(t.inspection.assistantInfo,(function(e){return i("span",{key:e.id,staticClass:"teacher"},[t._v("\n        "+t._s(e.nickname)+"\n        "),0!==t.inspection.liveInfo.length?[t.isAttend("assistant",e.id)?i("svg-icon",{staticClass:"icon-check-circle",attrs:{icon:"icon-check-circle"}}):i("svg-icon",{staticClass:"icon-a-closecircle",attrs:{icon:"icon-a-closecircle"}})]:t._e()],2)}))],2),t._v(" "),t.ellipsis?i("a-popover",{staticClass:"inspection-card__popover"},[i("template",{slot:"content"},t._l(t.inspection.assistantInfo,(function(e){return i("span",{key:e.id,staticClass:"teacher"},[t._v("\n          "+t._s(e.nickname)+"\n          "),0!==t.inspection.liveInfo.length?[t.isAttend("assistant",e.id)?i("svg-icon",{staticStyle:{width:"14px",height:"14px",color:"#46c37b"},attrs:{icon:"icon-check-circle"}}):i("svg-icon",{staticStyle:{width:"14px",height:"14px",color:"#ff6464"},attrs:{icon:"icon-a-closecircle"}})]:t._e()],2)})),0),t._v(" "),i("div",{staticClass:"empty-block"})],2):t._e()],1),t._v(" "),i("div",{staticClass:"inspection-card__button"},["notOnTime"===t.inspection.liveInfo.status?i("div",{staticClass:"inspection-card__button not-live-start"},[t._v("\n      直播未按时开始\n    ")]):t._e(),t._v(" "),"living"===t.inspection.liveInfo.status?i("div",{staticClass:"inspection-card__button"},[i("a",{staticClass:"live-start url-block",attrs:{href:t.inspection.liveInfo.viewUrl}},[i("svg-icon",{staticClass:"icon-live",attrs:{icon:"icon-live"}}),t._v("\n        进入直播\n      ")],1)]):t._e(),t._v(" "),"finished"===t.inspection.liveInfo.status&&"ungenerated"!==t.inspection.activityInfo.ext.replayStatus?i("div",{staticClass:"inspection-card__button live-start"},[i("a",{staticClass:"live-start url-block",attrs:{href:t.inspection.liveInfo.viewUrl}},[i("svg-icon",{staticClass:"icon-live",attrs:{icon:"icon-live-playback"}}),t._v("\n        查看回放\n      ")],1)]):t._e(),t._v(" "),"finished"===t.inspection.liveInfo.status&&"ungenerated"===t.inspection.activityInfo.ext.replayStatus?i("div",{staticClass:"inspection-card__button live-start"},[i("svg-icon",{staticClass:"icon-live",attrs:{icon:"icon-live-playback"}}),t._v("\n      直播已结束，回放生成中\n    ")],1):t._e(),t._v(" "),"unstart"===t.inspection.liveInfo.status?i("div",{staticClass:"inspection-card__button no-start-live"},[i("svg-icon",{staticClass:"icon-live",staticStyle:{width:"24px",height:"24px",top:"4px"},attrs:{icon:"icon-no-start-live"}}),t._v("\n      直播未开始\n    ")],1):t._e()])])}),[],!1,null,"3f9d346e",null).exports,_=i(1736),f={name:"index",components:{AsideLayout:o.a,Empty:r.a,InspectionCard:v},data:function(){return{inspectionList:[],getListLoading:!1,headerTip:"班课巡检仅展示今天所有直播课",headerTitle:"仅支持EduSoho直播"}},created:function(){this.getMultiClassInspectionList()},methods:{getMultiClassInspectionList:function(){var t=this;return c()(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.getListLoading=!0,e.prev=1,e.next=4,_.a.search();case 4:t.inspectionList=e.sent;case 5:return e.prev=5,t.getListLoading=!1,e.finish(5);case 8:case"end":return e.stop()}}),e,null,[[1,,5,8]])})))()}}},m=Object(d.a)(f,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("aside-layout",{attrs:{breadcrumbs:[{name:"班课巡检"}],headerTip:t.headerTip,headerTitle:t.headerTitle}},[i("a-spin",{staticClass:"multi-class-inspection",attrs:{spinning:t.getListLoading}},[i("a-row",{attrs:{gutter:[24,24]}},t._l(t.inspectionList,(function(t){return i("a-col",{key:t.id,attrs:{sm:24,lg:12,xl:8,xxl:6}},[i("inspection-card",{attrs:{inspection:t}})],1)})),1),t._v(" "),t.getListLoading||t.inspectionList.length?t._e():i("empty")],1)],1)}),[],!1,null,"0674af1b",null);e.default=m.exports}}]);