"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1458],{3376:(t,e,n)=>{n.d(e,{Z:()=>o});var a=n(6252),r=n(3577),l={class:"page-navigation"},i={class:"flex flex-row items-center gap-0.75"},u={key:1},s={key:0,class:"text-[0.9rem] text-gray-600"};const o={__name:"Breadcrumb",props:["pages"],setup:function(t){var e=function(t){return{"link text-blue-700 cursor-pointer":t.link}};return function(n,o){var c=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("ul",i,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.pages,(function(n,l){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("li",{class:(0,r.normalizeClass)(["capitalize text-[0.9rem] text-gray-600 font-500",e(n)])},[n.link?((0,a.wg)(),(0,a.j4)(c,{key:0,to:{name:n.link}},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.toDisplayString)(n.name),1)]})),_:2},1032,["to"])):((0,a.wg)(),(0,a.iD)("span",u,(0,r.toDisplayString)(n.name),1))],2),(0,a._)("li",null,[l!==t.pages.length-1?((0,a.wg)(),(0,a.iD)("span",s,"/")):(0,a.kq)("v-if",!0)])],64)})),256))])])}}}},1458:(t,e,n)=>{n.r(e),n.d(e,{default:()=>H});var a=n(6252),r=n(2262),l=n(3577),i=n(3376),u=n(9592),s=n(9133),o=n(6253),c=n(2783),p=n(102),m=n(9076),f={class:"container-fluid"},d=(0,a._)("h1",{class:"text-primary-dark uppercase tracking-widest !px-0 mt-1.2"},"Data Tables",-1),g=(0,a._)("p",{class:"article"}," Lightweight and extensible data tables for Vue. ",-1),w=(0,a._)("button",{class:"btn btn-primary btn-sm"},"Apply",-1),b=(0,a._)("span",{class:"text-[0.7rem] text-gray-500"},"Entries per page",-1),_={class:"overflow-x-auto w-0 min-w-full"},x={class:"bg-white p-2 flex md:justify-between justify-center items-center items-center md:flex-row flex-col gap-1 md:gap-0"},y={class:"text-gray-700"},S={class:"flex flex-wrap md:gap-0 gap-0.5"},h=["onClick"],U={class:"p-1 shadow-[inset_0_0px_5px_0_rgba(0,0,0,0.1)] overflow-hidden"},v=(0,a._)("button",{class:"btn btn-primary btn-sm"},"Apply",-1),k=(0,a._)("span",{class:"text-[0.7rem] text-gray-500"},"Entries per page",-1),D={class:"overflow-x-auto w-0 min-w-full"},W={class:"bg-gray-100 p-2 flex md:justify-between justify-center items-center items-center md:flex-row flex-col gap-1 md:gap-0"},C={class:"text-gray-700"},Z={class:"flex flex-wrap md:gap-0 gap-0.5"},I=["onClick"];const H={__name:"Datatable",setup:function(t){var e=(0,m.Z)(o.o_),n=e.itemInOne,H=e.paginationHandler,T=e.prevPage,j=e.nextPage,z=e.totalPages,P=e.currentPage,Y=e.searchedText,K=e.changeItemInOne,A=e.searchHandler;return function(t,e){var m=(0,a.up)("column"),E=(0,a.up)("row");return(0,a.wg)(),(0,a.iD)("div",f,[(0,a.Wm)(E,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(m,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(i.Z,{pages:[{name:"home",link:"Main"},{name:"Data Tables"}]}),d]})),_:1})]})),_:1}),(0,a.Wm)(E,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(m,{col:"12"},{default:(0,a.w5)((function(){return[(0,a.Wm)(u.Z,{title:"Data Table - Classic","has-menu":!1,"body-class":"!p-2"},{default:(0,a.w5)((function(){return[g,(0,a.Wm)(E,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(m,{col:"12",md:"8",class:"flex gap-1 items-center flex-wrap"},{default:(0,a.w5)((function(){return[(0,a.Wm)(c.Z,{value:"lorem ipsum",opt:["lorem ipsum","lorem"]}),w,(0,a.Wm)(c.Z,{value:"10",onInput:e[0]||(e[0]=function(t){return(0,r.SU)(K)(t)}),opt:[5,10,15,20,25]}),b]})),_:1}),(0,a.Wm)(m,{col:"12",md:"4"},{default:(0,a.w5)((function(){return[(0,a.Wm)(p.Z,{onInput:e[1]||(e[1]=function(t){return(0,r.SU)(A)(t)}),placeholder:"Search",class:"lg:w-full w-auto"})]})),_:1})]})),_:1}),(0,a._)("div",_,[(0,a.Wm)(s.Z,{"head-theme":"!bg-white !text-primary-dark",type:"data","has-head":!0,"current-page":(0,r.SU)(P),"item-in-one":(0,r.SU)(n),th:(0,r.SU)(o.o_).th,td:(0,r.SU)(o.o_).td,"searched-text":(0,r.SU)(Y)},null,8,["current-page","item-in-one","th","td","searched-text"])]),(0,a._)("div",x,[(0,a._)("h6",y,"Showing page "+(0,l.toDisplayString)((0,r.SU)(P))+" of "+(0,l.toDisplayString)((0,r.SU)(z)),1),(0,a._)("div",S,[(0,a._)("button",{class:"btn btn-primary btn-sm mx-0.5",onClick:e[2]||(e[2]=function(){return(0,r.SU)(T)&&(0,r.SU)(T).apply(void 0,arguments)})}," < "),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,r.SU)(z),(function(t){return(0,a.wg)(),(0,a.iD)("button",{class:(0,l.normalizeClass)([{"bg-primary-indigo text-white":(0,r.SU)(P)===t},"btn btn-primary btn-sm mx-0.5"]),onClick:function(e){return(0,r.SU)(H)(t)}},(0,l.toDisplayString)(t),11,h)})),256)),(0,a._)("button",{class:"btn btn-primary btn-sm mx-0.5",onClick:e[3]||(e[3]=function(){return(0,r.SU)(j)&&(0,r.SU)(j).apply(void 0,arguments)})}," > ")])])]})),_:1})]})),_:1})]})),_:1}),(0,a.Wm)(E,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(m,{col:"12"},{default:(0,a.w5)((function(){return[(0,a.Wm)(u.Z,{class:"overflow-hidden",title:"Data Table - Card Table","body-class":"!px-0"},{default:(0,a.w5)((function(){return[(0,a._)("div",U,[(0,a.Wm)(E,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(m,{col:"12",md:"8",class:"flex gap-1 items-center flex-wrap"},{default:(0,a.w5)((function(){return[(0,a.Wm)(c.Z,{value:"lorem ipsum",opt:["lorem ipsum","lorem"]}),v,(0,a.Wm)(c.Z,{value:"10",onInput:e[4]||(e[4]=function(t){return(0,r.SU)(K)(t)}),opt:[5,10,15,20,25]}),k]})),_:1}),(0,a.Wm)(m,{col:"12",md:"4"},{default:(0,a.w5)((function(){return[(0,a.Wm)(p.Z,{onInput:e[5]||(e[5]=function(t){return(0,r.SU)(A)(t)}),placeholder:"Search",class:"lg:w-full w-auto"})]})),_:1})]})),_:1})]),(0,a._)("div",D,[(0,a.Wm)(s.Z,{type:"data","has-head":!0,"current-page":(0,r.SU)(P),"item-in-one":(0,r.SU)(n),th:(0,r.SU)(o.o_).th,td:(0,r.SU)(o.o_).td,"searched-text":(0,r.SU)(Y)},null,8,["current-page","item-in-one","th","td","searched-text"])]),(0,a._)("div",W,[(0,a._)("h6",C,"Showing page "+(0,l.toDisplayString)((0,r.SU)(P))+" of "+(0,l.toDisplayString)((0,r.SU)(z)),1),(0,a._)("div",Z,[(0,a._)("button",{class:"btn btn-primary btn-sm mx-0.5",onClick:e[6]||(e[6]=function(){return(0,r.SU)(T)&&(0,r.SU)(T).apply(void 0,arguments)})}," < "),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,r.SU)(z),(function(t){return(0,a.wg)(),(0,a.iD)("button",{class:(0,l.normalizeClass)([{"bg-primary-indigo text-white":(0,r.SU)(P)===t},"btn btn-primary btn-sm mx-0.5"]),onClick:function(e){return(0,r.SU)(H)(t)}},(0,l.toDisplayString)(t),11,I)})),256)),(0,a._)("button",{class:"btn btn-primary btn-sm mx-0.5",onClick:e[7]||(e[7]=function(){return(0,r.SU)(j)&&(0,r.SU)(j).apply(void 0,arguments)})}," > ")])])]})),_:1})]})),_:1})]})),_:1})])}}}}}]);