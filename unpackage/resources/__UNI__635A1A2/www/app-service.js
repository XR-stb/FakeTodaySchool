(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"3ff6":function(t,e,r){"use strict";r.r(e);var n,i,s,a,o=r("f0c5"),c={},u=Object(o["a"])(c,n,i,!1,null,null,null,!1,s,a);e["default"]=u.exports},"4eec":function(t,e){t.exports="/images/sw3.png"},5619:function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return s})),r.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","container"),attrs:{_i:0}},[n("view",{staticClass:t._$s(1,"sc","top"),attrs:{_i:1}},[n("view",{staticClass:t._$s(2,"sc","head"),attrs:{_i:2}},[n("h2",{staticClass:t._$s(3,"sc","title"),attrs:{_i:3}}),n("img",{})]),n("view",{staticClass:t._$s(5,"sc","swip"),attrs:{_i:5}},[n("swiper",{attrs:{_i:6}},[n("swiper-item",[n("view",{staticClass:t._$s(8,"sc","swiper-item"),attrs:{_i:8}},[n("image",{attrs:{src:t._$s(9,"a-src",r("f3ae")),_i:9}})])]),n("swiper-item",[n("view",{staticClass:t._$s(11,"sc","swiper-item"),attrs:{_i:11}},[n("image",{attrs:{src:t._$s(12,"a-src",r("8d98")),_i:12}})])]),n("swiper-item",[n("view",{staticClass:t._$s(14,"sc","swiper-item"),attrs:{_i:14}},[n("image",{attrs:{src:t._$s(15,"a-src",r("4eec")),_i:15}})])])])]),n("view",{staticClass:t._$s(16,"sc","menu"),attrs:{_i:16}})]),n("view",{staticClass:t._$s(17,"sc","bottom"),attrs:{_i:17}})])},s=[]},"689c":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"hello"}}};e.default=n},"874c":function(t,e,r){if("undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(r){return e.resolve(t()).then((function(){return r}))}),(function(r){return e.resolve(t()).then((function(){throw r}))}))}),"undefined"!==typeof uni&&uni&&uni.requireGlobal){var n=uni.requireGlobal();ArrayBuffer=n.ArrayBuffer,Int8Array=n.Int8Array,Uint8Array=n.Uint8Array,Uint8ClampedArray=n.Uint8ClampedArray,Int16Array=n.Int16Array,Uint16Array=n.Uint16Array,Int32Array=n.Int32Array,Uint32Array=n.Uint32Array,Float32Array=n.Float32Array,Float64Array=n.Float64Array,BigInt64Array=n.BigInt64Array,BigUint64Array=n.BigUint64Array}uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(r("aa32").default)}))},"8bbf":function(t,e){t.exports=Vue},"8d98":function(t,e){t.exports="/images/sw2.jpg"},"91b3":function(t,e,r){"use strict";r.r(e);var n=r("689c"),i=r.n(n);for(var s in n)"default"!==s&&function(t){r.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"96c0":function(t,e,r){"use strict";r("874c");var n=s(r("8bbf")),i=s(r("3ff6"));function s(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}n.default.config.productionTip=!1,i.default.mpType="app";var u=new n.default(o({},i.default));u.$mount()},aa32:function(t,e,r){"use strict";r.r(e);var n=r("5619"),i=r("91b3");for(var s in i)"default"!==s&&function(t){r.d(e,t,(function(){return i[t]}))}(s);var a,o=r("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);e["default"]=c.exports},f0c5:function(t,e,r){"use strict";function n(t,e,r,n,i,s,a,o,c,u){var f,l="function"===typeof t?t.options:t;if(c){l.components||(l.components={});var p=Object.prototype.hasOwnProperty;for(var d in c)p.call(c,d)&&!p.call(l.components,d)&&(l.components[d]=c[d])}if(u&&((u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(l.mixins||(l.mixins=[])).push(u)),e&&(l.render=e,l.staticRenderFns=r,l._compiled=!0),n&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),a?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=f):i&&(f=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),f)if(l.functional){l._injectStyles=f;var _=l.render;l.render=function(t,e){return f.call(e),_(t,e)}}else{var y=l.beforeCreate;l.beforeCreate=y?[].concat(y,f):[f]}return{exports:t,options:l}}r.d(e,"a",(function(){return n}))},f3ae:function(t,e){t.exports="/images/sw1.jpg"}},[["96c0","app-config"]]]);