(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{127:function(e,t,n){e.exports=n(515)},1305:function(e,t,n){"use strict";n.r(t);var a=n(338),i=n.n(a),s=n(441),o=n.n(s),r=n(1326),c=[{title:Translator.trans("live_name"),dataIndex:"title"},{title:Translator.trans("live_statistics.presenter"),dataIndex:"anchor"},{title:Translator.trans("live_playback_duration"),dataIndex:"liveTime"},{title:Translator.trans("live_statistics.live_time"),dataIndex:"liveStartTime"},{title:Translator.trans("live_statistics.operation"),scopedSlots:{customRender:"actions"}}],l={name:"CoursesetManageLivePlayback",data:function(){return{data:[],columns:c,pagination:{hideOnSinglePage:!0,current:1,pageSize:10,total:0},selectedRowKeys:[],loading:!1,visible:!1,btnLoading:!1,currentId:void 0,checked:!1,courseId:$(".js-course-id").val()}},computed:{hasSelected:function(){return this.selectedRowKeys.length>0}},mounted:function(){this.fetchLiveReplay()},methods:{fetchLiveReplay:function(){var e=this;return o()(i.a.mark((function t(){var n,a,s,o,c,l,d;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,n=e.pagination,a=n.current,s=n.pageSize,o={params:{offset:(a-1)*s,limit:s,courseId:e.courseId}},t.next=5,r.j.get(o);case 5:c=t.sent,l=c.data,d=c.paging,e.loading=!1,e.pagination.total=d.total,e.data=l;case 11:case"end":return t.stop()}}),t)})))()},handleTableChange:function(e){this.pagination.current=e.current,this.fetchLiveReplay()},onSelectChange:function(e){this.selectedRowKeys=e},showModal:function(e){this.currentId=[e],this.visible=!0},hiddenModal:function(){this.visible=!1},handleClickRemove:function(){this.currentId=this.selectedRowKeys,this.visible=!0},handleClickRemoveLivePlayback:function(){var e=this;return o()(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.btnLoading=!0,n={data:{ids:e.currentId,realDelete:e.checked}},t.next=4,r.j.delete(n);case 4:a=t.sent,a.success&&(e.$message.success(Translator.trans("message.removal_succeeded")),e.btnLoading=!1,e.visible=!1,e.pagination.current=1,e.fetchLiveReplay());case 7:case"end":return t.stop()}}),t)})))()},handleChange:function(e){this.checked=e.target.checked},handleClickViewLivePlayback:function(e){window.open(e)}}},d=n(30),u=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"mb16"},[n("a-button",{attrs:{type:"danger",disabled:!e.hasSelected},on:{click:e.handleClickRemove}},[e._v("\n      "+e._s(e._f("trans")("site.btn.remove_playback"))+"\n    ")])],1),e._v(" "),n("a-table",{attrs:{"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},columns:e.columns,"row-key":function(e){return e.id},"data-source":e.data,pagination:e.pagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"actions",fn:function(t){return[n("a-button-group",[n("a-button",{staticStyle:{padding:"0 8px"},attrs:{type:"primary"},on:{click:function(n){return e.handleClickViewLivePlayback(t.url)}}},[e._v("\n          "+e._s(e._f("trans")("site.btn.view_playback"))+"\n        ")]),e._v(" "),n("a-dropdown",{attrs:{placement:"bottomRight"}},[n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",{on:{click:function(n){return e.showModal(t.id)}}},[e._v("\n              "+e._s(e._f("trans")("site.btn.remove_playback"))+"\n            ")])],1),e._v(" "),n("a-button",{staticStyle:{padding:"0 8px"},attrs:{type:"primary"}},[n("a-icon",{attrs:{type:"down"}})],1)],1)],1)]}}])}),e._v(" "),n("a-modal",{attrs:{title:e._f("trans")("site.btn.remove_playback"),visible:e.visible},on:{cancel:e.hiddenModal}},[e._v("\n    "+e._s(e._f("trans")("live.playback.tip.remove_association"))+"\n    "),n("a-checkbox",{staticClass:"mt8",attrs:{checked:e.checked},on:{change:e.handleChange}},[e._v("\n      "+e._s(e._f("trans")("live.playback.tip.delete_related_live_playback"))+"\n    ")]),e._v(" "),n("template",{slot:"footer"},[n("div",{staticClass:"clearfix"},[n("span",{staticClass:"pull-left",staticStyle:{color:"#fe4040","margin-top":"7px"}},[e._v(e._s(e._f("trans")("live.playback.tip.cannot_be_used_normally")))]),e._v(" "),n("a-button",{attrs:{type:"danger",loading:e.btnLoading},on:{click:e.handleClickRemoveLivePlayback}},[e._v("\n          "+e._s(e._f("trans")("site.btn.confirm"))+"\n        ")])],1)])],2)],1)}),[],!1,null,null,null);t.default=u.exports},1329:function(e,t,n){n(1330),e.exports=n(48).Reflect.deleteProperty},1330:function(e,t,n){var a=n(78),i=n(181).f,s=n(132);a(a.S,"Reflect",{deleteProperty:function(e,t){var n=i(s(e),t);return!(n&&!n.configurable)&&delete e[t]}})},1335:function(e,t,n){e.exports=n(1329)},2:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},3:function(e,t,n){var a=n(127);function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),a(e,i.key,i)}}e.exports=function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}}]);