"use strict";(self.webpackChunkYoutubeDuocDev=self.webpackChunkYoutubeDuocDev||[]).push([[295],{9295:function(e,n,t){t.d(n,{Z:function(){return hn}});var o=t(3433),r=t(7294),a=t(8135),l=t(3124),i=t(8761),c=t(7462),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},u=t(76),d=function(e,n){return r.createElement(u.Z,(0,c.Z)({},e,{ref:n,icon:s}))},f=r.forwardRef(d),m=t(3061),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},g=function(e,n){return r.createElement(u.Z,(0,c.Z)({},e,{ref:n,icon:p}))},b=r.forwardRef(g),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},y=function(e,n){return r.createElement(u.Z,(0,c.Z)({},e,{ref:n,icon:v}))},C=r.forwardRef(y),h=t(3967),x=t.n(h),O=t(7263),E=t(3603),$=t(1461),w=t(2945),k=t(470),P=t(4128),S=t(3671);function Z(e){return!(!e||!e.then)}var T=e=>{const{type:n,children:t,prefixCls:o,buttonProps:a,close:l,autoFocus:i,emitEvent:c,isSilent:s,quitOnNullishReturnValue:u,actionFn:d}=e,f=r.useRef(!1),m=r.useRef(null),[p,g]=(0,k.Z)(!1),b=function(){null==l||l.apply(void 0,arguments)};return r.useEffect((()=>{let e=null;return i&&(e=setTimeout((()=>{var e;null===(e=m.current)||void 0===e||e.focus()}))),()=>{e&&clearTimeout(e)}}),[]),r.createElement(P.ZP,Object.assign({},(0,S.nx)(n),{onClick:e=>{if(f.current)return;if(f.current=!0,!d)return void b();let n;if(c){if(n=d(e),u&&!Z(n))return f.current=!1,void b(e)}else if(d.length)n=d(l),f.current=!1;else if(n=d(),!n)return void b();(e=>{Z(e)&&(g(!0),e.then((function(){g(!1,!0),b.apply(void 0,arguments),f.current=!1}),(e=>{if(g(!1,!0),f.current=!1,!(null==s?void 0:s()))return Promise.reject(e)})))})(n)},loading:p,prefixCls:o},a,{ref:m}),t)};const j=r.createContext({}),{Provider:I}=j;var N=()=>{const{autoFocusButton:e,cancelButtonProps:n,cancelTextLocale:t,isSilent:o,mergedOkCancel:a,rootPrefixCls:l,close:i,onCancel:c,onConfirm:s}=(0,r.useContext)(j);return a?r.createElement(T,{isSilent:o,actionFn:c,close:function(){null==i||i.apply(void 0,arguments),null==s||s(!1)},autoFocus:"cancel"===e,buttonProps:n,prefixCls:`${l}-btn`},t):null},B=()=>{const{autoFocusButton:e,close:n,isSilent:t,okButtonProps:o,rootPrefixCls:a,okTextLocale:l,okType:i,onConfirm:c,onOk:s}=(0,r.useContext)(j);return r.createElement(T,{isSilent:t,type:i||"primary",actionFn:s,close:function(){null==n||n.apply(void 0,arguments),null==c||c(!0)},autoFocus:"ok"===e,buttonProps:o,prefixCls:`${a}-btn`},l)},z=t(4549),R=t(9439),M=t(8705),H=r.createContext({}),L=t(1413),F=t(4999),D=t(7028),A=t(5105),W=t(4217);function K(e,n,t){var o=n;return!o&&t&&(o="".concat(e,"-").concat(t)),o}function q(e,n){var t=e["page".concat(n?"Y":"X","Offset")],o="scroll".concat(n?"Top":"Left");if("number"!=typeof t){var r=e.document;"number"!=typeof(t=r.documentElement[o])&&(t=r.body[o])}return t}var G=t(5461),U=t(1002),X=t(2550),V=r.memo((function(e){return e.children}),(function(e,n){return!n.shouldUpdate})),Y={width:0,height:0,overflow:"hidden",outline:"none"},_={outline:"none"},Q=r.forwardRef((function(e,n){var t=e.prefixCls,o=e.className,a=e.style,l=e.title,i=e.ariaId,s=e.footer,u=e.closable,d=e.closeIcon,f=e.onClose,m=e.children,p=e.bodyStyle,g=e.bodyProps,b=e.modalRender,v=e.onMouseDown,y=e.onMouseUp,C=e.holderRef,h=e.visible,O=e.forceRender,E=e.width,$=e.height,w=e.classNames,k=e.styles,P=r.useContext(H).panel,S=(0,X.x1)(C,P),Z=(0,r.useRef)(),T=(0,r.useRef)(),j=(0,r.useRef)();r.useImperativeHandle(n,(function(){return{focus:function(){var e;null===(e=j.current)||void 0===e||e.focus()},changeActive:function(e){var n=document.activeElement;e&&n===T.current?Z.current.focus():e||n!==Z.current||T.current.focus()}}}));var I,N,B={};void 0!==E&&(B.width=E),void 0!==$&&(B.height=$),s&&(I=r.createElement("div",{className:x()("".concat(t,"-footer"),null==w?void 0:w.footer),style:(0,L.Z)({},null==k?void 0:k.footer)},s)),l&&(N=r.createElement("div",{className:x()("".concat(t,"-header"),null==w?void 0:w.header),style:(0,L.Z)({},null==k?void 0:k.header)},r.createElement("div",{className:"".concat(t,"-title"),id:i},l)));var z,R=(0,r.useMemo)((function(){return"object"===(0,U.Z)(u)&&null!==u?u:u?{closeIcon:null!=d?d:r.createElement("span",{className:"".concat(t,"-close-x")})}:{}}),[u,d]),M=(0,W.Z)(R,!0);u&&(z=r.createElement("button",(0,c.Z)({type:"button",onClick:f,"aria-label":"Close"},M,{className:"".concat(t,"-close")}),R.closeIcon));var F=r.createElement("div",{className:x()("".concat(t,"-content"),null==w?void 0:w.content),style:null==k?void 0:k.content},z,N,r.createElement("div",(0,c.Z)({className:x()("".concat(t,"-body"),null==w?void 0:w.body),style:(0,L.Z)((0,L.Z)({},p),null==k?void 0:k.body)},g),m),I);return r.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":l?i:null,"aria-modal":"true",ref:S,style:(0,L.Z)((0,L.Z)({},a),B),className:x()(t,o),onMouseDown:v,onMouseUp:y},r.createElement("div",{tabIndex:0,ref:Z,style:Y,"aria-hidden":"true"}),r.createElement("div",{ref:j,tabIndex:-1,style:_},r.createElement(V,{shouldUpdate:h||O},b?b(F):F)),r.createElement("div",{tabIndex:0,ref:T,style:Y,"aria-hidden":"true"}))})),J=Q,ee=r.forwardRef((function(e,n){var t=e.prefixCls,o=e.title,a=e.style,l=e.className,i=e.visible,s=e.forceRender,u=e.destroyOnClose,d=e.motionName,f=e.ariaId,m=e.onVisibleChanged,p=e.mousePosition,g=(0,r.useRef)(),b=r.useState(),v=(0,R.Z)(b,2),y=v[0],C=v[1],h={};function O(){var e,n,t,o,r,a=(t={left:(n=(e=g.current).getBoundingClientRect()).left,top:n.top},r=(o=e.ownerDocument).defaultView||o.parentWindow,t.left+=q(r),t.top+=q(r,!0),t);C(p?"".concat(p.x-a.left,"px ").concat(p.y-a.top,"px"):"")}return y&&(h.transformOrigin=y),r.createElement(G.ZP,{visible:i,onVisibleChanged:m,onAppearPrepare:O,onEnterPrepare:O,forceRender:s,motionName:d,removeOnLeave:u,ref:g},(function(i,s){var u=i.className,d=i.style;return r.createElement(J,(0,c.Z)({},e,{ref:n,title:o,ariaId:f,prefixCls:t,holderRef:s,style:(0,L.Z)((0,L.Z)((0,L.Z)({},d),a),h),className:x()(l,u)}))}))}));ee.displayName="Content";var ne=ee;function te(e){var n=e.prefixCls,t=e.style,o=e.visible,a=e.maskProps,l=e.motionName,i=e.className;return r.createElement(G.ZP,{key:"mask",visible:o,motionName:l,leavedClassName:"".concat(n,"-mask-hidden")},(function(e,o){var l=e.className,s=e.style;return r.createElement("div",(0,c.Z)({ref:o,style:(0,L.Z)((0,L.Z)({},s),t),className:x()("".concat(n,"-mask"),l,i)},a))}))}function oe(e){var n=e.prefixCls,t=void 0===n?"rc-dialog":n,o=e.zIndex,a=e.visible,l=void 0!==a&&a,i=e.keyboard,s=void 0===i||i,u=e.focusTriggerAfterClose,d=void 0===u||u,f=e.wrapStyle,m=e.wrapClassName,p=e.wrapProps,g=e.onClose,b=e.afterOpenChange,v=e.afterClose,y=e.transitionName,C=e.animation,h=e.closable,O=void 0===h||h,E=e.mask,$=void 0===E||E,w=e.maskTransitionName,k=e.maskAnimation,P=e.maskClosable,S=void 0===P||P,Z=e.maskStyle,T=e.maskProps,j=e.rootClassName,I=e.classNames,N=e.styles,B=(0,r.useRef)(),z=(0,r.useRef)(),M=(0,r.useRef)(),H=r.useState(l),q=(0,R.Z)(H,2),G=q[0],U=q[1],X=(0,D.Z)();function V(e){null==g||g(e)}var Y=(0,r.useRef)(!1),_=(0,r.useRef)(),Q=null;return S&&(Q=function(e){Y.current?Y.current=!1:z.current===e.target&&V(e)}),(0,r.useEffect)((function(){l&&(U(!0),(0,F.Z)(z.current,document.activeElement)||(B.current=document.activeElement))}),[l]),(0,r.useEffect)((function(){return function(){clearTimeout(_.current)}}),[]),r.createElement("div",(0,c.Z)({className:x()("".concat(t,"-root"),j)},(0,W.Z)(e,{data:!0})),r.createElement(te,{prefixCls:t,visible:$&&l,motionName:K(t,w,k),style:(0,L.Z)((0,L.Z)({zIndex:o},Z),null==N?void 0:N.mask),maskProps:T,className:null==I?void 0:I.mask}),r.createElement("div",(0,c.Z)({tabIndex:-1,onKeyDown:function(e){if(s&&e.keyCode===A.Z.ESC)return e.stopPropagation(),void V(e);l&&e.keyCode===A.Z.TAB&&M.current.changeActive(!e.shiftKey)},className:x()("".concat(t,"-wrap"),m,null==I?void 0:I.wrapper),ref:z,onClick:Q,style:(0,L.Z)((0,L.Z)((0,L.Z)({zIndex:o},f),null==N?void 0:N.wrapper),{},{display:G?null:"none"})},p),r.createElement(ne,(0,c.Z)({},e,{onMouseDown:function(){clearTimeout(_.current),Y.current=!0},onMouseUp:function(){_.current=setTimeout((function(){Y.current=!1}))},ref:M,closable:O,ariaId:X,prefixCls:t,visible:l&&G,onClose:V,onVisibleChanged:function(e){if(e)(0,F.Z)(z.current,document.activeElement)||null===(n=M.current)||void 0===n||n.focus();else{if(U(!1),$&&B.current&&d){try{B.current.focus({preventScroll:!0})}catch(e){}B.current=null}G&&(null==v||v())}var n;null==b||b(e)},motionName:K(t,y,C)}))))}t(334);var re=function(e){var n=e.visible,t=e.getContainer,o=e.forceRender,a=e.destroyOnClose,l=void 0!==a&&a,i=e.afterClose,s=e.panelRef,u=r.useState(n),d=(0,R.Z)(u,2),f=d[0],m=d[1],p=r.useMemo((function(){return{panel:s}}),[s]);return r.useEffect((function(){n&&m(!0)}),[n]),o||!l||f?r.createElement(H.Provider,{value:p},r.createElement(M.Z,{open:n||o||f,autoDestroy:!1,getContainer:t,autoLock:n||f},r.createElement(oe,(0,c.Z)({},e,{destroyOnClose:l,afterClose:function(){null==i||i(),m(!1)}})))):null};re.displayName="Dialog";var ae=re;function le(e){if(e)return{closable:e.closable,closeIcon:e.closeIcon}}function ie(e){const{closable:n,closeIcon:t}=e||{};return r.useMemo((()=>{if(!n&&(!1===n||!1===t||null===t))return!1;if(void 0===n&&void 0===t)return null;let e={closeIcon:"boolean"!=typeof t&&null!==t?t:void 0};return n&&"object"==typeof n&&(e=Object.assign(Object.assign({},e),n)),e}),[n,t])}function ce(){const e={};for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return t.forEach((n=>{n&&Object.keys(n).forEach((t=>{void 0!==n[t]&&(e[t]=n[t])}))})),e}const se={};var ue=t(8924),de=t(3945),fe=t(5792),me=t(6859),pe=t(4173),ge=t(6790);function be(){}const ve=r.createContext({add:be,remove:be});var ye=t(8866),Ce=()=>{const{cancelButtonProps:e,cancelTextLocale:n,onCancel:t}=(0,r.useContext)(j);return r.createElement(P.ZP,Object.assign({onClick:t},e),n)},he=()=>{const{confirmLoading:e,okButtonProps:n,okType:t,okTextLocale:o,onOk:a}=(0,r.useContext)(j);return r.createElement(P.ZP,Object.assign({},(0,S.nx)(t),{loading:e,onClick:a},n),o)},xe=t(3008);function Oe(e,n){return r.createElement("span",{className:`${e}-close-x`},n||r.createElement(z.Z,{className:`${e}-close-icon`}))}const Ee=e=>{const{okText:n,okType:t="primary",cancelText:a,confirmLoading:l,onOk:i,onCancel:c,okButtonProps:s,cancelButtonProps:u,footer:d}=e,[f]=(0,$.Z)("Modal",(0,xe.A)()),m={confirmLoading:l,okButtonProps:s,cancelButtonProps:u,okTextLocale:n||(null==f?void 0:f.okText),cancelTextLocale:a||(null==f?void 0:f.cancelText),okType:t,onOk:i,onCancel:c},p=r.useMemo((()=>m),(0,o.Z)(Object.values(m)));let g;return"function"==typeof d||void 0===d?(g=r.createElement(r.Fragment,null,r.createElement(Ce,null),r.createElement(he,null)),"function"==typeof d&&(g=d(g,{OkBtn:he,CancelBtn:Ce})),g=r.createElement(I,{value:p},g)):g=d,r.createElement(ye.n,{disabled:!1},g)};var $e=t(7395),we=t(4747),ke=t(3590);const Pe=new $e.E4("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),Se=new $e.E4("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),Ze=function(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{antCls:t}=e,o=`${t}-fade`,r=n?"&":"";return[(0,ke.R)(o,Pe,Se,e.motionDurationMid,n),{[`\n        ${r}${o}-enter,\n        ${r}${o}-appear\n      `]:{opacity:0,animationTimingFunction:"linear"},[`${r}${o}-leave`]:{animationTimingFunction:"linear"}}]},Te=new $e.E4("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),je=new $e.E4("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),Ie=new $e.E4("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),Ne=new $e.E4("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),Be=new $e.E4("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),ze=new $e.E4("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),Re={zoom:{inKeyframes:Te,outKeyframes:je},"zoom-big":{inKeyframes:Ie,outKeyframes:Ne},"zoom-big-fast":{inKeyframes:Ie,outKeyframes:Ne},"zoom-left":{inKeyframes:new $e.E4("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),outKeyframes:new $e.E4("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}})},"zoom-right":{inKeyframes:new $e.E4("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),outKeyframes:new $e.E4("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}})},"zoom-up":{inKeyframes:Be,outKeyframes:ze},"zoom-down":{inKeyframes:new $e.E4("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),outKeyframes:new $e.E4("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}})}},Me=(e,n)=>{const{antCls:t}=e,o=`${t}-${n}`,{inKeyframes:r,outKeyframes:a}=Re[n];return[(0,ke.R)(o,r,a,"zoom-big-fast"===n?e.motionDurationFast:e.motionDurationMid),{[`\n        ${o}-enter,\n        ${o}-appear\n      `]:{transform:"scale(0)",opacity:0,animationTimingFunction:e.motionEaseOutCirc,"&-prepare":{transform:"none"}},[`${o}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]};var He=t(5503),Le=t(7851);function Fe(e){return{position:e,inset:0}}const De=e=>{const{componentCls:n,antCls:t}=e;return[{[`${n}-root`]:{[`${n}${t}-zoom-enter, ${n}${t}-zoom-appear`]:{transform:"none",opacity:0,animationDuration:e.motionDurationSlow,userSelect:"none"},[`${n}${t}-zoom-leave ${n}-content`]:{pointerEvents:"none"},[`${n}-mask`]:Object.assign(Object.assign({},Fe("fixed")),{zIndex:e.zIndexPopupBase,height:"100%",backgroundColor:e.colorBgMask,pointerEvents:"none",[`${n}-hidden`]:{display:"none"}}),[`${n}-wrap`]:Object.assign(Object.assign({},Fe("fixed")),{zIndex:e.zIndexPopupBase,overflow:"auto",outline:0,WebkitOverflowScrolling:"touch"})}},{[`${n}-root`]:Ze(e)}]},Ae=e=>{const{componentCls:n}=e;return[{[`${n}-root`]:{[`${n}-wrap-rtl`]:{direction:"rtl"},[`${n}-centered`]:{textAlign:"center","&::before":{display:"inline-block",width:0,height:"100%",verticalAlign:"middle",content:'""'},[n]:{top:0,display:"inline-block",paddingBottom:0,textAlign:"start",verticalAlign:"middle"}},[`@media (max-width: ${e.screenSMMax}px)`]:{[n]:{maxWidth:"calc(100vw - 16px)",margin:`${(0,$e.bf)(e.marginXS)} auto`},[`${n}-centered`]:{[n]:{flex:1}}}}},{[n]:Object.assign(Object.assign({},(0,we.Wf)(e)),{pointerEvents:"none",position:"relative",top:100,width:"auto",maxWidth:`calc(100vw - ${(0,$e.bf)(e.calc(e.margin).mul(2).equal())})`,margin:"0 auto",paddingBottom:e.paddingLG,[`${n}-title`]:{margin:0,color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.titleFontSize,lineHeight:e.titleLineHeight,wordWrap:"break-word"},[`${n}-content`]:{position:"relative",backgroundColor:e.contentBg,backgroundClip:"padding-box",border:0,borderRadius:e.borderRadiusLG,boxShadow:e.boxShadow,pointerEvents:"auto",padding:e.contentPadding},[`${n}-close`]:Object.assign({position:"absolute",top:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),insetInlineEnd:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),zIndex:e.calc(e.zIndexPopupBase).add(10).equal(),padding:0,color:e.modalCloseIconColor,fontWeight:e.fontWeightStrong,lineHeight:1,textDecoration:"none",background:"transparent",borderRadius:e.borderRadiusSM,width:e.modalCloseBtnSize,height:e.modalCloseBtnSize,border:0,outline:0,cursor:"pointer",transition:`color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,"&-x":{display:"flex",fontSize:e.fontSizeLG,fontStyle:"normal",lineHeight:`${(0,$e.bf)(e.modalCloseBtnSize)}`,justifyContent:"center",textTransform:"none",textRendering:"auto"},"&:hover":{color:e.modalCloseIconHoverColor,backgroundColor:e.colorBgTextHover,textDecoration:"none"},"&:active":{backgroundColor:e.colorBgTextActive}},(0,we.Qy)(e)),[`${n}-header`]:{color:e.colorText,background:e.headerBg,borderRadius:`${(0,$e.bf)(e.borderRadiusLG)} ${(0,$e.bf)(e.borderRadiusLG)} 0 0`,marginBottom:e.headerMarginBottom,padding:e.headerPadding,borderBottom:e.headerBorderBottom},[`${n}-body`]:{fontSize:e.fontSize,lineHeight:e.lineHeight,wordWrap:"break-word",padding:e.bodyPadding},[`${n}-footer`]:{textAlign:"end",background:e.footerBg,marginTop:e.footerMarginTop,padding:e.footerPadding,borderTop:e.footerBorderTop,borderRadius:e.footerBorderRadius,[`> ${e.antCls}-btn + ${e.antCls}-btn`]:{marginInlineStart:e.marginXS}},[`${n}-open`]:{overflow:"hidden"}})},{[`${n}-pure-panel`]:{top:"auto",padding:0,display:"flex",flexDirection:"column",[`${n}-content,\n          ${n}-body,\n          ${n}-confirm-body-wrapper`]:{display:"flex",flexDirection:"column",flex:"auto"},[`${n}-confirm-body`]:{marginBottom:"auto"}}}]},We=e=>{const{componentCls:n}=e;return{[`${n}-root`]:{[`${n}-wrap-rtl`]:{direction:"rtl",[`${n}-confirm-body`]:{direction:"rtl"}}}}},Ke=e=>{const n=e.padding,t=e.fontSizeHeading5,o=e.lineHeightHeading5;return(0,He.TS)(e,{modalHeaderHeight:e.calc(e.calc(o).mul(t).equal()).add(e.calc(n).mul(2).equal()).equal(),modalFooterBorderColorSplit:e.colorSplit,modalFooterBorderStyle:e.lineType,modalFooterBorderWidth:e.lineWidth,modalCloseIconColor:e.colorIcon,modalCloseIconHoverColor:e.colorIconHover,modalCloseBtnSize:e.controlHeight,modalConfirmIconSize:e.fontHeight,modalTitleHeight:e.calc(e.titleFontSize).mul(e.titleLineHeight).equal()})},qe=e=>({footerBg:"transparent",headerBg:e.colorBgElevated,titleLineHeight:e.lineHeightHeading5,titleFontSize:e.fontSizeHeading5,contentBg:e.colorBgElevated,titleColor:e.colorTextHeading,contentPadding:e.wireframe?0:`${(0,$e.bf)(e.paddingMD)} ${(0,$e.bf)(e.paddingContentHorizontalLG)}`,headerPadding:e.wireframe?`${(0,$e.bf)(e.padding)} ${(0,$e.bf)(e.paddingLG)}`:0,headerBorderBottom:e.wireframe?`${(0,$e.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",headerMarginBottom:e.wireframe?0:e.marginXS,bodyPadding:e.wireframe?e.paddingLG:0,footerPadding:e.wireframe?`${(0,$e.bf)(e.paddingXS)} ${(0,$e.bf)(e.padding)}`:0,footerBorderTop:e.wireframe?`${(0,$e.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",footerBorderRadius:e.wireframe?`0 0 ${(0,$e.bf)(e.borderRadiusLG)} ${(0,$e.bf)(e.borderRadiusLG)}`:0,footerMarginTop:e.wireframe?0:e.marginSM,confirmBodyPadding:e.wireframe?`${(0,$e.bf)(2*e.padding)} ${(0,$e.bf)(2*e.padding)} ${(0,$e.bf)(e.paddingLG)}`:0,confirmIconMarginInlineEnd:e.wireframe?e.margin:e.marginSM,confirmBtnsMarginTop:e.wireframe?e.marginLG:e.marginSM});var Ge=(0,Le.I$)("Modal",(e=>{const n=Ke(e);return[Ae(n),We(n),De(n),Me(n,"zoom")]}),qe,{unitless:{titleLineHeight:!0}});let Ue;(0,ue.Z)()&&window.document.documentElement&&document.documentElement.addEventListener("click",(e=>{Ue={x:e.pageX,y:e.pageY},setTimeout((()=>{Ue=null}),100)}),!0);var Xe=e=>{var n;const{getPopupContainer:t,getPrefixCls:o,direction:a,modal:i}=r.useContext(l.E_),c=n=>{const{onCancel:t}=e;null==t||t(n)},{prefixCls:s,className:u,rootClassName:d,open:f,wrapClassName:m,centered:p,getContainer:g,focusTriggerAfterClose:b=!0,style:v,visible:y,width:C=520,footer:h,classNames:$,styles:w}=e,k=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t}(e,["prefixCls","className","rootClassName","open","wrapClassName","centered","getContainer","focusTriggerAfterClose","style","visible","width","footer","classNames","styles"]),P=o("modal",s),S=o(),Z=(0,fe.Z)(P),[T,j,I]=Ge(P,Z),N=x()(m,{[`${P}-centered`]:!!p,[`${P}-wrap-rtl`]:"rtl"===a}),B=null!==h&&r.createElement(Ee,Object.assign({},e,{onOk:n=>{const{onOk:t}=e;null==t||t(n)},onCancel:c})),[R,M]=function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:se;const o=ie(e),a=ie(n),l=r.useMemo((()=>Object.assign({closeIcon:r.createElement(z.Z,null)},t)),[t]),i=r.useMemo((()=>!1!==o&&(o?ce(l,a,o):!1!==a&&(a?ce(l,a):!!l.closable&&l))),[o,a,l]);return r.useMemo((()=>{if(!1===i)return[!1,null];const{closeIconRender:e}=l,{closeIcon:n}=i;let t=n;if(null!=t){e&&(t=e(n));const o=(0,W.Z)(i,!0);Object.keys(o).length&&(t=r.isValidElement(t)?r.cloneElement(t,o):r.createElement("span",Object.assign({},o),t))}return[!0,t]}),[i,l])}(le(e),le(i),{closable:!0,closeIcon:r.createElement(z.Z,{className:`${P}-close-icon`}),closeIconRender:e=>Oe(P,e)}),H=function(e){const n=r.useContext(ve),t=r.useRef();return(0,ge.zX)((o=>{if(o){const r=e?o.querySelector(e):o;n.add(r),t.current=r}else n.remove(t.current)}))}(`.${P}-content`),[L,F]=(0,O.Cn)("Modal",k.zIndex);return T(r.createElement(pe.BR,null,r.createElement(me.Ux,{status:!0,override:!0},r.createElement(de.Z.Provider,{value:F},r.createElement(ae,Object.assign({width:C},k,{zIndex:L,getContainer:void 0===g?t:g,prefixCls:P,rootClassName:x()(j,d,I,Z),footer:B,visible:null!=f?f:y,mousePosition:null!==(n=k.mousePosition)&&void 0!==n?n:Ue,onClose:c,closable:R,closeIcon:M,focusTriggerAfterClose:b,transitionName:(0,E.m)(S,"zoom",e.transitionName),maskTransitionName:(0,E.m)(S,"fade",e.maskTransitionName),className:x()(j,u,null==i?void 0:i.className),style:Object.assign(Object.assign({},null==i?void 0:i.style),v),classNames:Object.assign(Object.assign(Object.assign({},null==i?void 0:i.classNames),$),{wrapper:x()(N,null==$?void 0:$.wrapper)}),styles:Object.assign(Object.assign({},null==i?void 0:i.styles),w),panelRef:H}))))))};const Ve=e=>{const{componentCls:n,titleFontSize:t,titleLineHeight:o,modalConfirmIconSize:r,fontSize:a,lineHeight:l,modalTitleHeight:i,fontHeight:c,confirmBodyPadding:s}=e,u=`${n}-confirm`;return{[u]:{"&-rtl":{direction:"rtl"},[`${e.antCls}-modal-header`]:{display:"none"},[`${u}-body-wrapper`]:Object.assign({},(0,we.dF)()),[`&${n} ${n}-body`]:{padding:s},[`${u}-body`]:{display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${e.iconCls}`]:{flex:"none",fontSize:r,marginInlineEnd:e.confirmIconMarginInlineEnd,marginTop:e.calc(e.calc(c).sub(r).equal()).div(2).equal()},[`&-has-title > ${e.iconCls}`]:{marginTop:e.calc(e.calc(i).sub(r).equal()).div(2).equal()}},[`${u}-paragraph`]:{display:"flex",flexDirection:"column",flex:"auto",rowGap:e.marginXS},[`${e.iconCls} + ${u}-paragraph`]:{maxWidth:`calc(100% - ${(0,$e.bf)(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`},[`${u}-title`]:{color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:t,lineHeight:o},[`${u}-content`]:{color:e.colorText,fontSize:a,lineHeight:l},[`${u}-btns`]:{textAlign:"end",marginTop:e.confirmBtnsMarginTop,[`${e.antCls}-btn + ${e.antCls}-btn`]:{marginBottom:0,marginInlineStart:e.marginXS}}},[`${u}-error ${u}-body > ${e.iconCls}`]:{color:e.colorError},[`${u}-warning ${u}-body > ${e.iconCls},\n        ${u}-confirm ${u}-body > ${e.iconCls}`]:{color:e.colorWarning},[`${u}-info ${u}-body > ${e.iconCls}`]:{color:e.colorInfo},[`${u}-success ${u}-body > ${e.iconCls}`]:{color:e.colorSuccess}}};var Ye=(0,Le.bk)(["Modal","confirm"],(e=>{const n=Ke(e);return[Ve(n)]}),qe,{order:-1e3});function _e(e){const{prefixCls:n,icon:t,okText:a,cancelText:l,confirmPrefixCls:i,type:c,okCancel:s,footer:u,locale:d}=e,p=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t}(e,["prefixCls","icon","okText","cancelText","confirmPrefixCls","type","okCancel","footer","locale"]);let g=t;if(!t&&null!==t)switch(c){case"info":g=r.createElement(C,null);break;case"success":g=r.createElement(f,null);break;case"error":g=r.createElement(m.Z,null);break;default:g=r.createElement(b,null)}const v=null!=s?s:"confirm"===c,y=null!==e.autoFocusButton&&(e.autoFocusButton||"ok"),[h]=(0,$.Z)("Modal"),O=d||h,E=a||(v?null==O?void 0:O.okText:null==O?void 0:O.justOkText),w=l||(null==O?void 0:O.cancelText),k=Object.assign({autoFocusButton:y,cancelTextLocale:w,okTextLocale:E,mergedOkCancel:v},p),P=r.useMemo((()=>k),(0,o.Z)(Object.values(k))),S=r.createElement(r.Fragment,null,r.createElement(N,null),r.createElement(B,null)),Z=void 0!==e.title&&null!==e.title,T=`${i}-body`;return r.createElement("div",{className:`${i}-body-wrapper`},r.createElement("div",{className:x()(T,{[`${T}-has-title`]:Z})},g,r.createElement("div",{className:`${i}-paragraph`},Z&&r.createElement("span",{className:`${i}-title`},e.title),r.createElement("div",{className:`${i}-content`},e.content))),void 0===u||"function"==typeof u?r.createElement(I,{value:P},r.createElement("div",{className:`${i}-btns`},"function"==typeof u?u(S,{OkBtn:B,CancelBtn:N}):S)):u,r.createElement(Ye,{prefixCls:n}))}const Qe=e=>{const{close:n,zIndex:t,afterClose:o,open:a,keyboard:l,centered:i,getContainer:c,maskStyle:s,direction:u,prefixCls:d,wrapClassName:f,rootPrefixCls:m,bodyStyle:p,closable:g=!1,closeIcon:b,modalRender:v,focusTriggerAfterClose:y,onConfirm:C,styles:h}=e,$=`${d}-confirm`,k=e.width||416,P=e.style||{},S=void 0===e.mask||e.mask,Z=void 0!==e.maskClosable&&e.maskClosable,T=x()($,`${$}-${e.type}`,{[`${$}-rtl`]:"rtl"===u},e.className),[,j]=(0,w.ZP)(),I=r.useMemo((()=>void 0!==t?t:j.zIndexPopupBase+O.u6),[t,j]);return r.createElement(Xe,{prefixCls:d,className:T,wrapClassName:x()({[`${$}-centered`]:!!e.centered},f),onCancel:()=>{null==n||n({triggerCancel:!0}),null==C||C(!1)},open:a,title:"",footer:null,transitionName:(0,E.m)(m||"","zoom",e.transitionName),maskTransitionName:(0,E.m)(m||"","fade",e.maskTransitionName),mask:S,maskClosable:Z,style:P,styles:Object.assign({body:p,mask:s},h),width:k,zIndex:I,afterClose:o,keyboard:l,centered:i,getContainer:c,closable:g,closeIcon:b,modalRender:v,focusTriggerAfterClose:y},r.createElement(_e,Object.assign({},e,{confirmPrefixCls:$})))};var Je=e=>{const{rootPrefixCls:n,iconPrefixCls:t,direction:o,theme:a}=e;return r.createElement(i.ZP,{prefixCls:n,iconPrefixCls:t,direction:o,theme:a},r.createElement(Qe,Object.assign({},e)))},en=[];let nn="";function tn(){return nn}const on=e=>{var n,t;const{prefixCls:o,getContainer:a,direction:i}=e,c=(0,xe.A)(),s=(0,r.useContext)(l.E_),u=tn()||s.getPrefixCls(),d=o||`${u}-modal`;let f=a;return!1===f&&(f=void 0),r.createElement(Je,Object.assign({},e,{rootPrefixCls:u,prefixCls:d,iconPrefixCls:s.iconPrefixCls,theme:s.theme,direction:null!=i?i:s.direction,locale:null!==(t=null===(n=s.locale)||void 0===n?void 0:n.Modal)&&void 0!==t?t:c,getContainer:f}))};function rn(e){const n=(0,i.w6)(),t=document.createDocumentFragment();let l,c=Object.assign(Object.assign({},e),{close:d,open:!0});function s(){for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];const i=r.some((e=>e&&e.triggerCancel));e.onCancel&&i&&e.onCancel.apply(e,[()=>{}].concat((0,o.Z)(r.slice(1))));for(let e=0;e<en.length;e++)if(en[e]===d){en.splice(e,1);break}(0,a.v)(t)}function u(e){clearTimeout(l),l=setTimeout((()=>{const o=n.getPrefixCls(void 0,tn()),l=n.getIconPrefixCls(),c=n.getTheme(),s=r.createElement(on,Object.assign({},e));(0,a.s)(r.createElement(i.ZP,{prefixCls:o,iconPrefixCls:l,theme:c},n.holderRender?n.holderRender(s):s),t)}))}function d(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];c=Object.assign(Object.assign({},c),{open:!1,afterClose:()=>{"function"==typeof e.afterClose&&e.afterClose(),s.apply(this,t)}}),c.visible&&delete c.visible,u(c)}return u(c),en.push(d),{destroy:d,update:function(e){c="function"==typeof e?e(c):Object.assign(Object.assign({},c),e),u(c)}}}function an(e){return Object.assign(Object.assign({},e),{type:"warning"})}function ln(e){return Object.assign(Object.assign({},e),{type:"info"})}function cn(e){return Object.assign(Object.assign({},e),{type:"success"})}function sn(e){return Object.assign(Object.assign({},e),{type:"error"})}function un(e){return Object.assign(Object.assign({},e),{type:"confirm"})}var dn=t(8745),fn=(0,dn.i)((e=>{const{prefixCls:n,className:t,closeIcon:o,closable:a,type:i,title:c,children:s,footer:u}=e,d=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t}(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:f}=r.useContext(l.E_),m=f(),p=n||f("modal"),g=(0,fe.Z)(m),[b,v,y]=Ge(p,g),C=`${p}-confirm`;let h={};return h=i?{closable:null!=a&&a,title:"",footer:"",children:r.createElement(_e,Object.assign({},e,{prefixCls:p,confirmPrefixCls:C,rootPrefixCls:m,content:s}))}:{closable:null==a||a,title:c,footer:null!==u&&r.createElement(Ee,Object.assign({},e)),children:s},b(r.createElement(J,Object.assign({prefixCls:p,className:x()(v,`${p}-pure-panel`,i&&C,i&&`${C}-${i}`,t,y,g)},d,{closeIcon:Oe(p,o),closable:a},h)))})),mn=t(2113);const pn=(e,n)=>{var t,{afterClose:a,config:i}=e,c=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t}(e,["afterClose","config"]);const[s,u]=r.useState(!0),[d,f]=r.useState(i),{direction:m,getPrefixCls:p}=r.useContext(l.E_),g=p("modal"),b=p(),v=function(){u(!1);for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];const r=n.some((e=>e&&e.triggerCancel));d.onCancel&&r&&d.onCancel.apply(d,[()=>{}].concat((0,o.Z)(n.slice(1))))};r.useImperativeHandle(n,(()=>({destroy:v,update:e=>{f((n=>Object.assign(Object.assign({},n),e)))}})));const y=null!==(t=d.okCancel)&&void 0!==t?t:"confirm"===d.type,[C]=(0,$.Z)("Modal",mn.Z.Modal);return r.createElement(Je,Object.assign({prefixCls:g,rootPrefixCls:b},d,{close:v,open:s,afterClose:()=>{var e;a(),null===(e=d.afterClose)||void 0===e||e.call(d)},okText:d.okText||(y?null==C?void 0:C.okText:null==C?void 0:C.justOkText),direction:d.direction||m,cancelText:d.cancelText||(null==C?void 0:C.cancelText)},c))};var gn=r.forwardRef(pn);let bn=0;const vn=r.memo(r.forwardRef(((e,n)=>{const[t,a]=function(){const[e,n]=r.useState([]);return[e,r.useCallback((e=>(n((n=>[].concat((0,o.Z)(n),[e]))),()=>{n((n=>n.filter((n=>n!==e))))})),[])]}();return r.useImperativeHandle(n,(()=>({patchElement:a})),[]),r.createElement(r.Fragment,null,t)})));function yn(e){return rn(an(e))}const Cn=Xe;Cn.useModal=function(){const e=r.useRef(null),[n,t]=r.useState([]);r.useEffect((()=>{n.length&&((0,o.Z)(n).forEach((e=>{e()})),t([]))}),[n]);const a=r.useCallback((n=>function(a){var l;bn+=1;const i=r.createRef();let c;const s=new Promise((e=>{c=e}));let u,d=!1;const f=r.createElement(gn,{key:`modal-${bn}`,config:n(a),ref:i,afterClose:()=>{null==u||u()},isSilent:()=>d,onConfirm:e=>{c(e)}});u=null===(l=e.current)||void 0===l?void 0:l.patchElement(f),u&&en.push(u);const m={destroy:()=>{function e(){var e;null===(e=i.current)||void 0===e||e.destroy()}i.current?e():t((n=>[].concat((0,o.Z)(n),[e])))},update:e=>{function n(){var n;null===(n=i.current)||void 0===n||n.update(e)}i.current?n():t((e=>[].concat((0,o.Z)(e),[n])))},then:e=>(d=!0,s.then(e))};return m}),[]);return[r.useMemo((()=>({info:a(ln),success:a(cn),error:a(sn),warning:a(an),confirm:a(un)})),[]),r.createElement(vn,{key:"modal-holder",ref:e})]},Cn.info=function(e){return rn(ln(e))},Cn.success=function(e){return rn(cn(e))},Cn.error=function(e){return rn(sn(e))},Cn.warning=yn,Cn.warn=yn,Cn.confirm=function(e){return rn(un(e))},Cn.destroyAll=function(){for(;en.length;){const e=en.pop();e&&e()}},Cn.config=function(e){let{rootPrefixCls:n}=e;nn=n},Cn._InternalPanelDoNotUseOrYouWillBeFired=fn;var hn=Cn}}]);