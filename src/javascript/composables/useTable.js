import {ref} from "vue";


export default (emit,tableData)=>{
    let isActive=ref('none')
    let sortedData=ref([])

    const toggle = which => {
        if(isActive.value==='down'){
            isActive.value='up'
        }else if(isActive.value==='up'){
            isActive.value='down'
        }else if(isActive.value==='none'){
            isActive.value='up'
        }
        which==='contact' && sortContact()
        which==='date' && sortDate()
        which==='status' && sortStatus()
        which==='Categories' && sortCategory()
        which==='total price' && sortPrice()
        which==='review' && sortReview()
        which==='order id' && sortOrderId()
    }


    const sortOrderId = () => {
        if(isActive.value==='down'){
            sortedData.value=[...tableData].sort(
                (p1,p2)=> (p1.orderId > p2.orderId) ? 1 : (p1.orderId < p2.orderId) ? -1 : 0)

        }else{
            sortedData.value=[...tableData].sort(
                (p1,p2)=> (p1.orderId < p2.orderId) ? 1 : (p1.orderId > p2.orderId) ? -1 : 0)
        }
        emit('sort',sortedData.value)
    }
    const sortReview = () => {
        if(isActive.value==='down'){
            sortedData.value=[...tableData].sort(
                (p1,p2)=> (p1.review > p2.review) ? 1 : (p1.price < p2.review) ? -1 : 0)

        }else{
            sortedData.value=[...tableData].sort(
                (p1,p2)=> (p1.review < p2.review) ? 1 : (p1.price > p2.review) ? -1 : 0)
        }
        emit('sort',sortedData.value)
    }
    const sortPrice = () => {
        if(isActive.value==='down'){
            sortedData.value=[...tableData].sort(
                (p1,p2)=> (p1.price > p2.price) ? 1 : (p1.price < p2.price) ? -1 : 0)

        }else{
            sortedData.value=[...tableData].sort(
                (p1,p2)=> (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0)
        }
        emit('sort',sortedData.value)
    }
    const sortCategory = () => {
       if(isActive.value==='up'){
           sortedData.value=[...tableData].sort(
               (p1,p2)=> (p1.category==='Uncategorized' || p2.category==='Uncategorized') ? 1 :
                   (p1.category!=='Uncategorized' || p2.category!=='Uncategorized') ? -1 : 0
           )
       }else{
           sortedData.value=[...tableData].sort(
               (p1,p2)=> (p1.category!=='Uncategorized' || p2.category!=='Uncategorized') ? 1 :
                   (p1.category==='Uncategorized' || p2.category==='Uncategorized') ? -1 : 0
           )
       }
        emit('sort',sortedData.value)

    }
    const sortContact = () => {
        if(isActive.value==='down'){
            sortedData.value=[...tableData].sort(
                (p1,p2)=> (p1.progress > p2.progress) ? 1 : (p1.progress < p2.progress) ? -1 : 0)

        }else{
            sortedData.value=[...tableData].sort(
                (p1,p2)=> (p1.progress < p2.progress) ? 1 : (p1.progress > p2.progress) ? -1 : 0)
        }
        emit('sort',sortedData.value)
    }
    const sortDate = () => {
        let target=[...tableData]
        if(isActive.value==='down'){
            sortedData.value=target.sort(
                (p1,p2)=> (p1.date.day > p2.date.day) ? 1 : (p1.date.day < p2.date.day)  ? -1 : 0);
            sortedData.value=target.sort(
                (p1,p2)=> (p1.date.month > p2.date.month) ? 1 : (p1.date.month < p2.date.month)  ? -1 : 0);
            sortedData.value=target.sort(
                (p1,p2)=> (p1.date.year > p2.date.year) ? 1 : (p1.date.year < p2.date.year)  ? -1 : 0);
        }else{
            sortedData.value=target.sort(
                (p1,p2)=> (p1.date.day < p2.date.day)  ? 1 : (p1.date.day > p2.date.day)  ? -1 : 0);
            sortedData.value=target.sort(
                (p1,p2)=> (p1.date.month < p2.date.month)  ? 1 : (p1.date.month > p2.date.month)  ? -1 : 0);
            sortedData.value=target.sort(
                (p1,p2)=> (p1.date.year < p2.date.year)  ? 1 : (p1.date.year > p2.date.year)  ? -1 : 0);
        }
        emit('sort',sortedData.value)
    }
    const sortStatus = () => {
        if(isActive.value==='down'){
            sortedData.value=[...tableData].sort(
                (p1,p2)=> (p1.statusCode > p2.statusCode) ? 1 : (p1.statusCode < p2.statusCode) ? -1 : 0)

        }else{
            sortedData.value=[...tableData].sort(
                (p1,p2)=> (p1.statusCode < p2.statusCode) ? 1 : (p1.statusCode > p2.statusCode) ? -1 : 0)
        }
        emit('sort',sortedData.value)
    }

    return {isActive,toggle}
}