(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-teacher-teaching-log-teachlog-list-teachlog-list"],{1940:function(e,t,a){"use strict";var s=a("4ea4");a("4160"),a("e25e"),a("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(a("b85c")),r=(s(a("a7d2")),a("8f16")),o=a("cebd"),n={data:function(){return{yearList:[],yearAndSysmeList:[],currSemesterId:null,currSemesterName:null,courseSelList:[],courseSelId:null,courseSelName:null,teachLogList:[],pageobj:{state:"nomore",rows:10,total:0,listState:0},nomoreData0:!1,teaId:null}},onBackPress:function(e){return uni.switchTab({url:"/pages/home/home"}),!0},methods:{getSchools:function(){var e=this;o.request(r.getCurTerm).then((function(t){200==t.status&&(e.yearList=t.datas,e.dealYear(t.datas))}))},dealYear:function(e){var t=this;this.yearAndSysmeList=[],e.forEach((function(e){e.semester&&e.semester.length>0&&e.semester.forEach((function(e){t.yearAndSysmeList.push(e)}))}));var a,s=(0,i.default)(this.yearAndSysmeList);try{for(s.s();!(a=s.n()).done;){var r=a.value;if(r.currSemester){this.currSemesterId=r.id,this.currSemesterName=r.schoolYear+r.semesterName;break}this.currSemesterId=this.yearAndSysmeList[0].id,this.currSemesterName=this.yearAndSysmeList[0].schoolYear+this.yearAndSysmeList[0].semesterName}}catch(o){s.e(o)}finally{s.f()}this.getTeachMobileList()},dropSelectYear:function(e){this.currSemesterName=e.schoolYear+e.semesterName,this.currSemesterId=e.id,this.$refs.rangeDropdownYear.close(),this.getTeachMobileList()},getTeachMobileList:function(){var e=this;o.request(r.teachMobileList,{id:this.currSemesterId}).then((function(t){200==t.status&&(e.courseSelList=t.datas,e.courseSelList.unshift({key:null,value:"课程筛选"}),e.courseSelName=e.courseSelList[0].value,e.courseSelId=e.courseSelList[0].key,e.refreshList())}))},dropSelectCourse:function(e){this.courseSelName=e.value,this.courseSelId=e.key,this.$refs.rangeDropdownCourse.close(),this.refreshList()},getList:function(){var e=this,t={};t.semesterId={matchMode:"equals",value:this.currSemesterId,whereType:"AND"},this.courseSelId?t.courseId={matchMode:"equals",value:this.courseSelId,whereType:"AND"}:delete t.courseSelId,o.request(r.teachMobileClassroomList,{rows:e.pageobj.rows,first:1,filters:t,sortOrder:1}).then((function(t){e.teachLogList=t.datas.data||[],e.pageobj.total=t.datas.totalRecords,0==e.pageobj.listState&&uni.stopPullDownRefresh(),e.teachLogList.length>=t.datas.totalRecords?e.pageobj.state="noMore":e.pageobj.state="more"})).catch((function(t){0==e.pageobj.listState&&uni.stopPullDownRefresh()}))},loadMore:function(){var e=this;this.pageobj.listState=1,this.teachLogList.length<this.pageobj.total?(this.pageobj.rows=this.pageobj.rows+10,this.getList()):(this.nomoreData0=!0,setTimeout((function(){e.nomoreData0=!1}),3e3),this.pageobj.state="nomore")},nav:function(e){this.teaId=e.id,2==e.status?uni.navigateTo({url:"/pages/teacher/teaching-log/teachlog-before/teachlog-before?teaId="+e.id+"&sysemId="+this.currSemesterId+"&courseId="+this.courseSelId}):1==e.status?uni.navigateTo({url:"/pages/teacher/teaching-log/teachlog-after/teachlog-after?teaId="+e.id+"&sysemId="+this.currSemesterId+"&courseId="+this.courseSelId}):uni.navigateTo({url:"/pages/teacher/teaching-log/teachlog-done/teachlog-done?teaId="+e.id+"&sysemId="+this.currSemesterId+"&courseId="+this.courseSelId})},getCurrList:function(){var e=this;o.request(r.getCurTerm).then((function(t){200==t.status&&(e.yearList=t.datas,e.yearAndSysmeList=[],e.yearList.forEach((function(t){t.semester&&t.semester.length>0&&t.semester.forEach((function(t){e.yearAndSysmeList.push(t)}))})),setTimeout((function(){var t,a=null,s=null,n=(0,i.default)(e.yearAndSysmeList);try{for(n.s();!(t=n.n()).done;){var l=t.value;if(l.id==e.currSemesterId){a=l.id,s=l.schoolYear+l.semesterName;break}a=e.yearAndSysmeList[0].id,s=e.yearAndSysmeList[0].schoolYear+e.yearAndSysmeList[0].semesterName}}catch(c){n.e(c)}finally{n.f()}e.currSemesterId=a,e.currSemesterName=s,parseInt(e.courseSelId)?o.request(r.teachMobileList,{id:e.currSemesterId}).then((function(t){200==t.status&&(e.courseSelList=t.datas,e.courseSelList.unshift({key:null,value:"课程筛选"}),e.courseSelList.forEach((function(t){e.courseSelId==t.key&&(e.courseSelName=t.value)})),e.getList())})):e.getTeachMobileList()}),300))}))},refreshList:function(){this.teachLogList=[],this.pageobj={state:"nomore",rows:10,total:0,listState:0},this.getList()},navBackFun:function(e){e.isSellBack&&(this.currSemesterId?this.getCurrList():this.getSchools(),this.pageobj={state:"nomore",rows:10,total:0,listState:0})}},onLoad:function(){this.currSemesterId?this.getCurrList():this.getSchools(),this.pageobj={state:"nomore",rows:10,total:0,listState:0}},onPullDownRefresh:function(){this.refreshList()},onReachBottom:function(){this.loadMore()}};t.default=n},"4f0d":function(e,t,a){"use strict";a.r(t);var s=a("1940"),i=a.n(s);for(var r in s)"default"!==r&&function(e){a.d(t,e,(function(){return s[e]}))}(r);t["default"]=i.a},"786f":function(e,t,a){"use strict";a.r(t);var s=a("9db8"),i=a("4f0d");for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("d340");var o,n=a("f0c5"),l=Object(n["a"])(i["default"],s["b"],s["c"],!1,null,"4a1339ea",null,!1,s["a"],o);t["default"]=l.exports},"86c8":function(e,t,a){var s=a("d803");"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var i=a("4f06").default;i("77fd52d5",s,!0,{sourceMap:!1,shadowMode:!1})},"9db8":function(e,t,a){"use strict";var s;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return s}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"header"},[a("v-uni-view",{staticClass:"headSel",staticStyle:{"border-right":"1px solid #f8f8f8"}},[a("dropdown-menu",{staticClass:"drop"},[a("dropdown-item",{ref:"rangeDropdownYear",attrs:{title:e.currSemesterName}},e._l(e.yearAndSysmeList,(function(t){return a("v-uni-view",{staticClass:"item-dro",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.dropSelectYear(t)}}},[e._v(e._s(t.schoolYear+t.semesterName))])})),1)],1)],1),a("v-uni-view",{staticClass:"headSel"},[a("dropdown-menu",{staticClass:"drop"},[a("dropdown-item",{ref:"rangeDropdownCourse",attrs:{title:e.courseSelName}},e._l(e.courseSelList,(function(t){return a("v-uni-view",{staticClass:"item-dro1",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.dropSelectCourse(t)}}},[e._v(e._s(t.value))])})),1)],1)],1)],1),e.teachLogList.length>0?a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"table01"},e._l(e.teachLogList,(function(t){return a("v-uni-view",{staticClass:"tr01"},[a("v-uni-view",{staticClass:"td01 f-overflow-1"},[e._v(e._s(t.classRoomName))]),a("v-uni-view",{staticClass:"td01 f-14"},[e._v("上课时间："+e._s(t.timetableDate)+" "+e._s(t.selectBeginTime)+"~"+e._s(t.selectEndTime))]),a("v-uni-view",{staticClass:"flex",staticStyle:{"justify-content":"space-between"}},[a("v-uni-view",{staticClass:"td01 f-14"},[e._v("状态："),2==t.status?a("v-uni-text",{staticClass:"text"},[e._v("课前")]):1==t.status?a("v-uni-text",{staticClass:"text"},[e._v("课后")]):a("v-uni-text",{staticClass:"text"},[e._v("已完成")])],1),a("v-uni-view",{staticClass:"td01"},[a("v-uni-text",{staticClass:"fillin",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.nav(t)}}},[e._v("填写")])],1)],1)],1)})),1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.nomoreData0&&e.teachLogList.length>0,expression:"nomoreData0 && teachLogList.length > 0"}],staticClass:"nomore"},[e._v("没有更多数据了~")])],1):e._e(),e.teachLogList.length<=0?a("v-uni-view",{staticClass:"nodate_allheight"},[a("v-uni-image",{staticClass:"nodate_img",attrs:{src:"/static/images/bigequip/wushuju@2x.png"}}),a("v-uni-view",{staticClass:"nodate_text"},[e._v("暂无数据")])],1):e._e()],1)},r=[]},d340:function(e,t,a){"use strict";var s=a("86c8"),i=a.n(s);i.a},d803:function(e,t,a){var s=a("24fb");t=s(!1),t.push([e.i,".header[data-v-4a1339ea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#fff;position:fixed;width:100%;z-index:1}.header .headSel[data-v-4a1339ea]{width:50%}.header .drop[data-v-4a1339ea]{width:100%}.item-dro[data-v-4a1339ea]{line-height:40px;height:40px;display:block;float:left;width:100%;text-align:center;color:#737373}.item-dro1[data-v-4a1339ea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:40px;float:left;width:100%;text-align:center;color:#737373;word-break:break-word; /*换行模式 */overflow:hidden;text-overflow:ellipsis; /*修剪文字 */-webkit-line-clamp:2; /*此处为上限行数 */-webkit-box-orient:vertical}[data-v-4a1339ea] .dropdown-menu .dropdown-menu-head .item .title{font-size:%?28?%;color:#737373}[data-v-4a1339ea] .dropdown-menu .dropdown-menu-head .item.selected .title{color:#737373}[data-v-4a1339ea] .dropdown-menu .dropdown-menu-head .item .title:after{border-color:transparent transparent #737373 #737373}.list[data-v-4a1339ea]{padding:%?90?% %?20?% %?20?%;border-radius:%?10?%}\n/* 表格 */.table01[data-v-4a1339ea]{width:100%;margin:0 auto %?10?%;table-layout:fixed}.th01[data-v-4a1339ea]{width:100%}.tr01[data-v-4a1339ea]{width:100%;background:#fff;margin-bottom:%?20?%;padding:%?20?%;border-radius:%?10?%}.th01 .td01[data-v-4a1339ea]{text-align:left;height:%?80?%;border-top:1px solid #f2f2f2;border-bottom:1px solid #f2f2f2;font-size:%?30?%;padding:0 %?16?%;color:#4d4d4d;vertical-align:middle;background-color:#e6e6e6}.tr01 .td01[data-v-4a1339ea]{text-align:left;height:%?60?%;line-height:%?60?%;font-size:%?32?%;color:#1a1a1a;vertical-align:middle}.tr01 .td01 .text[data-v-4a1339ea]{color:#f39800;padding-left:%?50?%}.w17[data-v-4a1339ea]{width:17%!important}.w43[data-v-4a1339ea]{width:43%!important}.fillin[data-v-4a1339ea]{display:inline-block;height:%?60?%;line-height:%?60?%;text-align:center;width:%?140?%;background-color:#0369d6;color:#fff;font-size:%?28?%;border-radius:%?10?%}",""]),e.exports=t}}]);