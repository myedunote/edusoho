<<<<<<< HEAD
(window.webpackJsonp=window.webpackJsonp||[]).push([[388],{108:function(t,e,r){t.exports=r(336)},1290:function(t,e,r){"use strict";r.r(e);var a=r(129),n=r.n(a),s=r(108),i=r.n(s),o=r(80),c=r.n(o),l=r(72),u=r.n(l),d=r(81),f=r.n(d),v=r(47),p=r.n(v),m=r(23),_=r.n(m),h=r(34),g=r.n(h),b=r(39),y=r.n(b),x=r(1307),S=r(494),k=r(1319),w=r(1404);function C(t,e){var r=p()(t);if(f.a){var a=f()(t);e&&(a=a.filter((function(e){return u()(t,e).enumerable}))),r.push.apply(r,a)}return r}function I(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?C(Object(r),!0).forEach((function(e){y()(t,e,r[e])})):c.a?i()(t,c()(r)):C(Object(r)).forEach((function(e){n()(t,e,u()(r,e))}))}return t}var j=[{title:"用户名",ellipsis:!0,dataIndex:"nickname",scopedSlots:{customRender:"nickname"}},{title:"是否绑定销客助手",dataIndex:"isBind",ellipsis:!0,scopedSlots:{customRender:"isBind"}},{title:"现带班课总数",dataIndex:"liveMultiClassNum",ellipsis:!0},{title:"现学员总数",dataIndex:"liveMultiClassStudentNum",ellipsis:!0},{title:"已结班班课总数",dataIndex:"endMultiClassNum",ellipsis:!0},{title:"已结班班课学员总数",dataIndex:"endMultiClassStudentNum",ellipsis:!0},{title:"最近登录",ellipsis:!0,scopedSlots:{customRender:"loginInfo"}},{title:"操作",scopedSlots:{customRender:"action"}}],O={name:"assistants",components:{userInfoTable:k.a,AsideLayout:x.a,AAvatar:w.a},data:function(){return{visible:!1,user:{},columns:j,pageData:[],loading:!1,pagination:{},keyWord:""}},created:function(){this.fetchAssistant()},methods:{handleTableChange:function(t){var e=I({},this.pagination);e.current=t.current,this.pagination=e;var r={limit:t.pageSize,offset:(t.current-1)*t.pageSize};this.fetchAssistant(r)},fetchAssistant:function(t){var e=this;return g()(_.a.mark((function r(){var a,n,s,i;return _.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.loading=!0,r.next=3,S.a.search(I({limit:10,nickname:e.keyWord},t));case 3:a=r.sent,n=a.data,s=a.paging,(i=I({},e.pagination)).total=s.total,e.loading=!1,e.pageData=n,e.pagination=i;case 11:case"end":return r.stop()}}),r)})))()},onSearch:function(t){var e=this;return g()(_.a.mark((function r(){return _.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.keyWord=t,e.pagination.current=1,e.fetchAssistant();case 3:case"end":return r.stop()}}),r)})))()},check:function(t){var e=this;return g()(_.a.mark((function r(){return _.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S.s.get(t);case 2:e.user=r.sent,e.visible=!0;case 4:case"end":return r.stop()}}),r)})))()},close:function(){this.visible=!1}}},T=r(31),$=Object(T.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside-layout",{attrs:{breadcrumbs:[{name:"助教管理"}]}},[r("div",{staticClass:"clearfix cd-mb24"},[r("a-input-search",{staticStyle:{width:"224px"},attrs:{placeholder:"请输入用户名搜索",allowClear:!0},on:{search:t.onSearch}})],1),t._v(" "),r("a-table",{attrs:{columns:t.columns,"data-source":t.pageData,rowKey:"id",pagination:t.pagination,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"nickname",fn:function(e,a){return[r("div",{staticClass:"avatar-name"},[r("a-avatar",{attrs:{size:48,src:a.avatar.middle,icon:"user"}}),t._v(" "),r("a",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.check(a.id)}}},[t._v(t._s(e))])],1)]}},{key:"loginInfo",fn:function(e){return r("div",{},[r("div",[t._v(t._s(t.$dateFormat(e.loginTime,"YYYY-MM-DD HH:mm")))]),t._v(" "),r("div",{staticClass:"color-gray text-sm"},[t._v(t._s(e.loginIp))])])}},{key:"action",fn:function(e){return[r("a-button",{attrs:{type:"link"},on:{click:function(r){return t.check(e.id)}}},[t._v("\n        查看\n      ")]),t._v(" "),r("a-dropdown",[r("a",{staticClass:"ant-dropdown-link",staticStyle:{"margin-left":"-6px"},on:{click:function(t){return t.preventDefault()}}},[r("a-icon",{attrs:{type:"caret-down"}})],1),t._v(" "),r("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[r("a-menu-item",[r("a",{attrs:{"data-toggle":"modal","data-target":"#modal","data-backdrop":"static","data-keyboard":"false","data-url":"/admin/v2/user/"+e.id+"/edit"}},[t._v("\n              编辑用户信息\n            ")])]),t._v(" "),r("a-menu-item",[r("a",{attrs:{"data-toggle":"modal","data-target":"#modal","data-backdrop":"static","data-keyboard":"false","data-url":"/admin/v2/user/"+e.id+"/avatar"}},[t._v("\n              修改用户头像\n            ")])])],1)],1)]}}])}),t._v(" "),r("a-modal",{attrs:{title:"助教详细信息",visible:t.visible},on:{cancel:t.close}},[r("userInfoTable",{attrs:{user:t.user}}),t._v(" "),r("template",{slot:"footer"},[r("a-button",{key:"back",on:{click:t.close}},[t._v(" 关闭 ")])],1)],2)],1)}),[],!1,null,null,null);e.default=$.exports},1305:function(t,e,r){},1307:function(t,e,r){"use strict";var a={name:"AsideLayout",props:{breadcrumbs:{type:Array,required:!0},headerTitle:{type:String,default:""},headerTip:{type:String,default:""}}},n=(r(1308),r(31)),s=Object(n.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"aside-layout"},[r("div",{staticClass:"aside-layout-header"},[r("a-breadcrumb",{staticClass:"pull-left aside-layout-header__breadcrumb",attrs:{separator:"/"}},t._l(t.breadcrumbs,(function(e,a){return r("a-breadcrumb-item",{key:a},[e.href?[r("a",{attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.name))])]:e.pathName?[r("a",{attrs:{href:"javascript:;"},on:{click:function(r){return t.$router.push({name:e.pathName})}}},[t._v(t._s(e.name))])]:[t._v("\n          "+t._s(e.name)+"\n        ")]],2)})),1),t._v(" "),t.headerTip?r("a-popover",{attrs:{placement:"bottomLeft"}},[r("template",{slot:"content"},[r("div",{staticClass:"aside-header-tip",domProps:{innerHTML:t._s(t.headerTip)}})]),t._v(" "),r("span",{staticClass:"aside-header-title-icon"},[r("a-icon",{attrs:{theme:"filled",type:"question-circle"}}),r("span",{staticClass:"icon-circle"},[t._v(t._s(t.headerTitle))])],1)],2):t._e()],1),t._v(" "),r("div",{staticClass:"aside-layout-main"},[t._t("default")],2)])}),[],!1,null,null,null);e.a=s.exports},1308:function(t,e,r){"use strict";var a=r(1305);r.n(a).a},1319:function(t,e,r){"use strict";var a={props:{user:{type:Object,default:{}}},computed:{getUserRoles:function(){return _.join(this.user.user.roles," ")}},methods:{toPersonalHomepage:function(t){window.open("/user/"+t+"/about","_blank")},formatTimeIp:function(t,e){var r="";return r+=0!=t?this.$dateFormat(t,"YYYY-MM-DD HH:mm"):" -- ",""!=e&&(r+=" / "+e+" 本机IP"),r},formatStr:function(t){return void 0===t||""==t||null==t?"暂无":t},formatGender:function(){return{male:"男性",female:"女性",secret:"秘密"}[this.user.profile.gender]}}},n=r(31),s=Object(n.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"table table-striped table-condenseda table-bordered"},[r("tbody",[r("tr",[r("th",{attrs:{width:"30%"}},[t._v("用户名")]),t._v(" "),r("td",{attrs:{width:"70%"}},[r("a",{staticClass:"pull-right",attrs:{href:"javascript:;"},on:{click:function(e){return t.toPersonalHomepage(t.user.user.id)}}},[t._v("个人主页")]),t._v("\n        "+t._s(t.user.user.nickname)+"\n      ")])]),t._v(" "),r("tr",[r("th",[t._v("Email")]),t._v(" "),r("td",[t._v(t._s(t.user.profile.email||"- -"))])]),t._v(" "),r("tr",[r("th",[t._v("用户组")]),t._v(" "),r("td",[t._v(t._s(t.getUserRoles))])]),t._v(" "),r("tr",[r("th",[t._v("注册时间/IP")]),t._v(" "),r("td",[t._v(t._s(t.formatTimeIp(t.user.user.createdTime,t.user.user.createdIp)))])]),t._v(" "),r("tr",[r("th",[t._v("最近登录时间/IP")]),t._v(" "),r("td",[t._v(t._s(t.formatTimeIp(t.user.user.loginTime,t.user.user.loginIp)))])]),t._v(" "),r("tr",[r("th",[t._v("姓名")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.truename)))])]),t._v(" "),r("tr",[r("th",[t._v("性别")]),t._v(" "),r("td",[t._v(t._s(t.formatGender()))])]),t._v(" "),r("tr",[r("th",[t._v("身份证号")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.idcard)))])]),t._v(" "),r("tr",[r("th",[t._v("手机号码")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.mobile)))])]),t._v(" "),r("tr",[r("th",[t._v("公司")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.company)))])]),t._v(" "),r("tr",[r("th",[t._v("职业")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.job)))])]),t._v(" "),r("tr",[r("th",[t._v("头衔")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.user.title)))])]),t._v(" "),r("tr",[r("th",[t._v("个人签名")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.signature)))])]),t._v(" "),r("tr",[r("th",[t._v("自我介绍")]),t._v(" "),r("td",{domProps:{innerHTML:t._s(t.user.profile.about||"暂无")}})]),t._v(" "),r("tr",[r("th",[t._v("个人网站")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.site)))])]),t._v(" "),r("tr",[r("th",[t._v("微博")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.weibo)))])]),t._v(" "),r("tr",[r("th",[t._v("微信")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.weixin)))])]),t._v(" "),r("tr",[r("th",[t._v("QQ")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.qq)))])])])])}),[],!1,null,null,null);e.a=s.exports},1404:function(t,e,r){"use strict";var a=r(16),n=r.n(a),s=r(4),i=r.n(s),o=r(7),c=r.n(o),l=r(1312),u=r(1320),d=r(1309),f=r(1306),v={name:"AAvatar",props:{prefixCls:{type:String,default:void 0},shape:{validator:function(t){return["circle","square"].includes(t)},default:"circle"},size:{validator:function(t){return"number"==typeof t||["small","large","default"].includes(t)},default:"default"},src:String,srcSet:String,icon:f.a.any,alt:String,loadError:Function},inject:{configProvider:{default:function(){return l.a}}},data:function(){return{isImgExist:!0,isMounted:!1,scale:1}},watch:{src:function(){var t=this;this.$nextTick((function(){t.isImgExist=!0,t.scale=1,t.$forceUpdate()}))}},mounted:function(){var t=this;this.$nextTick((function(){t.setScale(),t.isMounted=!0}))},updated:function(){var t=this;this.$nextTick((function(){t.setScale()}))},methods:{setScale:function(){if(this.$refs.avatarChildren&&this.$refs.avatarNode){var t=this.$refs.avatarChildren.offsetWidth,e=this.$refs.avatarNode.offsetWidth;0===t||0===e||this.lastChildrenWidth===t&&this.lastNodeWidth===e||(this.lastChildrenWidth=t,this.lastNodeWidth=e,this.scale=e-8<t?(e-8)/t:1)}},handleImgLoadError:function(){var t=this.$props.loadError;!1!==(t?t():void 0)&&(this.isImgExist=!1)}},render:function(){var t,e,r=arguments[0],a=this.$props,s=a.prefixCls,o=a.shape,l=a.size,f=a.src,v=a.alt,p=a.srcSet,m=Object(d.b)(this,"icon"),_=this.configProvider.getPrefixCls,h=_("avatar",s),g=this.$data,b=g.isImgExist,y=g.scale,x=g.isMounted,S=(t={},c()(t,h+"-lg","large"===l),c()(t,h+"-sm","small"===l),t),k=i()(c()({},h,!0),S,(e={},c()(e,h+"-"+o,o),c()(e,h+"-image",f&&b),c()(e,h+"-icon",m),e)),w="number"==typeof l?{width:l+"px",height:l+"px",lineHeight:l+"px",fontSize:m?l/2+"px":"18px"}:{},C=this.$slots.default;if(f&&b)C=r("img",{attrs:{src:f,srcSet:p,alt:v},on:{error:this.handleImgLoadError}});else if(m)C="string"==typeof m?r(u.a,{attrs:{type:m}}):m;else{var I=this.$refs.avatarChildren;if(I||1!==y){var j="scale("+y+") translateX(-50%)",O={msTransform:j,WebkitTransform:j,transform:j},T="number"==typeof l?{lineHeight:l+"px"}:{};C=r("span",{class:h+"-string",ref:"avatarChildren",style:i()({},T,O)},[C])}else{var $={};x||($.opacity=0),C=r("span",{class:h+"-string",ref:"avatarChildren",style:{opacity:0}},[C])}}return r("span",n()([{ref:"avatarNode"},{on:Object(d.c)(this),class:k,style:w}]),[C])}},p=r(1313);v.install=function(t){t.use(p.a),t.component(v.name,v)};e.a=v},210:function(t,e,r){r(211);var a=r(49).Object;t.exports=function(t,e){return a.getOwnPropertyDescriptor(t,e)}},211:function(t,e,r){var a=r(134),n=r(180).f;r(335)("getOwnPropertyDescriptor",(function(){return function(t,e){return n(a(t),e)}}))},335:function(t,e,r){var a=r(74),n=r(49),s=r(309);t.exports=function(t,e){var r=(n.Object||{})[t]||Object[t],i={};i[t]=e(r),a(a.S+a.F*s((function(){r(1)})),"Object",i)}},336:function(t,e,r){r(337);var a=r(49).Object;t.exports=function(t,e){return a.defineProperties(t,e)}},337:function(t,e,r){var a=r(74);a(a.S+a.F*!r(140),"Object",{defineProperties:r(379)})},338:function(t,e,r){r(339),t.exports=r(49).Object.getOwnPropertyDescriptors},339:function(t,e,r){var a=r(74),n=r(340),s=r(134),i=r(180),o=r(381);a(a.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,r,a=s(t),c=i.f,l=n(a),u={},d=0;l.length>d;)void 0!==(r=c(a,e=l[d++]))&&o(u,e,r);return u}})},340:function(t,e,r){var a=r(358),n=r(342),s=r(133),i=r(102).Reflect;t.exports=i&&i.ownKeys||function(t){var e=a.f(s(t)),r=n.f;return r?e.concat(r(t)):e}},341:function(t,e,r){r(380),t.exports=r(49).Object.getOwnPropertySymbols},39:function(t,e,r){var a=r(129);t.exports=function(t,e,r){return e in t?a(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},47:function(t,e,r){t.exports=r(581)},581:function(t,e,r){r(582),t.exports=r(49).Object.keys},582:function(t,e,r){var a=r(357),n=r(356);r(335)("keys",(function(){return function(t){return n(a(t))}}))},72:function(t,e,r){t.exports=r(210)},80:function(t,e,r){t.exports=r(338)},81:function(t,e,r){t.exports=r(341)}}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{108:function(t,e,r){t.exports=r(336)},1284:function(t,e,r){"use strict";r.r(e);var a=r(129),n=r.n(a),o=r(108),s=r.n(o),i=r(79),c=r.n(i),u=r(72),l=r.n(u),d=r(80),v=r.n(d),f=r(47),p=r.n(f),_=r(23),m=r.n(_),h=r(34),b=r.n(h),g=r(39),y=r.n(g),k=r(1300),w=r(493),x=r(1308);function S(t,e){var r=p()(t);if(v.a){var a=v()(t);e&&(a=a.filter((function(e){return l()(t,e).enumerable}))),r.push.apply(r,a)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?S(Object(r),!0).forEach((function(e){y()(t,e,r[e])})):c.a?s()(t,c()(r)):S(Object(r)).forEach((function(e){n()(t,e,l()(r,e))}))}return t}var O=[{title:"用户名",dataIndex:"nickname"},{title:"头像",dataIndex:"avatar.middle",scopedSlots:{customRender:"mediumAvatar"}},{title:"微信二维码",dataIndex:"weChatQrCode",scopedSlots:{customRender:"weChatQrCode"}},{title:"最近登录",scopedSlots:{customRender:"loginInfo"}},{title:"操作",scopedSlots:{customRender:"action"}}],j={name:"assistants",components:{userInfoTable:x.a,AsideLayout:k.a},data:function(){return{visible:!1,user:{},columns:O,pageData:[],loading:!1,pagination:{},keyWord:""}},created:function(){this.fetchAssistant()},methods:{handleTableChange:function(t){var e=C({},this.pagination);e.current=t.current,this.pagination=e;var r={limit:t.pageSize,offset:(t.current-1)*t.pageSize};this.fetchAssistant(r)},fetchAssistant:function(t){var e=this;return b()(m.a.mark((function r(){var a,n,o,s;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.loading=!0,r.next=3,w.a.search(C({limit:10,nickname:e.keyWord},t));case 3:a=r.sent,n=a.data,o=a.paging,(s=C({},e.pagination)).total=o.total,e.loading=!1,e.pageData=n,e.pagination=s;case 11:case"end":return r.stop()}}),r)})))()},onSearch:function(t){var e=this;return b()(m.a.mark((function r(){return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.keyWord=t,e.pagination.current=1,e.fetchAssistant();case 3:case"end":return r.stop()}}),r)})))()},check:function(t){var e=this;return b()(m.a.mark((function r(){return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,w.r.get(t);case 2:e.user=r.sent,e.visible=!0;case 4:case"end":return r.stop()}}),r)})))()},close:function(){this.visible=!1}}},T=r(31),I=Object(T.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside-layout",{attrs:{breadcrumbs:[{name:"助教管理"}]}},[r("div",{staticClass:"clearfix cd-mb24"},[r("a-input-search",{staticStyle:{width:"224px"},attrs:{placeholder:"请输入用户名搜索",allowClear:!0},on:{search:t.onSearch}})],1),t._v(" "),r("a-table",{attrs:{columns:t.columns,"data-source":t.pageData,rowKey:"id",pagination:t.pagination,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"mediumAvatar",fn:function(t){return r("img",{attrs:{src:t,width:"50px",height:"50px"}})}},{key:"weChatQrCode",fn:function(e){return[e?r("img",{attrs:{src:e,width:"50px",height:"50px"}}):t._e()]}},{key:"loginInfo",fn:function(e){return r("div",{},[r("div",[t._v(t._s(t.$dateFormat(e.loginTime,"YYYY-MM-DD HH:mm")))]),t._v(" "),r("div",{staticClass:"color-gray text-sm"},[t._v(t._s(e.loginIp))])])}},{key:"action",fn:function(e){return[r("a-button",{attrs:{type:"link"},on:{click:function(r){return t.check(e.id)}}},[t._v("\n        查看\n      ")]),t._v(" "),r("a-dropdown",[r("a",{staticClass:"ant-dropdown-link",staticStyle:{"margin-left":"-6px"},on:{click:function(t){return t.preventDefault()}}},[r("a-icon",{attrs:{type:"caret-down"}})],1),t._v(" "),r("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[r("a-menu-item",[r("a",{attrs:{"data-toggle":"modal","data-target":"#modal","data-backdrop":"static","data-keyboard":"false","data-url":"/admin/v2/user/"+e.id+"/edit"}},[t._v("\n              编辑用户信息\n            ")])]),t._v(" "),r("a-menu-item",[r("a",{attrs:{"data-toggle":"modal","data-target":"#modal","data-backdrop":"static","data-keyboard":"false","data-url":"/admin/v2/user/"+e.id+"/avatar"}},[t._v("\n              修改用户头像\n            ")])]),t._v(" "),r("a-menu-item",[r("a",{attrs:{"data-toggle":"modal","data-target":"#modal","data-backdrop":"static","data-keyboard":"false","data-url":"/admin/v2/user/"+e.id+"/assistant/qrcode"}},[t._v("\n              修改助教二维码\n            ")])])],1)],1)]}}])}),t._v(" "),r("a-modal",{attrs:{title:"助教详细信息",visible:t.visible},on:{cancel:t.close}},[r("userInfoTable",{attrs:{user:t.user}}),t._v(" "),r("template",{slot:"footer"},[r("a-button",{key:"back",on:{click:t.close}},[t._v(" 关闭 ")])],1)],2)],1)}),[],!1,null,null,null);e.default=I.exports},1298:function(t,e,r){},1300:function(t,e,r){"use strict";var a={name:"AsideLayout",props:{breadcrumbs:{type:Array,required:!0},headerTitle:{type:String,default:""},headerTip:{type:String,default:""}}},n=(r(1301),r(31)),o=Object(n.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"aside-layout"},[r("div",{staticClass:"aside-layout-header"},[r("a-breadcrumb",{staticClass:"pull-left aside-layout-header__breadcrumb",attrs:{separator:"/"}},t._l(t.breadcrumbs,(function(e,a){return r("a-breadcrumb-item",{key:a},[e.href?[r("a",{attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.name))])]:e.pathName?[r("a",{attrs:{href:"javascript:;"},on:{click:function(r){return t.$router.push({name:e.pathName})}}},[t._v(t._s(e.name))])]:[t._v("\n          "+t._s(e.name)+"\n        ")]],2)})),1),t._v(" "),t.headerTip?r("a-popover",{attrs:{placement:"bottomLeft"}},[r("template",{slot:"content"},[r("div",{staticClass:"aside-header-tip",domProps:{innerHTML:t._s(t.headerTip)}})]),t._v(" "),r("span",{staticClass:"aside-header-title-icon"},[r("a-icon",{attrs:{theme:"filled",type:"question-circle"}}),r("span",{staticClass:"icon-circle"},[t._v(t._s(t.headerTitle))])],1)],2):t._e()],1),t._v(" "),r("div",{staticClass:"aside-layout-main"},[t._t("default")],2)])}),[],!1,null,null,null);e.a=o.exports},1301:function(t,e,r){"use strict";var a=r(1298);r.n(a).a},1308:function(t,e,r){"use strict";var a={props:{user:{type:Object,default:{}}},computed:{getUserRoles:function(){return _.join(this.user.user.roles," ")}},methods:{toPersonalHomepage:function(t){window.open("/user/"+t+"/about","_blank")},formatTimeIp:function(t,e){var r="";return r+=0!=t?this.$dateFormat(t,"YYYY-MM-DD HH:mm"):" -- ",""!=e&&(r+=" / "+e+" 本机IP"),r},formatStr:function(t){return void 0===t||""==t||null==t?"暂无":t},formatGender:function(){return{male:"男性",female:"女性",secret:"秘密"}[this.user.profile.gender]}}},n=r(31),o=Object(n.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"table table-striped table-condenseda table-bordered"},[r("tbody",[r("tr",[r("th",{attrs:{width:"30%"}},[t._v("用户名")]),t._v(" "),r("td",{attrs:{width:"70%"}},[r("a",{staticClass:"pull-right",attrs:{href:"javascript:;"},on:{click:function(e){return t.toPersonalHomepage(t.user.user.id)}}},[t._v("个人主页")]),t._v("\n        "+t._s(t.user.user.nickname)+"\n      ")])]),t._v(" "),r("tr",[r("th",[t._v("Email")]),t._v(" "),r("td",[t._v(t._s(t.user.profile.email||"- -"))])]),t._v(" "),r("tr",[r("th",[t._v("用户组")]),t._v(" "),r("td",[t._v(t._s(t.getUserRoles))])]),t._v(" "),r("tr",[r("th",[t._v("注册时间/IP")]),t._v(" "),r("td",[t._v(t._s(t.formatTimeIp(t.user.user.createdTime,t.user.user.createdIp)))])]),t._v(" "),r("tr",[r("th",[t._v("最近登录时间/IP")]),t._v(" "),r("td",[t._v(t._s(t.formatTimeIp(t.user.user.loginTime,t.user.user.loginIp)))])]),t._v(" "),r("tr",[r("th",[t._v("姓名")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.truename)))])]),t._v(" "),r("tr",[r("th",[t._v("性别")]),t._v(" "),r("td",[t._v(t._s(t.formatGender()))])]),t._v(" "),r("tr",[r("th",[t._v("身份证号")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.idcard)))])]),t._v(" "),r("tr",[r("th",[t._v("手机号码")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.mobile)))])]),t._v(" "),r("tr",[r("th",[t._v("公司")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.company)))])]),t._v(" "),r("tr",[r("th",[t._v("职业")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.job)))])]),t._v(" "),r("tr",[r("th",[t._v("头衔")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.user.title)))])]),t._v(" "),r("tr",[r("th",[t._v("个人签名")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.signature)))])]),t._v(" "),r("tr",[r("th",[t._v("自我介绍")]),t._v(" "),r("td",{domProps:{innerHTML:t._s(t.user.profile.about||"暂无")}})]),t._v(" "),r("tr",[r("th",[t._v("个人网站")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.site)))])]),t._v(" "),r("tr",[r("th",[t._v("微博")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.weibo)))])]),t._v(" "),r("tr",[r("th",[t._v("微信")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.weixin)))])]),t._v(" "),r("tr",[r("th",[t._v("QQ")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.qq)))])])])])}),[],!1,null,null,null);e.a=o.exports},210:function(t,e,r){r(211);var a=r(49).Object;t.exports=function(t,e){return a.getOwnPropertyDescriptor(t,e)}},211:function(t,e,r){var a=r(134),n=r(180).f;r(335)("getOwnPropertyDescriptor",(function(){return function(t,e){return n(a(t),e)}}))},335:function(t,e,r){var a=r(74),n=r(49),o=r(309);t.exports=function(t,e){var r=(n.Object||{})[t]||Object[t],s={};s[t]=e(r),a(a.S+a.F*o((function(){r(1)})),"Object",s)}},336:function(t,e,r){r(337);var a=r(49).Object;t.exports=function(t,e){return a.defineProperties(t,e)}},337:function(t,e,r){var a=r(74);a(a.S+a.F*!r(140),"Object",{defineProperties:r(378)})},338:function(t,e,r){r(339),t.exports=r(49).Object.getOwnPropertyDescriptors},339:function(t,e,r){var a=r(74),n=r(340),o=r(134),s=r(180),i=r(380);a(a.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,r,a=o(t),c=s.f,u=n(a),l={},d=0;u.length>d;)void 0!==(r=c(a,e=u[d++]))&&i(l,e,r);return l}})},340:function(t,e,r){var a=r(357),n=r(342),o=r(133),s=r(102).Reflect;t.exports=s&&s.ownKeys||function(t){var e=a.f(o(t)),r=n.f;return r?e.concat(r(t)):e}},341:function(t,e,r){r(379),t.exports=r(49).Object.getOwnPropertySymbols},39:function(t,e,r){var a=r(129);t.exports=function(t,e,r){return e in t?a(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},47:function(t,e,r){t.exports=r(580)},580:function(t,e,r){r(581),t.exports=r(49).Object.keys},581:function(t,e,r){var a=r(356),n=r(355);r(335)("keys",(function(){return function(t){return n(a(t))}}))},72:function(t,e,r){t.exports=r(210)},79:function(t,e,r){t.exports=r(338)},80:function(t,e,r){t.exports=r(341)}}]);
>>>>>>> d1125bd0b8762d718dd0dee8d3a5988966016e59
