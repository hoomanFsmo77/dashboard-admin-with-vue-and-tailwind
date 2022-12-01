<template>
  <div class="relative hidden lg:block" >
      <form @submit.prevent>
        <div class="relative ">
          <button class="bi bi-search absolute right-0 top-[12%] mr-0.5 text-1.1 cursor-pointer text-gray-500 peer" @click="toggle"></button>
          <input type="text" class="input group-focus/item:ring-4 peer-focus:ring-4 w-20 "  placeholder="search..."  @focus="focus" @blur="blur">
        </div>
      </form>
    <Transition name="show">
      <Dropdown v-if="show" width="228px" top="54px">
        <li class="text-gray-500 text-0.875">
              RECENT PAGES
            </li>
        <li class="dropdown-hover !py-[0.45rem]">
          <AppLink to="#" class="dropdown-card">
            <i class="fa-regular fa-note-sticky text-0.875 text-gray-700"></i>
            <span class="text-0.75 mr-auto text-gray-700">Posts</span>
          </AppLink>
        </li>
        <li class="dropdown-hover !py-[0.45rem]">
          <AppLink to="#" class="dropdown-card">
            <i class="fa-regular fa-note-sticky text-0.875 text-gray-700"></i>
            <span class="text-0.75 mr-auto text-gray-700">Widget</span>
          </AppLink>
        </li>
        <li class="dropdown-hover !py-[0.45rem]">
          <AppLink to="#" class="dropdown-card">
            <i class="fa-regular fa-note-sticky text-0.875 text-gray-700"></i>
            <span class="text-0.75 mr-auto text-gray-700">Profile</span>
          </AppLink>
        </li>
        <div class="divider"></div>
        <li class="text-gray-500 text-0.875 !py-[0.3rem]">
          USERS
        </li>
        <li class="dropdown-hover !py-[0.4rem]">
          <AppLink class="dropdown-card" to="#">
            <div class="user-profile !w-[31px] !h-[29px]">
              <img src="../../../assets/profile_5.svg" class="m-auto" width="18" alt="">
            </div>
            <span class="text-0.875 text-gray-800 mr-auto">Json Doe</span>
          </AppLink>

        </li>
        <li class="dropdown-hover !py-[0.4rem]">
          <AppLink class="dropdown-card" to="#">
            <div class="user-profile !w-[31px] !h-[29px]">
              <img src="../../../assets/profile_6.svg" class="m-auto" width="18" alt="">
            </div>
            <span class="text-0.875 text-gray-800 mr-auto">Frank Williams</span>
          </AppLink>

        </li>
        <li class="dropdown-hover !py-[0.4rem]">
          <AppLink class="dropdown-card" to="#">
            <div class="user-profile !w-[31px] !h-[29px]">
              <img src="../../../assets/profile_1.svg" class="m-auto" width="18" alt="">
            </div>
            <span class="text-0.875 text-gray-800 mr-auto">Ashley Wood</span>
          </AppLink>

        </li>
        <div class="divider"></div>
        <li class="text-gray-500 text-0.875 !py-[0.3rem]">
          FILTERS
        </li>
        <li class="dropdown-hover">
          <AppLink to="#" class="dropdown-card">
              <span class="category-card bg-red-200 text-primary-red ">Posts</span>
              <span class="text-0.75 text-gray-800 mr-auto">Search all posts</span>
          </AppLink>
        </li>
        <li class="dropdown-hover">
          <AppLink to="#" class="dropdown-card">
              <span class="category-card bg-green-200 text-green-600 ">Users</span>
              <span class="text-0.75 text-gray-800 mr-auto">Only in users</span>
          </AppLink>
        </li>
        <li class="dropdown-hover">
          <AppLink to="#" class="dropdown-card">
              <span class="category-card bg-indigo-300 text-indigo-700 ">Campaigns</span>
              <span class="text-0.75 text-gray-800 mr-auto">Campaigns</span>
          </AppLink>
        </li>

      </Dropdown>
    </Transition>
  </div>
</template>
<script setup>
import '../../../style/components/Transition.scss'
import useNavbar from "../../composables/useNavbar.js";
import Dropdown from "./Dropdown.vue";
import AppLink from "../AppLink.vue";
const {show,toggle,blur,focus}=useNavbar()

window.addEventListener('click',e=>{
  if(!e.target.classList.contains('input') && !e.target.classList.contains('bi-search')){
    show.value=false
  }

})

</script>
