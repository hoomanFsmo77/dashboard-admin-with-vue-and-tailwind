<template>
    <div class="shadow-card rounded-10 bg-white ">
       <div class="card_title p-2 flex items-center justify-between">
          <span class="uppercase tracking-widest text-primary-dark text-[0.87rem]">{{title}}</span>
          <div class="relative">
            <NavbarButton
                          @show="toggleFocus($event)"
                          icon="bi bi-three-dots-vertical !text-1.2 card-btn"
                          badge="!w-0 !h-0"
                          :active="undefined"
            />
            <Transition name="show">
                <Dropdown v-if="show" width="160px" top="54px">
                  <li class="dropdown-hover !py-[0.45rem]">
                    <AppLink to="#" class="dropdown-card">
                      <i class="bi bi-arrows-angle-expand text-0.875 text-gray-700"></i>
                      <span class="text-0.875 mr-auto text-gray-700">Expand</span>
                    </AppLink>
                  </li>
                  <li class="dropdown-hover !py-[0.45rem]">
                    <AppLink to="#" class="dropdown-card">
                      <i class="bi bi-fullscreen-exit text-0.875 text-gray-700"></i>
                      <span class="text-0.875 mr-auto text-gray-700">Minimize</span>
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
       </div>
      <div class="divider !mt-0"></div>
      <div class="card_body px-1">
          <slot/>
      </div>
    </div>
</template>

<script setup>
import NavbarButton from "../Header/NavbarButton.vue";
import useNavbar from "../../composables/useNavbar.js";
import Dropdown from "../Header/Dropdown.vue";
import AppLink from "./AppLink.vue";
////////////////////////////////////////////////
let props=defineProps(['title'])
const {show,toggleFocus} = useNavbar()


</script>

<style scoped>

</style>