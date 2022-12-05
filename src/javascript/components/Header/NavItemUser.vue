<template>
  <UserProfile @click="toggle" width="50px" height="50px" src="./assets/profile_1.svg" image-width="40" img-class="m-auto user-dropdown-btn">
    <Transition name="show">
      <Dropdown v-if="show" top="62px" width="203px" >
        <li>
          <h5 class="text-1 tracking-[2px] font-700 mb-0.5">Hooman Mousavi</h5>
          <span class="text-1 text-0.875 text-gray-700">Web Developer</span>
        </li>
        <div class="divider"></div>
        <li class="dropdown-hover">
          <AppLink to="#">Setting</AppLink>
        </li>
        <li class="dropdown-hover">
          <AppLink to="#">Activity log</AppLink>
        </li>
        <div class="divider"></div>
        <li class="dropdown-hover">
          <AppLink to="#">Logout</AppLink>
        </li>
      </Dropdown>
    </Transition>
  </UserProfile>
</template>


<script setup>
import useNavbar from "../../composables/useNavbar.js";
import Dropdown from './Dropdown.vue'
import AppLink from "../reusable/AppLink.vue";
import UserProfile from "../reusable/UserProfile.vue";

const {toggle,show}=useNavbar()
window.addEventListener('click',e=>{
  if(!e.target.classList.contains('user-dropdown-btn')){
    show.value=false
  }

})


</script>
<style scoped lang="scss">
@import "tailwindcss/components";

@layer components {
  .show-enter-active,.show-leave-active{
    @apply transition-all ease-in-out duration-300
  }
  .show-enter-from,.show-leave-to{
    @apply opacity-0 top-[72px];
  }
  .show-enter-to,.show-leave-from{
    @apply opacity-100 top-[62px];
  }

}

</style>
