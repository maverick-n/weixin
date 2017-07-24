/*! vue-ydui v0.7.7 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.NavBarNextIcon=t.NavBarBackIcon=t.NavBar=void 0;var o=n(80),i=r(o),a=n(78),s=r(a),l=n(79),c=r(l);t.NavBar=i.default,t.NavBarBackIcon=s.default,t.NavBarNextIcon=c.default},1:function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var l=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}})}return{esModule:o,exports:i,options:s}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},3:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return b;r.parentNode.removeChild(r)}if(m){var i=p++;r=u||(u=o()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=h(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document,c=n(4),d={},f=l&&(document.head||document.getElementsByTagName("head")[0]),u=null,p=0,v=!1,b=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var o=c(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var a=o[i],s=d[a.id];s.refs--,n.push(s)}t?(o=c(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete d[s.id]}}}};var h=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],l=i[2],c=i[3],d={id:e+":"+o,css:s,media:l,sourceMap:c};r[a]?r[a].parts.push(d):n.push(r[a]={id:a,parts:[d]})}return n}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(){t||(t=!0,document.addEventListener("touchmove",e))},unlock:function(){t=!1,document.removeEventListener("touchmove",e)}}}(),r=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),o=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,r=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||r.test(e)},i=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},a=function(e,t){var n=e==window?document.body.offsetHeight:e.offsetHeight,r=e===window?0:e.getBoundingClientRect().top,o=t.getBoundingClientRect().top-r,i=o+t.offsetHeight;return o>=0&&o<n||i>0&&i<=n},s=function(e,t){return t=t||"",0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")},l=function(e,t){s(e,t)||(e.className=""==e.className?t:e.className+" "+t)},c=function(e,t){if(s(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},d=function(e){function t(n,r,o){if(n!==r){var i=n+o>r?r:n+o;n>r&&(i=n-o<r?r:n-o),e===window?window.scrollTo(i,i):e.scrollTop=i,window.requestAnimationFrame(function(){return t(i,r,o)})}}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var i=Math.abs(n-r),a=Math.ceil(i/o*50);t(n,r,a)};t.pageScroll=n,t.isIOS=r,t.isColor=o,t.getScrollview=i,t.checkInview=a,t.addClass=l,t.removeClass=c,t.scrollTop=d},39:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,'.m-navbar{height:.9rem;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.m-navbar:after{content:"";position:absolute;z-index:2;bottom:0;left:0;width:100%;border-bottom:1px solid #b2b2b2;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.m-navbar.navbar-fixed{position:fixed;top:0;left:0;width:100%;z-index:100}.navbar-item{-webkit-box-flex:0;-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;padding:0 .2rem;font-size:.3rem;white-space:nowrap;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:inherit}.navbar-item:first-child{-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1;margin-right:-25%}.navbar-item:last-child{-webkit-box-ordinal-group:4;-webkit-order:3;-ms-flex-order:3;order:3}.navbar-item:last-child,.navbar-item:last-child>a{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.navbar-item>a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:.9rem;min-width:25%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.navbar-center-box{-webkit-box-ordinal-group:3;-webkit-order:2;-ms-flex-order:2;order:2;height:.9rem;width:50%;margin-left:25%}.navbar-center-box .navbar-center{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:inherit}.navbar-center-box .navbar-center .center-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.navbar-center-box .navbar-center img{height:60%}.back-icon:before,.next-icon:before{display:inline-block;font-family:YDUI-INLAY;font-size:.36rem;color:inherit}.back-icon:before{content:"\\E607"}.next-icon:before{content:"\\E608"}',""])},78:function(e,t,n){var r=n(1)(n(219),n(111),null,null);e.exports=r.exports},79:function(e,t,n){var r=n(1)(n(220),n(121),null,null);e.exports=r.exports},80:function(e,t,n){n(179);var r=n(1)(n(221),n(140),null,null);e.exports=r.exports},111:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("i",{staticClass:"back-icon",style:{color:e.color}}),e._t("default")],2)},staticRenderFns:[]}},121:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._t("default"),n("i",{staticClass:"next-icon",style:{color:e.color}})],2)},staticRenderFns:[]}},140:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"m-navbar navbar-bottom-line-color",class:e.classes,style:{backgroundColor:e.bgcolor,height:e.height}},[n("div",{staticClass:"navbar-item"},[e._t("left")],2),e._v(" "),n("div",{staticClass:"navbar-center-box",style:{height:e.height}},[n("div",{staticClass:"navbar-center"},[e._t("center",[n("span",{staticClass:"center-title",style:{color:e.color,fontSize:e.fontsize}},[e._v(e._s(e.title))])])],2)]),e._v(" "),n("div",{staticClass:"navbar-item"},[e._t("right")],2)])},staticRenderFns:[]}},179:function(e,t,n){var r=n(39);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);n(3)("259181be",r,!0)},219:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5);t.default={name:"yd-navbar-back-icon",props:{color:{validator:function(e){return!e||(0,r.isColor)(e)},default:"#5C5C5C"}}}},220:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5);t.default={name:"yd-navbar-next-icon",props:{color:{validator:function(e){return!e||(0,r.isColor)(e)},default:"#5C5C5C"}}}},221:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5);t.default={name:"yd-navbar",props:{title:String,fixed:Boolean,bgcolor:{validator:function(e){return!e||(0,r.isColor)(e)},default:"#FFF"},color:{validator:function(e){return!e||(0,r.isColor)(e)},default:"#5C5C5C"},fontsize:{validator:function(e){return/^(\.|\d+\.)?\d+(px|rem)$/.test(e)},default:".4rem"},height:{validator:function(e){return/^(\.|\d+\.)?\d+(px|rem)$/.test(e)},default:".9rem"}},computed:{classes:function(){return this.fixed?"navbar-fixed":""}}}}})});