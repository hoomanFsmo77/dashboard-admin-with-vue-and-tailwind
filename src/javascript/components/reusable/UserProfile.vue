<template>
  <div class="user-profile " :style="{height:height,width:width}">
    <img :src="src" :class="imgClass"  class="m-auto" :width="imageWidth" alt="">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  props:['src','imageWidth','height','width','imgClass']
}
</script>

<style scoped>

</style>