(function(n){function e(e){for(var r,i,u=e[0],s=e[1],c=e[2],f=0,p=[];f<u.length;f++)i=u[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],r=!0,u=1;u<t.length;u++){var s=t[u];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/insta/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=s;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[n._m(0),n._m(1),t("ol",{attrs:{id:"links"}},n._l(n.links,function(e,r){return t("li",{key:r},[t("a",{attrs:{href:e.href}},[n._v(n._s(e.title))])])}),0)])},a=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"profile"}},[t("a",{attrs:{href:"https://instagram.com/sakjosep"}},[t("img",{attrs:{src:"me-sm-cropped.jpg",alt:"Profile photo of Joe standing in agave fields, with mountains in the background"}}),n._v("\n\n      @sakjosep\n    ")])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",[n._v("\n    Photo essays by Joseph M. Sak"),t("br"),n._v("\n    An American Photographer in Guadalajara\n  ")])}],i={name:"app",data:function(){return{links:[]}},created:function(){var n=this;fetch("data/links.json").then(function(n){return n.json()}).then(function(e){return n.links=e})}},u=i,s=(t("5c0b"),t("2877")),c=Object(s["a"])(u,o,a,!1,null,null,null);c.options.__file="App.vue";var l=c.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(n){return n(l)}}).$mount("#app")},"5c0b":function(n,e,t){"use strict";var r=t("5e27"),o=t.n(r);o.a},"5e27":function(n,e,t){}});
//# sourceMappingURL=app.bab49518.js.map