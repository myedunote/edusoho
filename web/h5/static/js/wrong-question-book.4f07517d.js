(window.webpackJsonp=window.webpackJsonp||[]).push([["wrong-question-book"],{"1d2c":function(t,e,s){"use strict";s.r(e);var n=s("2ef0"),i=s.n(n),r=s("3ce7"),o={name:"WrongExercisesAnalysis",data:function(){return{isLoading:!1,assessment:{},answerScene:{},answerReport:{},answerRecord:{}}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.isLoading=!0,r.a.answerRecord({query:{answerRecordId:this.$route.query.recordId}}).then((function(e){var s=e.assessment,n=e.answer_scene,r=e.answer_report,o=e.answer_record;i.a.assign(t,{assessment:s,answerScene:n,answerRecord:o,answerReport:r}),t.isLoading=!1}))}}},a=s("0c7c"),c=Object(a.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"brush-exercise-report"},[this.isLoading?e("e-loading"):[e("div",{staticClass:"ibs-wap-vue"},[e("item-report",{attrs:{answerRecord:this.answerRecord,answerReport:this.answerReport,assessment:this.assessment,answerScene:this.answerScene}})],1)]],2)}),[],!1,null,null,null);e.default=c.exports},2390:function(t,e,s){"use strict";s.r(e);var n=s("3ce7"),i={props:{question:{type:Object,required:!0}},methods:{goToWrongQuestionDetail:function(){var t=this.question.target_type,e="myWrongQuestionBookDetail";"exercise"===t&&(e="myWrongQuestionBookExercise"),this.$router.push({name:e,params:{type:t,id:this.question.id},query:{title:this.question.target_data.title,id:this.question.id}})}}},r=s("0c7c"),o={name:"MyWrongQuestionBook",components:{Item:Object(r.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-item",on:{click:t.goToWrongQuestionDetail}},[s("div",{staticClass:"list-item__image"},[s("img",{attrs:{src:t.question.target_data.cover.middle}})]),s("div",{staticClass:"list-item__detail"},[s("h3",{staticClass:"title text-overflow"},[t._v(t._s(t.question.target_data.title))]),s("p",{staticClass:"number text-overflow"},[t._v(t._s(t.question.item_num)+"道题")])])])}),[],!1,null,null,null).exports},data:function(){return{isLoading:!1,list:[{title:"课程错题",type:"course",placeholder:"搜索相应课程",items:[],keyword:"",loading:!1,finished:!1,totalTitle:"课程错题数量",total:0,paging:{current:0,total:0}},{title:"班级错题",type:"classroom",placeholder:"搜索相应班级",items:[],keyword:"",loading:!1,finished:!1,totalTitle:"班级错题数量",total:0,paging:{current:0,total:0}},{title:"题库错题",type:"exercise",placeholder:"搜索相应练习名称",items:[],keyword:"",loading:!1,finished:!1,totalTitle:"题库错题数量",total:0,paging:{current:0,total:0}}]}},created:function(){this.fetchWrongQuestionBooks()},methods:{fetchWrongQuestionBooks:function(){var t=this;this.isLoading=!0,n.a.getWrongBooks().then((function(e){t.list[0].total=e.course.sum_wrong_num,t.list[1].total=e.classroom.sum_wrong_num,t.list[2].total=e.exercise.sum_wrong_num,t.isLoading=!1}))},onLoad:function(t){var e=this.list[t];e.loading=!0,n.a.getWrongBooksCertainTypes({query:{targetType:e.type},params:{keyWord:e.keyword,offset:10*e.paging.current}}).then((function(t){e.refreshing&&(e.items=[],e.refreshing=!1),e.items=e.items.concat(t.data),e.loading=!1,e.refreshing=!1;var s=t.paging.total;e.paging.total=s,e.paging.current++,e.items.length>=s&&(e.finished=!0)}))},onSearch:function(t,e){var s=this.list[t];s.keyword=e,s.refreshing=!0,s.paging.current=0,this.onLoad(t)}}},a=Object(r.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.isLoading?s("e-loading"):t._e(),s("van-tabs",{attrs:{border:!0,color:"#43c793"}},[t._l(t.list,(function(e,n){return[s("van-tab",{key:n,attrs:{title:e.title}},[s("van-search",{attrs:{shape:"round",placeholder:e.placeholder},on:{search:function(e){return t.onSearch(n,e)}},model:{value:e.keyword,callback:function(s){t.$set(e,"keyword",s)},expression:"listItem.keyword"}}),s("van-list",{staticClass:"wrong-list",attrs:{finished:e.finished,"finished-text":"没有更多了"},on:{load:function(e){return t.onLoad(n)}},model:{value:e.loading,callback:function(s){t.$set(e,"loading",s)},expression:"listItem.loading"}},t._l(e.items,(function(t){return s("item",{key:t.id,attrs:{question:t}})})),1),s("div",{staticClass:"wrong-question-number"},[t._v("\n          "+t._s(e.totalTitle)+"："+t._s(e.total)+"\n        ")])],1)]}))],2)],1)}),[],!1,null,null,null);e.default=a.exports},"3c45":function(t,e,s){"use strict";s.r(e),s("8e6e"),s("ac6a"),s("456d"),s("e17f");var n=s("2241"),i=s("bd86"),r=s("2ef0"),o=s.n(r),a=s("2f62"),c=s("faa5"),l=s("3ce7"),u=(s("a481"),s("4917"),s("c5f6"),s("6762"),s("2fdb"),{props:{question:{type:Object,required:!0}},computed:{questions:function(){return this.question.questions[0]}},methods:{checkAnswer:function(t){var e=this.questions,s=e.answer,n=e.report.response;return o.a.includes(s,t)?"question-option__order_right":o.a.includes(o.a.difference(n,s),t)?"question-option__order_wrong":void 0}}}),d=s("0c7c"),h=Object(d.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("van-checkbox-group",{model:{value:t.questions.answer,callback:function(e){t.$set(t.questions,"answer",e)},expression:"questions.answer"}},t._l(t.questions.response_points,(function(e,n){return s("van-checkbox",{key:n,staticClass:"question-option",attrs:{name:e.checkbox.val}},[s("div",{staticClass:"question-option__content",domProps:{innerHTML:t._s(e.checkbox.text)}}),s("span",{class:["question-option__order","question-option__order--square",t.checkAnswer(e.checkbox.val)],attrs:{slot:"icon"},slot:"icon"},[t._v("\n      "+t._s(e.checkbox.val)+"\n    ")])])})),1)}),[],!1,null,null,null).exports,p={props:{question:{type:Object,required:!0}},computed:{questions:function(){return this.question.questions[0]}},methods:{checkAnswer:function(t){var e=this.questions,s=e.answer,n=e.report.response;return o.a.includes(s,t)?"question-option__order_right":o.a.includes(o.a.difference(n,s),t)?"question-option__order_wrong":void 0}}},f=Object(d.a)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("van-radio-group",{model:{value:t.questions.answer[0],callback:function(e){t.$set(t.questions.answer,0,e)},expression:"questions.answer[0]"}},t._l(t.questions.response_points,(function(e,n){return s("van-radio",{key:n,staticClass:"question-option",attrs:{name:e.radio.val}},[s("div",{staticClass:"question-option__content",domProps:{innerHTML:t._s(e.radio.text)}}),s("template",{slot:"icon"},[s("span",{class:["question-option__order",t.checkAnswer(e.radio.val)]},[t._v("\n        "+t._s(e.radio.val)+"\n      ")])])],2)})),1)}),[],!1,null,null,null).exports,v={props:{question:{type:Object,required:!0}},computed:{questions:function(){return this.question.questions[0]}},methods:{checkAnswer:function(t){var e=this.questions,s=e.answer,n=e.report.response;return o.a.includes(s,t)?"question-option__order_right":o.a.includes(o.a.difference(n,s),t)?"question-option__order_wrong":void 0}}},m={components:{Choice:h,SingleChoice:f,Judge:Object(d.a)(v,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("van-radio-group",{model:{value:t.questions.answer[0],callback:function(e){t.$set(t.questions.answer,0,e)},expression:"questions.answer[0]"}},t._l(t.questions.response_points,(function(e,n){return s("van-radio",{key:n,staticClass:"question-option",attrs:{name:e.radio.val}},[s("div",{staticClass:"question-option__content"},[t._v("\n      "+t._s("T"===e.radio.val?"对":"错")+"\n    ")]),s("template",{slot:"icon"},[s("span",{class:["question-option__order",t.checkAnswer(e.radio.val)]},["T"===e.radio.val?s("i",{staticClass:"iconfont icon-yes"}):s("i",{staticClass:"iconfont icon-no"})])])],2)})),1)}),[],!1,null,null,null).exports},props:{total:{type:Number,required:!0},order:{type:Number,required:!0},question:{type:Object,required:!0}},data:function(){return{questionComponents:{single_choice:{name:"单选题",component:"SingleChoice"},text:{name:"填空题",component:""},choice:{name:"多选题",component:"Choice"},uncertain_choice:{name:"不定项选择题",component:"Choice"},true_false:{name:"判断题",component:"Judge"}}}},computed:{questions:function(){return this.question.questions[0]},formateQuestionStem:function(){var t=this.questions.stem,e=/\[\[\]\]/g;if(!t.match(e))return t;var s=1;return t.replace(e,(function(){return'<span class="stem-fill-blank">('.concat(s++,")</span>")}))},currentQuestionComponent:function(){return this.questionComponents[this.question.questions[0].answer_mode]},status:function(){var t={right:{color:"analysis-item_right",text:"回答正确"},wrong:{color:"analysis-item_worng",text:"回答错误"},partRight:{color:"analysis-item_worng",text:"回答错误"},no_answer:{color:"analysis-item_noAnswer",text:"未回答"}},e=this.questions.report,s=e.response,n=e.status;return o.a.size(s)?t[n]:t.no_answer},rightAnswer:function(){var t=this.questions,e=t.answer,s=t.answer_mode;if("true_false"===s&&(e=o.a.map(e,(function(t){return"T"===t?"对":"错"}))),"text"===s){var n="";return o.a.forEach(e,(function(t,e){n+='<div style="margin-bottom: 2vw"> ('.concat(e+1,") ").concat(t," </div>")})),n}return o.a.join(e,"、")},yourAnswer:function(){var t=this.questions,e=t.answer_mode,s=t.report.response;if(!o.a.size(s))return"text"===e?'<div class="fill-answer">（1）未作答</div>':"未作答";if("true_false"===e&&(s=o.a.map(s,(function(t){return"T"===t?"正确":"错误"}))),"text"===e){var n="";return o.a.forEach(s,(function(t,e){n+='<div style="margin-bottom: 2vw"> ('.concat(e+1,") ").concat(t||"未作答","</div>")})),n}return o.a.join(s,"、")}},methods:{}},_=Object(d.a)(m,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"question"},[s("div",{staticClass:"question-head"},[s("div",{staticClass:"head-left"},[t._v(t._s(t.currentQuestionComponent.name))]),s("div",{staticClass:"head-right"},[s("span",{staticClass:"right-color"},[t._v(t._s(t.order))]),t._v("\n      /"+t._s(t.total)+"\n    ")])]),s("div",{staticClass:"question-body"},[s("div",{staticClass:"question-stem clearfix"},[s("div",{staticClass:"pull-left"},[t._v(t._s(t.order)+"、")]),s("div",{domProps:{innerHTML:t._s(t.formateQuestionStem)}})]),s("div",{staticClass:"question-answer"},[s(t.currentQuestionComponent.component,{tag:"component",attrs:{question:t.question}})],1)]),s("div",{staticClass:"analysis"},[s("div",{staticClass:"mt10 analysis-result"},[s("div",{staticClass:"analysis-title"},[t._v("做题结果")]),s("div",{staticClass:"analysis-content"},[s("div",{staticClass:"analysis-content__item mt10"},[s("div",{staticClass:"analysis-item__title"},[t._v("做题结果")]),s("div",{class:[t.status.color]},[t._v(t._s(t.status.text))])]),s("div",{staticClass:"analysis-content__item mt10"},[s("div",{staticClass:"analysis-item__title"},[t._v("正确答案")]),s("div",{staticClass:"analysis-item_right analysis-content__item--column",domProps:{innerHTML:t._s(t.rightAnswer)}})]),s("div",{staticClass:"analysis-content__item mt10"},[s("div",{staticClass:"analysis-item__title"},[t._v("你的答案")]),s("div",{staticClass:"analysis-item_right analysis-content__item--column",class:[t.status.color],domProps:{innerHTML:t._s(t.yourAnswer)}})])])]),s("div",{staticClass:"mt10 analysis-result"},[s("div",{staticClass:"analysis-title"},[t._v("做题解析")]),s("div",{staticClass:"analysis-content mt10",domProps:{innerHTML:t._s(t.questions.analysis||"无解析")}})]),s("div",{staticClass:"mt10 analysis-result"},[s("div",{staticClass:"question-situation"},[s("div",{staticClass:"situation-top"},[t._v("来源："+t._s(t.question.sources[0]))]),s("div",{staticClass:"situation-bottom"},[s("span",[t._v(t._s(t.$moment(1e3*t.question.updated_time).format("YYYY-MM-DD HH:mm:ss")))]),s("span",[t._v("\n            做错频次：\n            "),s("span",{staticClass:"frequency"},[t._v(t._s(t.question.wrong_times))]),t._v("\n            次\n          ")])])])])])])}),[],!1,null,null,null).exports,g={testpaper:"考试任务",homework:"作业任务",exercise:"练习任务"},C={name:"CourseSearch",props:{show:{type:Boolean,required:!0},poolId:{type:String,required:!0}},data:function(){return{visible:this.show,sortType:"default",currentIndex:0,searchParams:{},conditions:[{title:"全部计划",placeholder:"选择计划",columns:[],selectdText:"选择计划",selectdIndex:0},{title:"题目来源",placeholder:"选择题目来源",columns:[],selectdText:"选择题目来源",selectdIndex:0},{title:"任务名称",placeholder:"选择任务名称",columns:[],selectdText:"选择任务名称",selectdIndex:0}]}},computed:{currentCondition:function(){return this.conditions[this.currentIndex]}},watch:{show:function(t){t&&(this.visible=t)},visible:function(t){t||this.$emit("hidden-search")}},created:function(){this.fetchCondition()},methods:{fetchCondition:function(){var t=this;l.a.getWrongQuestionCondition({query:{poolId:this.poolId},params:this.searchParams}).then((function(e){var s=e.plans,n=e.source,i=e.tasks;o.a.forEach(s,(function(t){t.text=t.title}));var r=[];o.a.forEach(n,(function(t){r.push({type:t,text:g[t]})})),o.a.forEach(i,(function(t){t.text=t.title})),t.conditions[0].columns=s,t.conditions[1].columns=r,t.conditions[2].columns=i}))},onClickReset:function(){this.sortType="default",this.currentIndex=0,this.searchParams={},this.conditions[0].selectdIndex=0,this.conditions[1].selectdIndex=0,this.conditions[2].selectdIndex=0,this.conditions[0].selectdText="选择计划",this.conditions[1].selectdText="选择题目来源",this.conditions[2].selectdText="选择任务名称",this.fetchCondition()},onClickSearch:function(){this.visible=!1,this.$emit("on-search",this.searchParams)},onClickSort:function(t){this.sortType=t,"default"!==t?this.searchParams.wrongTimesSort=t:delete this.searchParams.wrongTimesSort},onChange:function(t,e,s){this.currentCondition.selectdIndex=s},onClickConfirm:function(){var t=this.currentCondition,e=t.selectdIndex,s=t.columns[e];o.a.size(s)&&(this.currentCondition.selectdText=s.text,0===this.currentIndex?(this.searchParams.courseId=s.id,this.conditions[1].selectdIndex=0,this.conditions[1].selectdText="选择题目来源",this.conditions[2].selectdIndex=0,this.conditions[2].selectdText="选择任务名称",delete this.searchParams.courseMediaType,delete this.searchParams.courseTaskId):1===this.currentIndex?(this.searchParams.courseMediaType=s.type,this.conditions[2].selectdIndex=0,this.conditions[2].selectdText="选择任务名称",delete this.searchParams.courseTaskId):2===this.currentIndex&&(this.searchParams.courseTaskId=s.id),this.fetchCondition())}}},y=Object(d.a)(C,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("van-popup",{staticClass:"wrong-question-search",attrs:{round:"",position:"bottom"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[s("van-nav-bar",{attrs:{title:"筛选"},on:{"click-left":t.onClickReset,"click-right":t.onClickSearch},scopedSlots:t._u([{key:"left",fn:function(){return[s("span",{staticClass:"search-reset"},[t._v("重置")])]},proxy:!0},{key:"right",fn:function(){return[s("span",{staticClass:"search-btn"},[t._v("查看错题")])]},proxy:!0}])}),s("van-divider",{staticStyle:{"margin-top":"4px"}}),s("div",{staticClass:"search-sort"},[s("div",{staticClass:"search-sort__title"},[t._v("排序")]),s("div",{staticClass:"search-sort__btns"},[s("div",{class:["sort-btn",{active:"default"===t.sortType}],on:{click:function(e){return t.onClickSort("default")}}},[t._v("\n        综合排序\n      ")]),s("div",{class:["sort-btn",{active:"DESC"===t.sortType}],on:{click:function(e){return t.onClickSort("DESC")}}},[t._v("\n        由高至低\n      ")]),s("div",{class:["sort-btn",{active:"ASC"===t.sortType}],on:{click:function(e){return t.onClickSort("ASC")}}},[t._v("\n        由低至高\n      ")])])]),s("div",{staticClass:"search-checked"},t._l(t.conditions,(function(e,n){return s("div",{key:n,class:["search-checked__item",{active:t.currentIndex==n}],on:{click:function(e){t.currentIndex=n}}},[s("div",{staticClass:"checked-title"},[t._v(t._s(e.title))]),s("div",{staticClass:"checked-result"},[t._v(t._s(e.selectdText))])])})),0),s("div",{staticClass:"search-select"},[s("div",{staticClass:"search-select__toolbar"},[t._v("\n      "+t._s(t.currentCondition.placeholder)+"\n      "),s("div",{staticClass:"search-select__confirm",on:{click:t.onClickConfirm}},[t._v("确定")])]),s("van-picker",{attrs:{"swipe-duration":500,columns:t.currentCondition.columns,"default-index":t.currentCondition.selectdIndex},on:{change:t.onChange}})],1)],1)}),[],!1,null,null,null).exports,x={testpaper:"考试任务",homework:"作业任务",exercise:"练习任务"},w={name:"ClassroomSearch",props:{show:{type:Boolean,required:!0},poolId:{type:String,required:!0}},data:function(){return{visible:this.show,sortType:"default",currentIndex:0,searchParams:{},conditions:[{title:"课程名称",placeholder:"选择课程名称",columns:[],selectdText:"选择课程名称",selectdIndex:0},{title:"题目来源",placeholder:"选择题目来源",columns:[],selectdText:"选择题目来源",selectdIndex:0},{title:"任务名称",placeholder:"选择任务名称",columns:[],selectdText:"选择任务名称",selectdIndex:0}]}},computed:{currentCondition:function(){return this.conditions[this.currentIndex]}},watch:{show:function(t){t&&(this.visible=t)},visible:function(t){t||this.$emit("hidden-search")}},created:function(){this.fetchCondition()},methods:{fetchCondition:function(){var t=this;l.a.getWrongQuestionCondition({query:{poolId:this.poolId},params:this.searchParams}).then((function(e){var s=e.courseSets,n=e.mediaTypes,i=e.tasks;o.a.forEach(s,(function(t){t.text=t.title}));var r=[];o.a.forEach(n,(function(t){r.push({type:t,text:x[t]})})),o.a.forEach(i,(function(t){t.text=t.title})),t.conditions[0].columns=s,t.conditions[1].columns=r,t.conditions[2].columns=i}))},onClickReset:function(){this.sortType="default",this.currentIndex=0,this.searchParams={},this.conditions[0].selectdIndex=0,this.conditions[1].selectdIndex=0,this.conditions[2].selectdIndex=0,this.conditions[0].selectdText="选择课程名称",this.conditions[1].selectdText="选择题目来源",this.conditions[2].selectdText="选择任务名称",this.fetchCondition()},onClickSearch:function(){this.visible=!1,this.$emit("on-search",this.searchParams)},onClickSort:function(t){this.sortType=t,"default"!==t?this.searchParams.wrongTimesSort=t:delete this.searchParams.wrongTimesSort},onChange:function(t,e,s){this.currentCondition.selectdIndex=s},onClickConfirm:function(){var t=this.currentCondition,e=t.selectdIndex,s=t.columns[e];o.a.size(s)&&(this.currentCondition.selectdText=s.text,0===this.currentIndex?(this.searchParams.courseId=s.id,this.conditions[1].selectdIndex=0,this.conditions[1].selectdText="选择题目来源",this.conditions[2].selectdIndex=0,this.conditions[2].selectdText="选择任务名称",delete this.searchParams.courseMediaType,delete this.searchParams.courseTaskId):1===this.currentIndex?(this.searchParams.courseMediaType=s.type,this.conditions[2].selectdIndex=0,this.conditions[2].selectdText="选择任务名称",delete this.searchParams.courseTaskId):2===this.currentIndex&&(this.searchParams.courseTaskId=s.id),this.fetchCondition())}}},b=Object(d.a)(w,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("van-popup",{staticClass:"wrong-question-search",attrs:{round:"",position:"bottom"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[s("van-nav-bar",{attrs:{title:"筛选"},on:{"click-left":t.onClickReset,"click-right":t.onClickSearch},scopedSlots:t._u([{key:"left",fn:function(){return[s("span",{staticClass:"search-reset"},[t._v("重置")])]},proxy:!0},{key:"right",fn:function(){return[s("span",{staticClass:"search-btn"},[t._v("查看错题")])]},proxy:!0}])}),s("van-divider",{staticStyle:{"margin-top":"4px"}}),s("div",{staticClass:"search-sort"},[s("div",{staticClass:"search-sort__title"},[t._v("排序")]),s("div",{staticClass:"search-sort__btns"},[s("div",{class:["sort-btn",{active:"default"===t.sortType}],on:{click:function(e){return t.onClickSort("default")}}},[t._v("\n        综合排序\n      ")]),s("div",{class:["sort-btn",{active:"DESC"===t.sortType}],on:{click:function(e){return t.onClickSort("DESC")}}},[t._v("\n        由高至低\n      ")]),s("div",{class:["sort-btn",{active:"ASC"===t.sortType}],on:{click:function(e){return t.onClickSort("ASC")}}},[t._v("\n        由低至高\n      ")])])]),s("div",{staticClass:"search-checked"},t._l(t.conditions,(function(e,n){return s("div",{key:n,class:["search-checked__item",{active:t.currentIndex==n}],on:{click:function(e){t.currentIndex=n}}},[s("div",{staticClass:"checked-title"},[t._v(t._s(e.title))]),s("div",{staticClass:"checked-result"},[t._v(t._s(e.selectdText))])])})),0),s("div",{staticClass:"search-select"},[s("div",{staticClass:"search-select__toolbar"},[t._v("\n      "+t._s(t.currentCondition.placeholder)+"\n      "),s("div",{staticClass:"search-select__confirm",on:{click:t.onClickConfirm}},[t._v("确定")])]),s("van-picker",{attrs:{"swipe-duration":500,columns:t.currentCondition.columns,"default-index":t.currentCondition.selectdIndex},on:{change:t.onChange}})],1)],1)}),[],!1,null,null,null).exports,k={name:"QuestionBankSearch",props:{show:{type:Boolean,required:!0},poolId:{type:String,required:!0},exerciseMediaType:{type:String,required:!0}},data:function(){return{visible:this.show,chapterData:[],testpaperData:[]}},watch:{show:function(t){t&&(this.visible=t)},visible:function(t){t||this.$emit("hidden-search")}},created:function(){this.fetchCondition()},methods:{fetchCondition:function(){var t=this;l.a.getWrongQuestionCondition({query:{poolId:this.poolId},params:{exerciseMediaType:this.exerciseMediaType}}).then((function(e){var s=e.chapter,n=e.testpaper;!function t(e){o.a.forEach(e,(function(e){e.status=!0,e.children&&t(e.children)}))}(s),t.chapterData=s,t.testpaperData=n}))},onClickSearch:function(t){this.visible=!1,this.$emit("on-search",t)},onClickChange:function(t){!function t(e,s){o.a.forEach(e,(function(e){if(e.id==s)return e.status=!e.status,!1;e.children&&t(e.children,s)}))}(this.chapterData,t)}}},q=Object(d.a)(k,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("van-popup",{style:{width:"80%",height:"100%",background:"#f5f5f5",borderRadius:"10px 0 0 10px"},attrs:{position:"right"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[s("div",{staticClass:"exercise-search"},[s("div",{staticClass:"exercise-search__title"},[t._v("题目来源")]),"testpaper"===t.exerciseMediaType?t._l(t.testpaperData,(function(e,n){return s("div",{key:n,staticClass:"exercise-search__item"},[s("div",{staticClass:"exercise-search__name text-overflow"},[t._v("\n          "+t._s(e.assessmentName)+"\n        ")]),s("div",{staticClass:"exercise-search__btn",on:{click:function(s){return t.onClickSearch({testpaperId:e.assessmentId})}}},[t._v("\n          查看错题\n        ")])])})):t._l(t.chapterData,(function(e){return s("div",{key:e.id,staticClass:"first-chapter"},[s("div",{staticClass:"exercise-search__item"},[s("div",{staticClass:"exercise-search__name text-overflow",on:{click:function(s){return t.onClickChange(e.id)}}},[s("span",{staticClass:"first-chapter__bar"},[s("span",{staticClass:"round-ball"},[s("span",[t._v(t._s(e.status?"-":"+"))])])]),t._v("\n            "+t._s(e.name)+"\n          ")]),s("div",{staticClass:"exercise-search__btn",on:{click:function(s){return t.onClickSearch({chapterId:e.id})}}},[t._v("\n            查看错题\n          ")])]),e.children.length?s("div",{class:e.status?"":"hidden-chapter-children"},t._l(e.children,(function(e){return s("div",{key:e.id,staticClass:"second-chapter"},[s("div",{staticClass:"exercise-search__item"},[s("div",{staticClass:"exercise-search__name text-overflow",on:{click:function(s){return t.onClickChange(e.id)}}},[s("span",{staticClass:"second-chapter__bar"},[s("span",{staticClass:"round-ball"},[s("span",[t._v(t._s(e.status?"-":"+"))])])]),t._v("\n                "+t._s(e.name)+"\n              ")]),s("div",{staticClass:"exercise-search__btn",on:{click:function(s){return t.onClickSearch({chapterId:e.id})}}},[t._v("\n                查看错题\n              ")])]),e.children.length?s("div",{class:e.status?"":"hidden-chapter-children"},t._l(e.children,(function(e){return s("div",{key:e.id,staticClass:"third-chapter"},[s("div",{staticClass:"exercise-search__item"},[s("div",{staticClass:"exercise-search__name text-overflow",on:{click:function(s){return t.onClickChange(e.id)}}},[s("span",{staticClass:"third-chapter__bar"},[s("span",{staticClass:"round-ball"})]),t._v("\n                    "+t._s(e.name)+"\n                  ")]),s("div",{staticClass:"exercise-search__btn",on:{click:function(s){return t.onClickSearch({chapterId:e.id})}}},[t._v("\n                    查看错题\n                  ")])])])})),0):t._e()])})),0):t._e()])}))],2)])}),[],!1,null,null,null).exports;function I(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function T(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?I(Object(s),!0).forEach((function(e){Object(i.a)(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):I(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var S=document.documentElement.clientHeight-46-48,O={name:"WrongQuestionBookDetail",components:{Question:_,CourseSearch:y,ClassroomSearch:b,QuestionBankSearch:q},data:function(){return{isLoading:!1,targetType:this.$route.params.type,targetId:this.$route.params.id,exerciseMediaType:this.$route.query.type,questionList:[],pagination:{current:1,total:0,pageSize:20},finished:!1,height:S,currentIndex:0,searchParams:{},show:!1,searchComponents:{course:"CourseSearch",classroom:"ClassroomSearch",exercise:"QuestionBankSearch"}}},computed:{currentSearchComponent:function(){return this.searchComponents[this.targetType]}},created:function(){this.setNavbarTitle(this.$route.query.title),this.fetchWrongQuestion()},methods:T(T({},Object(a.d)({setNavbarTitle:c.u})),{},{fetchWrongQuestion:function(){var t=this;this.isLoading=!0;var e=this.pagination,s=e.current,n=e.pageSize;l.a.getWrongBooksQuestionShow({query:{poolId:this.targetId},params:T({targetType:this.targetType,limit:n,offset:(s-1)*n,exerciseMediaType:this.exerciseMediaType},this.searchParams)}).then((function(e){var s=e.data,n=e.paging;t.questionList=o.a.concat(t.questionList,s),t.pagination.total=n.total,t.finished=!1,t.isLoading=!1,o.a.size(t.questionList)>=n.total&&(t.finished=!0)}))},onChange:function(t){this.currentIndex=t;var e=o.a.size(this.questionList)-3;!this.finished&&t>=e&&(this.pagination.current++,this.finished=!0,this.fetchWrongQuestion())},prev:function(){0!=this.currentIndex&&this.$refs.swipe.swipeTo(this.currentIndex-1)},next:function(){this.currentIndex!=this.questionList.length-1&&this.$refs.swipe.swipeTo(this.currentIndex+1)},showSearch:function(){this.show=!0},hiddenSearch:function(){this.show=!1},onSearch:function(t){this.searchParams=t,this.questionList=[],this.pagination.current=1,this.currentIndex=0,this.fetchWrongQuestion()},onClickWrongExercise:function(){var t=this;if(!localStorage.getItem("first_wrong_exercises"))return n.a.alert({message:"已为你随机筛选最多 20 题",confirmButtonText:"我知道了",confirmButtonColor:"#03c777 !important"}).then((function(){t.goToStartAnswer()})),void localStorage.setItem("first_wrong_exercises",!0);this.goToStartAnswer()},goToStartAnswer:function(){this.$router.push({name:"WrongExercisesDo",query:T({id:this.targetId},this.searchParams)})}})},P=Object(d.a)(O,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrong-question-detail"},[t.isLoading?s("e-loading"):t._e(),s("van-swipe",{ref:"swipe",staticStyle:{"overflow-y":"auto"},attrs:{height:t.height,duration:100,loop:!1,"show-indicators":!1,"lazy-render":!0,"initial-swipe":t.currentIndex},on:{change:t.onChange}},t._l(t.questionList,(function(e,n){return s("van-swipe-item",{key:e.id+n},[s("question",{attrs:{total:t.pagination.total,order:n+1,question:e}})],1)})),1),s("div",{staticClass:"paper-swiper"},[s("div",{class:["left-slide__btn",0==t.currentIndex?"slide-disabled":""],on:{click:function(e){return t.prev()}}},[s("i",{staticClass:"iconfont icon-arrow-left"})]),s("div",{class:["right-slide__btn",t.currentIndex==t.questionList.length-1?"slide-disabled":""],on:{click:function(e){return t.next()}}},[s("i",{staticClass:"iconfont icon-arrow-right"})])]),s("div",{staticClass:"question-search",on:{click:t.showSearch}},[s("van-icon",{attrs:{name:"filter-o"}}),t._v("\n    筛选\n  ")],1),s(t.currentSearchComponent,{tag:"component",attrs:{show:t.show,"pool-id":t.targetId,"exercise-media-type":t.exerciseMediaType},on:{"hidden-search":t.hiddenSearch,"on-search":t.onSearch}}),s("div",{staticClass:"question-foot",on:{click:t.onClickWrongExercise}},[t._v("\n    错题练习\n  ")])],1)}),[],!1,null,null,null);e.default=P.exports},"975c":function(t,e,s){"use strict";s.r(e),s("e7e5");var n=s("d399"),i=s("2ef0"),r=s.n(i),o=s("3ce7"),a={name:"WrongQuestionDo",data:function(){return{poolId:this.$route.query.id,isLoading:!1,assessment:{},answerScene:{},answerRecord:{},assessmentResponse:{}}},created:function(){this.fetchQuestion()},methods:{fetchQuestion:function(){var t=this;this.isLoading=!0;var e=r.a.assign({},this.$route.query);delete e.id,o.a.getWrongQuestionStartAnswer({query:{poolId:this.poolId},data:e}).then((function(e){var s=e.assessment,n=e.assessment_response,i=e.answer_scene,o=e.answer_record;r.a.assign(t,{assessment:s,answerScene:i,answerRecord:o,assessmentResponse:n}),t.isLoading=!1}))},getAnswerData:function(t){var e=this;n.a.loading({message:"提交中...",forbidClick:!0}),o.a.submitWrongQuestionAnswer({query:{poolId:this.poolId,recordId:this.answerRecord.id},data:t}).then((function(t){n.a.clear(),e.goResult()})).catch((function(t){n.a.clear(),e.$toast(t.message)}))},goResult:function(){this.$router.push({name:"WrongExercisesResult",query:{recordId:this.answerRecord.id}})}}},c=s("0c7c"),l=Object(c.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.isLoading?e("e-loading"):e("div",{staticClass:"ibs-wap-vue"},[e("item-engine",{ref:"itemEngine",attrs:{answerRecord:this.answerRecord,assessmentResponse:this.assessmentResponse,assessment:this.assessment,answerScene:this.answerScene,"show-save-process-btn":!1},on:{getAnswerData:this.getAnswerData}})],1)],1)}),[],!1,null,null,null);e.default=l.exports},"99dc":function(t,e,s){"use strict";s.r(e),s("c5f6");var n=s("3ce7"),i=s("2ef0"),r=s.n(i),o={name:"WrongQuestionResult",data:function(){return{isLoading:!0,answerRecord:{},reports:{}}},computed:{usedTime:function(){var t=parseInt(this.answerRecord.used_time)||0;return t<=60?1:Math.round(t/60)},rightRate:function(){return parseInt(this.reports.right_question_num/this.reports.question_count*100)}},beforeRouteEnter:function(t,e,s){document.getElementById("app").style.background="#f6f6f6",s()},beforeRouteLeave:function(t,e,s){document.getElementById("app").style.background="",s()},created:function(){this.fetchAnswerRecord()},methods:{fetchAnswerRecord:function(){var t=this,e={answerRecordId:Number(this.$route.query.recordId)};n.a.answerRecord({query:e}).then((function(e){t.answerRecord=e.answer_record,t.reports=e.answer_report.section_reports[0],t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.$toast(e.message)}))},getStatusClass:function(t){var e={right:"circle-green",wrong:"circle-orange",partRight:"circle-orange",no_answer:"circle-gray"},s=t.question_reports[0],n=s.response,i=s.status;return r.a.size(n)?e[i]:e.no_answer},viewAnalysis:function(){this.$router.push({name:"WrongExercisesAnalysis",query:{recordId:this.$route.query.recordId}})},goToMyWrongQuestionBook:function(){this.$router.push({name:"myWrongQuestionBook"})}}},a=s("0c7c"),c=Object(a.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrong-question-result"},[t.isLoading?s("e-loading"):t._e(),s("div",{staticClass:"result-data"},[s("div",{staticClass:"result-data__item"},[t._v("\n      正确率\n      "),s("div",{staticClass:"result-data__bottom data-number-green"},[s("span",{staticClass:"data-number"},[t._v(t._s(t.rightRate))]),t._v("%\n      ")])]),s("div",{staticClass:"result-data__item"},[t._v("\n      做题用时\n      "),s("div",{staticClass:"result-data__bottom data-number-gray"},[s("span",{staticClass:"data-number"},[t._v(t._s(t.usedTime))]),t._v("\n        分钟\n      ")])])]),t._m(0),s("div",{staticClass:"result-panel"},[s("ul",{staticClass:"result-list"},t._l(t.reports.item_reports,(function(e,n){return s("li",{key:n,class:["result-list__item testpaper-number",t.getStatusClass(e)]},[t._v("\n        "+t._s(n+1)+"\n      ")])})),0)]),s("div",{staticClass:"result-footer"},[s("van-button",{staticClass:"result-footer__btn",staticStyle:{"margin-right":"2vw"},attrs:{type:"primary"},on:{click:function(e){return t.viewAnalysis()}}},[t._v("\n      查看解析\n    ")]),s("van-button",{staticClass:"result-footer__btn",attrs:{type:"primary"},on:{click:t.goToMyWrongQuestionBook}},[t._v("\n      我的错题本\n    ")])],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"result-tag"},[e("div",{staticClass:"result-tag-item clearfix"},[e("div",{staticClass:"result-tag-item__circle circle-green"}),this._v("\n      正确\n    ")]),e("div",{staticClass:"result-tag-item clearfix"},[e("div",{staticClass:"result-tag-item__circle circle-orange"}),this._v("\n      错误\n    ")]),e("div",{staticClass:"result-tag-item clearfix"},[e("div",{staticClass:"result-tag-item__circle circle-gray"}),this._v("\n      未作答\n    ")])])}],!1,null,null,null);e.default=c.exports},d697:function(t,e,s){"use strict";s.r(e),s("8e6e"),s("ac6a"),s("456d");var n=s("bd86"),i=s("3ce7"),r=s("2f62"),o=s("faa5");function a(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?a(Object(s),!0).forEach((function(e){Object(n.a)(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var l={name:"myWrongQuestionBookExercise",data:function(){return{isLoading:!1,exerciseList:[],poolId:this.$route.query.id,title:this.$route.query.title}},created:function(){this.setNavbarTitle(this.title),this.fetchExerciseDetail()},methods:c(c({},Object(r.d)({setNavbarTitle:o.u})),{},{fetchExerciseDetail:function(){var t=this;this.isLoading=!0,i.a.getWrongQuestionExercise({query:{poolId:this.poolId}}).then((function(e){t.isLoading=!1,t.exerciseList=e}))},goToWrongQuestionDetail:function(t){this.$router.push({name:"myWrongQuestionBookDetail",params:{type:"exercise",id:this.poolId},query:{title:this.title,type:t}})}})},u=s("0c7c"),d=Object(u.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.isLoading?s("e-loading"):t._e(),s("div",{staticClass:"wrong-list",staticStyle:{"padding-top":"16px"}},t._l(t.exerciseList,(function(e,n){return s("div",{key:n,staticClass:"list-item",on:{click:function(s){return t.goToWrongQuestionDetail(e.type)}}},[s("div",{staticClass:"list-item__image"},[s("img",{attrs:{src:e.cover.middle}})]),s("div",{staticClass:"list-item__detail"},[s("h3",{staticClass:"title text-overflow"},[t._v(t._s(e.module))]),s("p",{staticClass:"number text-overflow"},[t._v(t._s(e.wrong_number)+"道题")])])])})),0)],1)}),[],!1,null,null,null);e.default=d.exports}}]);