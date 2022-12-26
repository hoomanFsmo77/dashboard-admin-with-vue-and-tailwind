"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9581],{3376:(t,e,n)=>{n.d(e,{Z:()=>u});var o=n(6252),s=n(3577),a={class:"page-navigation"},i={class:"flex flex-row items-center gap-0.75"},l={key:1},r={key:0,class:"text-[0.9rem] text-gray-600"};const u={__name:"Breadcrumb",props:["pages"],setup:function(t){var e=function(t){return{"link text-blue-700 cursor-pointer":t.link}};return function(n,u){var c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("ul",i,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.pages,(function(n,a){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("li",{class:(0,s.normalizeClass)(["capitalize text-[0.9rem] text-gray-600 font-500",e(n)])},[n.link?((0,o.wg)(),(0,o.j4)(c,{key:0,to:{name:n.link}},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,s.toDisplayString)(n.name),1)]})),_:2},1032,["to"])):((0,o.wg)(),(0,o.iD)("span",l,(0,s.toDisplayString)(n.name),1))],2),(0,o._)("li",null,[a!==t.pages.length-1?((0,o.wg)(),(0,o.iD)("span",r,"/")):(0,o.kq)("v-if",!0)])],64)})),256))])])}}}},8372:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(6252),s=n(3577),a=n(2262),i=n(9728);const l={__name:"CodeExample",props:["value"],setup:function(t){var e=(0,a.iH)(!1);return function(n,l){var r=(0,o.Q2)("collapsible");return(0,o.wg)(),(0,o.iD)("div",(0,s.normalizeProps)((0,o.F4)(n.$attrs)),[(0,o._)("button",{onClick:l[0]||(l[0]=function(t){return e.value=!e.value}),class:"link font-500 !text-[0.9rem]"},"Show code example"),(0,o.wy)((0,o.Wm)((0,a.SU)(i.Z),{class:"v-collapse mt-2",width:"0",min_width:"100%",read_only:!0,value:t.value},null,8,["value"]),[[r,e.value]])],16)}}};const r=(0,n(3744).Z)(l,[["__scopeId","data-v-55c5469b"]])},1658:(t,e,n)=>{n.r(e),n.d(e,{default:()=>_});var o=n(6252),s=n(2262),a=n(3376),i=n(9592),l=n(8372),r=n(6837),u=n(3002),c=(0,o._)("div",{class:"flex justify-between items-center"},[(0,o._)("h5",{class:"font-700"},"Hooman"),(0,o._)("span",{class:"font-500 text-[0.9rem]"},"3 mins ago")],-1),p=(0,o._)("p",{class:"my-0.75 text-[0.9rem]"}," Hello, world! This is a toast message. ",-1);const f={name:"ToastContent"};const m=(0,n(3744).Z)(f,[["render",function(t,e,n,s,a,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[c,p],64)}]]),g={__name:"Toast",props:["type","buttonClass"],setup:function(t){var e=(0,u.pm)(),n=function(){e.success(m,{timeout:3e3,position:"bottom-right",closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!1,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!1,closeButton:"button",icon:!0,rtl:!1})},s=function(){e.error(m,{timeout:3e3,position:"bottom-right",closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!1,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!1,closeButton:"button",icon:!0,rtl:!1})},a=function(){e.info(m,{timeout:3e3,position:"bottom-right",closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!1,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!1,closeButton:"button",icon:!0,rtl:!1})};return function(e,i){return(0,o.wg)(),(0,o.iD)("button",(0,o.dG)((0,o.mx)("success"===t.type?{click:n}:"error"===t.type?{click:s}:"info"===t.type?{click:a}:null,!0),{class:t.buttonClass}),[(0,o.WI)(e.$slots,"default")],16)}}};var d={class:"container-fluid"},b=(0,o._)("h1",{class:"text-primary-dark uppercase tracking-widest !px-0 mt-1.2"},"Notifications",-1),v=(0,o._)("p",{class:"article"}," Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They’re built with flexbox, so they’re easy to align and position. ",-1),w=(0,o._)("p",{class:"article"},[(0,o.Uk)(" Read more about toast in the official "),(0,o._)("a",{href:"https://github.com/Maronato/vue-toastification",class:"link font-500 text-[0.9rem]"},"Vue Toastification")],-1),h={class:"flex flex-col gap-1 mt-1 items-start"};const _={__name:"Notifications",setup:function(t){return function(t,e){var n=(0,o.up)("column"),u=(0,o.up)("row");return(0,o.wg)(),(0,o.iD)("div",d,[(0,o.Wm)(u,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(n,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(a.Z,{pages:[{name:"home",link:"Main"},{name:"Notifications"}]}),b]})),_:1})]})),_:1}),(0,o.Wm)(u,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(n,{col:"12"},{default:(0,o.w5)((function(){return[(0,o.Wm)(i.Z,{title:"Notifications","has-menu":!1,"body-class":"!p-2"},{default:(0,o.w5)((function(){return[v,w,(0,o.Wm)(l.Z,{value:(0,s.SU)(r.yG)},null,8,["value"]),(0,o._)("div",h,[(0,o.Wm)(g,{type:"success","button-class":"btn btn-teal-full btn-sm"},{default:(0,o.w5)((function(){return[(0,o.Uk)(" success message ")]})),_:1}),(0,o.Wm)(g,{type:"error","button-class":"btn btn-red-full btn-sm"},{default:(0,o.w5)((function(){return[(0,o.Uk)(" error message ")]})),_:1}),(0,o.Wm)(g,{type:"info","button-class":"btn btn-sky-full btn-sm"},{default:(0,o.w5)((function(){return[(0,o.Uk)(" info message ")]})),_:1})])]})),_:1})]})),_:1})]})),_:1})])}}}}}]);