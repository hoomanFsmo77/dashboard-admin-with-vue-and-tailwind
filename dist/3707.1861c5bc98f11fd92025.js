"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3707],{582:(l,e,a)=>{a.d(e,{Z:()=>v});var t=a(6252),o=a(3577),n=a(2262),u=a(9963),r=a(7806),s=(a(633),a(9715)),i=a(8491),d=["value","placeholder"],m=["value","placeholder"],c={class:"relative"},p=(0,t._)("i",{class:"bi bi-caret-down-fill text-0.75 ml-0.25"},null,-1),f={class:"dropdown-hover !text-[0.9rem] !text-gray-700"};const v={__name:"inputGroup",props:["icon","placeholder","modelValue","type","buttonValue","buttonReverse","form","dropdownList"],emits:["update:modelValue","call"],setup:function(l,e){var a=e.emit,v=(0,r.Z)(),b=(v.toggleFocus,v.show),w=(0,n.iH)(""),_=function(){a("call",w.value)},y=function(l){w.value=l.target.value,a("update:modelValue",w.value)};return function(e,a){return(0,t.wg)(),(0,t.iD)(t.HY,null,[void 0===l.form?((0,t.wg)(),(0,t.iD)("div",(0,t.dG)({key:0},e.$attrs,{class:["input-group flex gap-0 items-stretch",{"flex-row-reverse":l.buttonReverse}]}),[(0,t._)("input",{value:l.modelValue,onInput:a[0]||(a[0]=function(l){return y(l)}),type:"text",class:(0,o.normalizeClass)(["input w-full",{"!rounded-r-[0px] !border-[1px] !border-primary-indigo/50 !border-r-[0px]":"outline"===l.type,"!rounded-l-[0px] !rounded-r-4 !border-r-[1px] !border-l-[0px]":l.buttonReverse}]),placeholder:l.placeholder},null,42,d),(0,t._)("button",{onClick:_,class:(0,o.normalizeClass)(["btn h-full !rounded-l-[0]",{"!btn-primary":"outline"===l.type,"btn-primary-full":"full"===l.type,"!rounded-r-[0px] !rounded-l-4":l.buttonReverse}])},[l.icon?((0,t.wg)(),(0,t.iD)("i",{key:0,class:(0,o.normalizeClass)(l.icon)},null,2)):(0,t.kq)("v-if",!0),(0,t.Uk)(" "+(0,o.toDisplayString)(l.buttonValue),1)],2)],16)):(0,t.kq)("v-if",!0),"dropdown"===l.form?((0,t.wg)(),(0,t.iD)("div",(0,t.dG)({key:1},e.$attrs,{class:["input-group flex gap-0 items-stretch",{"flex-row-reverse":l.buttonReverse}]}),[(0,t._)("input",{value:l.modelValue,onInput:a[1]||(a[1]=function(l){return y(l)}),type:"text",class:(0,o.normalizeClass)(["input w-full",{"!rounded-r-[0px] !border-[1px] !border-primary-indigo/50 !border-r-[0px]":"outline"===l.type,"!rounded-l-[0px] !rounded-r-4 !border-r-[1px] !border-l-[0px]":l.buttonReverse}]),placeholder:l.placeholder},null,42,m),(0,t._)("div",c,[(0,t._)("button",{onBlur:a[2]||(a[2]=function(l){return b.value=!1}),onClick:a[3]||(a[3]=function(l){return b.value=!(0,n.SU)(b)}),class:(0,o.normalizeClass)(["btn items-center flex h-full !rounded-l-[0]",{"!btn-primary":"outline"===l.type,"btn-primary-full":"full"===l.type,"!rounded-r-[0px] !rounded-l-4":l.buttonReverse}])},[(0,t.Uk)((0,o.toDisplayString)(l.buttonValue)+" ",1),p],34),(0,t.Wm)(u.Transition,{name:"show"},{default:(0,t.w5)((function(){return[(0,n.SU)(b)?((0,t.wg)(),(0,t.j4)(i.Z,{key:0,top:"54px",width:"150px"},{default:(0,t.w5)((function(){return[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(l.dropdownList,(function(l){return(0,t.wg)(),(0,t.iD)("li",f,[(0,t.Wm)(s.Z,{to:"#!"},{default:(0,t.w5)((function(){return[(0,t.Uk)((0,o.toDisplayString)(l),1)]})),_:2},1024)])})),256))]})),_:1})):(0,t.kq)("v-if",!0)]})),_:1})])],16)):(0,t.kq)("v-if",!0)],64)}}}},3376:(l,e,a)=>{a.d(e,{Z:()=>i});var t=a(6252),o=a(3577),n={class:"page-navigation"},u={class:"flex flex-row items-center gap-0.75"},r={key:1},s={key:0,class:"text-[0.9rem] text-gray-600"};const i={__name:"Breadcrumb",props:["pages"],setup:function(l){var e=function(l){return{"link text-blue-700 cursor-pointer":l.link}};return function(a,i){var d=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",n,[(0,t._)("ul",u,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(l.pages,(function(a,n){return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("li",{class:(0,o.normalizeClass)(["capitalize text-[0.9rem] text-gray-600 font-500",e(a)])},[a.link?((0,t.wg)(),(0,t.j4)(d,{key:0,to:{name:a.link}},{default:(0,t.w5)((function(){return[(0,t.Uk)((0,o.toDisplayString)(a.name),1)]})),_:2},1032,["to"])):((0,t.wg)(),(0,t.iD)("span",r,(0,o.toDisplayString)(a.name),1))],2),(0,t._)("li",null,[n!==l.pages.length-1?((0,t.wg)(),(0,t.iD)("span",s,"/")):(0,t.kq)("v-if",!0)])],64)})),256))])])}}}},8372:(l,e,a)=>{a.d(e,{Z:()=>s});var t=a(6252),o=a(3577),n=a(2262),u=a(9728);const r={__name:"CodeExample",props:["value"],setup:function(l){var e=(0,n.iH)(!1);return function(a,r){var s=(0,t.Q2)("collapsible");return(0,t.wg)(),(0,t.iD)("div",(0,o.normalizeProps)((0,t.F4)(a.$attrs)),[(0,t._)("button",{onClick:r[0]||(r[0]=function(l){return e.value=!e.value}),class:"link font-500 !text-[0.9rem]"},"Show code example"),(0,t.wy)((0,t.Wm)((0,n.SU)(u.Z),{class:"v-collapse mt-2",width:"0",min_width:"100%",read_only:!0,value:l.value},null,8,["value"]),[[s,e.value]])],16)}}};const s=(0,a(3744).Z)(r,[["__scopeId","data-v-55c5469b"]])},3454:(l,e,a)=>{a.r(e),a.d(e,{default:()=>zl});var t=a(6252),o=a(2262),n=a(9963),u=a(3577),r=a(3376),s=a(9592),i={class:"modal"},d={class:"modal-title"},m={class:"modal-body"},c={class:"modal-footer"};const p={__name:"Modal",props:["modelValue"],setup:function(l){return function(e,a){return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(n.Transition,{name:"modal"},{default:(0,t.w5)((function(){return[l.modelValue?((0,t.wg)(),(0,t.iD)("div",{key:0,class:(0,u.normalizeClass)([{"!z-50":l.modelValue},"modal-wrapper"])},[(0,t._)("div",i,[(0,t._)("div",d,[(0,t._)("div",null,[(0,t.WI)(e.$slots,"header")]),(0,t._)("button",{class:"close-modal bi bi-x-lg",onClick:a[0]||(a[0]=function(l){return e.$emit("update:modelValue",!1)})})]),(0,t._)("div",m,[(0,t.WI)(e.$slots,"body")]),(0,t._)("div",c,[(0,t.WI)(e.$slots,"footer")])])],2)):(0,t.kq)("v-if",!0)]})),_:3}),(0,t._)("div",{class:(0,u.normalizeClass)([{"!opacity-100 !visible":l.modelValue},"modal-backdrop"])},null,2)],64)}}};const f=(0,a(3744).Z)(p,[["__scopeId","data-v-5bcb8d9c"]]);var v=a(6837),b=a(8372),w=a(102),_=a(582),y=a(7878),h={class:"container-fluid"},x=(0,t._)("h1",{class:"text-primary-dark uppercase tracking-widest !px-0 mt-1.2"},"Forms",-1),g=(0,t._)("p",{class:"article"},[(0,t.Uk)(" The theme has integrated excellent Formik plugin for easy validation and onChange events input handling. Please visit "),(0,t._)("a",{class:"link text-[0.9rem] font-500",href:"https://formkit.com/getting-started/installation"},"Formik documentation"),(0,t.Uk)(" for more info ")],-1),V=(0,t._)("p",{class:"article"},"Lorem ipsum dolor sit amet consectetur.",-1),k={class:"my-1"},W=(0,t._)("p",{class:"article"},"Lorem ipsum dolor sit amet consectetur.",-1),z={class:"my-1"},Z=(0,t._)("h5",{class:"card-header uppercase tracking-widest"},"signing modal",-1),U=(0,t._)("p",{class:"article"},"Lorem ipsum dolor sit amet consectetur.",-1),E={class:"my-1"},C={class:"my-1.5"},S=(0,t._)("div",{class:"divider !h-[1px]"},null,-1),P={class:"my-2"},D=(0,t._)("div",{class:"divider !h-[1px]"},null,-1),I={class:"my-2"},R=(0,t._)("div",{class:"divider !h-[1px]"},null,-1),H={class:"my-2"},M=(0,t._)("div",{class:"divider !h-[1px]"},null,-1),F=(0,t._)("div",{class:"flex my-2"},[(0,t._)("span",{class:"block mb-0.5 text-gray-700 font-500 text-[0.9rem] capitalize"},"Ranges"),(0,t._)("div",{class:"w-[72%] ml-auto"},[(0,t._)("label",{for:"range",class:"block mb-0.5 text-gray-700 font-500 text-[0.9rem] capitalize"},"Example range"),(0,t._)("input",{id:"range",type:"range",class:"range w-full"})])],-1),T=(0,t._)("div",{class:"divider !h-[1px]"},null,-1),$={class:"my-2"},q=(0,t._)("div",{class:"divider !h-[1px]"},null,-1),B={class:"my-2 flex"},Y=(0,t._)("span",{class:"block mb-0.5 text-gray-700 font-500 text-[0.9rem] capitalize"},"Checkboxes & radios",-1),A={class:"w-[72%] ml-auto"},L={class:"flex items-center gap-0.5"},j=(0,t._)("label",{for:"checkbox",class:"block text-gray-700 font-500 text-[0.9rem] capitalize"},"Check this custom checkbox",-1),G={class:"flex items-center gap-0.5 mt-1.5 mb-0.5"},K=(0,t._)("label",{for:"radio1",class:"block text-gray-700 font-500 text-[0.9rem] capitalize"},"Check Toggle this custom radio",-1),O={class:"flex items-center gap-0.5"},J=(0,t._)("label",{for:"radio2",class:"block text-gray-700 font-500 text-[0.9rem] capitalize"},"Or toggle this other custom radio",-1),N=(0,t._)("div",{class:"divider !h-[1px]"},null,-1),Q={class:"my-2 flex"},X=(0,t._)("span",{class:"block mb-0.5 text-gray-700 font-500 text-[0.9rem] capitalize"},"Select",-1),ll={class:"w-[72%] ml-auto"},el=["value"],al=(0,t._)("div",{class:"divider !h-[1px]"},null,-1),tl={class:"my-2"},ol=(0,t._)("div",{class:"divider !h-[1px]"},null,-1),nl={class:"my-2"},ul=(0,t._)("div",{class:"divider !h-[1px]"},null,-1),rl={class:"my-2 flex"},sl=(0,t._)("span",{class:"block mb-0.5 text-gray-700 font-500 text-[0.9rem] capitalize"},"input size",-1),il={class:"w-[72%] ml-auto"},dl=(0,t._)("div",{class:"divider !h-[1px]"},null,-1),ml={class:"flex my-2"},cl=(0,t._)("span",{class:"block mb-0.5 text-gray-700 font-500 text-[0.9rem] capitalize"},"input size",-1),pl={class:"w-[72%] ml-auto"},fl=(0,t._)("div",{class:"divider !h-[1px]"},null,-1),vl={class:"my-2 flex"},bl=(0,t._)("span",{class:"block mb-0.5 text-gray-700 font-500 text-[0.9rem] capitalize"},"input groups",-1),wl={class:"w-[72%] ml-auto"},_l=(0,t._)("div",{class:"divider !h-[1px]"},null,-1),yl={class:"my-2 flex"},hl=(0,t._)("span",{class:"block mb-0.5 text-gray-700 font-500 text-[0.9rem] capitalize"},"Button addons",-1),xl={class:"w-[72%] ml-auto"},gl=(0,t._)("div",{class:"divider !h-[1px]"},null,-1),Vl={class:"my-2 flex"},kl=(0,t._)("span",{class:"block mb-0.5 text-gray-700 font-500 text-[0.9rem] capitalize"},"With dropdowns",-1),Wl={class:"w-[72%] ml-auto"};const zl={__name:"Basic-forms",setup:function(l){var e=(0,o.iH)({basicEmail:"",basicPassword:"",horizontalEmail:"",horizontalPassword:"",floatEmail:"",floatPassword:"",modalEmail:"",modalPassword:"",normal:"",passwordExample:"",helpText:"",placeholder:"",customCheck:!1,customRadio:"radio 1",singleSelect:"",multiSelect:[],successInput:"",errorInput:"",lg:"",default:"",sm:"",col:"",group:""}),a=(0,o.iH)(!1),i=function(l,e){alert(JSON.stringify({email:l,password:e}))},d=function(){alert(JSON.stringify(e.value))};return function(l,m){var c=(0,t.up)("column"),p=(0,t.up)("row");return(0,t.wg)(),(0,t.iD)("div",h,[(0,t.Wm)(p,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(c,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(r.Z,{pages:[{name:"home",link:"Main"},{name:"Forms"}]}),x]})),_:1})]})),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(c,{col:"12"},{default:(0,t.w5)((function(){return[(0,t.Wm)(s.Z,{title:"formik","body-class":"!p-2","has-menu":!1},{default:(0,t.w5)((function(){return[g,(0,t.Wm)(b.Z,{class:"mb-1",value:(0,o.SU)(v.kQ)},null,8,["value"])]})),_:1})]})),_:1})]})),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(c,{col:"12",md:"6"},{default:(0,t.w5)((function(){return[(0,t.Wm)(s.Z,{title:"basic form","has-menu":!1,"body-class":"!p-2"},{default:(0,t.w5)((function(){return[V,(0,t._)("form",{onSubmit:m[3]||(m[3]=(0,n.withModifiers)((function(){}),["prevent"])),action:""},[(0,t._)("div",null,[(0,t.Wm)(w.Z,{modelValue:e.value.basicEmail,"onUpdate:modelValue":m[0]||(m[0]=function(l){return e.value.basicEmail=l}),id:"basicEmail",class:"text-[0.9rem] !py-[0.35rem] w-full","label-class":"!uppercase tracking-widest ",label:"Email",placeholder:"Email Address"},null,8,["modelValue"])]),(0,t._)("div",k,[(0,t.Wm)(w.Z,{type:"password",modelValue:e.value.basicPassword,"onUpdate:modelValue":m[1]||(m[1]=function(l){return e.value.basicPassword=l}),id:"basicPassword",class:"text-[0.9rem] !py-[0.35rem] w-full","label-class":"!uppercase tracking-widest ",label:"password",placeholder:"password"},null,8,["modelValue"])]),(0,t._)("button",{type:"submit",onClick:m[2]||(m[2]=function(l){return i(e.value.basicEmail,e.value.basicPassword)}),class:"btn btn-sm btn-primary-full"},"log in")],32)]})),_:1})]})),_:1}),(0,t.Wm)(c,{col:"12",md:"6"},{default:(0,t.w5)((function(){return[(0,t.Wm)(s.Z,{title:"Horizontal form","has-menu":!1,"body-class":"!p-2"},{default:(0,t.w5)((function(){return[W,(0,t._)("form",{onSubmit:m[7]||(m[7]=(0,n.withModifiers)((function(){}),["prevent"]))},[(0,t._)("div",null,[(0,t.Wm)(w.Z,{modelValue:e.value.horizontalEmail,"onUpdate:modelValue":m[4]||(m[4]=function(l){return e.value.horizontalEmail=l}),id:"horizontalEmail",class:"text-[0.9rem] !py-[0.35rem] w-[72%] ml-auto","label-class":"!uppercase tracking-widest ",hint:"Example help text that remains unchanged.",form:"horizontal",label:"Email",placeholder:"Email Address"},null,8,["modelValue"])]),(0,t._)("div",z,[(0,t.Wm)(w.Z,{type:"password",modelValue:e.value.horizontalPassword,"onUpdate:modelValue":m[5]||(m[5]=function(l){return e.value.horizontalPassword=l}),id:"horizontalPassword",class:"text-[0.9rem] !py-[0.35rem] w-[72%] ml-auto","label-class":"!uppercase tracking-widest ",hint:"Example help text that remains unchanged.",form:"horizontal",label:"password",placeholder:"password"},null,8,["modelValue"])]),(0,t._)("button",{type:"submit",onClick:m[6]||(m[6]=function(l){return i(e.value.horizontalEmail,e.value.horizontalPassword)}),class:"btn btn-sm btn-primary-full"},"sign in")],32)]})),_:1})]})),_:1})]})),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(c,{col:"12",md:"6"},{default:(0,t.w5)((function(){return[(0,t.Wm)(s.Z,{title:"Inputs with floating labels","has-menu":!1,"body-class":"!p-2"},{default:(0,t.w5)((function(){return[(0,t._)("form",{onSubmit:m[11]||(m[11]=(0,n.withModifiers)((function(){}),["prevent"]))},[(0,t.Wm)(w.Z,{modelValue:e.value.floatEmail,"onUpdate:modelValue":m[8]||(m[8]=function(l){return e.value.floatEmail=l}),"label-class":"!uppercase tracking-widest !text-[0.8rem]",id:"email",class:"mt-0.5 mb-1 w-full",label:"Email address",form:"float"},null,8,["modelValue"]),(0,t.Wm)(w.Z,{modelValue:e.value.floatPassword,"onUpdate:modelValue":m[9]||(m[9]=function(l){return e.value.floatPassword=l}),"label-class":"!uppercase tracking-widest !text-[0.8rem]",id:"password",label:"Password",type:"password",form:"float"},null,8,["modelValue"]),(0,t._)("button",{type:"submit",onClick:m[10]||(m[10]=function(l){return i(e.value.floatEmail,e.value.floatPassword)}),class:"btn btn-sm btn-primary mt-1"},"submit")],32)]})),_:1})]})),_:1}),(0,t.Wm)(c,{col:"12",md:"6"},{default:(0,t.w5)((function(){return[(0,t.Wm)(s.Z,{title:"Modal Form","has-menu":!1,"body-class":"!p-2"},{default:(0,t.w5)((function(){return[(0,t._)("button",{onClick:m[12]||(m[12]=function(l){return a.value=!a.value}),class:"btn btn-sm btn-primary-full"},"form in a simple modal"),((0,t.wg)(),(0,t.j4)(t.lR,{to:"body"},[(0,t.Wm)(f,{modelValue:a.value,"onUpdate:modelValue":m[18]||(m[18]=function(l){return a.value=l})},{header:(0,t.w5)((function(){return[Z]})),body:(0,t.w5)((function(){return[U,(0,t._)("form",{onSubmit:m[15]||(m[15]=(0,n.withModifiers)((function(){}),["prevent"])),action:""},[(0,t._)("div",null,[(0,t.Wm)(w.Z,{modelValue:e.value.modalEmail,"onUpdate:modelValue":m[13]||(m[13]=function(l){return e.value.modalEmail=l}),id:"modalEmail",class:"text-[0.9rem] !py-[0.35rem] w-full","label-class":"!uppercase tracking-widest ",label:"Email",placeholder:"Email Address"},null,8,["modelValue"])]),(0,t._)("div",E,[(0,t.Wm)(w.Z,{type:"password",modelValue:e.value.modalPassword,"onUpdate:modelValue":m[14]||(m[14]=function(l){return e.value.modalPassword=l}),id:"modalPassword",class:"text-[0.9rem] !py-[0.35rem] w-full","label-class":"!uppercase tracking-widest ",label:"password",placeholder:"password"},null,8,["modelValue"])])],32)]})),footer:(0,t.w5)((function(){return[(0,t._)("button",{type:"submit",onClick:m[16]||(m[16]=function(l){return a.value=!1}),class:"btn btn-sm btn-gray-full mr-1"},"close"),(0,t._)("button",{type:"submit",onClick:m[17]||(m[17]=function(l){return i(e.value.modalEmail,e.value.modalPassword)}),class:"btn btn-sm btn-primary-full"},"save changes")]})),_:1},8,["modelValue"])]))]})),_:1})]})),_:1})]})),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(c,{col:"12"},{default:(0,t.w5)((function(){return[(0,t.Wm)(s.Z,{title:"All form elements","has-menu":!1,"body-class":"!p-2"},{default:(0,t.w5)((function(){return[(0,t._)("div",C,[(0,t.Wm)(w.Z,{modelValue:e.value.normal,"onUpdate:modelValue":m[19]||(m[19]=function(l){return e.value.normal=l}),id:"normal",class:"text-[0.9rem] !py-[0.35rem] w-[72%] ml-auto",form:"horizontal",label:"normal"},null,8,["modelValue"])]),S,(0,t._)("div",P,[(0,t.Wm)(w.Z,{modelValue:e.value.helpText,"onUpdate:modelValue":m[20]||(m[20]=function(l){return e.value.helpText=l}),id:"help",class:"text-[0.9rem] !py-[0.35rem] w-[72%] ml-auto",hint:"A block of help text that breaks onto a new line and may extend beyond one line.",form:"horizontal",label:"help text"},null,8,["modelValue"])]),D,(0,t._)("div",I,[(0,t.Wm)(w.Z,{modelValue:e.value.passwordExample,"onUpdate:modelValue":m[21]||(m[21]=function(l){return e.value.passwordExample=l}),id:"passwordExample",class:"text-[0.9rem] !py-[0.35rem] w-[72%] ml-auto",type:"password",form:"horizontal",label:"password"},null,8,["modelValue"])]),R,(0,t._)("div",H,[(0,t.Wm)(w.Z,{modelValue:e.value.placeholder,"onUpdate:modelValue":m[22]||(m[22]=function(l){return e.value.placeholder=l}),id:"placeholder",class:"text-[0.9rem] !py-[0.35rem] w-[72%] ml-auto",form:"horizontal",label:"placeholder",placeholder:"Placeholder"},null,8,["modelValue"])]),M,F,T,(0,t._)("div",$,[(0,t.Wm)(w.Z,{id:"disabled",class:"text-[0.9rem] !py-[0.35rem] w-[72%] ml-auto",form:"horizontal",label:"disabled",placeholder:"disabled input here",disabled:!0})]),q,(0,t._)("div",B,[Y,(0,t._)("div",A,[(0,t._)("div",L,[(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":m[23]||(m[23]=function(l){return e.value.customCheck=l}),id:"checkbox",type:"checkbox",class:"checkbox"},null,512),[[n.vModelCheckbox,e.value.customCheck]]),j]),(0,t._)("div",G,[(0,t.wy)((0,t._)("input",{value:"radio 1","onUpdate:modelValue":m[24]||(m[24]=function(l){return e.value.customRadio=l}),name:"custom",id:"radio1",type:"radio",class:"radio"},null,512),[[n.vModelRadio,e.value.customRadio]]),K]),(0,t._)("div",O,[(0,t.wy)((0,t._)("input",{value:"radio 2","onUpdate:modelValue":m[25]||(m[25]=function(l){return e.value.customRadio=l}),name:"custom",id:"radio2",type:"radio",class:"radio"},null,512),[[n.vModelRadio,e.value.customRadio]]),J])])]),N,(0,t._)("div",Q,[X,(0,t._)("div",ll,[(0,t.Wm)(y.Z,{modelValue:e.value.singleSelect,"onUpdate:modelValue":m[26]||(m[26]=function(l){return e.value.singleSelect=l}),class:"w-full !text-1",value:"option 1",opt:["option 1","option 2","option 3","option 4"]},null,8,["modelValue"]),(0,t.wy)((0,t._)("select",{"onUpdate:modelValue":m[27]||(m[27]=function(l){return e.value.multiSelect=l}),multiple:"",class:"selectBox selectBox-sm w-full mt-1 !text-[0.9rem]"},[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(["option 1","option 2","option 3","option 4"],(function(l){return(0,t._)("option",{value:l,class:"capitalize"},(0,u.toDisplayString)(l),9,el)})),64))],512),[[n.vModelSelect,e.value.multiSelect]])])]),al,(0,t._)("div",tl,[(0,t.Wm)(w.Z,{modelValue:e.value.successInput,"onUpdate:modelValue":m[28]||(m[28]=function(l){return e.value.successInput=l}),id:"success",class:"text-[0.9rem] !py-[0.35rem] w-[72%] ml-auto",success:!0,form:"horizontal",label:"Input with success"},null,8,["modelValue"])]),ol,(0,t._)("div",nl,[(0,t.Wm)(w.Z,{modelValue:e.value.errorInput,"onUpdate:modelValue":m[29]||(m[29]=function(l){return e.value.errorInput=l}),id:"error",class:"text-[0.9rem] !py-[0.35rem] w-[72%] ml-auto","error-message":"Please provide your name.",error:!0,form:"horizontal",label:"Input with error"},null,8,["modelValue"])]),ul,(0,t._)("div",rl,[sl,(0,t._)("div",il,[(0,t.Wm)(w.Z,{modelValue:e.value.lg,"onUpdate:modelValue":m[30]||(m[30]=function(l){return e.value.lg=l}),id:"lg",class:"w-full",size:"lg",placeholder:"input lg"},null,8,["modelValue"]),(0,t.Wm)(w.Z,{modelValue:e.value.default,"onUpdate:modelValue":m[31]||(m[31]=function(l){return e.value.default=l}),id:"default",size:"default",class:"my-1 w-full",placeholder:"input default"},null,8,["modelValue"]),(0,t.Wm)(w.Z,{modelValue:e.value.sm,"onUpdate:modelValue":m[32]||(m[32]=function(l){return e.value.sm=l}),id:"sm",size:"sm",class:"w-full",placeholder:"input sm"},null,8,["modelValue"])])]),dl,(0,t._)("div",ml,[cl,(0,t._)("div",pl,[(0,t.Wm)(p,{class:"!my-0 !py-0"},{default:(0,t.w5)((function(){return[(0,t.Wm)(c,{class:"!my-0 !py-0",col:"3"},{default:(0,t.w5)((function(){return[(0,t.Wm)(w.Z,{modelValue:e.value.col,"onUpdate:modelValue":m[33]||(m[33]=function(l){return e.value.col=l}),class:"w-full",placeholder:"col 3"},null,8,["modelValue"])]})),_:1}),(0,t.Wm)(c,{class:"!my-0 !py-0",col:"4"},{default:(0,t.w5)((function(){return[(0,t.Wm)(w.Z,{modelValue:e.value.col,"onUpdate:modelValue":m[34]||(m[34]=function(l){return e.value.col=l}),class:"w-full",placeholder:"col 4"},null,8,["modelValue"])]})),_:1}),(0,t.Wm)(c,{class:"!my-0 !py-0",col:"5"},{default:(0,t.w5)((function(){return[(0,t.Wm)(w.Z,{modelValue:e.value.col,"onUpdate:modelValue":m[35]||(m[35]=function(l){return e.value.col=l}),class:"w-full",placeholder:"col 5"},null,8,["modelValue"])]})),_:1})]})),_:1})])]),fl,(0,t._)("div",vl,[bl,(0,t._)("div",wl,[(0,t.Wm)(w.Z,{modelValue:e.value.group,"onUpdate:modelValue":m[36]||(m[36]=function(l){return e.value.group=l}),class:"w-full",id:"d-price",icon:"bi bi-currency-dollar"},null,8,["modelValue"]),(0,t.Wm)(w.Z,{modelValue:e.value.group,"onUpdate:modelValue":m[37]||(m[37]=function(l){return e.value.group=l}),"icon-reverse":!0,class:"w-full my-1",id:"d-price",icon:"bi bi-currency-dollar"},null,8,["modelValue"]),(0,t.Wm)(w.Z,{modelValue:e.value.group,"onUpdate:modelValue":m[38]||(m[38]=function(l){return e.value.group=l}),"icon-both":!0,class:"w-full my-1",id:"d-price",icon:"bi bi-currency-dollar","icon-right":".00"},null,8,["modelValue"]),(0,t.Wm)(w.Z,{modelValue:e.value.group,"onUpdate:modelValue":m[39]||(m[39]=function(l){return e.value.group=l}),form:"mixed","mixed-type":"checkbox",class:"w-full my-1",id:"d-price"},null,8,["modelValue"]),(0,t.Wm)(w.Z,{modelValue:e.value.group,"onUpdate:modelValue":m[40]||(m[40]=function(l){return e.value.group=l}),form:"mixed","mixed-type":"radio",class:"w-full my-1",id:"d-price"},null,8,["modelValue"])])]),_l,(0,t._)("div",yl,[hl,(0,t._)("div",xl,[(0,t.Wm)(_.Z,{type:"outline","button-value":"button",modelValue:e.value.group,"onUpdate:modelValue":m[41]||(m[41]=function(l){return e.value.group=l})},null,8,["modelValue"]),(0,t.Wm)(_.Z,{type:"outline",class:"my-1","button-reverse":!0,"button-value":"button",modelValue:e.value.group,"onUpdate:modelValue":m[42]||(m[42]=function(l){return e.value.group=l})},null,8,["modelValue"])])]),gl,(0,t._)("div",Vl,[kl,(0,t._)("div",Wl,[(0,t.Wm)(_.Z,{type:"outline","button-reverse":!0,form:"dropdown","button-value":"dropdown",modelValue:e.value.group,"onUpdate:modelValue":m[43]||(m[43]=function(l){return e.value.group=l}),"dropdown-list":["action","another action","something else"]},null,8,["modelValue"]),(0,t._)("div",{class:"flex mt-2"},[(0,t._)("button",{onClick:d,class:"btn btn-gray-full btn-sm mr-1"},"cancel"),(0,t._)("button",{onClick:d,class:"btn btn-primary-full btn-sm"},"save changes")])])])]})),_:1})]})),_:1})]})),_:1})])}}}}}]);