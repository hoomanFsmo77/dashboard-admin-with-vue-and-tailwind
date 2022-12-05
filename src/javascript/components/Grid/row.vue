<template>
  <div class="row"><slot/></div>
</template>

<script>
export default {
  name: "row",
  props:['colGap','rowGap']
}
</script>

<style lang="scss" scoped>
@tailwind components;
@layer components {
  .row{
    @apply flex flex-wrap py-0.5 my-0.5;
    column-gap: v-bind(colGap);
    row-gap: v-bind(rowGap);
  }
}

</style>