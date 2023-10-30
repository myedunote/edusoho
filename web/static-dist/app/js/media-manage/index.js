/*! For license information please see index.js.LICENSE.txt */
!function(t){function e(e){for(var i,a,o=e[0],l=e[1],c=e[2],d=0,h=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);for(u&&u(e);h.length;)h.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={279:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static-dist/";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([1403,0]),n()}({1086:function(t,e){var n="<iframe src='"+$("#lesson-dashboard").data("media-player-url")+"' name='viewerIframe' id='viewerIframe' width='100%'allowfullscreen webkitallowfullscreen height='100%' style='border:0px'></iframe>";$("#lesson-video-content").html(n)},1087:function(t,e,n){var i=n(442);t.exports=function(t){var e,n,s,r,a,o=[];if(!t)throw new Error("No SRT to parse");return t=t.trim(),(t=(t+="\n").replace(/\r\n/g,"\n").replace(/\n{3,}/g,"\n\n").split("\n")).forEach((function(t){if(t=t.toString(),e||!/^\d+$/.test(t)){if(!n){var l=t.match(/^(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})$/);if(l)return r=l[1],a=l[2],void(n=!0)}""===t.trim()?(o.push({index:e,start:r,end:a,duration:i(a)-i(r),text:s||""}),e=n=r=a=s=null):s?s+="\n"+t:s=t}else e=parseInt(t)})),o}},1088:function(t,e){t.exports=function(t){var e="";return t.forEach((function(t,n){n>0&&(e+="\n"),e+=t.index,e+="\n",e+=t.start+" --\x3e "+t.end,e+="\n",e+=t.text,e+="\n"})),e}},1089:function(t,e,n){var i=n(442),s=n(539);t.exports=function(t,e){if(!/(-|\+)?\d+/.test(e.toString()))throw new Error("Invalid time: "+e+".Expected a valid integer");return e=parseInt(e,10),t.map((function(t){var n=i(t.start),r=i(t.end);return n+=e,r+=e,t.start=s(n<0?0:n),t.end=s(r<0?0:r),t}))}},1090:function(t,e,n){var i=n(1091),s=n(442),r={timeFormat:"srt",duration:!1};t.exports=function(t,e){return"ms"===(e=i(r,e)).timeFormat&&(t=t.map((function(t){return t.start=s(t.start),t.end=s(t.end),t}))),e.duration||(t=t.map((function(t){return delete t.duration,t}))),t}},1091:function(t,e){t.exports=function(){for(var t={},e=0;e<arguments.length;e++){var i=arguments[e];for(var s in i)n.call(i,s)&&(t[s]=i[s])}return t};var n=Object.prototype.hasOwnProperty},1092:function(t,e,n){var i=n(442),s=n(539);t.exports=function(t,e){if(!e.start||!e.end||!e.text)throw new Error("Invalid caption data");for(var n in e)if(e.hasOwnProperty(n)&&"text"!==n&&("start"===n||"end"===n)){if(/^(\d{2}):(\d{2}):(\d{2}),(\d{3})$/.test(e[n]))continue;if(!/^\d+$/.test(e[n]))throw new Error("Invalid caption time format");e[n]=s(e[n])}return t.push({index:t.length+1,start:e.start,end:e.end,duration:i(e.end)-i(e.start),text:e.text}),t}},1403:function(t,e,n){"use strict";n.r(e);for(var i=n(20),s=n.n(i),r=n(105),a=n.n(r),o=n(3),l=n.n(o),c=n(4),u=n.n(c),d=(n(1086),n(10)),h=n.n(d),p=new(n(142).a)({name:"parent",project:"PlayerProject",children:[document.getElementById("viewerIframe")],type:"parent"}),f=n(22),m=$(".js-editbox"),v=$("#editbox-lesson-list"),g=m.data("mediaLength"),b=g/6,w=0;w<=6;w++){var y=$('[data-role="scale-default"]').clone().css("left",x(b*w,g)).removeClass("hidden").removeAttr("data-role");y.find('[data-role="scale-time"]').text(f.i(Math.round(b*w))),$('[data-role="scale-default"]').before(y)}function x(t,e){return t*$("#editbox-lesson-list").width()/h()(e)+20}p.on("timechange",(function(t){$(".scale-white").css("left",x(t.currentTime,g))})),$(".scale-white").on("mousedown",(function(t){$(document).on("mousemove.playertime",(function(t){window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();var e=t.pageX>v.width()+20?v.width()+20:t.pageX&&t.pageX<=20?20:t.pageX;$(".scale-white").css("left",e);var n=function(t,e){return Math.round((t-20)*e/$("#editbox-lesson-list").width())}(e,g);p.sendToChild({id:"viewerIframe"},"setCurrentTime",{time:n})})).on("mouseup.playertime",(function(t){$(document).off("mousemove.playertime"),$(document).off("mousedown.playertime"),!0}))}));var S={init:function(t){this.$el=$(t.id),this.options=[],this.optionsLimit=t.optionsLimit||!1,this.eventManager={},this.initParent(),this.initEvent()},initParent:function(){var t=$(document.createDocumentFragment());t.append(this.templete()),this.$el.append(t),this.$parentDom=$(".track-select-parent"),this.$list=$(".track-selcet-list"),this.$dataShow=this.$parentDom.find(".data-show"),this.$open=this.$parentDom.find(".track-selcet-open-arrow"),this.$close=this.$parentDom.find(".track-selcet-close-arrow"),this.$showBox=this.$parentDom.find(".track-select-show")},initEvent:function(){var t=this;this.$parentDom.delegate(".track-selcet-open-arrow","click",this.handleOpen.bind(this)).delegate(".track-selcet-close-arrow","click",this.handleClose.bind(this)).delegate(".delete","click",this.handleDelete.bind(this)).delegate(".select-item","click",(function(){$(this).siblings().removeClass("active"),$(this).addClass("active");var e=$(this).find(".value").html(),n=$(this).find(".value").attr("url");t.setValue({name:e,url:n}),t.handleClose()})),this.$showBox.on("click",this.toggle.bind(this)),this.on("valuechange",(function(){this.$dataShow.html(this.getValue().name),this.$dataShow.attr("title",this.getValue().name)})),this.on("listchange",(function(){this.optionsLimit&&this.options.length>=this.optionsLimit&&this.trigger("optionlimit"),this.$list.html(this.getOptionsStr()),this.setValue(this.getDefaultOption())})),this.on("optionempty",this.handleOptionEmpty.bind(this))},templete:function(){return'<div class="track-select-parent">\n              <div class="track-select-show">\n                <div class="data-show" title="'.concat(this.getDefaultOption().name,'"></div>\n                <span class="track-selcet-open-arrow">\n                  <i class="es-icon es-icon-keyboardarrowdown"></i>\n                </span>\n                <span class="track-selcet-close-arrow" style="display:none;">\n                  <i class="es-icon es-icon-keyboardarrowup"></i>\n                </span>\n              </div>\n              <ul class="track-selcet-list" style="display:none;">\n                ').concat(this.getOptionsStr(),"\n              </ul>\n            </div>")},getDefaultOption:function(){return this.options.length?this.options[0]:(this.open&&this.handleClose(),!1)},getOptionsStr:function(){this.options.length||this.trigger("optionempty");var t="";return this.options.map((function(e,n){var i;t+='<li class="select-item">\n                        <div class="value" title="'.concat(e.name,'" url="').concat(e.url,'">\n                          ').concat(e.name,'\n                        </div>\n                        <span class="convertStatus convert-').concat(e.convertStatus,'">').concat((i=e.convertStatus,{waiting:Translator.trans("subtitle.status.waiting"),doing:Translator.trans("subtitle.status.doing"),success:Translator.trans("subtitle.status.success"),error:Translator.trans("subtitle.status.error"),none:Translator.trans("subtitle.status.waiting")}[i]),'</span>\n                        <i class="es-icon es-icon-close01 delete" data-index="').concat(n,'"></i>\n                      </li>')})),t},setValue:function(t){if(!t)return this.$dataShow.html(Translator.trans("subtitle.no_subtitle_hint")),void this.trigger("valuechange",!1);this.value=t,this.trigger("valuechange",this.value)},getValue:function(){return this.value||{name:Translator.trans("subtitle.no_subtitle_hint")}},toggle:function(){this.open?this.handleClose():this.handleOpen()},handleOpen:function(){this.options.length&&(this.open=!0,this.$open.hide(),this.$close.show(),this.$showBox.addClass("active"),this.$list.slideDown(200))},handleClose:function(){this.open=!1,this.$close.hide(),this.$open.show(),this.$showBox.removeClass("active"),this.$list.slideUp(200)},handleDelete:function(t){var e=t.target;$(e).parent().remove(),this.trigger("deleteoption",this.options[$(e).data("index")]),this.options.splice($(e).data("index"),1),this.trigger("listchange",this.options),t.stopPropagation()},handleOptionEmpty:function(){this.value="",this.trigger("valuechange",!1)},on:function(t,e){this.eventManager[t]?this.eventManager[t].push(e.bind(this)):this.eventManager[t]=[e.bind(this)]},trigger:function(t,e){this.eventManager[t]&&this.eventManager[t].map((function(t){t(e)}))},resetOptions:function(t){this.options=t,this.trigger("listchange",this.options)},addOption:function(t){t.convertStatus||(t.convertStatus="waiting"),this.options.push(t),this.trigger("listchange")}},O=n(8),k=n(652),T=n.n(k),_=$(".text-track-overview"),I=$("#uploader");new(function(){function t(){l()(this,t),this.select=null,this.init()}return u()(t,[{key:"init",value:function(){this.initTextDisplay(),this.initSelect(),this.initUploader()}},{key:"initTextDisplay",value:function(){var t=$(".manage-edit-body").height(),e=$(".nav-tabs-edit").height(),n=$(".text-track-title").height(),i=$("#track-select").height();_.height(t-e-n-i-140).show()}},{key:"initSelect",value:function(){var t=a()(S),e=$("#track-select").data("subtitleList"),n=I.data("mediaId"),i=this;t.init({id:"#track-select",optionsLimit:4}),t.on("valuechange",(function(t){t?$.ajax({url:t.url,type:"GET"}).done(i.showSubtitleContent):_.html(Translator.trans("subtitle.no_subtitle_hint"))})),t.on("deleteoption",(function(t){var e="/media/".concat(n,"/subtitle/").concat(t.id,"/delete");$.post(e,(function(t){t&&(Object(O.a)("success",Translator.trans("subtitle.delete_success_hint")),I.show())}))})),t.on("optionlimit",(function(){I.hide()})),t.resetOptions(e),this.select=t}},{key:"initUploader",value:function(){var t=this.select,e=I.data("mediaGlobalId"),n=I.data("mediaId"),i=I.data("subtitleCreateUrl"),s=new UploaderSDK({sdkBaseUri:app.cloudSdkBaseUri,disableDataUpload:app.cloudDisableLogReport,disableSentry:app.cloudDisableLogReport,initUrl:I.data("initUrl"),finishUrl:I.data("finishUrl"),id:"uploader",ui:"simple",multi:!0,accept:{extensions:["srt"],mimeTypes:["text/srt"]},type:"sub",process:{common:{videoNo:e}}});s.on("error",(function(t){"Q_TYPE_DENIED"===t.error&&Object(O.a)("danger",Translator.trans("subtitle.upload_srt_hint"))})),s.on("file.finish",(function(e){$.post(i,{name:e.name,subtitleId:e.fileId,mediaId:n}).success((function(e){e&&(t.addOption(e),Object(O.a)("success",Translator.trans("subtitle.upload_success_hint")),setTimeout((function(){var e="/media/".concat(n,"/subtitles");$.get(e).done((function(e){e.subtitles&&t.resetOptions(e.subtitles)}))}),5e3))})).error((function(t){Object(O.a)("danger",Translator.trans(t.responseJSON.error.message))}))}))}},{key:"showSubtitleContent",value:function(t){var e=new T.a;try{e.parse(t)}catch(t){return Object(O.a)("danger",Translator.trans("subtitle.parse_error_hint")),void _.html(Translator.trans("subtitle.parse_error_hint"))}var n=e.getSubtitles({duration:!0,timeFormat:"ms"}),i="";n.map((function(t){i+="<p>".concat(t.text,"</p>")})),_.html(i);var r=_.find("p");p.on("timechange",(function(t){setTimeout((function(){var e=n.find((function(e,n){if(e.start/1e3>t.currentTime)return e}));r.removeClass("active"),e&&e.index>1&&n[e.index-2].end>1e3*s()(t.currentTime)&&r.eq(e.index-2).addClass("active")}),0)}))}}]),t}())},23:function(t,e){t.exports=jQuery},442:function(t,e){t.exports=function(t){var e=t.match(/^(\d{2}):(\d{2}):(\d{2}),(\d{3})$/);if(!e)throw new Error("Invalid SRT time format");var n=parseInt(e[1],10),i=parseInt(e[2],10),s=parseInt(e[3],10);return(n*=36e5)+(i*=6e4)+(s*=1e3)+parseInt(e[4],10)}},539:function(t,e){t.exports=function(t){if(!/^\d+$/.test(t.toString()))throw new Error("Time should be an Integer value in milliseconds");t=parseInt(t);var e=new Date(0,0,0,0,0,0,t),n=e.getHours()<10?"0"+e.getHours():e.getHours(),i=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),s=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds(),r=t-(36e5*n+6e4*i+1e3*s);return r<100&&r>=10?r="0"+r:r<10&&(r="00"+r),n+":"+i+":"+s+","+r}},652:function(t,e,n){"use strict";var i=n(442),s=n(539),r=n(1087),a=n(1088),o=n(1089),l=n(1090),c=n(1092);function u(t){if(!(this instanceof u))return new u(t);this._subtitles=[],t&&this.parse(t)}t.exports=u;var d=u.prototype;d.parse=function(t){this._subtitles=r(t)},d.add=function(t){return c(this._subtitles,t),this},d.getSubtitles=function(t){return l(this._subtitles,t)},d.stringify=function(){return a(this._subtitles)},d.resync=function(t){return this._subtitles=o(this._subtitles,t),this},u.toMS=i,u.toSrtTime=s}});