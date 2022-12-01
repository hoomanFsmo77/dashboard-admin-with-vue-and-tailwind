<template>
  <div class="relative">
    <div class="relative" @click="toggle">
      <i class="bi bi-bar-chart-line text-secondary-gray text-1.5 cursor-pointer statistic-dropdown-btn hover:text-gray-700 transition-all"></i>
      <span class="badge !w-0.5 !h-0.5 !bg-primary-green !top-[0]"></span>
    </div>
    <Transition name="show">
      <Dropdown v-if="show" top="54px" width="236px">
        <li class="dropdown-hover ">
          <AppLink to="#" class="dropdown-card ">
            <span class="dropdown-icon bg-primary-indigo">
              <i class="fa-brands fa-twitter"></i>
            </span>
             <span class="text-[0.75rem] text-primary-dark text-left mr-auto font-500">
              You have 2 followers
            </span>
          </AppLink>
        </li>
        <li class=" dropdown-hover ">
            <AppLink to="#" class="dropdown-card">
              <span class="dropdown-icon bg-primary-green">
             <i class="fa-solid fa-envelope"></i>
            </span>
              <span class="text-[0.75rem] text-primary-dark text-left mr-auto font-500">
            You have 6 new messages
          </span>
            </AppLink>
        </li>
        <li class=" dropdown-hover ">
            <AppLink to="#" class="dropdown-card">
              <span class="dropdown-icon bg-primary-sky">
                 <i class="fa-solid fa-arrow-up-from-bracket"></i>
              </span>
              <span class="text-[0.75rem] text-primary-dark text-left mr-auto font-500">
                Server rebooted
               </span>
            </AppLink>
        </li>
        <li class=" dropdown-hover ">
           <AppLink to="#" class="dropdown-card">
              <span class="dropdown-icon bg-primary-indigo">
              <i class="fa-brands fa-twitter"></i>
            </span>
             <span class="text-[0.75rem] text-primary-dark text-left mr-auto font-500">
            You have 2 followers
                </span>
           </AppLink>
        </li>
        <div class="divider"></div>
        <li class="dropdown-hover text-center">
          <AppLink to="#">
            <span class="text-0.75 text-gray-500 font-700 ">VIEW ALL NOTIFICATIONS</span>
          </AppLink>
        </li>

      </Dropdown>
    </Transition>
  </div>
</template>


<script setup>
import '../../../style/components/Transition.scss'
import Dropdown from "./Dropdown.vue";
import useNavbar from "../../composables/useNavbar.js";
import AppLink from "../AppLink.vue";

const {show, toggle} = useNavbar()
window.addEventListener('click', e => {
  if (!e.target.classList.contains('statistic-dropdown-btn')) {
    show.value = false
  }
})


</script>
