/*! For license information please see index.js.LICENSE.txt */
!function(t){function e(e){for(var i,s,a=e[0],l=e[1],u=e[2],h=0,d=[];h<a.length;h++)s=a[h],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);for(c&&c(e);d.length;)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},o={166:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/static-dist/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var c=l;r.push([1415,0]),n()}({111:function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));var i=n(6),o=n.n(i),r=n(33),s=n.n(r),a=n(2),l=n.n(a),u=n(3),c=n.n(u),h=n(12),d=n.n(h),p=n(13),f=n.n(p),g=n(9),y=n.n(g),m=n(21),w=(n(226),n(136)),v=n(138);function k(t){var e=function(){if("undefined"==typeof Reflect||!o.a)return!1;if(o.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(o()(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=y()(t);if(e){var r=y()(this).constructor;n=o()(i,arguments,r)}else n=i.apply(this,arguments);return f()(this,n)}}var _=function(t){d()(n,t);var e=k(n);function n(t){var i;return l()(this,n),(i=e.call(this))._options=t,i._initConfig(),i.chapterAnimate(),i._displayAllImmediately?i._displayCurrentPageDataAndSwitchToNext():i._initUpLoading(),i}return c()(n,[{key:"toggleIcon",value:function(t,e,n){var i=this;return new s.a((function(o,r){var s=t.find(".js-remove-icon");t.find(".js-remove-text");s.hasClass(e)?(s.removeClass(e).addClass(n),0==$(".js-only-display-one-page").length&&i._displayCurrentPageDataAndSwitchToNext()):s.removeClass(n).addClass(e),o()}))}},{key:"_destroy",value:function(){this._options.data=[];var t=$(".js-sidebar-pane");t.length&&t[0].removeEventListener("scroll","debounce",!1)}},{key:"chapterAnimate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"body",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".js-task-chapter",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"es-icon-remove",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"es-icon-anonymous-iconfont",o=this;$(t).off("click",e).on("click",e,(function(t){var r=$(t.currentTarget);o.toggleIcon(r,n,i).then((function(){r.nextUntil(e).animate({height:"toggle",opacity:"toggle"},"normal")}))}))}},{key:"_initUpLoading",value:function(){if(0!=$(".js-down-loading-more").length)var t=this,e=new Waypoint({element:$(".js-down-loading-more")[0],handler:function(n){"down"==n&&(t._isLastPage||t._canNotDisplayMore()?e.disable():(t._scrollToBottom(),e.disable(),t._displayCurrentPageDataAndSwitchToNext(),Waypoint.refreshAll(),e.enable()))},offset:"bottom-in-view"})}},{key:"_initConfig",value:function(){this._currentPage=1,this._displayAllImmediately=!!this._options.displayAllImmediately,this._displayAllImmediately?this._pageSize=1e4:this._pageSize=this._options.pageSize?this._options.pageSize:25,this._pageSize>25&&0!=$(".js-only-display-one-page").length&&(this._pageSize=25),this._afterFirstLoad=this._options.afterFirstLoad?this._options.afterFirstLoad:null,this._isFirstLoad=!0,this._options.displayItem?(this._displayItemDisplayed=!1,this._displayItem=this._options.displayItem):(this._displayItemDisplayed=!0,this._displayItem=null),this._isLastPage=!1}},{key:"_displayCurrentPageDataAndSwitchToNext",value:function(){this._displayData(),this._isLastPage||this._currentPage++,this._isFirstLoad&&(this._displayItemDisplayed?(this._isFirstLoad=!1,this._afterFirstLoad&&this._afterFirstLoad()):this._displayCurrentPageDataAndSwitchToNext())}},{key:"_displayData",value:function(){if(!this._isLastPage)for(var t=this._getStartIndex(),e=0;e<this._pageSize;e++){var n=this._options.data[e+t];if(!this._displayItemDisplayed){var i=this._displayItem.key,o=this._displayItem.value;n[i]==o&&(this._displayItemDisplayed=!0)}Object(m.d)(n)?this._isLastPage=!0:this._generateSingleCachedData(n)}}},{key:"_scrollToBottom",value:function(){var t=this,e=this,n=$(".js-sidebar-pane");if(n.length){var i=n[0],o=n.height(),r=i.scrollHeight,s=i.scrollTop;e._afterFirstLoad&&i.addEventListener("scroll",Object(v.a)((function(){s+o>=r&&!t._isLastPage&&e._displayCurrentPageDataAndSwitchToNext()}),500,!0))}}},{key:"_generateSingleCachedData",value:function(t){var e=this._options.dataTemplateNode,n=this._options.wrapDom?this._options.wrapDom.find(e).html():$(e).html(),i=t,o=this,r=n.replace(/({\w+})/g,(function(t){return o._replace(t,i,"{","}")}));r=r.replace(/(%7B\w+%7D)/g,(function(t){return o._replace(t,i,"%7B","%7D")}));var s=$("<div>").append(r);this._removeUnNeedNodes(s),(this._options.wrapDom?this._options.wrapDom.find(".infinite-container"):$(".infinite-container")).append(s.html())}},{key:"_getStartIndex",value:function(){return(this._currentPage-1)*this._pageSize}},{key:"_replace",value:function(t,e,n,i){var o=t.split(n)[1].split(i)[0],r=this._options.context;return"function"==typeof r[o]?r[o](e,r):void 0!==e[o]?e[o]:t}},{key:"_canNotDisplayMore",value:function(){return 1!=this._currentPage&&0!=$(".js-only-display-one-page").length}},{key:"_removeUnNeedNodes",value:function(t){t.find("[display-if=false]").remove(),t.find("[display-if=0]").remove(),t.find("[hide-if=1]").remove(),t.find("[hide-if=true]").remove(),t.find("tmp :first-child").each((function(){var t=$(this).parent();t.hasClass("js-ignore-remove")||"TMP"!=t[0].nodeName||$(this).unwrap()}))}}]),n}(w.a)},1415:function(t,e,n){"use strict";n.r(e);var i=n(2),o=n.n(i),r=n(3),s=n.n(r),a=(n(317),n(336));new(function(){function t(e){o()(this,t),this.$element=e,this.initEvent()}return s()(t,[{key:"initEvent",value:function(){var t=this;this.$element.on("click",".es-icon-keyboardarrowdown",(function(e){return t.onExpandCourse(e)})),this.$element.on("click",".es-icon-keyboardarrowup",(function(e){return t.onCollapseCourse(e)})),this.triggerMemberExpired()}},{key:"triggerMemberExpired",value:function(){$(".member-expire").length&&$(".member-expire a").trigger("click")}},{key:"onExpandCourse",value:function(t){var e=$(t.currentTarget),n=e.parents(".course-item"),i=e.parents(".media").siblings(".js-tasks-list");i.length>0?this._lessonListShow(i):$.get(e.data("lessonUrl"),{visibility:0},(function(t){n.append(t),new a.a({wrapTarget:n,target:n})}));var o=n.siblings().find(".es-icon-keyboardarrowup");this._lessonListShow(o.parents(".media").siblings(".js-tasks-list"));var r=n.find(".js-all-courses-link"),s=n.siblings().find(".js-all-courses-link");r.length&&r.removeClass("hidden"),this.hideLink(s),o.removeClass("es-icon-keyboardarrowup").addClass("es-icon-keyboardarrowdown"),e.addClass("es-icon-keyboardarrowup").removeClass("es-icon-keyboardarrowdown")}},{key:"onCollapseCourse",value:function(t){var e=$(t.currentTarget),n=e.parents(".course-item").find(".js-all-courses-link");this.hideLink(n),this._lessonListShow(e.parents(".media").siblings(".js-tasks-list")),e.addClass("es-icon-keyboardarrowdown").removeClass("es-icon-keyboardarrowup")}},{key:"hideLink",value:function(t){t.length&&t.addClass("hidden")}},{key:"_lessonListShow",value:function(t){t.length>0&&(t.animate({visibility:"toggle",opacity:"toggle",easing:"linear"}),t.height())}}]),t}())($(".class-course-list"))},175:function(t,e,n){"use strict";var i=n(10),o=n.n(i),r=n(2),s=n.n(r),a=n(3),l=n.n(a),u=n(111),c=n(21),h=function(){function t(e){s()(this,t),void 0===e&&(e={}),this._init(e)}return l()(t,[{key:"_init",value:function(t){var e=$.extend(this._getDefaultOptions(t),t);e.wrapDom=t.wrapTarget,e.pageSize=this._getPageSizeByMaxLessonsNumOfChapter(e),new u.a(e),this._displayAllImmediately&&this._destroyPaging()}},{key:"_getPageSizeByMaxLessonsNumOfChapter",value:function(t){var e=t.data;if(!Object(c.d)(e)){var n=0,i=0;return e.forEach((function(e){t.context.isChapter(e)?(n=i>n?i:n,i=0):i++})),n<25?25:n+1}}},{key:"_getDefaultOptions",value:function(t){var e=this._wrapTarget(t.wrapTarget,".js-hidden-cached-data"),n=this._wrapTarget(t.wrapTarget,".js-hidden-course-info"),i=this._wrapTarget(t.wrapTarget,".js-hidden-i18n"),r=this._wrapTarget(t.wrapTarget,".js-hidden-activity-metas"),s=this._wrapTarget(t.wrapTarget,".js-hidden-current-timestamp");return{data:this._toJson(e.html()),context:{course:this._toJson(n.html()),i18n:this._toJson(i.html()),metas:this._toJson(r.html()),currentTimeStamp:o()(s.html(),10),isChapter:function(t,e){return"chapter"==t.itemType},isUnit:function(t,e){return"unit"==t.itemType},isLesson:function(t,e){return"lesson"==t.itemType},isTask:function(t,e){return"task"==t.itemType},getChapterName:function(t,e){return Translator.trans("course.chapter",{chapter_name:e.i18n.i18nChapterName,number:t.number,title:t.title,colon:t.title?":":""})},getUnitName:function(t,e){return Translator.trans("course.unit",{part_name:e.i18n.i18nUnitName,number:t.number,title:t.title,colon:t.title?":":""})},getLessonName:function(t,e){return e.isItemDisplayedAsOptional(t,e)?t.title:Translator.trans("course.lesson",{part_name:e.i18n.i18nLessonName,number:e.getLessonNum(t,e),title:t.title})},isItemDisplayedAsOptionalOrUnpublished:function(t,e){return e.isItemDisplayedAsOptional(t,e)||e.isItemDisplayedAsUnpublished(t,e)},isItemDisplayedAsOptional:function(t,e){return"1"==t.isOptional&&e.isLessonNode(t,e)},isItemDisplayedAsUnpublished:function(t,e){return!e.isPublished(t,e)&&e.isLessonNode(t,e)},isLessonNode:function(t,e){return"task"==t.itemType&&t.isSingleTaskLesson||"lesson"==t.itemType&&!t.isSingleTaskLesson},getTaskName:function(t,e){return t.isSingleTaskLesson?"1"==t.isOptional?t.title:Translator.trans("course.lesson",{part_name:e.i18n.i18nLessonName,number:e.getLessonNum(t,e),title:t.title}):Translator.trans("course.catalogue.task_status.task",{taskName:e.i18n.i18nTaskName,taskNumber:t.number,taskTitle:t.title})},hasWatchLimitRemaining:function(t,e){return!1!==t.watchLimitRemaining},highlightTaskClass:function(t,e){return t.taskId==e.course.currentTaskId?"active":""},taskClass:function(t,e){var n="es-icon left-menu";return e.isTaskLocked(t,e)?n+=" es-icon-lock":""==t.result||"false"==e.course.isMember?n+=" es-icon-undone-check color-gray":"start"==t.resultStatus?n+=" es-icon-doing color-primary":"finish"==t.resultStatus&&(n+=" es-icon-iccheckcircleblack24px color-primary"),n},lessonContainerClass:function(t,e){var n="color-gray";return e.isTask(t,e)?t.isSingleTaskLesson?n:"":e.isLesson(t,e)?n:void 0},isTaskLocked:function(t,e){return"lockMode"==e.course.learnMode&&t.lock},isPublished:function(t,e){return"published"==t.status},isPublishedTaskUnlocked:function(t,e){return e.isPublished(t,e)&&!e.isTaskLocked(t,e)},isCloudVideo:function(t,e){return"video"==t.type&&"cloud"==t.fileStorage},getMetaIcon:function(t,e){return void 0!==e.metas[t.type]?e.metas[t.type].icon:""},getMetaName:function(t,e){return void 0!==e.metas[t.type]?e.metas[t.type].name:""},isLiveReplayGenerated:function(t,e){return"ungenerated"!=t.replayStatus},isLive:function(t,e){return"live"==t.type},isLiveNotStarted:function(t,e){return e.isLive(t,e)&&"created"===t.liveStatus},isLiveStarting:function(t,e){return e.isLive(t,e)&&"live"===t.liveStatus},isLiveFinished:function(t,e){return e.isLive(t,e)&&"closed"===t.liveStatus},toInt:function(t){return o()(t,10)},getLessonNum:function(t,e){var n=t.number;return"1"==e.course.isHideUnpublish&&(n=t.published_number),n}},dataTemplateNode:".js-infinite-item-template"}}},{key:"_wrapTarget",value:function(t,e){return t?t.find(e):$(e)}},{key:"_destroyPaging",value:function(){for(var t=["js-infinite-item-template","js-hidden-cached-data","js-hidden-course-info","js-hidden-i18n","js-hidden-activity-metas","js-hidden-current-timestamp","infinite-container","js-down-loading-more"],e=0;e<t.length;e++)$("."+t[e]).removeClass(t[e])}},{key:"_toJson",value:function(t){var e={};return t&&(e=$.parseJSON(t.replace(/[\r\n\t]/g,""))),e}}]),t}();e.a=h},226:function(t,e){!function(){"use strict";function t(i){if(!i)throw new Error("No options passed to Waypoint constructor");if(!i.element)throw new Error("No element option passed to Waypoint constructor");if(!i.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,i),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=i.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),n[this.key]=this,e+=1}var e=0,n={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete n[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var i in n)e.push(n[i]);for(var o=0,r=e.length;r>o;o++)e[o][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){for(var e in t.Context.refreshAll(),n)n[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=o.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+n,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,i[t.waypointContextKey]=this,n+=1,o.windowContext||(o.windowContext=!0,o.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var n=0,i={},o=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),n=this.element==this.element.window;t&&e&&!n&&(this.adapter.off(".waypoints"),delete i[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",(function(){e.didResize||(e.didResize=!0,o.requestAnimationFrame(t))}))},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",(function(){(!e.didScroll||o.isTouch)&&(e.didScroll=!0,o.requestAnimationFrame(t))}))},e.prototype.handleResize=function(){o.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var n in e){var i=e[n],o=i.newScroll>i.oldScroll?i.forward:i.backward;for(var r in this.waypoints[n]){var s=this.waypoints[n][r];if(null!==s.triggerPoint){var a=i.oldScroll<s.triggerPoint,l=i.newScroll>=s.triggerPoint;(a&&l||!a&&!l)&&(s.queueTrigger(o),t[s.group.id]=s.group)}}}for(var u in t)t[u].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?o.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?o.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var n in this.waypoints[e])t.push(this.waypoints[e][n]);for(var i=0,o=t.length;o>i;i++)t[i].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,n=e?void 0:this.adapter.offset(),i={};for(var r in this.handleScroll(),t={horizontal:{contextOffset:e?0:n.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:n.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var s=t[r];for(var a in this.waypoints[r]){var l,u,c,h,d=this.waypoints[r][a],p=d.options.offset,f=d.triggerPoint,g=0,y=null==f;d.element!==d.element.window&&(g=d.adapter.offset()[s.offsetProp]),"function"==typeof p?p=p.apply(d):"string"==typeof p&&(p=parseFloat(p),d.options.offset.indexOf("%")>-1&&(p=Math.ceil(s.contextDimension*p/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(g+l-p),u=f<s.oldScroll,c=d.triggerPoint>=s.oldScroll,h=!u&&!c,!y&&(u&&c)?(d.queueTrigger(s.backward),i[d.group.id]=d.group):(!y&&h||y&&s.oldScroll>=d.triggerPoint)&&(d.queueTrigger(s.forward),i[d.group.id]=d.group)}}return o.requestAnimationFrame((function(){for(var t in i)i[t].flushTriggers()})),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in i)i[t].refresh()},e.findByElement=function(t){return i[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},o.requestAnimationFrame=function(e){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t).call(window,e)},o.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function n(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),i[this.axis][this.name]=this}var i={vertical:{},horizontal:{}},o=window.Waypoint;n.prototype.add=function(t){this.waypoints.push(t)},n.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},n.prototype.flushTriggers=function(){for(var n in this.triggerQueues){var i=this.triggerQueues[n],o="up"===n||"left"===n;i.sort(o?e:t);for(var r=0,s=i.length;s>r;r+=1){var a=i[r];(a.options.continuous||r===i.length-1)&&a.trigger([n])}}this.clearTriggerQueues()},n.prototype.next=function(e){this.waypoints.sort(t);var n=o.Adapter.inArray(e,this.waypoints);return n===this.waypoints.length-1?null:this.waypoints[n+1]},n.prototype.previous=function(e){this.waypoints.sort(t);var n=o.Adapter.inArray(e,this.waypoints);return n?this.waypoints[n-1]:null},n.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},n.prototype.remove=function(t){var e=o.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},n.prototype.first=function(){return this.waypoints[0]},n.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},n.findOrCreate=function(t){return i[t.axis][t.name]||new n(t)},o.Group=n}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,n=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],(function(e,n){t.prototype[n]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[n].apply(this.$element,t)}})),e.each(["extend","inArray","isEmptyObject"],(function(n,i){t[i]=e[i]})),n.adapters.push({name:"jquery",Adapter:t}),n.Adapter=t}(),function(){"use strict";function t(t){return function(){var n=[],i=arguments[0];return t.isFunction(arguments[0])&&((i=t.extend({},arguments[1])).handler=arguments[0]),this.each((function(){var o=t.extend({},i,{element:this});"string"==typeof o.context&&(o.context=t(this).closest(o.context)[0]),n.push(new e(o))})),n}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}()},317:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o}));var i=function(t,e,n){var i=t.find(".js-remove-icon"),o=t.find(".js-remove-text");i.hasClass(e)?(i.removeClass(e).addClass(n),o&&o.text(Translator.trans("收起"))):(i.removeClass(n).addClass(e),o&&o.text(Translator.trans("展开")))},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"body",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".js-task-chapter",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"es-icon-remove",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"es-icon-anonymous-iconfont";$(t).on("click",e,(function(t){var r=$(t.currentTarget);r.nextUntil(e).animate({height:"toggle",opacity:"toggle"},"normal"),i(r,n,o)}))}},336:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));var i=n(6),o=n.n(i),r=n(2),s=n.n(r),a=n(3),l=n.n(a),u=n(12),c=n.n(u),h=n(13),d=n.n(h),p=n(9),f=n.n(p),g=n(175),y=n(111);function m(t){var e=function(){if("undefined"==typeof Reflect||!o.a)return!1;if(o.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(o()(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=f()(t);if(e){var r=f()(this).constructor;n=o()(i,arguments,r)}else n=i.apply(this,arguments);return d()(this,n)}}var w=function(t){c()(n,t);var e=m(n);function n(){return s()(this,n),e.apply(this,arguments)}return l()(n,[{key:"_init",value:function(t){var e=this;$('input[name="showOptional"]').length>0&&("true"==window.localStorage.getItem("showOptional")&&$('input[name="showOptional"]').attr("checked","checked"),$('input[name="showOptional"]').change((function(){window.localStorage.setItem("showOptional",$('input[name="showOptional"]').is(":checked")),window.location.reload()})));var n=t.target?t.target.find(".js-tasks-show"):$(".js-tasks-show");if(n.length){var i=$('input[name="showOptional"]').length>0?{showOptional:window.localStorage.getItem("showOptional")}:{};$.get(n.data("url"),i,(function(i){n.html(i);var o=$.extend(e._getDefaultOptions(t),t);o.wrapDom=t.wrapTarget,o.pageSize=e._getPageSizeByMaxLessonsNumOfChapter(o),e.cachedScroll=new y.a(o),e._displayAllImmediately&&e._destroyPaging(),$(".course-tasks-show-more").length<1||o.data.length&&o.data.length>25&&$(".course-tasks-show-more").removeClass("hidden")})),$("body").on("click",".js-lesson-item-notify",(function(){var t=$(this);cd.message({type:"warning",message:t.data("notifyMessage")})}))}}},{key:"_destroy",value:function(){this.cachedScroll._destroy()}}]),n}(g.a)}});