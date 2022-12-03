<template>
  <div  class="sidebar_item text-primary-gray">
      <AppLink :class="{'bg-primary-indigo text-white hover:bg-primary-indigo':show && !props.isSelected,'!bg-primary-indigo !text-white':props.isSelected} "
               @click="showSlide"
               to="#"
               class=" sidebar-item">
        <i :class="props.icon" class="text-1.5 "></i>
        <span class=" ml-1 text-[0.9rem] font-500">{{title}}</span>
        <i :class="{'rotate-[-90deg]':show}" class="bi bi-chevron-left ml-auto text-0.75 transition-all"></i>
      </AppLink>
      <Transition name="slide">
        <ul v-if="show"
            class="sub_item w-full shadow-[inset_0_0px_5px_0_rgba(0,0,0,0.1)] bg-[#f8f9fa] overflow-hidden">
          <li v-for="item in props.subMenuList" >
            <AppLink class="sidebar_sub_link" :class="{'!bg-indigo-400 !text-white':item.isSelected}" :to="item.href">
              {{item.title}}
            </AppLink>
          </li>
        </ul>
      </Transition>
  </div>
</template>

<script setup>
import useSidebar from "../../composables/useSidebar.js";
import AppLink from "../AppLink.vue";
let props=defineProps(['title','icon','isOpen','subMenuList','isSelected']);
const {show,showSlide,ulHeight}=useSidebar(props)

</script>

<style scoped lang="scss">
.slide-enter-active,.slide-leave-active{
  @apply transition-all duration-[350ms] ease-linear;
}
.slide-enter-from,.slide-leave-to{
  @apply h-0;
}
.slide-enter-to,.slide-leave-from{
  height: v-bind(ulHeight);
}
</style>