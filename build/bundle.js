var app=function(e){"use strict";function t(){}function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function i(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,t){e.appendChild(t)}function u(e,t,n){e.insertBefore(t,n||null)}function l(e){e.parentNode.removeChild(e)}function c(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function f(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function p(){return d(" ")}function h(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function g(e,t){e.value=null==t?"":t}function b(e,t){for(let n=0;n<e.options.length;n+=1){const r=e.options[n];if(r.__value===t)return void(r.selected=!0)}e.selectedIndex=-1}let y;function v(e){y=e}const w=[],x=[],E=[],R=[],T=Promise.resolve();let k=!1;function O(e){E.push(e)}const _=new Set;let $=0;function A(){const e=y;do{for(;$<w.length;){const e=w[$];$++,v(e),S(e.$$)}for(v(null),w.length=0,$=0;x.length;)x.pop()();for(let e=0;e<E.length;e+=1){const t=E[e];_.has(t)||(_.add(t),t())}E.length=0}while(w.length);for(;R.length;)R.pop()();k=!1,_.clear(),v(e)}function S(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}const C=new Set;function j(e,t){e&&e.i&&(C.delete(e),e.i(t))}function I(e,t,n,r){if(e&&e.o){if(C.has(e))return;C.add(e),undefined.c.push((()=>{C.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}else r&&r()}function B(e){e&&e.c()}function N(e,t,r,s){const{fragment:a,on_mount:u,on_destroy:l,after_update:c}=e.$$;a&&a.m(t,r),s||O((()=>{const t=u.map(n).filter(i);l?l.push(...t):o(t),e.$$.on_mount=[]})),c.forEach(O)}function P(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function D(e,t){-1===e.$$.dirty[0]&&(w.push(e),k||(k=!0,T.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function U(e,n,i,s,a,u,c,f=[-1]){const d=y;v(e);const p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:r(),dirty:f,skip_bound:!1,root:n.target||d.$$.root};c&&c(p.root);let h=!1;if(p.ctx=i?i(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),h&&D(e,t)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);p.fragment&&p.fragment.l(e),e.forEach(l)}else p.fragment&&p.fragment.c();n.intro&&j(e.$$.fragment),N(e,n.target,n.anchor,n.customElement),A()}v(d)}class L{$destroy(){P(this,1),this.$destroy=t}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const F=[];function q(e,n=t){let r;const o=new Set;function i(t){if(s(e,t)&&(e=t,r)){const t=!F.length;for(const t of o)t[1](),F.push(t,e);if(t){for(let e=0;e<F.length;e+=2)F[e][0](F[e+1]);F.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(s,a=t){const u=[s,a];return o.add(u),1===o.size&&(r=n(i)||t),s(e),()=>{o.delete(u),0===o.size&&(r(),r=null)}}}}let M=q(!1),z=q(0),V=q({result:[],errors:[]});var H,W=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},J=Object.prototype.toString,K=(H=Object.create(null),function(e){var t=J.call(e);return H[t]||(H[t]=t.slice(8,-1).toLowerCase())});function X(e){return e=e.toLowerCase(),function(t){return K(t)===e}}function Q(e){return Array.isArray(e)}function Z(e){return void 0===e}var G=X("ArrayBuffer");function Y(e){return null!==e&&"object"==typeof e}function ee(e){if("object"!==K(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var te=X("Date"),ne=X("File"),re=X("Blob"),oe=X("FileList");function ie(e){return"[object Function]"===J.call(e)}var se=X("URLSearchParams");function ae(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),Q(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var ue,le=(ue="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return ue&&e instanceof ue}),ce={isArray:Q,isArrayBuffer:G,isBuffer:function(e){return null!==e&&!Z(e)&&null!==e.constructor&&!Z(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||J.call(e)===t||ie(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&G(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:Y,isPlainObject:ee,isUndefined:Z,isDate:te,isFile:ne,isBlob:re,isFunction:ie,isStream:function(e){return Y(e)&&ie(e.pipe)},isURLSearchParams:se,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:ae,merge:function e(){var t={};function n(n,r){ee(t[r])&&ee(n)?t[r]=e(t[r],n):ee(n)?t[r]=e({},n):Q(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)ae(arguments[r],n);return t},extend:function(e,t,n){return ae(t,(function(t,r){e[r]=n&&"function"==typeof t?W(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,o,i,s={};t=t||{};do{for(o=(r=Object.getOwnPropertyNames(e)).length;o-- >0;)s[i=r[o]]||(t[i]=e[i],s[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:K,kindOfTest:X,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(Z(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:le,isFileList:oe};function fe(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var de=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(ce.isURLSearchParams(t))r=t.toString();else{var o=[];ce.forEach(t,(function(e,t){null!=e&&(ce.isArray(e)?t+="[]":e=[e],ce.forEach(e,(function(e){ce.isDate(e)?e=e.toISOString():ce.isObject(e)&&(e=JSON.stringify(e)),o.push(fe(t)+"="+fe(e))})))})),r=o.join("&")}if(r){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e};function pe(){this.handlers=[]}pe.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},pe.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},pe.prototype.forEach=function(e){ce.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var he=pe,me=function(e,t){ce.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))};function ge(e,t,n,r,o){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}ce.inherits(ge,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var be=ge.prototype,ye={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){ye[e]={value:e}})),Object.defineProperties(ge,ye),Object.defineProperty(be,"isAxiosError",{value:!0}),ge.from=function(e,t,n,r,o,i){var s=Object.create(be);return ce.toFlatObject(e,s,(function(e){return e!==Error.prototype})),ge.call(s,e.message,t,n,r,o),s.name=e.name,i&&Object.assign(s,i),s};var ve=ge,we={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var xe=function(e,t){t=t||new FormData;var n=[];function r(e){return null===e?"":ce.isDate(e)?e.toISOString():ce.isArrayBuffer(e)||ce.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function e(o,i){if(ce.isPlainObject(o)||ce.isArray(o)){if(-1!==n.indexOf(o))throw Error("Circular reference detected in "+i);n.push(o),ce.forEach(o,(function(n,o){if(!ce.isUndefined(n)){var s,a=i?i+"."+o:o;if(n&&!i&&"object"==typeof n)if(ce.endsWith(o,"{}"))n=JSON.stringify(n);else if(ce.endsWith(o,"[]")&&(s=ce.toArray(n)))return void s.forEach((function(e){!ce.isUndefined(e)&&t.append(a,r(e))}));e(n,a)}})),n.pop()}else t.append(i,r(o))}(e),t},Ee=ce.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),ce.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),ce.isString(r)&&s.push("path="+r),ce.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},Re=function(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t},Te=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],ke=ce.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=ce.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0};function Oe(e){ve.call(this,null==e?"canceled":e,ve.ERR_CANCELED),this.name="CanceledError"}ce.inherits(Oe,ve,{__CANCEL__:!0});var _e=Oe,$e=function(e){return new Promise((function(t,n){var r,o=e.data,i=e.headers,s=e.responseType;function a(){e.cancelToken&&e.cancelToken.unsubscribe(r),e.signal&&e.signal.removeEventListener("abort",r)}ce.isFormData(o)&&ce.isStandardBrowserEnv()&&delete i["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",c=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.Authorization="Basic "+btoa(l+":"+c)}var f=Re(e.baseURL,e.url);function d(){if(u){var r,o,i,l,c,f="getAllResponseHeaders"in u?(r=u.getAllResponseHeaders(),c={},r?(ce.forEach(r.split("\n"),(function(e){if(l=e.indexOf(":"),o=ce.trim(e.substr(0,l)).toLowerCase(),i=ce.trim(e.substr(l+1)),o){if(c[o]&&Te.indexOf(o)>=0)return;c[o]="set-cookie"===o?(c[o]?c[o]:[]).concat([i]):c[o]?c[o]+", "+i:i}})),c):c):null;!function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new ve("Request failed with status code "+n.status,[ve.ERR_BAD_REQUEST,ve.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:f,config:e,request:u}),u=null}}if(u.open(e.method.toUpperCase(),de(f,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(d)},u.onabort=function(){u&&(n(new ve("Request aborted",ve.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new ve("Network Error",ve.ERR_NETWORK,e,u,u)),u=null},u.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||we;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new ve(t,r.clarifyTimeoutError?ve.ETIMEDOUT:ve.ECONNABORTED,e,u)),u=null},ce.isStandardBrowserEnv()){var p=(e.withCredentials||ke(f))&&e.xsrfCookieName?Ee.read(e.xsrfCookieName):void 0;p&&(i[e.xsrfHeaderName]=p)}"setRequestHeader"in u&&ce.forEach(i,(function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete i[t]:u.setRequestHeader(t,e)})),ce.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&"json"!==s&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(r=function(e){u&&(n(!e||e&&e.type?new _e:e),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(r),e.signal&&(e.signal.aborted?r():e.signal.addEventListener("abort",r))),o||(o=null);var h,m=(h=/^([-+\w]{1,25})(:?\/\/|:)/.exec(f))&&h[1]||"";m&&-1===["http","https","file"].indexOf(m)?n(new ve("Unsupported protocol "+m+":",ve.ERR_BAD_REQUEST,e)):u.send(o)}))},Ae={"Content-Type":"application/x-www-form-urlencoded"};function Se(e,t){!ce.isUndefined(e)&&ce.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var Ce,je={transitional:we,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(Ce=$e),Ce),transformRequest:[function(e,t){if(me(t,"Accept"),me(t,"Content-Type"),ce.isFormData(e)||ce.isArrayBuffer(e)||ce.isBuffer(e)||ce.isStream(e)||ce.isFile(e)||ce.isBlob(e))return e;if(ce.isArrayBufferView(e))return e.buffer;if(ce.isURLSearchParams(e))return Se(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,r=ce.isObject(e),o=t&&t["Content-Type"];if((n=ce.isFileList(e))||r&&"multipart/form-data"===o){var i=this.env&&this.env.FormData;return xe(n?{"files[]":e}:e,i&&new i)}return r||"application/json"===o?(Se(t,"application/json"),function(e,t,n){if(ce.isString(e))try{return(t||JSON.parse)(e),ce.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||je.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||r&&ce.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw ve.from(e,ve.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:null},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ce.forEach(["delete","get","head"],(function(e){je.headers[e]={}})),ce.forEach(["post","put","patch"],(function(e){je.headers[e]=ce.merge(Ae)}));var Ie=je,Be=function(e,t,n){var r=this||Ie;return ce.forEach(n,(function(n){e=n.call(r,e,t)})),e},Ne=function(e){return!(!e||!e.__CANCEL__)};function Pe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _e}var De=function(e){return Pe(e),e.headers=e.headers||{},e.data=Be.call(e,e.data,e.headers,e.transformRequest),e.headers=ce.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ce.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||Ie.adapter)(e).then((function(t){return Pe(e),t.data=Be.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return Ne(t)||(Pe(e),t&&t.response&&(t.response.data=Be.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},Ue=function(e,t){t=t||{};var n={};function r(e,t){return ce.isPlainObject(e)&&ce.isPlainObject(t)?ce.merge(e,t):ce.isPlainObject(t)?ce.merge({},t):ce.isArray(t)?t.slice():t}function o(n){return ce.isUndefined(t[n])?ce.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function i(e){if(!ce.isUndefined(t[e]))return r(void 0,t[e])}function s(n){return ce.isUndefined(t[n])?ce.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function a(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a};return ce.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||o,r=t(e);ce.isUndefined(r)&&t!==a||(n[e]=r)})),n},Le="0.27.2",Fe=Le,qe={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){qe[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var Me={};qe.transitional=function(e,t,n){function r(e,t){return"[Axios v"+Fe+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,o,i){if(!1===e)throw new ve(r(o," has been removed"+(t?" in "+t:"")),ve.ERR_DEPRECATED);return t&&!Me[o]&&(Me[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};var ze={assertOptions:function(e,t,n){if("object"!=typeof e)throw new ve("options must be an object",ve.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),o=r.length;o-- >0;){var i=r[o],s=t[i];if(s){var a=e[i],u=void 0===a||s(a,i,e);if(!0!==u)throw new ve("option "+i+" must be "+u,ve.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new ve("Unknown option "+i,ve.ERR_BAD_OPTION)}},validators:qe},Ve=ze.validators;function He(e){this.defaults=e,this.interceptors={request:new he,response:new he}}He.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=Ue(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&ze.assertOptions(n,{silentJSONParsing:Ve.transitional(Ve.boolean),forcedJSONParsing:Ve.transitional(Ve.boolean),clarifyTimeoutError:Ve.transitional(Ve.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var i,s=[];if(this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected)})),!o){var a=[De,void 0];for(Array.prototype.unshift.apply(a,r),a=a.concat(s),i=Promise.resolve(t);a.length;)i=i.then(a.shift(),a.shift());return i}for(var u=t;r.length;){var l=r.shift(),c=r.shift();try{u=l(u)}catch(e){c(e);break}}try{i=De(u)}catch(e){return Promise.reject(e)}for(;s.length;)i=i.then(s.shift(),s.shift());return i},He.prototype.getUri=function(e){e=Ue(this.defaults,e);var t=Re(e.baseURL,e.url);return de(t,e.params,e.paramsSerializer)},ce.forEach(["delete","get","head","options"],(function(e){He.prototype[e]=function(t,n){return this.request(Ue(n||{},{method:e,url:t,data:(n||{}).data}))}})),ce.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Ue(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}He.prototype[e]=t(),He.prototype[e+"Form"]=t(!0)}));var We=He;function Je(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new _e(e),t(n.reason))}))}Je.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},Je.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},Je.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},Je.source=function(){var e;return{token:new Je((function(t){e=t})),cancel:e}};var Ke=Je;var Xe=function e(t){var n=new We(t),r=W(We.prototype.request,n);return ce.extend(r,We.prototype,n),ce.extend(r,n),r.create=function(n){return e(Ue(t,n))},r}(Ie);Xe.Axios=We,Xe.CanceledError=_e,Xe.CancelToken=Ke,Xe.isCancel=Ne,Xe.VERSION=Le,Xe.toFormData=xe,Xe.AxiosError=ve,Xe.Cancel=Xe.CanceledError,Xe.all=function(e){return Promise.all(e)},Xe.spread=function(e){return function(t){return e.apply(null,t)}},Xe.isAxiosError=function(e){return ce.isObject(e)&&!0===e.isAxiosError};var Qe=Xe,Ze=Xe;Qe.default=Ze;var Ge=Qe;function Ye(e,t,n){const r=e.slice();return r[7]=t[n],r}function et(e,t,n){const r=e.slice();return r[7]=t[n],r}function tt(e){let n,r,o=e[7].name+"";return{c(){n=f("option"),r=d(o),n.__value=e[7],n.value=n.__value,m(n,"class","dark:bg-sidebar bg-sidebar-light")},m(e,t){u(e,n,t),a(n,r)},p:t,d(e){e&&l(n)}}}function nt(e){let t,n=e[7].examples,r=[];for(let t=0;t<n.length;t+=1)r[t]=tt(et(e,n,t));return{c(){t=f("optgroup");for(let e=0;e<r.length;e+=1)r[e].c();m(t,"label",e[7].name),m(t,"class","dark:bg-sidebar bg-sidebar-light")},m(e,n){u(e,t,n);for(let e=0;e<r.length;e+=1)r[e].m(t,null)},p(e,o){if(0&o){let i;for(n=e[7].examples,i=0;i<n.length;i+=1){const s=et(e,n,i);r[i]?r[i].p(s,o):(r[i]=tt(s),r[i].c(),r[i].m(t,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=n.length}},d(e){e&&l(t),c(r,e)}}}function rt(e){let n,r,i,s,g,y,v,w,x,E,R,T,k=yt,_=[];for(let t=0;t<k.length;t+=1)_[t]=nt(Ye(e,k,t));return{c(){n=f("div"),r=f("p"),i=d("Run"),s=p(),g=f("p"),g.textContent="Share",y=p(),v=f("p"),v.textContent="Docs",w=p(),x=f("select"),E=f("option"),E.textContent="Examples";for(let e=0;e<_.length;e+=1)_[e].c();m(r,"class","cursor-pointer inline pl-3 dark:text-white text-black"),m(r,"disabled",e[0]),m(g,"class","cursor-pointer inline pl-3 dark:text-white text-black"),m(v,"class","cursor-pointer inline pl-3 dark:text-white text-black"),E.__value="examples",E.value=E.__value,E.disabled=!0,m(E,"class","dark:bg-sidebar bg-sidebar-light"),m(x,"class","pb-2.5 pl-3 inline border-none bg-transparent outline-none appearance-none cursor-pointer w-24"),void 0===e[1]&&O((()=>e[6].call(x))),m(n,"class","top-0 h-8 dark:bg-header bg-header-light dark:text-white text-black pl-1.5 pt-1")},m(t,o){u(t,n,o),a(n,r),a(r,i),a(n,s),a(n,g),a(n,y),a(n,v),a(n,w),a(n,x),a(x,E);for(let e=0;e<_.length;e+=1)_[e].m(x,null);b(x,e[1]),R||(T=[h(r,"click",e[2]),h(g,"click",e[4]),h(v,"click",e[5]),h(x,"change",e[6]),h(x,"change",e[3])],R=!0)},p(e,[t]){if(1&t&&m(r,"disabled",e[0]),0&t){let n;for(k=yt,n=0;n<k.length;n+=1){const r=Ye(e,k,n);_[n]?_[n].p(r,t):(_[n]=nt(r),_[n].c(),_[n].m(x,null))}for(;n<_.length;n+=1)_[n].d(1);_.length=k.length}2&t&&b(x,e[1])},i:t,o:t,d(e){e&&l(n),c(_,e),R=!1,o(T)}}}function ot(t,n,r){let o=!1;M.subscribe((e=>r(0,o=!e)));let i;return[o,i,()=>{o?(M.update((()=>!0)),z.update((()=>0)),Ge.get(`https://tiny-tsukiroku.vercel.app/eval/${encodeURIComponent(e.editor.getValue())}`).then((e=>V.update((()=>e.data)))).catch((e=>V.update((()=>({result:[],errors:[`[Evaluating] ${e}, Check if the code is an infinite loop.`]}))))).finally((()=>M.update((()=>!1))))):V.update((()=>({result:[],errors:["Evaluating..."]})))},()=>{"string"!=typeof i&&(Ge.get(`https://raw.githubusercontent.com/tsukiroku/tiny/main/examples/${i.source}`).then((t=>e.editor.setValue(t.data))),r(1,i="examples"))},()=>navigator.clipboard.writeText(`${window.location.href}${window.location.href=`#${encodeURIComponent(e.editor.getValue())}`}`),()=>window.open("https://github.com/tsukiroku/tiny#documentation"),function(){i=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),r(1,i)}]}class it extends L{constructor(e){super(),U(this,e,ot,rt,s,{})}}function st(e){let n;return{c(){n=f("div"),n.innerHTML='<div class="w-full h-full dark:bg-background bg-background-light" id="editor"></div>',m(n,"class","w-full h-3/4 md:w-3/4 md:h-full float-left dark:bg-background bg-background-light")},m(e,t){u(e,n,t)},p:t,i:t,o:t,d(e){e&&l(n)}}}class at extends L{constructor(e){super(),U(this,e,null,st,s,{})}}function ut(e){let n,r,o,i;return{c(){n=f("div"),r=f("textarea"),m(r,"class","h-1/4 w-full border-none dark:bg-background bg-background-light dark:text-white text-black resize-none outline-none break-words whitespace-pre overflow-x-scroll p-4 md:h-full disabled"),r.disabled=!0,m(n,"class","w-full h-full float-none md:w-1/4 md:float-right dark:bg-background bg-background-light")},m(t,s){u(t,n,s),a(n,r),g(r,e[0]),o||(i=h(r,"input",e[1]),o=!0)},p(e,[t]){1&t&&g(r,e[0])},i:t,o:t,d(e){e&&l(n),o=!1,i()}}}function lt(e,t,n){let r;return V.subscribe((e=>{e.errors.length>0?(z.update((()=>(e.errors??[]).length)),n(0,r=(e.errors??[]).join("\n"))):n(0,r=(e.result??[]).join("\n"))})),[r,function(){r=this.value,n(0,r)}]}class ct extends L{constructor(e){super(),U(this,e,lt,ut,s,{})}}function ft(e){let n;return{c(){n=f("p"),n.textContent="Evaluating...",m(n,"class","pl-3 inline text-center float-left cursor-pointer")},m(e,t){u(e,n,t)},p:t,d(e){e&&l(n)}}}function dt(e){let t,n,r,o=e[1]>0&&pt(e);return{c(){t=f("p"),t.textContent="Ready",n=p(),o&&o.c(),r=d(""),m(t,"class","pl-3 inline text-center float-left cursor-pointer")},m(e,i){u(e,t,i),u(e,n,i),o&&o.m(e,i),u(e,r,i)},p(e,t){e[1]>0?o?o.p(e,t):(o=pt(e),o.c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null)},d(e){e&&l(t),e&&l(n),o&&o.d(e),e&&l(r)}}}function pt(e){let t,n,r;return{c(){t=f("p"),n=d(e[1]),r=d(" errors"),m(t,"class","pl-3 text-red-400 inline float-left cursor-pointer")},m(e,o){u(e,t,o),a(t,n),a(t,r)},p(e,t){2&t&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(n,e[1])},d(e){e&&l(t)}}}function ht(e){let n,r,o,i,s;function c(e,t){return e[0]?ft:dt}let d=c(e),g=d(e);return{c(){n=f("div"),r=f("p"),r.textContent="Github",o=p(),g.c(),m(r,"class","bg-emerald-600 hover:bg-emerald-500 w-20 pb-2.5 inline text-center float-left cursor-pointer"),m(n,"class","clear-both fixed bottom-0 w-full h-[1.4rem] bg-footer")},m(t,l){u(t,n,l),a(n,r),a(n,o),g.m(n,null),i||(s=h(r,"click",e[2]),i=!0)},p(e,[t]){d===(d=c(e))&&g?g.p(e,t):(g.d(1),g=d(e),g&&(g.c(),g.m(n,null)))},i:t,o:t,d(e){e&&l(n),g.d(),i=!1,s()}}}function mt(e,t,n){let[r,o]=[!1,0];M.subscribe((e=>n(0,r=e))),z.subscribe((e=>n(1,o=e)));return[r,o,()=>window.open("https://github.com/tsukiroku/tiny")]}class gt extends L{constructor(e){super(),U(this,e,mt,ht,s,{})}}function bt(e){let n,r,o,i,s,c,d,h,g;return r=new it({}),i=new at({}),c=new ct({}),h=new gt({}),{c(){n=f("div"),B(r.$$.fragment),o=p(),B(i.$$.fragment),s=p(),B(c.$$.fragment),d=p(),B(h.$$.fragment),m(n,"class","absolute w-full h-full pb-12")},m(e,t){u(e,n,t),N(r,n,null),a(n,o),N(i,n,null),a(n,s),N(c,n,null),a(n,d),N(h,n,null),g=!0},p:t,i(e){g||(j(r.$$.fragment,e),j(i.$$.fragment,e),j(c.$$.fragment,e),j(h.$$.fragment,e),g=!0)},o(e){I(r.$$.fragment,e),I(i.$$.fragment,e),I(c.$$.fragment,e),I(h.$$.fragment,e),g=!1},d(e){e&&l(n),P(r),P(i),P(c),P(h)}}}require.config({paths:{vs:"https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs"}}),e.editor=null,window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(t=>e.editor.updateOptions({theme:t.matches?"tinyTheme":"tinyTheme-light"}))),require(["vs/editor/editor.main"],(()=>{const t=["let","func","true","false","if","else","return","while","in","typeof","null","throw","delete","use"];monaco.languages.register({id:"tiny"}),monaco.languages.setLanguageConfiguration("tiny",{autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],brackets:[["{","}"],["[","]"],["(",")"]],comments:{lineComment:"//"}}),monaco.languages.setMonarchTokensProvider("tiny",{keywords:t,stds:["print","println","readline","push","pop","shift","unshift","slice","join","forEach","repeat","funcTools","length","match","string","number","boolean","ternary","subString","rMatch","rTest","replace","split","concat","assign"],builtins:["import","eval","js","convert","options","setOption","regex","this","__root","__pos","__filename"],tokenizer:{root:[[/\/\/.*$/,"comment"],[/\@.*$/,"decorator"],[/[{}()\[\]]/,"bracket"],[/@?[a-zA-Z_][\w$]*/,{cases:{"@keywords":"keyword","@stds":"function","@builtins":"builtin","@default":"identifier"}}],[/[a-zA-Z_][a-zA-Z0-9_]*\(/,"function"],[/'[^']*'/,"string"],[/"[^"]*"/,"string"],[/\d+/,"number"],[/[<>](?!@)/,"delimiter"],[/@?[=!+\-*%&|^~/]/,"delimiter"],[/[?:;.,]/,"delimiter"],[/\s+/,"white"]]}}),monaco.editor.defineTheme("tinyTheme",{base:"vs-dark",inherit:!0,rules:[{token:"identifier",foreground:"#BBBBBB"},{token:"decorator",foreground:"#b366ff"},{token:"delimiter",foreground:"#BBBBBB"},{token:"bracket",foreground:"#BBBBBB"},{token:"function",foreground:"#dcdc90"},{token:"builtin",foreground:"#f75278"}]}),monaco.editor.defineTheme("tinyTheme-light",{base:"vs",inherit:!0,rules:[{token:"identifier",foreground:"#1c1c1c"},{token:"decorator",foreground:"#7c2fd4"},{token:"delimiter",foreground:"#1c1c1c"},{token:"bracket",foreground:"#1c1c1c"},{token:"function",foreground:"#94a31f"},{token:"builtin",foreground:"#b82144"}]}),monaco.languages.registerCompletionItemProvider("tiny",{provideCompletionItems:()=>({suggestions:[...t.map((e=>({label:e,kind:monaco.languages.CompletionItemKind.Keyword,insertText:e}))),{label:"let",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"let ${1:name} = ${2:literal};"},{label:"func",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"func ${1:name}(${2:params}) {\n\t${3:body}\n}"},{label:"if",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"if (${1:condition}) {\n\t${2:body}\n}"},{label:"else",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"else {\n\t${1:body}\n}"},{label:"return",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"return ${1:value};"},{label:"while",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"while (${1:condition}) {\n\t${2:body}\n}"},{label:"in",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"in"},{label:"typeof",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"typeof ${1:value}"},{label:"null",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"null"},{label:"throw",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"throw '${1:message}';"},{label:"delete",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"delete ${1:env};"},{label:"use",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"use '${1:path};'"}]})}),e.editor=monaco.editor.create(document.getElementById("editor"),{value:window.location.hash?decodeURIComponent(window.location.hash.substr(1)):"// Welcome to the Tiny language playground.\n// Try writing some code, try running it.\n// you can run it by clicking the 'Run' button.\n\n// Try it\n// - Share    : you can share your code by url.\n// - Docs     : https://github.com/tsukiroku/tiny/tree/main/docs\n// - Examples : you can find some examples here.\n\n// Enjoy!\n\nlet someVariable = 'Hello, World!';\nprintln(someVariable);\n",language:"tiny",theme:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"tinyTheme":"tinyTheme-light",automaticLayout:!0,fontSize:17,fontFamily:"Fira Code",fontLigatures:!0})}));const yt=[{name:"Hello, World!",examples:[{name:"Hello, World!",source:"hello_world.tiny"},{name:"Fibonacci",source:"fibonacci.tiny"},{name:"Tiny interpreter",source:"interpreter.tiny"}]},{name:"Variables & Data types",examples:[{name:"Variable",source:"variable.tiny"},{name:"Function",source:"function.tiny"},{name:"Hash",source:"hash.tiny"}]},{name:"Operators & Decorators",examples:[{name:"Operator",source:"operators.tiny"},{name:"Decorator",source:"decorators.tiny"}]},{name:"Control flow",examples:[{name:"If",source:"if.tiny"},{name:"While",source:"while.tiny"},{name:"Import",source:"import.tiny"}]},{name:"Standard library",examples:[{name:"IO",source:"/stdlib/io.tiny"},{name:"Array",source:"/stdlib/array.tiny"},{name:"String",source:"/stdlib/string.tiny"},{name:"Object",source:"/stdlib/object.tiny"},{name:"Utility",source:"/stdlib/util.tiny"}]}],vt=new class extends L{constructor(e){super(),U(this,e,null,bt,s,{})}}({target:document.body});return e.default=vt,e.examples=yt,Object.defineProperty(e,"__esModule",{value:!0}),e}({});
