"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[254],{7267:(e,t,n)=>{n.d(t,{Z:()=>y});var l,i=n(6252),o=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],a=function(e){return-1!==o.map((function(e){return e.toLowerCase()})).indexOf(e.toLowerCase())},r=function(e,t,n,l,o,r){l.setContent(r()),n.attrs["onUpdate:modelValue"]&&function(e,t,n,l){var o=e.modelEvents?e.modelEvents:null,a=Array.isArray(o)?o.join(" "):o;(0,i.YP)(l,(function(t,l){n&&"string"==typeof t&&t!==l&&t!==n.getContent({format:e.outputFormat})&&n.setContent(t)})),n.on(a||"change input undo redo",(function(){t.emit("update:modelValue",n.getContent({format:e.outputFormat}))}))}(t,n,l,o),function(e,t,n){Object.keys(t).filter(a).forEach((function(l){var i=t[l];"function"==typeof i&&("onInit"===l?i(e,n):n.on(l.substring(2),(function(e){return i(e,n)})))}))}(e,n.attrs,l)},u=0,s=function(e){var t=Date.now();return e+"_"+Math.floor(1e9*Math.random())+ ++u+String(t)},c=function(e){return void 0===e||""===e?[]:Array.isArray(e)?e:e.split(" ")},d=function(){return{listeners:[],scriptId:s("tiny-script"),scriptLoaded:!1}},p=(l=d(),{load:function(e,t,n){l.scriptLoaded?n():(l.listeners.push(n),e.getElementById(l.scriptId)||function(e,t,n,l){var i=t.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=e,i.src=n;var o=function(){i.removeEventListener("load",o),l()};i.addEventListener("load",o),t.head&&t.head.appendChild(i)}(l.scriptId,e,t,(function(){l.listeners.forEach((function(e){return e()})),l.scriptLoaded=!0})))},reinitialize:function(){l=d()}}),f=function(){var e="undefined"!=typeof window?window:n.g;return e&&e.tinymce?e.tinymce:null},m={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(e){return"html"===e||"text"===e}}},v=n(2262),g=function(){return g=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},g.apply(this,arguments)};const y=(0,i.aZ)({props:m,setup:function(e,t){var n=e.init?g({},e.init):{},l=(0,v.BK)(e),o=l.disabled,a=l.modelValue,u=l.tagName,d=(0,v.iH)(null),m=null,y=e.id||s("tiny-vue"),b=e.init&&e.init.inline||e.inline,h=!!t.attrs["onUpdate:modelValue"],w=!0,x=e.initialValue?e.initialValue:"",_="",S=function(){var l,i,o,u=(l=w,h?function(){return(null==a?void 0:a.value)?a.value:""}:function(){return l?x:_}),s=g(g({},n),{readonly:e.disabled,selector:"#"+y,plugins:(i=n.plugins,o=e.plugins,c(i).concat(c(o))),toolbar:e.toolbar||n.toolbar,inline:b,setup:function(l){m=l,l.on("init",(function(n){return r(n,e,t,l,a,u)})),"function"==typeof n.setup&&n.setup(l)}});(function(e){return null!==e&&"textarea"===e.tagName.toLowerCase()})(d.value)&&(d.value.style.visibility=""),f().init(s),w=!1};(0,i.YP)(o,(function(e){var t;null!==m&&("function"==typeof(null===(t=m.mode)||void 0===t?void 0:t.set)?m.mode.set(e?"readonly":"design"):m.setMode(e?"readonly":"design"))})),(0,i.YP)(u,(function(e){var t;h||(_=m.getContent()),null===(t=f())||void 0===t||t.remove(m),(0,i.Y3)((function(){return S()}))})),(0,i.bv)((function(){if(null!==f())S();else if(d.value&&d.value.ownerDocument){var t=e.cloudChannel?e.cloudChannel:"6",n=e.apiKey?e.apiKey:"no-api-key",l=null==e.tinymceScriptSrc?"https://cdn.tiny.cloud/1/"+n+"/tinymce/"+t+"/tinymce.min.js":e.tinymceScriptSrc;p.load(d.value.ownerDocument,l,S)}})),(0,i.Jd)((function(){null!==f()&&f().remove(m)})),b||((0,i.dl)((function(){w||S()})),(0,i.se)((function(){var e;h||(_=m.getContent()),null===(e=f())||void 0===e||e.remove(m)})));return t.expose({rerender:function(e){var t;_=m.getContent(),null===(t=f())||void 0===t||t.remove(m),n=g(g({},n),e),(0,i.Y3)((function(){return S()}))}}),function(){return b?function(e,t,n,l){return e(l||"div",{id:t,ref:n})}(i.h,y,d,e.tagName):(0,i.h)("textarea",{id:y,visibility:"hidden",ref:d})}}})},3088:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(2262);const i=function(){var e=(0,l.iH)(""),t=(0,l.iH)("Public"),n=new Date,i=(0,l.iH)(!1),o=(0,l.iH)(""),a=(0,l.iH)(["tag 1","tag 2"]),r=(0,l.iH)(null),u=(0,l.iH)(!1);return{status:e,show:i,visibility:t,date:n,openSection:function(e){e.target.parentElement.parentElement.nextElementSibling.classList.toggle("h-100"),e.target.parentElement.parentElement.nextElementSibling.classList.toggle("o-visible")},setValue:function(t){e.value=t},increaseWidth:function(e){var t=r.value.style.width;u.value=!0,"Backspace"!==e.key?r.value.style.width="".concat(Number(t.slice(0,t.length-2))+1,"ch"):t>"2ch"?r.value.style.width="".concat(Number(t.slice(0,t.length-2))-1,"ch"):(u.value=!1,a.value.pop())},addTag:function(){a.value.push(o.value),r.value.style.width="2ch",u.value=!1,o.value=""},removeTag:function(e){a.value.splice(e,1)},closeHint:function(){u.value=!1},input:o,tagInput:r,showHint:u,tags:a}}},1254:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ie});var l=n(6252),i=n(2262),o=n(3577),a=n(9963),r=n(3647),u=n(3216),s=n(6623),c=(n(232),n(3088)),d=n(7267),p=n(6837),f={class:"container-fluid"},m=(0,l._)("h1",{class:"text-primary-dark uppercase tracking-widest"},"Add new post",-1),v={class:"card p-2"},g=(0,l._)("button",{class:"btn-primary btn my-1.3"},"Add Media",-1),y={id:"editor"},b={class:"px-2 pb-2"},h=(0,l._)("div",{class:"flex justify-between items-center"},[(0,l._)("button",{class:"btn btn-gray btn-sm-2"},"Save Draft"),(0,l._)("button",{class:"btn btn-gray btn-sm-2"},"Preview")],-1),w=(0,l._)("div",{class:"divider !my-1.5"},null,-1),x={class:"flex flex-col gap-1.2"},_={class:"text-gray-700 font-400 text-[0.9rem]"},S={class:"font-700"},U={class:"h-0 overflow-hidden"},k={class:"text-gray-700 font-400 text-[0.9rem]"},C={class:"font-700"},P={class:"h-0 overflow-hidden"},D={class:"flex items-center gap-0.5 my-0.5"},E=(0,l._)("label",{class:"text-[0.9rem] text-gray-700",for:"public"},"Public",-1),V={class:"flex items-center gap-0.5 my-0.5"},M=(0,l._)("label",{class:"text-[0.9rem] text-gray-700",for:"Password"},"Password Protected",-1),H={class:"flex items-center gap-0.5 my-0.5"},A=(0,l._)("label",{class:"text-[0.9rem] text-gray-700",for:"Private"},"Private",-1),W={class:"text-gray-700 font-400 text-[0.9rem]"},B=(0,l._)("span",{class:"font-700"},"immediately ",-1),L={class:"h-0 overflow-hidden"},O={class:"flex items-center gap-0.5 my-0.5"},I=["value"],K=(0,l._)("input",{type:"text",class:"input w-[15%] text-[0.8rem] text-center",value:"8"},null,-1),j=(0,l._)("input",{type:"text",class:"input w-[15%] text-[0.8rem] text-center",value:"0"},null,-1),R=(0,l._)("div",{class:"card-footer !py-1 text-right"},[(0,l._)("button",{class:"btn btn-primary-full"},"Publish")],-1),Z={class:"flex flex-col gap-0.5"},q={class:"flex gap-0.5 items-center"},T=["id"],z=["for"],N={class:"flex flex-col gap-0.5"},Y={class:"flex gap-0.5 items-center"},F=["checked","id"],G=["for"],J={class:"mt-1.2 text-center"},Q={class:"border-[1px] border-gray-300 bg-gray-100 px-1 py-0.5 w-full relative min-h-[100px]"},X={class:"flex flex-wrap gap-0.25"},$={class:"tag"},ee=(0,l._)("span",{class:"text-primary-dark"},"|",-1),te=["onClick"],ne={key:0,class:"user-hint absolute top-[102%] bg-[#fff] border-b-[1px] border-r-[1px] border-l-[1px] border-gray-600 left-0 w-full p-0.5"},le={class:"text-[0.9rem]"};const ie={__name:"newPost",setup:function(e){var t=(0,c.Z)(),n=t.closeHint,ie=t.removeTag,oe=t.addTag,ae=t.increaseWidth,re=t.setValue,ue=t.openSection,se=t.date,ce=(t.show,t.visibility),de=t.status,pe=t.showHint,fe=t.tagInput,me=t.input,ve=t.tags;return function(e,t){var c=(0,l.up)("column"),ge=(0,l.up)("v-date-picker"),ye=(0,l.up)("router-link"),be=(0,l.up)("row");return(0,l.wg)(),(0,l.iD)("div",f,[m,(0,l.Wm)(be,null,{default:(0,l.w5)((function(){return[(0,l.Wm)(c,{col:"12",md:"8"},{default:(0,l.w5)((function(){return[(0,l._)("div",v,[(0,l._)("div",null,[(0,l.Wm)(s.Z,{placeholder:"Title",class:"w-full",label:"Title"})]),g,(0,l._)("div",y,[(0,l.Wm)((0,i.SU)(d.Z),{"api-key":"1sqqkdh417xv6ib0rp0mw51o1frcz75habn1u7zh3tmdcgof","initial-value":(0,i.SU)(p.fL),style:{height:"1150px"},init:{plugins:"lists link image table code help wordcount"}},null,8,["initial-value"])])])]})),_:1}),(0,l.Wm)(c,{col:"12",md:"4"},{default:(0,l.w5)((function(){return[(0,l.Wm)(r.Z,{"has-menu":null,title:"Publish","body-class":"!pt-2 !px-0"},{default:(0,l.w5)((function(){return[(0,l._)("div",b,[h,w,(0,l._)("ul",x,[(0,l._)("li",null,[(0,l._)("div",null,[(0,l._)("span",_,[(0,l.Uk)(" Status: "),(0,l._)("span",S,(0,o.toDisplayString)((0,i.SU)(de)),1),(0,l._)("button",{class:"link cursor-pointer ml-0.65 text-[0.8rem]",onClick:t[0]||(t[0]=function(e){return(0,i.SU)(ue)(e)})},"Edit")])]),(0,l._)("div",U,[(0,l.Wm)(u.Z,{onInput:t[1]||(t[1]=function(e){return(0,i.SU)(re)(e)}),modelValue:(0,i.SU)(de),"onUpdate:modelValue":t[2]||(t[2]=function(e){return(0,i.dq)(de)?de.value=e:null}),class:"w-full my-0.5",value:"Draft",opt:["Pending","Pending Review","Draft"]},null,8,["modelValue"])])]),(0,l._)("li",null,[(0,l._)("div",null,[(0,l._)("span",k,[(0,l.Uk)(" Visibility: "),(0,l._)("span",C,(0,o.toDisplayString)((0,i.SU)(ce)),1),(0,l._)("button",{class:"link cursor-pointer ml-0.65 text-[0.8rem]",onClick:t[3]||(t[3]=function(e){return(0,i.SU)(ue)(e)})},"Edit")])]),(0,l._)("div",P,[(0,l._)("div",D,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return(0,i.dq)(ce)?ce.value=e:null}),value:"Public",id:"public",class:"radio",type:"radio"},null,512),[[a.vModelRadio,(0,i.SU)(ce)]]),E]),(0,l._)("div",V,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return(0,i.dq)(ce)?ce.value=e:null}),value:"Password",id:"Password",class:"radio",type:"radio"},null,512),[[a.vModelRadio,(0,i.SU)(ce)]]),M]),(0,l._)("div",H,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return(0,i.dq)(ce)?ce.value=e:null}),value:"Private",id:"Private",class:"radio",type:"radio"},null,512),[[a.vModelRadio,(0,i.SU)(ce)]]),A])])]),(0,l._)("li",null,[(0,l._)("div",null,[(0,l._)("span",W,[(0,l.Uk)(" Publish: "),B,(0,l._)("button",{class:"link cursor-pointer ml-0.65 text-[0.8rem]",onClick:t[7]||(t[7]=function(e){return(0,i.SU)(ue)(e)})},"Edit")])]),(0,l._)("div",L,[(0,l._)("div",O,[(0,l.Wm)(ge,{class:"w-[50%]",modelValue:(0,i.SU)(se),"onUpdate:modelValue":t[8]||(t[8]=function(e){return(0,i.dq)(se)?se.value=e:null})},{default:(0,l.w5)((function(e){var t=e.inputValue,n=e.inputEvents;return[(0,l._)("input",(0,l.dG)({class:"input w-full text-[0.8rem]",value:t},(0,l.mx)(n,!0)),null,16,I)]})),_:1},8,["modelValue"]),(0,l.Uk)(" at "),K,(0,l.Uk)(" : "),j])])])])]),R]})),_:1}),(0,l.Wm)(r.Z,{class:"my-1.3","has-menu":null,title:"format","body-class":"!p-2"},{default:(0,l.w5)((function(){return[(0,l._)("ul",Z,[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(["standard","aside","image","video","quote","link"],(function(e){return(0,l._)("li",q,[(0,l._)("input",{name:"format",type:"radio",class:"radio",id:e},null,8,T),(0,l._)("label",{class:"text-[0.9rem] text-primary-dark] capitalize",for:e},(0,o.toDisplayString)(e),9,z)])})),64))])]})),_:1}),(0,l.Wm)(r.Z,{class:"my-1.3","has-menu":null,title:"Categories","body-class":"!p-2"},{default:(0,l.w5)((function(){return[(0,l._)("ul",N,[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(["gear","stories","tips & Tricks","trips","Uncategorized"],(function(e,t){return(0,l._)("li",Y,[(0,l._)("input",{type:"checkbox",class:"checkbox",checked:1===t||2===t||3===t,id:e},null,8,F),(0,l._)("label",{class:"text-[0.9rem] text-primary-dark] capitalize",for:e},(0,o.toDisplayString)(e),9,G)])})),64))]),(0,l._)("div",J,[(0,l.Wm)(ye,{to:{name:"newPost"},class:"link"},{default:(0,l.w5)((function(){return[(0,l.Uk)(" + Add New Post ")]})),_:1})])]})),_:1}),(0,l.Wm)(r.Z,{class:"my-1.3","has-menu":null,title:"Tags","body-class":"!p-2 flex flex-wrap gap-0.5"},{default:(0,l.w5)((function(){return[(0,l._)("div",Q,[(0,l._)("ul",X,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,i.SU)(ve),(function(e,t){return(0,l.wg)(),(0,l.iD)("li",$,[(0,l.Uk)((0,o.toDisplayString)(e)+" ",1),ee,(0,l._)("i",{class:"bi bi-x cursor-pointer",onClick:function(e){return(0,i.SU)(ie)(t)}},null,8,te)])})),256)),(0,l.wy)((0,l._)("input",{ref_key:"tagInput",ref:fe,"onUpdate:modelValue":t[9]||(t[9]=function(e){return(0,i.dq)(me)?me.value=e:null}),onBlur:t[10]||(t[10]=function(){return(0,i.SU)(n)&&(0,i.SU)(n).apply(void 0,arguments)}),onKeyup:[t[11]||(t[11]=function(e){return(0,i.SU)(ae)(e)}),t[12]||(t[12]=(0,a.withKeys)((function(){return(0,i.SU)(oe)&&(0,i.SU)(oe).apply(void 0,arguments)}),["enter"]))],style:{"min-width":"1ch",width:"2ch"},type:"text",class:"max-w-full border-none outline-none bg-transparent"},null,544),[[a.vModelText,(0,i.SU)(me)]])]),(0,i.SU)(pe)?((0,l.wg)(),(0,l.iD)("div",ne,[(0,l._)("span",le,' Press Enter to add "'+(0,o.toDisplayString)((0,i.SU)(me))+'" ',1)])):(0,l.kq)("v-if",!0)])]})),_:1})]})),_:1})]})),_:1})])}}}}}]);