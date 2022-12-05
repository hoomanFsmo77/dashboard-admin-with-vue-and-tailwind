<template>
  <a :href="to" v-bind="$attrs" v-if="isExternal">
    <slot/>
  </a>
  <router-link
    v-bind="$props"
    v-else
    v-slot="{isActive,navigate,href}"
  >
    <a :href="href" @click="navigate" :class="isActive ? activeClass : inactiveClass">
      <slot/>
    </a>
  </router-link>

</template>

<script>
import {RouterLink} from 'vue-router'

export default {
  name: "AppLink",
  inheritAttrs:false,
  props:{
    ...RouterLink.props,
    inactiveClass:String
  },
  methods:{
    isExternal(){
      return typeof this.to==='string' && this.to.startsWith('http')
    }
  }
}
</script>
