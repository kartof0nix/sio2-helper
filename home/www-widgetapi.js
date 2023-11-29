(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function v(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=ma;
function y(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.na=b.prototype}
function ta(){this.G=!1;this.l=null;this.h=void 0;this.g=1;this.u=this.o=0;this.O=this.i=null}
function ua(a){if(a.G)throw new TypeError("Generator is already running");a.G=!0}
ta.prototype.K=function(a){this.h=a};
function va(a,b){a.i={mc:b,xc:!0};a.g=a.o||a.u}
ta.prototype.return=function(a){this.i={return:a};this.g=this.u};
function A(a,b,c){a.g=c;return{value:b}}
ta.prototype.B=function(a){this.g=a};
function wa(a,b,c){a.o=b;void 0!=c&&(a.u=c)}
function xa(a){a.o=0;var b=a.i.mc;a.i=null;return b}
function ya(a){var b=a.O.splice(0)[0];(b=a.i=a.i||b)?b.xc?a.g=a.o||a.u:void 0!=b.B&&a.u<b.B?(a.g=b.B,a.i=null):a.g=a.u:a.g=0}
function za(a){this.g=new ta;this.h=a}
function Aa(a,b){ua(a.g);var c=a.g.l;if(c)return Ba(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ca(a)}
function Ba(a,b,c,d){try{var e=b.call(a.g.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.G=!1,e;var f=e.value}catch(g){return a.g.l=null,va(a.g,g),Ca(a)}a.g.l=null;d.call(a.g,f);return Ca(a)}
function Ca(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.G=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,va(a.g,c)}a.g.G=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.xc)throw b.mc;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Da(a){this.next=function(b){ua(a.g);a.g.l?b=Ba(a,a.g.l.next,b,a.g.K):(a.g.K(b),b=Ca(a));return b};
this.throw=function(b){ua(a.g);a.g.l?b=Ba(a,a.g.l["throw"],b,a.g.K):(va(a.g,b),b=Ca(a));return b};
this.return=function(b){return Aa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ea(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ea(new Da(new za(a)))}
function Fa(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.h=[];this.G=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=da.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.g=null};
c.prototype.l=function(g){this.i(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.eb),reject:g(this.o)}};
b.prototype.eb=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.gb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.ya(g):this.u(g)}};
b.prototype.ya=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.ub(h,g):this.u(g)};
b.prototype.o=function(g){this.K(2,g)};
b.prototype.u=function(g){this.K(1,g)};
b.prototype.K=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.fb();this.O()};
b.prototype.fb=function(){var g=this;e(function(){if(g.oa()){var h=da.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.oa=function(){if(this.G)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.O=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.gb=function(g){var h=this.l();g.xb(h.resolve,h.reject)};
b.prototype.ub=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,p){return"function"==typeof q?function(t){try{l(q(t))}catch(u){m(u)}}:p}
var l,m,n=new b(function(q,p){l=q;m=p});
this.xb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.xb=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.h?f.h(k):this.h.push(k);this.G=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),m=l.next();!m.done;m=l.next())d(m.value).xb(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(t){return function(u){q[t]=u;p--;0==p&&l(q)}}
var q=[],p=0;do q.push(void 0),p++,d(k.value).xb(n(q.length-1),m),k=h.next();while(!k.done)})};
return b});
v("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.g]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.g]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.g)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.g)?delete k[g][this.g]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ea(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ja(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ga(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
v("Object.setPrototypeOf",function(a){return a||sa});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ga(this,b,"includes").indexOf(b,c||0)}});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
v("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
v("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var D=this||self;function Ja(a,b){var c=E("CLOSURE_FLAGS");a=c&&c[a];return null!=a?a:b}
function E(a,b){a=a.split(".");b=b||D;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function La(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Na(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Oa(a){return Object.prototype.hasOwnProperty.call(a,Pa)&&a[Pa]||(a[Pa]=++Qa)}
var Pa="closure_uid_"+(1E9*Math.random()>>>0),Qa=0;function Ra(a,b,c){return a.call.apply(a.bind,arguments)}
function Sa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ta(a,b,c){Ta=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ra:Sa;return Ta.apply(null,arguments)}
function Va(){return Date.now()}
function F(a,b){a=a.split(".");var c=D;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Wa(a,b){function c(){}
c.prototype=b.prototype;a.na=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.pe=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Xa(a){return a}
;function Ya(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ya);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Wa(Ya,Error);Ya.prototype.name="CustomError";function Za(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}
;function $a(){}
function ab(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function eb(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function hb(a){return Array.prototype.concat.apply([],arguments)}
function ib(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function jb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function kb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function lb(a){var b=mb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function nb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ob(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ob(a[c]);return b}
var pb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<pb.length;f++)c=pb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var rb;function sb(){if(void 0===rb){var a=null,b=D.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Xa,createScript:Xa,createScriptURL:Xa})}catch(c){D.console&&D.console.error(c.message)}rb=a}else rb=a}return rb}
;function tb(){}
function ub(a){return new tb(vb,a)}
var vb={};ub("");function wb(a){this.g=a}
wb.prototype.toString=function(){return this.g+""};
var xb={};var yb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},zb=/&/g,Ab=/</g,Bb=/>/g,Cb=/"/g,Db=/'/g,Eb=/\x00/g,Fb=/[\x00&<>"']/;function Gb(a){this.g=a}
Gb.prototype.toString=function(){return this.g.toString()};
var Hb={},Ib=new Gb("about:invalid#zClosurez",Hb);var Jb=Ja(610401301,!1),Kb=Ja(572417392,Ja(1,!0));function Lb(){var a=D.navigator;return a&&(a=a.userAgent)?a:""}
var Mb,Nb=D.navigator;Mb=Nb?Nb.userAgentData||null:null;function Ob(a){return Jb?Mb?Mb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function G(a){return-1!=Lb().indexOf(a)}
;function Ub(){return Jb?!!Mb&&0<Mb.brands.length:!1}
function Vb(){return Ub()?!1:G("Trident")||G("MSIE")}
function Wb(){return Ub()?Ob("Chromium"):(G("Chrome")||G("CriOS"))&&!(Ub()?0:G("Edge"))||G("Silk")}
;function Xb(a){this.g=a}
Xb.prototype.toString=function(){return this.g.toString()};function Yb(a){Fb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(zb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Ab,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Bb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Cb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Db,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Eb,"&#0;")));return a}
;var Zb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $b(a){return a?decodeURI(a):a}
function ac(a){return $b(a.match(Zb)[3]||null)}
function bc(a){var b=a.match(Zb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function cc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)cc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function dc(a){var b=[],c;for(c in a)cc(c,a[c],b);return b.join("&")}
var ec=/#|$/;function fc(a,b){var c=a.search(ec);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function gc(a){D.setTimeout(function(){throw a;},0)}
;function hc(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;function ic(a){ic[" "](a);return a}
ic[" "]=function(){};var jc=Ub()?!1:G("Opera"),kc=Vb(),lc=G("Edge"),mc=G("Gecko")&&!(-1!=Lb().toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),nc=-1!=Lb().toLowerCase().indexOf("webkit")&&!G("Edge");function oc(){var a=D.document;return a?a.documentMode:void 0}
var pc;a:{var qc="",rc=function(){var a=Lb();if(mc)return/rv:([^\);]+)(\)|;)/.exec(a);if(lc)return/Edge\/([\d\.]+)/.exec(a);if(kc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(nc)return/WebKit\/(\S+)/.exec(a);if(jc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
rc&&(qc=rc?rc[1]:"");if(kc){var sc=oc();if(null!=sc&&sc>parseFloat(qc)){pc=String(sc);break a}}pc=qc}var tc=pc,uc;if(D.document&&kc){var zc=oc();uc=zc?zc:parseInt(tc,10)||void 0}else uc=void 0;var Ac=uc;var Bc=hc()||G("iPod"),Cc=G("iPad");!G("Android")||Wb();Wb();var Dc=G("Safari")&&!(Wb()||(Ub()?0:G("Coast"))||(Ub()?0:G("Opera"))||(Ub()?0:G("Edge"))||(Ub()?Ob("Microsoft Edge"):G("Edg/"))||(Ub()?Ob("Opera"):G("OPR"))||G("Firefox")||G("FxiOS")||G("Silk")||G("Android"))&&!(hc()||G("iPad")||G("iPod"));var Ec={},Fc=null;
function Gc(a,b){Ma(a);void 0===b&&(b=0);if(!Fc){Fc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Ec[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Fc[h]&&(Fc[h]=g)}}}b=Ec[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Hc="undefined"!==typeof Uint8Array,Ic=!kc&&"function"===typeof btoa;function Jc(){return"function"===typeof BigInt}
var Kc=!Kb,Lc=!Kb;var Mc=0,Nc=0;function Oc(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=w(Pc(c,a)),b=c.next().value,a=c.next().value,c=b);Mc=c>>>0;Nc=a>>>0}
function Qc(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else Jc()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+Rc(c)+Rc(a));return c}
function Rc(a){a=String(a);return"0000000".slice(a.length)+a}
function Sc(){var a=Mc,b=Nc;b&2147483648?Jc()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(Pc(a,b)),a=b.next().value,b=b.next().value,a="-"+Qc(a,b)):a=Qc(a,b);return a}
function Pc(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function Tc(a){return Array.prototype.slice.call(a)}
;var Uc;Uc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,x(Object.values({be:1,Zd:2,Yd:4,ee:8,de:16,ce:32,Pd:64,ge:128,Wd:256,Vd:512,ae:1024,Td:2048,fe:4096,Ud:8192})));var Vc=Uc?function(a,b){a[Uc]|=b}:function(a,b){void 0!==a.ga?a.ga|=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Wc(a){var b=H(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Tc(a)),Xc(a,b|1))}
var Yc=Uc?function(a,b){a[Uc]&=~b}:function(a,b){void 0!==a.ga&&(a.ga&=~b)},H=Uc?function(a){return a[Uc]|0}:function(a){return a.ga|0},Zc=Uc?function(a){return a[Uc]}:function(a){return a.ga},Xc=Uc?function(a,b){a[Uc]=b}:function(a,b){void 0!==a.ga?a.ga=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function $c(){var a=[];Vc(a,1);return a}
function ad(a,b){Xc(b,(a|0)&-14591)}
function bd(a,b){Xc(b,(a|34)&-14557)}
function cd(a){a=a>>14&1023;return 0===a?536870912:a}
;var dd={},ed={};function fd(a){return!(!a||"object"!==typeof a||a.te!==ed)}
function gd(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var hd,id=!Kb;function jd(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=H(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;Xc(a,d|1);return!0}
var kd,ld=[];Xc(ld,55);kd=Object.freeze(ld);function md(a){if(a&2)throw Error();}
;function qd(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function rd(){var a=Error();qd(a,"incident");gc(a)}
function sd(a){a=Error(a);qd(a,"warning");return a}
;function td(a){return a.displayName||a.name||"unknown type name"}
function ud(a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+La(a)+": "+a);return a}
var vd=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function wd(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:vd.test(a)}
function xd(a,b){b=!!b;if(!wd(a))throw sd("int64");if("string"===typeof a)if(wd(a),b=Math.trunc(Number(a)),Number.isSafeInteger(b))a=String(b);else{if(b=a.indexOf("."),-1!==b&&(a=a.substring(0,b)),!yd(a)){if(16>a.length)Oc(Number(a));else if(Jc())a=BigInt(a),Mc=Number(a&BigInt(4294967295))>>>0,Nc=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);Nc=Mc=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Nc*=1E6,Mc=1E6*Mc+d,4294967296<=Mc&&(Nc+=Math.trunc(Mc/4294967296),
Nc>>>=0,Mc>>>=0);b&&(b=w(Pc(Mc,Nc)),a=b.next().value,b=b.next().value,Mc=a,Nc=b)}a=Sc()}}else if(b)wd(a),a=Math.trunc(a),Number.isSafeInteger(a)?a=String(a):(b=String(a),yd(b)?a=b:(Oc(a),a=Sc()));else if(wd(a),a=Math.trunc(a),!Number.isSafeInteger(a)){Oc(a);b=Mc;c=Nc;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function zd(a){return null==a?a:xd(a)}
function yd(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function Ad(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Bd(a){return null==a||"string"===typeof a?a:void 0}
function Cd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+td(b)+" but got "+(a&&td(a.constructor)));return a}
function Dd(a,b,c){if(null!=a&&"object"===typeof a&&a.Wb===dd)return a;if(Array.isArray(a)){var d=H(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&Xc(a,e);return new b(a)}}
;var Ed;function I(a,b,c){null==a&&(a=Ed);Ed=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=H(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=d;if(d=a.length){var e=d-1;if(gd(a[e])){c|=256;b=e-(+!!(c&512)-1);if(1024<=b)throw Error();d=c&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,d-(+!!(c&512)-1));if(1024<b)throw Error();d=c&-16760833|(b&1023)<<14}else d=c}}Xc(a,d);return a}
;function Fd(a,b){return Gd(b)}
function Gd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a){if(Array.isArray(a))return id||!jd(a,void 0,9999)?a:void 0;if(Hc&&null!=a&&a instanceof Uint8Array){if(Ic){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Gc(a);return a}}}return a}
;function Hd(a,b,c){a=Tc(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Id(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&H(a)&1?void 0:f&&H(a)&2?a:Jd(a,b,c,void 0!==d,e,f);else if(gd(a)){var g={},h;for(h in a)g[h]=Id(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Jd(a,b,c,d,e,f){var g=d||c?H(a):0;d=d?!!(g&32):void 0;a=Tc(a);for(var h=0;h<a.length;h++)a[h]=Id(a[h],b,c,d,e,f);c&&c(g,a);return a}
function Kd(a){return a.Wb===dd?a.toJSON():Gd(a)}
;function Ld(a,b,c){c=void 0===c?bd:c;if(null!=a){if(Hc&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=H(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?(Xc(a,(d|34)&-12293),a):Jd(a,Ld,d&4?bd:c,!0,!1,!0)}a.Wb===dd&&(c=a.s,d=Zc(c),a=d&2?a:Md(a,c,d,!0));return a}}
function Md(a,b,c,d){a=a.constructor;b=Nd(b,c,d);H(b);Ed=b;b=new a(b);Ed=void 0;return b}
function Nd(a,b,c){var d=c||b&2?bd:ad,e=!!(b&32);a=Hd(a,b,function(f){return Ld(f,e,d)});
Vc(a,32|(c?2:0));return a}
;Object.freeze({});Object.freeze({});function Od(a,b){a=a.s;return Pd(a,Zc(a),b)}
function Pd(a,b,c,d){if(-1===c)return null;if(c>=cd(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function Qd(a,b,c){var d=a.s,e=Zc(d);md(e);Rd(d,e,b,c);return a}
function Rd(a,b,c,d,e){gd(d);var f=cd(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return e;f=a[f+(+!!(b&512)-1)]={};e|=256}f[c]=d;e!==b&&Xc(a,e);return e}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function Sd(a,b,c,d){var e=b&2,f=Pd(a,b,c);Array.isArray(f)||(f=kd);var g=!(d&2);d=!(d&1);var h=!!(b&32),k=H(f);0!==k||!h||e||g?k&1||(k|=1,Xc(f,k)):(k|=33,Xc(f,k));e?(a=!1,k&2||(Vc(f,34),a=!!(4&k)),(d||a)&&Object.freeze(f)):(e=!!(2&k)||!!(2048&k),d&&e?(f=Tc(f),d=1,h&&!g&&(d|=32),Xc(f,d),Rd(a,b,c,f)):g&&k&32&&!e&&Yc(f,32));return f}
function Td(a,b,c,d){a=a.s;var e=Zc(a);md(e);(c=Ud(a,e,c))&&c!==b&&null!=d&&(e=Rd(a,e,c));Rd(a,e,b,d)}
function Vd(a,b,c){a=a.s;return Ud(a,Zc(a),b)===c?c:-1}
function Ud(a,b,c){for(var d=0,e=0;e<c.length;e++){var f=c[e];null!=Pd(a,b,f)&&(0!==d&&(b=Rd(a,b,d)),d=f)}return d}
function Wd(a,b,c){var d=void 0===d?!1:d;var e=a.s;var f=Zc(e),g=Pd(e,f,c,d);b=Dd(g,b,f);b!==g&&null!=b&&Rd(e,f,c,b,d);e=b;if(null==e)return e;a=a.s;f=Zc(a);if(!(f&2)){g=e;b=g.s;var h=Zc(b);g=h&2?Md(g,b,h,!1):g;g!==e&&(e=g,Rd(a,f,c,e,d))}return e}
function J(a,b,c,d){null!=d?Cd(d,b):d=void 0;return Qd(a,c,d)}
function Xd(a,b,c,d,e){null!=e?Cd(e,b):e=void 0;Td(a,c,d,e)}
function Yd(a,b,c){a=2&b?a|2:a&-3;a=32&b&&c?a|32:a&-33;return a&-2049}
function Zd(a,b,c,d){a=a.s;var e=Zc(a);md(e);var f=!!f;var g=!!(2&e)&&!0,h=Sd(a,e,b,3);e=Zc(a);var k=H(h),l=!!(2&k),m=!!(4&k),n=l&&m||!!(2048&k);if(!m){m=h;var q=e,p=!!(2&k);p&&(q|=2);for(var t=!p,u=!0,z=0,C=0;z<m.length;z++){var P=Dd(m[z],c,q);if(P instanceof c){if(!p){var Q=!!(H(P.s)&2);t&&(t=!Q);u&&(u=Q)}m[C++]=P}}C<z&&(m.length=C);k|=4;k=u?k|16:k&-17;k=t?k|8:k&-9;Xc(m,k);l&&!g&&(Object.freeze(h),n=!0)}g=k;n||(f||(k&=-33),k!==g&&Xc(h,k));n&&(h=Tc(h),k=Yd(k,e,f),Xc(h,k),Rd(a,e,b,h));b=h;c=null!=
d?Cd(d,c):new c;b.push(c);H(c.s)&2?Yc(b,8):Yc(b,16)}
function $d(a,b){var c=void 0===c?"":c;a=Bd(Od(a,b));return null!=a?a:c}
function ae(a,b){b=Vd(a,be,b);return Bd(Od(a,b))}
function ce(a,b,c){if(null!=c){if("number"!==typeof c)throw sd("int32");Number.isFinite(c)||rd()}Qd(a,b,c)}
function K(a,b,c){return Qd(a,b,Ad(c))}
function de(a,b,c){null!=c&&(Number.isFinite(c)||rd());return Qd(a,b,c)}
;function L(a,b,c){this.s=I(a,b,c)}
L.prototype.toJSON=function(){if(hd)var a=ee(this,this.s,!1);else a=Jd(this.s,Kd,void 0,void 0,!1,!1),a=ee(this,a,!0);return a};
function fe(a){hd=!0;try{return JSON.stringify(a.toJSON(),Fd)}finally{hd=!1}}
L.prototype.clone=function(){var a=this.s;return Md(this,a,Zc(a),!1)};
L.prototype.Wb=dd;L.prototype.toString=function(){return ee(this,this.s,!1).toString()};
function ee(a,b,c){var d=a.constructor.ma,e=Zc(c?a.s:b),f=cd(e),g=!1;if(d&&id){if(!c){b=Tc(b);var h;if(b.length&&gd(h=b[b.length-1]))for(g=0;g<d.length;g++)if(d[g]>=f){Object.assign(b[b.length-1]={},h);break}g=!0}f=b;c=!c;h=Zc(a.s);a=cd(h);h=+!!(h&512)-1;for(var k,l,m=0;m<d.length;m++)if(l=d[m],l<a){l+=h;var n=f[l];null==n?f[l]=c?kd:$c():c&&n!==kd&&Wc(n)}else k||(n=void 0,f.length&&gd(n=f[f.length-1])?k=n:f.push(k={})),n=k[l],null==k[l]?k[l]=c?kd:$c():c&&n!==kd&&Wc(n)}k=b.length;if(!k)return b;var q;
if(gd(f=b[k-1])){a:{var p=f;c={};a=!1;for(var t in p){h=p[t];if(Array.isArray(h)){m=h;if(!Lc&&jd(h,d,+t)||!Kc&&fd(h)&&0===h.size)h=null;h!=m&&(a=!0)}null!=h?c[t]=h:a=!0}if(a){for(var u in c){p=c;break a}p=null}}p!=f&&(q=!0);k--}for(e=+!!(e&512)-1;0<k;k--){t=k-1;f=b[t];if(!(null==f||!Lc&&jd(f,d,t-e)||!Kc&&fd(f)&&0===f.size))break;var z=!0}if(!q&&!z)return b;var C;g?C=b:C=Array.prototype.slice.call(b,0,k);b=C;g&&(b.length=k);p&&b.push(p);return b}
;var ge=window;ub("csi.gstatic.com");ub("googleads.g.doubleclick.net");ub("partner.googleadservices.com");ub("pubads.g.doubleclick.net");ub("securepubads.g.doubleclick.net");ub("tpc.googlesyndication.com");function he(a,b){this.width=a;this.height=b}
r=he.prototype;r.clone=function(){return new he(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.Qb=function(){return!(this.width*this.height)};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ie(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function je(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function ke(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||D.$googDebugFname||b}catch(g){e="Not available",c=!0}b=le(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,me[c])c=me[c];else{c=String(c);if(!me[c]){var f=/function\s+([^\(]+)/m.exec(c);me[c]=f?f[1]:"[Anonymous]"}c=me[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function le(a,b){b||(b={});b[ne(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[ne(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=le(a,b));return c}
function ne(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var me={};/*

 SPDX-License-Identifier: Apache-2.0
*/
function oe(a){this.nd=a}
function pe(a){return new oe(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var qe=[pe("data"),pe("http"),pe("https"),pe("mailto"),pe("ftp"),new oe(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function re(a,b){b=void 0===b?qe:b;if(a instanceof Gb)return a;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof oe&&d.nd(a))return new Gb(a,Hb)}}
function se(a){var b=void 0===b?qe:b;return re(a,b)||Ib}
var te="function"===typeof URL;function ue(){throw Error("unknown trace type");}
;var ve={Sd:0,Xd:1,Qd:2,Rd:3,0:"FORMATTED_HTML_CONTENT",1:"HTML_FORMATTED_CONTENT",2:"EMBEDDED_INTERNAL_CONTENT",3:"EMBEDDED_TRUSTED_EXTERNAL_CONTENT"};function we(a,b){b=Error.call(this,a+" cannot be used with intent "+ve[b]);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.type=a;this.name="TypeCannotBeUsedWithIntentError"}
y(we,Error);
function xe(a,b){a.removeAttribute("srcdoc");if(b instanceof wb)throw new we("TrustedResourceUrl",3);var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof Gb)b instanceof Gb&&b.constructor===Gb?b=b.g:(La(b),b="type_error:SafeUrl");else{b:if(te){try{var e=new URL(b)}catch(f){c="https:";
break b}c=e.protocol}else c:{c=document.createElement("a");try{c.href=b}catch(f){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b)}
;function ye(a){var b=ze;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Ae(){var a=[];ye(function(b){a.push(b)});
return a}
var ze={Ed:"allow-forms",Fd:"allow-modals",Gd:"allow-orientation-lock",Hd:"allow-pointer-lock",Id:"allow-popups",Jd:"allow-popups-to-escape-sandbox",Kd:"allow-presentation",Ld:"allow-same-origin",Md:"allow-scripts",Nd:"allow-top-navigation",Od:"allow-top-navigation-by-user-activation"},Be=ab(function(){return Ae()});
function Ce(){var a=De(),b={};db(Be(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function De(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var Ee=(new Date).getTime();function Fe(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Ge(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var q=g,p=0;64>p;p+=4)q[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=q[p-3]^q[p-8]^q[p-14]^q[p-16],q[p]=(n<<1|n>>>31)&4294967295;n=e[0];var t=e[1],u=e[2],z=e[3],C=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var P=z^t&(u^z);var Q=1518500249}else P=t^u^z,Q=1859775393;else 60>p?(P=t&u|z&(t|u),Q=2400959708):(P=t^u^z,Q=3395469782);P=((n<<5|n>>>27)&4294967295)+P+C+Q+q[p]&4294967295;C=z;z=u;u=(t<<30|t>>>2)&4294967295;t=n;n=P}e[0]=e[0]+n&4294967295;e[1]=e[1]+t&4294967295;e[2]=
e[2]+u&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+C&4294967295}
function c(n,q){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],t=0,u=n.length;t<u;++t)p.push(n.charCodeAt(t));n=p}q||(q=n.length);p=0;if(0==l)for(;p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<q;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],q=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=q&255,q>>>=8;b(f);for(p=q=0;5>p;p++)for(var t=24;0<=t;t-=8)n[q++]=e[p]>>t&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Wc:function(){for(var n=d(),q="",p=0;p<n.length;p++)q+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return q}}}
;function He(a,b,c){var d=String(D.location.href);return d&&a&&b?[b,Ie(Fe(d),a,c||null)].join(" "):null}
function Ie(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],db(d,function(h){e.push(h)}),Je(e.join(" "));
var f=[],g=[];db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];db(d,function(h){e.push(h)});
a=Je(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Je(a){var b=Ge();b.update(a);return b.Wc().toLowerCase()}
;var Ke={};function Oe(a){this.g=a||{cookie:""}}
r=Oe.prototype;r.isEnabled=function(){if(!D.navigator.cookieEnabled)return!1;if(!this.Qb())return!0;this.set("TESTCOOKIESENABLED","1",{Tb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.ye;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Tb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=yb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Tb:0,path:b,domain:c});return d};
r.Qb=function(){return!this.g.cookie};
r.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=yb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Pe=new Oe("undefined"==typeof document?null:document);function Qe(a){return!!Ke.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Re(a,b,c,d){(a=D[a])||"undefined"===typeof document||(a=(new Oe(document)).get(b));return a?He(a,c,d):null}
function Se(a){var b=void 0===b?!1:b;var c=Fe(String(D.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=D.__SAPISID||D.__APISID||D.__3PSAPISID||D.__OVERRIDE_SID;Qe(e)&&(f=f||D.__1PSAPISID);if(f)e=!0;else{if("undefined"!==typeof document){var g=new Oe(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");Qe(e)&&(f=f||g.get("__Secure-1PAPISID"))}e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?
D.__SAPISID:D.__APISID,e||"undefined"===typeof document||(e=new Oe(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?He(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Qe(b)&&((b=Re("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Re("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;"undefined"!==typeof TextDecoder&&new TextDecoder;var Te="undefined"!==typeof TextEncoder?new TextEncoder:null,Ue=Te?function(a){return Te.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function Ve(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function We(){this.Aa=this.Aa;this.l=this.l}
We.prototype.Aa=!1;We.prototype.dispose=function(){this.Aa||(this.Aa=!0,this.sa())};
We.prototype.addOnDisposeCallback=function(a,b){this.Aa?void 0!==b?a.call(b):a():(this.l||(this.l=[]),this.l.push(void 0!==b?Ta(a,b):a))};
We.prototype.sa=function(){if(this.l)for(;this.l.length;)this.l.shift()()};function Xe(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
Xe.prototype.stopPropagation=function(){this.i=!0};
Xe.prototype.preventDefault=function(){this.defaultPrevented=!0};var Ye=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
D.addEventListener("test",c,b);D.removeEventListener("test",c,b)}catch(d){}return a}();function Ze(a,b){Xe.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
Wa(Ze,Xe);var $e={2:"touch",3:"pen",4:"mouse"};
Ze.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(mc){a:{try{ic(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:$e[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&Ze.na.preventDefault.call(this)};
Ze.prototype.stopPropagation=function(){Ze.na.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
Ze.prototype.preventDefault=function(){Ze.na.preventDefault.call(this);var a=this.h;a.preventDefault?a.preventDefault():a.returnValue=!1};var af="closure_listenable_"+(1E6*Math.random()|0);var bf=0;function cf(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Bb=e;this.key=++bf;this.rb=this.wb=!1}
function df(a){a.rb=!0;a.listener=null;a.proxy=null;a.src=null;a.Bb=null}
;function ef(a){this.src=a;this.listeners={};this.g=0}
ef.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=ff(a,b,d,e);-1<g?(b=a[g],c||(b.wb=!1)):(b=new cf(b,this.src,f,!!d,e),b.wb=c,a.push(b));return b};
ef.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ff(e,b,c,d);return-1<b?(df(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function gf(a,b){var c=b.type;c in a.listeners&&eb(a.listeners[c],b)&&(df(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function ff(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.rb&&f.listener==b&&f.capture==!!c&&f.Bb==d)return e}return-1}
;var hf="closure_lm_"+(1E6*Math.random()|0),jf={},kf=0;function lf(a,b,c,d,e){if(d&&d.once)mf(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)lf(a,b[f],c,d,e);else c=nf(c),a&&a[af]?a.La(b,c,Na(d)?!!d.capture:!!d,e):of(a,b,c,!1,d,e)}
function of(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Na(e)?!!e.capture:!!e,h=pf(a);h||(a[hf]=h=new ef(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=qf();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ye||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(rf(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");kf++}}
function qf(){function a(c){return b.call(a.src,a.listener,c)}
var b=sf;return a}
function mf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)mf(a,b[f],c,d,e);else c=nf(c),a&&a[af]?a.g.add(String(b),c,!0,Na(d)?!!d.capture:!!d,e):of(a,b,c,!0,d,e)}
function tf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)tf(a,b[f],c,d,e);else(d=Na(d)?!!d.capture:!!d,c=nf(c),a&&a[af])?a.g.remove(String(b),c,d,e):a&&(a=pf(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ff(b,c,d,e)),(c=-1<a?b[a]:null)&&uf(c))}
function uf(a){if("number"!==typeof a&&a&&!a.rb){var b=a.src;if(b&&b[af])gf(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(rf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);kf--;(c=pf(b))?(gf(c,a),0==c.g&&(c.src=null,b[hf]=null)):df(a)}}}
function rf(a){return a in jf?jf[a]:jf[a]="on"+a}
function sf(a,b){if(a.rb)a=!0;else{b=new Ze(b,this);var c=a.listener,d=a.Bb||a.src;a.wb&&uf(a);a=c.call(d,b)}return a}
function pf(a){a=a[hf];return a instanceof ef?a:null}
var vf="__closure_events_fn_"+(1E9*Math.random()>>>0);function nf(a){if("function"===typeof a)return a;a[vf]||(a[vf]=function(b){return a.handleEvent(b)});
return a[vf]}
;function wf(){We.call(this);this.g=new ef(this);this.O=this;this.G=null}
Wa(wf,We);wf.prototype[af]=!0;wf.prototype.addEventListener=function(a,b,c,d){lf(this,a,b,c,d)};
wf.prototype.removeEventListener=function(a,b,c,d){tf(this,a,b,c,d)};
function xf(a,b){var c=a.G;if(c){var d=[];for(var e=1;c;c=c.G)d.push(c),++e}a=a.O;c=b.type||b;"string"===typeof b?b=new Xe(b,a):b instanceof Xe?b.target=b.target||a:(e=b,b=new Xe(c,a),qb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&0<=f;f--){var g=b.g=d[f];e=yf(g,c,!0,b)&&e}b.i||(g=b.g=a,e=yf(g,c,!0,b)&&e,b.i||(e=yf(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=yf(g,c,!1,b)&&e}
wf.prototype.sa=function(){wf.na.sa.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,df(d[e]);delete a.listeners[c];a.g--}}this.G=null};
wf.prototype.La=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function yf(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.rb&&g.capture==c){var h=g.listener,k=g.Bb||g.src;g.wb&&gf(a.g,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function zf(a){wf.call(this);var b=this;this.K=this.i=0;this.ha=null!=a?a:{qa:function(e,f){return setTimeout(e,f)},
ba:function(e){clearTimeout(e)}};
var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return B(function(e){return A(e,Af(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.K||Bf(this)}
y(zf,wf);function Cf(){var a=Df;zf.g||(zf.g=new zf(a));return zf.g}
zf.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.ha.ba(this.K);delete zf.g};
zf.prototype.ca=function(){return this.h};
function Bf(a){a.K=a.ha.qa(function(){var b;return B(function(c){if(1==c.g)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.B(3):A(c,Af(a),3):A(c,Af(a),3);Bf(a);c.g=0})},3E4)}
function Af(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.i=a.ha.qa(function(){d.abort()},b||2E4)),A(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.O=[h.i];h.o=0;h.u=0;a.u=void 0;a.i&&(a.ha.ba(a.i),a.i=0);g!==a.h&&(a.h=g,a.h?xf(a,"networkstatus-online"):xf(a,"networkstatus-offline"));c(g);ya(h);break;case 2:xa(h),g=!1,h.B(3)}})})}
;function Ef(){this.data=[];this.g=-1}
Ef.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
Ef.prototype.get=function(a){return!!this.data[a]};
function Ff(a){-1===a.g&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function Gf(a){this.s=I(a)}
y(Gf,L);function Hf(a){this.s=I(a)}
y(Hf,L);function If(a,b){return K(a,2,b)}
function Jf(a,b){return K(a,3,b)}
function Kf(a,b){return K(a,4,b)}
function Lf(a,b){return K(a,5,b)}
function Mf(a,b){return K(a,9,b)}
function Nf(a,b){var c=a.s,d=Zc(c);md(d);if(null==b)Rd(c,d,10);else{var e=H(b),f=e,g=!!(2&e)||!!(2048&e),h=g||Object.isFrozen(b),k;if(k=!h)k=!1;for(var l=!0,m=!0,n=0;n<b.length;n++){var q=b[n];Cd(q,Gf);g||(q=!!(H(q.s)&2),l&&(l=!q),m&&(m=q))}g||(e|=5,e=l?e|8:e&-9,e=m?e|16:e&-17);if(k||h&&e!==f)b=Tc(b),f=0,e=Yd(e,d,!0);e!==f&&Xc(b,e);Rd(c,d,10,b)}return a}
function Of(a,b){return Qd(a,11,null==b?b:ud(b))}
function Pf(a,b){return K(a,1,b)}
function Qf(a,b){return Qd(a,7,null==b?b:ud(b))}
Hf.ma=[10,6];var Rf="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Sf(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function Tf(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function Uf(){var a=window;if(!Tf(a))return null;var b=Sf(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Rf).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function Vf(a){var b;return Of(Nf(Lf(If(Pf(Kf(Qf(Mf(Jf(new Hf,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Gf;d=K(d,1,c.brand);return K(d,2,c.version)}))||[]),a.wow64||!1)}
function Wf(){var a,b;return null!=(b=null==(a=Uf())?void 0:a.then(function(c){return Vf(c)}))?b:null}
;function Xf(a,b){this.i=a;this.l=b;this.h=0;this.g=null}
Xf.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Yf(a,b){a.l(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)}
;var Zf;function $f(){var a=D.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var e=ie();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ta(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Vb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.jc;c.jc=null;e()}};
return function(e){d.next={jc:e};d=d.next;b.port2.postMessage(0)}}return function(e){D.setTimeout(e,0)}}
;function ag(){this.h=this.g=null}
ag.prototype.add=function(a,b){var c=bg.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
ag.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var bg=new Xf(function(){return new cg},function(a){return a.reset()});
function cg(){this.next=this.scope=this.g=null}
cg.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
cg.prototype.reset=function(){this.next=this.scope=this.g=null};var dg,eg=!1,fg=new ag;function gg(a,b){dg||hg();eg||(dg(),eg=!0);fg.add(a,b)}
function hg(){if(D.Promise&&D.Promise.resolve){var a=D.Promise.resolve(void 0);dg=function(){a.then(ig)}}else dg=function(){var b=ig;
"function"!==typeof D.setImmediate||D.Window&&D.Window.prototype&&(Ub()||!G("Edge"))&&D.Window.prototype.setImmediate==D.setImmediate?(Zf||(Zf=$f()),Zf(b)):D.setImmediate(b)}}
function ig(){for(var a;a=fg.remove();){try{a.g.call(a.scope)}catch(b){gc(b)}Yf(bg,a)}eg=!1}
;function jg(a,b){this.g=a[D.Symbol.iterator]();this.h=b}
jg.prototype[Symbol.iterator]=function(){return this};
jg.prototype.next=function(){var a=this.g.next();return{value:a.done?void 0:this.h.call(void 0,a.value),done:a.done}};
function kg(a,b){return new jg(a,b)}
;function lg(){this.blockSize=-1}
;function mg(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.u=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.l=this.h=0;this.reset()}
Wa(mg,lg);mg.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.l=this.h=0};
function ng(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],k=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+k&4294967295}
mg.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.h;d<b;){if(0==f)for(;d<=c;)ng(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){ng(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){ng(this,e);f=0;break}}this.h=f;this.l+=b}};
mg.prototype.digest=function(){var a=[],b=8*this.l;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.blockSize-(this.h-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;ng(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function og(){}
og.prototype.next=function(){return pg};
var pg={done:!0,value:void 0};function qg(a){return{value:a,done:!1}}
og.prototype.ia=function(){return this};function rg(a){if(a instanceof sg||a instanceof tg||a instanceof ug)return a;if("function"==typeof a.next)return new sg(function(){return a});
if("function"==typeof a[Symbol.iterator])return new sg(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ia)return new sg(function(){return a.ia()});
throw Error("Not an iterator or iterable.");}
function sg(a){this.h=a}
sg.prototype.ia=function(){return new tg(this.h())};
sg.prototype[Symbol.iterator]=function(){return new ug(this.h())};
sg.prototype.g=function(){return new ug(this.h())};
function tg(a){this.h=a}
y(tg,og);tg.prototype.next=function(){return this.h.next()};
tg.prototype[Symbol.iterator]=function(){return new ug(this.h)};
tg.prototype.g=function(){return new ug(this.h)};
function ug(a){sg.call(this,function(){return a});
this.i=a}
y(ug,sg);ug.prototype.next=function(){return this.i.next()};function vg(a,b){this.h={};this.g=[];this.i=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof vg)for(c=wg(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function wg(a){xg(a);return a.g.concat()}
r=vg.prototype;r.has=function(a){return yg(this.h,a)};
r.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||zg;xg(this);for(var c,d=0;c=this.g[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function zg(a,b){return a===b}
r.Qb=function(){return 0==this.size};
r.clear=function(){this.h={};this.i=this.size=this.g.length=0};
r.remove=function(a){return this.delete(a)};
r.delete=function(a){return yg(this.h,a)?(delete this.h[a],--this.size,this.i++,this.g.length>2*this.size&&xg(this),!0):!1};
function xg(a){if(a.size!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];yg(a.h,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.size!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],yg(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
r.get=function(a,b){return yg(this.h,a)?this.h[a]:b};
r.set=function(a,b){yg(this.h,a)||(this.size+=1,this.g.push(a),this.i++);this.h[a]=b};
r.forEach=function(a,b){for(var c=wg(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
r.clone=function(){return new vg(this)};
r.keys=function(){return rg(this.ia(!0)).g()};
r.values=function(){return rg(this.ia(!1)).g()};
r.entries=function(){var a=this;return kg(this.keys(),function(b){return[b,a.get(b)]})};
r.ia=function(a){xg(this);var b=0,c=this.i,d=this,e=new og;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)return pg;var f=d.g[b++];return qg(a?f:d.h[f])};
return e};
function yg(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var Ag=D.JSON.stringify;function Bg(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Cg(a){this.g=0;this.G=void 0;this.l=this.h=this.i=null;this.o=this.u=!1;if(a!=$a)try{var b=this;a.call(void 0,function(c){Dg(b,2,c)},function(c){Dg(b,3,c)})}catch(c){Dg(this,3,c)}}
function Eg(){this.next=this.context=this.h=this.i=this.g=null;this.l=!1}
Eg.prototype.reset=function(){this.context=this.h=this.i=this.g=null;this.l=!1};
var Fg=new Xf(function(){return new Eg},function(a){a.reset()});
function Gg(a,b,c){var d=Fg.get();d.i=a;d.h=b;d.context=c;return d}
Cg.prototype.then=function(a,b,c){return Hg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Cg.prototype.$goog_Thenable=!0;Cg.prototype.cancel=function(a){if(0==this.g){var b=new Ig(a);gg(function(){Jg(this,b)},this)}};
function Jg(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.l||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?Jg(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Kg(c),Lg(c,e,3,b)))}a.i=null}else Dg(a,3,b)}
function Mg(a,b){a.h||2!=a.g&&3!=a.g||Ng(a);a.l?a.l.next=b:a.h=b;a.l=b}
function Hg(a,b,c,d){var e=Gg(null,null,null);e.g=new Cg(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ig?g(h):f(k)}catch(l){g(l)}}:g});
e.g.i=a;Mg(a,e);return e.g}
Cg.prototype.O=function(a){this.g=0;Dg(this,2,a)};
Cg.prototype.oa=function(a){this.g=0;Dg(this,3,a)};
function Dg(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.O,f=a.oa;if(d instanceof Cg){Mg(d,Gg(e||$a,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Na(d))try{var k=d.then;if("function"===typeof k){Og(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.G=c,a.g=b,a.i=null,Ng(a),3!=b||c instanceof Ig||Pg(a,c))}}
function Og(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ng(a){a.u||(a.u=!0,gg(a.K,a))}
function Kg(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b}
Cg.prototype.K=function(){for(var a;a=Kg(this);)Lg(this,a,this.g,this.G);this.u=!1};
function Lg(a,b,c,d){if(3==c&&b.h&&!b.l)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,Qg(b,c,d);else try{b.l?b.i.call(b.context):Qg(b,c,d)}catch(e){Rg.call(null,e)}Yf(Fg,b)}
function Qg(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Pg(a,b){a.o=!0;gg(function(){a.o&&Rg.call(null,b)})}
var Rg=gc;function Ig(a){Ya.call(this,a)}
Wa(Ig,Ya);Ig.prototype.name="cancel";function M(a){We.call(this);this.u=1;this.i=[];this.o=0;this.g=[];this.h={};this.G=!!a}
Wa(M,We);r=M.prototype;r.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.u;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.u=e+3;d.push(e);return e};
function Sg(a,b,c){var d=Tg;if(a=d.h[a]){var e=d.g;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.tb(a)}}
r.tb=function(a){var b=this.g[a];if(b){var c=this.h[b];0!=this.o?(this.i.push(a),this.g[a+1]=function(){}):(c&&eb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
r.bb=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.G)for(e=0;e<c.length;e++){var g=c[e];Ug(this.g[g+1],this.g[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.Aa;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.o--,0<this.i.length&&0==this.o)for(;c=this.i.pop();)this.tb(c)}}return 0!=e}return!1};
function Ug(a,b,c){gg(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.tb,this),delete this.h[a])}else this.g.length=0,this.h={}};
r.sa=function(){M.na.sa.call(this);this.clear();this.i.length=0};function Vg(a){this.g=a}
Vg.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,Ag(b))};
Vg.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Vg.prototype.remove=function(a){this.g.remove(a)};function Wg(a){this.g=a}
Wa(Wg,Vg);function Xg(a){this.data=a}
function Yg(a){return void 0===a||a instanceof Xg?a:new Xg(a)}
Wg.prototype.set=function(a,b){Wg.na.set.call(this,a,Yg(b))};
Wg.prototype.h=function(a){a=Wg.na.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Wg.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Zg(a){this.g=a}
Wa(Zg,Wg);Zg.prototype.set=function(a,b,c){if(b=Yg(b)){if(c){if(c<Va()){Zg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Va()}Zg.na.set.call(this,a,b)};
Zg.prototype.h=function(a){var b=Zg.na.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Va()||c&&c>Va())Zg.prototype.remove.call(this,a);else return b}};function $g(){}
;function ah(){}
Wa(ah,$g);ah.prototype[Symbol.iterator]=function(){return rg(this.ia(!0)).g()};
ah.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function bh(a){this.g=a}
Wa(bh,ah);r=bh.prototype;r.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.g.removeItem(a)};
r.ia=function(a){var b=0,c=this.g,d=new og;d.next=function(){if(b>=c.length)return pg;var e=c.key(b++);if(a)return qg(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return qg(e)};
return d};
r.clear=function(){this.g.clear()};
r.key=function(a){return this.g.key(a)};function ch(){var a=null;try{a=window.localStorage||null}catch(b){}this.g=a}
Wa(ch,bh);function dh(a,b){this.h=a;this.g=null;var c;if(c=kc)c=!(9<=Number(Ac));if(c){eh||(eh=new vg);this.g=eh.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),eh.set(a,this.g));try{this.g.load(this.h)}catch(d){this.g=null}}}
Wa(dh,ah);var fh={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},eh=null;function gh(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return fh[b]})}
r=dh.prototype;r.set=function(a,b){this.g.setAttribute(gh(a),b);hh(this)};
r.get=function(a){a=this.g.getAttribute(gh(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.g.removeAttribute(gh(a));hh(this)};
r.ia=function(a){var b=0,c=this.g.XMLDocument.documentElement.attributes,d=new og;d.next=function(){if(b>=c.length)return pg;var e=c[b++];if(a)return qg(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return qg(e)};
return d};
r.clear=function(){for(var a=this.g.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);hh(this)};
function hh(a){try{a.g.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ih(a,b){this.h=a;this.g=b+"::"}
Wa(ih,ah);ih.prototype.set=function(a,b){this.h.set(this.g+a,b)};
ih.prototype.get=function(a){return this.h.get(this.g+a)};
ih.prototype.remove=function(a){this.h.remove(this.g+a)};
ih.prototype.ia=function(a){var b=this.h[Symbol.iterator](),c=this,d=new og;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return qg(a?e.slice(c.g.length):c.h.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},jh="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.ac=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var kh={Ra:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},lh={Ra:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nc:function(a){return[].concat.apply([],a)}};
N.xd=function(){jh?(N.Qa=Uint8Array,N.pa=Uint16Array,N.Lc=Int32Array,N.assign(N,kh)):(N.Qa=Array,N.pa=Array,N.Lc=Array,N.assign(N,lh))};
N.xd();var mh=!0;try{new Uint8Array(1)}catch(a){mh=!1}
function nh(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new N.Qa(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var oh={};oh=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var ph={},qh,rh=[],sh=0;256>sh;sh++){qh=sh;for(var th=0;8>th;th++)qh=qh&1?3988292384^qh>>>1:qh>>>1;rh[sh]=qh}ph=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^rh[(a^b[d])&255];return a^-1};var uh={};uh={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function vh(a){for(var b=a.length;0<=--b;)a[b]=0}
var wh=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],xh=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],yh=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],zh=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Ah=Array(576);vh(Ah);var Bh=Array(60);vh(Bh);var Ch=Array(512);vh(Ch);var Dh=Array(256);vh(Dh);var Eh=Array(29);vh(Eh);var Fh=Array(30);vh(Fh);function Gh(a,b,c,d,e){this.Hc=a;this.ad=b;this.Zc=c;this.Xc=d;this.rd=e;this.qc=a&&a.length}
var Hh,Ih,Jh;function fi(a,b){this.lc=a;this.Ya=0;this.Da=b}
function gi(a,b){a.L[a.pending++]=b&255;a.L[a.pending++]=b>>>8&255}
function hi(a,b,c){a.P>16-c?(a.V|=b<<a.P&65535,gi(a,a.V),a.V=b>>16-a.P,a.P+=c-16):(a.V|=b<<a.P&65535,a.P+=c)}
function ii(a,b,c){hi(a,c[2*b],c[2*b+1])}
function ji(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function ki(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=ji(d[e]++,e))}
function li(a){var b;for(b=0;286>b;b++)a.X[2*b]=0;for(b=0;30>b;b++)a.Ia[2*b]=0;for(b=0;19>b;b++)a.S[2*b]=0;a.X[512]=1;a.xa=a.cb=0;a.da=a.matches=0}
function mi(a){8<a.P?gi(a,a.V):0<a.P&&(a.L[a.pending++]=a.V);a.V=0;a.P=0}
function ni(a,b,c){mi(a);gi(a,c);gi(a,~c);N.Ra(a.L,a.window,b,c,a.pending);a.pending+=c}
function oi(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function pi(a,b,c){for(var d=a.M[c],e=c<<1;e<=a.wa;){e<a.wa&&oi(b,a.M[e+1],a.M[e],a.depth)&&e++;if(oi(b,d,a.M[e],a.depth))break;a.M[c]=a.M[e];c=e;e<<=1}a.M[c]=d}
function qi(a,b,c){var d=0;if(0!==a.da){do{var e=a.L[a.lb+2*d]<<8|a.L[a.lb+2*d+1];var f=a.L[a.Sb+d];d++;if(0===e)ii(a,f,b);else{var g=Dh[f];ii(a,g+256+1,b);var h=wh[g];0!==h&&(f-=Eh[g],hi(a,f,h));e--;g=256>e?Ch[e]:Ch[256+(e>>>7)];ii(a,g,c);h=xh[g];0!==h&&(e-=Fh[g],hi(a,e,h))}}while(d<a.da)}ii(a,256,b)}
function ri(a,b){var c=b.lc,d=b.Da.Hc,e=b.Da.qc,f=b.Da.Xc,g,h=-1;a.wa=0;a.Ua=573;for(g=0;g<f;g++)0!==c[2*g]?(a.M[++a.wa]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.wa;){var k=a.M[++a.wa]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.xa--;e&&(a.cb-=d[2*k+1])}b.Ya=h;for(g=a.wa>>1;1<=g;g--)pi(a,c,g);k=f;do g=a.M[1],a.M[1]=a.M[a.wa--],pi(a,c,1),d=a.M[1],a.M[--a.Ua]=g,a.M[--a.Ua]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.M[1]=k++,pi(a,c,1);while(2<=a.wa);a.M[--a.Ua]=
a.M[1];g=b.lc;k=b.Ya;d=b.Da.Hc;e=b.Da.qc;f=b.Da.ad;var l=b.Da.Zc,m=b.Da.rd,n,q=0;for(n=0;15>=n;n++)a.ra[n]=0;g[2*a.M[a.Ua]+1]=0;for(b=a.Ua+1;573>b;b++){var p=a.M[b];n=g[2*g[2*p+1]+1]+1;n>m&&(n=m,q++);g[2*p+1]=n;if(!(p>k)){a.ra[n]++;var t=0;p>=l&&(t=f[p-l]);var u=g[2*p];a.xa+=u*(n+t);e&&(a.cb+=u*(d[2*p+1]+t))}}if(0!==q){do{for(n=m-1;0===a.ra[n];)n--;a.ra[n]--;a.ra[n+1]+=2;a.ra[m]--;q-=2}while(0<q);for(n=m;0!==n;n--)for(p=a.ra[n];0!==p;)d=a.M[--b],d>k||(g[2*d+1]!==n&&(a.xa+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),p--)}ki(c,h,a.ra)}
function si(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.S[2*l]+=g:0!==l?(l!==e&&a.S[2*l]++,a.S[32]++):10>=g?a.S[34]++:a.S[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function ti(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do ii(a,l,a.S);while(0!==--g)}else 0!==l?(l!==e&&(ii(a,l,a.S),g--),ii(a,16,a.S),hi(a,g-3,2)):10>=g?(ii(a,17,a.S),hi(a,g-3,3)):(ii(a,18,a.S),hi(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function ui(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.X[2*c])return 0;if(0!==a.X[18]||0!==a.X[20]||0!==a.X[26])return 1;for(c=32;256>c;c++)if(0!==a.X[2*c])return 1;return 0}
var vi=!1;function wi(a,b,c){a.L[a.lb+2*a.da]=b>>>8&255;a.L[a.lb+2*a.da+1]=b&255;a.L[a.Sb+a.da]=c&255;a.da++;0===b?a.X[2*c]++:(a.matches++,b--,a.X[2*(Dh[c]+256+1)]++,a.Ia[2*(256>b?Ch[b]:Ch[256+(b>>>7)])]++);return a.da===a.ob-1}
;function xi(a,b){a.msg=uh[b];return b}
function yi(a){for(var b=a.length;0<=--b;)a[b]=0}
function zi(a){var b=a.state,c=b.pending;c>a.F&&(c=a.F);0!==c&&(N.Ra(a.output,b.L,b.qb,c,a.Za),a.Za+=c,b.qb+=c,a.cc+=c,a.F-=c,b.pending-=c,0===b.pending&&(b.qb=0))}
function R(a,b){var c=0<=a.Z?a.Z:-1,d=a.j-a.Z,e=0;if(0<a.level){2===a.C.Nb&&(a.C.Nb=ui(a));ri(a,a.Db);ri(a,a.zb);si(a,a.X,a.Db.Ya);si(a,a.Ia,a.zb.Ya);ri(a,a.hc);for(e=18;3<=e&&0===a.S[2*zh[e]+1];e--);a.xa+=3*(e+1)+14;var f=a.xa+3+7>>>3;var g=a.cb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)hi(a,b?1:0,3),ni(a,c,d);else if(4===a.strategy||g===f)hi(a,2+(b?1:0),3),qi(a,Ah,Bh);else{hi(a,4+(b?1:0),3);c=a.Db.Ya+1;d=a.zb.Ya+1;e+=1;hi(a,c-257,5);hi(a,d-1,5);hi(a,e-4,4);for(f=0;f<e;f++)hi(a,a.S[2*zh[f]+
1],3);ti(a,a.X,c-1);ti(a,a.Ia,d-1);qi(a,a.X,a.Ia)}li(a);b&&mi(a);a.Z=a.j;zi(a.C)}
function S(a,b){a.L[a.pending++]=b}
function Ai(a,b){a.L[a.pending++]=b>>>8&255;a.L[a.pending++]=b&255}
function Bi(a,b){var c=a.yc,d=a.j,e=a.aa,f=a.zc,g=a.j>a.T-262?a.j-(a.T-262):0,h=a.window,k=a.Fa,l=a.la,m=a.j+258,n=h[d+e-1],q=h[d+e];a.aa>=a.pc&&(c>>=2);f>a.m&&(f=a.m);do{var p=b;if(h[p+e]===q&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.Xa=b;e=p;if(p>=f)break;n=h[d+e-1];q=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.m?e:a.m}
function Ci(a){var b=a.T,c;do{var d=a.Jc-a.m-a.j;if(a.j>=b+(b-262)){N.Ra(a.window,a.window,b,b,0);a.Xa-=b;a.j-=b;a.Z-=b;var e=c=a.Cb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.la[--e],a.la[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.C.U)break;e=a.C;c=a.window;f=a.j+a.m;var g=e.U;g>d&&(g=d);0===g?c=0:(e.U-=g,N.Ra(c,e.input,e.Oa,g,f),1===e.state.wrap?e.A=oh(e.A,c,g,f):2===e.state.wrap&&(e.A=ph(e.A,c,g,f)),e.Oa+=g,e.Pa+=g,c=g);a.m+=c;if(3<=a.m+a.Y)for(d=a.j-a.Y,a.D=a.window[d],a.D=
(a.D<<a.va^a.window[d+1])&a.ta;a.Y&&!(a.D=(a.D<<a.va^a.window[d+3-1])&a.ta,a.la[d&a.Fa]=a.head[a.D],a.head[a.D]=d,d++,a.Y--,3>a.m+a.Y););}while(262>a.m&&0!==a.C.U)}
function Di(a,b){for(var c;;){if(262>a.m){Ci(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.va^a.window[a.j+3-1])&a.ta,c=a.la[a.j&a.Fa]=a.head[a.D],a.head[a.D]=a.j);0!==c&&a.j-c<=a.T-262&&(a.H=Bi(a,c));if(3<=a.H)if(c=wi(a,a.j-a.Xa,a.H-3),a.m-=a.H,a.H<=a.Ub&&3<=a.m){a.H--;do a.j++,a.D=(a.D<<a.va^a.window[a.j+3-1])&a.ta,a.la[a.j&a.Fa]=a.head[a.D],a.head[a.D]=a.j;while(0!==--a.H);a.j++}else a.j+=a.H,a.H=0,a.D=a.window[a.j],a.D=(a.D<<a.va^a.window[a.j+1])&a.ta;else c=wi(a,0,a.window[a.j]),
a.m--,a.j++;if(c&&(R(a,!1),0===a.C.F))return 1}a.Y=2>a.j?a.j:2;return 4===b?(R(a,!0),0===a.C.F?3:4):a.da&&(R(a,!1),0===a.C.F)?1:2}
function Ei(a,b){for(var c,d;;){if(262>a.m){Ci(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.va^a.window[a.j+3-1])&a.ta,c=a.la[a.j&a.Fa]=a.head[a.D],a.head[a.D]=a.j);a.aa=a.H;a.Cc=a.Xa;a.H=2;0!==c&&a.aa<a.Ub&&a.j-c<=a.T-262&&(a.H=Bi(a,c),5>=a.H&&(1===a.strategy||3===a.H&&4096<a.j-a.Xa)&&(a.H=2));if(3<=a.aa&&a.H<=a.aa){d=a.j+a.m-3;c=wi(a,a.j-1-a.Cc,a.aa-3);a.m-=a.aa-1;a.aa-=2;do++a.j<=d&&(a.D=(a.D<<a.va^a.window[a.j+3-1])&a.ta,a.la[a.j&a.Fa]=a.head[a.D],a.head[a.D]=a.j);while(0!==
--a.aa);a.Ma=0;a.H=2;a.j++;if(c&&(R(a,!1),0===a.C.F))return 1}else if(a.Ma){if((c=wi(a,0,a.window[a.j-1]))&&R(a,!1),a.j++,a.m--,0===a.C.F)return 1}else a.Ma=1,a.j++,a.m--}a.Ma&&(wi(a,0,a.window[a.j-1]),a.Ma=0);a.Y=2>a.j?a.j:2;return 4===b?(R(a,!0),0===a.C.F?3:4):a.da&&(R(a,!1),0===a.C.F)?1:2}
function Fi(a,b){for(var c,d,e,f=a.window;;){if(258>=a.m){Ci(a);if(258>=a.m&&0===b)return 1;if(0===a.m)break}a.H=0;if(3<=a.m&&0<a.j&&(d=a.j-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.j+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.H=258-(e-d);a.H>a.m&&(a.H=a.m)}3<=a.H?(c=wi(a,1,a.H-3),a.m-=a.H,a.j+=a.H,a.H=0):(c=wi(a,0,a.window[a.j]),a.m--,a.j++);if(c&&(R(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(R(a,!0),0===a.C.F?3:4):a.da&&
(R(a,!1),0===a.C.F)?1:2}
function Gi(a,b){for(var c;;){if(0===a.m&&(Ci(a),0===a.m)){if(0===b)return 1;break}a.H=0;c=wi(a,0,a.window[a.j]);a.m--;a.j++;if(c&&(R(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(R(a,!0),0===a.C.F?3:4):a.da&&(R(a,!1),0===a.C.F)?1:2}
function Hi(a,b,c,d,e){this.dd=a;this.qd=b;this.td=c;this.pd=d;this.bd=e}
var Ii;Ii=[new Hi(0,0,0,0,function(a,b){var c=65535;for(c>a.ea-5&&(c=a.ea-5);;){if(1>=a.m){Ci(a);if(0===a.m&&0===b)return 1;if(0===a.m)break}a.j+=a.m;a.m=0;var d=a.Z+c;if(0===a.j||a.j>=d)if(a.m=a.j-d,a.j=d,R(a,!1),0===a.C.F)return 1;if(a.j-a.Z>=a.T-262&&(R(a,!1),0===a.C.F))return 1}a.Y=0;if(4===b)return R(a,!0),0===a.C.F?3:4;a.j>a.Z&&R(a,!1);return 1}),
new Hi(4,4,8,4,Di),new Hi(4,5,16,8,Di),new Hi(4,6,32,32,Di),new Hi(4,4,16,16,Ei),new Hi(8,16,32,32,Ei),new Hi(8,16,128,128,Ei),new Hi(8,32,128,256,Ei),new Hi(32,128,258,1024,Ei),new Hi(32,258,258,4096,Ei)];
function Ji(){this.C=null;this.status=0;this.L=null;this.wrap=this.pending=this.qb=this.ea=0;this.v=null;this.fa=0;this.method=8;this.Va=-1;this.Fa=this.dc=this.T=0;this.window=null;this.Jc=0;this.head=this.la=null;this.zc=this.pc=this.strategy=this.level=this.Ub=this.yc=this.aa=this.m=this.Xa=this.j=this.Ma=this.Cc=this.H=this.Z=this.va=this.ta=this.Ob=this.Cb=this.D=0;this.X=new N.pa(1146);this.Ia=new N.pa(122);this.S=new N.pa(78);yi(this.X);yi(this.Ia);yi(this.S);this.hc=this.zb=this.Db=null;this.ra=
new N.pa(16);this.M=new N.pa(573);yi(this.M);this.Ua=this.wa=0;this.depth=new N.pa(573);yi(this.depth);this.P=this.V=this.Y=this.matches=this.cb=this.xa=this.lb=this.da=this.ob=this.Sb=0}
function Ki(a,b){if(!a||!a.state||5<b||0>b)return a?xi(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.U||666===c.status&&4!==b)return xi(a,0===a.F?-5:-2);c.C=a;var d=c.Va;c.Va=b;if(42===c.status)if(2===c.wrap)a.A=0,S(c,31),S(c,139),S(c,8),c.v?(S(c,(c.v.text?1:0)+(c.v.Ba?2:0)+(c.v.extra?4:0)+(c.v.name?8:0)+(c.v.comment?16:0)),S(c,c.v.time&255),S(c,c.v.time>>8&255),S(c,c.v.time>>16&255),S(c,c.v.time>>24&255),S(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),S(c,c.v.xe&255),c.v.extra&&c.v.extra.length&&
(S(c,c.v.extra.length&255),S(c,c.v.extra.length>>8&255)),c.v.Ba&&(a.A=ph(a.A,c.L,c.pending,0)),c.fa=0,c.status=69):(S(c,0),S(c,0),S(c,0),S(c,0),S(c,0),S(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),S(c,3),c.status=113);else{var e=8+(c.dc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.j&&(e|=32);c.status=113;Ai(c,e+(31-e%31));0!==c.j&&(Ai(c,a.A>>>16),Ai(c,a.A&65535));a.A=1}if(69===c.status)if(c.v.extra){for(e=c.pending;c.fa<(c.v.extra.length&65535)&&(c.pending!==c.ea||
(c.v.Ba&&c.pending>e&&(a.A=ph(a.A,c.L,c.pending-e,e)),zi(a),e=c.pending,c.pending!==c.ea));)S(c,c.v.extra[c.fa]&255),c.fa++;c.v.Ba&&c.pending>e&&(a.A=ph(a.A,c.L,c.pending-e,e));c.fa===c.v.extra.length&&(c.fa=0,c.status=73)}else c.status=73;if(73===c.status)if(c.v.name){e=c.pending;do{if(c.pending===c.ea&&(c.v.Ba&&c.pending>e&&(a.A=ph(a.A,c.L,c.pending-e,e)),zi(a),e=c.pending,c.pending===c.ea)){var f=1;break}f=c.fa<c.v.name.length?c.v.name.charCodeAt(c.fa++)&255:0;S(c,f)}while(0!==f);c.v.Ba&&c.pending>
e&&(a.A=ph(a.A,c.L,c.pending-e,e));0===f&&(c.fa=0,c.status=91)}else c.status=91;if(91===c.status)if(c.v.comment){e=c.pending;do{if(c.pending===c.ea&&(c.v.Ba&&c.pending>e&&(a.A=ph(a.A,c.L,c.pending-e,e)),zi(a),e=c.pending,c.pending===c.ea)){f=1;break}f=c.fa<c.v.comment.length?c.v.comment.charCodeAt(c.fa++)&255:0;S(c,f)}while(0!==f);c.v.Ba&&c.pending>e&&(a.A=ph(a.A,c.L,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.v.Ba?(c.pending+2>c.ea&&zi(a),c.pending+2<=c.ea&&(S(c,a.A&
255),S(c,a.A>>8&255),a.A=0,c.status=113)):c.status=113);if(0!==c.pending){if(zi(a),0===a.F)return c.Va=-1,0}else if(0===a.U&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return xi(a,-5);if(666===c.status&&0!==a.U)return xi(a,-5);if(0!==a.U||0!==c.m||0!==b&&666!==c.status){d=2===c.strategy?Gi(c,b):3===c.strategy?Fi(c,b):Ii[c.level].bd(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.F&&(c.Va=-1),0;if(2===d&&(1===b?(hi(c,2,3),ii(c,256,Ah),16===c.P?(gi(c,c.V),c.V=0,c.P=0):8<=c.P&&(c.L[c.pending++]=
c.V&255,c.V>>=8,c.P-=8)):5!==b&&(hi(c,0,3),ni(c,0,0),3===b&&(yi(c.head),0===c.m&&(c.j=0,c.Z=0,c.Y=0))),zi(a),0===a.F))return c.Va=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(S(c,a.A&255),S(c,a.A>>8&255),S(c,a.A>>16&255),S(c,a.A>>24&255),S(c,a.Pa&255),S(c,a.Pa>>8&255),S(c,a.Pa>>16&255),S(c,a.Pa>>24&255)):(Ai(c,a.A>>>16),Ai(c,a.A&65535));zi(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Li={};Li=function(){this.input=null;this.Pa=this.U=this.Oa=0;this.output=null;this.cc=this.F=this.Za=0;this.msg="";this.state=null;this.Nb=2;this.A=0};var Mi=Object.prototype.toString;
function Ni(a){if(!(this instanceof Ni))return new Ni(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,Ga:15,sd:8,strategy:0,Ea:""},a||{});a.raw&&0<a.Ga?a.Ga=-a.Ga:a.ed&&0<a.Ga&&16>a.Ga&&(a.Ga+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.C=new Li;this.C.F=0;var b=this.C;var c=a.level,d=a.method,e=a.Ga,f=a.sd,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=xi(b,-2);else{8===e&&(e=9);var k=new Ji;
b.state=k;k.C=b;k.wrap=h;k.v=null;k.dc=e;k.T=1<<k.dc;k.Fa=k.T-1;k.Ob=f+7;k.Cb=1<<k.Ob;k.ta=k.Cb-1;k.va=~~((k.Ob+3-1)/3);k.window=new N.Qa(2*k.T);k.head=new N.pa(k.Cb);k.la=new N.pa(k.T);k.ob=1<<f+6;k.ea=4*k.ob;k.L=new N.Qa(k.ea);k.lb=1*k.ob;k.Sb=3*k.ob;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.Pa=b.cc=0;b.Nb=2;c=b.state;c.pending=0;c.qb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.A=2===c.wrap?0:1;c.Va=0;if(!vi){d=Array(16);for(f=g=0;28>f;f++)for(Eh[f]=g,e=0;e<1<<wh[f];e++)Dh[g++]=
f;Dh[g-1]=f;for(f=g=0;16>f;f++)for(Fh[f]=g,e=0;e<1<<xh[f];e++)Ch[g++]=f;for(g>>=7;30>f;f++)for(Fh[f]=g<<7,e=0;e<1<<xh[f]-7;e++)Ch[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Ah[2*e+1]=8,e++,d[8]++;for(;255>=e;)Ah[2*e+1]=9,e++,d[9]++;for(;279>=e;)Ah[2*e+1]=7,e++,d[7]++;for(;287>=e;)Ah[2*e+1]=8,e++,d[8]++;ki(Ah,287,d);for(e=0;30>e;e++)Bh[2*e+1]=5,Bh[2*e]=ji(e,5);Hh=new Gh(Ah,wh,257,286,15);Ih=new Gh(Bh,xh,0,30,15);Jh=new Gh([],yh,0,19,7);vi=!0}c.Db=new fi(c.X,Hh);c.zb=new fi(c.Ia,Ih);c.hc=new fi(c.S,
Jh);c.V=0;c.P=0;li(c);c=0}else c=xi(b,-2);0===c&&(b=b.state,b.Jc=2*b.T,yi(b.head),b.Ub=Ii[b.level].qd,b.pc=Ii[b.level].dd,b.zc=Ii[b.level].td,b.yc=Ii[b.level].pd,b.j=0,b.Z=0,b.m=0,b.Y=0,b.H=b.aa=2,b.Ma=0,b.D=0);b=c}}else b=-2;if(0!==b)throw Error(uh[b]);a.header&&(b=this.C)&&b.state&&2===b.state.wrap&&(b.state.v=a.header);if(a.mb){var l;"string"===typeof a.mb?l=nh(a.mb):"[object ArrayBuffer]"===Mi.call(a.mb)?l=new Uint8Array(a.mb):l=a.mb;a=this.C;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,
2===b||1===b&&42!==l.status||l.m)b=-2;else{1===b&&(a.A=oh(a.A,f,g,0));l.wrap=0;g>=l.T&&(0===b&&(yi(l.head),l.j=0,l.Z=0,l.Y=0),c=new N.Qa(l.T),N.Ra(c,f,g-l.T,l.T,0),f=c,g=l.T);c=a.U;d=a.Oa;e=a.input;a.U=g;a.Oa=0;a.input=f;for(Ci(l);3<=l.m;){f=l.j;g=l.m-2;do l.D=(l.D<<l.va^l.window[f+3-1])&l.ta,l.la[f&l.Fa]=l.head[l.D],l.head[l.D]=f,f++;while(--g);l.j=f;l.m=2;Ci(l)}l.j+=l.m;l.Z=l.j;l.Y=l.m;l.m=0;l.H=l.aa=2;l.Ma=0;a.Oa=d;a.input=e;a.U=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(uh[b]);this.me=!0}}
Ni.prototype.push=function(a,b){var c=this.C,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=nh(a):"[object ArrayBuffer]"===Mi.call(a)?c.input=new Uint8Array(a):c.input=a;c.Oa=0;c.U=c.input.length;do{0===c.F&&(c.output=new N.Qa(d),c.Za=0,c.F=d);a=Ki(c,e);if(1!==a&&0!==a)return Oi(this,a),this.ended=!0,!1;if(0===c.F||0===c.U&&(4===e||2===e))if("string"===this.options.Ea){var f=N.ac(c.output,c.Za);b=f;f=f.length;if(65537>f&&(b.subarray&&mh||!b.subarray))b=
String.fromCharCode.apply(null,N.ac(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.ac(c.output,c.Za),this.chunks.push(b)}while((0<c.U||0===c.F)&&1!==a);if(4===e)return(c=this.C)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=xi(c,-2):(c.state=null,a=113===d?xi(c,-3):0)):a=-2,Oi(this,a),this.ended=!0,0===a;2===e&&(Oi(this,0),c.F=0);return!0};
function Oi(a,b){0===b&&(a.result="string"===a.options.Ea?a.chunks.join(""):N.nc(a.chunks));a.chunks=[];a.err=b;a.msg=a.C.msg}
;function Pi(a){this.name=a}
;var Qi=new Pi("rawColdConfigGroup");var Ri=new Pi("rawHotConfigGroup");function Si(a){this.s=I(a)}
y(Si,L);Si.prototype.g=function(a){K(this,5,a)};function Ti(a){this.s=I(a)}
y(Ti,L);function Ui(a){this.s=I(a)}
y(Ui,L);Ui.ma=[2];function Vi(a){this.s=I(a)}
y(Vi,L);Vi.prototype.getPlayerType=function(){var a=0;a=void 0===a?0:a;var b=Od(this,36);return null!=b?b:a};
Vi.prototype.setHomeGroupInfo=function(a){return J(this,Ui,81,a)};
Vi.ma=[9,66,32,86,100,101];function Wi(a){this.s=I(a)}
y(Wi,L);Wi.prototype.getKey=function(){return $d(this,1)};
Wi.prototype.ja=function(){return $d(this,Vd(this,Xi,2))};
var Xi=[2,3,4,5,6];function Yi(a){this.s=I(a)}
y(Yi,L);Yi.ma=[15,26,28];function Zi(a){this.s=I(a)}
y(Zi,L);Zi.ma=[5];function $i(a){this.s=I(a)}
y($i,L);function aj(a){this.s=I(a)}
y(aj,L);aj.prototype.setSafetyMode=function(a){return de(this,5,a)};
aj.ma=[12];function bj(a){this.s=I(a)}
y(bj,L);bj.ma=[12];var cj={le:"WEB_DISPLAY_MODE_UNKNOWN",he:"WEB_DISPLAY_MODE_BROWSER",je:"WEB_DISPLAY_MODE_MINIMAL_UI",ke:"WEB_DISPLAY_MODE_STANDALONE",ie:"WEB_DISPLAY_MODE_FULLSCREEN"};function dj(a){this.s=I(a)}
y(dj,L);dj.prototype.getKey=function(){return $d(this,1)};
dj.prototype.ja=function(){return $d(this,2)};function ej(a){this.s=I(a)}
y(ej,L);ej.ma=[4,5];function fj(a){this.s=I(a)}
y(fj,L);function gj(a){this.s=I(a)}
y(gj,L);var hj=[2,3,4,5];function ij(a){this.s=I(a)}
y(ij,L);function jj(a){this.s=I(a)}
y(jj,L);function kj(a){this.s=I(a)}
y(kj,L);function lj(a){this.s=I(a)}
y(lj,L);lj.ma=[10,17];function mj(a){this.s=I(a)}
y(mj,L);function nj(a){this.s=I(a)}
y(nj,L);function oj(a){this.s=I(a)}
y(oj,L);function pj(a){this.s=I(a,492)}
y(pj,L);
var qj=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481,482,484,485,486,491];function rj(a){this.s=I(a)}
y(rj,L);function sj(a){this.s=I(a)}
y(sj,L);sj.prototype.getPlaylistId=function(){return ae(this,2)};
var be=[1,2];function tj(a){this.s=I(a)}
y(tj,L);tj.ma=[3];var uj=D.window,vj,wj,xj=(null==uj?void 0:null==(vj=uj.yt)?void 0:vj.config_)||(null==uj?void 0:null==(wj=uj.ytcfg)?void 0:wj.data_)||{};F("yt.config_",xj);function yj(){var a=arguments;1<a.length?xj[a[0]]=a[1]:1===a.length&&Object.assign(xj,a[0])}
function T(a,b){return a in xj?xj[a]:b}
function zj(){return T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Aj(){var a=xj.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Bj=[];function Cj(a){Bj.forEach(function(b){return b(a)})}
function Dj(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ej(b)}}:a}
function Ej(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=T("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),yj("ERRORS",b));Cj(a)}
function Fj(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=T("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),yj("ERRORS",f))}
;function U(a,b){a=Gj(a);return"string"===typeof a&&"false"===a?!1:a?!0:null!=b?b:!1}
function V(a,b){a=Gj(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Gj(a){return T("EXPERIMENT_FLAGS",{})[a]}
function Hj(){for(var a=[],b=T("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=T("EXPERIMENT_FLAGS",{});var e=w(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Ij=0;F("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++Ij});var Jj={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Kj(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Jj||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Kj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Kj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Kj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var mb=D.ytEventsEventsListeners||{};F("ytEventsEventsListeners",mb);var Lj=D.ytEventsEventsCounter||{count:0};F("ytEventsEventsCounter",Lj);
function Mj(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return lb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Na(e[4])&&Na(d)&&nb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Nj(a){a&&("string"==typeof a&&(a=[a]),db(a,function(b){if(b in mb){var c=mb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Oj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete mb[b]}}))}
var Oj=ab(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Pj(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Mj(a,b,c,d);if(!e){e=++Lj.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Kj(h);if(!je(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Kj(h);
h.currentTarget=a;return c.call(a,h)};
g=Dj(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Oj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);mb[e]=[a,b,c,g,d]}}}
;function Qj(a,b){"function"===typeof a&&(a=Dj(a));return window.setTimeout(a,b)}
function Rj(a){"function"===typeof a&&(a=Dj(a));return window.setInterval(a,250)}
;var Sj=/^[\w.]*$/,Tj={q:!0,search_query:!0};function Uj(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Vj(f[0]||""),h=Vj(f[1]||"");g in c?Array.isArray(c[g])?jb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],m=String(Uj);k.args=[{key:l,value:f[1],query:a,method:Wj==m?"unchanged":m}];Tj.hasOwnProperty(l)||Fj(k)}}return c}
var Wj=String(Uj);function Xj(a){var b=[];kb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];db(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Yj(a){"?"==a.charAt(0)&&(a=a.substr(1));return Uj(a,"&")}
function Zj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Yj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=dc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function ak(a){if(!b)var b=window.location.href;var c=a.match(Zb)[1]||null,d=ac(a);c&&d?(a=a.match(Zb),b=b.match(Zb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?ac(b)==d&&(Number(b.match(Zb)[4]||null)||null)==(Number(a.match(Zb)[4]||null)||null):!0;return a}
function Vj(a){return a&&a.match(Sj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function bk(a){var b=ck;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Ee;e.flash="0";a:{try{var f=b.g.top.location.href}catch(fa){f=2;break a}f=f?f===b.h.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?ge:g;try{var h=g.history.length}catch(fa){h=0}e.u_his=h;var k;e.u_h=null==(k=ge.screen)?void 0:k.height;var l;e.u_w=null==(l=ge.screen)?void 0:l.width;var m;e.u_ah=null==(m=ge.screen)?void 0:m.availHeight;var n;e.u_aw=
null==(n=ge.screen)?void 0:n.availWidth;var q;e.u_cd=null==(q=ge.screen)?void 0:q.colorDepth}catch(fa){}h=b.g;try{var p=h.screenX;var t=h.screenY}catch(fa){}try{var u=h.outerWidth;var z=h.outerHeight}catch(fa){}try{var C=h.innerWidth;var P=h.innerHeight}catch(fa){}try{var Q=h.screenLeft;var ha=h.screenTop}catch(fa){}try{C=h.innerWidth,P=h.innerHeight}catch(fa){}try{var bb=h.screen.availWidth;var Ua=h.screen.availTop}catch(fa){}p=[Q,ha,p,t,bb,Ua,u,z,C,P];t=b.g.top;try{var Ha=(t||window).document,ia=
"CSS1Compat"==Ha.compatMode?Ha.documentElement:Ha.body;var qa=(new he(ia.clientWidth,ia.clientHeight)).round()}catch(fa){qa=new he(-12245933,-12245933)}Ha=qa;qa={};var ra=void 0===ra?D:ra;ia=new Ef;"SVGElement"in ra&&"createElementNS"in ra.document&&ia.set(0);t=Ce();t["allow-top-navigation-by-user-activation"]&&ia.set(1);t["allow-popups-to-escape-sandbox"]&&ia.set(2);ra.crypto&&ra.crypto.subtle&&ia.set(3);"TextDecoder"in ra&&"TextEncoder"in ra&&ia.set(4);ra=Ff(ia);qa.bc=ra;qa.bih=Ha.height;qa.biw=
Ha.width;qa.brdim=p.join();b=b.h;b=(qa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,qa.wgl=!!ge.WebGLRenderingContext,qa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ck=new function(){var a=window.document;this.g=window;this.h=a};
F("yt.ads_.signals_.getAdSignalsString",function(a){return Xj(bk(a))});Va();var dk="XMLHttpRequest"in D?function(){return new XMLHttpRequest}:null;
function ek(){if(!dk)return null;var a=dk();return"open"in a?a:null}
;var fk="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(fk);var gk={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},hk="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(fk)),ik=!1;
function jk(a,b){b=void 0===b?{}:b;var c=ak(a),d=U("web_ajax_ignore_global_headers_if_set"),e;for(e in gk){var f=T(gk[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=T("VISITOR_DATA"));!f||!c&&ac(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===T("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}U("enable_eom_webview_header")&&c&&T("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!ac(a))b["X-YouTube-Utc-Offset"]=
String(-(new Date).getTimezoneOffset());if(c||!ac(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&ac(a)||(b["X-YouTube-Ad-Signals"]=Xj(bk()));return b}
function kk(a){var b=window.location.search,c=ac(a);U("debug_handle_relative_url_for_query_forward_killswitch")||!c&&ak(a)&&(c=document.location.hostname);var d=$b(a.match(Zb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Yj(b),f={};db(hk,function(g){e[g]&&(f[g]=e[g])});
return Zj(a,f||{},!1)}
function lk(a,b){var c=b.format||"JSON";a=mk(a,b);var d=nk(a,b),e=!1,f=ok(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||n||q)m=pk(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||D;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Qj(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||D,f))},d)}return f}
function mk(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=T("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Zj(a,b||{},!0);return a}
function nk(a,b){var c=T("XSRF_FIELD_NAME"),d=T("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=T("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||ac(a)&&!b.withCredentials&&ac(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(U("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Yj(e),qb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):dc(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!ik&&a&&"POST"!=b.method&&(ik=!0,Ej(Error("AJAX request with postData should use POST")));return e}
function pk(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Fj(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?qk(a):null)e={},db(a.getElementsByTagName("*"),function(g){e[g.tagName]=rk(g)})}d&&sk(e);
return e}
function sk(a){if(Na(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=sb();d=e?e.createHTML(d):d;a[c]=new Xb(d)}else sk(a[b])}}
function qk(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function rk(a){var b="";db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function tk(a,b){b.method="POST";b.postParams||(b.postParams={});return lk(a,b)}
function ok(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Dj(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=ek();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;U("debug_forward_web_query_parameters")&&(a=kk(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=jk(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var uk=[{Vb:function(a){return"Cannot read property '"+a.key+"'"},
Hb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Vb:function(a){return"Cannot call '"+a.key+"'"},
Hb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Vb:function(a){return a.key+" is not defined"},
Hb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var wk={Ca:[],za:[{kb:vk,weight:500}]};function vk(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function xk(){this.za=[];this.Ca=[]}
var yk;function zk(){if(!yk){var a=yk=new xk;a.Ca.length=0;a.za.length=0;wk.Ca&&a.Ca.push.apply(a.Ca,wk.Ca);wk.za&&a.za.push.apply(a.za,wk.za)}return yk}
;var Ak=new M;function Bk(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Ck(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Ck(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Ck(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Ck(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Dk(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Ek(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Bk(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Ek(f+".ve",g,h,k):0;d+=f;d+=Ek(e,a[e],b,c);if(500<d)break}}else c[b]=Fk(a),d+=c[b].length;else c[b]=Fk(a),d+=c[b].length;return d}
function Ek(a,b,c,d){c+="."+a;a=Fk(b);d[c]=a;return c.length+a.length}
function Fk(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Gk(){}
;function Hk(){if(!D.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return D.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":D.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":D.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":D.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Ik(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;F("ytglobal.prefsUserPrefsPrefs_",E("ytglobal.prefsUserPrefsPrefs_")||{});var Jk={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Kk={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},Lk={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Mk={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Nk(){var a=D.navigator;return a?a.connection:void 0}
;function Ok(a){var b=Fa.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
y(Ok,Error);function Pk(){try{return Qk(),!0}catch(a){return!1}}
function Qk(){if(void 0!==T("DATASYNC_ID"))return T("DATASYNC_ID");throw new Ok("Datasync ID not set","unknown");}
;function Rk(){}
function Sk(a,b){return Df.Ha(a,0,b)}
Rk.prototype.qa=function(a,b){return this.Ha(a,1,b)};
Rk.prototype.hb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Tk=V("web_emulated_idle_callback_delay",300),Uk=1E3/60-3,Vk=[8,5,4,3,2,1,0];
function Wk(a){a=void 0===a?{}:a;We.call(this);this.h=[];this.i={};this.fb=this.g=0;this.eb=this.u=!1;this.O=[];this.oa=this.gb=!1;for(var b=w(Vk),c=b.next();!c.done;c=b.next())this.h[c.value]=[];this.o=0;this.Qc=a.timeout||1;this.K=Uk;this.G=0;this.ub=this.ud.bind(this);this.Pc=this.zd.bind(this);this.Mc=this.Rc.bind(this);this.Nc=this.fd.bind(this);this.Oc=this.vd.bind(this);this.ec=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!U("disable_scheduler_requestIdleCallback");(this.ya=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ub)}
y(Wk,We);r=Wk.prototype;r.hb=function(a){var b=Va();Xk(a);a=Va()-b;this.u||(this.K-=a)};
r.Ha=function(a,b,c){++this.fb;if(10===b)return this.hb(a),this.fb;var d=this.fb;this.i[d]=a;this.u&&!c?this.O.push({id:d,priority:b}):(this.h[b].push(d),this.eb||this.u||(0!==this.g&&Yk(this)!==this.G&&Zk(this),this.start()));return d};
r.ba=function(a){delete this.i[a]};
function $k(a){a.O.length=0;for(var b=5;0<=b;b--)a.h[b].length=0;a.h[8].length=0;a.i={};Zk(a)}
function Yk(a){if(a.h[8].length){if(a.oa)return 4;if(!document.hidden&&a.ya)return 3}for(var b=5;b>=a.o;b--)if(0<a.h[b].length)return 0<b?!document.hidden&&a.ya?3:2:1;return 0}
function al(a){var b=E("yt.logging.errors.log");b&&b(a)}
function Xk(a){try{a()}catch(b){al(b)}}
function bl(a){for(var b=w(Vk),c=b.next();!c.done;c=b.next())if(a.h[c.value].length)return!0;return!1}
r.fd=function(a){var b=void 0;a&&(b=a.timeRemaining());this.gb=!0;cl(this,b);this.gb=!1};
r.zd=function(){cl(this)};
r.Rc=function(){dl(this)};
r.vd=function(a){this.oa=!0;var b=Yk(this);4===b&&b!==this.G&&(Zk(this),this.start());cl(this,void 0,a);this.oa=!1};
r.ud=function(){document.hidden||dl(this);this.g&&(Zk(this),this.start())};
function dl(a){Zk(a);a.u=!0;for(var b=Va(),c=a.h[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&Xk(e)}el(a);a.u=!1;bl(a)&&a.start();b=Va()-b;a.K-=b}
function el(a){for(var b=0,c=a.O.length;b<c;b++){var d=a.O[b];a.h[d.priority].push(d.id)}a.O.length=0}
function cl(a,b,c){a.oa&&4===a.G&&a.g||Zk(a);a.u=!0;b=Va()+(b||a.K);for(var d=a.h[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(l){al(l)}}for(d=a.h[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&Xk(e);d=a.gb?0:1;d=a.o>d?a.o:d;if(!(Va()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.h[f];g.length;){var h=g.shift(),k=c.i[h];delete c.i[h];if(k){c=k;break a}}c=null}c&&Xk(c)}while(c&&Va()<b)}a.u=!1;el(a);a.K=Uk;bl(a)&&a.start()}
r.start=function(){this.eb=!1;if(0===this.g)switch(this.G=Yk(this),this.G){case 1:var a=this.Nc;this.g=this.ec?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Tk);break;case 2:this.g=window.setTimeout(this.Pc,this.Qc);break;case 3:this.g=window.requestAnimationFrame(this.Oc);break;case 4:this.g=window.setTimeout(this.Mc,0)}};
function Zk(a){if(a.g){switch(a.G){case 1:var b=a.g;a.ec?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
r.sa=function(){$k(this);Zk(this);this.ya&&document.removeEventListener("visibilitychange",this.ub);We.prototype.sa.call(this)};var fl=E("yt.scheduler.instance.timerIdMap_")||{},gl=V("kevlar_tuner_scheduler_soft_state_timer_ms",800),hl=0,il=0;function jl(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.Aa)a=new Wk(T("scheduler")||{}),F("ytglobal.schedulerInstanceInstance_",a);return a}
function kl(){ll();var a=E("ytglobal.schedulerInstanceInstance_");a&&(Ve(a),F("ytglobal.schedulerInstanceInstance_",null))}
function ll(){$k(jl());for(var a in fl)fl.hasOwnProperty(a)&&delete fl[Number(a)]}
function ml(a,b,c){if(!c)return c=void 0===c,-jl().Ha(a,b,c);var d=window.setTimeout(function(){var e=jl().Ha(a,b);fl[d]=e},c);
return d}
function nl(a){jl().hb(a)}
function ol(a){var b=jl();if(0>a)b.ba(-a);else{var c=fl[a];c?(b.ba(c),delete fl[a]):window.clearTimeout(a)}}
function pl(){ql()}
function ql(){window.clearTimeout(hl);jl().start()}
function rl(){var a=jl();Zk(a);a.eb=!0;window.clearTimeout(hl);hl=window.setTimeout(pl,gl)}
function sl(){window.clearTimeout(il);il=window.setTimeout(function(){tl(0)},gl)}
function tl(a){sl();var b=jl();b.o=a;b.start()}
function ul(a){sl();var b=jl();b.o>a&&(b.o=a,b.start())}
function vl(){window.clearTimeout(il);var a=jl();a.o=0;a.start()}
;function wl(){Rk.apply(this,arguments)}
y(wl,Rk);function xl(){wl.g||(wl.g=new wl);return wl.g}
wl.prototype.Ha=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Qj(a,c||0)};
wl.prototype.ba=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
wl.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
var Df=xl();
U("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(F("yt.scheduler.instance.dispose",kl),F("yt.scheduler.instance.addJob",ml),F("yt.scheduler.instance.addImmediateJob",nl),F("yt.scheduler.instance.cancelJob",ol),F("yt.scheduler.instance.cancelAllJobs",ll),F("yt.scheduler.instance.start",ql),F("yt.scheduler.instance.pause",rl),F("yt.scheduler.instance.setPriorityThreshold",tl),F("yt.scheduler.instance.enablePriorityThreshold",ul),F("yt.scheduler.instance.clearPriorityThreshold",vl),F("yt.scheduler.initialized",
!0));function yl(a){var b=new ch;if(b.g)try{b.g.setItem("__sak","1");b.g.removeItem("__sak");var c=!0}catch(d){c=!1}else c=!1;(b=c?a?new ih(b,a):b:null)||(a=new dh(a||"UserDataSharedStore"),b=a.g?a:null);this.g=(a=b)?new Zg(a):null;this.h=document.domain||window.location.hostname}
yl.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Ag(b))}catch(f){return}else e=escape(b);b=this.h;Pe.set(""+a,e,{Tb:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
yl.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=Pe.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
yl.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.h;Pe.remove(""+a,"/",void 0===b?"youtube.com":b)};var zl=function(){var a;return function(){a||(a=new yl("ytidb"));return a}}();
function Al(){var a;return null==(a=zl())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Bl=[],Cl=!1;function Dl(a){Cl||(Bl.push({type:"ERROR",payload:a}),10<Bl.length&&Bl.shift())}
function El(a,b){Cl||(Bl.push({type:"EVENT",eventType:a,payload:b}),10<Bl.length&&Bl.shift())}
;function Fl(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Gl(a){return a.substr(0,a.indexOf(":"))||a}
;var Hl=Bc||Cc;var Il={},Jl=(Il.AUTH_INVALID="No user identifier specified.",Il.EXPLICIT_ABORT="Transaction was explicitly aborted.",Il.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Il.MISSING_INDEX="Index not created.",Il.MISSING_OBJECT_STORES="Object stores not created.",Il.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Il.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Il.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Il.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Il.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Il.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Il.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Il),Kl={},Ll=(Kl.AUTH_INVALID="ERROR",Kl.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Kl.EXPLICIT_ABORT="IGNORED",Kl.IDB_NOT_SUPPORTED="ERROR",Kl.MISSING_INDEX=
"WARNING",Kl.MISSING_OBJECT_STORES="ERROR",Kl.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Kl.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Kl.QUOTA_EXCEEDED="WARNING",Kl.QUOTA_MAYBE_EXCEEDED="WARNING",Kl.UNKNOWN_ABORT="WARNING",Kl.INCOMPATIBLE_DB_VERSION="WARNING",Kl),Ml={},Nl=(Ml.AUTH_INVALID=!1,Ml.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Ml.EXPLICIT_ABORT=!1,Ml.IDB_NOT_SUPPORTED=!1,Ml.MISSING_INDEX=!1,Ml.MISSING_OBJECT_STORES=!1,Ml.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Ml.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Ml.QUOTA_EXCEEDED=!1,Ml.QUOTA_MAYBE_EXCEEDED=!0,Ml.UNKNOWN_ABORT=!0,Ml.INCOMPATIBLE_DB_VERSION=!1,Ml);function X(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Jl[a]:c;d=void 0===d?Ll[a]:d;e=void 0===e?Nl[a]:e;Ok.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,X.prototype)}
y(X,Ok);function Ol(a,b){X.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Jl.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Ol.prototype)}
y(Ol,X);function Pl(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Pl.prototype)}
y(Pl,Error);var Ql=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Rl(a,b,c,d){b=Gl(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof X)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new X("QUOTA_EXCEEDED",a);if(Dc&&"UnknownError"===e.name)return new X("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Pl)return new X("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Ql.some(function(f){return e.message.includes(f)}))return new X("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new X("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",we:e.name})];e.level="WARNING";return e}
function Sl(a,b,c){var d=Al();return new X("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Tl(a){if(!a)throw Error();throw a;}
function Ul(a){return a}
function Vl(a){this.g=a}
function Wl(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=w(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.h=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
Wl.resolve=function(a){return new Wl(new Vl(function(b,c){a instanceof Wl?a.then(b,c):b(a)}))};
Wl.reject=function(a){return new Wl(new Vl(function(b,c){c(a)}))};
Wl.prototype.then=function(a,b){var c=this,d=null!=a?a:Ul,e=null!=b?b:Tl;return new Wl(new Vl(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){Xl(c,c,d,f,g)}),c.h.push(function(){Yl(c,c,e,f,g)})):"FULFILLED"===c.state.status?Xl(c,c,d,f,g):"REJECTED"===c.state.status&&Yl(c,c,e,f,g)}))};
function Zl(a,b){a.then(void 0,b)}
function Xl(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Wl?$l(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Yl(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Wl?$l(a,b,f,d,e):d(f)}catch(g){e(g)}}
function $l(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Wl?$l(a,b,f,d,e):d(f)},function(f){e(f)})}
;function am(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function bm(a){return new Promise(function(b,c){am(a,b,c)})}
function cm(a){return new Wl(new Vl(function(b,c){am(a,b,c)}))}
;function dm(a,b){return new Wl(new Vl(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var em=window,Y=em.ytcsi&&em.ytcsi.now?em.ytcsi.now:em.performance&&em.performance.timing&&em.performance.now&&em.performance.timing.navigationStart?function(){return em.performance.timing.navigationStart+em.performance.now()}:function(){return(new Date).getTime()};function fm(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(Y());this.h=!1}
r=fm.prototype;r.add=function(a,b,c){return gm(this,[a],{mode:"readwrite",W:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return gm(this,[a],{mode:"readwrite",W:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function hm(a,b,c){a=a.g.createObjectStore(b,c);return new im(a)}
r.delete=function(a,b){return gm(this,[a],{mode:"readwrite",W:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return gm(this,[a],{mode:"readonly",W:!0},function(c){return c.objectStore(a).get(b)})};
function jm(a,b,c){return gm(a,[b],{mode:"readwrite",W:!0},function(d){d=d.objectStore(b);return cm(d.g.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function gm(a,b,c,d){var e,f,g,h,k,l,m,n,q,p,t,u;return B(function(z){switch(z.g){case 1:var C={mode:"readonly",W:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?C.mode=c:Object.assign(C,c);e=C;a.transactionCount++;f=e.W?3:1;g=0;case 2:if(h){z.B(4);break}g++;k=Math.round(Y());wa(z,5);l=a.g.transaction(b,e.mode);C=new km(l);C=lm(C,d);return A(z,C,7);case 7:return m=z.h,n=Math.round(Y()),mm(a,k,n,g,void 0,b.join(),e),z.return(m);case 5:q=xa(z);p=Math.round(Y());t=Rl(q,a.g.name,b.join(),a.g.version);
if((u=t instanceof X&&!t.g)||g>=f)mm(a,k,p,g,t,b.join(),e),h=t;z.B(2);break;case 4:return z.return(Promise.reject(h))}})}
function mm(a,b,c,d,e,f,g){b=c-b;e?(e instanceof X&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&El("QUOTA_EXCEEDED",{dbName:Gl(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof X&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),El("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.h=!0),nm(a,!1,d,f,b,g.tag),Dl(e)):nm(a,!0,d,f,b,g.tag)}
function nm(a,b,c,d,e,f){El("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.h,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.g.name};
function im(a){this.g=a}
r=im.prototype;r.add=function(a,b){return cm(this.g.add(a,b))};
r.autoIncrement=function(){return this.g.autoIncrement};
r.clear=function(){return cm(this.g.clear()).then(function(){})};
function om(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function pm(a,b){return qm(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?pm(this,a):cm(this.g.delete(a))};
r.get=function(a){return cm(this.g.get(a))};
r.index=function(a){try{return new rm(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Pl(a,this.g.name);throw b;}};
r.getName=function(){return this.g.name};
r.keyPath=function(){return this.g.keyPath};
function qm(a,b,c){a=a.g.openCursor(b.query,b.direction);return sm(a).then(function(d){return dm(d,c)})}
function km(a){var b=this;this.g=a;this.i=new Map;this.h=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.h){e=X;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function lm(a,b){var c=new Promise(function(d,e){try{Zl(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
km.prototype.abort=function(){this.g.abort();this.h=!0;throw new X("EXPLICIT_ABORT");};
km.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new im(a),this.i.set(a,b));return b};
function rm(a){this.g=a}
r=rm.prototype;r.delete=function(a){return tm(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
r.get=function(a){return cm(this.g.get(a))};
r.getKey=function(a){return cm(this.g.getKey(a))};
r.keyPath=function(){return this.g.keyPath};
r.unique=function(){return this.g.unique};
function tm(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return sm(a).then(function(d){return dm(d,c)})}
function um(a,b){this.request=a;this.cursor=b}
function sm(a){return cm(a).then(function(b){return b?new um(a,b):null})}
r=um.prototype;r.advance=function(a){this.cursor.advance(a);return sm(this.request)};
r.continue=function(a){this.cursor.continue(a);return sm(this.request)};
r.delete=function(){return cm(this.cursor.delete()).then(function(){})};
r.getKey=function(){return this.cursor.key};
r.ja=function(){return this.cursor.value};
r.update=function(a){return cm(this.cursor.update(a))};function vm(a,b,c){return new Promise(function(d,e){function f(){q||(q=new fm(g.result,{closed:n}));return q}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Tc,k=c.Uc,l=c.yd,m=c.upgrade,n=c.closed,q;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&El("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:Gl(a)});var t=f(),u=new km(g.transaction);m&&
m(t,function(z){return p.oldVersion<z&&p.newVersion>=z},u);
u.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){El("IDB_UNEXPECTEDLY_CLOSED",{dbName:Gl(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function wm(a,b,c){c=void 0===c?{}:c;return vm(a,b,c)}
function xm(a,b){b=void 0===b?{}:b;var c,d,e,f;return B(function(g){if(1==g.g)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Tc)&&c.addEventListener("blocked",function(){e()}),A(g,bm(c),4);
if(2!=g.g)g.g=0,g.o=0;else throw f=xa(g),Rl(f,a,"",-1);})}
;function ym(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.l=0}
ym.prototype.h=function(a,b,c){c=void 0===c?{}:c;return wm(a,b,c)};
ym.prototype.delete=function(a){a=void 0===a?{}:a;return xm(this.name,a)};
function zm(a,b){return new X("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Am(a,b){if(!b)throw Sl("openWithToken",Gl(a.name));return Bm(a)}
function Bm(a){function b(){var f,g,h,k,l,m,n,q,p,t;return B(function(u){switch(u.g){case 1:return g=null!=(f=Error().stack)?f:"",wa(u,2),A(u,a.h(a.name,a.options.version,d),4);case 4:h=u.h;for(var z=a.options,C=[],P=w(Object.keys(z.ab)),Q=P.next();!Q.done;Q=P.next()){Q=Q.value;var ha=z.ab[Q],bb=void 0===ha.wd?Number.MAX_VALUE:ha.wd;!(h.g.version>=ha.ib)||h.g.version>=bb||h.g.objectStoreNames.contains(Q)||C.push(Q)}k=C;if(0===k.length){u.B(5);break}l=Object.keys(a.options.ab);m=h.objectStoreNames();
if(a.o<V("ytidb_reopen_db_retries",0))return a.o++,h.close(),Dl(new X("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),u.return(b());if(!(a.l<V("ytidb_remake_db_retries",1))){u.B(6);break}a.l++;return A(u,a.delete(),7);case 7:return Dl(new X("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),u.return(b());case 6:throw new Ol(m,l);case 5:return u.return(h);case 2:n=xa(u);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){u.B(8);break}return A(u,a.h(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:q=u.h;p=q.g.version;if(void 0!==a.options.version&&p>a.options.version+1)throw q.close(),a.i=!1,zm(a,p);return u.return(q);case 8:throw c(),n instanceof Error&&!U("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Rl(n,a.name,"",null!=(t=a.options.version)?t:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw zm(a);if(a.g)return a.g;var d={Uc:function(f){f.close()},
closed:c,yd:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var Cm=new ym("YtIdbMeta",{ab:{databases:{ib:1}},upgrade:function(a,b){b(1)&&hm(a,"databases",{keyPath:"actualName"})}});
function Dm(a,b){var c;return B(function(d){if(1==d.g)return A(d,Am(Cm,b),2);c=d.h;return d.return(gm(c,["databases"],{W:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return cm(f.g.put(a,void 0)).then(function(){})})}))})}
function Em(a,b){var c;return B(function(d){if(1==d.g)return a?A(d,Am(Cm,b),2):d.return();c=d.h;return d.return(c.delete("databases",a))})}
function Fm(a,b){var c,d;return B(function(e){return 1==e.g?(c=[],A(e,Am(Cm,b),2)):3!=e.g?(d=e.h,A(e,gm(d,["databases"],{W:!0,mode:"readonly"},function(f){c.length=0;return qm(f.objectStore("databases"),{},function(g){a(g.ja())&&c.push(g.ja());return g.continue()})}),3)):e.return(c)})}
function Gm(a){return Fm(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Hm,Im=new function(){}(new function(){});
function Jm(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=Al();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Hl)f=/WebKit\/([0-9]+)/.exec(Lb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Lb()),f=!(f&&602<=parseInt(f[1],10)));if(f||lc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return A(e,Dm(d,Im),4);case 4:return A(e,Em("yt-idb-test-do-not-use",Im),5);case 5:return e.return(!0);case 2:return xa(e),e.return(!1)}})}
function Km(){if(void 0!==Hm)return Hm;Cl=!0;return Hm=Jm().then(function(a){Cl=!1;var b;if(null!=(b=zl())&&b.g){var c;b={hasSucceededOnce:(null==(c=Al())?void 0:c.hasSucceededOnce)||a};var d;null==(d=zl())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Lm(){return E("ytglobal.idbToken_")||void 0}
function Mm(){var a=Lm();return a?Promise.resolve(a):Km().then(function(b){(b=b?Im:void 0)&&F("ytglobal.idbToken_",b);return b})}
;new Bg;function Nm(a){if(!Pk())throw a=new X("AUTH_INVALID",{dbName:a}),Dl(a),a;var b=Qk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Om(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.g){case 1:return f=null!=(e=Error().stack)?e:"",A(m,Mm(),2);case 2:g=m.h;if(!g)throw h=Sl("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Dl(h),h;Fl(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Nm(a);wa(m,3);return A(m,Dm(k,g),5);case 5:return A(m,wm(k.actualName,b,d),6);case 6:return m.return(m.h);case 3:return l=xa(m),wa(m,7),A(m,Em(k.actualName,g),9);case 9:m.g=
8;m.o=0;break;case 7:xa(m);case 8:throw l;}})}
function Bn(a,b,c){c=void 0===c?{}:c;return Om(a,b,!1,c)}
function Cn(a,b,c){c=void 0===c?{}:c;return Om(a,b,!0,c)}
function Dn(a,b){b=void 0===b?{}:b;var c,d;return B(function(e){if(1==e.g)return A(e,Mm(),2);if(3!=e.g){c=e.h;if(!c)return e.return();Fl(a);d=Nm(a);return A(e,xm(d.actualName,b),3)}return A(e,Em(d.actualName,c),0)})}
function En(a,b,c){a=a.map(function(d){return B(function(e){return 1==e.g?A(e,xm(d.actualName,b),2):A(e,Em(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Fn(){var a=void 0===a?{}:a;var b,c;return B(function(d){if(1==d.g)return A(d,Mm(),2);if(3!=d.g){b=d.h;if(!b)return d.return();Fl("LogsDatabaseV2");return A(d,Gm(b),3)}c=d.h;return A(d,En(c,a,b),0)})}
function Gn(a,b){b=void 0===b?{}:b;var c;return B(function(d){if(1==d.g)return A(d,Mm(),2);if(3!=d.g){c=d.h;if(!c)return d.return();Fl(a);return A(d,xm(a,b),3)}return A(d,Em(a,c),0)})}
;function Hn(a,b){ym.call(this,a,b);this.options=b;Fl(a)}
y(Hn,ym);function In(a,b){var c;return function(){c||(c=new Hn(a,b));return c}}
Hn.prototype.h=function(a,b,c){c=void 0===c?{}:c;return(this.options.Mb?Cn:Bn)(a,b,Object.assign({},c))};
Hn.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Mb?Gn:Dn)(this.name,a)};
function Jn(a,b){return In(a,b)}
;var Kn={},Ln=Jn("ytGcfConfig",{ab:(Kn.coldConfigStore={ib:1},Kn.hotConfigStore={ib:1},Kn),Mb:!1,upgrade:function(a,b){b(1)&&(om(hm(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),om(hm(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Mn(a){return Am(Ln(),a)}
function Nn(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:Y()},A(g,Mn(c),2);case 2:return e=g.h,A(g,e.clear("hotConfigStore"),3);case 3:return A(g,jm(e,"hotConfigStore",d),4);case 4:return f=g.h,g.return(f)}})}
function On(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},A(h,Mn(d),2);case 2:return f=h.h,A(h,f.clear("coldConfigStore"),3);case 3:return A(h,jm(f,"coldConfigStore",e),4);case 4:return g=h.h,h.return(g)}})}
function Pn(a){var b,c;return B(function(d){return 1==d.g?A(d,Mn(a),2):3!=d.g?(b=d.h,c=void 0,A(d,gm(b,["coldConfigStore"],{mode:"readwrite",W:!0},function(e){return tm(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
function Qn(a){var b,c;return B(function(d){return 1==d.g?A(d,Mn(a),2):3!=d.g?(b=d.h,c=void 0,A(d,gm(b,["hotConfigStore"],{mode:"readwrite",W:!0},function(e){return tm(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
;function Rn(){We.call(this);this.h=[];this.g=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.h=[].concat(x(a)),this.g=a):(this.g=[],F("yt.gcf.config.hotUpdateCallbacks",this.g))}
y(Rn,We);Rn.prototype.sa=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.h.length=0;We.prototype.sa.call(this)};function Sn(){this.h=0;this.i=new Rn}
function Tn(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!U("start_client_gcf")){g.B(0);break}c&&(a.l=c,F("yt.gcf.config.hotConfigGroup",a.l||null));a.g(b);d=Lm();if(!d){g.B(3);break}if(c){g.B(4);break}return A(g,Qn(d),5);case 5:e=g.h,c=null==(f=e)?void 0:f.config;case 4:return A(g,Nn(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.g),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.g=0}})}
function Un(a,b,c){var d,e,f,g;return B(function(h){if(1==h.g){if(!U("start_client_gcf"))return h.B(0);a.coldHashData=b;F("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Lm())?c?h.B(4):A(h,Pn(d),5):h.B(0)}4!=h.g&&(e=h.h,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return A(h,On(c,b,g,d),0)})}
Sn.prototype.g=function(a){this.hotHashData=a;F("yt.gcf.config.hotHashData",this.hotHashData||null)};function Vn(){return"INNERTUBE_API_KEY"in xj&&"INNERTUBE_API_VERSION"in xj}
function Wn(){return{gd:T("INNERTUBE_API_KEY"),hd:T("INNERTUBE_API_VERSION"),Pb:T("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),sc:T("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),jd:T("INNERTUBE_CONTEXT_CLIENT_NAME",1),uc:T("INNERTUBE_CONTEXT_CLIENT_VERSION"),wc:T("INNERTUBE_CONTEXT_HL"),vc:T("INNERTUBE_CONTEXT_GL"),kd:T("INNERTUBE_HOST_OVERRIDE")||"",md:!!T("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ld:!!T("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:T("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Xn(a){var b={client:{hl:a.wc,gl:a.vc,clientName:a.sc,clientVersion:a.uc,configInfo:a.Pb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=D.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=T("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Hj();0<c.length&&(b.request={internalExperimentFlags:c});Yn(a,void 0,b);Zn(void 0,b);$n(void 0,b);ao(a,void 0,b);bo(void 0,b);U("start_client_gcf")&&co(void 0,b);T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&
(b.user={onBehalfOfUser:T("DELEGATED_SESSION_ID")});!U("fill_delegate_context_in_gel_killswitch")&&(a=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=w(Object.entries(Yj(T("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=
h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Yn(a,b,c){a=a.sc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Wd(b,Ti,96)||new Ti;var d=Hk();d=Object.keys(cj).indexOf(d);d=-1===d?null:d;null!==d&&de(c,3,d);J(b,Ti,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Hk())}
function Zn(a,b){var c=E("yt.embedded_player.embed_url");c&&(a?(b=Wd(a,Zi,7)||new Zi,K(b,4,c),J(a,Zi,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function $n(a,b){var c;if(U("web_log_memory_total_kbytes")&&(null==(c=D.navigator)?0:c.deviceMemory)){var d;c=null==(d=D.navigator)?void 0:d.deviceMemory;a?Qd(a,95,zd(1E6*c)):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function ao(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Wd(b,Si,62))?d:new Si;K(c,6,a.appInstallData);J(b,Si,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function bo(a,b){a:{var c=Nk();if(c){var d=Jk[c.type||"unknown"]||"CONN_UNKNOWN";c=Jk[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?de(a,61,Kk[d]):b&&(b.client.connectionType=d));U("web_log_effective_connection_type")&&(d=Nk(),d=null!=d&&d.effectiveType?Mk.hasOwnProperty(d.effectiveType)?Mk[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?de(a,94,Lk[d]):
b&&(b.client.effectiveConnectionType=d)))}
function eo(a,b,c){c=void 0===c?{}:c;var d={};T("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":T("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||T("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.oe||T("AUTHORIZATION");if(!b)if(a)b="Bearer "+E("gapi.auth.getToken")().ne;else{Gk.g||(Gk.g=new Gk);a={};if(c=Se([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(T("SESSION_INDEX",0)),c=isNaN(c)?0:c),U("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in xj||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in xj&&(a["X-Goog-PageId"]=T("DELEGATED_SESSION_ID"));U("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function co(a,b){if(!Sn.g){var c=new Sn;Sn.g=c}c=Sn.g;var d=Y()-c.h;if(0!==c.h&&d<V("send_config_hash_timer"))c=void 0;else{d=E("yt.gcf.config.coldConfigData");var e=E("yt.gcf.config.hotHashData"),f=E("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=Wd(a,Si,62))?g:new Si;K(b,1,c);K(b,3,d);b.g(e);J(a,Si,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var fo=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.tb;M.prototype.publish=M.prototype.bb;M.prototype.clear=M.prototype.clear;F("ytPubsub2Pubsub2Instance",fo);F("ytPubsub2Pubsub2SubscribedKeys",E("ytPubsub2Pubsub2SubscribedKeys")||{});F("ytPubsub2Pubsub2TopicToKeys",E("ytPubsub2Pubsub2TopicToKeys")||{});F("ytPubsub2Pubsub2IsAsync",E("ytPubsub2Pubsub2IsAsync")||{});F("ytPubsub2Pubsub2SkipSubKey",null);function go(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={Ce:a,Be:b},(b=E("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var ho=void 0,io=void 0;function jo(){if(!io){var a=T("WORKER_SERIALIZATION_URL");if(a){if(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue){var b=sb();a=b?b.createScriptURL(a):a;a=new wb(a,xb)}else a=null;io=a}else io=null}return io||void 0}
function ko(){var a=jo();if(!ho&&void 0!==a){var b=Worker;a instanceof wb&&a.constructor===wb?a=a.g:(La(a),a="type_error:TrustedResourceUrl");ho=new b(a,void 0)}return ho}
;var lo=V("max_body_size_to_compress",5E5),mo=V("min_body_size_to_compress",500),no=!0,oo=0,po=0,qo=V("compression_performance_threshold_lr",250),ro=V("slow_compressions_before_abandon_count",4),so=!1,to=new Map,uo=1,vo=!0;function wo(){if("function"===typeof Worker&&jo()&&!so){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=to.get(c.key);d&&(xo(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),to.delete(c.key))}},b=ko();
b&&(b.addEventListener("message",a),b.onerror=function(){to.clear()},so=!0)}}
function yo(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:Y(),ticks:{},infos:{}};if(no)try{try{var g=(new Blob(b.split(""))).size}catch(n){Fj(n),g=null}if(null!=g&&(g>lo||g<mo))d(a,c);else{if(U("gzip_gel_with_worker")&&(U("initial_gzip_use_main_thread")&&!vo||!U("initial_gzip_use_main_thread"))){so||wo();var h=ko();if(h&&!e){to.set(uo,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:uo});uo++;return}}var k=Ue(b);var l=l||{};l.ed=!0;var m=new Ni(l);
m.push(k,!0);if(m.err)throw m.msg||uh[m.err];xo(m.result,f,a,c,d)}}catch(n){Fj(n),d(a,c)}else d(a,c)}
function xo(a,b,c,d,e){vo=!1;var f=Y();b.ticks.gelc=f;po++;U("disable_compression_due_to_performance_degredation")&&f-b.startTime>=qo&&(oo++,U("abandon_compression_after_N_slow_zips")?po===V("compression_disable_point")&&oo>ro&&(no=!1):no=!1);U("gel_compression_csi_killswitch")||!U("log_gel_compression_latency")&&!U("log_gel_compression_latency_lr")||go("gel_compression",b,{sampleRate:.1});d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
;function zo(a){a=Object.assign({},a);delete a.Authorization;var b=Se();if(b){var c=new mg;c.update(T("INNERTUBE_API_KEY"));c.update(b);a.hash=Gc(c.digest(),3)}return a}
;var Ao;function Bo(){Ao||(Ao=new yl("yt.innertube"));return Ao}
function Co(a,b,c,d){if(d)return null;d=Bo().get("nextId",!0)||1;var e=Bo().get("requests",!0)||{};e[d]={method:a,request:b,authState:zo(c),requestTime:Math.round(Y())};Bo().set("nextId",d+1,86400,!0);Bo().set("requests",e,86400,!0);return d}
function Do(a){var b=Bo().get("requests",!0)||{};delete b[a];Bo().set("requests",b,86400,!0)}
function Eo(a){var b=Bo().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Y())-d.requestTime)){var e=d.authState,f=zo(eo(!1));nb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),Fo(a,d.method,e,{}));delete b[c]}}Bo().set("requests",b,86400,!0)}}
;function Go(a){this.vb=this.g=!1;this.potentialEsfErrorCounter=this.h=0;this.handleError=function(){};
this.Ta=function(){};
this.now=Date.now;this.nb=!1;var b;this.Ic=null!=(b=a.Ic)?b:100;var c;this.Gc=null!=(c=a.Gc)?c:1;var d;this.Ec=null!=(d=a.Ec)?d:2592E6;var e;this.Dc=null!=(e=a.Dc)?e:12E4;var f;this.Fc=null!=(f=a.Fc)?f:5E3;var g;this.I=null!=(g=a.I)?g:void 0;this.Ab=!!a.Ab;var h;this.yb=null!=(h=a.yb)?h:.1;var k;this.Ib=null!=(k=a.Ib)?k:10;a.handleError&&(this.handleError=a.handleError);a.Ta&&(this.Ta=a.Ta);a.nb&&(this.nb=a.nb);a.vb&&(this.vb=a.vb);this.J=a.J;this.ha=a.ha;this.N=a.N;this.R=a.R;this.sendFn=a.sendFn;
this.Yb=a.Yb;this.Xb=a.Xb;Ho(this)&&(!this.J||this.J("networkless_logging"))&&Io(this)}
function Io(a){Ho(a)&&!a.nb&&(a.g=!0,a.Ab&&Math.random()<=a.yb&&a.N.Vc(a.I),Jo(a),a.R.ca()&&a.sb(),a.R.La(a.Yb,a.sb.bind(a)),a.R.La(a.Xb,a.ic.bind(a)))}
r=Go.prototype;r.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Ho(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.N.set(d,this.I).then(function(e){d.id=e;c.R.ca()&&Ko(c,d)}).catch(function(e){Ko(c,d);
Lo(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Ho(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J&&this.J("nwl_skip_retry")&&(e.skipRetry=c);if(this.R.ca()||this.J&&this.J("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(1==k.g)return A(k,d.N.set(e,d.I).catch(function(l){Lo(d,l)}),2);
f(g,h);k.g=0})}}this.sendFn(a,b,e.skipRetry)}else this.N.set(e,this.I).catch(function(g){d.sendFn(a,b,e.skipRetry);
Lo(d,g)})}else this.sendFn(a,b,this.J&&this.J("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Ho(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.N.Sa(d.id,c.I):e=!0;c.R.Na&&c.J&&c.J("vss_network_hint")&&c.R.Na(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.N.set(d,this.I).then(function(g){d.id=g;e&&c.N.Sa(d.id,c.I)}).catch(function(g){Lo(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.sb=function(){var a=this;if(!Ho(this))throw Error("IndexedDB is not supported: throttleSend");this.h||(this.h=this.ha.qa(function(){var b;return B(function(c){if(1==c.g)return A(c,a.N.oc("NEW",a.I),2);if(3!=c.g)return b=c.h,b?A(c,Ko(a,b),3):(a.ic(),c.return());a.h&&(a.h=0,a.sb());c.g=0})},this.Ic))};
r.ic=function(){this.ha.ba(this.h);this.h=0};
function Ko(a,b){var c;return B(function(d){switch(d.g){case 1:if(!Ho(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return A(d,a.N.od(b.id,a.I),3);case 3:(c=d.h)||a.Ta(Error("The request cannot be found in the database."));case 2:if(Mo(a,b,a.Ec)){d.B(4);break}a.Ta(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return A(d,a.N.Sa(b.id,a.I),5);case 5:return d.return();case 4:b.skipRetry||(b=No(a,b));if(!b){d.B(0);
break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return A(d,a.N.Sa(b.id,a.I),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.g=0}})}
function No(a,b){if(!Ho(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.g){case 1:g=Oo(f);(h=Po(f))&&a.J&&a.J("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.J&&a.J("nwl_consider_error_code")&&g||a.J&&!a.J("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Ib)){m.B(2);break}if(!a.R.Lb){m.B(3);break}return A(m,a.R.Lb(),3);case 3:if(a.R.ca()){m.B(2);break}c(e,f);if(!a.J||!a.J("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){m.B(6);
break}return A(m,a.N.Zb(b.id,a.I,!1),6);case 6:return m.return();case 2:if(a.J&&a.J("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Ib)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){m.B(8);break}return b.sendCount<a.Gc?A(m,a.N.Zb(b.id,a.I,!0,h?!1:void 0),12):A(m,a.N.Sa(b.id,a.I),8);case 12:a.ha.qa(function(){a.R.ca()&&a.sb()},a.Fc);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):A(h,a.N.Sa(b.id,a.I),2);a.R.Na&&a.J&&a.J("vss_network_hint")&&a.R.Na(!0);d(e,f);h.g=0})};
return b}
function Mo(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Jo(a){if(!Ho(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.N.oc("QUEUED",a.I).then(function(b){b&&!Mo(a,b,a.Dc)?a.ha.qa(function(){return B(function(c){if(1==c.g)return void 0===b.id?c.B(2):A(c,a.N.Zb(b.id,a.I),2);Jo(a);c.g=0})}):a.R.ca()&&a.sb()})}
function Lo(a,b){a.Kc&&!a.R.ca()?a.Kc(b):a.handleError(b)}
function Ho(a){return!!a.I||a.vb}
function Oo(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Po(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Qo;
function Ro(){if(Qo)return Qo();var a={};Qo=Jn("LogsDatabaseV2",{ab:(a.LogsRequestsStore={ib:2},a),Mb:!1,upgrade:function(b,c,d){c(2)&&hm(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),om(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return Qo()}
;function So(a){return Am(Ro(),a)}
function To(a,b){var c,d,e,f;return B(function(g){if(1==g.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},A(g,So(b),2);if(3!=g.g)return d=g.h,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:T("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),A(g,jm(d,"LogsRequestsStore",e),3);f=g.h;c.ticks.tc=Y();Uo(c);return g.return(f)})}
function Vo(a,b){var c,d,e,f,g,h,k;return B(function(l){if(1==l.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},A(l,So(b),2);if(3!=l.g)return d=l.h,e=T("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),k=void 0,A(l,gm(d,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(m){return tm(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(n){n.ja()&&(k=n.ja(),"NEW"===a&&(k.status="QUEUED",
n.update(k)))})}),3);
c.ticks.tc=Y();Uo(c);return l.return(k)})}
function Wo(a,b){var c;return B(function(d){if(1==d.g)return A(d,So(b),2);c=d.h;return d.return(gm(c,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",cm(f.g.put(g,void 0)).then(function(){return g})})}))})}
function Xo(a,b,c,d){c=void 0===c?!0:c;var e;return B(function(f){if(1==f.g)return A(f,So(b),2);e=f.h;return f.return(gm(e,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),cm(h.g.put(k,void 0)).then(function(){return k})):Wl.resolve(void 0)})}))})}
function Yo(a,b){var c;return B(function(d){if(1==d.g)return A(d,So(b),2);c=d.h;return d.return(c.delete("LogsRequestsStore",a))})}
function Zo(a){var b,c;return B(function(d){if(1==d.g)return A(d,So(a),2);b=d.h;c=Y()-2592E6;return A(d,gm(b,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){return qm(e.objectStore("LogsRequestsStore"),{},function(f){if(f.ja().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function $o(){B(function(a){return A(a,Fn(),0)})}
function Uo(a){U("nwl_csi_killswitch")||go("networkless_performance",a,{sampleRate:1})}
;var ap={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,vssData:491};var bp={},cp=Jn("ServiceWorkerLogsDatabase",{ab:(bp.SWHealthLog={ib:1},bp),Mb:!0,upgrade:function(a,b){b(1)&&om(hm(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function dp(a){return Am(cp(),a)}
function ep(a){var b,c;B(function(d){if(1==d.g)return A(d,dp(a),2);b=d.h;c=Y()-2592E6;return A(d,gm(b,["SWHealthLog"],{mode:"readwrite",W:!0},function(e){return qm(e.objectStore("SWHealthLog"),{},function(f){if(f.ja().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function fp(a){var b;return B(function(c){if(1==c.g)return A(c,dp(a),2);b=c.h;return A(c,b.clear("SWHealthLog"),0)})}
;var gp={},hp=0;function ip(a){var b=new Image,c=""+hp++;gp[c]=b;b.onload=b.onerror=function(){delete gp[c]};
b.src=a}
;function jp(){this.g=new Map;this.h=!1}
function kp(){if(!jp.g){var a=E("yt.networkRequestMonitor.instance")||new jp;F("yt.networkRequestMonitor.instance",a);jp.g=a}return jp.g}
jp.prototype.requestComplete=function(a,b){b&&(this.h=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
jp.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.h?!0:null};
jp.prototype.removeParams=function(a){return a.split("?")[0]};
jp.prototype.removeParams=jp.prototype.removeParams;jp.prototype.isEndpointCFR=jp.prototype.isEndpointCFR;jp.prototype.requestComplete=jp.prototype.requestComplete;jp.getInstance=kp;var lp;function mp(){lp||(lp=new yl("yt.offline"));return lp}
function np(a){if(U("offline_error_handling")){var b=mp().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);mp().set("errors",b,2592E3,!0)}}
;function Z(){wf.call(this);var a=this;this.i=!1;this.h=Cf();this.h.La("networkstatus-online",function(){if(a.i&&U("offline_error_handling")){var b=mp().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Ok(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Ej(d)}mp().set("errors",{},2592E3,!0)}}})}
y(Z,wf);function op(){if(!Z.g){var a=E("yt.networkStatusManager.instance")||new Z;F("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
r=Z.prototype;r.ca=function(){return this.h.ca()};
r.Na=function(a){this.h.h=a};
r.cd=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
r.Yc=function(){this.i=!0};
r.La=function(a,b){return this.h.La(a,b)};
r.Lb=function(a){a=Af(this.h,a);a.then(function(b){U("use_cfr_monitor")&&kp().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Lb;Z.prototype.listen=Z.prototype.La;Z.prototype.enableErrorFlushing=Z.prototype.Yc;Z.prototype.getWindowStatus=Z.prototype.cd;Z.prototype.networkStatusHint=Z.prototype.Na;Z.prototype.isNetworkAvailable=Z.prototype.ca;Z.getInstance=op;function pp(a){a=void 0===a?{}:a;wf.call(this);var b=this;this.h=this.u=0;this.i=op();var c=E("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.Kb?(this.Kb=a.Kb,c("networkstatus-online",function(){qp(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){qp(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){xf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){xf(b,"publicytnetworkstatus-offline")})))}
y(pp,wf);pp.prototype.ca=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
pp.prototype.Na=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
pp.prototype.Lb=function(a){var b=this,c;return B(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return U("skip_network_check_if_cfr")&&kp().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Na((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ca())})):c?d.return(c(a)):d.return(!0)})};
function qp(a,b){a.Kb?a.h?(Df.ba(a.u),a.u=Df.qa(function(){a.o!==b&&(xf(a,b),a.o=b,a.h=Y())},a.Kb-(Y()-a.h))):(xf(a,b),a.o=b,a.h=Y()):xf(a,b)}
;var rp;function sp(){var a=Go.call;rp||(rp=new pp({se:!0,re:!0}));a.call(Go,this,{N:{Vc:Zo,Sa:Yo,oc:Vo,od:Wo,Zb:Xo,set:To},R:rp,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Fj(new Ok(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Ej(b)},
Ta:Fj,sendFn:tp,now:Y,Kc:np,ha:xl(),Yb:"publicytnetworkstatus-online",Xb:"publicytnetworkstatus-offline",Ab:!0,yb:.1,Ib:V("potential_esf_error_limit",10),J:U,nb:!(Pk()&&"www.youtube-nocookie.com"!==ac(document.location.toString()))});this.i=new Bg;U("networkless_immediately_drop_all_requests")&&$o();Gn("LogsDatabaseV2")}
y(sp,Go);function up(){var a=E("yt.networklessRequestController.instance");a||(a=new sp,F("yt.networklessRequestController.instance",a),U("networkless_logging")&&Mm().then(function(b){a.I=b;Io(a);a.i.resolve();a.Ab&&Math.random()<=a.yb&&a.I&&ep(a.I);U("networkless_immediately_drop_sw_health_store")&&vp(a)}));
return a}
sp.prototype.writeThenSend=function(a,b){b||(b={});Pk()||(this.g=!1);Go.prototype.writeThenSend.call(this,a,b)};
sp.prototype.sendThenWrite=function(a,b,c){b||(b={});Pk()||(this.g=!1);Go.prototype.sendThenWrite.call(this,a,b,c)};
sp.prototype.sendAndWrite=function(a,b){b||(b={});Pk()||(this.g=!1);Go.prototype.sendAndWrite.call(this,a,b)};
sp.prototype.awaitInitialization=function(){return this.i.promise};
function vp(a){var b;B(function(c){if(!a.I)throw b=Sl("clearSWHealthLogsDb"),b;return c.return(fp(a.I).catch(function(d){a.handleError(d)}))})}
function tp(a,b,c,d){d=void 0===d?!1:d;b=U("web_fp_via_jspb")?Object.assign({},b):b;U("use_cfr_monitor")&&wp(a,b);if(U("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)ok(a,void 0,"POST",f);else if(T("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||
h)ok(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new Za({url:a});if(k.i&&k.h||k.l){var l=$b(a.match(Zb)[5]||null);var m=!(!l||!l.endsWith("/aclk")||"1"!==fc(a,"ri"));break b}}catch(q){}m=!1}if(m){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var n=!0;break b}}catch(q){}n=!1}c=n?!0:!1}else c=!1;c||ip(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),yo(a,b.postBody,b,lk,d)):yo(a,JSON.stringify(b.postParams),
b,tk,d):lk(a,b)}
function wp(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){kp().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){kp().requestComplete(a,!0);d(e,f)}}
;var xp=D.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};F("ytNetworklessLoggingInitializationOptions",xp);function yp(a){var b=this;this.config_=null;a?this.config_=a:Vn()&&(this.config_=Wn());Sk(function(){Eo(b)},5E3)}
yp.prototype.isReady=function(){!this.config_&&Vn()&&(this.config_=Wn());return!!this.config_};
function Fo(a,b,c,d){function e(t){t=void 0===t?!1:t;var u;if(d.retry&&"www.youtube-nocookie.com"!=h&&(t||U("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(u=Co(b,c,l,k)),u)){var z=g.onSuccess,C=g.onFetchSuccess;g.onSuccess=function(ha,bb){Do(u);z(ha,bb)};
c.onFetchSuccess=function(ha,bb){Do(u);C(ha,bb)}}try{if(t&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?up().writeThenSend(p,g):up().sendAndWrite(p,g);
else if(d.compress){var P=!d.networklessOptions.writeThenSend;if(g.postBody){var Q=g.postBody;"string"!==typeof Q&&(Q=JSON.stringify(g.postBody));yo(p,Q,g,lk,P)}else yo(p,JSON.stringify(g.postParams),g,tk,P)}else U("web_all_payloads_via_jspb")?lk(p,g):tk(p,g)}catch(ha){if("InvalidAccessError"==ha.name)u&&(Do(u),u=0),Fj(Error("An extension is blocking network request."));else throw ha;}u&&Sk(function(){Eo(a)},5E3)}
!T("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Fj(new Ok("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Ok("innertube xhrclient not ready",b,c,d);Ej(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,u){if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,u){if(d.onError)d.onError(u)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.kd)&&(h=f);var k=a.config_.md||!1,l=eo(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.hd+"/"+b,n={alt:"json"},q=a.config_.ld&&f;q=q&&f.startsWith("Bearer");q||(n.key=a.config_.gd);var p=Zj(""+h+m,n||{},!0);E("ytNetworklessLoggingInitializationOptions")&&
xp.isNwlInitialized?Km().then(function(t){e(t)}):e(!1)}
;function zp(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Ap=D.ytPubsubPubsubInstance||new M,Bp=D.ytPubsubPubsubSubscribedKeys||{},Cp=D.ytPubsubPubsubTopicToKeys||{},Dp=D.ytPubsubPubsubIsSynchronous||{};M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.tb;M.prototype.publish=M.prototype.bb;M.prototype.clear=M.prototype.clear;F("ytPubsubPubsubInstance",Ap);F("ytPubsubPubsubTopicToKeys",Cp);F("ytPubsubPubsubIsSynchronous",Dp);F("ytPubsubPubsubSubscribedKeys",Bp);var Ep=Symbol("injectionDeps");function Fp(){this.key=Sn}
function Gp(){this.h=new Map;this.g=new Map}
Gp.prototype.resolve=function(a){return a instanceof Fp?Hp(this,a.key,[],!0):Hp(this,a,[])};
function Hp(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Cd)var e=d.Cd;else if(d.Bd)e=d[Ep]?Ip(a,d[Ep],c):[],e=d.Bd.apply(d,x(e));else if(d.Ad){e=d.Ad;var f=e[Ep]?Ip(a,e[Ep],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Ae||a.g.set(b,e);return e}
function Ip(a,b,c){return b?b.map(function(d){return d instanceof Fp?Hp(a,d.key,c,!0):Hp(a,d,c)}):[]}
;var Jp;function Kp(){Jp||(Jp=new Gp);return Jp}
;var Lp=window;function Mp(){var a,b;return"h5vcc"in Lp&&(null==(a=Lp.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Lp.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Lp&&Lp.performance.mark&&Lp.performance.measure?2:0}
function Np(a){switch(Mp()){case 1:Lp.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Lp.performance.mark(a+"-start");break;case 0:break;default:ue()}}
function Op(a){switch(Mp()){case 1:Lp.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Lp.performance.mark(c);Lp.performance.measure(a,b,c);break;case 0:break;default:ue()}}
;var Pp=U("web_enable_lifecycle_monitoring")&&0!==Mp(),Qp=U("web_enable_lifecycle_monitoring");function Rp(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?xl():d;this.l=c;this.h=d;this.i=new Bg;this.g=a;for(a={Ja:0};a.Ja<this.g.length;a={pb:a.pb,Ja:a.Ja},a.Ja++)a.pb=this.g[a.Ja],c=function(e){return function(){e.pb.Rb();b.g[e.Ja].Jb=!0;b.g.every(function(f){return!0===f.Jb})&&b.i.resolve()}}(a),d=this.h.Ha(c,Sp(this,a.pb)),this.g[a.Ja]=Object.assign({},a.pb,{Rb:c,
jobId:d})}
function Tp(a){var b=Array.from(a.g.keys()).sort(function(d,e){return Sp(a,a.g[e])-Sp(a,a.g[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],void 0===c.jobId||c.Jb||(a.h.ba(c.jobId),a.h.Ha(c.Rb,10))}
Rp.prototype.cancel=function(){for(var a=w(this.g),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.Jb||this.h.ba(b.jobId),b.Jb=!0;this.i.resolve()};
function Sp(a,b){var c;return null!=(c=b.priority)?c:a.l}
;function Up(a){this.state=a;this.i=[];this.o=void 0;this.G={};Pp&&Np(this.state)}
Up.prototype.install=function(a){this.i.push(a);return this};
function Vp(a){Pp&&Op(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&"none"===d.Ea}):d.from===a.state&&"none"===d.Ea});
if(b){a.h&&(Tp(a.h),a.h=void 0);Qp&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";Pp&&Np(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(Wp(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function Wp(a,b){var c=b.filter(function(e){return 10===Xp(a,e)}),d=b.filter(function(e){return 10!==Xp(a,e)});
return a.G.ze?function(){var e=Fa.apply(0,arguments);return B(function(f){if(1==f.g)return A(f,a.oa.apply(a,[c].concat(x(e))),2);a.u.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Fa.apply(0,arguments);
a.ya.apply(a,[c].concat(x(e)));a.u.apply(a,[d].concat(x(e)))}}
Up.prototype.ya=function(a){for(var b=Fa.apply(1,arguments),c=xl(),d=w(a),e=d.next(),f={};!e.done;f={Wa:f.Wa},e=d.next())f.Wa=e.value,c.hb(function(g){return function(){Yp(g.Wa.name);g.Wa.kb.apply(g.Wa,x(b));Zp(g.Wa.name)}}(f))};
Up.prototype.oa=function(a){var b=Fa.apply(1,arguments),c,d,e,f,g;return B(function(h){1==h.g&&(c=xl(),d=w(a),e=d.next(),f={});if(3!=h.g){if(e.done)return h.B(0);f.Ka=e.value;f.jb=void 0;g=function(k){return function(){Yp(k.Ka.name);var l=k.Ka.kb.apply(k.Ka,x(b));"function"===typeof(null==l?void 0:l.then)?k.jb=l.then(function(){Zp(k.Ka.name)}):Zp(k.Ka.name)}}(f);
c.hb(g);return f.jb?A(h,f.jb,3):h.B(3)}f={Ka:f.Ka,jb:f.jb};e=d.next();return h.B(2)})};
Up.prototype.u=function(a){var b=Fa.apply(1,arguments),c=this,d=a.map(function(e){return{Rb:function(){Yp(e.name);e.kb.apply(e,x(b));Zp(e.name)},
priority:Xp(c,e)}});
d.length&&(this.h=new Rp(d))};
function Xp(a,b){var c,d;return null!=(d=null!=(c=a.o)?c:b.priority)?d:0}
function Yp(a){Pp&&a&&Np(a)}
function Zp(a){Pp&&a&&Op(a)}
da.Object.defineProperties(Up.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function $p(a){Up.call(this,void 0===a?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Ea:"application_navigating",action:this.K},{from:"application_navigating",Ea:"none",action:this.O},{from:"application_navigating",Ea:"application_navigating",action:function(){}},
{from:"none",Ea:"none",action:function(){}}]}
var aq;y($p,Up);$p.prototype.K=function(a,b){var c=this;this.g=Sk(function(){"application_navigating"===c.l&&Vp(c)},5E3);
a(null==b?void 0:b.event)};
$p.prototype.O=function(a,b){this.g&&(Df.ba(this.g),this.g=null);a(null==b?void 0:b.event)};
function bq(){aq||(aq=new $p);return aq}
;var cq=[];F("yt.logging.transport.getScrapedGelPayloads",function(){return cq});function dq(){this.store={};this.g={}}
dq.prototype.storePayload=function(a,b){a=eq(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
dq.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=fq(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
dq.prototype.extractMatchingEntries=function(a){a=fq(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
dq.prototype.getSequenceCount=function(a){a=fq(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function fq(a,b){var c=eq(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(1>=d.length&&eq(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(gq(b.auth,g[0])){var h=b.isJspb;gq(void 0===h?"undefined":h?"true":"false",g[1])&&gq(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),gq(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function gq(a,b){return void 0===a||"undefined"===a?!0:a===b}
dq.prototype.getSequenceCount=dq.prototype.getSequenceCount;dq.prototype.extractMatchingEntries=dq.prototype.extractMatchingEntries;dq.prototype.smartExtractMatchingEntries=dq.prototype.smartExtractMatchingEntries;dq.prototype.storePayload=dq.prototype.storePayload;function eq(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;var hq=V("initial_gel_batch_timeout",2E3),iq=V("gel_queue_timeout_max_ms",6E4),jq=Math.pow(2,16)-1,kq=V("gel_min_batch_size",5),lq=void 0;function mq(){this.l=this.g=this.h=0;this.i=!1}
var nq=new mq,oq=new mq,pq=new mq,qq=new mq,rq,sq=!0,tq=1,uq=new Map,vq=D.ytLoggingTransportTokensToCttTargetIds_||{};F("ytLoggingTransportTokensToCttTargetIds_",vq);var wq=D.ytLoggingTransportTokensToJspbCttTargetIds_||{};F("ytLoggingTransportTokensToJspbCttTargetIds_",wq);var xq={};function yq(){var a=E("yt.logging.ims");a||(a=new dq,F("yt.logging.ims",a));return a}
function zq(a,b){if("log_event"===a.endpoint){Aq(a);var c=Bq(a),d=Cq(a.payload)||"",e=Dq(d),f=200;if(e){if(!1===e.enabled&&!U("web_payload_policy_disabled_killswitch"))return;f=Eq(e.tier);if(400===f){Fq(a,b);return}}xq[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};yq().storePayload(e,a.payload);Gq(b,c,!1,e,Hq(d))}}
function Iq(a,b,c){if("log_event"===b.endpoint){Aq(void 0,b);var d=Bq(b,!0),e=Dq(a),f=200;if(e){if(!1===e.enabled&&!U("web_payload_policy_disabled_killswitch"))return;f=Eq(e.tier);if(400===f){Jq(a,b,c);return}}xq[d]=!0;e={cttAuthInfo:d,isJspb:!0,tier:f};yq().storePayload(e,b.payload.toJSON());Gq(c,d,!0,e,Hq(a))}}
function Gq(a,b,c,d,e){function f(){Kq({writeThenSend:!0},U("flush_only_full_queue")?b:void 0,c,d.tier)}
c=void 0===c?!1:c;e=void 0===e?!1:e;a&&(lq=new a);a=V("tvhtml5_logging_max_batch_ads_fork")||V("web_logging_max_batch")||100;var g=Y(),h=Lq(c,d.tier),k=h.l;e&&(h.i=!0);e=0;d&&(e=yq().getSequenceCount(d));1E3<=e?f():e>=a?rq||(rq=Mq(function(){f();rq=void 0},0)):10<=g-k&&(Nq(c,d.tier),h.l=g)}
function Fq(a,b){if("log_event"===a.endpoint){Aq(a);var c=Bq(a),d=new Map;d.set(c,[a.payload]);var e=Cq(a.payload)||"";b&&(lq=new b);return new Cg(function(f,g){lq&&lq.isReady()?Oq(d,lq,f,g,{bypassNetworkless:!0},!0,Hq(e)):f()})}}
function Jq(a,b,c){if("log_event"===b.endpoint){Aq(void 0,b);var d=Bq(b,!0),e=new Map;e.set(d,[b.payload.toJSON()]);c&&(lq=new c);return new Cg(function(f){lq&&lq.isReady()?Pq(e,lq,f,{bypassNetworkless:!0},!0,Hq(a)):f()})}}
function Bq(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new sj;c.videoId?Td(d,1,be,Ad(c.videoId)):c.playlistId&&Td(d,2,be,Ad(c.playlistId));wq[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),vq[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Kq(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Cg(function(e,f){var g=Lq(c,d),h=g.i;g.i=!1;Qq(g.h);Qq(g.g);g.g=0;lq&&lq.isReady()?void 0===d&&U("enable_web_tiered_gel")?Rq(e,f,a,b,c,300,h):Rq(e,f,a,b,c,d,h):(Nq(c,d),e())})}
function Rq(a,b,c,d,e,f,g){var h=lq;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l=new Map,m={isJspb:e,cttAuthInfo:d,tier:f},n={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=U("enable_web_tiered_gel")?yq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):yq().extractMatchingEntries(n),k.set(d,b),Pq(k,h,a,c,!1,g)):(k=U("enable_web_tiered_gel")?yq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):yq().extractMatchingEntries(n),l.set(d,k),Oq(l,h,
a,b,c,!1,g));else if(e){b=w(Object.keys(xq));for(d=b.next();!d.done;d=b.next())l=d.value,f=U("enable_web_tiered_gel")?yq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):yq().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),0<f.length&&k.set(l,f),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete xq[l];Pq(k,h,a,c,!1,g)}else{k=w(Object.keys(xq));for(d=k.next();!d.done;d=k.next())m=d.value,n=U("enable_web_tiered_gel")?yq().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):yq().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),0<n.length&&l.set(m,n),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete xq[m];Oq(l,h,a,b,c,!1,g)}}
function Nq(a,b){function c(){Kq({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Lq(a,b),e=d===qq||d===pq?5E3:iq;U("web_gel_timeout_cap")&&!d.g&&(e=Mq(function(){c()},e),d.g=e);
Qq(d.h);e=T("LOGGING_BATCH_TIMEOUT",V("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&sq&&(e=hq);e=Mq(function(){0<V("gel_min_batch_size")?yq().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=kq&&c():c()},e);
d.h=e}
function Oq(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(Y()),k=a.size,l=Sq(g);a=w(a);var m=a.next();for(g={};!m.done;g={Eb:g.Eb,batchRequest:g.batchRequest,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession,Gb:g.Gb,Fb:g.Fb},m=a.next()){var n=w(m.value);m=n.next().value;n=n.next().value;g.batchRequest=ob({context:Xn(b.config_||Wn())});if(!Ma(n)&&!U("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=vq[m])&&Tq(g.batchRequest,m,n);delete vq[m];g.dangerousLogToVisitorSession=
"visitorOnlyApprovedKey"===m;Uq(g.batchRequest,h,g.dangerousLogToVisitorSession);Vq(e);g.Gb=function(q){U("start_client_gcf")&&Df.qa(function(){return B(function(p){return A(p,Wq(q),0)})});
k--;k||c()};
g.Eb=0;g.Fb=function(q){return function(){q.Eb++;if(e.bypassNetworkless&&1===q.Eb)try{Fo(b,l,q.batchRequest,Xq({writeThenSend:!0},q.dangerousLogToVisitorSession,q.Gb,q.Fb,f)),sq=!1}catch(p){Ej(p),d()}k--;k||c()}}(g);
try{Fo(b,l,g.batchRequest,Xq(e,g.dangerousLogToVisitorSession,g.Gb,g.Fb,f)),sq=!1}catch(q){Ej(q),d()}}}
function Pq(a,b,c,d,e,f){d=void 0===d?{}:d;var g=Math.round(Y()),h={value:a.size},k=new Map([].concat(x(a)));k=w(k);for(var l=k.next();!l.done;l=k.next()){var m=w(l.value).next().value,n=a.get(m);l=new tj;var q=b.config_||Wn(),p=new bj,t=new Vi;K(t,1,q.wc);K(t,2,q.vc);de(t,16,q.jd);K(t,17,q.uc);if(q.Pb){var u=q.Pb,z=new Si;u.coldConfigData&&K(z,1,u.coldConfigData);u.appInstallData&&K(z,6,u.appInstallData);u.coldHashData&&K(z,3,u.coldHashData);u.hotHashData&&z.g(u.hotHashData);J(t,Si,62,z)}if((u=D.devicePixelRatio)&&
1!=u){if(null!=u&&"number"!==typeof u)throw Error("Value of float/double field must be a number, found "+typeof u+": "+u);Qd(t,65,u)}u=T("EXPERIMENTS_TOKEN","");""!==u&&K(t,54,u);u=Hj();if(0<u.length){z=new Yi;for(var C=0;C<u.length;C++){var P=new Wi;K(P,1,u[C].key);Td(P,2,Xi,Ad(u[C].value));Zd(z,15,Wi,P)}J(p,Yi,5,z)}Yn(q,t);Zn(p);$n(t);ao(q,t);bo(t);U("start_client_gcf")&&co(t);T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(q=new aj,K(q,3,T("DELEGATED_SESSION_ID")));!U("fill_delegate_context_in_gel_killswitch")&&
(q=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(u=Wd(p,aj,3)||new aj,q=K(u,18,q),J(p,aj,3,q));q=t;u=w(Object.entries(Yj(T("DEVICE",""))));for(z=u.next();!z.done;z=u.next())C=w(z.value),z=C.next().value,C=C.next().value,"cbrand"===z?K(q,12,C):"cmodel"===z?K(q,13,C):"cbr"===z?K(q,87,C):"cbrver"===z?K(q,88,C):"cos"===z?K(q,18,C):"cosver"===z?K(q,19,C):"cplatform"===z&&de(q,42,Ik(C));J(p,Vi,1,t);J(l,bj,1,p);if(t=wq[m])a:{if(ae(t,1))p=1;else if(t.getPlaylistId())p=2;else break a;J(l,sj,4,t);
t=Wd(l,bj,1)||new bj;q=Wd(t,aj,3)||new aj;u=new $i;K(u,2,m);de(u,1,p);Zd(q,12,$i,u);J(t,aj,3,q)}delete wq[m];m="visitorOnlyApprovedKey"===m;Yq()||Qd(l,2,zd(g));!m&&(p=T("EVENT_ID"))&&(t=Zq(),q=new rj,K(q,1,p),Qd(q,2,zd(t)),J(l,rj,5,q));Vq(d);if(U("jspb_serialize_with_worker")&&(p=ko())&&d.writeThenSend){uq.set(tq,{client:b,resolve:c,networklessOptions:d,isIsolated:e,useVSSEndpoint:f,dangerousLogToVisitorSession:m,requestsOutstanding:h});p.postMessage({op:"gelBatchToSerialize",batchRequest:l.toJSON(),
clientEvents:n,key:tq});tq++;break}if(n){p=[];for(t=0;t<n.length;t++)try{p.push(new pj(n[t]))}catch(Q){Ej(new Ok("Transport failed to deserialize "+String(n[t])))}n=p}else n=[];n=w(n);for(p=n.next();!p.done;p=n.next())Zd(l,3,pj,p.value);n={startTime:Y(),ticks:{},infos:{}};l=fe(l);n.ticks.geljspc=Y();U("log_jspb_serialize_latency")&&go("gel_jspb_serialize",n,{sampleRate:.1});$q(l,b,c,d,e,f,m,h)}}
function $q(a,b,c,d,e,f,g,h){d=void 0===d?{}:d;h=void 0===h?{value:0}:h;f=Sq(f);d=Xq(d,g,function(k){U("start_client_gcf")&&Df.qa(function(){return B(function(l){return A(l,Wq(k),0)})});
h.value--;h.value||c()},function(){h.value--;
h.value||c()},e);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;Fo(b,f,"",d);sq=!1}
function Vq(a){U("always_send_and_write")&&(a.writeThenSend=!1)}
function Xq(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,qe:!!e,headers:{},postBodyFormat:"",postBody:"",compress:U("compress_gel")||U("compress_gel_lr")};Yq()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function Uq(a,b,c){Yq()||(a.requestTimeMs=String(b));U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=T("EVENT_ID"))&&(c=Zq(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Zq(){var a=T("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*jq/2));a++;a>jq&&(a=1);yj("BATCH_CLIENT_COUNTER",a);return a}
function Tq(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Aq(a,b){if(!E("yt.logging.transport.enableScrapingForTest")){var c=Gj("il_payload_scraping");if("enable_il_payload_scraping"===(void 0!==c?String(c):""))cq=[],F("yt.logging.transport.enableScrapingForTest",!0),F("yt.logging.transport.scrapedPayloadsForTesting",cq),F("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),F("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
F("yt.logging.transport.scrapeClientEvent",!0);else return}c=E("yt.logging.transport.scrapedPayloadsForTesting");var d=E("yt.logging.transport.payloadToScrape");b&&(b=E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);b=E("yt.logging.transport.scrapeClientEvent");if(d&&1<=d.length)for(var e=0;e<d.length;e++)if(a&&a.payload[d[e]])if(b)c.push(a.payload);else{var f=void 0;c.push((null==(f=a)?void 0:f.payload)[d[e]])}F("yt.logging.transport.scrapedPayloadsForTesting",
c)}
function Yq(){return U("use_request_time_ms_header")||U("lr_use_request_time_ms_header")}
function Mq(a,b){return U("transport_use_scheduler")?U("logging_avoid_blocking_during_navigation")||U("lr_logging_avoid_blocking_during_navigation")?Sk(function(){if("none"===bq().l)a();else{var c={};bq().install((c.none={kb:a},c))}},b):Sk(a,b):Qj(a,b)}
function Qq(a){U("transport_use_scheduler")?Df.ba(a):window.clearTimeout(a)}
function Wq(a){var b,c,d,e,f,g,h,k,l,m;return B(function(n){if(1==n.g){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var q=d?d[Ri.name]:void 0;e=q;g=null==(f=d)?void 0:f.hotHashData;q=d?d[Qi.name]:void 0;h=q;l=null==(k=d)?void 0:k.coldHashData;return(m=Kp().resolve(new Fp))?g?e?A(n,Tn(m,g,e),2):A(n,Tn(m,g),2):n.B(2):n.return()}return l?h?A(n,Un(m,l,h),0):A(n,Un(m,l),0):n.B(0)})}
function Lq(a,b){b=void 0===b?200:b;return a?300===b?qq:oq:300===b?pq:nq}
function Dq(a){if(U("enable_web_tiered_gel")){a=ap[a||""];var b,c;if(null==Kp().resolve(new Fp))var d=void 0;else{var e=null!=(d=E("yt.gcf.config.hotConfigGroup"))?d:T("RAW_HOT_CONFIG_GROUP");d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return b[c]}}
function Cq(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,ap[b])return b}
function Eq(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function Hq(a){return"gelDebuggingEvent"===a}
function Sq(a){return(void 0===a?0:a)&&U("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var ar=D.ytLoggingGelSequenceIdObj_||{};F("ytLoggingGelSequenceIdObj_",ar);
function br(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||Y());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=zp();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!U("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,b={index:cr(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete ar[d.sequenceGroup]);(d.sendIsolatedPayload?Fq:zq)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
function dr(a){Kq(void 0,void 0,void 0===a?!1:a)}
function cr(a){ar[a]=a in ar?ar[a]+1:0;return ar[a]}
;var er=[];function fr(a,b,c){c=void 0===c?{}:c;var d=yp;T("ytLoggingEventsDefaultDisabled",!1)&&yp===yp&&(d=null);U("web_all_payloads_via_jspb")?(c.timestamp||(c.lact=zp(),c.timestamp=Y()),er.push({Ac:a,payload:b,options:c})):br(a,b,d,c)}
;var gr=D.ytLoggingGelSequenceIdObj_||{};F("ytLoggingGelSequenceIdObj_",gr);function hr(a,b){var c=void 0;c=void 0===c?{}:c;var d=!1;T("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);d=d?null:yp;c=void 0===c?{}:c;var e=Math.round(c.timestamp||Y());Qd(b,1,zd(e<Number.MAX_SAFE_INTEGER?e:0));e=new oj;if(c.lact)Qd(e,1,zd(isFinite(c.lact)?c.lact:-1));else if(c.timestamp)Qd(e,1,zd(-1));else{var f=zp();Qd(e,1,zd(isFinite(f)?f:-1))}if(c.sequenceGroup&&!U("web_gel_sequence_info_killswitch")){f=c.sequenceGroup;var g=cr(f),h=new nj;Qd(h,2,zd(g));K(h,1,f);J(e,nj,3,h);c.endOfSequence&&delete gr[c.sequenceGroup]}J(b,
oj,33,e);(c.sendIsolatedPayload?Jq:Iq)(a,{endpoint:"log_event",payload:b,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}
;var ir=new Set,jr=0,kr=0,lr=0,mr=[],nr=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function or(a){try{ir.add(a.message)}catch(b){}jr++}
function pr(){for(var a=w(nr),b=a.next();!b.done;b=a.next()){var c=Lb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
function qr(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:T("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=T("SERVER_NAME");b=T("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}lk(T("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function rr(){var a;return B(function(b){return(a=Wf())?b.return(a.then(function(c){c=fe(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return Gc(d,3)})):b.return(Promise.resolve(null))})}
;var sr={};function tr(a){return sr[a]||(sr[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var ur={},vr=[],Tg=new M,wr={};function xr(){for(var a=w(vr),b=a.next();!b.done;b=a.next())b=b.value,b()}
function yr(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[tr(b)]:a.getAttribute("data-"+b):null;return c}
function zr(a){Tg.bb.apply(Tg,arguments)}
;function Ar(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Br(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Cr(a,b,c){Dr||(Dr={},Er=new Set,Pj(window,"message",function(d){a:if(Er.has(d.origin)){try{var e=JSON.parse(d.data)}catch(g){break a}var f=Dr[e.id];f&&d.origin===f.Sc&&(d=f.Dd,d.G=!0,d.G&&(db(d.u,d.sendMessage,d),d.u.length=0),d.fc(e))}}));
a=String(Br(a,"host"));Dr[c]={Dd:b,Sc:a};Er.add(a)}
var Dr=null,Er=null;var Fr=window;
function Gr(a,b,c){this.o=this.g=this.h=null;this.i=0;this.G=!1;this.u=[];this.l=null;this.O={};if(!a)throw Error("YouTube player element ID required.");this.id=Oa(this);this.K=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?bc(a.src):"https://www.youtube.com"),this.h=new Ar(b),c||(b=Hr(this,a),this.o=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Oa(this.g)),ur[this.g.id]=this,window.postMessage){this.l=
new M;Ir(this);b=Br(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in wr)wr.hasOwnProperty(e)&&Jr(this,e)}}
r=Gr.prototype;r.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
r.getIframe=function(){return this.g};
r.fc=function(a){Kr(this,a.event,a)};
r.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);Lr(this,a);return this};
function Jr(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.K===b[0]&&Lr(a,c)}}
r.destroy=function(){this.g&&this.g.id&&(ur[this.g.id]=null);Ve(this.l);if(this.o){var a=this.g,b=a.parentNode;b&&b.replaceChild(this.o,a)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);Dr&&(Dr[this.id]=null);this.h=null;a=this.g;for(var c in mb)mb[c][0]==a&&Nj(c);this.o=this.g=null};
r.kc=function(){return{}};
function Mr(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.G?a.sendMessage(b):a.u.push(b)}
function Kr(a,b,c){a.l.Aa||(c={target:a,data:c},a.l.bb(b,c),zr(a.K+"."+b,c))}
function Hr(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("title","YouTube "+Br(a.h,"title"));(b=Br(a.h,"width"))&&c.setAttribute("width",b.toString());(b=Br(a.h,"height"))&&
c.setAttribute("height",b.toString());Fr.yt_embedsEnableIframeWithLazyLoad&&c.setAttribute("loading","lazy");var g=a.kc();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&db(["debugjs","debugcss"],function(k){var l=fc(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+Br(a.h,"host")+("/embed/"+Br(a.h,"videoId"))+"?"+dc(g);Fr.yt_embedsEnableUaChProbe?rr().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=re(l.href).toString();xe(c,se(k));c.sandbox.add("allow-presentation","allow-top-navigation");return k}):Fr.yt_embedsEnableIframeSrcWithIntent?(xe(c,se(h)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=h;
return c}
r.Bc=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.i)};
function Ir(a){Cr(a.h,a,a.id);a.i=Rj(a.Bc.bind(a));Pj(a.g,"load",function(){window.clearInterval(a.i);a.i=Rj(a.Bc.bind(a))})}
function Lr(a,b){a.O[b]||(a.O[b]=!0,Mr(a,"addEventListener",[b]))}
r.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[bc(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var d=0;d<c.length;d++)try{this.g.contentWindow.postMessage(b,c[d])}catch(vc){if(vc.name&&"SyntaxError"===vc.name){if(!(vc.message&&0<vc.message.indexOf("target origin ''"))){var e=void 0,f=vc;e=void 0===e?{}:e;e.name=T("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=T("INNERTUBE_CONTEXT_CLIENT_VERSION");var g="WARNING",h=!1;g=void 0===g?"ERROR":
g;h=void 0===h?!1:h;if(f){f.hasOwnProperty("level")&&f.level&&(g=f.level);if(U("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=jr)){var m=void 0,n=void 0,q=f,p=e,t=ke(q),u=t.message||"Unknown Error",
z=t.name||"UnknownError",C=t.stack||q.h||"Not available";if(C.startsWith(z+": "+u)){var P=C.split("\n");P.shift();C=P.join("\n")}var Q=t.lineNumber||"Not available",ha=t.fileName||"Not available",bb=C,Ua=0;if(q.hasOwnProperty("args")&&q.args&&q.args.length)for(var Ha=0;Ha<q.args.length&&!(Ua=Dk(q.args[Ha],"params."+Ha,p,Ua),500<=Ua);Ha++);else if(q.hasOwnProperty("params")&&q.params){var ia=q.params;if("object"===typeof q.params)for(n in ia){if(ia[n]){var qa="params."+n,ra=Fk(ia[n]);p[qa]=ra;Ua+=
qa.length+ra.length;if(500<Ua)break}}else p.params=Fk(ia)}if(mr.length)for(var fa=0;fa<mr.length&&!(Ua=Dk(mr[fa],"params.context."+fa,p,Ua),500<=Ua);fa++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var W={message:u,name:z,lineNumber:Q,fileName:ha,stack:bb,params:p,sampleWeight:1},Pm=Number(q.columnNumber);isNaN(Pm)||(W.lineNumber=W.lineNumber+":"+Pm);if("IGNORED"===q.level)m=0;else a:{for(var Qm=zk(),Rm=w(Qm.Ca),Kh=Rm.next();!Kh.done;Kh=Rm.next()){var Sm=
Kh.value;if(W.message&&W.message.match(Sm.ue)){m=Sm.weight;break a}}for(var Tm=w(Qm.za),Lh=Tm.next();!Lh.done;Lh=Tm.next()){var Um=Lh.value;if(Um.kb(W)){m=Um.weight;break a}}m=1}W.sampleWeight=m;for(var Vm=w(uk),Mh=Vm.next();!Mh.done;Mh=Vm.next()){var Nh=Mh.value;if(Nh.Hb[W.name])for(var Wm=w(Nh.Hb[W.name]),Oh=Wm.next();!Oh.done;Oh=Wm.next()){var Xm=Oh.value,Le=W.message.match(Xm.regexp);if(Le){W.params["params.error.original"]=Le[0];for(var Ph=Xm.groups,Ym={},wc=0;wc<Ph.length;wc++)Ym[Ph[wc]]=Le[wc+
1],W.params["params.error."+Ph[wc]]=Le[wc+1];W.message=Nh.Vb(Ym);break}}}W.params||(W.params={});var Zm=zk();W.params["params.errorServiceSignature"]="msg="+Zm.Ca.length+"&cb="+Zm.za.length;W.params["params.serviceWorker"]="false";D.document&&D.document.querySelectorAll&&(W.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));ub("sample").constructor!==tb&&(W.params["params.fconst"]="true");var nd=W;window.yterr&&"function"===typeof window.yterr&&window.yterr(nd);
if(0!==nd.sampleWeight&&!ir.has(nd.message))if(h&&U("web_enable_error_204")){var $m=nd;qr(void 0===g?"ERROR":g,$m);or($m)}else{var Qh=void 0,Rh=void 0,an=void 0,bn=void 0,Sh=void 0,O=nd,Pb=g;Pb=void 0===Pb?"ERROR":Pb;if("ERROR"===Pb){Ak.bb("handleError",O);if(U("record_app_crashed_web")&&0===lr&&1===O.sampleWeight)if(lr++,U("errors_via_jspb")){var Sr=new mj;Sh=de(Sr,1,1);if(!U("report_client_error_with_app_crash_ks")){var Tr=new lj,Ur=new kj,Vr=new jj,Wr=new ij;var Xr=K(Wr,1,O.message);var Yr=J(Vr,
ij,3,Xr);bn=J(Ur,jj,5,Yr);an=J(Tr,kj,9,bn);J(Sh,lj,4,an)}var cn=U("jspb_sparse_encoded_pivot")?new pj([{}]):new pj;Xd(cn,mj,20,qj,Sh);hr("appCrashed",cn)}else{var dn={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};U("report_client_error_with_app_crash_ks")||(dn.systemHealth={crashData:{clientError:{logMessage:{message:O.message}}}});fr("appCrashed",dn)}kr++}else"WARNING"===Pb&&Ak.bb("handleWarning",O);if(U("kevlar_gel_error_routing"))a:{var od=Pb;if(U("errors_via_jspb")){if(pr())Rh=void 0;else{var xc=new fj;
K(xc,1,O.stack);O.fileName&&K(xc,4,O.fileName);var fb=O.lineNumber&&O.lineNumber.split?O.lineNumber.split(":"):[];0!==fb.length&&(1!==fb.length||isNaN(Number(fb[0]))?2!==fb.length||isNaN(Number(fb[0]))||isNaN(Number(fb[1]))||(ce(xc,2,Number(fb[0])),ce(xc,3,Number(fb[1]))):ce(xc,2,Number(fb[0])));var Qb=new ij;K(Qb,1,O.message);K(Qb,3,O.name);ce(Qb,6,O.sampleWeight);"ERROR"===od?de(Qb,2,2):"WARNING"===od?de(Qb,2,1):de(Qb,2,0);var Th=new gj;Qd(Th,1,ud(!0));Xd(Th,fj,3,hj,xc);var Rb=new ej;K(Rb,3,window.location.href);
for(var en=T("FEXP_EXPERIMENTS",[]),Uh=0;Uh<en.length;Uh++){var fn=Rb.s,Vh=en[Uh],gn=Zc(fn);md(gn);var hn=Sd(fn,gn,5,2),jn=H(hn);Vh=xd(Vh,!!(4&jn)&&!!(4096&jn));hn.push(Vh)}var Wh=zj();if(!Aj()&&Wh)for(var kn=w(Object.keys(Wh)),Sb=kn.next();!Sb.done;Sb=kn.next()){var ln=Sb.value,Xh=new dj;K(Xh,1,ln);K(Xh,2,String(Wh[ln]));Zd(Rb,4,dj,Xh)}var Yh=O.params;if(Yh){var mn=w(Object.keys(Yh));for(Sb=mn.next();!Sb.done;Sb=mn.next()){var nn=Sb.value,Zh=new dj;K(Zh,1,"client."+nn);K(Zh,2,String(Yh[nn]));Zd(Rb,
4,dj,Zh)}}var on=T("SERVER_NAME"),pn=T("SERVER_VERSION");if(on&&pn){var $h=new dj;K($h,1,"server.name");K($h,2,on);Zd(Rb,4,dj,$h);var ai=new dj;K(ai,1,"server.version");K(ai,2,pn);Zd(Rb,4,dj,ai)}var Me=new jj;J(Me,ej,1,Rb);J(Me,gj,2,Th);J(Me,ij,3,Qb);Rh=Me}var qn=Rh;if(!qn)break a;var rn=U("jspb_sparse_encoded_pivot")?new pj([{}]):new pj;Xd(rn,jj,163,qj,qn);hr("clientError",rn)}else{var Ka=void 0;Ka=void 0===Ka?{}:Ka;if(pr())Qh=void 0;else{var pd={stackTrace:O.stack};O.fileName&&(pd.filename=O.fileName);
var gb=O.lineNumber&&O.lineNumber.split?O.lineNumber.split(":"):[];0!==gb.length&&(1!==gb.length||isNaN(Number(gb[0]))?2!==gb.length||isNaN(Number(gb[0]))||isNaN(Number(gb[1]))||(pd.lineNumber=Number(gb[0]),pd.columnNumber=Number(gb[1])):pd.lineNumber=Number(gb[0]));var bi={level:"ERROR_LEVEL_UNKNOWN",message:O.message,errorClassName:O.name,sampleWeight:O.sampleWeight};"ERROR"===od?bi.level="ERROR_LEVEL_ERROR":"WARNING"===od&&(bi.level="ERROR_LEVEL_WARNNING");var Zr={isObfuscated:!0,browserStackInfo:pd};
Ka.pageUrl=window.location.href;Ka.kvPairs=[];T("FEXP_EXPERIMENTS")&&(Ka.experimentIds=T("FEXP_EXPERIMENTS"));var ci=zj();if(!Aj()&&ci)for(var sn=w(Object.keys(ci)),Tb=sn.next();!Tb.done;Tb=sn.next()){var tn=Tb.value;Ka.kvPairs.push({key:tn,value:String(ci[tn])})}var di=O.params;if(di){var un=w(Object.keys(di));for(Tb=un.next();!Tb.done;Tb=un.next()){var vn=Tb.value;Ka.kvPairs.push({key:"client."+vn,value:String(di[vn])})}}var wn=T("SERVER_NAME"),xn=T("SERVER_VERSION");wn&&xn&&(Ka.kvPairs.push({key:"server.name",
value:wn}),Ka.kvPairs.push({key:"server.version",value:xn}));Qh={errorMetadata:Ka,stackTrace:Zr,logMessage:bi}}var yn=Qh;if(!yn)break a;fr("clientError",yn)}if("ERROR"===od||U("errors_flush_gel_always_killswitch"))b:{if(U("web_fp_via_jspb")){var Ne=!0;Ne=void 0===Ne?!1:Ne;var zn=er;er=[];if(zn)for(var An=w(zn),ei=An.next();!ei.done;ei=An.next()){var yc=ei.value;Ne?br(yc.Ac,yc.payload,yp,yc.options):fr(yc.Ac,yc.payload,yc.options)}dr(!0);if(!U("web_fp_via_jspb_and_json"))break b}dr()}}U("suppress_error_204_logging")||
qr(Pb,O);or(O)}}}}}else throw vc;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Nr(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Or(a){return 0===a.search("get")||0===a.search("is")}
;function Pr(a,b){Gr.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.ka={};this.playerInfo={};this.videoTitle=""}
y(Pr,Gr);r=Pr.prototype;r.kc=function(){var a=Br(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Br(this.h,"embedConfig")){if(Na(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
r.fc=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Na(a))for(var c in a)a.hasOwnProperty(c)&&(this.ka[c]=a[c]);break;case "infoDelivery":Qr(this,a);break;case "initialDelivery":Na(a)&&(window.clearInterval(this.i),this.playerInfo={},this.ka={},Rr(this,a.apiInterface),Qr(this,a));break;default:Kr(this,b,a)}};
function Qr(a,b){if(Na(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+Br(a.h,"title"))))}}
function Rr(a,b){db(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Nr(c)?this[c]=function(){this.playerInfo={};
this.ka={};Mr(this,c,arguments);return this}:Or(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Mr(this,c,arguments);
return this})},a)}
r.getVideoEmbedCode=function(){var a=Br(this.h,"host")+("/embed/"+Br(this.h,"videoId")),b=Number(Br(this.h,"width")),c=Number(Br(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Yb(a);d=Yb(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')};
r.getOptions=function(a){return this.ka.namespaces?a?this.ka[a]?this.ka[a].options||[]:[]:this.ka.namespaces||[]:[]};
r.getOption=function(a,b){if(this.ka.namespaces&&a&&b&&this.ka[a])return this.ka[a][b]};
function $r(a){if("iframe"!==a.tagName.toLowerCase()){var b=yr(a,"videoid");b&&(b={videoId:b,width:yr(a,"width"),height:yr(a,"height")},new Pr(a,b))}}
;F("YT.PlayerState.UNSTARTED",-1);F("YT.PlayerState.ENDED",0);F("YT.PlayerState.PLAYING",1);F("YT.PlayerState.PAUSED",2);F("YT.PlayerState.BUFFERING",3);F("YT.PlayerState.CUED",5);F("YT.get",function(a){return ur[a]});
F("YT.scan",xr);F("YT.subscribe",function(a,b,c){Tg.subscribe(a,b,c);wr[a]=!0;for(var d in ur)ur.hasOwnProperty(d)&&Jr(ur[d],a)});
F("YT.unsubscribe",function(a,b,c){Sg(a,b,c)});
F("YT.Player",Pr);Gr.prototype.destroy=Gr.prototype.destroy;Gr.prototype.setSize=Gr.prototype.setSize;Gr.prototype.getIframe=Gr.prototype.getIframe;Gr.prototype.addEventListener=Gr.prototype.addEventListener;Pr.prototype.getVideoEmbedCode=Pr.prototype.getVideoEmbedCode;Pr.prototype.getOptions=Pr.prototype.getOptions;Pr.prototype.getOption=Pr.prototype.getOption;
vr.push(function(a){var b=a;b||(b=document);a=ib(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=cb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=ib(b);db(hb(a,b),$r)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||xr();var as=D.onYTReady;as&&as();var bs=D.onYouTubeIframeAPIReady;bs&&bs();var cs=D.onYouTubePlayerAPIReady;cs&&cs();}).call(this);
