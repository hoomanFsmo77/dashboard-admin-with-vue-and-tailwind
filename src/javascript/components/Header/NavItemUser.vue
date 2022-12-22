<template>
  <UserProfile @focus="show=true" @blur="show=false"  width="50px" height="50px" src="./assets/profile_1.svg" image-width="40" img-class="m-auto user-dropdown-btn">
    <Transition name="show">
      <Dropdown v-if="show" top="62px" width="203px" >
        <li>
          <h5 class="text-1 tracking-[2px] font-700 mb-0.5 text-left">Hooman Mousavi</h5>
          <span class="text-1 text-0.875 text-gray-700 text-left inline-block w-full">Web Developer</span>
        </li>
        <div class="divider"></div>
        <li class="dropdown-hover">
          <AppLink to="#" class="text-left">Setting</AppLink>
        </li>
        <li class="dropdown-hover">
          <AppLink to="#" class="text-left">Activity log</AppLink>
        </li>
        <div class="divider"></div>
        <li class="dropdown-hover">
          <AppLink to="#" class="text-left">Logout</AppLink>
        </li>
      </Dropdown>
    </Transition>
  </UserProfile>
</template>


<script setup>
import useNavbar from "../../composables/useNavbar.js";
import Dropdown from './Dropdown.vue'
import AppLink from "../AppLink.vue";
import UserProfile from "../UserProfile.vue";

const {show}=useNavbar()


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
