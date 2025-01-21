import{a as T,b as Y,c as q,d as l,g as W,k as X,m as P,o as J}from"./chunk-Q5TS6JU6.js";import{Ba as z,N as b,P as h,S as O,U as u,V as B,W as m,a as A,b as F,ba as V,ma as y,na as I,pa as $,qa as N,ra as Z,sa as g,ta as L,ub as G,vb as K,xa as v}from"./chunk-LSJJQP63.js";var _=class extends q{constructor(){super(...arguments),this.supportsDOMEvents=!0}},j=class s extends _{static makeCurrent(){Y(new s)}onAndCancel(t,o,e){return t.addEventListener(o,e),()=>{t.removeEventListener(o,e)}}dispatchEvent(t,o){t.dispatchEvent(o)}remove(t){t.remove()}createElement(t,o){return o=o||this.getDefaultDocument(),o.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,o){return o==="window"?window:o==="document"?t:o==="body"?t.body:null}getBaseHref(t){let o=ae();return o==null?null:ce(o)}resetBaseElement(){E=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return W(document.cookie,t)}},E=null;function ae(){return E=E||document.querySelector("base"),E?E.getAttribute("href"):null}function ce(s){return new URL(s,document.baseURI).pathname}var ue=(()=>{let t=class t{build(){return new XMLHttpRequest}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=h({token:t,factory:t.\u0275fac});let s=t;return s})(),D=new O(""),ne=(()=>{let t=class t{constructor(e,n){this._zone=n,this._eventNameToPlugin=new Map,e.forEach(r=>{r.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,r){return this._findPluginFor(n).addEventListener(e,n,r)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(i=>i.supports(e)),!n)throw new b(5101,!1);return this._eventNameToPlugin.set(e,n),n}};t.\u0275fac=function(n){return new(n||t)(u(D),u(y))},t.\u0275prov=h({token:t,factory:t.\u0275fac});let s=t;return s})(),S=class{constructor(t){this._doc=t}},H="ng-app-id",re=(()=>{let t=class t{constructor(e,n,r,i={}){this.doc=e,this.appId=n,this.nonce=r,this.platformId=i,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=P(i),this.resetHostNodes()}addStyles(e){for(let n of e)this.changeUsageCount(n,1)===1&&this.onStyleAdded(n)}removeStyles(e){for(let n of e)this.changeUsageCount(n,-1)<=0&&this.onStyleRemoved(n)}ngOnDestroy(){let e=this.styleNodesInDOM;e&&(e.forEach(n=>n.remove()),e.clear());for(let n of this.getAllStyles())this.onStyleRemoved(n);this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(let n of this.getAllStyles())this.addStyleToHost(e,n)}removeHost(e){this.hostNodes.delete(e)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(e){for(let n of this.hostNodes)this.addStyleToHost(n,e)}onStyleRemoved(e){let n=this.styleRef;n.get(e)?.elements?.forEach(r=>r.remove()),n.delete(e)}collectServerRenderedStyles(){let e=this.doc.head?.querySelectorAll(`style[${H}="${this.appId}"]`);if(e?.length){let n=new Map;return e.forEach(r=>{r.textContent!=null&&n.set(r.textContent,r)}),n}return null}changeUsageCount(e,n){let r=this.styleRef;if(r.has(e)){let i=r.get(e);return i.usage+=n,i.usage}return r.set(e,{usage:n,elements:[]}),n}getStyleElement(e,n){let r=this.styleNodesInDOM,i=r?.get(n);if(i?.parentNode===e)return r.delete(n),i.removeAttribute(H),i;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=n,this.platformIsServer&&a.setAttribute(H,this.appId),e.appendChild(a),a}}addStyleToHost(e,n){let r=this.getStyleElement(e,n),i=this.styleRef,a=i.get(n)?.elements;a?a.push(r):i.set(n,{elements:[r],usage:1})}resetHostNodes(){let e=this.hostNodes;e.clear(),e.add(this.doc.head)}};t.\u0275fac=function(n){return new(n||t)(u(l),u(N),u(L,8),u(g))},t.\u0275prov=h({token:t,factory:t.\u0275fac});let s=t;return s})(),k={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},U=/%COMP%/g,oe="%COMP%",de=`_nghost-${oe}`,le=`_ngcontent-${oe}`,fe=!0,he=new O("",{providedIn:"root",factory:()=>fe});function pe(s){return le.replace(U,s)}function me(s){return de.replace(U,s)}function se(s,t){return t.map(o=>o.replace(U,s))}var Q=(()=>{let t=class t{constructor(e,n,r,i,a,c,d,f=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=i,this.doc=a,this.platformId=c,this.ngZone=d,this.nonce=f,this.rendererByCompId=new Map,this.platformIsServer=P(c),this.defaultRenderer=new w(e,a,d,this.platformIsServer)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===m.ShadowDom&&(n=F(A({},n),{encapsulation:m.Emulated}));let r=this.getOrCreateRenderer(e,n);return r instanceof R?r.applyToHost(e):r instanceof M&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,i=r.get(n.id);if(!i){let a=this.doc,c=this.ngZone,d=this.eventManager,f=this.sharedStylesHost,p=this.removeStylesOnCompDestroy,C=this.platformIsServer;switch(n.encapsulation){case m.Emulated:i=new R(d,f,n,this.appId,p,a,c,C);break;case m.ShadowDom:return new x(d,f,e,n,a,c,this.nonce,C);default:i=new M(d,f,n,p,a,c,C);break}r.set(n.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}};t.\u0275fac=function(n){return new(n||t)(u(ne),u(re),u(N),u(he),u(l),u(g),u(y),u(L))},t.\u0275prov=h({token:t,factory:t.\u0275fac});let s=t;return s})(),w=class{constructor(t,o,e,n){this.eventManager=t,this.doc=o,this.ngZone=e,this.platformIsServer=n,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(t,o){return o?this.doc.createElementNS(k[o]||o,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,o){(ee(t)?t.content:t).appendChild(o)}insertBefore(t,o,e){t&&(ee(t)?t.content:t).insertBefore(o,e)}removeChild(t,o){o.remove()}selectRootElement(t,o){let e=typeof t=="string"?this.doc.querySelector(t):t;if(!e)throw new b(-5104,!1);return o||(e.textContent=""),e}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,o,e,n){if(n){o=n+":"+o;let r=k[n];r?t.setAttributeNS(r,o,e):t.setAttribute(o,e)}else t.setAttribute(o,e)}removeAttribute(t,o,e){if(e){let n=k[e];n?t.removeAttributeNS(n,o):t.removeAttribute(`${e}:${o}`)}else t.removeAttribute(o)}addClass(t,o){t.classList.add(o)}removeClass(t,o){t.classList.remove(o)}setStyle(t,o,e,n){n&(v.DashCase|v.Important)?t.style.setProperty(o,e,n&v.Important?"important":""):t.style[o]=e}removeStyle(t,o,e){e&v.DashCase?t.style.removeProperty(o):t.style[o]=""}setProperty(t,o,e){t!=null&&(t[o]=e)}setValue(t,o){t.nodeValue=o}listen(t,o,e){if(typeof t=="string"&&(t=T().getGlobalEventTarget(this.doc,t),!t))throw new Error(`Unsupported event target ${t} for event ${o}`);return this.eventManager.addEventListener(t,o,this.decoratePreventDefault(e))}decoratePreventDefault(t){return o=>{if(o==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(o)):t(o))===!1&&o.preventDefault()}}};function ee(s){return s.tagName==="TEMPLATE"&&s.content!==void 0}var x=class extends w{constructor(t,o,e,n,r,i,a,c){super(t,r,i,c),this.sharedStylesHost=o,this.hostEl=e,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let d=se(n.id,n.styles);for(let f of d){let p=document.createElement("style");a&&p.setAttribute("nonce",a),p.textContent=f,this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,o){return super.appendChild(this.nodeOrShadowRoot(t),o)}insertBefore(t,o,e){return super.insertBefore(this.nodeOrShadowRoot(t),o,e)}removeChild(t,o){return super.removeChild(null,o)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},M=class extends w{constructor(t,o,e,n,r,i,a,c){super(t,r,i,a),this.sharedStylesHost=o,this.removeStylesOnCompDestroy=n,this.styles=c?se(c,e.styles):e.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},R=class extends M{constructor(t,o,e,n,r,i,a,c){let d=n+"-"+e.id;super(t,o,e,r,i,a,c,d),this.contentAttr=pe(d),this.hostAttr=me(d)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,o){let e=super.createElement(t,o);return super.setAttribute(e,this.contentAttr,""),e}},ye=(()=>{let t=class t extends S{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r){return e.addEventListener(n,r,!1),()=>this.removeEventListener(e,n,r)}removeEventListener(e,n,r){return e.removeEventListener(n,r)}};t.\u0275fac=function(n){return new(n||t)(u(l))},t.\u0275prov=h({token:t,factory:t.\u0275fac});let s=t;return s})(),ge=(()=>{let t=class t extends S{constructor(e){super(e),this.delegate=B(K,{optional:!0})}supports(e){return this.delegate?this.delegate.supports(e):!1}addEventListener(e,n,r){return this.delegate.addEventListener(e,n,r)}removeEventListener(e,n,r){return this.delegate.removeEventListener(e,n,r)}};t.\u0275fac=function(n){return new(n||t)(u(l))},t.\u0275prov=h({token:t,factory:t.\u0275fac});let s=t;return s})(),te=["alt","control","meta","shift"],ve={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Ee={alt:s=>s.altKey,control:s=>s.ctrlKey,meta:s=>s.metaKey,shift:s=>s.shiftKey},Se=(()=>{let t=class t extends S{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r){let i=t.parseEventName(n),a=t.eventCallback(i.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>T().onAndCancel(e,i.domEventName,a))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let i=t._normalizeKey(n.pop()),a="",c=n.indexOf("code");if(c>-1&&(n.splice(c,1),a="code."),te.forEach(f=>{let p=n.indexOf(f);p>-1&&(n.splice(p,1),a+=f+".")}),a+=i,n.length!=0||i.length===0)return null;let d={};return d.domEventName=r,d.fullKey=a,d}static matchEventFullKeyCode(e,n){let r=ve[e.key]||e.key,i="";return n.indexOf("code.")>-1&&(r=e.code,i="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),te.forEach(a=>{if(a!==r){let c=Ee[a];c(e)&&(i+=a+".")}}),i+=r,i===n)}static eventCallback(e,n,r){return i=>{t.matchEventFullKeyCode(i,e)&&r.runGuarded(()=>n(i))}}static _normalizeKey(e){return e==="esc"?"escape":e}};t.\u0275fac=function(n){return new(n||t)(u(l))},t.\u0275prov=h({token:t,factory:t.\u0275fac});let s=t;return s})();function ht(s,t){return G(A({rootComponent:s},we(t)))}function we(s){return{appProviders:[...Ce,...s?.providers??[]],platformProviders:Re}}function Me(){j.makeCurrent()}function Te(){return new I}function De(){return $(document),document}var Re=[{provide:g,useValue:X},{provide:Z,useValue:Me,multi:!0},{provide:l,useFactory:De,deps:[]}];var Ce=[{provide:V,useValue:"root"},{provide:I,useFactory:Te,deps:[]},{provide:D,useClass:ye,multi:!0,deps:[l,y,g]},{provide:D,useClass:Se,multi:!0,deps:[l]},{provide:D,useClass:ge,multi:!0},Q,re,ne,{provide:z,useExisting:Q},{provide:J,useClass:ue,deps:[]},[]];var pt=(()=>{let t=class t{constructor(e){this._doc=e,this._dom=T()}addTag(e,n=!1){return e?this._getOrCreateElement(e,n):null}addTags(e,n=!1){return e?e.reduce((r,i)=>(i&&r.push(this._getOrCreateElement(i,n)),r),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];let n=this._doc.querySelectorAll(`meta[${e}]`);return n?[].slice.call(n):[]}updateTag(e,n){if(!e)return null;n=n||this._parseSelector(e);let r=this.getTag(n);return r?this._setMetaElementAttributes(e,r):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,n=!1){if(!n){let a=this._parseSelector(e),c=this.getTags(a).filter(d=>this._containsAttributes(e,d))[0];if(c!==void 0)return c}let r=this._dom.createElement("meta");return this._setMetaElementAttributes(e,r),this._doc.getElementsByTagName("head")[0].appendChild(r),r}_setMetaElementAttributes(e,n){return Object.keys(e).forEach(r=>n.setAttribute(this._getMetaKeyMap(r),e[r])),n}_parseSelector(e){let n=e.name?"name":"property";return`${n}="${e[n]}"`}_containsAttributes(e,n){return Object.keys(e).every(r=>n.getAttribute(this._getMetaKeyMap(r))===e[r])}_getMetaKeyMap(e){return Ae[e]||e}};t.\u0275fac=function(n){return new(n||t)(u(l))},t.\u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})(),Ae={httpEquiv:"http-equiv"},mt=(()=>{let t=class t{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}};t.\u0275fac=function(n){return new(n||t)(u(l))},t.\u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();export{ht as a,pt as b,mt as c};
