<template>
  <select v-bind="$props" class="selectBox selectBox-sm">
    <option v-for="item in opt" :value="item">
      {{item}}
    </option>
  </select>
</template>

<script>
export default {
  name: "SelectBox",
  props:['opt']
}
</script>

<style scoped>

</style>