<template>
  <Header @sidebar="activeSidebar($event)"/>
  <div class="grid xlg:grid-cols-[212px_1fr] transition-all grid-cols-[0_1fr]"
       :class="{'!grid-cols-[89px_1fr]':isActive}"
  >
    <Sidebar :is-active="isActive"/>
    <router-view></router-view>
  </div>

</template>

<script setup>
/////////// main style
import '../style/App.scss';
import '../assets/d_logo.png'
////////// components
import Header from './components/Header.vue'
import Sidebar from "./components/Sidebar/Sidebar.vue";
import {ref,onMounted} from "vue";
import {useRouter} from 'vue-router'
const isActive=ref(false)
const router=useRouter()
const activeSidebar = e => {
  isActive.value=e.showSidebar
}


onMounted(()=>{
  router.push({
    name:'default'
  })
})


</script>

