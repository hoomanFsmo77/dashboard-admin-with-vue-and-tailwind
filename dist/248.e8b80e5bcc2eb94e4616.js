"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[248],{3413:(t,e,n)=>{n.d(e,{Z:()=>j});var r=n(6252),a=n(2262),s=n(3577),l=n(9592),i=n(9133),c=n(9076),u=n(3216),o=n(7242),m=n(6253),d={key:0,class:"p-1 shadow-[inset_0_0px_5px_0_rgba(0,0,0,0.1)] overflow-hidden"},p=(0,r._)("button",{class:"btn btn-primary btn-sm"},"Apply",-1),f=(0,r._)("span",{class:"text-[0.7rem] text-gray-500"},"Entries per page",-1),g={class:"overflow-x-auto w-0 min-w-full"},x={class:"bg-gray-100 p-2 flex md:justify-between justify-center items-center items-center md:flex-row flex-col gap-1 md:gap-0"},_={class:"text-gray-700"},w={class:"flex flex-wrap md:gap-0 gap-0.5"},b=["onClick"],y={key:1,class:"card"},h={class:"p-1.5 !py-1 overflow-hidden bg-[#f8f9fa]"},v=(0,r._)("button",{class:"btn btn-primary btn-sm"},"Apply",-1),S=(0,r._)("span",{class:"text-[0.7rem] text-gray-500"},"Entries per page",-1),U={class:"overflow-x-auto w-0 min-w-full"},k={class:"bg-gray-100 p-2 flex md:justify-between justify-center items-center items-center md:flex-row flex-col gap-1 md:gap-0"},W={class:"text-gray-700"},C={class:"flex flex-wrap md:gap-0 gap-0.5"},D=["onClick"];const j={__name:"OrderSection",props:["hasOption","items","hasLink","hasCard","link"],setup:function(t){var e=(0,c.Z)(m.X2),n=e.searchHandler,j=e.changeItemInOne,Z=e.searchedText,O=e.currentPage,I=e.totalPages,P=e.itemInOne,H=e.nextPage,L=e.prevPage,$=e.paginationHandler;return function(e,c){var E=(0,r.up)("column"),K=(0,r.up)("row");return t.hasCard?((0,r.wg)(),(0,r.j4)(l.Z,{key:0,title:"Latest Orders","body-class":"!px-0"},{default:(0,r.w5)((function(){return[!1!==t.hasOption?((0,r.wg)(),(0,r.iD)("div",d,[(0,r.Wm)(K,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(E,{col:"12",md:"8",class:"flex gap-1 items-center flex-wrap"},{default:(0,r.w5)((function(){var e;return[(0,r.Wm)(u.Z,{value:"lorem ipsum",opt:["lorem ipsum","lorem"]}),p,(0,r.Wm)(u.Z,{onInput:c[0]||(c[0]=function(t){return(0,a.SU)(j)(t)}),value:null!==(e=t.items)&&void 0!==e?e:5,opt:[5,10,15,20,25]},null,8,["value"]),f]})),_:1}),(0,r.Wm)(E,{col:"12",md:"4"},{default:(0,r.w5)((function(){return[(0,r.Wm)(o.Z,{onInput:c[1]||(c[1]=function(t){return(0,a.SU)(n)(t)}),placeholder:"Search",class:"lg:w-full w-auto"})]})),_:1})]})),_:1})])):(0,r.kq)("v-if",!0),(0,r._)("div",g,[(0,r.Wm)(i.Z,{"has-head":!0,"current-page":(0,a.SU)(O),"item-in-one":(0,a.SU)(P),th:(0,a.SU)(m.X2).th,td:(0,a.SU)(m.X2).td,type:"order","searched-text":(0,a.SU)(Z),"is-order":!0,"is-post":null},null,8,["current-page","item-in-one","th","td","searched-text"])]),(0,r._)("div",x,[(0,r._)("h6",_,"Showing page "+(0,s.toDisplayString)((0,a.SU)(O))+" of "+(0,s.toDisplayString)((0,a.SU)(I)),1),(0,r._)("div",w,[(0,r._)("button",{class:"btn btn-primary btn-sm mx-0.5",onClick:c[2]||(c[2]=function(){return(0,a.SU)(L)&&(0,a.SU)(L).apply(void 0,arguments)})}," < "),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,a.SU)(I),(function(t){return(0,r.wg)(),(0,r.iD)("button",{class:(0,s.normalizeClass)([{"bg-primary-indigo text-white":(0,a.SU)(O)===t},"btn-primary btn btn-sm mx-0.5"]),onClick:function(e){return(0,a.SU)($)(t)}},(0,s.toDisplayString)(t),11,b)})),256)),(0,r._)("button",{class:"btn-primary btn btn-sm mx-0.5",onClick:c[3]||(c[3]=function(){return(0,a.SU)(H)&&(0,a.SU)(H).apply(void 0,arguments)})}," > ")])])]})),_:1})):((0,r.wg)(),(0,r.iD)("div",y,[(0,r._)("div",h,[(0,r.Wm)(K,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(E,{col:"12",md:"8",class:"flex gap-1 items-center flex-wrap"},{default:(0,r.w5)((function(){var e;return[(0,r.Wm)(u.Z,{value:"lorem ipsum",opt:["lorem ipsum","lorem"]}),v,(0,r.Wm)(u.Z,{onInput:c[4]||(c[4]=function(t){return(0,a.SU)(j)(t)}),value:null!==(e=t.items)&&void 0!==e?e:5,opt:[5,10,15,20,25]},null,8,["value"]),S]})),_:1}),(0,r.Wm)(E,{col:"12",md:"4"},{default:(0,r.w5)((function(){return[(0,r.Wm)(o.Z,{onInput:c[5]||(c[5]=function(t){return(0,a.SU)(n)(t)}),placeholder:"Search",class:"lg:w-full w-auto"})]})),_:1})]})),_:1})]),(0,r._)("div",U,[(0,r.Wm)(i.Z,{type:"order","has-head":!0,"current-page":(0,a.SU)(O),"item-in-one":(0,a.SU)(P),th:(0,a.SU)(m.X2).th,td:(0,a.SU)(m.X2).td,"searched-text":(0,a.SU)(Z),"has-link":t.hasLink,link:t.link},null,8,["current-page","item-in-one","th","td","searched-text","has-link","link"])]),(0,r._)("div",k,[(0,r._)("h6",W,"Showing page "+(0,s.toDisplayString)((0,a.SU)(O))+" of "+(0,s.toDisplayString)((0,a.SU)(I)),1),(0,r._)("div",C,[(0,r._)("button",{class:"btn btn-primary btn-sm mx-0.5",onClick:c[6]||(c[6]=function(){return(0,a.SU)(L)&&(0,a.SU)(L).apply(void 0,arguments)})}," < "),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,a.SU)(I),(function(t){return(0,r.wg)(),(0,r.iD)("button",{class:(0,s.normalizeClass)([{"bg-primary-indigo text-white":(0,a.SU)(O)===t},"btn-primary btn btn-sm mx-0.5"]),onClick:function(e){return(0,a.SU)($)(t)}},(0,s.toDisplayString)(t),11,D)})),256)),(0,r._)("button",{class:"btn-primary btn btn-sm mx-0.5",onClick:c[7]||(c[7]=function(){return(0,a.SU)(H)&&(0,a.SU)(H).apply(void 0,arguments)})}," > ")])])]))}}}},248:(t,e,n)=>{n.r(e),n.d(e,{default:()=>q});var r=n(6252),a=n(2262),s=n(3577),l=n(9592),i=n(9133),c=n(3771),u=n(2145),o=n(5881),m=n(6253),d=n(3413),p=n(9076),f={class:"container-fluid"},g=(0,r._)("h1",{class:"text-primary-dark uppercase tracking-widest"},"E-commerce dashboard",-1),x={class:"card p-1.1 !px-1.5"},_=(0,r._)("h6",{class:"tracking-widest text-gray-600 text-left uppercase mb-0.5"},"Earnings",-1),w=(0,r._)("div",{class:"flex items-center justify-between"},[(0,r._)("h5",{class:"font-700"},"$10,000"),(0,r._)("h5",{class:"font-700 text-red-600"},"-20.2%")],-1),b=(0,r._)("div",{class:"progress-bar progress-bar-big mt-0.75"},[(0,r._)("div",{class:"inner bg-red-600 w-[30%]"})],-1),y=(0,r._)("h6",{class:"tracking-widest text-gray-600 text-left uppercase mb-0.5"},"Readers",-1),h=(0,r._)("div",{class:"flex items-center justify-between"},[(0,r._)("h5",{class:"font-700"},"532"),(0,r._)("h5",{class:"font-700 text-sky-600"},"-20.2%")],-1),v=(0,r._)("div",{class:"progress-bar progress-bar-big mt-0.75"},[(0,r._)("div",{class:"inner bg-sky-600 w-[600%]"})],-1),S=(0,r._)("h6",{class:"tracking-widest text-gray-600 text-left uppercase mb-0.5"},"Earnings",-1),U=(0,r._)("div",{class:"flex items-center justify-between"},[(0,r._)("h5",{class:"font-700"},"326"),(0,r._)("h5",{class:"font-700 text-indigo-600"},"-20.2%")],-1),k=(0,r._)("div",{class:"progress-bar progress-bar-big mt-0.75"},[(0,r._)("div",{class:"inner bg-indigo-600 w-[90%]"})],-1),W=(0,r._)("h6",{class:"tracking-widest text-gray-600 text-left uppercase mb-0.5"},"Visitors",-1),C=(0,r._)("div",{class:"flex items-center justify-between"},[(0,r._)("h5",{class:"font-700"},"222"),(0,r._)("h5",{class:"font-700 text-green-600"},"-20.2%")],-1),D=(0,r._)("div",{class:"progress-bar progress-bar-big mt-0.75"},[(0,r._)("div",{class:"inner bg-green-600 w-[50%]"})],-1),j={class:"card overflow-hidden"},Z=(0,r._)("div",{class:"card-header flex justify-between items-center p-1.5 bg-primary-dark"},[(0,r._)("span",{class:"uppercase font-500 tracking-widest text-white text-[0.87rem]"}," Sales by channel "),(0,r._)("div",{class:"flex flex-col md:flex-row gap-0.5"},[(0,r._)("button",{class:"btn btn-white-full btn-sm mx-0.5"},"This week"),(0,r._)("button",{class:"btn btn-white btn-sm mx-0.5"},"Last week")])],-1),O={class:"card-body px-1.5 py-1"},I=(0,r._)("div",null,[(0,r._)("h6",{class:"uppercase font-700 text-gray-500 tracking-widest"},"total revenue"),(0,r._)("h2",{class:"font-700 text-primary-indigo"},"$19,200"),(0,r._)("div",{class:"flex gap-1 items-center"},[(0,r._)("span",{class:"text-gray-600 md:text-1 text-[0.9rem]"},"+$2,032"),(0,r._)("span",{class:"category-card bg-green-200 text-green-700 !py-0.25 !px-[0.3rem] md:text-[0.7rem] mx-0.25 text-[0.6rem]"},[(0,r._)("i",{class:"bi bi-arrow-up"}),(0,r.Uk)(" 19.5% ")])])],-1),P=(0,r._)("span",{class:"icon-wrapper w-5 h-5 bg-indigo-200 text-indigo-700 ml-auto"},[(0,r._)("i",{class:"bi bi-currency-exchange text-2.5"})],-1),H=(0,r._)("div",{class:"text-right"},[(0,r._)("span",{class:"uppercase font-400 text-gray-500 tracking-widest md:text-[0.9rem] text-[0.8rem]"},"Organic Search Revenue"),(0,r._)("h4",{class:"font-500 text-primary-dark my-0.5 md:text-1.3 text-[0.9rem]"},"$19,200"),(0,r._)("div",{class:"flex gap-1 items-center justify-end md:justify-start"},[(0,r._)("span",{class:"text-gray-600 md:text-1 text-[0.9rem]"},"+$2,032"),(0,r._)("span",{class:"category-card bg-green-200 text-green-700 !py-0.25 !px-[0.3rem] text-[0.6rem] mx-0.25 flex"},[(0,r._)("i",{class:"bi bi-arrow-up"}),(0,r.Uk)(" 19.5% ")])])],-1),L=(0,r._)("div",{class:"divider my-1 md:!my-3"},null,-1),$=(0,r._)("div",{class:"text-right"},[(0,r._)("span",{class:"uppercase font-400 text-gray-500 tracking-widest md:text-[0.9rem] text-[0.8rem]"},"Facebook Ads Revenue"),(0,r._)("h4",{class:"font-500 text-primary-dark my-0.5 md:text-1.3 text-[0.9rem]"},"$11,200"),(0,r._)("div",{class:"flex gap-1 items-center justify-end md:justify-start"},[(0,r._)("span",{class:"text-gray-600 md:text-1 text-[0.9rem]"},"+$1,032"),(0,r._)("span",{class:"category-card bg-red-200 text-red-700 !py-0.25 !px-[0.3rem] text-[0.6rem] mx-0.25 flex"},[(0,r._)("i",{class:"bi bi-arrow-down"}),(0,r.Uk)(" -19.5% ")])])],-1),E={class:"lg:h-0 lg:min-h-full h-auto min-h-full"},K={class:"h-full"},X={class:"px-0.5 py-1 overflow-y-hidden"},Y={class:"overflow-x-auto w-0 min-w-full"},z={class:"bg-gray-100 p-2 flex md:justify-between justify-center items-center items-center md:flex-row flex-col gap-1 md:gap-0"},A={class:"text-gray-700"},R={class:"flex flex-wrap md:gap-0 gap-0.5"},T=["onClick"];const q={__name:"E-commerce",setup:function(t){var e=(0,p.Z)(m.fK),n=e.totalPages,q=e.paginationHandler,B=e.prevPage,F=e.nextPage,V=e.currentPage,G=e.itemInOne,J=e.searchedText;return function(t,e){var p=(0,r.up)("column"),M=(0,r.up)("row"),N=(0,r.up)("apexchart");return(0,r.wg)(),(0,r.iD)("div",f,[g,(0,r.Wm)(M,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(p,{col:"12"},{default:(0,r.w5)((function(){return[(0,r._)("div",x,[(0,r.Wm)(M,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(p,{col:"12",md:"3",class:"px-1"},{default:(0,r.w5)((function(){return[_,w,b]})),_:1}),(0,r.Wm)(p,{col:"12",md:"3",class:"px-1"},{default:(0,r.w5)((function(){return[y,h,v]})),_:1}),(0,r.Wm)(p,{col:"12",md:"3",class:"px-1"},{default:(0,r.w5)((function(){return[S,U,k]})),_:1}),(0,r.Wm)(p,{col:"12",md:"3",class:"px-1"},{default:(0,r.w5)((function(){return[W,C,D]})),_:1})]})),_:1})])]})),_:1})]})),_:1}),(0,r.Wm)(M,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(p,{col:"12"},{default:(0,r.w5)((function(){return[(0,r._)("div",j,[Z,(0,r._)("div",O,[(0,r.Wm)(M,{class:"justify-between items-center"},{default:(0,r.w5)((function(){return[(0,r.Wm)(p,{md:"4",col:"6",class:"flex"},{default:(0,r.w5)((function(){return[I]})),_:1}),(0,r.Wm)(p,{md:"2",col:"6"},{default:(0,r.w5)((function(){return[P]})),_:1})]})),_:1}),(0,r.Wm)(M,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(p,{col:"12",lg:"10",md:"8"},{default:(0,r.w5)((function(){return[(0,r.Wm)(N,{type:"bar",height:"469px",width:"100%",options:(0,a.SU)(u.Ci).chartOptions,series:(0,a.SU)(u.Ci).series},null,8,["options","series"])]})),_:1}),(0,r.Wm)(p,{col:"12",lg:"2",md:"4"},{default:(0,r.w5)((function(){return[(0,r.Wm)(M,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(p,{col:"12"},{default:(0,r.w5)((function(){return[H]})),_:1}),L,(0,r.Wm)(p,{col:"12"},{default:(0,r.w5)((function(){return[$]})),_:1})]})),_:1})]})),_:1})]})),_:1})])])]})),_:1})]})),_:1}),(0,r.Wm)(M,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(p,{col:"12",md:"4"},{default:(0,r.w5)((function(){return[(0,r._)("div",E,[(0,r.Wm)(l.Z,{title:"Latest activity",class:"h-full","body-class":"h-[calc(100%-130px)] overflow-y-auto"},{default:(0,r.w5)((function(){return[(0,r._)("div",K,[(0,r._)("div",X,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,a.SU)(o._L),(function(t){var e;return(0,r.wg)(),(0,r.j4)(c.Z,{name:t.name,activity:t.activity,time:t.time,src:t.src,"is-last":null!==(e=t.isLast)&&void 0!==e&&e},null,8,["name","activity","time","src","is-last"])})),256))])])]})),_:1})])]})),_:1}),(0,r.Wm)(p,{col:"12",md:"8"},{default:(0,r.w5)((function(){return[(0,r.Wm)(l.Z,{class:"overflow-hidden",title:"Bestsellers this month","body-class":"!px-0"},{default:(0,r.w5)((function(){return[(0,r._)("div",Y,[(0,r.Wm)(i.Z,{"current-page":(0,a.SU)(V),"item-in-one":(0,a.SU)(G),td:(0,a.SU)(m.fK).td,"searched-text":(0,a.SU)(J),"has-head":!1,type:"ecommerce"},null,8,["current-page","item-in-one","td","searched-text"])]),(0,r._)("div",z,[(0,r._)("h6",A,"Showing page "+(0,s.toDisplayString)((0,a.SU)(V))+" of "+(0,s.toDisplayString)((0,a.SU)(n)),1),(0,r._)("div",R,[(0,r._)("button",{class:"btn btn-primary btn-sm mx-0.5",onClick:e[0]||(e[0]=function(){return(0,a.SU)(B)&&(0,a.SU)(B).apply(void 0,arguments)})}," < "),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,a.SU)(n),(function(t){return(0,r.wg)(),(0,r.iD)("button",{class:(0,s.normalizeClass)([{"bg-primary-indigo text-white":(0,a.SU)(V)===t},"btn btn-primary btn-sm mx-0.5"]),onClick:function(e){return(0,a.SU)(q)(t)}},(0,s.toDisplayString)(t),11,T)})),256)),(0,r._)("button",{class:"btn btn-primary btn-sm mx-0.5",onClick:e[1]||(e[1]=function(){return(0,a.SU)(F)&&(0,a.SU)(F).apply(void 0,arguments)})}," > ")])])]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)(M,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(p,{col:"12"},{default:(0,r.w5)((function(){return[(0,r.Wm)(d.Z,{items:10,"has-card":!0})]})),_:1})]})),_:1})])}}}}}]);