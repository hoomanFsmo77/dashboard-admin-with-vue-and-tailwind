<template>
  <Header @sidebar="activeSidebar($event)"/>
  <div class="grid xlg:grid-cols-[212px_1fr] transition-all grid-cols-[0_1fr]"
       :class="{'!grid-cols-[89px_1fr]':isActive}"
  >
    <Sidebar :is-active="isActive"/>
    <main class="route-content">
      <div class="route-preloader" :class="{'hidden':!isLoading}">
        <OrbitSpinner
            class="mt-5"
            :animation-duration="1500"
            :size="200"
            color="rgba(79,70,229,1)"
        />
      </div>
      <router-view ></router-view>
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
import 'ladda/dist/ladda-themeless.min.css';
import 'leaflet/dist/leaflet.css'
import '@vueform/slider/themes/default.css';
////////// components
import Header from './components/Header/Header.vue'
import Sidebar from "./components/Sidebar/Sidebar.vue";
import Footer from './components/Footer.vue'
import { OrbitSpinner} from 'epic-spinners'
import {useRouter} from "vue-router";
import {ref} from "vue";
const isActive=ref(false)
const isLoading=ref(false)
const router=useRouter()
const activeSidebar = e => {
  isActive.value=e.showSidebar
}

router.beforeEach((to,from,next)=>{
  isLoading.value=true
  next()
})

router.beforeResolve((to,from,next)=>{
  isLoading.value=false
  next()
})



</script>

