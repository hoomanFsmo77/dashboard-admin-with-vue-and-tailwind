<template>
  <Slider
      v-model="value"
      :format="format"
      :min="min"
      :max="max"
      :orientation="orientation ?? 'horizontal'"
      v-bind="$attrs"
  />
</template>

<script setup>
import Slider from '@vueform/slider'
import {ref,onMounted} from "vue";
let props=defineProps(['min','max','value','format','color','shadow','orientation'])
let value=ref([0,0,0])
let color=ref(props.color ?? null)
let shadow=ref(props.shadow ?? null)
onMounted(()=>{
  value.value= props.value
})
const format = value => {
  return `${value}${props.format}`
}


</script>

<style lang="scss">
.slider-connect{
  background-color: v-bind(color)!important;
}
.slider-tooltip{
  background-color: v-bind(color) !important;
  border-color: v-bind(color) !important;
}
.slider-handle:focus{
  box-shadow: 0 0 0 4px v-bind(shadow)!important;
}
</style>