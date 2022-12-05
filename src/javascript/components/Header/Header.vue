<template>
  <header class="shadow-lg">
    <div class="container flex justify-between items-center py-1.2 px-1 sm:px-0">
      <NavbarButton
          :active="isSidebarActive"
          @click="showUpSidebar"
          icon="fa-solid fa-align-justify"
          badge="!w-0 !h-0"
      />
      <AppLink class="text-primary-indigo hover:text-indigo-800 transition-all font-700 text-1 cursor-pointer lg:ml-auto lg:mr-1.5 mr-auto ml-1.5 sm:inline-block hidden"  to="#" >
        HOOMAN <span class="hidden md:inline-block">DASHBOARD</span>
      </AppLink>
      <nav class="flex flex-row-reverse items-center sm:gap-2 gap-1.2">
        <NavItemUser/>
        <NavItemNotification />
        <NavItemStatistic/>
        <NavItemSearch/>
      </nav>

    </div>
  </header>
</template>

<script setup>
import NavItemUser from './NavItemUser.vue'
import NavItemNotification from './NavItemNotification.vue'
import NavItemStatistic from "./NavItemStatistic.vue";
import NavItemSearch from "./NavItemSearch.vue";
import AppLink from "../reusable/AppLink.vue";
import useNavbar from "../../composables/useNavbar.js";
import NavbarButton from "./NavbarButton.vue";
///////////////////////////////////////////////////////////////
let emit=defineEmits(['sidebar'])
const {showUpSidebar,isSidebarActive}=useNavbar(emit)
</script>
