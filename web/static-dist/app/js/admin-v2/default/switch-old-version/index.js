!function(c){function t(t){for(var e,n,r=t[0],o=t[1],a=t[2],i=0,u=[];i<r.length;i++)n=r[i],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&u.push(l[n][0]),l[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(c[e]=o[e]);for(d&&d(t);u.length;)u.shift()();return f.push.apply(f,a||[]),s()}function s(){for(var t,e=0;e<f.length;e++){for(var n=f[e],r=!0,o=1;o<n.length;o++){var a=n[o];0!==l[a]&&(r=!1)}r&&(f.splice(e--,1),t=i(i.s=n[0]))}return t}var n={},l={50:0},f=[];function i(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return c[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=c,i.c=n,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],r=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var d=r;f.push([540,0]),s()}({540:function(t,e,n){"use strict";n.r(e);var r=n(44),o=n.n(r),a=n(18),i=n.n(a),u=document.getElementById("iframe");u.onload=function(){u.contentWindow.postMessage(i()({actions:"init"}),"*")};function c(t){try{var e,n=t.data;"object"!==o()(t.data)&&(n=JSON.parse(t.data)),"reload"===n.actions&&(e=$(".js-question-section").data("url"),$.post(e,function(t){"success"==t.status&&t.url&&(window.location.href=t.url)}))}catch(t){console.log("catch")}}window.addEventListener?window.addEventListener("message",c,!1):window.attachEvent("onmessage",c)}});