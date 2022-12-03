<template>
    <aside :class="isUnder1200 && {'translate-x-0':props.isActive}" class="sidebar">
        <h6 class="text-gray-400 px-2 pt-2 pb-1 font-700">Main</h6>
        <SidebarItem title="Dashboards"
                     icon="bi bi-house-door"
                     :is-open="true" :sub-menu-list="dashboardSubMenuList"
                     :is-selected="true"
        />
      <SidebarItem title="CMS"
                     icon="bi bi-book"
                     :is-open="false"
                   :sub-menu-list="cmsSubMenuList"
                   :is-selected="false"
        />
    </aside>
</template>

<script setup>
import SidebarItem from "./SidebarItem.vue";
import {defineProps} from "vue";
const props=defineProps(['isActive'])
const isUnder1200=window.innerWidth < 1200
const dashboardSubMenuList=[
   {title:'default',href:'#',isSelected:true},
  {title:'CMS',href:'#'},
  {title:'E-commerce',href:'#'},
  {title:'Projects',href:'#'},
  {title:'Charts',href:'#'},
]

const cmsSubMenuList =[
  {title:'Posts',href:'#'},
  {title:'Add new post',href:'#'},
  {title:'Categories',href:'#'},
  {title:'Media Library',href:'#'},
]

</script>

