<template>
  <li  class="text-primary-gray">
    <button
        v-if="hasSub"
        ref="sidebarLink"
        @click="showSlide"
        class="sidebar-item focus:bg-indigo-400 focus:text-white focus:hover:bg-indigo-400 "
        :class="{'sidebar-active':currentRoutePath.includes(title),'!flex-col !px-0.5 !pt-0.25':isActive}"
    >
      <i :class="props.icon" class="text-1.5 "></i>
      <span class=" ml-1 text-[0.9rem] font-500" :class="{'!mx-auto !text-[0.75rem]':isActive}">{{title}}</span>
      <i v-if="hasSub" :class="{'rotate-[-90deg]':collapseFlag,'!mx-auto !rotate-[-90deg]':isActive,'!rotate-[90deg]':collapseFlag && isActive}" class="bi bi-chevron-left ml-auto  text-0.75 transition-all  " ></i>
    </button>
    <router-link
        v-else
        :to="link"
        @click="singleLinkItemHandler"
        ref="sidebarLink"
        class="sidebar-item"
        active-class="sidebar-active"
        :class="{'!flex-col !px-0.5 !pt-0.25':isActive}"
    >
      <i :class="props.icon" class="text-1.5 "></i>
      <span class=" ml-1 text-[0.9rem] font-500" :class="{'!mx-auto !text-[0.75rem] !text-center':isActive}">{{title}}</span>
      <i v-if="hasSub" :class="{'rotate-[-90deg]':collapseFlag}" class="bi bi-chevron-left ml-auto text-0.75 transition-all"></i>
    </router-link>
    <ul
        v-collapsible="collapseFlag"
        class="sub_item  w-full shadow-[inset_0_0px_5px_0_rgba(0,0,0,0.1)] bg-[#f8f9fa]"
        :class="{'v-collapse':!currentRoutePath.includes(title)}"
    >
      <li v-for="item in props.subMenuList" >
        <router-link
            @click="addActiveClass"
            exact-active-class="sidebar-exact-active"
            class="sidebar_sub_link" :to="item.to"
            :class="{'!p-0.5  !text-[0.75rem] text-center':isActive}"
        >
          {{item.title}}
          <span v-if="item.isNew" class="category-card bg-sky-500 text-white !py-0.25 !px-[0.3rem] !text-[0.5rem] mx-0.25">NEW</span>
        </router-link>
      </li>
    </ul>
  </li>

</template>

<script setup>
import useSidebar from "../../composables/useSidebar.js";
/////////////////////////////////////////////////////////////////////
let props=defineProps(['title','icon','isOpen','subMenuList','id','hasSub','link','isActive'])
let emit=defineEmits(['close'])
const {show,showSlide,addActiveClass,sidebarLink,currentRoutePath,singleLinkItemHandler,collapseFlag}=useSidebar(props,emit)



</script>

<style lang="scss">

.v-collapse:not(.show) {
  @apply hidden;
}
.collapsing{
  @apply h-0 overflow-hidden transition-all duration-300 ease-in-out
}

.sidebar-active{
  @apply !bg-primary-indigo !text-white hover:!bg-primary-indigo;
}
.sidebar-exact-active{
  @apply !bg-indigo-400 !text-white;
}

</style>