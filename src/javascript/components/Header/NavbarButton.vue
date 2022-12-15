<template>
  <div  class="cursor-pointer sm:p-0 p-0.5 px-0.65 sm:!ring-0 transition-all" :class="{'ring-4 ring-secondary-indigo/50 rounded-4':isFocus}">
    <button
        v-on="active!==undefined ? sidebarButtonHandler : buttonHandlers"
        :class="icon"
        v-bind="$attrs"
        class="text-secondary-gray text-1.5 cursor-pointer hover:text-gray-700 transition-all relative"
    >
      <slot name="content"></slot>
      <span  :class="badge" class="badge "><slot/></span>
    </button>
  </div>
</template>

<script>
export default {
  name: "NavbarButton",
  props:['icon','badge','active'],
  data(){
    return{
      buttonHandlers:{
        focus:this.focusHandler,
        blur:this.blurHandler,
      },
      sidebarButtonHandler:{
        click:this.sidebarHandler
      },
      isFocus:false,

    }
  },
  methods:{
    focusHandler(){
      this.isFocus=true
      this.$emit('show',{focus:this.isFocus})
    },
    blurHandler(){
      this.isFocus=false
      this.$emit('show',{focus:this.isFocus})
    },
    sidebarHandler(){
      this.isFocus=!this.active
    }
  }
}
</script>

<style scoped>

</style>