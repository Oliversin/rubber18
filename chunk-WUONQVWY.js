import{b as S}from"./chunk-HLPURMAN.js";import{La as n,Qa as c,Ra as m,Sa as w,Ta as o,Ua as a,Va as f,X as l,ib as u,ua as d,ya as s}from"./chunk-LSJJQP63.js";function P(p,r){if(p&1&&(o(0,"swiper-slide",1),f(1,"img",2),a()),p&2){let e=r.$implicit;s(),n("src",e,d)}}var i=class i{constructor(){this.images=[];this.effect="coverflow";this.slidesPerView=3;this.breakpoints={300:{slidesPerView:1,slidesPerGroup:1},640:{slidesPerView:1,slidesPerGroup:1},768:{slidesPerView:2,slidesPerGroup:1},1024:{slidesPerView:3,slidesPerGroup:1},1280:{slidesPerView:3,slidesPerGroup:1}};this.slides=["Slide 1","Slide 2","Slide 3","Slide 4","Slide 5","Slide 6"]}ngAfterViewInit(){let r=document.querySelector("swiper-container"),e=new S("swiper-container",{observer:!0,observeParents:!0,centeredSlides:!0,effect:this.effect,loop:!0,spaceBetween:10,grabCursor:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},slideToClickedSlide:!1,breakpoints:{1920:{slidesPerView:3,spaceBetween:3},1028:{slidesPerView:2,spaceBetween:2},990:{slidesPerView:1,spaceBetween:0}}})}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=l({type:i,selectors:[["app-swiperino-slider"]],inputs:{images:"images",effect:"effect"},standalone:!0,features:[u],decls:3,vars:2,consts:[["autoplay","true","navigation","true","speed","500","pagination","true","effect","coverflow","grab-cursor","true","centered-slide","true",1,"swiper-container","mb-6",3,"loop","breakpoints"],[1,"mb-6"],["loading","lazy","alt","","width","600","height","500",3,"src"]],template:function(e,t){e&1&&(o(0,"swiper-container",0),m(1,P,2,1,"swiper-slide",1,c),a()),e&2&&(n("loop",t.images.length>t.slidesPerView)("breakpoints",t.breakpoints),s(),w(t.images))}});var g=i;export{g as a};
