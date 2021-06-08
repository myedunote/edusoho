!function(e){function t(t){for(var a,s,o=t[0],l=t[1],u=t[2],c=0,m=[];c<o.length;c++)s=o[c],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(d&&d(t);m.length;)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={286:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static-dist/";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var d=l;r.push([1265,0]),n()}({1265:function(e,t,n){"use strict";n.r(t);var a=n(19),i=n.n(a),r=n(4),s=n.n(r),o=n(5),l=n.n(o),u=(n(691),n(135)),d=n(675);new(function(){function e(t){s()(this,e),this.$element=$(t.element),this.$form=$(t.form),this.validator(),this.initfileChooser()}return l()(e,[{key:"validator",value:function(){var e=this,t=this.$form.validate({currentDom:"#form-submit",ajax:!0,groups:{date:"minute second"},rules:{title:{required:!0,maxlength:50,trim:!0,course_title:!0},minute:"required unsigned_integer",second:"required second_range",mediaSource:"required"},messages:{minute:{required:Translator.trans("activity.video_manage.length_required_error_hint")},second:{required:Translator.trans("activity.video_manage.length_required_error_hint"),second_range:Translator.trans("validate.second_range.message")},mediaSource:Translator.trans("activity.video_manage.media_error_hint")},submitSuccess:function(e){cd.message({type:"success",message:Translator.trans("open_course.lesson.create_success")}),document.location.reload()},submitError:function(e){var t="",n=JSON.parse(e.responseText);n.error&&n.error.message&&(t=n.error.message),cd.message({type:"warning",message:Translator.trans("open_course.lesson.create_error")+":"+t})}});$("#form-submit").click((function(n){t.form()&&e.$form.submit()})),$(".js-length").blur((function(){if(t&&t.form()){var e=0|i()($("#minute").val()),n=0|i()($("#second").val());$("#length").val(60*e+n)}}))}},{key:"initfileChooser",value:function(){var e=new u.a,t=new d.a(".js-subtitle-list");this.$element.on("click",".js-choose-trigger",(function(e){u.a.openUI(),window.dispatchEvent(new CustomEvent("resize")),$('[name="mediaSource').val(null)})),e.on("select",(function(e){if(u.a.closeUI(),e.length&&e.length>0){var n=i()(e.length/60),a=Math.round(e.length%60);$("#minute").val(n),$("#second").val(a),$("#length").val(60*n+a)}$("#mediaSource").val(e.source),"self"==e.source?($("#mediaId").val(e.id),$("#mediaUri").val(""),$("#mediaName").val(e.name)):($("#mediaUri").val(e.uri),$("#mediaId").val(0),$("#mediaName").val(e.name)),t.render(e)}))}}]),e}())({element:"#modal",form:"#lesson-create-form"})},36:function(e,t){e.exports=jQuery},675:function(e,t,n){"use strict";var a=n(4),i=n.n(a),r=n(5),s=n.n(r),o=n(13),l=function(){function e(t){i()(this,e),this.element=$(t),this.upload_id="subtitle-uploader",this.inited=!1,this.element.length>0&&(this.init(),this.inited=!0);var n=this.element.closest("#video-subtitle-form-group");n.find("#ext_mediaId_for_subtitle").val()>0&&this.render({id:n.find("#ext_mediaId_for_subtitle").val()})}return s()(e,[{key:"init",value:function(){var e=this;this.element.on("click",".js-subtitle-delete",(function(){var t=$(this);$.post(t.data("subtitleDeleteUrl"),(function(n){n&&(Object(o.a)("success",Translator.trans("activity.video_manage.delete_success_hint")),t.parent().remove(),$("#"+e.upload_id).show())}))}))}},{key:"render",value:function(e){if(this.inited&&e&&"id"in e&&e.id>0){this.media=e,this.element.html(Translator.trans("activity.video_manage.subtitle_load_hint"));var t=this;$.get(this.element.data("dialogUrl"),{mediaId:this.media.id},(function(e){t.element.html(e),t.initUploader()}))}}},{key:"initUploader",value:function(){var e=this,t=$("#"+this.upload_id),n=$(".js-subtitle-dialog").data("mediaId"),a=t.data("mediaGlobalId");this.uploader&&this._destroyUploader();var i=new UploaderSDK({sdkBaseUri:app.cloudSdkBaseUri,disableDataUpload:app.cloudDisableLogReport,disableSentry:app.cloudDisableLogReport,initUrl:t.data("initUrl"),finishUrl:t.data("finishUrl"),id:this.upload_id,ui:"simple",multi:!0,accept:{extensions:["srt"],mimeTypes:["text/srt"]},type:"sub",process:{common:{videoNo:a}},locale:document.documentElement.lang});i.on("error",(function(e){"Q_TYPE_DENIED"===e.error&&Object(o.a)("danger",Translator.trans("activity.video_manage.subtitle_upload_error_hint"))})),i.on("file.finish",(function(a){$.post(t.data("subtitleCreateUrl"),{name:a.name,subtitleId:a.fileId,mediaId:n}).success((function(t){var a={waiting:Translator.trans("activity.video_manage.convert_status_waiting"),doing:Translator.trans("activity.video_manage.convert_status_doing"),success:Translator.trans("activity.video_manage.convert_status_success"),error:Translator.trans("activity.video_manage.convert_status_error"),none:Translator.trans("activity.video_manage.convert_status_none")};$(".js-media-subtitle-list").append('<li class="pvs mtm"><span class="subtitle-name prl pull-left">'+t.name+'</span><span class="subtitle-transcode-status '+t.convertStatus+'">'+a[t.convertStatus]+'</span><a href="javascript:;" class="btn-link pll color-primary js-subtitle-delete" data-subtitle-delete-url="/media/'+n+"/subtitle/"+t.id+'/delete">'+Translator.trans("activity.video_manage.subtitle_delete_hint")+"</a></li>"),$(".js-media-subtitle-list li").length>3&&$("#"+e.upload_id).hide(),Object(o.a)("success",Translator.trans("activity.video_manage.subtitle_upload_success_hint"))})).error((function(e){Object(o.a)("danger",e.responseJSON.error.message)}))})),this.uploader=i}},{key:"show",value:function(){var e=this.element.parent(".form-group");e.length>0&&e.removeClass("hide")}},{key:"hide",value:function(){var e=this.element.parent(".form-group");e.length>0&&e.addClass("hide")}},{key:"_destroyUploader",value:function(){if(this.uploader){this.uploader.__events=null;try{this.uploader.destroy()}catch(e){}this.uploader=null}}},{key:"destroy",value:function(){this.inited&&this._destroyUploader()}}]),e}();t.a=l},691:function(e,t,n){"use strict";var a=arguments,i=function(e,t){var n=t.find(".load-animation");0==n.length?(n=$('<div class="load-animation"></div>')).prependTo(t).nextAll().hide():n.show();var i=[],r=e.length;return function(t){return i.push(t),n.hide().nextAll().show(),i.length<r?a.callee:e.apply(null,i)}};t.a=i}});