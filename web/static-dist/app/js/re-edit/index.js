!function(e){function t(t){for(var n,l,i=t[0],c=t[1],d=t[2],s=0,p=[];s<i.length;s++)l=i[s],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(u&&u(t);p.length;)p.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},o={347:0},r=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/static-dist/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=c;r.push([1400,0]),a()}({1400:function(e,t,a){"use strict";a.r(t);var n=a(36),o=a.n(n),r=a(28),l=a.n(r),i={data:function(){return{subject:{fileName:$("[name=filename]").val(),items:JSON.parse($("[name=items]").val())},showCKEditorData:{publicPath:$("[name=ckeditor_path]").val(),filebrowserImageUploadUrl:$("[name=ckeditor_image_upload_url]").val(),filebrowserImageDownloadUrl:$("[name=ckeditor_image_download_url]").val(),language:"zh_CN"===document.documentElement.lang?"zh-cn":document.documentElement.lang,jqueryPath:$("[name=jquery_path]").val()},bank_id:$("[name=bankId]").val(),category:JSON.parse($("[name=categoryTree]").val()),importType:$("[name=type]").val(),showAttachment:$("[name=show_attachment]").val(),cdnHost:$("[name=cdn_host]").val(),uploadSDKInitData:{sdkBaseUri:app.cloudSdkBaseUri,disableDataUpload:app.cloudDisableLogReport,disableSentry:app.cloudDisableLogReport,initUrl:$("[name=upload_init_url]").val(),finishUrl:$("[name=upload_finish_url]").val(),accept:JSON.parse($("[name=upload_accept]").val()),fileSingleSizeLimit:$("[name=upload_size_limit]").val(),ui:"batch",multiple:!0,multitaskNum:3,fileNumLimit:3,locale:document.documentElement.lang},fileId:0,redirect:!0}},created:function(){var e=this;$(window).on("beforeunload",(function(){if(e.redirect)return Translator.trans("admin.block.not_saved_data_hint")}))},provide:function(){return{modeOrigin:"create"}},methods:{getImportData:function(e){this.redirect=!1,$.ajax({url:$("[name=saveUrl]").val(),contentType:"application/json;charset=utf-8",type:"post",data:l()(e),beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done((function(e){e.goto&&(window.location.href=e.goto)}))},deleteAttachmentCallback:function(){var e=this;return new o.a((function(t){$.ajax({url:$("[name=delete-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done((function(e){t(e)}))}))},deleteAttachment:function(e){this.fileId=e},previewAttachment:function(e){this.fileId=e},downloadAttachment:function(e){this.fileId=e},previewAttachmentCallback:function(){var e=this,t=this;return new o.a((function(a){$.ajax({url:$("[name=preview-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done((function(e){console.log(app),console.log(e),e.data.sdkBaseUri=app.cloudSdkBaseUri,e.data.disableDataUpload=app.cloudDisableLogReport,e.data.disableSentry=app.cloudDisableLogReport,a(e),t.fileId=0}))}))},downloadAttachmentCallback:function(){var e=this,t=this;return new o.a((function(a){$.ajax({url:$("[name=download-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done((function(e){a(e),t.fileId=0}))}))}}},c=a(33),d=Object(c.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ibs-vue question-import",attrs:{id:"app"}},[a("item-import",{attrs:{isDownload:!1,subject:e.subject,showCKEditorData:e.showCKEditorData,bank_id:e.bank_id,category:e.category,importType:e.importType,showAttachment:e.showAttachment,cdnHost:e.cdnHost,uploadSDKInitData:e.uploadSDKInitData,deleteAttachmentCallback:e.deleteAttachmentCallback,previewAttachmentCallback:e.previewAttachmentCallback,downloadAttachmentCallback:e.downloadAttachmentCallback},on:{deleteAttachment:e.deleteAttachment,previewAttachment:e.previewAttachment,downloadAttachment:e.downloadAttachment,getImportData:e.getImportData}})],1)}),[],!1,null,null,null).exports;if(Vue.config.productionTip=!1,"en"==app.lang){var u=local.default;itemBank.default.install(Vue,{locale:u})}new Vue({render:function(e){return e(d)}}).$mount("#app")}});