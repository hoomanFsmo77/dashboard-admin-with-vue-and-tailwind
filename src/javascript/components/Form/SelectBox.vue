<template>
  <label v-if="label" :for="id" class="block mb-0.5 text-gray-700 font-500 text-1">
    {{label}}
  </label>
  <select v-bind="$attrs" :id="id" @change="handleInput" ref="selectTag" class="selectBox selectBox-sm">
    <option v-for="item in opt" :value="item">
      {{item}}
    </option>
  </select>
  <span v-if="hint" class="inline-block mt-0.5 text-gray-700 text-[0.8rem]">{{hint}}</span>

</template>

<script>
export default {
  name: "SelectBox",
  props:['opt','value','hint','id','label'],
  data(){
    return{

    }
  },
  mounted() {
    this.$refs.selectTag.value=this.value
    this.$emit('input',this.$refs.selectTag.value)

  },
  methods:{
    handleInput(){
      this.$emit('input',this.$refs.selectTag.value)
    }
  }
}
</script>

<style scoped>

</style>