(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4409)}])},880:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return x}});let i=r(8754),n=r(1757),o=n._(r(7294)),s=i._(r(3935)),a=i._(r(4605)),l=r(3405),c=r(2269),d=r(5264);r(3213);let u=r(5734),f=i._(r(2854)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,r,i,n,o){let s=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===s)return;e["data-loaded-src"]=s;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function h(e){let[t,r]=o.version.split("."),i=parseInt(t,10),n=parseInt(r,10);return i>18||18===i&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:s,width:a,decoding:l,className:c,style:d,fetchPriority:u,placeholder:f,loading:p,unoptimized:g,fill:_,onLoadRef:x,onLoadingCompleteRef:v,setBlurComplete:j,setShowAltText:b,onLoad:y,onError:w,...S}=e;return o.default.createElement("img",{...S,...h(u),loading:p,width:a,height:s,decoding:l,"data-nimg":_?"fill":"1",className:c,style:d,sizes:n,srcSet:i,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(w&&(e.src=e.src),e.complete&&m(e,f,x,v,j,g))},[r,f,x,v,j,w,g,t]),onLoad:e=>{let t=e.currentTarget;m(t,f,x,v,j,g)},onError:e=>{b(!0),"empty"!==f&&j(!0),w&&w(e)}})});function _(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&s.default.preload?(s.default.preload(r.src,i),null):o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...i}))}let x=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(u.RouterContext),i=(0,o.useContext)(d.ImageConfigContext),n=(0,o.useMemo)(()=>{let e=p||i||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:s,onLoadingComplete:a}=e,m=(0,o.useRef)(s);(0,o.useEffect)(()=>{m.current=s},[s]);let h=(0,o.useRef)(a);(0,o.useEffect)(()=>{h.current=a},[a]);let[x,v]=(0,o.useState)(!1),[j,b]=(0,o.useState)(!1),{props:y,meta:w}=(0,l.getImgProps)(e,{defaultLoader:f.default,imgConf:n,blurComplete:x,showAltText:j});return o.default.createElement(o.default.Fragment,null,o.default.createElement(g,{...y,unoptimized:w.unoptimized,placeholder:w.placeholder,fill:w.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:v,setShowAltText:b,ref:t}),w.priority?o.default.createElement(_,{isAppRouter:!r,imgAttributes:y}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3405:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(3213);let i=r(7736),n=r(2269);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,l,c,{src:d,sizes:u,unoptimized:f=!1,priority:p=!1,loading:m,className:h,quality:g,width:_,height:x,fill:v=!1,style:j,onLoad:b,onLoadingComplete:y,placeholder:w="empty",blurDataURL:S,fetchPriority:E,layout:N,objectFit:C,objectPosition:P,lazyBoundary:z,lazyRoot:O,...I}=e,{imgConf:k,showAltText:R,blurComplete:M,defaultLoader:A}=t,L=k||n.imageConfigDefault;if("allSizes"in L)a=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);a={...L,allSizes:e,deviceSizes:t}}let D=I.loader||A;delete I.loader,delete I.srcSet;let H="__next_img_default"in D;if(H){if("custom"===a.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...i}=t;return e(i)}}if(N){"fill"===N&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[N];e&&(j={...j,...e});let t={responsive:"100vw",fill:"100vw"}[N];t&&!u&&(u=t)}let G="",V=s(_),F=s(x);if("object"==typeof(r=d)&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,S=S||e.blurDataURL,G=e.src,!v){if(V||F){if(V&&!F){let t=V/e.width;F=Math.round(e.height*t)}else if(!V&&F){let t=F/e.height;V=Math.round(e.width*t)}}else V=e.width,F=e.height}}let B=!p&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:G)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,B=!1),a.unoptimized&&(f=!0),H&&d.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(E="high");let W=s(g),X=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:P}:{},R?{}:{color:"transparent"},j),T=M||"empty"===w?null:"blur"===w?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:V,heightInt:F,blurWidth:l,blurHeight:c,blurDataURL:S||"",objectFit:X.objectFit})+'")':'url("'+w+'")',U=T?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:T}:{},q=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:s,loader:a}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let o=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:o,kind:"x"}}(t,n,s),d=l.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:l.map((e,i)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===c?e:i+1)+c).join(", "),src:a({config:t,src:r,quality:o,width:l[d]})}}({config:a,src:d,unoptimized:f,width:V,quality:W,sizes:u,loader:D}),Y={...I,loading:B?"lazy":m,fetchPriority:E,width:V,height:F,decoding:"async",className:h,style:{...X,...U},sizes:q.sizes,srcSet:q.srcSet,src:q.src},J={unoptimized:f,priority:p,placeholder:w,fill:v};return{props:Y,meta:J}}},7736:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:s}=e,a=i?40*i:t,l=n?40*n:r,c=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5365:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return c},unstable_getImgProps:function(){return l}});let i=r(8754),n=r(3405),o=r(3213),s=r(880),a=i._(r(2854)),l=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=s.Image},2854:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},4409:function(e,t,r){"use strict";r.r(t);var i=r(5893),n=r(9008),o=r.n(n),s=r(5675),a=r.n(s),l=r(4871),c=r.n(l);t.default=()=>(0,i.jsxs)("div",{className:c().container,children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"Create Next App"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{className:c().main,children:[(0,i.jsxs)("h1",{className:c().title,children:["Welcome to ",(0,i.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,i.jsxs)("p",{className:c().description,children:["Get started by editing"," ",(0,i.jsx)("code",{className:c().code,children:"pages/index.js"})]}),(0,i.jsxs)("div",{className:c().grid,children:[(0,i.jsxs)("a",{href:"https://nextjs.org/docs",className:c().card,children:[(0,i.jsx)("h2",{children:"Documentation →"}),(0,i.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,i.jsxs)("a",{href:"https://nextjs.org/learn",className:c().card,children:[(0,i.jsx)("h2",{children:"Learn →"}),(0,i.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,i.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",className:c().card,children:[(0,i.jsx)("h2",{children:"Examples →"}),(0,i.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,i.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:c().card,children:[(0,i.jsx)("h2",{children:"Deploy →"}),(0,i.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,i.jsx)("footer",{className:c().footer,children:(0,i.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,i.jsx)("span",{className:c().logo,children:(0,i.jsx)(a(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})},4871:function(e){e.exports={container:"Home_container__d256j",main:"Home_main__VkIEL",footer:"Home_footer__yFiaX",title:"Home_title__hYX6j",description:"Home_description__uXNdx",code:"Home_code__VVrIr",grid:"Home_grid__AVljO",card:"Home_card__E5spL",logo:"Home_logo__IOQAX"}},9008:function(e,t,r){e.exports=r(4605)},5675:function(e,t,r){e.exports=r(5365)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);