"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1748],{5531:(t,e,s)=>{s.d(e,{Z:()=>o});var a=s(6252),n=s(3577),r={class:"page-navigation"},l={class:"flex flex-row items-center gap-0.75"},i={key:1},c={key:0,class:"text-[0.9rem] text-gray-600"};const o={__name:"Breadcrumb",props:["pages"],setup:function(t){var e=function(t){return{"link text-blue-700 cursor-pointer":t.link}};return function(s,o){var u=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("ul",l,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.pages,(function(s,r){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("li",{class:(0,n.normalizeClass)(["capitalize text-[0.9rem] text-gray-600 font-500",e(s)])},[s.link?((0,a.wg)(),(0,a.j4)(u,{key:0,to:{name:s.link}},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,n.toDisplayString)(s.name),1)]})),_:2},1032,["to"])):((0,a.wg)(),(0,a.iD)("span",i,(0,n.toDisplayString)(s.name),1))],2),(0,a._)("li",null,[r!==t.pages.length-1?((0,a.wg)(),(0,a.iD)("span",c,"/")):(0,a.kq)("v-if",!0)])],64)})),256))])])}}}},8444:(t,e,s)=>{s.d(e,{Z:()=>d});var a=s(6252),n=s(3577),r=s(2262),l={class:"cms-card card p-1 px-1.6"},i={class:"flex justify-between items-start"},c={class:"text-right"},o={class:"mt-1"},u={class:"tracking-widest text-gray-600 text-left uppercase"},m={class:"progress-bar progress-bar-big mt-1"};const d={__name:"CmsCard",props:["icon","title","achieve","change","state","theme","progress"],setup:function(t){var e=t,s={"bg-red-600":"red"===e.theme,"bg-sky-600":"blue"===e.theme,"bg-indigo-600":"indigo"===e.theme,"bg-green-600":"green"===e.theme};return function(e,d){return(0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("div",i,[(0,a._)("i",{class:(0,n.normalizeClass)(["text-2",[t.icon,e.$textColor(t.theme)]])},null,2),(0,a._)("div",c,[(0,a._)("h5",{class:(0,n.normalizeClass)([e.$textColor(t.theme),"font-700"])},(0,n.toDisplayString)(t.achieve),3),(0,a._)("span",{class:(0,n.normalizeClass)(["increase"===t.state?"bg-green-200  text-green-700":"bg-red-200  text-red-700","category-card !py-0.25 !px-[0.3rem] md:text-[0.7rem] mx-0.25 text-[0.6rem]"])},[(0,a._)("i",{class:(0,n.normalizeClass)("increase"===t.state?"bi bi-arrow-up":"bi bi-arrow-down")},null,2),(0,a.Uk)(" "+(0,n.toDisplayString)("increase"===t.state?"+":"-")+(0,n.toDisplayString)(t.change),1)],2)])]),(0,a._)("div",o,[(0,a._)("h6",u,(0,n.toDisplayString)(t.title),1),(0,a._)("div",m,[(0,a._)("div",{class:(0,n.normalizeClass)(["inner",(0,r.SU)(s)]),style:(0,n.normalizeStyle)({width:t.progress})},null,6)])])])}}}},6560:(t,e,s)=>{s.d(e,{Z:()=>o});var a=s(6252),n=s(3577),r={class:"card p-1.3"},l={class:"flex justify-between items-start"},i={class:"font-700 text-[0.9rem] text-primary-dark"},c=(0,a._)("div",null,[(0,a._)("span",{class:"text-gray-700 text-0.75"},"May 23 - June 01 (2018)")],-1);const o={__name:"ProjectCard",props:["title","achieve","theme","icon"],setup:function(t){return function(e,s){return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",l,[(0,a._)("div",null,[(0,a._)("span",i,(0,n.toDisplayString)(t.title),1),(0,a._)("h3",{class:(0,n.normalizeClass)(["font-700",e.$textColor(t.theme)])},(0,n.toDisplayString)(t.achieve),3)]),(0,a._)("span",{class:(0,n.normalizeClass)(["icon-wrapper !h-3 !w-3",e.$bgColor(t.theme)])},[(0,a._)("i",{class:(0,n.normalizeClass)(["text-1.5",[t.icon,e.$textColor(t.theme)]])},null,2)],2)]),c])}}}},1748:(t,e,s)=>{s.r(e),s.d(e,{default:()=>zt});var a=s(6252),n=s(2262),r=s(3577),l=s(5531),i=s(7501),c=s(5881),o={class:"card p-1.5 flex justify-between items-center"},u={class:"uppercase font-400 text-1 text-gray-600 tracking-widest"};const m={__name:"StaticCard2",props:["title","icon","achieve","income","state","theme"],setup:function(t){return function(e,s){return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",null,[(0,a._)("span",u,(0,r.toDisplayString)(t.title),1),(0,a._)("h3",{class:(0,r.normalizeClass)(["my-0.5 font-400",e.$textColor(t.theme)])},(0,r.toDisplayString)(t.achieve),3),(0,a._)("span",null,[(0,a.Uk)((0,r.toDisplayString)(t.income)+" ",1),(0,a._)("i",{class:(0,r.normalizeClass)(["ml-0.5 text-[0.9rem]",[{"bi bi-arrow-up":"increase"===t.state,"bi bi-arrow-down":"decrease"===t.state},e.$textColor(t.theme)]])},null,2)])]),(0,a._)("div",null,[(0,a._)("span",{class:(0,r.normalizeClass)(["icon-wrapper !w-5 !h-5",e.$bgColor(t.theme)])},[(0,a._)("i",{class:(0,r.normalizeClass)([[e.$textColor(t.theme),t.icon],"text-2"])},null,2)],2)])])}}};var d={class:"card p-2 text-center"},f={class:"font-700 text-[0.9rem] text-primary-dark"},p={class:"my-0.5 flex items-center gap-0.5 justify-center"},_={class:"text-1.5 font-800 text-primary-dark"},g={class:"text-[0.9rem] font-500 text-gray-700"};const x={name:"StaticCard3",props:["title","achieve","change","state"]};const y=(0,s(3744).Z)(x,[["render",function(t,e,s,n,l,i){return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("span",f,(0,r.toDisplayString)(s.title),1),(0,a._)("div",p,[(0,a._)("i",{class:(0,r.normalizeClass)(["text-2 font-700",{"bi bi-arrow-up-short text-sky-600":"increase"===s.state,"bi bi-arrow-down-short text-red-600":"decrease"===s.state}])},null,2),(0,a._)("span",_,(0,r.toDisplayString)(s.achieve),1)]),(0,a._)("span",g,(0,r.toDisplayString)(s.change)+" "+(0,r.toDisplayString)(s.state),1)])}]]);var w={class:"card p-2 flex flex-col justify-center items-center gap-0.5"},h={class:"flex items-center gap-0.5"},b={class:"text-primary-dark text-1.4 font-500"},v={class:"text-[0.9rem] text-gray-700"};const k={__name:"StaticCard4",props:["icon","achieve","title","change","btn","theme","link"],setup:function(t){return function(e,s){var n=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",w,[(0,a._)("span",{class:(0,r.normalizeClass)(["icon-wrapper !w-5 !h-5",e.$bgColor(t.theme)])},[(0,a._)("i",{class:(0,r.normalizeClass)(["text-2",[t.icon,e.$textColor(t.theme)]])},null,2)],2),(0,a._)("div",h,[(0,a._)("span",{class:(0,r.normalizeClass)([e.$textColor(t.theme),"text-1.5 font-700"])},(0,r.toDisplayString)(t.achieve),3),(0,a._)("span",b,(0,r.toDisplayString)(t.title),1)]),(0,a._)("span",v,(0,r.toDisplayString)(t.change)+" change",1),(0,a.Wm)(n,{to:{name:t.link},class:(0,r.normalizeClass)(["btn mt-1.4",e.$btnColor(t.theme)])},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.toDisplayString)(t.btn),1)]})),_:1},8,["to","class"])])}}};var W=s(8616),C=s(6837),S=s(9592),D=s(8444),j=s(6560);function z(t){return function(t){if(Array.isArray(t))return $(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return $(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);"Object"===s&&t.constructor&&(s=t.constructor.name);if("Map"===s||"Set"===s)return Array.from(t);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return $(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,a=new Array(e);s<e;s++)a[s]=t[s];return a}var U={class:"container-fluid"},Z=(0,a._)("h1",{class:"text-primary-dark uppercase tracking-widest !px-0 mt-1.2"},"Stats Widgets",-1),A={class:"card p-1.3"},H=(0,a._)("div",{class:"flex flex-wrap justify-between items-center"},[(0,a._)("div",null,[(0,a._)("span",{class:"font-600 text-primary-dark text-[0.9rem]"},"Publish New Theme"),(0,a._)("br"),(0,a._)("span",{class:"text-1 text-sky-600"},"Web Design")]),(0,a._)("button",{class:"btn btn-primary-full"}," completed ")],-1),Y=(0,a._)("p",{class:"text-gray-700 text-[0.9rem] py-1"},"Lorem ipsum dolor sit amet, contetur adipisng elit. A ab amet arcecto atque dolorque natus nuuam pariatur repudae sunt tenetur! ",-1),K=(0,a._)("div",{class:"flex gap-1"},[(0,a._)("div",{class:"flex flex-col gap-0.5"},[(0,a._)("h3",{class:"font-700 text-primary-dark"},"23"),(0,a._)("span",{class:"text-gray-700 text-[0.8rem]"},"Updates")]),(0,a._)("div",{class:"flex flex-col gap-0.5"},[(0,a._)("h3",{class:"font-700 text-primary-dark"},"2"),(0,a._)("span",{class:"text-gray-700 text-[0.8rem]"},"Milestones")])],-1),T={class:"my-1 flex"},O=(0,a._)("div",{class:"progress-bar progress-bar-big"},[(0,a._)("div",{class:"inner w-[50%] bg-primary-indigo"})],-1),q={class:"card p-1.3"},M=(0,a._)("div",{class:"flex flex-wrap justify-between items-center"},[(0,a._)("div",null,[(0,a._)("span",{class:"font-600 text-primary-dark text-[0.9rem]"},"Publish New Theme"),(0,a._)("br"),(0,a._)("span",{class:"text-1 text-teal-600"},"Web Design")]),(0,a._)("button",{class:"btn btn-teal-full"}," completed ")],-1),P=(0,a._)("p",{class:"text-gray-700 text-[0.9rem] py-1"},"Lorem ipsum dolor sit amet, contetur adipisng elit. A ab amet arcecto atque dolorque natus nuuam pariatur repudae sunt tenetur! ",-1),E=(0,a._)("div",{class:"flex gap-1"},[(0,a._)("div",{class:"flex flex-col gap-0.5"},[(0,a._)("h3",{class:"font-700 text-primary-dark"},"23"),(0,a._)("span",{class:"text-gray-700 text-[0.8rem]"},"Updates")]),(0,a._)("div",{class:"flex flex-col gap-0.5"},[(0,a._)("h3",{class:"font-700 text-primary-dark"},"2"),(0,a._)("span",{class:"text-gray-700 text-[0.8rem]"},"Milestones")])],-1),I={class:"my-1 flex"},L=(0,a._)("div",{class:"progress-bar progress-bar-big"},[(0,a._)("div",{class:"inner w-[80%] bg-teal-600"})],-1),N={class:"card p-1"},V=(0,a._)("div",null,[(0,a._)("h2",{class:"text-primary-dark font-600"},"625"),(0,a._)("span",{class:"text-gray-600 text-1.1"},"New Customers"),(0,a._)("div",{class:"progress-bar mt-1.3 h-[9px]"},[(0,a._)("div",{class:"inner w-[70%] bg-sky-500"})])],-1),B=(0,a._)("div",{class:"px-1 text-center h-full flex flex-col justify-between"},[(0,a._)("h4",{class:"text-primary-dark font-600"},"625"),(0,a._)("span",{class:"text-gray-600 text-1"},"Affiliates"),(0,a._)("div",{class:"divider"}),(0,a._)("span",{class:"text-gray-600 text-1"},"+10")],-1),J=(0,a._)("div",{class:"px-1 text-center h-full flex flex-col justify-between"},[(0,a._)("h4",{class:"text-primary-dark font-600"},"625"),(0,a._)("span",{class:"text-gray-600 text-1"},"SEM"),(0,a._)("div",{class:"divider"}),(0,a._)("span",{class:"text-gray-600 text-1"},"+10")],-1),R={class:"card p-2"},F=(0,a._)("i",{class:"bi bi-arrow-down text-1.7 text-red-600"},null,-1),G=(0,a._)("div",{class:"w-full"},[(0,a._)("h2",{class:"text-primary-dark font-600"},"1,123"),(0,a._)("span",{class:"text-gray-600 text-1 my-0.5"},"Affiliate Sales"),(0,a._)("div",{class:"progress-bar mt-1 h-[9px]"},[(0,a._)("div",{class:"inner w-[70%] bg-red-500"})])],-1),Q=(0,a._)("i",{class:"bi bi-arrow-up text-1.7 text-green-600"},null,-1),X=(0,a._)("div",{class:"w-full"},[(0,a._)("h2",{class:"text-primary-dark font-600"},"1,123"),(0,a._)("span",{class:"text-gray-600 text-1 my-0.5"},"Ads Sales"),(0,a._)("div",{class:"progress-bar mt-1 h-[9px]"},[(0,a._)("div",{class:"inner w-[70%] bg-green-500"})])],-1),tt=(0,a._)("h1",{class:"text-center text-primary-dark text-3.5 leading-1"},"865",-1),et=(0,a._)("div",{class:"mt-1 flex justify-between items-center"},[(0,a._)("div",null,[(0,a._)("span",{class:"text-[0.85rem] text-gray-700"},"Tabs"),(0,a._)("h4",{class:"font-700 text-green-600 mt-0.75"},"456")]),(0,a._)("div",null,[(0,a._)("span",{class:"text-[0.85rem] text-gray-700"},"Spaces"),(0,a._)("h4",{class:"font-700 text-indigo-600 mt-0.75"},"125")])],-1),st=(0,a._)("span",{class:"icon-wrapper !w-5 !h-5 !bg-indigo-200 m-auto"},[(0,a._)("i",{class:"bi bi-pie-chart text-2 text-indigo-600"})],-1),at=(0,a._)("div",{class:"mt-1 flex justify-between items-center"},[(0,a._)("div",null,[(0,a._)("span",{class:"text-[0.85rem] text-gray-700"},"Happy"),(0,a._)("h4",{class:"font-700 text-pink-600 mt-0.75"},"456")]),(0,a._)("div",null,[(0,a._)("span",{class:"text-[0.85rem] text-gray-700"},"Ecstatic"),(0,a._)("h4",{class:"font-700 text-sky-600 mt-0.75"},"125")])],-1),nt=(0,a._)("h2",{class:"text-primary-dark font-700 leading-1"},"72.5%",-1),rt=(0,a._)("div",{class:"flex justify-between items-center my-1"},[(0,a._)("span",{class:"text-[0.85rem] text-gray-600"},"Sales"),(0,a._)("div",{class:"flex items-center gap-1 w-[70%]"},[(0,a._)("div",{class:"progress-bar !h-[8px]"},[(0,a._)("div",{class:"inner bg-indigo-700 w-[70%]"})]),(0,a._)("span",{class:"text-[0.85rem] text-gray-600"},"70%")])],-1),lt=(0,a._)("div",{class:"flex justify-between items-center my-1"},[(0,a._)("span",{class:"text-[0.85rem] text-gray-600"},"Ads"),(0,a._)("div",{class:"flex items-center gap-1 w-[70%]"},[(0,a._)("div",{class:"progress-bar !h-[8px]"},[(0,a._)("div",{class:"inner bg-sky-700 w-[40%]"})]),(0,a._)("span",{class:"text-[0.85rem] text-gray-600"},"40%")])],-1),it=(0,a._)("div",{class:"flex justify-between items-center my-1"},[(0,a._)("span",{class:"text-[0.85rem] text-gray-600"},"Campaigns"),(0,a._)("div",{class:"flex items-center gap-1 w-[70%]"},[(0,a._)("div",{class:"progress-bar !h-[8px]"},[(0,a._)("div",{class:"inner bg-red-700 w-[90%]"})]),(0,a._)("span",{class:"text-[0.85rem] text-gray-600"},"90%")])],-1),ct=(0,a._)("div",{class:"flex justify-between items-center my-1"},[(0,a._)("span",{class:"text-[0.85rem] text-gray-600"},"Subscribers"),(0,a._)("div",{class:"flex items-center gap-1 w-[70%]"},[(0,a._)("div",{class:"progress-bar !h-[8px]"},[(0,a._)("div",{class:"inner bg-teal-700 w-[98%]"})]),(0,a._)("span",{class:"text-[0.85rem] text-gray-600"},"98%")])],-1),ot=(0,a._)("div",{class:"p-2"},[(0,a._)("h2",{class:"font-700 text-primary-dark leading-1"},"$928"),(0,a._)("div",{class:"flex justify-between items-center my-1"},[(0,a._)("span",{class:"text-gray-600 text-[0.85rem] font-400"},"Planned for next month "),(0,a._)("span",{class:"text-primary-dark font-500"},"$1253")]),(0,a._)("div",{class:"progress-bar progress-bar-big"},[(0,a._)("div",{class:"inner bg-teal-700 w-[60%]"})])],-1),ut=(0,a._)("div",{class:"card-footer !p-1 flex justify-end"},[(0,a._)("button",{class:"btn-teal-full btn"},"Take action")],-1),mt=(0,a._)("div",{class:"p-2"},[(0,a._)("h2",{class:"font-700 text-primary-dark leading-1"},"326"),(0,a._)("div",{class:"flex justify-between items-center my-1"},[(0,a._)("span",{class:"text-gray-600 text-[0.85rem] font-400"},"Planned for next month "),(0,a._)("span",{class:"text-primary-dark font-500"},"391")]),(0,a._)("div",{class:"progress-bar progress-bar-big"},[(0,a._)("div",{class:"inner bg-indigo-700 w-[60%]"})])],-1),dt=(0,a._)("div",{class:"card-footer !p-1 flex justify-end"},[(0,a._)("button",{class:"btn-primary-full btn"},"Take action")],-1),ft=(0,a._)("div",{class:"p-2"},[(0,a._)("h2",{class:"font-700 text-primary-dark leading-1"},"$928"),(0,a._)("div",{class:"flex justify-between items-center my-1"},[(0,a._)("span",{class:"text-gray-600 text-[0.85rem] font-400"},"Planned for next month "),(0,a._)("span",{class:"text-primary-dark font-500"},"$1253")]),(0,a._)("div",{class:"progress-bar progress-bar-big"},[(0,a._)("div",{class:"inner bg-red-700 w-[60%]"})])],-1),pt=(0,a._)("div",{class:"card-footer !p-1 flex justify-end"},[(0,a._)("button",{class:"btn-red-full btn"},"Take action")],-1),_t={class:"text-primary-dark font-700 text-[0.9rem]"},gt={class:"card p-1.1 !px-1.5"},xt=(0,a._)("h6",{class:"tracking-widest text-gray-600 text-left uppercase mb-0.5"},"Earnings",-1),yt=(0,a._)("div",{class:"flex items-center justify-between"},[(0,a._)("h5",{class:"font-700"},"$10,000"),(0,a._)("h5",{class:"font-700 text-red-600"},"-20.2%")],-1),wt=(0,a._)("div",{class:"progress-bar progress-bar-big mt-0.75"},[(0,a._)("div",{class:"inner bg-red-600 w-[30%]"})],-1),ht=(0,a._)("h6",{class:"tracking-widest text-gray-600 text-left uppercase mb-0.5"},"Readers",-1),bt=(0,a._)("div",{class:"flex items-center justify-between"},[(0,a._)("h5",{class:"font-700"},"532"),(0,a._)("h5",{class:"font-700 text-sky-600"},"-20.2%")],-1),vt=(0,a._)("div",{class:"progress-bar progress-bar-big mt-0.75"},[(0,a._)("div",{class:"inner bg-sky-600 w-[600%]"})],-1),kt=(0,a._)("h6",{class:"tracking-widest text-gray-600 text-left uppercase mb-0.5"},"Earnings",-1),Wt=(0,a._)("div",{class:"flex items-center justify-between"},[(0,a._)("h5",{class:"font-700"},"326"),(0,a._)("h5",{class:"font-700 text-indigo-600"},"-20.2%")],-1),Ct=(0,a._)("div",{class:"progress-bar progress-bar-big mt-0.75"},[(0,a._)("div",{class:"inner bg-indigo-600 w-[90%]"})],-1),St=(0,a._)("h6",{class:"tracking-widest text-gray-600 text-left uppercase mb-0.5"},"Visitors",-1),Dt=(0,a._)("div",{class:"flex items-center justify-between"},[(0,a._)("h5",{class:"font-700"},"222"),(0,a._)("h5",{class:"font-700 text-green-600"},"-20.2%")],-1),jt=(0,a._)("div",{class:"progress-bar progress-bar-big mt-0.75"},[(0,a._)("div",{class:"inner bg-green-600 w-[50%]"})],-1);const zt={__name:"Stats",setup:function(t){return function(t,e){var s=(0,a.up)("column"),o=(0,a.up)("row");return(0,a.wg)(),(0,a.iD)("div",U,[(0,a.Wm)(o,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(s,{col:"12"},{default:(0,a.w5)((function(){return[(0,a.Wm)(l.Z,{pages:[{name:"home",link:"Main"},{name:"stats widgets"}]}),Z]})),_:1})]})),_:1}),(0,a.Wm)(o,{class:"!my-1"},{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,n.SU)(c.Ot),(function(t){return(0,a.wg)(),(0,a.j4)(s,{col:"12",lg:"3",sm:"6"},{default:(0,a.w5)((function(){return[(0,a.Wm)(i.Z,{icon:t.icon,title:t.title,achieve:t.achieve,change:t.change,state:t.state,theme:t.theme},null,8,["icon","title","achieve","change","state","theme"])]})),_:2},1024)})),256))]})),_:1}),(0,a.Wm)(o,{class:"!my-1"},{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,n.SU)(c.qV),(function(t){return(0,a.wg)(),(0,a.j4)(s,{col:"12",md:"4"},{default:(0,a.w5)((function(){return[(0,a.Wm)(m,{title:t.title,icon:t.icon,achieve:t.achieve,income:t.income,state:t.state,theme:t.theme},null,8,["title","icon","achieve","income","state","theme"])]})),_:2},1024)})),256))]})),_:1}),(0,a.Wm)(o,{class:"!my-1"},{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,n.SU)(c.Ot),(function(t){return(0,a.wg)(),(0,a.j4)(s,{col:"12",md:"3"},{default:(0,a.w5)((function(){return[(0,a.Wm)(y,{title:t.title,state:t.state,achieve:t.achieve,change:t.change},null,8,["title","state","achieve","change"])]})),_:2},1024)})),256))]})),_:1}),(0,a.Wm)(o,{class:"!my-1"},{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,n.SU)(c.v6),(function(t){return(0,a.wg)(),(0,a.j4)(s,{col:"12",md:"4"},{default:(0,a.w5)((function(){return[(0,a.Wm)(k,{icon:t.icon,achieve:t.achieve,title:t.title,change:t.change,btn:t.btn,theme:t.theme,link:t.link},null,8,["icon","achieve","title","change","btn","theme","link"])]})),_:2},1024)})),256))]})),_:1}),(0,a.Wm)(o,{class:"!my-1"},{default:(0,a.w5)((function(){return[(0,a.Wm)(s,{col:"12",md:"6"},{default:(0,a.w5)((function(){return[(0,a._)("div",A,[H,Y,K,(0,a._)("div",T,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(z((0,n.SU)(C.k_)).slice(0,3),(function(t,e){return(0,a.wg)(),(0,a.j4)(W.Z,{type:"profile",index:e,title:t.title,src:t.img,width:"6.5rem"},null,8,["index","title","src"])})),256))]),O])]})),_:1}),(0,a.Wm)(s,{col:"12",md:"6"},{default:(0,a.w5)((function(){return[(0,a._)("div",q,[M,P,E,(0,a._)("div",I,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,n.SU)(C.k_),(function(t,e){return(0,a.wg)(),(0,a.j4)(W.Z,{type:"profile",index:e,title:t.title,src:t.img,width:"6.5rem"},null,8,["index","title","src"])})),256))]),L])]})),_:1})]})),_:1}),(0,a.Wm)(o,{class:"!my-1"},{default:(0,a.w5)((function(){return[(0,a.Wm)(s,{col:"12",md:"6"},{default:(0,a.w5)((function(){return[(0,a._)("div",N,[(0,a.Wm)(o,{class:"!my-0 !py-0"},{default:(0,a.w5)((function(){return[(0,a.Wm)(s,{col:"4"},{default:(0,a.w5)((function(){return[V]})),_:1}),(0,a.Wm)(s,{col:"4"},{default:(0,a.w5)((function(){return[B]})),_:1}),(0,a.Wm)(s,{col:"4"},{default:(0,a.w5)((function(){return[J]})),_:1})]})),_:1})])]})),_:1}),(0,a.Wm)(s,{col:"12",md:"6"},{default:(0,a.w5)((function(){return[(0,a._)("div",R,[(0,a.Wm)(o,{class:"!my-0 !py-0"},{default:(0,a.w5)((function(){return[(0,a.Wm)(s,{col:"6",class:"flex items-start gap-1"},{default:(0,a.w5)((function(){return[F,G]})),_:1}),(0,a.Wm)(s,{col:"6",class:"flex items-start gap-1"},{default:(0,a.w5)((function(){return[Q,X]})),_:1})]})),_:1})])]})),_:1})]})),_:1}),(0,a.Wm)(o,{class:"!my-1"},{default:(0,a.w5)((function(){return[(0,a.Wm)(s,{col:"12",sm:"6",md:"3"},{default:(0,a.w5)((function(){return[(0,a.Wm)(S.Z,{title:"Lines of code","has-menu":!1,"body-class":"!p-2 text-center"},{default:(0,a.w5)((function(){return[tt,et]})),_:1})]})),_:1}),(0,a.Wm)(s,{col:"12",sm:"6",md:"3"},{default:(0,a.w5)((function(){return[(0,a.Wm)(S.Z,{title:"Customers","has-menu":!1,"body-class":"!px-2 !py-1.5 text-center"},{default:(0,a.w5)((function(){return[st,at]})),_:1})]})),_:1}),(0,a.Wm)(s,{col:"12",sm:"12",md:"6"},{default:(0,a.w5)((function(){return[(0,a.Wm)(S.Z,{title:"plans","has-menu":!1,"body-class":"!px-2 !py-1"},{default:(0,a.w5)((function(){return[nt,rt,lt,it,ct]})),_:1})]})),_:1})]})),_:1}),(0,a.Wm)(o,{class:"!my-1"},{default:(0,a.w5)((function(){return[(0,a.Wm)(s,{col:"12",md:"4"},{default:(0,a.w5)((function(){return[(0,a.Wm)(S.Z,{title:"Your spendings","has-menu":!1,"body-class":"!p-0"},{default:(0,a.w5)((function(){return[ot,ut]})),_:1})]})),_:1}),(0,a.Wm)(s,{col:"12",md:"4"},{default:(0,a.w5)((function(){return[(0,a.Wm)(S.Z,{title:"Transactions","has-menu":!1,"body-class":"!p-0"},{default:(0,a.w5)((function(){return[mt,dt]})),_:1})]})),_:1}),(0,a.Wm)(s,{col:"12",md:"4"},{default:(0,a.w5)((function(){return[(0,a.Wm)(S.Z,{title:"Vat","has-menu":!1,"body-class":"!p-0"},{default:(0,a.w5)((function(){return[ft,pt]})),_:1})]})),_:1})]})),_:1}),(0,a.Wm)(o,{class:"!my-1"},{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,n.SU)(c.Ot),(function(t){return(0,a.wg)(),(0,a.j4)(s,{col:"12",md:"3"},{default:(0,a.w5)((function(){return[(0,a.Wm)(D.Z,{icon:t.icon,title:t.title,achieve:t.achieve,change:t.change,state:t.state,theme:t.theme,progress:t.progress},null,8,["icon","title","achieve","change","state","theme","progress"])]})),_:2},1024)})),256))]})),_:1}),(0,a.Wm)(o,{class:"!my-1"},{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,n.SU)(c.Ot),(function(e){return(0,a.wg)(),(0,a.j4)(s,{col:"12",md:"3"},{default:(0,a.w5)((function(){return[(0,a._)("div",{class:(0,r.normalizeClass)(["card p-2 flex justify-between items-center",t.$bgColor(e.theme)])},[(0,a._)("div",null,[(0,a._)("span",_t,(0,r.toDisplayString)(e.title),1),(0,a._)("h3",{class:(0,r.normalizeClass)(["font-700",t.$textColor(e.theme)])},(0,r.toDisplayString)(e.achieve),3)]),(0,a._)("i",{class:(0,r.normalizeClass)(["text-2",[e.icon,t.$textColor(e.theme)]])},null,2)],2)]})),_:2},1024)})),256))]})),_:1}),(0,a.Wm)(o,{class:"!my-1"},{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,n.SU)(c.Ot),(function(t){return(0,a.wg)(),(0,a.j4)(s,{col:"12",md:"3"},{default:(0,a.w5)((function(){return[(0,a.Wm)(j.Z,{title:t.title,achieve:t.achieve,theme:t.theme,icon:t.icon},null,8,["title","achieve","theme","icon"])]})),_:2},1024)})),256))]})),_:1}),(0,a.Wm)(o,{class:"!my-1"},{default:(0,a.w5)((function(){return[(0,a.Wm)(s,{col:"12"},{default:(0,a.w5)((function(){return[(0,a._)("div",gt,[(0,a.Wm)(o,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(s,{col:"12",md:"3",class:"px-1"},{default:(0,a.w5)((function(){return[xt,yt,wt]})),_:1}),(0,a.Wm)(s,{col:"12",md:"3",class:"px-1"},{default:(0,a.w5)((function(){return[ht,bt,vt]})),_:1}),(0,a.Wm)(s,{col:"12",md:"3",class:"px-1"},{default:(0,a.w5)((function(){return[kt,Wt,Ct]})),_:1}),(0,a.Wm)(s,{col:"12",md:"3",class:"px-1"},{default:(0,a.w5)((function(){return[St,Dt,jt]})),_:1})]})),_:1})])]})),_:1})]})),_:1})])}}}}}]);