(window.webpackJsonp=window.webpackJsonp||[]).push([["marketingWxpay"],{"0f06":function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=function(e){return"string"==typeof e},a=function(e){return e instanceof Blob};(function(){"navigator"in this||(this.navigator={}),"function"!=typeof this.navigator.sendBeacon&&(this.navigator.sendBeacon=function(e,t){var n=this.event&&this.event.type,o="unload"===n||"beforeunload"===n,i="XMLHttpRequest"in this?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");i.open("POST",e,!o),i.withCredentials=!0,i.setRequestHeader("Accept","*/*"),r(t)?(i.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),i.responseType="text"):a(t)&&t.type&&i.setRequestHeader("Content-Type",t.type);try{i.send(t)}catch(e){return!1}return!0}.bind(this))}).call("object"===("undefined"==typeof window?"undefined":n(window))?window:{})},8567:function(e,t,n){"use strict";n.r(t),n("8e6e"),n("ac6a"),n("456d"),n("e17f");var r=n("2241"),a=(n("e7e5"),n("d399")),o=(n("c5f6"),n("96cf"),n("3b8d")),i=n("bd86"),s=n("3ce7"),c=n("2f62");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n("0f06");var p={name:"MarketingWXPay",data:function(){return{isLoading:!1,payInfo:null,loginConfig:{},isPay:!1}},computed:f(f({},Object(c.e)({token:function(e){return e.token}})),{},{isWeixinBrowser:function(){return/micromessenger/.test(navigator.userAgent.toLowerCase())}}),created:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(document.title=e.$t("title.confirmPayment"),e.token){t.next=4;break}return s.a.loginConfig({}).then((function(t){e.loginConfig=t,Number(t.weixinmob_enabled)&&e.isWeixinBrowser&&e.wxLogin()})),t.abrupt("return");case 4:if(n=e.$route.query.payToken||""){t.next=8;break}return a.a.fail("缺少关键信息"),t.abrupt("return");case 8:return t.next=10,s.a.getMarketingMallPayConfig({data:{token:n}});case 10:if(!1!==(o=t.sent).success){t.next=14;break}return r.a.alert({confirmButtonText:"我知道了",confirmButtonColor:"#165DFF",message:o.message}),t.abrupt("return");case 14:e.payInfo=o,e.handlePay(),window.addEventListener("unload",(function(){return e.closeOrder()}));case 17:case"end":return t.stop()}}),t)})))()},methods:{closeOrder:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isPay){t.next=2;break}return t.abrupt("return");case 2:navigator.sendBeacon("/api/mall_close_order",{orderSn:e.payInfo.orderSn});case 3:case"end":return t.stop()}}),t)})))()},handleAmount:function(e){return e/100},handlePay:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$route.query.payToken||"",t.next=3,s.a.checkMarketingMallPayConfig({params:{token:n}});case 3:if(!1!==(a=t.sent).success){t.next=7;break}return r.a.alert({confirmButtonText:"我知道了",confirmButtonColor:"#165DFF",message:a.message}),t.abrupt("return");case 7:WeixinJSBridge.invoke("getBrandWCPayRequest",e.payInfo.config,(function(t){"get_brand_wcpay_request:ok"==t.err_msg?(e.isPay=!0,window.location.href=e.payInfo.redirectUrl+"&isNeedCheckOrderStatus=1&sn=".concat(e.payInfo.orderSn)):"get_brand_wcpay_request:fail"==t.err_msg||t.err_msg}));case 8:case"end":return t.stop()}}),t)})))()},wxLogin:function(){this.$router.push({path:"/auth/social",query:{type:"wx",weixinmob_key:this.loginConfig.weixinmob_key,redirect:this.$route.query.redirect||this.$route.path,callbackType:this.$route.query.callbackType,activityId:this.$route.query.activityId}})}}},l=(n("e047"),n("0c7c")),y=Object(l.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isWeixinBrowser&&e.payInfo?n("div",{staticClass:"marketing-wxpay"},[n("div",{staticClass:"marketing-wxpay__title"},[e._v(e._s(e.$t("marketingPay.amountLabel")))]),n("div",{staticClass:"marketing-wxpay__amount"},[n("span",{staticClass:"amount-unit"},[e._v("￥")]),n("span",{staticClass:"amount-number"},[e._v(e._s((e.payInfo.amount/100).toFixed(2)))])]),n("div",{staticClass:"marketing-wxpay__info"},[n("div",{staticClass:"info-label"},[e._v(e._s(e.$t("marketingPay.orderSnLabel")))]),n("div",{staticClass:"info-desc"},[e._v(e._s(e.payInfo.orderSn))])]),n("div",{staticClass:"marketing-wxpay__info",staticStyle:{border:"none"}},[n("div",{staticClass:"info-label"},[e._v(e._s(e.$t("marketingPay.acceptLabel")))]),n("div",{staticClass:"info-desc"},[e._v(e._s(e.payInfo.siteName))])]),n("div",{staticClass:"pay-btn",on:{click:e.handlePay}},[e._v("\n    "+e._s(e.$t("marketingPay.payNow"))+"\n  ")])]):e._e()}),[],!1,null,"0e49b278",null);t.default=y.exports},"97bd":function(e,t,n){},e047:function(e,t,n){"use strict";var r=n("97bd");n.n(r).a}}]);