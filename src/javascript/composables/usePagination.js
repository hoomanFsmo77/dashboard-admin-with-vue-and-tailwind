import {ref} from "vue";


export default (tableData)=>{
    let itemInOne=ref(5)
    let totalPages=ref(Math.ceil(tableData.td.length / Number(itemInOne.value)))
    let currentPage=ref(1)
    let searchedText=ref('')

    const changeItemInOne = e => {
        itemInOne.value=Number(e.target.value)
        totalPages.value=Math.ceil(tableData.td.length / itemInOne.value)
        currentPage.value=1
    }

    const paginationHandler = page => {
      currentPage.value=page
    }
    const nextPage = () => {
      currentPage.value++
        if(currentPage.value>totalPages.value || totalPages.value===1){
            currentPage.value=1
        }

    }
    const prevPage = () => {
        currentPage.value--
        if(currentPage.value<1 || totalPages.value===1){
            currentPage.value=totalPages.value
        }
    }
    const searchHandler = e => {
        searchedText.value=e.target.value
    }

    return {itemInOne,totalPages,paginationHandler,nextPage,prevPage,currentPage,changeItemInOne,searchHandler,searchedText}
}