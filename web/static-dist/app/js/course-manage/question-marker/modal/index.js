<<<<<<< HEAD
!function(t){function e(e){for(var n,o,s=e[0],u=e[1],l=e[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(c&&c(e);f.length;)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var u=r[s];0!==a[u]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={189:0},i=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;i.push([837,0]),r()}({837:function(t,e,r){"use strict";r.r(e);var n=r(2),a=r.n(n),i=r(3),o=r.n(i);new(function(){function t(){a()(this,t),this.init()}return o()(t,[{key:"init",value:function(){var t=echarts.init(document.getElementById("main")),e=$(".popup-topic").data("type");e.indexOf("single_choice")>=0?t.setOption(this.getPeiOptions()):t.setOption(this.getBarOptions(e)),$('[data-toggle="tab"]').on("click",(function(){$(this).addClass("btn-primary").removeClass("btn-default").siblings().removeClass("btn-primary").addClass("btn-default")}))}},{key:"getPeiOptions",value:function(){var t=this.getStats(),e=[],r=[];return $.each(t,(function(t,n){var a=t;e.push(a),r.push({name:a,value:n.pct})})),{tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},color:["#4653BE","#72CC59","#4DA8E6","#F8AB60"],legend:{orient:"vertical",right:"right",top:"center",itemWidth:8,itemHeight:8,data:e},series:[{name:"",type:"pie",radius:"55%",center:["50%","60%"],labelLine:{normal:{show:!1}},label:{normal:{show:!1,position:"center"}},data:r}]}}},{key:"getBarOptions",value:function(t){var e=this.getStats(),r=[],n=[],a=Translator.trans("course.question_marker.selection_rate");return $.each(e,(function(e,i){if("fill"===t)r.push(Translator.trans("course.question_marker.gap_filling")+(e+1)),a=Translator.trans("course.question_marker.correct_rate");else if("determine"===t){var o=String.fromCharCode(e+65);r.push(o)}else r.push(e);n.push(i.pct)})),{color:["#5586db"],tooltip:{formatter:"{a}<br />{b}：{c}%"},xAxis:{data:r},yAxis:{max:100},series:[{name:a,type:"bar",data:n}]}}},{key:"getStats",value:function(){return $("#figure").data("stats")}}]),t}())}});
=======
!function(t){function e(e){for(var n,o,s=e[0],u=e[1],l=e[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(c&&c(e);f.length;)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var u=r[s];0!==a[u]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={188:0},i=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;i.push([836,0]),r()}({836:function(t,e,r){"use strict";r.r(e);var n=r(2),a=r.n(n),i=r(3),o=r.n(i);new(function(){function t(){a()(this,t),this.init()}return o()(t,[{key:"init",value:function(){var t=echarts.init(document.getElementById("main")),e=$(".popup-topic").data("type");e.indexOf("single_choice")>=0?t.setOption(this.getPeiOptions()):t.setOption(this.getBarOptions(e)),$('[data-toggle="tab"]').on("click",(function(){$(this).addClass("btn-primary").removeClass("btn-default").siblings().removeClass("btn-primary").addClass("btn-default")}))}},{key:"getPeiOptions",value:function(){var t=this.getStats(),e=[],r=[];return $.each(t,(function(t,n){var a=t;e.push(a),r.push({name:a,value:n.pct})})),{tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},color:["#4653BE","#72CC59","#4DA8E6","#F8AB60"],legend:{orient:"vertical",right:"right",top:"center",itemWidth:8,itemHeight:8,data:e},series:[{name:"",type:"pie",radius:"55%",center:["50%","60%"],labelLine:{normal:{show:!1}},label:{normal:{show:!1,position:"center"}},data:r}]}}},{key:"getBarOptions",value:function(t){var e=this.getStats(),r=[],n=[],a=Translator.trans("course.question_marker.selection_rate");return $.each(e,(function(e,i){if("fill"===t)r.push(Translator.trans("course.question_marker.gap_filling")+(e+1)),a=Translator.trans("course.question_marker.correct_rate");else if("determine"===t){var o=String.fromCharCode(e+65);r.push(o)}else r.push(e);n.push(i.pct)})),{color:["#5586db"],tooltip:{formatter:"{a}<br />{b}：{c}%"},xAxis:{data:r},yAxis:{max:100},series:[{name:a,type:"bar",data:n}]}}},{key:"getStats",value:function(){return $("#figure").data("stats")}}]),t}())}});
>>>>>>> d1125bd0b8762d718dd0dee8d3a5988966016e59
