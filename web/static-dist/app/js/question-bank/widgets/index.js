!function(e){function t(t){for(var i,o,c=t[0],l=t[1],r=t[2],d=0,h=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(u&&u(t);h.length;)h.shift()();return s.push.apply(s,r||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(i=!1)}i&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},a={343:0},s=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var r=0;r<c.length;r++)t(c[r]);var u=l;s.push([1473,0]),n()}({1473:function(e,t,n){"use strict";n.r(t);var i=n(33),a=n.n(i),s=n(49),o=n.n(s),c=n(14),l=n.n(c),r=n(4),u=n.n(r),d=n(5),h=n.n(d),v=n(208),f=n(157);new(function(){function e(){u()(this,e),this.element=$(".js-select-container"),this.table=$(".js-select-table"),this.$questionBankSelector=$(".js-question-bank"),this.renderUrl=this.table.data("url"),this.categoryContainer=$(".js-category-list"),this.selectTypeQuestion={},this.selector=new v.a(this.table),this.init()}return h()(e,[{key:"init",value:function(){var e=this;this.initEvent(),this.initQuestionBankSelector(),this.initQuestionType(),this.selector.setOpts({addCb:function(t){e.selectQuestion(t)},removeCb:function(t){e.removeQuestion(t)}}),this.initToolTip()}},{key:"initEvent",value:function(){var e=this;this.element.on("change",".js-question-bank",(function(t){e.onChangeQuestionBank(t)})),this.element.on("click",".js-search-btn",(function(t){e.onClickSearchBtn(t)})),this.element.on("click",".pagination li",(function(t){e.onClickPagination(t)})),this.element.on("click",".js-category-search",(function(t){e.onClickCategorySearch(t)})),this.element.on("click",".js-all-category-search",(function(t){e.onClickAllCategorySearch(t)})),this.element.on("click",".js-clear-select",(function(t){e.onClickClearSelect(t)})),$(".js-pick-btn").on("click",(function(t){e.onClickPick(t)}))}},{key:"initToolTip",value:function(){$("a[data-toggle=tooltip]").tooltip({container:"body"})}},{key:"initQuestionBankSelector",value:function(){0!==this.$questionBankSelector.length&&this.$questionBankSelector.select2({treeview:!0,dropdownAutoWidth:!0,treeviewInitState:"collapsed",placeholderOption:"first",formatResult:function(e){var t=Object(f.b)(e.text);return e.id?'<div class="select2-result-text"><span class="select2-match"></span><span><i class="es-icon es-icon-tiku"></i>'.concat(t,"</span></div>"):t},dropdownCss:{width:""}})}},{key:"initQuestionType",value:function(){var e=this;this.element.find(".js-list-item").each((function(t,n){var i=$(n).data("type");e.selectTypeQuestion[i]={}}))}},{key:"selectQuestion",value:function(e){this.element.find(".js-select-number").text(this.selector.getObjectLength());var t=$(e).data("type"),n=$(e).data("id");this.selectTypeQuestion[t]&&(this.selectTypeQuestion[t][n]=!0,this.element.find(".js-select-"+t).text(this.getTypeQuestionLength(t)))}},{key:"removeQuestion",value:function(e){this.element.find(".js-select-number").text(this.selector.getObjectLength());var t=$(e).data("type"),n=$(e).data("id");this.selectTypeQuestion[t][n]&&(delete this.selectTypeQuestion[t][n],this.element.find(".js-select-"+t).text(this.getTypeQuestionLength(t)))}},{key:"onChangeQuestionBank",value:function(e){var t=this.$questionBankSelector.select2("data").id;if(l()(t)){var n=this.$questionBankSelector.data("url");n=n.replace(/[0-9]/,t),$.post(n,{isSelectBank:1},(function(e){$(".tooltip").remove(),$("#attachment-modal").html(e)})).error((function(e){cd.message({type:"danger",message:e.responseJson.error.message})}))}}},{key:"onClickClearSelect",value:function(e){var t=this;this.element.find(".js-list-item").each((function(e,n){var i=$(n).data("type");t.selectTypeQuestion[i]={},t.element.find(".js-select-"+i).text(0)})),this.selector.removeItems(),this.selector.resetItems(),this.element.find(".js-select-number").text(0)}},{key:"onClickPick",value:function(e){var t=$(e.currentTarget).data("name");if(0!==this.selector.toJson().length){this.cacheQuestionAndBank();var n=this.element.parents(".modal");n.trigger("selectQuestion",this.selectTypeQuestion),n.modal("hide"),$(".js-close-modal").trigger("click")}else cd.message({type:"danger",message:Translator.trans("site.data.uncheck_name_hint",{name:t})})}},{key:"getTypeQuestionLength",value:function(e){return this.selectTypeQuestion[e]?o()(this.selectTypeQuestion[e]).length:0}},{key:"onClickSearchBtn",value:function(e){this.renderTable(),e.preventDefault()}},{key:"onClickPagination",value:function(e){var t=$(e.currentTarget);this.element.find(".js-page").val(t.data("page")),this.renderTable(!0),e.preventDefault()}},{key:"onClickCategorySearch",value:function(e){var t=$(e.currentTarget);this.categoryContainer.find(".js-active-set.active").removeClass("active"),t.addClass("active"),$(".js-category-choose").val(t.data("id")),this.renderTable()}},{key:"onClickAllCategorySearch",value:function(e){var t=$(e.currentTarget);this.categoryContainer.find(".js-active-set.active").removeClass("active"),t.addClass("active"),$(".js-category-choose").val(""),this.renderTable()}},{key:"cacheQuestionAndBank",value:function(){var e=$("#task-create-content-iframe").contents();e.find(".js-cached-question").text(a()(this.selectTypeQuestion));var t=this.$questionBankSelector.select2("data").id,n=e.find(".js-origin-bank"),i=e.find(".js-current-bank");""===$.trim(i.val())?n.val(t):n.val(i.val()),i.val(t)}},{key:"renderTable",value:function(e){e||this._resetPage();var t=this.element.find('[data-role="search-conditions"]').serialize()+"&page="+this.element.find(".js-page").val();t+="&exclude_ids="+$(".js-excludeIds").val(),this._loading();var n=this;$.ajax({type:"GET",url:this.renderUrl,data:t}).done((function(e){n.table.html(e),n.selector.updateTable(),n.initToolTip()})).fail((function(){n._loaded_error()}))}},{key:"_loading",value:function(){var e='<div class="empty" colspan="10" style="color:#999;padding:80px;">'+Translator.trans("site.loading")+"</div>";this.table.html(e)}},{key:"_loaded_error",value:function(){var e='<div class="empty" colspan="10" style="color:#999;padding:80px;">'+Translator.trans("site.loading_error")+"</div>";this.table.html(e)}},{key:"_resetPage",value:function(){this.element.find(".js-page").val(1)}}]),e}())},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(49),a=n.n(i),s=n(4),o=n.n(s),c=n(5),l=n.n(c),r=function(){function e(t){o()(this,e),this.$elem=$(t),this.init(),this.selectMap={},this.status=!1}return l()(e,[{key:"init",value:function(){this.initEvent()}},{key:"initEvent",value:function(){var e=this;this.$elem.on("click",".js-checkbox",(function(t){e.toggleItem(t),e.changeSelectedNum()})),this.$elem.on("click",".js-select-all",(function(t){$(t.target).prop("checked")?(e.status=!0,e.$elem.find(".js-select-all").prop("checked",!0),e.addItems()):(e.status=!1,e.$elem.find(".js-select-all").prop("checked",!1),e.removeItems()),e.changeSelectedNum()}))}},{key:"setOpts",value:function(e){var t=e.addCb,n=void 0===t?function(){}:t,i=e.removeCb,a=void 0===i?function(){}:i;this.addCb=n,this.removeCb=a}},{key:"getItem",value:function(e){return{id:e.data("id")}}},{key:"removeItem",value:function(e){var t=this.$elem.find('input[data-id="'.concat(e.id,'"]'));t.length&&t.prop("checked",!1),this.selectMap[e.id]&&delete this.selectMap[e.id]}},{key:"addItem",value:function(e){var t=$(e);t.prop("checked",!0),this.selectMap[t.data("id")]||(this.selectMap[t.data("id")]=!0)}},{key:"addItems",value:function(){var e=this;this.$elem.find(".js-checkbox").each((function(t,n){e.status&&(e.addItem(n),e.addCb&&e.addCb(n))}))}},{key:"removeItems",value:function(){var e=this;this.$elem.find(".js-checkbox").each((function(t,n){if(!e.status){var i=e.getItem($(n));e.removeItem(i),e.removeCb&&e.removeCb(n)}}))}},{key:"toggleItem",value:function(e){var t=$(e.currentTarget);t.prop("checked")?this.selectMap[t.data("id")]||(this.selectMap[t.data("id")]=!0,this.addCb&&this.addCb(t)):this.selectMap[t.data("id")]&&(delete this.selectMap[t.data("id")],this.removeCb&&this.removeCb(t))}},{key:"resetItems",value:function(){this.selectMap={}}},{key:"getObjectLength",value:function(){return a()(this.selectMap).length}},{key:"toJson",value:function(){return a()(this.selectMap)}},{key:"updateTable",value:function(){var e=this;this.$elem.find(".js-checkbox").each((function(t,n){e.selectMap[$(n).data("id")]&&$(n).prop("checked",!0)})),this.changeSelectedNum()}},{key:"changeSelectedNum",value:function(){this.$elem.find(".js-select-number").length>0&&this.$elem.find(".js-select-number").text(this.getObjectLength())}}]),e}()}});