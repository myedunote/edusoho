!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="/static-dist/",e(e.s=22)}([function(n,t,e){n.exports=!e(7)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(n,t){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},function(n,t){n.exports=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}},function(n,t,e){var r=e(9);function o(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),r(n,o.key,o)}}n.exports=function(n,t,e){return t&&o(n.prototype,t),e&&o(n,e),n}},function(n,t){var e=n.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},function(n,t){var e=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(n,t,e){var r=e(16),o=e(17),i=e(19),u=Object.defineProperty;t.f=e(0)?Object.defineProperty:function(n,t,e){if(r(n),t=i(t,!0),r(e),o)try{return u(n,t,e)}catch(n){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(n[t]=e.value),n}},function(n,t){n.exports=function(n){try{return!!n()}catch(n){return!0}}},,function(n,t,e){n.exports=e(10)},function(n,t,e){e(11);var r=e(4).Object;n.exports=function(n,t,e){return r.defineProperty(n,t,e)}},function(n,t,e){var r=e(12);r(r.S+r.F*!e(0),"Object",{defineProperty:e(6).f})},function(n,t,e){var r=e(5),o=e(4),i=e(13),u=e(15),c=e(21),f=function(n,t,e){var a,l,s,p=n&f.F,y=n&f.G,v=n&f.S,d=n&f.P,b=n&f.B,x=n&f.W,h=y?o:o[t]||(o[t]={}),w=h.prototype,m=y?r:v?r[t]:(r[t]||{}).prototype;for(a in y&&(e=t),e)(l=!p&&m&&void 0!==m[a])&&c(h,a)||(s=l?m[a]:e[a],h[a]=y&&"function"!=typeof m[a]?e[a]:b&&l?i(s,r):x&&m[a]==s?function(n){var t=function(t,e,r){if(this instanceof n){switch(arguments.length){case 0:return new n;case 1:return new n(t);case 2:return new n(t,e)}return new n(t,e,r)}return n.apply(this,arguments)};return t.prototype=n.prototype,t}(s):d&&"function"==typeof s?i(Function.call,s):s,d&&((h.virtual||(h.virtual={}))[a]=s,n&f.R&&w&&!w[a]&&u(w,a,s)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,n.exports=f},function(n,t,e){var r=e(14);n.exports=function(n,t,e){if(r(n),void 0===t)return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,o){return n.call(t,e,r,o)}}return function(){return n.apply(t,arguments)}}},function(n,t){n.exports=function(n){if("function"!=typeof n)throw TypeError(n+" is not a function!");return n}},function(n,t,e){var r=e(6),o=e(20);n.exports=e(0)?function(n,t,e){return r.f(n,t,o(1,e))}:function(n,t,e){return n[t]=e,n}},function(n,t,e){var r=e(1);n.exports=function(n){if(!r(n))throw TypeError(n+" is not an object!");return n}},function(n,t,e){n.exports=!e(0)&&!e(7)((function(){return 7!=Object.defineProperty(e(18)("div"),"a",{get:function(){return 7}}).a}))},function(n,t,e){var r=e(1),o=e(5).document,i=r(o)&&r(o.createElement);n.exports=function(n){return i?o.createElement(n):{}}},function(n,t,e){var r=e(1);n.exports=function(n,t){if(!r(n))return n;var e,o;if(t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;if("function"==typeof(e=n.valueOf)&&!r(o=e.call(n)))return o;if(!t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;throw TypeError("Can't convert object to primitive value")}},function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},function(n,t){var e={}.hasOwnProperty;n.exports=function(n,t){return e.call(n,t)}},function(n,t,e){"use strict";e.r(t);var r=e(2),o=e.n(r),i=e(3),u=e.n(i);new(function(){function n(){o()(this,n),this.modal="#modal",this.init()}return u()(n,[{key:"init",value:function(){this.continueExercise(),this.continueExerciseClose()}},{key:"continueExercise",value:function(){$(".js-continue-exercise-back").on("click",(function(){window.history.back()}))}},{key:"continueExerciseClose",value:function(){var n=$(this.modal);$(".js-continue-exercise-close").on("click",(function(){n.modal("hide")}))}}]),n}())}]);