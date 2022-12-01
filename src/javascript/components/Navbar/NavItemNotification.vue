<template>
  <div class="relative">
    <div class="relative " @click="toggle">
      <i class="bi bi-bell-fill text-secondary-gray text-1.5 cursor-pointer notif-dropdown-btn hover:text-gray-700 transition-all"></i>
      <span class="badge ">10</span>
    </div>
   <Transition name="show">
     <Dropdown v-if="show" width="210px" top="54px">
        <li class=" dropdown-hover">
          <AppLink to="#" class="dropdown-card">
            <div class="user-profile !w-[45px] !h-[43px]">
              <img src="../../../assets/profile_2.svg" class="m-auto" width="32" alt="">
            </div>
            <div>
              <span class="dropdown-card-name">Json Doe</span>
              <span class="dropdown-card-message">Sent you a message</span>
            </div>
          </AppLink>
        </li>
        <li class=" dropdown-hover">
          <AppLink to="#" class="dropdown-card">
            <div class="user-profile !w-[45px] !h-[43px]">
              <img src="../../../assets/profile_3.svg" class="m-auto" width="32" alt="">
            </div>
            <div>
              <span class="dropdown-card-name">Frank Williams</span>
              <span class="dropdown-card-message">Sent you a message</span>
            </div>
          </AppLink>
        </li>
        <li class=" dropdown-hover">
          <AppLink to="#" class="dropdown-card">
            <div class="user-profile !w-[45px] !h-[43px]">
              <img src="../../../assets/profile_4.svg" class="m-auto" width="32" alt="">
            </div>
            <div>
              <span class="dropdown-card-name">Ashley Wood</span>
              <span class="dropdown-card-message">Sent you a message</span>
            </div>
          </AppLink>
        </li>
       <div class="divider"></div>
       <li class="dropdown-hover text-center">
          <span class="text-0.75 text-gray-500 font-700 ">VIEW ALL MESSAGES</span>
       </li>
     </Dropdown>
   </Transition>
  </div>
</template>

<script setup>
import useNavbar from "../../composables/useNavbar.js";
import Dropdown from "./Dropdown.vue";
import '../../../style/components/Transition.scss'
import AppLink from "../AppLink.vue";
const {toggle,show}=useNavbar()
window.addEventListener('click',e=>{
  if(!e.target.classList.contains('notif-dropdown-btn')){
    show.value=false
  }
})


</script>

