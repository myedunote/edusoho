webpackJsonp([14],{ZNO8:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("eqfM");var n=s("/QYm"),a=s("Dd8w"),r=s.n(a),i=s("Xxa5"),o=s.n(i),u=s("exGp"),c=s.n(u),l=s("NYxO"),d=s("gyMJ"),p={data:function(){return{username:"",password:"",errorMessage:{password:""}}},created:function(){var e=this;return c()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.getSettings({query:{type:"register"}});case 2:e.registerSettings=t.sent;case 3:case"end":return t.stop()}},t,e)}))()},computed:{btnDisable:function(){return!(this.username&&this.password)}},methods:r()({},Object(l.mapActions)(["userLogin"]),{onSubmit:function(){var e=this;this.userLogin({username:this.username,password:this.password}).then(function(t){n.a.success({duration:2e3,message:"登录成功"});var s=decodeURIComponent(e.$route.query.redirect||"find");setTimeout(function(){e.$router.push({name:s})},2e3)}).catch(function(e){n.a.fail(e.message)})},jumpRegister:function(){"closed"!=this.registerSettings.mode&&"email"!=this.registerSettings.mode?this.$router.push({name:"register"}):Object(n.a)("网校未开启手机注册，请联系管理员")}})},m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("span",{staticClass:"login-title"},[e._v("登录账号")]),e._v(" "),s("img",{staticClass:"login-avatarimg",attrs:{src:""}}),e._v(" "),s("van-field",{staticClass:"login-input e-input",attrs:{placeholder:"邮箱/手机/用户名"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),s("van-field",{staticClass:"login-input e-input",attrs:{type:"password","error-message":e.errorMessage.password,placeholder:"请输入密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),s("van-button",{staticClass:"primary-btn mb20",attrs:{type:"default",disabled:e.btnDisable},on:{click:e.onSubmit}},[e._v("登录")]),e._v(" "),s("div",{staticClass:"login-bottom"},[e._v("\n    还没有注册帐号？\n    "),s("span",{staticClass:"login-account",on:{click:e.jumpRegister}},[e._v("立即注册")])])],1)},staticRenderFns:[]},g=s("VU/8")(p,m,!1,null,null,null);t.default=g.exports}});