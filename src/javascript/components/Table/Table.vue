<template>
    <table class="w-full" >
      <thead :class="headTheme" class=" bg-primary-dark text-white text-left font-500" v-if="hasHead">
      <tr class=" w-full">
        <TableHead
            v-for="item in th"
            :title="item.title"
            :width="item.width"
            @sort="sortHandler($event)"
            :table-data="td"
        />
      </tr>
      </thead>
      <tbody>
        <TableRow v-for="item in finalArray"
                  :type="type"
                  :image="item.image"
                  :name="item.name"
                  :email="item.email"
                  :company-name1="item.companyName1"
                  :company-name2="item.companyName2"
                  :status-class="item.statusClass"
                  :status="item.status"
                  :progress="item.progress"
                  :date="item.date"
                  :category="item.category"
                  :author="item.author"
                  :price="item.price"
                  :has-head="hasHead"
                  :order-id="item.orderId"
                  :review="item.review"
                  :count="item.count"
                  :product-id="item.productId"
                  :in-stock="item.inStock"
                  :city="item.city"
                  :phone="item.phone"
                  :has-link="hasLink"
                  :orders="item.orders"
                  :link="link"
                  :class="{'even:bg-gray-100':!hasHead}"
                  :company="item.company"
        />
      </tbody>
    </table>
</template>

<script setup>
import TableRow from './TableRow.vue';
import TableHead from './TableHead.vue'
import {ref,watch} from "vue";
let props=defineProps(['th','td','currentPage','itemInOne','searchedText','hasHead','hasLink','link','type','headTheme'])
let finalArray=ref([])
let target=ref(props.td)

const updatePagination = () => {
  finalArray.value=target.value.slice((props.currentPage*props.itemInOne)-props.itemInOne,props.currentPage*props.itemInOne)
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
      finalArray.value=[...props.td].filter(item=>item.name.toUpperCase().startsWith(props.searchedText.toUpperCase())).slice((props.currentPage*props.itemInOne)-props.itemInOne,props.currentPage*props.itemInOne)
    }
)

const sortHandler = e => {
  target.value=e
  updatePagination()
}



</script>

