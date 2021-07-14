(window.webpackJsonp=window.webpackJsonp||[]).push([[385],{1278:function(t,e,n){"use strict";n.r(e);var a=n(23),o=n.n(a),r=n(15),i=n.n(r),s=n(34),l=n.n(s),c=n(493),u=n(61),d=n.n(u),m={testpaper:"考试任务",homework:"作业任务",exercise:"练习任务"},f={data:function(){return{form:{classroomCourseSetId:"default",classroomMediaType:"default",classroomTaskId:"default",wrongTimesSort:"default"},conditions:{}}},props:{targetId:0},created:function(){this.initSearchParams(),this.fetchWrongBookCondition()},filters:{sourceTitle:function(t){return m[t]}},methods:{initSearchParams:function(){var t=this,e=this.$route.query;d.a.forEach(e,(function(e,n){t.form[n]=e}))},filterOption:function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0},onSearch:function(){var t=this;this.$refs.form.validate((function(e){if(e){var n={};d.a.forEach(d.a.keys(t.form),(function(e){var a=t.form[e];"default"!==a&&(n[e]=a)})),t.$emit("on-search",n)}}))},handleChange:function(t,e){this.fetchWrongBookCondition(e)},fetchWrongBookCondition:function(t){var e=this;return l()(o.a.mark((function n(){var a,r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.getParams(t),n.next=3,c.v.get(a);case 3:r=n.sent,e.conditions=r;case 5:case"end":return n.stop()}}),n)})))()},getParams:function(t){var e=this.form,n=e.classroomCourseSetId,a=e.classroomMediaType,o={query:{targetId:this.targetId,targetType:"classroom"},params:{}},r=o.params;return"classroomCourseSetId"===t&&(d.a.assign(this.form,{classroomMediaType:"default",classroomTaskId:"default"}),"default"!==n&&(r.classroomCourseSetId=n)),"classroomMediaType"===t&&(d.a.assign(this.form,{classroomTaskId:"default"}),"default"!==a&&(r.classroomMediaType=a),"default"!==n&&(r.classroomCourseSetId=n)),o}}},p=n(31),h=Object(p.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-form-model",{ref:"form",attrs:{model:t.form,layout:"inline"}},[n("a-form-model-item",[n("a-select",{staticStyle:{width:"120px"},attrs:{placeholder:"全部课程"},model:{value:t.form.classroomCourseSetId,callback:function(e){t.$set(t.form,"classroomCourseSetId",e)},expression:"form.classroomCourseSetId"}},[n("a-select-option",{attrs:{value:"default"}},[t._v("\n        全部课程\n      ")]),t._v(" "),t._l(t.conditions.courseSets,(function(e){return n("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v("\n        "+t._s(e.title)+"\n      ")])}))],2)],1),t._v(" "),n("a-form-model-item",[n("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":"","option-filter-prop":"children",notFoundContent:"暂无数据"},on:{change:function(e){return t.handleChange(e,"classroomMediaType")}},model:{value:t.form.classroomMediaType,callback:function(e){t.$set(t.form,"classroomMediaType",e)},expression:"form.classroomMediaType"}},[n("a-select-option",{attrs:{value:"default"}},[t._v("题目来源")]),t._v(" "),t._l(t.conditions.mediaTypes,(function(e){return n("a-select-option",{key:e,attrs:{value:e}},[t._v("\n        "+t._s(t._f("sourceTitle")(e))+"\n      ")])}))],2)],1),t._v(" "),n("a-form-model-item",[n("a-select",{staticStyle:{width:"120px"},attrs:{"show-search":"","option-filter-prop":"children","filter-option":t.filterOption,notFoundContent:"暂无数据"},model:{value:t.form.classroomTaskId,callback:function(e){t.$set(t.form,"classroomTaskId",e)},expression:"form.classroomTaskId"}},[n("a-select-option",{attrs:{value:"default"}},[t._v("任务名称")]),t._v(" "),t._l(t.conditions.tasks,(function(e){return n("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v("\n        "+t._s(e.title)+"\n      ")])}))],2)],1),t._v(" "),n("a-form-model-item",[n("a-select",{staticStyle:{width:"120px"},model:{value:t.form.wrongTimesSort,callback:function(e){t.$set(t.form,"wrongTimesSort",e)},expression:"form.wrongTimesSort"}},[n("a-select-option",{attrs:{value:"default"}},[t._v("\n        做错频次\n      ")]),t._v(" "),n("a-select-option",{attrs:{value:"DESC"}},[t._v("\n        由高至低\n      ")]),t._v(" "),n("a-select-option",{attrs:{value:"ASC"}},[t._v("\n        由低至高\n      ")])],1)],1),t._v(" "),n("a-form-model-item",[n("a-button",{attrs:{type:"primary"},on:{click:t.onSearch}},[t._v("搜索")])],1)],1)}),[],!1,null,null,null).exports,g=n(1335),v=n(1329),y={name:"ViewDetailsModal",components:{DetailTable:g.a,Question:v.a},props:{visible:{type:Boolean,required:!0},targetType:{type:String,required:!0},targetId:{type:String,required:!0},currentId:{type:String,required:!0},currentOrder:{type:Number,required:!0}},data:function(){return{answerDetails:[],question:{},pagination:{hideOnSinglePage:!0,current:1,total:0},loading:!1}},created:function(){this.fetchWrongQuestionDetail()},methods:{fetchWrongQuestionDetail:function(){var t=this;return l()(o.a.mark((function e(){var n,a,r,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,n={query:{itemId:t.currentId,targetType:t.targetType},params:{targetId:t.targetId,offset:10*(t.pagination.current-1),limit:10}},e.next=4,c.x.get(n);case 4:a=e.sent,r=a.data,i=a.item,s=a.paging,t.loading=!1,t.answerDetails=r,t.question=i,t.pagination.total=Number(s.total);case 12:case"end":return e.stop()}}),e)})))()},handleTableChange:function(t){this.pagination.current=t.current,this.fetchWrongQuestionDetail()},handleCancel:function(){this.$emit("event-communication",{type:"modal-cancel"})},eventCommunication:function(t){var e=t.type,n=t.data;"pagination"===e&&this.handleTableChange(n)}}},w={name:"ClassroomManageWrongQuestion",components:{Search:h,ViewDetailModal:Object(p.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-modal",{attrs:{title:"详情",width:"900px",visible:t.visible,footer:null},on:{cancel:t.handleCancel}},[n("question",{attrs:{question:t.question,order:t.currentOrder}}),t._v(" "),n("detail-table",{attrs:{data:t.answerDetails,loading:t.loading,pagination:t.pagination},on:{"event-communication":t.eventCommunication}})],1)}),[],!1,null,null,null).exports,StudentWrongQuestionTable:n(1331).a},data:function(){return{targetType:"classroom",targetId:$(".js-classroom-id").val(),pagination:{hideOnSinglePage:!0,current:1,total:0},loading:!1,wrongQuestionList:[],visible:!1,currentId:"0",currentOrder:0,searchParams:{}}},created:function(){this.fetchWrongQuestion()},methods:{onSearch:function(t){this.searchParams=t,this.fetchWrongQuestion(t)},handleTableChange:function(t){this.pagination.current=t.current,this.fetchWrongQuestion(this.searchParams)},fetchWrongQuestion:function(){var t=arguments,e=this;return l()(o.a.mark((function n(){var a,r,s,l,u;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:{},e.loading=!0,r={query:{targetId:e.targetId,targetType:e.targetType},params:i()({offset:10*(e.pagination.current-1),limit:10},a)},n.next=5,c.w.get(r);case 5:s=n.sent,l=s.data,u=s.paging,e.loading=!1,e.wrongQuestionList=l,e.pagination.total=u.total;case 11:case"end":return n.stop()}}),n)})))()},handleClickViewDetails:function(t){this.currentId=t.id,this.currentOrder=t.order,this.visible=!0},eventCommunication:function(t){var e=t.type,n=t.data;"pagination"!==e?"view-detail"!==e?"modal-cancel"===e&&(this.visible=!1):this.handleClickViewDetails(n):this.handleTableChange(n)}}},T=Object(p.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("search",{attrs:{"target-id":t.targetId},on:{"on-search":t.onSearch}}),t._v(" "),n("student-wrong-question-table",{staticClass:"mt24",attrs:{data:t.wrongQuestionList,pagination:t.pagination,loading:t.loading},on:{"event-communication":t.eventCommunication}}),t._v(" "),t.visible?n("view-detail-modal",{attrs:{visible:t.visible,"current-id":t.currentId,"current-order":t.currentOrder,"target-type":t.targetType,"target-id":t.targetId},on:{"event-communication":t.eventCommunication}}):t._e()],1)}),[],!1,null,null,null);e.default=T.exports}}]);