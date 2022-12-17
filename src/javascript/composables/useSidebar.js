import {onMounted, ref,watch} from "vue";
import {useRoute} from "vue-router";


export default (props,emit)=>{
    const show=ref(false)
    let sidebarLink=ref(null)
    const route=useRoute()
    const currentRoutePath=ref('')
    const collapseFlag=ref(false)



    const showSlide = e => {
        currentRoutePath.value=route.path
        collapseFlag.value=!collapseFlag.value
    }

    onMounted(()=>{
        collapseFlag.value=currentRoutePath.value.includes(props.title)
    })


    const addActiveClass = () => {
        document.querySelectorAll('.sidebar-item ').forEach(item=>{item.classList.remove('sidebar-active')})
        if(!sidebarLink.value.classList.contains('sidebar-active')){
            sidebarLink.value.classList.add('sidebar-active')
        }
    }

    watch(
        ()=>route.path,
        ()=>{
            currentRoutePath.value=route.path
            collapseFlag.value=currentRoutePath.value.includes(props.title)
        },{
            immediate:true
    })




    const singleLinkItemHandler = () => {
        document.querySelectorAll('.sidebar-item ').forEach(item=>{item.classList.remove('sidebar-active')})
        showSlide()
    }



    return {show,showSlide,addActiveClass,sidebarLink,currentRoutePath,singleLinkItemHandler,collapseFlag}
}
