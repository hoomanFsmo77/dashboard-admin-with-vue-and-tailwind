"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6863],{3413:(t,n,e)=>{e.d(n,{Z:()=>C});var r=e(6252),a=e(2262),l=e(3577),i=e(9592),s=e(9133),u=e(9076),o=e(7878),c=e(7916),p=e(6253),m={key:0,class:"p-1 shadow-[inset_0_0px_5px_0_rgba(0,0,0,0.1)] overflow-hidden"},d=(0,r._)("button",{class:"btn btn-primary btn-sm"},"Apply",-1),f=(0,r._)("span",{class:"text-[0.7rem] text-gray-500"},"Entries per page",-1),g={class:"overflow-x-auto w-0 min-w-full"},w={class:"bg-gray-100 p-2 flex md:justify-between justify-center items-center items-center md:flex-row flex-col gap-1 md:gap-0"},x={class:"text-gray-700"},_={class:"flex flex-wrap md:gap-0 gap-0.5"},y=["onClick"],h={key:1,class:"card"},b={class:"p-1.5 !py-1 overflow-hidden bg-[#f8f9fa]"},S=(0,r._)("button",{class:"btn btn-primary btn-sm"},"Apply",-1),v=(0,r._)("span",{class:"text-[0.7rem] text-gray-500"},"Entries per page",-1),k={class:"overflow-x-auto w-0 min-w-full"},U={class:"bg-gray-100 p-2 flex md:justify-between justify-center items-center items-center md:flex-row flex-col gap-1 md:gap-0"},W={class:"text-gray-700"},D={class:"flex flex-wrap md:gap-0 gap-0.5"},Z=["onClick"];const C={__name:"OrderSection",props:["hasOption","items","hasLink","hasCard","link"],setup:function(t){var n=(0,u.Z)(p.X2),e=n.searchHandler,C=n.changeItemInOne,O=n.searchedText,I=n.currentPage,j=n.totalPages,H=n.itemInOne,X=n.nextPage,z=n.prevPage,P=n.paginationHandler;return function(n,u){var Y=(0,r.up)("column"),E=(0,r.up)("row");return t.hasCard?((0,r.wg)(),(0,r.j4)(i.Z,{key:0,title:"Latest Orders","body-class":"!px-0"},{default:(0,r.w5)((function(){return[!1!==t.hasOption?((0,r.wg)(),(0,r.iD)("div",m,[(0,r.Wm)(E,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(Y,{col:"12",md:"8",class:"flex gap-1 items-center flex-wrap"},{default:(0,r.w5)((function(){var n;return[(0,r.Wm)(o.Z,{value:"lorem ipsum",opt:["lorem ipsum","lorem"]}),d,(0,r.Wm)(o.Z,{onInput:u[0]||(u[0]=function(t){return(0,a.SU)(C)(t)}),value:null!==(n=t.items)&&void 0!==n?n:5,opt:[5,10,15,20,25]},null,8,["value"]),f]})),_:1}),(0,r.Wm)(Y,{col:"12",md:"4"},{default:(0,r.w5)((function(){return[(0,r.Wm)(c.Z,{onInput:u[1]||(u[1]=function(t){return(0,a.SU)(e)(t)}),placeholder:"Search",class:"lg:w-full w-auto"})]})),_:1})]})),_:1})])):(0,r.kq)("v-if",!0),(0,r._)("div",g,[(0,r.Wm)(s.Z,{"has-head":!0,"current-page":(0,a.SU)(I),"item-in-one":(0,a.SU)(H),th:(0,a.SU)(p.X2).th,td:(0,a.SU)(p.X2).td,type:"order","searched-text":(0,a.SU)(O),"is-order":!0,"is-post":null},null,8,["current-page","item-in-one","th","td","searched-text"])]),(0,r._)("div",w,[(0,r._)("h6",x,"Showing page "+(0,l.toDisplayString)((0,a.SU)(I))+" of "+(0,l.toDisplayString)((0,a.SU)(j)),1),(0,r._)("div",_,[(0,r._)("button",{class:"btn btn-primary btn-sm mx-0.5",onClick:u[2]||(u[2]=function(){return(0,a.SU)(z)&&(0,a.SU)(z).apply(void 0,arguments)})}," < "),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,a.SU)(j),(function(t){return(0,r.wg)(),(0,r.iD)("button",{class:(0,l.normalizeClass)([{"bg-primary-indigo text-white":(0,a.SU)(I)===t},"btn-primary btn btn-sm mx-0.5"]),onClick:function(n){return(0,a.SU)(P)(t)}},(0,l.toDisplayString)(t),11,y)})),256)),(0,r._)("button",{class:"btn-primary btn btn-sm mx-0.5",onClick:u[3]||(u[3]=function(){return(0,a.SU)(X)&&(0,a.SU)(X).apply(void 0,arguments)})}," > ")])])]})),_:1})):((0,r.wg)(),(0,r.iD)("div",h,[(0,r._)("div",b,[(0,r.Wm)(E,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(Y,{col:"12",md:"8",class:"flex gap-1 items-center flex-wrap"},{default:(0,r.w5)((function(){var n;return[(0,r.Wm)(o.Z,{value:"lorem ipsum",opt:["lorem ipsum","lorem"]}),S,(0,r.Wm)(o.Z,{onInput:u[4]||(u[4]=function(t){return(0,a.SU)(C)(t)}),value:null!==(n=t.items)&&void 0!==n?n:5,opt:[5,10,15,20,25]},null,8,["value"]),v]})),_:1}),(0,r.Wm)(Y,{col:"12",md:"4"},{default:(0,r.w5)((function(){return[(0,r.Wm)(c.Z,{onInput:u[5]||(u[5]=function(t){return(0,a.SU)(e)(t)}),placeholder:"Search",class:"lg:w-full w-auto"})]})),_:1})]})),_:1})]),(0,r._)("div",k,[(0,r.Wm)(s.Z,{type:"order","has-head":!0,"current-page":(0,a.SU)(I),"item-in-one":(0,a.SU)(H),th:(0,a.SU)(p.X2).th,td:(0,a.SU)(p.X2).td,"searched-text":(0,a.SU)(O),"has-link":t.hasLink,link:t.link},null,8,["current-page","item-in-one","th","td","searched-text","has-link","link"])]),(0,r._)("div",U,[(0,r._)("h6",W,"Showing page "+(0,l.toDisplayString)((0,a.SU)(I))+" of "+(0,l.toDisplayString)((0,a.SU)(j)),1),(0,r._)("div",D,[(0,r._)("button",{class:"btn btn-primary btn-sm mx-0.5",onClick:u[6]||(u[6]=function(){return(0,a.SU)(z)&&(0,a.SU)(z).apply(void 0,arguments)})}," < "),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,a.SU)(j),(function(t){return(0,r.wg)(),(0,r.iD)("button",{class:(0,l.normalizeClass)([{"bg-primary-indigo text-white":(0,a.SU)(I)===t},"btn-primary btn btn-sm mx-0.5"]),onClick:function(n){return(0,a.SU)(P)(t)}},(0,l.toDisplayString)(t),11,Z)})),256)),(0,r._)("button",{class:"btn-primary btn btn-sm mx-0.5",onClick:u[7]||(u[7]=function(){return(0,a.SU)(X)&&(0,a.SU)(X).apply(void 0,arguments)})}," > ")])])]))}}}},3376:(t,n,e)=>{e.d(n,{Z:()=>o});var r=e(6252),a=e(3577),l={class:"page-navigation"},i={class:"flex flex-row items-center gap-0.75"},s={key:1},u={key:0,class:"text-[0.9rem] text-gray-600"};const o={__name:"Breadcrumb",props:["pages"],setup:function(t){var n=function(t){return{"link text-blue-700 cursor-pointer":t.link}};return function(e,o){var c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("ul",i,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.pages,(function(e,l){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("li",{class:(0,a.normalizeClass)(["capitalize text-[0.9rem] text-gray-600 font-500",n(e)])},[e.link?((0,r.wg)(),(0,r.j4)(c,{key:0,to:{name:e.link}},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.toDisplayString)(e.name),1)]})),_:2},1032,["to"])):((0,r.wg)(),(0,r.iD)("span",s,(0,a.toDisplayString)(e.name),1))],2),(0,r._)("li",null,[l!==t.pages.length-1?((0,r.wg)(),(0,r.iD)("span",u,"/")):(0,r.kq)("v-if",!0)])],64)})),256))])])}}}},6863:(t,n,e)=>{e.r(n),e.d(n,{default:()=>m});var r=e(6252),a=e(3376),l=e(9715),i=e(3413),s={class:"container-fluid"},u=(0,r._)("h1",{class:"text-primary-dark uppercase tracking-widest !px-0 mt-1.2"},"Orders",-1),o={class:"flex gap-1"},c=(0,r._)("i",{class:"fa-solid fa-upload"},null,-1),p=(0,r._)("i",{class:"fa-solid fa-download"},null,-1);const m={__name:"Orders",setup:function(t){return function(t,n){var e=(0,r.up)("column"),m=(0,r.up)("row");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(m,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(e,{col:"12"},{default:(0,r.w5)((function(){return[(0,r.Wm)(a.Z,{pages:[{name:"home",link:"Main"},{name:"Orders"}]}),u,(0,r._)("div",o,[(0,r.Wm)(l.Z,{to:"#",class:"text-[0.8rem] text-gray-500 hover:underline"},{default:(0,r.w5)((function(){return[c,(0,r.Uk)(" Import ")]})),_:1}),(0,r.Wm)(l.Z,{to:"#",class:"text-[0.8rem] text-gray-500 hover:underline"},{default:(0,r.w5)((function(){return[p,(0,r.Uk)(" Export ")]})),_:1})])]})),_:1})]})),_:1}),(0,r.Wm)(m,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(e,{col:"12"},{default:(0,r.w5)((function(){return[(0,r.Wm)(i.Z,{items:10,"has-card":!1,"has-link":!0,link:"Order_details"})]})),_:1})]})),_:1})])}}}}}]);