!function(e){function t(t){for(var a,o,s=t[0],d=t[1],l=t[2],h=0,u=[];h<s.length;h++)o=s[h],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);for(c&&c(t);u.length;)u.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],a=!0,s=1;s<i.length;s++){var d=i[s];0!==n[d]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=i[0]))}return e}var a={},n={376:0},r=[];function o(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=a,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(i,a,function(t){return e[t]}.bind(null,a));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=d;r.push([1148,0]),i()}({1148:function(e,t,i){"use strict";i.r(t);var a=i(10),n=i.n(a),r=$("#finish-type");r.length&&(r.on("change",(function(){$("#conditions").children().hide(),$("#endConditions").addClass("hidden");var e=$(this).val();switch("time"==e?$("#watchTime").rules("add",{required:!0,positive_integer:!0,messages:{required:Translator.trans("activity.video_manage.length_required_error_hint")}}):$("#watchTime").rules("remove"),$("#homeworkScore").rules("remove"),e){case"time":if($("#conditions-time").show(),!$("#watchTime").val()){var t=$("#finish-type option:selected");$("#watchTime").val(t.data("value")),$("#finish-data").val(t.data("value"))}!$("#watchTimeLabel").hasClass("hidden")&&$("#watchTimeLabel").addClass("hidden"),$("#timeLabel").hasClass("hidden")&&$("#timeLabel").removeClass("hidden");break;case"watchTime":if($("#conditions-time").show(),!$("#watchTime").val()){var i=$("#finish-type option:selected");$("#watchTime").val(i.data("value")),$("#finish-data").val(i.data("value"))}$("#watchTimeLabel").hasClass("hidden")&&$("#watchTimeLabel").removeClass("hidden"),!$("#timeLabel").hasClass("hidden")&&$("#timeLabel").addClass("hidden");break;case"score":if($(".js-homework-score").length>0){var a=$("#task-create-content-iframe",parent.document).contents().find(".js-homework-scores-input").val();$(".js-finish-score").html(a),$("#homeworkScore").rules("add",{required:!0,es_score:!0,homework_score:!0,messages:{required:Translator.trans("course.homework.score.tip1")}}),$(".js-homework-score").show()}break;case"end":$("#endConditions").removeClass("hidden"),$("#finish-data").val(""),$("#js-end-rule").is(":checked")&&$("#finish-data").val(1);break;default:r.trigger("selectChange",e)}})),$("#js-end-rule").on("change",(function(){$(this).is(":checked")?$("#finish-data").val(n()($("#watchTime").val())?$("#watchTime").val():1):$("#finish-data").val("")})));var o=$("#step3-form").validate({groups:{nameGroup:"minute second"},rules:{watchTime:{positive_integer:!0},homeworkScore:{es_score:!0}}});$("#conditions-time").is(":hidden")||$("#watchTime").rules("add",{required:!0,positive_integer:!0,messages:{required:Translator.trans("activity.video_manage.length_required_error_hint")}}),$("#homeworkScore").on("change",(function(){$("#finish-data").val($(this).val())})),$("#watchTime").on("change",(function(){$("#finish-data").val($(this).val())})),window.ltc.on("getCondition",(function(e){$("#finish-type-select").length>0?window.ltc.emit("returnCondition",{valid:o.form(),data:{finishType:$("#finish-type-select:checked").val()}}):window.ltc.emit("returnCondition",{valid:o.form(),data:{finishType:$("#finish-type").val(),finishData:$("#finish-data").val()}})})),$.validator.addMethod("homework_score",(function(e,t){return this.optional(t)||e<=Number($(".js-finish-score").html())}),$.validator.format(Translator.trans("course.homework.score.tip2")))}});