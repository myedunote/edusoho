<<<<<<< HEAD
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1314:function(e,t,n){},1315:function(e,t,n){},1316:function(e,t,n){},1322:function(e,t,n){"use strict";var s=n(1314);n.n(s).a},1323:function(e,t,n){"use strict";var s=n(1315);n.n(s).a},1324:function(e,t,n){"use strict";var s=n(1316);n.n(s).a},1325:function(e,t,n){},1350:function(e,t,n){"use strict";var s=n(56),r=n.n(s),a=n(1355),o=n(1358),i=n(1356),u={name:"question-layout",components:{Stem:a.a,RightAnswer:o.a,Analysis:i.a},props:{question:{type:Object,required:!0},order:{type:Number,required:!0}},computed:{questions:function(){return this.question.questions[0]}}},l=(n(1366),n(31)),c={components:{Layout:Object(l.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question-layout",attrs:{order:e.order}},[n("stem",{attrs:{order:e.order,stem:e.questions.stem}}),e._v(" "),n("div",{staticClass:"prevent-click answer-content"},[e._t("answer")],2),e._v(" "),n("right-answer",{attrs:{question:e.question}}),e._v(" "),n("analysis",{attrs:{analysis:e.questions.analysis}})],1)}),[],!1,null,null,null).exports},props:{question:{type:Object,required:!0},order:{type:Number,required:!0}},computed:{questions:function(){return this.question.questions[0]}},methods:{getAnswerClass:function(e){var t=this.questions.answer;if(r.a.includes(t,e))return"choose-answer--right"}}},d={name:"SingleChoice",mixins:[c]},p=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout",{attrs:{question:e.question,order:e.order},scopedSlots:e._u([{key:"answer",fn:function(){return[n("a-radio-group",{attrs:{"default-value":e.questions.answer[0]}},e._l(e.questions.response_points,(function(t,s){return n("a-radio",{key:s,class:["choose-answer",e.getAnswerClass(t.radio.val)],attrs:{value:t.radio.val}},[n("div",{staticClass:"choose-answer-content"},[n("span",[e._v(e._s(t.radio.val)+".")]),e._v(" "),n("span",{staticClass:"choose-answer-text",domProps:{innerHTML:e._s(t.radio.text)}})])])})),1)]},proxy:!0}])})}),[],!1,null,null,null).exports,m={name:"Choice",mixins:[c]},f=Object(l.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout",{attrs:{question:e.question,order:e.order},scopedSlots:e._u([{key:"answer",fn:function(){return[n("a-checkbox-group",{attrs:{"default-value":e.questions.answer}},e._l(e.questions.response_points,(function(t,s){return n("a-checkbox",{key:s,class:["choose-answer",e.getAnswerClass(t.checkbox.val)],attrs:{value:t.checkbox.val}},[n("div",{staticClass:"choose-answer-content"},[n("span",[e._v(e._s(t.checkbox.val)+".")]),e._v(" "),n("span",{staticClass:"choose-answer-text",domProps:{innerHTML:e._s(t.checkbox.text)}})])])})),1)]},proxy:!0}])})}),[],!1,null,null,null).exports,v={name:"Judge",mixins:[c]},_=Object(l.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout",{attrs:{question:e.question,order:e.order},scopedSlots:e._u([{key:"answer",fn:function(){return[n("a-radio-group",{attrs:{"default-value":e.questions.answer[0]}},e._l(e.questions.response_points,(function(t,s){return n("a-radio",{key:s,class:["choose-answer",e.getAnswerClass(t.radio.val)],attrs:{value:t.radio.val}},[n("div",{staticClass:"choose-answer-content"},[n("span",{staticClass:"choose-answer-text",domProps:{innerHTML:e._s(t.radio.text)}})])])})),1)]},proxy:!0}])})}),[],!1,null,null,null).exports,h={name:"Fill",mixins:[c]},w=Object(l.a)(h,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("layout",{attrs:{question:e.question,order:e.order}})}),[],!1,null,null,null).exports,q={props:{question:{type:Object,required:!0},order:{type:Number,required:!0}},components:{SingleChoice:p,Choice:f,Judge:_,Fill:w},data:function(){return{questionComponents:{single_choice:"SingleChoice",choice:"Choice",uncertain_choice:"Choice",true_false:"Judge",text:"Fill"}}},methods:{currentQuestionComponent:function(e){var t=e&&e[0].answer_mode;return this.questionComponents[t]}}},y=Object(l.a)(q,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.currentQuestionComponent(e.question.questions),{tag:"component",attrs:{question:e.question,order:e.order}})}),[],!1,null,null,null);t.a=y.exports},1352:function(e,t,n){"use strict";var s=n(56),r=n.n(s),a=[{title:"用户名",dataIndex:"user_name",width:"15%"},{title:"做错频次",dataIndex:"wrong_times",width:"15%"},{title:"答题时间",dataIndex:"answer_time",width:"30%",scopedSlots:{customRender:"answer_time"}},{title:"答题结果",dataIndex:"answer",ellipsis:!0,width:"40%",scopedSlots:{customRender:"answer"}}],o={name:"ViewWrongQuestionDetailTable",props:{data:{type:Array,required:!0},loading:{type:Boolean,required:!0},pagination:{type:Object,required:!0}},data:function(){return{columns:a}},methods:{formatAnswer:function(e){return r.a.size(e)?r.a.join(e,","):"未作答"},handleTableChange:function(e){this.$emit("event-communication",{type:"pagination",data:e})}}},i=n(31),u=Object(i.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-table",{attrs:{columns:e.columns,"row-key":function(e){return e.id},"data-source":e.data,pagination:e.pagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"answer_time",fn:function(t){return[e._v("\n    "+e._s(e.$dateFormat(t,"YYYY-MM-DD HH:mm:ss"))+"\n  ")]}},{key:"answer",fn:function(t){return[n("span",{attrs:{title:e.formatAnswer(t)}},[e._v(e._s(e.formatAnswer(t)))])]}}])})}),[],!1,null,null,null);t.a=u.exports},1355:function(e,t,n){"use strict";var s={props:{order:{type:[String,Number],required:!0},stem:{type:String,required:!0}},computed:{formateQuestionStem:function(){var e=this.stem,t=/\[\[\]\]/g;if(!e.match(t))return e;var n=1;return e.replace(t,(function(){return'<span class="stem-fill-blank ph16">('.concat(n++,")</span>")}))}}},r=(n(1322),n(31)),a=Object(r.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"stem"},[n("div",{staticClass:"stem-order"},[e._v(e._s(e.order))]),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.formateQuestionStem)}})])}),[],!1,null,"92dfa7d0",null);t.a=a.exports},1356:function(e,t,n){"use strict";var s={props:{analysis:{type:String,required:!0}}},r=(n(1324),n(31)),a=Object(r.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"clearfix analysis"},[n("div",{staticClass:"pull-left analysis-label"},[e._v("解析：")]),e._v(" "),n("div",{staticClass:"pull-left analysis-content",domProps:{innerHTML:e._s(e.analysis||"无解析")}})])}),[],!1,null,"371e2037",null);t.a=a.exports},1358:function(e,t,n){"use strict";var s=n(56),r=n.n(s),a={props:{question:{type:Object,required:!0}},computed:{rightAnswer:function(){var e=this.question.questions[0],t=e.answer;return"true_false"===e.answer_mode&&(t=r.a.map(t,(function(e){return"T"===e?"正确":"错误"}))),'<span class="success">'.concat(r.a.join(t,"、"),"<span>")}}},o=(n(1323),n(31)),i=Object(o.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"clearfix right-answer"},[n("div",{staticClass:"pull-left right-answer-label"},[e._v("正确答案：")]),e._v(" "),n("div",{staticClass:"pull-left right-answer-content",domProps:{innerHTML:e._s(e.rightAnswer)}})])}),[],!1,null,"4375d75c",null);t.a=i.exports},1366:function(e,t,n){"use strict";var s=n(1325);n.n(s).a},15:function(e,t,n){e.exports=n(495)}}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1303:function(e,t,n){},1304:function(e,t,n){},1305:function(e,t,n){},1309:function(e,t,n){"use strict";var s=n(1303);n.n(s).a},1310:function(e,t,n){"use strict";var s=n(1304);n.n(s).a},1311:function(e,t,n){"use strict";var s=n(1305);n.n(s).a},1312:function(e,t,n){},1334:function(e,t,n){"use strict";var s=n(61),r=n.n(s),a=n(1340),o=n(1337),i=n(1341),u={name:"question-layout",components:{Stem:a.a,RightAnswer:o.a,Analysis:i.a},props:{question:{type:Object,required:!0},order:{type:Number,required:!0}},computed:{questions:function(){return this.question.questions[0]}}},l=(n(1343),n(31)),c={components:{Layout:Object(l.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question-layout",attrs:{order:e.order}},[n("stem",{attrs:{order:e.order,stem:e.questions.stem}}),e._v(" "),n("div",{staticClass:"prevent-click answer-content"},[e._t("answer")],2),e._v(" "),n("right-answer",{attrs:{question:e.question}}),e._v(" "),n("analysis",{attrs:{analysis:e.questions.analysis}})],1)}),[],!1,null,null,null).exports},props:{question:{type:Object,required:!0},order:{type:Number,required:!0}},computed:{questions:function(){return this.question.questions[0]}},methods:{getAnswerClass:function(e){var t=this.questions.answer;if(r.a.includes(t,e))return"choose-answer--right"}}},d={name:"SingleChoice",mixins:[c]},p=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout",{attrs:{question:e.question,order:e.order},scopedSlots:e._u([{key:"answer",fn:function(){return[n("a-radio-group",{attrs:{"default-value":e.questions.answer[0]}},e._l(e.questions.response_points,(function(t,s){return n("a-radio",{key:s,class:["choose-answer",e.getAnswerClass(t.radio.val)],attrs:{value:t.radio.val}},[n("div",{staticClass:"choose-answer-content"},[n("span",[e._v(e._s(t.radio.val)+".")]),e._v(" "),n("span",{staticClass:"choose-answer-text",domProps:{innerHTML:e._s(t.radio.text)}})])])})),1)]},proxy:!0}])})}),[],!1,null,null,null).exports,m={name:"Choice",mixins:[c]},f=Object(l.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout",{attrs:{question:e.question,order:e.order},scopedSlots:e._u([{key:"answer",fn:function(){return[n("a-checkbox-group",{attrs:{"default-value":e.questions.answer}},e._l(e.questions.response_points,(function(t,s){return n("a-checkbox",{key:s,class:["choose-answer",e.getAnswerClass(t.checkbox.val)],attrs:{value:t.checkbox.val}},[n("div",{staticClass:"choose-answer-content"},[n("span",[e._v(e._s(t.checkbox.val)+".")]),e._v(" "),n("span",{staticClass:"choose-answer-text",domProps:{innerHTML:e._s(t.checkbox.text)}})])])})),1)]},proxy:!0}])})}),[],!1,null,null,null).exports,v={name:"Judge",mixins:[c]},_=Object(l.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout",{attrs:{question:e.question,order:e.order},scopedSlots:e._u([{key:"answer",fn:function(){return[n("a-radio-group",{attrs:{"default-value":e.questions.answer[0]}},e._l(e.questions.response_points,(function(t,s){return n("a-radio",{key:s,class:["choose-answer",e.getAnswerClass(t.radio.val)],attrs:{value:t.radio.val}},[n("div",{staticClass:"choose-answer-content"},[n("span",{staticClass:"choose-answer-text",domProps:{innerHTML:e._s(t.radio.text)}})])])})),1)]},proxy:!0}])})}),[],!1,null,null,null).exports,h={name:"Fill",mixins:[c]},w=Object(l.a)(h,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("layout",{attrs:{question:e.question,order:e.order}})}),[],!1,null,null,null).exports,q={props:{question:{type:Object,required:!0},order:{type:Number,required:!0}},components:{SingleChoice:p,Choice:f,Judge:_,Fill:w},data:function(){return{questionComponents:{single_choice:"SingleChoice",choice:"Choice",uncertain_choice:"Choice",true_false:"Judge",text:"Fill"}}},methods:{currentQuestionComponent:function(e){var t=e&&e[0].answer_mode;return this.questionComponents[t]}}},y=Object(l.a)(q,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.currentQuestionComponent(e.question.questions),{tag:"component",attrs:{question:e.question,order:e.order}})}),[],!1,null,null,null);t.a=y.exports},1337:function(e,t,n){"use strict";var s=n(61),r=n.n(s),a={props:{question:{type:Object,required:!0}},computed:{rightAnswer:function(){var e=this.question.questions[0],t=e.answer;return"true_false"===e.answer_mode&&(t=r.a.map(t,(function(e){return"T"===e?"正确":"错误"}))),'<span class="success">'.concat(r.a.join(t,"、"),"<span>")}}},o=(n(1310),n(31)),i=Object(o.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"clearfix right-answer"},[n("div",{staticClass:"pull-left right-answer-label"},[e._v("正确答案：")]),e._v(" "),n("div",{staticClass:"pull-left right-answer-content",domProps:{innerHTML:e._s(e.rightAnswer)}})])}),[],!1,null,"4375d75c",null);t.a=i.exports},1339:function(e,t,n){"use strict";var s=n(61),r=n.n(s),a=[{title:"用户名",dataIndex:"user_name",width:"15%"},{title:"做错频次",dataIndex:"wrong_times",width:"15%"},{title:"答题时间",dataIndex:"answer_time",width:"30%",scopedSlots:{customRender:"answer_time"}},{title:"答题结果",dataIndex:"answer",ellipsis:!0,width:"40%",scopedSlots:{customRender:"answer"}}],o={name:"ViewWrongQuestionDetailTable",props:{data:{type:Array,required:!0},loading:{type:Boolean,required:!0},pagination:{type:Object,required:!0}},data:function(){return{columns:a}},methods:{formatAnswer:function(e){return r.a.size(e)?r.a.join(e,","):"未作答"},handleTableChange:function(e){this.$emit("event-communication",{type:"pagination",data:e})}}},i=n(31),u=Object(i.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-table",{attrs:{columns:e.columns,"row-key":function(e){return e.id},"data-source":e.data,pagination:e.pagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"answer_time",fn:function(t){return[e._v("\n    "+e._s(e.$dateFormat(t,"YYYY-MM-DD HH:mm:ss"))+"\n  ")]}},{key:"answer",fn:function(t){return[n("span",{attrs:{title:e.formatAnswer(t)}},[e._v(e._s(e.formatAnswer(t)))])]}}])})}),[],!1,null,null,null);t.a=u.exports},1340:function(e,t,n){"use strict";var s={props:{order:{type:[String,Number],required:!0},stem:{type:String,required:!0}},computed:{formateQuestionStem:function(){var e=this.stem,t=/\[\[\]\]/g;if(!e.match(t))return e;var n=1;return e.replace(t,(function(){return'<span class="stem-fill-blank ph16">('.concat(n++,")</span>")}))}}},r=(n(1309),n(31)),a=Object(r.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"stem"},[n("div",{staticClass:"stem-order"},[e._v(e._s(e.order))]),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.formateQuestionStem)}})])}),[],!1,null,"92dfa7d0",null);t.a=a.exports},1341:function(e,t,n){"use strict";var s={props:{analysis:{type:String,required:!0}}},r=(n(1311),n(31)),a=Object(r.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"clearfix analysis"},[n("div",{staticClass:"pull-left analysis-label"},[e._v("解析：")]),e._v(" "),n("div",{staticClass:"pull-left analysis-content",domProps:{innerHTML:e._s(e.analysis||"无解析")}})])}),[],!1,null,"371e2037",null);t.a=a.exports},1343:function(e,t,n){"use strict";var s=n(1312);n.n(s).a},15:function(e,t,n){e.exports=n(494)}}]);
>>>>>>> d1125bd0b8762d718dd0dee8d3a5988966016e59
