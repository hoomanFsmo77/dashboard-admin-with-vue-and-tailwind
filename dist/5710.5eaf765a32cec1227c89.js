/*! For license information please see 5710.5eaf765a32cec1227c89.js.LICENSE.txt */
"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5710],{5710:(e,t,l)=>{l.r(t),l.d(t,{DragAndDrop:()=>v});var i=Object.defineProperty,a=(e,t,l)=>(((e,t,l)=>{t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l})(e,"symbol"!=typeof t?t+"":t,l),l);let n=null,r=null,u={id:null,date:null},s=!1,c=!0,d={el:null,cell:null,timeout:null};const o={_eid:null,fromVueCal:null,toVueCal:null},v=class{constructor(e){a(this,"_vuecal"),this._vuecal=e}_getEventStart(e){const{timeStep:t,timeCellHeight:l,timeFrom:i,utils:a}=this._vuecal;let{y:n}=a.cell.getPosition(e);return n-=1*e.dataTransfer.getData("cursor-grab-at"),Math.round(n*t/parseInt(l)+i)}_updateEventStartEnd(e,t,l,i){const a=1*l.duration||t.endTimeMinutes-t.startTimeMinutes;let n=Math.max(this._getEventStart(e),0);if(this._vuecal.snapToTime){const e=n+this._vuecal.snapToTime/2;n=e-e%this._vuecal.snapToTime}t.startTimeMinutes=n,t.start=new Date(new Date(i).setMinutes(n)),t.endTimeMinutes=Math.min(n+a,1440),t.end=new Date(new Date(i).setMinutes(t.endTimeMinutes))}eventDragStart(e,t){if(3===e.target.nodeType)return e.preventDefault();e.dataTransfer.dropEffect="move",e.dataTransfer.setData("event",JSON.stringify(t)),e.dataTransfer.setData("cursor-grab-at",e.offsetY);const{clickHoldAnEvent:l}=this._vuecal.domEvents;setTimeout((()=>{l._eid=null,clearTimeout(l.timeoutId),t.deleting=!1}),0),this._vuecal.domEvents.dragAnEvent._eid=t._eid,o._eid=t._eid,o.fromVueCal=this._vuecal._.uid,t.dragging=!0,setTimeout((()=>t.draggingStatic=!0),0),s=!1,u={id:this._vuecal.view.id,date:this._vuecal.view.startDate},c=!0}eventDragEnd(e){this._vuecal.domEvents.dragAnEvent._eid=null,o._eid=null,e.dragging=!1,e.draggingStatic=!1;const{fromVueCal:t,toVueCal:l}=o;l&&t!==l&&this._vuecal.utils.event.deleteAnEvent(e),o.fromVueCal=null,o.toVueCal=null,s&&c&&u.id&&this._vuecal.switchView(u.id,u.date,!0)}cellDragEnter(e,t,l){const i=e.currentTarget;if(!e.currentTarget.contains(e.relatedTarget)){if(i===d.el||!i.className.includes("vuecal__cell-content"))return!1;d.el&&(d.cell.highlighted=!1),d={el:i,cell:t,timeout:clearTimeout(d.timeout)},t.highlighted=!0,["years","year","month"].includes(this._vuecal.view.id)&&(d.timeout=setTimeout((()=>this._vuecal.switchToNarrowerView(l)),2e3))}}cellDragOver(e,t,l,i){e.preventDefault(),t.highlighted=!0,(i||0===i)&&(t.highlightedSplit=i)}cellDragLeave(e,t){e.preventDefault(),e.currentTarget.contains(e.relatedTarget)||(t.highlightedSplit=!1,d.cell===t&&(clearTimeout(d.timeout),d={el:null,cell:null,timeout:null},t.highlighted=!1))}cellDragDrop(e,t,l,i){e.preventDefault(),clearTimeout(d.timeout),d={el:null,cell:null,timeout:null};const a=JSON.parse(e.dataTransfer.getData("event")||"{}");let n,r;if(o.fromVueCal!==this._vuecal._.uid){const{_eid:e,start:t,end:r,duration:u,...s}=a;n=this._vuecal.utils.event.createAnEvent(l,u,{...s,split:i})}else if(n=this._vuecal.view.events.find((e=>e._eid===o._eid)),n||(n=this._vuecal.mutableEvents.find((e=>e._eid===o._eid)),r=!!n),!n){const e=a.endTimeMinutes-a.startTimeMinutes,{start:t,end:r,...u}=a;n=this._vuecal.utils.event.createAnEvent(l,e,{...u,split:i})}const{start:u,split:s}=n;this._updateEventStartEnd(e,n,a,l),r&&this._vuecal.addEventsToView([n]),n.dragging=!1,(i||0===i)&&(n.split=i),t.highlighted=!1,t.highlightedSplit=null,c=!1,o.toVueCal=this._vuecal._.uid;const v={event:this._vuecal.cleanupEvent(n),oldDate:u,newDate:n.start,...(i||0===i)&&{oldSplit:s,newSplit:i},originalEvent:this._vuecal.cleanupEvent(a),external:!o.fromVueCal};this._vuecal.$emit("event-drop",v),this._vuecal.$emit("event-change",{event:v.event,originalEvent:v.originalEvent}),setTimeout((()=>{o._eid&&this.eventDragEnd(n)}),300)}viewSelectorDragEnter(e,t,l){e.currentTarget.contains(e.relatedTarget)||(l.highlightedControl=t,clearTimeout(n),n=setTimeout((()=>{if(["previous","next"].includes(t))this._vuecal[t](),clearInterval(r),r=setInterval(this._vuecal[t],800);else if("today"===t){let e;clearInterval(r),this._vuecal.view.id.includes("year")&&(e=this._vuecal.enabledViews.filter((e=>!e.includes("year")))[0]),this._vuecal.switchView(e||this._vuecal.view.id,new Date((new Date).setHours(0,0,0,0)),!0)}else this._vuecal.switchView(t,null,!0);s=!0}),800))}viewSelectorDragLeave(e,t,l){e.currentTarget.contains(e.relatedTarget)||l.highlightedControl===t&&(l.highlightedControl=null,n&&(n=clearTimeout(n)),r&&(r=clearInterval(r)))}}}}]);