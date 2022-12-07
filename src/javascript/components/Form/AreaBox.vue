<template>
  <label v-if="label" :for="id" class="block mb-0.5 text-gray-700 font-500 text-1">
    {{label}}
  </label>
  <textarea
      :id="id"
      v-bind="$attrs"
      type="text"
      class="input group-focus/item:ring-4 peer-focus:ring-4 "
      :placeholder="placeholder"
      :rows="row"
  ></textarea>
  <span v-if="hint" class="inline-block mt-0.5 text-gray-700 text-[0.8rem]">{{hint}}</span>
</template>

<script>
export default {
  name: "inputBox",
  props:['placeholder','label','id','hint','row']
}
</script>

