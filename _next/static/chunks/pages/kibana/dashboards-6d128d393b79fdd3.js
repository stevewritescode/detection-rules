(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1675],{88791:function(e,n,t){"use strict";t.d(n,{g2:function(){return P}});var i=t(45697),r=t.n(i),a=t(67294),o=t(94184),l=t.n(o),s=t(16737),c=t(59868),u=t(38790),d=t(7373),p=t(70917),f=["buttonRef","color","fill"],b=["element","baseClassName","children","className","iconType","iconSide","color","size","isDisabled","isLoading","isSelected","contentProps","textProps","fullWidth","minWidth","style"];function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){g(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(){return y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},y.apply(this,arguments)}function v(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function Z(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}[].concat(function(e){if(Array.isArray(e))return Z(e)}(O=c.Sb)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(O)||function(e,n){if(e){if("string"===typeof e)return Z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Z(e,n):void 0}}(O)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),["ghost"]);var O,P=function e(n){var t=n.buttonRef,i=n.color,r=void 0===i?"primary":i,a=n.fill,o=v(n,f),l=(0,u.A)({href:o.href,isDisabled:o.isDisabled||o.disabled,isLoading:o.isLoading})?"disabled":r,s=[(0,c.hD)({display:a?"fill":"base"})["ghost"===l?"text":l],(0,c.Pj)()];return"ghost"===r?(0,p.tZ)(d.k6,{colorMode:"dark"},(0,p.tZ)(e,y({},n,{color:"text"}))):(0,p.tZ)(u.f,y({className:"euiButton",ref:t,css:s},o))};P.propTypes={href:r().string,onClick:r().func,children:r().node,fill:r().bool,color:r().oneOfType([r().any.isRequired,r().oneOf(["ghost"])]),size:r().any,isDisabled:r().bool,className:r().string,"aria-label":r().string,"data-test-subj":r().string,css:r().any,buttonRef:r().any},P.displayName="EuiButton",P.defaultProps={size:"m",color:"primary"};var k={s:"--small",m:null},N={primary:"--primary",accent:"--accent",success:"--success",warning:"--warning",danger:"--danger",ghost:"--ghost",text:"--text"},S=(0,a.forwardRef)((function(e,n){var t=e.element,i=void 0===t?"button":t,r=e.baseClassName,o=e.children,c=e.className,d=e.iconType,f=e.iconSide,m=void 0===f?"left":f,g=e.color,Z=e.size,O=void 0===Z?"m":Z,P=e.isDisabled,S=e.isLoading,j=e.isSelected,x=e.contentProps,w=e.textProps,T=e.fullWidth,C=e.minWidth,D=e.style,_=v(e,b),z=(0,u.A)({isLoading:S,isDisabled:P}),E=l()(r,g&&N[g]?"".concat(r).concat(N[g]):void 0,O&&k[O]?"".concat(r).concat(k[O]):null,T&&"".concat(r,"--fullWidth"),c),I=l()("euiButton__content",x&&x.className),A=l()("euiButton__text",w&&w.className),W=(0,p.tZ)(s.D,y({isLoading:S,iconType:d,iconSide:m,textProps:h(h({},w),{},{className:A})},x,{className:I}),o),B=D;return void 0===C&&null===C||(B=h(h({},B),{},{minWidth:C})),a.createElement(i,h({className:E,style:B,disabled:"button"===i&&z,"aria-pressed":"button"===i?j:void 0,ref:n},_),W)}));S.propTypes={children:r().node,fill:r().bool,color:r().oneOfType([r().any.isRequired,r().oneOf(["ghost"])]),size:r().any,isDisabled:r().bool,className:r().string,"aria-label":r().string,"data-test-subj":r().string,css:r().any,element:r().oneOf(["a","button","span","label"]).isRequired,baseClassName:r().string.isRequired},S.displayName="EuiButtonDisplay"},66650:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kibana/dashboards",function(){return t(79066)}])},17816:function(e,n,t){"use strict";var i=t(35944),r=t(5741),a=t(30986);n.Z=function(){var e=(0,a.Fg)(),n=e.colorMode,t=e.setColorMode,o="dark"===n;return(0,i.tZ)(r.N4,{color:"ghost",iconType:o?"sun":"moon","aria-label":"Change theme",onClick:function(){t(o?"light":"dark")}})}},17146:function(e,n,t){"use strict";t.d(n,{Z:function(){return z}});var i=t(41799),r=t(69396),a=t(99534),o=t(35944),l=t(10797),s=t(67294),c=t(2296),u=t(6863),d=t(86870),p=t(32155),f=t(22902),b=t(32196),m=t(7373),h=t(84832),g=t(66002),y=t(48034),v=t(13239),Z=t(28682),O=t(32034),P=t(13311),k=t.n(P),N=t(30998),S=t.n(N),j=t(70917),x=t(17816),w="/pages",T=[{label:"Home",iconType:"home",isActive:!0,"aria-current":!0,href:"".concat(w,"/kibana"),pinnable:!1}],C=[{label:"Discover",href:"".concat(w,"/kibana/discover")},{label:"Dashboard",href:"".concat(w,"/kibana/dashboards")},{label:"Maps",href:"".concat(w,"/kibana/maps")}],D=function(){var e=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.map((function(e){var t=e.pinned,r=(0,a.Z)(e,["pinned"]);return(0,i.Z)({pinned:!!n&&t},r)}))},n=(0,s.useState)(!1),t=n[0],r=n[1],P=(0,s.useState)(["Kibana"]),N=P[0],D=P[1],_=(0,s.useState)([]),z=_[0],E=_[1],I=(0,c.P)({prefix:"collapsibleNav"}),A=[(0,o.BX)(u.H,{ownFocus:!1,css:(0,j.iv)("margin-top:96px;// two top navs\n        min-height:calc(100vh - 96px);display:flex;"),id:I,"aria-label":"Main navigation",isOpen:t,button:(0,o.tZ)(d.j,{"aria-label":"Toggle main navigation",onClick:function(){return r(!t)},children:(0,o.tZ)(p.pH,{type:"menu",size:"m","aria-hidden":"true"})}),onClose:function(){return r(!1)},children:[(0,o.tZ)(f.J,{grow:!1,style:{flexShrink:0},children:(0,o.tZ)(b.T,{isCollapsible:!1,background:"dark",children:(0,o.tZ)(m.k6,{colorMode:"dark",children:(0,o.tZ)(h.n,{maxWidth:"none",gutterSize:"none",size:"s",listItems:[{label:"Manage deployment",href:"#",iconType:"logoCloud",iconProps:{color:"ghost"}}]})})})}),(0,o.tZ)(f.J,{grow:!1,children:(0,o.tZ)(b.T,{background:"light",children:(0,o.tZ)(g.O,{"aria-label":"Pinned links",listItems:e(T).concat(e(z,!0)),unpinTitle:function(e){return"Unpin ".concat(e.label)},onPinClick:function(e){var n=S()(z,{label:e.label});if(n>-1){e.pinned=!1;var t=z;t.splice(n,1),E((0,l.Z)(t)),localStorage.setItem("pinnedItems",JSON.stringify(t))}},maxWidth:"none",color:"text",gutterSize:"none",size:"s"})})}),(0,o.tZ)(y.Gt,{margin:"none"}),(0,o.tZ)(f.J,{className:"eui-yScroll",children:(0,o.tZ)(b.T,{title:(0,o.tZ)("a",{className:"eui-textInheritColor",href:"#/navigation/collapsible-nav",onClick:function(e){return e.stopPropagation()},children:"Analytics"}),buttonElement:"div",iconType:"logoKibana",isCollapsible:!0,initialIsOpen:N.includes("Kibana"),onToggle:function(e){return function(e,n){if(n){var t=N.includes(n);if(e){if(t)return;N.push(n)}else{var i=N.indexOf(n);i>-1&&N.splice(i,1)}D((0,l.Z)(N)),localStorage.setItem("openNavGroups",JSON.stringify(N))}}(e,"Kibana")},children:(0,o.tZ)(g.O,{"aria-label":"Kibana",listItems:e(C),pinTitle:function(e){return"Pin ".concat(e.label," to top")},onPinClick:function(e){if(e&&!k()(z,{label:e.label})){e.pinned=!0;var n=z?z.concat(e):[e];E(n),localStorage.setItem("pinnedItems",JSON.stringify(n))}},maxWidth:"none",color:"subdued",gutterSize:"none",size:"s"})})})]})];return(0,o.BX)(o.HY,{children:[(0,o.tZ)(v.j,{theme:"dark",position:"fixed",sections:[{items:[(0,o.tZ)(Z.N,{iconType:"logoElastic",href:"".concat(w,"/kibana"),children:"Elastic"},"elastic-logo")],borders:"none"},{items:[(0,o.tZ)(x.Z,{},(0,c.P)()),(0,o.tZ)(d.j,{"aria-label":"Account menu",children:(0,o.tZ)(O.Zs,{name:"John Username",size:"s"})},(0,c.P)())],borders:"none"}]}),(0,o.tZ)(v.j,{position:"fixed",sections:[{items:A,borders:"right"},{items:[(0,o.tZ)(d.j,{"aria-label":"Account menu",children:(0,o.tZ)(O.Zs,{type:"space",name:"Default Space",size:"s"})},(0,c.P)())],breadcrumbs:[{text:"Home"}],borders:"right"}]})]})},_=t(41868),z=function(e){var n=e.children,t=e.pageHeader,l=(0,a.Z)(e,["children","pageHeader"]),s={mainWrapper:(0,j.iv)("min-height:100%;display:flex;flex-direction:column;height:100%;"),contentWrapper:(0,j.iv)("display:flex;flex-flow:column nowrap;flex-grow:1;z-index:0;position:relative;")};return(0,o.BX)("div",{css:s.mainWrapper,children:[(0,o.tZ)(D,{}),(0,o.tZ)("div",{css:s.contentWrapper,children:(0,o.BX)(_.gZ,(0,r.Z)((0,i.Z)({restrictWidth:!0,panelled:!1,bottomBorder:!0},l),{children:[(0,o.tZ)(_.gZ.Header,(0,i.Z)({},t)),(0,o.tZ)(_.gZ.Section,{children:n})]}))})]})}},79066:function(e,n,t){"use strict";t.r(n);var i=t(35944),r=t(41664),a=t.n(r),o=t(88791),l=t(53196),s=t(55670),c=t(17146);n.default=function(){return(0,i.tZ)(c.Z,{pageHeader:{pageTitle:"Dashboards",rightSideItems:[(0,i.tZ)(o.g2,{color:"primary",fill:!0,onClick:function(){console.log("Create dashboard")},children:"Create dashboard"},"create-dashboard")]},children:(0,i.BX)(l.a,{children:[(0,i.tZ)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a erat sed arcu imperdiet eleifend eu vel ante. Nam dapibus lacus id efficitur luctus. Nunc vitae viverra erat, at euismod metus. Nam nec nulla ornare, aliquam arcu in, luctus diam. Phasellus convallis lorem fringilla, dapibus lectus in, pretium dui. Pellentesque massa nulla, tempus ut elit at, scelerisque commodo eros. Proin interdum libero aliquam, volutpat justo ut, posuere nulla."}),(0,i.tZ)(a(),{href:"/kibana/",passHref:!0,children:(0,i.tZ)(s.p,{color:"primary",children:"Go to Kibana home"})})]})})}}},function(e){e.O(0,[3249,8934,1868,6834,1664,9774,2888,179],(function(){return n=66650,e(e.s=n);var n}));var n=e.O();_N_E=n}]);