!function(e){function t(t){for(var n,o,r=t[0],l=t[1],c=t[2],d=0,f=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(u&&u(t);f.length;)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={339:0},s=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;s.push([1588,0]),a()}({1588:function(e,t,a){"use strict";a.r(t);var n=a(12),i=a.n(n),s=a(20),o=a.n(s),r=a(210),l=a(93),c={data:function(){return{isLoading:!1,indicator:'<a-icon type="loading" style="font-size: 24px" spin />',exportUrl:$(".js-export-value").val(),selector:new r.a($(".js-question-html")),difficulty:"default",categoryId:"",difficultyList:[{lable:Translator.trans("question.bank.difficulty.default"),value:"default"},{lable:Translator.trans("question.bank.difficulty.simple"),value:"simple"},{lable:Translator.trans("question.bank.difficulty.normal"),value:"normal"},{lable:Translator.trans("question.bank.difficulty"),value:"difficulty"}],type:"default",typeList:[{lable:Translator.trans("course.question.by.question.type"),value:"default"},{lable:Translator.trans("course.question.type.single_choice"),value:"single_choice"},{lable:Translator.trans("course.question.type.choice"),value:"choice"},{lable:Translator.trans("course.question.type.uncertain_choices"),value:"uncertain_choice"},{lable:Translator.trans("course.question.type.essay"),value:"essay"},{lable:Translator.trans("course.question.type.determine"),value:"determine"},{lable:Translator.trans("course.question.type.fill"),value:"fill"},{lable:Translator.trans("course.question.type.material"),value:"material"}],addQuestion:[{lable:Translator.trans("course.question.type.single_choice"),value:"/question_bank/".concat($(".js-questionBank-id").val(),"/question/single_choice/create?goto=/question_bank/").concat($(".js-questionBank-id").val(),"/questions&categoryId=")},{lable:Translator.trans("course.question.type.choice"),value:"/question_bank/".concat($(".js-questionBank-id").val(),"/question/choice/create?goto=/question_bank/").concat($(".js-questionBank-id").val(),"/questions&categoryId=")},{lable:Translator.trans("course.question.type.essay"),value:"/question_bank/".concat($(".js-questionBank-id").val(),"/question/essay/create?goto=/question_bank/").concat($(".js-questionBank-id").val(),"/questions&categoryId=")},{lable:Translator.trans("course.question.type.uncertain_choices"),value:"/question_bank/".concat($(".js-questionBank-id").val(),"/question/uncertain_choice/create?goto=/question_bank/").concat($(".js-questionBank-id").val(),"/questions&categoryId=")},{lable:Translator.trans("course.question.type.determine"),value:"/question_bank/".concat($(".js-questionBank-id").val(),"/question/determine/create?goto=/question_bank/").concat($(".js-questionBank-id").val(),"/questions&categoryId=")},{lable:Translator.trans("course.question.type.fill"),value:"/question_bank/".concat($(".js-questionBank-id").val(),"/question/fill/create?goto=/question_bank/").concat($(".js-questionBank-id").val(),"/questions&categoryId=")},{lable:Translator.trans("course.question.type.material"),value:"/question_bank/".concat($(".js-questionBank-id").val(),"/question/material/create?goto=/question_bank/").concat($(".js-questionBank-id").val(),"/questions&categoryId=")}],keyword:"",defaultPages:1,renderUrl:$(".js-question-html").data("url"),table:$(".js-question-html"),element:$(".js-question-container"),categoryContainer:$(".js-category-content"),importModalUrl:$(".js-list-header-import").val(),modal:$("#modal")}},mounted:function(){var e=this;this.element.on("click",".pagination li",(function(t){e.onClickPagination(t)})),this.element.on("change",".js-current-perpage-count",(function(t){e.onChangePagination(t)})),this.element.on("click",".js-category-search",(function(t){e.onClickCategorySearch(t)})),this.element.on("click",".js-all-category-search",(function(t){e.onClickAllCategorySearch(t)}))},created:function(){},methods:{duplicateChecking:function(){var e=this;return o()(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=$("[name=question_count]").val()){t.next=2;break}return t.abrupt("return",e.$message.warning(Translator.trans("question.bank.check.result.category.noData")));case 2:return e.isLoading=!0,t.next=5,l.E.getRepeatQuestion($("[name=questionBankId]").val(),$("[name=category_id]").val()).then((function(t){e.isLoading=!1,t.length>0?window.location.href="/question_bank/".concat($(".js-questionBank-id").val(),"/check_duplicative_questions?categoryId=").concat(e.categoryId):e.$message.warning(Translator.trans("question.bank.check.result.noData"))})).catch((function(t){e.isLoading=!1,e.$message.warning(t.message)}));case 5:case"end":return t.stop()}}),t)})))()},userNameError:function(){var e=this.form,t=e.getFieldError;return(0,e.isFieldTouched)("userName")&&t("userName")},passwordError:function(){var e=this.form,t=e.getFieldError;return(0,e.isFieldTouched)("password")&&t("password")},exportQuestion:function(){var e="default"===this.difficulty?"":this.difficulty,t="default"===this.type?"":this.type,a=$(".js-category-choose").val(),n=document.createElement("a");n.href=this.exportUrl+"?category_id="+a+"&ids="+this.selector.toJson()+"&difficulty="+e+"&type="+t+"&keyword="+this.keyword,n.click()},importQuestion:function(){this.modal.load(this.importModalUrl),this.modal.modal("show")},search:function(e,t){e||this._resetPage();var a=this,n="default"===this.difficulty?"":this.difficulty,i="default"===this.type?"":this.type,s=$(".js-category-choose").val();a.categoryId=s;var o=t||$(".js-current-perpage-count").children("option:selected").val(),r=this.element.find(".js-page").val(),l={category_id:s,difficulty:n,type:i,keyword:this.keyword,perpage:o,page:r};$.ajax({type:"GET",url:this.renderUrl,data:l}).done((function(e){a.$nextTick((function(){a.table.html(e),a.selector.updateTable()}))})).fail((function(){}))},_resetPage:function(){this.element.find(".js-page").val(1)},onClickPagination:function(e){var t=$(e.currentTarget);this.element.find(".js-page").val(t.data("page")),this.search(!0),e.preventDefault()},onChangePagination:function(){this.search()},handleReset:function(){this.difficulty="default",this.type="default",this.keyword=""},onClickCategorySearch:function(e){var t=$(e.currentTarget);this.categoryContainer.find(".js-active-set.active").removeClass("active"),t.addClass("active"),$(".js-category-choose").val(t.data("id"));this.search("",10)},onClickAllCategorySearch:function(e){var t=$(e.currentTarget);this.categoryContainer.find(".js-active-set.active").removeClass("active"),t.addClass("active"),$(".js-category-choose").val("");this.search("",10)}}},u=a(34),d=Object(u.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"list-header"}},[a("div",{staticClass:"header-btn-list"},[a("div",{staticClass:"question-name"},[e._v(e._s(e._f("trans")("question.bank.name")))]),e._v(" "),a("div",{},[a("a-button",{staticClass:"duplicate-checking",attrs:{type:"default"},on:{click:e.duplicateChecking}},[e._v(e._s(e._f("trans")("question.bank.check")))]),e._v(" "),a("a-button",{staticClass:"report",attrs:{type:"default"},on:{click:e.exportQuestion}},[e._v(e._s(e._f("trans")("question.bank.expoet")))]),e._v(" "),a("a-dropdown",[a("a-button",{staticClass:"add-question",attrs:{type:"default"}},[e._v(e._s(e._f("trans")("question.bank.add")))]),e._v(" "),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},e._l(e.addQuestion,(function(t,n){return a("a-menu-item",{key:n},[a("a",{attrs:{rel:"noopener noreferrer",href:t.value+e.categoryId}},[e._v(e._s(t.lable))])])})),1)],1),e._v(" "),a("a-button",{staticClass:"import js-import-btn",attrs:{type:"primary"},on:{click:e.importQuestion}},[e._v(e._s(e._f("trans")("question.bank.import")))])],1)]),e._v(" "),a("div",[a("a-form-model",{attrs:{layout:"inline"}},[a("a-form-model-item",[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["difficulty",{initialValue:"default"}],expression:"[\n            'difficulty',\n            {initialValue: 'default'}\n          ]"}],staticStyle:{width:"216px"},model:{value:e.difficulty,callback:function(t){e.difficulty=t},expression:"difficulty"}},e._l(e.difficultyList,(function(t,n){return a("a-select-option",{key:n,attrs:{value:t.value}},[e._v("\n            "+e._s(t.lable)+"\n          ")])})),1)],1),e._v(" "),a("a-form-model-item",[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{initialValue:"default"}],expression:"[\n            'type',\n            {initialValue: 'default'}\n          ]"}],staticStyle:{width:"216px"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.typeList,(function(t,n){return a("a-select-option",{key:n,attrs:{value:t.value}},[e._v("\n            "+e._s(t.lable)+"\n          ")])})),1)],1),e._v(" "),a("a-form-model-item",[a("a-input",{staticClass:"form-control",staticStyle:{width:"312px"},attrs:{placeholder:e._f("trans")("placeholder.enter_keyword")},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),e._v(" "),a("a-form-model-item",[a("a-button",{attrs:{type:"default"},on:{click:e.handleReset}},[e._v("\n          "+e._s(e._f("trans")("question.bank.reset.btn"))+"\n        ")])],1),e._v(" "),a("a-form-model-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("\n          "+e._s(e._f("trans")("site.search_hint"))+"\n        ")])],1)],1)],1),e._v(" "),a("a-spin",{staticClass:"spin-fixed",attrs:{spinning:e.isLoading,indicator:e.indicator,tip:e._f("trans")("question.bank.check_tip")}}),e._v(" "),a("input",{staticClass:"js-list-header-difficulty",attrs:{type:"hidden"},domProps:{value:e.difficulty}}),e._v(" "),a("input",{staticClass:"js-list-header-type",attrs:{type:"hidden"},domProps:{value:e.type}}),e._v(" "),a("input",{staticClass:"js-list-header-keyword",attrs:{type:"hidden"},domProps:{value:e.keyword}})],1)}),[],!1,null,null,null).exports,f=a(71),p=a.n(f),h=a(42),v=a(126),y=a.n(v),m=p.a.create({headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/vnd.edusoho.v2+json","Content-Type":"application/x-www-form-urlencoded","X-CSRF-Token":$("meta[name=csrf-token]").attr("content")}});h.a.prototype.$axios=m,h.a.prototype.$qs=y.a,h.a.filter("trans",(function(e,t){return e?Translator.trans(e,t):""})),new h.a({el:"#app",render:function(e){return e(d)}})},210:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(49),i=a.n(n),s=a(4),o=a.n(s),r=a(5),l=a.n(r),c=function(){function e(t){o()(this,e),this.$elem=$(t),this.init(),this.selectMap={},this.status=!1}return l()(e,[{key:"init",value:function(){this.initEvent()}},{key:"initEvent",value:function(){var e=this;this.$elem.on("click",".js-checkbox",(function(t){e.toggleItem(t),e.changeSelectedNum()})),this.$elem.on("click",".js-select-all",(function(t){$(t.target).prop("checked")?(e.status=!0,e.$elem.find(".js-select-all").prop("checked",!0),e.addItems()):(e.status=!1,e.$elem.find(".js-select-all").prop("checked",!1),e.removeItems()),e.changeSelectedNum()}))}},{key:"setOpts",value:function(e){var t=e.addCb,a=void 0===t?function(){}:t,n=e.removeCb,i=void 0===n?function(){}:n;this.addCb=a,this.removeCb=i}},{key:"getItem",value:function(e){return{id:e.data("id")}}},{key:"removeItem",value:function(e){var t=this.$elem.find('input[data-id="'.concat(e.id,'"]'));t.length&&t.prop("checked",!1),this.selectMap[e.id]&&delete this.selectMap[e.id]}},{key:"addItem",value:function(e){var t=$(e);t.prop("checked",!0),this.selectMap[t.data("id")]||(this.selectMap[t.data("id")]=!0)}},{key:"addItems",value:function(){var e=this;this.$elem.find(".js-checkbox").each((function(t,a){e.status&&(e.addItem(a),e.addCb&&e.addCb(a))}))}},{key:"removeItems",value:function(){var e=this;this.$elem.find(".js-checkbox").each((function(t,a){if(!e.status){var n=e.getItem($(a));e.removeItem(n),e.removeCb&&e.removeCb(a)}}))}},{key:"toggleItem",value:function(e){var t=$(e.currentTarget);t.prop("checked")?this.selectMap[t.data("id")]||(this.selectMap[t.data("id")]=!0,this.addCb&&this.addCb(t)):this.selectMap[t.data("id")]&&(delete this.selectMap[t.data("id")],this.removeCb&&this.removeCb(t))}},{key:"resetItems",value:function(){this.selectMap={}}},{key:"getObjectLength",value:function(){return i()(this.selectMap).length}},{key:"toJson",value:function(){return i()(this.selectMap)}},{key:"updateTable",value:function(){var e=this;this.$elem.find(".js-checkbox").each((function(t,a){e.selectMap[$(a).data("id")]&&$(a).prop("checked",!0)})),this.changeSelectedNum()}},{key:"changeSelectedNum",value:function(){this.$elem.find(".js-select-number").length>0&&this.$elem.find(".js-select-number").text(this.getObjectLength())}}]),e}()}});