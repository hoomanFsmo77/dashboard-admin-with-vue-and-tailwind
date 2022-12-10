<template>
  <li  class="text-primary-gray">
    <button
        v-if="hasSub"
        ref="sidebarLink"
        @click="showSlide"
        @focus="isFocus=true"
        @blur="isFocus=false"
        class="sidebar-item "
        :class="{'sidebar-active':currentRoutePath.includes(title),'!flex-col !px-0.5 !pt-0.25':isActive,'!bg-indigo-400 !text-white hover:!bg-indigo-400':isFocus}"
    >
      <i :class="props.icon" class="text-1.5 "></i>
      <span class=" ml-1 text-[0.9rem] font-500" :class="{'!mx-auto !text-[0.75rem]':isActive}">{{title}}</span>
      <i v-if="hasSub" :class="{'rotate-[-90deg]':show,'!mx-auto !rotate-[-90deg]':isActive,'!rotate-[90deg]':show && isActive}" class="bi bi-chevron-left ml-auto text-0.75 transition-all" ></i>
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
      <i v-if="hasSub" :class="{'rotate-[-90deg]':show}" class="bi bi-chevron-left ml-auto text-0.75 transition-all"></i>
    </router-link>
    <Transition name="slide" >
      <ul ref="sub_container" v-if="show"
          class="sub_item w-full shadow-[inset_0_0px_5px_0_rgba(0,0,0,0.1)] bg-[#f8f9fa] overflow-hidden">
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
    </Transition>
  </li>

</template>

<script setup>
import {sidebarItem} from "../../composables/useSidebar.js";
/////////////////////////////////////////////////////////////////////
let props=defineProps(['title','icon','isOpen','subMenuList','id','hasSub','link','isActive'])
let emit=defineEmits(['close'])
const {show,showSlide,ulHeight,sub_container,addActiveClass,sidebarLink,currentRoutePath,singleLinkItemHandler,isFocus}=sidebarItem(props,emit)
defineExpose([show])




</script>

<style scoped lang="scss">
.slide-enter-active,.slide-leave-active{
  @apply transition-all duration-[350ms] ease-in-out;
}
.slide-enter-from,.slide-leave-to{
  @apply h-0;
}
.slide-enter-to,.slide-leave-from{
  height: v-bind(ulHeight);
}
.sidebar-active{
  @apply !bg-primary-indigo !text-white hover:!bg-primary-indigo;
}
.sidebar-exact-active{
  @apply !bg-indigo-400 !text-white;
}

</style>