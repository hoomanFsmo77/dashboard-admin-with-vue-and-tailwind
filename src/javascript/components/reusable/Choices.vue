<template>
  <template v-if="searchSelect">
    <select ref="select" class="selectBox ">
      <option v-for="item in opt" :value="item.label" class="capitalize" >
        {{item.value}}
      </option>
    </select>
  </template>
  <template v-if="tag">
    <select multiple ref="multiSelect" class="selectBox ">
      <option v-for="item in opt" :value="item.label" class="capitalize" >
        {{item.value}}
      </option>
    </select>
  </template>
</template>

<script setup>
import 'choices.js/public/assets/scripts/choices.min.js'
import {ref,onMounted} from "vue";
let props=defineProps(['searchSelect','opt','tag'])
const select=ref(null)
const multiSelect=ref(null)
onMounted(()=>{
  if(props.searchSelect){
    const choices = new Choices(select.value)
  }
  if(props.tag){
    const multi = new Choices(multiSelect.value,{
      removeItemButton:true
    });
  }

})


</script>

<style lang="scss">
@import "choices.js/public/assets/styles/choices.min.css";
.choices{width: 100%}
.choices__list--multiple .choices__item.choices__item--selectable:not(.choices__item--choice){line-height: 2;background-color: rgba(79,70,229,0.9);border-color: rgba(79,70,229,0.9)}
</style>