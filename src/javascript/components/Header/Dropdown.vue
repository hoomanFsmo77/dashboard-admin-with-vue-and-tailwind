<template >
  <div  class="dropdown ">
      <ul class="flex w-full flex-col [&_li]:px-[0.9rem] [&_li]:cursor-pointer [&_li]:py-0.65 [&_a]:inline-block [&_a]:w-full  ">
          <slot ></slot>
      </ul>
  </div>
</template>

<script >
export default {
  props:['width','top'],

}

</script>
<style lang="css">
@tailwind components;

.dropdown{
  width: v-bind(width);
  top: v-bind(top);
  @apply absolute bg-white  right-0 shadow-[0_5px_15px_rgba(0,0,0,0.19)] py-0.5 z-30;
}


</style>