(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-teacher-teaching-log-teachlog-done-teachlog-done"],{2563:function(t,e,a){"use strict";a.r(e);var i=a("94c1"),s=a("c7f5");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("a7a9");var o,c=a("f0c5"),v=Object(c["a"])(s["default"],i["b"],i["c"],!1,null,"837b36f0",null,!1,i["a"],o);e["default"]=v.exports},6265:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".blockone[data-v-837b36f0]{background-color:#fff;padding:%?20?%;margin:%?20?% 0}.blockone .rows[data-v-837b36f0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;margin-bottom:%?10?%}.blockone .rows .rowtitle[data-v-837b36f0]{width:28%}.blockone .rows .rowcontent[data-v-837b36f0]{width:76%}.imgbox[data-v-837b36f0]{position:relative;float:left;margin-left:%?20?%}\n\t\n\t/* 报修设备列表 */.repairitem[data-v-837b36f0]{padding:4px;margin-bottom:6px;border-bottom:1px solid #f2f2f2}.repairitem_one[data-v-837b36f0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.repairitem_one uni-text[data-v-837b36f0]{font-size:%?22?%}.repairitem_two[data-v-837b36f0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin:%?10?% 0}.repairitem_two .repairlabel[data-v-837b36f0]{width:22%;font-size:%?22?%}.repairitem_two .repaircont[data-v-837b36f0]{width:78%;font-size:%?22?%}\n\t\n\t/* 表格2 */.table03[data-v-837b36f0]{display:table;width:98%;background:#fff;margin:7px auto 0;table-layout:fixed}.th03[data-v-837b36f0]{display:table-row;width:100%}.tr03[data-v-837b36f0]{display:table-row;width:100%}.th03 .td03[data-v-837b36f0]{display:table-cell;text-align:center;height:%?60?%;width:20%;border-top:1px solid #f2f2f2;border-bottom:1px solid #f2f2f2;font-size:%?24?%;padding:0 %?16?%;color:#333;vertical-align:middle}.tr03 .td03[data-v-837b36f0]{display:table-cell;text-align:center;height:%?60?%;width:20%;border-bottom:1px solid #f2f2f2;font-size:%?24?%;padding:0 %?16?%;color:#333;vertical-align:middle}.w20[data-v-837b36f0]{width:20%!important}.w25[data-v-837b36f0]{width:25%!important}.w15[data-v-837b36f0]{width:15%!important}.w30[data-v-837b36f0]{width:30%!important}.w40[data-v-837b36f0]{width:40%!important}.redtxt[data-v-837b36f0]{color:red;margin-right:%?6?%}",""]),t.exports=e},"94c1":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"blockone"},[a("v-uni-view",{staticClass:"rows"},[a("v-uni-view",{staticClass:"rowtitle"},[a("v-uni-text",{staticClass:"redtxt"},[t._v("*")]),t._v("课堂名称：")],1),a("v-uni-view",{staticClass:"rowcontent"},[t._v(t._s(t.teachLogData.classRoomName))])],1),a("v-uni-view",{staticClass:"rows"},[a("v-uni-view",{staticClass:"rowtitle"},[a("v-uni-text",{staticClass:"redtxt"},[t._v("*")]),t._v("班级：")],1),a("v-uni-view",{staticClass:"rowcontent"},[t._v(t._s(t.teachLogData.className))])],1),a("v-uni-view",{staticClass:"rows"},[a("v-uni-view",{staticClass:"rowtitle"},[a("v-uni-text",{staticClass:"redtxt"},[t._v("*")]),t._v("教师：")],1),a("v-uni-view",{staticClass:"rowcontent"},[t._v(t._s(t.teachLogData.teacherName))])],1),a("v-uni-view",{staticClass:"rows"},[a("v-uni-view",{staticClass:"rowtitle"},[a("v-uni-text",{staticClass:"redtxt"},[t._v("*")]),t._v("实训室：")],1),a("v-uni-view",{staticClass:"rowcontent"},[t._v(t._s(t.teachLogData.roomName))])],1),a("v-uni-view",{staticClass:"rows"},[a("v-uni-view",{staticClass:"rowtitle"},[a("v-uni-text",{staticClass:"redtxt"},[t._v("*")]),t._v("上课时间：")],1),a("v-uni-view",{staticClass:"rowcontent"},[t._v(t._s(t.teachLogData.timetableDate)+" "+t._s(t.teachLogData.selectBeginTime)+"~"+t._s(t.teachLogData.selectEndTime))])],1)],1),a("v-uni-view",{staticClass:"blockone"},[a("v-uni-view",{staticClass:"rows"},[a("v-uni-view",{staticClass:"rowtitle"},[t._v("存在异常：")]),a("v-uni-view",{staticClass:"rowcontent"},[a("v-uni-text",[t._v("卫生异常")])],1)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.teachLogData.beforeSourcesList&&t.teachLogData.beforeSourcesList.length>0,expression:"teachLogData.beforeSourcesList && teachLogData.beforeSourcesList.length > 0"}],staticClass:"rows"},[a("v-uni-view",{staticStyle:{padding:"10rpx 0"}},t._l(t.teachLogData.beforeSourcesList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"imgbox"},[a("v-uni-image",{staticStyle:{height:"96rpx",width:"96rpx"},attrs:{src:t.linkInfoImg+e.moduleName+"/"+e.fileNewName},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.previewImg(e)}}})],1)})),1)],1),a("v-uni-view",{staticClass:"rows"},[a("v-uni-view",{staticClass:"rowtitle"}),a("v-uni-view",{staticClass:"rowcontent"},[a("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[a("v-uni-text",[t._v("设备异常")]),a("v-uni-text",[t._v("报修"),a("v-uni-text",{staticStyle:{color:"#1890FF"}},[t._v(t._s(t.teachLogData.beforeDeviceList&&t.teachLogData.beforeDeviceList.length))]),t._v("台套")],1)],1)],1)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.teachLogData.beforeDeviceList&&t.teachLogData.beforeDeviceList.length>0,expression:"teachLogData.beforeDeviceList && teachLogData.beforeDeviceList.length > 0"}],staticClass:"rowscont",staticStyle:{"border-top":"1px solid #F2F2F2"}},[a("v-uni-view",{staticClass:"repairlistbox"},[t._l(t.teachLogData.beforeDeviceList,(function(e){return[a("v-uni-view",{staticClass:"repairitem"},[a("v-uni-view",{staticClass:"repairitem_one"},[a("v-uni-text",[t._v("编号："+t._s(e.number))]),a("v-uni-text",[t._v("设备名称："+t._s(e.name))])],1),a("v-uni-view",{staticClass:"repairitem_two"},[a("v-uni-text",{staticClass:"repairlabel"},[t._v("损坏情况：")]),a("v-uni-text",{staticClass:"repaircont"},[t._v(t._s(e.damageCause))])],1),a("v-uni-view",{staticClass:"repairitem_two"},[a("v-uni-text",{staticClass:"repairlabel"},[t._v("损坏原因：")]),a("v-uni-text",{staticClass:"repaircont"},[t._v(t._s(e.damageSituation))])],1)],1)]}))],2)],1)],1),a("v-uni-view",{staticClass:"blockone"},[a("v-uni-view",{staticClass:"rows"},[a("v-uni-view",{staticClass:"rowtitle"},[a("v-uni-text",{staticClass:"redtxt"},[t._v("*")]),t._v("考勤：")],1),a("v-uni-view",{staticClass:"rowcontent"},[t._v("应到"+t._s(t.teachLogData.allNum)+"人，实到"+t._s(t.teachLogData.sdNum)+"人")])],1),a("v-uni-view",{staticClass:"rows",staticStyle:{"align-items":"flex-start"}},[a("v-uni-view",{staticClass:"rowtitle"},[a("v-uni-text",{staticClass:"redtxt"},[t._v("*")]),t._v("教学内容：")],1),a("v-uni-view",{staticClass:"rowcontent"},[a("v-uni-view",{staticClass:"rowcontent"},[t._v(t._s(t.teachLogData.courseContent))])],1)],1),a("v-uni-view",{staticClass:"rows"},[a("v-uni-view",{staticClass:"rowtitle"},[a("v-uni-text",{staticClass:"redtxt"},[t._v("*")]),t._v("现场卫生：")],1),a("v-uni-view",{staticClass:"rowcontent"})],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.teachLogData.afterSourcesList&&t.teachLogData.afterSourcesList.length>0,expression:"teachLogData.afterSourcesList && teachLogData.afterSourcesList.length > 0"}],staticClass:"rows"},[a("v-uni-view",{staticStyle:{padding:"10rpx 0"}},t._l(t.teachLogData.afterSourcesList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"imgbox"},[a("v-uni-image",{staticStyle:{height:"96rpx",width:"96rpx"},attrs:{src:t.linkInfoImg+e.moduleName+"/"+e.fileNewName},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.previewImg(e)}}})],1)})),1)],1)],1),a("v-uni-view",{staticClass:"blockone"},[a("v-uni-view",{staticClass:"rows"},[a("v-uni-view",{staticClass:"rowtitle"},[t._v("报修设备：")]),a("v-uni-view",{staticClass:"rowcontent"},[a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:t.teachLogData.afterDeviceList&&t.teachLogData.afterDeviceList.length<=0,expression:"teachLogData.afterDeviceList && teachLogData.afterDeviceList.length <= 0"}]},[t._v("无")])],1)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.teachLogData.afterDeviceList&&t.teachLogData.afterDeviceList.length>0,expression:"teachLogData.afterDeviceList && teachLogData.afterDeviceList.length > 0"}],staticClass:"rowscont",staticStyle:{"border-top":"1px solid #F2F2F2"}},[a("v-uni-view",{staticClass:"repairlistbox"},[t._l(t.teachLogData.afterDeviceList,(function(e){return[a("v-uni-view",{staticClass:"repairitem"},[a("v-uni-view",{staticClass:"repairitem_one"},[a("v-uni-text",[t._v("编号："+t._s(e.number))]),a("v-uni-text",[t._v("设备名称："+t._s(e.name))])],1),a("v-uni-view",{staticClass:"repairitem_two"},[a("v-uni-text",{staticClass:"repairlabel"},[t._v("损坏情况：")]),a("v-uni-text",{staticClass:"repaircont"},[t._v(t._s(e.damageCause))])],1),a("v-uni-view",{staticClass:"repairitem_two"},[a("v-uni-text",{staticClass:"repairlabel"},[t._v("损坏原因：")]),a("v-uni-text",{staticClass:"repaircont"},[t._v(t._s(e.damageSituation))])],1)],1)]}))],2)],1)],1),a("v-uni-view",{staticClass:"blockone"},[a("v-uni-view",{staticClass:"rows"},[a("v-uni-view",{staticClass:"rowtitle"},[t._v("耗材：")]),a("v-uni-view",{staticClass:"rowcontent"},[a("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[a("v-uni-text",[t._v("领用总量："+t._s(t.teachLogData.lyAllNum))]),a("v-uni-text",[t._v("归还总量："+t._s(t.teachLogData.ghAllNum))])],1)],1)],1),t.teachLogData.goodsList&&t.teachLogData.goodsList.length>0?a("v-uni-view",{staticClass:"rowscont"},[a("v-uni-view",{staticClass:"table03"},[a("v-uni-view",{staticClass:"th03"},[a("v-uni-view",{staticClass:"td03 w30"},[t._v("名称")]),a("v-uni-view",{staticClass:"td03 w25"},[t._v("规格")]),a("v-uni-view",{staticClass:"td03 w20"},[t._v("领用数量")]),a("v-uni-view",{staticClass:"td03 w25"},[t._v("归还数量")])],1),t._l(t.teachLogData.goodsList,(function(e){return a("v-uni-view",{staticClass:"tr03"},[a("v-uni-view",{staticClass:"td03 w30"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"td03 w25"},[t._v(t._s(e.model))]),a("v-uni-view",{staticClass:"td03 w20"},[t._v(t._s(e.lyNumber))]),a("v-uni-view",{staticClass:"td03 w25"},[1==e.backs?a("v-uni-text",[t._v(t._s(e.ghNumber))]):a("v-uni-text",[t._v("-")])],1)],1)}))],2)],1):t._e()],1)],1)},n=[]},a7a9:function(t,e,a){"use strict";var i=a("d93e"),s=a.n(i);s.a},babf:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("8f16"),s=a("cebd"),n={data:function(){return{linkInfoImg:s.commonUrl()+i.linkloadUrl,sysemId:null,courseId:null,teachLogId:null,teachLogData:{},imgUrlbase:s.commonUrl()+i.linkloadUrl}},methods:{getDetail:function(t){var e=this;s.request(i.teachMobileShow,{id:t}).then((function(t){200===t.status&&(e.teachLogData=t.datas)}))},previewImg:function(t){var e=this,a=[];a[0]=e.imgUrlbase+t.moduleName+"/"+t.fileNewName,uni.previewImage({current:0,urls:a})}},onLoad:function(t){var e=this;t&&t.teaId?(e.teachLogId=t.teaId,e.getDetail(t.teaId)):e.teachLogId=null,t&&(e.sysemId=t.sysemId,e.courseId=t.courseId)}};e.default=n},c7f5:function(t,e,a){"use strict";a.r(e);var i=a("babf"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},d93e:function(t,e,a){var i=a("6265");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("9bd5c842",i,!0,{sourceMap:!1,shadowMode:!1})}}]);