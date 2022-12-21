<template>
  <Header @sidebar="activeSidebar($event)"/>
  <div class="grid xlg:grid-cols-[212px_1fr] transition-all grid-cols-[0_1fr]"
       :class="{'!grid-cols-[89px_1fr]':isActive}"
  >
    <Sidebar :is-active="isActive"/>
    <main class="flex flex-col justify-between bg-[#f8f9fa]">
      <router-view></router-view>
      <Footer/>
    </main>
  </div>
</template>

<script setup>
/////////// main style
import '../style/App.scss';
import '../assets/d_logo.png'
import 'v-calendar/dist/style.css';
import 'vue3-photo-preview/dist/index.css';
import 'ladda/dist/ladda-themeless.min.css'
////////// components
import Header from './components/Header/Header.vue'
import Sidebar from "./components/Sidebar/Sidebar.vue";
import Footer from './components/Footer.vue'
import {ref} from "vue";
const isActive=ref(false)
const activeSidebar = e => {
  isActive.value=e.showSidebar
}


</script>

