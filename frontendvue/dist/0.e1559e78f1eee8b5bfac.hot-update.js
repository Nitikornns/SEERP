webpackHotUpdate(0,{"./src/main.js":function(t,e,n){"use strict";n.r(e);var r=n("./node_modules/vue/dist/vue.esm.js"),o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-img",{attrs:{src:".src/assets/logo.png"}}),this._v(" "),e("router-view")],1)},i=[];function a(t,e,n,r,o,i,a,s){var u=typeof(t=t||{}).default;"object"!==u&&"function"!==u||(t=t.default);var c,p="function"==typeof t?t.options:t;if(e&&(p.render=e,p.staticRenderFns=n,p._compiled=!0),r&&(p.functional=!0),i&&(p._scopeId=i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},p._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(p.functional){p._injectStyles=c;var f=p.render;p.render=function(t,e){return c.call(e),f(t,e)}}else{var h=p.beforeCreate;p.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:p}}o._withStripped=!0,t.hot.accept(),t.hot.data&&n("./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-04c2046b",{render:o,staticRenderFns:i});var s=!1;var u,c=a({name:"App"},o,i,!1,(function(t){s||n('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?{"sourceMap":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/App.vue')}),null,null);c.options.__file="src\\App.vue",(u=n("./node_modules/vue-hot-reload-api/dist/index.js")).install(n("./node_modules/vue/dist/vue.esm.js"),!1),u.compatible&&(t.hot.accept(),t.hot.data?u.reload("data-v-04c2046b",c.options):u.createRecord("data-v-04c2046b",c.options),t.hot.dispose((function(t){s=!0})));var p=c.exports;
/*!
  * vue-router v3.1.6
  * (c) 2020 Evan You
  * @license MIT
  */function f(t,e){if(!t)throw new Error("[vue-router] "+e)}function h(t,e){t||"undefined"!=typeof console&&console.warn("[vue-router] "+e)}function l(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function d(t,e){return e instanceof t||e&&(e.name===t.name||e._name===t._name)}function v(t,e){for(var n in e)t[n]=e[n];return t}var m={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,o=e.parent,i=e.data;i.routerView=!0;for(var a=o.$createElement,s=n.name,u=o.$route,c=o._routerViewCache||(o._routerViewCache={}),p=0,f=!1;o&&o._routerRoot!==o;){var h=o.$vnode?o.$vnode.data:{};h.routerView&&p++,h.keepAlive&&o._directInactive&&o._inactive&&(f=!0),o=o.$parent}if(i.routerViewDepth=p,f){var l=c[s],d=l&&l.component;return d?(l.configProps&&y(d,i,l.route,l.configProps),a(d,i,r)):a()}var m=u.matched[p],g=m&&m.components[s];if(!m||!g)return c[s]=null,a();c[s]={component:g},i.registerRouteInstance=function(t,e){var n=m.instances[s];(e&&n!==t||!e&&n===t)&&(m.instances[s]=e)},(i.hook||(i.hook={})).prepatch=function(t,e){m.instances[s]=e.componentInstance},i.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[s]&&(m.instances[s]=t.componentInstance)};var b=m.props&&m.props[s];return b&&(v(c[s],{route:u,configProps:b}),y(g,i,u,b)),a(g,i,r)}};function y(t,e,n,r){var o=e.props=function(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:h(!1,'props in "'+t.path+'" is a '+typeof e+", expecting an object, function or boolean.")}}(n,r);if(o){o=e.props=v({},o);var i=e.attrs=e.attrs||{};for(var a in o)t.props&&a in t.props||(i[a]=o[a],delete o[a])}}var g=/[!'()*]/g,b=function(t){return"%"+t.charCodeAt(0).toString(16)},w=/%2C/g,_=function(t){return encodeURIComponent(t).replace(g,b).replace(w,",")},x=decodeURIComponent;function k(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=x(n.shift()),o=n.length>0?x(n.join("=")):null;void 0===e[r]?e[r]=o:Array.isArray(e[r])?e[r].push(o):e[r]=[e[r],o]})),e):e}function j(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return _(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(_(e)):r.push(_(e)+"="+_(t)))})),r.join("&")}return _(e)+"="+_(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var R=/\/?$/;function E(t,e,n,r){var o=r&&r.options.stringifyQuery,i=e.query||{};try{i=A(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:S(e,o),matched:t?O(t):[]};return n&&(a.redirectedFrom=S(n,o)),Object.freeze(a)}function A(t){if(Array.isArray(t))return t.map(A);if(t&&"object"==typeof t){var e={};for(var n in t)e[n]=A(t[n]);return e}return t}var C=E(null,{path:"/"});function O(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function S(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var o=t.hash;return void 0===o&&(o=""),(n||"/")+(e||j)(r)+o}function $(t,e){return e===C?t===e:!!e&&(t.path&&e.path?t.path.replace(R,"")===e.path.replace(R,"")&&t.hash===e.hash&&T(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&T(t.query,e.query)&&T(t.params,e.params)))}function T(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&n.every((function(n){var r=t[n],o=e[n];return"object"==typeof r&&"object"==typeof o?T(r,o):String(r)===String(o)}))}function P(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var o=e.split("/");n&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var s=i[a];".."===s?o.pop():"."!==s&&o.push(s)}return""!==o[0]&&o.unshift(""),o.join("/")}function L(t){return t.replace(/\/\//g,"/")}var U=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},q=Y,I=N,M=function(t,e){return D(N(t,e))},V=D,H=X,F=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function N(t,e){for(var n,r=[],o=0,i=0,a="",s=e&&e.delimiter||"/";null!=(n=F.exec(t));){var u=n[0],c=n[1],p=n.index;if(a+=t.slice(i,p),i=p+u.length,c)a+=c[1];else{var f=t[i],h=n[2],l=n[3],d=n[4],v=n[5],m=n[6],y=n[7];a&&(r.push(a),a="");var g=null!=h&&null!=f&&f!==h,b="+"===m||"*"===m,w="?"===m||"*"===m,_=n[2]||s,x=d||v;r.push({name:l||o++,prefix:h||"",delimiter:_,optional:w,repeat:b,partial:g,asterisk:!!y,pattern:x?W(x):y?".*":"[^"+z(_)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function B(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function D(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=(r||{}).pretty?B:encodeURIComponent,s=0;s<t.length;s++){var u=t[s];if("string"!=typeof u){var c,p=i[u.name];if(null==p){if(u.optional){u.partial&&(o+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(U(p)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(c=a(p[f]),!e[s].test(c))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(c)+"`");o+=(0===f?u.prefix:u.delimiter)+c}}else{if(c=u.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):a(p),!e[s].test(c))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+c+'"');o+=u.prefix+c}}else o+=u}return o}}function z(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function W(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function J(t,e){return t.keys=e,t}function K(t){return t.sensitive?"":"i"}function X(t,e,n){U(e)||(n=e||n,e=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,i="",a=0;a<t.length;a++){var s=t[a];if("string"==typeof s)i+=z(s);else{var u=z(s.prefix),c="(?:"+s.pattern+")";e.push(s),s.repeat&&(c+="(?:"+u+c+")*"),i+=c=s.optional?s.partial?u+"("+c+")?":"(?:"+u+"("+c+"))?":u+"("+c+")"}}var p=z(n.delimiter||"/"),f=i.slice(-p.length)===p;return r||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":r&&f?"":"(?="+p+"|$)",J(new RegExp("^"+i,K(n)),e)}function Y(t,e,n){return U(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return J(t,e)}(t,e):U(t)?function(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(Y(t[o],e,n).source);return J(new RegExp("(?:"+r.join("|")+")",K(n)),e)}(t,e,n):function(t,e,n){return X(N(t,n),e,n)}(t,e,n)}q.parse=I,q.compile=M,q.tokensToFunction=V,q.tokensToRegExp=H;var Q=Object.create(null);function G(t,e,n){e=e||{};try{var r=Q[t]||(Q[t]=q.compile(t));return"string"==typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(t){return h("string"==typeof e.pathMatch,"missing param for "+n+": "+t.message),""}finally{delete e[0]}}function Z(t,e,n,r){var o="string"==typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){var i=(o=v({},t)).params;return i&&"object"==typeof i&&(o.params=v({},i)),o}if(!o.path&&o.params&&e){(o=v({},o))._normalized=!0;var a=v(v({},e.params),o.params);if(e.name)o.name=e.name,o.params=a;else if(e.matched.length){var s=e.matched[e.matched.length-1].path;o.path=G(s,a,"path "+e.path)}else h(!1,"relative params navigation requires a current route.");return o}var u=function(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var o=t.indexOf("?");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{path:t,query:n,hash:e}}(o.path||""),c=e&&e.path||"/",p=u.path?P(u.path,c,n||o.append):c,f=function(t,e,n){void 0===e&&(e={});var r,o=n||k;try{r=o(t||"")}catch(t){h(!1,t.message),r={}}for(var i in e)r[i]=e[i];return r}(u.query,o.query,r&&r.options.parseQuery),l=o.hash||u.hash;return l&&"#"!==l.charAt(0)&&(l="#"+l),{_normalized:!0,path:p,query:f,hash:l}}var tt,et=function(){},nt={name:"RouterLink",props:{to:{type:[String,Object],required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:[String,Array],default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,o=n.resolve(this.to,r,this.append),i=o.location,a=o.route,s=o.href,u={},c=n.options.linkActiveClass,p=n.options.linkExactActiveClass,f=null==c?"router-link-active":c,l=null==p?"router-link-exact-active":p,d=null==this.activeClass?f:this.activeClass,m=null==this.exactActiveClass?l:this.exactActiveClass,y=a.redirectedFrom?E(null,Z(a.redirectedFrom),null,n):a;u[m]=$(r,y),u[d]=this.exact?u[m]:function(t,e){return 0===t.path.replace(R,"/").indexOf(e.path.replace(R,"/"))&&(!e.hash||t.hash===e.hash)&&function(t,e){for(var n in e)if(!(n in t))return!1;return!0}(t.query,e.query)}(r,y);var g=function(t){rt(t)&&(e.replace?n.replace(i,et):n.push(i,et))},b={click:rt};Array.isArray(this.event)?this.event.forEach((function(t){b[t]=g})):b[this.event]=g;var w={class:u},_=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:s,route:a,navigate:g,isActive:u[d],isExactActive:u[m]});if(_){if(1===_.length)return _[0];if(_.length>1||!_.length)return h(!1,'RouterLink with to="'+this.to+"\" is trying to use a scoped slot but it didn't provide exactly one child. Wrapping the content with a span element."),0===_.length?t():t("span",{},_)}if("a"===this.tag)w.on=b,w.attrs={href:s};else{var x=function t(e){var n;if(e)for(var r=0;r<e.length;r++){if("a"===(n=e[r]).tag)return n;if(n.children&&(n=t(n.children)))return n}}(this.$slots.default);if(x){x.isStatic=!1;var k=x.data=v({},x.data);for(var j in k.on=k.on||{},k.on){var A=k.on[j];j in b&&(k.on[j]=Array.isArray(A)?A:[A])}for(var C in b)C in k.on?k.on[C].push(b[C]):k.on[C]=g;(x.data.attrs=v({},x.data.attrs)).href=s}else w.on=b}return t(this.tag,w,this.$slots.default)}};function rt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ot(t){if(!ot.installed||tt!==t){ot.installed=!0,tt=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",m),t.component("RouterLink",nt);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var it="undefined"!=typeof window;function at(t,e,n,r){var o=e||[],i=n||Object.create(null),a=r||Object.create(null);t.forEach((function(t){!function t(e,n,r,o,i,a){var s=o.path,u=o.name;f(null!=s,'"path" is required in a route configuration.'),f("string"!=typeof o.component,'route config "component" for path: '+String(s||u)+" cannot be a string id. Use an actual component instead.");var c=o.pathToRegexpOptions||{},p=function(t,e,n){n||(t=t.replace(/\/$/,""));if("/"===t[0])return t;if(null==e)return t;return L(e.path+"/"+t)}(s,i,c.strict);"boolean"==typeof o.caseSensitive&&(c.sensitive=o.caseSensitive);var l={path:p,regex:st(p,c),components:o.components||{default:o.component},instances:{},name:u,parent:i,matchAs:a,redirect:o.redirect,beforeEnter:o.beforeEnter,meta:o.meta||{},props:null==o.props?{}:o.components?o.props:{default:o.props}};o.children&&(o.name&&!o.redirect&&o.children.some((function(t){return/^\/?$/.test(t.path)}))&&h(!1,"Named Route '"+o.name+"' has a default child route. When navigating to this named route (:to=\"{name: '"+o.name+"'\"), the default child route will not be rendered. Remove the name from this route and use the name of the default child route for named links instead."),o.children.forEach((function(o){var i=a?L(a+"/"+o.path):void 0;t(e,n,r,o,l,i)})));n[l.path]||(e.push(l.path),n[l.path]=l);if(void 0!==o.alias)for(var d=Array.isArray(o.alias)?o.alias:[o.alias],v=0;v<d.length;++v){var m=d[v];if(m!==s){var y={path:m,children:o.children};t(e,n,r,y,i,l.path||"/")}else h(!1,'Found an alias with the same value as the path: "'+s+'". You have to remove that alias. It will be ignored in development.')}u&&(r[u]?a||h(!1,'Duplicate named routes definition: { name: "'+u+'", path: "'+l.path+'" }'):r[u]=l)}(o,i,a,t)}));for(var s=0,u=o.length;s<u;s++)"*"===o[s]&&(o.push(o.splice(s,1)[0]),u--,s--);var c=o.filter((function(t){return t&&"*"!==t.charAt(0)&&"/"!==t.charAt(0)}));return c.length>0&&h(!1,"Non-nested routes must include a leading slash character. Fix the following routes: \n"+c.map((function(t){return"- "+t})).join("\n")),{pathList:o,pathMap:i,nameMap:a}}function st(t,e){var n=q(t,[],e),r=Object.create(null);return n.keys.forEach((function(e){h(!r[e.name],'Duplicate param keys in route with path: "'+t+'"'),r[e.name]=!0})),n}function ut(t,e){var n=at(t),r=n.pathList,o=n.pathMap,i=n.nameMap;function a(t,n,a){var s=Z(t,n,!1,e),c=s.name;if(c){var p=i[c];if(h(p,"Route with name '"+c+"' does not exist"),!p)return u(null,s);var f=p.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!=typeof s.params&&(s.params={}),n&&"object"==typeof n.params)for(var l in n.params)!(l in s.params)&&f.indexOf(l)>-1&&(s.params[l]=n.params[l]);return s.path=G(p.path,s.params,'named route "'+c+'"'),u(p,s,a)}if(s.path){s.params={};for(var d=0;d<r.length;d++){var v=r[d],m=o[v];if(ct(m.regex,s.path,s.params))return u(m,s,a)}}return u(null,s)}function s(t,n){var r=t.redirect,o="function"==typeof r?r(E(t,n,null,e)):r;if("string"==typeof o&&(o={path:o}),!o||"object"!=typeof o)return h(!1,"invalid redirect option: "+JSON.stringify(o)),u(null,n);var s=o,c=s.name,p=s.path,l=n.query,d=n.hash,v=n.params;if(l=s.hasOwnProperty("query")?s.query:l,d=s.hasOwnProperty("hash")?s.hash:d,v=s.hasOwnProperty("params")?s.params:v,c)return f(i[c],'redirect failed: named route "'+c+'" not found.'),a({_normalized:!0,name:c,query:l,hash:d,params:v},void 0,n);if(p){var m=function(t,e){return P(t,e.parent?e.parent.path:"/",!0)}(p,t);return a({_normalized:!0,path:G(m,v,'redirect route with path "'+m+'"'),query:l,hash:d},void 0,n)}return h(!1,"invalid redirect option: "+JSON.stringify(o)),u(null,n)}function u(t,n,r){return t&&t.redirect?s(t,r||n):t&&t.matchAs?function(t,e,n){var r=a({_normalized:!0,path:G(n,e.params,'aliased route with path "'+n+'"')});if(r){var o=r.matched,i=o[o.length-1];return e.params=r.params,u(i,e)}return u(null,e)}(0,n,t.matchAs):E(t,n,r,e)}return{match:a,addRoutes:function(t){at(t,r,o,i)}}}function ct(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var o=1,i=r.length;o<i;++o){var a=t.keys[o-1],s="string"==typeof r[o]?decodeURIComponent(r[o]):r[o];a&&(n[a.name||"pathMatch"]=s)}return!0}var pt=it&&window.performance&&window.performance.now?window.performance:Date;function ft(){return pt.now().toFixed(3)}var ht=ft();function lt(){return ht}function dt(t){return ht=t}var vt=Object.create(null);function mt(){var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=v({},window.history.state);n.key=lt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",(function(t){gt(),t.state&&t.state.key&&dt(t.state.key)}))}function yt(t,e,n,r){if(t.app){var o=t.options.scrollBehavior;o&&(f("function"==typeof o,"scrollBehavior must be a function"),t.app.$nextTick((function(){var i=function(){var t=lt();if(t)return vt[t]}(),a=o.call(t,e,n,r?i:null);a&&("function"==typeof a.then?a.then((function(t){kt(t,i)})).catch((function(t){f(!1,t.toString())})):kt(a,i))})))}}function gt(){var t=lt();t&&(vt[t]={x:window.pageXOffset,y:window.pageYOffset})}function bt(t){return _t(t.x)||_t(t.y)}function wt(t){return{x:_t(t.x)?t.x:window.pageXOffset,y:_t(t.y)?t.y:window.pageYOffset}}function _t(t){return"number"==typeof t}var xt=/^#\d/;function kt(t,e){var n,r="object"==typeof t;if(r&&"string"==typeof t.selector){var o=xt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(o){var i=t.offset&&"object"==typeof t.offset?t.offset:{};e=function(t,e){var n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{x:r.left-n.left-e.x,y:r.top-n.top-e.y}}(o,i={x:_t((n=i).x)?n.x:0,y:_t(n.y)?n.y:0})}else bt(t)&&(e=wt(t))}else r&&bt(t)&&(e=wt(t));e&&window.scrollTo(e.x,e.y)}var jt,Rt=it&&((-1===(jt=window.navigator.userAgent).indexOf("Android 2.")&&-1===jt.indexOf("Android 4.0")||-1===jt.indexOf("Mobile Safari")||-1!==jt.indexOf("Chrome")||-1!==jt.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history);function Et(t,e){gt();var n=window.history;try{if(e){var r=v({},n.state);r.key=lt(),n.replaceState(r,"",t)}else n.pushState({key:dt(ft())},"",t)}catch(n){window.location[e?"replace":"assign"](t)}}function At(t){Et(t,!0)}function Ct(t,e,n){var r=function(o){o>=t.length?n():t[o]?e(t[o],(function(){r(o+1)})):r(o+1)};r(0)}function Ot(t){return function(e,n,r){var o=!1,i=0,a=null;St(t,(function(t,e,n,s){if("function"==typeof t&&void 0===t.cid){o=!0,i++;var u,c=Pt((function(e){var o;((o=e).__esModule||Tt&&"Module"===o[Symbol.toStringTag])&&(e=e.default),t.resolved="function"==typeof e?e:tt.extend(e),n.components[s]=e,--i<=0&&r()})),p=Pt((function(t){var e="Failed to resolve async component "+s+": "+t;h(!1,e),a||(a=l(t)?t:new Error(e),r(a))}));try{u=t(c,p)}catch(t){p(t)}if(u)if("function"==typeof u.then)u.then(c,p);else{var f=u.component;f&&"function"==typeof f.then&&f.then(c,p)}}})),o||r()}}function St(t,e){return $t(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function $t(t){return Array.prototype.concat.apply([],t)}var Tt="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function Pt(t){var e=!1;return function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var Lt=function(t){function e(e){t.call(this),this.name=this._name="NavigationDuplicated",this.message='Navigating to current location ("'+e.fullPath+'") is not allowed',Object.defineProperty(this,"stack",{value:(new t).stack,writable:!0,configurable:!0})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Error);Lt._name="NavigationDuplicated";var Ut=function(t,e){this.router=t,this.base=function(t){if(!t)if(it){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";"/"!==t.charAt(0)&&(t="/"+t);return t.replace(/\/$/,"")}(e),this.current=C,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};function qt(t,e,n,r){var o=St(t,(function(t,r,o,i){var a=function(t,e){"function"!=typeof t&&(t=tt.extend(t));return t.options[e]}(t,e);if(a)return Array.isArray(a)?a.map((function(t){return n(t,r,o,i)})):n(a,r,o,i)}));return $t(r?o.reverse():o)}function It(t,e){if(e)return function(){return t.apply(e,arguments)}}Ut.prototype.listen=function(t){this.cb=t},Ut.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},Ut.prototype.onError=function(t){this.errorCbs.push(t)},Ut.prototype.transitionTo=function(t,e,n){var r=this,o=this.router.match(t,this.current);this.confirmTransition(o,(function(){r.updateRoute(o),e&&e(o),r.ensureURL(),r.ready||(r.ready=!0,r.readyCbs.forEach((function(t){t(o)})))}),(function(t){n&&n(t),t&&!r.ready&&(r.ready=!0,r.readyErrorCbs.forEach((function(e){e(t)})))}))},Ut.prototype.confirmTransition=function(t,e,n){var r=this,o=this.current,i=function(t){!d(Lt,t)&&l(t)&&(r.errorCbs.length?r.errorCbs.forEach((function(e){e(t)})):(h(!1,"uncaught error during route navigation:"),console.error(t))),n&&n(t)};if($(t,o)&&t.matched.length===o.matched.length)return this.ensureURL(),i(new Lt(t));var a=function(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r&&t[n]===e[n];n++);return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}(this.current.matched,t.matched),s=a.updated,u=a.deactivated,c=a.activated,p=[].concat(function(t){return qt(t,"beforeRouteLeave",It,!0)}(u),this.router.beforeHooks,function(t){return qt(t,"beforeRouteUpdate",It)}(s),c.map((function(t){return t.beforeEnter})),Ot(c));this.pending=t;var f=function(e,n){if(r.pending!==t)return i();try{e(t,o,(function(t){!1===t||l(t)?(r.ensureURL(!0),i(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(i(),"object"==typeof t&&t.replace?r.replace(t):r.push(t)):n(t)}))}catch(t){i(t)}};Ct(p,f,(function(){var n=[];Ct(function(t,e,n){return qt(t,"beforeRouteEnter",(function(t,r,o,i){return function(t,e,n,r,o){return function(i,a,s){return t(i,a,(function(t){"function"==typeof t&&r.push((function(){!function t(e,n,r,o){n[r]&&!n[r]._isBeingDestroyed?e(n[r]):o()&&setTimeout((function(){t(e,n,r,o)}),16)}(t,e.instances,n,o)})),s(t)}))}}(t,o,i,e,n)}))}(c,n,(function(){return r.current===t})).concat(r.router.resolveHooks),f,(function(){if(r.pending!==t)return i();r.pending=null,e(t),r.router.app&&r.router.app.$nextTick((function(){n.forEach((function(t){t()}))}))}))}))},Ut.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach((function(n){n&&n(t,e)}))};var Mt=function(t){function e(e,n){var r=this;t.call(this,e,n);var o=e.options.scrollBehavior,i=Rt&&o;i&&mt();var a=Vt(this.base);window.addEventListener("popstate",(function(t){var n=r.current,o=Vt(r.base);r.current===C&&o===a||r.transitionTo(o,(function(t){i&&yt(e,t,n,!0)}))}))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,o=this.current;this.transitionTo(t,(function(t){Et(L(r.base+t.fullPath)),yt(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,o=this.current;this.transitionTo(t,(function(t){At(L(r.base+t.fullPath)),yt(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(Vt(this.base)!==this.current.fullPath){var e=L(this.base+this.current.fullPath);t?Et(e):At(e)}},e.prototype.getCurrentLocation=function(){return Vt(this.base)},e}(Ut);function Vt(t){var e=decodeURI(window.location.pathname);return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var Ht=function(t){function e(e,n,r){t.call(this,e,n),r&&function(t){var e=Vt(t);if(!/^\/#/.test(e))return window.location.replace(L(t+"/#"+e)),!0}(this.base)||Ft()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this,e=this.router.options.scrollBehavior,n=Rt&&e;n&&mt(),window.addEventListener(Rt?"popstate":"hashchange",(function(){var e=t.current;Ft()&&t.transitionTo(Nt(),(function(r){n&&yt(t.router,r,e,!0),Rt||zt(r.fullPath)}))}))},e.prototype.push=function(t,e,n){var r=this,o=this.current;this.transitionTo(t,(function(t){Dt(t.fullPath),yt(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,o=this.current;this.transitionTo(t,(function(t){zt(t.fullPath),yt(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;Nt()!==e&&(t?Dt(e):zt(e))},e.prototype.getCurrentLocation=function(){return Nt()},e}(Ut);function Ft(){var t=Nt();return"/"===t.charAt(0)||(zt("/"+t),!1)}function Nt(){var t=window.location.href,e=t.indexOf("#");if(e<0)return"";var n=(t=t.slice(e+1)).indexOf("?");if(n<0){var r=t.indexOf("#");t=r>-1?decodeURI(t.slice(0,r))+t.slice(r):decodeURI(t)}else t=decodeURI(t.slice(0,n))+t.slice(n);return t}function Bt(t){var e=window.location.href,n=e.indexOf("#");return(n>=0?e.slice(0,n):e)+"#"+t}function Dt(t){Rt?Et(Bt(t)):window.location.hash=t}function zt(t){Rt?At(Bt(t)):window.location.replace(Bt(t))}var Wt=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){e.index=n,e.updateRoute(r)}),(function(t){d(Lt,t)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Ut),Jt=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=ut(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Rt&&!1!==t.fallback,this.fallback&&(e="hash"),it||(e="abstract"),this.mode=e,e){case"history":this.history=new Mt(this,t.base);break;case"hash":this.history=new Ht(this,t.base,this.fallback);break;case"abstract":this.history=new Wt(this,t.base);break;default:f(!1,"invalid mode: "+e)}},Kt={currentRoute:{configurable:!0}};function Xt(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}Jt.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},Kt.currentRoute.get=function(){return this.history&&this.history.current},Jt.prototype.init=function(t){var e=this;if(f(ot.installed,"not installed. Make sure to call `Vue.use(VueRouter)` before creating root instance."),this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null)})),!this.app){this.app=t;var n=this.history;if(n instanceof Mt)n.transitionTo(n.getCurrentLocation());else if(n instanceof Ht){var r=function(){n.setupListeners()};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},Jt.prototype.beforeEach=function(t){return Xt(this.beforeHooks,t)},Jt.prototype.beforeResolve=function(t){return Xt(this.resolveHooks,t)},Jt.prototype.afterEach=function(t){return Xt(this.afterHooks,t)},Jt.prototype.onReady=function(t,e){this.history.onReady(t,e)},Jt.prototype.onError=function(t){this.history.onError(t)},Jt.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!=typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},Jt.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!=typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},Jt.prototype.go=function(t){this.history.go(t)},Jt.prototype.back=function(){this.go(-1)},Jt.prototype.forward=function(){this.go(1)},Jt.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},Jt.prototype.resolve=function(t,e,n){var r=Z(t,e=e||this.history.current,n,this),o=this.match(r,e),i=o.redirectedFrom||o.fullPath;return{location:r,route:o,href:function(t,e,n){var r="hash"===n?"#"+e:e;return t?L(t+"/"+r):r}(this.history.base,i,this.mode),normalizedTo:r,resolved:o}},Jt.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==C&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Jt.prototype,Kt),Jt.install=ot,Jt.version="3.1.6",it&&window.Vue&&window.Vue.use(Jt);var Yt=Jt,Qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},Gt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}];Qt._withStripped=!0,t.hot.accept(),t.hot.data&&n("./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-656039f0",{render:Qt,staticRenderFns:Gt});var Zt=!1;var te=a({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},Qt,Gt,!1,(function(t){Zt||n('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?{"sourceMap":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{"optionsId":"0","vue":true,"id":"data-v-656039f0","scoped":true,"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/HelloWorld.vue')}),"data-v-656039f0",null);te.options.__file="src\\components\\HelloWorld.vue",function(){var e=n("./node_modules/vue-hot-reload-api/dist/index.js");e.install(n("./node_modules/vue/dist/vue.esm.js"),!1),e.compatible&&(t.hot.accept(),t.hot.data?e.reload("data-v-656039f0",te.options):e.createRecord("data-v-656039f0",te.options),t.hot.dispose((function(t){Zt=!0})))}();var ee=te.exports;r.default.use(Yt);var ne=new Yt({routes:[{path:"/",name:"HelloWorld",component:ee}]});r.default.config.productionTip=!1,new r.default({el:"#app",router:ne,components:{App:p},template:"<App/>"})}});