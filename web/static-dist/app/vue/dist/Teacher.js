(window.webpackJsonp=window.webpackJsonp||[]).push([[439],{117:function(e,t,r){e.exports=r(652)},1517:function(e,t,r){"use strict";r.r(t);var a=r(111),n=r.n(a),i=r(117),o=r.n(i),s=r(76),c=r.n(s),u=r(74),l=r.n(u),d=r(77),f=r.n(d),p=r(48),m=r.n(p),v=r(43),h=r.n(v),_=r(5),b=r.n(_),g=r(11),y=r.n(g),k=r(35),w=r.n(k),x=r(1525),S=r(200),C=r(1553),T=r(1684);function I(e,t){var r=m()(e);if(f.a){var a=f()(e);t&&(a=a.filter((function(t){return l()(e,t).enumerable}))),r.push.apply(r,a)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){h()(e,t,r[t])})):c.a?o()(e,c()(r)):I(Object(r)).forEach((function(t){n()(e,t,l()(r,t))}))}return e}var q=[{title:"用户名",dataIndex:"nickname",ellipsis:!0,scopedSlots:{customRender:"nickname"}},{title:"在教班课/学员总数",dataIndex:"liveMultiClassNum",ellipsis:!0,customRender:function(e,t){return"".concat(e,"/").concat(t.liveMultiClassStudentNum)}},{title:"完结班课/学员总数",dataIndex:"endMultiClassNum",ellipsis:!0,customRender:function(e,t){return"".concat(e,"/").concat(t.endMultiClassStudentNum)}},{title:"在网校显示",scopedSlots:{customRender:"display"}},{title:"首页推荐",scopedSlots:{customRender:"promoteInfo"}},{title:"最近登录",scopedSlots:{customRender:"loginInfo"}},{title:"操作",scopedSlots:{customRender:"action"}}],O={title:"教师资格证编号",dataIndex:"qualification",width:"20%",scopedSlots:{customRender:"qualification"}},P={name:"Teachers",components:{userInfoTable:C.a,AsideLayout:x.a,EditorQualification:T.a},data:function(){return{visible:!1,user:{},columns:q,pageData:[],loading:!1,pagination:{},keyWord:"",setNumId:0,promotedSeq:void 0,modalVisible:!1,userInfoVisible:!0,form:this.$form.createForm(this,{name:"set_number"}),qualificationVisible:!1,currentTeacherUserId:0,currentTeacherQualification:{},showEditorSualification:!1}},created:function(){this.getSetting()},methods:{afterModalClose:function(){this.userInfoVisible=!1},getSetting:function(){var e=this;return y()(b.a.mark((function t(){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.D.get("qualification");case 2:r=t.sent,e.showEditorSualification=Boolean(r.qualification),e.showEditorSualification&&(w.a.forEach(e.columns,(function(e){e.width="20%"})),e.columns.splice(1,0,O)),e.fetchTeacher();case 6:case"end":return t.stop()}}),t)})))()},handleTableChange:function(e){var t=E({},this.pagination);t.current=e.current,this.pagination=t;var r={limit:e.pageSize,offset:(e.current-1)*e.pageSize};this.fetchTeacher(r)},fetchTeacher:function(e){var t=this;return y()(b.a.mark((function r(){var a,n,i,o;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.loading=!0,r.next=3,S.E.search(E({limit:20,nickname:t.keyWord},e));case 3:a=r.sent,n=a.data,i=a.paging,(o=E({},t.pagination)).total=i.total,o.pageSize=Number(i.limit),w.a.forEach(n,(function(e){e.isPromoted=1==e.promoted})),t.loading=!1,t.pageData=n,t.pagination=o;case 13:case"end":return r.stop()}}),r)})))()},onSearch:function(e){var t=this;return y()(b.a.mark((function r(){return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.keyWord=e,t.pagination.current=1,t.fetchTeacher();case 3:case"end":return r.stop()}}),r)})))()},edit:function(e){var t=this;return y()(b.a.mark((function r(){return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.user={},t.userInfoVisible=!0,r.next=4,S.I.get(e);case 4:t.user=r.sent,t.visible=!0;case 6:case"end":return r.stop()}}),r)})))()},close:function(){this.visible=!1},clickSetNumberModal:function(e){var t=e.id,r=e.promotedSeq;this.setNumId=t,this.promotedSeq=r,this.modalVisible=!0},handleOk:function(e){var t=this;this.form.validateFields(function(){var e=y()(b.a.mark((function e(r,a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=6;break}return e.next=3,S.E.promotion(t.setNumId,a);case 3:n=e.sent,n.success&&(w.a.forEach(t.pageData,(function(e){if(e.id==t.setNumId)return e.promotedSeq=a.number,e.isPromoted=!0,!1})),t.handleCancel());case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}())},handleCancel:function(){this.modalVisible=!1,this.form.resetFields()},changePromoted:function(e,t){var r=this;return y()(b.a.mark((function a(){var n;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n={},!e){a.next=7;break}return a.next=4,S.E.promotion(t);case 4:return n=a.sent,r.changePromotedCallBack(n,t,e),a.abrupt("return");case 7:r.$confirm({content:"真的要取消该教师推荐吗？",okText:"确认",cancelText:"取消",onOk:function(){var a=y()(b.a.mark((function a(){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,S.E.cancelPromotion(t);case 2:n=a.sent,r.changePromotedCallBack(n,t,e);case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()});case 8:case"end":return a.stop()}}),a)})))()},changePromotedCallBack:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;e.success&&w.a.forEach(this.pageData,(function(e){if(e.id==t)return e.isPromoted=r,!1}))},changeDisplay:function(e,t){var r=this;return y()(b.a.mark((function a(){var n,i,o;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n={query:{id:t},params:{showable:e?1:0}},i={},!e){a.next=8;break}return a.next=5,S.H.mdityDisplay(n);case 5:return i=a.sent,r.changeDisplayCallBack(i,t,e),a.abrupt("return");case 8:o=r,r.$confirm({content:"取消教师显示，将同时取消首页推荐。确定取消？",okText:"确定",cancelText:"取消",onOk:function(){return y()(b.a.mark((function r(){return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S.H.mdityDisplay(n);case 2:i=r.sent,o.changeDisplayCallBack(i,t,e);case 4:case"end":return r.stop()}}),r)})))()}});case 10:case"end":return a.stop()}}),a)})))()},changeDisplayCallBack:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;e.id&&w.a.forEach(this.pageData,(function(e){if(e.id==t)return e.showable=r?"1":"0",r||(e.isPromoted=!1,e.promotedSeq=0),!1}))},validateRange:function(e,t,r){!t||!1!==w.a.inRange(t,0,10001)&&!1!==/^\+?[0-9][0-9]*$/.test(t)||r("请输入0-10000的整数"),r()},handleEditorQualification:function(e){this.currentTeacherUserId=e.id,this.currentTeacherQualification=e.qualification,this.qualificationVisible=!0},handleCancelEditQualification:function(e){w.a.forEach(this.pageData,(function(t){t.id==e.user_id&&(t.qualification=e)})),this.qualificationVisible=!1}}},j=(r(1839),r(34)),D=Object(j.a)(P,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("aside-layout",{staticClass:"teacher-manage-container",attrs:{breadcrumbs:[{name:"教师管理"}]}},[r("div",{staticClass:"clearfix cd-mb24"},[r("a-input-search",{staticStyle:{width:"224px"},attrs:{placeholder:"请输入用户名搜索",allowClear:!0},on:{search:e.onSearch}})],1),e._v(" "),r("a-table",{attrs:{columns:e.columns,"data-source":e.pageData,"row-key":function(e){return e.id},pagination:e.pagination,"row-class-name":function(e){return"teacher-manage-row"},loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"nickname",fn:function(t,a){return[r("a-avatar",{attrs:{size:48,src:a.avatar.middle,icon:"user"}}),e._v(" "),r("a",{staticClass:"ml8",on:{click:function(t){return e.edit(a.id)}}},[e._v(e._s(t))])]}},{key:"display",fn:function(t){return r("div",{},[r("a-checkbox",{attrs:{checked:"1"===t.showable},on:{change:function(r){return e.changeDisplay(r.target.checked,t.id)}}})],1)}},{key:"promoteInfo",fn:function(t){return r("div",{},["0"===t.showable?r("a-button",{attrs:{type:"link",disabled:""}},[e._v("推荐")]):[r("a-button",{attrs:{type:"link"}},[t.isPromoted?[e._v("推荐序号"+e._s(t.promotedSeq))]:[e._v("推荐")]],2),e._v(" "),r("a",{staticClass:"set-number",attrs:{href:"javascript:;"},on:{click:function(r){return e.clickSetNumberModal(t)}}},[r("a-icon",{attrs:{type:"edit"}})],1)]],2)}},{key:"qualification",fn:function(t){return[e._v("\n      "+e._s(t.code)+"\n    ")]}},{key:"loginInfo",fn:function(t){return r("div",{},[r("div",[e._v(e._s(e.$dateFormat(t.loginTime,"YYYY-MM-DD HH:mm")))]),e._v(" "),r("div",{staticClass:"color-gray text-sm"},[e._v(e._s(t.loginIp))])])}},{key:"action",fn:function(t){return[r("a-button",{attrs:{type:"link"},on:{click:function(r){return e.edit(t.id)}}},[e._v("\n        查看\n      ")]),e._v(" "),r("a-dropdown",[r("a",{staticClass:"ant-dropdown-link",staticStyle:{"margin-left":"-6px"},on:{click:function(e){e.preventDefault()}}},[r("a-icon",{attrs:{type:"caret-down"}})],1),e._v(" "),r("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[r("a-menu-item",[r("a",{attrs:{"data-toggle":"modal","data-target":"#modal","data-backdrop":"static","data-keyboard":"false","data-url":"/admin/v2/user/"+t.id+"/edit"}},[e._v("\n              编辑用户信息\n            ")])]),e._v(" "),r("a-menu-item",[r("a",{attrs:{"data-toggle":"modal","data-target":"#modal","data-backdrop":"static","data-keyboard":"false","data-url":"/admin/v2/user/"+t.id+"/avatar"}},[e._v("\n              修改用户头像\n            ")])]),e._v(" "),e.showEditorSualification?r("a-menu-item",{on:{click:function(r){return e.handleEditorQualification(t)}}},[e._v("\n            编辑教师资质\n          ")]):e._e()],1)],1)]}}])}),e._v(" "),r("a-modal",{attrs:{title:"教师详细信息",visible:e.visible,afterClose:e.afterModalClose},on:{cancel:e.close}},[e.userInfoVisible?r("userInfoTable",{attrs:{user:e.user}}):e._e(),e._v(" "),r("template",{slot:"footer"},[r("a-button",{key:"back",on:{click:e.close}},[e._v(" 关闭 ")])],1)],2),e._v(" "),r("a-modal",{attrs:{title:"设置推荐教师",okText:"确认",cancelText:"取消",visible:e.modalVisible},on:{ok:e.handleOk,cancel:e.handleCancel}},[r("a-form",{attrs:{form:e.form,"label-col":{span:3},"wrapper-col":{span:21}}},[r("a-form-item",{attrs:{label:"序号",extra:"请输入0-10000的整数"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["number",{rules:[{required:!0,message:"请输入序号"},{validator:e.validateRange,message:"请输入0-10000的整数"}],initialValue:e.promotedSeq}],expression:"[ 'number', {\n            rules: [\n              { required: true, message: '请输入序号' },\n              { validator: validateRange, message: '请输入0-10000的整数' }\n            ],\n            initialValue: promotedSeq\n          }]"}],staticStyle:{width:"100%"}})],1)],1)],1),e._v(" "),r("a-modal",{attrs:{title:"编辑教师资质",width:"900px",footer:null,visible:e.qualificationVisible},on:{cancel:e.handleCancelEditQualification}},[r("editor-qualification",{attrs:{"user-id":e.currentTeacherUserId,"edit-info":e.currentTeacherQualification},on:{"handle-cancel-modal":e.handleCancelEditQualification}})],1)],1)}),[],!1,null,"60fcf714",null);t.default=D.exports},1524:function(e,t,r){},1525:function(e,t,r){"use strict";var a={name:"AsideLayout",props:{breadcrumbs:{type:Array,required:!0},headerTitle:{type:String,default:""},headerTip:{type:String,default:""},titleTip:{type:String,default:""}}},n=(r(1526),r(34)),i=Object(n.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"aside-layout"},[r("div",{staticClass:"aside-layout-header"},[r("a-breadcrumb",{staticClass:"pull-left aside-layout-header__breadcrumb",attrs:{separator:"/"}},e._l(e.breadcrumbs,(function(t,a){return r("a-breadcrumb-item",{key:a},[t.href?[r("a",{attrs:{href:t.href,target:"_blank"}},[e._v(e._s(t.name))])]:t.pathName?[r("a",{attrs:{href:"javascript:;"},on:{click:function(r){return e.$router.push({name:t.pathName})}}},[e._v(e._s(t.name))])]:[e._v("\n          "+e._s(t.name)+"\n        ")]],2)})),1),e._v(" "),e.headerTip?r("a-popover",{attrs:{placement:"bottomLeft"}},[r("template",{slot:"content"},[r("div",{staticClass:"aside-header-tip",domProps:{innerHTML:e._s(e.headerTip)}})]),e._v(" "),r("span",{staticClass:"aside-header-title-icon"},[r("a-icon",{attrs:{theme:"filled",type:"question-circle"}}),r("span",{staticClass:"icon-circle"},[e._v(e._s(e.headerTitle))])],1)],2):e._e(),e._v(" "),e.titleTip?r("span",{staticClass:"aside-header-title-icon"},[e._v(e._s(e.titleTip))]):e._e()],1),e._v(" "),r("div",{staticClass:"aside-layout-main"},[e._t("default")],2)])}),[],!1,null,null,null);t.a=i.exports},1526:function(e,t,r){"use strict";var a=r(1524);r.n(a).a},1550:function(e,t,r){},1553:function(e,t,r){"use strict";var a={props:{user:{type:Object,default:{}}},computed:{getUserRoles:function(){return _.join(this.user.user.roles," ")}},methods:{toPersonalHomepage:function(e){window.open("/user/"+e+"/about","_blank")},formatTimeIp:function(e,t){var r="";return r+=0!=e?this.$dateFormat(e,"YYYY-MM-DD HH:mm"):" -- ",""!=t&&(r+=" / "+t+" 本机IP"),r},formatStr:function(e){return void 0===e||""==e||null==e?"暂无":e},formatGender:function(){return{male:"男性",female:"女性",secret:"秘密"}[this.user.profile.gender]}}},n=r(34),i=Object(n.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",{staticClass:"table table-striped table-condenseda table-bordered"},[r("tbody",[r("tr",[r("th",{attrs:{width:"30%"}},[e._v("用户名")]),e._v(" "),r("td",{attrs:{width:"70%"}},[r("a",{staticClass:"pull-right",attrs:{href:"javascript:;"},on:{click:function(t){return e.toPersonalHomepage(e.user.user.uuid)}}},[e._v("个人主页")]),e._v("\n        "+e._s(e.user.user?e.user.user.nickname:"")+"\n      ")])]),e._v(" "),r("tr",[r("th",[e._v("Email")]),e._v(" "),r("td",[e._v(e._s(e.user.profile?e.user.profile.email:"- -"))])]),e._v(" "),r("tr",[r("th",[e._v("用户组")]),e._v(" "),r("td",[e._v(e._s(e.getUserRoles))])]),e._v(" "),r("tr",[r("th",[e._v("注册时间/IP")]),e._v(" "),r("td",[e._v(e._s(e.formatTimeIp(e.user.user.createdTime,e.user.user.createdIp)))])]),e._v(" "),r("tr",[r("th",[e._v("最近登录时间/IP")]),e._v(" "),r("td",[e._v(e._s(e.formatTimeIp(e.user.user.loginTime,e.user.user.loginIp)))])]),e._v(" "),r("tr",[r("th",[e._v("姓名")]),e._v(" "),r("td",[e._v(e._s(e.formatStr(e.user.profile.truename)))])]),e._v(" "),r("tr",[r("th",[e._v("性别")]),e._v(" "),r("td",[e._v(e._s(e.formatGender()))])]),e._v(" "),r("tr",[r("th",[e._v("身份证号")]),e._v(" "),r("td",[e._v(e._s(e.formatStr(e.user.profile.idcard)))])]),e._v(" "),r("tr",[r("th",[e._v("手机号码")]),e._v(" "),r("td",[r("mobile-ice",{attrs:{mobile:e.formatStr(e.user.profile.mobile),encryptedMobile:e.user.profile.encryptedMobile}})],1)]),e._v(" "),r("tr",[r("th",[e._v("公司")]),e._v(" "),r("td",[e._v(e._s(e.formatStr(e.user.profile.company)))])]),e._v(" "),r("tr",[r("th",[e._v("职业")]),e._v(" "),r("td",[e._v(e._s(e.formatStr(e.user.profile.job)))])]),e._v(" "),r("tr",[r("th",[e._v("头衔")]),e._v(" "),r("td",[e._v(e._s(e.formatStr(e.user.user.title)))])]),e._v(" "),r("tr",[r("th",[e._v("个人签名")]),e._v(" "),r("td",[e._v(e._s(e.formatStr(e.user.profile.signature)))])]),e._v(" "),r("tr",[r("th",[e._v("自我介绍")]),e._v(" "),r("td",{staticClass:"editor-text",domProps:{innerHTML:e._s(e.user.profile.about||"暂无")}})]),e._v(" "),r("tr",[r("th",[e._v("个人网站")]),e._v(" "),r("td",[e._v(e._s(e.formatStr(e.user.profile.site)))])]),e._v(" "),r("tr",[r("th",[e._v("微博")]),e._v(" "),r("td",[e._v(e._s(e.formatStr(e.user.profile.weibo)))])]),e._v(" "),r("tr",[r("th",[e._v("微信")]),e._v(" "),r("td",[e._v(e._s(e.formatStr(e.user.profile.weixin)))])]),e._v(" "),r("tr",[r("th",[e._v("QQ")]),e._v(" "),r("td",[e._v(e._s(e.formatStr(e.user.profile.qq)))])])])])}),[],!1,null,null,null);t.a=i.exports},1641:function(e,t,r){"use strict";var a=r(1550);r.n(a).a},1678:function(e,t,r){},1684:function(e,t,r){"use strict";var a=r(111),n=r.n(a),i=r(117),o=r.n(i),s=r(76),c=r.n(s),u=r(74),l=r.n(u),d=r(77),f=r.n(d),p=r(48),m=r.n(p),v=r(5),h=r.n(v),_=r(43),b=r.n(_),g=r(11),y=r.n(g),k=r(35),w=r.n(k),x=r(200),S=r(1566),C=r.n(S),T=(r(1567),{name:"UploadPicture",components:{VueCropper:C.a},props:{title:{type:String,default:"图片裁剪"},tip:{type:String,default:""},aspectRatio:{type:Number},file:{type:String,default:""}},data:function(){return{loading:!1,pictureName:"",pictureUrl:"",imgUrl:"",visible:!1,uploadLoading:!1,uploadToken:{},cropperKey:0}},created:function(){this.pictureUrl=this.file,this.toBlobPolyfillInIE()},watch:{file:function(){this.pictureUrl=this.file}},methods:{toBlobPolyfillInIE:function(){HTMLCanvasElement.prototype.toBlob||n()(HTMLCanvasElement.prototype,"toBlob",{value:function(e,t,r){var a=this;setTimeout((function(){for(var n=atob(a.toDataURL(t,r).split(",")[1]),i=n.length,o=new Uint8Array(i),s=0;s<i;s++)o[s]=n.charCodeAt(s);e(new Blob([o],{type:t||"image/png"}))}))}})},getUploadToken:function(){var e=this;return y()(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.G.get("default");case 2:e.uploadToken=t.sent;case 3:case"end":return t.stop()}}),t)})))()},uploadPicture:function(e){var t=this;this.cropperKey++;var r=new FileReader;r.onload=function(e){t.imgUrl=e.target.result,t.visible=!0},this.pictureName=e.file.originFileObj.name,r.readAsDataURL(e.file.originFileObj)},handleCancel:function(){this.visible=!1},handleReselect:function(){var e=this.$refs.upload.$el.getElementsByTagName("input");this.visible=!1,e.length>0&&e[0].click()},handleSaveCropper:function(){var e=this;return y()(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loading=!0,e.uploadToken.expiry&&!(new Date>=new Date(e.uploadToken.expiry))){t.next=4;break}return t.next=4,e.getUploadToken();case 4:e.$refs.cropper.getCroppedCanvas().toBlob(function(){var t=y()(h.a.mark((function t(r){var a,n,i,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=new FormData).append("file",r,e.pictureName),a.append("token",e.uploadToken.token),e.uploadLoading=!0,t.prev=4,t.next=7,x.l.uploadFile(a);case 7:n=t.sent,i=n.url,o=n.id,e.pictureUrl=i,e.$emit("success",o),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(4),413==t.t0.response.status&&Vue.prototype.$message.error("文件过大，请上传小于 2M 的文件！");case 18:return t.prev=18,e.loading=!1,e.visible=!1,e.uploadLoading=!1,t.finish(18);case 23:case"end":return t.stop()}}),t,null,[[4,14,18,23]])})));return function(e){return t.apply(this,arguments)}}());case 6:case"end":return t.stop()}}),t)})))()}}}),I=(r(1641),r(34));function E(e,t){var r=m()(e);if(f.a){var a=f()(e);t&&(a=a.filter((function(t){return l()(e,t).enumerable}))),r.push.apply(r,a)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){b()(e,t,r[t])})):c.a?o()(e,c()(r)):E(Object(r)).forEach((function(t){n()(e,t,l()(r,t))}))}return e}var O={name:"EditorTeacherQualification",components:{UploadPicture:Object(I.a)(T,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("a-upload",{ref:"upload",attrs:{accept:"image/*","file-list":[],"list-type":"picture-card",customRequest:function(){}},on:{change:e.uploadPicture}},[e.pictureUrl?r("img",{staticStyle:{width:"100%"},attrs:{src:e.pictureUrl}}):r("div",[r("a-icon",{attrs:{type:e.loading?"loading":"plus"}}),e._v(" "),r("div",{staticClass:"ant-upload-text"},[e._v("\n        上传照片\n      ")])],1)]),e._v(" "),e.tip?r("p",{staticClass:"mb0",staticStyle:{"font-size":"14px","line-height":"20px"}},[e._v(e._s(e.tip))]):e._e(),e._v(" "),r("a-modal",{key:e.cropperKey,attrs:{title:e.title,visible:e.visible,"mask-closable":!1},on:{cancel:e.handleCancel}},[r("vue-cropper",{ref:"cropper",attrs:{"view-mode":1,"auto-crop-area":1,"aspect-ratio":e.aspectRatio,src:e.imgUrl}}),e._v(" "),r("template",{slot:"footer"},[r("a-button",{on:{click:e.handleReselect}},[e._v("重新选择")]),e._v(" "),r("a-button",{attrs:{type:"primary",loading:e.uploadLoading},on:{click:e.handleSaveCropper}},[e._v("保存图片")])],1)],2)],1)}),[],!1,null,"8162e456",null).exports},props:{userId:{type:String,required:!0},editInfo:{type:Object,required:!0}},data:function(){return{labelCol:{span:4},wrapperCol:{span:16},form:{truename:"",avatarFileId:"",code:""},rules:{truename:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,message:"最少需要输入 2 个字符",trigger:"blur"},{max:36,message:"最多支持 36 个字符",trigger:"blur"},{pattern:/^[\u4E00-\u9FA5A-Za-z0-9_]+$/,message:"只支持中文字、英文字母、数字及_",trigger:"blur"}],avatarFileId:[{required:!0,message:"请上传图片"}],code:[{required:!0,message:"请输入教师资格证书编号",trigger:"blur"},{len:17,message:"请输入 17 位数字",trigger:"blur"},{pattern:/^[0-9]*$/,message:"请输入整数",trigger:"blur"}]},file:""}},watch:{editInfo:function(){this.setFormValue()}},created:function(){this.setFormValue()},methods:{setFormValue:function(){var e=this.editInfo,t=e.truename,r=e.avatarFileId,a=e.code,n=e.url;w.a.assign(this.form,{truename:t,avatarFileId:r,code:a}),this.file=n},onSubmit:function(){var e=this;this.$refs.ruleForm.validate(function(){var t=y()(h.a.mark((function t(r){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,x.F.add(q(q({},e.form),{},{userId:e.userId}));case 4:a=t.sent,e.$message.success("保存成功"),e.$emit("handle-cancel-modal",a);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},uploadedSuccessfully:function(e){this.form.avatarFileId=e}}},P=Object(I.a)(O,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-form-model",{key:e.userId,ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[r("a-form-model-item",{ref:"truename",attrs:{label:"姓名",prop:"truename"}},[r("a-input",{on:{blur:function(){e.$refs.truename.onFieldBlur()}},model:{value:e.form.truename,callback:function(t){e.$set(e.form,"truename",t)},expression:"form.truename"}})],1),e._v(" "),r("a-form-model-item",{attrs:{label:"照片",prop:"avatarFileId"}},[r("upload-picture",{attrs:{file:e.file,"aspect-ratio":1,tip:"请上传jpg, gif, png格式的图片，建议图片尺寸为 270×270px，建议图片大小不超过2MB"},on:{success:e.uploadedSuccessfully}})],1),e._v(" "),r("a-form-model-item",{ref:"code",attrs:{label:"教师资格证书编号",prop:"code"}},[r("a-input",{on:{blur:function(){e.$refs.code.onFieldBlur()}},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),e._v(" "),r("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[r("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("\n      保存\n    ")])],1)],1)}),[],!1,null,null,null);t.a=P.exports},1839:function(e,t,r){"use strict";var a=r(1678);r.n(a).a},48:function(e,t,r){e.exports=r(650)},486:function(e,t,r){var a=r(96),n=r(65),i=r(333);e.exports=function(e,t){var r=(n.Object||{})[e]||Object[e],o={};o[e]=t(r),a(a.S+a.F*i((function(){r(1)})),"Object",o)}},650:function(e,t,r){r(651),e.exports=r(65).Object.keys},651:function(e,t,r){var a=r(381),n=r(380);r(486)("keys",(function(){return function(e){return n(a(e))}}))},652:function(e,t,r){r(653);var a=r(65).Object;e.exports=function(e,t){return a.defineProperties(e,t)}},653:function(e,t,r){var a=r(96);a(a.S+a.F*!r(210),"Object",{defineProperties:r(549)})},654:function(e,t,r){r(655),e.exports=r(65).Object.getOwnPropertyDescriptors},655:function(e,t,r){var a=r(96),n=r(656),i=r(230),o=r(332),s=r(551);a(a.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,r,a=i(e),c=o.f,u=n(a),l={},d=0;u.length>d;)void 0!==(r=c(a,t=u[d++]))&&s(l,t,r);return l}})},656:function(e,t,r){var a=r(487),n=r(452),i=r(148),o=r(143).Reflect;e.exports=o&&o.ownKeys||function(e){var t=a.f(i(e)),r=n.f;return r?t.concat(r(e)):t}},657:function(e,t,r){r(658);var a=r(65).Object;e.exports=function(e,t){return a.getOwnPropertyDescriptor(e,t)}},658:function(e,t,r){var a=r(230),n=r(332).f;r(486)("getOwnPropertyDescriptor",(function(){return function(e,t){return n(a(e),t)}}))},659:function(e,t,r){r(550),e.exports=r(65).Object.getOwnPropertySymbols},74:function(e,t,r){e.exports=r(657)},76:function(e,t,r){e.exports=r(654)},77:function(e,t,r){e.exports=r(659)}}]);