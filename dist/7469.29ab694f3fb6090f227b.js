"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7469],{3376:(t,e,i)=>{i.d(e,{Z:()=>p});var n=i(6252),r=i(3577),o={class:"page-navigation"},s={class:"flex flex-row items-center gap-0.75"},l={key:1},a={key:0,class:"text-[0.9rem] text-gray-600"};const p={__name:"Breadcrumb",props:["pages"],setup:function(t){var e=function(t){return{"link text-blue-700 cursor-pointer":t.link}};return function(i,p){var u=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("ul",s,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.pages,(function(i,o){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("li",{class:(0,r.normalizeClass)(["capitalize text-[0.9rem] text-gray-600 font-500",e(i)])},[i.link?((0,n.wg)(),(0,n.j4)(u,{key:0,to:{name:i.link}},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,r.toDisplayString)(i.name),1)]})),_:2},1032,["to"])):((0,n.wg)(),(0,n.iD)("span",l,(0,r.toDisplayString)(i.name),1))],2),(0,n._)("li",null,[o!==t.pages.length-1?((0,n.wg)(),(0,n.iD)("span",a,"/")):(0,n.kq)("v-if",!0)])],64)})),256))])])}}}},8372:(t,e,i)=>{i.d(e,{Z:()=>a});var n=i(6252),r=i(3577),o=i(2262),s=i(9728);const l={__name:"CodeExample",props:["value"],setup:function(t){var e=(0,o.iH)(!1);return function(i,l){var a=(0,n.Q2)("collapsible");return(0,n.wg)(),(0,n.iD)("div",(0,r.normalizeProps)((0,n.F4)(i.$attrs)),[(0,n._)("button",{onClick:l[0]||(l[0]=function(t){return e.value=!e.value}),class:"link font-500 !text-[0.9rem]"},"Show code example"),(0,n.wy)((0,n.Wm)((0,o.SU)(s.Z),{class:"v-collapse mt-2",width:"0",min_width:"100%",read_only:!0,value:t.value},null,8,["value"]),[[a,e.value]])],16)}}};const a=(0,i(3744).Z)(l,[["__scopeId","data-v-55c5469b"]])},5959:(t,e,i)=>{i.r(e),i.d(e,{default:()=>W});var n=i(6252),r=i(2262),o=i(3376),s=i(9592),l=i(8372),a=i(6837),p=(t,e)=>{if(!window?.document)return;const i=document.createElement("style");i.setAttribute("id",t),i.innerHTML=`@keyframes ${t} {${e}}`,document.body.appendChild(i)},u=t=>{if(!window?.document)return;const e=document.getElementById(t);e&&e.parentNode?.removeChild(e)},c=i(3577),h=(t,e)=>{const i=t.__vccOpts||t;for(const[t,n]of e)i[t]=n;return i};var d=h({name:"FlowerSpinner",props:{animationDuration:{type:Number,default:2500},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data:()=>({smallDotName:`flower-spinner-small-dot-${Date.now()}`,bigDotName:`flower-spinner-big-dot-${Date.now()}`}),computed:{dotSize(){return this.size/7},spinnerStyle(){return{width:`${this.size}px`,height:`${this.size}px`}},dotsContainerStyle(){return{width:`${this.dotSize}px`,height:`${this.dotSize}px`}},smallerDotStyle(){return{background:this.color,animationDuration:`${this.animationDuration}ms`,animationName:this.smallDotName}},biggerDotStyle(){return{background:this.color,animationDuration:`${this.animationDuration}ms`,animationName:this.bigDotName}}},watch:{size:{handler:"updateAnimation",immediate:!0},color:{handler:"updateAnimation",immediate:!0}},beforeUnmount(){u(this.smallDotName),u(this.bigDotName)},methods:{updateAnimation(){u(this.smallDotName),p(this.smallDotName,this.generateSmallDotKeyframes()),u(this.bigDotName),p(this.bigDotName,this.generateBigDotKeyframes())},generateSmallDotKeyframes(){return`\n        0%, 100% {\n          box-shadow: 0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color};\n        }\n        25%, 75% {\n          box-shadow: ${1.4*this.dotSize}px 0 0 ${this.color},\n                      -${1.4*this.dotSize}px 0 0 ${this.color},\n                      0 ${1.4*this.dotSize}px 0 ${this.color},\n                      0 -${1.4*this.dotSize}px 0 ${this.color},\n                      ${this.dotSize}px -${this.dotSize}px 0 ${this.color},\n                      ${this.dotSize}px ${this.dotSize}px 0 ${this.color},\n                      -${this.dotSize}px -${this.dotSize}px 0 ${this.color},\n                      -${this.dotSize}px ${this.dotSize}px 0 ${this.color};\n        }\n        100% {\n          box-shadow: 0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color};\n        }`},generateBigDotKeyframes(){return`\n        0%, 100% {\n          box-shadow: 0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color};\n        }\n        50% {\n          transform: rotate(180deg);\n        }\n        25%, 75% {\n          box-shadow: ${2.6*this.dotSize}px 0 0 ${this.color},\n                      -${2.6*this.dotSize}px 0 0 ${this.color},\n                      0 ${2.6*this.dotSize}px 0 ${this.color},\n                      0 -${2.6*this.dotSize}px 0 ${this.color},\n                      ${1.9*this.dotSize}px -${1.9*this.dotSize}px 0 ${this.color},\n                      ${1.9*this.dotSize}px ${1.9*this.dotSize}px 0 ${this.color},\n                      -${1.9*this.dotSize}px -${1.9*this.dotSize}px 0 ${this.color},\n                      -${1.9*this.dotSize}px ${1.9*this.dotSize}px 0 ${this.color};\n        }\n        100% {\n          transform: rotate(360deg);\n          box-shadow: 0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color},\n                      0 0 0 ${this.color};\n        }`}}},[["render",function(t,e,i,r,o,s){return(0,n.wg)(),(0,n.iD)("div",{class:"flower-spinner",style:(0,c.normalizeStyle)(s.spinnerStyle)},[(0,n._)("div",{class:"dots-container",style:(0,c.normalizeStyle)(s.dotsContainerStyle)},[(0,n._)("div",{class:"big-dot",style:(0,c.normalizeStyle)(s.biggerDotStyle)},[(0,n._)("div",{class:"small-dot",style:(0,c.normalizeStyle)(s.smallerDotStyle)},null,4)],4)],4)],4)}]]);var m=h({name:"PixelSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data:()=>({animationName:`pixel-spinner-animation-${Date.now()}`}),computed:{pixelSize(){return this.size/7},spinnerStyle(){return{width:`${this.size}px`,height:`${this.size}px`}},spinnerInnerStyle(){return{animationDuration:`${this.animationDuration}ms`,animationName:this.animationName,width:`${this.pixelSize}px`,height:`${this.pixelSize}px`,backgroundColor:this.color,color:this.color,boxShadow:`\n          ${1.5*this.pixelSize}px ${1.5*this.pixelSize}px 0 0,\n          ${-1.5*this.pixelSize}px ${-1.5*this.pixelSize}px 0 0,\n          ${1.5*this.pixelSize}px ${-1.5*this.pixelSize}px 0 0,\n          ${-1.5*this.pixelSize}px ${1.5*this.pixelSize}px 0 0,\n          0 ${1.5*this.pixelSize}px 0 0,\n          ${1.5*this.pixelSize}px 0 0 0,\n          ${-1.5*this.pixelSize}px 0 0 0,\n          0 ${-1.5*this.pixelSize}px 0 0\n        `}}},watch:{size:{handler:"updateAnimation",immediate:!0}},mounted(){this.updateAnimation()},beforeUnmount(){u(this.animationName)},methods:{updateAnimation(){u(this.animationName),p(this.animationName,this.generateKeyframes())},generateKeyframes(){return`\n        50% {\n          box-shadow:  ${2*this.pixelSize}px ${2*this.pixelSize}px 0 0,\n                       ${-2*this.pixelSize}px ${-2*this.pixelSize}px 0 0,\n                       ${2*this.pixelSize}px ${-2*this.pixelSize}px 0 0,\n                       ${-2*this.pixelSize}px ${2*this.pixelSize}px 0 0,\n                       0 ${this.pixelSize}px 0 0,\n                       ${this.pixelSize}px 0 0 0,\n                       ${-1*this.pixelSize}px 0 0 0,\n                       0 ${-1*this.pixelSize}px 0 0;\n        }\n        75% {\n          box-shadow:  ${2*this.pixelSize}px ${2*this.pixelSize}px 0 0,\n                       ${-2*this.pixelSize}px ${-2*this.pixelSize}px 0 0,\n                       ${2*this.pixelSize}px ${-2*this.pixelSize}px 0 0,\n                       ${-2*this.pixelSize}px ${2*this.pixelSize}px 0 0,\n                       0 ${this.pixelSize}px 0 0,\n                       ${this.pixelSize}px 0 0 0,\n                       ${-1*this.pixelSize}px 0 0 0,\n                       0 ${-1*this.pixelSize}px 0 0;\n        }\n        100% {\n          transform: rotate(360deg);\n        }`}}},[["render",function(t,e,i,r,o,s){return(0,n.wg)(),(0,n.iD)("div",{class:"pixel-spinner",style:(0,c.normalizeStyle)(s.spinnerStyle)},[(0,n._)("div",{class:"pixel-spinner-inner",style:(0,c.normalizeStyle)(s.spinnerInnerStyle)},null,4)],4)}]]);var f=h({name:"HollowDotsSpinner",props:{animationDuration:{type:Number,default:1e3},dotSize:{type:Number,default:15},dotsNum:{type:Number,default:3},color:{type:String,default:"#fff"}},computed:{horizontalMargin(){return this.dotSize/2},spinnerStyle(){return{height:`${this.dotSize}px`,width:(this.dotSize+2*this.horizontalMargin)*this.dotsNum+"px"}},dotStyle(){return{animationDuration:`${this.animationDuration}ms`,width:`${this.dotSize}px`,height:`${this.dotSize}px`,margin:`0 ${this.horizontalMargin}px`,borderWidth:this.dotSize/5+"px",borderColor:this.color}},dotsStyles(){const t=[],e=this.animationDuration;for(let i=1;i<=this.dotsNum;i++)t.push({animationDelay:e*i*.3+"ms",...this.dotStyle});return t}}},[["render",function(t,e,i,r,o,s){return(0,n.wg)(),(0,n.iD)("div",{class:"hollow-dots-spinner",style:(0,c.normalizeStyle)(s.spinnerStyle)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.dotsStyles,((t,e)=>((0,n.wg)(),(0,n.iD)("div",{key:e,class:"dot",style:(0,c.normalizeStyle)(t)},null,4)))),128))],4)}]]);var S=h({name:"IntersectingCirclesSpinner",props:{animationDuration:{type:Number,default:1200},size:{type:Number,default:70},color:{type:String,default:"#fff"}},computed:{circleSize(){return this.size/2},spinnerStyle(){return{width:`${this.size}px`,height:`${this.size}px`}},spinnerBlockStyle(){return{animationDuration:`${this.animationDuration}ms`,width:`${this.circleSize}px`,height:`${this.circleSize}px`}},circleStyle(){return{borderColor:this.color}},circleStyles(){return[{top:0,left:0},{left:-.36*this.circleSize+"px",top:.2*this.circleSize+"px"},{left:-.36*this.circleSize+"px",top:-.2*this.circleSize+"px"},{left:0,top:-.36*this.circleSize+"px"},{left:.36*this.circleSize+"px",top:-.2*this.circleSize+"px"},{left:.36*this.circleSize+"px",top:.2*this.circleSize+"px"},{left:0,top:.36*this.circleSize+"px"}].map((t=>Object.assign(t,this.circleStyle)))}}},[["render",function(t,e,i,r,o,s){return(0,n.wg)(),(0,n.iD)("div",{class:"intersecting-circles-spinner",style:(0,c.normalizeStyle)(s.spinnerStyle)},[(0,n._)("div",{class:"spinnerBlock",style:(0,c.normalizeStyle)(s.spinnerBlockStyle)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.circleStyles,((t,e)=>((0,n.wg)(),(0,n.iD)("span",{key:e,class:"circle",style:(0,c.normalizeStyle)(t)},null,4)))),128))],4)],4)}]]);var y=h({name:"OrbitSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:50},color:{type:String,default:"#fff"}},computed:{spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`}},orbitStyle(){return{borderColor:this.color,animationDuration:`${this.animationDuration}ms`}}}},[["render",function(t,e,i,r,o,s){return(0,n.wg)(),(0,n.iD)("div",{class:"orbit-spinner",style:(0,c.normalizeStyle)(s.spinnerStyle)},[(0,n._)("div",{class:"orbit one",style:(0,c.normalizeStyle)(s.orbitStyle)},null,4),(0,n._)("div",{class:"orbit two",style:(0,c.normalizeStyle)(s.orbitStyle)},null,4),(0,n._)("div",{class:"orbit three",style:(0,c.normalizeStyle)(s.orbitStyle)},null,4)],4)}]]);var x=h({name:"RadarSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:110},color:{type:String,default:"#fff"}},data:()=>({circlesNum:4}),computed:{borderWidth(){return 5*this.size/110},spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`}},circleStyle(){return{animationDuration:`${this.animationDuration}ms`}},circleInnerContainerStyle(){return{borderWidth:`${this.borderWidth}px`}},circleInnerStyle(){return{borderLeftColor:this.color,borderRightColor:this.color,borderWidth:`${this.borderWidth}px`}},circlesStyles(){const t=[],e=.15*this.animationDuration;for(let i=0;i<this.circlesNum;i++)t.push(Object.assign({padding:2*this.borderWidth*i+"px",animationDelay:`${i===this.circlesNum-1?0:e}ms`},this.circleStyle));return t}}},[["render",function(t,e,i,r,o,s){return(0,n.wg)(),(0,n.iD)("div",{class:"radar-spinner",style:(0,c.normalizeStyle)(s.spinnerStyle)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.circlesStyles,((t,e)=>((0,n.wg)(),(0,n.iD)("div",{key:e,class:"circle",style:(0,c.normalizeStyle)(t)},[(0,n._)("div",{class:"circle-inner-container",style:(0,c.normalizeStyle)(s.circleInnerContainerStyle)},[(0,n._)("div",{class:"circle-inner",style:(0,c.normalizeStyle)(s.circleInnerStyle)},null,4)],4)],4)))),128))],4)}]]);var z=h({name:"FulfillingBouncingCircleSpinner",props:{animationDuration:{type:Number,default:4e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`,animationDuration:`${this.animationDuration}ms`}},orbitStyle(){return{height:`${this.size}px`,width:`${this.size}px`,borderColor:this.color,borderWidth:.03*this.size+"px",animationDuration:`${this.animationDuration}ms`}},circleStyle(){return{height:`${this.size}px`,width:`${this.size}px`,borderColor:this.color,color:this.color,borderWidth:.1*this.size+"px",animationDuration:`${this.animationDuration}ms`}}}},[["render",function(t,e,i,r,o,s){return(0,n.wg)(),(0,n.iD)("div",{class:"fulfilling-bouncing-circle-spinner",style:(0,c.normalizeStyle)(s.spinnerStyle)},[(0,n._)("div",{class:"circle",style:(0,c.normalizeStyle)(s.circleStyle)},null,4),(0,n._)("div",{class:"orbit",style:(0,c.normalizeStyle)(s.orbitStyle)},null,4)],4)}]]);var $=h({name:"FingerprintSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:60},color:{type:String,default:"#fff"}},data:()=>({ringsNum:9,containerPadding:2}),computed:{outerRingSize(){return this.size-2*this.containerPadding},spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`,padding:`${this.containerPadding}px`}},ringStyle(){return{borderTopColor:this.color,animationDuration:`${this.animationDuration}ms`}},ringsStyles(){const t=[],e=this.outerRingSize/this.ringsNum,i=e;for(let n=1;n<=this.ringsNum;n++){const r=Object.assign({animationDelay:50*n+"ms",height:`${e+(n-1)*i}px`,width:`${e+(n-1)*i}px`},this.ringStyle);t.push(r)}return t}}},[["render",function(t,e,i,r,o,s){return(0,n.wg)(),(0,n.iD)("div",{class:"fingerprint-spinner",style:(0,c.normalizeStyle)(s.spinnerStyle)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.ringsStyles,((t,e)=>((0,n.wg)(),(0,n.iD)("div",{key:e,class:"spinner-ring",style:(0,c.normalizeStyle)(t)},null,4)))),128))],4)}]]);var g=h({name:"FulfillingSquareSpinner",props:{animationDuration:{type:Number,default:4e3},size:{type:Number,default:50},color:{type:String,default:"#fff"}},computed:{spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`,borderColor:this.color,animationDuration:`${this.animationDuration}ms`}},spinnerInnerStyle(){return{backgroundColor:this.color,animationDuration:`${this.animationDuration}ms`}}}},[["render",function(t,e,i,r,o,s){return(0,n.wg)(),(0,n.iD)("div",{class:"fulfilling-square-spinner",style:(0,c.normalizeStyle)(s.spinnerStyle)},[(0,n._)("div",{class:"spinner-inner",style:(0,c.normalizeStyle)(s.spinnerInnerStyle)},null,4)],4)}]]);var w=h({name:"SpringSpinner",props:{animationDuration:{type:Number,default:3e3},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data:()=>({animationName:`spring-spinner-animation-${Date.now()}`}),computed:{spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`}},spinnerPartStyle(){return{height:this.size/2+"px",width:`${this.size}px`}},rotatorStyle(){return{height:`${this.size}px`,width:`${this.size}px`,borderRightColor:this.color,borderTopColor:this.color,borderWidth:this.size/7+"px",animationDuration:`${this.animationDuration}ms`,animationName:this.animationName}}},watch:{size:{handler:"updateAnimation",immediate:!0},color:{handler:"updateAnimation",immediate:!0}},mounted(){this.updateAnimation()},beforeUnmount(){u(this.animationName)},methods:{updateAnimation(){u(this.animationName),p(this.animationName,this.generateKeyframes())},generateKeyframes(){return`\n        0% {\n          border-width: ${this.size/7}px;\n        }\n        25% {\n          border-width: ${this.size/23.33}px;\n        }\n        50% {\n          transform: rotate(115deg);\n          border-width: ${this.size/7}px;\n        }\n        75% {\n          border-width: ${this.size/23.33}px;\n          }\n        100% {\n          border-width: ${this.size/7}px;\n        }`}}},[["render",function(t,e,i,r,o,s){return(0,n.wg)(),(0,n.iD)("div",{class:"spring-spinner",style:(0,c.normalizeStyle)(s.spinnerStyle)},[(0,n._)("div",{class:"spring-spinner-part top",style:(0,c.normalizeStyle)(s.spinnerPartStyle)},[(0,n._)("div",{class:"spring-spinner-rotator",style:(0,c.normalizeStyle)(s.rotatorStyle)},null,4)],4),(0,n._)("div",{class:"spring-spinner-part bottom",style:(0,c.normalizeStyle)(s.spinnerPartStyle)},[(0,n._)("div",{class:"spring-spinner-rotator",style:(0,c.normalizeStyle)(s.rotatorStyle)},null,4)],4)],4)}]]),b={class:"container-fluid"},D=(0,n._)("h1",{class:"text-primary-dark uppercase tracking-widest !px-0 mt-1.2"},"Preloaders",-1),v={class:"card p-2"},_=(0,n._)("p",{class:"article"},[(0,n.Uk)(" This template comes with preloader component. You can pass "),(0,n._)("code",null,"variant"),(0,n.Uk)(" and "),(0,n._)("code",null,"type"),(0,n.Uk)(" props. You can find it in "),(0,n._)("code",null,"src/javascript/components/Preoloader."),(0,n.Uk)(" For list of all available types please follow "),(0,n._)("a",{href:"https://github.com/epicmaxco/epic-spinners",class:"link font-500"},"Epic spinners documentation")],-1),N=(0,n._)("p",{class:"article"}," Epic spinners uses hardware accelerated (translate and opacity) CSS animations to create smooth and easily customizable animations. ",-1);const W={__name:"Preloaders",setup:function(t){return function(t,e){var i=(0,n.up)("column"),p=(0,n.up)("row");return(0,n.wg)(),(0,n.iD)("div",b,[(0,n.Wm)(p,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(i,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(o.Z,{pages:[{name:"home",link:"Main"},{name:"Preloaders"}]}),D]})),_:1})]})),_:1}),(0,n.Wm)(p,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(i,{col:"12"},{default:(0,n.w5)((function(){return[(0,n._)("div",v,[_,N,(0,n.Wm)(l.Z,{value:(0,r.SU)(a.Of)},null,8,["value"])])]})),_:1})]})),_:1}),(0,n.Wm)(p,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(i,{col:"12",sm:"6",md:"3"},{default:(0,n.w5)((function(){return[(0,n.Wm)(s.Z,{title:"flower spinner","has-menu":!1,"body-class":"!p-3 flex items-center justify-center"},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,r.SU)(d),{"animation-duration":2500,size:70,color:"#ff1d5e"})]})),_:1})]})),_:1}),(0,n.Wm)(i,{col:"12",sm:"6",md:"3"},{default:(0,n.w5)((function(){return[(0,n.Wm)(s.Z,{title:"pixel spinner","has-menu":!1,"body-class":"!p-3 flex items-center justify-center"},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,r.SU)(m),{"animation-duration":2e3,size:70,color:"#ff1d5e"})]})),_:1})]})),_:1}),(0,n.Wm)(i,{col:"12",sm:"6",md:"3"},{default:(0,n.w5)((function(){return[(0,n.Wm)(s.Z,{title:"hollow dots spinner","has-menu":!1,"body-class":"!p-3 !py-4 flex items-center justify-center"},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,r.SU)(f),{"animation-duration":1e3,"dot-size":15,"dots-num":3,color:"#ff1d5e"})]})),_:1})]})),_:1}),(0,n.Wm)(i,{col:"12",sm:"6",md:"3"},{default:(0,n.w5)((function(){return[(0,n.Wm)(s.Z,{title:"intersecting circles","has-menu":!1,"body-class":"!p-2.5  flex items-center justify-center"},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,r.SU)(S),{"animation-duration":1200,size:70,color:"#ff1d5e"})]})),_:1})]})),_:1}),(0,n.Wm)(i,{col:"12",sm:"6",md:"3"},{default:(0,n.w5)((function(){return[(0,n.Wm)(s.Z,{title:"orbit spinner","has-menu":!1,"body-class":"!p-3  flex items-center justify-center"},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,r.SU)(y),{"animation-duration":1200,size:55,color:"#ff1d5e"})]})),_:1})]})),_:1}),(0,n.Wm)(i,{col:"12",sm:"6",md:"3"},{default:(0,n.w5)((function(){return[(0,n.Wm)(s.Z,{title:"radar spinner","has-menu":!1,"body-class":"!p-3  flex items-center justify-center"},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,r.SU)(x),{"animation-duration":2e3,size:60,color:"#ff1d5e"})]})),_:1})]})),_:1}),(0,n.Wm)(i,{col:"12",sm:"6",md:"3"},{default:(0,n.w5)((function(){return[(0,n.Wm)(s.Z,{title:"fulfilling bouncing","has-menu":!1,"body-class":"!p-2  flex items-center justify-center"},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,r.SU)(z),{"animation-duration":4e3,size:60,color:"#ff1d5e"})]})),_:1})]})),_:1}),(0,n.Wm)(i,{col:"12",sm:"6",md:"3"},{default:(0,n.w5)((function(){return[(0,n.Wm)(s.Z,{title:"fingerprint spinner","has-menu":!1,"body-class":"!p-2  flex items-center justify-center"},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,r.SU)($),{"animation-duration":1500,size:64,color:"#ff1d5e"})]})),_:1})]})),_:1}),(0,n.Wm)(i,{col:"12",sm:"6",md:"3"},{default:(0,n.w5)((function(){return[(0,n.Wm)(s.Z,{title:"fulfilling square","has-menu":!1,"body-class":"!p-2  flex items-center justify-center"},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,r.SU)(g),{"animation-duration":4e3,size:50,color:"#ff1d5e"})]})),_:1})]})),_:1}),(0,n.Wm)(i,{col:"12",sm:"6",md:"3"},{default:(0,n.w5)((function(){return[(0,n.Wm)(s.Z,{title:"spring spinner","has-menu":!1,"body-class":"!p-2  flex items-center justify-center"},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,r.SU)(w),{"animation-duration":3e3,size:60,color:"#ff1d5e"})]})),_:1})]})),_:1})]})),_:1})])}}}}}]);