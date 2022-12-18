"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[592],{3376:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(6252),a=n(3577),l={class:"page-navigation"},i={class:"flex flex-row items-center gap-0.75"},s={key:1},u={key:0,class:"text-[0.9rem] text-gray-700"};const o={__name:"Breadcrumb",props:["pages"],setup:function(t){var e=function(t){return{"link text-blue-700 cursor-pointer":t.link}};return function(n,o){var c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("ul",i,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.pages,(function(n,l){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("li",{class:(0,a.normalizeClass)(["capitalize text-[0.9rem] text-gray-700 font-500",e(n)])},[n.link?((0,r.wg)(),(0,r.j4)(c,{key:0,to:{name:n.link}},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.toDisplayString)(n.name),1)]})),_:2},1032,["to"])):((0,r.wg)(),(0,r.iD)("span",s,(0,a.toDisplayString)(n.name),1))],2),(0,r._)("li",null,[l!==t.pages.length-1?((0,r.wg)(),(0,r.iD)("span",u,"/")):(0,r.kq)("v-if",!0)])],64)})),256))])])}}}},5592:(t,e,n)=>{n.r(e),n.d(e,{default:()=>D});var r=n(6252),a=n(2262),l=n(3577),i=n(3376),s=n(9715),u=n(9133),o=n(3216),c=n(5751),p=n(9076),m=n(6253),f={class:"container-fluid"},d=(0,r._)("h1",{class:"text-primary-dark uppercase tracking-widest !px-0 mt-1.2"},"Customers",-1),g={class:"flex items-center gap-1"},w=(0,r._)("i",{class:"fa-solid fa-upload"},null,-1),x=(0,r._)("i",{class:"fa-solid fa-download"},null,-1),_={class:"card"},y={class:"bg-[#f8f9fa] py-1 px-2 shadow-[inset_0_0px_5px_0_rgba(0,0,0,0.1)] overflow-hidden"},b=(0,r._)("button",{class:"btn btn-primary btn-sm"},"Apply",-1),h=(0,r._)("span",{class:"text-[0.7rem] text-gray-500"},"Entries per page",-1),v={class:"overflow-x-auto w-0 min-w-full"},k={class:"bg-gray-100 p-2 flex md:justify-between justify-center items-center items-center md:flex-row flex-col gap-1 md:gap-0"},S={class:"text-gray-700"},U={class:"flex flex-wrap md:gap-0 gap-0.5"},W=["onClick"];const D={__name:"Customers",setup:function(t){var e=(0,p.Z)(m.lp),n=e.itemInOne,D=e.paginationHandler,C=e.prevPage,Z=e.nextPage,I=e.totalPages,H=e.currentPage,P=e.searchedText,j=e.changeItemInOne,z=e.searchHandler;return function(t,e){var p=(0,r.up)("column"),Y=(0,r.up)("row");return(0,r.wg)(),(0,r.iD)("div",f,[(0,r.Wm)(Y,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(p,{col:"12"},{default:(0,r.w5)((function(){return[(0,r.Wm)(i.Z,{pages:[{name:"home",link:"Main"},{name:"Customers"}]}),d,(0,r._)("div",g,[(0,r.Wm)(s.Z,{to:"#",class:"text-[0.8rem] text-gray-500 hover:underline"},{default:(0,r.w5)((function(){return[w,(0,r.Uk)(" Import ")]})),_:1}),(0,r.Wm)(s.Z,{to:"#",class:"text-[0.8rem] text-gray-500 hover:underline"},{default:(0,r.w5)((function(){return[x,(0,r.Uk)(" Export ")]})),_:1})])]})),_:1})]})),_:1}),(0,r.Wm)(Y,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(p,{col:"12"},{default:(0,r.w5)((function(){return[(0,r._)("div",_,[(0,r._)("div",y,[(0,r.Wm)(Y,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(p,{col:"12",md:"8",class:"flex gap-1 items-center flex-wrap"},{default:(0,r.w5)((function(){return[(0,r.Wm)(o.Z,{value:"lorem ipsum",opt:["lorem ipsum","lorem"]}),b,(0,r.Wm)(o.Z,{value:"10",onInput:e[0]||(e[0]=function(t){return(0,a.SU)(j)(t)}),opt:[5,10,15,20,25]}),h]})),_:1}),(0,r.Wm)(p,{col:"12",md:"4"},{default:(0,r.w5)((function(){return[(0,r.Wm)(c.Z,{onInput:e[1]||(e[1]=function(t){return(0,a.SU)(z)(t)}),placeholder:"Search",class:"lg:w-full w-auto"})]})),_:1})]})),_:1})]),(0,r._)("div",v,[(0,r.Wm)(u.Z,{type:"customer","has-head":!0,"current-page":(0,a.SU)(H),"item-in-one":(0,a.SU)(n),th:(0,a.SU)(m.lp).th,td:(0,a.SU)(m.lp).td,"searched-text":(0,a.SU)(P)},null,8,["current-page","item-in-one","th","td","searched-text"])]),(0,r._)("div",k,[(0,r._)("h6",S,"Showing page "+(0,l.toDisplayString)((0,a.SU)(H))+" of "+(0,l.toDisplayString)((0,a.SU)(I)),1),(0,r._)("div",U,[(0,r._)("button",{class:"btn btn-primary btn-sm mx-0.5",onClick:e[2]||(e[2]=function(){return(0,a.SU)(C)&&(0,a.SU)(C).apply(void 0,arguments)})}," < "),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,a.SU)(I),(function(t){return(0,r.wg)(),(0,r.iD)("button",{class:(0,l.normalizeClass)([{"bg-primary-indigo text-white":(0,a.SU)(H)===t},"btn btn-primary btn-sm mx-0.5"]),onClick:function(e){return(0,a.SU)(D)(t)}},(0,l.toDisplayString)(t),11,W)})),256)),(0,r._)("button",{class:"btn btn-primary btn-sm mx-0.5",onClick:e[3]||(e[3]=function(){return(0,a.SU)(Z)&&(0,a.SU)(Z).apply(void 0,arguments)})}," > ")])])])]})),_:1})]})),_:1})])}}}}}]);