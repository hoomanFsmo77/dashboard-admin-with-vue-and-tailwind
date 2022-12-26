"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3828],{3088:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(2262);const l=function(){var e=(0,n.iH)(""),t=(0,n.iH)("Public"),a=new Date,l=(0,n.iH)(!1),r=(0,n.iH)(""),i=(0,n.iH)(["tag 1","tag 2"]),s=(0,n.iH)(null),o=(0,n.iH)(!1);return{status:e,show:l,visibility:t,date:a,openSection:function(e){e.target.parentElement.parentElement.nextElementSibling.classList.toggle("h-100"),e.target.parentElement.parentElement.nextElementSibling.classList.toggle("o-visible")},setValue:function(t){e.value=t},increaseWidth:function(e){var t=s.value.style.width;o.value=!0,"Backspace"!==e.key?s.value.style.width="".concat(Number(t.slice(0,t.length-2))+1,"ch"):t>"2ch"?s.value.style.width="".concat(Number(t.slice(0,t.length-2))-1,"ch"):(o.value=!1,i.value.pop())},addTag:function(){i.value.push(r.value),s.value.style.width="2ch",o.value=!1,r.value=""},removeTag:function(e){i.value.splice(e,1)},closeHint:function(){o.value=!1},input:r,tagInput:s,showHint:o,tags:i}}},3376:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(6252),l=a(3577),r={class:"page-navigation"},i={class:"flex flex-row items-center gap-0.75"},s={key:1},o={key:0,class:"text-[0.9rem] text-gray-600"};const u={__name:"Breadcrumb",props:["pages"],setup:function(e){var t=function(e){return{"link text-blue-700 cursor-pointer":e.link}};return function(a,u){var c=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("ul",i,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.pages,(function(a,r){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("li",{class:(0,l.normalizeClass)(["capitalize text-[0.9rem] text-gray-600 font-500",t(a)])},[a.link?((0,n.wg)(),(0,n.j4)(c,{key:0,to:{name:a.link}},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,l.toDisplayString)(a.name),1)]})),_:2},1032,["to"])):((0,n.wg)(),(0,n.iD)("span",s,(0,l.toDisplayString)(a.name),1))],2),(0,n._)("li",null,[r!==e.pages.length-1?((0,n.wg)(),(0,n.iD)("span",o,"/")):(0,n.kq)("v-if",!0)])],64)})),256))])])}}}},8372:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(6252),l=a(3577),r=a(2262),i=a(9728);const s={__name:"CodeExample",props:["value"],setup:function(e){var t=(0,r.iH)(!1);return function(a,s){var o=(0,n.Q2)("collapsible");return(0,n.wg)(),(0,n.iD)("div",(0,l.normalizeProps)((0,n.F4)(a.$attrs)),[(0,n._)("button",{onClick:s[0]||(s[0]=function(e){return t.value=!t.value}),class:"link font-500 !text-[0.9rem]"},"Show code example"),(0,n.wy)((0,n.Wm)((0,r.SU)(i.Z),{class:"v-collapse mt-2",width:"0",min_width:"100%",read_only:!0,value:e.value},null,8,["value"]),[[o,t.value]])],16)}}};const o=(0,a(3744).Z)(s,[["__scopeId","data-v-55c5469b"]])},199:(e,t,a)=>{a.d(t,{Z:()=>S});var n=a(6252),l=a(9963),r=a(3577),i=["value"],s={key:1,class:"bg-white p-0.5 w-full border rounded"},o={class:"flex flex-wrap"},u=["onClick"],c=["onClick"],d=[(0,n._)("path",{d:"M6 18L18 6M6 6l12 12"},null,-1)],m={class:"mb-1"},p=(0,n._)("span",{class:"block text-gray-600 text-0.875 text-left font-bold mb-0.5"},"Select Range",-1),f={class:"flex flex-col sm:flex-row justify-start items-center"},g={class:"relative flex-grow"},v=(0,n._)("svg",{class:"text-gray-600 w-1 h-full mx-0.5 absolute pointer-events-none",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,n._)("path",{d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})],-1),h=["value"],w=(0,n._)("span",{class:"flex-shrink-0 m-2"},[(0,n._)("svg",{class:"w-1 h-1 stroke-current text-gray-600",viewBox:"0 0 24 24"},[(0,n._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"})])],-1),_={class:"relative flex-grow"},k=(0,n._)("svg",{class:"text-gray-600 w-1 h-full mx-0.5 absolute pointer-events-none",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,n._)("path",{d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})],-1),b=["value"];var x=a(232);const y={data:function(){return{date:new Date,dates:[{date:new Date}],selected:{},range:{start:new Date(2020,0,6),end:new Date(2020,0,23)},masks:{input:"YYYY-MM-DD h:mm A"}}},props:["single","multiple","isRange"],components:{Calendar:x.f,DatePicker:x.Mt},methods:{addDate:function(){var e=this;this.dates.push({date:new Date}),this.$nextTick((function(){e.$refs.button[e.$refs.button.length-1].click()}))},removeDate:function(e,t){this.dates=this.dates.filter((function(t){return t!==e})),t()},dateSelected:function(e,t,a){this.selected=t,a({ref:e.target})}}};const S=(0,a(3744).Z)(y,[["render",function(e,t,a,x,y,S){var W=(0,n.up)("v-date-picker");return(0,n.wg)(),(0,n.iD)(n.HY,null,[a.single?((0,n.wg)(),(0,n.j4)(W,(0,n.dG)({key:0},e.$attrs,{class:"w-full",modelValue:y.date,"onUpdate:modelValue":t[0]||(t[0]=function(e){return y.date=e})}),{default:(0,n.w5)((function(e){var t=e.inputValue,a=e.inputEvents;return[(0,n._)("input",(0,n.dG)({class:"input w-full text-[0.9rem] !p-0.375",value:t},(0,n.mx)(a,!0)),null,16,i)]})),_:1},16,["modelValue"])):(0,n.kq)("v-if",!0),a.multiple?((0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(W,{modelValue:y.selected.date,"onUpdate:modelValue":t[1]||(t[1]=function(e){return y.selected.date=e})},{default:(0,n.w5)((function(e){e.inputValue;var t=e.togglePopover,a=e.hidePopover;return[(0,n._)("div",o,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(y.dates,(function(e,i){return(0,n.wg)(),(0,n.iD)("button",{key:e.date.getTime(),class:"flex items-center bg-indigo-100 hover:bg-indigo-200 text-sm text-indigo-600 font-semibold h-2 px-1 m-0.5 rounded-6 border-2 border-transparent focus:border-indigo-600 focus:outline-none",onClick:(0,l.withModifiers)((function(a){return S.dateSelected(a,e,t)}),["stop"]),ref_for:!0,ref:"button"},[(0,n.Uk)((0,r.toDisplayString)(e.date.toLocaleDateString())+" ",1),((0,n.wg)(),(0,n.iD)("svg",{class:"w-1.2 h-1.2 text-gray-600 hover:text-indigo-600 ml-1 -mr-1",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",onClick:(0,l.withModifiers)((function(t){return S.removeDate(e,a)}),["stop"])},d,8,c))],8,u)})),128))])]})),_:1},8,["modelValue"]),(0,n._)("button",{class:"text-sm text-indigo-600 font-semibold hover:text-indigo-500 px-1 h-2 focus:outline-none",onClick:t[2]||(t[2]=(0,l.withModifiers)((function(){return S.addDate&&S.addDate.apply(S,arguments)}),["stop"]))}," + Add Date ")])):(0,n.kq)("v-if",!0),a.isRange?((0,n.wg)(),(0,n.iD)("form",{key:2,class:"bg-white shadow-md rounded px-2 pt-1.5 pb-2",onSubmit:t[4]||(t[4]=(0,l.withModifiers)((function(){}),["prevent"]))},[(0,n._)("div",m,[p,(0,n.Wm)(W,{modelValue:y.range,"onUpdate:modelValue":t[3]||(t[3]=function(e){return y.range=e}),mode:"dateTime",masks:y.masks,"is-range":""},{default:(0,n.w5)((function(e){var t=e.inputValue,a=e.inputEvents,l=e.isDragging;return[(0,n._)("div",f,[(0,n._)("div",g,[v,(0,n._)("input",(0,n.dG)({class:["flex-grow pl-2 pr-0.5 py-0.25 bg-gray-100 border rounded-4 w-full",l?"text-gray-600":"text-gray-900"],value:t.start},(0,n.mx)(a.start,!0)),null,16,h)]),w,(0,n._)("div",_,[k,(0,n._)("input",(0,n.dG)({class:["flex-grow pl-2 pr-0.5 py-0.25 bg-gray-100 border rounded w-full",l?"text-gray-600":"text-gray-900"],value:t.end},(0,n.mx)(a.end,!0)),null,16,b)])])]})),_:1},8,["modelValue","masks"])])],32)):(0,n.kq)("v-if",!0)],64)}]])},9562:(e,t,a)=>{a.r(t),a.d(t,{default:()=>J});var n=a(6252),l=a(2262),r=a(3577),i=a(9963),s=a(3376),o=a(9592),u=a(1297);const c={__name:"RangeSlider",props:["min","max","value","format","color","shadow","orientation"],setup:function(e){var t,a,r=e;(0,i.useCssVars)((function(e){return{"4422e671":(0,l.SU)(o),"5b1fa3d2":(0,l.SU)(c)}}));var s=(0,l.iH)([0,0,0]),o=(0,l.iH)(null!==(t=r.color)&&void 0!==t?t:null),c=(0,l.iH)(null!==(a=r.shadow)&&void 0!==a?a:null);(0,n.bv)((function(){s.value=r.value}));var d=function(e){return"".concat(e).concat(r.format)};return function(t,a){var r;return(0,n.wg)(),(0,n.j4)((0,l.SU)(u.Z),(0,n.dG)({modelValue:(0,l.SU)(s),"onUpdate:modelValue":a[0]||(a[0]=function(e){return(0,l.dq)(s)?s.value=e:s=e}),format:d,min:e.min,max:e.max,orientation:null!==(r=e.orientation)&&void 0!==r?r:"horizontal"},t.$attrs),null,16,["modelValue","min","max","orientation"])}}};var d=a(8372),m=a(6837),p=a(199),f=(a(3663),["value"]),g=["value"];const v={__name:"Choices",props:["searchSelect","opt","tag"],setup:function(e){var t=e,a=(0,l.iH)(null),i=(0,l.iH)(null);return(0,n.bv)((function(){if(t.searchSelect)new Choices(a.value);if(t.tag)new Choices(i.value,{removeItemButton:!0})})),function(t,l){return(0,n.wg)(),(0,n.iD)(n.HY,null,[e.searchSelect?((0,n.wg)(),(0,n.iD)("select",{key:0,ref_key:"select",ref:a,class:"selectBox"},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.opt,(function(e){return(0,n.wg)(),(0,n.iD)("option",{value:e.label,class:"capitalize"},(0,r.toDisplayString)(e.value),9,f)})),256))],512)):(0,n.kq)("v-if",!0),e.tag?((0,n.wg)(),(0,n.iD)("select",{key:1,multiple:"",ref_key:"multiSelect",ref:i,class:"selectBox"},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.opt,(function(e){return(0,n.wg)(),(0,n.iD)("option",{value:e.label,class:"capitalize"},(0,r.toDisplayString)(e.value),9,g)})),256))],512)):(0,n.kq)("v-if",!0)],64)}}};var h=a(102),w=a(3088),_={class:"container-fluid"},k=(0,n._)("h1",{class:"text-primary-dark uppercase tracking-widest !px-0 mt-1.2"},"Advanced Forms",-1),b=(0,n._)("p",{class:"article"}," Vue-form is a lightweight range slider with multi-touch support and a ton of features. It supports non-linear ranges, requires no external dependencies, has keyboard support, and it works great in responsive designs. ",-1),x=(0,n._)("p",{class:"article"},[(0,n.Uk)(" Read more about this component at "),(0,n._)("a",{class:"link font-500",href:"https://github.com/vueform/slider"},"https://github.com/vueform/slider")],-1),y={class:"my-3.5"},S={class:"mb-3.5"},W={class:"flex justify-center"},D=(0,n._)("p",{class:"article"}," A vanilla, lightweight, configurable select box/text input plugin. Similar to Select2 and Selectize but without the jQuery dependency. ",-1),U=(0,n._)("p",{class:"article"},[(0,n.Uk)(" Read more about Choices.js at "),(0,n._)("a",{href:"https://github.com/jshjohnson/Choices",class:"link font-500"},"https://github.com/jshjohnson/Choices"),(0,n.Uk)(". ")],-1),V={class:"flex gap-1"},Z=(0,n._)("span",{class:"text-[0.9rem] text-gray-600"},"Select with search field",-1),H={class:"flex gap-1.5 my-2"},C=(0,n._)("span",{class:"text-[0.9rem] text-gray-600"},"Text Tags",-1),j={class:"border-[1px] border-gray-300 bg-gray-100 rounded-2 px-1 py-0.5 w-full relative min-h-[100px]"},M={class:"flex flex-wrap gap-0.25"},B={class:"tag"},I=(0,n._)("span",{class:"text-primary-dark"},"|",-1),N=["onClick"],R={key:0,class:"user-hint absolute top-[102%] bg-[#fff] border-b-[1px] border-r-[1px] border-l-[1px] border-gray-600 left-0 w-full p-0.5"},Y={class:"text-[0.9rem]"},q={class:"flex gap-1"},E=(0,n._)("span",{class:"text-[0.9rem] text-gray-600"},"Select displayed as tags - multiple choice",-1),T=(0,n._)("p",{class:"article"}," An elegant calendar and datepicker plugin for Vuejs. ",-1),z=(0,n._)("p",{class:"article"},[(0,n.Uk)(" Read more about this component at "),(0,n._)("a",{class:"link font-500",href:"https://vcalendar.io/"},"https://vcalendar.io/")],-1),A={class:"my-1"},$=(0,n._)("span",{class:"block text-[0.9rem] text-gray-600 my-0.5"},"Variant 1 - Date",-1),K={class:"my-1"},P=(0,n._)("span",{class:"block text-[0.9rem] text-gray-600 my-0.5"},"Variant 2 - Multiple dates",-1),G={class:"my-1"},L=(0,n._)("span",{class:"block text-[0.9rem] text-gray-600 my-0.5"},"Variant 3 - DateRange",-1),F=(0,n._)("p",{class:"article"}," Input masks can be used to force the user to enter data conform a specific format. Unlike validation, the user can't enter any other key than the ones specified by the mask. ",-1),Q=(0,n._)("p",{class:"article"},[(0,n.Uk)(" Read more about imask at "),(0,n._)("a",{class:"link font-500",href:"https://imask.js.org/"},"https://imask.js.org/"),(0,n.Uk)(" & vue wrapper "),(0,n._)("a",{class:"link font-500",href:"https://github.com/uNmAnNeR/imaskjs/tree/master/packages/vue-imask"},"https://github.com/uNmAnNeR/imaskjs/tree/master/packages/vue-imask")],-1);const J={__name:"Advance-forms",setup:function(e){var t=(0,w.Z)(),a=t.closeHint,u=t.removeTag,f=t.addTag,g=t.increaseWidth,J=(t.setValue,t.openSection,t.date,t.show,t.visibility,t.status,t.showHint),O=t.tagInput,X=t.input,ee=t.tags,te=[{value:"mustard",label:"Mustard"},{value:"ketchup",label:"Ketchup"},{value:"relish",label:"Relish"}];return function(e,t){var w=(0,n.up)("column"),ae=(0,n.up)("row");return(0,n.wg)(),(0,n.iD)("div",_,[(0,n.Wm)(ae,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(w,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(s.Z,{pages:[{name:"home",link:"Main"},{name:"Advanced Forms"}]}),k]})),_:1})]})),_:1}),(0,n.Wm)(ae,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(w,{col:"12",md:"6"},{default:(0,n.w5)((function(){return[(0,n.Wm)(ae,{class:"!pt-0 !mt-0"},{default:(0,n.w5)((function(){return[(0,n.Wm)(w,{class:"!pt-0 !mt-0",col:"12"},{default:(0,n.w5)((function(){return[(0,n.Wm)(o.Z,{title:"vue form","has-menu":!1,"body-class":"!p-2"},{default:(0,n.w5)((function(){return[b,x,(0,n.Wm)(d.Z,{value:(0,l.SU)(m.sS),class:"mt-1"},null,8,["value"]),(0,n._)("div",y,[(0,n.Wm)(c,{min:0,shadow:"rgba(79,70,229,0.3)",color:"rgba(79,70,229,0.9)",max:100,value:[20,80],format:"00.00"})]),(0,n._)("div",S,[(0,n.Wm)(c,{color:"#333",shadow:"rgba(0,0,0,0.1)",min:0,max:100,value:[20,30,80],format:"$"})]),(0,n._)("div",W,[(0,n.Wm)(c,{color:"rgba(34,197,94,0.9)",shadow:"rgba(34,197,94,0.3)",min:0,max:100,value:[20],format:"$",orientation:"vertical"})])]})),_:1})]})),_:1}),(0,n.Wm)(w,{col:"12"},{default:(0,n.w5)((function(){return[(0,n.Wm)(o.Z,{title:"Choices.js","has-menu":!1,"body-class":"!p-2"},{default:(0,n.w5)((function(){return[D,U,(0,n.Wm)(d.Z,{value:(0,l.SU)(m.sS),class:"mb-1"},null,8,["value"]),(0,n._)("div",V,[Z,(0,n.Wm)(v,{opt:te,searchSelect:!0})]),(0,n._)("div",H,[C,(0,n._)("div",j,[(0,n._)("ul",M,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,l.SU)(ee),(function(e,t){return(0,n.wg)(),(0,n.iD)("li",B,[(0,n.Uk)((0,r.toDisplayString)(e)+" ",1),I,(0,n._)("i",{class:"bi bi-x cursor-pointer",onClick:function(e){return(0,l.SU)(u)(t)}},null,8,N)])})),256)),(0,n.wy)((0,n._)("input",{ref_key:"tagInput",ref:O,"onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,l.dq)(X)?X.value=e:null}),onBlur:t[1]||(t[1]=function(){return(0,l.SU)(a)&&(0,l.SU)(a).apply(void 0,arguments)}),onKeyup:[t[2]||(t[2]=function(e){return(0,l.SU)(g)(e)}),t[3]||(t[3]=(0,i.withKeys)((function(){return(0,l.SU)(f)&&(0,l.SU)(f).apply(void 0,arguments)}),["enter"]))],style:{"min-width":"1ch",width:"2ch"},type:"text",class:"max-w-full border-none outline-none bg-transparent"},null,544),[[i.vModelText,(0,l.SU)(X)]])]),(0,l.SU)(J)?((0,n.wg)(),(0,n.iD)("div",R,[(0,n._)("span",Y,' Press Enter to add "'+(0,r.toDisplayString)((0,l.SU)(X))+'" ',1)])):(0,n.kq)("v-if",!0)])]),(0,n._)("div",q,[E,(0,n.Wm)(v,{opt:te,tag:!0})])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),(0,n.Wm)(w,{col:"12",md:"6"},{default:(0,n.w5)((function(){return[(0,n.Wm)(o.Z,{title:"Datepicker","has-menu":!1,"body-class":"!p-2"},{default:(0,n.w5)((function(){return[T,z,(0,n.Wm)(d.Z,{value:(0,l.SU)(m.as),class:"mt-1"},null,8,["value"]),(0,n._)("div",A,[$,(0,n.Wm)(p.Z,{single:!0})]),(0,n._)("div",K,[P,(0,n.Wm)(p.Z,{multiple:!0})]),(0,n._)("div",G,[L,(0,n.Wm)(p.Z,{"is-range":!0})])]})),_:1})]})),_:1})]})),_:1}),(0,n.Wm)(ae,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(w,{col:"12"},{default:(0,n.w5)((function(){return[(0,n.Wm)(o.Z,{title:"imask Input maps","has-menu":!1,"body-class":"!p-2"},{default:(0,n.w5)((function(){return[F,Q,(0,n.Wm)(d.Z,{value:(0,l.SU)(m.sS),class:"my-1"},null,8,["value"]),(0,n.Wm)(ae,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(w,{col:"12",md:"6"},{default:(0,n.w5)((function(){return[(0,n.Wm)(h.Z,{class:"w-full",pattern:"000-00-000-0000-0",label:"ISBN 1",id:"ISBN1",hint:"e.g '999-99-999-9999-9'"})]})),_:1}),(0,n.Wm)(w,{col:"12",md:"6"},{default:(0,n.w5)((function(){return[(0,n.Wm)(h.Z,{class:"w-full",pattern:"00-000000",label:"tax id",id:"tax",hint:"99-123456"})]})),_:1})]})),_:1}),(0,n.Wm)(ae,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(w,{col:"12",md:"6"},{default:(0,n.w5)((function(){return[(0,n.Wm)(h.Z,{class:"w-full",pattern:"000 00 000 0000 0",label:"ISBN 2",id:"ISBN2",hint:"999 99 999 9999 9"})]})),_:1}),(0,n.Wm)(w,{col:"12",md:"6"},{default:(0,n.w5)((function(){return[(0,n.Wm)(h.Z,{class:"w-full",pattern:"{+1}-000-000-0000",label:"phone",id:"phone",hint:"+1-907-555-0165"})]})),_:1})]})),_:1}),(0,n.Wm)(ae,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(w,{col:"12",md:"6"},{default:(0,n.w5)((function(){return[(0,n.Wm)(h.Z,{class:"w-full",pattern:"000/00/000/0000/0",label:"ISBN 3",id:"ISBN3",hint:"999/99/999/9999/9"})]})),_:1}),(0,n.Wm)(w,{col:"12",md:"6"},{default:(0,n.w5)((function(){return[(0,n.Wm)(h.Z,{class:"w-full",pattern:"{$} 000,000",label:"currency",id:"currency",hint:"999,999,999.99"})]})),_:1})]})),_:1}),(0,n.Wm)(ae,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(w,{col:"12",md:"6"},{default:(0,n.w5)((function(){return[(0,n.Wm)(h.Z,{class:"w-full",pattern:"000.000.000.000",label:"ipv4",id:"ipv4",hint:"192.168.110.310"})]})),_:1}),(0,n.Wm)(w,{col:"12",md:"6"},{default:(0,n.w5)((function(){return[(0,n.Wm)(h.Z,{class:"w-full",pattern:"0000-00-00",label:"date",id:"date",hint:"1980-06-22"})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})])}}}}}]);