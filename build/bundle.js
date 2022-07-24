var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e,t){e.appendChild(t)}function a(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function l(e){return document.createTextNode(e)}function f(){return l(" ")}function d(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function p(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function h(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function m(e,t){e.value=null==t?"":t}function g(e,t){for(let n=0;n<e.options.length;n+=1){const r=e.options[n];if(r.__value===t)return void(r.selected=!0)}e.selectedIndex=-1}let v;function y(e){v=e}function b(e){(function(){if(!v)throw new Error("Function called outside component initialization");return v})().$$.on_mount.push(e)}const E=[],w=[],O=[],R=[],_=Promise.resolve();let x=!1;function S(e){O.push(e)}const A=new Set;let $=0;function C(){const e=v;do{for(;$<E.length;){const e=E[$];$++,y(e),j(e.$$)}for(y(null),E.length=0,$=0;w.length;)w.pop()();for(let e=0;e<O.length;e+=1){const t=O[e];A.has(t)||(A.add(t),t())}O.length=0}while(E.length);for(;R.length;)R.pop()();x=!1,A.clear(),y(e)}function j(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(S)}}const N=new Set;function T(e,t){e&&e.i&&(N.delete(e),e.i(t))}function k(e,t,n,r){if(e&&e.o){if(N.has(e))return;N.add(e),undefined.c.push((()=>{N.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}else r&&r()}function U(e){e&&e.c()}function P(e,n,i,s){const{fragment:a,on_mount:u,on_destroy:c,after_update:l}=e.$$;a&&a.m(n,i),s||S((()=>{const n=u.map(t).filter(o);c?c.push(...n):r(n),e.$$.on_mount=[]})),l.forEach(S)}function B(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function D(e,t){-1===e.$$.dirty[0]&&(E.push(e),x||(x=!0,_.then(C)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function L(t,o,i,s,a,c,l,f=[-1]){const d=v;y(t);const p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||d.$$.root};l&&l(p.root);let h=!1;if(p.ctx=i?i(t,o.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&a(p.ctx[e],p.ctx[e]=o)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](o),h&&D(t,e)),n})):[],p.update(),h=!0,r(p.before_update),p.fragment=!!s&&s(p.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);p.fragment&&p.fragment.l(e),e.forEach(u)}else p.fragment&&p.fragment.c();o.intro&&T(t.$$.fragment),P(t,o.target,o.anchor,o.customElement),C()}y(d)}class F{$destroy(){B(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const I=[];function q(t,n=e){let r;const o=new Set;function s(e){if(i(t,e)&&(t=e,r)){const e=!I.length;for(const e of o)e[1](),I.push(e,t);if(e){for(let e=0;e<I.length;e+=2)I[e][0](I[e+1]);I.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(i,a=e){const u=[i,a];return o.add(u),1===o.size&&(r=n(s)||e),i(t),()=>{o.delete(u),0===o.size&&(r(),r=null)}}}}let z=q(1),W=q(0),J=q(!1),M=q(0),H=q({result:[],errors:[]});function V(t){let n,o,i,l;return{c(){n=c("div"),o=c("textarea"),p(o,"class","input svelte-1nsjcn4"),o.value=window.location.hash?decodeURIComponent(window.location.hash.substr(1)):'// Welcome to the Tiny web interpreter.\n// Std is automatically imported.\n// you can check examples from the `Examples` menu.\n// click `Run` to execute the code. (Cannot run while evaluating)\n// click `Share` to share the code. (Copy the URL)\n// Enjoy!\nprintln("Hello, World!");\n',p(n,"class","editor svelte-1nsjcn4")},m(e,r){a(e,n,r),s(n,o),t[0](o),i||(l=[d(o,"input",K),d(o,"keydown",K),d(o,"click",K)],i=!0)},p:e,i:e,o:e,d(e){e&&u(n),t[0](null),i=!1,r(l)}}}const X=()=>{const e=Q.value.substr(0,Q.selectionStart).split("\n");return{line:e.length,column:e[e.length-1].length}},K=()=>{z.update((()=>X().line)),W.update((()=>X().column))};let Q;function G(e,t,n){return[function(e){w[e?"unshift":"push"]((()=>{Q=e}))}]}class Y extends F{constructor(e){super(),L(this,e,G,V,i,{})}}var Z,ee=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},te=Object.prototype.toString,ne=(Z=Object.create(null),function(e){var t=te.call(e);return Z[t]||(Z[t]=t.slice(8,-1).toLowerCase())});function re(e){return e=e.toLowerCase(),function(t){return ne(t)===e}}function oe(e){return Array.isArray(e)}function ie(e){return void 0===e}var se=re("ArrayBuffer");function ae(e){return null!==e&&"object"==typeof e}function ue(e){if("object"!==ne(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var ce=re("Date"),le=re("File"),fe=re("Blob"),de=re("FileList");function pe(e){return"[object Function]"===te.call(e)}var he=re("URLSearchParams");function me(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),oe(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var ge,ve=(ge="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return ge&&e instanceof ge}),ye={isArray:oe,isArrayBuffer:se,isBuffer:function(e){return null!==e&&!ie(e)&&null!==e.constructor&&!ie(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||te.call(e)===t||pe(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&se(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:ae,isPlainObject:ue,isUndefined:ie,isDate:ce,isFile:le,isBlob:fe,isFunction:pe,isStream:function(e){return ae(e)&&pe(e.pipe)},isURLSearchParams:he,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:me,merge:function e(){var t={};function n(n,r){ue(t[r])&&ue(n)?t[r]=e(t[r],n):ue(n)?t[r]=e({},n):oe(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)me(arguments[r],n);return t},extend:function(e,t,n){return me(t,(function(t,r){e[r]=n&&"function"==typeof t?ee(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,o,i,s={};t=t||{};do{for(o=(r=Object.getOwnPropertyNames(e)).length;o-- >0;)s[i=r[o]]||(t[i]=e[i],s[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:ne,kindOfTest:re,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(ie(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:ve,isFileList:de};function be(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Ee=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(ye.isURLSearchParams(t))r=t.toString();else{var o=[];ye.forEach(t,(function(e,t){null!=e&&(ye.isArray(e)?t+="[]":e=[e],ye.forEach(e,(function(e){ye.isDate(e)?e=e.toISOString():ye.isObject(e)&&(e=JSON.stringify(e)),o.push(be(t)+"="+be(e))})))})),r=o.join("&")}if(r){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e};function we(){this.handlers=[]}we.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},we.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},we.prototype.forEach=function(e){ye.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var Oe=we,Re=function(e,t){ye.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))};function _e(e,t,n,r,o){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}ye.inherits(_e,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var xe=_e.prototype,Se={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){Se[e]={value:e}})),Object.defineProperties(_e,Se),Object.defineProperty(xe,"isAxiosError",{value:!0}),_e.from=function(e,t,n,r,o,i){var s=Object.create(xe);return ye.toFlatObject(e,s,(function(e){return e!==Error.prototype})),_e.call(s,e.message,t,n,r,o),s.name=e.name,i&&Object.assign(s,i),s};var Ae=_e,$e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var Ce=function(e,t){t=t||new FormData;var n=[];function r(e){return null===e?"":ye.isDate(e)?e.toISOString():ye.isArrayBuffer(e)||ye.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function e(o,i){if(ye.isPlainObject(o)||ye.isArray(o)){if(-1!==n.indexOf(o))throw Error("Circular reference detected in "+i);n.push(o),ye.forEach(o,(function(n,o){if(!ye.isUndefined(n)){var s,a=i?i+"."+o:o;if(n&&!i&&"object"==typeof n)if(ye.endsWith(o,"{}"))n=JSON.stringify(n);else if(ye.endsWith(o,"[]")&&(s=ye.toArray(n)))return void s.forEach((function(e){!ye.isUndefined(e)&&t.append(a,r(e))}));e(n,a)}})),n.pop()}else t.append(i,r(o))}(e),t},je=ye.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),ye.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),ye.isString(r)&&s.push("path="+r),ye.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},Ne=function(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t},Te=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],ke=ye.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=ye.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0};function Ue(e){Ae.call(this,null==e?"canceled":e,Ae.ERR_CANCELED),this.name="CanceledError"}ye.inherits(Ue,Ae,{__CANCEL__:!0});var Pe=Ue,Be=function(e){return new Promise((function(t,n){var r,o=e.data,i=e.headers,s=e.responseType;function a(){e.cancelToken&&e.cancelToken.unsubscribe(r),e.signal&&e.signal.removeEventListener("abort",r)}ye.isFormData(o)&&ye.isStandardBrowserEnv()&&delete i["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",l=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.Authorization="Basic "+btoa(c+":"+l)}var f=Ne(e.baseURL,e.url);function d(){if(u){var r,o,i,c,l,f="getAllResponseHeaders"in u?(r=u.getAllResponseHeaders(),l={},r?(ye.forEach(r.split("\n"),(function(e){if(c=e.indexOf(":"),o=ye.trim(e.substr(0,c)).toLowerCase(),i=ye.trim(e.substr(c+1)),o){if(l[o]&&Te.indexOf(o)>=0)return;l[o]="set-cookie"===o?(l[o]?l[o]:[]).concat([i]):l[o]?l[o]+", "+i:i}})),l):l):null;!function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new Ae("Request failed with status code "+n.status,[Ae.ERR_BAD_REQUEST,Ae.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:f,config:e,request:u}),u=null}}if(u.open(e.method.toUpperCase(),Ee(f,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(d)},u.onabort=function(){u&&(n(new Ae("Request aborted",Ae.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new Ae("Network Error",Ae.ERR_NETWORK,e,u,u)),u=null},u.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||$e;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new Ae(t,r.clarifyTimeoutError?Ae.ETIMEDOUT:Ae.ECONNABORTED,e,u)),u=null},ye.isStandardBrowserEnv()){var p=(e.withCredentials||ke(f))&&e.xsrfCookieName?je.read(e.xsrfCookieName):void 0;p&&(i[e.xsrfHeaderName]=p)}"setRequestHeader"in u&&ye.forEach(i,(function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete i[t]:u.setRequestHeader(t,e)})),ye.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&"json"!==s&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(r=function(e){u&&(n(!e||e&&e.type?new Pe:e),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(r),e.signal&&(e.signal.aborted?r():e.signal.addEventListener("abort",r))),o||(o=null);var h,m=(h=/^([-+\w]{1,25})(:?\/\/|:)/.exec(f))&&h[1]||"";m&&-1===["http","https","file"].indexOf(m)?n(new Ae("Unsupported protocol "+m+":",Ae.ERR_BAD_REQUEST,e)):u.send(o)}))},De={"Content-Type":"application/x-www-form-urlencoded"};function Le(e,t){!ye.isUndefined(e)&&ye.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var Fe,Ie={transitional:$e,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(Fe=Be),Fe),transformRequest:[function(e,t){if(Re(t,"Accept"),Re(t,"Content-Type"),ye.isFormData(e)||ye.isArrayBuffer(e)||ye.isBuffer(e)||ye.isStream(e)||ye.isFile(e)||ye.isBlob(e))return e;if(ye.isArrayBufferView(e))return e.buffer;if(ye.isURLSearchParams(e))return Le(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,r=ye.isObject(e),o=t&&t["Content-Type"];if((n=ye.isFileList(e))||r&&"multipart/form-data"===o){var i=this.env&&this.env.FormData;return Ce(n?{"files[]":e}:e,i&&new i)}return r||"application/json"===o?(Le(t,"application/json"),function(e,t,n){if(ye.isString(e))try{return(t||JSON.parse)(e),ye.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||Ie.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||r&&ye.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw Ae.from(e,Ae.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:null},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ye.forEach(["delete","get","head"],(function(e){Ie.headers[e]={}})),ye.forEach(["post","put","patch"],(function(e){Ie.headers[e]=ye.merge(De)}));var qe=Ie,ze=function(e,t,n){var r=this||qe;return ye.forEach(n,(function(n){e=n.call(r,e,t)})),e},We=function(e){return!(!e||!e.__CANCEL__)};function Je(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Pe}var Me=function(e){return Je(e),e.headers=e.headers||{},e.data=ze.call(e,e.data,e.headers,e.transformRequest),e.headers=ye.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ye.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||qe.adapter)(e).then((function(t){return Je(e),t.data=ze.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return We(t)||(Je(e),t&&t.response&&(t.response.data=ze.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},He=function(e,t){t=t||{};var n={};function r(e,t){return ye.isPlainObject(e)&&ye.isPlainObject(t)?ye.merge(e,t):ye.isPlainObject(t)?ye.merge({},t):ye.isArray(t)?t.slice():t}function o(n){return ye.isUndefined(t[n])?ye.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function i(e){if(!ye.isUndefined(t[e]))return r(void 0,t[e])}function s(n){return ye.isUndefined(t[n])?ye.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function a(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a};return ye.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||o,r=t(e);ye.isUndefined(r)&&t!==a||(n[e]=r)})),n},Ve="0.27.2",Xe=Ve,Ke={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){Ke[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var Qe={};Ke.transitional=function(e,t,n){function r(e,t){return"[Axios v"+Xe+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,o,i){if(!1===e)throw new Ae(r(o," has been removed"+(t?" in "+t:"")),Ae.ERR_DEPRECATED);return t&&!Qe[o]&&(Qe[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};var Ge={assertOptions:function(e,t,n){if("object"!=typeof e)throw new Ae("options must be an object",Ae.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),o=r.length;o-- >0;){var i=r[o],s=t[i];if(s){var a=e[i],u=void 0===a||s(a,i,e);if(!0!==u)throw new Ae("option "+i+" must be "+u,Ae.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Ae("Unknown option "+i,Ae.ERR_BAD_OPTION)}},validators:Ke},Ye=Ge.validators;function Ze(e){this.defaults=e,this.interceptors={request:new Oe,response:new Oe}}Ze.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=He(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&Ge.assertOptions(n,{silentJSONParsing:Ye.transitional(Ye.boolean),forcedJSONParsing:Ye.transitional(Ye.boolean),clarifyTimeoutError:Ye.transitional(Ye.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var i,s=[];if(this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected)})),!o){var a=[Me,void 0];for(Array.prototype.unshift.apply(a,r),a=a.concat(s),i=Promise.resolve(t);a.length;)i=i.then(a.shift(),a.shift());return i}for(var u=t;r.length;){var c=r.shift(),l=r.shift();try{u=c(u)}catch(e){l(e);break}}try{i=Me(u)}catch(e){return Promise.reject(e)}for(;s.length;)i=i.then(s.shift(),s.shift());return i},Ze.prototype.getUri=function(e){e=He(this.defaults,e);var t=Ne(e.baseURL,e.url);return Ee(t,e.params,e.paramsSerializer)},ye.forEach(["delete","get","head","options"],(function(e){Ze.prototype[e]=function(t,n){return this.request(He(n||{},{method:e,url:t,data:(n||{}).data}))}})),ye.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(He(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ze.prototype[e]=t(),Ze.prototype[e+"Form"]=t(!0)}));var et=Ze;function tt(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new Pe(e),t(n.reason))}))}tt.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},tt.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},tt.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},tt.source=function(){var e;return{token:new tt((function(t){e=t})),cancel:e}};var nt=tt;var rt=function e(t){var n=new et(t),r=ee(et.prototype.request,n);return ye.extend(r,et.prototype,n),ye.extend(r,n),r.create=function(n){return e(He(t,n))},r}(qe);rt.Axios=et,rt.CanceledError=Pe,rt.CancelToken=nt,rt.isCancel=We,rt.VERSION=Ve,rt.toFormData=Ce,rt.AxiosError=Ae,rt.Cancel=rt.CanceledError,rt.all=function(e){return Promise.all(e)},rt.spread=function(e){return function(t){return e.apply(null,t)}},rt.isAxiosError=function(e){return ye.isObject(e)&&!0===e.isAxiosError};var ot=rt,it=rt;ot.default=it;var st=ot;function at(e,t,n){const r=e.slice();return r[8]=t[n],r}function ut(t){let n,r,o=t[8].name+"";return{c(){n=c("option"),r=l(o),n.__value=t[8],n.value=n.__value,n.disabled=t[8].disabled,p(n,"class","svelte-zomu7v")},m(e,t){a(e,n,t),s(n,r)},p:e,d(e){e&&u(n)}}}function ct(t){let n,o,i,h,m,v,y,b,E,w=t[3],O=[];for(let e=0;e<w.length;e+=1)O[e]=ut(at(t,w,e));return{c(){n=c("div"),o=c("p"),i=l("Run"),h=f(),m=c("p"),m.textContent="Share",v=f(),y=c("select");for(let e=0;e<O.length;e+=1)O[e].c();p(o,"class","run svelte-zomu7v"),p(o,"disabled",t[0]),p(m,"class","share svelte-zomu7v"),p(y,"class","svelte-zomu7v"),void 0===t[1]&&S((()=>t[6].call(y))),p(n,"class","header svelte-zomu7v")},m(e,r){a(e,n,r),s(n,o),s(o,i),s(n,h),s(n,m),s(n,v),s(n,y);for(let e=0;e<O.length;e+=1)O[e].m(y,null);g(y,t[1]),b||(E=[d(o,"click",t[2]),d(m,"click",t[5]),d(y,"change",t[6]),d(y,"change",t[4])],b=!0)},p(e,[t]){if(1&t&&p(o,"disabled",e[0]),8&t){let n;for(w=e[3],n=0;n<w.length;n+=1){const r=at(e,w,n);O[n]?O[n].p(r,t):(O[n]=ut(r),O[n].c(),O[n].m(y,null))}for(;n<O.length;n+=1)O[n].d(1);O.length=w.length}10&t&&g(y,e[1])},i:e,o:e,d(e){e&&u(n),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(O,e),b=!1,r(E)}}}function lt(e,t,n){let r=!1;J.subscribe((e=>n(0,r=!e)));const o=[{name:"Examples",source:"",disabled:!0},{name:"Hello, World!",source:"hello_world.tiny"},{name:"Fibonacci",source:"fibonacci.tiny"},{name:"Function",source:"function.tiny"},{name:"If",source:"if.tiny"},{name:"While",source:"while.tiny"},{name:"Import",source:"import.tiny"},{name:"Variable",source:"variable.tiny"},{name:"Operators",source:"operators.tiny"},{name:"Decorators",source:"decorators.tiny"},{name:"Standard Library - IO",source:"/stdlib/io.tiny"},{name:"Standard Library - Array",source:"/stdlib/array.tiny"},{name:"Standard Library - Utility",source:"/stdlib/util.tiny"},{name:"Standard Library - Utility",source:"/stdlib/object.tiny"}];let i=o[0];return[r,i,()=>{r?(J.update((()=>!0)),M.update((()=>0)),st.get(`https://tiny-tsukiroku.vercel.app/eval/${encodeURIComponent(Q.value)}`).then((e=>H.update((()=>e.data)))).catch((e=>H.update((()=>({result:[],errors:[`[Evaluating] ${e}, Check if the code is an infinite loop.`]}))))).finally((()=>J.update((()=>!1))))):H.update((()=>({result:[],errors:["Evaluating..."]})))},o,()=>st.get(`https://raw.githubusercontent.com/tsukiroku/tiny/main/examples/${i.source}`).then((e=>Q.value=e.data)),()=>window.location.href=`#${encodeURIComponent(Q.value)}`,function(){i=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),n(1,i),n(3,o)}]}class ft extends F{constructor(e){super(),L(this,e,lt,ct,i,{})}}function dt(t){let n,r,o,i;return{c(){n=c("div"),r=c("textarea"),p(r,"class","svelte-1300glp"),p(n,"class","sidebar svelte-1300glp")},m(e,u){a(e,n,u),s(n,r),m(r,t[0]),o||(i=d(r,"input",t[1]),o=!0)},p(e,[t]){1&t&&m(r,e[0])},i:e,o:e,d(e){e&&u(n),o=!1,i()}}}function pt(e,t,n){let r;return H.subscribe((e=>{console.log(e),e.errors.length>0?(M.update((()=>(e.errors??[]).length)),n(0,r=(e.errors??[]).join("\n"))):n(0,r=(e.result??[]).join("\n"))})),[r,function(){r=this.value,n(0,r)}]}class ht extends F{constructor(e){super(),L(this,e,pt,dt,i,{})}}function mt(t){let n;return{c(){n=c("p"),n.textContent="Evaluating...",p(n,"class","evaluating svelte-cz2b4t")},m(e,t){a(e,n,t)},p:e,d(e){e&&u(n)}}}function gt(e){let t,n,r,o=e[3]>0&&vt(e);return{c(){t=c("p"),t.textContent="Ready",n=f(),o&&o.c(),r=l(""),p(t,"class","evaluating svelte-cz2b4t")},m(e,i){a(e,t,i),a(e,n,i),o&&o.m(e,i),a(e,r,i)},p(e,t){e[3]>0?o?o.p(e,t):(o=vt(e),o.c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null)},d(e){e&&u(t),e&&u(n),o&&o.d(e),e&&u(r)}}}function vt(e){let t,n,r;return{c(){t=c("p"),n=l(e[3]),r=l(" errors"),p(t,"class","errors svelte-cz2b4t")},m(e,o){a(e,t,o),s(t,n),s(t,r)},p(e,t){8&t&&h(n,e[3])},d(e){e&&u(t)}}}function yt(t){let n,r,o,i,m,g,v,y,b,E,w;function O(e,t){return e[2]?mt:gt}let R=O(t),_=R(t);return{c(){n=c("div"),r=c("p"),r.textContent="Github",o=f(),_.c(),i=f(),m=c("p"),g=l("Ln "),v=l(t[0]),y=l(", Col "),b=l(t[1]),p(r,"class","github svelte-cz2b4t"),p(m,"class","curr svelte-cz2b4t"),p(n,"class","footer svelte-cz2b4t")},m(e,u){a(e,n,u),s(n,r),s(n,o),_.m(n,null),s(n,i),s(n,m),s(m,g),s(m,v),s(m,y),s(m,b),E||(w=d(r,"click",t[4]),E=!0)},p(e,[t]){R===(R=O(e))&&_?_.p(e,t):(_.d(1),_=R(e),_&&(_.c(),_.m(n,i))),1&t&&h(v,e[0]),2&t&&h(b,e[1])},i:e,o:e,d(e){e&&u(n),_.d(),E=!1,w()}}}function bt(e,t,n){let[r,o,i,s]=[1,0,!1,0];z.subscribe((e=>n(0,r=e))),W.subscribe((e=>n(1,o=e))),J.subscribe((e=>n(2,i=e))),M.subscribe((e=>n(3,s=e)));return[r,o,i,s,()=>window.open("https://github.com/tsukiroku/tiny")]}class Et extends F{constructor(e){super(),L(this,e,bt,yt,i,{})}}function wt(t){let n,r,o,i,l,d,h,m,g;return r=new ft({}),i=new Y({}),d=new ht({}),m=new Et({}),{c(){n=c("div"),U(r.$$.fragment),o=f(),U(i.$$.fragment),l=f(),U(d.$$.fragment),h=f(),U(m.$$.fragment),p(n,"class","container svelte-1rmnu4k")},m(e,t){a(e,n,t),P(r,n,null),s(n,o),P(i,n,null),s(n,l),P(d,n,null),s(n,h),P(m,n,null),g=!0},p:e,i(e){g||(T(r.$$.fragment,e),T(i.$$.fragment,e),T(d.$$.fragment,e),T(m.$$.fragment,e),g=!0)},o(e){k(r.$$.fragment,e),k(i.$$.fragment,e),k(d.$$.fragment,e),k(m.$$.fragment,e),g=!1},d(e){e&&u(n),B(r),B(i),B(d),B(m)}}}function Ot(e){return b((()=>Q.focus())),[]}return new class extends F{constructor(e){super(),L(this,e,Ot,wt,i,{})}}({target:document.body})}();
