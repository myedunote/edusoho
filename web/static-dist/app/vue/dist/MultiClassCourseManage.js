<<<<<<< HEAD
(window.webpackJsonp=window.webpackJsonp||[]).push([[395],{108:function(t,e,s){t.exports=s(336)},1285:function(t,e,s){"use strict";s.r(e);var n=s(129),a=s.n(n),i=s(108),o=s.n(i),r=s(80),c=s.n(r),u=s(72),l=s.n(u),d=s(81),p=s.n(d),f=s(47),m=s.n(f),h=s(39),v=s.n(h),y=s(56),_=s.n(y),g=s(494),k=s(1357),x={video:"视频",audio:"音频",live:"直播",discuss:"讨论",flash:"Flash",doc:"文档",ppt:"PPT",testpaper:"考试",homework:"作业",exercise:"练习",download:"下载资料",text:"图文"},S={name:"TeachMode",filters:{teachType:function(t){return x[t]}},props:{record:{type:Object,required:!0,default:function(){return{}}}},computed:{replayStatus:function(){var t=this.record.tasks,e=t.type,s=t.activity.ext;return!("live"!=e||!["generated","videoGenerated"].includes(s.replayStatus))},progressStatus:function(){var t=this.record.tasks,e=t.type,s=t.activity.ext;return"live"==e?s.progressStatus:""}}},b=s(31),w=Object(b.a)(S,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v("\n  "+t._s(t._f("teachType")(t.record.tasks.type))+"\n\n  "),t.progressStatus?[s("a-divider",{staticStyle:{margin:"0 4px"},attrs:{type:"vertical"}}),t._v(" "),"created"==t.progressStatus?s("span",{staticStyle:{"font-size":"14px",color:"#fb8d4d"}},[t._v("未开始")]):"start"==t.progressStatus?s("span",{staticStyle:{"font-size":"14px",color:"#43bc60"}},[t._v("直播中")]):"closed"==t.progressStatus?s("span",{staticStyle:{"font-size":"14px",color:"#999"}},[t._v("已结束")]):t._e()]:t._e(),t._v(" "),t.replayStatus?[s("br"),t._v(" "),s("a-tag",{staticStyle:{"margin-top":"4px"},attrs:{color:"green"}},[t._v("有回放")])]:t._e()],2)}),[],!1,null,null,null).exports,I=s(1353);function T(t,e){var s=m()(t);if(p.a){var n=p()(t);e&&(n=n.filter((function(e){return l()(t,e).enumerable}))),s.push.apply(s,n)}return s}function C(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?T(Object(s),!0).forEach((function(e){v()(t,e,s[e])})):c.a?o()(t,c()(s)):T(Object(s)).forEach((function(e){a()(t,e,l()(s,e))}))}return t}var O=[{title:"课时名称",dataIndex:"name",width:"15%",scopedSlots:{customRender:"name"}},{title:"教学模式",dataIndex:"mode",filters:[{text:"视频",value:"video"},{text:"音频",value:"audio"},{text:"直播",value:"live"},{text:"讨论",value:"discuss"},{text:"文档",value:"doc"},{text:"PPT",value:"ppt"},{text:"考试",value:"testpaper"},{text:"作业",value:"homework"},{text:"练习",value:"exercise"},{text:"下载资料",value:"download"},{text:"图文",value:"text"}],width:"12%",scopedSlots:{customRender:"mode"}},{title:"开课时间",dataIndex:"startTime",width:"13%",scopedSlots:{customRender:"startTime"}},{title:"时长",width:"10%",dataIndex:"time",scopedSlots:{customRender:"time"}},{title:"授课老师",width:"10%",ellipsis:!0,dataIndex:"teacher",scopedSlots:{customRender:"teacher"}},{title:"助教老师",width:"10%",ellipsis:!0,dataIndex:"assistant",scopedSlots:{customRender:"assistant"}},{title:"问题讨论",width:"10%",dataIndex:"questionNum",scopedSlots:{customRender:"questionNum"}},{title:"学习人数",width:"10%",dataIndex:"studyStudentNum",scopedSlots:{customRender:"studyStudentNum"}},{title:"操作",width:"128px",dataIndex:"actions",scopedSlots:{customRender:"actions"}}],j={components:{ClassName:k.a,TeachMode:w,Assistant:I.a},data:function(){return{data:[],pagination:{},loading:!1,columns:O,locale:{filterConfirm:"确定",filterReset:"重置"},multiClassId:this.$route.params.id,keywords:"",courseId:0,courseSetId:0}},mounted:function(){var t=this;this.fetchLessons(),this.fetchMultiClass(),$("#modal").on("hide.bs.modal",(function(){var e={limit:10,offset:10*(t.pagination.current-1)};t.fetchLessons(e)}))},filters:{timeTransfer:function(t){var e=_.a.floor(t/60),s=t%60,n="".concat(e,"min ");return s&&(n+="".concat(s,"s")),n}},methods:{handleTableChange:function(t,e,s){var n=s.order,a=C({},this.pagination);a.current=t.current,this.pagination=a;var i={limit:t.pageSize,offset:(t.current-1)*t.pageSize};_.a.size(e)&&(i.types=e.mode),n&&(i.sort="ascend"==n?"ASC":"DESC"),this.fetchLessons(i)},fetchMultiClass:function(){var t=this;g.i.get(this.multiClassId).then((function(e){var s=e.course,n=s.id,a=s.courseSetId;t.courseId=n,t.courseSetId=a}))},fetchLessons:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loading=!0,g.i.getLessons(this.multiClassId,C({limit:10,titleLike:this.keywords},e)).then((function(e){var s=C({},t.pagination);s.total=e.paging.total,t.loading=!1,t.data=e.data,t.pagination=s}))},onSearch:function(t){this.keywords=t,this.pagination.current=1,this.fetchLessons()},handleMenuClick:function(t,e){"copy"!==t?["publish","unpublish"].includes(t)?this.updateTaskStatus(t,e):"delete"===t&&this.deleteTask(e):this.copy(e)},copy:function(t){this.$clipboard(this.copyTaskUrl(t)),this.$message.success("复制成功")},updateTaskStatus:function(t,e){var s=this,n=e.tasks,a=n.courseId,i=n.id,o="publish"==t?"发布成功":"取消发布成功";g.c.updateTaskStatus(a,i,{type:t}).then((function(){s.$message.success(o),_.a.forEach(s.data,(function(e){e.tasks.id==i&&(e.tasks.status="publish"===t?"published":"create")}))}))},deleteTask:function(t){var e=this,s=t.tasks,n=s.courseId,a=s.id;this.$confirm({title:"删除",content:"是否确定删除该课时吗?",okType:"danger",onOk:function(){g.c.deleteTask(n,a).then((function(t){t.success&&(e.$message.success("删除成功"),_.a.forEach(e.data,(function(t,s){t.tasks.id==a&&e.data.splice(s,1)})))}))}})},copyTaskUrl:function(t){return"".concat(window.location.origin,"/course/").concat(t.courseId)},goToEditorLesson:function(){this.$router.push({name:"MultiClassEditorLesson",params:{id:this.courseId},query:{courseSetId:this.courseSetId,multiClassId:this.multiClassId}})}}},P=(s(1394),Object(b.a)(j,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"class-info"},[s("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"16px"}},[s("a-input-search",{staticClass:"pull-left",staticStyle:{width:"260px"},attrs:{placeholder:"请输入课时关键字搜索"},on:{search:t.onSearch}}),t._v(" "),t.isPermission("course_lesson_manage")?s("a-button",{staticClass:"pull-right",attrs:{type:"primary"},on:{click:t.goToEditorLesson}},[t._v("\n      重排课时/新增课时\n    ")]):t._e()],1),t._v(" "),s("a-table",{attrs:{columns:t.columns,"row-key":function(t){return t.id},"data-source":t.data,loading:t.loading,pagination:t.pagination,locale:t.locale},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"name",fn:function(t,e){return s("class-name",{attrs:{record:e}})}},{key:"mode",fn:function(t,e){return s("teach-mode",{attrs:{record:e}})}},{key:"startTime",fn:function(e,s){return["live"===s.tasks.type?[t._v("\n        "+t._s(t.$dateFormat(s.tasks.startTime,"YYYY-MM-DD HH:mm"))+"\n      ")]:[t._v(" -- ")]]}},{key:"time",fn:function(e,s){return["video"===s.tasks.type?[t._v("\n        "+t._s((s.tasks.length/60).toFixed(2))+"min\n      ")]:"live"===s.tasks.type?[t._v(t._s(s.tasks.length)+"min")]:[t._v("--")]]}},{key:"teacher",fn:function(e){return[t._v(t._s(e.nickname))]}},{key:"assistant",fn:function(t){return s("assistant",{attrs:{assistant:t}})}},{key:"questionNum",fn:function(e,n){return s("a",{attrs:{href:"/my/course/"+n.tasks.courseId+"/question?type=question",target:"_blank"}},[t._v(t._s(e))])}},{key:"studyStudentNum",fn:function(e,s){return[t._v("\n      "+t._s(e)+"/"+t._s(s.totalStudentNum)+"\n    ")]}},{key:"actions",fn:function(e,n){return[s("a-dropdown",{staticStyle:{"margin-right":"12px"},attrs:{trigger:["hover"],placement:"bottomRight"}},[s("a-button",{attrs:{type:"link"},on:{click:function(t){return t.preventDefault()}}},[s("a-icon",{attrs:{type:"copy"}})],1),t._v(" "),s("a-menu",{attrs:{slot:"overlay"},on:{click:function(e){var s=e.key;return t.handleMenuClick(s,n)}},slot:"overlay"},[s("a-menu-item",{key:"copy"},[t._v("\n            复制课程链接\n          ")])],1)],1),t._v(" "),t.isPermission("course_lesson_manage")?s("a-button",{attrs:{type:"link","data-toggle":"modal","data-target":"#modal","data-url":"/course/"+n.courseId+"/task/"+n.tasks.id+"/update"}},[t._v("编辑")]):t._e(),t._v(" "),t.isPermission("course_lesson_manage")?s("a-dropdown",{attrs:{trigger:["hover"],placement:"bottomRight"}},[s("a",{staticClass:"ant-dropdown-link",staticStyle:{"margin-left":"-6px"},on:{click:function(t){return t.preventDefault()}}},[s("a-icon",{attrs:{type:"caret-down"}})],1),t._v(" "),s("a-menu",{attrs:{slot:"overlay"},on:{click:function(e){var s=e.key;return t.handleMenuClick(s,n)}},slot:"overlay"},["published"==n.tasks.status&&t.isPermission("course_lesson_manage")?s("a-menu-item",{key:"unpublish"},[t._v("\n            取消发布\n          ")]):[t.isPermission("course_lesson_manage")?s("a-menu-item",{key:"publish"},[t._v("\n              立即发布\n            ")]):t._e(),t._v(" "),t.isPermission("course_lesson_manage")?s("a-menu-item",{key:"delete"},[s("span",{staticStyle:{color:"#fe4040",cursor:"pointer"}},[t._v("删除")])]):t._e()]],2)],1):t._e()]}}])})],1)}),[],!1,null,null,null));e.default=P.exports},1318:function(t,e,s){},1337:function(t,e,s){"use strict";var n=s(1318);s.n(n).a},1344:function(t,e,s){},1353:function(t,e,s){"use strict";var n=s(56),a=s.n(n),i={name:"Assistant",props:{assistant:{required:!0,default:function(){return[]}}},data:function(){return{ellipsis:!1}},computed:{assistants:function(){if(!a.a.size(this.assistant))return"- -";var t=[];return this.assistant.nickname?t.push(this.assistant.nickname):a.a.forEach(this.assistant,(function(e,s){e.nickname?t.push(e.nickname):t.push(e)})),a.a.join(t,"、")}},mounted:function(){var t=this.$refs.assistant;this.ellipsis=t.scrollWidth>t.clientWidth}},o=(s(1337),s(31)),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"assistant",class:[t.ellipsis?"assistant":"","text-overflow"]},[t._v("\n  "+t._s(t.assistants)+"\n\n  "),t.ellipsis?s("a-tooltip",{staticClass:"assistant-all",attrs:{placement:"bottom"}},[s("template",{slot:"title"},[s("span",[t._v(t._s(t.assistants))])]),t._v(" "),s("svg-icon",{staticStyle:{color:"#979797"},attrs:{icon:"icon-more"}})],2):t._e()],1)}),[],!1,null,"18dadfc4",null);e.a=r.exports},1357:function(t,e,s){"use strict";var n={name:"ClassName",props:{record:{type:Object,required:!0,default:function(){return{}}}},computed:{className:function(){var t=this.record,e=t.chapterTitle,s=t.unitTitle,n=t.title,a=t.tasks,i=t.tasks.number,o="";if("lesson"===a.mode)o="".concat(i,". ").concat(n);else{var r=i.split("-");o="".concat(i,".").concat(r[1]-1," [任务]").concat(a.title)}return s&&(o="".concat(s," ").concat(o)),e&&(o=s?"".concat(e," - ").concat(o):"".concat(e," ").concat(o)),o}}},a=s(31),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-overflow"},[s("span",{attrs:{title:t.className}},[t._v(t._s(t.className))]),t._v(" "),s("br"),t._v(" "),"published"!=t.record.tasks.status?s("a-tag",{staticStyle:{"margin-top":"4px"}},[t._v("未发布")]):t._e()],1)}),[],!1,null,null,null);e.a=i.exports},1394:function(t,e,s){"use strict";var n=s(1344);s.n(n).a},210:function(t,e,s){s(211);var n=s(49).Object;t.exports=function(t,e){return n.getOwnPropertyDescriptor(t,e)}},211:function(t,e,s){var n=s(134),a=s(180).f;s(335)("getOwnPropertyDescriptor",(function(){return function(t,e){return a(n(t),e)}}))},335:function(t,e,s){var n=s(74),a=s(49),i=s(309);t.exports=function(t,e){var s=(a.Object||{})[t]||Object[t],o={};o[t]=e(s),n(n.S+n.F*i((function(){s(1)})),"Object",o)}},336:function(t,e,s){s(337);var n=s(49).Object;t.exports=function(t,e){return n.defineProperties(t,e)}},337:function(t,e,s){var n=s(74);n(n.S+n.F*!s(140),"Object",{defineProperties:s(379)})},338:function(t,e,s){s(339),t.exports=s(49).Object.getOwnPropertyDescriptors},339:function(t,e,s){var n=s(74),a=s(340),i=s(134),o=s(180),r=s(381);n(n.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,s,n=i(t),c=o.f,u=a(n),l={},d=0;u.length>d;)void 0!==(s=c(n,e=u[d++]))&&r(l,e,s);return l}})},340:function(t,e,s){var n=s(358),a=s(342),i=s(133),o=s(102).Reflect;t.exports=o&&o.ownKeys||function(t){var e=n.f(i(t)),s=a.f;return s?e.concat(s(t)):e}},341:function(t,e,s){s(380),t.exports=s(49).Object.getOwnPropertySymbols},39:function(t,e,s){var n=s(129);t.exports=function(t,e,s){return e in t?n(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}},47:function(t,e,s){t.exports=s(581)},581:function(t,e,s){s(582),t.exports=s(49).Object.keys},582:function(t,e,s){var n=s(357),a=s(356);s(335)("keys",(function(){return function(t){return a(n(t))}}))},72:function(t,e,s){t.exports=s(210)},80:function(t,e,s){t.exports=s(338)},81:function(t,e,s){t.exports=s(341)}}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[393],{108:function(t,e,s){t.exports=s(336)},1282:function(t,e,s){"use strict";s.r(e);var n=s(129),a=s.n(n),i=s(108),o=s.n(i),r=s(79),c=s.n(r),u=s(72),l=s.n(u),d=s(80),p=s.n(d),f=s(47),m=s.n(f),h=s(39),v=s.n(h),y=s(61),_=s.n(y),g=s(493),k=s(1335),x={video:"视频",audio:"音频",live:"直播",discuss:"讨论",flash:"Flash",doc:"文档",ppt:"PPT",testpaper:"考试",homework:"作业",exercise:"练习",download:"下载资料",text:"图文"},S={name:"TeachMode",filters:{teachType:function(t){return x[t]}},props:{record:{type:Object,required:!0,default:function(){return{}}}},computed:{replayStatus:function(){var t=this.record.tasks,e=t.type,s=t.activity.ext;return!("live"!=e||!["generated","videoGenerated"].includes(s.replayStatus))},progressStatus:function(){var t=this.record.tasks,e=t.type,s=t.activity.ext;return"live"==e?s.progressStatus:""}}},b=s(31),w=Object(b.a)(S,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v("\n  "+t._s(t._f("teachType")(t.record.tasks.type))+"\n\n  "),t.progressStatus?[s("a-divider",{staticStyle:{margin:"0 4px"},attrs:{type:"vertical"}}),t._v(" "),"created"==t.progressStatus?s("span",{staticStyle:{"font-size":"14px",color:"#fb8d4d"}},[t._v("未开始")]):"start"==t.progressStatus?s("span",{staticStyle:{"font-size":"14px",color:"#43bc60"}},[t._v("直播中")]):"closed"==t.progressStatus?s("span",{staticStyle:{"font-size":"14px",color:"#999"}},[t._v("已结束")]):t._e()]:t._e(),t._v(" "),t.replayStatus?[s("br"),t._v(" "),s("a-tag",{staticStyle:{"margin-top":"4px"},attrs:{color:"green"}},[t._v("有回放")])]:t._e()],2)}),[],!1,null,null,null).exports,I=s(1338);function T(t,e){var s=m()(t);if(p.a){var n=p()(t);e&&(n=n.filter((function(e){return l()(t,e).enumerable}))),s.push.apply(s,n)}return s}function C(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?T(Object(s),!0).forEach((function(e){v()(t,e,s[e])})):c.a?o()(t,c()(s)):T(Object(s)).forEach((function(e){a()(t,e,l()(s,e))}))}return t}var O=[{title:"课时名称",dataIndex:"name",width:"15%",scopedSlots:{customRender:"name"}},{title:"教学模式",dataIndex:"mode",filters:[{text:"视频",value:"video"},{text:"音频",value:"audio"},{text:"直播",value:"live"},{text:"讨论",value:"discuss"},{text:"文档",value:"doc"},{text:"PPT",value:"ppt"},{text:"考试",value:"testpaper"},{text:"作业",value:"homework"},{text:"练习",value:"exercise"},{text:"下载资料",value:"download"},{text:"图文",value:"text"}],width:"12%",scopedSlots:{customRender:"mode"}},{title:"开课时间",dataIndex:"startTime",width:"13%",scopedSlots:{customRender:"startTime"}},{title:"时长",width:"10%",dataIndex:"time",scopedSlots:{customRender:"time"}},{title:"授课老师",width:"10%",ellipsis:!0,dataIndex:"teacher",scopedSlots:{customRender:"teacher"}},{title:"助教老师",width:"10%",ellipsis:!0,dataIndex:"assistant",scopedSlots:{customRender:"assistant"}},{title:"问题讨论",width:"10%",dataIndex:"questionNum",scopedSlots:{customRender:"questionNum"}},{title:"学习人数",width:"10%",dataIndex:"studyStudentNum",scopedSlots:{customRender:"studyStudentNum"}},{title:"操作",width:"128px",dataIndex:"actions",scopedSlots:{customRender:"actions"}}],j={components:{ClassName:k.a,TeachMode:w,Assistant:I.a},data:function(){return{data:[],pagination:{},loading:!1,columns:O,locale:{filterConfirm:"确定",filterReset:"重置"},multiClassId:this.$route.params.id,keywords:"",courseId:0,courseSetId:0}},mounted:function(){var t=this;this.fetchLessons(),this.fetchMultiClass(),$("#modal").on("hide.bs.modal",(function(){var e={limit:10,offset:10*(t.pagination.current-1)};t.fetchLessons(e)}))},filters:{timeTransfer:function(t){var e=_.a.floor(t/60),s=t%60,n="".concat(e,"min ");return s&&(n+="".concat(s,"s")),n}},methods:{handleTableChange:function(t,e,s){var n=s.order,a=C({},this.pagination);a.current=t.current,this.pagination=a;var i={limit:t.pageSize,offset:(t.current-1)*t.pageSize};_.a.size(e)&&(i.types=e.mode),n&&(i.sort="ascend"==n?"ASC":"DESC"),this.fetchLessons(i)},fetchMultiClass:function(){var t=this;g.i.get(this.multiClassId).then((function(e){var s=e.course,n=s.id,a=s.courseSetId;t.courseId=n,t.courseSetId=a}))},fetchLessons:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loading=!0,g.i.getLessons(this.multiClassId,C({limit:10,titleLike:this.keywords},e)).then((function(e){var s=C({},t.pagination);s.total=e.paging.total,t.loading=!1,t.data=e.data,t.pagination=s}))},onSearch:function(t){this.keywords=t,this.pagination.current=1,this.fetchLessons()},handleMenuClick:function(t,e){"copy"!==t?["publish","unpublish"].includes(t)?this.updateTaskStatus(t,e):"delete"===t&&this.deleteTask(e):this.copy(e)},copy:function(t){this.$clipboard(this.copyTaskUrl(t)),this.$message.success("复制成功")},updateTaskStatus:function(t,e){var s=this,n=e.tasks,a=n.courseId,i=n.id,o="publish"==t?"发布成功":"取消发布成功";g.c.updateTaskStatus(a,i,{type:t}).then((function(){s.$message.success(o),_.a.forEach(s.data,(function(e){e.tasks.id==i&&(e.tasks.status="publish"===t?"published":"create")}))}))},deleteTask:function(t){var e=this,s=t.tasks,n=s.courseId,a=s.id;this.$confirm({title:"删除",content:"是否确定删除该课时吗?",okType:"danger",onOk:function(){g.c.deleteTask(n,a).then((function(t){t.success&&(e.$message.success("删除成功"),_.a.forEach(e.data,(function(t,s){t.tasks.id==a&&e.data.splice(s,1)})))}))}})},copyTaskUrl:function(t){return"".concat(window.location.origin,"/course/").concat(t.courseId)},goToEditorLesson:function(){this.$router.push({name:"MultiClassEditorLesson",params:{id:this.courseId},query:{courseSetId:this.courseSetId,multiClassId:this.multiClassId}})}}},P=(s(1365),Object(b.a)(j,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"class-info"},[s("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"16px"}},[s("a-input-search",{staticClass:"pull-left",staticStyle:{width:"260px"},attrs:{placeholder:"请输入课时关键字搜索"},on:{search:t.onSearch}}),t._v(" "),t.isPermission("course_lesson_manage")?s("a-button",{staticClass:"pull-right",attrs:{type:"primary"},on:{click:t.goToEditorLesson}},[t._v("\n      重排课时/新增课时\n    ")]):t._e()],1),t._v(" "),s("a-table",{attrs:{columns:t.columns,"row-key":function(t){return t.id},"data-source":t.data,loading:t.loading,pagination:t.pagination,locale:t.locale},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"name",fn:function(t,e){return s("class-name",{attrs:{record:e}})}},{key:"mode",fn:function(t,e){return s("teach-mode",{attrs:{record:e}})}},{key:"startTime",fn:function(e,s){return["live"===s.tasks.type?[t._v("\n        "+t._s(t.$dateFormat(s.tasks.startTime,"YYYY-MM-DD HH:mm"))+"\n      ")]:[t._v(" -- ")]]}},{key:"time",fn:function(e,s){return["video"===s.tasks.type?[t._v("\n        "+t._s((s.tasks.length/60).toFixed(2))+"min\n      ")]:"live"===s.tasks.type?[t._v(t._s(s.tasks.length)+"min")]:[t._v("--")]]}},{key:"teacher",fn:function(e){return[t._v(t._s(e.nickname))]}},{key:"assistant",fn:function(t){return s("assistant",{attrs:{assistant:t}})}},{key:"questionNum",fn:function(e,n){return s("a",{attrs:{href:"/my/course/"+n.tasks.courseId+"/question?type=question",target:"_blank"}},[t._v(t._s(e))])}},{key:"studyStudentNum",fn:function(e,s){return[t._v("\n      "+t._s(e)+"/"+t._s(s.totalStudentNum)+"\n    ")]}},{key:"actions",fn:function(e,n){return[s("a-dropdown",{staticStyle:{"margin-right":"12px"},attrs:{trigger:["hover"],placement:"bottomRight"}},[s("a-button",{attrs:{type:"link"},on:{click:function(t){return t.preventDefault()}}},[s("a-icon",{attrs:{type:"copy"}})],1),t._v(" "),s("a-menu",{attrs:{slot:"overlay"},on:{click:function(e){var s=e.key;return t.handleMenuClick(s,n)}},slot:"overlay"},[s("a-menu-item",{key:"copy"},[t._v("\n            复制课程链接\n          ")])],1)],1),t._v(" "),t.isPermission("course_lesson_manage")?s("a-button",{attrs:{type:"link","data-toggle":"modal","data-target":"#modal","data-url":"/course/"+n.courseId+"/task/"+n.tasks.id+"/update"}},[t._v("编辑")]):t._e(),t._v(" "),t.isPermission("course_lesson_manage")?s("a-dropdown",{attrs:{trigger:["hover"],placement:"bottomRight"}},[s("a",{staticClass:"ant-dropdown-link",staticStyle:{"margin-left":"-6px"},on:{click:function(t){return t.preventDefault()}}},[s("a-icon",{attrs:{type:"caret-down"}})],1),t._v(" "),s("a-menu",{attrs:{slot:"overlay"},on:{click:function(e){var s=e.key;return t.handleMenuClick(s,n)}},slot:"overlay"},["published"==n.tasks.status&&t.isPermission("course_lesson_manage")?s("a-menu-item",{key:"unpublish"},[t._v("\n            取消发布\n          ")]):[t.isPermission("course_lesson_manage")?s("a-menu-item",{key:"publish"},[t._v("\n              立即发布\n            ")]):t._e(),t._v(" "),t.isPermission("course_lesson_manage")?s("a-menu-item",{key:"delete"},[s("span",{staticStyle:{color:"#fe4040",cursor:"pointer"}},[t._v("删除")])]):t._e()]],2)],1):t._e()]}}])})],1)}),[],!1,null,null,null));e.default=P.exports},1307:function(t,e,s){},1323:function(t,e,s){"use strict";var n=s(1307);s.n(n).a},1329:function(t,e,s){},1335:function(t,e,s){"use strict";var n={name:"ClassName",props:{record:{type:Object,required:!0,default:function(){return{}}}},computed:{className:function(){var t=this.record,e=t.chapterTitle,s=t.unitTitle,n=t.title,a=t.tasks,i=t.tasks.number,o="";if("lesson"===a.mode)o="".concat(i,". ").concat(n);else{var r=i.split("-");o="".concat(i,".").concat(r[1]-1," [任务]").concat(a.title)}return s&&(o="".concat(s," ").concat(o)),e&&(o=s?"".concat(e," - ").concat(o):"".concat(e," ").concat(o)),o}}},a=s(31),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-overflow"},[s("span",{attrs:{title:t.className}},[t._v(t._s(t.className))]),t._v(" "),s("br"),t._v(" "),"published"!=t.record.tasks.status?s("a-tag",{staticStyle:{"margin-top":"4px"}},[t._v("未发布")]):t._e()],1)}),[],!1,null,null,null);e.a=i.exports},1338:function(t,e,s){"use strict";var n=s(61),a=s.n(n),i={name:"Assistant",props:{assistant:{required:!0,default:function(){return[]}}},data:function(){return{ellipsis:!1}},computed:{assistants:function(){if(!a.a.size(this.assistant))return"- -";var t=[];return this.assistant.nickname?t.push(this.assistant.nickname):a.a.forEach(this.assistant,(function(e,s){e.nickname?t.push(e.nickname):t.push(e)})),a.a.join(t,"、")}},mounted:function(){var t=this.$refs.assistant;this.ellipsis=t.scrollWidth>t.clientWidth}},o=(s(1323),s(31)),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"assistant",class:[t.ellipsis?"assistant":"","text-overflow"]},[t._v("\n  "+t._s(t.assistants)+"\n\n  "),t.ellipsis?s("a-tooltip",{staticClass:"assistant-all",attrs:{placement:"bottom"}},[s("template",{slot:"title"},[s("span",[t._v(t._s(t.assistants))])]),t._v(" "),s("svg-icon",{staticStyle:{color:"#979797"},attrs:{icon:"icon-more"}})],2):t._e()],1)}),[],!1,null,"18dadfc4",null);e.a=r.exports},1365:function(t,e,s){"use strict";var n=s(1329);s.n(n).a},210:function(t,e,s){s(211);var n=s(49).Object;t.exports=function(t,e){return n.getOwnPropertyDescriptor(t,e)}},211:function(t,e,s){var n=s(134),a=s(180).f;s(335)("getOwnPropertyDescriptor",(function(){return function(t,e){return a(n(t),e)}}))},335:function(t,e,s){var n=s(74),a=s(49),i=s(309);t.exports=function(t,e){var s=(a.Object||{})[t]||Object[t],o={};o[t]=e(s),n(n.S+n.F*i((function(){s(1)})),"Object",o)}},336:function(t,e,s){s(337);var n=s(49).Object;t.exports=function(t,e){return n.defineProperties(t,e)}},337:function(t,e,s){var n=s(74);n(n.S+n.F*!s(140),"Object",{defineProperties:s(378)})},338:function(t,e,s){s(339),t.exports=s(49).Object.getOwnPropertyDescriptors},339:function(t,e,s){var n=s(74),a=s(340),i=s(134),o=s(180),r=s(380);n(n.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,s,n=i(t),c=o.f,u=a(n),l={},d=0;u.length>d;)void 0!==(s=c(n,e=u[d++]))&&r(l,e,s);return l}})},340:function(t,e,s){var n=s(357),a=s(342),i=s(133),o=s(102).Reflect;t.exports=o&&o.ownKeys||function(t){var e=n.f(i(t)),s=a.f;return s?e.concat(s(t)):e}},341:function(t,e,s){s(379),t.exports=s(49).Object.getOwnPropertySymbols},39:function(t,e,s){var n=s(129);t.exports=function(t,e,s){return e in t?n(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}},47:function(t,e,s){t.exports=s(580)},580:function(t,e,s){s(581),t.exports=s(49).Object.keys},581:function(t,e,s){var n=s(356),a=s(355);s(335)("keys",(function(){return function(t){return a(n(t))}}))},72:function(t,e,s){t.exports=s(210)},79:function(t,e,s){t.exports=s(338)},80:function(t,e,s){t.exports=s(341)}}]);
>>>>>>> d1125bd0b8762d718dd0dee8d3a5988966016e59
