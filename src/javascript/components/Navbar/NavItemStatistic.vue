<template>
  <div class="relative">
    <div class="relative" @click="toggle">
      <i class="bi bi-bar-chart-line text-secondary-gray text-1.5 cursor-pointer statistic-dropdown-btn hover:text-gray-700 transition-all"></i>
      <span class="badge !w-0.5 !h-0.5 !bg-primary-green !top-[0]"></span>
    </div>
    <Transition name="show">
      <div v-if="show" class="absolute w-3 h-3 bg-primary-indigo top-[54px] dropdown">

      </div>
    </Transition>
  </div>
</template>


<script setup>
import useNavbar from "../../composables/useNavbar.js";
const {show,toggle}=useNavbar()
window.addEventListener('click',e=>{
  if(!e.target.classList.contains('statistic-dropdown-btn')){
    show.value=false
  }
})


</script>
