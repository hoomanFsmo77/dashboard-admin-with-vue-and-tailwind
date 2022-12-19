<template>
  <div class="input-group flex gap-0 items-stretch">
    <input :value="modelValue" @input="inputHandler($event)" type="text" class="input w-full" :placeholder="placeholder" :class="{'!rounded-r-[0px] !border-[1px] !border-primary-indigo/50 !border-r-[0px]':type==='outline'}"/>
    <button @click="sendText" class="btn  h-full !rounded-l-[0]" :class="{'!btn-primary':type==='outline','btn-primary-full':type==='full'}">
      <i :class="icon"></i>
    </button>
  </div>
</template>

<script setup>
import {defineEmits,ref} from "vue";

let searchText=ref('')
let props=defineProps(['icon','placeholder','modelValue','type'])
let emits=defineEmits(['update:modelValue','call'])

const sendText = () => {
  emits('call',searchText.value)
}

const inputHandler = e => {
  searchText.value=e.target.value
  emits('update:modelValue',searchText.value)
}

</script>

