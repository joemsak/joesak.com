!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var t={},n={},r={},o={}.hasOwnProperty,i=/^\.\.?(\/|$)/,u=function(e,t){for(var n,r=[],o=(i.test(t)?e+"/"+t:t).split("/"),u=0,c=o.length;u<c;u++)n=o[u],".."===n?r.pop():"."!==n&&""!==n&&r.push(n);return r.join("/")},c=function(e){return e.split("/").slice(0,-1).join("/")},s=function(t){return function(n){var r=u(c(t),n);return e.require(r,t)}},a=function(e,t){var r=h&&h.createHot(e),o={id:e,exports:{},hot:r};return n[e]=o,t(o.exports,s(e),o),o.exports},l=function(e){var t=r[e];return t&&e!==t?l(t):e},d=function(e,t){return l(u(c(e),t))},f=function(e,r){null==r&&(r="/");var i=l(e);if(o.call(n,i))return n[i].exports;if(o.call(t,i))return a(i,t[i]);throw new Error("Cannot find module '"+e+"' from '"+r+"'")};f.alias=function(e,t){r[t]=e};var m=/\.[^.\/]+$/,g=/\/index(\.[^\/]+)?$/,p=function(e){if(m.test(e)){var t=e.replace(m,"");o.call(r,t)&&r[t].replace(m,"")!==t+"/index"||(r[t]=e)}if(g.test(e)){var n=e.replace(g,"");o.call(r,n)||(r[n]=e)}};f.register=f.define=function(e,r){if(e&&"object"==typeof e)for(var i in e)o.call(e,i)&&f.register(i,e[i]);else t[e]=r,delete n[e],p(e)},f.list=function(){var e=[];for(var n in t)o.call(t,n)&&e.push(n);return e};var h=e._hmr&&new e._hmr(d,f,t,n);f._cache=n,f.hmr=h&&h.wrap,f.brunch=!0,e.require=f}}(),function(){"undefined"==typeof window?this:window;require.register("dark-light-mode.js",function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={init:function(){var e="light",t="dark",n=t+"-mode",r=e+"-mode",o="prefersColorScheme",i=document.querySelector("html"),u=function(){i.classList.contains(n)?c():s()},c=function(){i.classList.remove(n),i.classList.add(r),localStorage.setItem(o,e)},s=function(){i.classList.add(n),i.classList.remove(r),localStorage.setItem(o,t)},a=function(){return matchMedia("(prefers-color-scheme: dark)").matches?localStorage.getItem(o)!=e:localStorage.getItem(o)===t};document.getElementById("dark-mode-toggle").addEventListener("click",u),a()?i.classList.add(n):i.classList.add(r)}}}),require.register("home-greeting.js",function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={init:function(){var e=document.querySelector("#surprise");e&&(e.innerText=this.getGreeting())},getGreeting:function(){var e=Math.floor(100*Math.random())%2;return 0===e?this.timeGreeting()+".":this.dayGreeting()+"."},timeGreeting:function(){var e=(new Date).getHours();return e>4&&e<12?"Good morning":e>=12&&e<17?"Good afternoon":e>=17&&e<22?"Good evening":"I hope you're getting enough sleep"},dayGreeting:function(){var e="Monday",t=["Sunday",e,"Tuesday","Wednesday","Thursday","Friday","Saturday"],n=t[(new Date).getDay()];return(n===e?"Welcome back to":"Happy")+" "+n}}}),require.register("js-enabled.js",function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={init:function(){var e="no-js",t="."+e;document.querySelectorAll(t).forEach(function(t){return t.classList.remove(e)})}}}),require.register("main.js",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=t("./js-enabled"),i=r(o),u=t("./home-greeting"),c=r(u),s=t("./dark-light-mode"),a=r(s),l=t("./sticky-header"),d=r(l),f=t("./mobile-menu"),m=r(f),g=t("./poetry"),p=r(g);!function(){document.addEventListener("DOMContentLoaded",function(){i["default"].init(),c["default"].init(),a["default"].init(),d["default"].init(),m["default"].init(),p["default"].init()})}()}),require.register("mobile-menu.js",function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={init:function(){var e=document.querySelector("#mobile-menu-btn"),t=document.querySelector("#mobile-menu");t&&e&&e.addEventListener("click",function(n){e.classList.toggle("open"),t.classList.toggle("open")})}}}),require.register("poetry.js",function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,i){try{var u=t[o](i),c=u.value}catch(s){return void n(s)}return u.done?void e(c):Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)})}return r("next")})}}Object.defineProperty(e,"__esModule",{value:!0}),t("regenerator-runtime/runtime.js"),e["default"]={init:function(){var e=document.getElementById("read-poetry");if(e){var t=document.querySelector("html"),n=document.getElementById("poetry-modal"),o=document.getElementById("modal-overlay");o.addEventListener("click",function(e){t.classList.remove("modal-open"),n.classList.remove("show"),o.classList.remove("show")}),e.addEventListener("click",function(){var e=r(regeneratorRuntime.mark(function i(e){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://poetrydb.org/random").then(function(e){return e.json()}).then(function(e){return e[0]});case 2:r=e.sent,n.querySelector("h1").innerHTML=r.title,n.querySelector("h2").innerHTML="by "+r.author,n.querySelector(".body").innerHTML="",r.lines.forEach(function(e){var t=document.createElement("p");t.innerHTML=e,n.querySelector(".body").append(t)}),t.classList.add("modal-open"),n.classList.add("show"),o.classList.add("show");case 10:case"end":return e.stop()}},i,void 0)}));return function(t){return e.apply(this,arguments)}}())}}}}),require.register("sticky-header.js",function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={init:function(){if(document.getElementById("home")){var e=function(){var e=o.getBoundingClientRect().top,t=e/s;return t<.75},t=function(){u.height=a,u.width=a,i.classList.add("fixedTop"),r.appendChild(d)},n=function(){u.height=l,u.width=l,i.classList.remove("fixedTop"),d.remove()},r=document.querySelector("header"),o=document.querySelector("main"),i=document.querySelector("#top-bar"),u=document.querySelector("img"),c={previousScroll:window.pageYOffset,isScrollingDown:function(){return window.pageYOffset>this.previousScroll},setPreviousScroll:function(){this.previousScroll=window.pageYOffset}},s=(u.getBoundingClientRect().top,i.offsetHeight),a=50,l=200,d=document.createElement("div");d.style.height=s+"px",window.pageYOffset>0&&e()&&t(),window.onscroll=function(r){c.isScrollingDown()&&e()?t():(c.setPreviousScroll(),n())}}}}}),require.register("___globals___",function(e,t,n){})}(),require("___globals___"),require("main");