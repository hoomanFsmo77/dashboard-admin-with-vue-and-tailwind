<template>
  <button ref="btn" v-on="progress ? event : null" :data-style="animation">
    <slot></slot>
  </button>

</template>

<script setup>
import {ref,onMounted} from "vue";
import * as Ladda from 'ladda';
let props=defineProps(['animation','duration','progress'])
const btn=ref(null)


onMounted(()=>{
  if(!props.progress){
    Ladda.bind(btn.value,{timeout: props.duration})
  }
})

const handleClick = () => {
  let ladda = Ladda.create(btn.value);
  if(!ladda.isLoading()){
    let i=0.1
    ladda.start()

    let interval=setInterval(()=>{
      ladda.setProgress(i)
      i+=0.1
      console.log(i)
      if(i>1){
        clearInterval(interval)
        ladda.stop()
      }
    },props.duration /10)

  }
}

const event = {
  click:handleClick
}


</script>
