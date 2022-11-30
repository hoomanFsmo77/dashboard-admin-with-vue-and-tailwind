<template>
  <header class="shadow-xl">
    <div class="container flex justify-between items-center py-1.2 px-1 sm:px-0">
      <div>
        <i class="fa-solid fa-align-justify text-secondary-gray text-1.5 cursor-pointer"></i>
      </div>
      <AppLink class="text-primary-indigo hover:text-indigo-800 transition-all font-700 text-1 cursor-pointer lg:ml-auto lg:mr-1.5 mr-auto ml-1.5 sm:inline-block hidden"  to="#" >
        HOOMAN <span class="hidden md:inline-block">DASHBOARD</span>
      </AppLink>
      <nav class="flex flex-row-reverse items-center gap-2">
        <NavItemUser/>
        <NavItemNotification />
        <NavItemStatistic/>
        <NavItemSearch/>
      </nav>

    </div>
  </header>
</template>

<script setup>
import NavItemUser from '../components/Navbar/NavItemUser.vue'
import NavItemNotification from '../components/Navbar/NavItemNotification.vue'
import NavItemStatistic from "./Navbar/NavItemStatistic.vue";
import NavItemSearch from "./Navbar/NavItemSearch.vue";
import AppLink from "./AppLink.vue";


</script>
