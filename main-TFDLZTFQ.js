import{a as Y,b as X}from"./chunk-WISIEFKN.js";import{m as Q,p as N}from"./chunk-6UUACAAG.js";import{a as W,d as J,e as K}from"./chunk-W7BO2QDV.js";import{b as Z,c as G,j as V}from"./chunk-RXM35BDU.js";import{Sa as q,V as D,_ as I,a as w,b as H,fb as F,ob as U}from"./chunk-BWLHFH2N.js";var ee=[{path:"",loadComponent:()=>import("./chunk-3QKZJX2H.js"),children:[{path:"",loadComponent:()=>import("./chunk-YPGOVTHS.js")},{path:"about",loadComponent:()=>import("./chunk-O52CDOFM.js")},{path:"faq",loadComponent:()=>import("./chunk-ZLVZP4YI.js")},{path:"contact",loadComponent:()=>import("./chunk-POZX4TYW.js")},{path:"services",loadComponent:()=>import("./chunk-JIN5IQ2M.js")},{path:"services/rotational-molding",loadComponent:()=>import("./chunk-WOOH7RTG.js")},{path:"services/shipping",loadComponent:()=>import("./chunk-XHW5IMEB.js")},{path:"services/post-processing",loadComponent:()=>import("./chunk-AVMWDAVZ.js")},{path:"services/foam-insulation",loadComponent:()=>import("./chunk-LZBJ7755.js")},{path:"services/rubber-extrusion",loadComponent:()=>import("./chunk-PZARM34N.js")},{path:"services/compounding",loadComponent:()=>import("./chunk-OTPRFXQD.js")},{path:"services/silicone-hose-wrapping",loadComponent:()=>import("./chunk-T7PAOQAP.js")},{path:"services/rubber-molding",loadComponent:()=>import("./chunk-VOWTNZGE.js")},{path:"services/other-services",loadComponent:()=>import("./chunk-JAPL4HQV.js")},{path:"engineers",loadComponent:()=>import("./chunk-2XUVJ6W2.js")},{path:"privacy-policy",loadComponent:()=>import("./chunk-5T6WRJPU.js")},{path:"terms-condition",loadComponent:()=>import("./chunk-BORVADTY.js")}]},{path:"**",redirectTo:""}];var ie={providers:[I(N),{provide:Q,useValue:"6Lcb9mgqAAAAALONUOfJU5vsizrsnaRAPy1Kr8tN"},U({eventCoalescing:!0}),J(ee,K({anchorScrolling:"enabled",scrollPositionRestoration:"top"})),{provide:Z,useClass:G}]};var b=class b{constructor(){this.title="rotomold18"}};b.\u0275fac=function(r){return new(r||b)},b.\u0275cmp=D({type:b,selectors:[["app-root"]],hostAttrs:[1,"block"],standalone:!0,features:[F],decls:1,vars:0,template:function(r,e){r&1&&q(0,"router-outlet")},dependencies:[W],encapsulation:2});var S=b;var h=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function f(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function C(t,i){let r=["__proto__","constructor","prototype"];Object.keys(i).filter(e=>r.indexOf(e)<0).forEach(e=>{typeof t[e]>"u"?t[e]=i[e]:f(i[e])&&f(t[e])&&Object.keys(i[e]).length>0?i[e].__swiper__?t[e]=i[e]:C(t[e],i[e]):t[e]=i[e]})}function te(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function re(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function se(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function v(t){return t===void 0&&(t=""),t.replace(/-[a-z]/g,i=>i.toUpperCase().replace("-",""))}function oe(t){let{swiper:i,slides:r,passedParams:e,changedParams:s,nextEl:l,prevEl:p,scrollbarEl:d,paginationEl:a}=t,u=s.filter(n=>n!=="children"&&n!=="direction"&&n!=="wrapperClass"),{params:o,pagination:c,navigation:m,scrollbar:y,virtual:g,thumbs:L}=i,O,E,j,T,M,R,$,x;s.includes("thumbs")&&e.thumbs&&e.thumbs.swiper&&o.thumbs&&!o.thumbs.swiper&&(O=!0),s.includes("controller")&&e.controller&&e.controller.control&&o.controller&&!o.controller.control&&(E=!0),s.includes("pagination")&&e.pagination&&(e.pagination.el||a)&&(o.pagination||o.pagination===!1)&&c&&!c.el&&(j=!0),s.includes("scrollbar")&&e.scrollbar&&(e.scrollbar.el||d)&&(o.scrollbar||o.scrollbar===!1)&&y&&!y.el&&(T=!0),s.includes("navigation")&&e.navigation&&(e.navigation.prevEl||p)&&(e.navigation.nextEl||l)&&(o.navigation||o.navigation===!1)&&m&&!m.prevEl&&!m.nextEl&&(M=!0);let B=n=>{i[n]&&(i[n].destroy(),n==="navigation"?(i.isElement&&(i[n].prevEl.remove(),i[n].nextEl.remove()),o[n].prevEl=void 0,o[n].nextEl=void 0,i[n].prevEl=void 0,i[n].nextEl=void 0):(i.isElement&&i[n].el.remove(),o[n].el=void 0,i[n].el=void 0))};s.includes("loop")&&i.isElement&&(o.loop&&!e.loop?R=!0:!o.loop&&e.loop?$=!0:x=!0),u.forEach(n=>{if(f(o[n])&&f(e[n]))Object.assign(o[n],e[n]),(n==="navigation"||n==="pagination"||n==="scrollbar")&&"enabled"in e[n]&&!e[n].enabled&&B(n);else{let P=e[n];(P===!0||P===!1)&&(n==="navigation"||n==="pagination"||n==="scrollbar")?P===!1&&B(n):o[n]=e[n]}}),u.includes("controller")&&!E&&i.controller&&i.controller.control&&o.controller&&o.controller.control&&(i.controller.control=o.controller.control),s.includes("children")&&r&&g&&o.virtual.enabled?(g.slides=r,g.update(!0)):s.includes("virtual")&&g&&o.virtual.enabled&&(r&&(g.slides=r),g.update(!0)),s.includes("children")&&r&&o.loop&&(x=!0),O&&L.init()&&L.update(!0),E&&(i.controller.control=o.controller.control),j&&(i.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-pagination"),a.part.add("pagination"),i.el.appendChild(a)),a&&(o.pagination.el=a),c.init(),c.render(),c.update()),T&&(i.isElement&&(!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-scrollbar"),d.part.add("scrollbar"),i.el.appendChild(d)),d&&(o.scrollbar.el=d),y.init(),y.updateSize(),y.setTranslate()),M&&(i.isElement&&((!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-next"),l.innerHTML=i.hostEl.constructor.nextButtonSvg,l.part.add("button-next"),i.el.appendChild(l)),(!p||typeof p=="string")&&(p=document.createElement("div"),p.classList.add("swiper-button-prev"),p.innerHTML=i.hostEl.constructor.prevButtonSvg,p.part.add("button-prev"),i.el.appendChild(p))),l&&(o.navigation.nextEl=l),p&&(o.navigation.prevEl=p),m.init(),m.update()),s.includes("allowSlideNext")&&(i.allowSlideNext=e.allowSlideNext),s.includes("allowSlidePrev")&&(i.allowSlidePrev=e.allowSlidePrev),s.includes("direction")&&i.changeDirection(e.direction,!1),(R||x)&&i.loopDestroy(),($||x)&&i.loopCreate(),i.update()}var ne=t=>{if(parseFloat(t)===Number(t))return Number(t);if(t==="true"||t==="")return!0;if(t==="false")return!1;if(t==="null")return null;if(t!=="undefined"){if(typeof t=="string"&&t.includes("{")&&t.includes("}")&&t.includes('"')){let i;try{i=JSON.parse(t)}catch{i=t}return i}return t}},ae=["a11y","autoplay","controller","cards-effect","coverflow-effect","creative-effect","cube-effect","fade-effect","flip-effect","free-mode","grid","hash-navigation","history","keyboard","mousewheel","navigation","pagination","parallax","scrollbar","thumbs","virtual","zoom"];function _(t,i,r){let e={},s={};C(e,Y);let l=[...h,"on"],p=l.map(a=>a.replace(/_/,""));l.forEach(a=>{a=a.replace("_",""),typeof t[a]<"u"&&(s[a]=t[a])});let d=[...t.attributes];return typeof i=="string"&&typeof r<"u"&&d.push({name:i,value:f(r)?w({},r):r}),d.forEach(a=>{let u=ae.filter(o=>a.name.indexOf(`${o}-`)===0)[0];if(u){let o=v(u),c=v(a.name.split(`${u}-`)[1]);typeof s[o]>"u"&&(s[o]={}),s[o]===!0&&(s[o]={enabled:!0}),s[o][c]=ne(a.value)}else{let o=v(a.name);if(!p.includes(o))return;let c=ne(a.value);s[o]&&ae.includes(a.name)&&!f(c)?(s[o].constructor!==Object&&(s[o]={}),s[o].enabled=!!c):s[o]=c}}),C(e,s),e.navigation?e.navigation=w({prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},e.navigation!==!0?e.navigation:{}):e.navigation===!1&&delete e.navigation,e.scrollbar?e.scrollbar=w({el:".swiper-scrollbar"},e.scrollbar!==!0?e.scrollbar:{}):e.scrollbar===!1&&delete e.scrollbar,e.pagination?e.pagination=w({el:".swiper-pagination"},e.pagination!==!0?e.pagination:{}):e.pagination===!1&&delete e.pagination,{params:e,passedParams:s}}var we=":host{--swiper-theme-color:#007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{width:100%;height:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next svg,.swiper-button-prev svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}",ue="::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}::slotted(.swiper-slide-shadow){background:rgba(0,0,0,.15)}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear;width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-zoom-container){width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-width:100%;max-height:100%;object-fit:contain}",k=class{},pe=typeof window>"u"||typeof HTMLElement>"u"?k:HTMLElement,le=`<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>
    `,de=(t,i)=>{if(typeof CSSStyleSheet<"u"&&t.adoptedStyleSheets){let r=new CSSStyleSheet;r.replaceSync(i),t.adoptedStyleSheets=[r]}else{let r=document.createElement("style");r.rel="stylesheet",r.textContent=i,t.appendChild(r)}},z=class extends pe{constructor(){super(),this.attachShadow({mode:"open"})}static get nextButtonSvg(){return le}static get prevButtonSvg(){return le.replace("/></svg>",' transform-origin="center" transform="rotate(180)"/></svg>')}cssStyles(){return[we,...this.injectStyles&&Array.isArray(this.injectStyles)?this.injectStyles:[]].join(`
`)}cssLinks(){return this.injectStylesUrls||[]}calcSlideSlots(){let i=this.slideSlots||0,r=[...this.querySelectorAll("[slot^=slide-]")].map(e=>parseInt(e.getAttribute("slot").split("slide-")[1],10));if(this.slideSlots=r.length?Math.max(...r)+1:0,!!this.rendered){if(this.slideSlots>i)for(let e=i;e<this.slideSlots;e+=1){let s=document.createElement("swiper-slide");s.setAttribute("part",`slide slide-${e+1}`);let l=document.createElement("slot");l.setAttribute("name",`slide-${e+1}`),s.appendChild(l),this.shadowRoot.querySelector(".swiper-wrapper").appendChild(s)}else if(this.slideSlots<i){let e=this.swiper.slides;for(let s=e.length-1;s>=0;s-=1)s>this.slideSlots&&e[s].remove()}}}render(){if(this.rendered)return;this.calcSlideSlots();let i=this.cssStyles();this.slideSlots>0&&(i=i.replace(/::slotted\(([a-z-0-9.]*)\)/g,"$1")),i.length&&de(this.shadowRoot,i),this.cssLinks().forEach(e=>{if(this.shadowRoot.querySelector(`link[href="${e}"]`))return;let l=document.createElement("link");l.rel="stylesheet",l.href=e,this.shadowRoot.appendChild(l)});let r=document.createElement("div");r.classList.add("swiper"),r.part="container",r.innerHTML=`
      <slot name="container-start"></slot>
      <div class="swiper-wrapper" part="wrapper">
        <slot></slot>
        ${Array.from({length:this.slideSlots}).map((e,s)=>`
        <swiper-slide part="slide slide-${s}">
          <slot name="slide-${s}"></slot>
        </swiper-slide>
        `).join("")}
      </div>
      <slot name="container-end"></slot>
      ${te(this.passedParams)?`
        <div part="button-prev" class="swiper-button-prev">${this.constructor.prevButtonSvg}</div>
        <div part="button-next" class="swiper-button-next">${this.constructor.nextButtonSvg}</div>
      `:""}
      ${re(this.passedParams)?`
        <div part="pagination" class="swiper-pagination"></div>
      `:""}
      ${se(this.passedParams)?`
        <div part="scrollbar" class="swiper-scrollbar"></div>
      `:""}
    `,this.shadowRoot.appendChild(r),this.rendered=!0}initialize(){var i=this;if(this.initialized)return;this.initialized=!0;let{params:r,passedParams:e}=_(this);this.swiperParams=r,this.passedParams=e,delete this.swiperParams.init,this.render(),this.swiper=new X(this.shadowRoot.querySelector(".swiper"),H(w(w({},r.virtual?{}:{observer:!0}),r),{touchEventsTarget:"container",onAny:function(s){s==="observerUpdate"&&i.calcSlideSlots();let l=r.eventsPrefix?`${r.eventsPrefix}${s.toLowerCase()}`:s.toLowerCase();for(var p=arguments.length,d=new Array(p>1?p-1:0),a=1;a<p;a++)d[a-1]=arguments[a];let u=new CustomEvent(l,{detail:d,bubbles:s!=="hashChange",cancelable:!0});i.dispatchEvent(u)}}))}connectedCallback(){this.initialized&&this.nested&&this.closest("swiper-slide")&&this.closest("swiper-slide").swiperLoopMoveDOM||this.init===!1||this.getAttribute("init")==="false"||this.initialize()}disconnectedCallback(){this.nested&&this.closest("swiper-slide")&&this.closest("swiper-slide").swiperLoopMoveDOM||(this.swiper&&this.swiper.destroy&&this.swiper.destroy(),this.initialized=!1)}updateSwiperOnPropChange(i,r){let{params:e,passedParams:s}=_(this,i,r);this.passedParams=s,this.swiperParams=e,!(this.swiper&&this.swiper.params[i]===r)&&oe(w(w(w({swiper:this.swiper,passedParams:this.passedParams,changedParams:[v(i)]},i==="navigation"&&s[i]?{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"}:{}),i==="pagination"&&s[i]?{paginationEl:".swiper-pagination"}:{}),i==="scrollbar"&&s[i]?{scrollbarEl:".swiper-scrollbar"}:{}))}attributeChangedCallback(i,r,e){this.initialized&&(r==="true"&&e===null&&(e=!1),this.updateSwiperOnPropChange(i,e))}static get observedAttributes(){return h.filter(r=>r.includes("_")).map(r=>r.replace(/[A-Z]/g,e=>`-${e}`).replace("_","").toLowerCase())}};h.forEach(t=>{t!=="init"&&(t=t.replace("_",""),Object.defineProperty(z.prototype,t,{configurable:!0,get(){return(this.passedParams||{})[t]},set(i){this.passedParams||(this.passedParams={}),this.passedParams[t]=i,this.initialized&&this.updateSwiperOnPropChange(t,i)}}))});var A=class extends pe{constructor(){super(),this.attachShadow({mode:"open"})}render(){let i=this.lazy||this.getAttribute("lazy")===""||this.getAttribute("lazy")==="true";if(de(this.shadowRoot,ue),this.shadowRoot.appendChild(document.createElement("slot")),i){let r=document.createElement("div");r.classList.add("swiper-lazy-preloader"),r.part.add("preloader"),this.shadowRoot.appendChild(r)}}initialize(){this.render()}connectedCallback(){this.initialize()}},ce=()=>{typeof window>"u"||(window.customElements.get("swiper-container")||window.customElements.define("swiper-container",z),window.customElements.get("swiper-slide")||window.customElements.define("swiper-slide",A))};typeof window<"u"&&(window.SwiperElementRegisterParams=t=>{h.push(...t)});ce();V(S,ie).catch(t=>console.error(t));