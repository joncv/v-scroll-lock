!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).VShowSlide={})}(this,(function(e){"use strict";function t(e){return function(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=!1;if("undefined"!=typeof window){var n={get passive(){o=!0}};window.addEventListener("testPassive",null,n),window.removeEventListener("testPassive",null,n)}var i,r,l="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),d=[],c=!1,s=-1,u=function(e){return d.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},a=function(e){var t=e||window.event;return!!u(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},f={enableBodyScroll:function(e){if(l){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,d=d.filter((function(t){return t.targetElement!==e})),c&&0===d.length&&(document.removeEventListener("touchmove",a,o?{passive:!1}:void 0),c=!1)}else(d=d.filter((function(t){return t.targetElement!==e}))).length||setTimeout((function(){void 0!==r&&(document.body.style.paddingRight=r,r=void 0),void 0!==i&&(document.body.style.overflow=i,i=void 0)}))},disableBodyScroll:function(e,n){if(l){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!d.some((function(t){return t.targetElement===e}))){var f={targetElement:e,options:n||{}};d=[].concat(t(d),[f]),e.ontouchstart=function(e){1===e.targetTouches.length&&(s=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-s;!u(e.target)&&(t&&0===t.scrollTop&&o>0?a(e):function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?a(e):e.stopPropagation())}(t,e)},c||(document.addEventListener("touchmove",a,o?{passive:!1}:void 0),c=!0)}}else{!function(e){setTimeout((function(){if(void 0===r){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;t&&o>0&&(r=document.body.style.paddingRight,document.body.style.paddingRight="".concat(o,"px"))}void 0===i&&(i=document.body.style.overflow,document.body.style.overflow="hidden")}))}(n);var v={targetElement:e,options:n||{}};d=[].concat(t(d),[v])}},install:function(e,t){if(t){var o=t.enableBodyScroll,n=t.disableBodyScroll,i=t.bodyScrollOptions;o&&(this.enableBodyScroll=o),n&&(this.disableBodyScroll=n),i&&(this.bodyScrollOptions=i)}e.directive("scroll-lock",{inserted:this.inserted.bind(this),componentUpdated:this.componentUpdated.bind(this),unbind:this.unbind.bind(this)})},inserted:function(e,t){t.value&&this.disableBodyScroll(e,this.bodyScrollOptions)},componentUpdated:function(e,t){t.value?this.disableBodyScroll(e,this.bodyScrollOptions):this.enableBodyScroll(e)},unbind:function(e){this.enableBodyScroll(e)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(f),e.default=f,Object.defineProperty(e,"__esModule",{value:!0})}));
