<template>
    <table class="w-full" >
      <thead class=" bg-primary-dark text-white text-left font-500">
      <tr class=" w-full">
        <th @click="toggle($event)" v-for="item in th" colspan="1" class="uppercase tracking-wide text-[0.9rem] cursor-pointer py-1.5 px-1 " :style="{width:item.width}">
          <div class=" md:w-full w-[210px] flex">
            <span class="pl-1">{{item.title}}</span>
            <div  class="flex flex-col !ml-auto  ">
              <i class="bi bi-caret-up-fill text-0.5 opacity-30" ></i>
              <i class="bi bi-caret-down-fill text-0.5 opacity-100" ></i>
            </div>
          </div>
        </th>
      </tr>
      </thead>
      <tbody>
        <TableRow v-for="item in finalArray" :data="item"/>
      </tbody>
    </table>
</template>

<script setup>
import TableRow from './TableRow.vue'
import {ref,watch} from "vue";
let props=defineProps(['th','td','currentPage','itemInOne','searchedText'])
let finalArray=ref([])

const updatePagination = () => {
  finalArray.value=[...props.td].slice((props.currentPage*props.itemInOne)-props.itemInOne,props.currentPage*props.itemInOne)
}


updatePagination()
watch(
    ()=>props.currentPage,
    ()=>{
      updatePagination()
    }
)
watch(
    ()=>props.itemInOne,
    ()=>{
      updatePagination()
    }
)
watch(
    ()=>props.searchedText,
    ()=>{
      finalArray.value=[...props.td].filter(item=>item.name.toUpperCase().startsWith(props.searchedText.toUpperCase()))
    }
)


const toggle=(e)=>{
  let up=e.target.children[1].children[0]
  let down=e.target.children[1].children[1]
  if(down.classList.contains('opacity-100')){
    down.classList.replace('opacity-100','opacity-30')
    up.classList.replace('opacity-30','opacity-100')
  }else{
    up.classList.replace('opacity-100','opacity-30')
    down.classList.replace('opacity-30','opacity-100')
  }
}



</script>

