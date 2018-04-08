!function(e){var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,r){if(!w[e]||!g[e])return;for(var n in g[e]=!1,r)Object.prototype.hasOwnProperty.call(r,n)&&(h[n]=r[n]);0==--v&&0===b&&j()}(e,n),r&&r(e,n)};var n,t=!0,o="87cd35f84cdb8bb3694e",c=1e4,i={},d=[],a=[];function s(e){var r=H[e];if(!r)return P;var t=function(t){return r.hot.active?(H[t]?H[t].parents.includes(e)||H[t].parents.push(e):(d=[e],n=t),r.children.includes(t)||r.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),d=[]),P(t)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(r){P[e]=r}}};for(var c in P)Object.prototype.hasOwnProperty.call(P,c)&&"e"!==c&&Object.defineProperty(t,c,o(c));return t.e=function(e){return"ready"===p&&u("prepare"),b++,P.e(e).then(r,function(e){throw r(),e});function r(){b--,"prepare"===p&&(m[e]||O(e),0===b&&0===v&&j())}},t}var l=[],p="idle";function u(e){p=e;for(var r=0;r<l.length;r++)l[r].call(null,e)}var f,h,y,v=0,b=0,m={},g={},w={};function _(e){return+e+""===e?+e:e}function D(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return t=e,u("check"),(r=c,r=r||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var t=new XMLHttpRequest,c=P.p+""+o+".hot-update.json";t.open("GET",c,!0),t.timeout=r,t.send(null)}catch(e){return n(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)n(new Error("Manifest request to "+c+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)n(new Error("Manifest request to "+c+" failed."));else{try{var r=JSON.parse(t.responseText)}catch(e){return void n(e)}e(r)}}})).then(function(e){if(!e)return u("idle"),null;g={},m={},w=e.c,y=e.h,u("prepare");var r=new Promise(function(e,r){f={resolve:e,reject:r}});h={};return O(3),"prepare"===p&&0===b&&0===v&&j(),r});var r}function O(e){w[e]?(g[e]=!0,v++,function(e){var r=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=P.p+""+e+"."+o+".hot-update.js",r.appendChild(n)}(e)):m[e]=!0}function j(){u("ready");var e=f;if(f=null,e)if(t)Promise.resolve().then(function(){return E(t)}).then(function(r){e.resolve(r)},function(r){e.reject(r)});else{var r=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&r.push(_(n));e.resolve(r)}}function E(r){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,t,c,a,s;function l(e){for(var r=[e],n={},t=r.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),c=o.id,i=o.chain;if((a=H[c])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(a.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var d=0;d<a.parents.length;d++){var s=a.parents[d],l=H[s];if(l){if(l.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([s]),moduleId:c,parentId:s};r.includes(s)||(l.hot._acceptedDependencies[c]?(n[s]||(n[s]=[]),f(n[s],[c])):(delete n[s],r.push(s),t.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function f(e,r){for(var n=0;n<r.length;n++){var t=r[n];e.includes(t)||e.push(t)}}r=r||{};var v={},b=[],m={},g=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var D in h)if(Object.prototype.hasOwnProperty.call(h,D)){var O;s=_(D);var j=!1,E=!1,I=!1,k="";switch((O=h[D]?l(s):{type:"disposed",moduleId:D}).chain&&(k="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":r.onDeclined&&r.onDeclined(O),r.ignoreDeclined||(j=new Error("Aborted because of self decline: "+O.moduleId+k));break;case"declined":r.onDeclined&&r.onDeclined(O),r.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+k));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(O),r.ignoreUnaccepted||(j=new Error("Aborted because "+s+" is not accepted"+k));break;case"accepted":r.onAccepted&&r.onAccepted(O),E=!0;break;case"disposed":r.onDisposed&&r.onDisposed(O),I=!0;break;default:throw new Error("Unexception type "+O.type)}if(j)return u("abort"),Promise.reject(j);if(E)for(s in m[s]=h[s],f(b,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,s)&&(v[s]||(v[s]=[]),f(v[s],O.outdatedDependencies[s]));I&&(f(b,[O.moduleId]),m[s]=g)}var x,A=[];for(t=0;t<b.length;t++)s=b[t],H[s]&&H[s].hot._selfAccepted&&A.push({module:s,errorHandler:H[s].hot._selfAccepted});u("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var M,U,q=b.slice();q.length>0;)if(s=q.pop(),a=H[s]){var R={},S=a.hot._disposeHandlers;for(c=0;c<S.length;c++)(n=S[c])(R);for(i[s]=R,a.hot.active=!1,delete H[s],delete v[s],c=0;c<a.children.length;c++){var N=H[a.children[c]];N&&((x=N.parents.indexOf(s))>=0&&N.parents.splice(x,1))}}for(s in v)if(Object.prototype.hasOwnProperty.call(v,s)&&(a=H[s]))for(U=v[s],c=0;c<U.length;c++)M=U[c],(x=a.children.indexOf(M))>=0&&a.children.splice(x,1);for(s in u("apply"),o=y,m)Object.prototype.hasOwnProperty.call(m,s)&&(e[s]=m[s]);var T=null;for(s in v)if(Object.prototype.hasOwnProperty.call(v,s)&&(a=H[s])){U=v[s];var C=[];for(t=0;t<U.length;t++)if(M=U[t],n=a.hot._acceptedDependencies[M]){if(C.includes(n))continue;C.push(n)}for(t=0;t<C.length;t++){n=C[t];try{n(U)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:s,dependencyId:U[t],error:e}),r.ignoreErrored||T||(T=e)}}}for(t=0;t<A.length;t++){var L=A[t];s=L.module,d=[s];try{P(s)}catch(e){if("function"==typeof L.errorHandler)try{L.errorHandler(e)}catch(n){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),r.ignoreErrored||T||(T=n),T||(T=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:s,error:e}),r.ignoreErrored||T||(T=e)}}return T?(u("fail"),Promise.reject(T)):(u("idle"),new Promise(function(e){e(b)}))}var H={};function P(r){if(H[r])return H[r].exports;var t=H[r]={i:r,l:!1,exports:{},hot:function(e){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._acceptedDependencies[e[t]]=n||function(){};else r._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._declinedDependencies[e[n]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=r._disposeHandlers.indexOf(e);n>=0&&r._disposeHandlers.splice(n,1)},check:D,apply:E,status:function(e){if(!e)return p;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var r=l.indexOf(e);r>=0&&l.splice(r,1)},data:i[e]};return n=void 0,r}(r),parents:(a=d,d=[],a),children:[]};return e[r].call(t.exports,t,t.exports,s(r)),t.l=!0,t.exports}P.m=e,P.c=H,P.d=function(e,r,n){P.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},P.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},P.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(r,"a",r),r},P.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},P.p="/home/alexa/Desktop/projects/empyre/right-action/dist/scripts",P.h=function(){return o},s("./src/scripts/pages/blog.js")(P.s="./src/scripts/pages/blog.js")}({"./src/scripts/pages/blog.js":function(e,r){console.log("on the block page")}});