<template>
    <aside :class="isUnder1200 && {'translate-x-0':props.isActive}" class="sidebar relative z-10">
      <h6 class="text-gray-400 px-1.5 pt-2 pb-1 font-700">Main</h6>
      <ul>
        <SidebarItem ref="side_item" v-for="(item,index) in sidebarMainData" :key="index"
                     :id="item.id"
                     :title="item.title"
                     :icon="item.icon"
                     :is-open="item.isOpen"
                     :sub-menu-list="item.subMenuList"
                     :has-sub="item.hasSub ?? true"
                     :is-active="props.isActive"

        />
      </ul>
      <h6 class="text-gray-400 px-1.5 pt-2 pb-1 font-700">Docs</h6>
      <ul>
        <SidebarItem ref="side_item" v-for="(item,index) in sidebarDocsData" :key="index"
                     :id="item.id"
                     :title="item.title"
                     :icon="item.icon"
                     :is-open="item.isOpen"
                     :sub-menu-list="item.subMenuList"
                     :has-sub="item.hasSub"
                     :link="item.to"
                     :is-active="props.isActive"

        />
      </ul>
    </aside>
</template>

<script setup>
import SidebarItem from "./SidebarItem.vue";
import {ref} from "vue";
import {sidebarMainData,sidebarDocsData} from '../../composables/Data/useSidebarData.js'
/////////////////////////////////////////////////////////////
const props=defineProps(['isActive'])
const isUnder1200=window.innerWidth < 1200
const side_item=ref(null)



</script>

