<template>
  <div class="relative">
    <div class="relative " @click="toggle">
      <i class="bi bi-bell-fill text-secondary-gray text-1.5 cursor-pointer notif-dropdown-btn hover:text-gray-700 transition-all"></i>
      <span class="badge ">10</span>
    </div>
   <Transition name="show">
     <div v-if="show" class="absolute w-3 h-3 bg-primary-indigo top-[54px] dropdown">

     </div>
   </Transition>
  </div>
</template>

<script setup>
import useNavbar from "../../composables/useNavbar.js";
const {toggle,show}=useNavbar()
window.addEventListener('click',e=>{
  if(!e.target.classList.contains('notif-dropdown-btn')){
    show.value=false
  }
})


</script>

