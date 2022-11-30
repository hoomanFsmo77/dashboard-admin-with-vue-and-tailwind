<template>
  <div class="relative hidden lg:block" >
      <form @submit.prevent>
        <div class="relative ">
          <button class="bi bi-search absolute right-0 top-[12%] mr-0.5 text-1.1 cursor-pointer text-gray-500 peer" @click="toggle"></button>
          <input type="text" class="input group-focus/item:ring-4 peer-focus:ring-4 w-20 "  placeholder="search..."  @focus="focus" @blur="blur">
        </div>
      </form>
    <Transition name="show">
      <div v-if="show" class="absolute w-3 h-3 bg-primary-indigo top-[54px]">

      </div>
    </Transition>
  </div>
</template>
<script setup>

import useNavbar from "../../composables/useNavbar.js";
const {show,toggle,blur,focus}=useNavbar()

window.addEventListener('click',e=>{
  if(!e.target.classList.contains('input') && !e.target.classList.contains('bi-search')){
    show.value=false
  }

})

</script>
