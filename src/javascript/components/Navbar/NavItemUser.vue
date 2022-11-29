<template>
  <div @click="toggle" class="w-[50px] h-[50px] shadow-[0_0_17px_rgba(0,0,0,0.2)] rounded-full relative cursor-pointer flex ">
    <img src="../../../assets/profile_1.svg" width="40" class="m-auto user-dropdown-btn" alt="" >

    <Transition name="show">
      <div v-if="show" class="absolute w-3 h-3 bg-primary-indigo top-[62px]">

      </div>
    </Transition>

  </div>
</template>


<script setup>
import {ref} from "vue";
let show=ref(false)
const toggle = () => {
  show.value=!show.value
}
window.addEventListener('click',e=>{
  if(!e.target.classList.contains('user-dropdown-btn')){
    show.value=false
  }

})


</script>
<style scoped>
.show-enter-active,.show-leave-active{
  transition: all 400ms ease-in-out;
}
.show-enter-from,.show-leave-to{
  opacity: 0;
  top: 72px;
}
.show-enter-to,.show-leave-from{
  opacity: 1;
  top: 62px;

}
</style>
