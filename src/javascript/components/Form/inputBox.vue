<template>
  <label v-if="label" :for="id" class="block mb-0.5 text-gray-700 font-500 text-1">
    {{label}}
  </label>
  <div :class="{'flex gap-0 items-center':icon}">
    <i v-if="icon" class="py-[4px] px-[8px] bg-gray-700 text-white rounded-l-4" :class="icon"></i>
    <input
        :id="id"
        v-bind="$attrs"
        type="text"
        :class="{'!rounded-l-[0px]':icon}"
        class="input group-focus/item:ring-4 peer-focus:ring-4 "
        :placeholder="placeholder"
    />
  </div>
  <span v-if="hint" class="inline-block mt-0.5 text-gray-700 text-[0.8rem]">{{hint}}</span>
</template>

<script>
export default {
  name: "inputBox",
  props:['placeholder','label','id','hint','icon']
}
</script>

<style scoped>

</style>