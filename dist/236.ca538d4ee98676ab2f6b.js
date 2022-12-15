"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[236],{8989:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(6252),a=r(3577),s=["for"],l=["id","placeholder","rows"],i={key:1,class:"inline-block mt-0.5 text-gray-700 text-[0.8rem]"};const o={name:"inputBox",props:["placeholder","label","id","hint","row"]};const c=(0,r(3744).Z)(o,[["render",function(t,e,r,o,c,u){return(0,n.wg)(),(0,n.iD)(n.HY,null,[r.label?((0,n.wg)(),(0,n.iD)("label",{key:0,for:r.id,class:"block mb-0.5 text-gray-700 font-500 text-1"},(0,a.toDisplayString)(r.label),9,s)):(0,n.kq)("v-if",!0),(0,n._)("textarea",(0,n.dG)({id:r.id},t.$attrs,{type:"text",class:"input group-focus/item:ring-4 peer-focus:ring-4",placeholder:r.placeholder,rows:r.row}),null,16,l),r.hint?((0,n.wg)(),(0,n.iD)("span",i,(0,a.toDisplayString)(r.hint),1)):(0,n.kq)("v-if",!0)],64)}]])},4773:(t,e,r)=>{r.d(e,{Z:()=>p});var n=r(6252),a=r(3577),s=r(2262),l={class:"cms-card card p-1 px-1.6"},i={class:"flex justify-between items-start"},o={class:"text-right"},c={class:"mt-1"},u={class:"tracking-widest text-gray-600 text-left uppercase"},m={class:"progress-bar progress-bar-big mt-1"};const p={__name:"CmsCard",props:["icon","title","achieve","change","state","theme","progress"],setup:function(t){var e=t,r={"text-red-600":"red"===e.theme,"text-sky-600":"blue"===e.theme,"text-indigo-600":"indigo"===e.theme,"text-green-600":"green"===e.theme},p={"bg-red-600":"red"===e.theme,"bg-sky-600":"blue"===e.theme,"bg-indigo-600":"indigo"===e.theme,"bg-green-600":"green"===e.theme};return function(e,d){return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",i,[(0,n._)("i",{class:(0,a.normalizeClass)(["text-2",[t.icon,(0,s.SU)(r)]])},null,2),(0,n._)("div",o,[(0,n._)("h5",{class:(0,a.normalizeClass)([(0,s.SU)(r),"font-700"])},(0,a.toDisplayString)(t.achieve),3),(0,n._)("span",{class:(0,a.normalizeClass)(["increase"===t.state?"bg-green-200  text-green-700":"bg-red-200  text-red-700","category-card !py-0.25 !px-[0.3rem] md:text-[0.7rem] mx-0.25 text-[0.6rem]"])},[(0,n._)("i",{class:(0,a.normalizeClass)("increase"===t.state?"bi bi-arrow-up":"bi bi-arrow-down")},null,2),(0,n.Uk)(" "+(0,a.toDisplayString)("increase"===t.state?"+":"-")+(0,a.toDisplayString)(t.change),1)],2)])]),(0,n._)("div",c,[(0,n._)("h6",u,(0,a.toDisplayString)(t.title),1),(0,n._)("div",m,[(0,n._)("div",{class:(0,a.normalizeClass)(["inner",(0,s.SU)(p)]),style:(0,a.normalizeStyle)({width:t.progress})},null,6)])])])}}}},6236:(t,e,r)=>{r.r(e),r.d(e,{default:()=>G});var n=r(6252),a=r(2262),s=r(3577),l=r(4773),i=r(3647),o=r(7767),c=r(3216),u=r(8989),m=r(5621),p=r(9133),d=r(5881),f=r(6253),g=r(9076);function _(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var h={class:"container-fluid"},w=(0,n._)("h1",{class:"text-primary-dark uppercase tracking-widest"},"CMS dashboard",-1),x={class:"p-1 !px-1.5"},y=(0,n._)("span",{class:"icon-wrapper"},[(0,n._)("i",{class:"bi bi-speedometer"})],-1),v=(0,n._)("p",{class:"text-[0.8rem] ml-0.5"},[(0,n._)("span",{class:"font-700"},"123"),(0,n.Uk)(" Lorem ")],-1),S=(0,n._)("span",{class:"icon-wrapper"},[(0,n._)("i",{class:"bi bi-book"})],-1),k=(0,n._)("p",{class:"text-[0.8rem] ml-0.5"},[(0,n._)("span",{class:"font-700"},"123"),(0,n.Uk)(" Lorem ipsum. ")],-1),W=(0,n._)("span",{class:"icon-wrapper"},[(0,n._)("i",{class:"bi bi-journal-bookmark"})],-1),U=(0,n._)("p",{class:"text-[0.8rem] ml-0.5"},[(0,n._)("span",{class:"font-700"},"123"),(0,n.Uk)(" Lorem ")],-1),D=(0,n._)("span",{class:"icon-wrapper"},[(0,n._)("i",{class:"bi bi-globe-americas"})],-1),C=(0,n._)("p",{class:"text-[0.8rem] ml-0.5"},[(0,n._)("span",{class:"font-700"},"123"),(0,n.Uk)(" Lorem ipsum dolor. ")],-1),Z=(0,n._)("div",{class:"card-footer"},[(0,n._)("span",{class:"text-gray-600 text-[0.85rem]"},[(0,n.Uk)(" Lorem ipsum dolor sit "),(0,n._)("a",{href:"#",class:"link"}," Lorem ipsum. ")])],-1),L=(0,n._)("span",{class:"icon-wrapper md:!w-16 md:!h-5 w-4 h-4 bg-orange-200 text-orange-500"},[(0,n._)("i",{class:"bi bi-bag-heart text-1.8"})],-1),A=(0,n._)("div",{class:"text-[0.9rem] text-gray-600"},[(0,n._)("p",{class:""}," Lorem ipsum dolor sit amet, constur adipng elit. Accusim error minima moless reiciis sequi. "),(0,n._)("p",{class:"mt-0.75"},[(0,n.Uk)(" Lorem ipsum dolor sit amet, "),(0,n._)("a",{href:"#",class:"link"},"consecur adiping.")])],-1),j={class:"!px-2 !py-1.4"},T={class:"mt-1.5"},I=(0,n._)("button",{class:"btn btn-primary-full mt-1.5"},"Save Draft",-1),z=(0,n._)("div",{class:"card-footer"},[(0,n._)("span",{class:"font-700 text-gray-700 text-0.875"},"Lorem ipsum dolor sit."),(0,n._)("br"),(0,n._)("span",{class:"text-[0.8rem]"},[(0,n._)("a",{href:"#",class:"link"},"lorem"),(0,n._)("span",{class:"text-gray-500"}," March 5,2022 ")]),(0,n._)("br"),(0,n._)("span",{class:"text-[0.8rem]"},[(0,n._)("a",{href:"#",class:"link"},"lorem"),(0,n._)("span",{class:"text-gray-500"}," March 5,2022 ")])],-1),H={class:"p-1.5 !py-1 shadow-[inset_0_0px_5px_0_rgba(0,0,0,0.1)] overflow-hidden"},M=(0,n._)("button",{class:"btn btn-primary btn-sm"},"Apply",-1),O=(0,n._)("span",{class:"text-[0.7rem] text-gray-500"},"Entries per page",-1),P={class:"overflow-x-auto w-0 min-w-full"},Y={class:"bg-gray-100 p-2 flex md:justify-between justify-center items-center items-center md:flex-row flex-col gap-1 md:gap-0"},q={class:"text-gray-700"},K={class:"flex flex-wrap md:gap-0 gap-0.5"},E=["onClick"],$={class:"py-1.5 px-1"},B=(0,n._)("div",{class:"card-footer text-right"},[(0,n._)("button",{class:"btn btn-primary"},"View all people")],-1);const G={__name:"CMS",setup:function(t){var e=(0,g.Z)(f.fT),r=e.totalPages,b=e.paginationHandler,G=e.prevPage,Q=e.nextPage,V=e.currentPage,F=e.itemInOne,J=e.changeItemInOne,N=e.searchHandler,R=e.searchedText;return function(t,e){var g=(0,n.up)("column"),X=(0,n.up)("row");return(0,n.wg)(),(0,n.iD)("div",h,[w,(0,n.Wm)(X,null,{default:(0,n.w5)((function(){return[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,a.SU)(d.Ot),(function(t){return(0,n.wg)(),(0,n.j4)(g,{col:"12",md:"3"},{default:(0,n.w5)((function(){return[(0,n.Wm)(l.Z,{icon:t.icon,title:t.title,achieve:t.achieve,change:t.change,state:t.state,theme:t.theme,progress:t.progress},null,8,["icon","title","achieve","change","state","theme","progress"])]})),_:2},1024)})),256))]})),_:1}),(0,n.Wm)(X,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(g,{class:"!pl-0",col:"12",md:"5"},{default:(0,n.w5)((function(){return[(0,n.Wm)(X,{class:"!mt-0 !pt-0"},{default:(0,n.w5)((function(){return[(0,n.Wm)(g,{class:"!pt-0",col:"12"},{default:(0,n.w5)((function(){return[(0,n.Wm)(i.Z,{title:"At a glance","body-class":"!p-0"},{default:(0,n.w5)((function(){return[(0,n._)("div",x,[(0,n.Wm)(X,{"row-gap":"1rem"},{default:(0,n.w5)((function(){return[(0,n.Wm)(g,{col:"5",class:"flex items-center"},{default:(0,n.w5)((function(){return[y,v]})),_:1}),(0,n.Wm)(g,{col:"7",class:"flex items-center"},{default:(0,n.w5)((function(){return[S,k]})),_:1}),(0,n.Wm)(g,{col:"5",class:"flex items-center"},{default:(0,n.w5)((function(){return[W,U]})),_:1}),(0,n.Wm)(g,{col:"7",class:"flex items-center"},{default:(0,n.w5)((function(){return[D,C]})),_:1})]})),_:1})]),Z]})),_:1})]})),_:1}),(0,n.Wm)(g,{col:"12"},{default:(0,n.w5)((function(){return[(0,n.Wm)(i.Z,{title:"Site health status","body-class":"!px-2 !py-1.5 flex md:flex-row flex-col items-center gap-1"},{default:(0,n.w5)((function(){return[L,A]})),_:1})]})),_:1})]})),_:1})]})),_:1}),(0,n.Wm)(g,{col:"12",md:"7"},{default:(0,n.w5)((function(){return[(0,n.Wm)(i.Z,{title:"Quick draft","body-class":"!p-0"},{default:(0,n.w5)((function(){return[(0,n._)("div",j,[(0,n._)("div",null,[(0,n.Wm)(o.Z,{placeholder:"Title",label:"Title",id:"title",class:"w-full",hint:"The title is how it appears on your site."})]),(0,n._)("div",T,[(0,n.Wm)(u.Z,{class:"w-full",placeholder:"What is in your mind?",label:"Content",id:"content",hint:"The description is not prominent by default; however, some themes may show it.",row:"6"})]),I]),z]})),_:1})]})),_:1})]})),_:1}),(0,n.Wm)(X,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(g,{col:"12",md:"8"},{default:(0,n.w5)((function(){return[(0,n.Wm)(i.Z,{class:"overflow-hidden",title:"Latest contracts ","body-class":"!px-0"},{default:(0,n.w5)((function(){return[(0,n._)("div",H,[(0,n.Wm)(X,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(g,{col:"12",class:"flex gap-1 items-center flex-wrap"},{default:(0,n.w5)((function(){return[(0,n.Wm)(c.Z,{value:"lorem ipsum",opt:["lorem ipsum","lorem"]}),M,(0,n.Wm)(c.Z,{value:"5",onInput:e[0]||(e[0]=function(t){return(0,a.SU)(J)(t)}),opt:[5,10,15,20,25]}),O]})),_:1}),(0,n.Wm)(g,{col:"12"},{default:(0,n.w5)((function(){return[(0,n.Wm)(o.Z,{onInput:e[1]||(e[1]=function(t){return(0,a.SU)(N)(t)}),placeholder:"Search",class:"lg:w-full w-auto"})]})),_:1})]})),_:1})]),(0,n._)("div",P,[(0,n.Wm)(p.Z,{type:"cms","has-head":!0,"current-page":(0,a.SU)(V),"item-in-one":(0,a.SU)(F),th:(0,a.SU)(f.fT).th,td:(0,a.SU)(f.fT).td,"searched-text":(0,a.SU)(R)},null,8,["current-page","item-in-one","th","td","searched-text"])]),(0,n._)("div",Y,[(0,n._)("h6",q,"Showing page "+(0,s.toDisplayString)((0,a.SU)(V))+" of "+(0,s.toDisplayString)((0,a.SU)(r)),1),(0,n._)("div",K,[(0,n._)("button",{class:"btn btn-primary btn-sm mx-0.5",onClick:e[2]||(e[2]=function(){return(0,a.SU)(G)&&(0,a.SU)(G).apply(void 0,arguments)})}," < "),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,a.SU)(r),(function(t){return(0,n.wg)(),(0,n.iD)("button",{class:(0,s.normalizeClass)([{"bg-primary-indigo text-white":(0,a.SU)(V)===t},"btn-primary btn btn-sm mx-0.5"]),onClick:function(e){return(0,a.SU)(b)(t)}},(0,s.toDisplayString)(t),11,E)})),256)),(0,n._)("button",{class:"btn-primary btn btn-sm mx-0.5",onClick:e[3]||(e[3]=function(){return(0,a.SU)(Q)&&(0,a.SU)(Q).apply(void 0,arguments)})}," > ")])])]})),_:1})]})),_:1}),(0,n.Wm)(g,{col:"12",md:"4"},{default:(0,n.w5)((function(){return[(0,n.Wm)(i.Z,{title:"Popular authors","body-class":"!px-0"},{default:(0,n.w5)((function(){return[(0,n._)("div",$,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(_((0,a.SU)(d._L)).slice(0,7),(function(t){return(0,n.wg)(),(0,n.j4)(m.Z,{name:t.name,activity:t.activity,src:t.src,"is-last":!0},null,8,["name","activity","src"])})),256))]),B]})),_:1})]})),_:1})]})),_:1})])}}}}}]);