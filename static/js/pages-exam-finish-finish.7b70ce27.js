(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-exam-finish-finish"],{1823:function(t,e,a){t.exports=a.p+"static/img/ic_unpass.57ca4922.png"},"1de5":function(t,e,a){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"4f4e":function(t,e,a){"use strict";var i=a("eb75"),n=a.n(i);n.a},"511c":function(t,e,a){"use strict";a.r(e);var i=a("cb76"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"5c2f":function(t,e,a){"use strict";a.r(e);var i=a("b5d4"),n=a("511c");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("4f4e");var c,o=a("f0c5"),d=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"adc01e4e",null,!1,i["a"],c);e["default"]=d.exports},"6a05":function(t,e,a){t.exports=a.p+"static/img/ic_failure.5be7557d.png"},"8d5b":function(t,e,a){t.exports=a.p+"static/img/ic_pass.ff99a66c.png"},b5d4:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"score_body"},[i("v-uni-image",{staticClass:"bg",attrs:{src:a("d253")}}),i("v-uni-view",{staticClass:"desc"},[i("v-uni-view",{staticClass:"score"},[t._v(t._s(t.data.finalScore))]),t.data.passed?i("v-uni-image",{staticClass:"icon",attrs:{src:a("8d5b")}}):i("v-uni-image",{staticClass:"icon",attrs:{src:a("1823")}})],1)],1),i("v-uni-view",{staticClass:"msg_detail"},[i("v-uni-image",{staticClass:"bg",attrs:{src:a("ed99")}}),i("v-uni-view",{staticClass:"desc"},[i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"left"},[t._v("姓名:"+t._s(t.data.name))]),i("v-uni-view",{staticClass:"right"},[t._v("学号:"+t._s(t.data.number))])],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"left"},[t._v("正确率:"+t._s(t.data.rightRate)+"%")]),i("v-uni-view",{staticClass:"right"},[t._v("用时:"+t._s(t.data.duration))])],1),i("v-uni-view",{staticClass:"state"},[t.data.passed?i("v-uni-image",{staticClass:"state_icon",attrs:{src:a("c0c2")}}):i("v-uni-image",{staticClass:"state_icon",attrs:{src:a("6a05")}}),i("v-uni-view",{staticClass:"txt",class:{selected:!t.data.passed}},[t._v(t._s(t.data.passed?"恭喜你已通过本次考试":"很遗憾,您未能通过本次考试"))])],1),i("v-uni-view",{staticClass:"back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[t._v("返回首页")])],1)],1)],1)},s=[]},c0c2:function(t,e,a){t.exports=a.p+"static/img/ic_success.d0aa7560.png"},cb76:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{data:{}}},methods:{back:function(){uni.switchTab({url:"/pages/home/home"})}},onLoad:function(t){this.data=JSON.parse(t.data)}};e.default=i},d253:function(t,e,a){t.exports=a.p+"static/img/bg_score_header.cdbe8cb1.png"},d47f:function(t,e,a){t.exports=a.p+"static/img/bg_exam_finish.1ac15475.png"},eb75:function(t,e,a){var i=a("f000");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("135d1589",i,!0,{sourceMap:!1,shadowMode:!1})},ed99:function(t,e,a){t.exports=a.p+"static/img/bg_exam_detail.b9ceeb41.png"},f000:function(t,e,a){var i=a("24fb"),n=a("1de5"),s=a("d47f");e=i(!1);var c=n(s);e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.dropdown-item__selected[data-v-adc01e4e]{background:transparent;padding:0}uni-input[data-v-adc01e4e]{font-size:%?28?%}uni-checkbox .uni-checkbox-input[data-v-adc01e4e]{width:%?40?%!important;height:%?40?%!important}uni-page-body[data-v-adc01e4e]{background-image:url('+c+")}.container[data-v-adc01e4e]{padding-top:%?100?%}.score_body[data-v-adc01e4e]{position:relative;width:100%;height:%?460?%}.score_body .bg[data-v-adc01e4e]{position:absolute;width:%?400?%;height:%?460?%;left:%?180?%}.desc[data-v-adc01e4e]{width:%?750?%;position:absolute;z-index:999}.desc .score[data-v-adc01e4e]{font-size:%?100?%;color:#fc544b;margin-left:%?260?%;margin-top:%?40?%}.desc .icon[data-v-adc01e4e]{width:%?160?%;height:%?100?%;margin-left:%?320?%;margin-top:%?60?%}.msg_detail[data-v-adc01e4e]{height:%?500?%;position:relative;margin-top:%?100?%}.msg_detail .bg[data-v-adc01e4e]{position:absolute;width:%?640?%;height:%?500?%;top:0;left:0;right:0;bottom:0;margin:auto}.msg_detail .desc[data-v-adc01e4e]{position:absolute;width:%?640?%;height:%?440?%;top:%?40?%;left:0;right:0;margin:auto;padding:0 40px;text-align:center}.desc .item[data-v-adc01e4e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-bottom:%?50?%}.item .left[data-v-adc01e4e]{font-size:%?24?%;color:#313131}.item .right[data-v-adc01e4e]{font-size:%?24?%;color:#313131;width:%?250?%}.desc .state[data-v-adc01e4e]{margin-top:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.state .state_icon[data-v-adc01e4e]{width:%?50?%;height:%?50?%}.state .txt[data-v-adc01e4e]{font-size:%?26?%;color:#0369d6;margin-left:%?18?%}.state .selected[data-v-adc01e4e]{font-size:%?26?%;color:#fc544b;margin-left:%?18?%}.back[data-v-adc01e4e]{width:%?360?%;height:%?80?%;text-align:center;color:#fff;font-size:%?24?%;line-height:%?80?%;background-color:#0369d6;border-radius:%?60?%;margin:%?40?% auto 0}body.?%PAGE?%[data-v-adc01e4e]{background-image:url("+c+")}",""]),t.exports=e}}]);