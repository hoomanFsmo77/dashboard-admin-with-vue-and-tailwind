<template>
  <div class="relative">
    <NavbarButton :active="undefined" icon="bi bi-bell-fill " @show="toggleFocus">
      10
    </NavbarButton>
   <Transition name="show">
     <Dropdown v-if="show" width="210px" top="54px">
        <li class=" dropdown-hover">
          <AppLink to="#" class="dropdown-card">
            <UserProfile img-class="m-auto" height="43px" width="45px" image-width="32" src="./assets/profile_2.svg"/>
            <div>
              <span class="dropdown-card-name">Json Doe</span>
              <span class="dropdown-card-message">Sent you a message</span>
            </div>
          </AppLink>
        </li>
        <li class=" dropdown-hover">
          <AppLink to="#" class="dropdown-card">
            <UserProfile img-class="m-auto" height="43px" width="45px" image-width="32" src="./assets/profile_3.svg"/>
            <div>
              <span class="dropdown-card-name">Frank Williams</span>
              <span class="dropdown-card-message">Sent you a message</span>
            </div>
          </AppLink>
        </li>
        <li class=" dropdown-hover">
          <AppLink to="#" class="dropdown-card">
            <UserProfile img-class="m-auto" height="43px" width="45px" image-width="32" src="./assets/profile_4.svg"/>
            <div>
              <span class="dropdown-card-name">Ashley Wood</span>
              <span class="dropdown-card-message">Sent you a message</span>
            </div>
          </AppLink>
        </li>
       <div class="divider"></div>
       <li class="dropdown-hover text-center">
          <span class="text-0.75 text-gray-500 font-700 ">VIEW ALL MESSAGES</span>
       </li>
     </Dropdown>
   </Transition>
  </div>
</template>

<script setup>
import useNavbar from "../../composables/useNavbar.js";
import Dropdown from "./Dropdown.vue";
import '../../../style/components/Transition.scss'
import AppLink from "../reusable/AppLink.vue";
import UserProfile from "../reusable/UserProfile.vue";
import NavbarButton from "./NavbarButton.vue";
///////////////////////////////////////////////////
const {show,toggleFocus}=useNavbar()


</script>

