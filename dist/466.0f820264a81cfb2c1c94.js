"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[466],{8466:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ve});var l=n(6252),i=n(2262),o=n(3577),a=n(9963),r=n(3647),u=n(3644),s=n(7899);n(232);var c,d=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],p=function(e){return-1!==d.map((function(e){return e.toLowerCase()})).indexOf(e.toLowerCase())},f=function(e,t,n,i,o,a){i.setContent(a()),n.attrs["onUpdate:modelValue"]&&function(e,t,n,i){var o=e.modelEvents?e.modelEvents:null,a=Array.isArray(o)?o.join(" "):o;(0,l.YP)(i,(function(t,l){n&&"string"==typeof t&&t!==l&&t!==n.getContent({format:e.outputFormat})&&n.setContent(t)})),n.on(a||"change input undo redo",(function(){t.emit("update:modelValue",n.getContent({format:e.outputFormat}))}))}(t,n,i,o),function(e,t,n){Object.keys(t).filter(p).forEach((function(l){var i=t[l];"function"==typeof i&&("onInit"===l?i(e,n):n.on(l.substring(2),(function(e){return i(e,n)})))}))}(e,n.attrs,i)},m=0,v=function(e){var t=Date.now();return e+"_"+Math.floor(1e9*Math.random())+ ++m+String(t)},g=function(e){return void 0===e||""===e?[]:Array.isArray(e)?e:e.split(" ")},y=function(){return{listeners:[],scriptId:v("tiny-script"),scriptLoaded:!1}},b=(c=y(),{load:function(e,t,n){c.scriptLoaded?n():(c.listeners.push(n),e.getElementById(c.scriptId)||function(e,t,n,l){var i=t.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=e,i.src=n;var o=function(){i.removeEventListener("load",o),l()};i.addEventListener("load",o),t.head&&t.head.appendChild(i)}(c.scriptId,e,t,(function(){c.listeners.forEach((function(e){return e()})),c.scriptLoaded=!0})))},reinitialize:function(){c=y()}}),h=function(){var e="undefined"!=typeof window?window:n.g;return e&&e.tinymce?e.tinymce:null},w={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(e){return"html"===e||"text"===e}}},x=function(){return x=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},x.apply(this,arguments)};const _=(0,l.aZ)({props:w,setup:function(e,t){var n=e.init?x({},e.init):{},o=(0,i.BK)(e),a=o.disabled,r=o.modelValue,u=o.tagName,s=(0,i.iH)(null),c=null,d=e.id||v("tiny-vue"),p=e.init&&e.init.inline||e.inline,m=!!t.attrs["onUpdate:modelValue"],y=!0,w=e.initialValue?e.initialValue:"",_="",S=function(){var l,i,o,a=(l=y,m?function(){return(null==r?void 0:r.value)?r.value:""}:function(){return l?w:_}),u=x(x({},n),{readonly:e.disabled,selector:"#"+d,plugins:(i=n.plugins,o=e.plugins,g(i).concat(g(o))),toolbar:e.toolbar||n.toolbar,inline:p,setup:function(l){c=l,l.on("init",(function(n){return f(n,e,t,l,r,a)})),"function"==typeof n.setup&&n.setup(l)}});(function(e){return null!==e&&"textarea"===e.tagName.toLowerCase()})(s.value)&&(s.value.style.visibility=""),h().init(u),y=!1};(0,l.YP)(a,(function(e){var t;null!==c&&("function"==typeof(null===(t=c.mode)||void 0===t?void 0:t.set)?c.mode.set(e?"readonly":"design"):c.setMode(e?"readonly":"design"))})),(0,l.YP)(u,(function(e){var t;m||(_=c.getContent()),null===(t=h())||void 0===t||t.remove(c),(0,l.Y3)((function(){return S()}))})),(0,l.bv)((function(){if(null!==h())S();else if(s.value&&s.value.ownerDocument){var t=e.cloudChannel?e.cloudChannel:"6",n=e.apiKey?e.apiKey:"no-api-key",l=null==e.tinymceScriptSrc?"https://cdn.tiny.cloud/1/"+n+"/tinymce/"+t+"/tinymce.min.js":e.tinymceScriptSrc;b.load(s.value.ownerDocument,l,S)}})),(0,l.Jd)((function(){null!==h()&&h().remove(c)})),p||((0,l.dl)((function(){y||S()})),(0,l.se)((function(){var e;m||(_=c.getContent()),null===(e=h())||void 0===e||e.remove(c)})));return t.expose({rerender:function(e){var t;_=c.getContent(),null===(t=h())||void 0===t||t.remove(c),n=x(x({},n),e),(0,l.Y3)((function(){return S()}))}}),function(){return p?function(e,t,n,l){return e(l||"div",{id:t,ref:n})}(l.h,d,s,e.tagName):(0,l.h)("textarea",{id:d,visibility:"hidden",ref:s})}}});var S=n(6837),U={class:"container-fluid"},k=(0,l._)("h1",{class:"text-primary-dark uppercase tracking-widest"},"Add new post",-1),C={class:"card p-2"},P=(0,l._)("button",{class:"btn-primary btn my-1.3"},"Add Media",-1),D={id:"editor"},E={class:"px-2 pb-2"},V=(0,l._)("div",{class:"flex justify-between items-center"},[(0,l._)("button",{class:"btn btn-gray btn-sm-2"},"Save Draft"),(0,l._)("button",{class:"btn btn-gray btn-sm-2"},"Preview")],-1),M=(0,l._)("div",{class:"divider !my-1.5"},null,-1),H={class:"flex flex-col gap-1.2"},A={class:"text-gray-700 font-400 text-[0.9rem]"},W={class:"font-700"},B={class:"h-0 overflow-hidden"},L={class:"text-gray-700 font-400 text-[0.9rem]"},O={class:"font-700"},I={class:"h-0 overflow-hidden"},K={class:"flex items-center gap-0.5 my-0.5"},j=(0,l._)("label",{class:"text-[0.9rem] text-gray-700",for:"public"},"Public",-1),R={class:"flex items-center gap-0.5 my-0.5"},q=(0,l._)("label",{class:"text-[0.9rem] text-gray-700",for:"Password"},"Password Protected",-1),T={class:"flex items-center gap-0.5 my-0.5"},z=(0,l._)("label",{class:"text-[0.9rem] text-gray-700",for:"Private"},"Private",-1),N={class:"text-gray-700 font-400 text-[0.9rem]"},Y=(0,l._)("span",{class:"font-700"},"immediately ",-1),Z={class:"h-0 overflow-hidden"},F={class:"flex items-center gap-0.5 my-0.5"},G=["value"],J=(0,l._)("input",{type:"text",class:"input w-[15%] text-[0.8rem] text-center",value:"8"},null,-1),Q=(0,l._)("input",{type:"text",class:"input w-[15%] text-[0.8rem] text-center",value:"0"},null,-1),X=(0,l._)("div",{class:"card-footer !py-1 text-right"},[(0,l._)("button",{class:"btn btn-primary-full"},"Publish")],-1),$={class:"flex flex-col gap-0.5"},ee={class:"flex gap-0.5 items-center"},te=["id"],ne=["for"],le={class:"flex flex-col gap-0.5"},ie={class:"flex gap-0.5 items-center"},oe=["checked","id"],ae=["for"],re={class:"mt-1.2 text-center"},ue={class:"border-[1px] border-gray-500 bg-gray-100 px-1 py-0.5 w-full relative min-h-[100px]"},se={class:"flex flex-wrap gap-0.25"},ce={class:"tag"},de=(0,l._)("span",{class:"text-primary-dark"},"|",-1),pe=["onClick"],fe={key:0,class:"user-hint absolute top-[102%] bg-[#fff] border-b-[1px] border-r-[1px] border-l-[1px] border-gray-600 left-0 w-full p-0.5"},me={class:"text-[0.9rem]"};const ve={__name:"newPost",setup:function(e){var t=function(){var e=(0,i.iH)(""),t=(0,i.iH)("Public"),n=new Date,l=(0,i.iH)(!1),o=(0,i.iH)(""),a=(0,i.iH)(["tag 1","tag 2"]),r=(0,i.iH)(null),u=(0,i.iH)(!1);return{status:e,show:l,visibility:t,date:n,openSection:function(e){e.target.parentElement.parentElement.nextElementSibling.classList.toggle("h-full"),e.target.parentElement.parentElement.nextElementSibling.classList.toggle("o-visible")},setValue:function(t){e.value=t},increaseWidth:function(e){var t=r.value.style.width;u.value=!0,"Backspace"!==e.key?r.value.style.width="".concat(Number(t.slice(0,t.length-2))+1,"ch"):t>"2ch"?r.value.style.width="".concat(Number(t.slice(0,t.length-2))-1,"ch"):(u.value=!1,a.value.pop())},addTag:function(){a.value.push(o.value),r.value.style.width="2ch",u.value=!1,o.value=""},removeTag:function(e){a.value.splice(e,1)},closeHint:function(){u.value=!1},input:o,tagInput:r,showHint:u,tags:a}}(),n=t.closeHint,c=t.removeTag,d=t.addTag,p=t.increaseWidth,f=t.setValue,m=t.openSection,v=t.date,g=(t.show,t.visibility),y=t.status,b=t.showHint,h=t.tagInput,w=t.input,x=t.tags;return function(e,t){var ve=(0,l.up)("column"),ge=(0,l.up)("v-date-picker"),ye=(0,l.up)("router-link"),be=(0,l.up)("row");return(0,l.wg)(),(0,l.iD)("div",U,[k,(0,l.Wm)(be,null,{default:(0,l.w5)((function(){return[(0,l.Wm)(ve,{col:"12",md:"8"},{default:(0,l.w5)((function(){return[(0,l._)("div",C,[(0,l._)("div",null,[(0,l.Wm)(s.Z,{placeholder:"Title",class:"w-full",label:"Title"})]),P,(0,l._)("div",D,[(0,l.Wm)((0,i.SU)(_),{"api-key":"1sqqkdh417xv6ib0rp0mw51o1frcz75habn1u7zh3tmdcgof","initial-value":(0,i.SU)(S.fL),style:{height:"1150px"},init:{plugins:"lists link image table code help wordcount"}},null,8,["initial-value"])])])]})),_:1}),(0,l.Wm)(ve,{col:"12",md:"4"},{default:(0,l.w5)((function(){return[(0,l.Wm)(r.Z,{"has-menu":null,title:"Publish","body-class":"!pt-2 !px-0"},{default:(0,l.w5)((function(){return[(0,l._)("div",E,[V,M,(0,l._)("ul",H,[(0,l._)("li",null,[(0,l._)("div",null,[(0,l._)("span",A,[(0,l.Uk)(" Status: "),(0,l._)("span",W,(0,o.toDisplayString)((0,i.SU)(y)),1),(0,l._)("button",{class:"link cursor-pointer ml-0.65 text-[0.8rem]",onClick:t[0]||(t[0]=function(e){return(0,i.SU)(m)(e)})},"Edit")])]),(0,l._)("div",B,[(0,l.Wm)(u.Z,{onInput:t[1]||(t[1]=function(e){return(0,i.SU)(f)(e)}),modelValue:(0,i.SU)(y),"onUpdate:modelValue":t[2]||(t[2]=function(e){return(0,i.dq)(y)?y.value=e:null}),class:"w-full my-0.5",value:"Draft",opt:["Pending","Pending Review","Draft"]},null,8,["modelValue"])])]),(0,l._)("li",null,[(0,l._)("div",null,[(0,l._)("span",L,[(0,l.Uk)(" Visibility: "),(0,l._)("span",O,(0,o.toDisplayString)((0,i.SU)(g)),1),(0,l._)("button",{class:"link cursor-pointer ml-0.65 text-[0.8rem]",onClick:t[3]||(t[3]=function(e){return(0,i.SU)(m)(e)})},"Edit")])]),(0,l._)("div",I,[(0,l._)("div",K,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return(0,i.dq)(g)?g.value=e:null}),value:"Public",id:"public",class:"radio",type:"radio"},null,512),[[a.vModelRadio,(0,i.SU)(g)]]),j]),(0,l._)("div",R,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return(0,i.dq)(g)?g.value=e:null}),value:"Password",id:"Password",class:"radio",type:"radio"},null,512),[[a.vModelRadio,(0,i.SU)(g)]]),q]),(0,l._)("div",T,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return(0,i.dq)(g)?g.value=e:null}),value:"Private",id:"Private",class:"radio",type:"radio"},null,512),[[a.vModelRadio,(0,i.SU)(g)]]),z])])]),(0,l._)("li",null,[(0,l._)("div",null,[(0,l._)("span",N,[(0,l.Uk)(" Publish: "),Y,(0,l._)("button",{class:"link cursor-pointer ml-0.65 text-[0.8rem]",onClick:t[7]||(t[7]=function(e){return(0,i.SU)(m)(e)})},"Edit")])]),(0,l._)("div",Z,[(0,l._)("div",F,[(0,l.Wm)(ge,{class:"w-[50%]",modelValue:(0,i.SU)(v),"onUpdate:modelValue":t[8]||(t[8]=function(e){return(0,i.dq)(v)?v.value=e:null})},{default:(0,l.w5)((function(e){var t=e.inputValue,n=e.inputEvents;return[(0,l._)("input",(0,l.dG)({class:"input w-full text-[0.8rem]",value:t},(0,l.mx)(n,!0)),null,16,G)]})),_:1},8,["modelValue"]),(0,l.Uk)(" at "),J,(0,l.Uk)(" : "),Q])])])])]),X]})),_:1}),(0,l.Wm)(r.Z,{class:"my-1.3","has-menu":null,title:"format","body-class":"!p-2"},{default:(0,l.w5)((function(){return[(0,l._)("ul",$,[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(["standard","aside","image","video","quote","link"],(function(e){return(0,l._)("li",ee,[(0,l._)("input",{name:"format",type:"radio",class:"radio",id:e},null,8,te),(0,l._)("label",{class:"text-[0.9rem] text-primary-dark] capitalize",for:e},(0,o.toDisplayString)(e),9,ne)])})),64))])]})),_:1}),(0,l.Wm)(r.Z,{class:"my-1.3","has-menu":null,title:"Categories","body-class":"!p-2"},{default:(0,l.w5)((function(){return[(0,l._)("ul",le,[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(["gear","stories","tips & Tricks","trips","Uncategorized"],(function(e,t){return(0,l._)("li",ie,[(0,l._)("input",{type:"checkbox",class:"checkbox",checked:1===t||2===t||3===t,id:e},null,8,oe),(0,l._)("label",{class:"text-[0.9rem] text-primary-dark] capitalize",for:e},(0,o.toDisplayString)(e),9,ae)])})),64))]),(0,l._)("div",re,[(0,l.Wm)(ye,{to:{name:"newPost"},class:"link"},{default:(0,l.w5)((function(){return[(0,l.Uk)(" + Add New Post ")]})),_:1})])]})),_:1}),(0,l.Wm)(r.Z,{class:"my-1.3","has-menu":null,title:"Tags","body-class":"!p-2 flex flex-wrap gap-0.5"},{default:(0,l.w5)((function(){return[(0,l._)("div",ue,[(0,l._)("ul",se,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,i.SU)(x),(function(e,t){return(0,l.wg)(),(0,l.iD)("li",ce,[(0,l.Uk)((0,o.toDisplayString)(e)+" ",1),de,(0,l._)("i",{class:"bi bi-x cursor-pointer",onClick:function(e){return(0,i.SU)(c)(t)}},null,8,pe)])})),256)),(0,l.wy)((0,l._)("input",{ref_key:"tagInput",ref:h,"onUpdate:modelValue":t[9]||(t[9]=function(e){return(0,i.dq)(w)?w.value=e:null}),onBlur:t[10]||(t[10]=function(){return(0,i.SU)(n)&&(0,i.SU)(n).apply(void 0,arguments)}),onKeyup:[t[11]||(t[11]=function(e){return(0,i.SU)(p)(e)}),t[12]||(t[12]=(0,a.withKeys)((function(){return(0,i.SU)(d)&&(0,i.SU)(d).apply(void 0,arguments)}),["enter"]))],style:{"min-width":"1ch",width:"2ch"},type:"text",class:"max-w-full border-none outline-none bg-transparent"},null,544),[[a.vModelText,(0,i.SU)(w)]])]),(0,i.SU)(b)?((0,l.wg)(),(0,l.iD)("div",fe,[(0,l._)("span",me,' Press Enter to add "'+(0,o.toDisplayString)((0,i.SU)(w))+'" ',1)])):(0,l.kq)("v-if",!0)])]})),_:1})]})),_:1})]})),_:1})])}}}}}]);