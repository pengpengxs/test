(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-teacher-teaching-log-teachlog-after-teachlog-after"],{"1c8d":function(t,i,e){"use strict";e.r(i);var a=e("67c8"),s=e("7c51");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("4d03");var c,o=e("f0c5"),l=Object(o["a"])(s["default"],a["b"],a["c"],!1,null,"13c7a818",null,!1,a["a"],c);i["default"]=l.exports},"1f5e":function(t,i,e){"use strict";e.r(i);var a=e("dd92"),s=e("f9d6");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("d4a0");var c,o=e("f0c5"),l=Object(o["a"])(s["default"],a["b"],a["c"],!1,null,"6c209cac",null,!1,a["a"],c);i["default"]=l.exports},"47b9":function(t,i,e){var a=e("e098");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("6f061c60",a,!0,{sourceMap:!1,shadowMode:!1})},"4d03":function(t,i,e){"use strict";var a=e("47b9"),s=e.n(a);s.a},"67c8":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"uni-numbox"},[e("v-uni-view",{staticClass:"uni-numbox__minus",class:{"uni-numbox--disabled":t.disableSubtract||t.disabled},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._calcValue("subtract")}}},[t._v("-")]),e("v-uni-input",{staticClass:"uni-numbox__value",attrs:{type:"number",disabled:t.disabled,value:t.inputValue},on:{blur:function(i){arguments[0]=i=t.$handleEvent(i),t._onBlur.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"uni-numbox__plus",class:{"uni-numbox--disabled":t.disableAdd||t.disabled},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._calcValue("add")}}},[t._v("+")])],1)},n=[]},"6de7":function(t,i,e){"use strict";e("a9e3"),e("ac1f"),e("1276"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"uni-number-box",props:{value:{type:Number,default:1},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},disabled:{type:Boolean,default:!1},cid:{type:String,default:""}},data:function(){return{inputValue:this.value}},computed:{disableSubtract:function(){return this.inputValue<=this.min},disableAdd:function(){return this.inputValue>=this.max}},watch:{value:function(t){this.inputValue=t},inputValue:function(t){this.$emit("change",{value:t,cid:this.cid})}},methods:{_calcValue:function(t){if(!this.disabled){var i=this._getDecimalScale(),e=this.inputValue*i,a=this.step*i;"subtract"===t?e-=a:"add"===t&&(e+=a),e<this.min||e>this.max||(this.inputValue=e/i)}},_getDecimalScale:function(){var t=1;return~~this.step!==this.step&&(t=Math.pow(10,(this.step+"").split(".")[1].length)),t},_onBlur:function(t){var i=t.detail.value;i?(i=+i,i>this.max?i=this.max:i<this.min&&(i=this.min),this.inputValue=i):this.inputValue=0}}};i.default=a},"7c51":function(t,i,e){"use strict";e.r(i);var a=e("6de7"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},"8f00":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".blockone[data-v-6c209cac]{background-color:#fff;padding:%?20?%;margin:%?20?%;border-radius:%?10?%}.blockone .rows[data-v-6c209cac]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;margin-bottom:%?20?%;color:#434343}.blockone .rows .rowtitle[data-v-6c209cac]{width:28%;color:#434343}.blockone .rows .rowcontent[data-v-6c209cac]{width:76%;color:#434343}.imgbox[data-v-6c209cac]{position:relative;float:left;margin-right:%?20?%;margin-top:%?10?%}.imgbox uni-icon[data-v-6c209cac]{position:absolute;top:0;right:0;z-index:1}.typeListBox[data-v-6c209cac]{height:%?600?%}.tablebox[data-v-6c209cac]{margin:%?50?% %?20?% %?20?%}.tablebox_head[data-v-6c209cac]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tablebox_head_other[data-v-6c209cac]{margin-top:%?12?%}.tablebox_head_titlename[data-v-6c209cac]{font-size:%?30?%;color:#1a1a1a;margin-right:%?16?%}.tablebox_head_titledesc[data-v-6c209cac]{font-size:%?26?%;color:#707070}.tablebox_cont[data-v-6c209cac]{padding:%?12?% 0}.btncss[data-v-6c209cac]{width:%?100?%;height:%?40?%;line-height:%?40?%;text-align:center;color:#fff;background-color:#0369d6;display:inline-block;border-radius:%?4?%}\n\n/* 表格 */.list[data-v-6c209cac]{border-radius:%?10?%}\n\n/* 表格 */.table01[data-v-6c209cac]{display:table;width:100%;background:#fff;margin:0 auto %?10?%;table-layout:fixed;border-radius:%?10?%}.th01[data-v-6c209cac]{display:table-row;width:100%}.tr01[data-v-6c209cac]{display:table-row;width:100%}.th01 .td01[data-v-6c209cac]{display:table-cell;text-align:left;height:%?80?%;border-top:1px solid #f2f2f2;border-bottom:1px solid #f2f2f2;font-size:%?30?%;padding:0 %?16?%;color:#434343;vertical-align:middle;background-color:#e6e6e6}.tr01 .td01[data-v-6c209cac]{display:table-cell;text-align:left;height:%?120?%;border-bottom:1px solid #f2f2f2;font-size:%?28?%;padding:%?16?%;color:#1a1a1a;vertical-align:middle}.tablef13 .th01 .td01[data-v-6c209cac], .tablef13 .tr01 .td01[data-v-6c209cac]{font-size:%?26?%;height:%?80?%}[data-v-6c209cac] uni-textarea{font-size:%?28?%}.teareabox uni-textarea[data-v-6c209cac]{max-height:%?140?%;min-height:%?80?%;fontSize:%?28?%;border:1px solid #f2f2f2;width:95%}.elli[data-v-6c209cac]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.deviceBtn[data-v-6c209cac]{display:inline-block;font-size:%?24?%;background-color:#0369d6;color:#fff;border-radius:%?8?%;padding:%?4?% %?16?%}.bt-bor-item-border[data-v-6c209cac]{border-bottom:1px solid #f2f2f2;margin-bottom:%?30?%}.bt-bor-item[data-v-6c209cac]{overflow:hidden;margin-bottom:%?20?%;padding:0 %?50?%}.left-label[data-v-6c209cac]{width:28%;float:left;font-size:%?26?%}.right-label[data-v-6c209cac]{width:72%;float:left;font-size:%?26?%}.right-label uni-textarea[data-v-6c209cac]{max-height:%?140?%;min-height:%?80?%;fontSize:%?28?%;border:1px solid #f2f2f2;width:99%}.hcTopbox[data-v-6c209cac]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:%?20?%}.hcSelect[data-v-6c209cac]{width:50%}[data-v-6c209cac] .uni-searchbar__box{height:%?50?%}.drop[data-v-6c209cac]{width:100%}.item-dro[data-v-6c209cac]{line-height:40px;height:40px;display:block;float:left;width:100%;text-align:center;color:#737373}.td01[data-v-6c209cac] .uni-numbox{height:%?50?%;line-height:%?50?%;width:%?160?%;margin:0 auto}.td01[data-v-6c209cac] .uni-numbox__minus, .td01[data-v-6c209cac] .uni-numbox__plus{height:%?50?%;line-height:%?50?%;width:%?50?%;font-size:%?20?%;background-color:#fff}.td01[data-v-6c209cac] .uni-numbox__value{height:%?46?%;line-height:%?46?%;width:%?60?%;font-size:%?20?%;margin:0;border-radius:0}.hcListBox[data-v-6c209cac]{height:%?800?%}.hcSelect[data-v-6c209cac] .dropdown-item.active{height:%?2000?%!important}.redtxt[data-v-6c209cac]{color:red;margin-right:%?6?%}.rowcontent[data-v-6c209cac] uni-checkbox .uni-checkbox-input{width:%?32?%;height:%?32?%}.approvalyes[data-v-6c209cac]{display:inline-block;width:100%;height:%?80?%;line-height:%?80?%;text-align:center;color:#fff;background-color:#0369d6;border:1px solid #0369d6;border-radius:%?10?%;margin:0 auto;font-size:%?30?%}.bxbox uni-input[data-v-6c209cac]{font-size:%?28?%;border:1px solid #f2f2f2;width:99%}.hc_search[data-v-6c209cac]{width:60%;position:relative}.hc_search uni-input[data-v-6c209cac]{width:74%!important;margin:0;height:%?30?%;padding-left:30px;border-radius:100px;font-size:%?26?%;color:#a6a6a6;padding-top:%?12?%;border:1px solid #dcdcdc;background-color:#fff}.hc_search[data-v-6c209cac] .uni-input-input, .hc_search[data-v-6c209cac] .uni-input-placeholder{font-size:%?26?%!important;color:#a6a6a6!important}.hc_search .ic_search[data-v-6c209cac]{color:#898989;position:absolute;left:%?20?%;top:%?16?%}.hcSearch[data-v-6c209cac], .top_search[data-v-6c209cac]{width:100%;margin:0 auto;background-color:#fff;position:relative}.hcSearch uni-input[data-v-6c209cac], .top_search uni-input[data-v-6c209cac]{width:80%!important;margin:0;padding-left:%?60?%;border-radius:100px;font-size:%?26?%;color:#a6a6a6;padding-top:%?12?%;border:1px solid #dcdcdc}.hcSearch[data-v-6c209cac] .uni-input-input, .hcSearch[data-v-6c209cac] .uni-input-placeholder, .top_search[data-v-6c209cac] .uni-input-input, .top_search[data-v-6c209cac] .uni-input-placeholder{font-size:%?26?%!important;color:#a6a6a6!important}.hcSearch .ic_search[data-v-6c209cac], .top_search .ic_search[data-v-6c209cac]{color:#898989;position:absolute;left:%?20?%;top:%?20?%}.top_search[data-v-6c209cac]{margin-bottom:%?20?%}.top_search uni-input[data-v-6c209cac]{width:90%!important}",""]),t.exports=i},"9bac":function(t,i,e){"use strict";var a=e("4ea4");e("4de4"),e("4160"),e("c975"),e("d81d"),e("a434"),e("ac1f"),e("1276"),e("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=a(e("b85c")),n=a(e("698a")),c=a(e("1c8d")),o=e("8f16"),l=e("cebd"),r={components:{uniPopup:n.default,uniNumberBoxXg:c.default},data:function(){return{sysemId:null,courseId:null,teachLogId:null,teachLogData:{},courseContents:null,pictures:[],deviceList:[],deviceValue:null,bxDeviceObj:{},deviceRepairList:[],backGoodsListOrg:[],backGoodsList:[],gyAllNum:null,searchGhName:null,bfGoodsList:[],bfGoodsListOrg:[],bfValue:null,sumbitData:{}}},methods:{getDetail:function(t){var i=this;l.request(o.teachMobileAfterShow,{id:t}).then((function(t){200===t.status&&(i.teachLogData=t.datas,i.backGoodsList=i.teachLogData.goodsList,i.backGoodsListOrg=i.teachLogData.goodsList,i.backGoodsList.length>0&&i.backGoodsList.forEach((function(t){t.ghNumber||(t.ghNumber=0)})))}))},upPhoto:function(){var t=this;uni.chooseImage({count:6,sizeType:["original"],success:function(i){if("chooseImage:ok"===i.errMsg){var e=i.tempFilePaths,a=t.pictures||[];if(a.length+e.length>6)return void uni.showToast({title:"最多只能上传6张图片!",duration:2e3,icon:"none"});t.uploadImg(e)}}})},uploadImg:function(t){for(var i=t,e=[],a=0;a<i.length;a++)e.push({name:"files",uri:i[a]});var s=this.pictures||[];l.uploadFileMulti(o.batchUpload,e).then((function(t){200===t.status&&t.datas.forEach((function(t){s.push({id:t.id,fileOriginalName:t.fileOriginalName,url:l.commonUrl()+o.linkloadUrl+t.moduleName+"/"+t.fileNewName,uploadType:1})}))})),this.pictures=s},previewImg:function(t){var i=[];i[0]=t,uni.previewImage({current:0,urls:i})},deletrImg:function(t,i){this.pictures.splice(i,1),l.request(o.deletePhoto,[t.id]).then((function(t){200==t.status&&uni.showToast({title:t.message,duration:2e3,icon:"none"})}))},showSheet:function(){this.$refs.popup.open(),this.deviceValue=null,this.deviceList=[],this.getDeviceList()},getDeviceList:function(){var t=this,i=this.teachLogData.roomId.split(",");l.request(o.teachMobileDeviceList,{name:this.deviceValue,roomList:i}).then((function(i){200===i.status&&(t.deviceList=i.datas)}))},hidePop:function(){this.$refs.popup.close()},deviceSearch:function(t){this.deviceValue=t.detail.value,this.getDeviceList()},clickBx:function(t){this.bxDeviceObj=JSON.parse(JSON.stringify(t)),this.$refs.bxPopup.open()},bxSaveCreat:function(){var t=this;this.bxDeviceObj.damageCause&&this.bxDeviceObj.damageSituation?l.request(o.equipmentRepairCreat,{damageCause:this.bxDeviceObj.damageCause,damageSituation:this.bxDeviceObj.damageSituation,equipmentId:this.bxDeviceObj.equipmentId}).then((function(i){200===i.status&&(uni.showToast({title:i.message,duration:2e3,icon:"none"}),t.bxDeviceObj.code=i.datas.code,t.deviceRepairList.push(t.bxDeviceObj),t.bxHidePop(),t.getDeviceList())})):uni.showToast({title:"损坏情况或损坏原因必填!",duration:2e3,icon:"none"})},bxHidePop:function(){this.$refs.bxPopup.close(),this.bxDeviceObj={}},ghChange:function(t){for(var i=this.backGoodsList,e=0,a=0;a<i.length;a++){var s=i[a];t.cid==s.id&&this.$set(s,"ghNumber",t.value),e+=s.ghNumber}this.gyAllNum=e},ghSearch:function(t){var i=this;this.searchGhName=t.detail.value,this.searchGhName?this.backGoodsList=this.backGoodsList.filter((function(t){return t.name.indexOf(i.searchGhName)>-1})):this.backGoodsList=this.backGoodsListOrg},afterSubmit:function(){if(this.courseContents)if(this.pictures.length<=0)uni.showToast({title:"现场卫生图片必须上传!",duration:2e3,icon:"none"});else{var t=JSON.parse(JSON.stringify(this.backGoodsList)),i=[];t.length>0&&t.forEach((function(t){t.lyNumber-t.ghNumber!=0&&i.push(t)})),i.length>0&&i.forEach((function(t){t.bfNumber=t.lyNumber-t.ghNumber})),this.bfGoodsList=i;var e={};e.id=this.teachLogData.id,e.courseContent=this.courseContents;var a=[];this.deviceRepairList.length>0&&(a=this.deviceRepairList.map((function(t){return t.code}))),e.repairCodeList=a;var s=[];this.pictures.length>0&&(s=this.pictures.map((function(t){return t.id}))),e.sourceList=s,e.goodsList=this.backGoodsList,this.sumbitData=e,this.bfGoodsList.length>0?(this.bfGoodsListOrg=this.bfGoodsList,this.$refs.hcPopup.open()):this.afterCreate(e)}else uni.showToast({title:"教学内容必填!",duration:2e3,icon:"none"})},afterCreate:function(t){var i=this;l.request(o.teachMobileAfterCreate,t).then((function(t){200===t.status?(uni.showToast({title:t.message,duration:1500,icon:"none"}),setTimeout((function(){i.backFun()}),1500)):uni.showToast({title:t.message,duration:3e3,icon:"none"})}))},bfSearch:function(t){var i=this;this.bfValue=t.detail.value,this.bfValue?this.bfGoodsList=this.bfGoodsList.filter((function(t){return t.name.indexOf(i.bfValue)>-1})):this.bfGoodsList=this.bfGoodsListOrg},bfSubmit:function(){var t,i=this,e=!1,a=(0,s.default)(this.bfGoodsList);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(!n.bfSituation){e=!0;break}}}catch(c){a.e(c)}finally{a.f()}e?uni.showToast({title:"报废原因必填！",duration:2e3,icon:"none"}):(this.sumbitData.goodsList.forEach((function(t){i.bfGoodsList.forEach((function(i){-1!=t.id.indexOf(i.id)&&(t.bfNumber=i.bfNumber,t.bfSituation=i.bfSituation)})),t.bfNumber||(t.bfNumber=0)})),this.afterCreate(this.sumbitData))},hcHidePop:function(){this.$refs.hcPopup.close()},backFun:function(){var t=getCurrentPages(),i=t[t.length-2];i.$vm.navBackFun({isSellBack:!0}),uni.navigateBack()}},onLoad:function(t){var i=this;t&&t.teaId?(i.teachLogId=t.teaId,i.getDetail(t.teaId)):i.teachLogId=null,t&&(i.sysemId=t.sysemId,i.courseId=t.courseId)}};i.default=r},b28f:function(t,i,e){t.exports=e.p+"static/img/xunke_shangchuan@3x.e1590578.png"},c63a:function(t,i,e){var a=e("8f00");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("01a2ae27",a,!0,{sourceMap:!1,shadowMode:!1})},d4a0:function(t,i,e){"use strict";var a=e("c63a"),s=e.n(a);s.a},dd92:function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var a={uniNumberBoxXg:e("1c8d").default,uniPopup:e("698a").default},s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"blockone"},[a("v-uni-view",{staticClass:"rows"},[a("v-uni-view",{staticClass:"rowtitle"},[a("v-uni-text",{staticClass:"redtxt"},[t._v("*")]),t._v("课程名称：")],1),a("v-uni-view",{staticClass:"rowcontent"},[t._v(t._s(t.teachLogData.courseName?t.teachLogData.courseName:"-"))])],1),a("v-uni-view",{staticClass:"rows"},[a("v-uni-view",{staticClass:"rowtitle"},[a("v-uni-text",{staticClass:"redtxt"},[t._v("*")]),t._v("班级：")],1),a("v-uni-view",{staticClass:"rowcontent"},[t._v(t._s(t.teachLogData.className))])],1),a("v-uni-view",{staticClass:"rows"},[a("v-uni-view",{staticClass:"rowtitle"},[a("v-uni-text",{staticClass:"redtxt"},[t._v("*")]),t._v("教师：")],1),a("v-uni-view",{staticClass:"rowcontent"},[t._v(t._s(t.teachLogData.teacherName))])],1),a("v-uni-view",{staticClass:"rows"},[a("v-uni-view",{staticClass:"rowtitle"},[a("v-uni-text",{staticClass:"redtxt"},[t._v("*")]),t._v("实训室：")],1),a("v-uni-view",{staticClass:"rowcontent"},[t._v(t._s(t.teachLogData.roomName))])],1),a("v-uni-view",{staticClass:"rows"},[a("v-uni-view",{staticClass:"rowtitle"},[a("v-uni-text",{staticClass:"redtxt"},[t._v("*")]),t._v("上课时间：")],1),a("v-uni-view",{staticClass:"rowcontent"},[t._v(t._s(t.teachLogData.timetableDate)+" "+t._s(t.teachLogData.selectBeginTime)+"~"+t._s(t.teachLogData.selectEndTime))])],1),a("v-uni-view",{staticClass:"rows"},[a("v-uni-view",{staticClass:"rowtitle"},[a("v-uni-text",{staticClass:"redtxt"},[t._v("*")]),t._v("考勤：")],1),a("v-uni-view",{staticClass:"rowcontent"},[t._v("应到"+t._s(t.teachLogData.allNum)+"人，实到"+t._s(t.teachLogData.sdNum)+"人")])],1),a("v-uni-view",{staticClass:"rows",staticStyle:{"align-items":"flex-start"}},[a("v-uni-view",{staticClass:"rowtitle"},[a("v-uni-text",{staticClass:"redtxt"},[t._v("*")]),t._v("教学内容：")],1),a("v-uni-view",{staticClass:"rowcontent teareabox"},[a("v-uni-textarea",{attrs:{"auto-height":"true","placeholder-style":"color:#C0C0C0;fontSize:24rpx;",maxlength:"-1"},model:{value:t.courseContents,callback:function(i){t.courseContents=i},expression:"courseContents"}})],1)],1),a("v-uni-view",{staticClass:"rows",staticStyle:{"align-items":"flex-start"}},[a("v-uni-view",{staticClass:"rowtitle"},[a("v-uni-text",{staticClass:"redtxt"},[t._v("*")]),t._v("现场卫生：")],1),a("v-uni-view",{staticClass:"rowcontent"},[t._l(t.pictures,(function(i,e){return a("v-uni-view",{key:e,staticClass:"imgbox"},[a("v-uni-icon",{attrs:{type:"clear",size:"13"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.deletrImg(i,e)}}}),i.url?a("v-uni-image",{staticStyle:{height:"96rpx",width:"96rpx"},attrs:{src:i.url},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewImg(i.url)}}}):a("v-uni-image",{staticStyle:{height:"96rpx",width:"96rpx"},attrs:{src:"/static/images/rizhi_moren@3x.png"}})],1)})),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.pictures.length<6,expression:"pictures.length < 6"}],staticClass:"imgbox",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.upPhoto.apply(void 0,arguments)}}},[a("v-uni-image",{staticStyle:{height:"96rpx",width:"96rpx"},attrs:{src:e("b28f")}})],1)],2)],1)],1),a("v-uni-view",{staticClass:"tablebox"},[a("v-uni-view",{staticClass:"tablebox_head"},[a("v-uni-view",{staticClass:"tablebox_head_title"},[a("v-uni-text",{staticClass:"tablebox_head_titlename"},[t._v("报修设备")])],1),a("v-uni-view",{staticClass:"tablebox_head_opreat"},[a("v-uni-text",{staticClass:"btncss",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showSheet.apply(void 0,arguments)}}},[t._v("+ 添加")])],1)],1),a("v-uni-view",{staticClass:"tablebox_cont"},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.deviceRepairList.length>0,expression:"deviceRepairList.length > 0"}],staticClass:"list"},[a("v-uni-view",{staticClass:"table01"},[a("v-uni-view",{staticClass:"th01"},[a("v-uni-view",{staticClass:"td01 w20",staticStyle:{"border-radius":"5px 0 0 0"}},[t._v("编号")]),a("v-uni-view",{staticClass:"td01 w25"},[t._v("设备名称")]),a("v-uni-view",{staticClass:"td01 w25"},[t._v("损坏情况")]),a("v-uni-view",{staticClass:"td01 w30",staticStyle:{"border-radius":"0 5px 0 0"}},[t._v("损坏原因")])],1),t._l(t.deviceRepairList,(function(i){return a("v-uni-view",{staticClass:"tr01"},[a("v-uni-view",{staticClass:"td01 w20"},[t._v(t._s(i.number))]),a("v-uni-view",{staticClass:"td01 w25"},[t._v(t._s(i.name))]),a("v-uni-view",{staticClass:"td01 w25"},[t._v(t._s(i.damageCause))]),a("v-uni-view",{staticClass:"td01 w30"},[t._v(t._s(i.damageSituation))])],1)}))],2)],1)],1)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.backGoodsList.length>0,expression:"backGoodsList.length > 0"}],staticClass:"tablebox",staticStyle:{"margin-top":"30rpx","margin-bottom":"0"}},[a("v-uni-view",{staticClass:"tablebox_head"},[a("v-uni-view",{staticClass:"tablebox_head_title"},[a("v-uni-text",{staticClass:"tablebox_head_titlename"},[t._v("耗材归还")])],1),a("v-uni-view",{staticClass:"tablebox_head_opreat",staticStyle:{display:"flex","justify-content":"flex-end"}},[a("v-uni-view",{staticClass:"hc_search"},[a("i",{staticClass:"iconfont icon-sousuo ic_search f-15"}),a("v-uni-input",{attrs:{type:"text",placeholder:"名称",value:t.searchGhName,"adjust-position":"false"},on:{confirm:function(i){arguments[0]=i=t.$handleEvent(i),t.ghSearch.apply(void 0,arguments)}}})],1)],1)],1),a("v-uni-view",{staticClass:"tablebox_head_other"},[a("v-uni-text",{staticClass:"tablebox_head_titledesc",staticStyle:{"margin-right":"30rpx"}},[t._v("仓库名称："+t._s(t.teachLogData.warehouseName))]),a("v-uni-text",{staticClass:"tablebox_head_titledesc"},[t._v("归还总量："+t._s(t.gyAllNum))])],1),a("v-uni-view",{staticClass:"tablebox_cont"},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.backGoodsList.length>0,expression:"backGoodsList.length > 0"}],staticClass:"list"},[a("v-uni-view",{staticClass:"table01"},[a("v-uni-view",{staticClass:"th01"},[a("v-uni-view",{staticClass:"td01 w25",staticStyle:{"border-radius":"5px 0 0 0"}},[t._v("名称")]),a("v-uni-view",{staticClass:"td01 w35"},[t._v("规格")]),a("v-uni-view",{staticClass:"td01 w15"},[t._v("领用数量")]),a("v-uni-view",{staticClass:"td01 w25",staticStyle:{"border-radius":"0 5px 0 0"}},[t._v("归还数量")])],1),t._l(t.backGoodsList,(function(i){return a("v-uni-view",{staticClass:"tr01"},[a("v-uni-view",{staticClass:"td01 w25"},[t._v(t._s(i.name))]),a("v-uni-view",{staticClass:"td01 w35"},[t._v(t._s(i.model))]),a("v-uni-view",{staticClass:"td01 w15"},[t._v(t._s(i.lyNumber))]),a("v-uni-view",{staticClass:"td01 w25"},[a("uni-number-box-xg",{attrs:{min:0,max:i.lyNumber,value:i.ghNumber,cid:i.id},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.ghChange.apply(void 0,arguments)}}})],1)],1)}))],2)],1)],1)],1),a("v-uni-view",{staticStyle:{width:"100%","text-align":"center",padding:"20rpx"}},[a("v-uni-view",{staticClass:"approvalyes",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.afterSubmit.apply(void 0,arguments)}}},[t._v("提交")])],1),a("uni-popup",{ref:"popup",attrs:{type:"center"}},[a("v-uni-view",{staticClass:"sheet"},[a("v-uni-view",{staticClass:"sheet_title"},[a("v-uni-text",{staticClass:"sheet_title_name bluecolor"},[t._v("添加异常设备")])],1),a("v-uni-view",{staticClass:"top_search"},[a("i",{staticClass:"iconfont icon-sousuo ic_search f-15"}),a("v-uni-input",{attrs:{type:"text",placeholder:"搜索设备编号、设备名称",value:t.deviceValue,"adjust-position":"false"},on:{confirm:function(i){arguments[0]=i=t.$handleEvent(i),t.deviceSearch.apply(void 0,arguments)}}})],1),a("v-uni-scroll-view",{staticClass:"typeListBox",attrs:{"scroll-y":"true"}},[a("v-uni-view",{staticClass:"table01 tablef13"},[a("v-uni-view",{staticClass:"th01"},[a("v-uni-view",{staticClass:"td01 w25"},[t._v("设备编号")]),a("v-uni-view",{staticClass:"td01 w55 elli"},[t._v("设备名称")]),a("v-uni-view",{staticClass:"td01 w20"},[t._v("操作")])],1),t._l(t.deviceList,(function(i){return a("v-uni-view",{staticClass:"tr01"},[a("v-uni-view",{staticClass:"td01 w25"},[t._v(t._s(i.number))]),a("v-uni-view",{staticClass:"td01 w55 elli"},[t._v(t._s(i.name))]),a("v-uni-view",{staticClass:"td01 w20"},[a("v-uni-view",{staticClass:"deviceBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickBx(i)}}},[t._v("报修")])],1)],1)}))],2)],1),a("v-uni-view",{staticClass:"sheetBtn"},[a("v-uni-view",{staticClass:"closeBtn50",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hidePop.apply(void 0,arguments)}}},[t._v("关闭")])],1)],1)],1),a("uni-popup",{ref:"bxPopup",attrs:{type:"center"}},[a("v-uni-view",{staticClass:"sheet",staticStyle:{width:"660rpx"}},[a("v-uni-view",{staticClass:"sheet_title"},[a("v-uni-text",{staticClass:"sheet_title_name"},[t._v("设备报修")])],1),a("v-uni-view",{staticClass:"bt-bor-item"},[a("v-uni-view",{staticClass:"left-label"},[a("i",{staticStyle:{color:"red","margin-right":"4rpx"}},[t._v("*")]),t._v("报修设备：")]),a("v-uni-view",{staticClass:"right-label"},[t._v(t._s(t.bxDeviceObj.name))])],1),a("v-uni-view",{staticClass:"bt-bor-item"},[a("v-uni-view",{staticClass:"left-label"},[a("i",{staticStyle:{color:"red","margin-right":"4rpx"}},[t._v("*")]),t._v("损坏情况：")]),a("v-uni-view",{staticClass:"right-label"},[a("v-uni-textarea",{staticStyle:{"font-size":"28rpx"},attrs:{"auto-height":"true","placeholder-style":"color:#C0C0C0;fontSize:24rpx;",maxlength:"-1",placeholder:"请输入"},model:{value:t.bxDeviceObj.damageCause,callback:function(i){t.$set(t.bxDeviceObj,"damageCause",i)},expression:"bxDeviceObj.damageCause"}})],1)],1),a("v-uni-view",{staticClass:"bt-bor-item"},[a("v-uni-view",{staticClass:"left-label"},[a("i",{staticStyle:{color:"red","margin-right":"4rpx"}},[t._v("*")]),t._v("损坏原因：")]),a("v-uni-view",{staticClass:"right-label"},[a("v-uni-textarea",{staticStyle:{"font-size":"28rpx"},attrs:{"auto-height":"true","placeholder-style":"color:#C0C0C0;fontSize:24rpx;",maxlength:"-1",placeholder:"请输入"},model:{value:t.bxDeviceObj.damageSituation,callback:function(i){t.$set(t.bxDeviceObj,"damageSituation",i)},expression:"bxDeviceObj.damageSituation"}})],1)],1),a("v-uni-view",{staticClass:"sheetBtn",staticStyle:{padding:"0 40rpx","margin-top":"40rpx"}},[a("v-uni-view",{staticClass:"closeBtn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.bxHidePop.apply(void 0,arguments)}}},[t._v("取消")]),a("v-uni-view",{staticClass:"saveBtn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.bxSaveCreat.apply(void 0,arguments)}}},[t._v("保存")])],1)],1)],1),a("uni-popup",{ref:"hcPopup",attrs:{type:"center"}},[a("v-uni-view",{staticClass:"sheet"},[a("v-uni-view",{staticClass:"sheet_title"},[a("v-uni-text",{staticClass:"sheet_title_name"},[t._v("设备报废")])],1),a("v-uni-view",{staticClass:"hcTopbox"},[a("v-uni-view",{staticClass:"hcSelect"},[t._v(t._s(t.teachLogData.warehouseName))]),a("v-uni-view",{staticClass:"hcSearch",staticStyle:{width:"50%"}},[a("i",{staticClass:"iconfont icon-sousuo ic_search f-15"}),a("v-uni-input",{attrs:{type:"text",placeholder:"搜索名称",value:t.bfValue,"adjust-position":"false"},on:{confirm:function(i){arguments[0]=i=t.$handleEvent(i),t.bfSearch.apply(void 0,arguments)}}})],1)],1),a("v-uni-scroll-view",{staticClass:"hcListBox",attrs:{"scroll-y":"true"}},[a("v-uni-view",{staticClass:"table01"},[a("v-uni-view",{staticClass:"th01"},[a("v-uni-view",{staticClass:"td01 w30"},[t._v("名称")]),a("v-uni-view",{staticClass:"td01 w25"},[t._v("规格")]),a("v-uni-view",{staticClass:"td01 w15"},[t._v("报废数量")]),a("v-uni-view",{staticClass:"td01 w30"},[t._v("报废原因")])],1),t._l(t.bfGoodsList,(function(i){return a("v-uni-view",{staticClass:"tr01"},[a("v-uni-view",{staticClass:"td01 w30"},[t._v(t._s(i.name))]),a("v-uni-view",{staticClass:"td01 w25"},[t._v(t._s(i.model))]),a("v-uni-view",{staticClass:"td01 w15"},[t._v(t._s(i.bfNumber))]),a("v-uni-view",{staticClass:"td01 w30 bxbox"},[a("v-uni-input",{attrs:{type:"text"},model:{value:i.bfSituation,callback:function(e){t.$set(i,"bfSituation",e)},expression:"item.bfSituation"}})],1)],1)}))],2)],1),a("v-uni-view",{staticClass:"sheetBtn",staticStyle:{padding:"0 40rpx","margin-top":"40rpx"}},[a("v-uni-view",{staticClass:"closeBtn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hcHidePop.apply(void 0,arguments)}}},[t._v("取消")]),a("v-uni-view",{staticClass:"saveBtn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.bfSubmit.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)],1)],1)},n=[]},e098:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";.uni-numbox[data-v-13c7a818]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;height:%?70?%;position:relative}.uni-numbox[data-v-13c7a818]:after{content:"";position:absolute;-webkit-transform-origin:center;transform-origin:center;box-sizing:border-box;pointer-events:none;top:-50%;left:-50%;right:-50%;bottom:-50%;border:1px solid #c8c7cc;border-radius:%?12?%;-webkit-transform:scale(.5);transform:scale(.5)}.uni-numbox__minus[data-v-13c7a818],\n.uni-numbox__plus[data-v-13c7a818]{margin:0;background-color:#f8f8f8;width:%?70?%;font-size:%?40?%;height:100%;line-height:%?70?%;text-align:center;color:#333;position:relative}.uni-numbox__value[data-v-13c7a818]{position:relative;background-color:#fff;width:%?80?%;height:100%;line-height:%?70?%;text-align:center;padding:0;\n    /* 解决app端输入框高度超出问题 */min-height:1.2rem}\n\n/* 解决app端输入框高度超出问题(未实现) */\n\n/* .uni-numbox input{\n    height: 100%;\n    line-height: 70upx;\n} */.uni-numbox__value[data-v-13c7a818]:after{content:"";position:absolute;-webkit-transform-origin:center;transform-origin:center;box-sizing:border-box;pointer-events:none;top:-50%;left:-50%;right:-50%;bottom:-50%;border-style:solid;border-color:#c8c7cc;border-left-width:1px;border-right-width:1px;border-top-width:0;border-bottom-width:0;-webkit-transform:scale(.5);transform:scale(.5)}.uni-numbox--disabled[data-v-13c7a818]{color:silver}',""]),t.exports=i},f9d6:function(t,i,e){"use strict";e.r(i);var a=e("9bac"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a}}]);