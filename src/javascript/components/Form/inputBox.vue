<template>
  <template v-if="form===undefined">
    <label v-if="label" :for="id" class="block mb-0.5 text-gray-700 font-500 text-1">
      {{label}}
    </label>
    <div :class="{'flex gap-0 items-center':icon}">
      <i v-if="icon" class="py-[4px] px-[8px] bg-gray-700 text-white rounded-l-4" :class="icon"></i>
      <input
          :id="id"
          v-bind="$attrs"
          :type="type ?? 'text'"
          :class="{'!rounded-l-[0px]':icon}"
          class="input group-focus/item:ring-4 peer-focus:ring-4 "
          :placeholder="placeholder"
      />
    </div>
    <span v-if="hint" class="inline-block mt-0.5 text-gray-700 text-[0.8rem]">{{hint}}</span>
  </template>
  <template v-else>
    <div class="relative" v-bind="$attrs">
      <input
          :id="id"
          :type="type ?? 'text'"
          class="input peer !px-1 !pt-1.2 !pb-[0.8rem] group-focus/item:ring-4 peer-focus:ring-4 w-full"
          required
      />
      <label  :for="id" class="absolute peer-focus:bottom-[59%] text-[0.9rem] text-primary-dark peer-focus:left-[3.5%] peer-focus:text-gray-600 peer-focus:text-0.75 transition-all left-[5%] bottom-[29%] text-gray-700 font-500 text-1 peer-valid:bottom-[59%] peer-valid:left-[3.5%] peer-valid:text-gray-600 peer-valid:text-0.75 ">
        {{label}}
      </label>

    </div>
  </template>


</template>

<script>
export default {
  name: "inputBox",
  props:['placeholder','label','id','hint','icon','type','form']
}
</script>

<style scoped>

</style>