<template>
  <input
      v-bind="$attrs"
      type="text"
      class="input group-focus/item:ring-4 peer-focus:ring-4 "
      :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: "inputBox",
  props:['placeholder']
}
</script>

<style scoped>

</style>