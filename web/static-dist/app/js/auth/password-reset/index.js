<<<<<<< HEAD
!function(e){function r(r){for(var a,s,i=r[0],c=r[1],d=r[2],u=0,h=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&h.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(l&&l(r);h.length;)h.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,r=0;r<o.length;r++){for(var t=o[r],a=!0,i=1;i<t.length;i++){var c=t[i];0!==n[c]&&(a=!1)}a&&(o.splice(r--,1),e=s(s.s=t[0]))}return e}var a={},n={126:0},o=[];function s(r){if(a[r])return a[r].exports;var t=a[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=a,s.d=function(e,r,t){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)s.d(t,a,function(r){return e[r]}.bind(null,a));return t},s.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="/static-dist/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=r,i=i.slice();for(var d=0;d<i.length;d++)r(i[d]);var l=c;o.push([754,0]),t()}({22:function(e,r){e.exports=jQuery},317:function(e,r,t){"use strict";t.d(r,"a",(function(){return a}));var a=function e(r,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};if(r.addClass("disabled").attr("disabled",!0),t.data("count-down-text")||t.data("count-down-text",t.text()),t.text(a+" 秒后重新获取"),--a<0)return r.removeClass("disabled").attr("disabled",!1),t.text(t.data("count-down-text")),void n();setTimeout((function(){e(r,t,a,n)}),1e3)}},468:function(e,r){!function(e){"use strict";var r,t;void 0===e.btoa&&(e.btoa=(r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),function(e){var t,a,n,o,s,i,c;for(a=n=0,o=e.length,i=(o-=s=o%3)/3<<2,s>0&&(i+=4),t=new Array(i);a<o;)c=e.charCodeAt(a++)<<16|e.charCodeAt(a++)<<8|e.charCodeAt(a++),t[n++]=r[c>>18]+r[c>>12&63]+r[c>>6&63]+r[63&c];return 1==s?(c=e.charCodeAt(a++),t[n++]=r[c>>2]+r[(3&c)<<4]+"=="):2==s&&(c=e.charCodeAt(a++)<<8|e.charCodeAt(a++),t[n++]=r[c>>10]+r[c>>4&63]+r[(15&c)<<2]+"="),t.join("")})),void 0===e.atob&&(e.atob=(t=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1],function(e){var r,a,n,o,s,i,c,d,l,u;if((c=e.length)%4!=0)return"";if(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(e))return"";for(l=c,(d="="==e.charAt(c-2)?1:"="==e.charAt(c-1)?2:0)>0&&(l-=4),l=3*(l>>2)+d,u=new Array(l),s=i=0;s<c&&-1!=(r=t[e.charCodeAt(s++)])&&-1!=(a=t[e.charCodeAt(s++)])&&(u[i++]=String.fromCharCode(r<<2|(48&a)>>4),-1!=(n=t[e.charCodeAt(s++)]))&&(u[i++]=String.fromCharCode((15&a)<<4|(60&n)>>2),-1!=(o=t[e.charCodeAt(s++)]));)u[i++]=String.fromCharCode((3&n)<<6|o);return u.join("")}));var a=2654435769;function n(e,r){var t=e.length,a=t<<2;if(r){var n=e[t-1];if(n<(a-=4)-3||n>a)return null;a=n}for(var o=0;o<t;o++)e[o]=String.fromCharCode(255&e[o],e[o]>>>8&255,e[o]>>>16&255,e[o]>>>24&255);var s=e.join("");return r?s.substring(0,a):s}function o(e,r){var t,a=e.length,n=a>>2;0!=(3&a)&&++n,r?(t=new Array(n+1))[n]=a:t=new Array(n);for(var o=0;o<a;++o)t[o>>2]|=e.charCodeAt(o)<<((3&o)<<3);return t}function s(e){return 4294967295&e}function i(e,r,t,a,n,o){return(t>>>5^r<<2)+(r>>>3^t<<4)^(e^r)+(o[3&a^n]^t)}function c(e){return e.length<4&&(e.length=4),e}function d(e){if(/^[\x00-\x7f]*$/.test(e))return e;for(var r=[],t=e.length,a=0,n=0;a<t;++a,++n){var o=e.charCodeAt(a);if(o<128)r[n]=e.charAt(a);else if(o<2048)r[n]=String.fromCharCode(192|o>>6,128|63&o);else{if(!(o<55296||o>57343)){if(a+1<t){var s=e.charCodeAt(a+1);if(o<56320&&56320<=s&&s<=57343){var i=65536+((1023&o)<<10|1023&s);r[n]=String.fromCharCode(240|i>>18&63,128|i>>12&63,128|i>>6&63,128|63&i),++a;continue}}throw new Error("Malformed string")}r[n]=String.fromCharCode(224|o>>12,128|o>>6&63,128|63&o)}}return r.join("")}function l(e,r){return(null==r||r<0)&&(r=e.length),0===r?"":/^[\x00-\x7f]*$/.test(e)||!/^[\x00-\xff]*$/.test(e)?r===e.length?e:e.substr(0,r):r<65535?function(e,r){for(var t=new Array(r),a=0,n=0,o=e.length;a<r&&n<o;a++){var s=e.charCodeAt(n++);switch(s>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:t[a]=s;break;case 12:case 13:if(!(n<o))throw new Error("Unfinished UTF-8 octet sequence");t[a]=(31&s)<<6|63&e.charCodeAt(n++);break;case 14:if(!(n+1<o))throw new Error("Unfinished UTF-8 octet sequence");t[a]=(15&s)<<12|(63&e.charCodeAt(n++))<<6|63&e.charCodeAt(n++);break;case 15:if(!(n+2<o))throw new Error("Unfinished UTF-8 octet sequence");var i=((7&s)<<18|(63&e.charCodeAt(n++))<<12|(63&e.charCodeAt(n++))<<6|63&e.charCodeAt(n++))-65536;if(!(0<=i&&i<=1048575))throw new Error("Character outside valid Unicode range: 0x"+i.toString(16));t[a++]=i>>10&1023|55296,t[a]=1023&i|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+s.toString(16))}}return a<r&&(t.length=a),String.fromCharCode.apply(String,t)}(e,r):function(e,r){for(var t=[],a=new Array(32768),n=0,o=0,s=e.length;n<r&&o<s;n++){var i=e.charCodeAt(o++);switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:a[n]=i;break;case 12:case 13:if(!(o<s))throw new Error("Unfinished UTF-8 octet sequence");a[n]=(31&i)<<6|63&e.charCodeAt(o++);break;case 14:if(!(o+1<s))throw new Error("Unfinished UTF-8 octet sequence");a[n]=(15&i)<<12|(63&e.charCodeAt(o++))<<6|63&e.charCodeAt(o++);break;case 15:if(!(o+2<s))throw new Error("Unfinished UTF-8 octet sequence");var c=((7&i)<<18|(63&e.charCodeAt(o++))<<12|(63&e.charCodeAt(o++))<<6|63&e.charCodeAt(o++))-65536;if(!(0<=c&&c<=1048575))throw new Error("Character outside valid Unicode range: 0x"+c.toString(16));a[n++]=c>>10&1023|55296,a[n]=1023&c|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+i.toString(16))}if(n>=32766){var d=n+1;a.length=d,t[t.length]=String.fromCharCode.apply(String,a),r-=d,n=-1}}return n>0&&(a.length=n,t[t.length]=String.fromCharCode.apply(String,a)),t.join("")}(e,r)}function u(e,r){return null==e||0===e.length?e:(e=d(e),r=d(r),n(function(e,r){var t,n,o,c,d,l,u=e.length,h=u-1;for(n=e[h],o=0,l=0|Math.floor(6+52/u);l>0;--l){for(c=(o=s(o+a))>>>2&3,d=0;d<h;++d)t=e[d+1],n=e[d]=s(e[d]+i(o,t,n,d,c,r));t=e[0],n=e[h]=s(e[h]+i(o,t,n,h,c,r))}return e}(o(e,!0),c(o(r,!1))),!1))}function h(e,r){return null==e||0===e.length?e:(r=d(r),l(n(function(e,r){var t,n,o,c,d,l=e.length,u=l-1;for(t=e[0],o=s(Math.floor(6+52/l)*a);0!==o;o=s(o-a)){for(c=o>>>2&3,d=u;d>0;--d)n=e[d-1],t=e[d]=s(e[d]-i(o,t,n,d,c,r));n=e[u],t=e[0]=s(e[0]-i(o,t,n,0,c,r))}return e}(o(e,!1),c(o(r,!1))),!0)))}e.XXTEA={utf8Encode:d,utf8Decode:l,encrypt:u,encryptToBase64:function(r,t){return e.btoa(u(r,t))},decrypt:h,decryptFromBase64:function(r,t){return null==r||0===r.length?r:h(e.atob(r),t)}}}(window)},754:function(e,r,t){"use strict";t.r(r);var a=t(2),n=t.n(a),o=t(3),s=t.n(o),i=(t(103),t(89)),c=t(44),d=t(8),l=t(317);t(468),new(function(){function e(){n()(this,e),this.event(),this.dragHtml=$(".js-drag-box").html(),$(".js-drag-box").remove(),"none"==$("#password-reset-form").css("display")?$("#password-reset-by-mobile-form").prepend(this.dragHtml):$("#password-reset-form").prepend(this.dragHtml),this.drag=new i.a($("#drag-btn"),$(".js-jigsaw"),{limitType:"reset_password"}),this.smsEvent(),this.validator(),this.smsToken=""}return s()(e,[{key:"event",value:function(){var e=this;$(".js-find-password li").click((function(){var r=$(this);if(!r.hasClass("active")){r.addClass("active").siblings().removeClass("active");var t=$(r.data("target"));t.length>0&&($("form").hide(),e.drag.unbindEvent(),$(".js-drag").remove(),t.prepend(e.dragHtml),e.drag=new i.a($("#drag-btn"),$(".js-jigsaw"),{limitType:"reset_password"}),t.show())}}))}},{key:"smsEvent",value:function(){var e=this,r=$(".js-sms-send"),t=this;r.click((function(){if(e.mobileValidator.element($('[name="dragCaptchaToken"]'))&&e.mobileValidator.element($('[name="mobile"]'))){if(r.hasClass("disabled"))return;r.addClass("disabled"),c.a.resetPasswordSms.get({params:{mobile:$("#mobile").val()},data:{dragCaptchaToken:$('[name="dragCaptchaToken"]').val()}}).then((function(e){Object(d.a)("success",Translator.trans("notify.sms_send_success.message")),r.removeClass("disabled"),Object(l.a)($(".js-sms-send"),$("#js-fetch-btn-text"),120),t.smsToken=e.smsToken})).catch((function(){r.removeClass("disabled"),t.drag.initDragCaptcha()}))}}))}},{key:"validator",value:function(){var e=this;$("#password-reset-form").validate({rules:{email:{required:!0,email:!0},dragCaptchaToken:{required:!0}},messages:{dragCaptchaToken:{required:Translator.trans("site.captcha_code.required")}},submitHandler:function(r){var t=$("#password-reset-form").find('[name="email"]').val();c.a.resetPasswordEmail.patch({params:{email:t},data:{dragCaptchaToken:$('[name="dragCaptchaToken"]').val()}}).then((function(e){Object(d.a)("success",Translator.trans("notify.password_reset_email_send_success.message")),window.location.href=$("#password-reset-form").data("success")+"?email="+t})).catch((function(r){4040104==(r.responseJSON.error.code||0)&&e.drag.initDragCaptcha()}))}}),$.validator.addMethod("passwordSms",(function(r,t){var a=!1;return c.a.resetPasswordSms.validate({params:{mobile:$("#mobile").val(),smsCode:$("#sms-code").val()},data:{smsToken:e.smsToken},async:!1,promise:!1}).success((function(e){a="sms.code.success"==e})),a}),$.validator.format(Translator.trans("validate.sms_code.message"))),this.mobileValidator=$("#password-reset-by-mobile-form").validate({rules:{mobile:{required:!0,phone:!0},sms_code:{required:!0,unsigned_integer:!0,rangelength:[6,6],passwordSms:!0},dragCaptchaToken:{required:!0},reset_password:{required:!0,minlength:5,maxlength:20}},messages:{sms_code:{required:Translator.trans("auth.password_reset.sms_code_required_hint"),rangelength:Translator.trans("auth.password_reset.sms_code_validate_hint")},dragCaptchaToken:{required:Translator.trans("site.captcha_code.required")}},submitHandler:function(r){c.a.resetPasswordMobile.patch({params:{mobile:$("#mobile").val()},data:{smsToken:e.smsToken,smsCode:$("#sms-code").val(),encrypt_password:window.XXTEA.encryptToBase64($("#reset_password").val(),window.location.host),dragCaptchaToken:$('[name="dragCaptchaToken"]').val()}}).then((function(e){Object(d.a)("success",Translator.trans("notify.password_reset_success.message")),window.location.href=$("#password-reset-form").data("success")+"?mobile="+$("#mobile").val()}))}})}}]),e}())}});
=======
!function(e){function r(r){for(var a,s,i=r[0],c=r[1],d=r[2],u=0,h=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&h.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(l&&l(r);h.length;)h.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,r=0;r<o.length;r++){for(var t=o[r],a=!0,i=1;i<t.length;i++){var c=t[i];0!==n[c]&&(a=!1)}a&&(o.splice(r--,1),e=s(s.s=t[0]))}return e}var a={},n={125:0},o=[];function s(r){if(a[r])return a[r].exports;var t=a[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=a,s.d=function(e,r,t){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)s.d(t,a,function(r){return e[r]}.bind(null,a));return t},s.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="/static-dist/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=r,i=i.slice();for(var d=0;d<i.length;d++)r(i[d]);var l=c;o.push([753,0]),t()}({22:function(e,r){e.exports=jQuery},317:function(e,r,t){"use strict";t.d(r,"a",(function(){return a}));var a=function e(r,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};if(r.addClass("disabled").attr("disabled",!0),t.data("count-down-text")||t.data("count-down-text",t.text()),t.text(a+" 秒后重新获取"),--a<0)return r.removeClass("disabled").attr("disabled",!1),t.text(t.data("count-down-text")),void n();setTimeout((function(){e(r,t,a,n)}),1e3)}},467:function(e,r){!function(e){"use strict";var r,t;void 0===e.btoa&&(e.btoa=(r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),function(e){var t,a,n,o,s,i,c;for(a=n=0,o=e.length,i=(o-=s=o%3)/3<<2,s>0&&(i+=4),t=new Array(i);a<o;)c=e.charCodeAt(a++)<<16|e.charCodeAt(a++)<<8|e.charCodeAt(a++),t[n++]=r[c>>18]+r[c>>12&63]+r[c>>6&63]+r[63&c];return 1==s?(c=e.charCodeAt(a++),t[n++]=r[c>>2]+r[(3&c)<<4]+"=="):2==s&&(c=e.charCodeAt(a++)<<8|e.charCodeAt(a++),t[n++]=r[c>>10]+r[c>>4&63]+r[(15&c)<<2]+"="),t.join("")})),void 0===e.atob&&(e.atob=(t=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1],function(e){var r,a,n,o,s,i,c,d,l,u;if((c=e.length)%4!=0)return"";if(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(e))return"";for(l=c,(d="="==e.charAt(c-2)?1:"="==e.charAt(c-1)?2:0)>0&&(l-=4),l=3*(l>>2)+d,u=new Array(l),s=i=0;s<c&&-1!=(r=t[e.charCodeAt(s++)])&&-1!=(a=t[e.charCodeAt(s++)])&&(u[i++]=String.fromCharCode(r<<2|(48&a)>>4),-1!=(n=t[e.charCodeAt(s++)]))&&(u[i++]=String.fromCharCode((15&a)<<4|(60&n)>>2),-1!=(o=t[e.charCodeAt(s++)]));)u[i++]=String.fromCharCode((3&n)<<6|o);return u.join("")}));var a=2654435769;function n(e,r){var t=e.length,a=t<<2;if(r){var n=e[t-1];if(n<(a-=4)-3||n>a)return null;a=n}for(var o=0;o<t;o++)e[o]=String.fromCharCode(255&e[o],e[o]>>>8&255,e[o]>>>16&255,e[o]>>>24&255);var s=e.join("");return r?s.substring(0,a):s}function o(e,r){var t,a=e.length,n=a>>2;0!=(3&a)&&++n,r?(t=new Array(n+1))[n]=a:t=new Array(n);for(var o=0;o<a;++o)t[o>>2]|=e.charCodeAt(o)<<((3&o)<<3);return t}function s(e){return 4294967295&e}function i(e,r,t,a,n,o){return(t>>>5^r<<2)+(r>>>3^t<<4)^(e^r)+(o[3&a^n]^t)}function c(e){return e.length<4&&(e.length=4),e}function d(e){if(/^[\x00-\x7f]*$/.test(e))return e;for(var r=[],t=e.length,a=0,n=0;a<t;++a,++n){var o=e.charCodeAt(a);if(o<128)r[n]=e.charAt(a);else if(o<2048)r[n]=String.fromCharCode(192|o>>6,128|63&o);else{if(!(o<55296||o>57343)){if(a+1<t){var s=e.charCodeAt(a+1);if(o<56320&&56320<=s&&s<=57343){var i=65536+((1023&o)<<10|1023&s);r[n]=String.fromCharCode(240|i>>18&63,128|i>>12&63,128|i>>6&63,128|63&i),++a;continue}}throw new Error("Malformed string")}r[n]=String.fromCharCode(224|o>>12,128|o>>6&63,128|63&o)}}return r.join("")}function l(e,r){return(null==r||r<0)&&(r=e.length),0===r?"":/^[\x00-\x7f]*$/.test(e)||!/^[\x00-\xff]*$/.test(e)?r===e.length?e:e.substr(0,r):r<65535?function(e,r){for(var t=new Array(r),a=0,n=0,o=e.length;a<r&&n<o;a++){var s=e.charCodeAt(n++);switch(s>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:t[a]=s;break;case 12:case 13:if(!(n<o))throw new Error("Unfinished UTF-8 octet sequence");t[a]=(31&s)<<6|63&e.charCodeAt(n++);break;case 14:if(!(n+1<o))throw new Error("Unfinished UTF-8 octet sequence");t[a]=(15&s)<<12|(63&e.charCodeAt(n++))<<6|63&e.charCodeAt(n++);break;case 15:if(!(n+2<o))throw new Error("Unfinished UTF-8 octet sequence");var i=((7&s)<<18|(63&e.charCodeAt(n++))<<12|(63&e.charCodeAt(n++))<<6|63&e.charCodeAt(n++))-65536;if(!(0<=i&&i<=1048575))throw new Error("Character outside valid Unicode range: 0x"+i.toString(16));t[a++]=i>>10&1023|55296,t[a]=1023&i|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+s.toString(16))}}return a<r&&(t.length=a),String.fromCharCode.apply(String,t)}(e,r):function(e,r){for(var t=[],a=new Array(32768),n=0,o=0,s=e.length;n<r&&o<s;n++){var i=e.charCodeAt(o++);switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:a[n]=i;break;case 12:case 13:if(!(o<s))throw new Error("Unfinished UTF-8 octet sequence");a[n]=(31&i)<<6|63&e.charCodeAt(o++);break;case 14:if(!(o+1<s))throw new Error("Unfinished UTF-8 octet sequence");a[n]=(15&i)<<12|(63&e.charCodeAt(o++))<<6|63&e.charCodeAt(o++);break;case 15:if(!(o+2<s))throw new Error("Unfinished UTF-8 octet sequence");var c=((7&i)<<18|(63&e.charCodeAt(o++))<<12|(63&e.charCodeAt(o++))<<6|63&e.charCodeAt(o++))-65536;if(!(0<=c&&c<=1048575))throw new Error("Character outside valid Unicode range: 0x"+c.toString(16));a[n++]=c>>10&1023|55296,a[n]=1023&c|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+i.toString(16))}if(n>=32766){var d=n+1;a.length=d,t[t.length]=String.fromCharCode.apply(String,a),r-=d,n=-1}}return n>0&&(a.length=n,t[t.length]=String.fromCharCode.apply(String,a)),t.join("")}(e,r)}function u(e,r){return null==e||0===e.length?e:(e=d(e),r=d(r),n(function(e,r){var t,n,o,c,d,l,u=e.length,h=u-1;for(n=e[h],o=0,l=0|Math.floor(6+52/u);l>0;--l){for(c=(o=s(o+a))>>>2&3,d=0;d<h;++d)t=e[d+1],n=e[d]=s(e[d]+i(o,t,n,d,c,r));t=e[0],n=e[h]=s(e[h]+i(o,t,n,h,c,r))}return e}(o(e,!0),c(o(r,!1))),!1))}function h(e,r){return null==e||0===e.length?e:(r=d(r),l(n(function(e,r){var t,n,o,c,d,l=e.length,u=l-1;for(t=e[0],o=s(Math.floor(6+52/l)*a);0!==o;o=s(o-a)){for(c=o>>>2&3,d=u;d>0;--d)n=e[d-1],t=e[d]=s(e[d]-i(o,t,n,d,c,r));n=e[u],t=e[0]=s(e[0]-i(o,t,n,0,c,r))}return e}(o(e,!1),c(o(r,!1))),!0)))}e.XXTEA={utf8Encode:d,utf8Decode:l,encrypt:u,encryptToBase64:function(r,t){return e.btoa(u(r,t))},decrypt:h,decryptFromBase64:function(r,t){return null==r||0===r.length?r:h(e.atob(r),t)}}}(window)},753:function(e,r,t){"use strict";t.r(r);var a=t(2),n=t.n(a),o=t(3),s=t.n(o),i=(t(103),t(86)),c=t(44),d=t(8),l=t(317);t(467),new(function(){function e(){n()(this,e),this.event(),this.dragHtml=$(".js-drag-box").html(),$(".js-drag-box").remove(),"none"==$("#password-reset-form").css("display")?$("#password-reset-by-mobile-form").prepend(this.dragHtml):$("#password-reset-form").prepend(this.dragHtml),this.drag=new i.a($("#drag-btn"),$(".js-jigsaw"),{limitType:"reset_password"}),this.smsEvent(),this.validator(),this.smsToken=""}return s()(e,[{key:"event",value:function(){var e=this;$(".js-find-password li").click((function(){var r=$(this);if(!r.hasClass("active")){r.addClass("active").siblings().removeClass("active");var t=$(r.data("target"));t.length>0&&($("form").hide(),e.drag.unbindEvent(),$(".js-drag").remove(),t.prepend(e.dragHtml),e.drag=new i.a($("#drag-btn"),$(".js-jigsaw"),{limitType:"reset_password"}),t.show())}}))}},{key:"smsEvent",value:function(){var e=this,r=$(".js-sms-send"),t=this;r.click((function(){if(e.mobileValidator.element($('[name="dragCaptchaToken"]'))&&e.mobileValidator.element($('[name="mobile"]'))){if(r.hasClass("disabled"))return;r.addClass("disabled"),c.a.resetPasswordSms.get({params:{mobile:$("#mobile").val()},data:{dragCaptchaToken:$('[name="dragCaptchaToken"]').val()}}).then((function(e){Object(d.a)("success",Translator.trans("notify.sms_send_success.message")),r.removeClass("disabled"),Object(l.a)($(".js-sms-send"),$("#js-fetch-btn-text"),120),t.smsToken=e.smsToken})).catch((function(){r.removeClass("disabled"),t.drag.initDragCaptcha()}))}}))}},{key:"validator",value:function(){var e=this;$("#password-reset-form").validate({rules:{email:{required:!0,email:!0},dragCaptchaToken:{required:!0}},messages:{dragCaptchaToken:{required:Translator.trans("site.captcha_code.required")}},submitHandler:function(r){var t=$("#password-reset-form").find('[name="email"]').val();c.a.resetPasswordEmail.patch({params:{email:t},data:{dragCaptchaToken:$('[name="dragCaptchaToken"]').val()}}).then((function(e){Object(d.a)("success",Translator.trans("notify.password_reset_email_send_success.message")),window.location.href=$("#password-reset-form").data("success")+"?email="+t})).catch((function(r){4040104==(r.responseJSON.error.code||0)&&e.drag.initDragCaptcha()}))}}),$.validator.addMethod("passwordSms",(function(r,t){var a=!1;return c.a.resetPasswordSms.validate({params:{mobile:$("#mobile").val(),smsCode:$("#sms-code").val()},data:{smsToken:e.smsToken},async:!1,promise:!1}).success((function(e){a="sms.code.success"==e})),a}),$.validator.format(Translator.trans("validate.sms_code.message"))),this.mobileValidator=$("#password-reset-by-mobile-form").validate({rules:{mobile:{required:!0,phone:!0},sms_code:{required:!0,unsigned_integer:!0,rangelength:[6,6],passwordSms:!0},dragCaptchaToken:{required:!0},reset_password:{required:!0,minlength:5,maxlength:20}},messages:{sms_code:{required:Translator.trans("auth.password_reset.sms_code_required_hint"),rangelength:Translator.trans("auth.password_reset.sms_code_validate_hint")},dragCaptchaToken:{required:Translator.trans("site.captcha_code.required")}},submitHandler:function(r){c.a.resetPasswordMobile.patch({params:{mobile:$("#mobile").val()},data:{smsToken:e.smsToken,smsCode:$("#sms-code").val(),encrypt_password:window.XXTEA.encryptToBase64($("#reset_password").val(),window.location.host),dragCaptchaToken:$('[name="dragCaptchaToken"]').val()}}).then((function(e){Object(d.a)("success",Translator.trans("notify.password_reset_success.message")),window.location.href=$("#password-reset-form").data("success")+"?mobile="+$("#mobile").val()}))}})}}]),e}())}});
>>>>>>> d1125bd0b8762d718dd0dee8d3a5988966016e59
