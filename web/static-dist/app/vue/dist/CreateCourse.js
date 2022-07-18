(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{1432:function(e,a,t){"use strict";t.r(a);var r=t(26),i=t.n(r),s=t(35),n=t.n(s),l=t(33),o=t.n(l),c=t(193),u=t.n(c),d=t(341),p=t.n(d),m=t(1450),v=t(393),f=t.n(v),h=t(1493),g=t.n(h),b=(t(1494),t(1445)),y={name:"CreateCourse",props:{},components:{VueCropper:g.a,AsideLayout:m.a},data:function(){return{cropModal:0,form:this.$form.createForm(this),formInfo:{buyable:!0},teacher:{list:[],title:"",flag:!0,initialValue:void 0,paging:{pageSize:10,current:0}},assistant:{list:[],title:"",flag:!0,initialValue:[],paging:{pageSize:10,current:0}},courseCoverUrl:"",imgUrl:"",cropModalVisible:!1,loading:!1,editor:{},ajaxLoading:!1,uploadToken:{},courseCoverName:"",uploading:!1,imgs:null,imageUploadUrl:"/editor/upload?token=",flashUploadUrl:"/editor/upload?token=",liveCapacity:0}},created:function(){this.fetchAssistants(),this.fetchTeacher(),this.getLiveCapacity()},mounted:function(){var e=this;return p()(u.a.mark((function a(){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.getEditorUploadToken();case 2:e.editor=CKEDITOR.replace("summary",{allowedContent:!0,toolbar:"Detail",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:e.imageUploadUrl,filebrowserFlashUploadUrl:e.flashUploadUrl});case 3:case"end":return a.stop()}}),a)})))()},methods:{getUploadToken:function(){var e=this;return p()(u.a.mark((function a(){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.E.get("default");case 2:return e.uploadToken=a.sent,a.abrupt("return",o.a.resolve(1));case 4:case"end":return a.stop()}}),a)})))()},getEditorUploadToken:function(){var e=this;return p()(u.a.mark((function a(){var t,r;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.E.get("course");case 2:return t=a.sent,r=t.token,e.imageUploadUrl+=r,e.flashUploadUrl+=r,a.abrupt("return",o.a.resolve(1));case 7:case"end":return a.stop()}}),a)})))()},getLiveCapacity:function(){var e=this;return p()(u.a.mark((function a(){var t,r;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.n.search();case 2:t=a.sent,r=t.capacity,e.liveCapacity=Number(r);case 5:case"end":return a.stop()}}),a)})))()},saveCourseSet:function(){var e=this;this.form.validateFields(function(){var a=p()(u.a.mark((function a(t,r){var i,s,n,l,o,c,d,p;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t){a.next=2;break}return a.abrupt("return");case 2:return e.ajaxLoading=!0,r=e.formatValues(r),a.prev=4,a.next=7,b.i.add(r);case 7:i=a.sent,s=i.error,n=i.defaultCourseId,l=i.title,o=i.id,c=i.title,d=i.course,s||(e.$message.success("创建成功"),p=d.maxStudentNum,e.goToMultiClassCreatePage({id:n,title:c,courseSetId:o,courseSetTitle:l,maxStudentNum:p}));case 15:return a.prev=15,e.ajaxLoading=!1,a.finish(15);case 18:case"end":return a.stop()}}),a,null,[[4,,15,18]])})));return function(e,t){return a.apply(this,arguments)}}())},disabledTeacher:function(e){var a=e||this.form.getFieldValue("assistants")||this.assistant.initialValue;f.a.forEach(this.teacher.list,(function(e){f.a.includes(a,e.id)||(e.disabled=!1),f.a.forEach(a,(function(a){e.id==a&&(e.disabled=!0)}))}))},disabledAssistant:function(e){var a=e||this.form.getFieldValue("teachers")||this.teacher.initialValue;f.a.forEach(this.assistant.list,(function(e){e.id==a?e.disabled=!0:e.disabled=!1}))},formatValues:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var a in e.summary=this.editor.getData(),e.teachers=[e.teachers],e=f.a.assignIn(e,{buyable:Number(this.formInfo.buyable)}),this.imgs&&(e.images=this.imgs),e)["buyExpiryTime","expiryStartDate","expiryEndDate","deadline"].includes(a)&&(e[a]=new Date(e[a]).getTime(),e[a]=f.a.floor(e[a]/1e3));return e},fetchTeacher:function(){var e=this,a=this.teacher,t=a.title,r=a.paging,i=r.pageSize,s={limit:i,offset:i*r.current};t&&(s.nickname=t),b.C.search(s).then((function(a){e.teacher.paging.current++,e.teacher.list=f.a.concat(e.teacher.list,a.data),f.a.size(e.teacher.list)>=a.paging.total&&(e.teacher.flag=!1),e.disabledTeacher()}))},handleSearchTeacher:f.a.debounce((function(e){this.teacher={list:[],title:e,flag:!0,paging:{pageSize:10,current:0}},this.fetchTeacher()}),300),teacherScroll:f.a.debounce((function(e){var a=e.target;a.scrollHeight-a.offsetHeight-20<a.scrollTop&&this.teacher.flag&&this.fetchTeacher()}),300),fetchAssistants:function(){var e=this,a=this.assistant,t=a.title,r=a.paging,i=r.pageSize,s={limit:i,offset:i*r.current};t&&(s.nickname=t),b.a.search(s).then((function(a){e.assistant.paging.current++,e.assistant.list=f.a.concat(e.assistant.list,a.data),f.a.size(e.assistant.list)>=a.paging.total&&(e.assistant.flag=!1),e.disabledAssistant()}))},handleSearchAssistant:f.a.debounce((function(e){this.assistant={list:[],title:e,flag:!0,paging:{pageSize:10,current:0}},this.fetchAssistants()}),300),assistantScroll:f.a.debounce((function(e){var a=e.target;a.scrollHeight-a.offsetHeight-20<a.scrollTop&&this.assistant.flag&&this.fetchAssistants()}),300),handleChange:function(e,a){console.log(e),"teacher"!==a?"assistant"===a&&this.disabledTeacher(e):this.disabledAssistant(e)},switchBuyAble:function(e){this.$set(this.formInfo,"buyable",e)},uploadCourseCover:function(e){var a=this;this.cropModal+=1;var t=new FileReader;t.onload=function(e){a.imgUrl=e.target.result,a.cropModalVisible=!0},this.courseCoverName=e.file.originFileObj.name,t.readAsDataURL(e.file.originFileObj)},reSelectCourseCover:function(){var e=this.$refs.upload.$el.getElementsByTagName("input");this.cropModalVisible=!1,e.length>0&&e[0].click()},saveCourseCover:function(){var e=this;return p()(u.a.mark((function a(){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e.loading=!0,e.uploadToken.expiry&&!(new Date>=new Date(e.uploadToken.expiry))){a.next=4;break}return a.next=4,e.getUploadToken();case 4:e.$refs.cropper.getCroppedCanvas().toBlob(function(){var a=p()(u.a.mark((function a(t){var r,i,s,l,o,c,d,p,m,v,h,g,y;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=e.$refs.cropper.getData(),i=r.x,s=r.y,l=r.width,o=r.height,c=e.$refs.cropper.getImageData(),d={x:f.a.ceil(f.a.max([0,i])),y:f.a.ceil(f.a.max([0,s])),width:f.a.ceil(l),height:f.a.ceil(o)},p=n()({x:d.x,y:d.y,x2:f.a.add(d.x,d.width),y2:f.a.add(d.y,d.height),w:d.width,h:d.height,"imgs[large][0]":480,"imgs[large][1]":270,"imgs[middle][0]":304,"imgs[middle][1]":171,"imgs[small][0]":96,"imgs[small][1]":54,post:!1,width:c.naturalWidth,height:c.naturalHeight,group:"course"},"post",!1),(m=new FormData).append("file",t,e.courseCoverName),m.append("token",e.uploadToken.token),e.uploading=!0,a.prev=8,a.next=11,b.k.uploadFile(m);case 11:for(y in v=a.sent,h=v.url,e.imgUrl=h,e.courseCoverUrl=h,g=new FormData,p)g.append(y,p[y]);return a.next=19,b.k.imgCrop(g);case 19:e.imgs=a.sent;case 20:return a.prev=20,e.uploading=!1,e.cropModalVisible=!1,e.loading=!1,a.finish(20);case 25:case"end":return a.stop()}}),a,null,[[8,,20,25]])})));return function(e){return a.apply(this,arguments)}}());case 5:case"end":return a.stop()}}),a)})))()},requiredValidator:function(e,a,t){a||t(e.message),t()},goToMultiClassCreatePage:function(e){e?f.a.isObject(e)&&("group"!==this.$route.query.type?this.$router.replace({name:"MultiClassCreate",query:{course:i()(e)}}):this.$router.replace({name:"MultiClassCreateGroup",query:{course:i()(e)}})):this.$router.go(-1)},validatePrice:function(e,a,t){!1===/^[0-9]{0,8}(\.\d{0,2})?$/.test(a)&&t(e.message),t()},validateRange:function(e,a,t){a=Number(a),!f.a.isInteger(a)||a<0?t("请输入正整数"):a>this.liveCapacity&&t("网校可支持最多".concat(this.liveCapacity,"人同时参加直播。")),t()}}},_=(t(1749),t(30)),x=Object(_.a)(y,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("aside-layout",{staticClass:"create-course",attrs:{breadcrumbs:[{name:"新建课程"}]}},[t("a-form",{staticStyle:{"max-width":"860px"},attrs:{form:e.form,"label-col":{span:3},"wrapper-col":{span:21}}},[t("a-form-item",{attrs:{label:"课程类型"}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{initialValue:"live"}],expression:"['type', {\n          initialValue: 'live'\n        }]"}],attrs:{options:[{label:"直播大班课",value:"live"}]}})],1),e._v(" "),t("a-form-item",{attrs:{label:"课程标题"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请填写课程名称"}]}],expression:"['title', { rules: [\n          { required: true, message: '请填写课程名称' },\n        ]} ]"}],attrs:{placeholder:"请输入课程标题"}})],1),e._v(" "),t("a-form-item",{attrs:{label:"课程副标题"}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["subtitle"],expression:"['subtitle']"}],attrs:{"auto-size":"",placeholder:"请输入课程副标题"}})],1),e._v(" "),t("a-form-item",{attrs:{label:"封面图片"}},[t("a-upload",{ref:"upload",attrs:{accept:"image/*","file-list":[],customRequest:function(){},"list-type":"picture-card"},on:{change:e.uploadCourseCover}},[e.courseCoverUrl?t("img",{staticStyle:{width:"100%"},attrs:{src:e.courseCoverUrl}}):t("div",[t("a-icon",{attrs:{type:e.loading?"loading":"plus"}}),e._v(" "),t("div",{staticClass:"ant-upload-text"},[e._v("\n          上传照片\n        ")])],1)])],1),e._v(" "),t("a-form-item",{attrs:{label:"课程简介"}},[t("div",{attrs:{id:"summary"}})]),e._v(" "),t("a-form-item",{attrs:{label:"授课教师"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["teachers",{rules:[{required:!0,message:"请选择授课老师"}]}],expression:"['teachers', { rules: [{ required: true, message: '请选择授课老师' }] }]"}],attrs:{"show-search":"","default-active-first-option":!1,"show-arrow":!1,"filter-option":!1,"not-found-content":null,placeholder:"请选择授课教师"},on:{popupScroll:e.teacherScroll,search:e.handleSearchTeacher,change:function(a){return e.handleChange(a,"teacher")}}},e._l(e.teacher.list,(function(a){return t("a-select-option",{key:a.id,attrs:{disabled:a.disabled}},[e._v("\n          "+e._s(a.nickname)+"\n        ")])})),1)],1),e._v(" "),t("a-form-item",{attrs:{label:"助教"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["assistants",{rules:[{required:!0,message:"至少选择一位助教"}]}],expression:"['assistants', { rules: [{ required: true, message: '至少选择一位助教'}]}]"}],attrs:{mode:"multiple","default-active-first-option":!1,"show-arrow":!1,"filter-option":!1,"not-found-content":null,placeholder:"请选择一个或多个助教"},on:{popupScroll:e.assistantScroll,search:e.handleSearchAssistant,change:function(a){return e.handleChange(a,"assistant")}}},e._l(e.assistant.list,(function(a){return t("a-select-option",{key:a.id,attrs:{disabled:a.disabled}},[e._v("\n          "+e._s(a.nickname)+"\n        ")])})),1)],1),e._v(" "),t("a-form-item",{staticStyle:{position:"relative"},attrs:{label:"价格"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["originPrice",{initialValue:0,rules:[{validator:e.validatePrice,message:"请输入大于0的有效价格，最多两位小数，整数位不超过8位！"}]}],expression:"['originPrice', { initialValue: 0, rules: [\n          { validator: validatePrice, message: '请输入大于0的有效价格，最多两位小数，整数位不超过8位！' }\n        ] }]"}],attrs:{placeholder:"请输入产品价格"}},[t("span",{attrs:{slot:"suffix"},slot:"suffix"},[e._v("元")])])],1),e._v(" "),t("a-form-item",{attrs:{label:"学习模式"}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["learnMode",{initialValue:"freeMode"}],expression:"['learnMode', {\n          initialValue: 'freeMode'\n        }]"}],attrs:{options:[{label:"自由式",value:"freeMode"},{label:"解锁式",value:"lockMode"}]}}),e._v(" "),t("div",{staticClass:"color-gray cd-mt8"},[[e._v("自由式：学习过程自由安排;")],e._v(" "),[e._v("解锁式：根据既定顺序逐个解锁学习")]],2)],1),e._v(" "),t("a-form-item",{attrs:{label:"任务完成规则"}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["enableFinish",{initialValue:"1"}],expression:"['enableFinish', {\n          initialValue: '1'\n        }]"}],attrs:{options:[{label:"无限制",value:"1"},{label:"由任务完成条件决定",value:"0"}]}}),e._v(" "),t("div",{staticClass:"color-gray cd-mt8"},[[e._v("必须达到完成条件，任务才算完成")]],2)],1),e._v(" "),"live"===e.form.getFieldValue("type")?t("a-form-item",{attrs:{label:"课程人数"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["maxStudentNum",{rules:[{required:!0,message:"请输入课程人数"},{validator:e.validateRange}]}],expression:"['maxStudentNum', { rules: [\n          { required: true, message: '请输入课程人数' },\n          { validator: validateRange },\n        ]}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入课程人数"}},[t("span",{attrs:{slot:"suffix"},slot:"suffix"},[e._v("人")])])],1):e._e(),e._v(" "),t("a-form-item",{attrs:{label:"是否可加入"}},[t("a-switch",{model:{value:e.formInfo.buyable,callback:function(a){e.$set(e.formInfo,"buyable",a)},expression:"formInfo.buyable"}}),e._v(" "),t("div",{staticClass:"color-gray cd-mt8"},[[e._v("关闭后，前台显示为“限制课程”，学员自己无法加入，需要由老师手动添加学员。常用于封闭型教学。")]],2)],1),e._v(" "),t("a-form-item",{attrs:{label:"加入截止日期"}},[t("div",{staticStyle:{overflow:"hidden"}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["enableBuyExpiryTime",{initialValue:"0",rules:[{required:!0,message:"请输入加入截止日期"}]}],expression:"['enableBuyExpiryTime', {\n            initialValue: '0',\n            rules: [{ required: true, message: '请输入加入截止日期' }]\n          }]"}],staticClass:"pull-left mt12",attrs:{options:[{label:"不限制",value:"0"},{label:"自定义",value:"1"}]}}),e._v(" "),"1"===e.form.getFieldValue("enableBuyExpiryTime")?t("a-form-item",{staticClass:"pull-left",staticStyle:{margin:"4px 0 0"}},[t("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["buyExpiryTime",{rules:[{required:!0,message:"请输入加入截止日期"}]}],expression:"['buyExpiryTime', {\n              rules: [{ required: true, message: '请输入加入截止日期' }]\n            }]"}],attrs:{placeholder:""}})],1):e._e()],1)]),e._v(" "),t("a-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"学习有效期"}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["expiryMode",{initialValue:"forever"}],expression:"['expiryMode', { initialValue: 'forever' }]"}],attrs:{options:[{label:"随到随学",value:"days"},{label:"固定周期",value:"date"},{label:"长期有效",value:"forever"}]}}),e._v(" "),t("a-tooltip",{attrs:{overlayClassName:"expand-tooltip"}},[t("template",{slot:"title"},[e._v("\n          随到随学：有效期从学员加入的当天开始算起，截至到期当天晚上的23:59"),t("br"),e._v("\n          固定周期：有固定的学习开始日期和结束日期"),t("br"),e._v("\n          过期后无法继续学习，系统会在到期前10天提醒学员。\n        ")]),e._v(" "),t("a",[t("a-icon",{staticStyle:{"margin-left":"-6px"},attrs:{type:"question-circle"}})],1)],2)],1),e._v(" "),"days"===e.form.getFieldValue("expiryMode")?t("a-form-item",{staticStyle:{position:"relative",left:"12.5%"}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["deadlineType",{initialValue:"days"}],expression:"['deadlineType', { initialValue: 'days' }]"}],attrs:{options:[{label:"按截止日期",value:"end_date"},{label:"按有效天数",value:"days"}]}}),e._v(" "),"end_date"===e.form.getFieldValue("deadlineType")?t("a-form-item",[t("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["deadline",{rules:[{validator:e.requiredValidator,message:"请输入截止日期"}]}],expression:"['deadline', {\n            rules: [{ validator: requiredValidator, message: '请输入截止日期' }]\n          }]"}]}),e._v(" "),t("span",{staticClass:"ml8"},[e._v("在此日期前，学员可进行学习。")])],1):t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["expiryDays",{rules:[{required:!0,message:"请输入有效期天数"}]}],expression:"['expiryDays', {\n            rules: [{ required: true, message: '请输入有效期天数' }]\n          }]"}],staticStyle:{width:"200px"}}),e._v(" "),t("span",{staticClass:"ml8"},[e._v("从加入当天起，在几天内可进行学习。")])],1)],1):e._e(),e._v(" "),"date"===e.form.getFieldValue("expiryMode")?t("a-form-item",{staticStyle:{position:"relative",left:"12.5%",overflow:"hidden"}},[t("a-form-item",{staticClass:"pull-left"},[t("span",{staticClass:"mr8"},[e._v("开始日期")]),e._v(" "),t("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["expiryStartDate",{rules:[{required:!0,message:"请输入开始日期"}]}],expression:"['expiryStartDate', {\n          rules: [{ required: true, message: '请输入开始日期' }]\n        }]"}]})],1),e._v(" "),t("a-form-item",{staticClass:"pull-left ml12"},[t("span",{staticClass:"mr8"},[e._v("结束日期")]),e._v(" "),t("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["expiryEndDate",{rules:[{required:!0,message:"请输入结束日期"}]}],expression:"['expiryEndDate', {\n          rules: [{ required: true, message: '请输入结束日期' }]\n        }]"}]})],1)],1):e._e()],1),e._v(" "),t("div",{staticClass:"create-course-btn-group"},[t("a-button",{staticClass:"save-course-btn",attrs:{type:"primary",loading:e.ajaxLoading},on:{click:e.saveCourseSet}},[e._v("创建课程")]),e._v(" "),t("a-button",{on:{click:function(a){return e.goToMultiClassCreatePage()}}},[e._v("取消")])],1),e._v(" "),t("a-modal",{key:e.cropModal,attrs:{visible:e.cropModalVisible},on:{cancel:function(a){e.cropModalVisible=!1,e.courseCoverUrl=""}}},[t("vue-cropper",{ref:"cropper",attrs:{"aspect-ratio":16/9,src:e.imgUrl}}),e._v(" "),t("template",{slot:"footer"},[t("a-button",{on:{click:e.reSelectCourseCover}},[e._v("重新选择")]),e._v(" "),t("a-button",{attrs:{type:"primary",loading:e.uploading},on:{click:e.saveCourseCover}},[e._v("保存图片")])],1)],2)],1)}),[],!1,null,"eec0caba",null);a.default=x.exports},1447:function(e,a,t){},1450:function(e,a,t){"use strict";var r={name:"AsideLayout",props:{breadcrumbs:{type:Array,required:!0},headerTitle:{type:String,default:""},headerTip:{type:String,default:""}}},i=(t(1451),t(30)),s=Object(i.a)(r,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"aside-layout"},[t("div",{staticClass:"aside-layout-header"},[t("a-breadcrumb",{staticClass:"pull-left aside-layout-header__breadcrumb",attrs:{separator:"/"}},e._l(e.breadcrumbs,(function(a,r){return t("a-breadcrumb-item",{key:r},[a.href?[t("a",{attrs:{href:a.href,target:"_blank"}},[e._v(e._s(a.name))])]:a.pathName?[t("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.$router.push({name:a.pathName})}}},[e._v(e._s(a.name))])]:[e._v("\n          "+e._s(a.name)+"\n        ")]],2)})),1),e._v(" "),e.headerTip?t("a-popover",{attrs:{placement:"bottomLeft"}},[t("template",{slot:"content"},[t("div",{staticClass:"aside-header-tip",domProps:{innerHTML:e._s(e.headerTip)}})]),e._v(" "),t("span",{staticClass:"aside-header-title-icon"},[t("a-icon",{attrs:{theme:"filled",type:"question-circle"}}),t("span",{staticClass:"icon-circle"},[e._v(e._s(e.headerTitle))])],1)],2):e._e()],1),e._v(" "),t("div",{staticClass:"aside-layout-main"},[e._t("default")],2)])}),[],!1,null,null,null);a.a=s.exports},1451:function(e,a,t){"use strict";var r=t(1447);t.n(r).a},1578:function(e,a,t){},1749:function(e,a,t){"use strict";var r=t(1578);t.n(r).a}}]);