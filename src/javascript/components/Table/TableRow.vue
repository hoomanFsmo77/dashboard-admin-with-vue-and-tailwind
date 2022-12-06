<template>
  <tr class="table-hover " >
    <td>
      <div class="p-1 px-1.3 flex items-center gap-1">
        <UserProfile width="50px" height="50px" image-width="40" :src="data.image"/>
        <div>
          <span class="text-1 font-600">{{data.name}}</span>
          <br>
          <span class="text-[0.85rem] text-gray-600">{{data.email}}</span>
        </div>
      </div>
    </td>
    <td>
      <div class="p-1 px-1.3">
        <span class="text-1 font-600">{{data.companyName1}}</span>
        <br>
        <span class="text-[0.9rem] text-gray-600">{{ data.companyName2 }}</span>
      </div>
    </td>
    <td>
          <span class="category-card "
                :class="{
            'bg-yellow-300 text-yellow-700':data.statusClass==='yellow',
            'bg-indigo-300 text-indigo-700':data.statusClass==='indigo',
            'bg-red-300 text-red-700':data.statusClass==='red',
            'bg-green-300 text-green-700':data.statusClass==='green',
          }">
            <i class="bi bi-circle-fill text-0.5 mr-[0.3rem]"></i>
            <span class="text-[0.7rem]">{{data.status}}</span>
          </span>
    </td>
    <td>
      <div class="flex items-center gap-0.5">
        <span>{{data.progress}}</span>
        <div class="progress-bar"><div :style="{width:data.progress}" class="inner  bg-indigo-700"></div></div>
      </div>
    </td>
    <td>
      <div class="pl-1 relative flex justify-between items-center pr-1">
            <span>
            {{data.date}}
           </span>
        <NavbarButton
            @show="toggleFocus($event)"
            icon="bi bi-three-dots-vertical !text-1.2 card-btn"
            badge="!w-0 !h-0"
            :active="undefined"
        />
        <Transition name="show">
          <Dropdown v-if="show" width="160px" top="-80px">
            <li class="dropdown-hover !py-[0.45rem]">
              <AppLink to="#" class="dropdown-card">
                <i class="bi bi-arrows-angle-expand text-0.875 text-gray-700"></i>
                <span class="text-0.875 mr-auto text-gray-700">Expand</span>
              </AppLink>
            </li>
            <li class="dropdown-hover !py-[0.45rem]">
              <AppLink to="#" class="dropdown-card">
                <i class="bi bi-arrow-clockwise text-0.875 text-gray-700"></i>
                <span class="text-0.875 mr-auto text-gray-700">Reload</span>
              </AppLink>
            </li>
            <li class="dropdown-hover !py-[0.45rem]">
              <AppLink to="#" class="dropdown-card">
                <i class="bi bi-trash  text-0.875 text-gray-700"></i>
                <span class="text-0.875 mr-auto text-gray-700">Remove</span>
              </AppLink>
            </li>
          </Dropdown>
        </Transition>
      </div>

    </td>
  </tr>

</template>

<script setup>
import UserProfile from '../reusable/UserProfile.vue'
import NavbarButton from '../Header/NavbarButton.vue'
import Dropdown from '../Header/Dropdown.vue'
import AppLink from '../reusable/AppLink.vue'
import useNavbar from "../../composables/useNavbar.js";
let props=defineProps(['data'])
const {show,toggleFocus} = useNavbar()


</script>

<style scoped>
@tailwind components;
@layer components {
  .table-hover{
    @apply hover:bg-gray-200 transition-all;
  }
  .show-enter-active,.show-leave-active{
    @apply transition-all ease-in-out duration-300;
  }
  .show-enter-from,.show-leave-to{
    @apply opacity-0 top-[-70px];

  }
  .show-enter-to,.show-leave-from{
    @apply opacity-100 top-[-80px];
  }
}
</style>