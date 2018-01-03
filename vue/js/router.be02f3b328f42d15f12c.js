!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=108)}({108:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(109),o=function(t){return t&&t.__esModule?t:{default:t}}(n);Vue.use(o.default);var i=[];e.default=new o.default({routes:i})},109:function(t,e,r){"use strict";function n(t,e){if(!t)throw new Error("[vue-router] "+e)}function o(t,e){t||"undefined"!=typeof console&&console.warn("[vue-router] "+e)}function i(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function a(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:o(!1,'props in "'+t.path+'" is a '+typeof e+", expecting an object, function or boolean.")}}function u(t,e){for(var r in e)t[r]=e[r];return t}function c(t,e,r){void 0===e&&(e={});var n,i=r||s;try{n=i(t||"")}catch(t){o(!1,t.message),n={}}for(var a in e)n[a]=e[a];return n}function s(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var r=t.replace(/\+/g," ").split("="),n=It(r.shift()),o=r.length>0?It(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]}),e):e}function f(t){var e=t?Object.keys(t).map(function(e){var r=t[e];if(void 0===r)return"";if(null===r)return Ht(e);if(Array.isArray(r)){var n=[];return r.forEach(function(t){void 0!==t&&(null===t?n.push(Ht(e)):n.push(Ht(e)+"="+Ht(t)))}),n.join("&")}return Ht(e)+"="+Ht(r)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}function p(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=h(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:d(e,o),matched:t?l(t):[]};return r&&(a.redirectedFrom=d(r,o)),Object.freeze(a)}function h(t){if(Array.isArray(t))return t.map(h);if(t&&"object"==typeof t){var e={};for(var r in t)e[r]=h(t[r]);return e}return t}function l(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function d(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;void 0===o&&(o="");var i=e||f;return(r||"/")+i(n)+o}function y(t,e){return e===Dt?t===e:!!e&&(t.path&&e.path?t.path.replace(zt,"")===e.path.replace(zt,"")&&t.hash===e.hash&&v(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&v(t.query,e.query)&&v(t.params,e.params)))}function v(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t),n=Object.keys(e);return r.length===n.length&&r.every(function(r){var n=t[r],o=e[r];return"object"==typeof n&&"object"==typeof o?v(n,o):String(n)===String(o)})}function m(t,e){return 0===t.path.replace(zt,"/").indexOf(e.path.replace(zt,"/"))&&(!e.hash||t.hash===e.hash)&&g(t.query,e.query)}function g(t,e){for(var r in e)if(!(r in t))return!1;return!0}function b(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){if(/\b_blank\b/i.test(t.currentTarget.getAttribute("target")))return}return t.preventDefault&&t.preventDefault(),!0}}function w(t){if(t)for(var e,r=0;r<t.length;r++){if(e=t[r],"a"===e.tag)return e;if(e.children&&(e=w(e.children)))return e}}function x(t){if(!x.installed||Lt!==t){x.installed=!0,Lt=t;var e=function(t){return void 0!==t},r=function(t,r){var n=t.$options._parentVnode;e(n)&&e(n=n.data)&&e(n=n.registerRouteInstance)&&n(t,r)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("router-view",Ut),t.component("router-link",Jt);var n=t.config.optionMergeStrategies;n.beforeRouteEnter=n.beforeRouteLeave=n.beforeRouteUpdate=n.created}}function k(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function R(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}function E(t){return t.replace(/\/\//g,"/")}function O(t,e){for(var r,n=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(r=te.exec(t));){var c=r[0],s=r[1],f=r.index;if(a+=t.slice(i,f),i=f+c.length,s)a+=s[1];else{var p=t[i],h=r[2],l=r[3],d=r[4],y=r[5],v=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=p&&p!==h,b="+"===v||"*"===v,w="?"===v||"*"===v,x=r[2]||u,k=d||y;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:w,repeat:b,partial:g,asterisk:!!m,pattern:k?T(k):m?".*":"[^"+S(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function _(t,e){return A(O(t,e))}function j(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function C(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function A(t){for(var e=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(e[r]=new RegExp("^(?:"+t[r].pattern+")$"));return function(r,n){for(var o="",i=r||{},a=n||{},u=a.pretty?j:encodeURIComponent,c=0;c<t.length;c++){var s=t[c];if("string"!=typeof s){var f,p=i[s.name];if(null==p){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(Qt(p)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(f=u(p[h]),!e[c].test(f))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(f)+"`");o+=(0===h?s.prefix:s.delimiter)+f}}else{if(f=s.asterisk?C(p):u(p),!e[c].test(f))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+f+'"');o+=s.prefix+f}}else o+=s}return o}}function S(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function T(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function $(t,e){return t.keys=e,t}function q(t){return t.sensitive?"":"i"}function P(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return $(t,e)}function L(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(V(t[o],e,r).source);return $(new RegExp("(?:"+n.join("|")+")",q(r)),e)}function U(t,e,r){return M(O(t,r),e,r)}function M(t,e,r){Qt(e)||(r=e||r,e=[]),r=r||{};for(var n=r.strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=S(u);else{var c=S(u.prefix),s="(?:"+u.pattern+")";e.push(u),u.repeat&&(s+="(?:"+c+s+")*"),s=u.optional?u.partial?c+"("+s+")?":"(?:"+c+"("+s+"))?":c+"("+s+")",i+=s}}var f=S(r.delimiter||"/"),p=i.slice(-f.length)===f;return n||(i=(p?i.slice(0,-f.length):i)+"(?:"+f+"(?=$))?"),i+=o?"$":n&&p?"":"(?="+f+"|$)",$(new RegExp("^"+i,q(r)),e)}function V(t,e,r){return Qt(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?P(t,e):Qt(t)?L(t,e,r):U(t,e,r)}function B(t,e,r){try{return(ee[t]||(ee[t]=Wt.compile(t)))(e||{},{pretty:!0})}catch(t){return o(!1,"missing param for "+r+": "+t.message),""}}function H(t,e,r,n){var o=e||[],i=r||Object.create(null),a=n||Object.create(null);t.forEach(function(t){I(o,i,a,t)});for(var u=0,c=o.length;u<c;u++)"*"===o[u]&&(o.push(o.splice(u,1)[0]),c--,u--);return{pathList:o,pathMap:i,nameMap:a}}function I(t,e,r,i,a,u){var c=i.path,s=i.name;n(null!=c,'"path" is required in a route configuration.'),n("string"!=typeof i.component,'route config "component" for path: '+String(c||s)+" cannot be a string id. Use an actual component instead.");var f=i.pathToRegexpOptions||{},p=D(c,a,f.strict);"boolean"==typeof i.caseSensitive&&(f.sensitive=i.caseSensitive);var h={path:p,regex:z(p,f),components:i.components||{default:i.component},instances:{},name:s,parent:a,matchAs:u,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:null==i.props?{}:i.components?i.props:{default:i.props}};if(i.children&&(i.name&&!i.redirect&&i.children.some(function(t){return/^\/?$/.test(t.path)})&&o(!1,"Named Route '"+i.name+"' has a default child route. When navigating to this named route (:to=\"{name: '"+i.name+"'\"), the default child route will not be rendered. Remove the name from this route and use the name of the default child route for named links instead."),i.children.forEach(function(n){var o=u?E(u+"/"+n.path):void 0;I(t,e,r,n,h,o)})),void 0!==i.alias){(Array.isArray(i.alias)?i.alias:[i.alias]).forEach(function(n){var o={path:n,children:i.children};I(t,e,r,o,a,h.path||"/")})}e[h.path]||(t.push(h.path),e[h.path]=h),s&&(r[s]?u||o(!1,'Duplicate named routes definition: { name: "'+s+'", path: "'+h.path+'" }'):r[s]=h)}function z(t,e){var r=Wt(t,[],e),n=Object.create(null);return r.keys.forEach(function(e){o(!n[e.name],'Duplicate param keys in route with path: "'+t+'"'),n[e.name]=!0}),r}function D(t,e,r){return r||(t=t.replace(/\/$/,"")),"/"===t[0]?t:null==e?t:E(e.path+"/"+t)}function F(t,e,r,n){var i="string"==typeof t?{path:t}:t;if(i.name||i._normalized)return i;if(!i.path&&i.params&&e){i=N({},i),i._normalized=!0;var a=N(N({},e.params),i.params);if(e.name)i.name=e.name,i.params=a;else if(e.matched.length){var u=e.matched[e.matched.length-1].path;i.path=B(u,a,"path "+e.path)}else o(!1,"relative params navigation requires a current route.");return i}var s=R(i.path||""),f=e&&e.path||"/",p=s.path?k(s.path,f,r||i.append):f,h=c(s.query,i.query,n&&n.options.parseQuery),l=i.hash||s.hash;return l&&"#"!==l.charAt(0)&&(l="#"+l),{_normalized:!0,path:p,query:h,hash:l}}function N(t,e){for(var r in e)t[r]=e[r];return t}function J(t,e){function r(t){H(t,f,h,l)}function i(t,r,n){var i=F(t,r,!1,e),a=i.name;if(a){var u=l[a];if(o(u,"Route with name '"+a+"' does not exist"),!u)return c(null,i);var s=u.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof i.params&&(i.params={}),r&&"object"==typeof r.params)for(var p in r.params)!(p in i.params)&&s.indexOf(p)>-1&&(i.params[p]=r.params[p]);if(u)return i.path=B(u.path,i.params,'named route "'+a+'"'),c(u,i,n)}else if(i.path){i.params={};for(var d=0;d<f.length;d++){var y=f[d],v=h[y];if(K(v.regex,i.path,i.params))return c(v,i,n)}}return c(null,i)}function a(t,r){var a=t.redirect,u="function"==typeof a?a(p(t,r,null,e)):a;if("string"==typeof u&&(u={path:u}),!u||"object"!=typeof u)return o(!1,"invalid redirect option: "+JSON.stringify(u)),c(null,r);var s=u,f=s.name,h=s.path,d=r.query,y=r.hash,v=r.params;if(d=s.hasOwnProperty("query")?s.query:d,y=s.hasOwnProperty("hash")?s.hash:y,v=s.hasOwnProperty("params")?s.params:v,f){return n(l[f],'redirect failed: named route "'+f+'" not found.'),i({_normalized:!0,name:f,query:d,hash:y,params:v},void 0,r)}if(h){var m=Q(h,t);return i({_normalized:!0,path:B(m,v,'redirect route with path "'+m+'"'),query:d,hash:y},void 0,r)}return o(!1,"invalid redirect option: "+JSON.stringify(u)),c(null,r)}function u(t,e,r){var n=B(r,e.params,'aliased route with path "'+r+'"'),o=i({_normalized:!0,path:n});if(o){var a=o.matched,u=a[a.length-1];return e.params=o.params,c(u,e)}return c(null,e)}function c(t,r,n){return t&&t.redirect?a(t,n||r):t&&t.matchAs?u(t,r,t.matchAs):p(t,r,n,e)}var s=H(t),f=s.pathList,h=s.pathMap,l=s.nameMap;return{match:i,addRoutes:r}}function K(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1],u="string"==typeof n[o]?decodeURIComponent(n[o]):n[o];a&&(r[a.name]=u)}return!0}function Q(t,e){return k(t,e.parent?e.parent.path:"/",!0)}function W(){window.history.replaceState({key:at()},""),window.addEventListener("popstate",function(t){Y(),t.state&&t.state.key&&ut(t.state.key)})}function X(t,e,r,o){if(t.app){var i=t.options.scrollBehavior;i&&(n("function"==typeof i,"scrollBehavior must be a function"),t.app.$nextTick(function(){var t=G(),a=i(e,r,o?t:null);a&&("function"==typeof a.then?a.then(function(e){ot(e,t)}).catch(function(t){n(!1,t.toString())}):ot(a,t))}))}}function Y(){var t=at();t&&(re[t]={x:window.pageXOffset,y:window.pageYOffset})}function G(){var t=at();if(t)return re[t]}function Z(t,e){var r=document.documentElement,n=r.getBoundingClientRect(),o=t.getBoundingClientRect();return{x:o.left-n.left-e.x,y:o.top-n.top-e.y}}function tt(t){return nt(t.x)||nt(t.y)}function et(t){return{x:nt(t.x)?t.x:window.pageXOffset,y:nt(t.y)?t.y:window.pageYOffset}}function rt(t){return{x:nt(t.x)?t.x:0,y:nt(t.y)?t.y:0}}function nt(t){return"number"==typeof t}function ot(t,e){var r="object"==typeof t;if(r&&"string"==typeof t.selector){var n=document.querySelector(t.selector);if(n){var o=t.offset&&"object"==typeof t.offset?t.offset:{};o=rt(o),e=Z(n,o)}else tt(t)&&(e=et(t))}else r&&tt(t)&&(e=et(t));e&&window.scrollTo(e.x,e.y)}function it(){return oe.now().toFixed(3)}function at(){return ie}function ut(t){ie=t}function ct(t,e){Y();var r=window.history;try{e?r.replaceState({key:ie},"",t):(ie=it(),r.pushState({key:ie},"",t))}catch(r){window.location[e?"replace":"assign"](t)}}function st(t){ct(t,!0)}function ft(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],function(){n(o+1)}):n(o+1)};n(0)}function pt(t){return function(e,r,n){var a=!1,u=0,c=null;ht(t,function(t,e,r,s){if("function"==typeof t&&void 0===t.cid){a=!0,u++;var f,p=yt(function(e){dt(e)&&(e=e.default),t.resolved="function"==typeof e?e:Lt.extend(e),r.components[s]=e,--u<=0&&n()}),h=yt(function(t){var e="Failed to resolve async component "+s+": "+t;o(!1,e),c||(c=i(t)?t:new Error(e),n(c))});try{f=t(p,h)}catch(t){h(t)}if(f)if("function"==typeof f.then)f.then(p,h);else{var l=f.component;l&&"function"==typeof l.then&&l.then(p,h)}}}),a||n()}}function ht(t,e){return lt(t.map(function(t){return Object.keys(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r)})}))}function lt(t){return Array.prototype.concat.apply([],t)}function dt(t){return t.__esModule||ae&&"Module"===t[Symbol.toStringTag]}function yt(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}function vt(t){if(!t)if(Kt){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function mt(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}function gt(t,e,r,n){var o=ht(t,function(t,n,o,i){var a=bt(t,e);if(a)return Array.isArray(a)?a.map(function(t){return r(t,n,o,i)}):r(a,n,o,i)});return lt(n?o.reverse():o)}function bt(t,e){return"function"!=typeof t&&(t=Lt.extend(t)),t.options[e]}function wt(t){return gt(t,"beforeRouteLeave",kt,!0)}function xt(t){return gt(t,"beforeRouteUpdate",kt)}function kt(t,e){if(e)return function(){return t.apply(e,arguments)}}function Rt(t,e,r){return gt(t,"beforeRouteEnter",function(t,n,o,i){return Et(t,o,i,e,r)})}function Et(t,e,r,n,o){return function(i,a,u){return t(i,a,function(t){u(t),"function"==typeof t&&n.push(function(){Ot(t,e.instances,r,o)})})}}function Ot(t,e,r,n){e[r]?t(e[r]):n()&&setTimeout(function(){Ot(t,e,r,n)},16)}function _t(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function jt(t){var e=_t(t);if(!/^\/#/.test(e))return window.location.replace(E(t+"/#"+e)),!0}function Ct(){var t=At();return"/"===t.charAt(0)||($t("/"+t),!1)}function At(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.slice(e+1)}function St(t){var e=window.location.href,r=e.indexOf("#");return(r>=0?e.slice(0,r):e)+"#"+t}function Tt(t){ne?ct(St(t)):window.location.hash=t}function $t(t){ne?st(St(t)):window.location.replace(St(t))}function qt(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function Pt(t,e,r){var n="hash"===r?"#"+e:e;return t?E(t+"/"+n):n}Object.defineProperty(e,"__esModule",{value:!0});var Lt,Ut={name:"router-view",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,n=e.children,o=e.parent,i=e.data;i.routerView=!0;for(var c=o.$createElement,s=r.name,f=o.$route,p=o._routerViewCache||(o._routerViewCache={}),h=0,l=!1;o&&o._routerRoot!==o;)o.$vnode&&o.$vnode.data.routerView&&h++,o._inactive&&(l=!0),o=o.$parent;if(i.routerViewDepth=h,l)return c(p[s],i,n);var d=f.matched[h];if(!d)return p[s]=null,c();var y=p[s]=d.components[s];i.registerRouteInstance=function(t,e){var r=d.instances[s];(e&&r!==t||!e&&r===t)&&(d.instances[s]=e)},(i.hook||(i.hook={})).prepatch=function(t,e){d.instances[s]=e.componentInstance};var v=i.props=a(f,d.props&&d.props[s]);if(v){v=i.props=u({},v);var m=i.attrs=i.attrs||{};for(var g in v)y.props&&g in y.props||(m[g]=v[g],delete v[g])}return c(y,i,n)}},Mt=/[!'()*]/g,Vt=function(t){return"%"+t.charCodeAt(0).toString(16)},Bt=/%2C/g,Ht=function(t){return encodeURIComponent(t).replace(Mt,Vt).replace(Bt,",")},It=decodeURIComponent,zt=/\/?$/,Dt=p(null,{path:"/"}),Ft=[String,Object],Nt=[String,Array],Jt={name:"router-link",props:{to:{type:Ft,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:Nt,default:"click"}},render:function(t){var e=this,r=this.$router,n=this.$route,o=r.resolve(this.to,n,this.append),i=o.location,a=o.route,u=o.href,c={},s=r.options.linkActiveClass,f=r.options.linkExactActiveClass,h=null==s?"router-link-active":s,l=null==f?"router-link-exact-active":f,d=null==this.activeClass?h:this.activeClass,v=null==this.exactActiveClass?l:this.exactActiveClass,g=i.path?p(null,i,null,r):a;c[v]=y(n,g),c[d]=this.exact?c[v]:m(n,g);var x=function(t){b(t)&&(e.replace?r.replace(i):r.push(i))},k={click:b};Array.isArray(this.event)?this.event.forEach(function(t){k[t]=x}):k[this.event]=x;var R={class:c};if("a"===this.tag)R.on=k,R.attrs={href:u};else{var E=w(this.$slots.default);if(E){E.isStatic=!1;var O=Lt.util.extend;(E.data=O({},E.data)).on=k;(E.data.attrs=O({},E.data.attrs)).href=u}else R.on=k}return t(this.tag,R,this.$slots.default)}},Kt="undefined"!=typeof window,Qt=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},Wt=V,Xt=O,Yt=_,Gt=A,Zt=M,te=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");Wt.parse=Xt,Wt.compile=Yt,Wt.tokensToFunction=Gt,Wt.tokensToRegExp=Zt;var ee=Object.create(null),re=Object.create(null),ne=Kt&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),oe=Kt&&window.performance&&window.performance.now?window.performance:Date,ie=it(),ae="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,ue=function(t,e){this.router=t,this.base=vt(e),this.current=Dt,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};ue.prototype.listen=function(t){this.cb=t},ue.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},ue.prototype.onError=function(t){this.errorCbs.push(t)},ue.prototype.transitionTo=function(t,e,r){var n=this,o=this.router.match(t,this.current);this.confirmTransition(o,function(){n.updateRoute(o),e&&e(o),n.ensureURL(),n.ready||(n.ready=!0,n.readyCbs.forEach(function(t){t(o)}))},function(t){r&&r(t),t&&!n.ready&&(n.ready=!0,n.readyErrorCbs.forEach(function(e){e(t)}))})},ue.prototype.confirmTransition=function(t,e,r){var n=this,a=this.current,u=function(t){i(t)&&(n.errorCbs.length?n.errorCbs.forEach(function(e){e(t)}):(o(!1,"uncaught error during route navigation:"),console.error(t))),r&&r(t)};if(y(t,a)&&t.matched.length===a.matched.length)return this.ensureURL(),u();var c=mt(this.current.matched,t.matched),s=c.updated,f=c.deactivated,p=c.activated,h=[].concat(wt(f),this.router.beforeHooks,xt(s),p.map(function(t){return t.beforeEnter}),pt(p));this.pending=t;var l=function(e,r){if(n.pending!==t)return u();try{e(t,a,function(t){!1===t||i(t)?(n.ensureURL(!0),u(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(u(),"object"==typeof t&&t.replace?n.replace(t):n.push(t)):r(t)})}catch(t){u(t)}};ft(h,l,function(){var r=[];ft(Rt(p,r,function(){return n.current===t}).concat(n.router.resolveHooks),l,function(){if(n.pending!==t)return u();n.pending=null,e(t),n.router.app&&n.router.app.$nextTick(function(){r.forEach(function(t){t()})})})})},ue.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(r){r&&r(t,e)})};var ce=function(t){function e(e,r){var n=this;t.call(this,e,r);var o=e.options.scrollBehavior;o&&W();var i=_t(this.base);window.addEventListener("popstate",function(t){var r=n.current,a=_t(n.base);n.current===Dt&&a===i||n.transitionTo(a,function(t){o&&X(e,t,r,!0)})})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,function(t){ct(E(n.base+t.fullPath)),X(n.router,t,i,!1),e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,function(t){st(E(n.base+t.fullPath)),X(n.router,t,i,!1),e&&e(t)},r)},e.prototype.ensureURL=function(t){if(_t(this.base)!==this.current.fullPath){var e=E(this.base+this.current.fullPath);t?ct(e):st(e)}},e.prototype.getCurrentLocation=function(){return _t(this.base)},e}(ue),se=function(t){function e(e,r,n){t.call(this,e,r),n&&jt(this.base)||Ct()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this,e=this.router,r=e.options.scrollBehavior,n=ne&&r;n&&W(),window.addEventListener(ne?"popstate":"hashchange",function(){var e=t.current;Ct()&&t.transitionTo(At(),function(r){n&&X(t.router,r,e,!0),ne||$t(r.fullPath)})})},e.prototype.push=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,function(t){Tt(t.fullPath),X(n.router,t,i,!1),e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,function(t){$t(t.fullPath),X(n.router,t,i,!1),e&&e(t)},r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;At()!==e&&(t?Tt(e):$t(e))},e.prototype.getCurrentLocation=function(){return At()},e}(ue),fe=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)},r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,function(){e.index=r,e.updateRoute(n)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(ue),pe=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=J(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!ne&&!1!==t.fallback,this.fallback&&(e="hash"),Kt||(e="abstract"),this.mode=e,e){case"history":this.history=new ce(this,t.base);break;case"hash":this.history=new se(this,t.base,this.fallback);break;case"abstract":this.history=new fe(this,t.base);break;default:n(!1,"invalid mode: "+e)}},he={currentRoute:{configurable:!0}};pe.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},he.currentRoute.get=function(){return this.history&&this.history.current},pe.prototype.init=function(t){var e=this;if(n(x.installed,"not installed. Make sure to call `Vue.use(VueRouter)` before creating root instance."),this.apps.push(t),!this.app){this.app=t;var r=this.history;if(r instanceof ce)r.transitionTo(r.getCurrentLocation());else if(r instanceof se){var o=function(){r.setupListeners()};r.transitionTo(r.getCurrentLocation(),o,o)}r.listen(function(t){e.apps.forEach(function(e){e._route=t})})}},pe.prototype.beforeEach=function(t){return qt(this.beforeHooks,t)},pe.prototype.beforeResolve=function(t){return qt(this.resolveHooks,t)},pe.prototype.afterEach=function(t){return qt(this.afterHooks,t)},pe.prototype.onReady=function(t,e){this.history.onReady(t,e)},pe.prototype.onError=function(t){this.history.onError(t)},pe.prototype.push=function(t,e,r){this.history.push(t,e,r)},pe.prototype.replace=function(t,e,r){this.history.replace(t,e,r)},pe.prototype.go=function(t){this.history.go(t)},pe.prototype.back=function(){this.go(-1)},pe.prototype.forward=function(){this.go(1)},pe.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},pe.prototype.resolve=function(t,e,r){var n=F(t,e||this.history.current,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath;return{location:n,route:o,href:Pt(this.history.base,i,this.mode),normalizedTo:n,resolved:o}},pe.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==Dt&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(pe.prototype,he),pe.install=x,pe.version="3.0.1",Kt&&window.Vue&&window.Vue.use(pe),e.default=pe}});