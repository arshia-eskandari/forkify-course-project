function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequire3a11;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire3a11=o),o.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.d3c7befa.js","eyyUD":"icons.c14567a0.svg"}'));var a,s,c={},u=function(e){return e&&e.Math==Math&&e};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,d;l=!(d=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var f,p={};f=!d((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h,m=Function.prototype.call;p=f?m.bind(m):function(){return m.apply(m,arguments)};var v={}.propertyIsEnumerable,g=Object.getOwnPropertyDescriptor,y=g&&!v.call({1:2},1);h=y?function(e){var t=g(this,e);return!!t&&t.enumerable}:v;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var _,w,k={},E={},S=Function.prototype,L=S.bind,O=S.call,j=f&&L.bind(O,O),M=(E=f?function(e){return e&&j(e)}:function(e){return e&&function(){return O.apply(e,arguments)}})({}.toString),T=E("".slice);w=function(e){return T(M(e),8,-1)};var F=Object,x=E("".split);k=d((function(){return!F("z").propertyIsEnumerable(0)}))?function(e){return"String"==w(e)?x(e,""):F(e)}:F;var H,P;P=function(e){return null==e};var $=TypeError;H=function(e){if(P(e))throw $("Can't call method on "+e);return e},_=function(e){return k(H(e))};var q,I,N,A={},R={},C="object"==typeof document&&document.all,D=(N={all:C,IS_HTMLDDA:void 0===C&&void 0!==C}).all;R=N.IS_HTMLDDA?function(e){return"function"==typeof e||e===D}:function(e){return"function"==typeof e};var z=N.all;A=N.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:R(e)||e===z}:function(e){return"object"==typeof e?null!==e:R(e)};var W,U={},G=function(e){return R(e)?e:void 0};W=function(e,t){return arguments.length<2?G(c[e]):c[e]&&c[e][t]};var B={};B=E({}.isPrototypeOf);var J,V,Y,Q={};Q=W("navigator","userAgent")||"";var K,X,Z=c.process,ee=c.Deno,te=Z&&Z.versions||ee&&ee.version,ne=te&&te.v8;ne&&(X=(K=ne.split("."))[0]>0&&K[0]<4?1:+(K[0]+K[1])),!X&&Q&&(!(K=Q.match(/Edge\/(\d+)/))||K[1]>=74)&&(K=Q.match(/Chrome\/(\d+)/))&&(X=+K[1]),Y=X,V=!!Object.getOwnPropertySymbols&&!d((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Y&&Y<41})),J=V&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var re=Object;U=J?function(e){return"symbol"==typeof e}:function(e){var t=W("Symbol");return R(t)&&B(t.prototype,re(e))};var ie,oe,ae,se=String;ae=function(e){try{return se(e)}catch(e){return"Object"}};var ce=TypeError;oe=function(e){if(R(e))return e;throw ce(ae(e)+" is not a function")},ie=function(e,t){var n=e[t];return P(n)?void 0:oe(n)};var ue,le=TypeError;ue=function(e,t){var n,r;if("string"===t&&R(n=e.toString)&&!A(r=p(n,e)))return r;if(R(n=e.valueOf)&&!A(r=p(n,e)))return r;if("string"!==t&&R(n=e.toString)&&!A(r=p(n,e)))return r;throw le("Can't convert object to primitive value")};var de;var fe,pe={},he=Object.defineProperty;fe=function(e,t){try{he(c,e,{value:t,configurable:!0,writable:!0})}catch(n){c[e]=t}return t};var me=c["__core-js_shared__"]||fe("__core-js_shared__",{});pe=me,(de=function(e,t){return pe[e]||(pe[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.25.3",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.3/LICENSE",source:"https://github.com/zloirock/core-js"});var ve,ge={},ye=Object;ve=function(e){return ye(H(e))};var be=E({}.hasOwnProperty);ge=Object.hasOwn||function(e,t){return be(ve(e),t)};var _e,we=0,ke=Math.random(),Ee=E(1..toString);_e=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Ee(++we+ke,36)};var Se=de("wks"),Le=c.Symbol,Oe=Le&&Le.for,je=J?Le:Le&&Le.withoutSetter||_e,Me=TypeError,Te=function(e){if(!ge(Se,e)||!V&&"string"!=typeof Se[e]){var t="Symbol."+e;V&&ge(Le,e)?Se[e]=Le[e]:Se[e]=J&&Oe?Oe(t):je(t)}return Se[e]}("toPrimitive");I=function(e,t){if(!A(e)||U(e))return e;var n,r=ie(e,Te);if(r){if(void 0===t&&(t="default"),n=p(r,e,t),!A(n)||U(n))return n;throw Me("Can't convert object to primitive value")}return void 0===t&&(t="number"),ue(e,t)},q=function(e){var t=I(e,"string");return U(t)?t:t+""};var Fe,xe,He=c.document,Pe=A(He)&&A(He.createElement);xe=function(e){return Pe?He.createElement(e):{}},Fe=!l&&!d((function(){return 7!=Object.defineProperty(xe("div"),"a",{get:function(){return 7}}).a}));var $e,qe,Ie=Object.getOwnPropertyDescriptor,Ne=s=l?Ie:function(e,t){if(e=_(e),t=q(t),Fe)try{return Ie(e,t)}catch(e){}if(ge(e,t))return b(!p(h,e,t),e[t])},Ae={};qe=l&&d((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Re,Ce=String,De=TypeError;Re=function(e){if(A(e))return e;throw De(Ce(e)+" is not an object")};var ze=TypeError,We=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor;$e=l?qe?function(e,t,n){if(Re(e),t=q(t),Re(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=Ue(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return We(e,t,n)}:We:function(e,t,n){if(Re(e),t=q(t),Re(n),Fe)try{return We(e,t,n)}catch(e){}if("get"in n||"set"in n)throw ze("Accessors not supported");return"value"in n&&(e[t]=n.value),e},Ae=l?function(e,t,n){return $e(e,t,b(1,n))}:function(e,t,n){return e[t]=n,e};var Ge,Be,Je=Function.prototype,Ve=l&&Object.getOwnPropertyDescriptor,Ye=ge(Je,"name"),Qe={EXISTS:Ye,PROPER:Ye&&"something"===function(){}.name,CONFIGURABLE:Ye&&(!l||l&&Ve(Je,"name").configurable)}.CONFIGURABLE,Ke={},Xe=E(Function.toString);R(pe.inspectSource)||(pe.inspectSource=function(e){return Xe(e)}),Ke=pe.inspectSource;var Ze,et,tt=c.WeakMap;et=R(tt)&&/native code/.test(String(tt));var nt,rt=de("keys");nt=function(e){return rt[e]||(rt[e]=_e(e))};var it={};it={};var ot,at,st,ct=c.TypeError,ut=c.WeakMap;if(et||pe.state){var lt=pe.state||(pe.state=new ut),dt=E(lt.get),ft=E(lt.has),pt=E(lt.set);ot=function(e,t){if(ft(lt,e))throw ct("Object already initialized");return t.facade=e,pt(lt,e,t),t},at=function(e){return dt(lt,e)||{}},st=function(e){return ft(lt,e)}}else{var ht=nt("state");it[ht]=!0,ot=function(e,t){if(ge(e,ht))throw ct("Object already initialized");return t.facade=e,Ae(e,ht,t),t},at=function(e){return ge(e,ht)?e[ht]:{}},st=function(e){return ge(e,ht)}}var mt=(Ze={set:ot,get:at,has:st,enforce:function(e){return st(e)?at(e):ot(e,{})},getterFor:function(e){return function(t){var n;if(!A(t)||(n=at(t)).type!==e)throw ct("Incompatible receiver, "+e+" required");return n}}}).enforce,vt=Ze.get,gt=Object.defineProperty,yt=l&&!d((function(){return 8!==gt((function(){}),"length",{value:8}).length})),bt=String(String).split("String"),_t=Be=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!ge(e,"name")||Qe&&e.name!==t)&&(l?gt(e,"name",{value:t,configurable:!0}):e.name=t),yt&&n&&ge(n,"arity")&&e.length!==n.arity&&gt(e,"length",{value:n.arity});try{n&&ge(n,"constructor")&&n.constructor?l&&gt(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=mt(e);return ge(r,"source")||(r.source=bt.join("string"==typeof t?t:"")),e};Function.prototype.toString=_t((function(){return R(this)&&vt(this).source||Ke(this)}),"toString"),Ge=function(e,t,n,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:t;if(R(n)&&Be(n,o,r),r.global)i?e[t]=n:fe(t,n);else{try{r.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=n:$e(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e};var wt,kt,Et,St,Lt,Ot={},jt={},Mt=Math.ceil,Tt=Math.floor;jt=Math.trunc||function(e){var t=+e;return(t>0?Tt:Mt)(t)},Lt=function(e){var t=+e;return t!=t||0===t?0:jt(t)};var Ft=Math.max,xt=Math.min;St=function(e,t){var n=Lt(e);return n<0?Ft(n+t,0):xt(n,t)};var Ht,Pt,$t=Math.min;Pt=function(e){return e>0?$t(Lt(e),9007199254740991):0},Ht=function(e){return Pt(e.length)};var qt=function(e){return function(t,n,r){var i,o=_(t),a=Ht(o),s=St(r,a);if(e&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===n)return e||s||0;return!e&&-1}},It={includes:qt(!0),indexOf:qt(!1)}.indexOf,Nt=E([].push);Et=function(e,t){var n,r=_(e),i=0,o=[];for(n in r)!ge(it,n)&&ge(r,n)&&Nt(o,n);for(;t.length>i;)ge(r,n=t[i++])&&(~It(o,n)||Nt(o,n));return o};var At,Rt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");kt=Object.getOwnPropertyNames||function(e){return Et(e,Rt)},At=Object.getOwnPropertySymbols;var Ct=E([].concat);Ot=W("Reflect","ownKeys")||function(e){var t=kt(Re(e));return At?Ct(t,At(e)):t},wt=function(e,t,n){for(var r=Ot(t),i=$e,o=s,a=0;a<r.length;a++){var c=r[a];ge(e,c)||n&&ge(n,c)||i(e,c,o(t,c))}};var Dt={},zt=/#|\.prototype\./,Wt=function(e,t){var n=Gt[Ut(e)];return n==Jt||n!=Bt&&(R(t)?d(t):!!t)},Ut=Wt.normalize=function(e){return String(e).replace(zt,".").toLowerCase()},Gt=Wt.data={},Bt=Wt.NATIVE="N",Jt=Wt.POLYFILL="P";Dt=Wt,a=function(e,t){var n,r,i,o,a,s=e.target,u=e.global,l=e.stat;if(n=u?c:l?c[s]||fe(s,{}):(c[s]||{}).prototype)for(r in t){if(o=t[r],i=e.dontCallGetSet?(a=Ne(n,r))&&a.value:n[r],!Dt(u?r:s+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;wt(o,i)}(e.sham||i&&i.sham)&&Ae(o,"sham",!0),Ge(n,r,o,e)}};var Vt,Yt={},Qt=Function.prototype,Kt=Qt.apply,Xt=Qt.call;Yt="object"==typeof Reflect&&Reflect.apply||(f?Xt.bind(Kt):function(){return Xt.apply(Kt,arguments)});var Zt,en=E(E.bind);Zt=function(e,t){return oe(e),void 0===t?e:f?en(e,t):function(){return e.apply(t,arguments)}};var tn={};tn=W("document","documentElement");var nn={};nn=E([].slice);var rn,on=TypeError;rn=function(e,t){if(e<t)throw on("Not enough arguments");return e};var an;an=/(?:ipad|iphone|ipod).*applewebkit/i.test(Q);var sn;sn="process"==w(c.process);var cn,un,ln,dn,fn=c.setImmediate,pn=c.clearImmediate,hn=c.process,mn=c.Dispatch,vn=c.Function,gn=c.MessageChannel,yn=c.String,bn=0,_n={};try{cn=c.location}catch(e){}var wn=function(e){if(ge(_n,e)){var t=_n[e];delete _n[e],t()}},kn=function(e){return function(){wn(e)}},En=function(e){wn(e.data)},Sn=function(e){c.postMessage(yn(e),cn.protocol+"//"+cn.host)};fn&&pn||(fn=function(e){rn(arguments.length,1);var t=R(e)?e:vn(e),n=nn(arguments,1);return _n[++bn]=function(){Yt(t,void 0,n)},un(bn),bn},pn=function(e){delete _n[e]},sn?un=function(e){hn.nextTick(kn(e))}:mn&&mn.now?un=function(e){mn.now(kn(e))}:gn&&!an?(dn=(ln=new gn).port2,ln.port1.onmessage=En,un=Zt(dn.postMessage,dn)):c.addEventListener&&R(c.postMessage)&&!c.importScripts&&cn&&"file:"!==cn.protocol&&!d(Sn)?(un=Sn,c.addEventListener("message",En,!1)):un="onreadystatechange"in xe("script")?function(e){tn.appendChild(xe("script")).onreadystatechange=function(){tn.removeChild(this),wn(e)}}:function(e){setTimeout(kn(e),0)});var Ln=(Vt={set:fn,clear:pn}).clear;a({global:!0,bind:!0,enumerable:!0,forced:c.clearImmediate!==Ln},{clearImmediate:Ln});var On=Vt.set;a({global:!0,bind:!0,enumerable:!0,forced:c.setImmediate!==On},{setImmediate:On});const jn=async function(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),i=await Promise.race([r,(n=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]),o=await i.json();if(!i.ok)throw new Error(`${o.message} (${i.status})`);return o}catch(e){}var n},Mn={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[]},Tn=function(e){const{recipe:t}=e.data;return{id:t.id,cookingTime:t.cooking_time,title:t.title,publisher:t.publisher,image:t.image_url,sourceURL:t.source_url,ingredients:t.ingredients,servings:t.servings,...t.key&&{key:t.key}}},Fn=function(e=Mn.search.page){Mn.search.page=e;const t=(e-1)*Mn.search.resultsPerPage,n=e*Mn.search.resultsPerPage;return Mn.search.results.slice(t,n)},xn=function(){localStorage.setItem("bookmarks",JSON.stringify(Mn.bookmarks))},Hn=function(e){Mn.bookmarks.push(e),e.id===Mn.recipe.id&&(Mn.recipe.bookmarked=!0),xn()};!function(){const e=localStorage.getItem("bookmarks");e&&(Mn.bookmarks=JSON.parse(e))}();var Pn,$n,qn,In;Pn=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString(),Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,i=num.split(" ");if(i[0]&&(n=i[0]),i[1]&&(r=i[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var o=n.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(qn=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},In=function(e,t){if(t){var n=Math.pow(10,t);return Math.round(e*n)/n}return Math.round(e)},function(){if(qn(this.denominator)){var e=In(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}qn(this.numerator)&&(e=In(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return r.forEach((function(e){var t=i.indexOf(e);t>=0&&(n.push(e),i.splice(t,1))})),0===n.length?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},$n=Fraction;class Nn{_data;render(e){if(!e||Array.isArray(e)&&!e.length)return this.renderError();this._data=e;const t=this._generateHTML();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}update(e){this._data=e;const t=this._generateHTML(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}renderError(e=this._errorMssg){const t=`\n        <div class="error">\n            <div>\n                <svg>\n                    <use href="${n(Pn)}#icon-alert-triangle"></use>\n                </svg>\n            </div>\n            <p>${e}</p>\n        </div>\n        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._mssg){const t=`\n        <div class="message">\n            <div>\n                <svg>\n                    <use href="${n(Pn)}#icon-smile"></use>\n                </svg>\n            </div>\n            <p>${e}</p>\n        </div>\n        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const e=`\n            <div class="spinner">\n                <svg>\n                    <use href="${n(Pn)}#icon-loader"></use>\n                </svg>\n            </div>\n        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}}var An=new class extends Nn{_parentElement=document.querySelector(".recipe");_errorMssg="We could not find the recipe. Please try another one!";_mssg="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--update-servings");if(!n)return;const r=+n.dataset.updateTo;r<1||e(r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateHTML(){const e=this._data.ingredients.reduce(((e,t)=>e+`\n                <li class="recipe__ingredient">\n                    <svg class="recipe__icon">\n                        <use href="${n(Pn)}#icon-check"></use>\n                    </svg>\n                    <div class="recipe__quantity">${t.quantity?new $n(t.quantity).toString():""}</div>\n                    <div class="recipe__description">\n                        <span class="recipe__unit">${t.unit}</span>\n                        ${t.description}\n                    </div>\n                </li>\n            `),"");return`\n            <figure class="recipe__fig">\n                <img\n                    src="${this._data.image}"\n                    alt="Tomato"\n                    class="recipe__img"\n                />\n                <h1 class="recipe__title">\n                    <span>${this._data.title}</span>\n                </h1>\n            </figure>\n\n            <div class="recipe__details">\n                <div class="recipe__info">\n                    <svg class="recipe__info-icon">\n                        <use href="${n(Pn)}#icon-clock"></use>\n                    </svg>\n                    <span\n                        class="recipe__info-data recipe__info-data--minutes"\n                        >${this._data.cookingTime}</span\n                    >\n                    <span class="recipe__info-text">minutes</span>\n                </div>\n                <div class="recipe__info">\n                    <svg class="recipe__info-icon">\n                        <use href="${n(Pn)}#icon-users"></use>\n                    </svg>\n                    <span\n                        class="recipe__info-data recipe__info-data--people"\n                        >${this._data.servings}</span\n                    >\n                    <span class="recipe__info-text">servings</span>\n\n                    <div class="recipe__info-buttons">\n                        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n                            <svg>\n                                <use\n                                    href="${n(Pn)}#icon-minus-circle"\n                                ></use>\n                            </svg>\n                        </button>\n                        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n                            <svg>\n                                <use\n                                    href="${n(Pn)}#icon-plus-circle"\n                                ></use>\n                            </svg>\n                        </button>\n                    </div>\n                </div>\n\n                <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n                    <svg>\n                        <use href="${n(Pn)}#icon-user"></use>\n                    </svg>\n                </div>\n                <button class="btn--round btn--bookmark">\n                    <svg class="">\n                        <use\n                            href="${n(Pn)}#icon-bookmark${this._data.bookmarked?"-fill":""}"\n                        ></use>\n                    </svg>\n                </button>\n            </div>\n\n            <div class="recipe__ingredients">\n                <h2 class="heading--2">Recipe ingredients</h2>\n                <ul class="recipe__ingredient-list">\n                    ${e}\n                </ul>\n            </div>\n\n            <div class="recipe__directions">\n                <h2 class="heading--2">How to cook it</h2>\n                <p class="recipe__directions-text">\n                    This recipe was carefully designed and tested by\n                    <span class="recipe__publisher">${this._data.publisher}</span\n                    >. Please check out directions at their website.\n                </p>\n                <a\n                    class="btn--small recipe__btn"\n                    href="${this._data.sourceURL}"\n                    target="_blank"\n                >\n                    <span>Directions</span>\n                    <svg class="search__icon">\n                        <use\n                            href="${n(Pn)}#icon-arrow-right"\n                        ></use>\n                    </svg>\n                </a>\n            </div>\n        `}};var Rn=new class{#e=document.querySelector(".search");getQuery(){const e=this.#e.querySelector(".search__field").value;return this.#t(),e}#t(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var Cn=new class extends Nn{_parentElement="";generateHTML(e){const t=window.location.hash.slice(1);return e.reduce(((e,r)=>e+`\n            <li class="preview">\n                <a class="preview__link ${r.id===t?"preview__link--active":""}" href="#${r.id}">\n                    <figure class="preview__fig">\n                        <img src="${r.image}" alt="${r.title}"/>\n                    </figure>\n                    <div class="preview__data">\n                        <h4 class="preview__title">${r.title}</h4>\n                        <p class="preview__publisher">${r.publisher}</p>\n                        <div class="preview__user-generated ${r.key?"":"hidden"}">\n                            <svg>\n                                <use href="${n(Pn)}#icon-user"></use>\n                            </svg>\n                        </div>\n                    </div>\n                </a>\n            </li>\n            `),"")}};var Dn=new class extends Nn{_parentElement=document.querySelector(".results");_errorMssg="No recipes found for your query! Please try again ;)";_mssg="";_generateHTML(){return Cn.generateHTML(this._data)}};var zn=new class extends Nn{_parentElement=document.querySelector(".bookmarks__list");_errorMssg="No bookmarks yet! find a nice recipe and bookmark it ;)";_mssg="";addHandlerRender(e){window.addEventListener("load",e)}_generateHTML(){return Cn.generateHTML(this._data)}};var Wn=new class extends Nn{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}_generateHTML(){const e=Math.ceil(this._data.results.length/this._data.resultsPerPage),t=this._data.page;return 1===t&&e>1?this.nextBtnHTML(t):t===e?this.prevBtnHTML(t):t<e?this.prevBtnHTML(t)+this.nextBtnHTML(t):""}prevBtnHTML(e){return`\n            <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n                <svg class="search__icon">\n                    <use href="${n(Pn)}#icon-arrow-left"></use>\n                </svg>\n                <span>Page ${e-1}</span>\n            </button>\n        `}nextBtnHTML(e){return`\n            <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n            <span>Page ${e+1}</span>  \n                <svg class="search__icon">\n                    <use href="${n(Pn)}#icon-arrow-right"></use>\n                </svg>\n            </button>\n        `}};var Un=new class extends Nn{_parentElement=document.querySelector(".upload");_mssg="Recipe was successfully uploaded ;)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_generateHTML(){}},Gn=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,o=Object.create(i.prototype),a=new M(r||[]);return o._invoke=function(e,t,n){var r=d;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return F()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=L(a,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?h:f,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(e,n,a),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",m={};function v(){}function g(){}function y(){}var b={};c(b,o,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(T([])));w&&w!==n&&r.call(w,o)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,o,a,s){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function L(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,L(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function T(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:F}}function F(){return{value:t,done:!0}}return g.prototype=y,c(k,"constructor",y),c(y,"constructor",g),g.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new S(u(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),c(k,s,"Generator"),c(k,o,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=T,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;j(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:T(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}({});try{regeneratorRuntime=Gn}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=Gn:Function("r","regeneratorRuntime = r")(Gn)}const Bn=async function(){try{const e=window.location.hash.slice(1);if(!e)return;An.renderSpinner(),Dn.update(Fn()),zn.update(Mn.bookmarks),await async function(e){try{const t=await jn(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=15709f28-8832-48ad-a1d1-6f7f50aa76aa`);Mn.recipe=Tn(t),Mn.recipe.bookmarked=!0,Mn.bookmarks.some((t=>t.id===e))||(Mn.recipe.bookmarked=!1)}catch(e){throw e}}(e),An.render(Mn.recipe)}catch(e){An.renderError()}},Jn=async function(){try{const e=Rn.getQuery();if(!e)return;Dn.renderSpinner(),await async function(e){try{const t=await jn(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=15709f28-8832-48ad-a1d1-6f7f50aa76aa`);Mn.search.query=e,Mn.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})))}catch(e){throw e}}(e),Dn.render(Fn(1)),Wn.render(Mn.search)}catch(e){console.log(e)}},Vn=function(e){Dn.render(Fn(e)),Wn.render(Mn.search)},Yn=function(e){!function(e){Mn.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/Mn.recipe.servings})),Mn.recipe.servings=e}(e),An.update(Mn.recipe)},Qn=function(){Mn.recipe.bookmarked?function(e){const t=Mn.bookmarks.findIndex((t=>t.id===e));Mn.bookmarks.splice(t,1),e===Mn.recipe.id&&(Mn.recipe.bookmarked=!1),xn()}(Mn.recipe.id):Hn(Mn.recipe),An.update(Mn.recipe),zn.render(Mn.bookmarks)},Kn=function(){zn.render(Mn.bookmarks)},Xn=async function(e){try{Un.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((([e,t])=>e.startsWith("ingredient")&&t.trim())).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient format! Please, use the right format ;)");const[n,r,i]=t;return{quantity:n?+n:null,unit:r,description:i}})),n={title:e.title,source_url:e.sourceUrl,publisher:e.publisher,image_url:e.image,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await jn("https://forkify-api.herokuapp.com/api/v2/recipes/?key=15709f28-8832-48ad-a1d1-6f7f50aa76aa",n);Mn.recipe=Tn(r),Hn(Mn.recipe)}catch(e){throw e}}(e),console.log(Mn.recipe),An.render(Mn.recipe),Un.renderMessage(),zn.render(Mn.bookmarks),window.history.pushState(null,"",`#${Mn.recipe.id}`),setTimeout((function(){Un.toggleWindow()}),2500)}catch(e){Un.renderError(e.message)}};zn.addHandlerRender(Kn),An.addHandlerRender(Bn),An.addHandlerUpdateServings(Yn),An.addHandlerAddBookmark(Qn),Rn.addHandlerSearch(Jn),Wn.addHandlerClick(Vn),Un.addHandlerUpload(Xn);
//# sourceMappingURL=index.d3c7befa.js.map
