<template>
  <div class="input-group flex gap-0 items-stretch">
    <input :value="modelValue" @input="inputHandler($event)" type="text" class="input w-full" :placeholder="placeholder" />
    <button @click="sendText" class="btn btn-primary-full h-full !rounded-l-[0]">
      <i :class="icon"></i>
    </button>
  </div>
</template>

<script setup>
import {defineEmits,ref} from "vue";

let searchText=ref('')
let props=defineProps(['icon','placeholder','modelValue'])
let emits=defineEmits(['update:modelValue','call'])

const sendText = () => {
  emits('call',searchText.value)
}

const inputHandler = e => {
  searchText.value=e.target.value
  emits('update:modelValue',searchText.value)
}

</script>

