!function(e){function t(t){for(var i,s,a=t[0],l=t[1],u=t[2],h=0,d=[];h<a.length;h++)s=a[h],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(c&&c(t);d.length;)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},o={374:0},r=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static-dist/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var c=l;r.push([1392,0]),n()}({1392:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n.n(i),r=n(3),s=n.n(r),a=n(41),l=n.n(a),u=n(8),c=function(){function e(){o()(this,e),this.$element=$("#task-question-plugin-form"),this.editor=null,this.validator=null,this.initEvent()}return s()(e,[{key:"initEvent",value:function(){var e=this;this.$element.on("focusin",".expand-form-trigger",(function(t){return e.expand()})),this.$element.on("click",".btn-primary",(function(t){return e.save(t)})),this.$element.on("click",".collapse-form-btn",(function(t){return e.collapse()}))}},{key:"save",value:function(e){var t=this;if(e.preventDefault(),this.validator&&this.validator.form()){var n=$(e.currentTarget);n.attr("disabled","disabled");var i=l.a.channel("task.plugin.question");$.post(this.$element.attr("action"),this.$element.serialize()).done((function(e){Object(u.a)("success",Translator.trans("task.plugin_question_post_success_hint")),i.publish("form.save",{html:e}),n.removeAttr("disabled"),t.collapse()}))}}},{key:"expand",value:function(){var e=this;if(!this.$element.hasClass("form-expanded")){this.$element.addClass("form-expanded");var t=CKEDITOR.replace("question_content",{toolbar:"Simple",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:this.$element.find("#question_content").data("imageUploadUrl")});this.editor=t,this.validator=this.$element.validate({rules:{"question[title]":"required","question[content]":"required"},messages:{"question[title]":Translator.trans("task.plugin_question_add.title_required_error_hint"),"question[content]":Translator.trans("task.plugin_question_add.content_required_error_hint")}}),t.on("change",(function(){e.$element.find('[name="question[content]"]').val(t.getData())})),t.on("blur",(function(){e.$element.find('[name="question[content]"]').val(t.getData())})),this.$element.find(".js-detail-form-group").removeClass("hide")}}},{key:"collapse",value:function(){this.$element.removeClass("form-expanded"),this.editor&&this.editor.destroy(),this.$element.removeData("validator"),this.clear(),this.$element.find(".js-detail-form-group").addClass("hide")}},{key:"clear",value:function(){this.$element.find("input[type=text],textarea").each((function(){$(this).val("")}))}}]),e}(),h=n(10),d=n.n(h),f=function(){function e(t){o()(this,e),this.url=t,this.$element=$(".question-detail-block"),this.$form=null,this.validator=null,this.channel=l.a.channel("task.plugin.question"),this.render()}return s()(e,[{key:"initEvent",value:function(){var e=this;this.$element.on("click",".back-to-list",(function(){e.channel.publish("back-to-list")})),this.toggleShow(),this.$element.on("click",".js-more-show",(function(t){e.channel.publish("js-more-show",t)})),this.$form.on("click",".btn-primary",(function(t){return e.onSavePost(t)}))}},{key:"toggleShow",value:function(){this.$element.find(".task-question-plugin-pane-thread__content").each((function(){$(this).height()>=76&&$(this).next().show()}))}},{key:"onSavePost",value:function(e){var t=this,n=this;e.preventDefault(),this.validator&&this.validator.form()&&$.post(this.$form.attr("action"),this.$form.serialize()).done((function(i){$(".js-post-answer-item").length||$(".js-answer-title").removeClass("hidden"),t.$element.find("[data-role=post-list]").append(i),"question"===$(e.target).data("type")&&n.toggleShow();var o=d()(t.$element.find("[data-role=post-number]").text());t.$element.find("[data-role=post-number]").text(o+1),t.$form.find("textarea").val("")})).error((function(e){Object(u.a)("danger",e.error.message)}))}},{key:"render",value:function(){var e=this;$.get(this.url).done((function(t){e.$element.html(t),e.$form=e.$element.find(".post-form"),e.validator=e.$form.validate({rules:{"post[content]":"required"},messages:{"post[content]":Translator.trans("task.plugin_question_replay.content_required_error_hint")}}),e.initEvent()})).fail((function(){Object(u.a)("danger","error")}))}},{key:"destroy",value:function(){this.$element.html(""),this.$element.undelegate()}}]),e}();new(function(){function e(){o()(this,e),this.$element=$(".question-pane"),this.$list=this.$element.find(".question-list-block"),this.$detail=this.$element.find(".question-detail-block"),this.form=new c,this.question=null,this.initEvent()}return s()(e,[{key:"initEvent",value:function(){var e=this;this.$element.on("click",".js-redirect-question-detail",(function(t){return e.onRedirectQuestion(t)}));var t=l.a.channel("task.plugin.question");t.subscribe("form.save",(function(t,n){e.$element.find('[data-role="list"]').prepend(t.html),e.$element.find(".empty-item").remove()})),t.subscribe("back-to-list",(function(){return e.onBackList()})),t.subscribe("js-more-show",(function(t){return e.onToggleShow(t)})),$("[data-toggle='popover']").popover()}},{key:"onRedirectQuestion",value:function(e){var t=$(e.currentTarget).data("url");this.question=new f(t),this.$list.hide(),this.$detail.show()}},{key:"onBackList",value:function(){this.question&&this.question.destroy(),this.$list.show(),this.$detail.hide()}},{key:"onToggleShow",value:function(e){var t=$(e.currentTarget);t.find(".js-change-btn").toggle(),t.prev().toggleClass("active")}}]),e}())},22:function(e,t){e.exports=jQuery}});