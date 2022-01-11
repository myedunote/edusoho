(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{107:function(e,t,a){e.exports=a(340)},127:function(e,t,a){e.exports=a(516)},1339:function(e,t,a){},1340:function(e,t,a){a(1341),e.exports=a(51).Reflect.deleteProperty},1341:function(e,t,a){var n=a(78),r=a(181).f,i=a(132);n(n.S,"Reflect",{deleteProperty:function(e,t){var a=r(i(e),t);return!(a&&!a.configurable)&&delete e[t]}})},1342:function(e,t,a){"use strict";var n={name:"AsideLayout",props:{breadcrumbs:{type:Array,required:!0},headerTitle:{type:String,default:""},headerTip:{type:String,default:""}}},r=(a(1343),a(30)),i=Object(r.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"aside-layout"},[a("div",{staticClass:"aside-layout-header"},[a("a-breadcrumb",{staticClass:"pull-left aside-layout-header__breadcrumb",attrs:{separator:"/"}},e._l(e.breadcrumbs,(function(t,n){return a("a-breadcrumb-item",{key:n},[t.href?[a("a",{attrs:{href:t.href,target:"_blank"}},[e._v(e._s(t.name))])]:t.pathName?[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return e.$router.push({name:t.pathName})}}},[e._v(e._s(t.name))])]:[e._v("\n          "+e._s(t.name)+"\n        ")]],2)})),1),e._v(" "),e.headerTip?a("a-popover",{attrs:{placement:"bottomLeft"}},[a("template",{slot:"content"},[a("div",{staticClass:"aside-header-tip",domProps:{innerHTML:e._s(e.headerTip)}})]),e._v(" "),a("span",{staticClass:"aside-header-title-icon"},[a("a-icon",{attrs:{theme:"filled",type:"question-circle"}}),a("span",{staticClass:"icon-circle"},[e._v(e._s(e.headerTitle))])],1)],2):e._e()],1),e._v(" "),a("div",{staticClass:"aside-layout-main"},[e._t("default")],2)])}),[],!1,null,null,null);t.a=i.exports},1343:function(e,t,a){"use strict";var n=a(1339);a.n(n).a},1346:function(e,t,a){e.exports=a(1340)},1347:function(e,t,a){},1356:function(e,t,a){"use strict";var n={name:"Empty",props:{description:{type:String,default:"暂无数据"},image:{type:String,default:"/static-dist/app/img/vue/empty.png"},imageStyle:{type:Object,default:function(){return{height:"200px"}}}}},r=(a(1357),a(30)),i=Object(r.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-empty",{staticClass:"custom-empty",attrs:{image:e.image,"image-style":e.imageStyle}},[a("span",{staticClass:"custom-empty__description",attrs:{slot:"description"},slot:"description"},[e._v(e._s(e.description))])])}),[],!1,null,null,null);t.a=i.exports},1357:function(e,t,a){"use strict";var n=a(1347);a.n(n).a},137:function(e,t,a){e.exports=a(527)},1464:function(e,t,a){},1465:function(e,t,a){},1500:function(e,t,a){"use strict";var n=a(338),r=a.n(n),i=a(442),s=a.n(i),o=a(348),c=a.n(o),l=a(1337),u=a(383),d=a.n(u),p={name:"LessonDirectoryItem",props:{lesson:{type:Object,required:!0},className:{type:String,required:!0},courseId:{type:[Number,String],required:!0}},computed:{getTitle:function(){var e=this.lesson,t=e.type,a=e.title,n=e.number;return"chapter"===t?"第".concat(n,"章 ").concat(a):"unit"===t?"第".concat(n,"节 ").concat(a):"lesson"===t?"课时".concat(n," ").concat(a):"任务".concat(n," ").concat(a)},getStartTime:function(){var e=this.lessonData,t=e.type,a=e.startTime;return"live"===t?this.$dateFormat(a,"YYYY/MM/DD HH:mm:ss"):"- -"},getLength:function(){var e=this.lessonData,t=e.type,a=e.length;return"live"===t?"".concat(a," 分钟"):"- -"},isOnlyOneTask:function(){return this.lesson.tasks&&1==this.lesson.tasks.length},lessonData:function(){return this.isOnlyOneTask?this.lesson.tasks[0]:this.lesson}},methods:{handleDeleteClick:function(){var e=this.lessonData,t=e.type,a=e.id,n=this;this.$confirm({content:"确认删除?",okType:"danger",icon:"close-circle",maskClosable:!0,onOk:function(){n.$emit("event-communication",{eventType:["chapter","unit"].includes(t)?"deleteChapterUnit":"deleteTask",id:a})}})},handleEditorClick:function(){var e=this.lessonData,t=e.type,a=e.id,n=e.title;this.$emit("event-communication",{eventType:"renameChapterUnit",id:a,type:t,title:n})}}},h=(a(1632),a(30)),f={name:"LessonDirectory",components:{LessonDirectoryItem:Object(h.a)(p,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:"lesson-directory-"+e.className+" clearfix"},[a("div",{staticClass:"title pull-left text-overflow"},[e.lessonData.mode&&"live"!==e.lessonData.type?a("a-tag",[e._v("非直播")]):e._e(),e._v(" "),e.lessonData.mode&&"published"!==e.lessonData.status?a("a-tag",[e._v("未发布")]):e._e(),e._v("\n    "+e._s(e.getTitle)+"\n  ")],1),e._v(" "),a("div",{staticClass:"start-time pull-left"},[e._v(e._s(e.getStartTime))]),e._v(" "),a("div",{staticClass:"duration pull-left"},[e._v(e._s(e.getLength))]),e._v(" "),a("div",{staticClass:"actions pull-left"},[a("a-space",{attrs:{size:"large"}},[e.lessonData.mode?a("a-icon",{staticStyle:{color:"#46c37b"},attrs:{type:"edit","data-toggle":"modal","data-target":"#modal","data-url":"/course/"+e.courseId+"/task/"+e.lessonData.id+"/update"}}):e._e(),e._v(" "),["chapter","unit"].includes(e.lessonData.type)?a("a-icon",{staticStyle:{color:"#46c37b"},attrs:{type:"edit"},on:{click:e.handleEditorClick}}):e._e(),e._v(" "),"lesson"!==e.lessonData.type&&"published"!==e.lessonData.status?a("a-icon",{staticStyle:{color:"#fe4040"},attrs:{type:"delete"},on:{click:e.handleDeleteClick}}):e._e()],1)],1)])}),[],!1,null,null,null).exports,Empty:a(1356).a},props:{courseId:{type:[Number,String],required:!0},lessonDirectory:{type:Array,required:!0}},methods:{allowDrag:function(e,t,a,n){if(!["chapter","unit","lesson"].includes(e))return!1;if(t&&"live"===t[0].type)return!1;if("chapter"===e&&"chapter"===a&&0!=n)return!0;if("unit"===e){if("chapter"===a)return!0;if("unit"===a&&0!=n)return!0}if("lesson"===e){if(["chapter","unit"].includes(a))return!0;if("lesson"===a&&0!=n)return!0}return!1},onDrop:function(e){var t,a,n,r,i,s,o=e.node.eventKey,l=e.dragNode.eventKey,u=e.node.pos.split("-"),d=e.dropPosition-Number(u[u.length-1]),p=function e(t,a,n){t.forEach((function(t,r,i){return t.id===a?n(t,r,i):t.children?e(t.children,a,n):t.tasks?e(t.tasks,a,n):void 0}))},h=c()(this.lessonDirectory);p(h,l,(function(e,r,i){t=e,a=r,n=i})),p(h,o,(function(e,t,a){r=e,i=t,s=a})),this.allowDrag(t.type,t.tasks,r.type,d)&&(n.splice(a,1),e.dropToGap?(e.node.children||[]).length>0&&e.node.expanded&&1===d?(r.children=r.children||[],r.children.unshift(t)):-1===d?s.splice(i,0,t):s.splice(i+1,0,t):(r.children=r.children||[],r.children.push(t)),this.$emit("change-lesson-directory",{data:h}))},eventCommunication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.eventType,a=e.id;"renameChapterUnit"!==t?"deleteChapterUnit"!==t?"deleteTask"===t&&this.deleteTask(a):this.deleteChapter(a):this.renameChapterUnit(e)},renameChapterUnit:function(e){this.$emit("change-lesson-directory",e)},deleteChapter:function(e){var t=this;return s()(r.a.mark((function a(){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.f.deleteChapter(t.courseId,e);case 2:n=a.sent,n.success&&(t.$emit("change-lesson-directory",{eventType:"update"}),t.$message.success("删除成功"));case 5:case"end":return a.stop()}}),a)})))()},deleteTask:function(e){var t=this;return s()(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.f.deleteTask(t.courseId,e);case 2:a.sent&&(t.$emit("change-lesson-directory",{eventType:"update"}),t.$message.success("删除成功"));case 4:case"end":return a.stop()}}),a)})))()}}},m=(a(1633),Object(h.a)(f,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lesson-directory"},[e._m(0),e._v(" "),a("a-tree",{staticClass:"lesson-directory-tree",attrs:{draggable:"",blockNode:!0},on:{drop:e.onDrop}},[a("a-icon",{attrs:{slot:"switcherIcon",type:"down"},slot:"switcherIcon"}),e._v(" "),e._l(e.lessonDirectory,(function(t){return[a("a-tree-node",{key:t.id,class:"tree-node-"+t.type},[a("template",{slot:"title"},[a("lesson-directory-item",{attrs:{courseId:e.courseId,lesson:t,"class-name":"first"},on:{"event-communication":e.eventCommunication}})],1),e._v(" "),t.children?[e._l(t.children,(function(t){return[a("a-tree-node",{key:t.id,class:"tree-node-"+t.type},[a("template",{slot:"title"},[a("lesson-directory-item",{attrs:{courseId:e.courseId,lesson:t,"class-name":"second"},on:{"event-communication":e.eventCommunication}})],1),e._v(" "),t.children?[e._l(t.children,(function(t){return[a("a-tree-node",{key:t.id,class:"tree-node-"+t.type},[a("template",{slot:"title"},[a("lesson-directory-item",{attrs:{courseId:e.courseId,lesson:t,"class-name":"third"},on:{"event-communication":e.eventCommunication}})],1),e._v(" "),t.tasks&&t.tasks.length>1?[e._l(t.tasks,(function(t){return[a("a-tree-node",{key:t.id,staticClass:"tree-node-task"},[a("template",{slot:"title"},[a("lesson-directory-item",{attrs:{courseId:e.courseId,lesson:t,"class-name":"four"},on:{"event-communication":e.eventCommunication}})],1)],2)]}))]:e._e()],2)]}))]:e._e(),e._v(" "),t.tasks&&t.tasks.length>1?[e._l(t.tasks,(function(t){return[a("a-tree-node",{key:t.id,staticClass:"tree-node-task"},[a("template",{slot:"title"},[a("lesson-directory-item",{attrs:{courseId:e.courseId,lesson:t,"class-name":"third"},on:{"event-communication":e.eventCommunication}})],1)],2)]}))]:e._e()],2)]}))]:e._e(),e._v(" "),t.tasks&&t.tasks.length>1?[e._l(t.tasks,(function(t){return[a("a-tree-node",{key:t.id,staticClass:"tree-node-task"},[a("template",{slot:"title"},[a("lesson-directory-item",{attrs:{courseId:e.courseId,lesson:t,"class-name":"second"},on:{"event-communication":e.eventCommunication}})],1)],2)]}))]:e._e()],2)]}))],2),e._v(" "),e.lessonDirectory.length?e._e():a("empty")],1)}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"clearfix lesson-directory__header"},[a("div",{staticClass:"pull-left title"},[e._v("课时")]),e._v(" "),a("div",{staticClass:"pull-left start-time"},[e._v("开始时间")]),e._v(" "),a("div",{staticClass:"pull-left duration"},[e._v("持续时间")])])}],!1,null,null,null).exports),v=a(127),y=a.n(v),g=a(107),b=a.n(g),k=a(79),C=a.n(k),D=a(69),x=a.n(D),w=a(80),I=a.n(w),T=a(43),O=a.n(T),S=a(37),L=a.n(S);function M(e,t){var a=O()(e);if(I.a){var n=I()(e);t&&(n=n.filter((function(t){return x()(e,t).enumerable}))),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(Object(a),!0).forEach((function(t){L()(e,t,a[t])})):C.a?b()(e,C()(a)):M(Object(a)).forEach((function(t){y()(e,t,x()(a,t))}))}return e}var N=[{label:"周一",value:"Monday"},{label:"周二",value:"Tuesday"},{label:"周三",value:"Wednesday"},{label:"周四",value:"Thursday"},{label:"周五",value:"Friday"},{label:"周六",value:"Saturday"},{label:"周日",value:"Sunday"}],U=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],q={name:"CreateLiveModal",props:{visible:{type:Boolean,required:!0,default:!1},courseId:{type:[Number,String],required:!0,default:0}},data:function(){return{confirmLoading:!1,form:this.$form.createForm(this,{name:"create_live"}),createMode:!1,repeatType:"day",checkedList:[],indeterminate:!1,checkAll:!1,repeatDataOptions:N,startDate:"",repeatData:1}},computed:{getRepeatDataTip:function(){var e=moment(this.startDate).format("YYYY-MM-DD"),t={Monday:"周一",Tuesday:"周二",Wednesday:"周三",Thursday:"周四",Friday:"周五",Saturday:"周六",Sunday:"周日"};return"day"===this.repeatType?"从 ".concat(e," 所开始，每 ").concat(this.repeatData," 天有课"):"从 ".concat(e," 所处周开始，每 ").concat(d.a.join(d.a.map(this.repeatData,(function(e){return t[e]})),"、")," 有课")}},mounted:function(){this.startDate=this.form.getFieldValue("startDate")},methods:{moment:moment,onChangeCreateMode:function(e){this.createMode=e},onChangeRepeatType:function(e){this.form.resetFields(["repeatData"]);var t=e.target.value;this.repeatType=t,this.repeatData="day"==t?1:this.checkedList},onChangeCheckedList:function(e){d.a.assign(this,{checkedList:e,indeterminate:!!e.length&&e.length<N.length,checkAll:e.length===N.length,repeatData:e})},onCheckAllChange:function(e){var t=e.target.checked?U:[];this.form.setFieldsValue(L()({},"repeatData",t)),d.a.assign(this,{checkedList:t,indeterminate:!1,checkAll:e.target.checked,repeatData:t})},validatorTaskNum:d.a.debounce((function(e,t,a){t>50?a("一次批量生成最大为50个课时"):a()}),300),onChangeStartDate:function(e,t){this.startDate=e},onChangeRepeatData:function(e){this.repeatData=e},validatorStartDate:d.a.debounce((function(e,t,a){t._d<=moment()?a("开始时间不能小于当前时间"):a()}),300),range:function(e,t){for(var a=[],n=e;n<t;n++)a.push(n);return a},disabledDate:function(e){return e&&e<moment().startOf("day")},createTask:function(e){var t=this;return s()(r.a.mark((function a(){var n,i;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t.confirmLoading=!0,a.next=4,l.f.addLiveTask(t.courseId,e);case 4:n=a.sent,i=n.data,t.$emit("change-lesson-directory",{addData:i}),t.handleCancel();case 8:return a.prev=8,t.confirmLoading=!1,a.finish(8);case 11:case"end":return a.stop()}}),a,null,[[0,,8,11]])})))()},batchCreation:function(e){var t=this;return s()(r.a.mark((function a(){var n,i,s,o,c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n=[],i=e.taskNum,s=d.a.floor(i/5),i%5!=0&&s++,a.prev=4,t.confirmLoading=!0,o=0;case 7:if(!(o<s)){a.next=15;break}return a.next=10,l.f.addLiveTask(t.courseId,j(j({},e),{start:5*o,limit:5}));case 10:c=a.sent,d.a.forEach(c.data,(function(e){n.push(e)}));case 12:o++,a.next=7;break;case 15:t.$emit("change-lesson-directory",{addData:n}),t.handleCancel();case 17:return a.prev=17,t.confirmLoading=!1,a.finish(17);case 20:case"end":return a.stop()}}),a,null,[[4,,17,20]])})))()},handleOk:function(){var e=this;this.form.validateFields((function(t,a){if(!t)if(a.startDate=a.startDate._d,e.createMode){e.handleCancel();var n=e;e.$confirm({title:"提醒",content:"确定批量新增 ".concat(a.taskNum," 个直播课时吗?"),onOk:function(){n.batchCreation(a)},onCancel:function(){n.handleCancel(!0)}})}else e.createTask(a)}))},handleCancel:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$emit("handle-cancel",e)}}},E=Object(h.a)(q,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"添加直播课时",visible:e.visible,"confirm-loading":e.confirmLoading,"ok-text":"确认","cancel-text":"取消",width:"900px"},on:{ok:e.handleOk,cancel:function(t){return e.handleCancel(!1)}}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"课时名称","label-col":{span:3},"wrapper-col":{span:21}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请填写课时名称"},{max:40,message:"最长 40 个字符"}]}],expression:"['title', { rules: [\n          { required: true, message: '请填写课时名称' },\n          { max: 40, message: '最长 40 个字符' }\n        ]}]"}],attrs:{placeholder:"请输入课时名称"}})],1),e._v(" "),a("a-form-item",{attrs:{label:"批量生成","label-col":{span:3},"wrapper-col":{span:21}}},[a("a-switch",{attrs:{checked:e.createMode},on:{change:e.onChangeCreateMode}})],1),e._v(" "),e.createMode?a("a-form-item",{attrs:{label:"课时数量","label-col":{span:3},"wrapper-col":{span:21}}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["taskNum",{rules:[{required:!0,message:"请输入批量生成课时数量"},{validator:e.validatorTaskNum}]}],expression:"['taskNum', { rules: [\n          { required: true, message: '请输入批量生成课时数量' },\n          { validator: validatorTaskNum }\n        ]}]"}],staticStyle:{width:"100%"},attrs:{min:1,placeholder:"请输入课时数量"}})],1):e._e(),e._v(" "),a("a-form-item",{attrs:{label:"开始日期","label-col":{span:3},"wrapper-col":{span:21}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["startDate",{initialValue:e.moment().add(5,"minutes"),rules:[{type:"object",required:!0,message:"日期时间不能为空"},{validator:e.validatorStartDate}]}],expression:"['startDate', {\n          initialValue: moment().add(5, 'minutes'),\n          rules: [\n            { type: 'object', required: true, message: '日期时间不能为空' },\n            { validator: validatorStartDate }\n          ]\n        }]"}],attrs:{"show-time":{format:"HH:mm"},format:"YYYY-MM-DD HH:mm","disabled-date":e.disabledDate,"show-today":!1,placeholder:"请选择日期时间"},on:{change:e.onChangeStartDate}})],1),e._v(" "),a("a-form-item",{attrs:{label:"上课时长","label-col":{span:3},"wrapper-col":{span:21}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["length",{initialValue:60,rules:[{required:!0,message:"上课时长不能为空"}]}],expression:"['length', {\n          initialValue: 60,\n          rules: [{ required: true, message: '上课时长不能为空' }\n        ]}]"}],attrs:{placeholder:"选择上课时长"}},e._l(10,(function(t){return a("a-select-option",{key:"length"+t,attrs:{value:30*t}},[e._v(e._s(30*t)+" 分钟")])})),1)],1),e._v(" "),e.createMode?a("a-form-item",{attrs:{label:"重复方式","label-col":{span:3},"wrapper-col":{span:21}}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["repeatType",{initialValue:"day"}],expression:"['repeatType', { initialValue: 'day' }]"}],on:{change:e.onChangeRepeatType}},[a("a-radio",{attrs:{value:"day"}},[e._v("\n          按天重复\n        ")]),e._v(" "),a("a-radio",{attrs:{value:"week"}},[e._v("\n          按周重复\n        ")])],1)],1):e._e(),e._v(" "),e.createMode?a("a-form-item",{attrs:{label:"day"===e.repeatType?"按天重复":"每周重复","label-col":{span:3},"wrapper-col":{span:21}}},["day"===e.repeatType?[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["repeatData",{initialValue:1}],expression:"['repeatData', { initialValue: 1 }]"}],attrs:{placeholder:"选择上课时长"},on:{change:e.onChangeRepeatData}},e._l(6,(function(t){return a("a-select-option",{key:t,attrs:{value:t}},[e._v("\n            每 "+e._s(t)+" 天一次课\n          ")])})),1)]:[a("a-checkbox",{attrs:{indeterminate:e.indeterminate,checked:e.checkAll},on:{change:e.onCheckAllChange}},[e._v("全选")]),e._v(" "),a("a-checkbox-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["repeatData",{initialValue:e.checkedList,rules:[{required:!0,message:"请选择每周重复天数"}]}],expression:"['repeatData', {\n            initialValue: checkedList,\n            rules: [{ required: true, message: '请选择每周重复天数' }]\n          }]"}],attrs:{options:e.repeatDataOptions},on:{change:e.onChangeCheckedList}})],e._v(" "),"day"===e.repeatType||"week"===e.repeatType&&e.repeatData.length?a("div",{staticStyle:{color:"#fb8d4d"}},[a("a-icon",{staticStyle:{color:"#fb8d4d"},attrs:{type:"exclamation-circle"}}),e._v("\n        "+e._s(e.getRepeatDataTip)+"\n      ")],1):e._e()],2):e._e()],1)],1)}),[],!1,null,null,null).exports,A={name:"AddChapterOrUnitModal",props:{visible:{type:Boolean,required:!0},chapterUnitInfo:{type:Object,required:!0},type:String,courseId:{type:[Number,String],required:!0}},data:function(){return{form:this.$form.createForm(this,{name:"add_chapter_or_unit"})}},computed:{modalInfo:function(){var e={chapter:"章",unit:"节"}[this.type];return{title:"".concat(this.isEditor?"编辑":"创建"," ").concat(e),label:"".concat(e," 标题")}},isEditor:function(){return!!d.a.size(this.chapterUnitInfo)}},methods:{handleOk:function(){var e=this;this.form.validateFields((function(t,a){if(!t){var n={type:e.type,title:a.title};e.isEditor?l.f.editorChapter(e.courseId,e.chapterUnitInfo.id,n).then((function(t){e.$emit("change-lesson-directory",{eventType:"update"}),e.handleCancel()})):l.f.addChapter(e.courseId,n).then((function(t){e.$emit("change-lesson-directory",{addData:[t]}),e.handleCancel()}))}}))},handleCancel:function(){this.$emit("handle-cancel"),this.form.resetFields()}}},V={name:"Schedule",components:{LessonDirectory:m,CreateLiveModal:E,AddChapterOrUnitModal:Object(h.a)(A,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.modalInfo.title,visible:e.visible,okText:e.isEditor?"保存":"新增一栏"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:e.modalInfo.label,"label-col":{span:5},"wrapper-col":{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{initialValue:e.chapterUnitInfo.title,rules:[{required:!0,message:"标题不能为空"}]}],expression:"['title', {\n          initialValue: chapterUnitInfo.title,\n          rules: [{ required: true, message: '标题不能为空' }]\n        }]"}]})],1)],1)],1)}),[],!1,null,null,null).exports},props:{courseId:{type:[Number,String],required:!0},courseSetId:{type:[Number,String],required:!0}},data:function(){return{lessonDirectory:[],createLiveVisible:!1,addChapterOrUnitVisible:!1,addType:"",chapterUnitInfo:{}}},watch:{courseId:function(e,t){this.fetchCourseLesson(e)}},created:function(){this.fetchCourseLesson()},mounted:function(){var e=this;$("#modal").on("hide.bs.modal",(function(){e.sortItems()}))},methods:{fetchCourseLesson:function(){var e=this;this.courseId&&l.f.getCourseLesson(this.courseId,{format:1}).then((function(t){e.lessonDirectory=t}))},showCreateLiveModal:function(){this.createLiveVisible=!0},hideCreateLiveModal:function(e){this.createLiveVisible=e},changeLessonDirectory:function(e){var t=this,a=e.data,n=void 0===a?this.lessonDirectory:a,r=e.addData,i=e.eventType,s=e.type;if("renameChapterUnit"===i)return this.chapterUnitInfo=e,void this.showAddChapterOrUnitModal({key:s});if("update"!==i){var o=[],c=function e(t,a){_.forEach(a,(function(a){var n=a.type,r=a.id;t.push("".concat(n,"-").concat(r)),a.children&&e(t,a.children)}))};c(o,n),r&&c(o,r),l.f.courseSort(this.courseId,{sortInfos:o}).then((function(e){t.fetchCourseLesson()}))}else this.fetchCourseLesson()},sortItems:function(){var e=this,t=[];!function e(t,a){_.forEach(a,(function(a){var n=a.type,r=a.id;t.push("".concat(n,"-").concat(r)),a.children&&e(t,a.children)}))}(t,this.lessonDirectory),l.f.courseSort(this.courseId,{sortInfos:t}).then((function(t){e.fetchCourseLesson()}))},showAddChapterOrUnitModal:function(e){var t=e.key;this.addChapterOrUnitVisible=!0,this.addType=t},hideAddChapterOrUnitModal:function(){this.addChapterOrUnitVisible=!1,this.chapterUnitInfo={}}}},F=Object(h.a)(V,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("a-icon",{staticStyle:{color:"#bebebe"},attrs:{type:"exclamation-circle"}}),e._v("\n    排课只涉及直播课时\n  ")],1),e._v(" "),a("div",{staticClass:"clearfix"},[a("a-space",{attrs:{size:"large"}},[a("a-button",{attrs:{type:"primary",disabled:0==e.courseId},on:{click:e.showCreateLiveModal}},[a("a-icon",{attrs:{type:"plus"}}),e._v("\n        添加直播课时\n      ")],1),e._v(" "),a("a-dropdown",{attrs:{disabled:0==e.courseId,trigger:["click"]}},[a("a-button",{attrs:{type:"primary"}},[a("a-icon",{attrs:{type:"plus"}}),e._v("\n          章/节\n        ")],1),e._v(" "),a("a-menu",{attrs:{slot:"overlay"},on:{click:e.showAddChapterOrUnitModal},slot:"overlay"},[a("a-menu-item",{key:"chapter"},[e._v("添加章")]),e._v(" "),a("a-menu-item",{key:"unit"},[e._v("添加节")])],1)],1)],1),e._v(" "),e._e()],1),e._v(" "),a("lesson-directory",{attrs:{courseId:e.courseId,"lesson-directory":e.lessonDirectory},on:{"change-lesson-directory":e.changeLessonDirectory}}),e._v(" "),a("create-live-modal",{attrs:{courseId:e.courseId,visible:e.createLiveVisible},on:{"handle-cancel":e.hideCreateLiveModal,"change-lesson-directory":e.changeLessonDirectory}}),e._v(" "),a("add-chapter-or-unit-modal",{attrs:{type:e.addType,courseId:e.courseId,visible:e.addChapterOrUnitVisible,"chapter-unit-info":e.chapterUnitInfo},on:{"handle-cancel":e.hideAddChapterOrUnitModal,"change-lesson-directory":e.changeLessonDirectory}})],1)}),[],!1,null,null,null);t.a=F.exports},1632:function(e,t,a){"use strict";var n=a(1464);a.n(n).a},1633:function(e,t,a){"use strict";var n=a(1465);a.n(n).a},185:function(e,t,a){e.exports=a(525)},2:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},208:function(e,t,a){a(209);var n=a(51).Object;e.exports=function(e,t){return n.getOwnPropertyDescriptor(e,t)}},209:function(e,t,a){var n=a(133),r=a(181).f;a(339)("getOwnPropertyDescriptor",(function(){return function(e,t){return r(n(e),t)}}))},3:function(e,t,a){var n=a(127);function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),n(e,r.key,r)}}e.exports=function(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}},339:function(e,t,a){var n=a(78),r=a(51),i=a(307);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],s={};s[e]=t(a),n(n.S+n.F*i((function(){a(1)})),"Object",s)}},340:function(e,t,a){a(341);var n=a(51).Object;e.exports=function(e,t){return n.defineProperties(e,t)}},341:function(e,t,a){var n=a(78);n(n.S+n.F*!a(138),"Object",{defineProperties:a(384)})},342:function(e,t,a){a(343),e.exports=a(51).Object.getOwnPropertyDescriptors},343:function(e,t,a){var n=a(78),r=a(344),i=a(133),s=a(181),o=a(386);n(n.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,a,n=i(e),c=s.f,l=r(n),u={},d=0;l.length>d;)void 0!==(a=c(n,t=l[d++]))&&o(u,t,a);return u}})},344:function(e,t,a){var n=a(362),r=a(346),i=a(132),s=a(100).Reflect;e.exports=s&&s.ownKeys||function(e){var t=n.f(i(e)),a=r.f;return a?t.concat(a(e)):t}},345:function(e,t,a){a(385),e.exports=a(51).Object.getOwnPropertySymbols},348:function(e,t,a){var n=a(601),r=a(604),i=a(606),s=a(607);e.exports=function(e){return n(e)||r(e)||i(e)||s()}},37:function(e,t,a){var n=a(127);e.exports=function(e,t,a){return t in e?n(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},43:function(e,t,a){e.exports=a(598)},517:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}},598:function(e,t,a){a(599),e.exports=a(51).Object.keys},599:function(e,t,a){var n=a(361),r=a(360);a(339)("keys",(function(){return function(e){return r(n(e))}}))},601:function(e,t,a){var n=a(82),r=a(517);e.exports=function(e){if(n(e))return r(e)}},602:function(e,t,a){a(603),e.exports=a(51).Array.isArray},603:function(e,t,a){var n=a(78);n(n.S,"Array",{isArray:a(526)})},604:function(e,t,a){var n=a(137),r=a(605),i=a(185);e.exports=function(e){if(void 0!==i&&r(Object(e)))return n(e)}},605:function(e,t,a){e.exports=a(528)},606:function(e,t,a){var n=a(137),r=a(517);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?n(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}},607:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},69:function(e,t,a){e.exports=a(208)},79:function(e,t,a){e.exports=a(342)},80:function(e,t,a){e.exports=a(345)},82:function(e,t,a){e.exports=a(602)}}]);