import{g as $t,r as kt,_ as Dt,a as Bt,R as rt,T as wt,b as W,c as O,d as v,u as F,e as At,f as Wt,h as Ot,i as Ft,j as r,s as m,k,l as U,m as q,n as Ut,o as Gt,p as P,B as _t,q as Ht,t as et,v as Vt,C as qt,w as Et,S as Jt,x as gt,y as J,z as vt}from"./index-BqMSusfV.js";import{u as lt,F as nt,C as Yt,a as Xt}from"./index-BjaJ1Raf.js";try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="01042ed1-87fc-49f3-8a2f-6da0a8d23563",t._sentryDebugIdIdentifier="sentry-dbid-01042ed1-87fc-49f3-8a2f-6da0a8d23563")}catch{}var Kt=kt();const st=$t(Kt),yt={disabled:!1};var Qt=function(e){return e.scrollTop},ot="unmounted",X="exited",K="entering",Z="entered",xt="exiting",G=function(t){Dt(e,t);function e(o,a){var i;i=t.call(this,o,a)||this;var s=a,l=s&&!s.isMounting?o.enter:o.appear,c;return i.appearStatus=null,o.in?l?(c=X,i.appearStatus=K):c=Z:o.unmountOnExit||o.mountOnEnter?c=ot:c=X,i.state={status:c},i.nextCallback=null,i}e.getDerivedStateFromProps=function(a,i){var s=a.in;return s&&i.status===ot?{status:X}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(a){var i=null;if(a!==this.props){var s=this.state.status;this.props.in?s!==K&&s!==Z&&(i=K):(s===K||s===Z)&&(i=xt)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var a=this.props.timeout,i,s,l;return i=s=l=a,a!=null&&typeof a!="number"&&(i=a.exit,s=a.enter,l=a.appear!==void 0?a.appear:s),{exit:i,enter:s,appear:l}},n.updateStatus=function(a,i){if(a===void 0&&(a=!1),i!==null)if(this.cancelNextCallback(),i===K){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:st.findDOMNode(this);s&&Qt(s)}this.performEnter(a)}else this.performExit();else this.props.unmountOnExit&&this.state.status===X&&this.setState({status:ot})},n.performEnter=function(a){var i=this,s=this.props.enter,l=this.context?this.context.isMounting:a,c=this.props.nodeRef?[l]:[st.findDOMNode(this),l],g=c[0],d=c[1],p=this.getTimeouts(),x=l?p.appear:p.enter;if(!a&&!s||yt.disabled){this.safeSetState({status:Z},function(){i.props.onEntered(g)});return}this.props.onEnter(g,d),this.safeSetState({status:K},function(){i.props.onEntering(g,d),i.onTransitionEnd(x,function(){i.safeSetState({status:Z},function(){i.props.onEntered(g,d)})})})},n.performExit=function(){var a=this,i=this.props.exit,s=this.getTimeouts(),l=this.props.nodeRef?void 0:st.findDOMNode(this);if(!i||yt.disabled){this.safeSetState({status:X},function(){a.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:xt},function(){a.props.onExiting(l),a.onTransitionEnd(s.exit,function(){a.safeSetState({status:X},function(){a.props.onExited(l)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(a,i){i=this.setNextCallback(i),this.setState(a,i)},n.setNextCallback=function(a){var i=this,s=!0;return this.nextCallback=function(l){s&&(s=!1,i.nextCallback=null,a(l))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(a,i){this.setNextCallback(i);var s=this.props.nodeRef?this.props.nodeRef.current:st.findDOMNode(this),l=a==null&&!this.props.addEndListener;if(!s||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],g=c[0],d=c[1];this.props.addEndListener(g,d)}a!=null&&setTimeout(this.nextCallback,a)},n.render=function(){var a=this.state.status;if(a===ot)return null;var i=this.props,s=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var l=Bt(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return rt.createElement(wt.Provider,{value:null},typeof s=="function"?s(a,l):rt.cloneElement(rt.Children.only(s),l))},e}(rt.Component);G.contextType=wt;G.propTypes={};function Q(){}G.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Q,onEntering:Q,onEntered:Q,onExit:Q,onExiting:Q,onExited:Q};G.UNMOUNTED=ot;G.EXITED=X;G.ENTERING=K;G.ENTERED=Z;G.EXITING=xt;function bt(t,e){const{timeout:n,easing:o,style:a={}}=t;return{duration:a.transitionDuration??(typeof n=="number"?n:n[e.mode]||0),easing:a.transitionTimingFunction??(typeof o=="object"?o[e.mode]:o),delay:a.transitionDelay}}function Zt(t){return W("MuiCollapse",t)}O("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const te=t=>{const{orientation:e,classes:n}=t,o={root:["root",`${e}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${e}`],wrapperInner:["wrapperInner",`${e}`]};return U(o,Zt,n)},ee=m("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.orientation],n.state==="entered"&&e.entered,n.state==="exited"&&!n.in&&n.collapsedSize==="0px"&&e.hidden]}})(q(({theme:t})=>({height:0,overflow:"hidden",transition:t.transitions.create("height"),variants:[{props:{orientation:"horizontal"},style:{height:"auto",width:0,transition:t.transitions.create("width")}},{props:{state:"entered"},style:{height:"auto",overflow:"visible"}},{props:{state:"entered",orientation:"horizontal"},style:{width:"auto"}},{props:({ownerState:e})=>e.state==="exited"&&!e.in&&e.collapsedSize==="0px",style:{visibility:"hidden"}}]}))),ne=m("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(t,e)=>e.wrapper})({display:"flex",width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),oe=m("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(t,e)=>e.wrapperInner})({width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),ct=v.forwardRef(function(e,n){const o=F({props:e,name:"MuiCollapse"}),{addEndListener:a,children:i,className:s,collapsedSize:l="0px",component:c,easing:g,in:d,onEnter:p,onEntered:x,onEntering:L,onExit:w,onExited:E,onExiting:S,orientation:I="vertical",style:f,timeout:h=At.standard,TransitionComponent:C=G,...R}=o,j={...o,orientation:I,collapsedSize:l},b=te(j),T=Wt(),D=Ot(),M=v.useRef(null),_=v.useRef(),z=typeof l=="number"?`${l}px`:l,y=I==="horizontal",B=y?"width":"height",H=v.useRef(null),pt=Ft(n,H),A=u=>N=>{if(u){const $=H.current;N===void 0?u($):u($,N)}},ut=()=>M.current?M.current[y?"clientWidth":"clientHeight"]:0,Rt=A((u,N)=>{M.current&&y&&(M.current.style.position="absolute"),u.style[B]=z,p&&p(u,N)}),zt=A((u,N)=>{const $=ut();M.current&&y&&(M.current.style.position="");const{duration:tt,easing:at}=bt({style:f,timeout:h,easing:g},{mode:"enter"});if(h==="auto"){const mt=T.transitions.getAutoHeightDuration($);u.style.transitionDuration=`${mt}ms`,_.current=mt}else u.style.transitionDuration=typeof tt=="string"?tt:`${tt}ms`;u.style[B]=`${$}px`,u.style.transitionTimingFunction=at,L&&L(u,N)}),Pt=A((u,N)=>{u.style[B]="auto",x&&x(u,N)}),jt=A(u=>{u.style[B]=`${ut()}px`,w&&w(u)}),Mt=A(E),Tt=A(u=>{const N=ut(),{duration:$,easing:tt}=bt({style:f,timeout:h,easing:g},{mode:"exit"});if(h==="auto"){const at=T.transitions.getAutoHeightDuration(N);u.style.transitionDuration=`${at}ms`,_.current=at}else u.style.transitionDuration=typeof $=="string"?$:`${$}ms`;u.style[B]=z,u.style.transitionTimingFunction=tt,S&&S(u)}),Nt=u=>{h==="auto"&&D.start(_.current||0,u),a&&a(H.current,u)};return r.jsx(C,{in:d,onEnter:Rt,onEntered:Pt,onEntering:zt,onExit:jt,onExited:Mt,onExiting:Tt,addEndListener:Nt,nodeRef:H,timeout:h==="auto"?null:h,...R,children:(u,{ownerState:N,...$})=>r.jsx(ee,{as:c,className:k(b.root,s,{entered:b.entered,exited:!d&&z==="0px"&&b.hidden}[u]),style:{[y?"minWidth":"minHeight"]:z,...f},ref:pt,ownerState:{...j,state:u},...$,children:r.jsx(ne,{ownerState:{...j,state:u},className:b.wrapper,ref:M,children:r.jsx(oe,{ownerState:{...j,state:u},className:b.wrapperInner,children:i})})})})});ct&&(ct.muiSupportAuto=!0);function ie(t){return W("MuiButton",t)}const Y=O("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge","loading","loadingWrapper","loadingIconPlaceholder","loadingIndicator","loadingPositionCenter","loadingPositionStart","loadingPositionEnd"]),ae=v.createContext({}),re=v.createContext(void 0),se=t=>{const{color:e,disableElevation:n,fullWidth:o,size:a,variant:i,loading:s,loadingPosition:l,classes:c}=t,g={root:["root",s&&"loading",i,`${i}${P(e)}`,`size${P(a)}`,`${i}Size${P(a)}`,`color${P(e)}`,n&&"disableElevation",o&&"fullWidth",s&&`loadingPosition${P(l)}`],startIcon:["icon","startIcon",`iconSize${P(a)}`],endIcon:["icon","endIcon",`iconSize${P(a)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]},d=U(g,ie,c);return{...c,...d}},It=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],le=m(_t,{shouldForwardProp:t=>Ht(t)||t==="classes",name:"MuiButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],e[`${n.variant}${P(n.color)}`],e[`size${P(n.size)}`],e[`${n.variant}Size${P(n.size)}`],n.color==="inherit"&&e.colorInherit,n.disableElevation&&e.disableElevation,n.fullWidth&&e.fullWidth,n.loading&&e.loading]}})(q(({theme:t})=>{const e=t.palette.mode==="light"?t.palette.grey[300]:t.palette.grey[800],n=t.palette.mode==="light"?t.palette.grey.A100:t.palette.grey[700];return{...t.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${Y.disabled}`]:{color:(t.vars||t).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(t.vars||t).shadows[2],"&:hover":{boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2]}},"&:active":{boxShadow:(t.vars||t).shadows[8]},[`&.${Y.focusVisible}`]:{boxShadow:(t.vars||t).shadows[6]},[`&.${Y.disabled}`]:{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${Y.disabled}`]:{border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(t.palette).filter(Vt()).map(([o])=>({props:{color:o},style:{"--variant-textColor":(t.vars||t).palette[o].main,"--variant-outlinedColor":(t.vars||t).palette[o].main,"--variant-outlinedBorder":t.vars?`rgba(${t.vars.palette[o].mainChannel} / 0.5)`:et(t.palette[o].main,.5),"--variant-containedColor":(t.vars||t).palette[o].contrastText,"--variant-containedBg":(t.vars||t).palette[o].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(t.vars||t).palette[o].dark,"--variant-textBg":t.vars?`rgba(${t.vars.palette[o].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:et(t.palette[o].main,t.palette.action.hoverOpacity),"--variant-outlinedBorder":(t.vars||t).palette[o].main,"--variant-outlinedBg":t.vars?`rgba(${t.vars.palette[o].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:et(t.palette[o].main,t.palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{color:"inherit",borderColor:"currentColor","--variant-containedBg":t.vars?t.vars.palette.Button.inheritContainedBg:e,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":t.vars?t.vars.palette.Button.inheritContainedHoverBg:n,"--variant-textBg":t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:et(t.palette.text.primary,t.palette.action.hoverOpacity),"--variant-outlinedBg":t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:et(t.palette.text.primary,t.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:t.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:t.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:t.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:t.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:t.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:t.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${Y.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${Y.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{loadingPosition:"center"},style:{transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),[`&.${Y.loading}`]:{color:"transparent"}}}]}})),ce=m("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.startIcon,n.loading&&e.startIconLoadingStart,e[`iconSize${P(n.size)}`]]}})(({theme:t})=>({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},{props:{loadingPosition:"start",loading:!0},style:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}},{props:{loadingPosition:"start",loading:!0,fullWidth:!0},style:{marginRight:-8}},...It]})),de=m("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.endIcon,n.loading&&e.endIconLoadingEnd,e[`iconSize${P(n.size)}`]]}})(({theme:t})=>({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},{props:{loadingPosition:"end",loading:!0},style:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}},{props:{loadingPosition:"end",loading:!0,fullWidth:!0},style:{marginLeft:-8}},...It]})),pe=m("span",{name:"MuiButton",slot:"LoadingIndicator",overridesResolver:(t,e)=>e.loadingIndicator})(({theme:t})=>({display:"none",position:"absolute",visibility:"visible",variants:[{props:{loading:!0},style:{display:"flex"}},{props:{loadingPosition:"start"},style:{left:14}},{props:{loadingPosition:"start",size:"small"},style:{left:10}},{props:{variant:"text",loadingPosition:"start"},style:{left:6}},{props:{loadingPosition:"center"},style:{left:"50%",transform:"translate(-50%)",color:(t.vars||t).palette.action.disabled}},{props:{loadingPosition:"end"},style:{right:14}},{props:{loadingPosition:"end",size:"small"},style:{right:10}},{props:{variant:"text",loadingPosition:"end"},style:{right:6}},{props:{loadingPosition:"start",fullWidth:!0},style:{position:"relative",left:-10}},{props:{loadingPosition:"end",fullWidth:!0},style:{position:"relative",right:-10}}]})),St=m("span",{name:"MuiButton",slot:"LoadingIconPlaceholder",overridesResolver:(t,e)=>e.loadingIconPlaceholder})({display:"inline-block",width:"1em",height:"1em"}),ue=v.forwardRef(function(e,n){const o=v.useContext(ae),a=v.useContext(re),i=Ut(o,e),s=F({props:i,name:"MuiButton"}),{children:l,color:c="primary",component:g="button",className:d,disabled:p=!1,disableElevation:x=!1,disableFocusRipple:L=!1,endIcon:w,focusVisibleClassName:E,fullWidth:S=!1,id:I,loading:f=null,loadingIndicator:h,loadingPosition:C="center",size:R="medium",startIcon:j,type:b,variant:T="text",...D}=s,M=Gt(I),_=h??r.jsx(qt,{"aria-labelledby":M,color:"inherit",size:16}),z={...s,color:c,component:g,disabled:p,disableElevation:x,disableFocusRipple:L,fullWidth:S,loading:f,loadingIndicator:_,loadingPosition:C,size:R,type:b,variant:T},y=se(z),B=(j||f&&C==="start")&&r.jsx(ce,{className:y.startIcon,ownerState:z,children:j||r.jsx(St,{className:y.loadingIconPlaceholder,ownerState:z})}),H=(w||f&&C==="end")&&r.jsx(de,{className:y.endIcon,ownerState:z,children:w||r.jsx(St,{className:y.loadingIconPlaceholder,ownerState:z})}),pt=a||"",A=typeof f=="boolean"?r.jsx("span",{className:y.loadingWrapper,style:{display:"contents"},children:f&&r.jsx(pe,{className:y.loadingIndicator,ownerState:z,children:_})}):null;return r.jsxs(le,{ownerState:z,className:k(o.className,y.root,d,pt),component:g,disabled:p||f,focusRipple:!L,focusVisibleClassName:k(y.focusVisible,E),ref:n,type:b,id:f?M:I,...D,classes:y,children:[B,C!=="end"&&A,l,C==="end"&&A,H]})});function ge(t){return W("MuiCardActions",t)}O("MuiCardActions",["root","spacing"]);const ve=t=>{const{classes:e,disableSpacing:n}=t;return U({root:["root",!n&&"spacing"]},ge,e)},fe=m("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,!n.disableSpacing&&e.spacing]}})({display:"flex",alignItems:"center",padding:8,variants:[{props:{disableSpacing:!1},style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),he=v.forwardRef(function(e,n){const o=F({props:e,name:"MuiCardActions"}),{disableSpacing:a=!1,className:i,...s}=o,l={...o,disableSpacing:a},c=ve(l);return r.jsx(fe,{className:k(c.root,i),ownerState:l,ref:n,...s})}),it=v.createContext({}),dt=v.createContext({});function xe(t){return W("MuiStep",t)}O("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const me=t=>{const{classes:e,orientation:n,alternativeLabel:o,completed:a}=t;return U({root:["root",n,o&&"alternativeLabel",a&&"completed"]},xe,e)},ye=m("div",{name:"MuiStep",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.orientation],n.alternativeLabel&&e.alternativeLabel,n.completed&&e.completed]}})({variants:[{props:{orientation:"horizontal"},style:{paddingLeft:8,paddingRight:8}},{props:{alternativeLabel:!0},style:{flex:1,position:"relative"}}]}),be=v.forwardRef(function(e,n){const o=F({props:e,name:"MuiStep"}),{active:a,children:i,className:s,component:l="div",completed:c,disabled:g,expanded:d=!1,index:p,last:x,...L}=o,{activeStep:w,connector:E,alternativeLabel:S,orientation:I,nonLinear:f}=v.useContext(it);let[h=!1,C=!1,R=!1]=[a,c,g];w===p?h=a!==void 0?a:!0:!f&&w>p?C=c!==void 0?c:!0:!f&&w<p&&(R=g!==void 0?g:!0);const j=v.useMemo(()=>({index:p,last:x,expanded:d,icon:p+1,active:h,completed:C,disabled:R}),[p,x,d,h,C,R]),b={...o,active:h,orientation:I,alternativeLabel:S,completed:C,disabled:R,expanded:d,component:l},T=me(b),D=r.jsxs(ye,{as:l,className:k(T.root,s),ref:n,ownerState:b,...L,children:[E&&S&&p!==0?E:null,i]});return r.jsx(dt.Provider,{value:j,children:E&&!S&&p!==0?r.jsxs(v.Fragment,{children:[E,D]}):D})}),Se=Et(r.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"})),Ce=Et(r.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}));function we(t){return W("MuiStepIcon",t)}const ft=O("MuiStepIcon",["root","active","completed","error","text"]);var Ct;const Ee=t=>{const{classes:e,active:n,completed:o,error:a}=t;return U({root:["root",n&&"active",o&&"completed",a&&"error"],text:["text"]},we,e)},ht=m(Jt,{name:"MuiStepIcon",slot:"Root",overridesResolver:(t,e)=>e.root})(q(({theme:t})=>({display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),color:(t.vars||t).palette.text.disabled,[`&.${ft.completed}`]:{color:(t.vars||t).palette.primary.main},[`&.${ft.active}`]:{color:(t.vars||t).palette.primary.main},[`&.${ft.error}`]:{color:(t.vars||t).palette.error.main}}))),Ie=m("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(t,e)=>e.text})(q(({theme:t})=>({fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily}))),Le=v.forwardRef(function(e,n){const o=F({props:e,name:"MuiStepIcon"}),{active:a=!1,className:i,completed:s=!1,error:l=!1,icon:c,...g}=o,d={...o,active:a,completed:s,error:l},p=Ee(d);if(typeof c=="number"||typeof c=="string"){const x=k(i,p.root);return l?r.jsx(ht,{as:Ce,className:x,ref:n,ownerState:d,...g}):s?r.jsx(ht,{as:Se,className:x,ref:n,ownerState:d,...g}):r.jsxs(ht,{className:x,ref:n,ownerState:d,...g,children:[Ct||(Ct=r.jsx("circle",{cx:"12",cy:"12",r:"12"})),r.jsx(Ie,{className:p.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:d,children:c})]})}return c});function Re(t){return W("MuiStepLabel",t)}const V=O("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),ze=t=>{const{classes:e,orientation:n,active:o,completed:a,error:i,disabled:s,alternativeLabel:l}=t;return U({root:["root",n,i&&"error",s&&"disabled",l&&"alternativeLabel"],label:["label",o&&"active",a&&"completed",i&&"error",s&&"disabled",l&&"alternativeLabel"],iconContainer:["iconContainer",o&&"active",a&&"completed",i&&"error",s&&"disabled",l&&"alternativeLabel"],labelContainer:["labelContainer",l&&"alternativeLabel"]},Re,e)},Pe=m("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.orientation]]}})({display:"flex",alignItems:"center",[`&.${V.alternativeLabel}`]:{flexDirection:"column"},[`&.${V.disabled}`]:{cursor:"default"},variants:[{props:{orientation:"vertical"},style:{textAlign:"left",padding:"8px 0"}}]}),je=m("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(t,e)=>e.label})(q(({theme:t})=>({...t.typography.body2,display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),[`&.${V.active}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${V.completed}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${V.alternativeLabel}`]:{marginTop:16},[`&.${V.error}`]:{color:(t.vars||t).palette.error.main}}))),Me=m("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(t,e)=>e.iconContainer})({flexShrink:0,display:"flex",paddingRight:8,[`&.${V.alternativeLabel}`]:{paddingRight:0}}),Te=m("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(t,e)=>e.labelContainer})(q(({theme:t})=>({width:"100%",color:(t.vars||t).palette.text.secondary,[`&.${V.alternativeLabel}`]:{textAlign:"center"}}))),Lt=v.forwardRef(function(e,n){const o=F({props:e,name:"MuiStepLabel"}),{children:a,className:i,componentsProps:s={},error:l=!1,icon:c,optional:g,slots:d={},slotProps:p={},StepIconComponent:x,StepIconProps:L,...w}=o,{alternativeLabel:E,orientation:S}=v.useContext(it),{active:I,disabled:f,completed:h,icon:C}=v.useContext(dt),R=c||C;let j=x;R&&!j&&(j=Le);const b={...o,active:I,alternativeLabel:E,completed:h,disabled:f,error:l,orientation:S},T=ze(b),D={slots:d,slotProps:{stepIcon:L,...s,...p}},[M,_]=lt("root",{elementType:Pe,externalForwardedProps:{...D,...w},ownerState:b,ref:n,className:k(T.root,i)}),[z,y]=lt("label",{elementType:je,externalForwardedProps:D,ownerState:b}),[B,H]=lt("stepIcon",{elementType:j,externalForwardedProps:D,ownerState:b});return r.jsxs(M,{..._,children:[R||B?r.jsx(Me,{className:T.iconContainer,ownerState:b,children:r.jsx(B,{completed:h,active:I,error:l,icon:R,...H})}):null,r.jsxs(Te,{className:T.labelContainer,ownerState:b,children:[a?r.jsx(z,{...y,className:k(T.label,y==null?void 0:y.className),children:a}):null,g]})]})});Lt.muiName="StepLabel";function Ne(t){return W("MuiStepConnector",t)}O("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);const $e=t=>{const{classes:e,orientation:n,alternativeLabel:o,active:a,completed:i,disabled:s}=t,l={root:["root",n,o&&"alternativeLabel",a&&"active",i&&"completed",s&&"disabled"],line:["line",`line${P(n)}`]};return U(l,Ne,e)},ke=m("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.orientation],n.alternativeLabel&&e.alternativeLabel,n.completed&&e.completed]}})({flex:"1 1 auto",variants:[{props:{orientation:"vertical"},style:{marginLeft:12}},{props:{alternativeLabel:!0},style:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"}}]}),De=m("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.line,e[`line${P(n.orientation)}`]]}})(q(({theme:t})=>{const e=t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600];return{display:"block",borderColor:t.vars?t.vars.palette.StepConnector.border:e,variants:[{props:{orientation:"horizontal"},style:{borderTopStyle:"solid",borderTopWidth:1}},{props:{orientation:"vertical"},style:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}]}})),Be=v.forwardRef(function(e,n){const o=F({props:e,name:"MuiStepConnector"}),{className:a,...i}=o,{alternativeLabel:s,orientation:l="horizontal"}=v.useContext(it),{active:c,disabled:g,completed:d}=v.useContext(dt),p={...o,alternativeLabel:s,orientation:l,active:c,completed:d,disabled:g},x=$e(p);return r.jsx(ke,{className:k(x.root,a),ref:n,ownerState:p,...i,children:r.jsx(De,{className:x.line,ownerState:p})})});function Ae(t){return W("MuiStepContent",t)}O("MuiStepContent",["root","last","transition"]);const We=t=>{const{classes:e,last:n}=t;return U({root:["root",n&&"last"],transition:["transition"]},Ae,e)},Oe=m("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.last&&e.last]}})(q(({theme:t})=>({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:t.vars?`1px solid ${t.vars.palette.StepContent.border}`:`1px solid ${t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600]}`,variants:[{props:{last:!0},style:{borderLeft:"none"}}]}))),Fe=m(ct,{name:"MuiStepContent",slot:"Transition",overridesResolver:(t,e)=>e.transition})({}),Ue=v.forwardRef(function(e,n){const o=F({props:e,name:"MuiStepContent"}),{children:a,className:i,TransitionComponent:s=ct,transitionDuration:l="auto",TransitionProps:c,slots:g={},slotProps:d={},...p}=o,{orientation:x}=v.useContext(it),{active:L,last:w,expanded:E}=v.useContext(dt),S={...o,last:w},I=We(S);let f=l;l==="auto"&&!s.muiSupportAuto&&(f=void 0);const h={slots:g,slotProps:{transition:c,...d}},[C,R]=lt("transition",{elementType:Fe,externalForwardedProps:h,ownerState:S,className:I.transition,additionalProps:{in:L||E,timeout:f,unmountOnExit:!0}});return r.jsx(Oe,{className:k(I.root,i),ref:n,ownerState:S,...p,children:r.jsx(C,{as:s,...R,children:a})})});function Ge(t){return W("MuiStepper",t)}O("MuiStepper",["root","horizontal","vertical","nonLinear","alternativeLabel"]);const _e=t=>{const{orientation:e,nonLinear:n,alternativeLabel:o,classes:a}=t;return U({root:["root",e,n&&"nonLinear",o&&"alternativeLabel"]},Ge,a)},He=m("div",{name:"MuiStepper",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.orientation],n.alternativeLabel&&e.alternativeLabel,n.nonLinear&&e.nonLinear]}})({display:"flex",variants:[{props:{orientation:"horizontal"},style:{flexDirection:"row",alignItems:"center"}},{props:{orientation:"vertical"},style:{flexDirection:"column"}},{props:{alternativeLabel:!0},style:{alignItems:"flex-start"}}]}),Ve=r.jsx(Be,{}),qe=v.forwardRef(function(e,n){const o=F({props:e,name:"MuiStepper"}),{activeStep:a=0,alternativeLabel:i=!1,children:s,className:l,component:c="div",connector:g=Ve,nonLinear:d=!1,orientation:p="horizontal",...x}=o,L={...o,nonLinear:d,alternativeLabel:i,orientation:p,component:c},w=_e(L),E=v.Children.toArray(s).filter(Boolean),S=E.map((f,h)=>v.cloneElement(f,{index:h,last:h+1===E.length,...f.props})),I=v.useMemo(()=>({activeStep:a,alternativeLabel:i,connector:g,nonLinear:d,orientation:p}),[a,i,g,d,p]);return r.jsx(it.Provider,{value:I,children:r.jsx(He,{as:c,ownerState:L,className:k(w.root,l),ref:n,...x,children:S})})}),Xe=()=>{const t=[{title:"Senior Product Manager",company:"Lowe's Companies, Inc.",date:"May 2024 - Present",description:["Delivered internal platform products powering clickstream analytics and ETL automation, enabling 15k+ transactions/sec and orchestrating 500k+ monthly Airflow jobs across mission-critical retail systems.","Led architecture and adoption of in-house analytics platform, reducing third-party tool costs and improving data latency — generating ~$4M in annual savings.","Mentored PMs and engineers on platform thinking and user-centered design, aligning execution with long-term strategy."]},{title:"Product Manager / Lead Developer",company:"Virtual Technology Simplified (Acquired by Ceinsys Geospatial)",date:"Feb 2022 - May 2024 (2 Years 4 Months)",description:["Built and launched a scalable 3D capture platform from the ground up (React, Node.js, AWS). Automated field-data processing, reducing time on site by 80% and powering daily ops across thousands of job sites.","Product strategy and execution contributed to Ceinsys’ acquisition of VTS — driven by rapid growth in field ops adoption and differentiated 3D capture capabilities."]},{title:"Product Owner / Product Manager",company:"FARO Technologies",date:"June 2018 - Feb 2022 (3 Years 9 Months)",description:["Drove development and launch of cloud collaboration (Sphere) and 3D data inspection (BuildIT) tools. Achieved 120% QoQ revenue growth by aligning feature delivery with high-value workflows for construction and manufacturing customers.","Delivered executive-level initiatives and guided company strategy through customer interactions and technical demonstrations."]},{title:"Senior Field Application Engineer",company:"FARO Technologies",date:"Dec 2016 - Jun 2018 (1 Year 7 Months)",description:["Generated a technical training program for Architecture, Engineering, and Construction (AEC) customers to improve time to implementation for FARO products, generating a new revenue stream for the company.","Utilized creative problem-solving skills to overcome technical challenges in the sales process and contributed to product innovation by identifying areas for improvement based on customer feedback and field experience.","Developed and implemented product marketing plans to reach target customers.","Updated technical documentation, product specifications, and technical training materials.","Helped customers improve results by recommending changes focused on lowering costs, increasing production, or adding new functionality."]},{title:"Field Application Engineer",company:"FARO Technologies",date:"Jun 2015 - Dec 2016 (1 Year 7 Months)",description:["Presented at industry conferences to showcase company products while building brand awareness within the marketplace.","Delivered technical presentations matching audience level of expertise to explain products and services to customers.","Helped team implement successful sales strategies for complex engineering projects.","Spearheaded the resolution of critical field issues, minimizing system disruptions and maintaining high levels of customer satisfaction.","Streamlined the debugging process by developing efficient troubleshooting techniques for field issues."]},{title:"Engineering Intern",company:"City of Bradenton  - Public Works Department",date:"Mar 2012 - May 2015 (3 Years 3 Months)",description:["Reviewed and inspected multiple aspects of infrastructure and commercial construction including utility testing, shop drawings, specification creation and permitting.","Instrumental in creating a ten year capital improvements program for wastewater rehabilitation and facilities.","Compiled and mapped the City's Lift Station system into ArcGIS using historical plans from 50+ years and field identification and inspection.","Participated in data collection and analysis with an integral water supply research project (Aquifer Storage and Recovery)."]}],e=["Product Management","Product Development","Agile","SAFe","Mentoring","Distributed Teams","CAD","GIS","Reality Capture","Product Marketing","Javascript (React, React Native, Node, Express)","MongoDB","AWS (S3, EC2, Rekognition, Lambda)","Docker","Swift","ARKit (SceneKit, RealityKit)"],n=[{title:"User Journey Tracking",description:"Aiding teams to understand how end users interact with their applicaitons."},{title:"Airflow",description:"Internally hosted and customized Airflow to handle business critical applications."},{title:"Tesseract",description:"Automated and scheduled test execution for end to end testing."},{title:"360Capture",description:"Leverage the knowledge of your team to provide real-time data on the condition of your assets and equipment via data collection.",link:"https://www.vtscapture.com/",linkText:"360Capture"},{title:"FARO Sphere",description:"A cloud-based digital reality platform that provides its users a centralized, collaborative experience across the company’s reality capture and 3D modeling applications.",link:"https://www.faro.com/en/LP/FARO-Sphere",linkText:"Faro Sphere"},{title:"BuildIT Construction",description:"Automate inspection and layout of 3D construction data for continuous construction verification.",link:"https://www.faro.com/en/Products/Software/BuildIT-Construction",linkText:"BuildIT Construction"}];return r.jsxs(gt,{sx:{height:"100%",marginTop:"60px",padding:"20px"},id:"about",justifyContent:"center",alignItems:"center",spacing:4,children:[r.jsx(nt,{children:r.jsx(J,{variant:"h3",children:"Work Experience"})}),r.jsxs(nt,{children:[r.jsx(J,{variant:"h4",children:"Products I've Worked On"}),r.jsx(gt,{spacing:{xs:2,lg:4},direction:{sx:"column",md:"row"},children:n.map((o,a)=>r.jsxs(Yt,{sx:{width:200},children:[r.jsxs(Xt,{children:[r.jsx(J,{variant:"h6",children:o.title}),r.jsx(J,{children:o.description})]}),o.link&&r.jsx(he,{children:r.jsx(ue,{href:o.link,children:o.linkText})})]},a))})]}),r.jsx(J,{variant:"h4",children:"Resume"}),r.jsx(qe,{orientation:"vertical",children:t.map((o,a)=>r.jsx(be,{active:!0,children:r.jsxs(nt,{children:[r.jsx(Lt,{sx:{"& .MuiStepLabel-label":{fontSize:"20px"}},children:r.jsx("strong",{children:o.title})}),r.jsxs(Ue,{children:[r.jsx("h3",{children:o.company}),r.jsx("h4",{children:o.date}),r.jsx("ul",{children:o.description.map((i,s)=>r.jsx("li",{children:i},s))})]})]})},a))}),r.jsxs(nt,{children:[r.jsx(J,{variant:"h4",children:"Education & Skills"}),r.jsxs(gt,{spacing:3,direction:{xs:"column",sm:"row"},children:[r.jsxs(vt,{children:[r.jsx("h3",{children:"University of South Florida"}),r.jsx("h4",{children:"Bachelors of Science in Mechanical Engineering"})]}),r.jsx(vt,{children:r.jsx("ul",{children:e.map((o,a)=>r.jsx("li",{children:o},a))})})]})]}),r.jsxs(nt,{children:[r.jsx(J,{variant:"h4",children:"Patent"}),r.jsx(vt,{children:r.jsx("ul",{children:r.jsxs("li",{children:[r.jsx("strong",{children:'"Laser Projection System"'})," - US-11988889-B2, US20210149144-A1 · A light projector and method of aligning the light projector is provided. A light projector steers an outgoing beam of light onto an object, passing light returned from the object through a focusing lens onto an optical detector. The light projector may generate a light pattern or template by rapidly moving the outgoing beam of light along a path on a surface. To place the light pattern/template in a desired location, the light projector may be aligned with an electronic model."]})})})]})]})};export{Xe as default};
//# sourceMappingURL=About-BSBBFKHe.js.map
