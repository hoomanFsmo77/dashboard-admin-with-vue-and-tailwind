<template>
  <select @change="handleInput" ref="selectTag" class="selectBox selectBox-sm">
    <option v-for="item in opt" :value="item">
      {{item}}
    </option>
  </select>
</template>

<script>
export default {
  name: "SelectBox",
  props:['opt','value'],
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