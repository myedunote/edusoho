!function(t){function e(e){for(var r,i,c=e[0],u=e[1],l=e[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(s&&s(e);f.length;)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={207:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static-dist/";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=u;o.push([955,0]),n()}({955:function(t,e,n){"use strict";n.r(e);var r=new(n(109).a)({drag:{limitType:"thread",bar:"#drag-btn",target:".js-jigsaw"}}),a=$("#thread-form"),o=null;1==$("input[name=enable_anti_brush_captcha]").val()&&(o={captchaClass:r,isShowCaptcha:$(r.params.maskClass).length?1:0});var i=a.find(".js-btn-thread-save"),c=a.validate({captcha:o,rules:{"thread[title]":{required:!0,trim:!0,maxlength:30},"thread[content]":{required:!0,maxlength:1e4}},submitSuccess:function(t){c.settings.captcha.isShowCaptcha=1,r.hideDrag()},submitError:function(t){c.settings.captcha.isShowCaptcha=1,r.hideDrag(),i.button("reset")}});a.on("submitHandler",(function(){r.setType("thread")})),r.on("success",(function(t){"thread"==t.type&&(c.settings.captcha.isShowCaptcha=0,a.find("input[name=_dragCaptchaToken]").val(t.token),a.submit())})),$(".js-btn-thread-save").click((function(t){c.form()&&($(t.currentTarget).button("loading"),a.submit())}));var u=CKEDITOR.replace("thread_content",{toolbar:"Thread",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:$("#thread_content").data("imageUploadUrl")});u.on("change",(function(){$("#thread_content").val(u.getData())})),u.on("blur",(function(){$("#thread_content").val(u.getData()),c.form()}))}});