import{Ca as E,Ea as x,G as J,Q as P,T as Q,U as j,X as M,aa as ee,ea as I,ga as W,p as X,s as K,x as k,z as S,za as A}from"./chunk-TW52SEB6.js";import{$a as V,Fb as w,Ka as D,La as T,Ma as z,N as b,O as L,Oa as v,T as C,Ya as N,Zb as $,_a as R,a as O,aa as m,ac as Y,bc as G,ha as H,ja as y,qb as _,rb as q,yb as U,zb as Z}from"./chunk-MOPBJAYT.js";var le=(()=>{class r{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,t){e&&t&&(e.classList?e.classList.add(t):e.className+=" "+t)}static addMultipleClasses(e,t){if(e&&t)if(e.classList){let i=t.trim().split(" ");for(let s=0;s<i.length;s++)e.classList.add(i[s])}else{let i=t.split(" ");for(let s=0;s<i.length;s++)e.className+=" "+i[s]}}static removeClass(e,t){e&&t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,t){e&&t&&[t].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(s=>this.removeClass(e,s)))}static hasClass(e,t){return e&&t?e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})}static find(e,t){return Array.from(e.querySelectorAll(t))}static findSingle(e,t){return this.isElement(e)?e.querySelector(t):null}static index(e){let t=e.parentNode.childNodes,i=0;for(var s=0;s<t.length;s++){if(t[s]==e)return i;t[s].nodeType==1&&i++}return-1}static indexWithinGroup(e,t){let i=e.parentNode?e.parentNode.childNodes:[],s=0;for(var o=0;o<i.length;o++){if(i[o]==e)return s;i[o].attributes&&i[o].attributes[t]&&i[o].nodeType==1&&s++}return-1}static appendOverlay(e,t,i="self"){i!=="self"&&e&&t&&this.appendChild(e,t)}static alignOverlay(e,t,i="self",s=!0){e&&t&&(s&&(e.style.minWidth=`${r.getOuterWidth(t)}px`),i==="self"?this.relativePosition(e,t):this.absolutePosition(e,t))}static relativePosition(e,t,i=!0){let s=F=>{if(F)return getComputedStyle(F).getPropertyValue("position")==="relative"?F:s(F.parentElement)},o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=t.offsetHeight,l=t.getBoundingClientRect(),u=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),c=this.getViewport(),p=s(e)?.getBoundingClientRect()||{top:-1*u,left:-1*d},g,h;l.top+a+o.height>c.height?(g=l.top-p.top-o.height,e.style.transformOrigin="bottom",l.top+g<0&&(g=-1*l.top)):(g=a+l.top-p.top,e.style.transformOrigin="top");let B=l.left+o.width-c.width,ae=l.left-p.left;o.width>c.width?h=(l.left-p.left)*-1:B>0?h=ae-B:h=l.left-p.left,e.style.top=g+"px",e.style.left=h+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,t,i=!0){let s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),o=s.height,a=s.width,l=t.offsetHeight,u=t.offsetWidth,d=t.getBoundingClientRect(),c=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),p=this.getViewport(),g,h;d.top+l+o>p.height?(g=d.top+c-o,e.style.transformOrigin="bottom",g<0&&(g=c)):(g=l+d.top+c,e.style.transformOrigin="top"),d.left+a>p.width?h=Math.max(0,d.left+f+u-a):h=d.left+f,e.style.top=g+"px",e.style.left=h+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,t=[]){return e.parentNode===null?t:this.getParents(e.parentNode,t.concat([e.parentNode]))}static getScrollableParents(e){let t=[];if(e){let i=this.getParents(e),s=/(auto|scroll)/,o=a=>{let l=window.getComputedStyle(a,null);return s.test(l.getPropertyValue("overflow"))||s.test(l.getPropertyValue("overflowX"))||s.test(l.getPropertyValue("overflowY"))};for(let a of i){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let u=l.split(",");for(let d of u){let c=this.findSingle(a,d);c&&o(c)&&t.push(c)}}a.nodeType!==9&&o(a)&&t.push(a)}}return t}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",t}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",t}static getHiddenElementDimensions(e){let t={};return e.style.visibility="hidden",e.style.display="block",t.width=e.offsetWidth,t.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",t}static scrollInView(e,t){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),s=i?parseFloat(i):0,o=getComputedStyle(e).getPropertyValue("paddingTop"),a=o?parseFloat(o):0,l=e.getBoundingClientRect(),d=t.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-s-a,c=e.scrollTop,f=e.clientHeight,p=this.getOuterHeight(t);d<0?e.scrollTop=c+d:d+p>f&&(e.scrollTop=c+d-f+p)}static fadeIn(e,t){e.style.opacity=0;let i=+new Date,s=0,o=function(){s=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/t,e.style.opacity=s,i=+new Date,+s<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};o()}static fadeOut(e,t){var i=1,s=50,o=t,a=s/o;let l=setInterval(()=>{i=i-a,i<=0&&(i=0,clearInterval(l)),e.style.opacity=i},s)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,t){var i=Element.prototype,s=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(o){return[].indexOf.call(document.querySelectorAll(o),this)!==-1};return s.call(e,t)}static getOuterWidth(e,t){let i=e.offsetWidth;if(t){let s=getComputedStyle(e);i+=parseFloat(s.marginLeft)+parseFloat(s.marginRight)}return i}static getHorizontalPadding(e){let t=getComputedStyle(e);return parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)}static getHorizontalMargin(e){let t=getComputedStyle(e);return parseFloat(t.marginLeft)+parseFloat(t.marginRight)}static innerWidth(e){let t=e.offsetWidth,i=getComputedStyle(e);return t+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),t}static width(e){let t=e.offsetWidth,i=getComputedStyle(e);return t-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),t}static getInnerHeight(e){let t=e.offsetHeight,i=getComputedStyle(e);return t+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),t}static getOuterHeight(e,t){let i=e.offsetHeight;if(t){let s=getComputedStyle(e);i+=parseFloat(s.marginTop)+parseFloat(s.marginBottom)}return i}static getHeight(e){let t=e.offsetHeight,i=getComputedStyle(e);return t-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),t}static getWidth(e){let t=e.offsetWidth,i=getComputedStyle(e);return t-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),t}static getViewport(){let e=window,t=document,i=t.documentElement,s=t.getElementsByTagName("body")[0],o=e.innerWidth||i.clientWidth||s.clientWidth,a=e.innerHeight||i.clientHeight||s.clientHeight;return{width:o,height:a}}static getOffset(e){var t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,t){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(t,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return!0;var i=e.indexOf("Trident/");if(i>0){var s=e.indexOf("rv:");return!0}var o=e.indexOf("Edge/");return o>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,t){if(this.isElement(t))t.appendChild(e);else if(t&&t.el&&t.el.nativeElement)t.el.nativeElement.appendChild(e);else throw"Cannot append "+t+" to "+e}static removeChild(e,t){if(this.isElement(t))t.removeChild(e);else if(t.el&&t.el.nativeElement)t.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+t}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let t=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(t.borderLeftWidth)-parseFloat(t.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let i=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let t=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=t,t}static invokeElementMethod(e,t,i){e[t].apply(e,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,t){e&&document.activeElement!==e&&e.focus(t)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,t=""){let i=this.find(e,this.getFocusableSelectorString(t)),s=[];for(let o of i){let a=getComputedStyle(o);this.isVisible(o)&&a.display!="none"&&a.visibility!="hidden"&&s.push(o)}return s}static getFocusableElement(e,t=""){let i=this.findSingle(e,this.getFocusableSelectorString(t));if(i){let s=getComputedStyle(i);if(this.isVisible(i)&&s.display!="none"&&s.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,t=""){let i=this.getFocusableElements(e,t);return i.length>0?i[0]:null}static getLastFocusableElement(e,t){let i=this.getFocusableElements(e,t);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,t=!1){let i=r.getFocusableElements(e),s=0;if(i&&i.length>0){let o=i.indexOf(i[0].ownerDocument.activeElement);t?o==-1||o===0?s=i.length-1:s=o-1:o!=-1&&o!==i.length-1&&(s=o+1)}return i[s]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,t){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return t?.nextElementSibling;case"@prev":return t?.previousElementSibling;case"@parent":return t?.parentElement;case"@grandparent":return t?.parentElement.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let o=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return o&&o.nodeType===9||this.isExist(o)?o:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,t){if(e){let i=e.getAttribute(t);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,t={},...i){if(e){let s=document.createElement(e);return this.setAttributes(s,t),s.append(...i),s}}static setAttribute(e,t="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(t,i)}static setAttributes(e,t={}){if(this.isElement(e)){let i=(s,o)=>{let a=e?.$attrs?.[s]?[e?.$attrs?.[s]]:[];return[o].flat().reduce((l,u)=>{if(u!=null){let d=typeof u;if(d==="string"||d==="number")l.push(u);else if(d==="object"){let c=Array.isArray(u)?i(s,u):Object.entries(u).map(([f,p])=>s==="style"&&(p||p===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?f:void 0);l=c.length?l.concat(c.filter(f=>!!f)):l}}return l},a)};Object.entries(t).forEach(([s,o])=>{if(o!=null){let a=s.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),o):s==="pBind"?this.setAttributes(e,o):(o=s==="class"?[...new Set(i("class",o))].join(" ").trim():s==="style"?i("style",o).join(";").trim():o,(e.$attrs=e.$attrs||{})&&(e.$attrs[s]=o),e.setAttribute(s,o))}})}}static isFocusableElement(e,t=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`):!1}}return r})(),te=class{element;listener;scrollableParents;constructor(n,e=()=>{}){this.element=n,this.listener=e}bindScrollListener(){this.scrollableParents=le.getScrollableParents(this.element);for(let n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var de=({dt:r})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${r("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,ce={root:"p-ink"},ie=(()=>{class r extends E{name="ripple";theme=de;classes=ce;static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(r)))(i||r)}})();static \u0275prov=b({token:r,factory:r.\u0275fac})}return r})();var Ze=(()=>{class r extends x{zone=C(H);_componentStyle=C(ie);animationListener;mouseDownListener;timeout;constructor(){super(),G(()=>{K(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let t=this.getInk();if(!t||this.document.defaultView?.getComputedStyle(t,null).display==="none")return;if(S(t,"p-ink-active"),!P(t)&&!M(t)){let a=Math.max(J(this.el.nativeElement),j(this.el.nativeElement));t.style.height=a+"px",t.style.width=a+"px"}let i=Q(this.el.nativeElement),s=e.pageX-i.left+this.document.body.scrollTop-M(t)/2,o=e.pageY-i.top+this.document.body.scrollLeft-P(t)/2;this.renderer.setStyle(t,"top",o+"px"),this.renderer.setStyle(t,"left",s+"px"),k(t,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&S(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let t=0;t<e.length;t++)if(typeof e[t].className=="string"&&e[t].className.indexOf("p-ink")!==-1)return e[t];return null}resetInk(){let e=this.getInk();e&&S(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),S(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,ee(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(t){return new(t||r)};static \u0275dir=z({type:r,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[w([ie]),v]})}return r})();var se=class r{static isArray(n,e=!0){return Array.isArray(n)&&(e||n.length!==0)}static isObject(n,e=!0){return typeof n=="object"&&!Array.isArray(n)&&n!=null&&(e||Object.keys(n).length!==0)}static equals(n,e,t){return t?this.resolveFieldData(n,t)===this.resolveFieldData(e,t):this.equalsByValue(n,e)}static equalsByValue(n,e){if(n===e)return!0;if(n&&e&&typeof n=="object"&&typeof e=="object"){var t=Array.isArray(n),i=Array.isArray(e),s,o,a;if(t&&i){if(o=n.length,o!=e.length)return!1;for(s=o;s--!==0;)if(!this.equalsByValue(n[s],e[s]))return!1;return!0}if(t!=i)return!1;var l=this.isDate(n),u=this.isDate(e);if(l!=u)return!1;if(l&&u)return n.getTime()==e.getTime();var d=n instanceof RegExp,c=e instanceof RegExp;if(d!=c)return!1;if(d&&c)return n.toString()==e.toString();var f=Object.keys(n);if(o=f.length,o!==Object.keys(e).length)return!1;for(s=o;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,f[s]))return!1;for(s=o;s--!==0;)if(a=f[s],!this.equalsByValue(n[a],e[a]))return!1;return!0}return n!==n&&e!==e}static resolveFieldData(n,e){if(n&&e){if(this.isFunction(e))return e(n);if(e.indexOf(".")==-1)return n[e];{let t=e.split("."),i=n;for(let s=0,o=t.length;s<o;++s){if(i==null)return null;i=i[t[s]]}return i}}else return null}static isFunction(n){return!!(n&&n.constructor&&n.call&&n.apply)}static reorderArray(n,e,t){let i;n&&e!==t&&(t>=n.length&&(t%=n.length,e%=n.length),n.splice(t,0,n.splice(e,1)[0]))}static insertIntoOrderedArray(n,e,t,i){if(t.length>0){let s=!1;for(let o=0;o<t.length;o++)if(this.findIndexInList(t[o],i)>e){t.splice(o,0,n),s=!0;break}s||t.push(n)}else t.push(n)}static findIndexInList(n,e){let t=-1;if(e){for(let i=0;i<e.length;i++)if(e[i]==n){t=i;break}}return t}static contains(n,e){if(n!=null&&e&&e.length){for(let t of e)if(this.equals(n,t))return!0}return!1}static removeAccents(n){return n&&(n=n.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),n}static isDate(n){return Object.prototype.toString.call(n)==="[object Date]"}static isEmpty(n){return n==null||n===""||Array.isArray(n)&&n.length===0||!this.isDate(n)&&typeof n=="object"&&Object.keys(n).length===0}static isNotEmpty(n){return!this.isEmpty(n)}static compare(n,e,t,i=1){let s=-1,o=this.isEmpty(n),a=this.isEmpty(e);return o&&a?s=0:o?s=i:a?s=-i:typeof n=="string"&&typeof e=="string"?s=n.localeCompare(e,t,{numeric:!0}):s=n<e?-1:n>e?1:0,s}static sort(n,e,t=1,i,s=1){let o=r.compare(n,e,i,t),a=t;return(r.isEmpty(n)||r.isEmpty(e))&&(a=s===1?t:s),a*o}static merge(n,e){if(!(n==null&&e==null)){{if((n==null||typeof n=="object")&&(e==null||typeof e=="object"))return O(O({},n||{}),e||{});if((n==null||typeof n=="string")&&(e==null||typeof e=="string"))return[n||"",e||""].join(" ")}return e||n}}static isPrintableCharacter(n=""){return this.isNotEmpty(n)&&n.length===1&&n.match(/\S| /)}static getItemValue(n,...e){return this.isFunction(n)?n(...e):n}static findLastIndex(n,e){let t=-1;if(this.isNotEmpty(n))try{t=n.findLastIndex(e)}catch{t=n.lastIndexOf([...n].reverse().find(e))}return t}static findLast(n,e){let t;if(this.isNotEmpty(n))try{t=n.findLast(e)}catch{t=[...n].reverse().find(e)}return t}static deepEquals(n,e){if(n===e)return!0;if(n&&e&&typeof n=="object"&&typeof e=="object"){var t=Array.isArray(n),i=Array.isArray(e),s,o,a;if(t&&i){if(o=n.length,o!=e.length)return!1;for(s=o;s--!==0;)if(!this.deepEquals(n[s],e[s]))return!1;return!0}if(t!=i)return!1;var l=n instanceof Date,u=e instanceof Date;if(l!=u)return!1;if(l&&u)return n.getTime()==e.getTime();var d=n instanceof RegExp,c=e instanceof RegExp;if(d!=c)return!1;if(d&&c)return n.toString()==e.toString();var f=Object.keys(n);if(o=f.length,o!==Object.keys(e).length)return!1;for(s=o;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,f[s]))return!1;for(s=o;s--!==0;)if(a=f[s],!this.deepEquals(n[a],e[a]))return!1;return!0}return n!==n&&e!==e}static minifyCSS(n){return n&&n.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(n){return this.isString(n)?n.replace(/(-|_)/g,"").toLowerCase():n}static isString(n,e=!0){return typeof n=="string"&&(e||n!=="")}},re=0;function Ge(r="pn_id_"){return re++,`${r}${re}`}function ue(){let r=[],n=(s,o)=>{let a=r.length>0?r[r.length-1]:{key:s,value:o},l=a.value+(a.key===s?0:o)+2;return r.push({key:s,value:l}),l},e=s=>{r=r.filter(o=>o.value!==s)},t=()=>r.length>0?r[r.length-1].value:0,i=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:i,set:(s,o,a)=>{o&&(o.style.zIndex=String(n(s,a)))},clear:s=>{s&&(e(i(s)),s.style.zIndex="")},getCurrent:()=>t(),generateZIndex:n,revertZIndex:e}}var Xe=ue();var fe=({dt:r})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${r("badge.border.radius")};
    justify-content: center;
    padding: ${r("badge.padding")};
    background: ${r("badge.primary.background")};
    color: ${r("badge.primary.color")};
    font-size: ${r("badge.font.size")};
    font-weight: ${r("badge.font.weight")};
    min-width: ${r("badge.min.width")};
    height: ${r("badge.height")};
    line-height: ${r("badge.height")};
}

.p-badge-dot {
    width: ${r("badge.dot.size")};
    min-width: ${r("badge.dot.size")};
    height: ${r("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${r("badge.secondary.background")};
    color: ${r("badge.secondary.color")};
}

.p-badge-success {
    background: ${r("badge.success.background")};
    color: ${r("badge.success.color")};
}

.p-badge-info {
    background: ${r("badge.info.background")};
    color: ${r("badge.info.color")};
}

.p-badge-warn {
    background: ${r("badge.warn.background")};
    color: ${r("badge.warn.color")};
}

.p-badge-danger {
    background: ${r("badge.danger.background")};
    color: ${r("badge.danger.color")};
}

.p-badge-contrast {
    background: ${r("badge.contrast.background")};
    color: ${r("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${r("badge.sm.font.size")};
    min-width: ${r("badge.sm.min.width")};
    height: ${r("badge.sm.height")};
    line-height: ${r("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${r("badge.lg.font.size")};
    min-width: ${r("badge.lg.min.width")};
    height: ${r("badge.lg.height")};
    line-height: ${r("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${r("badge.xl.font.size")};
    min-width: ${r("badge.xl.min.width")};
    height: ${r("badge.xl.height")};
    line-height: ${r("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,pe={root:({props:r,instance:n})=>["p-badge p-component",{"p-badge-circle":W(r.value)&&String(r.value).length===1,"p-badge-dot":I(r.value)&&!n.$slots.default,"p-badge-sm":r.size==="small","p-badge-lg":r.size==="large","p-badge-xl":r.size==="xlarge","p-badge-info":r.severity==="info","p-badge-success":r.severity==="success","p-badge-warn":r.severity==="warn","p-badge-danger":r.severity==="danger","p-badge-secondary":r.severity==="secondary","p-badge-contrast":r.severity==="contrast"}]},oe=(()=>{class r extends E{name="badge";theme=fe;classes=pe;static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(r)))(i||r)}})();static \u0275prov=b({token:r,factory:r.\u0275fac})}return r})();var ge=(()=>{class r extends x{styleClass=y();style=y();badgeSize=y();size=y();severity=y();value=y();badgeDisabled=y(!1,{transform:$});_componentStyle=C(oe);containerClass=Y(()=>{let e="p-badge p-component";return W(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),I(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(r)))(i||r)}})();static \u0275cmp=D({type:r,selectors:[["p-badge"]],hostVars:6,hostBindings:function(t,i){t&2&&(R(i.style()),V(i.containerClass()),N("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[w([oe]),v],decls:1,vars:1,template:function(t,i){t&1&&U(0),t&2&&Z(i.value())},dependencies:[X,A],encapsulation:2,changeDetection:0})}return r})(),gt=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=T({type:r});static \u0275inj=L({imports:[ge,A,A]})}return r})();var he=["*"],me=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,ye=(()=>{class r extends E{name="baseicon";inlineStyles=me;static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(r)))(i||r)}})();static \u0275prov=b({token:r,factory:r.\u0275fac})}return r})();var It=(()=>{class r extends x{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=I(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(r)))(i||r)}})();static \u0275cmp=D({type:r,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",$],styleClass:"styleClass"},features:[w([ye]),v],ngContentSelectors:he,decls:1,vars:0,template:function(t,i){t&1&&(_(),q(0))},encapsulation:2,changeDetection:0})}return r})();export{le as a,te as b,It as c,Ze as d,se as e,Ge as f,Xe as g,ge as h,gt as i};
