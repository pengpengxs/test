(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-mine"],{"1b83":function(t,i,e){var n=e("1ec4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("24749767",n,!0,{sourceMap:!1,shadowMode:!1})},"1ec4":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.dropdown-item__selected[data-v-3b14129f]{background:transparent;padding:0}uni-input[data-v-3b14129f]{font-size:%?28?%}uni-checkbox .uni-checkbox-input[data-v-3b14129f]{width:%?40?%!important;height:%?40?%!important}.profile[data-v-3b14129f]{position:relative;height:%?400?%}.profile .icon[data-v-3b14129f]{position:absolute;top:0;height:%?400?%;width:100%}.desc[data-v-3b14129f]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;height:%?300?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:999;top:0;margin:%?30?%;position:absolute}.desc .left[data-v-3b14129f]{margin-right:%?30?%;width:18%}.desc .right[data-v-3b14129f]{width:65%;vertical-align:middle}.logout[data-v-3b14129f]{width:95%;color:#fff;margin:%?60?% auto;font-size:%?30?%}.avatar[data-v-3b14129f]{position:relative;background-color:#e5e5e5;width:%?126?%;height:%?126?%;border-radius:%?126?%;color:#fff}.avatar uni-image[data-v-3b14129f]{width:100%;height:100%}.avatar .iconfont[data-v-3b14129f]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.name[data-v-3b14129f]{font-size:%?46?%;color:#41464c;margin-top:%?18?%}.phone[data-v-3b14129f]{font-size:%?30?%;color:#646464;margin-top:%?18?%}.list[data-v-3b14129f]{position:relative;margin:%?20?%;margin-top:%?-80?%;border-top-right-radius:%?20?%;border-top-left-radius:%?20?%;z-index:2;background-color:#fff}.item[data-v-3b14129f]{height:%?110?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-left:%?40?%;padding-right:%?20?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.item .left[data-v-3b14129f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.item .left .icon[data-v-3b14129f]{width:%?40?%;height:%?40?%}.left .txt[data-v-3b14129f]{font-size:%?30?%;color:#262626;margin-left:%?40?%}.item .icon[data-v-3b14129f]{width:%?16?%;height:%?28?%}.item .right[data-v-3b14129f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.item .right .txt[data-v-3b14129f]{font-size:%?24?%;color:#fc544b;margin-right:%?20?%}.item .right .has_discern[data-v-3b14129f]{color:#0369d6}.item .right .icon[data-v-3b14129f]{width:%?16?%;height:%?28?%}.divider[data-v-3b14129f]{background-color:#f2f2f2;height:%?1?%}.version[data-v-3b14129f]{margin-right:%?30?%;color:#999}',""]),t.exports=i},"3fdf":function(t,i,e){"use strict";var n=e("1b83"),a=e.n(n);a.a},6546:function(t,i,e){t.exports=e.p+"static/img/my_mima@3x.23f994af.png"},"942f":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("8f16"),a=e("cebd"),o={data:function(){return{user:{},photoUrl:null,hasDiscern:!1,name:"",phone:"",result:"",judgeObj:a.judgeObj()}},methods:{navTo:function(t,i){if(0===i){var e=uni.getStorageSync("user"),n=null;0===e.userType&&null!=e.teacher?n=e.teacher.id:1===e.userType&&null!=e.student&&(n=e.student.id),uni.navigateTo({url:t+"?id="+n+"&type="+e.userType})}else uni.navigateTo({url:t})},logout:function(){a.modal("提示","是否退出登录",!0,(function(t){t&&(uni.removeStorageSync("token"),uni.removeStorageSync("name"),uni.removeStorageSync("phone"),uni.removeStorageSync("menus"),uni.removeStorage({key:"user",success:function(){uni.reLaunch({url:"../login/login"})}}))}))}},onShow:function(){var i=this;this.name=uni.getStorageSync("name"),this.phone=uni.getStorageSync("phone");var e=uni.getStorageSync("user");null!=e.photo&&(this.photoUrl=a.commonUrl()+n.linkloadUrl+e.photo.moduleName+"/"+e.photo.fileNewName,t.log(this.photoUrl)),a.request(n.getDiscernState,void 0,"POST","",0,!0).then((function(t){i.hasDiscern=t.datas}))}};i.default=o}).call(this,e("5a52")["default"])},"9e3a":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"profile",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/selfmsg/selfmsg",0)}}},[n("v-uni-image",{staticClass:"icon",attrs:{src:"/static/home-image/my_bg@3x.png"}}),n("v-uni-view",{staticClass:"desc"},[n("v-uni-view",{staticClass:"left avatar"},[t.photoUrl?n("v-uni-image",{attrs:{src:t.photoUrl}}):n("i",{staticClass:" iconfont icon-jurassic_user f-40"})],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"name"},[t._v(t._s(t.name))]),n("v-uni-view",{staticClass:"phone"},[t._v("手机："+t._s(t.phone?t.phone:"-"))])],1),n("v-uni-view",{staticClass:"info"},[n("i",{staticClass:"iconfont icon-gengduo f-15"})])],1)],1),n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/password/password")}}},[n("v-uni-view",{staticClass:"left"},[n("v-uni-image",{staticClass:"icon",attrs:{src:e("6546")}}),n("v-uni-view",{staticClass:"txt"},[t._v("修改密码")])],1),n("i",{staticClass:"iconfont icon-gengduo f-15"})],1),t.judgeObj.isFaceCaptrue?n("v-uni-view",{staticClass:"item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("../face/capture/capture")}}},[n("v-uni-view",{staticClass:"left"},[n("v-uni-image",{staticClass:"icon",attrs:{src:e("bf37")}}),n("v-uni-view",{staticClass:"txt"},[t._v("人脸采集")])],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"txt",class:{has_discern:t.hasDiscern}},[t._v(t._s(t.hasDiscern?"已采集":"未采集"))]),n("i",{staticClass:"iconfont icon-gengduo f-15"})],1)],1):t._e(),t.judgeObj.isAPP?[n("v-uni-view",{staticClass:"item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/app-version/version")}}},[n("v-uni-view",{staticClass:"left"},[n("v-uni-image",{staticClass:"icon",attrs:{src:e("c4af")}}),n("v-uni-view",{staticClass:"txt"},[t._v("关于我们")])],1),n("i",{staticClass:"iconfont icon-gengduo f-15"})],1)]:t._e()],2),n("v-uni-button",{staticClass:"logout bg-theme",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.logout.apply(void 0,arguments)}}},[t._v("退出登录")])],1)},o=[]},bf37:function(t,i,e){t.exports=e.p+"static/img/my_caiji@3x.b21e157d.png"},c4af:function(t,i,e){t.exports=e.p+"static/img/my_aboutus@3x.eaa1349a.png"},de0d:function(t,i,e){"use strict";e.r(i);var n=e("942f"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},e46b:function(t,i,e){"use strict";e.r(i);var n=e("9e3a"),a=e("de0d");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("3fdf");var s,r=e("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"3b14129f",null,!1,n["a"],s);i["default"]=c.exports}}]);